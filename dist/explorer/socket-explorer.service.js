"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketExplorerService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const metadata_constants_1 = require("../constants/metadata.constants");
let SocketExplorerService = class SocketExplorerService {
    constructor(discoveryService, metadataScanner, reflector) {
        this.discoveryService = discoveryService;
        this.metadataScanner = metadataScanner;
        this.reflector = reflector;
    }
    onModuleInit() {
        this.explore();
    }
    explore() {
        const wrappers = this.discoveryService.getProviders();
        const socketControllers = wrappers.filter(wrapper => {
            const { instance } = wrapper;
            if (!instance)
                return false;
            return this.reflector.get(metadata_constants_1.SOCKET_CONTROLLER_METADATA, instance.constructor);
        });
        socketControllers.forEach(wrapper => {
            const { instance } = wrapper;
            const prototype = Object.getPrototypeOf(instance);
            this.metadataScanner.scanFromPrototype(instance, prototype, methodName => {
                const eventMetadata = this.reflector.get(metadata_constants_1.SOCKET_EVENT_METADATA, instance[methodName]);
                if (eventMetadata) {
                    console.log(`Found event: ${eventMetadata.event} in ${instance.constructor.name}`);
                    const payloadMetadata = Reflect.getMetadata(metadata_constants_1.SOCKET_PAYLOAD_METADATA, instance, methodName);
                    if (payloadMetadata) {
                        console.log(`Payload for ${methodName}:`, payloadMetadata);
                    }
                }
            });
        });
    }
};
exports.SocketExplorerService = SocketExplorerService;
exports.SocketExplorerService = SocketExplorerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.DiscoveryService,
        core_1.MetadataScanner,
        core_1.Reflector])
], SocketExplorerService);
//# sourceMappingURL=socket-explorer.service.js.map