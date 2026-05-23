import { MetadataScanner, Reflector } from '@nestjs/core';
export declare class SocketExplorerService {
    private readonly modules;
    private readonly metadataScanner;
    private readonly reflector;
    private schema;
    constructor(modules: Map<any, any>, metadataScanner: MetadataScanner, reflector: Reflector);
    getSchema(): any;
    explore(): void;
    private isPrimitive;
    private isSocketType;
}
//# sourceMappingURL=socket-explorer.service.d.ts.map