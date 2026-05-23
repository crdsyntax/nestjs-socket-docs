var Gr = Object.defineProperty;
var Qr = (e, t, n) => t in e ? Gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qe = (e, t, n) => (Qr(e, typeof t != "symbol" ? t + "" : t, n), n);
import Y, { useState as X, useCallback as Me, useMemo as cr, useEffect as Zr } from "react";
import { RefreshCw as en, Sun as tn, Moon as rn, Settings as nn, Play as sn, RotateCcw as on } from "lucide-react";
import { io as an } from "socket.io-client";
var ht = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function cn() {
  if (zt)
    return Pe;
  zt = 1;
  var e = Y, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, f, p) {
    var d, b = {}, w = null, x = null;
    p !== void 0 && (w = "" + p), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f)
      r.call(f, d) && !o.hasOwnProperty(d) && (b[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        b[d] === void 0 && (b[d] = f[d]);
    return { $$typeof: t, type: l, key: w, ref: x, props: b, _owner: s.current };
  }
  return Pe.Fragment = n, Pe.jsx = a, Pe.jsxs = a, Pe;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function ln() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Y, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), R = Symbol.iterator, v = "@@iterator";
    function g(c) {
      if (c === null || typeof c != "object")
        return null;
      var m = R && c[R] || c[v];
      return typeof m == "function" ? m : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(c) {
      {
        for (var m = arguments.length, E = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
          E[S - 1] = arguments[S];
        O("error", c, E);
      }
    }
    function O(c, m, E) {
      {
        var S = y.ReactDebugCurrentFrame, P = S.getStackAddendum();
        P !== "" && (m += "%s", E = E.concat([P]));
        var L = E.map(function(T) {
          return String(T);
        });
        L.unshift("Warning: " + m), Function.prototype.apply.call(console[c], console, L);
      }
    }
    var N = !1, I = !1, Q = !1, ue = !1, me = !1, he;
    he = Symbol.for("react.module.reference");
    function W(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === o || me || c === s || c === p || c === d || ue || c === x || N || I || Q || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === b || c.$$typeof === a || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === he || c.getModuleId !== void 0));
    }
    function se(c, m, E) {
      var S = c.displayName;
      if (S)
        return S;
      var P = m.displayName || m.name || "";
      return P !== "" ? E + "(" + P + ")" : E;
    }
    function de(c) {
      return c.displayName || "Context";
    }
    function C(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var m = c;
            return de(m) + ".Consumer";
          case a:
            var E = c;
            return de(E._context) + ".Provider";
          case f:
            return se(c, c.render, "ForwardRef");
          case b:
            var S = c.displayName || null;
            return S !== null ? S : C(c.type) || "Memo";
          case w: {
            var P = c, L = P._payload, T = P._init;
            try {
              return C(T(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, oe = 0, ae, xe, fe, k, F, H, be;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function ce() {
      {
        if (oe === 0) {
          ae = console.log, xe = console.info, fe = console.warn, k = console.error, F = console.group, H = console.groupCollapsed, be = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        oe++;
      }
    }
    function ee() {
      {
        if (oe--, oe === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, c, {
              value: ae
            }),
            info: D({}, c, {
              value: xe
            }),
            warn: D({}, c, {
              value: fe
            }),
            error: D({}, c, {
              value: k
            }),
            group: D({}, c, {
              value: F
            }),
            groupCollapsed: D({}, c, {
              value: H
            }),
            groupEnd: D({}, c, {
              value: be
            })
          });
        }
        oe < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = y.ReactCurrentDispatcher, Z;
    function A(c, m, E) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (P) {
            var S = P.stack.trim().match(/\n( *(at )?)/);
            Z = S && S[1] || "";
          }
        return `
` + Z + c;
      }
    }
    var le = !1, pe;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Re();
    }
    function _e(c, m) {
      if (!c || le)
        return "";
      {
        var E = pe.get(c);
        if (E !== void 0)
          return E;
      }
      var S;
      le = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = ge.current, ge.current = null, ce();
      try {
        if (m) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (K) {
              S = K;
            }
            Reflect.construct(c, [], T);
          } else {
            try {
              T.call();
            } catch (K) {
              S = K;
            }
            c.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            S = K;
          }
          c();
        }
      } catch (K) {
        if (K && S && typeof K.stack == "string") {
          for (var _ = K.stack.split(`
`), V = S.stack.split(`
`), B = _.length - 1, $ = V.length - 1; B >= 1 && $ >= 0 && _[B] !== V[$]; )
            $--;
          for (; B >= 1 && $ >= 0; B--, $--)
            if (_[B] !== V[$]) {
              if (B !== 1 || $ !== 1)
                do
                  if (B--, $--, $ < 0 || _[B] !== V[$]) {
                    var te = `
` + _[B].replace(" at new ", " at ");
                    return c.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", c.displayName)), typeof c == "function" && pe.set(c, te), te;
                  }
                while (B >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        le = !1, ge.current = L, ee(), Error.prepareStackTrace = P;
      }
      var Se = c ? c.displayName || c.name : "", ve = Se ? A(Se) : "";
      return typeof c == "function" && pe.set(c, ve), ve;
    }
    function st(c, m, E) {
      return _e(c, !1);
    }
    function ye(c) {
      var m = c.prototype;
      return !!(m && m.isReactComponent);
    }
    function Be(c, m, E) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return _e(c, ye(c));
      if (typeof c == "string")
        return A(c);
      switch (c) {
        case p:
          return A("Suspense");
        case d:
          return A("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return st(c.render);
          case b:
            return Be(c.type, m, E);
          case w: {
            var S = c, P = S._payload, L = S._init;
            try {
              return Be(L(P), m, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, At = {}, Pt = y.ReactDebugCurrentFrame;
    function $e(c) {
      if (c) {
        var m = c._owner, E = Be(c.type, c._source, m ? m.type : null);
        Pt.setExtraStackFrame(E);
      } else
        Pt.setExtraStackFrame(null);
    }
    function _r(c, m, E, S, P) {
      {
        var L = Function.call.bind(Te);
        for (var T in c)
          if (L(c, T)) {
            var _ = void 0;
            try {
              if (typeof c[T] != "function") {
                var V = Error((S || "React class") + ": " + E + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              _ = c[T](m, T, S, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              _ = B;
            }
            _ && !(_ instanceof Error) && ($e(P), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", E, T, typeof _), $e(null)), _ instanceof Error && !(_.message in At) && (At[_.message] = !0, $e(P), h("Failed %s type: %s", E, _.message), $e(null));
          }
      }
    }
    var Tr = Array.isArray;
    function ot(c) {
      return Tr(c);
    }
    function Ar(c) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, E = m && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E;
      }
    }
    function Pr(c) {
      try {
        return kt(c), !1;
      } catch {
        return !0;
      }
    }
    function kt(c) {
      return "" + c;
    }
    function Dt(c) {
      if (Pr(c))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(c)), kt(c);
    }
    var Ae = y.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Lt, at;
    at = {};
    function Dr(c) {
      if (Te.call(c, "ref")) {
        var m = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Fr(c) {
      if (Te.call(c, "key")) {
        var m = Object.getOwnPropertyDescriptor(c, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Lr(c, m) {
      if (typeof c.ref == "string" && Ae.current && m && Ae.current.stateNode !== m) {
        var E = C(Ae.current.type);
        at[E] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Ae.current.type), c.ref), at[E] = !0);
      }
    }
    function Ur(c, m) {
      {
        var E = function() {
          Ft || (Ft = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Ir(c, m) {
      {
        var E = function() {
          Lt || (Lt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Br = function(c, m, E, S, P, L, T) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: m,
        ref: E,
        props: T,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function $r(c, m, E, S, P) {
      {
        var L, T = {}, _ = null, V = null;
        E !== void 0 && (Dt(E), _ = "" + E), Fr(m) && (Dt(m.key), _ = "" + m.key), Dr(m) && (V = m.ref, Lr(m, P));
        for (L in m)
          Te.call(m, L) && !kr.hasOwnProperty(L) && (T[L] = m[L]);
        if (c && c.defaultProps) {
          var B = c.defaultProps;
          for (L in B)
            T[L] === void 0 && (T[L] = B[L]);
        }
        if (_ || V) {
          var $ = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          _ && Ur(T, $), V && Ir(T, $);
        }
        return Br(c, _, V, P, S, Ae.current, T);
      }
    }
    var it = y.ReactCurrentOwner, Ut = y.ReactDebugCurrentFrame;
    function je(c) {
      if (c) {
        var m = c._owner, E = Be(c.type, c._source, m ? m.type : null);
        Ut.setExtraStackFrame(E);
      } else
        Ut.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function lt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function It() {
      {
        if (it.current) {
          var c = C(it.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function qr(c) {
      {
        if (c !== void 0) {
          var m = c.fileName.replace(/^.*[\\\/]/, ""), E = c.lineNumber;
          return `

Check your code at ` + m + ":" + E + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function Mr(c) {
      {
        var m = It();
        if (!m) {
          var E = typeof c == "string" ? c : c.displayName || c.name;
          E && (m = `

Check the top-level render call using <` + E + ">.");
        }
        return m;
      }
    }
    function $t(c, m) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var E = Mr(m);
        if (Bt[E])
          return;
        Bt[E] = !0;
        var S = "";
        c && c._owner && c._owner !== it.current && (S = " It was passed a child from " + C(c._owner.type) + "."), je(c), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, S), je(null);
      }
    }
    function qt(c, m) {
      {
        if (typeof c != "object")
          return;
        if (ot(c))
          for (var E = 0; E < c.length; E++) {
            var S = c[E];
            lt(S) && $t(S, m);
          }
        else if (lt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var P = g(c);
          if (typeof P == "function" && P !== c.entries)
            for (var L = P.call(c), T; !(T = L.next()).done; )
              lt(T.value) && $t(T.value, m);
        }
      }
    }
    function Hr(c) {
      {
        var m = c.type;
        if (m == null || typeof m == "string")
          return;
        var E;
        if (typeof m == "function")
          E = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === b))
          E = m.propTypes;
        else
          return;
        if (E) {
          var S = C(m);
          _r(E, c.props, "prop", S, c);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var P = C(m);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zr(c) {
      {
        for (var m = Object.keys(c.props), E = 0; E < m.length; E++) {
          var S = m[E];
          if (S !== "children" && S !== "key") {
            je(c), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), je(null);
            break;
          }
        }
        c.ref !== null && (je(c), h("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var Mt = {};
    function Ht(c, m, E, S, P, L) {
      {
        var T = W(c);
        if (!T) {
          var _ = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = qr(P);
          V ? _ += V : _ += It();
          var B;
          c === null ? B = "null" : ot(c) ? B = "array" : c !== void 0 && c.$$typeof === t ? (B = "<" + (C(c.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : B = typeof c, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, _);
        }
        var $ = $r(c, m, E, P, L);
        if ($ == null)
          return $;
        if (T) {
          var te = m.children;
          if (te !== void 0)
            if (S)
              if (ot(te)) {
                for (var Se = 0; Se < te.length; Se++)
                  qt(te[Se], c);
                Object.freeze && Object.freeze(te);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qt(te, c);
        }
        if (Te.call(m, "key")) {
          var ve = C(c), K = Object.keys(m).filter(function(Xr) {
            return Xr !== "key";
          }), ut = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mt[ve + ut]) {
            var Yr = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, ve, Yr, ve), Mt[ve + ut] = !0;
          }
        }
        return c === r ? zr($) : Hr($), $;
      }
    }
    function Wr(c, m, E) {
      return Ht(c, m, E, !0);
    }
    function Jr(c, m, E) {
      return Ht(c, m, E, !1);
    }
    var Vr = Jr, Kr = Wr;
    ke.Fragment = r, ke.jsx = Vr, ke.jsxs = Kr;
  }()), ke;
}
process.env.NODE_ENV === "production" ? ht.exports = cn() : ht.exports = ln();
var i = ht.exports;
const Jt = () => /* @__PURE__ */ i.jsxs("div", { className: "flex min-h-screen items-center justify-center bg-bg-primary text-brand-emerald", children: [
  /* @__PURE__ */ i.jsx(en, { className: "animate-spin", size: 32 }),
  /* @__PURE__ */ i.jsx("span", { className: "ml-4 text-xl font-medium", children: "Cargando contratos..." })
] }), un = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s
}) => /* @__PURE__ */ i.jsx("div", { className: "space-y-4", children: e.map((o, a) => /* @__PURE__ */ i.jsxs("div", { className: "nav-group", children: [
  /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
      onClick: () => r(a),
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-text-muted", children: "📁" }),
          o.name
        ] }),
        /* @__PURE__ */ i.jsxs("span", { className: "text-[11px] text-text-muted", children: [
          o.namespace,
          " ▾"
        ] })
      ]
    }
  ),
  /* @__PURE__ */ i.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: o.events.map((l, f) => {
    const p = t === a && n === f;
    return /* @__PURE__ */ i.jsxs(
      "li",
      {
        onClick: () => {
          r(a), s(f);
        },
        className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${p ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
          /* @__PURE__ */ i.jsx("span", { className: "truncate", children: l.event })
        ]
      },
      f
    );
  }) })
] }, a)) }), U = {
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
}, dn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  searchQuery: o,
  onSearchChange: a,
  onExport: l
}) => /* @__PURE__ */ i.jsxs("aside", { className: "flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
    /* @__PURE__ */ i.jsx("span", { className: "text-xl text-brand-emerald", children: "■" }),
    /* @__PURE__ */ i.jsx("span", { className: "text-base font-semibold", children: U.common.socketDocs }),
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: U.common.v1 })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "relative mb-6", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
        placeholder: U.common.searchPlaceholder,
        value: o,
        onChange: (f) => a(f.target.value)
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary", children: [
    /* @__PURE__ */ i.jsx("span", { children: U.common.gateways }),
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx(
    un,
    {
      gateways: e,
      activeGatewayIdx: t,
      activeEventIdx: n,
      onSelectGateway: r,
      onSelectEvent: s
    }
  ) }),
  /* @__PURE__ */ i.jsxs("div", { className: "mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: l,
        className: "mb-3 flex w-full items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation py-2 text-text-primary transition hover:bg-border-subtle",
        children: [
          "↓ ",
          U.common.exportContract
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("p", { children: [
      U.common.socketDocs,
      " ",
      U.common.v1
    ] }),
    /* @__PURE__ */ i.jsx("p", { children: U.common.madeWith })
  ] })
] }), fn = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  theme: r,
  onToggleTheme: s,
  onOpenSettings: o
}) => /* @__PURE__ */ i.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs", children: [
    /* @__PURE__ */ i.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald" : "bg-red-500"}` }),
    /* @__PURE__ */ i.jsx("span", { children: e ? U.common.connected : U.common.disconnected }),
    /* @__PURE__ */ i.jsx("span", { className: "text-text-muted", children: t })
  ] }),
  /* @__PURE__ */ i.jsx("select", { className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none", children: /* @__PURE__ */ i.jsx("option", { children: n }) }),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      onClick: s,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: r === "dark" ? /* @__PURE__ */ i.jsx(tn, { size: 14 }) : /* @__PURE__ */ i.jsx(rn, { size: 14 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      onClick: o,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: /* @__PURE__ */ i.jsx(nn, { size: 14 })
    }
  )
] }), pn = ({
  gatewayName: e,
  eventName: t,
  summary: n,
  description: r
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "mb-4 flex gap-2 text-sm text-text-secondary", children: [
    /* @__PURE__ */ i.jsx("span", { children: e }),
    " / ",
    /* @__PURE__ */ i.jsx("span", { children: "events" }),
    " / ",
    /* @__PURE__ */ i.jsx("span", { className: "font-medium text-text-primary", children: t })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: U.event.type }),
    /* @__PURE__ */ i.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ i.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ i.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), mn = ({ connected: e, schema: t, onConnect: n }) => {
  const r = (t == null ? void 0 : t.properties) || {}, s = Object.keys(r), o = (t == null ? void 0 : t.required) || [];
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ i.jsx("span", { className: "text-[13px] font-semibold", children: U.event.parameters }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: n,
          className: "rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
          children: e ? U.event.reconnect : U.event.connect
        }
      )
    ] }),
    s.length > 0 ? /* @__PURE__ */ i.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ i.jsxs("table", { className: "w-full text-left text-[13px]", children: [
      /* @__PURE__ */ i.jsx("thead", { children: /* @__PURE__ */ i.jsxs("tr", { className: "border-b border-border-subtle bg-bg-primary/30 text-text-muted", children: [
        /* @__PURE__ */ i.jsx("th", { className: "px-4 py-2 font-medium", children: "Name" }),
        /* @__PURE__ */ i.jsx("th", { className: "px-4 py-2 font-medium", children: "Description" })
      ] }) }),
      /* @__PURE__ */ i.jsx("tbody", { className: "divide-y divide-border-subtle", children: s.map((a) => {
        const l = r[a], f = o.includes(a);
        return /* @__PURE__ */ i.jsxs("tr", { className: "hover:bg-bg-primary/20", children: [
          /* @__PURE__ */ i.jsxs("td", { className: "px-4 py-3", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "font-mono font-bold text-text-primary", children: [
              a,
              f && /* @__PURE__ */ i.jsx("span", { className: "ml-1 text-red-400", children: "*" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "text-[11px] text-text-muted italic", children: [
              l.type,
              l.format ? `(${l.format})` : ""
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("td", { className: "px-4 py-3 text-text-secondary leading-relaxed", children: [
            l.description || "No description.",
            l.enum && /* @__PURE__ */ i.jsxs("div", { className: "mt-1 flex flex-wrap gap-1", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Enum:" }),
              l.enum.map((p) => /* @__PURE__ */ i.jsx("span", { className: "rounded bg-bg-elevation px-1 py-0.5 text-[10px] font-mono text-brand-emerald", children: p }, p))
            ] })
          ] })
        ] }, a);
      }) })
    ] }) }) : /* @__PURE__ */ i.jsx("div", { className: "p-4 italic text-text-secondary", children: U.event.noParameters })
  ] });
}, bn = ({ payload: e, schema: t, responseSchema: n, emits: r, onChange: s, onSend: o }) => {
  const [a, l] = X("example"), [f, p] = X(r || "");
  return Y.useEffect(() => {
    p(r || "");
  }, [r]), /* @__PURE__ */ i.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i.jsxs("span", { className: "text-[13px] font-semibold", children: [
          U.event.requestBody,
          " ",
          /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-red-400", children: U.event.required })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Listen for:" }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              value: f,
              onChange: (d) => p(d.target.value),
              placeholder: "Event name...",
              className: "bg-bg-primary border border-border-subtle rounded px-2 py-0.5 text-[11px] text-brand-emerald outline-none focus:border-brand-emerald w-40"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ i.jsx("option", { children: "application/json" }) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
        /* @__PURE__ */ i.jsx(
          "span",
          {
            onClick: () => l("example"),
            className: `cursor-pointer pb-1.5 transition-colors ${a === "example" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: U.event.exampleValue
          }
        ),
        /* @__PURE__ */ i.jsx(
          "span",
          {
            onClick: () => l("schema"),
            className: `cursor-pointer pb-1.5 transition-colors ${a === "schema" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Request Schema"
          }
        ),
        n && /* @__PURE__ */ i.jsx(
          "span",
          {
            onClick: () => l("schema"),
            className: "text-text-muted cursor-default ml-auto text-[11px] uppercase font-bold",
            children: "Response schema available"
          }
        )
      ] }),
      a === "example" ? /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            value: e,
            onChange: (d) => s(d.target.value),
            className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
            rows: 8
          }
        ),
        n && /* @__PURE__ */ i.jsxs("div", { className: "rounded border border-border-subtle bg-bg-primary/50 p-3", children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-[11px] font-bold text-text-muted uppercase mb-2", children: "Expected Response Schema" }),
          /* @__PURE__ */ i.jsx("pre", { className: "text-[11px] text-text-secondary overflow-x-auto max-h-40", children: JSON.stringify(n, null, 2) })
        ] })
      ] }) : /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-[11px] font-bold text-text-muted uppercase mb-2", children: "Request" }),
          /* @__PURE__ */ i.jsx("div", { className: "rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[12px] leading-relaxed text-text-secondary overflow-x-auto max-h-[300px]", children: /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(t, null, 2) }) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-[11px] font-bold text-text-muted uppercase mb-2", children: "Response" }),
          /* @__PURE__ */ i.jsx("div", { className: "rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[12px] leading-relaxed text-text-secondary overflow-x-auto max-h-[300px]", children: /* @__PURE__ */ i.jsx("pre", { children: n ? JSON.stringify(n, null, 2) : "No response schema defined." }) })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            onClick: o,
            className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
            children: [
              /* @__PURE__ */ i.jsx(sn, { size: 14 }),
              " ",
              U.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          U.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, hn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ i.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ i.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ i.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: e.map((t) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: `font-bold ${t.type === "sent" ? "text-blue-400" : t.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: t.type.toUpperCase() }),
          /* @__PURE__ */ i.jsx("span", { className: "text-text-secondary", children: t.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "text-[10px] text-text-muted", children: t.timestamp })
      ] }),
      t.data != null && /* @__PURE__ */ i.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
    ]
  },
  t.id
)) }), xn = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: s
}) => /* @__PURE__ */ i.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ i.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
      /* @__PURE__ */ i.jsx("span", { className: "text-[13px] font-semibold", children: U.realtime.title })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ i.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
        /* @__PURE__ */ i.jsx(on, { size: 12 }),
        " ",
        U.realtime.clear
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: s,
          className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
          children: r ? "Continuar" : U.realtime.pause
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ i.jsx(hn, { logs: r ? [] : t, onClear: n }) })
] }), Vt = ({
  show: e,
  onClose: t,
  onSave: n,
  initialApiConfig: r,
  initialSocketConfig: s,
  isStandalone: o,
  theme: a,
  activeGatewayNamespace: l
}) => {
  const [f, p] = Y.useState(r), [d, b] = Y.useState(s), [w, x] = Y.useState(!1), [R, v] = Y.useState(null);
  Y.useEffect(() => {
    e && (p(r), b(s), v(null));
  }, [e, r, s]);
  const g = (h) => h.startsWith("/") ? h : `/${h}`, y = async () => {
    x(!0), v(null);
    const h = f.baseUrl.replace(/\/$/, ""), O = d.namespace === "/" ? l ?? "/" : d.namespace;
    try {
      const { io: N } = await import("socket.io-client"), I = N(`${h}${g(O)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      });
      I.on("connect", () => {
        v({ success: !0, message: "¡Conexión exitosa!" }), x(!1), I.disconnect();
      }), I.on("connect_error", (Q) => {
        v({ success: !1, message: `Error: ${Q.message}` }), x(!1), I.disconnect();
      });
    } catch (N) {
      v({ success: !1, message: `Error: ${N instanceof Error ? N.message : "Error desconocido"}` }), x(!1);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ i.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${a === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ i.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Configuración Completa" }),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto pr-2", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ i.jsx("h3", { className: "text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Documentación API" }),
          /* @__PURE__ */ i.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${o ? "bg-orange-500/20 text-orange-500" : "bg-brand-emerald/20 text-brand-emerald"}`, children: o ? "Modo Standalone" : "Modo Integrado" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Base URL" }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                value: f.baseUrl,
                onChange: (h) => p({ ...f, baseUrl: h.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                placeholder: "http://localhost:3000"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsxs("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: [
              "JSON Path ",
              o && /* @__PURE__ */ i.jsx("span", { className: "text-[10px] text-orange-500 font-normal", children: "(Bloqueado en Standalone)" })
            ] }),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                type: "text",
                disabled: o,
                value: f.jsonPath,
                onChange: (h) => p({ ...f, jsonPath: h.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${o ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { children: [
          /* @__PURE__ */ i.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
              /* @__PURE__ */ i.jsx(
                "textarea",
                {
                  value: d.auth.token,
                  onChange: (h) => b({
                    ...d,
                    auth: { ...d.auth, token: h.target.value }
                  }),
                  className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "Bearer eyJhbG..."
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "User ID" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: d.auth.userId,
                  onChange: (h) => b({
                    ...d,
                    auth: { ...d.auth, userId: h.target.value }
                  }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ i.jsxs("section", { children: [
          /* @__PURE__ */ i.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Socket.IO Core" }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Namespace Override" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: d.namespace,
                  onChange: (h) => b({ ...d, namespace: h.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Socket Path" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "text",
                  value: d.path,
                  onChange: (h) => b({ ...d, path: h.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
              /* @__PURE__ */ i.jsxs(
                "select",
                {
                  value: d.transports.join(","),
                  onChange: (h) => {
                    const O = h.target.value;
                    let N = ["polling", "websocket"];
                    O === "websocket" && (N = ["websocket"]), O === "polling" && (N = ["polling"]), b({ ...d, transports: N });
                  },
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ i.jsx("option", { value: "polling,websocket", children: "Automático" }),
                    /* @__PURE__ */ i.jsx("option", { value: "websocket", children: "Websocket" }),
                    /* @__PURE__ */ i.jsx("option", { value: "polling", children: "Polling" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("section", { children: [
          /* @__PURE__ */ i.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reconexión y Tiempos" }),
          /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "reconnection",
                  checked: d.reconnection,
                  onChange: (h) => b({ ...d, reconnection: h.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ i.jsx("label", { htmlFor: "reconnection", className: "text-xs font-medium text-text-muted", children: "Habilitar Reconexión" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "autoConnect",
                  checked: d.autoConnect,
                  onChange: (h) => b({ ...d, autoConnect: h.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ i.jsx("label", { htmlFor: "autoConnect", className: "text-xs font-medium text-text-muted", children: "Auto Conectar" })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Máx Intentos" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionAttempts === 1 / 0 ? 0 : d.reconnectionAttempts,
                  onChange: (h) => b({ ...d, reconnectionAttempts: h.target.value === "0" ? 1 / 0 : parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "0 = Infinito"
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Timeout (ms)" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  value: d.timeout,
                  onChange: (h) => b({ ...d, timeout: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Inicial (ms)" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelay,
                  onChange: (h) => b({ ...d, reconnectionDelay: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { children: [
              /* @__PURE__ */ i.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Máximo (ms)" }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelayMax,
                  onChange: (h) => b({ ...d, reconnectionDelayMax: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: y,
            disabled: w,
            className: `rounded px-4 py-2 text-sm font-semibold transition-all ${w ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
            children: w ? "Probando..." : "Probar Conexión"
          }
        ),
        R && /* @__PURE__ */ i.jsx("span", { className: `text-xs font-medium ${R.success ? "text-brand-emerald" : "text-red-500"}`, children: R.message })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: t,
            className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => n(f, d),
            className: "rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20 transition-all active:scale-95",
            children: "Guardar Configuración"
          }
        )
      ] })
    ] })
  ] }) }) : null;
};
class gn {
  constructor() {
    qe(this, "sockets", {});
  }
  connect(t, n, r = {}, s) {
    this.sockets[t] && this.sockets[t].disconnect();
    const o = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, a = an(n, o);
    return a.on("connect", s.onConnect), a.on("connect_error", (l) => s.onConnectError(l)), a.on("disconnect", (l) => s.onDisconnect(l)), a.onAny(s.onAny), this.sockets[t] = a, a;
  }
  disconnect(t) {
    this.sockets[t] && (this.sockets[t].disconnect(), delete this.sockets[t]);
  }
  emit(t, n, r, s) {
    const o = this.sockets[t];
    if (!o)
      throw new Error("Socket not connected");
    s ? o.emit(n, r, s) : o.emit(n, r);
  }
  getSocket(t) {
    return this.sockets[t];
  }
}
const dt = new gn(), yn = (e = {}) => {
  const [t, n] = X({}), [r, s] = X([]), o = Me((p, d, b) => {
    s(
      (w) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: p,
          message: d,
          data: b
        },
        ...w
      ].slice(0, 50)
    );
  }, []), a = Me((p, d, b) => {
    if (t[p]) {
      dt.disconnect(p), n((x) => ({ ...x, [p]: !1 })), o("error", `Disconnected from ${d}`);
      return;
    }
    const w = {
      ...e,
      options: {
        path: b ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    console.log(`[SocketDocs] Connecting to ${p} at ${d}...`, w.options), dt.connect(p, d, w, {
      onConnect: () => {
        console.log(`[SocketDocs] Connected to ${p}`), n((x) => ({ ...x, [p]: !0 })), o("received", `Connected to ${d}`);
      },
      onDisconnect: (x) => {
        console.log(`[SocketDocs] Disconnected from ${p}: ${x}`), n((R) => ({ ...R, [p]: !1 })), o("error", `Disconnected from ${d} (${x})`);
      },
      onConnectError: (x) => {
        console.error(`[SocketDocs] Connection error for ${p}:`, x), n((R) => ({ ...R, [p]: !1 })), o("error", `Connection Error: ${x.message}`);
      },
      onAny: (x, ...R) => {
        o("received", `Event: ${x}`, R);
      }
    });
  }, [e, t, o]), l = Me((p, d, b) => {
    try {
      const w = JSON.parse(b);
      o("sent", `Emitting ${d}`, w), dt.emit(p, d, w, (x) => {
        o("received", `ACK for ${d}`, x);
      });
    } catch (w) {
      const x = w instanceof Error ? w.message : "Invalid JSON";
      console.error(`Emit error: ${x}`);
    }
  }, [o]), f = Me(() => {
    s([]);
  }, []);
  return {
    connected: t,
    logs: r,
    connect: a,
    emitEvent: l,
    clearLogs: f
  };
};
function lr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vn } = Object.prototype, { getPrototypeOf: Ge } = Object, { iterator: Qe, toStringTag: ur } = Symbol, Ze = ((e) => (t) => {
  const n = vn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ie = (e) => (e = e.toLowerCase(), (t) => Ze(t) === e), et = (e) => (t) => typeof t === e, { isArray: Oe } = Array, Ce = et("undefined");
function Fe(e) {
  return e !== null && !Ce(e) && e.constructor !== null && !Ce(e.constructor) && G(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dr = ie("ArrayBuffer");
function En(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dr(e.buffer), t;
}
const wn = et("string"), G = et("function"), fr = et("number"), Le = (e) => e !== null && typeof e == "object", Rn = (e) => e === !0 || e === !1, We = (e) => {
  if (Ze(e) !== "object")
    return !1;
  const t = Ge(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ur in e) && !(Qe in e);
}, jn = (e) => {
  if (!Le(e) || Fe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Sn = ie("Date"), Nn = ie("File"), Cn = (e) => !!(e && typeof e.uri < "u"), On = (e) => e && typeof e.getParts < "u", _n = ie("Blob"), Tn = ie("FileList"), An = (e) => Le(e) && G(e.pipe);
function Pn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Kt = Pn(), Yt = typeof Kt.FormData < "u" ? Kt.FormData : void 0, kn = (e) => {
  if (!e)
    return !1;
  if (Yt && e instanceof Yt)
    return !0;
  const t = Ge(e);
  if (!t || t === Object.prototype || !G(e.append))
    return !1;
  const n = Ze(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && G(e.toString) && e.toString() === "[object FormData]";
}, Dn = ie("URLSearchParams"), [Fn, Ln, Un, In] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ie), Bn = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ue(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Oe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Fe(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let l;
    for (r = 0; r < a; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function pr(e, t) {
  if (Fe(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ee = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), mr = (e) => !Ce(e) && e !== Ee;
function xt(...e) {
  const { caseless: t, skipUndefined: n } = mr(this) && this || {}, r = {}, s = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const l = t && pr(r, a) || a, f = gt(r, l) ? r[l] : void 0;
    We(f) && We(o) ? r[l] = xt(f, o) : We(o) ? r[l] = xt({}, o) : Oe(o) ? r[l] = o.slice() : (!n || !Ce(o)) && (r[l] = o);
  };
  for (let o = 0, a = e.length; o < a; o++)
    e[o] && Ue(e[o], s);
  return r;
}
const $n = (e, t, n, { allOwnKeys: r } = {}) => (Ue(
  t,
  (s, o) => {
    n && G(s) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: lr(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), qn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Mn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Hn = (e, t, n, r) => {
  let s, o, a;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = !0);
    e = n !== !1 && Ge(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wn = (e) => {
  if (!e)
    return null;
  if (Oe(e))
    return e;
  let t = e.length;
  if (!fr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Jn = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ge(Uint8Array)), Vn = (e, t) => {
  const r = (e && e[Qe]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Kn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Yn = ie("HTMLFormElement"), Xn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), gt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Gn = ie("RegExp"), br = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ue(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Qn = (e) => {
  br(e, (t, n) => {
    if (G(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (G(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Zn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Oe(e) ? r(e) : r(String(e).split(t)), n;
}, es = () => {
}, ts = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rs(e) {
  return !!(e && G(e.append) && e[ur] === "FormData" && e[Qe]);
}
const ns = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Le(r)) {
      if (t.has(r))
        return;
      if (Fe(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const s = Oe(r) ? [] : {};
        return Ue(r, (o, a) => {
          const l = n(o);
          !Ce(l) && (s[a] = l);
        }), t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, ss = ie("AsyncFunction"), os = (e) => e && (Le(e) || G(e)) && G(e.then) && G(e.catch), hr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ee.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Ee && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ee.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", G(Ee.postMessage)), as = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ee) : typeof process < "u" && process.nextTick || hr, is = (e) => e != null && G(e[Qe]), u = {
  isArray: Oe,
  isArrayBuffer: dr,
  isBuffer: Fe,
  isFormData: kn,
  isArrayBufferView: En,
  isString: wn,
  isNumber: fr,
  isBoolean: Rn,
  isObject: Le,
  isPlainObject: We,
  isEmptyObject: jn,
  isReadableStream: Fn,
  isRequest: Ln,
  isResponse: Un,
  isHeaders: In,
  isUndefined: Ce,
  isDate: Sn,
  isFile: Nn,
  isReactNativeBlob: Cn,
  isReactNative: On,
  isBlob: _n,
  isRegExp: Gn,
  isFunction: G,
  isStream: An,
  isURLSearchParams: Dn,
  isTypedArray: Jn,
  isFileList: Tn,
  forEach: Ue,
  merge: xt,
  extend: $n,
  trim: Bn,
  stripBOM: qn,
  inherits: Mn,
  toFlatObject: Hn,
  kindOf: Ze,
  kindOfTest: ie,
  endsWith: zn,
  toArray: Wn,
  forEachEntry: Vn,
  matchAll: Kn,
  isHTMLForm: Yn,
  hasOwnProperty: gt,
  hasOwnProp: gt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: br,
  freezeMethods: Qn,
  toObjectSet: Zn,
  toCamelCase: Xn,
  noop: es,
  toFiniteNumber: ts,
  findKey: pr,
  global: Ee,
  isContextDefined: mr,
  isSpecCompliantForm: rs,
  toJSONObject: ns,
  isAsyncFn: ss,
  isThenable: os,
  setImmediate: hr,
  asap: as,
  isIterable: is
}, cs = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ls = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && cs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function us(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const ds = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), fs = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function wt(e, t) {
  return u.isArray(e) ? e.map((n) => wt(n, t)) : us(String(e).replace(t, ""));
}
const ps = (e) => wt(e, ds), ms = (e) => wt(e, fs);
function xr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (n, r) => {
    t[r] = ms(n);
  }), t;
}
const Xt = Symbol("internals");
function De(e) {
  return e && String(e).trim().toLowerCase();
}
function Je(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Je) : ps(String(e));
}
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const hs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ft(e, t, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function xs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function gs(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, o, a) {
        return this[r].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class tt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, p) {
      const d = De(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const b = u.findKey(s, d);
      (!b || s[b] === void 0 || p === !0 || p === void 0 && s[b] !== !1) && (s[b || f] = Je(l));
    }
    const a = (l, f) => u.forEach(l, (p, d) => o(p, d, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (u.isString(t) && (t = t.trim()) && !hs(t))
      a(ls(t), n);
    else if (u.isObject(t) && u.isIterable(t)) {
      let l = {}, f, p;
      for (const d of t) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[p = d[0]] = (f = l[p]) ? u.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      a(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = De(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return bs(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = De(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ft(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = De(a), a) {
        const l = u.findKey(r, a);
        l && (!n || ft(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return u.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ft(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (s, o) => {
      const a = u.findKey(r, o);
      if (a) {
        n[a] = Je(s), delete n[o];
        return;
      }
      const l = t ? xs(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Je(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Xt] = this[Xt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const l = De(a);
      r[l] || (gs(s, a), r[l] = !0);
    }
    return u.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
tt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(tt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(tt);
const ne = tt, ys = "[REDACTED ****]";
function vs(e) {
  if (u.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (u.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Es(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], s = (o) => {
    if (o === null || typeof o != "object" || u.isBuffer(o))
      return o;
    if (r.indexOf(o) !== -1)
      return;
    o instanceof ne && (o = o.toJSON()), r.push(o);
    let a;
    if (u.isArray(o))
      a = [], o.forEach((l, f) => {
        const p = s(l);
        u.isUndefined(p) || (a[f] = p);
      });
    else {
      if (!u.isPlainObject(o) && vs(o))
        return r.pop(), o;
      a = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(o)) {
        const p = n.has(l.toLowerCase()) ? ys : s(f);
        u.isUndefined(p) || (a[l] = p);
      }
    }
    return r.pop(), a;
  };
  return s(e);
}
class z extends Error {
  static from(t, n, r, s, o, a) {
    const l = new z(t.message, n || t.code, r, s, o);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), a && Object.assign(l, a), l;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, s, o) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const t = this.config, n = t && u.hasOwnProp(t, "redact") ? t.redact : void 0, r = u.isArray(n) && n.length > 0 ? Es(t, n) : u.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
}
z.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
z.ERR_BAD_OPTION = "ERR_BAD_OPTION";
z.ECONNABORTED = "ECONNABORTED";
z.ETIMEDOUT = "ETIMEDOUT";
z.ECONNREFUSED = "ECONNREFUSED";
z.ERR_NETWORK = "ERR_NETWORK";
z.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
z.ERR_DEPRECATED = "ERR_DEPRECATED";
z.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
z.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
z.ERR_CANCELED = "ERR_CANCELED";
z.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
z.ERR_INVALID_URL = "ERR_INVALID_URL";
z.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const j = z, ws = null;
function yt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function gr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = gr(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Rs(e) {
  return u.isArray(e) && !e.some(yt);
}
const js = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rt(e, t, n) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = u.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(g, y) {
      return !u.isUndefined(y[g]);
    }
  );
  const r = n.metaTokens, s = n.visitor || b, o = n.dots, a = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, p = l && u.isSpecCompliantForm(t);
  if (!u.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(v) {
    if (v === null)
      return "";
    if (u.isDate(v))
      return v.toISOString();
    if (u.isBoolean(v))
      return v.toString();
    if (!p && u.isBlob(v))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(v) || u.isTypedArray(v) ? p && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function b(v, g, y) {
    let h = v;
    if (u.isReactNative(t) && u.isReactNativeBlob(v))
      return t.append(pt(y, g, o), d(v)), !1;
    if (v && !y && typeof v == "object") {
      if (u.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), v = JSON.stringify(v);
      else if (u.isArray(v) && Rs(v) || (u.isFileList(v) || u.endsWith(g, "[]")) && (h = u.toArray(v)))
        return g = gr(g), h.forEach(function(N, I) {
          !(u.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? pt([g], I, o) : a === null ? g : g + "[]",
            d(N)
          );
        }), !1;
    }
    return yt(v) ? !0 : (t.append(pt(y, g, o), d(v)), !1);
  }
  const w = [], x = Object.assign(js, {
    defaultVisitor: b,
    convertValue: d,
    isVisitable: yt
  });
  function R(v, g, y = 0) {
    if (!u.isUndefined(v)) {
      if (y > f)
        throw new j(
          "Object is too deeply nested (" + y + " levels). Max depth: " + f,
          j.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (w.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      w.push(v), u.forEach(v, function(O, N) {
        (!(u.isUndefined(O) || O === null) && s.call(t, O, u.isString(N) ? N.trim() : N, g, x)) === !0 && R(O, g ? g.concat(N) : [N], y + 1);
      }), w.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Gt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function Rt(e, t) {
  this._pairs = [], e && rt(e, this, t);
}
const yr = Rt.prototype;
yr.append = function(t, n) {
  this._pairs.push([t, n]);
};
yr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Gt);
  } : Gt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ss(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function vr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ss, s = u.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let a;
  if (o ? a = o(t, s) : a = u.isURLSearchParams(t) ? t.toString() : new Rt(t, s).toString(r), a) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ns {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Qt = Ns, jt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Cs = typeof URLSearchParams < "u" ? URLSearchParams : Rt, Os = typeof FormData < "u" ? FormData : null, _s = typeof Blob < "u" ? Blob : null, Ts = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cs,
    FormData: Os,
    Blob: _s
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, St = typeof window < "u" && typeof document < "u", vt = typeof navigator == "object" && navigator || void 0, As = St && (!vt || ["ReactNative", "NativeScript", "NS"].indexOf(vt.product) < 0), Ps = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ks = St && window.location.href || "http://localhost", Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: St,
  hasStandardBrowserEnv: As,
  hasStandardBrowserWebWorkerEnv: Ps,
  navigator: vt,
  origin: ks
}, Symbol.toStringTag, { value: "Module" })), J = {
  ...Ds,
  ...Ts
};
function Fs(e, t) {
  return rt(e, new J.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return J.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Ls(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Us(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Er(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), f = o >= n.length;
    return a = !a && u.isArray(s) ? s.length : a, f ? (u.hasOwnProp(s, a) ? s[a] = u.isArray(s[a]) ? s[a].concat(r) : [s[a], r] : s[a] = r, !l) : ((!u.hasOwnProp(s, a) || !u.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && u.isArray(s[a]) && (s[a] = Us(s[a])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, s) => {
      t(Ls(r), s, n, 0);
    }), n;
  }
  return null;
}
const Ne = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function Is(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Nt = {
  transitional: jt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = u.isObject(t);
      if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return s ? JSON.stringify(Er(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (o) {
        const f = Ne(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Fs(t, f).toString();
        if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const p = Ne(this, "env"), d = p && p.FormData;
          return rt(
            l ? { "files[]": t } : t,
            d && new d(),
            f
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Is(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Ne(this, "transitional") || Nt.transitional, r = n && n.forcedJSONParsing, s = Ne(this, "responseType"), o = s === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !s || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Ne(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? j.from(f, j.ERR_BAD_RESPONSE, this, null, Ne(this, "response")) : f;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: J.classes.FormData,
    Blob: J.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Nt.headers[e] = {};
});
const Ct = Nt;
function mt(e, t) {
  const n = this || Ct, r = t || n, s = ne.from(r.headers);
  let o = r.data;
  return u.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function wr(e) {
  return !!(e && e.__CANCEL__);
}
class Bs extends j {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", j.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const Ie = Bs;
function Rr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new j(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? j.ERR_BAD_REQUEST : j.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function $s(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function qs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const p = Date.now(), d = r[o];
    a || (a = p), n[s] = f, r[s] = p;
    let b = o, w = 0;
    for (; b !== s; )
      w += n[b++], b = b % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - a < t)
      return;
    const x = d && p - d;
    return x ? Math.round(w * 1e3 / x) : void 0;
  };
}
function Ms(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const a = (p, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const d = Date.now(), b = d - n;
    b >= r ? a(p, d) : (s = p, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - b)));
  }, () => s && a(s)];
}
const Ye = (e, t, n = 3) => {
  let r = 0;
  const s = qs(50, 250);
  return Ms((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const a = o.loaded, l = o.lengthComputable ? o.total : void 0, f = l != null ? Math.min(a, l) : a, p = Math.max(0, f - r), d = s(p);
    r = Math.max(r, f);
    const b = {
      loaded: f,
      total: l,
      progress: l ? f / l : void 0,
      bytes: p,
      rate: d || void 0,
      estimated: d && l ? (l - f) / d : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(b);
  }, n);
}, Zt = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, er = (e) => (...t) => u.asap(() => e(...t)), Hs = J.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, J.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(J.origin),
  J.navigator && /(msie|trident)/i.test(J.navigator.userAgent)
) : () => !0, zs = J.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, a) {
      if (typeof document > "u")
        return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), u.isString(r) && l.push(`path=${r}`), u.isString(s) && l.push(`domain=${s}`), o === !0 && l.push("secure"), u.isString(a) && l.push(`SameSite=${a}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u")
        return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), s = r.indexOf("=");
        if (s !== -1 && r.slice(0, s) === e)
          return decodeURIComponent(r.slice(s + 1));
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ws(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Js(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jr(e, t, n) {
  let r = !Ws(t);
  return e && (r || n === !1) ? Js(e, t) : t;
}
const tr = (e) => e instanceof ne ? { ...e } : e;
function we(e, t) {
  t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(p, d, b, w) {
    return u.isPlainObject(p) && u.isPlainObject(d) ? u.merge.call({ caseless: w }, p, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(p, d, b, w) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p, b, w);
    } else
      return r(p, d, b, w);
  }
  function o(p, d) {
    if (!u.isUndefined(d))
      return r(void 0, d);
  }
  function a(p, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, d);
  }
  function l(p, d, b) {
    if (u.hasOwnProp(t, b))
      return r(p, d);
    if (u.hasOwnProp(e, b))
      return r(void 0, p);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    allowedSocketPaths: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (p, d, b) => s(tr(p), tr(d), b, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const b = u.hasOwnProp(f, d) ? f[d] : s, w = u.hasOwnProp(e, d) ? e[d] : void 0, x = u.hasOwnProp(t, d) ? t[d] : void 0, R = b(w, x, d);
    u.isUndefined(R) && b !== l || (n[d] = R);
  }), n;
}
const Vs = ["content-type", "content-length"];
function Ks(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    Vs.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const Ys = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Sr = (e) => {
  const t = we({}, e), n = (w) => u.hasOwnProp(t, w) ? t[w] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), p = n("baseURL"), d = n("allowAbsoluteUrls"), b = n("url");
  if (t.headers = l = ne.from(l), t.url = vr(
    jr(p, b, d),
    e.params,
    e.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? Ys(f.password) : ""))
  ), u.isFormData(r) && (J.hasStandardBrowserEnv || J.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && Ks(l, r.getHeaders(), n("formDataHeaderPolicy"))), J.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(t)), s === !0 || s == null && Hs(t.url))) {
    const x = o && a && zs.read(a);
    x && l.set(o, x);
  }
  return t;
}, Xs = typeof XMLHttpRequest < "u", Gs = Xs && function(e) {
  return new Promise(function(n, r) {
    const s = Sr(e);
    let o = s.data;
    const a = ne.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: p } = s, d, b, w, x, R;
    function v() {
      x && x(), R && R(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(s.method.toUpperCase(), s.url, !0), g.timeout = s.timeout;
    function y() {
      if (!g)
        return;
      const O = ne.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: O,
        config: e,
        request: g
      };
      Rr(
        function(ue) {
          n(ue), v();
        },
        function(ue) {
          r(ue), v();
        },
        I
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(y);
    }, g.onabort = function() {
      g && (r(new j("Request aborted", j.ECONNABORTED, e, g)), v(), g = null);
    }, g.onerror = function(N) {
      const I = N && N.message ? N.message : "Network Error", Q = new j(I, j.ERR_NETWORK, e, g);
      Q.event = N || null, r(Q), v(), g = null;
    }, g.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const I = s.transitional || jt;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(
        new j(
          N,
          I.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
          e,
          g
        )
      ), v(), g = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in g && u.forEach(xr(a), function(N, I) {
      g.setRequestHeader(I, N);
    }), u.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials), l && l !== "json" && (g.responseType = s.responseType), p && ([w, R] = Ye(p, !0), g.addEventListener("progress", w)), f && g.upload && ([b, x] = Ye(f), g.upload.addEventListener("progress", b), g.upload.addEventListener("loadend", x)), (s.cancelToken || s.signal) && (d = (O) => {
      g && (r(!O || O.type ? new Ie(null, e, g) : O), g.abort(), v(), g = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const h = $s(s.url);
    if (h && !J.protocols.includes(h)) {
      r(
        new j(
          "Unsupported protocol " + h + ":",
          j.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    g.send(o || null);
  });
}, Qs = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(f) {
    if (!r) {
      r = !0, a();
      const p = f instanceof Error ? f : this.reason;
      n.abort(
        p instanceof j ? p : new Ie(p instanceof Error ? p.message : p)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new j(`timeout of ${t}ms exceeded`, j.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((f) => f.addEventListener("abort", s));
  const { signal: l } = n;
  return l.unsubscribe = () => u.asap(a), l;
}, Zs = Qs, eo = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, to = async function* (e, t) {
  for await (const n of ro(e))
    yield* eo(n, t);
}, ro = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, rr = (e, t, n, r) => {
  const s = to(e, t);
  let o = 0, a, l = (f) => {
    a || (a = !0, r && r(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: p, value: d } = await s.next();
          if (p) {
            l(), f.close();
            return;
          }
          let b = d.byteLength;
          if (n) {
            let w = o += b;
            n(w);
          }
          f.enqueue(new Uint8Array(d));
        } catch (p) {
          throw l(p), p;
        }
      },
      cancel(f) {
        return l(f), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
function no(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:"))
    return 0;
  const t = e.indexOf(",");
  if (t < 0)
    return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let a = r.length;
    const l = r.length;
    for (let x = 0; x < l; x++)
      if (r.charCodeAt(x) === 37 && x + 2 < l) {
        const R = r.charCodeAt(x + 1), v = r.charCodeAt(x + 2);
        (R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102) && (v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102) && (a -= 2, x += 2);
      }
    let f = 0, p = l - 1;
    const d = (x) => x >= 2 && r.charCodeAt(x - 2) === 37 && // '%'
    r.charCodeAt(x - 1) === 51 && // '3'
    (r.charCodeAt(x) === 68 || r.charCodeAt(x) === 100);
    p >= 0 && (r.charCodeAt(p) === 61 ? (f++, p--) : d(p) && (f++, p -= 3)), f === 1 && p >= 0 && (r.charCodeAt(p) === 61 || d(p)) && f++;
    const w = Math.floor(a / 4) * 3 - (f || 0);
    return w > 0 ? w : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let o = 0;
  for (let a = 0, l = r.length; a < l; a++) {
    const f = r.charCodeAt(a);
    if (f < 128)
      o += 1;
    else if (f < 2048)
      o += 2;
    else if (f >= 55296 && f <= 56319 && a + 1 < l) {
      const p = r.charCodeAt(a + 1);
      p >= 56320 && p <= 57343 ? (o += 4, a++) : o += 3;
    } else
      o += 3;
  }
  return o;
}
const Ot = "1.16.1", nr = 64 * 1024, { isFunction: He } = u, sr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, so = (e) => {
  const t = u.global !== void 0 && u.global !== null ? u.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = u.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: s, Request: o, Response: a } = e, l = s ? He(s) : typeof fetch == "function", f = He(o), p = He(a);
  if (!l)
    return !1;
  const d = l && He(n), b = l && (typeof r == "function" ? ((y) => (h) => y.encode(h))(new r()) : async (y) => new Uint8Array(await new o(y).arrayBuffer())), w = f && d && sr(() => {
    let y = !1;
    const h = new o(J.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }), O = h.headers.has("Content-Type");
    return h.body != null && h.body.cancel(), y && !O;
  }), x = p && d && sr(() => u.isReadableStream(new a("").body)), R = {
    stream: x && ((y) => y.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !R[y] && (R[y] = (h, O) => {
      let N = h && h[y];
      if (N)
        return N.call(h);
      throw new j(
        `Response type '${y}' is not supported`,
        j.ERR_NOT_SUPPORT,
        O
      );
    });
  });
  const v = async (y) => {
    if (y == null)
      return 0;
    if (u.isBlob(y))
      return y.size;
    if (u.isSpecCompliantForm(y))
      return (await new o(J.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(y) || u.isArrayBuffer(y))
      return y.byteLength;
    if (u.isURLSearchParams(y) && (y = y + ""), u.isString(y))
      return (await b(y)).byteLength;
  }, g = async (y, h) => {
    const O = u.toFiniteNumber(y.getContentLength());
    return O ?? v(h);
  };
  return async (y) => {
    let {
      url: h,
      method: O,
      data: N,
      signal: I,
      cancelToken: Q,
      timeout: ue,
      onDownloadProgress: me,
      onUploadProgress: he,
      responseType: W,
      headers: se,
      withCredentials: de = "same-origin",
      fetchOptions: C,
      maxContentLength: D,
      maxBodyLength: oe
    } = Sr(y);
    const ae = u.isNumber(D) && D > -1, xe = u.isNumber(oe) && oe > -1;
    let fe = s || fetch;
    W = W ? (W + "").toLowerCase() : "text";
    let k = Zs(
      [I, Q && Q.toAbortSignal()],
      ue
    ), F = null;
    const H = k && k.unsubscribe && (() => {
      k.unsubscribe();
    });
    let be;
    try {
      if (ae && typeof h == "string" && h.startsWith("data:") && no(h) > D)
        throw new j(
          "maxContentLength size of " + D + " exceeded",
          j.ERR_BAD_RESPONSE,
          y,
          F
        );
      if (xe && O !== "get" && O !== "head") {
        const A = await g(se, N);
        if (typeof A == "number" && isFinite(A) && A > oe)
          throw new j(
            "Request body larger than maxBodyLength limit",
            j.ERR_BAD_REQUEST,
            y,
            F
          );
      }
      if (he && w && O !== "get" && O !== "head" && (be = await g(se, N)) !== 0) {
        let A = new o(h, {
          method: "POST",
          body: N,
          duplex: "half"
        }), le;
        if (u.isFormData(N) && (le = A.headers.get("content-type")) && se.setContentType(le), A.body) {
          const [pe, Re] = Zt(
            be,
            Ye(er(he))
          );
          N = rr(A.body, nr, pe, Re);
        }
      }
      u.isString(de) || (de = de ? "include" : "omit");
      const M = f && "credentials" in o.prototype;
      if (u.isFormData(N)) {
        const A = se.getContentType();
        A && /^multipart\/form-data/i.test(A) && !/boundary=/i.test(A) && se.delete("content-type");
      }
      se.set("User-Agent", "axios/" + Ot, !1);
      const ce = {
        ...C,
        signal: k,
        method: O.toUpperCase(),
        headers: xr(se.normalize()),
        body: N,
        duplex: "half",
        credentials: M ? de : void 0
      };
      F = f && new o(h, ce);
      let ee = await (f ? fe(F, C) : fe(h, ce));
      if (ae) {
        const A = u.toFiniteNumber(ee.headers.get("content-length"));
        if (A != null && A > D)
          throw new j(
            "maxContentLength size of " + D + " exceeded",
            j.ERR_BAD_RESPONSE,
            y,
            F
          );
      }
      const ge = x && (W === "stream" || W === "response");
      if (x && ee.body && (me || ae || ge && H)) {
        const A = {};
        ["status", "statusText", "headers"].forEach((ye) => {
          A[ye] = ee[ye];
        });
        const le = u.toFiniteNumber(ee.headers.get("content-length")), [pe, Re] = me && Zt(
          le,
          Ye(er(me), !0)
        ) || [];
        let _e = 0;
        const st = (ye) => {
          if (ae && (_e = ye, _e > D))
            throw new j(
              "maxContentLength size of " + D + " exceeded",
              j.ERR_BAD_RESPONSE,
              y,
              F
            );
          pe && pe(ye);
        };
        ee = new a(
          rr(ee.body, nr, st, () => {
            Re && Re(), H && H();
          }),
          A
        );
      }
      W = W || "text";
      let Z = await R[u.findKey(R, W) || "text"](
        ee,
        y
      );
      if (ae && !x && !ge) {
        let A;
        if (Z != null && (typeof Z.byteLength == "number" ? A = Z.byteLength : typeof Z.size == "number" ? A = Z.size : typeof Z == "string" && (A = typeof r == "function" ? new r().encode(Z).byteLength : Z.length)), typeof A == "number" && A > D)
          throw new j(
            "maxContentLength size of " + D + " exceeded",
            j.ERR_BAD_RESPONSE,
            y,
            F
          );
      }
      return !ge && H && H(), await new Promise((A, le) => {
        Rr(A, le, {
          data: Z,
          headers: ne.from(ee.headers),
          status: ee.status,
          statusText: ee.statusText,
          config: y,
          request: F
        });
      });
    } catch (M) {
      if (H && H(), k && k.aborted && k.reason instanceof j) {
        const ce = k.reason;
        throw ce.config = y, F && (ce.request = F), M !== ce && (ce.cause = M), ce;
      }
      throw M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new j(
          "Network Error",
          j.ERR_NETWORK,
          y,
          F,
          M && M.response
        ),
        {
          cause: M.cause || M
        }
      ) : j.from(M, M && M.code, y, F, M && M.response);
    }
  };
}, oo = /* @__PURE__ */ new Map(), Nr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let a = o.length, l = a, f, p, d = oo;
  for (; l--; )
    f = o[l], p = d.get(f), p === void 0 && d.set(f, p = l ? /* @__PURE__ */ new Map() : so(t)), d = p;
  return p;
};
Nr();
const _t = {
  http: ws,
  xhr: Gs,
  fetch: {
    get: Nr
  }
};
u.forEach(_t, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const or = (e) => `- ${e}`, ao = (e) => u.isFunction(e) || e === null || e === !1;
function io(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let a = 0; a < n; a++) {
    r = e[a];
    let l;
    if (s = r, !ao(r) && (s = _t[(l = String(r)).toLowerCase()], s === void 0))
      throw new j(`Unknown adapter '${l}'`);
    if (s && (u.isFunction(s) || (s = s.get(t))))
      break;
    o[l || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(o).map(
      ([f, p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? a.length > 1 ? `since :
` + a.map(or).join(`
`) : " " + or(a[0]) : "as no adapter specified";
    throw new j(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Cr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: io,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: _t
};
function bt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ie(null, e);
}
function ar(e) {
  return bt(e), e.headers = ne.from(e.headers), e.data = mt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cr.getAdapter(e.adapter || Ct.adapter, e)(e).then(
    function(r) {
      bt(e), e.response = r;
      try {
        r.data = mt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = ne.from(r.headers), r;
    },
    function(r) {
      if (!wr(r) && (bt(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = mt.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = ne.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  nt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ir = {};
nt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Ot + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, l) => {
    if (t === !1)
      throw new j(
        s(a, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !ir[a] && (ir[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, l) : !0;
  };
};
nt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function co(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (a) {
      const l = e[o], f = l === void 0 || a(l, o, e);
      if (f !== !0)
        throw new j(
          "option " + o + " must be " + f,
          j.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
  }
}
const Ve = {
  assertOptions: co,
  validators: nt
}, re = Ve.validators;
class Xe {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Qt(),
      response: new Qt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = (() => {
          if (!s.stack)
            return "";
          const a = s.stack.indexOf(`
`);
          return a === -1 ? "" : s.stack.slice(a + 1);
        })();
        try {
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const a = o.indexOf(`
`), l = a === -1 ? -1 : o.indexOf(`
`, a + 1), f = l === -1 ? "" : o.slice(l + 1);
            String(r.stack).endsWith(f) || (r.stack += `
` + o);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = we(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ve.assertOptions(
      r,
      {
        silentJSONParsing: re.transitional(re.boolean),
        forcedJSONParsing: re.transitional(re.boolean),
        clarifyTimeoutError: re.transitional(re.boolean),
        legacyInterceptorReqResOrdering: re.transitional(re.boolean)
      },
      !1
    ), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ve.assertOptions(
      s,
      {
        encode: re.function,
        serialize: re.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ve.assertOptions(
      n,
      {
        baseUrl: re.spelling("baseURL"),
        withXsrfToken: re.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && u.merge(o.common, o[n.method]);
    o && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (R) => {
      delete o[R];
    }), n.headers = ne.concat(a, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1)
        return;
      f = f && v.synchronous;
      const g = n.transitional || jt;
      g && g.legacyInterceptorReqResOrdering ? l.unshift(v.fulfilled, v.rejected) : l.push(v.fulfilled, v.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(v) {
      p.push(v.fulfilled, v.rejected);
    });
    let d, b = 0, w;
    if (!f) {
      const R = [ar.bind(this), void 0];
      for (R.unshift(...l), R.push(...p), w = R.length, d = Promise.resolve(n); b < w; )
        d = d.then(R[b++], R[b++]);
      return d;
    }
    w = l.length;
    let x = n;
    for (; b < w; ) {
      const R = l[b++], v = l[b++];
      try {
        x = R(x);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      d = ar.call(this, x);
    } catch (R) {
      return Promise.reject(R);
    }
    for (b = 0, w = p.length; b < w; )
      d = d.then(p[b++], p[b++]);
    return d;
  }
  getUri(t) {
    t = we(this.defaults, t);
    const n = jr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return vr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Xe.prototype[t] = function(n, r) {
    return this.request(
      we(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
u.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(o, a, l) {
      return this.request(
        we(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: a
        })
      );
    };
  }
  Xe.prototype[t] = n(), t !== "query" && (Xe.prototype[t + "Form"] = n(!0));
});
const Ke = Xe;
class Tt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, l) {
      r.reason || (r.reason = new Ie(o, a, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Tt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const lo = Tt;
function uo(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function fo(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Et = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Et).forEach(([e, t]) => {
  Et[t] = e;
});
const po = Et;
function Or(e) {
  const t = new Ke(e), n = lr(Ke.prototype.request, t);
  return u.extend(n, Ke.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Or(we(e, s));
  }, n;
}
const q = Or(Ct);
q.Axios = Ke;
q.CanceledError = Ie;
q.CancelToken = lo;
q.isCancel = wr;
q.VERSION = Ot;
q.toFormData = rt;
q.AxiosError = j;
q.Cancel = q.CanceledError;
q.all = function(t) {
  return Promise.all(t);
};
q.spread = uo;
q.isAxiosError = fo;
q.mergeConfig = we;
q.AxiosHeaders = ne;
q.formToJSON = (e) => Er(u.isHTMLForm(e) ? new FormData(e) : e);
q.getAdapter = Cr.getAdapter;
q.HttpStatusCode = po;
q.default = q;
const mo = q;
class bo {
  constructor(t = {}) {
    qe(this, "instance");
    qe(this, "jsonPath");
    this.instance = mo.create({
      baseURL: t.baseUrl || window.location.origin
    }), this.jsonPath = t.jsonPath || "/socket-docs/json";
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
  }
}
const ho = (e) => new bo(e), xo = (e) => {
  const t = {};
  return e.gateways.forEach((n) => {
    n.events.forEach((r) => {
      var s;
      t[`${n.name}-${r.event}`] = JSON.stringify(
        ((s = r.payloadSchema) == null ? void 0 : s.example) ?? {},
        null,
        2
      );
    });
  }), t;
}, go = (e = {}) => {
  const [t, n] = X(null), [r, s] = X({}), [o, a] = X({}), [l, f] = X(!0), [p, d] = X(null), b = cr(() => ho(e), [e.baseUrl, e.jsonPath]);
  return Zr(() => {
    f(!0), b.fetchDocs().then((x) => {
      n(x), s(xo(x)), d(null);
    }).catch((x) => {
      console.error("Failed to fetch socket docs:", x), d(x instanceof Error ? x : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [b]), {
    data: t,
    payloads: r,
    expanded: o,
    loading: l,
    error: p,
    setPayloads: s,
    toggleExpand: (x) => {
      a((R) => ({ ...R, [x]: !R[x] }));
    }
  };
}, yo = (e) => {
  var g;
  const [t, n] = X(0), [r, s] = X(0), [o, a] = X(""), [l, f] = X(!1), [p, d] = X("dark"), b = cr(() => e ? o ? e.gateways.map((y) => ({
    ...y,
    events: y.events.filter(
      (h) => h.event.toLowerCase().includes(o.toLowerCase()) || y.name.toLowerCase().includes(o.toLowerCase())
    )
  })).filter((y) => y.events.length > 0) : e.gateways : [], [e, o]), w = b[t], x = (g = w == null ? void 0 : w.events) == null ? void 0 : g[r];
  return {
    activeGatewayIdx: t,
    setActiveGatewayIdx: n,
    activeEventIdx: r,
    setActiveEventIdx: s,
    searchQuery: o,
    setSearchQuery: a,
    isPaused: l,
    setIsPaused: f,
    theme: p,
    toggleTheme: () => {
      d((y) => y === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const y = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), h = URL.createObjectURL(y), O = document.createElement("a");
      O.href = h, O.download = "socket-docs-contract.json", O.click();
    },
    activeGateway: w,
    activeEvent: x,
    filteredGateways: b
  };
}, ze = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, jo = () => {
  const e = Y.useMemo(() => !window.location.pathname.includes("socket-docs"), []), [t, n] = Y.useState(() => {
    var H;
    const k = localStorage.getItem(ze.API), F = (H = window.SOCKET_DOCS_CONFIG) == null ? void 0 : H.api;
    return k ? JSON.parse(k) : F ? { ...F } : {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
  }), [r, s] = Y.useState(() => {
    var be;
    const k = localStorage.getItem(ze.SOCKET), F = (be = window.SOCKET_DOCS_CONFIG) == null ? void 0 : be.socket, H = {
      namespace: "/",
      path: "/socket.io",
      transports: ["polling", "websocket"],
      reconnection: !0,
      reconnectionAttempts: 1 / 0,
      reconnectionDelay: 1e3,
      reconnectionDelayMax: 5e3,
      timeout: 2e4,
      autoConnect: !0,
      randomizationFactor: 0.5,
      auth: {
        token: "",
        userId: ""
      }
    };
    return k ? JSON.parse(k) : F ? { ...H, ...F } : H;
  }), [o, a] = Y.useState(!1), { data: l, payloads: f, setPayloads: p, loading: d, error: b } = go(t), w = Y.useMemo(() => ({
    options: {
      path: r.path,
      transports: r.transports,
      reconnection: r.reconnection,
      reconnectionAttempts: r.reconnectionAttempts,
      reconnectionDelay: r.reconnectionDelay,
      reconnectionDelayMax: r.reconnectionDelayMax,
      timeout: r.timeout,
      autoConnect: r.autoConnect,
      randomizationFactor: r.randomizationFactor
    },
    auth: r.auth
  }), [r]), { connected: x, logs: R, connect: v, emitEvent: g, clearLogs: y } = yn(w), {
    activeGatewayIdx: h,
    setActiveGatewayIdx: O,
    activeEventIdx: N,
    setActiveEventIdx: I,
    searchQuery: Q,
    setSearchQuery: ue,
    isPaused: me,
    setIsPaused: he,
    theme: W,
    toggleTheme: se,
    exportContract: de,
    activeGateway: C,
    activeEvent: D,
    filteredGateways: oe
  } = yo(l);
  Y.useEffect(() => {
    if (r.autoConnect && C && !x[C.name]) {
      const k = t.baseUrl.replace(/\/$/, ""), F = r.namespace === "/" ? C.namespace : r.namespace, H = setTimeout(() => {
        v(
          C.name,
          `${k}${xe(F)}`,
          C.path
        );
      }, 500);
      return () => clearTimeout(H);
    }
  }, [C == null ? void 0 : C.name, r.autoConnect, t.baseUrl, r.namespace, v, x]);
  const ae = (k, F) => {
    localStorage.setItem(ze.API, JSON.stringify(k)), localStorage.setItem(ze.SOCKET, JSON.stringify(F)), n(k), s(F), a(!1);
  }, xe = (k) => k.startsWith("/") ? k : `/${k}`;
  if (d)
    return /* @__PURE__ */ i.jsx(Jt, {});
  if (b)
    return /* @__PURE__ */ i.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${W === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ i.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-text-muted", children: b.message }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => a(!0),
            className: "px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors",
            children: "Configurar API"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors",
            children: "Reintentar"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx(
        Vt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: ae,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: W
        }
      )
    ] });
  if (!l)
    return /* @__PURE__ */ i.jsx(Jt, {});
  const fe = C && D ? `${C.name}-${r.path}` : "";
  return /* @__PURE__ */ i.jsxs("div", { className: `flex h-screen overflow-hidden font-sans text-text-primary ${W === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ i.jsx(
      dn,
      {
        gateways: oe,
        activeGatewayIdx: h,
        activeEventIdx: N,
        onSelectGateway: O,
        onSelectEvent: I,
        searchQuery: Q,
        onSearchChange: ue,
        onExport: de
      }
    ),
    /* @__PURE__ */ i.jsxs("main", { className: "flex flex-1 flex-col overflow-y-auto bg-bg-secondary", children: [
      /* @__PURE__ */ i.jsx(
        fn,
        {
          connected: C ? !!x[C.name] : !1,
          gatewayPath: (C == null ? void 0 : C.path) ?? "ws://localhost:3000",
          namespace: (C == null ? void 0 : C.namespace) ?? "/",
          theme: W,
          onToggleTheme: se,
          onOpenSettings: () => a(!0)
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "mx-auto w-full max-w-[1200px] p-6", children: C && D ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          pn,
          {
            gatewayName: C.name,
            eventName: D.event,
            summary: D.summary ?? "",
            description: D.description ?? ""
          }
        ),
        /* @__PURE__ */ i.jsx(
          mn,
          {
            connected: !!x[C.name],
            schema: D.payloadSchema,
            onConnect: () => {
              const k = t.baseUrl.replace(/\/$/, ""), F = r.namespace === "/" ? C.namespace : r.namespace;
              v(
                C.name,
                `${k}${xe(F)}`,
                C.path
              );
            }
          }
        ),
        /* @__PURE__ */ i.jsx(
          bn,
          {
            payload: f[fe] ?? "{}",
            schema: D.payloadSchema,
            responseSchema: D.responseSchema,
            emits: D.emits,
            onChange: (k) => p({ ...f, [fe]: k }),
            onSend: () => g(C.name, D.event, f[fe] ?? "{}")
          }
        ),
        /* @__PURE__ */ i.jsx(
          xn,
          {
            connected: !!x[C.name],
            logs: R,
            onClear: y,
            isPaused: me,
            onTogglePause: () => he(!me)
          }
        )
      ] }) : /* @__PURE__ */ i.jsx("div", { className: "flex h-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) }),
      /* @__PURE__ */ i.jsx(
        Vt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: ae,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: W,
          activeGatewayNamespace: C == null ? void 0 : C.namespace
        }
      )
    ] })
  ] });
};
export {
  jo as App
};
