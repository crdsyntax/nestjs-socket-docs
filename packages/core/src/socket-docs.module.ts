import { INestApplication } from '@nestjs/common';
import { SocketExplorerService } from './explorer/socket-explorer.service';

export class SocketDocsModule {
  static async setup(app: INestApplication) {
    const explorer = app.get(SocketExplorerService);
    explorer.explore();
    // TODO: Setup UI endpoint
  }
}
