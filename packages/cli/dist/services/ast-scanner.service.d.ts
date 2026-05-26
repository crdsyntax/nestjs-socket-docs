export interface ScannedEvent {
    methodName: string;
    eventName: string;
    payload: string | null;
}
export interface ScannedGateway {
    name: string;
    namespace: string;
    path: string;
    events: ScannedEvent[];
}
export declare class ASTScannerService {
    private project;
    constructor(tsconfigPath: string);
    scanGateways(): ScannedGateway[];
    private getNamespace;
    private getPath;
    private getPropertyValue;
    private scanEvents;
    private getPayloadType;
}
