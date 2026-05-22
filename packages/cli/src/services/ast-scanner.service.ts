import { Project, SyntaxKind } from 'ts-morph';

export class ASTScannerService {
  private project: Project;

  constructor(tsconfigPath: string) {
    this.project = new Project({
      tsConfigFilePath: tsconfigPath,
    });
  }

  scanGateways() {
    const sourceFiles = this.project.getSourceFiles();
    const gateways = [];

    for (const sourceFile of sourceFiles) {
      const classes = sourceFile.getClasses();
      for (const cls of classes) {
        const decorators = cls.getDecorators();
        const isGateway = decorators.some(d => 
          ['WebSocketGateway', 'SocketController'].includes(d.getName())
        );

        if (isGateway) {
          const gatewayData = {
            name: cls.getName(),
            namespace: this.getNamespace(cls),
            events: this.scanEvents(cls),
          };
          gateways.push(gatewayData);
        }
      }
    }
    return gateways;
  }

  private getNamespace(cls: any) {
    const decorator = cls.getDecorator('WebSocketGateway') || cls.getDecorator('SocketController');
    if (!decorator) return '/';
    
    const args = decorator.getArguments();
    if (args.length === 0) return '/';

    const arg = args[0];
    if (arg.getKind() === SyntaxKind.StringLiteral) {
      return arg.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
    } else if (arg.getKind() === SyntaxKind.ObjectLiteralExpression) {
      const obj = arg.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
      const nsProp = obj.getProperty('namespace');
      if (nsProp && nsProp.getKind() === SyntaxKind.PropertyAssignment) {
        const init = nsProp.asKindOrThrow(SyntaxKind.PropertyAssignment).getInitializer();
        if (init && init.getKind() === SyntaxKind.StringLiteral) {
          return init.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
        }
      }
    }
    return '/';
  }

  private scanEvents(cls: any) {
    const methods = cls.getMethods();
    const events = [];

    for (const method of methods) {
      const decorator = method.getDecorator('SubscribeMessage') || method.getDecorator('SocketEvent');
      if (decorator) {
        const args = decorator.getArguments();
        let eventName = 'unknown';
        if (args.length > 0 && args[0].getKind() === SyntaxKind.StringLiteral) {
          eventName = args[0].asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
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

  private getPayloadType(method: any) {
    const params = method.getParameters();
    for (const param of params) {
      if (param.getDecorator('SocketPayload') || param.getDecorator('MessageBody')) {
        return param.getType().getText();
      }
    }
    return null;
  }
}
