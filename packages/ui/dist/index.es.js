import Fe, { useState as A, useRef as mr, useEffect as pr, useMemo as xr } from "react";
import { RefreshCw as br, Sun as vr, Moon as hr, Settings as gr, Play as yr, RotateCcw as jr } from "lucide-react";
import { io as Er } from "socket.io-client";
var le = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Rr() {
  if (Ae)
    return q;
  Ae = 1;
  var o = Fe, s = Symbol.for("react.element"), p = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, x = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(g, u, y) {
    var m, N = {}, v = null, j = null;
    y !== void 0 && (v = "" + y), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (m in u)
      i.call(u, m) && !f.hasOwnProperty(m) && (N[m] = u[m]);
    if (g && g.defaultProps)
      for (m in u = g.defaultProps, u)
        N[m] === void 0 && (N[m] = u[m]);
    return { $$typeof: s, type: g, key: v, ref: j, props: N, _owner: x.current };
  }
  return q.Fragment = p, q.jsx = C, q.jsxs = C, q;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function _r() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Fe, s = Symbol.for("react.element"), p = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), g = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), k = Symbol.iterator, z = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = k && e[k] || e[z];
      return typeof t == "function" ? t : null;
    }
    var S = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        h("error", e, n);
      }
    }
    function h(e, t, n) {
      {
        var a = S.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (t += "%s", n = n.concat([d]));
        var b = n.map(function(l) {
          return String(l);
        });
        b.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var $ = !1, Q = !1, V = !1, Z = !1, Ie = !1, de;
    de = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === f || Ie || e === x || e === y || e === m || Z || e === j || $ || Q || V || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === N || e.$$typeof === C || e.$$typeof === g || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function We(e, t, n) {
      var a = e.displayName;
      if (a)
        return a;
      var d = t.displayName || t.name || "";
      return d !== "" ? n + "(" + d + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case p:
          return "Portal";
        case f:
          return "Profiler";
        case x:
          return "StrictMode";
        case y:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var t = e;
            return ue(t) + ".Consumer";
          case C:
            var n = e;
            return ue(n._context) + ".Provider";
          case u:
            return We(e, e.render, "ForwardRef");
          case N:
            var a = e.displayName || null;
            return a !== null ? a : D(e.type) || "Memo";
          case v: {
            var d = e, b = d._payload, l = d._init;
            try {
              return D(l(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, M = 0, fe, me, pe, xe, be, ve, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Ye() {
      {
        if (M === 0) {
          fe = console.log, me = console.info, pe = console.warn, xe = console.error, be = console.group, ve = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function Ve() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: fe
            }),
            info: I({}, e, {
              value: me
            }),
            warn: I({}, e, {
              value: pe
            }),
            error: I({}, e, {
              value: xe
            }),
            group: I({}, e, {
              value: be
            }),
            groupCollapsed: I({}, e, {
              value: ve
            }),
            groupEnd: I({}, e, {
              value: he
            })
          });
        }
        M < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = S.ReactCurrentDispatcher, re;
    function K(e, t, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            re = a && a[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, G;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Me();
    }
    function ye(e, t) {
      if (!e || te)
        return "";
      {
        var n = G.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      te = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ee.current, ee.current = null, Ye();
      try {
        if (t) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (T) {
              a = T;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (T) {
              a = T;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            a = T;
          }
          e();
        }
      } catch (T) {
        if (T && a && typeof T.stack == "string") {
          for (var c = T.stack.split(`
`), P = a.stack.split(`
`), _ = c.length - 1, w = P.length - 1; _ >= 1 && w >= 0 && c[_] !== P[w]; )
            w--;
          for (; _ >= 1 && w >= 0; _--, w--)
            if (c[_] !== P[w]) {
              if (_ !== 1 || w !== 1)
                do
                  if (_--, w--, w < 0 || c[_] !== P[w]) {
                    var O = `
` + c[_].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, O), O;
                  }
                while (_ >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = b, Ve(), Error.prepareStackTrace = d;
      }
      var Y = e ? e.displayName || e.name : "", L = Y ? K(Y) : "";
      return typeof e == "function" && G.set(e, L), L;
    }
    function Ue(e, t, n) {
      return ye(e, !1);
    }
    function Je(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function H(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Je(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case y:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ue(e.render);
          case N:
            return H(e.type, t, n);
          case v: {
            var a = e, d = a._payload, b = a._init;
            try {
              return H(b(d), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, je = {}, Ee = S.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function qe(e, t, n, a, d) {
      {
        var b = Function.call.bind(U);
        for (var l in e)
          if (b(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var P = Error((a || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              c = e[l](t, l, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              c = _;
            }
            c && !(c instanceof Error) && (X(d), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, l, typeof c), X(null)), c instanceof Error && !(c.message in je) && (je[c.message] = !0, X(d), R("Failed %s type: %s", n, c.message), X(null));
          }
      }
    }
    var Be = Array.isArray;
    function ne(e) {
      return Be(e);
    }
    function ze(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ke(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ke(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), Re(e);
    }
    var J = S.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, we, ae;
    ae = {};
    function He(e) {
      if (U.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (U.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      if (typeof e.ref == "string" && J.current && t && J.current.stateNode !== t) {
        var n = D(J.current.type);
        ae[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(J.current.type), e.ref), ae[n] = !0);
      }
    }
    function Ze(e, t) {
      {
        var n = function() {
          Ne || (Ne = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function er(e, t) {
      {
        var n = function() {
          we || (we = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rr = function(e, t, n, a, d, b, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, t, n, a, d) {
      {
        var b, l = {}, c = null, P = null;
        n !== void 0 && (_e(n), c = "" + n), Xe(t) && (_e(t.key), c = "" + t.key), He(t) && (P = t.ref, Qe(t, d));
        for (b in t)
          U.call(t, b) && !Ge.hasOwnProperty(b) && (l[b] = t[b]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (b in _)
            l[b] === void 0 && (l[b] = _[b]);
        }
        if (c || P) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ze(l, w), P && er(l, w);
        }
        return rr(e, c, P, d, a, J.current, l);
      }
    }
    var se = S.ReactCurrentOwner, Ce = S.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Se() {
      {
        if (se.current) {
          var e = D(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function ar(e) {
      {
        var t = Se();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Te(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = ar(t);
        if (Pe[n])
          return;
        Pe[n] = !0;
        var a = "";
        e && e._owner && e._owner !== se.current && (a = " It was passed a child from " + D(e._owner.type) + "."), W(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), W(null);
      }
    }
    function ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ie(a) && Te(a, t);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = F(e);
          if (typeof d == "function" && d !== e.entries)
            for (var b = d.call(e), l; !(l = b.next()).done; )
              ie(l.value) && Te(l.value, t);
        }
      }
    }
    function sr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === N))
          n = t.propTypes;
        else
          return;
        if (n) {
          var a = D(t);
          qe(n, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !oe) {
          oe = !0;
          var d = D(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var a = t[n];
          if (a !== "children" && a !== "key") {
            W(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Oe = {};
    function De(e, t, n, a, d, b) {
      {
        var l = Le(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = nr(d);
          P ? c += P : c += Se();
          var _;
          e === null ? _ = "null" : ne(e) ? _ = "array" : e !== void 0 && e.$$typeof === s ? (_ = "<" + (D(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, c);
        }
        var w = tr(e, t, n, d, b);
        if (w == null)
          return w;
        if (l) {
          var O = t.children;
          if (O !== void 0)
            if (a)
              if (ne(O)) {
                for (var Y = 0; Y < O.length; Y++)
                  ke(O[Y], e);
                Object.freeze && Object.freeze(O);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(O, e);
        }
        if (U.call(t, "key")) {
          var L = D(e), T = Object.keys(t).filter(function(fr) {
            return fr !== "key";
          }), ce = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[L + ce]) {
            var ur = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, L, ur, L), Oe[L + ce] = !0;
          }
        }
        return e === i ? or(w) : sr(w), w;
      }
    }
    function ir(e, t, n) {
      return De(e, t, n, !0);
    }
    function cr(e, t, n) {
      return De(e, t, n, !1);
    }
    var lr = cr, dr = ir;
    B.Fragment = i, B.jsx = lr, B.jsxs = dr;
  }()), B;
}
process.env.NODE_ENV === "production" ? le.exports = Rr() : le.exports = _r();
var r = le.exports;
const Nr = () => /* @__PURE__ */ r.jsxs("div", { className: "flex min-h-screen items-center justify-center bg-bg-primary text-brand-emerald", children: [
  /* @__PURE__ */ r.jsx(br, { className: "animate-spin", size: 32 }),
  /* @__PURE__ */ r.jsx("span", { className: "ml-4 text-xl font-medium", children: "Cargando contratos..." })
] }), wr = ({
  gateways: o,
  activeGatewayIdx: s,
  activeEventIdx: p,
  onSelectGateway: i,
  onSelectEvent: x
}) => /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: o.map((f, C) => /* @__PURE__ */ r.jsxs("div", { className: "nav-group", children: [
  /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
      onClick: () => i(C),
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-text-muted", children: "📁" }),
          f.name
        ] }),
        /* @__PURE__ */ r.jsxs("span", { className: "text-[11px] text-text-muted", children: [
          f.namespace,
          " ▾"
        ] })
      ]
    }
  ),
  /* @__PURE__ */ r.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: f.events.map((g, u) => {
    const y = s === C && p === u;
    return /* @__PURE__ */ r.jsxs(
      "li",
      {
        onClick: () => {
          i(C), x(u);
        },
        className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${y ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
          /* @__PURE__ */ r.jsx("span", { className: "truncate", children: g.event })
        ]
      },
      u
    );
  }) })
] }, C)) }), E = {
  common: {
    v1: "v1.0.0",
    socketDocs: "Socket Docs",
    gateways: "Gateways",
    events: "eventos",
    connected: "Conectado",
    disconnected: "Desconectado",
    searchPlaceholder: "Buscar eventos...",
    exportContract: "Exportar contrato",
    madeWith: "Hecho con 💚 para NestJS"
  },
  event: {
    type: "EVENT",
    parameters: "Parameters",
    reconnect: "Reconnect",
    connect: "Connect",
    noParameters: "No parameters defined",
    requestBody: "Request body",
    required: "required",
    exampleValue: "Example Value",
    schema: "Schema",
    sendEvent: "Enviar evento",
    includeAck: "Incluir ACK"
  },
  realtime: {
    title: "Respuesta en tiempo real",
    clear: "Limpiar",
    pause: "Pausar",
    noLogs: "Envía un evento para ver la respuesta..."
  }
}, Cr = ({
  gateways: o,
  activeGatewayIdx: s,
  activeEventIdx: p,
  onSelectGateway: i,
  onSelectEvent: x,
  searchQuery: f,
  onSearchChange: C,
  onExport: g
}) => /* @__PURE__ */ r.jsxs("aside", { className: "flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-xl text-brand-emerald", children: "■" }),
    /* @__PURE__ */ r.jsx("span", { className: "text-base font-semibold", children: E.common.socketDocs }),
    /* @__PURE__ */ r.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: E.common.v1 })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "relative mb-6", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "text",
        className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
        placeholder: E.common.searchPlaceholder,
        value: f,
        onChange: (u) => C(u.target.value)
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary", children: [
    /* @__PURE__ */ r.jsx("span", { children: E.common.gateways }),
    /* @__PURE__ */ r.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: o.length })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ r.jsx(
    wr,
    {
      gateways: o,
      activeGatewayIdx: s,
      activeEventIdx: p,
      onSelectGateway: i,
      onSelectEvent: x
    }
  ) }),
  /* @__PURE__ */ r.jsxs("div", { className: "mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: g,
        className: "mb-3 flex w-full items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation py-2 text-text-primary transition hover:bg-border-subtle",
        children: [
          "↓ ",
          E.common.exportContract
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("p", { children: [
      E.common.socketDocs,
      " ",
      E.common.v1
    ] }),
    /* @__PURE__ */ r.jsx("p", { children: E.common.madeWith })
  ] })
] }), Sr = ({
  connected: o,
  gatewayPath: s,
  namespace: p,
  theme: i,
  onToggleTheme: x
}) => /* @__PURE__ */ r.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs", children: [
    /* @__PURE__ */ r.jsx("div", { className: `h-2 w-2 rounded-full ${o ? "bg-brand-emerald" : "bg-red-500"}` }),
    /* @__PURE__ */ r.jsx("span", { children: o ? E.common.connected : E.common.disconnected }),
    /* @__PURE__ */ r.jsx("span", { className: "text-text-muted", children: s })
  ] }),
  /* @__PURE__ */ r.jsx("select", { className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none", children: /* @__PURE__ */ r.jsx("option", { children: p }) }),
  /* @__PURE__ */ r.jsx(
    "button",
    {
      onClick: x,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: i === "dark" ? /* @__PURE__ */ r.jsx(vr, { size: 14 }) : /* @__PURE__ */ r.jsx(hr, { size: 14 })
    }
  ),
  /* @__PURE__ */ r.jsx("button", { className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle", children: /* @__PURE__ */ r.jsx(gr, { size: 14 }) })
] }), Pr = ({
  gatewayName: o,
  eventName: s,
  summary: p,
  description: i
}) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsxs("div", { className: "mb-4 flex gap-2 text-sm text-text-secondary", children: [
    /* @__PURE__ */ r.jsx("span", { children: o }),
    " / ",
    /* @__PURE__ */ r.jsx("span", { children: "events" }),
    " / ",
    /* @__PURE__ */ r.jsx("span", { className: "font-medium text-text-primary", children: s })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ r.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: E.event.type }),
    /* @__PURE__ */ r.jsx("span", { className: "font-mono text-xl font-semibold", children: s }),
    /* @__PURE__ */ r.jsx("span", { className: "text-sm text-text-secondary", children: p })
  ] }),
  /* @__PURE__ */ r.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: i || "No description provided for this event." })
] }), Tr = ({ connected: o, onConnect: s }) => /* @__PURE__ */ r.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
    /* @__PURE__ */ r.jsx("span", { className: "text-[13px] font-semibold", children: E.event.parameters }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: s,
        className: "rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
        children: o ? E.event.reconnect : E.event.connect
      }
    )
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "p-4 italic text-text-secondary", children: E.event.noParameters })
] }), kr = ({ payload: o, onChange: s, onSend: p }) => /* @__PURE__ */ r.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
    /* @__PURE__ */ r.jsxs("span", { className: "text-[13px] font-semibold", children: [
      E.event.requestBody,
      " ",
      /* @__PURE__ */ r.jsx("span", { className: "text-[11px] text-red-400", children: E.event.required })
    ] }),
    /* @__PURE__ */ r.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ r.jsx("option", { children: "application/json" }) })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ r.jsx("span", { className: "cursor-pointer border-b-2 border-brand-emerald pb-1.5 text-brand-emerald", children: E.event.exampleValue }),
      /* @__PURE__ */ r.jsx("span", { className: "cursor-pointer pb-1.5 text-text-secondary", children: E.event.schema })
    ] }),
    /* @__PURE__ */ r.jsx(
      "textarea",
      {
        value: o,
        onChange: (i) => s(i.target.value),
        className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
        rows: 6
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: p,
          className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
          children: [
            /* @__PURE__ */ r.jsx(yr, { size: 14 }),
            " ",
            E.event.sendEvent
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
        /* @__PURE__ */ r.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
        " ",
        E.event.includeAck
      ] })
    ] })
  ] })
] }), Or = ({ logs: o }) => o.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ r.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ r.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ r.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: o.map((s) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ r.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx("span", { className: `font-bold ${s.type === "sent" ? "text-blue-400" : s.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: s.type.toUpperCase() }),
          /* @__PURE__ */ r.jsx("span", { className: "text-text-secondary", children: s.message })
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-text-muted", children: s.timestamp })
      ] }),
      s.data != null && /* @__PURE__ */ r.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(s.data, null, 2) })
    ]
  },
  s.id
)) }), Dr = ({
  connected: o,
  logs: s,
  onClear: p,
  isPaused: i,
  onTogglePause: x
}) => /* @__PURE__ */ r.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ r.jsx("div", { className: `h-2 w-2 rounded-full ${o ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
      /* @__PURE__ */ r.jsx("span", { className: "text-[13px] font-semibold", children: E.realtime.title })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ r.jsxs("button", { onClick: p, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
        /* @__PURE__ */ r.jsx(jr, { size: 12 }),
        " ",
        E.realtime.clear
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: x,
          className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${i ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
          children: i ? "Continuar" : E.realtime.pause
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ r.jsx(Or, { logs: i ? [] : s, onClear: p }) })
] }), Ar = () => {
  const [o, s] = A({}), [p, i] = A([]), x = mr({}), f = (y, m, N) => {
    i(
      (v) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: y,
          message: m,
          data: N
        },
        ...v
      ].slice(0, 50)
    );
  };
  return {
    connected: o,
    logs: p,
    connect: (y, m, N) => {
      if (x.current[y]) {
        x.current[y].disconnect(), delete x.current[y], s((j) => ({ ...j, [y]: !1 })), f("error", `Disconnected from ${m}`);
        return;
      }
      const v = Er(m, {
        path: N ?? "/socket.io",
        transports: ["polling", "websocket"],
        forceNew: !0
      });
      v.on("connect", () => {
        s((j) => ({ ...j, [y]: !0 })), f("received", `Connected to ${m}`);
      }), v.on("connect_error", (j) => {
        f("error", `Connection Error: ${j.message}`);
      }), v.on("disconnect", () => {
        s((j) => ({ ...j, [y]: !1 })), f("error", `Disconnected from ${m}`);
      }), v.onAny((j, ...k) => {
        f("received", `Event: ${j}`, k);
      }), x.current[y] = v;
    },
    emitEvent: (y, m, N) => {
      const v = x.current[y];
      if (!v) {
        alert("Connect first!");
        return;
      }
      try {
        const j = JSON.parse(N);
        f("sent", `Emitting ${m}`, j), v.emit(m, j, (k) => {
          f("received", `ACK for ${m}`, k);
        });
      } catch (j) {
        const k = j instanceof Error ? j.message : "Invalid JSON";
        alert(`Invalid JSON: ${k}`);
      }
    },
    clearLogs: () => {
      i([]);
    }
  };
}, $r = (o) => {
  const s = {};
  return o.gateways.forEach((p) => {
    p.events.forEach((i) => {
      var x;
      s[`${p.name}-${i.event}`] = JSON.stringify(
        ((x = i.payloadSchema) == null ? void 0 : x.example) ?? {},
        null,
        2
      );
    });
  }), s;
}, Fr = () => {
  const [o, s] = A(null), [p, i] = A({}), [x, f] = A({});
  return pr(() => {
    fetch("/socket-docs/json").then((g) => g.json()).then((g) => {
      s(g), i($r(g));
    }).catch(console.error);
  }, []), {
    data: o,
    payloads: p,
    expanded: x,
    setPayloads: i,
    toggleExpand: (g) => {
      f((u) => ({ ...u, [g]: !u[g] }));
    }
  };
}, Ir = (o) => {
  var F;
  const [s, p] = A(0), [i, x] = A(0), [f, C] = A(""), [g, u] = A(!1), [y, m] = A("dark"), N = xr(() => o ? f ? o.gateways.map((S) => ({
    ...S,
    events: S.events.filter(
      (R) => R.event.toLowerCase().includes(f.toLowerCase()) || S.name.toLowerCase().includes(f.toLowerCase())
    )
  })).filter((S) => S.events.length > 0) : o.gateways : [], [o, f]), v = N[s], j = (F = v == null ? void 0 : v.events) == null ? void 0 : F[i];
  return {
    activeGatewayIdx: s,
    setActiveGatewayIdx: p,
    activeEventIdx: i,
    setActiveEventIdx: x,
    searchQuery: f,
    setSearchQuery: C,
    isPaused: g,
    setIsPaused: u,
    theme: y,
    toggleTheme: () => {
      m((S) => S === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!o)
        return;
      const S = new Blob([JSON.stringify(o, null, 2)], { type: "application/json" }), R = URL.createObjectURL(S), h = document.createElement("a");
      h.href = R, h.download = "socket-docs-contract.json", h.click();
    },
    activeGateway: v,
    activeEvent: j,
    filteredGateways: N
  };
}, Vr = () => {
  const { data: o, payloads: s, setPayloads: p } = Fr(), { connected: i, logs: x, connect: f, emitEvent: C, clearLogs: g } = Ar(), {
    activeGatewayIdx: u,
    setActiveGatewayIdx: y,
    activeEventIdx: m,
    setActiveEventIdx: N,
    searchQuery: v,
    setSearchQuery: j,
    isPaused: k,
    setIsPaused: z,
    theme: F,
    toggleTheme: S,
    exportContract: R,
    activeGateway: h,
    activeEvent: $,
    filteredGateways: Q
  } = Ir(o);
  if (!o)
    return /* @__PURE__ */ r.jsx(Nr, {});
  const V = h && $ ? `${h.name}-${$.event}` : "";
  return /* @__PURE__ */ r.jsxs("div", { className: `flex h-screen overflow-hidden font-sans text-text-primary ${F === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ r.jsx(
      Cr,
      {
        gateways: Q,
        activeGatewayIdx: u,
        activeEventIdx: m,
        onSelectGateway: y,
        onSelectEvent: N,
        searchQuery: v,
        onSearchChange: j,
        onExport: R
      }
    ),
    /* @__PURE__ */ r.jsxs("main", { className: "flex flex-1 flex-col overflow-y-auto bg-bg-secondary", children: [
      /* @__PURE__ */ r.jsx(
        Sr,
        {
          connected: !!i[h == null ? void 0 : h.name],
          gatewayPath: (h == null ? void 0 : h.path) ?? "ws://localhost:3000",
          namespace: (h == null ? void 0 : h.namespace) ?? "/",
          theme: F,
          onToggleTheme: S
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "mx-auto w-full max-w-[1200px] p-6", children: h && $ ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(
          Pr,
          {
            gatewayName: h.name,
            eventName: $.event,
            summary: $.summary ?? "",
            description: $.description ?? ""
          }
        ),
        /* @__PURE__ */ r.jsx(
          Tr,
          {
            connected: !!i[h.name],
            onConnect: () => f(h.name, h.namespace, h.path)
          }
        ),
        /* @__PURE__ */ r.jsx(
          kr,
          {
            payload: s[V] ?? "{}",
            onChange: (Z) => p({ ...s, [V]: Z }),
            onSend: () => C(h.name, $.event, s[V] ?? "{}")
          }
        ),
        /* @__PURE__ */ r.jsx(
          Dr,
          {
            connected: !!i[h.name],
            logs: x,
            onClear: g,
            isPaused: k,
            onTogglePause: () => z(!k)
          }
        )
      ] }) : /* @__PURE__ */ r.jsx("div", { className: "flex h-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) })
    ] })
  ] });
};
export {
  Vr as App
};
