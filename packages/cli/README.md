# @nestjs-socket-docs/cli

CLI para automatizar la integración de `nestjs-socket-docs` en proyectos de NestJS.

## Instalación

Para usarlo localmente sin publicar en NPM:

1. Clona este repositorio.
2. Ve a la carpeta del CLI:
   ```bash
   cd packages/cli
   ```
3. Compila el proyecto:
   ```bash
   pnpm run build
   ```
4. En el proyecto donde quieras instalarlo, vincula la carpeta:
   ```bash
   pnpm link /ruta/a/packages/cli
   ```

## Comandos

### `init`

Escanea el proyecto en busca de Gateways, inyecta el código necesario en `main.ts` y genera el archivo de configuración inicial.

```bash
socket-docs init
```

#### Opciones:

- `-p, --project <path>`: Ruta al archivo `tsconfig.json` (por defecto: `tsconfig.json`).

### `dev`

Inicia un servidor de desarrollo standalone para probar la UI sin una aplicación NestJS en ejecución.

```bash
socket-docs dev
```

#### Opciones:

- `-p, --project <path>`: Ruta al archivo `tsconfig.json` (por defecto: `tsconfig.json`).
- `-port, --port <number>`: Puerto del servidor (por defecto: `3001`).

#### Ejemplo:

```bash
# Iniciar en puerto personalizado
socket-docs dev --port 4000

# Especificar tsconfig personalizado
socket-docs dev -p ./tsconfig.build.json
```

## Funcionamiento

1. **Escaneo AST**: Analiza el código fuente para detectar decoradores de Gateways.
2. **Inyección en Main**: Agrega automáticamente la configuración de `SocketDocsModule` en `src/main.ts`.
3. **Configuración**: Crea un archivo `socket-docs.config.ts` personalizable.
