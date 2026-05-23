import { INestApplicationContext } from '@nestjs/common';
import { MetadataScanner, Reflector } from '@nestjs/core';
import { SocketExplorerService } from './explorer/socket-explorer.service';
import * as path from 'path';
import * as fs from 'fs';

export class SocketDocsModule {
  static async setup(app: any) {
    console.log('--- SocketDocsModule Setup ---');
    
    const container = app.container;
    if (!container) {
      console.error('❌ Could not find NestJS container.');
      return;
    }

    const modules = container.getModules();
    const metadataScanner = new MetadataScanner();
    const reflector = new Reflector();
    
    const explorer = new SocketExplorerService(modules, metadataScanner, reflector);
    explorer.explore();

    const httpAdapter = app.getHttpAdapter();
    if (httpAdapter) {
      // JSON Endpoint
      httpAdapter.get('/socket-docs/json', (req: any, res: any) => {
        res.status(200).json(explorer.getSchema());
      });

      // UI Static Files
      const uiDistPath = path.resolve(__dirname, '../ui-dist');
      
      httpAdapter.get('/socket-docs', (req: any, res: any) => {
        if (!req.url.endsWith('/')) {
          return res.redirect(301, req.url + '/');
        }
        const indexPath = path.join(uiDistPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          res.status(200).type('text/html').send(fs.readFileSync(indexPath, 'utf-8'));
        } else {
          res.status(404).send('UI not found. Make sure @nestjs-socket-docs/ui is built.');
        }
      });

      // Serve assets
      httpAdapter.get('/socket-docs/assets/:file', (req: any, res: any) => {
        const assetPath = req.params.file;
        const filePath = path.join(uiDistPath, 'assets', assetPath);
        if (fs.existsSync(filePath)) {
          res.status(200).sendFile(filePath);
        } else {
          res.status(404).send('Asset not found');
        }
      });

      console.log('🚀 Socket Docs available at /socket-docs');
    }
  }
}
