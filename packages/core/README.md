# @nestjs-socket-docs/core

El núcleo de `nestjs-socket-docs`. Se encarga de la introspección de metadatos, generación de esquemas y exposición de la UI.

## Funcionamiento

El core funciona mediante tres pilares:

1.  **Decoradores**: Proporcionan metadatos adicionales a los Gateways de NestJS.
2.  **Explorer**: Escanea los módulos de la aplicación en tiempo de ejecución para extraer la configuración de los WebSockets.
3.  **UI & API**: Expone un endpoint JSON con el esquema y sirve una interfaz web interactiva.

## Decoradores Principales

### `@SocketController(options)`
Se usa a nivel de clase para describir un Gateway.
- `name`: Nombre descriptivo (opcional).
- `description`: Descripción larga (opcional).

### `@SocketEvent(options)`
Se usa a nivel de método para documentar un evento.
- `event`: Nombre del evento (opcional si se usa `@SubscribeMessage`).
- `summary`: Resumen breve.
- `payload`: Clase (DTO) que define el cuerpo del mensaje.
- `response`: Clase (DTO) que define la respuesta.

### `@SocketPayload()`
Decorador de parámetro para identificar explícitamente el DTO de entrada.

## Integración

Se inicializa en el `main.ts` de tu aplicación NestJS:

```typescript
import { SocketDocsModule } from '@nestjs-socket-docs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de SocketDocs
  await SocketDocsModule.setup(app);
  
  await app.listen(3000);
}
```

## Endpoints

- `GET /socket-docs`: Interfaz web interactiva.
- `GET /socket-docs/json`: Esquema completo en formato JSON.
