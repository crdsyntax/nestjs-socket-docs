"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTScannerService = void 0;
const ts_morph_1 = require("ts-morph");
const path = __importStar(require("path"));
class ASTScannerService {
    project;
    constructor(tsconfigPath) {
        console.log(`[ASTScanner] Initializing with config: ${tsconfigPath}`);
        this.project = new ts_morph_1.Project({
            tsConfigFilePath: tsconfigPath,
            skipAddingFilesFromTsConfig: false,
        });
        const rootDir = path.dirname(tsconfigPath);
        this.project.addSourceFilesAtPaths(path.join(rootDir, '**/*.ts'));
    }
    scanGateways() {
        const sourceFiles = this.project.getSourceFiles();
        console.log(`[ASTScanner] Scanning ${sourceFiles.length} files...`);
        const gateways = [];
        for (const sourceFile of sourceFiles) {
            const classes = sourceFile.getClasses();
            for (const cls of classes) {
                const decorators = cls.getDecorators();
                const isGateway = decorators.some(d => ['WebSocketGateway', 'SocketController'].includes(d.getName()));
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
    getNamespace(cls) {
        const decorator = cls.getDecorator('WebSocketGateway') || cls.getDecorator('SocketController');
        if (!decorator)
            return '/';
        const args = decorator.getArguments();
        if (args.length === 0)
            return '/';
        for (const arg of args) {
            if (arg.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                return arg.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
            }
            if (arg.getKind() === ts_morph_1.SyntaxKind.ObjectLiteralExpression) {
                const obj = arg.asKindOrThrow(ts_morph_1.SyntaxKind.ObjectLiteralExpression);
                const namespace = this.getPropertyValue(obj, 'namespace') || this.getPropertyValue(obj, 'name');
                if (namespace)
                    return namespace;
            }
        }
        const firstArg = args[0];
        if (firstArg.getKind() !== ts_morph_1.SyntaxKind.NumericLiteral) {
            return firstArg.getText().replace(/['"]/g, '');
        }
        return '/';
    }
    getPath(cls) {
        const decorator = cls.getDecorator('WebSocketGateway');
        if (!decorator)
            return '/socket.io';
        const args = decorator.getArguments();
        for (const arg of args) {
            if (arg.getKind() === ts_morph_1.SyntaxKind.ObjectLiteralExpression) {
                const obj = arg.asKindOrThrow(ts_morph_1.SyntaxKind.ObjectLiteralExpression);
                const pathVal = this.getPropertyValue(obj, 'path');
                if (pathVal)
                    return pathVal;
            }
        }
        return '/socket.io';
    }
    getPropertyValue(obj, name) {
        const prop = obj.getProperty(name);
        if (prop && prop.getKind() === ts_morph_1.SyntaxKind.PropertyAssignment) {
            const init = prop.asKindOrThrow(ts_morph_1.SyntaxKind.PropertyAssignment).getInitializer();
            if (init) {
                if (init.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                    return init.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
                }
                return init.getText().replace(/['"]/g, '');
            }
        }
        return null;
    }
    scanEvents(cls) {
        const methods = cls.getMethods();
        const events = [];
        for (const method of methods) {
            const decorator = method.getDecorator('SubscribeMessage') || method.getDecorator('SocketEvent');
            if (decorator) {
                const args = decorator.getArguments();
                let eventName = 'unknown';
                if (args.length > 0) {
                    const arg = args[0];
                    if (arg.getKind() === ts_morph_1.SyntaxKind.StringLiteral) {
                        eventName = arg.asKindOrThrow(ts_morph_1.SyntaxKind.StringLiteral).getLiteralValue();
                    }
                    else if (arg.getKind() === ts_morph_1.SyntaxKind.ObjectLiteralExpression) {
                        const obj = arg.asKindOrThrow(ts_morph_1.SyntaxKind.ObjectLiteralExpression);
                        eventName = this.getPropertyValue(obj, 'event') || 'unknown';
                    }
                    else {
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
