#!/usr/bin/env node
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const path = __importStar(require("path"));
const fs = __importStar(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const ast_scanner_service_1 = require("./services/ast-scanner.service");
const bootstrap_editor_service_1 = require("./services/bootstrap-editor.service");
const program = new commander_1.Command();
program
    .name('socket-docs')
    .description('CLI for nestjs-socket-docs')
    .version('0.0.1');
program
    .command('init')
    .description('Initialize nestjs-socket-docs in a NestJS project')
    .option('-p, --project <path>', 'Path to tsconfig.json', 'tsconfig.json')
    .action(async (options) => {
    const rootDir = process.cwd();
    const tsconfigPath = path.resolve(rootDir, options.project);
    const mainPath = path.resolve(rootDir, 'src/main.ts');
    if (!fs.existsSync(tsconfigPath)) {
        console.error(chalk_1.default.red(`Error: Could not find ${options.project}`));
        process.exit(1);
    }
    console.log(chalk_1.default.blue('🔍 Scanning project for gateways...'));
    const scanner = new ast_scanner_service_1.ASTScannerService(tsconfigPath);
    const gateways = scanner.scanGateways();
    console.log(chalk_1.default.green(`✅ Found ${gateways.length} gateways.`));
    gateways.forEach(g => {
        console.log(chalk_1.default.gray(`  - ${g.name} (${g.namespace})`));
    });
    console.log(chalk_1.default.blue('💉 Injecting bootstrap into src/main.ts...'));
    const editor = new bootstrap_editor_service_1.BootstrapEditorService(tsconfigPath);
    try {
        const injected = await editor.injectBootstrap(mainPath);
        if (injected) {
            console.log(chalk_1.default.green('✅ Bootstrap successfully injected.'));
        }
        else {
            console.log(chalk_1.default.yellow('⚠️ Bootstrap already exists in src/main.ts.'));
        }
    }
    catch (err) {
        console.error(chalk_1.default.red(`❌ Failed to inject bootstrap: ${err.message}`));
    }
    console.log(chalk_1.default.blue('📄 Generating socket-docs.config.ts...'));
    const configPath = path.resolve(rootDir, 'socket-docs.config.ts');
    const configContent = `import { defineSocketDocsConfig } from '@nestjs-socket-docs/core';

export default defineSocketDocsConfig({
  path: '/socket-docs',
  playground: true,
  gateways: {
    autoDiscover: true
  },
  export: {
    enabled: true,
    path: './contracts/socket-docs.json'
  }
});`;
    if (!fs.existsSync(configPath)) {
        await fs.writeFile(configPath, configContent);
        console.log(chalk_1.default.green('✅ Config file generated.'));
    }
    else {
        console.log(chalk_1.default.yellow('⚠️ Config file already exists.'));
    }
    console.log(chalk_1.default.bold.green('\n🚀 Setup complete! npx socket-docs is ready.'));
});
program.parse(process.argv);
