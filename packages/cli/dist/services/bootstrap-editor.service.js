"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapEditorService = void 0;
const ts_morph_1 = require("ts-morph");
class BootstrapEditorService {
    constructor(tsconfigPath) {
        this.project = new ts_morph_1.Project({
            tsConfigFilePath: tsconfigPath,
        });
    }
    async injectBootstrap(mainPath) {
        const sourceFile = this.project.getSourceFile(mainPath);
        if (!sourceFile) {
            throw new Error(`Could not find ${mainPath}`);
        }
        // Add import if it doesn't exist
        const importName = 'SocketDocsModule';
        const importPath = '@nestjs-socket-docs/core';
        const existingImport = sourceFile.getImportDeclaration(d => d.getModuleSpecifierValue() === importPath);
        if (!existingImport) {
            sourceFile.addImportDeclaration({
                namedImports: [importName],
                moduleSpecifier: importPath,
            });
        }
        // Find bootstrap function (usually named 'bootstrap')
        const bootstrapFn = sourceFile.getFunction('bootstrap');
        if (!bootstrapFn) {
            throw new Error('Could not find bootstrap function in main.ts');
        }
        // Find app initialization: const app = await NestFactory.create(AppModule);
        const appDeclaration = bootstrapFn.getVariableDeclaration('app');
        if (!appDeclaration) {
            throw new Error('Could not find "app" declaration in bootstrap function');
        }
        // Check if setup already exists
        const fullText = bootstrapFn.getFullText();
        if (fullText.includes('SocketDocsModule.setup(app)')) {
            return false; // Already injected
        }
        // Find app.listen()
        const listenCall = bootstrapFn.getDescendantsOfKind(ts_morph_1.SyntaxKind.CallExpression)
            .find(c => c.getExpression().getFullText().includes('app.listen'));
        if (listenCall) {
            const statement = listenCall.getFirstAncestorByKind(ts_morph_1.SyntaxKind.ExpressionStatement);
            if (statement) {
                bootstrapFn.insertStatements(statement.getChildIndex(), `await SocketDocsModule.setup(app);`);
            }
            else {
                listenCall.replaceWithText(`await SocketDocsModule.setup(app);\n${listenCall.getText()}`);
            }
        }
        else {
            bootstrapFn.addStatements(`await SocketDocsModule.setup(app);`);
        }
        await sourceFile.save();
        return true;
    }
}
exports.BootstrapEditorService = BootstrapEditorService;
