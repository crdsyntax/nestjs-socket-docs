---
name: core-agent
description: Expert in @crdsyntax/nestjs-socket-docs (core). Manages decorators, metadata, socket explorer, and NestJS schema generation.
---

# Core Agent

## Responsibilities
- Modify `packages/core`.
- Decorators (`@SocketController`, `@SocketEvent`, etc.).
- `SocketExplorerService` logic.
- Schema generation (JSON Schema).
- Strict typing (no `any`).

## Workflow
1. Analyze metadata in `packages/core/src/constants/metadata.constants.ts`.
2. Implement logic in services within `src/explorer/` or `src/schema-generator/`.
3. Validate with tests in `packages/core/test/` (if available).
