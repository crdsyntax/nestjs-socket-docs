#!/usr/bin/env node
import { Command } from 'commander';
import * as path from 'path';
import * as fs from 'fs-extra';
import chalk from 'chalk';
import { ASTScannerService } from './services/ast-scanner.service';
import { BootstrapEditorService } from './services/bootstrap-editor.service';

const program = new Command();

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
      console.error(chalk.red(`Error: Could not find ${options.project}`));
      process.exit(1);
    }

    console.log(chalk.blue('🔍 Scanning project for gateways...'));
    const scanner = new ASTScannerService(tsconfigPath);
    const gateways = scanner.scanGateways();

    console.log(chalk.green(`✅ Found ${gateways.length} gateways.`));
    gateways.forEach(g => {
      console.log(chalk.gray(`  - ${g.name} (${g.namespace})`));
    });

    console.log(chalk.blue('💉 Injecting bootstrap into src/main.ts...'));
    const editor = new BootstrapEditorService(tsconfigPath);
    try {
      const injected = await editor.injectBootstrap(mainPath);
      if (injected) {
        console.log(chalk.green('✅ Bootstrap successfully injected.'));
      } else {
        console.log(chalk.yellow('⚠️ Bootstrap already exists in src/main.ts.'));
      }
    } catch (err: any) {
      console.error(chalk.red(`❌ Failed to inject bootstrap: ${err.message}`));
    }

    console.log(chalk.blue('📄 Generating socket-docs.config.ts...'));
    const configPath = path.resolve(rootDir, 'socket-docs.config.ts');
    const configContent = `import { defineSocketDocsConfig } from '@crdsyntax/nestjs-socket-docs';

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
      console.log(chalk.green('✅ Config file generated.'));
    } else {
      console.log(chalk.yellow('⚠️ Config file already exists.'));
    }

    console.log(chalk.bold.green('\n🚀 Setup complete! npx socket-docs is ready.'));
  });

program.parse(process.argv);
