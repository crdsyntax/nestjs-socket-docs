import { useAppLogic } from '../hooks/useAppLogic';
import { renderHook, act } from '@testing-library/react';
import { SocketDocsData } from '../types';

describe('useAppLogic', () => {
  const mockData: SocketDocsData = {
    gateways: [
      {
        name: 'TestGateway',
        namespace: '/',
        path: '/socket.io',
        events: []
      }
    ]
  };

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useAppLogic(mockData));
    expect(result.current.activeGatewayIdx).toBe(-1);
    expect(result.current.activeEventIdx).toBe(-1);
  });

  it('should update active indices', () => {
    const { result } = renderHook(() => useAppLogic(mockData));
    
    act(() => {
      result.current.setActiveGatewayIdx(0);
      result.current.setActiveEventIdx(1);
    });

    expect(result.current.activeGatewayIdx).toBe(0);
    expect(result.current.activeEventIdx).toBe(1);
  });
});
