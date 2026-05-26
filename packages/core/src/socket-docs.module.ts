import { INestApplication, INestApplicationContext } from "@nestjs/common";
import { MetadataScanner, Reflector } from "@nestjs/core";
import { SocketExplorerService } from "./explorer/socket-explorer.service";
import { StandaloneServer, StandaloneOptions } from "./runtime/standalone";
import { SocketDocsSchema } from "./interfaces/schema.interface";
import * as path from "path";
import * as fs from "fs";

export interface NestContainer {
  getModules(): Map<string, NestModule>;
}

export interface NestModule {
  providers: Map<string, NestProviderWrapper>;
}

export interface NestProviderWrapper {
  instance: object | null;
}

export interface RequestWithParams {
  params: { file: string };
}

export interface SocketDocsOptions {
  auth?: {
    user: string;
    pass: string;
  };
}

export class SocketDocsModule {
  /**
   * Start a standalone development server.
   * Useful for testing the UI with a specific schema.
   */
  static async dev(schema: SocketDocsSchema, options: StandaloneOptions = {}): Promise<StandaloneServer> {
    const server = new StandaloneServer(schema, options);
    server.start();
    return server;
  }

  static async setup(app: INestApplication | INestApplicationContext, options: SocketDocsOptions = {}): Promise<void> {
    console.log("--- SocketDocsModule Setup ---");

    const explorer = this.createExplorer(app);
    if (!explorer) return;

    console.log("[SocketDocs] Exploring modules...");
    try {
      explorer.explore();
    } catch (err: unknown) {
      console.error("❌ [SocketDocs] Error during module exploration:", err);
    }

    const schema = explorer.getSchema();
    this.logDiscovery(schema);

    this.registerRoutes(app, explorer, options);
  }

  private static createExplorer(app: INestApplication | INestApplicationContext): SocketExplorerService | null {
    const container = (app as unknown as { container: NestContainer }).container;
    if (!container) {
      console.error("❌ [SocketDocs] Could not find NestJS container.");
      return null;
    }

    const modules = container.getModules();
    const metadataScanner = new MetadataScanner();
    const reflector = new Reflector();

    return new SocketExplorerService(modules, metadataScanner, reflector);
  }

  private static logDiscovery(schema: SocketDocsSchema): void {
    console.log(`[SocketDocs] Found ${schema.gateways.length} gateways.`);
    schema.gateways.forEach((g) => {
      console.log(`  - Gateway: ${g.name}, Events: ${g.events.length}`);
    });
  }

  private static registerRoutes(app: INestApplication | INestApplicationContext, explorer: SocketExplorerService, options: SocketDocsOptions): void {
    const httpAdapter = (app as INestApplication).getHttpAdapter?.();
    if (!httpAdapter) {
      console.error("❌ [SocketDocs] Could not find HTTP adapter.");
      return;
    }

    const checkAuth = (req: unknown, res: unknown): boolean => {
      if (!options.auth) return true;

      const authHeader = (httpAdapter as any).getRequestHeader(req, "authorization");
      if (!authHeader) {
        httpAdapter.setHeader(res, "WWW-Authenticate", 'Basic realm="SocketDocs"');
        (httpAdapter as any).reply(res, "Unauthorized", 401);
        return false;
      }

      const [type, credentials] = authHeader.split(" ");
      if (type !== "Basic" || !credentials) {
        (httpAdapter as any).reply(res, "Unauthorized", 401);
        return false;
      }

      const decoded = Buffer.from(credentials, "base64").toString("utf-8");
      const [user, pass] = decoded.split(":");

      if (user === options.auth.user && pass === options.auth.pass) {
        return true;
      }

      (httpAdapter as any).reply(res, "Unauthorized", 401);
      return false;
    };

    // Robust path resolution for ui-dist using require.resolve
    let uiDistPath = "";
    try {
      // Find the package root by resolving its package.json
      const packageJsonPath = require.resolve("@crdsyntax/nestjs-socket-docs/package.json");
      uiDistPath = path.join(path.dirname(packageJsonPath), "ui-dist");
    } catch (e) {
      // Fallback to manual resolution if require.resolve fails
      const possiblePaths = [
        path.resolve(__dirname, "../ui-dist"),
        path.resolve(__dirname, "../../ui-dist"),
        path.resolve(process.cwd(), "node_modules/@crdsyntax/nestjs-socket-docs/ui-dist"),
      ];
      uiDistPath = possiblePaths.find(p => fs.existsSync(path.join(p, "index.html"))) || possiblePaths[0];
    }
    
    console.log(`[SocketDocs] UI Dist Path resolved to: ${uiDistPath}`);

    // JSON Endpoint
    httpAdapter.get("/socket-docs/json", (req: unknown, res: unknown) => {
      if (!checkAuth(req, res)) return;
      return (httpAdapter as any).reply(res, explorer.getSchema(), 200);
    });

    // UI Index
    httpAdapter.get("/socket-docs", (req: unknown, res: unknown) => {
      if (!checkAuth(req, res)) return;
      
      const url: string = (httpAdapter as any).getRequestUrl(req);
      if (!url.endsWith("/") && !url.includes(".")) {
        return httpAdapter.redirect(res, 301, url + "/");
      }
      
      const indexPath = path.join(uiDistPath, "index.html");
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, "utf-8");
        httpAdapter.setHeader(res, "Content-Type", "text/html");
        return (httpAdapter as any).reply(res, content, 200);
      } else {
        return (httpAdapter as any).reply(res, `UI not found at ${indexPath}. Please ensure the package is correctly installed.`, 404);
      }
    });

    // Assets
    const assetRoute = "/socket-docs/assets/:file";
    httpAdapter.get(assetRoute, (req: RequestWithParams, res: unknown) => {
      if (!checkAuth(req, res)) return;

      const params = req.params as Record<string, string | undefined>;
      const filename = params.file || "";
      const filePath = path.join(uiDistPath, "assets", filename);
      
      if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath);
        const mime = ext === ".js" ? "application/javascript" : ext === ".css" ? "text/css" : "application/octet-stream";
        
        // Read as string for text assets to prevent NestJS from converting Buffers to JSON
        const content = (ext === ".js" || ext === ".css") 
          ? fs.readFileSync(filePath, "utf-8") 
          : fs.readFileSync(filePath);

        httpAdapter.setHeader(res, "Content-Type", mime);
        return (httpAdapter as any).reply(res, content, 200);
      } else {
        console.warn(`[SocketDocs] Asset not found: ${filePath}`);
        return (httpAdapter as any).reply(res, "Asset not found", 404);
      }
    });

    console.log(`🚀 Socket Docs available at /socket-docs (UI path: ${uiDistPath})`);
  }
}
