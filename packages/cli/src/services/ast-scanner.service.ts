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
      const isSocketController = decorator.getName() === 'SocketController';
      const propName = isSocketController ? 'name' : 'namespace';
      
      const prop = obj.getProperty(propName) || obj.getProperty('namespace');
      if (prop && prop.getKind() === SyntaxKind.PropertyAssignment) {
        const init = prop.asKindOrThrow(SyntaxKind.PropertyAssignment).getInitializer();
        if (init) {
          if (init.getKind() === SyntaxKind.StringLiteral) {
            return init.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
          }
          // Handle Enums or variables (e.g., Namespaces.YOUTUBE_MUSIC)
          return init.getText();
        }
      }
    } else {
      // Fallback for when it's a direct Enum/variable reference
      return arg.getText();
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
        if (args.length > 0) {
          const arg = args[0];
          if (arg.getKind() === SyntaxKind.StringLiteral) {
            eventName = arg.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
          } else {
            // Handle Enums or variables (e.g., YoutubeMusicWsEvents.SEARCH_SUGGEST)
            eventName = arg.getText();
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
