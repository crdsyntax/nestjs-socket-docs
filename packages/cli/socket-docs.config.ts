import { defineSocketDocsConfig } from '@crdsyntax/nestjs-socket-docs';

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
});