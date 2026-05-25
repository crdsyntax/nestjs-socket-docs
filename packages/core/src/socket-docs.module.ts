import { INestApplicationContext } from "@nestjs/common";
import { MetadataScanner, Reflector } from "@nestjs/core";
import { SocketExplorerService } from "./explorer/socket-explorer.service";
import * as path from "path";
import * as fs from "fs";

export class SocketDocsModule {
  static async setup(app: any) {
    console.log("--- SocketDocsModule Setup ---");

    const container = app.container;
    if (!container) {
      console.error("❌ [SocketDocs] Could not find NestJS container.");
      return;
    }

    const modules = container.getModules();
    const metadataScanner = new MetadataScanner();
    const reflector = new Reflector();

    const explorer = new SocketExplorerService(
      modules,
      metadataScanner,
      reflector,
    );
    console.log("[SocketDocs] Exploring modules...");
    try {
      explorer.explore();
    } catch (err) {
      console.error("❌ [SocketDocs] Error during module exploration:", err);
    }

    const uiDistPath = path.resolve(__dirname, "../ui-dist");
    console.log(`[SocketDocs] UI distribution path: ${uiDistPath}`);

    const schema = explorer.getSchema();
    console.log(`[SocketDocs] Found ${schema.gateways.length} gateways.`);
    schema.gateways.forEach((g: any) => {
      console.log(`  - Gateway: ${g.name}, Events: ${g.events.length}`);
    });

    const httpAdapter = app.getHttpAdapter();
    if (httpAdapter) {
      // JSON Endpoint
      httpAdapter.get("/socket-docs/json", (req: any, res: any) => {
        console.log(`[SocketDocs] Serving schema to: ${httpAdapter.getRequestUrl(req)}`);
        return httpAdapter.reply(res, explorer.getSchema(), 200);
      });

      // UI Index
      httpAdapter.get("/socket-docs", (req: any, res: any) => {
        const url = httpAdapter.getRequestUrl(req);
        if (!url.endsWith("/")) {
          return httpAdapter.redirect(res, 301, url + "/");
        }
        
        const indexPath = path.join(uiDistPath, "index.html");
        if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, "utf-8");
          httpAdapter.setHeader(res, "Content-Type", "text/html");
          return httpAdapter.reply(res, content, 200);
        } else {
          console.error(`[SocketDocs] UI Index not found at: ${indexPath}`);
          return httpAdapter.reply(res, "UI not found. Make sure @nestjs-socket-docs/ui is built.", 404);
        }
      });

      // Assets
      httpAdapter.get("/socket-docs/assets/:file", (req: any, res: any) => {
        const assetPath = req.params.file;
        const filePath = path.resolve(uiDistPath, "assets", assetPath);
        
        if (fs.existsSync(filePath)) {
          console.log(`[SocketDocs] Serving asset: ${assetPath}`);
          // Note: Express sendFile is usually fine, but let's try to be safe
          if (typeof res.sendFile === 'function') {
            return res.sendFile(filePath);
          }
          // Fallback for non-express adapters (though user is on Express)
          const content = fs.readFileSync(filePath);
          const ext = path.extname(filePath);
          const mime = ext === '.js' ? 'application/javascript' : ext === '.css' ? 'text/css' : 'application/octet-stream';
          httpAdapter.setHeader(res, "Content-Type", mime);
          return httpAdapter.reply(res, content, 200);
        } else {
          console.error(`[SocketDocs] Asset not found at: ${filePath}`);
          return httpAdapter.reply(res, "Asset not found", 404);
        }
      });

      console.log("🚀 Socket Docs available at /socket-docs");
    } else {
      console.error("❌ [SocketDocs] Could not find HTTP adapter.");
    }
  }
}
