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
      console.log(`[SocketDocs] UI Assets Path: ${uiDistPath}`);

      httpAdapter.get("/socket-docs", (req: any, res: any) => {
        if (!req.url.endsWith("/")) {
          const query = req.url.includes("?") ? req.url.substring(req.url.indexOf("?")) : "";
          return res.redirect(301, req.url.split("?")[0] + "/" + query);
        }
        const indexPath = path.join(uiDistPath, "index.html");
        console.log(`[SocketDocs] Serving index from: ${indexPath}`);
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          console.error(`[SocketDocs] Index not found at: ${indexPath}`);
          res
            .status(404)
            .send(`UI not found. Checked path: ${indexPath}`);
        }
      });

      httpAdapter.get("/socket-docs/assets/:file", (req: any, res: any) => {
        const assetPath = req.params.file;
        const filePath = path.join(uiDistPath, "assets", assetPath);
        console.log(`[SocketDocs] Serving asset from: ${filePath}`);
        if (fs.existsSync(filePath)) {
          res.status(200).sendFile(filePath);
        } else {
          console.error(`[SocketDocs] Asset not found at: ${filePath}`);
          res.status(404).send("Asset not found");
        }
      });

      console.log("🚀 Socket Docs available at /socket-docs");
    }
  }
}
