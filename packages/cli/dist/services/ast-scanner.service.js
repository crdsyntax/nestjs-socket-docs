"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTScannerService = void 0;
const ts_morph_1 = require("ts-morph");
class ASTScannerService {
    project;
    constructor(tsconfigPath) {
        this.project = new ts_morph_1.Project({
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
                const isGateway = decorators.some(d => ['WebSocketGateway', 'SocketController'].includes(d.getName()));
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
    getNamespace(cls) {
        const decorator = cls.getDecorator('WebSocketGateway') || cls.getDecorator('SocketController');
        if (!decorator)
            return '/';
        const args = decorator.getArguments();
        if (args.length === 0)
            return '/';
        const arg = args[0];
        if (arg.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
            return arg.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
        }
        else if (arg.getKind() === ts_morph_1.SyntaxKind.ObjectLiteralExpression) {
            const obj = arg.asKindOrThrow(ts_morph_1.SyntaxKind.ObjectLiteralExpression);
            const isSocketController = decorator.getName() === 'SocketController';
            const propName = isSocketController ? 'name' : 'namespace';
            const prop = obj.getProperty(propName);
            if (prop && prop.getKind() === ts_morph_1.SyntaxKind.PropertyAssignment) {
                const init = prop.asKindOrThrow(ts_morph_1.SyntaxKind.PropertyAssignment).getInitializer();
                if (init && init.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                    return init.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
                }
            }
            // Fallback for WebSocketGateway if name was used or if namespace is missing
            if (!isSocketController) {
                const altProp = obj.getProperty('namespace');
                if (altProp && altProp.getKind() === ts_morph_1.SyntaxKind.PropertyAssignment) {
                    const init = altProp.asKindOrThrow(ts_morph_1.SyntaxKind.PropertyAssignment).getInitializer();
                    if (init && init.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                        return init.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
                    }
                }
            }
        }
        return '/';
    }
    scanEvents(cls) {
        const methods = cls.getMethods();
        const events = [];
        for (const method of methods) {
            const decorator = method.getDecorator('SubscribeMessage') || method.getDecorator('SocketEvent');
            if (decorator) {
                const args = decorator.getArguments();
                let eventName = 'unknown';
                if (args.length > 0 && args[0].getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                    eventName = args[0].asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
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
    getPayloadType(method) {
        const params = method.getParameters();
        for (const param of params) {
            if (param.getDecorator('SocketPayload') || param.getDecorator('MessageBody')) {
                return param.getType().getText();
            }
        }
        return null;
    }
}
exports.ASTScannerService = ASTScannerService;
