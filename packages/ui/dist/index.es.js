var Zr = Object.defineProperty;
var en = (t, e, n) => e in t ? Zr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var qe = (t, e, n) => (en(t, typeof e != "symbol" ? e + "" : e, n), n);
import q, { useState as ee, useCallback as Me, useMemo as lr, useEffect as zt } from "react";
import { RefreshCw as tn, AlertCircle as rn, Sun as nn, Moon as sn, Settings as on, Play as an, RotateCcw as cn } from "lucide-react";
import { io as ln } from "socket.io-client";
var ht = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function dn() {
  if (Wt)
    return ke;
  Wt = 1;
  var t = q, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, f, p) {
    var d, b = {}, E = null, x = null;
    p !== void 0 && (E = "" + p), f.key !== void 0 && (E = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f)
      r.call(f, d) && !o.hasOwnProperty(d) && (b[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        b[d] === void 0 && (b[d] = f[d]);
    return { $$typeof: e, type: l, key: E, ref: x, props: b, _owner: s.current };
  }
  return ke.Fragment = n, ke.jsx = a, ke.jsxs = a, ke;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function un() {
  return Jt || (Jt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = q, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), R = Symbol.iterator, v = "@@iterator";
    function g(c) {
      if (c === null || typeof c != "object")
        return null;
      var m = R && c[R] || c[v];
      return typeof m == "function" ? m : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(c) {
      {
        for (var m = arguments.length, w = new Array(m > 1 ? m - 1 : 0), S = 1; S < m; S++)
          w[S - 1] = arguments[S];
        C("error", c, w);
      }
    }
    function C(c, m, w) {
      {
        var S = y.ReactDebugCurrentFrame, P = S.getStackAddendum();
        P !== "" && (m += "%s", w = w.concat([P]));
        var F = w.map(function(A) {
          return String(A);
        });
        F.unshift("Warning: " + m), Function.prototype.apply.call(console[c], console, F);
      }
    }
    var N = !1, U = !1, re = !1, fe = !1, be = !1, he;
    he = Symbol.for("react.module.reference");
    function se(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === o || be || c === s || c === p || c === d || fe || c === x || N || U || re || typeof c == "object" && c !== null && (c.$$typeof === E || c.$$typeof === b || c.$$typeof === a || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === he || c.getModuleId !== void 0));
    }
    function oe(c, m, w) {
      var S = c.displayName;
      if (S)
        return S;
      var P = m.displayName || m.name || "";
      return P !== "" ? w + "(" + P + ")" : w;
    }
    function pe(c) {
      return c.displayName || "Context";
    }
    function H(c) {
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
            return pe(m) + ".Consumer";
          case a:
            var w = c;
            return pe(w._context) + ".Provider";
          case f:
            return oe(c, c.render, "ForwardRef");
          case b:
            var S = c.displayName || null;
            return S !== null ? S : H(c.type) || "Memo";
          case E: {
            var P = c, F = P._payload, A = P._init;
            try {
              return H(A(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, le = 0, O, V, xe, X, z, Q, D;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function W() {
      {
        if (le === 0) {
          O = console.log, V = console.info, xe = console.warn, X = console.error, z = console.group, Q = console.groupCollapsed, D = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: _,
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
        le++;
      }
    }
    function Y() {
      {
        if (le--, le === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, c, {
              value: O
            }),
            info: $({}, c, {
              value: V
            }),
            warn: $({}, c, {
              value: xe
            }),
            error: $({}, c, {
              value: X
            }),
            group: $({}, c, {
              value: z
            }),
            groupCollapsed: $({}, c, {
              value: Q
            }),
            groupEnd: $({}, c, {
              value: D
            })
          });
        }
        le < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = y.ReactCurrentDispatcher, ne;
    function k(c, m, w) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (P) {
            var S = P.stack.trim().match(/\n( *(at )?)/);
            ne = S && S[1] || "";
          }
        return `
` + ne + c;
      }
    }
    var ue = !1, me;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Re();
    }
    function _e(c, m) {
      if (!c || ue)
        return "";
      {
        var w = me.get(c);
        if (w !== void 0)
          return w;
      }
      var S;
      ue = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = ge.current, ge.current = null, W();
      try {
        if (m) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (Z) {
              S = Z;
            }
            Reflect.construct(c, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              S = Z;
            }
            c.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            S = Z;
          }
          c();
        }
      } catch (Z) {
        if (Z && S && typeof Z.stack == "string") {
          for (var T = Z.stack.split(`
`), G = S.stack.split(`
`), I = T.length - 1, B = G.length - 1; I >= 1 && B >= 0 && T[I] !== G[B]; )
            B--;
          for (; I >= 1 && B >= 0; I--, B--)
            if (T[I] !== G[B]) {
              if (I !== 1 || B !== 1)
                do
                  if (I--, B--, B < 0 || T[I] !== G[B]) {
                    var ae = `
` + T[I].replace(" at new ", " at ");
                    return c.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", c.displayName)), typeof c == "function" && me.set(c, ae), ae;
                  }
                while (I >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ge.current = F, Y(), Error.prepareStackTrace = P;
      }
      var Se = c ? c.displayName || c.name : "", ve = Se ? k(Se) : "";
      return typeof c == "function" && me.set(c, ve), ve;
    }
    function st(c, m, w) {
      return _e(c, !1);
    }
    function ye(c) {
      var m = c.prototype;
      return !!(m && m.isReactComponent);
    }
    function $e(c, m, w) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return _e(c, ye(c));
      if (typeof c == "string")
        return k(c);
      switch (c) {
        case p:
          return k("Suspense");
        case d:
          return k("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return st(c.render);
          case b:
            return $e(c.type, m, w);
          case E: {
            var S = c, P = S._payload, F = S._init;
            try {
              return $e(F(P), m, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, At = {}, kt = y.ReactDebugCurrentFrame;
    function Be(c) {
      if (c) {
        var m = c._owner, w = $e(c.type, c._source, m ? m.type : null);
        kt.setExtraStackFrame(w);
      } else
        kt.setExtraStackFrame(null);
    }
    function Ar(c, m, w, S, P) {
      {
        var F = Function.call.bind(Te);
        for (var A in c)
          if (F(c, A)) {
            var T = void 0;
            try {
              if (typeof c[A] != "function") {
                var G = Error((S || "React class") + ": " + w + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              T = c[A](m, A, S, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              T = I;
            }
            T && !(T instanceof Error) && (Be(P), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", w, A, typeof T), Be(null)), T instanceof Error && !(T.message in At) && (At[T.message] = !0, Be(P), h("Failed %s type: %s", w, T.message), Be(null));
          }
      }
    }
    var kr = Array.isArray;
    function ot(c) {
      return kr(c);
    }
    function Pr(c) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, w = m && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return w;
      }
    }
    function Dr(c) {
      try {
        return Pt(c), !1;
      } catch {
        return !0;
      }
    }
    function Pt(c) {
      return "" + c;
    }
    function Dt(c) {
      if (Dr(c))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pr(c)), Pt(c);
    }
    var Ae = y.ReactCurrentOwner, Fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Lt, at;
    at = {};
    function Lr(c) {
      if (Te.call(c, "ref")) {
        var m = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Ur(c) {
      if (Te.call(c, "key")) {
        var m = Object.getOwnPropertyDescriptor(c, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Ir(c, m) {
      if (typeof c.ref == "string" && Ae.current && m && Ae.current.stateNode !== m) {
        var w = H(Ae.current.type);
        at[w] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ae.current.type), c.ref), at[w] = !0);
      }
    }
    function $r(c, m) {
      {
        var w = function() {
          Ft || (Ft = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Br(c, m) {
      {
        var w = function() {
          Lt || (Lt = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var qr = function(c, m, w, S, P, F, A) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: m,
        ref: w,
        props: A,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Mr(c, m, w, S, P) {
      {
        var F, A = {}, T = null, G = null;
        w !== void 0 && (Dt(w), T = "" + w), Ur(m) && (Dt(m.key), T = "" + m.key), Lr(m) && (G = m.ref, Ir(m, P));
        for (F in m)
          Te.call(m, F) && !Fr.hasOwnProperty(F) && (A[F] = m[F]);
        if (c && c.defaultProps) {
          var I = c.defaultProps;
          for (F in I)
            A[F] === void 0 && (A[F] = I[F]);
        }
        if (T || G) {
          var B = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          T && $r(A, B), G && Br(A, B);
        }
        return qr(c, T, G, P, S, Ae.current, A);
      }
    }
    var it = y.ReactCurrentOwner, Ut = y.ReactDebugCurrentFrame;
    function je(c) {
      if (c) {
        var m = c._owner, w = $e(c.type, c._source, m ? m.type : null);
        Ut.setExtraStackFrame(w);
      } else
        Ut.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function lt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function It() {
      {
        if (it.current) {
          var c = H(it.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Hr(c) {
      {
        if (c !== void 0) {
          var m = c.fileName.replace(/^.*[\\\/]/, ""), w = c.lineNumber;
          return `

Check your code at ` + m + ":" + w + ".";
        }
        return "";
      }
    }
    var $t = {};
    function zr(c) {
      {
        var m = It();
        if (!m) {
          var w = typeof c == "string" ? c : c.displayName || c.name;
          w && (m = `

Check the top-level render call using <` + w + ">.");
        }
        return m;
      }
    }
    function Bt(c, m) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var w = zr(m);
        if ($t[w])
          return;
        $t[w] = !0;
        var S = "";
        c && c._owner && c._owner !== it.current && (S = " It was passed a child from " + H(c._owner.type) + "."), je(c), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, S), je(null);
      }
    }
    function qt(c, m) {
      {
        if (typeof c != "object")
          return;
        if (ot(c))
          for (var w = 0; w < c.length; w++) {
            var S = c[w];
            lt(S) && Bt(S, m);
          }
        else if (lt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var P = g(c);
          if (typeof P == "function" && P !== c.entries)
            for (var F = P.call(c), A; !(A = F.next()).done; )
              lt(A.value) && Bt(A.value, m);
        }
      }
    }
    function Wr(c) {
      {
        var m = c.type;
        if (m == null || typeof m == "string")
          return;
        var w;
        if (typeof m == "function")
          w = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === b))
          w = m.propTypes;
        else
          return;
        if (w) {
          var S = H(m);
          Ar(w, c.props, "prop", S, c);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var P = H(m);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(c) {
      {
        for (var m = Object.keys(c.props), w = 0; w < m.length; w++) {
          var S = m[w];
          if (S !== "children" && S !== "key") {
            je(c), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), je(null);
            break;
          }
        }
        c.ref !== null && (je(c), h("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var Mt = {};
    function Ht(c, m, w, S, P, F) {
      {
        var A = se(c);
        if (!A) {
          var T = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Hr(P);
          G ? T += G : T += It();
          var I;
          c === null ? I = "null" : ot(c) ? I = "array" : c !== void 0 && c.$$typeof === e ? (I = "<" + (H(c.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : I = typeof c, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, T);
        }
        var B = Mr(c, m, w, P, F);
        if (B == null)
          return B;
        if (A) {
          var ae = m.children;
          if (ae !== void 0)
            if (S)
              if (ot(ae)) {
                for (var Se = 0; Se < ae.length; Se++)
                  qt(ae[Se], c);
                Object.freeze && Object.freeze(ae);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qt(ae, c);
        }
        if (Te.call(m, "key")) {
          var ve = H(c), Z = Object.keys(m).filter(function(Qr) {
            return Qr !== "key";
          }), dt = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mt[ve + dt]) {
            var Xr = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, dt, ve, Xr, ve), Mt[ve + dt] = !0;
          }
        }
        return c === r ? Jr(B) : Wr(B), B;
      }
    }
    function Vr(c, m, w) {
      return Ht(c, m, w, !0);
    }
    function Kr(c, m, w) {
      return Ht(c, m, w, !1);
    }
    var Yr = Kr, Gr = Vr;
    Pe.Fragment = r, Pe.jsx = Yr, Pe.jsxs = Gr;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? ht.exports = dn() : ht.exports = un();
var i = ht.exports;
const Vt = () => {
  const [t, e] = q.useState(!1);
  return q.useEffect(() => {
    const n = setTimeout(() => e(!0), 5e3);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center", children: [
    /* @__PURE__ */ i.jsx(tn, { className: "animate-spin mb-4", size: 48 }),
    /* @__PURE__ */ i.jsx("span", { className: "text-xl font-medium mb-2", children: "Cargando contratos..." }),
    t && /* @__PURE__ */ i.jsxs("div", { className: "mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-center gap-2 text-orange-400 mb-2", children: [
        /* @__PURE__ */ i.jsx(rn, { size: 20 }),
        /* @__PURE__ */ i.jsx("span", { className: "font-bold uppercase text-xs tracking-wider", children: "¿Demasiado tiempo?" })
      ] }),
      /* @__PURE__ */ i.jsxs("p", { className: "text-text-secondary text-sm leading-relaxed", children: [
        "Parece que la carga está tardando más de lo normal. Verifica la ",
        /* @__PURE__ */ i.jsx("b", { children: "consola del navegador (F12)" }),
        " para ver errores de red o configuración."
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => {
            localStorage.clear(), window.location.reload();
          },
          className: "mt-4 px-4 py-2 bg-bg-surface border border-border-subtle rounded-md text-xs font-medium hover:bg-border-subtle transition-colors text-text-primary",
          children: "Resetear Configuración y Reintentar"
        }
      )
    ] })
  ] });
}, fn = ({
  gateways: t,
  activeGatewayIdx: e,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  expanded: o,
  onToggleExpand: a
}) => /* @__PURE__ */ i.jsx("div", { className: "space-y-4", children: t.map((l, f) => {
  const p = o[l.name] !== !1;
  return /* @__PURE__ */ i.jsxs("div", { className: "nav-group", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
        onClick: () => a(l.name),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ i.jsx("span", { className: "text-text-muted", children: "📁" }),
            l.name
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: `text-[11px] text-text-muted transition-transform ${p ? "" : "-rotate-90"}`, children: [
            l.namespace,
            " ▾"
          ] })
        ]
      }
    ),
    p && /* @__PURE__ */ i.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: l.events.map((d, b) => {
      const E = e === f && n === b;
      return /* @__PURE__ */ i.jsxs(
        "li",
        {
          onClick: (x) => {
            x.stopPropagation(), r(f), s(b);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${E ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
            /* @__PURE__ */ i.jsx("span", { className: "truncate", children: d.event })
          ]
        },
        b
      );
    }) })
  ] }, f);
}) }), L = {
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
    noLogs: "Envía un evento para ver la respuesta...",
    all: "Todos",
    emits: "Emits",
    listeners: "Listeners"
  }
}, pn = ({
  gateways: t,
  activeGatewayIdx: e,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  searchQuery: o,
  onSearchChange: a,
  onExport: l,
  expanded: f,
  onToggleExpand: p
}) => /* @__PURE__ */ i.jsxs("aside", { className: "flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
    /* @__PURE__ */ i.jsx("span", { className: "text-xl text-brand-emerald", children: "■" }),
    /* @__PURE__ */ i.jsx("span", { className: "text-base font-semibold", children: L.common.socketDocs }),
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: L.common.v1 })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "relative mb-6", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
        placeholder: L.common.searchPlaceholder,
        value: o,
        onChange: (d) => a(d.target.value)
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary", children: [
    /* @__PURE__ */ i.jsx("span", { children: L.common.gateways }),
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: t.length })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ i.jsx(
    fn,
    {
      gateways: t,
      activeGatewayIdx: e,
      activeEventIdx: n,
      onSelectGateway: r,
      onSelectEvent: s,
      expanded: f,
      onToggleExpand: p
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
          L.common.exportContract
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs("p", { children: [
      L.common.socketDocs,
      " ",
      L.common.v1
    ] }),
    /* @__PURE__ */ i.jsx("p", { children: L.common.madeWith })
  ] })
] }), mn = ({
  connected: t,
  gatewayPath: e,
  namespace: n,
  namespaces: r,
  theme: s,
  onToggleTheme: o,
  onOpenSettings: a,
  onNamespaceChange: l
}) => /* @__PURE__ */ i.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs", children: [
    /* @__PURE__ */ i.jsx("div", { className: `h-2 w-2 rounded-full ${t ? "bg-brand-emerald" : "bg-red-500"}` }),
    /* @__PURE__ */ i.jsx("span", { children: t ? L.common.connected : L.common.disconnected }),
    /* @__PURE__ */ i.jsx("span", { className: "text-text-muted", children: e })
  ] }),
  /* @__PURE__ */ i.jsx(
    "select",
    {
      value: n,
      onChange: (f) => l(f.target.value),
      className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none",
      children: r.map((f) => /* @__PURE__ */ i.jsx("option", { value: f, children: f }, f))
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      onClick: o,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: s === "dark" ? /* @__PURE__ */ i.jsx(nn, { size: 14 }) : /* @__PURE__ */ i.jsx(sn, { size: 14 })
    }
  ),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      onClick: a,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: /* @__PURE__ */ i.jsx(on, { size: 14 })
    }
  )
] }), bn = ({
  gatewayName: t,
  eventName: e,
  summary: n,
  description: r
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs("div", { className: "mb-4 flex gap-2 text-sm text-text-secondary", children: [
    /* @__PURE__ */ i.jsx("span", { children: t }),
    " / ",
    /* @__PURE__ */ i.jsx("span", { children: "events" }),
    " / ",
    /* @__PURE__ */ i.jsx("span", { className: "font-medium text-text-primary", children: e })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ i.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: L.event.type }),
    /* @__PURE__ */ i.jsx("span", { className: "font-mono text-xl font-semibold", children: e }),
    /* @__PURE__ */ i.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ i.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), hn = ({ connected: t, schema: e, onConnect: n }) => {
  const r = (e == null ? void 0 : e.properties) || {}, s = Object.keys(r), o = (e == null ? void 0 : e.required) || [];
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ i.jsx("span", { className: "text-[13px] font-semibold", children: L.event.parameters }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: n,
          className: "rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
          children: t ? L.event.reconnect : L.event.connect
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
    ] }) }) : /* @__PURE__ */ i.jsx("div", { className: "p-4 italic text-text-secondary", children: L.event.noParameters })
  ] });
}, xn = ({ payload: t, schema: e, responseSchema: n, emits: r, onChange: s, onSend: o }) => {
  const [a, l] = ee("example"), [f, p] = ee(r || "");
  return q.useEffect(() => {
    p(r || "");
  }, [r]), /* @__PURE__ */ i.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ i.jsxs("span", { className: "text-[13px] font-semibold", children: [
          L.event.requestBody,
          " ",
          /* @__PURE__ */ i.jsx("span", { className: "text-[11px] text-red-400", children: L.event.required })
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
            children: L.event.exampleValue
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
            value: t,
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
          /* @__PURE__ */ i.jsx("div", { className: "rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[12px] leading-relaxed text-text-secondary overflow-x-auto max-h-[300px]", children: /* @__PURE__ */ i.jsx("pre", { children: JSON.stringify(e, null, 2) }) })
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
              /* @__PURE__ */ i.jsx(an, { size: 14 }),
              " ",
              L.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ i.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          L.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, gn = ({ logs: t }) => t.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ i.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ i.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ i.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: t.map((e) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ i.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: `font-bold ${e.type === "sent" ? "text-blue-400" : e.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: e.type.toUpperCase() }),
          /* @__PURE__ */ i.jsx("span", { className: "text-text-secondary", children: e.message })
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "text-[10px] text-text-muted", children: e.timestamp })
      ] }),
      e.data != null && /* @__PURE__ */ i.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(e.data, null, 2) })
    ]
  },
  e.id
)) }), yn = ({
  connected: t,
  logs: e,
  onClear: n,
  isPaused: r,
  onTogglePause: s
}) => {
  const [o, a] = q.useState("all"), l = q.useMemo(() => o === "all" ? e : o === "emits" ? e.filter((f) => f.type === "sent") : o === "listeners" ? e.filter((f) => f.type === "received") : e, [e, o]);
  return /* @__PURE__ */ i.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("div", { className: `h-2 w-2 rounded-full ${t ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ i.jsx("span", { className: "text-[13px] font-semibold", children: L.realtime.title })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => a("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: L.realtime.all
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => a("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: L.realtime.emits
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => a("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: L.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ i.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ i.jsx(cn, { size: 12 }),
          " ",
          L.realtime.clear
        ] }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: s,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : L.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ i.jsx(gn, { logs: r ? [] : l, onClear: n }) })
  ] });
}, Kt = ({
  show: t,
  onClose: e,
  onSave: n,
  initialApiConfig: r,
  initialSocketConfig: s,
  isStandalone: o,
  theme: a,
  activeGatewayNamespace: l
}) => {
  const [f, p] = q.useState(r), [d, b] = q.useState(s), [E, x] = q.useState(!1), [R, v] = q.useState(null);
  q.useEffect(() => {
    t && (p(r), b(s), v(null));
  }, [t, r, s]);
  const g = (h) => h.startsWith("/") ? h : `/${h}`, y = async () => {
    x(!0), v(null);
    const h = f.baseUrl.replace(/\/$/, ""), C = d.namespace === "/" ? l ?? "/" : d.namespace;
    try {
      const { io: N } = await import("socket.io-client"), U = N(`${h}${g(C)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      });
      U.on("connect", () => {
        v({ success: !0, message: "¡Conexión exitosa!" }), x(!1), U.disconnect();
      }), U.on("connect_error", (re) => {
        v({ success: !1, message: `Error: ${re.message}` }), x(!1), U.disconnect();
      });
    } catch (N) {
      v({ success: !1, message: `Error: ${N instanceof Error ? N.message : "Error desconocido"}` }), x(!1);
    }
  };
  return t ? /* @__PURE__ */ i.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ i.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${a === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
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
                    const C = h.target.value;
                    let N = ["polling", "websocket"];
                    C === "websocket" && (N = ["websocket"]), C === "polling" && (N = ["polling"]), b({ ...d, transports: N });
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
            disabled: E,
            className: `rounded px-4 py-2 text-sm font-semibold transition-all ${E ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
            children: E ? "Probando..." : "Probar Conexión"
          }
        ),
        R && /* @__PURE__ */ i.jsx("span", { className: `text-xs font-medium ${R.success ? "text-brand-emerald" : "text-red-500"}`, children: R.message })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            onClick: e,
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
class vn {
  constructor() {
    qe(this, "sockets", {});
  }
  connect(e, n, r = {}, s) {
    this.sockets[e] && this.sockets[e].disconnect();
    const o = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, a = ln(n, o);
    return a.on("connect", s.onConnect), a.on("connect_error", (l) => s.onConnectError(l)), a.on("disconnect", (l) => s.onDisconnect(l)), a.onAny(s.onAny), this.sockets[e] = a, a;
  }
  disconnect(e) {
    this.sockets[e] && (this.sockets[e].disconnect(), delete this.sockets[e]);
  }
  emit(e, n, r, s) {
    const o = this.sockets[e];
    if (!o)
      throw new Error("Socket not connected");
    s ? o.emit(n, r, s) : o.emit(n, r);
  }
  getSocket(e) {
    return this.sockets[e];
  }
}
const ut = new vn(), wn = (t = {}) => {
  const [e, n] = ee({}), [r, s] = ee([]), o = Me((p, d, b) => {
    s(
      (E) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: p,
          message: d,
          data: b
        },
        ...E
      ].slice(0, 50)
    );
  }, []), a = Me((p, d, b) => {
    if (e[p]) {
      ut.disconnect(p), n((x) => ({ ...x, [p]: !1 })), o("error", `Disconnected from ${d}`);
      return;
    }
    const E = {
      ...t,
      options: {
        path: b ?? "/socket.io",
        auth: t.auth,
        ...t.options
      }
    };
    console.log(`[SocketDocs] Connecting to ${p} at ${d}...`, E.options), ut.connect(p, d, E, {
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
  }, [t, e, o]), l = Me((p, d, b) => {
    try {
      const E = JSON.parse(b);
      o("sent", `Emitting ${d}`, E), ut.emit(p, d, E, (x) => {
        o("received", `ACK for ${d}`, x);
      });
    } catch (E) {
      const x = E instanceof Error ? E.message : "Invalid JSON";
      console.error(`Emit error: ${x}`);
    }
  }, [o]), f = Me(() => {
    s([]);
  }, []);
  return {
    connected: e,
    logs: r,
    connect: a,
    emitEvent: l,
    clearLogs: f
  };
};
function dr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: En } = Object.prototype, { getPrototypeOf: Xe } = Object, { iterator: Qe, toStringTag: ur } = Symbol, Ze = ((t) => (e) => {
  const n = En.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (t) => (t = t.toLowerCase(), (e) => Ze(e) === t), et = (t) => (e) => typeof e === t, { isArray: Oe } = Array, Ce = et("undefined");
function Fe(t) {
  return t !== null && !Ce(t) && t.constructor !== null && !Ce(t.constructor) && te(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const fr = de("ArrayBuffer");
function Rn(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && fr(t.buffer), e;
}
const jn = et("string"), te = et("function"), pr = et("number"), Le = (t) => t !== null && typeof t == "object", Sn = (t) => t === !0 || t === !1, We = (t) => {
  if (Ze(t) !== "object")
    return !1;
  const e = Xe(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(ur in t) && !(Qe in t);
}, Nn = (t) => {
  if (!Le(t) || Fe(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, Cn = de("Date"), On = de("File"), _n = (t) => !!(t && typeof t.uri < "u"), Tn = (t) => t && typeof t.getParts < "u", An = de("Blob"), kn = de("FileList"), Pn = (t) => Le(t) && te(t.pipe);
function Dn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Yt = Dn(), Gt = typeof Yt.FormData < "u" ? Yt.FormData : void 0, Fn = (t) => {
  if (!t)
    return !1;
  if (Gt && t instanceof Gt)
    return !0;
  const e = Xe(t);
  if (!e || e === Object.prototype || !te(t.append))
    return !1;
  const n = Ze(t);
  return n === "formdata" || // detect form-data instance
  n === "object" && te(t.toString) && t.toString() === "[object FormData]";
}, Ln = de("URLSearchParams"), [Un, In, $n, Bn] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(de), qn = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ue(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), Oe(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    if (Fe(t))
      return;
    const o = n ? Object.getOwnPropertyNames(t) : Object.keys(t), a = o.length;
    let l;
    for (r = 0; r < a; r++)
      l = o[r], e.call(null, t[l], l, t);
  }
}
function mr(t, e) {
  if (Fe(t))
    return null;
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const we = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), br = (t) => !Ce(t) && t !== we;
function xt(...t) {
  const { caseless: e, skipUndefined: n } = br(this) && this || {}, r = {}, s = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const l = e && mr(r, a) || a, f = gt(r, l) ? r[l] : void 0;
    We(f) && We(o) ? r[l] = xt(f, o) : We(o) ? r[l] = xt({}, o) : Oe(o) ? r[l] = o.slice() : (!n || !Ce(o)) && (r[l] = o);
  };
  for (let o = 0, a = t.length; o < a; o++)
    t[o] && Ue(t[o], s);
  return r;
}
const Mn = (t, e, n, { allOwnKeys: r } = {}) => (Ue(
  e,
  (s, o) => {
    n && te(s) ? Object.defineProperty(t, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: dr(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(t, o, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), t), Hn = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), zn = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), Object.defineProperty(t.prototype, "constructor", {
    __proto__: null,
    value: t,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t, "super", {
    __proto__: null,
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, Wn = (t, e, n, r) => {
  let s, o, a;
  const l = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (s = Object.getOwnPropertyNames(t), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, t, e)) && !l[a] && (e[a] = t[a], l[a] = !0);
    t = n !== !1 && Xe(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Jn = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Vn = (t) => {
  if (!t)
    return null;
  if (Oe(t))
    return t;
  let e = t.length;
  if (!pr(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Kn = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Xe(Uint8Array)), Yn = (t, e) => {
  const r = (t && t[Qe]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    e.call(t, o[0], o[1]);
  }
}, Gn = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Xn = de("HTMLFormElement"), Qn = (t) => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), gt = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Zn = de("RegExp"), hr = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ue(n, (s, o) => {
    let a;
    (a = e(s, o, t)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(t, r);
}, es = (t) => {
  hr(t, (e, n) => {
    if (te(t) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = t[n];
    if (te(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ts = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Oe(t) ? r(t) : r(String(t).split(e)), n;
}, rs = () => {
}, ns = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function ss(t) {
  return !!(t && te(t.append) && t[ur] === "FormData" && t[Qe]);
}
const os = (t) => {
  const e = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Le(r)) {
      if (e.has(r))
        return;
      if (Fe(r))
        return r;
      if (!("toJSON" in r)) {
        e.add(r);
        const s = Oe(r) ? [] : {};
        return Ue(r, (o, a) => {
          const l = n(o);
          !Ce(l) && (s[a] = l);
        }), e.delete(r), s;
      }
    }
    return r;
  };
  return n(t);
}, as = de("AsyncFunction"), is = (t) => t && (Le(t) || te(t)) && te(t.then) && te(t.catch), xr = ((t, e) => t ? setImmediate : e ? ((n, r) => (we.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === we && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), we.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", te(we.postMessage)), cs = typeof queueMicrotask < "u" ? queueMicrotask.bind(we) : typeof process < "u" && process.nextTick || xr, ls = (t) => t != null && te(t[Qe]), u = {
  isArray: Oe,
  isArrayBuffer: fr,
  isBuffer: Fe,
  isFormData: Fn,
  isArrayBufferView: Rn,
  isString: jn,
  isNumber: pr,
  isBoolean: Sn,
  isObject: Le,
  isPlainObject: We,
  isEmptyObject: Nn,
  isReadableStream: Un,
  isRequest: In,
  isResponse: $n,
  isHeaders: Bn,
  isUndefined: Ce,
  isDate: Cn,
  isFile: On,
  isReactNativeBlob: _n,
  isReactNative: Tn,
  isBlob: An,
  isRegExp: Zn,
  isFunction: te,
  isStream: Pn,
  isURLSearchParams: Ln,
  isTypedArray: Kn,
  isFileList: kn,
  forEach: Ue,
  merge: xt,
  extend: Mn,
  trim: qn,
  stripBOM: Hn,
  inherits: zn,
  toFlatObject: Wn,
  kindOf: Ze,
  kindOfTest: de,
  endsWith: Jn,
  toArray: Vn,
  forEachEntry: Yn,
  matchAll: Gn,
  isHTMLForm: Xn,
  hasOwnProperty: gt,
  hasOwnProp: gt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hr,
  freezeMethods: es,
  toObjectSet: ts,
  toCamelCase: Qn,
  noop: rs,
  toFiniteNumber: ns,
  findKey: mr,
  global: we,
  isContextDefined: br,
  isSpecCompliantForm: ss,
  toJSONObject: os,
  isAsyncFn: as,
  isThenable: is,
  setImmediate: xr,
  asap: cs,
  isIterable: ls
}, ds = u.toObjectSet([
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
]), us = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || e[n] && ds[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
};
function fs(t) {
  let e = 0, n = t.length;
  for (; e < n; ) {
    const r = t.charCodeAt(e);
    if (r !== 9 && r !== 32)
      break;
    e += 1;
  }
  for (; n > e; ) {
    const r = t.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
const ps = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), ms = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Et(t, e) {
  return u.isArray(t) ? t.map((n) => Et(n, e)) : fs(String(t).replace(e, ""));
}
const bs = (t) => Et(t, ps), hs = (t) => Et(t, ms);
function gr(t) {
  const e = /* @__PURE__ */ Object.create(null);
  return u.forEach(t.toJSON(), (n, r) => {
    e[r] = hs(n);
  }), e;
}
const Xt = Symbol("internals");
function De(t) {
  return t && String(t).trim().toLowerCase();
}
function Je(t) {
  return t === !1 || t == null ? t : u.isArray(t) ? t.map(Je) : bs(String(t));
}
function xs(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const gs = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function ft(t, e, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!u.isString(e)) {
    if (u.isString(r))
      return e.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(e);
  }
}
function ys(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function vs(t, e) {
  const n = u.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, o, a) {
        return this[r].call(this, e, s, o, a);
      },
      configurable: !0
    });
  });
}
class tt {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function o(l, f, p) {
      const d = De(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const b = u.findKey(s, d);
      (!b || s[b] === void 0 || p === !0 || p === void 0 && s[b] !== !1) && (s[b || f] = Je(l));
    }
    const a = (l, f) => u.forEach(l, (p, d) => o(p, d, f));
    if (u.isPlainObject(e) || e instanceof this.constructor)
      a(e, n);
    else if (u.isString(e) && (e = e.trim()) && !gs(e))
      a(us(e), n);
    else if (u.isObject(e) && u.isIterable(e)) {
      let l = {}, f, p;
      for (const d of e) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[p = d[0]] = (f = l[p]) ? u.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      a(l, n);
    } else
      e != null && o(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = De(e), e) {
      const r = u.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return xs(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = De(e), e) {
      const r = u.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || ft(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = De(a), a) {
        const l = u.findKey(r, a);
        l && (!n || ft(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return u.isArray(e) ? e.forEach(o) : o(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!e || ft(this, this[o], o, e, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return u.forEach(this, (s, o) => {
      const a = u.findKey(r, o);
      if (a) {
        n[a] = Je(s), delete n[o];
        return;
      }
      const l = e ? ys(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Je(s), r[l] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Xt] = this[Xt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const l = De(a);
      r[l] || (vs(s, a), r[l] = !0);
    }
    return u.isArray(e) ? e.forEach(o) : o(e), this;
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
u.reduceDescriptors(tt.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(tt);
const ce = tt, ws = "[REDACTED ****]";
function Es(t) {
  if (u.hasOwnProp(t, "toJSON"))
    return !0;
  let e = Object.getPrototypeOf(t);
  for (; e && e !== Object.prototype; ) {
    if (u.hasOwnProp(e, "toJSON"))
      return !0;
    e = Object.getPrototypeOf(e);
  }
  return !1;
}
function Rs(t, e) {
  const n = new Set(e.map((o) => String(o).toLowerCase())), r = [], s = (o) => {
    if (o === null || typeof o != "object" || u.isBuffer(o))
      return o;
    if (r.indexOf(o) !== -1)
      return;
    o instanceof ce && (o = o.toJSON()), r.push(o);
    let a;
    if (u.isArray(o))
      a = [], o.forEach((l, f) => {
        const p = s(l);
        u.isUndefined(p) || (a[f] = p);
      });
    else {
      if (!u.isPlainObject(o) && Es(o))
        return r.pop(), o;
      a = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(o)) {
        const p = n.has(l.toLowerCase()) ? ws : s(f);
        u.isUndefined(p) || (a[l] = p);
      }
    }
    return r.pop(), a;
  };
  return s(t);
}
class J extends Error {
  static from(e, n, r, s, o, a) {
    const l = new J(e.message, n || e.code, r, s, o);
    return l.cause = e, l.name = e.name, e.status != null && l.status == null && (l.status = e.status), a && Object.assign(l, a), l;
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
  constructor(e, n, r, s, o) {
    super(e), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const e = this.config, n = e && u.hasOwnProp(e, "redact") ? e.redact : void 0, r = u.isArray(n) && n.length > 0 ? Rs(e, n) : u.toJSONObject(e);
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
J.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
J.ERR_BAD_OPTION = "ERR_BAD_OPTION";
J.ECONNABORTED = "ECONNABORTED";
J.ETIMEDOUT = "ETIMEDOUT";
J.ECONNREFUSED = "ECONNREFUSED";
J.ERR_NETWORK = "ERR_NETWORK";
J.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
J.ERR_DEPRECATED = "ERR_DEPRECATED";
J.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
J.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
J.ERR_CANCELED = "ERR_CANCELED";
J.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
J.ERR_INVALID_URL = "ERR_INVALID_URL";
J.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const j = J, js = null;
function yt(t) {
  return u.isPlainObject(t) || u.isArray(t);
}
function yr(t) {
  return u.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function pt(t, e, n) {
  return t ? t.concat(e).map(function(s, o) {
    return s = yr(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Ss(t) {
  return u.isArray(t) && !t.some(yt);
}
const Ns = u.toFlatObject(u, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function rt(t, e, n) {
  if (!u.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = u.toFlatObject(
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
  const r = n.metaTokens, s = n.visitor || b, o = n.dots, a = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, p = l && u.isSpecCompliantForm(e);
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
    if (u.isReactNative(e) && u.isReactNativeBlob(v))
      return e.append(pt(y, g, o), d(v)), !1;
    if (v && !y && typeof v == "object") {
      if (u.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), v = JSON.stringify(v);
      else if (u.isArray(v) && Ss(v) || (u.isFileList(v) || u.endsWith(g, "[]")) && (h = u.toArray(v)))
        return g = yr(g), h.forEach(function(N, U) {
          !(u.isUndefined(N) || N === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? pt([g], U, o) : a === null ? g : g + "[]",
            d(N)
          );
        }), !1;
    }
    return yt(v) ? !0 : (e.append(pt(y, g, o), d(v)), !1);
  }
  const E = [], x = Object.assign(Ns, {
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
      if (E.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      E.push(v), u.forEach(v, function(C, N) {
        (!(u.isUndefined(C) || C === null) && s.call(e, C, u.isString(N) ? N.trim() : N, g, x)) === !0 && R(C, g ? g.concat(N) : [N], y + 1);
      }), E.pop();
    }
  }
  if (!u.isObject(t))
    throw new TypeError("data must be an object");
  return R(t), e;
}
function Qt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20/g, function(r) {
    return e[r];
  });
}
function Rt(t, e) {
  this._pairs = [], t && rt(t, this, e);
}
const vr = Rt.prototype;
vr.append = function(e, n) {
  this._pairs.push([e, n]);
};
vr.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Qt);
  } : Qt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Cs(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wr(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Cs, s = u.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let a;
  if (o ? a = o(e, s) : a = u.isURLSearchParams(e) ? e.toString() : new Rt(e, s).toString(r), a) {
    const l = t.indexOf("#");
    l !== -1 && (t = t.slice(0, l)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class Os {
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
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
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
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
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
  forEach(e) {
    u.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Zt = Os, jt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, _s = typeof URLSearchParams < "u" ? URLSearchParams : Rt, Ts = typeof FormData < "u" ? FormData : null, As = typeof Blob < "u" ? Blob : null, ks = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _s,
    FormData: Ts,
    Blob: As
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, St = typeof window < "u" && typeof document < "u", vt = typeof navigator == "object" && navigator || void 0, Ps = St && (!vt || ["ReactNative", "NativeScript", "NS"].indexOf(vt.product) < 0), Ds = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Fs = St && window.location.href || "http://localhost", Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: St,
  hasStandardBrowserEnv: Ps,
  hasStandardBrowserWebWorkerEnv: Ds,
  navigator: vt,
  origin: Fs
}, Symbol.toStringTag, { value: "Module" })), K = {
  ...Ls,
  ...ks
};
function Us(t, e) {
  return rt(t, new K.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return K.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function Is(t) {
  return u.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function $s(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], e[o] = t[o];
  return e;
}
function Er(t) {
  function e(n, r, s, o) {
    let a = n[o++];
    if (a === "__proto__")
      return !0;
    const l = Number.isFinite(+a), f = o >= n.length;
    return a = !a && u.isArray(s) ? s.length : a, f ? (u.hasOwnProp(s, a) ? s[a] = u.isArray(s[a]) ? s[a].concat(r) : [s[a], r] : s[a] = r, !l) : ((!u.hasOwnProp(s, a) || !u.isObject(s[a])) && (s[a] = []), e(n, r, s[a], o) && u.isArray(s[a]) && (s[a] = $s(s[a])), !l);
  }
  if (u.isFormData(t) && u.isFunction(t.entries)) {
    const n = {};
    return u.forEachEntry(t, (r, s) => {
      e(Is(r), s, n, 0);
    }), n;
  }
  return null;
}
const Ne = (t, e) => t != null && u.hasOwnProp(t, e) ? t[e] : void 0;
function Bs(t, e, n) {
  if (u.isString(t))
    try {
      return (e || JSON.parse)(t), u.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Nt = {
  transitional: jt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = u.isObject(e);
      if (o && u.isHTMLForm(e) && (e = new FormData(e)), u.isFormData(e))
        return s ? JSON.stringify(Er(e)) : e;
      if (u.isArrayBuffer(e) || u.isBuffer(e) || u.isStream(e) || u.isFile(e) || u.isBlob(e) || u.isReadableStream(e))
        return e;
      if (u.isArrayBufferView(e))
        return e.buffer;
      if (u.isURLSearchParams(e))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let l;
      if (o) {
        const f = Ne(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Us(e, f).toString();
        if ((l = u.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const p = Ne(this, "env"), d = p && p.FormData;
          return rt(
            l ? { "files[]": e } : e,
            d && new d(),
            f
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Bs(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const n = Ne(this, "transitional") || Nt.transitional, r = n && n.forcedJSONParsing, s = Ne(this, "responseType"), o = s === "json";
      if (u.isResponse(e) || u.isReadableStream(e))
        return e;
      if (e && u.isString(e) && (r && !s || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(e, Ne(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? j.from(f, j.ERR_BAD_RESPONSE, this, null, Ne(this, "response")) : f;
        }
      }
      return e;
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
    FormData: K.classes.FormData,
    Blob: K.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (t) => {
  Nt.headers[t] = {};
});
const Ct = Nt;
function mt(t, e) {
  const n = this || Ct, r = e || n, s = ce.from(r.headers);
  let o = r.data;
  return u.forEach(t, function(l) {
    o = l.call(n, o, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), o;
}
function Rr(t) {
  return !!(t && t.__CANCEL__);
}
class qs extends j {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, n, r) {
    super(e ?? "canceled", j.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const Ie = qs;
function jr(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new j(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? j.ERR_BAD_REQUEST : j.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function Ms(t) {
  const e = /^([-+\w]{1,25}):(?:\/\/)?/.exec(t);
  return e && e[1] || "";
}
function Hs(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, o = 0, a;
  return e = e !== void 0 ? e : 1e3, function(f) {
    const p = Date.now(), d = r[o];
    a || (a = p), n[s] = f, r[s] = p;
    let b = o, E = 0;
    for (; b !== s; )
      E += n[b++], b = b % t;
    if (s = (s + 1) % t, s === o && (o = (o + 1) % t), p - a < e)
      return;
    const x = d && p - d;
    return x ? Math.round(E * 1e3 / x) : void 0;
  };
}
function zs(t, e) {
  let n = 0, r = 1e3 / e, s, o;
  const a = (p, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), t(...p);
  };
  return [(...p) => {
    const d = Date.now(), b = d - n;
    b >= r ? a(p, d) : (s = p, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - b)));
  }, () => s && a(s)];
}
const Ye = (t, e, n = 3) => {
  let r = 0;
  const s = Hs(50, 250);
  return zs((o) => {
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
      [e ? "download" : "upload"]: !0
    };
    t(b);
  }, n);
}, er = (t, e) => {
  const n = t != null;
  return [
    (r) => e[0]({
      lengthComputable: n,
      total: t,
      loaded: r
    }),
    e[1]
  ];
}, tr = (t) => (...e) => u.asap(() => t(...e)), Ws = K.hasStandardBrowserEnv ? ((t, e) => (n) => (n = new URL(n, K.origin), t.protocol === n.protocol && t.host === n.host && (e || t.port === n.port)))(
  new URL(K.origin),
  K.navigator && /(msie|trident)/i.test(K.navigator.userAgent)
) : () => !0, Js = K.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, o, a) {
      if (typeof document > "u")
        return;
      const l = [`${t}=${encodeURIComponent(e)}`];
      u.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), u.isString(r) && l.push(`path=${r}`), u.isString(s) && l.push(`domain=${s}`), o === !0 && l.push("secure"), u.isString(a) && l.push(`SameSite=${a}`), document.cookie = l.join("; ");
    },
    read(t) {
      if (typeof document > "u")
        return null;
      const e = document.cookie.split(";");
      for (let n = 0; n < e.length; n++) {
        const r = e[n].replace(/^\s+/, ""), s = r.indexOf("=");
        if (s !== -1 && r.slice(0, s) === t)
          return decodeURIComponent(r.slice(s + 1));
      }
      return null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
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
function Vs(t) {
  return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ks(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Sr(t, e, n) {
  let r = !Vs(e);
  return t && (r || n === !1) ? Ks(t, e) : e;
}
const rr = (t) => t instanceof ce ? { ...t } : t;
function Ee(t, e) {
  e = e || {};
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
  function r(p, d, b, E) {
    return u.isPlainObject(p) && u.isPlainObject(d) ? u.merge.call({ caseless: E }, p, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(p, d, b, E) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p, b, E);
    } else
      return r(p, d, b, E);
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
    if (u.hasOwnProp(e, b))
      return r(p, d);
    if (u.hasOwnProp(t, b))
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
    headers: (p, d, b) => s(rr(p), rr(d), b, !0)
  };
  return u.forEach(Object.keys({ ...t, ...e }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const b = u.hasOwnProp(f, d) ? f[d] : s, E = u.hasOwnProp(t, d) ? t[d] : void 0, x = u.hasOwnProp(e, d) ? e[d] : void 0, R = b(E, x, d);
    u.isUndefined(R) && b !== l || (n[d] = R);
  }), n;
}
const Ys = ["content-type", "content-length"];
function Gs(t, e, n) {
  if (n !== "content-only") {
    t.set(e);
    return;
  }
  Object.entries(e).forEach(([r, s]) => {
    Ys.includes(r.toLowerCase()) && t.set(r, s);
  });
}
const Xs = (t) => encodeURIComponent(t).replace(
  /%([0-9A-F]{2})/gi,
  (e, n) => String.fromCharCode(parseInt(n, 16))
), Nr = (t) => {
  const e = Ee({}, t), n = (E) => u.hasOwnProp(e, E) ? e[E] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), p = n("baseURL"), d = n("allowAbsoluteUrls"), b = n("url");
  if (e.headers = l = ce.from(l), e.url = wr(
    Sr(p, b, d),
    t.params,
    t.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? Xs(f.password) : ""))
  ), u.isFormData(r) && (K.hasStandardBrowserEnv || K.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && Gs(l, r.getHeaders(), n("formDataHeaderPolicy"))), K.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(e)), s === !0 || s == null && Ws(e.url))) {
    const x = o && a && Js.read(a);
    x && l.set(o, x);
  }
  return e;
}, Qs = typeof XMLHttpRequest < "u", Zs = Qs && function(t) {
  return new Promise(function(n, r) {
    const s = Nr(t);
    let o = s.data;
    const a = ce.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: p } = s, d, b, E, x, R;
    function v() {
      x && x(), R && R(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(s.method.toUpperCase(), s.url, !0), g.timeout = s.timeout;
    function y() {
      if (!g)
        return;
      const C = ce.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), U = {
        data: !l || l === "text" || l === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: C,
        config: t,
        request: g
      };
      jr(
        function(fe) {
          n(fe), v();
        },
        function(fe) {
          r(fe), v();
        },
        U
      ), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(y);
    }, g.onabort = function() {
      g && (r(new j("Request aborted", j.ECONNABORTED, t, g)), v(), g = null);
    }, g.onerror = function(N) {
      const U = N && N.message ? N.message : "Network Error", re = new j(U, j.ERR_NETWORK, t, g);
      re.event = N || null, r(re), v(), g = null;
    }, g.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const U = s.transitional || jt;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(
        new j(
          N,
          U.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
          t,
          g
        )
      ), v(), g = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in g && u.forEach(gr(a), function(N, U) {
      g.setRequestHeader(U, N);
    }), u.isUndefined(s.withCredentials) || (g.withCredentials = !!s.withCredentials), l && l !== "json" && (g.responseType = s.responseType), p && ([E, R] = Ye(p, !0), g.addEventListener("progress", E)), f && g.upload && ([b, x] = Ye(f), g.upload.addEventListener("progress", b), g.upload.addEventListener("loadend", x)), (s.cancelToken || s.signal) && (d = (C) => {
      g && (r(!C || C.type ? new Ie(null, t, g) : C), g.abort(), v(), g = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const h = Ms(s.url);
    if (h && !K.protocols.includes(h)) {
      r(
        new j(
          "Unsupported protocol " + h + ":",
          j.ERR_BAD_REQUEST,
          t
        )
      );
      return;
    }
    g.send(o || null);
  });
}, eo = (t, e) => {
  if (t = t ? t.filter(Boolean) : [], !e && !t.length)
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
  let o = e && setTimeout(() => {
    o = null, s(new j(`timeout of ${e}ms exceeded`, j.ETIMEDOUT));
  }, e);
  const a = () => {
    t && (o && clearTimeout(o), o = null, t.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
    }), t = null);
  };
  t.forEach((f) => f.addEventListener("abort", s));
  const { signal: l } = n;
  return l.unsubscribe = () => u.asap(a), l;
}, to = eo, ro = function* (t, e) {
  let n = t.byteLength;
  if (!e || n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, no = async function* (t, e) {
  for await (const n of so(t))
    yield* ro(n, e);
}, so = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, nr = (t, e, n, r) => {
  const s = no(t, e);
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
            let E = o += b;
            n(E);
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
function oo(t) {
  if (!t || typeof t != "string" || !t.startsWith("data:"))
    return 0;
  const e = t.indexOf(",");
  if (e < 0)
    return 0;
  const n = t.slice(5, e), r = t.slice(e + 1);
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
    const E = Math.floor(a / 4) * 3 - (f || 0);
    return E > 0 ? E : 0;
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
const Ot = "1.16.1", sr = 64 * 1024, { isFunction: He } = u, or = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, ao = (t) => {
  const e = u.global !== void 0 && u.global !== null ? u.global : globalThis, { ReadableStream: n, TextEncoder: r } = e;
  t = u.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: e.Request,
      Response: e.Response
    },
    t
  );
  const { fetch: s, Request: o, Response: a } = t, l = s ? He(s) : typeof fetch == "function", f = He(o), p = He(a);
  if (!l)
    return !1;
  const d = l && He(n), b = l && (typeof r == "function" ? ((y) => (h) => y.encode(h))(new r()) : async (y) => new Uint8Array(await new o(y).arrayBuffer())), E = f && d && or(() => {
    let y = !1;
    const h = new o(K.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }), C = h.headers.has("Content-Type");
    return h.body != null && h.body.cancel(), y && !C;
  }), x = p && d && or(() => u.isReadableStream(new a("").body)), R = {
    stream: x && ((y) => y.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !R[y] && (R[y] = (h, C) => {
      let N = h && h[y];
      if (N)
        return N.call(h);
      throw new j(
        `Response type '${y}' is not supported`,
        j.ERR_NOT_SUPPORT,
        C
      );
    });
  });
  const v = async (y) => {
    if (y == null)
      return 0;
    if (u.isBlob(y))
      return y.size;
    if (u.isSpecCompliantForm(y))
      return (await new o(K.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(y) || u.isArrayBuffer(y))
      return y.byteLength;
    if (u.isURLSearchParams(y) && (y = y + ""), u.isString(y))
      return (await b(y)).byteLength;
  }, g = async (y, h) => {
    const C = u.toFiniteNumber(y.getContentLength());
    return C ?? v(h);
  };
  return async (y) => {
    let {
      url: h,
      method: C,
      data: N,
      signal: U,
      cancelToken: re,
      timeout: fe,
      onDownloadProgress: be,
      onUploadProgress: he,
      responseType: se,
      headers: oe,
      withCredentials: pe = "same-origin",
      fetchOptions: H,
      maxContentLength: $,
      maxBodyLength: le
    } = Nr(y);
    const O = u.isNumber($) && $ > -1, V = u.isNumber(le) && le > -1;
    let xe = s || fetch;
    se = se ? (se + "").toLowerCase() : "text";
    let X = to(
      [U, re && re.toAbortSignal()],
      fe
    ), z = null;
    const Q = X && X.unsubscribe && (() => {
      X.unsubscribe();
    });
    let D;
    try {
      if (O && typeof h == "string" && h.startsWith("data:") && oo(h) > $)
        throw new j(
          "maxContentLength size of " + $ + " exceeded",
          j.ERR_BAD_RESPONSE,
          y,
          z
        );
      if (V && C !== "get" && C !== "head") {
        const k = await g(oe, N);
        if (typeof k == "number" && isFinite(k) && k > le)
          throw new j(
            "Request body larger than maxBodyLength limit",
            j.ERR_BAD_REQUEST,
            y,
            z
          );
      }
      if (he && E && C !== "get" && C !== "head" && (D = await g(oe, N)) !== 0) {
        let k = new o(h, {
          method: "POST",
          body: N,
          duplex: "half"
        }), ue;
        if (u.isFormData(N) && (ue = k.headers.get("content-type")) && oe.setContentType(ue), k.body) {
          const [me, Re] = er(
            D,
            Ye(tr(he))
          );
          N = nr(k.body, sr, me, Re);
        }
      }
      u.isString(pe) || (pe = pe ? "include" : "omit");
      const _ = f && "credentials" in o.prototype;
      if (u.isFormData(N)) {
        const k = oe.getContentType();
        k && /^multipart\/form-data/i.test(k) && !/boundary=/i.test(k) && oe.delete("content-type");
      }
      oe.set("User-Agent", "axios/" + Ot, !1);
      const W = {
        ...H,
        signal: X,
        method: C.toUpperCase(),
        headers: gr(oe.normalize()),
        body: N,
        duplex: "half",
        credentials: _ ? pe : void 0
      };
      z = f && new o(h, W);
      let Y = await (f ? xe(z, H) : xe(h, W));
      if (O) {
        const k = u.toFiniteNumber(Y.headers.get("content-length"));
        if (k != null && k > $)
          throw new j(
            "maxContentLength size of " + $ + " exceeded",
            j.ERR_BAD_RESPONSE,
            y,
            z
          );
      }
      const ge = x && (se === "stream" || se === "response");
      if (x && Y.body && (be || O || ge && Q)) {
        const k = {};
        ["status", "statusText", "headers"].forEach((ye) => {
          k[ye] = Y[ye];
        });
        const ue = u.toFiniteNumber(Y.headers.get("content-length")), [me, Re] = be && er(
          ue,
          Ye(tr(be), !0)
        ) || [];
        let _e = 0;
        const st = (ye) => {
          if (O && (_e = ye, _e > $))
            throw new j(
              "maxContentLength size of " + $ + " exceeded",
              j.ERR_BAD_RESPONSE,
              y,
              z
            );
          me && me(ye);
        };
        Y = new a(
          nr(Y.body, sr, st, () => {
            Re && Re(), Q && Q();
          }),
          k
        );
      }
      se = se || "text";
      let ne = await R[u.findKey(R, se) || "text"](
        Y,
        y
      );
      if (O && !x && !ge) {
        let k;
        if (ne != null && (typeof ne.byteLength == "number" ? k = ne.byteLength : typeof ne.size == "number" ? k = ne.size : typeof ne == "string" && (k = typeof r == "function" ? new r().encode(ne).byteLength : ne.length)), typeof k == "number" && k > $)
          throw new j(
            "maxContentLength size of " + $ + " exceeded",
            j.ERR_BAD_RESPONSE,
            y,
            z
          );
      }
      return !ge && Q && Q(), await new Promise((k, ue) => {
        jr(k, ue, {
          data: ne,
          headers: ce.from(Y.headers),
          status: Y.status,
          statusText: Y.statusText,
          config: y,
          request: z
        });
      });
    } catch (_) {
      if (Q && Q(), X && X.aborted && X.reason instanceof j) {
        const W = X.reason;
        throw W.config = y, z && (W.request = z), _ !== W && (W.cause = _), W;
      }
      throw _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
        new j(
          "Network Error",
          j.ERR_NETWORK,
          y,
          z,
          _ && _.response
        ),
        {
          cause: _.cause || _
        }
      ) : j.from(_, _ && _.code, y, z, _ && _.response);
    }
  };
}, io = /* @__PURE__ */ new Map(), Cr = (t) => {
  let e = t && t.env || {};
  const { fetch: n, Request: r, Response: s } = e, o = [r, s, n];
  let a = o.length, l = a, f, p, d = io;
  for (; l--; )
    f = o[l], p = d.get(f), p === void 0 && d.set(f, p = l ? /* @__PURE__ */ new Map() : ao(e)), d = p;
  return p;
};
Cr();
const _t = {
  http: js,
  xhr: Zs,
  fetch: {
    get: Cr
  }
};
u.forEach(_t, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { __proto__: null, value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { __proto__: null, value: e });
  }
});
const ar = (t) => `- ${t}`, co = (t) => u.isFunction(t) || t === null || t === !1;
function lo(t, e) {
  t = u.isArray(t) ? t : [t];
  const { length: n } = t;
  let r, s;
  const o = {};
  for (let a = 0; a < n; a++) {
    r = t[a];
    let l;
    if (s = r, !co(r) && (s = _t[(l = String(r)).toLowerCase()], s === void 0))
      throw new j(`Unknown adapter '${l}'`);
    if (s && (u.isFunction(s) || (s = s.get(e))))
      break;
    o[l || "#" + a] = s;
  }
  if (!s) {
    const a = Object.entries(o).map(
      ([f, p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? a.length > 1 ? `since :
` + a.map(ar).join(`
`) : " " + ar(a[0]) : "as no adapter specified";
    throw new j(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Or = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lo,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: _t
};
function bt(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ie(null, t);
}
function ir(t) {
  return bt(t), t.headers = ce.from(t.headers), t.data = mt.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Or.getAdapter(t.adapter || Ct.adapter, t)(t).then(
    function(r) {
      bt(t), t.response = r;
      try {
        r.data = mt.call(t, t.transformResponse, r);
      } finally {
        delete t.response;
      }
      return r.headers = ce.from(r.headers), r;
    },
    function(r) {
      if (!Rr(r) && (bt(t), r && r.response)) {
        t.response = r.response;
        try {
          r.response.data = mt.call(
            t,
            t.transformResponse,
            r.response
          );
        } finally {
          delete t.response;
        }
        r.response.headers = ce.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  nt[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const cr = {};
nt.transitional = function(e, n, r) {
  function s(o, a) {
    return "[Axios v" + Ot + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, l) => {
    if (e === !1)
      throw new j(
        s(a, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !cr[a] && (cr[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(o, a, l) : !0;
  };
};
nt.spelling = function(e) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function uo(t, e, n) {
  if (typeof t != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = Object.prototype.hasOwnProperty.call(e, o) ? e[o] : void 0;
    if (a) {
      const l = t[o], f = l === void 0 || a(l, o, t);
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
  assertOptions: uo,
  validators: nt
}, ie = Ve.validators;
class Ge {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Zt(),
      response: new Zt()
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
  async request(e, n) {
    try {
      return await this._request(e, n);
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
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ee(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ve.assertOptions(
      r,
      {
        silentJSONParsing: ie.transitional(ie.boolean),
        forcedJSONParsing: ie.transitional(ie.boolean),
        clarifyTimeoutError: ie.transitional(ie.boolean),
        legacyInterceptorReqResOrdering: ie.transitional(ie.boolean)
      },
      !1
    ), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ve.assertOptions(
      s,
      {
        encode: ie.function,
        serialize: ie.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ve.assertOptions(
      n,
      {
        baseUrl: ie.spelling("baseURL"),
        withXsrfToken: ie.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && u.merge(o.common, o[n.method]);
    o && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (R) => {
      delete o[R];
    }), n.headers = ce.concat(a, o);
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
    let d, b = 0, E;
    if (!f) {
      const R = [ir.bind(this), void 0];
      for (R.unshift(...l), R.push(...p), E = R.length, d = Promise.resolve(n); b < E; )
        d = d.then(R[b++], R[b++]);
      return d;
    }
    E = l.length;
    let x = n;
    for (; b < E; ) {
      const R = l[b++], v = l[b++];
      try {
        x = R(x);
      } catch (g) {
        v.call(this, g);
        break;
      }
    }
    try {
      d = ir.call(this, x);
    } catch (R) {
      return Promise.reject(R);
    }
    for (b = 0, E = p.length; b < E; )
      d = d.then(p[b++], p[b++]);
    return d;
  }
  getUri(e) {
    e = Ee(this.defaults, e);
    const n = Sr(e.baseURL, e.url, e.allowAbsoluteUrls);
    return wr(n, e.params, e.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(e) {
  Ge.prototype[e] = function(n, r) {
    return this.request(
      Ee(r || {}, {
        method: e,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
u.forEach(["post", "put", "patch", "query"], function(e) {
  function n(r) {
    return function(o, a, l) {
      return this.request(
        Ee(l || {}, {
          method: e,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: a
        })
      );
    };
  }
  Ge.prototype[e] = n(), e !== "query" && (Ge.prototype[e + "Form"] = n(!0));
});
const Ke = Ge;
class Tt {
  constructor(e) {
    if (typeof e != "function")
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
    }, e(function(o, a, l) {
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
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Tt(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
const fo = Tt;
function po(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function mo(t) {
  return u.isObject(t) && t.isAxiosError === !0;
}
const wt = {
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
Object.entries(wt).forEach(([t, e]) => {
  wt[e] = t;
});
const bo = wt;
function _r(t) {
  const e = new Ke(t), n = dr(Ke.prototype.request, e);
  return u.extend(n, Ke.prototype, e, { allOwnKeys: !0 }), u.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return _r(Ee(t, s));
  }, n;
}
const M = _r(Ct);
M.Axios = Ke;
M.CanceledError = Ie;
M.CancelToken = fo;
M.isCancel = Rr;
M.VERSION = Ot;
M.toFormData = rt;
M.AxiosError = j;
M.Cancel = M.CanceledError;
M.all = function(e) {
  return Promise.all(e);
};
M.spread = po;
M.isAxiosError = mo;
M.mergeConfig = Ee;
M.AxiosHeaders = ce;
M.formToJSON = (t) => Er(u.isHTMLForm(t) ? new FormData(t) : t);
M.getAdapter = Or.getAdapter;
M.HttpStatusCode = bo;
M.default = M;
const ho = M;
class xo {
  constructor(e = {}) {
    qe(this, "instance");
    qe(this, "jsonPath");
    const n = e.baseUrl || window.location.origin, r = e.jsonPath || "/socket-docs/json";
    console.log(`[SocketDocs] ApiService initialized with: baseUrl=${n}, jsonPath=${r}`), this.instance = ho.create({
      baseURL: n,
      timeout: 1e4
      // 10 second timeout
    }), this.jsonPath = r;
  }
  async fetchDocs() {
    console.log(`[SocketDocs] Fetching docs from: ${this.instance.defaults.baseURL}${this.jsonPath}`);
    const { data: e } = await this.instance.get(this.jsonPath);
    return console.log("[SocketDocs] Docs fetched successfully:", e), e;
  }
}
const go = (t) => new xo(t), Tr = "socket_docs_payloads", yo = (t) => {
  const e = {};
  if (!t || !t.gateways)
    return e;
  const n = localStorage.getItem(Tr), r = n ? JSON.parse(n) : {};
  return t.gateways.forEach((s) => {
    s.events.forEach((o) => {
      var l;
      const a = `${s.name}-${o.event}`;
      e[a] = r[a] || JSON.stringify(
        ((l = o.payloadSchema) == null ? void 0 : l.example) ?? {},
        null,
        2
      );
    });
  }), e;
}, vo = (t = {}) => {
  const [e, n] = ee(null), [r, s] = ee({}), [o, a] = ee({}), [l, f] = ee(!0), [p, d] = ee(null), b = lr(() => go(t), [t.baseUrl, t.jsonPath]);
  return zt(() => {
    f(!0), b.fetchDocs().then((x) => {
      n(x), s(yo(x)), d(null);
    }).catch((x) => {
      console.error("Failed to fetch socket docs:", x), d(x instanceof Error ? x : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [b]), zt(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Tr, JSON.stringify(r));
  }, [r]), {
    data: e,
    payloads: r,
    expanded: o,
    loading: l,
    error: p,
    setPayloads: s,
    toggleExpand: (x) => {
      a((R) => ({ ...R, [x]: !R[x] }));
    }
  };
}, wo = (t) => {
  var g;
  const [e, n] = ee(0), [r, s] = ee(0), [o, a] = ee(""), [l, f] = ee(!1), [p, d] = ee("dark"), b = lr(() => t ? o ? t.gateways.map((y) => ({
    ...y,
    events: y.events.filter(
      (h) => h.event.toLowerCase().includes(o.toLowerCase()) || y.name.toLowerCase().includes(o.toLowerCase())
    )
  })).filter((y) => y.events.length > 0) : t.gateways : [], [t, o]), E = b[e], x = (g = E == null ? void 0 : E.events) == null ? void 0 : g[r];
  return {
    activeGatewayIdx: e,
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
      if (!t)
        return;
      const y = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), h = URL.createObjectURL(y), C = document.createElement("a");
      C.href = h, C.download = "socket-docs-contract.json", C.click();
    },
    activeGateway: E,
    activeEvent: x,
    filteredGateways: b
  };
}, ze = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, No = () => {
  const t = q.useMemo(() => !window.location.pathname.includes("socket-docs"), []), [e, n] = q.useState(() => {
    var W;
    const D = localStorage.getItem(ze.API), _ = (W = window.SOCKET_DOCS_CONFIG) == null ? void 0 : W.api;
    return D ? JSON.parse(D) : _ ? { ..._ } : {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
  }), [r, s] = q.useState(() => {
    var Y;
    const D = localStorage.getItem(ze.SOCKET), _ = (Y = window.SOCKET_DOCS_CONFIG) == null ? void 0 : Y.socket, W = {
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
    return D ? JSON.parse(D) : _ ? { ...W, ..._ } : W;
  }), [o, a] = q.useState(!1), { data: l, payloads: f, setPayloads: p, expanded: d, toggleExpand: b, loading: E, error: x } = vo(e);
  q.useEffect(() => {
    console.log("[SocketDocs] UI State:", { data: l, loading: E, error: x });
  }, [l, E, x]);
  const R = q.useMemo(() => ({
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
  }), [r]), { connected: v, logs: g, connect: y, emitEvent: h, clearLogs: C } = wn(R), N = q.useMemo(() => {
    if (!l)
      return ["/"];
    const D = /* @__PURE__ */ new Set();
    return l.gateways.forEach((_) => D.add(_.namespace)), Array.from(D);
  }, [l]), {
    activeGatewayIdx: U,
    setActiveGatewayIdx: re,
    activeEventIdx: fe,
    setActiveEventIdx: be,
    searchQuery: he,
    setSearchQuery: se,
    isPaused: oe,
    setIsPaused: pe,
    theme: H,
    toggleTheme: $,
    exportContract: le,
    activeGateway: O,
    activeEvent: V,
    filteredGateways: xe
  } = wo(l);
  q.useEffect(() => {
    if (r.autoConnect && O && !v[O.name]) {
      const D = e.baseUrl.replace(/\/$/, ""), _ = r.namespace === "/" ? O.namespace : r.namespace, W = setTimeout(() => {
        y(
          O.name,
          `${D}${z(_)}`,
          O.path
        );
      }, 500);
      return () => clearTimeout(W);
    }
  }, [O == null ? void 0 : O.name, r.autoConnect, e.baseUrl, r.namespace, y, v]);
  const X = (D, _) => {
    localStorage.setItem(ze.API, JSON.stringify(D)), localStorage.setItem(ze.SOCKET, JSON.stringify(_)), n(D), s(_), a(!1);
  }, z = (D) => D.startsWith("/") ? D : `/${D}`;
  if (E)
    return /* @__PURE__ */ i.jsx(Vt, {});
  if (x)
    return /* @__PURE__ */ i.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${H === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ i.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-text-muted", children: x.message }),
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
        Kt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: X,
          initialApiConfig: e,
          initialSocketConfig: r,
          isStandalone: t,
          theme: H
        }
      )
    ] });
  if (!l)
    return /* @__PURE__ */ i.jsx(Vt, {});
  const Q = O && V ? `${O.name}-${V.event}` : "";
  return /* @__PURE__ */ i.jsxs("div", { className: `flex h-screen overflow-hidden font-sans text-text-primary ${H === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ i.jsx(
      pn,
      {
        gateways: xe,
        activeGatewayIdx: U,
        activeEventIdx: fe,
        onSelectGateway: re,
        onSelectEvent: be,
        searchQuery: he,
        onSearchChange: se,
        onExport: le,
        expanded: d,
        onToggleExpand: b
      }
    ),
    /* @__PURE__ */ i.jsxs("main", { className: "flex flex-1 flex-col overflow-y-auto bg-bg-secondary", children: [
      /* @__PURE__ */ i.jsx(
        mn,
        {
          connected: O ? !!v[O.name] : !1,
          gatewayPath: (O == null ? void 0 : O.path) ?? "ws://localhost:3000",
          namespace: r.namespace === "/" && O ? O.namespace : r.namespace,
          namespaces: N,
          theme: H,
          onToggleTheme: $,
          onOpenSettings: () => a(!0),
          onNamespaceChange: (D) => s((_) => ({ ..._, namespace: D }))
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "mx-auto w-full max-w-[1200px] p-6", children: O && V ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(
          bn,
          {
            gatewayName: O.name,
            eventName: V.event,
            summary: V.summary ?? "",
            description: V.description ?? ""
          }
        ),
        /* @__PURE__ */ i.jsx(
          hn,
          {
            connected: !!v[O.name],
            schema: V.payloadSchema,
            onConnect: () => {
              const D = e.baseUrl.replace(/\/$/, ""), _ = r.namespace === "/" ? O.namespace : r.namespace;
              y(
                O.name,
                `${D}${z(_)}`,
                O.path
              );
            }
          }
        ),
        /* @__PURE__ */ i.jsx(
          xn,
          {
            payload: f[Q] ?? "{}",
            schema: V.payloadSchema,
            responseSchema: V.responseSchema,
            emits: V.emits,
            onChange: (D) => p({ ...f, [Q]: D }),
            onSend: () => h(O.name, V.event, f[Q] ?? "{}")
          }
        ),
        /* @__PURE__ */ i.jsx(
          yn,
          {
            connected: !!v[O.name],
            logs: g,
            onClear: C,
            isPaused: oe,
            onTogglePause: () => pe(!oe)
          }
        )
      ] }) : /* @__PURE__ */ i.jsx("div", { className: "flex h-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) }),
      /* @__PURE__ */ i.jsx(
        Kt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: X,
          initialApiConfig: e,
          initialSocketConfig: r,
          isStandalone: t,
          theme: H,
          activeGatewayNamespace: O == null ? void 0 : O.namespace
        }
      )
    ] })
  ] });
};
export {
  No as App
};
