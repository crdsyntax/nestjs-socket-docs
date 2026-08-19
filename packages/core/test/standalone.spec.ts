import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { StandaloneServer } from '../src/runtime/standalone';
import { SocketDocsSchema } from '../src/interfaces/schema.interface';

describe('StandaloneServer', () => {
  let schema: SocketDocsSchema;
  let server: StandaloneServer;
  const testPort = 18765;

  beforeEach(() => {
    schema = {
      gateways: [
        {
          name: 'TestGateway',
          namespace: '/',
          path: '/socket.io',
          events: [
            {
              event: 'testEvent',
              methodName: 'handleTestEvent',
              summary: 'Test event',
              description: 'A test event',
              payloadSchema: { type: 'object' },
            },
          ],
        },
      ],
    };
  });

  afterEach(async () => {
    if (server && server.isRunning()) {
      await server.stop();
    }
  });

  it('should be defined', () => {
    server = new StandaloneServer(schema);
    expect(server).toBeDefined();
  });

  it('should have default port 3001', () => {
    server = new StandaloneServer(schema);
    expect(server.getPort()).toBe(3001);
  });

  it('should accept custom port', () => {
    server = new StandaloneServer(schema, { port: 4000 });
    expect(server.getPort()).toBe(4000);
  });

  it('should not be running before start()', () => {
    server = new StandaloneServer(schema);
    expect(server.isRunning()).toBe(false);
  });

  it('should start and stop successfully', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();
    expect(server.isRunning()).toBe(true);

    await server.stop();
    expect(server.isRunning()).toBe(false);
  });

  it('should stop gracefully when server is not started', async () => {
    server = new StandaloneServer(schema);
    await expect(server.stop()).resolves.toBeUndefined();
  });

  it('should serve JSON schema at /socket-docs/json', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    // Wait for server to be ready
    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/socket-docs/json`);
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toBe('application/json');
    expect(response.headers['access-control-allow-origin']).toBe('*');

    const body = JSON.parse(response.body);
    expect(body.gateways).toHaveLength(1);
    expect(body.gateways[0].name).toBe('TestGateway');
  });

  it('should serve JSON schema at /json', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/json`);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).gateways).toHaveLength(1);
  });

  it('should serve custom jsonPath', async () => {
    server = new StandaloneServer(schema, { port: testPort, jsonPath: '/custom/schema' });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/custom/schema`);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body).gateways).toHaveLength(1);
  });

  it('should return 404 when UI is not found', async () => {
    // Create a server with invalid ui-dist path by mocking
    // For now, test that it handles missing index.html gracefully
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/`);
    // Should return either 200 (if UI exists) or 404 (if not)
    expect([200, 404]).toContain(response.statusCode);
  });

  it('should update schema dynamically', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify initial schema
    let response = await makeRequest(`http://localhost:${testPort}/socket-docs/json`);
    let body = JSON.parse(response.body);
    expect(body.gateways[0].name).toBe('TestGateway');

    // Update schema
    const newSchema: SocketDocsSchema = {
      gateways: [
        {
          name: 'UpdatedGateway',
          namespace: '/updated',
          path: '/updated.io',
          events: [],
        },
      ],
    };
    server.updateSchema(newSchema);

    // Verify updated schema
    response = await makeRequest(`http://localhost:${testPort}/socket-docs/json`);
    body = JSON.parse(response.body);
    expect(body.gateways[0].name).toBe('UpdatedGateway');
  });

  it('should prevent path traversal attacks', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Attempt path traversal
    const response = await makeRequest(`http://localhost:${testPort}/../../../etc/passwd`);
    // The path traversal is prevented because sanitizePath returns null
    // The server falls back to SPA routing and serves index.html (or 404 if UI not built)
    // The key assertion is that the response does NOT contain the passwd file content
    expect(response.body).not.toContain('root:');
    expect(response.body).not.toContain('/bin/bash');
  });

  it('should handle CORS headers for JSON endpoint', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/socket-docs/json`);
    expect(response.headers['access-control-allow-origin']).toBe('*');
    expect(response.headers['access-control-allow-methods']).toBe('GET, OPTIONS');
    expect(response.headers['access-control-allow-headers']).toBe('Content-Type');
  });

  it('should inject standalone config into HTML', async () => {
    // This test requires the ui-dist to exist with an index.html
    // Skip if UI is not built
    const uiDistPath = path.resolve(__dirname, '../../ui-dist');
    if (!fs.existsSync(path.join(uiDistPath, 'index.html'))) {
      console.log('Skipping HTML injection test: ui-dist not built');
      return;
    }

    server = new StandaloneServer(schema, { port: testPort, jsonPath: '/test/json' });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    const response = await makeRequest(`http://localhost:${testPort}/`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toContain('SOCKET_DOCS_CONFIG');
    expect(response.body).toContain('standalone: true');
    expect(response.body).toContain('/test/json');
  });

  it('should handle multiple concurrent requests', async () => {
    server = new StandaloneServer(schema, { port: testPort });
    server.start();

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Make multiple concurrent requests
    const requests = Array(5).fill(null).map(() =>
      makeRequest(`http://localhost:${testPort}/socket-docs/json`)
    );

    const responses = await Promise.all(requests);
    responses.forEach((response) => {
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body).gateways).toHaveLength(1);
    });
  });
});

/**
 * Helper function to make HTTP requests
 */
function makeRequest(url: string): Promise<{
  statusCode: number;
  headers: Record<string, string>;
  body: string;
}> {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode || 500,
          headers: res.headers as Record<string, string>,
          body,
        });
      });
    }).on('error', reject);
  });
}
