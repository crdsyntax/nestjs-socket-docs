import React from "react";
import {
  Activity,
  ChevronDown,
  ChevronRight,
  Play,
  X,
  Terminal,
  Zap,
  RefreshCw,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Hash,
  Database,
  Globe,
  Settings,
} from "lucide-react";
import useSocketClient from "./hooks/useSocketClient";
import useSocketDocs from "./hooks/useSocketDocs";
import { SocketDocsEvent, SocketDocsGateway } from "./types";

const App = () => {
  const { data, payloads, expanded, setPayloads, toggleExpand } = useSocketDocs();
  const { connected, logs, connect, emitEvent, clearLogs } = useSocketClient();

  if (!data)
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#020617",
          color: "#38bdf8",
        }}
      >
        <RefreshCw className="animate-spin" size={32} />
        <span style={{ marginLeft: "15px", fontSize: "1.2rem" }}>
          Loading Socket Contracts...
        </span>
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#020617",
        color: "#f8fafc",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        overflow: "hidden",
      }}
    >
      {/* Sidebar: Gateways & Events */}
      <div
        style={{
          flex: 1,
          minWidth: "450px",
          borderRight: "1px solid #1e293b",
          overflowY: "auto",
          padding: "24px",
          backgroundColor: "#0f172a",
        }}
      >
        <header
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "#38bdf8",
              padding: "8px",
              borderRadius: "8px",
            }}
          >
            <Activity color="#020617" size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: "1.25rem", margin: 0, fontWeight: 800 }}>
              Socket Docs
            </h1>
            <span style={{ fontSize: "0.7rem", color: "#64748b" }}>
              NestJS WebSocket Documentation
            </span>
          </div>
        </header>

        {data.gateways.map((gw: SocketDocsGateway, idx: number) => (
          <div
            key={idx}
            style={{
              marginBottom: "32px",
              backgroundColor: "#1e293b",
              borderRadius: "12px",
              border: "1px solid #334155",
              overflow: "hidden",
            }}
          >
            {/* Gateway Header */}
            <div
              style={{
                padding: "16px",
                borderBottom: "1px solid #334155",
                backgroundColor: "rgba(15, 23, 42, 0.5)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <Database size={16} color="#38bdf8" />
                  <h2 style={{ fontSize: "0.95rem", margin: 0 }}>{gw.name}</h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                  }}
                >
                  <Globe size={12} />
                  <span>{gw.namespace}</span>
                  <Hash size={12} style={{ marginLeft: "8px" }} />
                  <span>{gw.path}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.7rem",
                    fontWeight: "bold",
                    color: connected[gw.name] ? "#10b981" : "#ef4444",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "currentColor",
                      boxShadow: connected[gw.name]
                        ? "0 0 8px #10b981"
                        : "none",
                    }}
                  ></span>
                  {connected[gw.name] ? "ONLINE" : "OFFLINE"}
                </div>
                <button
                  onClick={() => connect(gw.name, gw.namespace, gw.path)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    backgroundColor: connected[gw.name] ? "#ef4444" : "#10b981",
                    border: "none",
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s",
                  }}
                >
                  {connected[gw.name] ? (
                    <>
                      <X size={14} /> Disconnect
                    </>
                  ) : (
                    <>
                      <Zap size={14} /> Connect
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Events List */}
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {gw.events.map((ev: SocketDocsEvent, eIdx: number) => {
                const eventKey = `${gw.name}-${ev.event}`;
                const isExpanded = expanded[eventKey];

                return (
                  <div
                    key={eIdx}
                    style={{
                      backgroundColor: "#0f172a",
                      borderRadius: "8px",
                      border: "1px solid #334155",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      onClick={() => toggleExpand(eventKey)}
                      style={{
                        padding: "12px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e293b")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0f172a")}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            backgroundColor: "#38bdf8",
                            color: "#020617",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            fontWeight: "bold",
                          }}
                        >
                          EVENT
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#e2e8f0" }}>
                            {ev.event}
                          </div>
                          {ev.summary && (
                            <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
                              {ev.summary}
                            </div>
                          )}
                        </div>
                      </div>
                      {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </div>

                    {isExpanded && (
                      <div
                        style={{
                          padding: "16px",
                          borderTop: "1px solid #334155",
                          backgroundColor: "rgba(2, 6, 23, 0.3)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "8px",
                          }}
                        >
                          <label style={{ fontSize: "0.7rem", color: "#94a3b8", fontWeight: "bold" }}>
                            PAYLOAD (JSON)
                          </label>
                          <Settings size={12} color="#475569" />
                        </div>
                        <textarea
                          value={payloads[eventKey] ?? "{}"}
                          onChange={(e) =>
                            setPayloads({ ...payloads, [eventKey]: e.target.value })
                          }
                          style={{
                            width: "100%",
                            height: "120px",
                            backgroundColor: "#020617",
                            color: "#10b981",
                            border: "1px solid #334155",
                            borderRadius: "6px",
                            padding: "12px",
                            fontSize: "0.8rem",
                            fontFamily: "monospace",
                            resize: "vertical",
                            outline: "none",
                          }}
                        />

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            emitEvent(gw.name, ev.event, payloads[eventKey] ?? "{}");
                          }}
                          style={{
                            width: "100%",
                            marginTop: "12px",
                            padding: "8px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            backgroundColor: "#6366f1",
                            border: "none",
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            transition: "filter 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                          onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                        >
                          <Play size={14} fill="currentColor" /> Emit Event
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Real-time Logs */}
      <div
        style={{
          width: "35%",
          minWidth: "380px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#020617",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #1e293b",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#0f172a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Terminal size={18} color="#38bdf8" />
            <h3 style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700 }}>
              Event Monitor
            </h3>
          </div>
          <button
            onClick={clearLogs}
            style={{
              background: "transparent",
              border: "1px solid #334155",
              color: "#94a3b8",
              padding: "4px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.7rem",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Trash2 size={12} /> Clear
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {logs.length === 0 && (
            <div
              style={{
                color: "#334155",
                textAlign: "center",
                marginTop: "64px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Activity size={48} strokeWidth={1} />
              <span style={{ fontSize: "0.85rem" }}>
                Listening for incoming events...
              </span>
            </div>
          )}
          {logs.map((log) => (
            <div
              key={log.id}
              style={{
                marginBottom: "20px",
                borderLeft: `2px solid ${
                  log.type === "sent"
                    ? "#6366f1"
                    : log.type === "received"
                    ? "#10b981"
                    : "#ef4444"
                }`,
                paddingLeft: "16px",
                animation: "slideIn 0.3s ease-out",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.7rem",
                  marginBottom: "6px",
                }}
              >
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {log.type === "received" && <CheckCircle2 size={12} color="#10b981" />}
                  {log.type === "error" && <AlertCircle size={12} color="#ef4444" />}
                  <span
                    style={{
                      fontWeight: "bold",
                      color:
                        log.type === "sent"
                          ? "#818cf8"
                          : log.type === "received"
                          ? "#34d399"
                          : "#f87171",
                    }}
                  >
                    {log.type.toUpperCase()}
                  </span>
                  <span style={{ color: "#e2e8f0" }}>{log.message}</span>
                </div>
                <span style={{ color: "#475569" }}>{log.timestamp}</span>
              </div>
              {log.data != null && (
                <pre
                  style={{
                    margin: 0,
                    backgroundColor: "#0f172a",
                    border: "1px solid #1e293b",
                    padding: "12px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    color: "#cbd5e1",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    lineHeight: 1.5,
                  }}
                >
                  {JSON.stringify(log.data, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
