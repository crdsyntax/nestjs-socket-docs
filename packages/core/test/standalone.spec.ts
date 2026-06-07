import { StandaloneServer } from '../src/runtime/standalone';
import { SocketDocsSchema } from '../src/interfaces/schema.interface';

describe('StandaloneServer', () => {
  let schema: SocketDocsSchema;

  beforeEach(() => {
    schema = {
      gateways: [
        {
          name: 'TestGateway',
          namespace: '/',
          path: '/socket.io',
          events: []
        }
      ]
    };
  });

  it('should be defined', () => {
    const server = new StandaloneServer(schema);
    expect(server).toBeDefined();
  });

  // Since it uses http.createServer and fs, we'd need to mock those for deeper unit tests
  // or do integration tests. For now, checking instantiation and basic logic.
});
