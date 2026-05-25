import { defineSocketDocsConfig } from '@nestjs-socket-docs/core';

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