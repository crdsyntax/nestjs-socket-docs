import { SocketExplorerService } from '../src/explorer/socket-explorer.service';
import { MetadataScanner, Reflector } from '@nestjs/core';

describe('SocketExplorerService', () => {
  let service: SocketExplorerService;

  beforeEach(() => {
    const modules = new Map();
    const metadataScanner = new MetadataScanner();
    const reflector = new Reflector();
    service = new SocketExplorerService(modules, metadataScanner, reflector);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty schema when no modules are provided', () => {
    service.explore();
    const schema = service.getSchema();
    expect(schema.gateways).toHaveLength(0);
  });
});
