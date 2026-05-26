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

  static async setup(app: INestApplication | INestApplicationContext): Promise<void> {
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

    this.registerRoutes(app, explorer);
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

  private static registerRoutes(app: INestApplication | INestApplicationContext, explorer: SocketExplorerService): void {
    const httpAdapter = (app as INestApplication).getHttpAdapter?.();
    if (!httpAdapter) {
      console.error("❌ [SocketDocs] Could not find HTTP adapter.");
      return;
    }

    const uiDistPath = path.resolve(__dirname, "../ui-dist");

    // JSON Endpoint
    httpAdapter.get("/socket-docs/json", (_req: unknown, res: unknown) => {
      return httpAdapter.reply(res, explorer.getSchema(), 200);
    });

    // UI Index
    httpAdapter.get("/socket-docs", (req: unknown, res: unknown) => {
      const url: string = httpAdapter.getRequestUrl(req);
      if (!url.endsWith("/")) {
        return httpAdapter.redirect(res, 301, url + "/");
      }
      
      const indexPath = path.join(uiDistPath, "index.html");
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, "utf-8");
        httpAdapter.setHeader(res, "Content-Type", "text/html");
        return httpAdapter.reply(res, content, 200);
      } else {
        return httpAdapter.reply(res, "UI not found. Build the UI package first.", 404);
      }
    });

    // Assets
    httpAdapter.get("/socket-docs/assets/:file", (req: RequestWithParams, res: { sendFile?: (p: string) => void }) => {
      const assetPath = req.params.file;
      const filePath = path.resolve(uiDistPath, "assets", assetPath);
      
      if (fs.existsSync(filePath)) {
        if (typeof res.sendFile === 'function') {
          return res.sendFile(filePath);
        }
        const content = fs.readFileSync(filePath);
        const ext = path.extname(filePath);
        const mime = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
        httpAdapter.setHeader(res, "Content-Type", mime);
        return httpAdapter.reply(res, content, 200);
      } else {
        return httpAdapter.reply(res, "Asset not found", 404);
      }
    });

    console.log("🚀 Socket Docs available at /socket-docs");
  }
}
