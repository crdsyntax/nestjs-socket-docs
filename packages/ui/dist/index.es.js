var nn = Object.defineProperty;
var sn = (e, t, n) => t in e ? nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => (sn(e, typeof t != "symbol" ? t + "" : t, n), n);
import q, { useState as le, useCallback as Ue, useMemo as fr, useEffect as De } from "react";
import { RefreshCw as on, AlertCircle as an, ChevronRight as mr, ChevronLeft as cn, Search as ln, LayoutGrid as dn, Download as un, WifiOff as fn, Wifi as mn, Sun as pn, Moon as bn, Settings as hn, Shield as xn, Key as gn, User as yn, Braces as Jt, ChevronDown as vn, Play as wn, RotateCcw as En } from "lucide-react";
import { io as jn } from "socket.io-client";
var yt = { exports: {} }, $e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Rn() {
  if (Vt)
    return $e;
  Vt = 1;
  var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, m) {
    var d, p = {}, E = null, y = null;
    m !== void 0 && (E = "" + m), f.key !== void 0 && (E = "" + f.key), f.ref !== void 0 && (y = f.ref);
    for (d in f)
      r.call(f, d) && !a.hasOwnProperty(d) && (p[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        p[d] === void 0 && (p[d] = f[d]);
    return { $$typeof: t, type: l, key: E, ref: y, props: p, _owner: s.current };
  }
  return $e.Fragment = n, $e.jsx = i, $e.jsxs = i, $e;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function Sn() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = Symbol.iterator, g = "@@iterator";
    function x(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = w && c[w] || c[g];
      return typeof b == "function" ? b : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(c) {
      {
        for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), N = 1; N < b; N++)
          v[N - 1] = arguments[N];
        C("error", c, v);
      }
    }
    function C(c, b, v) {
      {
        var N = h.ReactDebugCurrentFrame, D = N.getStackAddendum();
        D !== "" && (b += "%s", v = v.concat([D]));
        var U = v.map(function(k) {
          return String(k);
        });
        U.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, U);
      }
    }
    var O = !1, B = !1, Y = !1, R = !1, W = !1, X;
    X = Symbol.for("react.module.reference");
    function ne(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === a || W || c === s || c === m || c === d || R || c === y || O || B || Y || typeof c == "object" && c !== null && (c.$$typeof === E || c.$$typeof === p || c.$$typeof === i || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === X || c.getModuleId !== void 0));
    }
    function se(c, b, v) {
      var N = c.displayName;
      if (N)
        return N;
      var D = b.displayName || b.name || "";
      return D !== "" ? v + "(" + D + ")" : v;
    }
    function he(c) {
      return c.displayName || "Context";
    }
    function M(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case m:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var b = c;
            return he(b) + ".Consumer";
          case i:
            var v = c;
            return he(v._context) + ".Provider";
          case f:
            return se(c, c.render, "ForwardRef");
          case p:
            var N = c.displayName || null;
            return N !== null ? N : M(c.type) || "Memo";
          case E: {
            var D = c, U = D._payload, k = D._init;
            try {
              return M(k(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, Z = 0, ge, _e, P, G, ue, Q, me;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function I() {
      {
        if (Z === 0) {
          ge = console.log, _e = console.info, P = console.warn, G = console.error, ue = console.group, Q = console.groupCollapsed, me = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        Z++;
      }
    }
    function A() {
      {
        if (Z--, Z === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, c, {
              value: ge
            }),
            info: z({}, c, {
              value: _e
            }),
            warn: z({}, c, {
              value: P
            }),
            error: z({}, c, {
              value: G
            }),
            group: z({}, c, {
              value: ue
            }),
            groupCollapsed: z({}, c, {
              value: Q
            }),
            groupEnd: z({}, c, {
              value: me
            })
          });
        }
        Z < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = h.ReactCurrentDispatcher, re;
    function L(c, b, v) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (D) {
            var N = D.stack.trim().match(/\n( *(at )?)/);
            re = N && N[1] || "";
          }
        return `
` + re + c;
      }
    }
    var ae = !1, J;
    {
      var _ = typeof WeakMap == "function" ? WeakMap : Map;
      J = new _();
    }
    function fe(c, b) {
      if (!c || ae)
        return "";
      {
        var v = J.get(c);
        if (v !== void 0)
          return v;
      }
      var N;
      ae = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = F.current, F.current = null, I();
      try {
        if (b) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (ie) {
              N = ie;
            }
            Reflect.construct(c, [], k);
          } else {
            try {
              k.call();
            } catch (ie) {
              N = ie;
            }
            c.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            N = ie;
          }
          c();
        }
      } catch (ie) {
        if (ie && N && typeof ie.stack == "string") {
          for (var T = ie.stack.split(`
`), oe = N.stack.split(`
`), H = T.length - 1, V = oe.length - 1; H >= 1 && V >= 0 && T[H] !== oe[V]; )
            V--;
          for (; H >= 1 && V >= 0; H--, V--)
            if (T[H] !== oe[V]) {
              if (H !== 1 || V !== 1)
                do
                  if (H--, V--, V < 0 || T[H] !== oe[V]) {
                    var pe = `
` + T[H].replace(" at new ", " at ");
                    return c.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", c.displayName)), typeof c == "function" && J.set(c, pe), pe;
                  }
                while (H >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        ae = !1, F.current = U, A(), Error.prepareStackTrace = D;
      }
      var ke = c ? c.displayName || c.name : "", Se = ke ? L(ke) : "";
      return typeof c == "function" && J.set(c, Se), Se;
    }
    function ve(c, b, v) {
      return fe(c, !1);
    }
    function Te(c) {
      var b = c.prototype;
      return !!(b && b.isReactComponent);
    }
    function je(c, b, v) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return fe(c, Te(c));
      if (typeof c == "string")
        return L(c);
      switch (c) {
        case m:
          return L("Suspense");
        case d:
          return L("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return ve(c.render);
          case p:
            return je(c.type, b, v);
          case E: {
            var N = c, D = N._payload, U = N._init;
            try {
              return je(U(D), b, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, we = {}, Dt = h.ReactDebugCurrentFrame;
    function We(c) {
      if (c) {
        var b = c._owner, v = je(c.type, c._source, b ? b.type : null);
        Dt.setExtraStackFrame(v);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Ir(c, b, v, N, D) {
      {
        var U = Function.call.bind(Re);
        for (var k in c)
          if (U(c, k)) {
            var T = void 0;
            try {
              if (typeof c[k] != "function") {
                var oe = Error((N || "React class") + ": " + v + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              T = c[k](b, k, N, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              T = H;
            }
            T && !(T instanceof Error) && (We(D), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", v, k, typeof T), We(null)), T instanceof Error && !(T.message in we) && (we[T.message] = !0, We(D), j("Failed %s type: %s", v, T.message), We(null));
          }
      }
    }
    var Fr = Array.isArray;
    function ct(c) {
      return Fr(c);
    }
    function Lr(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, v = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return v;
      }
    }
    function Ur(c) {
      try {
        return It(c), !1;
      } catch {
        return !0;
      }
    }
    function It(c) {
      return "" + c;
    }
    function Ft(c) {
      if (Ur(c))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(c)), It(c);
    }
    var Le = h.ReactCurrentOwner, $r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Ut, lt;
    lt = {};
    function Br(c) {
      if (Re.call(c, "ref")) {
        var b = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function qr(c) {
      if (Re.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Mr(c, b) {
      if (typeof c.ref == "string" && Le.current && b && Le.current.stateNode !== b) {
        var v = M(Le.current.type);
        lt[v] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Le.current.type), c.ref), lt[v] = !0);
      }
    }
    function zr(c, b) {
      {
        var v = function() {
          Lt || (Lt = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Hr(c, b) {
      {
        var v = function() {
          Ut || (Ut = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Wr = function(c, b, v, N, D, U, k) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: v,
        props: k,
        // Record the component responsible for creating this element.
        _owner: U
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
        value: N
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function Jr(c, b, v, N, D) {
      {
        var U, k = {}, T = null, oe = null;
        v !== void 0 && (Ft(v), T = "" + v), qr(b) && (Ft(b.key), T = "" + b.key), Br(b) && (oe = b.ref, Mr(b, D));
        for (U in b)
          Re.call(b, U) && !$r.hasOwnProperty(U) && (k[U] = b[U]);
        if (c && c.defaultProps) {
          var H = c.defaultProps;
          for (U in H)
            k[U] === void 0 && (k[U] = H[U]);
        }
        if (T || oe) {
          var V = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          T && zr(k, V), oe && Hr(k, V);
        }
        return Wr(c, T, oe, D, N, Le.current, k);
      }
    }
    var dt = h.ReactCurrentOwner, $t = h.ReactDebugCurrentFrame;
    function Ae(c) {
      if (c) {
        var b = c._owner, v = je(c.type, c._source, b ? b.type : null);
        $t.setExtraStackFrame(v);
      } else
        $t.setExtraStackFrame(null);
    }
    var ut;
    ut = !1;
    function ft(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function Bt() {
      {
        if (dt.current) {
          var c = M(dt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Vr(c) {
      {
        if (c !== void 0) {
          var b = c.fileName.replace(/^.*[\\\/]/, ""), v = c.lineNumber;
          return `

Check your code at ` + b + ":" + v + ".";
        }
        return "";
      }
    }
    var qt = {};
    function Kr(c) {
      {
        var b = Bt();
        if (!b) {
          var v = typeof c == "string" ? c : c.displayName || c.name;
          v && (b = `

Check the top-level render call using <` + v + ">.");
        }
        return b;
      }
    }
    function Mt(c, b) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var v = Kr(b);
        if (qt[v])
          return;
        qt[v] = !0;
        var N = "";
        c && c._owner && c._owner !== dt.current && (N = " It was passed a child from " + M(c._owner.type) + "."), Ae(c), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, N), Ae(null);
      }
    }
    function zt(c, b) {
      {
        if (typeof c != "object")
          return;
        if (ct(c))
          for (var v = 0; v < c.length; v++) {
            var N = c[v];
            ft(N) && Mt(N, b);
          }
        else if (ft(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var D = x(c);
          if (typeof D == "function" && D !== c.entries)
            for (var U = D.call(c), k; !(k = U.next()).done; )
              ft(k.value) && Mt(k.value, b);
        }
      }
    }
    function Gr(c) {
      {
        var b = c.type;
        if (b == null || typeof b == "string")
          return;
        var v;
        if (typeof b == "function")
          v = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          v = b.propTypes;
        else
          return;
        if (v) {
          var N = M(b);
          Ir(v, c.props, "prop", N, c);
        } else if (b.PropTypes !== void 0 && !ut) {
          ut = !0;
          var D = M(b);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(c) {
      {
        for (var b = Object.keys(c.props), v = 0; v < b.length; v++) {
          var N = b[v];
          if (N !== "children" && N !== "key") {
            Ae(c), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Ae(null);
            break;
          }
        }
        c.ref !== null && (Ae(c), j("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    var Ht = {};
    function Wt(c, b, v, N, D, U) {
      {
        var k = ne(c);
        if (!k) {
          var T = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Vr(D);
          oe ? T += oe : T += Bt();
          var H;
          c === null ? H = "null" : ct(c) ? H = "array" : c !== void 0 && c.$$typeof === t ? (H = "<" + (M(c.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : H = typeof c, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, T);
        }
        var V = Jr(c, b, v, D, U);
        if (V == null)
          return V;
        if (k) {
          var pe = b.children;
          if (pe !== void 0)
            if (N)
              if (ct(pe)) {
                for (var ke = 0; ke < pe.length; ke++)
                  zt(pe[ke], c);
                Object.freeze && Object.freeze(pe);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(pe, c);
        }
        if (Re.call(b, "key")) {
          var Se = M(c), ie = Object.keys(b).filter(function(rn) {
            return rn !== "key";
          }), mt = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ht[Se + mt]) {
            var tn = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mt, Se, tn, Se), Ht[Se + mt] = !0;
          }
        }
        return c === r ? Yr(V) : Gr(V), V;
      }
    }
    function Xr(c, b, v) {
      return Wt(c, b, v, !0);
    }
    function Qr(c, b, v) {
      return Wt(c, b, v, !1);
    }
    var Zr = Qr, en = Xr;
    Be.Fragment = r, Be.jsx = Zr, Be.jsxs = en;
  }()), Be;
}
process.env.NODE_ENV === "production" ? yt.exports = Rn() : yt.exports = Sn();
var o = yt.exports;
const Gt = () => {
  const [e, t] = q.useState(!1);
  return q.useEffect(() => {
    const n = setTimeout(() => t(!0), 5e3);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center", children: [
    /* @__PURE__ */ o.jsx(on, { className: "animate-spin mb-4", size: 48 }),
    /* @__PURE__ */ o.jsx("span", { className: "text-xl font-medium mb-2", children: "Cargando contratos..." }),
    e && /* @__PURE__ */ o.jsxs("div", { className: "mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-center gap-2 text-orange-400 mb-2", children: [
        /* @__PURE__ */ o.jsx(an, { size: 20 }),
        /* @__PURE__ */ o.jsx("span", { className: "font-bold uppercase text-xs tracking-wider", children: "¿Demasiado tiempo?" })
      ] }),
      /* @__PURE__ */ o.jsxs("p", { className: "text-text-secondary text-sm leading-relaxed", children: [
        "Parece que la carga está tardando más de lo normal. Verifica la ",
        /* @__PURE__ */ o.jsx("b", { children: "consola del navegador (F12)" }),
        " para ver errores de red o configuración."
      ] }),
      /* @__PURE__ */ o.jsx(
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
}, Nn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  expanded: a,
  onToggleExpand: i
}) => /* @__PURE__ */ o.jsx("div", { className: "space-y-4", children: e.map((l, f) => {
  const m = a[l.name] !== !1;
  return /* @__PURE__ */ o.jsxs("div", { className: "nav-group", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
        onClick: () => i(l.name),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ o.jsx("span", { className: "text-text-muted", children: "📁" }),
            l.name
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: `text-[11px] text-text-muted transition-transform ${m ? "" : "-rotate-90"}`, children: [
            l.namespace,
            " ▾"
          ] })
        ]
      }
    ),
    m && /* @__PURE__ */ o.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: l.events.map((d, p) => {
      const E = t === f && n === p;
      return /* @__PURE__ */ o.jsxs(
        "li",
        {
          onClick: (y) => {
            y.stopPropagation(), r(f), s(p);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${E ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
            /* @__PURE__ */ o.jsx("span", { className: "truncate", children: d.event })
          ]
        },
        p
      );
    }) })
  ] }, f);
}) }), $ = {
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
}, Cn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  searchQuery: a,
  onSearchChange: i,
  onExport: l,
  expanded: f,
  onToggleExpand: m
}) => {
  const [d, p] = le(!1);
  return /* @__PURE__ */ o.jsxs("aside", { className: `relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${d ? "w-16 p-2" : "w-[300px] p-4"}`, children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: () => p(!d),
        className: "absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors",
        children: d ? /* @__PURE__ */ o.jsx(mr, { size: 14 }) : /* @__PURE__ */ o.jsx(cn, { size: 14 })
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: `mb-6 flex items-center ${d ? "justify-center" : "gap-2"}`, children: [
      /* @__PURE__ */ o.jsx("span", { className: "text-xl text-brand-emerald shrink-0", children: "■" }),
      !d && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("span", { className: "text-base font-semibold truncate", children: $.common.socketDocs }),
        /* @__PURE__ */ o.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: $.common.v1 })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "relative mb-6", children: d ? /* @__PURE__ */ o.jsx("div", { className: "flex justify-center text-text-muted cursor-pointer hover:text-text-primary", onClick: () => p(!1), children: /* @__PURE__ */ o.jsx(ln, { size: 18 }) }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
          placeholder: $.common.searchPlaceholder,
          value: a,
          onChange: (E) => i(E.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
    ] }) }),
    !d && /* @__PURE__ */ o.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1", children: [
      /* @__PURE__ */ o.jsx("span", { children: $.common.gateways }),
      /* @__PURE__ */ o.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
    ] }),
    d && /* @__PURE__ */ o.jsx("div", { className: "mb-3 flex justify-center text-text-secondary", children: /* @__PURE__ */ o.jsx(dn, { size: 18 }) }),
    /* @__PURE__ */ o.jsx("div", { className: `flex-1 overflow-y-auto ${d ? "hidden" : "block"}`, children: /* @__PURE__ */ o.jsx(
      Nn,
      {
        gateways: e,
        activeGatewayIdx: t,
        activeEventIdx: n,
        onSelectGateway: r,
        onSelectEvent: s,
        expanded: f,
        onToggleExpand: m
      }
    ) }),
    /* @__PURE__ */ o.jsxs("div", { className: `mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${d ? "flex flex-col items-center gap-4" : ""}`, children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          onClick: l,
          title: $.common.exportContract,
          className: `flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${d ? "h-9 w-9" : "mb-3 w-full py-2"}`,
          children: [
            /* @__PURE__ */ o.jsx(un, { size: 14 }),
            !d && $.common.exportContract
          ]
        }
      ),
      !d && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("p", { children: [
          $.common.socketDocs,
          " ",
          $.common.v1
        ] }),
        /* @__PURE__ */ o.jsx("p", { children: $.common.madeWith })
      ] })
    ] })
  ] });
}, On = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  namespaces: r,
  theme: s,
  onToggleTheme: a,
  onOpenSettings: i,
  onNamespaceChange: l,
  onConnect: f
}) => /* @__PURE__ */ o.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6 bg-bg-primary", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs mr-auto", children: [
    /* @__PURE__ */ o.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500"}` }),
    /* @__PURE__ */ o.jsx("span", { className: "font-medium", children: e ? $.common.connected : $.common.disconnected }),
    /* @__PURE__ */ o.jsx("span", { className: "text-text-muted border-l border-border-subtle pl-2", children: t })
  ] }),
  /* @__PURE__ */ o.jsxs(
    "button",
    {
      onClick: f,
      className: `flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${e ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20"}`,
      children: [
        e ? /* @__PURE__ */ o.jsx(fn, { size: 14 }) : /* @__PURE__ */ o.jsx(mn, { size: 14 }),
        e ? "Desconectar" : "Conectar"
      ]
    }
  ),
  /* @__PURE__ */ o.jsx(
    "select",
    {
      value: n,
      onChange: (m) => l(m.target.value),
      className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors",
      children: r.map((m) => /* @__PURE__ */ o.jsx("option", { value: m, children: m }, m))
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 border-l border-border-subtle pl-3", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: a,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: s === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        children: s === "dark" ? /* @__PURE__ */ o.jsx(pn, { size: 14 }) : /* @__PURE__ */ o.jsx(bn, { size: 14 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: i,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: "Configuración",
        children: /* @__PURE__ */ o.jsx(hn, { size: 14 })
      }
    )
  ] })
] }), _n = ({ type: e }) => {
  const t = {
    JWT: {
      icon: /* @__PURE__ */ o.jsx(xn, { size: 12 }),
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Requiere token Bearer JWT en el campo auth.token."
    },
    API_KEY: {
      icon: /* @__PURE__ */ o.jsx(gn, { size: 12 }),
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      desc: "Requiere una clave de API válida enviada en los headers o query."
    },
    BASIC: {
      icon: /* @__PURE__ */ o.jsx(yn, { size: 12 }),
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      desc: "Autenticación básica de usuario/contraseña."
    },
    NONE: {
      icon: null,
      color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      desc: "No requiere autenticación."
    }
  }, n = t[e] || t.NONE;
  return e === "NONE" ? null : /* @__PURE__ */ o.jsxs("div", { className: `flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${n.color}`, title: n.desc, children: [
    n.icon,
    /* @__PURE__ */ o.jsx("span", { children: e })
  ] });
}, Tn = ({
  gatewayName: e,
  eventName: t,
  summary: n,
  description: r,
  auth: s
}) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
  /* @__PURE__ */ o.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 text-sm text-text-secondary", children: [
      /* @__PURE__ */ o.jsx("span", { children: e }),
      " / ",
      /* @__PURE__ */ o.jsx("span", { children: "events" }),
      " / ",
      /* @__PURE__ */ o.jsx("span", { className: "font-medium text-text-primary", children: t })
    ] }),
    s && /* @__PURE__ */ o.jsx(_n, { type: s })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ o.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: $.event.type }),
    /* @__PURE__ */ o.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ o.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ o.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), An = ({ schema: e, responseSchema: t }) => {
  const [n, r] = q.useState("request"), [s, a] = q.useState(!1), i = (m) => JSON.stringify(m, null, 2), l = !!e && (Object.keys((e == null ? void 0 : e.properties) || {}).length > 0 || !!e.type), f = !!t && (Object.keys((t == null ? void 0 : t.properties) || {}).length > 0 || !!t.type);
  return !l && !f ? /* @__PURE__ */ o.jsxs("div", { className: "mb-4 flex items-center gap-2 text-text-secondary italic", children: [
    /* @__PURE__ */ o.jsx(Jt, { size: 14, className: "opacity-40" }),
    /* @__PURE__ */ o.jsx("span", { className: "text-[12px]", children: $.event.noParameters })
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "mb-3 flex items-center gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex items-center gap-2 mr-2 cursor-pointer hover:text-brand-emerald transition-colors",
          onClick: () => a(!s),
          children: [
            s ? /* @__PURE__ */ o.jsx(vn, { size: 14 }) : /* @__PURE__ */ o.jsx(mr, { size: 14 }),
            /* @__PURE__ */ o.jsx(Jt, { size: 14, className: "text-brand-emerald" }),
            /* @__PURE__ */ o.jsx("span", { className: "font-bold uppercase tracking-wider text-text-primary text-[11px]", children: $.event.parameters })
          ]
        }
      ),
      s && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => r("request"),
            className: `pb-1.5 transition-colors ${n === "request" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Request Schema"
          }
        ),
        f && /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => r("response"),
            className: `pb-1.5 transition-colors ${n === "response" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Response Schema"
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ o.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ o.jsx("div", { className: "absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ o.jsx("span", { className: "text-[10px] bg-bg-elevation px-2 py-1 rounded border border-border-subtle font-bold text-text-muted uppercase", children: "JSON Schema" }) }),
      /* @__PURE__ */ o.jsx("pre", { className: "overflow-x-auto rounded-md bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-brand-emerald/90 custom-scrollbar max-h-[400px]", children: i(n === "request" ? e : t) })
    ] })
  ] });
}, kn = ({ payload: e, schema: t, responseSchema: n, emits: r, onChange: s, onSend: a }) => {
  const [i, l] = le(r || "");
  return q.useEffect(() => {
    l(r || "");
  }, [r]), /* @__PURE__ */ o.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ o.jsxs("span", { className: "text-[13px] font-semibold", children: [
          $.event.requestBody,
          " ",
          /* @__PURE__ */ o.jsx("span", { className: "text-[11px] text-red-400", children: $.event.required })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Listen for:" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (f) => l(f.target.value),
              placeholder: "Event name...",
              className: "bg-bg-primary border border-border-subtle rounded px-2 py-0.5 text-[11px] text-brand-emerald outline-none focus:border-brand-emerald w-40"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ o.jsx("option", { children: "application/json" }) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ o.jsx("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "pb-1.5 border-b-2 border-brand-emerald text-brand-emerald font-medium",
          children: $.event.exampleValue
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ o.jsx(
        "textarea",
        {
          value: e,
          onChange: (f) => s(f.target.value),
          className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
          rows: 8
        }
      ) }),
      /* @__PURE__ */ o.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: a,
            className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
            children: [
              /* @__PURE__ */ o.jsx(wn, { size: 14 }),
              " ",
              $.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ o.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          $.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, Pn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ o.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ o.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ o.jsx("div", { className: "space-y-2 p-4", children: e.map((t) => /* @__PURE__ */ o.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ o.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: `font-bold ${t.type === "sent" ? "text-blue-400" : t.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: t.type.toUpperCase() }),
          /* @__PURE__ */ o.jsx("span", { className: "text-text-secondary", children: t.message })
        ] }),
        /* @__PURE__ */ o.jsx("span", { className: "text-[10px] text-text-muted", children: t.timestamp })
      ] }),
      t.data != null && /* @__PURE__ */ o.jsx("pre", { className: "whitespace-pre-wrap break-all overflow-x-hidden rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
    ]
  },
  t.id
)) }), Dn = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: s
}) => {
  const [a, i] = q.useState("all"), l = q.useMemo(() => a === "all" ? t : a === "emits" ? t.filter((f) => f.type === "sent") : a === "listeners" ? t.filter((f) => f.type === "received") : t, [t, a]);
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-shrink-0 items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ o.jsx("span", { className: "text-[13px] font-semibold", children: $.realtime.title })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => i("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.all
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => i("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.emits
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => i("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ o.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ o.jsx(En, { size: 12 }),
          " ",
          $.realtime.clear
        ] }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: s,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : $.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "border-t border-border-subtle", children: /* @__PURE__ */ o.jsx(Pn, { logs: r ? [] : l, onClear: n }) })
  ] });
}, Yt = ({
  show: e,
  onClose: t,
  onSave: n,
  initialApiConfig: r,
  initialSocketConfig: s,
  isStandalone: a,
  theme: i,
  activeGatewayNamespace: l
}) => {
  var O, B, Y;
  const [f, m] = q.useState(r), [d, p] = q.useState(s), [E, y] = q.useState(!1), [w, g] = q.useState(null), [x, h] = q.useState(!1);
  q.useEffect(() => {
    e && (m(r), p(s), g(null), h(!1));
  }, [e, r, s]);
  const j = (R) => R.startsWith("/") ? R : `/${R}`, C = async () => {
    y(!0), g(null);
    const R = f.baseUrl.replace(/\/$/, ""), W = f.jsonPath.startsWith("/") ? f.jsonPath : `/${f.jsonPath}`;
    try {
      const X = await fetch(`${R}${W}`);
      if (!X.ok)
        throw new Error(`HTTP Error: ${X.status}`);
      const ne = await X.json(), { io: se } = await import("socket.io-client"), he = d.namespace === "/" ? l ?? "/" : d.namespace, M = se(`${R}${j(he)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      }), z = () => {
        M.off("connect"), M.off("connect_error"), M.disconnect();
      };
      M.on("connect", () => {
        g({
          success: !0,
          message: "¡Conexión exitosa!",
          data: { schema: ne, socketId: M.id }
        }), y(!1), h(!0), z();
      }), M.on("connect_error", (Z) => {
        g({
          success: !1,
          message: `Error Socket: ${Z.message}. Pero API OK.`,
          data: { schema: ne }
        }), y(!1), h(!0), z();
      });
    } catch (X) {
      g({ success: !1, message: `Error: ${X instanceof Error ? X.message : "Error desconocido"}` }), y(!1), h(!0);
    }
  };
  return e ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: [
    x && w && /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 z-[60] flex items-center justify-center bg-black/40", children: /* @__PURE__ */ o.jsxs("div", { className: `w-full max-w-2xl rounded-lg p-6 shadow-2xl border border-border-subtle ${i === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ o.jsx("h3", { className: `text-lg font-bold mb-4 ${w.success ? "text-brand-emerald" : "text-red-500"}`, children: w.success ? "✓ Conexión Verificada" : "✗ Fallo en la Conexión" }),
      /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-sm border border-border-subtle", children: [
          /* @__PURE__ */ o.jsx("p", { className: "font-semibold mb-1", children: "Resultado:" }),
          /* @__PURE__ */ o.jsx("p", { className: "text-text-secondary", children: w.message })
        ] }),
        ((O = w.data) == null ? void 0 : O.schema) && /* @__PURE__ */ o.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-xs border border-border-subtle max-h-60 overflow-y-auto", children: [
          /* @__PURE__ */ o.jsx("p", { className: "font-semibold mb-2 text-brand-emerald", children: "Esquema detectado:" }),
          /* @__PURE__ */ o.jsx("pre", { className: "font-mono text-text-muted", children: JSON.stringify(w.data.schema, null, 2) })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => h(!1),
            className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium hover:bg-border-subtle transition-all",
            children: "Cerrar"
          }
        ),
        w.success && /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => {
              n(f, d), h(!1);
            },
            className: "rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light transition-all",
            children: "Guardar y Aplicar"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ o.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${i === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ o.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Configuración Completa" }),
      /* @__PURE__ */ o.jsx("div", { className: "flex-1 overflow-y-auto pr-2", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Documentación API" }),
            /* @__PURE__ */ o.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${a ? "bg-orange-500/20 text-orange-500" : "bg-brand-emerald/20 text-brand-emerald"}`, children: a ? "Modo Standalone" : "Modo Integrado" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Base URL" }),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  value: f.baseUrl,
                  onChange: (R) => m({ ...f, baseUrl: R.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "http://localhost:3000"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsxs("div", { children: [
              /* @__PURE__ */ o.jsxs("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: [
                "JSON Path ",
                a && /* @__PURE__ */ o.jsx("span", { className: "text-[10px] text-orange-500 font-normal", children: "(Bloqueado en Standalone)" })
              ] }),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "text",
                  disabled: a,
                  value: f.jsonPath,
                  onChange: (R) => m({ ...f, jsonPath: R.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("section", { children: [
            /* @__PURE__ */ o.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
                /* @__PURE__ */ o.jsx(
                  "textarea",
                  {
                    value: d.auth.token,
                    onChange: (R) => p({
                      ...d,
                      auth: { ...d.auth, token: R.target.value }
                    }),
                    className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "Bearer eyJhbG..."
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "User ID" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: d.auth.userId,
                    onChange: (R) => p({
                      ...d,
                      auth: { ...d.auth, userId: R.target.value }
                    }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ o.jsxs("section", { children: [
            /* @__PURE__ */ o.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Socket.IO Core" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Namespace Override" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: d.namespace,
                    onChange: (R) => p({ ...d, namespace: R.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Socket Path" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "text",
                    value: d.path,
                    onChange: (R) => p({ ...d, path: R.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
                /* @__PURE__ */ o.jsxs(
                  "select",
                  {
                    value: d.transports.join(","),
                    onChange: (R) => {
                      const W = R.target.value;
                      let X = ["polling", "websocket"];
                      W === "websocket" && (X = ["websocket"]), W === "polling" && (X = ["polling"]), p({ ...d, transports: X });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    children: [
                      /* @__PURE__ */ o.jsx("option", { value: "polling,websocket", children: "Automático" }),
                      /* @__PURE__ */ o.jsx("option", { value: "websocket", children: "Websocket" }),
                      /* @__PURE__ */ o.jsx("option", { value: "polling", children: "Polling" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("section", { children: [
            /* @__PURE__ */ o.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reconexión y Tiempos" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "reconnection",
                    checked: d.reconnection,
                    onChange: (R) => p({ ...d, reconnection: R.target.checked }),
                    className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                  }
                ),
                /* @__PURE__ */ o.jsx("label", { htmlFor: "reconnection", className: "text-xs font-medium text-text-muted", children: "Habilitar Reconexión" })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "autoConnect",
                    checked: d.autoConnect,
                    onChange: (R) => p({ ...d, autoConnect: R.target.checked }),
                    className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                  }
                ),
                /* @__PURE__ */ o.jsx("label", { htmlFor: "autoConnect", className: "text-xs font-medium text-text-muted", children: "Auto Conectar" })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Máx Intentos" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: d.reconnectionAttempts === 1 / 0 ? 0 : d.reconnectionAttempts,
                    onChange: (R) => p({ ...d, reconnectionAttempts: R.target.value === "0" ? 1 / 0 : parseInt(R.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "0 = Infinito"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Timeout (ms)" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: d.timeout,
                    onChange: (R) => p({ ...d, timeout: parseInt(R.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Inicial (ms)" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: d.reconnectionDelay,
                    onChange: (R) => p({ ...d, reconnectionDelay: parseInt(R.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Máximo (ms)" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: d.reconnectionDelayMax,
                    onChange: (R) => p({ ...d, reconnectionDelayMax: parseInt(R.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("section", { children: [
            /* @__PURE__ */ o.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reintentos de Eventos" }),
            /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intentos" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: ((B = d.eventRetries) == null ? void 0 : B.attempts) ?? 0,
                    onChange: (R) => {
                      var W;
                      return p({
                        ...d,
                        eventRetries: {
                          attempts: parseInt(R.target.value),
                          delay: ((W = d.eventRetries) == null ? void 0 : W.delay) ?? 1e3
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "0 = Sin reintentos"
                  }
                )
              ] }),
              /* @__PURE__ */ o.jsxs("div", { children: [
                /* @__PURE__ */ o.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intervalo (ms)" }),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "number",
                    value: ((Y = d.eventRetries) == null ? void 0 : Y.delay) ?? 1e3,
                    onChange: (R) => {
                      var W;
                      return p({
                        ...d,
                        eventRetries: {
                          attempts: ((W = d.eventRetries) == null ? void 0 : W.attempts) ?? 0,
                          delay: parseInt(R.target.value)
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: C,
              disabled: E,
              className: `rounded px-4 py-2 text-sm font-semibold transition-all ${E ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
              children: E ? "Probando..." : "Probar Conexión"
            }
          ),
          w && /* @__PURE__ */ o.jsx("span", { className: `text-xs font-medium ${w.success ? "text-brand-emerald" : "text-red-500"}`, children: w.message })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: t,
              className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all",
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => n(f, d),
              className: "rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20 transition-all active:scale-95",
              children: "Guardar Configuración"
            }
          )
        ] })
      ] })
    ] })
  ] }) : null;
};
class In {
  constructor() {
    Je(this, "sockets", {});
  }
  connect(t, n, r = {}, s) {
    this.sockets[t] && this.sockets[t].disconnect();
    const a = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, i = jn(n, a);
    return i.on("connect", s.onConnect), i.on("connect_error", (l) => s.onConnectError(l)), i.on("disconnect", (l) => s.onDisconnect(l)), i.onAny(s.onAny), this.sockets[t] = i, i;
  }
  disconnect(t) {
    this.sockets[t] && (this.sockets[t].disconnect(), delete this.sockets[t]);
  }
  emit(t, n, r, s) {
    const a = this.sockets[t];
    if (!a)
      throw new Error("Socket not connected");
    s ? a.emit(n, r, s) : a.emit(n, r);
  }
  getSocket(t) {
    return this.sockets[t];
  }
}
const pt = new In(), Fn = (e = {}) => {
  const [t, n] = le({}), [r, s] = le([]), a = Ue((d, p, E) => {
    s(
      (y) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: d,
          message: p,
          data: E
        },
        ...y
      ].slice(0, 50)
    );
  }, []), i = Ue((d, p, E) => {
    const y = {
      ...e,
      options: {
        path: E ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    pt.connect(d, p, y, {
      onConnect: () => {
        n((w) => ({ ...w, [d]: !0 })), a("received", `Connected to ${p}`);
      },
      onDisconnect: (w) => {
        n((g) => ({ ...g, [d]: !1 })), a("error", `Disconnected from ${p} (${w})`);
      },
      onConnectError: (w) => {
        console.error(`[SocketDocs] Connection error for ${d}:`, w), n((g) => ({ ...g, [d]: !1 })), a("error", `Connection Error: ${w.message}`);
      },
      onAny: (w, ...g) => {
        a("received", `Event: ${w}`, g);
      }
    });
  }, [e, a]), l = Ue((d, p) => {
    pt.disconnect(d), n((E) => ({ ...E, [d]: !1 })), a("error", `Disconnected from ${p || d}`);
  }, [a]), f = Ue((d, p, E) => {
    var x, h;
    const y = ((x = e.eventRetries) == null ? void 0 : x.attempts) ?? 0, w = ((h = e.eventRetries) == null ? void 0 : h.delay) ?? 1e3, g = (j) => {
      var C;
      try {
        const O = JSON.parse(E), B = j > 0 ? ` (Reintento ${j}/${y})` : "";
        a("sent", `Emitting ${p}${B}`, O);
        let Y = !1;
        const R = setTimeout(() => {
          !Y && j < y ? (a("error", `Timeout esperando ACK para ${p}. Reintentando en ${w}ms...`), setTimeout(() => g(j + 1), w)) : !Y && y > 0 && a("error", `Fallo final: No se recibió ACK para ${p} después de ${y} reintentos.`);
        }, ((C = e.options) == null ? void 0 : C.timeout) ?? 2e4);
        pt.emit(d, p, O, (W) => {
          Y = !0, clearTimeout(R), a("received", `ACK for ${p}`, W);
        });
      } catch (O) {
        const B = O instanceof Error ? O.message : "Invalid JSON";
        console.error(`Emit error: ${B}`), a("error", `Error de emisión: ${B}`);
      }
    };
    g(0);
  }, [e, a]), m = Ue(() => {
    s([]);
  }, []);
  return {
    connected: t,
    logs: r,
    connect: i,
    disconnect: l,
    emitEvent: f,
    clearLogs: m
  };
};
function pr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ln } = Object.prototype, { getPrototypeOf: tt } = Object, { iterator: rt, toStringTag: br } = Symbol, nt = ((e) => (t) => {
  const n = Ln.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xe = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), st = (e) => (t) => typeof t === e, { isArray: Ce } = Array, Ie = st("undefined");
function Fe(e) {
  return e !== null && !Ie(e) && e.constructor !== null && !Ie(e.constructor) && de(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const hr = xe("ArrayBuffer");
function Un(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hr(e.buffer), t;
}
const $n = st("string"), de = st("function"), xr = st("number"), Me = (e) => e !== null && typeof e == "object", Bn = (e) => e === !0 || e === !1, Ge = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(br in e) && !(rt in e);
}, qn = (e) => {
  if (!Me(e) || Fe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Mn = xe("Date"), zn = xe("File"), Hn = (e) => !!(e && typeof e.uri < "u"), Wn = (e) => e && typeof e.getParts < "u", Jn = xe("Blob"), Vn = xe("FileList"), Kn = (e) => Me(e) && de(e.pipe);
function Gn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Xt = Gn(), Qt = typeof Xt.FormData < "u" ? Xt.FormData : void 0, Yn = (e) => {
  if (!e)
    return !1;
  if (Qt && e instanceof Qt)
    return !0;
  const t = tt(e);
  if (!t || t === Object.prototype || !de(e.append))
    return !1;
  const n = nt(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && de(e.toString) && e.toString() === "[object FormData]";
}, Xn = xe("URLSearchParams"), [Qn, Zn, es, ts] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(xe), rs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ze(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ce(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Fe(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (r = 0; r < i; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function gr(e, t) {
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
const Ne = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), yr = (e) => !Ie(e) && e !== Ne;
function vt(...e) {
  const { caseless: t, skipUndefined: n } = yr(this) && this || {}, r = {}, s = (a, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const l = t && typeof i == "string" && gr(r, i) || i, f = wt(r, l) ? r[l] : void 0;
    Ge(f) && Ge(a) ? r[l] = vt(f, a) : Ge(a) ? r[l] = vt({}, a) : Ce(a) ? r[l] = a.slice() : (!n || !Ie(a)) && (r[l] = a);
  };
  for (let a = 0, i = e.length; a < i; a++) {
    const l = e[a];
    if (!l || Fe(l) || (ze(l, s), typeof l != "object" || Ce(l)))
      continue;
    const f = Object.getOwnPropertySymbols(l);
    for (let m = 0; m < f.length; m++) {
      const d = f[m];
      ps.call(l, d) && s(l[d], d);
    }
  }
  return r;
}
const ns = (e, t, n, { allOwnKeys: r } = {}) => (ze(
  t,
  (s, a) => {
    n && de(s) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: pr(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), ss = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), os = (e, t, n, r) => {
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
}, as = (e, t, n, r) => {
  let s, a, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      i = s[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && tt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, is = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, cs = (e) => {
  if (!e)
    return null;
  if (Ce(e))
    return e;
  let t = e.length;
  if (!xr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ls = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && tt(Uint8Array)), ds = (e, t) => {
  const r = (e && e[rt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, us = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fs = xe("HTMLFormElement"), ms = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), wt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), { propertyIsEnumerable: ps } = Object.prototype, bs = xe("RegExp"), vr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ze(n, (s, a) => {
    let i;
    (i = t(s, a, e)) !== !1 && (r[a] = i || s);
  }), Object.defineProperties(e, r);
}, hs = (e) => {
  vr(e, (t, n) => {
    if (de(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (de(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, xs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return Ce(e) ? r(e) : r(String(e).split(t)), n;
}, gs = () => {
}, ys = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vs(e) {
  return !!(e && de(e.append) && e[br] === "FormData" && e[rt]);
}
const ws = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Me(r)) {
      if (t.has(r))
        return;
      if (Fe(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const s = Ce(r) ? [] : {};
        return ze(r, (a, i) => {
          const l = n(a);
          !Ie(l) && (s[i] = l);
        }), t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, Es = xe("AsyncFunction"), js = (e) => e && (Me(e) || de(e)) && de(e.then) && de(e.catch), wr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ne.addEventListener(
  "message",
  ({ source: s, data: a }) => {
    s === Ne && a === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ne.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", de(Ne.postMessage)), Rs = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ne) : typeof process < "u" && process.nextTick || wr, Ss = (e) => e != null && de(e[rt]), u = {
  isArray: Ce,
  isArrayBuffer: hr,
  isBuffer: Fe,
  isFormData: Yn,
  isArrayBufferView: Un,
  isString: $n,
  isNumber: xr,
  isBoolean: Bn,
  isObject: Me,
  isPlainObject: Ge,
  isEmptyObject: qn,
  isReadableStream: Qn,
  isRequest: Zn,
  isResponse: es,
  isHeaders: ts,
  isUndefined: Ie,
  isDate: Mn,
  isFile: zn,
  isReactNativeBlob: Hn,
  isReactNative: Wn,
  isBlob: Jn,
  isRegExp: bs,
  isFunction: de,
  isStream: Kn,
  isURLSearchParams: Xn,
  isTypedArray: ls,
  isFileList: Vn,
  forEach: ze,
  merge: vt,
  extend: ns,
  trim: rs,
  stripBOM: ss,
  inherits: os,
  toFlatObject: as,
  kindOf: nt,
  kindOfTest: xe,
  endsWith: is,
  toArray: cs,
  forEachEntry: ds,
  matchAll: us,
  isHTMLForm: fs,
  hasOwnProperty: wt,
  hasOwnProp: wt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vr,
  freezeMethods: hs,
  toObjectSet: xs,
  toCamelCase: ms,
  noop: gs,
  toFiniteNumber: ys,
  findKey: gr,
  global: Ne,
  isContextDefined: yr,
  isSpecCompliantForm: vs,
  toJSONObject: ws,
  isAsyncFn: Es,
  isThenable: js,
  setImmediate: wr,
  asap: Rs,
  isIterable: Ss
}, Ns = u.toObjectSet([
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
]), Cs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Ns[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function Os(e) {
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
const _s = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Ts = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function St(e, t) {
  return u.isArray(e) ? e.map((n) => St(n, t)) : Os(String(e).replace(t, ""));
}
const As = (e) => St(e, _s), ks = (e) => St(e, Ts);
function Er(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (n, r) => {
    t[r] = ks(n);
  }), t;
}
const Zt = Symbol("internals");
function qe(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ye) : As(String(e));
}
function Ps(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ds = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bt(e, t, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function Is(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fs(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, a, i) {
        return this[r].call(this, t, s, a, i);
      },
      configurable: !0
    });
  });
}
class ot {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(l, f, m) {
      const d = qe(f);
      if (!d)
        return;
      const p = u.findKey(s, d);
      (!p || s[p] === void 0 || m === !0 || m === void 0 && s[p] !== !1) && (s[p || f] = Ye(l));
    }
    const i = (l, f) => u.forEach(l, (m, d) => a(m, d, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (u.isString(t) && (t = t.trim()) && !Ds(t))
      i(Cs(t), n);
    else if (u.isObject(t) && u.isIterable(t)) {
      let l = {}, f, m;
      for (const d of t) {
        if (!u.isArray(d))
          throw new TypeError("Object iterator must return a key-value pair");
        l[m = d[0]] = (f = l[m]) ? u.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = qe(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ps(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = qe(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(i) {
      if (i = qe(i), i) {
        const l = u.findKey(r, i);
        l && (!n || bt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return u.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || bt(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (s, a) => {
      const i = u.findKey(r, a);
      if (i) {
        n[i] = Ye(s), delete n[a];
        return;
      }
      const l = t ? Is(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Ye(s), r[l] = !0;
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
    const r = (this[Zt] = this[Zt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(i) {
      const l = qe(i);
      r[l] || (Fs(s, i), r[l] = !0);
    }
    return u.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
ot.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(ot.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(ot);
const be = ot, Ls = "[REDACTED ****]";
function Us(e) {
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
function $s(e, t) {
  const n = new Set(t.map((a) => String(a).toLowerCase())), r = [], s = (a) => {
    if (a === null || typeof a != "object" || u.isBuffer(a))
      return a;
    if (r.indexOf(a) !== -1)
      return;
    a instanceof be && (a = a.toJSON()), r.push(a);
    let i;
    if (u.isArray(a))
      i = [], a.forEach((l, f) => {
        const m = s(l);
        u.isUndefined(m) || (i[f] = m);
      });
    else {
      if (!u.isPlainObject(a) && Us(a))
        return r.pop(), a;
      i = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(a)) {
        const m = n.has(l.toLowerCase()) ? Ls : s(f);
        u.isUndefined(m) || (i[l] = m);
      }
    }
    return r.pop(), i;
  };
  return s(e);
}
class te extends Error {
  static from(t, n, r, s, a, i) {
    const l = new te(t.message, n || t.code, r, s, a);
    return l.cause = t, l.name = t.name, t.status != null && l.status == null && (l.status = t.status), i && Object.assign(l, i), l;
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
  constructor(t, n, r, s, a) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    const t = this.config, n = t && u.hasOwnProp(t, "redact") ? t.redact : void 0, r = u.isArray(n) && n.length > 0 ? $s(t, n) : u.toJSONObject(t);
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
te.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
te.ERR_BAD_OPTION = "ERR_BAD_OPTION";
te.ECONNABORTED = "ECONNABORTED";
te.ETIMEDOUT = "ETIMEDOUT";
te.ECONNREFUSED = "ECONNREFUSED";
te.ERR_NETWORK = "ERR_NETWORK";
te.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
te.ERR_DEPRECATED = "ERR_DEPRECATED";
te.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
te.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
te.ERR_CANCELED = "ERR_CANCELED";
te.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
te.ERR_INVALID_URL = "ERR_INVALID_URL";
te.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const S = te, Bs = null;
function Et(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function jr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ht(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = jr(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function qs(e) {
  return u.isArray(e) && !e.some(Et);
}
const Ms = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function at(e, t, n) {
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
    function(x, h) {
      return !u.isUndefined(h[x]);
    }
  );
  const r = n.metaTokens, s = n.visitor || p, a = n.dots, i = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, m = l && u.isSpecCompliantForm(t);
  if (!u.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null)
      return "";
    if (u.isDate(g))
      return g.toISOString();
    if (u.isBoolean(g))
      return g.toString();
    if (!m && u.isBlob(g))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(g) || u.isTypedArray(g) ? m && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function p(g, x, h) {
    let j = g;
    if (u.isReactNative(t) && u.isReactNativeBlob(g))
      return t.append(ht(h, x, a), d(g)), !1;
    if (g && !h && typeof g == "object") {
      if (u.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), g = JSON.stringify(g);
      else if (u.isArray(g) && qs(g) || (u.isFileList(g) || u.endsWith(x, "[]")) && (j = u.toArray(g)))
        return x = jr(x), j.forEach(function(O, B) {
          !(u.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ht([x], B, a) : i === null ? x : x + "[]",
            d(O)
          );
        }), !1;
    }
    return Et(g) ? !0 : (t.append(ht(h, x, a), d(g)), !1);
  }
  const E = [], y = Object.assign(Ms, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: Et
  });
  function w(g, x, h = 0) {
    if (!u.isUndefined(g)) {
      if (h > f)
        throw new S(
          "Object is too deeply nested (" + h + " levels). Max depth: " + f,
          S.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (E.indexOf(g) !== -1)
        throw new Error("Circular reference detected in " + x.join("."));
      E.push(g), u.forEach(g, function(C, O) {
        (!(u.isUndefined(C) || C === null) && s.call(t, C, u.isString(O) ? O.trim() : O, x, y)) === !0 && w(C, x ? x.concat(O) : [O], h + 1);
      }), E.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function er(e) {
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
function Nt(e, t) {
  this._pairs = [], e && at(e, this, t);
}
const Rr = Nt.prototype;
Rr.append = function(t, n) {
  this._pairs.push([t, n]);
};
Rr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, er);
  } : er;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Sr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zs, s = u.isFunction(n) ? {
    serialize: n
  } : n, a = s && s.serialize;
  let i;
  if (a ? i = a(t, s) : i = u.isURLSearchParams(t) ? t.toString() : new Nt(t, s).toString(r), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Hs {
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
const tr = Hs, Ct = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1
}, Ws = typeof URLSearchParams < "u" ? URLSearchParams : Nt, Js = typeof FormData < "u" ? FormData : null, Vs = typeof Blob < "u" ? Blob : null, Ks = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ws,
    FormData: Js,
    Blob: Vs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ot = typeof window < "u" && typeof document < "u", jt = typeof navigator == "object" && navigator || void 0, Gs = Ot && (!jt || ["ReactNative", "NativeScript", "NS"].indexOf(jt.product) < 0), Ys = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Xs = Ot && window.location.href || "http://localhost", Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ot,
  hasStandardBrowserEnv: Gs,
  hasStandardBrowserWebWorkerEnv: Ys,
  navigator: jt,
  origin: Xs
}, Symbol.toStringTag, { value: "Module" })), ee = {
  ...Qs,
  ...Ks
};
function Zs(e, t) {
  return at(e, new ee.classes.URLSearchParams(), {
    visitor: function(n, r, s, a) {
      return ee.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function eo(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function to(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Nr(e) {
  function t(n, r, s, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), f = a >= n.length;
    return i = !i && u.isArray(s) ? s.length : i, f ? (u.hasOwnProp(s, i) ? s[i] = u.isArray(s[i]) ? s[i].concat(r) : [s[i], r] : s[i] = r, !l) : ((!u.hasOwnProp(s, i) || !u.isObject(s[i])) && (s[i] = []), t(n, r, s[i], a) && u.isArray(s[i]) && (s[i] = to(s[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, s) => {
      t(eo(r), s, n, 0);
    }), n;
  }
  return null;
}
const Pe = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function ro(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _t = {
  transitional: Ct,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = u.isObject(t);
      if (a && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return s ? JSON.stringify(Nr(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        const f = Pe(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Zs(t, f).toString();
        if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const m = Pe(this, "env"), d = m && m.FormData;
          return at(
            l ? { "files[]": t } : t,
            d && new d(),
            f
          );
        }
      }
      return a || s ? (n.setContentType("application/json", !1), ro(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Pe(this, "transitional") || _t.transitional, r = n && n.forcedJSONParsing, s = Pe(this, "responseType"), a = s === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !s || a)) {
        const l = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(t, Pe(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? S.from(f, S.ERR_BAD_RESPONSE, this, null, Pe(this, "response")) : f;
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
    FormData: ee.classes.FormData,
    Blob: ee.classes.Blob
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
  _t.headers[e] = {};
});
const Tt = _t;
function xt(e, t) {
  const n = this || Tt, r = t || n, s = be.from(r.headers);
  let a = r.data;
  return u.forEach(e, function(l) {
    a = l.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function Cr(e) {
  return !!(e && e.__CANCEL__);
}
class no extends S {
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
    super(t ?? "canceled", S.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const He = no;
function Or(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? S.ERR_BAD_REQUEST : S.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function so(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function oo(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const m = Date.now(), d = r[a];
    i || (i = m), n[s] = f, r[s] = m;
    let p = a, E = 0;
    for (; p !== s; )
      E += n[p++], p = p % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), m - i < t)
      return;
    const y = d && m - d;
    return y ? Math.round(E * 1e3 / y) : void 0;
  };
}
function ao(e, t) {
  let n = 0, r = 1e3 / t, s, a;
  const i = (m, d = Date.now()) => {
    n = d, s = null, a && (clearTimeout(a), a = null), e(...m);
  };
  return [(...m) => {
    const d = Date.now(), p = d - n;
    p >= r ? i(m, d) : (s = m, a || (a = setTimeout(() => {
      a = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const Ze = (e, t, n = 3) => {
  let r = 0;
  const s = oo(50, 250);
  return ao((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, f = l != null ? Math.min(i, l) : i, m = Math.max(0, f - r), d = s(m);
    r = Math.max(r, f);
    const p = {
      loaded: f,
      total: l,
      progress: l ? f / l : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && l ? (l - f) / d : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, rr = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, nr = (e) => (...t) => u.asap(() => e(...t)), io = ee.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, ee.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ee.origin),
  ee.navigator && /(msie|trident)/i.test(ee.navigator.userAgent)
) : () => !0, co = ee.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, a, i) {
      if (typeof document > "u")
        return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), u.isString(r) && l.push(`path=${r}`), u.isString(s) && l.push(`domain=${s}`), a === !0 && l.push("secure"), u.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
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
function lo(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _r(e, t, n) {
  let r = !lo(t);
  return e && (r || n === !1) ? uo(e, t) : t;
}
const sr = (e) => e instanceof be ? { ...e } : e;
function Oe(e, t) {
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
  function r(m, d, p, E) {
    return u.isPlainObject(m) && u.isPlainObject(d) ? u.merge.call({ caseless: E }, m, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(m, d, p, E) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(m))
        return r(void 0, m, p, E);
    } else
      return r(m, d, p, E);
  }
  function a(m, d) {
    if (!u.isUndefined(d))
      return r(void 0, d);
  }
  function i(m, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, d);
  }
  function l(m, d, p) {
    if (u.hasOwnProp(t, p))
      return r(m, d);
    if (u.hasOwnProp(e, p))
      return r(void 0, m);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    allowedSocketPaths: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (m, d, p) => s(sr(m), sr(d), p, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const p = u.hasOwnProp(f, d) ? f[d] : s, E = u.hasOwnProp(e, d) ? e[d] : void 0, y = u.hasOwnProp(t, d) ? t[d] : void 0, w = p(E, y, d);
    u.isUndefined(w) && p !== l || (n[d] = w);
  }), n;
}
const fo = ["content-type", "content-length"];
function mo(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    fo.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const po = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function Tr(e) {
  const t = Oe({}, e), n = (E) => u.hasOwnProp(t, E) ? t[E] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const a = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), m = n("baseURL"), d = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = l = be.from(l), t.url = Sr(
    _r(m, p, d),
    n("params"),
    n("paramsSerializer")
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? po(f.password) : ""))
  ), u.isFormData(r) && (ee.hasStandardBrowserEnv || ee.hasStandardBrowserWebWorkerEnv || u.isReactNative(r) ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && mo(l, r.getHeaders(), n("formDataHeaderPolicy"))), ee.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(t)), s === !0 || s == null && io(t.url))) {
    const y = a && i && co.read(i);
    y && l.set(a, y);
  }
  return t;
}
const bo = typeof XMLHttpRequest < "u", ho = bo && function(e) {
  return new Promise(function(n, r) {
    const s = Tr(e);
    let a = s.data;
    const i = be.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: m } = s, d, p, E, y, w;
    function g() {
      y && y(), w && w(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function h() {
      if (!x)
        return;
      const C = be.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), B = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: C,
        config: e,
        request: x
      };
      Or(
        function(R) {
          n(R), g();
        },
        function(R) {
          r(R), g();
        },
        B
      ), x = null;
    }
    "onloadend" in x ? x.onloadend = h : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.startsWith("file:")) || setTimeout(h);
    }, x.onabort = function() {
      x && (r(new S("Request aborted", S.ECONNABORTED, e, x)), g(), x = null);
    }, x.onerror = function(O) {
      const B = O && O.message ? O.message : "Network Error", Y = new S(B, S.ERR_NETWORK, e, x);
      Y.event = O || null, r(Y), g(), x = null;
    }, x.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const B = s.transitional || Ct;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(
        new S(
          O,
          B.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          x
        )
      ), g(), x = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in x && u.forEach(Er(i), function(O, B) {
      x.setRequestHeader(B, O);
    }), u.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), m && ([E, w] = Ze(m, !0), x.addEventListener("progress", E)), f && x.upload && ([p, y] = Ze(f), x.upload.addEventListener("progress", p), x.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (d = (C) => {
      x && (r(!C || C.type ? new He(null, e, x) : C), x.abort(), g(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const j = so(s.url);
    if (j && !ee.protocols.includes(j)) {
      r(
        new S(
          "Unsupported protocol " + j + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    x.send(a || null);
  });
}, xo = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(f) {
    if (!r) {
      r = !0, i();
      const m = f instanceof Error ? f : this.reason;
      n.abort(
        m instanceof S ? m : new He(m instanceof Error ? m.message : m)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, s(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((f) => f.addEventListener("abort", s));
  const { signal: l } = n;
  return l.unsubscribe = () => u.asap(i), l;
}, go = xo, yo = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, vo = async function* (e, t) {
  for await (const n of wo(e))
    yield* yo(n, t);
}, wo = async function* (e) {
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
}, or = (e, t, n, r) => {
  const s = vo(e, t);
  let a = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: m, value: d } = await s.next();
          if (m) {
            l(), f.close();
            return;
          }
          let p = d.byteLength;
          if (n) {
            let E = a += p;
            n(E);
          }
          f.enqueue(new Uint8Array(d));
        } catch (m) {
          throw l(m), m;
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
function Eo(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:"))
    return 0;
  const t = e.indexOf(",");
  if (t < 0)
    return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const l = r.length;
    for (let y = 0; y < l; y++)
      if (r.charCodeAt(y) === 37 && y + 2 < l) {
        const w = r.charCodeAt(y + 1), g = r.charCodeAt(y + 2);
        (w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102) && (g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102) && (i -= 2, y += 2);
      }
    let f = 0, m = l - 1;
    const d = (y) => y >= 2 && r.charCodeAt(y - 2) === 37 && // '%'
    r.charCodeAt(y - 1) === 51 && // '3'
    (r.charCodeAt(y) === 68 || r.charCodeAt(y) === 100);
    m >= 0 && (r.charCodeAt(m) === 61 ? (f++, m--) : d(m) && (f++, m -= 3)), f === 1 && m >= 0 && (r.charCodeAt(m) === 61 || d(m)) && f++;
    const E = Math.floor(i / 4) * 3 - (f || 0);
    return E > 0 ? E : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let a = 0;
  for (let i = 0, l = r.length; i < l; i++) {
    const f = r.charCodeAt(i);
    if (f < 128)
      a += 1;
    else if (f < 2048)
      a += 2;
    else if (f >= 55296 && f <= 56319 && i + 1 < l) {
      const m = r.charCodeAt(i + 1);
      m >= 56320 && m <= 57343 ? (a += 4, i++) : a += 3;
    } else
      a += 3;
  }
  return a;
}
const At = "1.17.0", ar = 64 * 1024, { isFunction: Ve } = u, jo = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), ir = (e) => {
  if (!u.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, cr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ro = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, So = (e) => {
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
  const { fetch: s, Request: a, Response: i } = e, l = s ? Ve(s) : typeof fetch == "function", f = Ve(a), m = Ve(i);
  if (!l)
    return !1;
  const d = l && Ve(n), p = l && (typeof r == "function" ? ((h) => (j) => h.encode(j))(new r()) : async (h) => new Uint8Array(await new a(h).arrayBuffer())), E = f && d && cr(() => {
    let h = !1;
    const j = new a(ee.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }), C = j.headers.has("Content-Type");
    return j.body != null && j.body.cancel(), h && !C;
  }), y = m && d && cr(() => u.isReadableStream(new i("").body)), w = {
    stream: y && ((h) => h.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !w[h] && (w[h] = (j, C) => {
      let O = j && j[h];
      if (O)
        return O.call(j);
      throw new S(
        `Response type '${h}' is not supported`,
        S.ERR_NOT_SUPPORT,
        C
      );
    });
  });
  const g = async (h) => {
    if (h == null)
      return 0;
    if (u.isBlob(h))
      return h.size;
    if (u.isSpecCompliantForm(h))
      return (await new a(ee.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(h) || u.isArrayBuffer(h))
      return h.byteLength;
    if (u.isURLSearchParams(h) && (h = h + ""), u.isString(h))
      return (await p(h)).byteLength;
  }, x = async (h, j) => {
    const C = u.toFiniteNumber(h.getContentLength());
    return C ?? g(j);
  };
  return async (h) => {
    let {
      url: j,
      method: C,
      data: O,
      signal: B,
      cancelToken: Y,
      timeout: R,
      onDownloadProgress: W,
      onUploadProgress: X,
      responseType: ne,
      headers: se,
      withCredentials: he = "same-origin",
      fetchOptions: M,
      maxContentLength: z,
      maxBodyLength: Z
    } = Tr(h);
    const ge = u.isNumber(z) && z > -1, _e = u.isNumber(Z) && Z > -1, P = (I) => u.hasOwnProp(h, I) ? h[I] : void 0;
    let G = s || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let ue = go(
      [B, Y && Y.toAbortSignal()],
      R
    ), Q = null;
    const me = ue && ue.unsubscribe && (() => {
      ue.unsubscribe();
    });
    let ye;
    try {
      let I;
      const A = P("auth");
      if (A) {
        const _ = A.username || "", fe = A.password || "";
        I = {
          username: _,
          password: fe
        };
      }
      if (Ro(j)) {
        const _ = new URL(j, ee.origin);
        if (!I && (_.username || _.password)) {
          const fe = ir(_.username), ve = ir(_.password);
          I = {
            username: fe,
            password: ve
          };
        }
        (_.username || _.password) && (_.username = "", _.password = "", j = _.href);
      }
      if (I && (se.delete("authorization"), se.set(
        "Authorization",
        "Basic " + btoa(jo((I.username || "") + ":" + (I.password || "")))
      )), ge && typeof j == "string" && j.startsWith("data:") && Eo(j) > z)
        throw new S(
          "maxContentLength size of " + z + " exceeded",
          S.ERR_BAD_RESPONSE,
          h,
          Q
        );
      if (_e && C !== "get" && C !== "head") {
        const _ = await x(se, O);
        if (typeof _ == "number" && isFinite(_) && _ > Z)
          throw new S(
            "Request body larger than maxBodyLength limit",
            S.ERR_BAD_REQUEST,
            h,
            Q
          );
      }
      if (X && E && C !== "get" && C !== "head" && (ye = await x(se, O)) !== 0) {
        let _ = new a(j, {
          method: "POST",
          body: O,
          duplex: "half"
        }), fe;
        if (u.isFormData(O) && (fe = _.headers.get("content-type")) && se.setContentType(fe), _.body) {
          const [ve, Te] = rr(
            ye,
            Ze(nr(X))
          );
          O = or(_.body, ar, ve, Te);
        }
      }
      u.isString(he) || (he = he ? "include" : "omit");
      const F = f && "credentials" in a.prototype;
      if (u.isFormData(O)) {
        const _ = se.getContentType();
        _ && /^multipart\/form-data/i.test(_) && !/boundary=/i.test(_) && se.delete("content-type");
      }
      se.set("User-Agent", "axios/" + At, !1);
      const re = {
        ...M,
        signal: ue,
        method: C.toUpperCase(),
        headers: Er(se.normalize()),
        body: O,
        duplex: "half",
        credentials: F ? he : void 0
      };
      Q = f && new a(j, re);
      let L = await (f ? G(Q, M) : G(j, re));
      if (ge) {
        const _ = u.toFiniteNumber(L.headers.get("content-length"));
        if (_ != null && _ > z)
          throw new S(
            "maxContentLength size of " + z + " exceeded",
            S.ERR_BAD_RESPONSE,
            h,
            Q
          );
      }
      const ae = y && (ne === "stream" || ne === "response");
      if (y && L.body && (W || ge || ae && me)) {
        const _ = {};
        ["status", "statusText", "headers"].forEach((we) => {
          _[we] = L[we];
        });
        const fe = u.toFiniteNumber(L.headers.get("content-length")), [ve, Te] = W && rr(
          fe,
          Ze(nr(W), !0)
        ) || [];
        let je = 0;
        const Re = (we) => {
          if (ge && (je = we, je > z))
            throw new S(
              "maxContentLength size of " + z + " exceeded",
              S.ERR_BAD_RESPONSE,
              h,
              Q
            );
          ve && ve(we);
        };
        L = new i(
          or(L.body, ar, Re, () => {
            Te && Te(), me && me();
          }),
          _
        );
      }
      ne = ne || "text";
      let J = await w[u.findKey(w, ne) || "text"](
        L,
        h
      );
      if (ge && !y && !ae) {
        let _;
        if (J != null && (typeof J.byteLength == "number" ? _ = J.byteLength : typeof J.size == "number" ? _ = J.size : typeof J == "string" && (_ = typeof r == "function" ? new r().encode(J).byteLength : J.length)), typeof _ == "number" && _ > z)
          throw new S(
            "maxContentLength size of " + z + " exceeded",
            S.ERR_BAD_RESPONSE,
            h,
            Q
          );
      }
      return !ae && me && me(), await new Promise((_, fe) => {
        Or(_, fe, {
          data: J,
          headers: be.from(L.headers),
          status: L.status,
          statusText: L.statusText,
          config: h,
          request: Q
        });
      });
    } catch (I) {
      if (me && me(), ue && ue.aborted && ue.reason instanceof S) {
        const A = ue.reason;
        throw A.config = h, Q && (A.request = Q), I !== A && (A.cause = I), A;
      }
      throw I && I.name === "TypeError" && /Load failed|fetch/i.test(I.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          h,
          Q,
          I && I.response
        ),
        {
          cause: I.cause || I
        }
      ) : S.from(I, I && I.code, h, Q, I && I.response);
    }
  };
}, No = /* @__PURE__ */ new Map(), Ar = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, a = [r, s, n];
  let i = a.length, l = i, f, m, d = No;
  for (; l--; )
    f = a[l], m = d.get(f), m === void 0 && d.set(f, m = l ? /* @__PURE__ */ new Map() : So(t)), d = m;
  return m;
};
Ar();
const kt = {
  http: Bs,
  xhr: ho,
  fetch: {
    get: Ar
  }
};
u.forEach(kt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const lr = (e) => `- ${e}`, Co = (e) => u.isFunction(e) || e === null || e === !1;
function Oo(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let l;
    if (s = r, !Co(r) && (s = kt[(l = String(r)).toLowerCase()], s === void 0))
      throw new S(`Unknown adapter '${l}'`);
    if (s && (u.isFunction(s) || (s = s.get(t))))
      break;
    a[l || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(a).map(
      ([f, m]) => `adapter ${f} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(lr).join(`
`) : " " + lr(i[0]) : "as no adapter specified";
    throw new S(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const kr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Oo,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: kt
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function dr(e) {
  return gt(e), e.headers = be.from(e.headers), e.data = xt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kr.getAdapter(e.adapter || Tt.adapter, e)(e).then(
    function(r) {
      gt(e), e.response = r;
      try {
        r.data = xt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = be.from(r.headers), r;
    },
    function(r) {
      if (!Cr(r) && (gt(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = xt.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = be.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const it = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  it[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ur = {};
it.transitional = function(t, n, r) {
  function s(a, i) {
    return "[Axios v" + At + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new S(
        s(i, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !ur[i] && (ur[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
it.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function _o(e, t, n) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (i) {
      const l = e[a], f = l === void 0 || i(l, a, e);
      if (f !== !0)
        throw new S(
          "option " + a + " must be " + f,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + a, S.ERR_BAD_OPTION);
  }
}
const Xe = {
  assertOptions: _o,
  validators: it
}, ce = Xe.validators;
class et {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new tr(),
      response: new tr()
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
        const a = (() => {
          if (!s.stack)
            return "";
          const i = s.stack.indexOf(`
`);
          return i === -1 ? "" : s.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = a;
          else if (a) {
            const i = a.indexOf(`
`), l = i === -1 ? -1 : a.indexOf(`
`, i + 1), f = l === -1 ? "" : a.slice(l + 1);
            String(r.stack).endsWith(f) || (r.stack += `
` + a);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Oe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && Xe.assertOptions(
      r,
      {
        silentJSONParsing: ce.transitional(ce.boolean),
        forcedJSONParsing: ce.transitional(ce.boolean),
        clarifyTimeoutError: ce.transitional(ce.boolean),
        legacyInterceptorReqResOrdering: ce.transitional(ce.boolean),
        advertiseZstdAcceptEncoding: ce.transitional(ce.boolean)
      },
      !1
    ), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Xe.assertOptions(
      s,
      {
        encode: ce.function,
        serialize: ce.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Xe.assertOptions(
      n,
      {
        baseUrl: ce.spelling("baseURL"),
        withXsrfToken: ce.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && u.merge(a.common, a[n.method]);
    a && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (w) => {
      delete a[w];
    }), n.headers = be.concat(i, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      f = f && g.synchronous;
      const x = n.transitional || Ct;
      x && x.legacyInterceptorReqResOrdering ? l.unshift(g.fulfilled, g.rejected) : l.push(g.fulfilled, g.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(g) {
      m.push(g.fulfilled, g.rejected);
    });
    let d, p = 0, E;
    if (!f) {
      const w = [dr.bind(this), void 0];
      for (w.unshift(...l), w.push(...m), E = w.length, d = Promise.resolve(n); p < E; )
        d = d.then(w[p++], w[p++]);
      return d;
    }
    E = l.length;
    let y = n;
    for (; p < E; ) {
      const w = l[p++], g = l[p++];
      try {
        y = w(y);
      } catch (x) {
        g.call(this, x);
        break;
      }
    }
    try {
      d = dr.call(this, y);
    } catch (w) {
      return Promise.reject(w);
    }
    for (p = 0, E = m.length; p < E; )
      d = d.then(m[p++], m[p++]);
    return d;
  }
  getUri(t) {
    t = Oe(this.defaults, t);
    const n = _r(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  et.prototype[t] = function(n, r) {
    return this.request(
      Oe(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
u.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(a, i, l) {
      return this.request(
        Oe(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: i
        })
      );
    };
  }
  et.prototype[t] = n(), t !== "query" && (et.prototype[t + "Form"] = n(!0));
});
const Qe = et;
class Pt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const i = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, l) {
      r.reason || (r.reason = new He(a, i, l), n(r.reason));
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
      token: new Pt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const To = Pt;
function Ao(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ko(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Rt = {
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
Object.entries(Rt).forEach(([e, t]) => {
  Rt[t] = e;
});
const Po = Rt;
function Pr(e) {
  const t = new Qe(e), n = pr(Qe.prototype.request, t);
  return u.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pr(Oe(e, s));
  }, n;
}
const K = Pr(Tt);
K.Axios = Qe;
K.CanceledError = He;
K.CancelToken = To;
K.isCancel = Cr;
K.VERSION = At;
K.toFormData = at;
K.AxiosError = S;
K.Cancel = K.CanceledError;
K.all = function(t) {
  return Promise.all(t);
};
K.spread = Ao;
K.isAxiosError = ko;
K.mergeConfig = Oe;
K.AxiosHeaders = be;
K.formToJSON = (e) => Nr(u.isHTMLForm(e) ? new FormData(e) : e);
K.getAdapter = kr.getAdapter;
K.HttpStatusCode = Po;
K.default = K;
const Do = K;
class Io {
  constructor(t = {}) {
    Je(this, "instance");
    Je(this, "jsonPath");
    this.jsonPath = t.jsonPath || "/socket-docs/json", this.instance = Do.create({
      baseURL: t.baseUrl || window.location.origin,
      timeout: 1e4
    });
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
  }
}
const Fo = (e) => new Io(e), Dr = "socket_docs_payloads", Lo = (e) => {
  const t = {};
  if (!e || !e.gateways)
    return t;
  const n = localStorage.getItem(Dr), r = n ? JSON.parse(n) : {};
  return e.gateways.forEach((s) => {
    s.events.forEach((a) => {
      var l;
      const i = `${s.name}-${a.event}`;
      t[i] = r[i] || JSON.stringify(
        ((l = a.payloadSchema) == null ? void 0 : l.example) ?? {},
        null,
        2
      );
    });
  }), t;
}, Uo = (e = {}) => {
  const [t, n] = le(null), [r, s] = le({}), [a, i] = le({}), [l, f] = le(!0), [m, d] = le(null), p = fr(() => Fo(e), [e.baseUrl, e.jsonPath]);
  return De(() => {
    f(!0), p.fetchDocs().then((y) => {
      n(y), s(Lo(y)), d(null);
    }).catch((y) => {
      console.error("Failed to fetch socket docs:", y), d(y instanceof Error ? y : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [p]), De(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Dr, JSON.stringify(r));
  }, [r]), {
    data: t,
    payloads: r,
    expanded: a,
    loading: l,
    error: m,
    setPayloads: s,
    toggleExpand: (y) => {
      i((w) => ({ ...w, [y]: !w[y] }));
    }
  };
}, Ee = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search"
}, $o = (e) => {
  var x;
  const [t, n] = le(() => {
    const h = localStorage.getItem(Ee.GATEWAY_IDX);
    return h ? parseInt(h) : -1;
  }), [r, s] = le(() => {
    const h = localStorage.getItem(Ee.EVENT_IDX);
    return h ? parseInt(h) : -1;
  }), [a, i] = le(() => localStorage.getItem(Ee.SEARCH) || ""), [l, f] = le(!1), [m, d] = le(() => localStorage.getItem(Ee.THEME) || "dark");
  De(() => {
    localStorage.setItem(Ee.THEME, m), m === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [m]), De(() => {
    localStorage.setItem(Ee.GATEWAY_IDX, t.toString());
  }, [t]), De(() => {
    localStorage.setItem(Ee.EVENT_IDX, r.toString());
  }, [r]), De(() => {
    localStorage.setItem(Ee.SEARCH, a);
  }, [a]);
  const p = fr(() => e ? a ? e.gateways.map((h) => ({
    ...h,
    events: h.events.filter(
      (j) => j.event.toLowerCase().includes(a.toLowerCase()) || h.name.toLowerCase().includes(a.toLowerCase())
    )
  })).filter((h) => h.events.length > 0) : e.gateways : [], [e, a]), E = p[t], y = (x = E == null ? void 0 : E.events) == null ? void 0 : x[r];
  return {
    // ...
    activeGatewayIdx: t,
    setActiveGatewayIdx: n,
    activeEventIdx: r,
    setActiveEventIdx: s,
    searchQuery: a,
    setSearchQuery: i,
    isPaused: l,
    setIsPaused: f,
    theme: m,
    toggleTheme: () => {
      d((h) => h === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const h = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), j = URL.createObjectURL(h), C = document.createElement("a");
      C.href = j, C.download = "socket-docs-contract.json", document.body.appendChild(C), C.click(), document.body.removeChild(C), URL.revokeObjectURL(j);
    },
    activeGateway: E,
    activeEvent: y,
    filteredGateways: p
  };
}, Ke = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, Ho = () => {
  const e = q.useMemo(() => {
    var F;
    return !!((F = (window.SOCKET_DOCS_CONFIG || {}).api) != null && F.jsonPath) || !window.location.pathname.includes("socket-docs");
  }, []), [t, n] = q.useState(() => {
    const F = (window.SOCKET_DOCS_CONFIG || {}).api || {}, re = localStorage.getItem(Ke.API), L = re ? JSON.parse(re) : {}, ae = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
    F.baseUrl && (ae.baseUrl = F.baseUrl), F.jsonPath && (ae.jsonPath = F.jsonPath), L.baseUrl && (ae.baseUrl = L.baseUrl);
    const J = L.baseUrl ? L.baseUrl.includes(window.location.host) : !0;
    return L.jsonPath && (!e || !J) && (ae.jsonPath = L.jsonPath), ae;
  }), [r, s] = q.useState(() => {
    const F = (window.SOCKET_DOCS_CONFIG || {}).socket, re = localStorage.getItem(Ke.SOCKET), L = re ? JSON.parse(re) : null, J = { ...{
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
      },
      eventRetries: {
        attempts: 0,
        delay: 1e3
      }
    } };
    return F && Object.assign(J, F), L && Object.assign(J, L), J;
  }), [a, i] = q.useState(!1), l = q.useMemo(() => t, [t]), { data: f, payloads: m, setPayloads: d, expanded: p, toggleExpand: E, loading: y, error: w } = Uo(l);
  q.useEffect(() => {
  }, [f, y, w]);
  const g = q.useMemo(() => ({
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
  }), [r]), { connected: x, logs: h, connect: j, disconnect: C, emitEvent: O, clearLogs: B } = Fn(g), Y = q.useMemo(() => {
    if (!f)
      return ["/"];
    const A = /* @__PURE__ */ new Set();
    return f.gateways.forEach((F) => A.add(F.namespace)), Array.from(A);
  }, [f]), {
    activeGatewayIdx: R,
    setActiveGatewayIdx: W,
    activeEventIdx: X,
    setActiveEventIdx: ne,
    searchQuery: se,
    setSearchQuery: he,
    isPaused: M,
    setIsPaused: z,
    theme: Z,
    toggleTheme: ge,
    exportContract: _e,
    activeGateway: P,
    activeEvent: G,
    filteredGateways: ue
  } = $o(f);
  q.useEffect(() => {
    if (P) {
      const A = t.baseUrl.replace(/\/$/, ""), F = r.namespace === "/" ? P.namespace : r.namespace, re = `${A}${ye(F)}`;
      if (r.autoConnect) {
        const L = setTimeout(() => {
          j(P.name, re, P.path);
        }, 300);
        return () => clearTimeout(L);
      }
    }
  }, [
    P == null ? void 0 : P.name,
    r.autoConnect,
    r.namespace,
    r.auth.token,
    t.baseUrl,
    j
  ]);
  const Q = (A, F) => {
    localStorage.setItem(Ke.API, JSON.stringify(A)), localStorage.setItem(Ke.SOCKET, JSON.stringify(F)), n(A), s(F), i(!1), window.location.reload();
  }, me = () => {
    if (!P)
      return;
    const A = t.baseUrl.replace(/\/$/, ""), F = r.namespace === "/" ? P.namespace : r.namespace, re = `${A}${ye(F)}`;
    x[P.name] ? C(P.name, F) : j(P.name, re, P.path);
  }, ye = (A) => A.startsWith("/") ? A : `/${A}`;
  if (y)
    return /* @__PURE__ */ o.jsx(Gt, {});
  if (w)
    return /* @__PURE__ */ o.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${Z === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ o.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ o.jsx("p", { className: "text-text-muted", children: w.message }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => i(!0),
            className: "px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors",
            children: "Configurar API"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors",
            children: "Reintentar"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx(
        Yt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: Q,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Z
        }
      )
    ] });
  if (!f)
    return /* @__PURE__ */ o.jsx(Gt, {});
  const I = P && G ? `${P.name}-${G.event}` : "";
  return /* @__PURE__ */ o.jsxs("div", { className: `flex min-h-screen font-sans text-text-primary ${Z === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ o.jsx(
      Cn,
      {
        gateways: ue,
        activeGatewayIdx: R,
        activeEventIdx: X,
        onSelectGateway: W,
        onSelectEvent: ne,
        searchQuery: se,
        onSearchChange: he,
        onExport: _e,
        expanded: p,
        onToggleExpand: E
      }
    ),
    /* @__PURE__ */ o.jsxs("main", { className: "flex flex-1 flex-col bg-bg-secondary", children: [
      /* @__PURE__ */ o.jsx(
        On,
        {
          connected: P ? !!x[P.name] : !1,
          gatewayPath: P ? `${t.baseUrl.replace(/https?:\/\//, "")}${P.path}` : "ws://localhost:3000",
          namespace: r.namespace === "/" && P ? P.namespace : r.namespace,
          namespaces: Y,
          theme: Z,
          onToggleTheme: ge,
          onOpenSettings: () => i(!0),
          onNamespaceChange: (A) => s((F) => ({ ...F, namespace: A })),
          onConnect: me
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row overflow-hidden", children: P && G ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-[1.5] flex-col min-w-0 gap-6 overflow-y-auto pr-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ o.jsx(
            Tn,
            {
              gatewayName: P.name,
              eventName: G.event,
              summary: G.summary ?? "",
              description: G.description ?? "",
              auth: G.auth
            }
          ) }),
          /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ o.jsx(
            An,
            {
              schema: G.payloadSchema,
              responseSchema: G.responseSchema
            }
          ) }),
          /* @__PURE__ */ o.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ o.jsx(
            kn,
            {
              payload: m[I] ?? "{}",
              schema: G.payloadSchema,
              responseSchema: G.responseSchema,
              emits: G.emits,
              onChange: (A) => d({ ...m, [I]: A }),
              onSend: () => O(P.name, G.event, m[I] ?? "{}")
            }
          ) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 overflow-hidden", children: /* @__PURE__ */ o.jsx(
          Dn,
          {
            connected: !!x[P.name],
            logs: h,
            onClear: B,
            isPaused: M,
            onTogglePause: () => z(!M)
          }
        ) })
      ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center text-center p-12", children: [
        /* @__PURE__ */ o.jsx("div", { className: "mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-emerald/10 text-brand-emerald shadow-xl shadow-brand-emerald/5", children: /* @__PURE__ */ o.jsx("span", { className: "text-4xl font-bold", children: "■" }) }),
        /* @__PURE__ */ o.jsx("h2", { className: "mb-3 text-2xl font-bold text-text-primary", children: "Bienvenido a Socket Docs" }),
        /* @__PURE__ */ o.jsx("p", { className: "max-w-md text-text-secondary", children: "Selecciona un Gateway y un evento de la barra lateral para comenzar a interactuar con tu servidor WebSocket en tiempo real." }),
        f && /* @__PURE__ */ o.jsxs("div", { className: "mt-8 flex gap-4", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Gateways" }),
            /* @__PURE__ */ o.jsx("span", { className: "text-xl font-bold", children: f.gateways.length })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "h-10 w-px bg-border-subtle mx-4" }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ o.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Total Eventos" }),
            /* @__PURE__ */ o.jsx("span", { className: "text-xl font-bold", children: f.gateways.reduce((A, F) => A + F.events.length, 0) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Yt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: Q,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Z,
          activeGatewayNamespace: P == null ? void 0 : P.namespace
        }
      )
    ] })
  ] });
};
export {
  Ho as App
};
