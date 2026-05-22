export declare class ASTScannerService {
    private project;
    constructor(tsconfigPath: string);
    scanGateways(): {
        name: string | undefined;
        namespace: any;
        events: {
            methodName: any;
            eventName: string;
            payload: any;
        }[];
    }[];
    private getNamespace;
    private scanEvents;
    private getPayloadType;
}
