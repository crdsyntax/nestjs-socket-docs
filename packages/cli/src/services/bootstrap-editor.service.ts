import { Project, SyntaxKind } from 'ts-morph';
import * as path from 'path';

export class BootstrapEditorService {
  private project: Project;

  constructor(tsconfigPath: string) {
    this.project = new Project({
      tsConfigFilePath: tsconfigPath,
    });
  }

  async injectBootstrap(mainPath: string) {
    const sourceFile = this.project.getSourceFile(mainPath);
    if (!sourceFile) {
      throw new Error(`Could not find ${mainPath}`);
    }

    // Add import if it doesn't exist
    const importName = 'SocketDocsModule';
    const importPath = '@crdsyntax/nestjs-socket-docs';
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
    const listenCall = bootstrapFn.getDescendantsOfKind(SyntaxKind.CallExpression)
      .find(c => c.getExpression().getFullText().includes('app.listen'));

    if (listenCall) {
      const statement = listenCall.getFirstAncestorByKind(SyntaxKind.ExpressionStatement);
      if (statement) {
        bootstrapFn.insertStatements(statement.getChildIndex(), `await SocketDocsModule.setup(app);`);
      } else {
        listenCall.replaceWithText(`await SocketDocsModule.setup(app);\n${listenCall.getText()}`);
      }
    } else {
      bootstrapFn.addStatements(`await SocketDocsModule.setup(app);`);
    }

    await sourceFile.save();
    return true;
  }
}
