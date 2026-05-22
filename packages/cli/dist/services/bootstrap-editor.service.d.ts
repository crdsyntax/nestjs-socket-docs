export declare class BootstrapEditorService {
    private project;
    constructor(tsconfigPath: string);
    injectBootstrap(mainPath: string): Promise<boolean>;
}
