import { ASTScannerService } from '../src/services/ast-scanner.service';
import * as path from 'path';

describe('ASTScannerService', () => {
  let service: ASTScannerService;
  const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

  beforeEach(() => {
    service = new ASTScannerService(tsconfigPath);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // More specific tests would require a mock project structure
});
