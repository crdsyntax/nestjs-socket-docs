export interface DiscoveredServer {
  baseUrl: string;
  port: number;
  jsonPath: string;
  gateways: number;
  latencyMs: number;
}

export interface DiscoveryResponse {
  servers: DiscoveredServer[];
  scannedPorts: number[];
  timestamp: number;
}

const DEFAULT_CANDIDATE_PORTS = [
  3000, 3001, 3002, 3003, 3004, 3005, 3010,
  4000, 4001,
  5000, 5001,
  7000, 7001,
  8000, 8080, 8081, 8082,
  9000, 9001,
  3333, 4200, 5173, 5500,
];

const DISCOVERY_TIMEOUT = 1200;

function timeoutSignal(ms: number): AbortSignal | undefined {
  try {
    // Modern browsers / Node
    if (typeof AbortSignal !== 'undefined' && typeof (AbortSignal as any).timeout === 'function') {
      return (AbortSignal as any).timeout(ms);
    }
  } catch {}
  const ctrl = new AbortController();
  setTimeout(() => ctrl.abort(), ms);
  return ctrl.signal;
}

/**
 * Try server-side discovery first (via standalone server), fall back to client-side probing.
 */
export async function discoverLocalServers(opts?: {
  baseUrl?: string; // standalone origin, default window.location.origin
  ports?: number[];
  useServerSide?: boolean; // default true
}): Promise<DiscoveryResponse> {
  const baseUrl = (opts?.baseUrl || window.location.origin).replace(/\/$/, '');
  const ports = opts?.ports || DEFAULT_CANDIDATE_PORTS;

  // 1. Try server-side discovery endpoint (avoids CORS, runs from Node)
  if (opts?.useServerSide !== false) {
    const endpoints = [
      `${baseUrl}/socket-docs/servers`,
      `${baseUrl}/socket-docs/discover`,
      `${baseUrl}/__socket-docs/servers`,
    ];
    for (const ep of endpoints) {
      try {
        const url = ports ? `${ep}?ports=${ports.join(',')}` : ep;
        const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: timeoutSignal(2500) });
        if (!res.ok) continue;
        const ct = res.headers.get('content-type') || '';
        if (!ct.includes('application/json')) continue;
        const data = (await res.json()) as DiscoveryResponse;
        if (Array.isArray(data.servers)) return data;
        // legacy shape: direct array
        if (Array.isArray(data as any)) return { servers: data as any, scannedPorts: ports, timestamp: Date.now() };
      } catch {
        // try next endpoint / fallback to client
      }
    }
  }

  // 2. Client-side fallback: probe directly from browser
  return await clientSideDiscover(ports);
}

async function clientSideDiscover(ports: number[]): Promise<DiscoveryResponse> {
  const jsonPaths = ['/socket-docs/json', '/json'];
  const results: DiscoveredServer[] = [];

  const probe = async (port: number): Promise<DiscoveredServer | null> => {
    for (const jp of jsonPaths) {
      const url = `http://localhost:${port}${jp}`;
      const start = Date.now();
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          signal: timeoutSignal(DISCOVERY_TIMEOUT),
        });
        if (!res.ok) continue;
        const json = await res.json();
        if (!Array.isArray((json as any)?.gateways)) continue;
        return {
          baseUrl: `http://localhost:${port}`,
          port,
          jsonPath: jp,
          gateways: (json as any).gateways.length,
          latencyMs: Date.now() - start,
        };
      } catch {
        // timeout / CORS / network error -> try next path or next port
      }
    }
    return null;
  };

  // concurrency 8
  const concurrency = 8;
  for (let i = 0; i < ports.length; i += concurrency) {
    const chunk = ports.slice(i, i + concurrency);
    const settled = await Promise.all(chunk.map(probe));
    for (const r of settled) if (r) results.push(r);
  }
  results.sort((a, b) => a.port - b.port);
  return { servers: results, scannedPorts: ports, timestamp: Date.now() };
}
