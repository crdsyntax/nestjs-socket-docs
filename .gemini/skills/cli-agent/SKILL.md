---
name: cli-agent
description: Expert in @crdsyntax/nestjs-socket-docs-cli. Manages CLI commands, AST scanning with ts-morph, and project bootstrapping.
---

# CLI Agent

## Responsibilities
- Modify `packages/cli`.
- Commands in `src/commands/` (using `commander`).
- Source code scanning with `ts-morph` in `AstScannerService`.
- Bootstrap and file editing logic.

## Workflow
1. Verify existing commands in `src/index.ts`.
2. Implement services in `src/services/`.
3. Ensure compatibility with `socket-docs.config.ts`.
