import { MetadataScanner, Reflector } from '@nestjs/core';
import { SocketDocsSchema } from '../interfaces/schema.interface';
import { NestModule } from '../socket-docs.module';
export declare class SocketExplorerService {
    private readonly modules;
    private readonly metadataScanner;
    private readonly reflector;
    private schema;
    constructor(modules: Map<string, NestModule>, metadataScanner: MetadataScanner, reflector: Reflector);
    getSchema(): SocketDocsSchema;
    explore(): void;
    private isPrimitive;
    private isSocketType;
}
//# sourceMappingURL=socket-explorer.service.d.ts.map