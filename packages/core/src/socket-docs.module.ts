import { INestApplication } from "@nestjs/common";
import { MetadataScanner, ModulesContainer, Reflector } from "@nestjs/core";
import { SocketExplorerService } from "./explorer/socket-explorer.service";
import * as path from "path";
import * as fs from "fs";

export class SocketDocsModule {
  static async setup(app: INestApplication) {
    console.log("--- SocketDocsModule Setup ---");

    const modulesContainer = app.get(ModulesContainer);
    const metadataScanner = app.get(MetadataScanner);
    const reflector = app.get(Reflector);

    const explorer = new SocketExplorerService(
      modulesContainer,
      metadataScanner,
      reflector,
    );
    console.log("[SocketDocs] Exploring modules...");
    explorer.explore();

    const schema = explorer.getSchema();
    console.log(`[SocketDocs] Found ${schema.gateways.length} gateways.`);
    schema.gateways.forEach((g: any) => {
      console.log(`  - Gateway: ${g.name}, Events: ${g.events.length}`);
    });

    const httpAdapter = app.getHttpAdapter();
    if (httpAdapter) {
      httpAdapter.get("/socket-docs/json", (req: any, res: any) => {
        res.status(200).json(explorer.getSchema());
      });

      const uiDistPath = path.join(__dirname, "..", "ui-dist");
      const indexPath = path.join(uiDistPath, "index.html");
      console.log(`[SocketDocs] UI Assets Path: ${uiDistPath}`);
      console.log(`[SocketDocs] Index Path: ${indexPath}`);

      // Serve static assets with a more direct approach
      httpAdapter.get("/socket-docs/assets/:file", (req: any, res: any) => {
        const file = req.params.file;
        const filePath = path.join(uiDistPath, "assets", file);
        if (fs.existsSync(filePath)) {
          return res.sendFile(filePath);
        }
        res.status(404).send("Asset not found");
      });

      httpAdapter.get("/socket-docs", (req: any, res: any) => {
        if (!req.url.endsWith("/")) {
          const query = req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : "";
          return res.redirect(301, req.url.split("?")[0] + "/" + query);
        }
        
        if (fs.existsSync(indexPath)) {
          const html = fs.readFileSync(indexPath, "utf-8");
          return res.type("text/html").send(html);
        } else {
          console.error(`[SocketDocs] Index not found at: ${indexPath}`);
          return res.status(404).send(`UI not found. Checked path: ${indexPath}`);
        }
      });

      console.log("🚀 Socket Docs available at /socket-docs");
    }
  }
}
