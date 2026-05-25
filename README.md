# nestjs-socket-docs

Swagger-like documentation for NestJS WebSockets.

## Installation

```bash
pnpm add @crdsyntax/nestjs-socket-docs
```

## Usage

```typescript
import { SocketDocsModule } from '@crdsyntax/nestjs-socket-docs';

// In your main.ts
await SocketDocsModule.setup(app);
```

## Packages

- `@crdsyntax/nestjs-socket-docs`: Core module.
- `@crdsyntax/nestjs-socket-docs-cli`: CLI tool.

## License

MIT
