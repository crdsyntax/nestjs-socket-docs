import { Project, SyntaxKind, ClassDeclaration, ObjectLiteralExpression, MethodDeclaration } from 'ts-morph';
import * as path from 'path';

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

export class ASTScannerService {
  private project: Project;

  constructor(tsconfigPath: string) {
    console.log(`[ASTScanner] Initializing with config: ${tsconfigPath}`);
    this.project = new Project({
      tsConfigFilePath: tsconfigPath,
      skipAddingFilesFromTsConfig: false,
    });
    
    const rootDir = path.dirname(tsconfigPath);
    this.project.addSourceFilesAtPaths(path.join(rootDir, '**/*.ts'));
  }

  scanGateways(): ScannedGateway[] {
    const sourceFiles = this.project.getSourceFiles();
    console.log(`[ASTScanner] Scanning ${sourceFiles.length} files...`);
    
    const gateways: ScannedGateway[] = [];

    for (const sourceFile of sourceFiles) {
      const classes = sourceFile.getClasses();
      for (const cls of classes) {
        const decorators = cls.getDecorators();
        const isGateway = decorators.some(d => 
          ['WebSocketGateway', 'SocketController'].includes(d.getName())
        );

        if (isGateway) {
          console.log(`[ASTScanner] Found gateway class: ${cls.getName()}`);
          gateways.push({
            name: cls.getName() || 'UnknownGateway',
            namespace: this.getNamespace(cls),
            path: this.getPath(cls),
            events: this.scanEvents(cls),
          });
        }
      }
    }
    return gateways;
  }

  private getNamespace(cls: ClassDeclaration): string {
    const decorator = cls.getDecorator('WebSocketGateway') || cls.getDecorator('SocketController');
    if (!decorator) return '/';
    
    const args = decorator.getArguments();
    if (args.length === 0) return '/';

    let namespace = '/';

    for (const arg of args) {
      if (arg.getKind() === SyntaxKind.StringLiteral) {
        namespace = arg.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
      } else if (arg.getKind() === SyntaxKind.ObjectLiteralExpression) {
        const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        const nsVal = this.getPropertyValue(obj, 'namespace') || this.getPropertyValue(obj, 'name');
        if (nsVal) namespace = nsVal;
      }
    }

    // If the only argument is a number (port), it's not a namespace
    if (args.length === 1 && args[0].getKind() === SyntaxKind.NumericLiteral) {
      return '/';
    }

    // Ensure it starts with /
    if (namespace && !namespace.startsWith('/')) {
      namespace = `/${namespace}`;
    }

    return namespace || '/';
  }

  private getPath(cls: ClassDeclaration): string {
    const decorator = cls.getDecorator('WebSocketGateway');
    if (!decorator) return '/socket.io';
    
    const args = decorator.getArguments();
    for (const arg of args) {
      if (arg.getKind() === SyntaxKind.ObjectLiteralExpression) {
        const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        const pathVal = this.getPropertyValue(obj, 'path');
        if (pathVal) return pathVal;
      }
    }
    return '/socket.io';
  }

  private getPropertyValue(obj: ObjectLiteralExpression, name: string): string | null {
    const prop = obj.getProperty(name);
    if (prop && prop.getKind() === SyntaxKind.PropertyAssignment) {
      const init = prop.asKindOrThrow(SyntaxKind.PropertyAssignment).getInitializer();
      if (init) {
        if (init.getKind() === SyntaxKind.StringLiteral) {
          return init.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
        }
        return init.getText().replace(/['"]/g, '');
      }
    }
    return null;
  }

  private scanEvents(cls: ClassDeclaration): ScannedEvent[] {
    const methods = cls.getMethods();
    const events: ScannedEvent[] = [];

    for (const method of methods) {
      const decorator = method.getDecorator('SubscribeMessage') || method.getDecorator('SocketEvent');
      if (decorator) {
        const args = decorator.getArguments();
        let eventName = 'unknown';
        
        if (args.length > 0) {
          const arg = args[0];
          if (arg.getKind() === SyntaxKind.StringLiteral) {
            eventName = arg.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
          } else if (arg.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
            eventName = this.getPropertyValue(obj, 'event') || 'unknown';
          } else {
            eventName = arg.getText().replace(/['"]/g, '');
          }
        }

        events.push({
          methodName: method.getName(),
          eventName,
          payload: this.getPayloadType(method),
        });
      }
    }
    return events;
  }

  private getPayloadType(method: MethodDeclaration): string | null {
    const params = method.getParameters();
    for (const param of params) {
      if (param.getDecorator('SocketPayload') || param.getDecorator('MessageBody')) {
        return param.getType().getText();
      }
    }
    return null;
  }
}
