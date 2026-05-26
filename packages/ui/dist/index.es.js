var rn = Object.defineProperty;
var nn = (e, t, n) => t in e ? rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => (nn(e, typeof t != "symbol" ? t + "" : t, n), n);
import $, { useState as te, useCallback as De, useMemo as ur, useEffect as Oe } from "react";
import { RefreshCw as sn, AlertCircle as on, ChevronRight as fr, ChevronLeft as an, Search as cn, LayoutGrid as ln, Download as dn, WifiOff as un, Wifi as fn, Sun as pn, Moon as mn, Settings as bn, Shield as hn, Key as xn, User as gn, Braces as Jt, ChevronDown as yn, Play as vn, RotateCcw as En } from "lucide-react";
import { io as wn } from "socket.io-client";
var gt = { exports: {} }, Fe = {};
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
function jn() {
  if (Vt)
    return Fe;
  Vt = 1;
  var e = $, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, p) {
    var d, m = {}, w = null, v = null;
    p !== void 0 && (w = "" + p), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (d in f)
      r.call(f, d) && !o.hasOwnProperty(d) && (m[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        m[d] === void 0 && (m[d] = f[d]);
    return { $$typeof: t, type: l, key: w, ref: v, props: m, _owner: s.current };
  }
  return Fe.Fragment = n, Fe.jsx = i, Fe.jsxs = i, Fe;
}
var Le = {};
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
function Rn() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), j = Symbol.iterator, y = "@@iterator";
    function x(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = j && c[j] || c[y];
      return typeof b == "function" ? b : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(c) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), S = 1; S < b; S++)
          E[S - 1] = arguments[S];
        C("error", c, E);
      }
    }
    function C(c, b, E) {
      {
        var S = g.ReactDebugCurrentFrame, P = S.getStackAddendum();
        P !== "" && (b += "%s", E = E.concat([P]));
        var D = E.map(function(k) {
          return String(k);
        });
        D.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, D);
      }
    }
    var N = !1, q = !1, ne = !1, fe = !1, he = !1, xe;
    xe = Symbol.for("react.module.reference");
    function oe(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === o || he || c === s || c === p || c === d || fe || c === v || N || q || ne || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === m || c.$$typeof === i || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === xe || c.getModuleId !== void 0));
    }
    function le(c, b, E) {
      var S = c.displayName;
      if (S)
        return S;
      var P = b.displayName || b.name || "";
      return P !== "" ? E + "(" + P + ")" : E;
    }
    function pe(c) {
      return c.displayName || "Context";
    }
    function K(c) {
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
            var b = c;
            return pe(b) + ".Consumer";
          case i:
            var E = c;
            return pe(E._context) + ".Provider";
          case f:
            return le(c, c.render, "ForwardRef");
          case m:
            var S = c.displayName || null;
            return S !== null ? S : K(c.type) || "Memo";
          case w: {
            var P = c, D = P._payload, k = P._init;
            try {
              return K(k(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, X = 0, ue, je, A, L, J, se, ge;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function Z() {
      {
        if (X === 0) {
          ue = console.log, je = console.info, A = console.warn, L = console.error, J = console.group, se = console.groupCollapsed, ge = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: B,
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
        X++;
      }
    }
    function _() {
      {
        if (X--, X === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, c, {
              value: ue
            }),
            info: z({}, c, {
              value: je
            }),
            warn: z({}, c, {
              value: A
            }),
            error: z({}, c, {
              value: L
            }),
            group: z({}, c, {
              value: J
            }),
            groupCollapsed: z({}, c, {
              value: se
            }),
            groupEnd: z({}, c, {
              value: ge
            })
          });
        }
        X < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = g.ReactCurrentDispatcher, F;
    function O(c, b, E) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (P) {
            var S = P.stack.trim().match(/\n( *(at )?)/);
            F = S && S[1] || "";
          }
        return `
` + F + c;
      }
    }
    var Y = !1, me;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Re();
    }
    function Ae(c, b) {
      if (!c || Y)
        return "";
      {
        var E = me.get(c);
        if (E !== void 0)
          return E;
      }
      var S;
      Y = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = I.current, I.current = null, Z();
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
            } catch (ee) {
              S = ee;
            }
            Reflect.construct(c, [], k);
          } else {
            try {
              k.call();
            } catch (ee) {
              S = ee;
            }
            c.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            S = ee;
          }
          c();
        }
      } catch (ee) {
        if (ee && S && typeof ee.stack == "string") {
          for (var T = ee.stack.split(`
`), Q = S.stack.split(`
`), M = T.length - 1, H = Q.length - 1; M >= 1 && H >= 0 && T[M] !== Q[H]; )
            H--;
          for (; M >= 1 && H >= 0; M--, H--)
            if (T[M] !== Q[H]) {
              if (M !== 1 || H !== 1)
                do
                  if (M--, H--, H < 0 || T[M] !== Q[H]) {
                    var ae = `
` + T[M].replace(" at new ", " at ");
                    return c.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", c.displayName)), typeof c == "function" && me.set(c, ae), ae;
                  }
                while (M >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        Y = !1, I.current = D, _(), Error.prepareStackTrace = P;
      }
      var Ne = c ? c.displayName || c.name : "", ve = Ne ? O(Ne) : "";
      return typeof c == "function" && me.set(c, ve), ve;
    }
    function at(c, b, E) {
      return Ae(c, !1);
    }
    function ye(c) {
      var b = c.prototype;
      return !!(b && b.isReactComponent);
    }
    function Me(c, b, E) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return Ae(c, ye(c));
      if (typeof c == "string")
        return O(c);
      switch (c) {
        case p:
          return O("Suspense");
        case d:
          return O("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return at(c.render);
          case m:
            return Me(c.type, b, E);
          case w: {
            var S = c, P = S._payload, D = S._init;
            try {
              return Me(D(P), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Pt = {}, Dt = g.ReactDebugCurrentFrame;
    function ze(c) {
      if (c) {
        var b = c._owner, E = Me(c.type, c._source, b ? b.type : null);
        Dt.setExtraStackFrame(E);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Dr(c, b, E, S, P) {
      {
        var D = Function.call.bind(ke);
        for (var k in c)
          if (D(c, k)) {
            var T = void 0;
            try {
              if (typeof c[k] != "function") {
                var Q = Error((S || "React class") + ": " + E + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              T = c[k](b, k, S, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              T = M;
            }
            T && !(T instanceof Error) && (ze(P), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", E, k, typeof T), ze(null)), T instanceof Error && !(T.message in Pt) && (Pt[T.message] = !0, ze(P), h("Failed %s type: %s", E, T.message), ze(null));
          }
      }
    }
    var Fr = Array.isArray;
    function it(c) {
      return Fr(c);
    }
    function Lr(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E;
      }
    }
    function Ir(c) {
      try {
        return Ft(c), !1;
      } catch {
        return !0;
      }
    }
    function Ft(c) {
      return "" + c;
    }
    function Lt(c) {
      if (Ir(c))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(c)), Ft(c);
    }
    var Pe = g.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, Ut, ct;
    ct = {};
    function $r(c) {
      if (ke.call(c, "ref")) {
        var b = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Br(c) {
      if (ke.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function qr(c, b) {
      if (typeof c.ref == "string" && Pe.current && b && Pe.current.stateNode !== b) {
        var E = K(Pe.current.type);
        ct[E] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Pe.current.type), c.ref), ct[E] = !0);
      }
    }
    function Mr(c, b) {
      {
        var E = function() {
          It || (It = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function zr(c, b) {
      {
        var E = function() {
          Ut || (Ut = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Hr = function(c, b, E, S, P, D, k) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: E,
        props: k,
        // Record the component responsible for creating this element.
        _owner: D
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
    function Wr(c, b, E, S, P) {
      {
        var D, k = {}, T = null, Q = null;
        E !== void 0 && (Lt(E), T = "" + E), Br(b) && (Lt(b.key), T = "" + b.key), $r(b) && (Q = b.ref, qr(b, P));
        for (D in b)
          ke.call(b, D) && !Ur.hasOwnProperty(D) && (k[D] = b[D]);
        if (c && c.defaultProps) {
          var M = c.defaultProps;
          for (D in M)
            k[D] === void 0 && (k[D] = M[D]);
        }
        if (T || Q) {
          var H = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          T && Mr(k, H), Q && zr(k, H);
        }
        return Hr(c, T, Q, P, S, Pe.current, k);
      }
    }
    var lt = g.ReactCurrentOwner, $t = g.ReactDebugCurrentFrame;
    function Se(c) {
      if (c) {
        var b = c._owner, E = Me(c.type, c._source, b ? b.type : null);
        $t.setExtraStackFrame(E);
      } else
        $t.setExtraStackFrame(null);
    }
    var dt;
    dt = !1;
    function ut(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function Bt() {
      {
        if (lt.current) {
          var c = K(lt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Jr(c) {
      {
        if (c !== void 0) {
          var b = c.fileName.replace(/^.*[\\\/]/, ""), E = c.lineNumber;
          return `

Check your code at ` + b + ":" + E + ".";
        }
        return "";
      }
    }
    var qt = {};
    function Vr(c) {
      {
        var b = Bt();
        if (!b) {
          var E = typeof c == "string" ? c : c.displayName || c.name;
          E && (b = `

Check the top-level render call using <` + E + ">.");
        }
        return b;
      }
    }
    function Mt(c, b) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var E = Vr(b);
        if (qt[E])
          return;
        qt[E] = !0;
        var S = "";
        c && c._owner && c._owner !== lt.current && (S = " It was passed a child from " + K(c._owner.type) + "."), Se(c), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, S), Se(null);
      }
    }
    function zt(c, b) {
      {
        if (typeof c != "object")
          return;
        if (it(c))
          for (var E = 0; E < c.length; E++) {
            var S = c[E];
            ut(S) && Mt(S, b);
          }
        else if (ut(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var P = x(c);
          if (typeof P == "function" && P !== c.entries)
            for (var D = P.call(c), k; !(k = D.next()).done; )
              ut(k.value) && Mt(k.value, b);
        }
      }
    }
    function Kr(c) {
      {
        var b = c.type;
        if (b == null || typeof b == "string")
          return;
        var E;
        if (typeof b == "function")
          E = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === m))
          E = b.propTypes;
        else
          return;
        if (E) {
          var S = K(b);
          Dr(E, c.props, "prop", S, c);
        } else if (b.PropTypes !== void 0 && !dt) {
          dt = !0;
          var P = K(b);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(c) {
      {
        for (var b = Object.keys(c.props), E = 0; E < b.length; E++) {
          var S = b[E];
          if (S !== "children" && S !== "key") {
            Se(c), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Se(null);
            break;
          }
        }
        c.ref !== null && (Se(c), h("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var Ht = {};
    function Wt(c, b, E, S, P, D) {
      {
        var k = oe(c);
        if (!k) {
          var T = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Jr(P);
          Q ? T += Q : T += Bt();
          var M;
          c === null ? M = "null" : it(c) ? M = "array" : c !== void 0 && c.$$typeof === t ? (M = "<" + (K(c.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : M = typeof c, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, T);
        }
        var H = Wr(c, b, E, P, D);
        if (H == null)
          return H;
        if (k) {
          var ae = b.children;
          if (ae !== void 0)
            if (S)
              if (it(ae)) {
                for (var Ne = 0; Ne < ae.length; Ne++)
                  zt(ae[Ne], c);
                Object.freeze && Object.freeze(ae);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(ae, c);
        }
        if (ke.call(b, "key")) {
          var ve = K(c), ee = Object.keys(b).filter(function(tn) {
            return tn !== "key";
          }), ft = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ht[ve + ft]) {
            var en = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, ve, en, ve), Ht[ve + ft] = !0;
          }
        }
        return c === r ? Yr(H) : Kr(H), H;
      }
    }
    function Gr(c, b, E) {
      return Wt(c, b, E, !0);
    }
    function Xr(c, b, E) {
      return Wt(c, b, E, !1);
    }
    var Qr = Xr, Zr = Gr;
    Le.Fragment = r, Le.jsx = Qr, Le.jsxs = Zr;
  }()), Le;
}
process.env.NODE_ENV === "production" ? gt.exports = jn() : gt.exports = Rn();
var a = gt.exports;
const Yt = () => {
  const [e, t] = $.useState(!1);
  return $.useEffect(() => {
    const n = setTimeout(() => t(!0), 5e3);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ a.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center", children: [
    /* @__PURE__ */ a.jsx(sn, { className: "animate-spin mb-4", size: 48 }),
    /* @__PURE__ */ a.jsx("span", { className: "text-xl font-medium mb-2", children: "Cargando contratos..." }),
    e && /* @__PURE__ */ a.jsxs("div", { className: "mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-center gap-2 text-orange-400 mb-2", children: [
        /* @__PURE__ */ a.jsx(on, { size: 20 }),
        /* @__PURE__ */ a.jsx("span", { className: "font-bold uppercase text-xs tracking-wider", children: "¿Demasiado tiempo?" })
      ] }),
      /* @__PURE__ */ a.jsxs("p", { className: "text-text-secondary text-sm leading-relaxed", children: [
        "Parece que la carga está tardando más de lo normal. Verifica la ",
        /* @__PURE__ */ a.jsx("b", { children: "consola del navegador (F12)" }),
        " para ver errores de red o configuración."
      ] }),
      /* @__PURE__ */ a.jsx(
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
}, Sn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  expanded: o,
  onToggleExpand: i
}) => /* @__PURE__ */ a.jsx("div", { className: "space-y-4", children: e.map((l, f) => {
  const p = o[l.name] !== !1;
  return /* @__PURE__ */ a.jsxs("div", { className: "nav-group", children: [
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
        onClick: () => i(l.name),
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ a.jsx("span", { className: "text-text-muted", children: "📁" }),
            l.name
          ] }),
          /* @__PURE__ */ a.jsxs("span", { className: `text-[11px] text-text-muted transition-transform ${p ? "" : "-rotate-90"}`, children: [
            l.namespace,
            " ▾"
          ] })
        ]
      }
    ),
    p && /* @__PURE__ */ a.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: l.events.map((d, m) => {
      const w = t === f && n === m;
      return /* @__PURE__ */ a.jsxs(
        "li",
        {
          onClick: (v) => {
            v.stopPropagation(), r(f), s(m);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${w ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
            /* @__PURE__ */ a.jsx("span", { className: "truncate", children: d.event })
          ]
        },
        m
      );
    }) })
  ] }, f);
}) }), U = {
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
}, Nn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s,
  searchQuery: o,
  onSearchChange: i,
  onExport: l,
  expanded: f,
  onToggleExpand: p
}) => {
  const [d, m] = te(!1);
  return /* @__PURE__ */ a.jsxs("aside", { className: `relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${d ? "w-16 p-2" : "w-[300px] p-4"}`, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => m(!d),
        className: "absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors",
        children: d ? /* @__PURE__ */ a.jsx(fr, { size: 14 }) : /* @__PURE__ */ a.jsx(an, { size: 14 })
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: `mb-6 flex items-center ${d ? "justify-center" : "gap-2"}`, children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-xl text-brand-emerald shrink-0", children: "■" }),
      !d && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-base font-semibold truncate", children: U.common.socketDocs }),
        /* @__PURE__ */ a.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: U.common.v1 })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "relative mb-6", children: d ? /* @__PURE__ */ a.jsx("div", { className: "flex justify-center text-text-muted cursor-pointer hover:text-text-primary", onClick: () => m(!1), children: /* @__PURE__ */ a.jsx(cn, { size: 18 }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
          placeholder: U.common.searchPlaceholder,
          value: o,
          onChange: (w) => i(w.target.value)
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
    ] }) }),
    !d && /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1", children: [
      /* @__PURE__ */ a.jsx("span", { children: U.common.gateways }),
      /* @__PURE__ */ a.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
    ] }),
    d && /* @__PURE__ */ a.jsx("div", { className: "mb-3 flex justify-center text-text-secondary", children: /* @__PURE__ */ a.jsx(ln, { size: 18 }) }),
    /* @__PURE__ */ a.jsx("div", { className: `flex-1 overflow-y-auto ${d ? "hidden" : "block"}`, children: /* @__PURE__ */ a.jsx(
      Sn,
      {
        gateways: e,
        activeGatewayIdx: t,
        activeEventIdx: n,
        onSelectGateway: r,
        onSelectEvent: s,
        expanded: f,
        onToggleExpand: p
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: `mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${d ? "flex flex-col items-center gap-4" : ""}`, children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: l,
          title: U.common.exportContract,
          className: `flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${d ? "h-9 w-9" : "mb-3 w-full py-2"}`,
          children: [
            /* @__PURE__ */ a.jsx(dn, { size: 14 }),
            !d && U.common.exportContract
          ]
        }
      ),
      !d && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          U.common.socketDocs,
          " ",
          U.common.v1
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: U.common.madeWith })
      ] })
    ] })
  ] });
}, Cn = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  namespaces: r,
  theme: s,
  onToggleTheme: o,
  onOpenSettings: i,
  onNamespaceChange: l,
  onConnect: f
}) => /* @__PURE__ */ a.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6 bg-bg-primary", children: [
  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs mr-auto", children: [
    /* @__PURE__ */ a.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500"}` }),
    /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: e ? U.common.connected : U.common.disconnected }),
    /* @__PURE__ */ a.jsx("span", { className: "text-text-muted border-l border-border-subtle pl-2", children: t })
  ] }),
  /* @__PURE__ */ a.jsxs(
    "button",
    {
      onClick: f,
      className: `flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${e ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20"}`,
      children: [
        e ? /* @__PURE__ */ a.jsx(un, { size: 14 }) : /* @__PURE__ */ a.jsx(fn, { size: 14 }),
        e ? "Desconectar" : "Conectar"
      ]
    }
  ),
  /* @__PURE__ */ a.jsx(
    "select",
    {
      value: n,
      onChange: (p) => l(p.target.value),
      className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors",
      children: r.map((p) => /* @__PURE__ */ a.jsx("option", { value: p, children: p }, p))
    }
  ),
  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 border-l border-border-subtle pl-3", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: o,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: s === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        children: s === "dark" ? /* @__PURE__ */ a.jsx(pn, { size: 14 }) : /* @__PURE__ */ a.jsx(mn, { size: 14 })
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: i,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: "Configuración",
        children: /* @__PURE__ */ a.jsx(bn, { size: 14 })
      }
    )
  ] })
] }), On = ({ type: e }) => {
  const t = {
    JWT: {
      icon: /* @__PURE__ */ a.jsx(hn, { size: 12 }),
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Requiere token Bearer JWT en el campo auth.token."
    },
    API_KEY: {
      icon: /* @__PURE__ */ a.jsx(xn, { size: 12 }),
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      desc: "Requiere una clave de API válida enviada en los headers o query."
    },
    BASIC: {
      icon: /* @__PURE__ */ a.jsx(gn, { size: 12 }),
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      desc: "Autenticación básica de usuario/contraseña."
    },
    NONE: {
      icon: null,
      color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      desc: "No requiere autenticación."
    }
  }, n = t[e] || t.NONE;
  return e === "NONE" ? null : /* @__PURE__ */ a.jsxs("div", { className: `flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${n.color}`, title: n.desc, children: [
    n.icon,
    /* @__PURE__ */ a.jsx("span", { children: e })
  ] });
}, _n = ({
  gatewayName: e,
  eventName: t,
  summary: n,
  description: r,
  auth: s
}) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
  /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2 text-sm text-text-secondary", children: [
      /* @__PURE__ */ a.jsx("span", { children: e }),
      " / ",
      /* @__PURE__ */ a.jsx("span", { children: "events" }),
      " / ",
      /* @__PURE__ */ a.jsx("span", { className: "font-medium text-text-primary", children: t })
    ] }),
    s && /* @__PURE__ */ a.jsx(On, { type: s })
  ] }),
  /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ a.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: U.event.type }),
    /* @__PURE__ */ a.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ a.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ a.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), Tn = ({ schema: e, responseSchema: t }) => {
  const [n, r] = $.useState("request"), [s, o] = $.useState(!1), i = (p) => JSON.stringify(p, null, 2), l = !!e && Object.keys((e == null ? void 0 : e.properties) || {}).length > 0, f = !!t && Object.keys((t == null ? void 0 : t.properties) || {}).length > 0;
  return !l && !f ? /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex items-center gap-2 text-text-secondary italic", children: [
    /* @__PURE__ */ a.jsx(Jt, { size: 14, className: "opacity-40" }),
    /* @__PURE__ */ a.jsx("span", { className: "text-[12px]", children: U.event.noParameters })
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex items-center gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex items-center gap-2 mr-2 cursor-pointer hover:text-brand-emerald transition-colors",
          onClick: () => o(!s),
          children: [
            s ? /* @__PURE__ */ a.jsx(yn, { size: 14 }) : /* @__PURE__ */ a.jsx(fr, { size: 14 }),
            /* @__PURE__ */ a.jsx(Jt, { size: 14, className: "text-brand-emerald" }),
            /* @__PURE__ */ a.jsx("span", { className: "font-bold uppercase tracking-wider text-text-primary text-[11px]", children: U.event.parameters })
          ]
        }
      ),
      s && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => r("request"),
            className: `pb-1.5 transition-colors ${n === "request" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Request Schema"
          }
        ),
        f && /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => r("response"),
            className: `pb-1.5 transition-colors ${n === "response" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Response Schema"
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ a.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ a.jsx("span", { className: "text-[10px] bg-bg-elevation px-2 py-1 rounded border border-border-subtle font-bold text-text-muted uppercase", children: "JSON Schema" }) }),
      /* @__PURE__ */ a.jsx("pre", { className: "overflow-x-auto rounded-md bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-brand-emerald/90 custom-scrollbar max-h-[400px]", children: i(n === "request" ? e : t) })
    ] })
  ] });
}, An = ({ payload: e, schema: t, responseSchema: n, emits: r, onChange: s, onSend: o }) => {
  const [i, l] = te(r || "");
  return $.useEffect(() => {
    l(r || "");
  }, [r]), /* @__PURE__ */ a.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ a.jsxs("span", { className: "text-[13px] font-semibold", children: [
          U.event.requestBody,
          " ",
          /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-red-400", children: U.event.required })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Listen for:" }),
          /* @__PURE__ */ a.jsx(
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
      /* @__PURE__ */ a.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ a.jsx("option", { children: "application/json" }) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ a.jsx("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: /* @__PURE__ */ a.jsx(
        "span",
        {
          className: "pb-1.5 border-b-2 border-brand-emerald text-brand-emerald font-medium",
          children: U.event.exampleValue
        }
      ) }),
      /* @__PURE__ */ a.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          value: e,
          onChange: (f) => s(f.target.value),
          className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
          rows: 8
        }
      ) }),
      /* @__PURE__ */ a.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ a.jsxs(
          "button",
          {
            onClick: o,
            className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
            children: [
              /* @__PURE__ */ a.jsx(vn, { size: 14 }),
              " ",
              U.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          U.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, kn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ a.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ a.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ a.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: e.map((t) => /* @__PURE__ */ a.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx("span", { className: `font-bold ${t.type === "sent" ? "text-blue-400" : t.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: t.type.toUpperCase() }),
          /* @__PURE__ */ a.jsx("span", { className: "text-text-secondary", children: t.message })
        ] }),
        /* @__PURE__ */ a.jsx("span", { className: "text-[10px] text-text-muted", children: t.timestamp })
      ] }),
      t.data != null && /* @__PURE__ */ a.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
    ]
  },
  t.id
)) }), Pn = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: s
}) => {
  const [o, i] = $.useState("all"), l = $.useMemo(() => o === "all" ? t : o === "emits" ? t.filter((f) => f.type === "sent") : o === "listeners" ? t.filter((f) => f.type === "received") : t, [t, o]);
  return /* @__PURE__ */ a.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ a.jsx("span", { className: "text-[13px] font-semibold", children: U.realtime.title })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.all
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.emits
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ a.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ a.jsx(En, { size: 12 }),
          " ",
          U.realtime.clear
        ] }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: s,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : U.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ a.jsx(kn, { logs: r ? [] : l, onClear: n }) })
  ] });
}, Gt = ({
  show: e,
  onClose: t,
  onSave: n,
  initialApiConfig: r,
  initialSocketConfig: s,
  isStandalone: o,
  theme: i,
  activeGatewayNamespace: l
}) => {
  const [f, p] = $.useState(r), [d, m] = $.useState(s), [w, v] = $.useState(!1), [j, y] = $.useState(null);
  $.useEffect(() => {
    e && (p(r), m(s), y(null));
  }, [e, r, s]);
  const x = (h) => h.startsWith("/") ? h : `/${h}`, g = async () => {
    v(!0), y(null);
    const h = f.baseUrl.replace(/\/$/, ""), C = d.namespace === "/" ? l ?? "/" : d.namespace;
    try {
      const { io: N } = await import("socket.io-client"), q = N(`${h}${x(C)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      });
      q.on("connect", () => {
        y({ success: !0, message: "¡Conexión exitosa!" }), v(!1), q.disconnect();
      }), q.on("connect_error", (ne) => {
        y({ success: !1, message: `Error: ${ne.message}` }), v(!1), q.disconnect();
      });
    } catch (N) {
      y({ success: !1, message: `Error: ${N instanceof Error ? N.message : "Error desconocido"}` }), v(!1);
    }
  };
  return e ? /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ a.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${i === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ a.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Configuración Completa" }),
    /* @__PURE__ */ a.jsx("div", { className: "flex-1 overflow-y-auto pr-2", children: /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Documentación API" }),
          /* @__PURE__ */ a.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${o ? "bg-orange-500/20 text-orange-500" : "bg-brand-emerald/20 text-brand-emerald"}`, children: o ? "Modo Standalone" : "Modo Integrado" })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Base URL" }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                value: f.baseUrl,
                onChange: (h) => p({ ...f, baseUrl: h.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                placeholder: "http://localhost:3000"
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { children: [
            /* @__PURE__ */ a.jsxs("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: [
              "JSON Path ",
              o && /* @__PURE__ */ a.jsx("span", { className: "text-[10px] text-orange-500 font-normal", children: "(Bloqueado en Standalone)" })
            ] }),
            /* @__PURE__ */ a.jsx(
              "input",
              {
                type: "text",
                disabled: o,
                value: f.jsonPath,
                onChange: (h) => p({ ...f, jsonPath: h.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${o ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("section", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
              /* @__PURE__ */ a.jsx(
                "textarea",
                {
                  value: d.auth.token,
                  onChange: (h) => m({
                    ...d,
                    auth: { ...d.auth, token: h.target.value }
                  }),
                  className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "Bearer eyJhbG..."
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "User ID" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: d.auth.userId,
                  onChange: (h) => m({
                    ...d,
                    auth: { ...d.auth, userId: h.target.value }
                  }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ a.jsxs("section", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Socket.IO Core" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Namespace Override" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: d.namespace,
                  onChange: (h) => m({ ...d, namespace: h.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Socket Path" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "text",
                  value: d.path,
                  onChange: (h) => m({ ...d, path: h.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
              /* @__PURE__ */ a.jsxs(
                "select",
                {
                  value: d.transports.join(","),
                  onChange: (h) => {
                    const C = h.target.value;
                    let N = ["polling", "websocket"];
                    C === "websocket" && (N = ["websocket"]), C === "polling" && (N = ["polling"]), m({ ...d, transports: N });
                  },
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ a.jsx("option", { value: "polling,websocket", children: "Automático" }),
                    /* @__PURE__ */ a.jsx("option", { value: "websocket", children: "Websocket" }),
                    /* @__PURE__ */ a.jsx("option", { value: "polling", children: "Polling" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("section", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reconexión y Tiempos" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "reconnection",
                  checked: d.reconnection,
                  onChange: (h) => m({ ...d, reconnection: h.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ a.jsx("label", { htmlFor: "reconnection", className: "text-xs font-medium text-text-muted", children: "Habilitar Reconexión" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "autoConnect",
                  checked: d.autoConnect,
                  onChange: (h) => m({ ...d, autoConnect: h.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ a.jsx("label", { htmlFor: "autoConnect", className: "text-xs font-medium text-text-muted", children: "Auto Conectar" })
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Máx Intentos" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionAttempts === 1 / 0 ? 0 : d.reconnectionAttempts,
                  onChange: (h) => m({ ...d, reconnectionAttempts: h.target.value === "0" ? 1 / 0 : parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "0 = Infinito"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Timeout (ms)" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: d.timeout,
                  onChange: (h) => m({ ...d, timeout: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Inicial (ms)" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelay,
                  onChange: (h) => m({ ...d, reconnectionDelay: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Máximo (ms)" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelayMax,
                  onChange: (h) => m({ ...d, reconnectionDelayMax: parseInt(h.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: g,
            disabled: w,
            className: `rounded px-4 py-2 text-sm font-semibold transition-all ${w ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
            children: w ? "Probando..." : "Probar Conexión"
          }
        ),
        j && /* @__PURE__ */ a.jsx("span", { className: `text-xs font-medium ${j.success ? "text-brand-emerald" : "text-red-500"}`, children: j.message })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: t,
            className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ a.jsx(
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
class Dn {
  constructor() {
    He(this, "sockets", {});
  }
  connect(t, n, r = {}, s) {
    this.sockets[t] && this.sockets[t].disconnect();
    const o = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, i = wn(n, o);
    return i.on("connect", s.onConnect), i.on("connect_error", (l) => s.onConnectError(l)), i.on("disconnect", (l) => s.onDisconnect(l)), i.onAny(s.onAny), this.sockets[t] = i, i;
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
const pt = new Dn(), Fn = (e = {}) => {
  const [t, n] = te({}), [r, s] = te([]), o = De((d, m, w) => {
    s(
      (v) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: d,
          message: m,
          data: w
        },
        ...v
      ].slice(0, 50)
    );
  }, []), i = De((d, m, w) => {
    const v = {
      ...e,
      options: {
        path: w ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    console.log(`[SocketDocs] Connecting to ${d} at ${m}...`, v.options), pt.connect(d, m, v, {
      onConnect: () => {
        console.log(`[SocketDocs] Connected to ${d}`), n((j) => ({ ...j, [d]: !0 })), o("received", `Connected to ${m}`);
      },
      onDisconnect: (j) => {
        console.log(`[SocketDocs] Disconnected from ${d}: ${j}`), n((y) => ({ ...y, [d]: !1 })), o("error", `Disconnected from ${m} (${j})`);
      },
      onConnectError: (j) => {
        console.error(`[SocketDocs] Connection error for ${d}:`, j), n((y) => ({ ...y, [d]: !1 })), o("error", `Connection Error: ${j.message}`);
      },
      onAny: (j, ...y) => {
        o("received", `Event: ${j}`, y);
      }
    });
  }, [e, o]), l = De((d, m) => {
    pt.disconnect(d), n((w) => ({ ...w, [d]: !1 })), o("error", `Disconnected from ${m || d}`);
  }, [o]), f = De((d, m, w) => {
    try {
      const v = JSON.parse(w);
      o("sent", `Emitting ${m}`, v), pt.emit(d, m, v, (j) => {
        o("received", `ACK for ${m}`, j);
      });
    } catch (v) {
      const j = v instanceof Error ? v.message : "Invalid JSON";
      console.error(`Emit error: ${j}`);
    }
  }, [o]), p = De(() => {
    s([]);
  }, []);
  return {
    connected: t,
    logs: r,
    connect: i,
    disconnect: l,
    emitEvent: f,
    clearLogs: p
  };
};
function pr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ln } = Object.prototype, { getPrototypeOf: Ze } = Object, { iterator: et, toStringTag: mr } = Symbol, tt = ((e) => (t) => {
  const n = Ln.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: Te } = Array, _e = rt("undefined");
function Ue(e) {
  return e !== null && !_e(e) && e.constructor !== null && !_e(e.constructor) && re(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const br = de("ArrayBuffer");
function In(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && br(e.buffer), t;
}
const Un = rt("string"), re = rt("function"), hr = rt("number"), $e = (e) => e !== null && typeof e == "object", $n = (e) => e === !0 || e === !1, Ve = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = Ze(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(mr in e) && !(et in e);
}, Bn = (e) => {
  if (!$e(e) || Ue(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qn = de("Date"), Mn = de("File"), zn = (e) => !!(e && typeof e.uri < "u"), Hn = (e) => e && typeof e.getParts < "u", Wn = de("Blob"), Jn = de("FileList"), Vn = (e) => $e(e) && re(e.pipe);
function Kn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Xt = Kn(), Qt = typeof Xt.FormData < "u" ? Xt.FormData : void 0, Yn = (e) => {
  if (!e)
    return !1;
  if (Qt && e instanceof Qt)
    return !0;
  const t = Ze(e);
  if (!t || t === Object.prototype || !re(e.append))
    return !1;
  const n = tt(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && re(e.toString) && e.toString() === "[object FormData]";
}, Gn = de("URLSearchParams"), [Xn, Qn, Zn, es] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(de), ts = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Be(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Te(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Ue(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function xr(e, t) {
  if (Ue(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ee = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gr = (e) => !_e(e) && e !== Ee;
function yt(...e) {
  const { caseless: t, skipUndefined: n } = gr(this) && this || {}, r = {}, s = (o, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const l = t && xr(r, i) || i, f = vt(r, l) ? r[l] : void 0;
    Ve(f) && Ve(o) ? r[l] = yt(f, o) : Ve(o) ? r[l] = yt({}, o) : Te(o) ? r[l] = o.slice() : (!n || !_e(o)) && (r[l] = o);
  };
  for (let o = 0, i = e.length; o < i; o++)
    e[o] && Be(e[o], s);
  return r;
}
const rs = (e, t, n, { allOwnKeys: r } = {}) => (Be(
  t,
  (s, o) => {
    n && re(s) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: pr(s, n),
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
), e), ns = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ss = (e, t, n, r) => {
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
}, os = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Ze(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, as = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, is = (e) => {
  if (!e)
    return null;
  if (Te(e))
    return e;
  let t = e.length;
  if (!hr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, cs = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ze(Uint8Array)), ls = (e, t) => {
  const r = (e && e[et]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ds = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, us = de("HTMLFormElement"), fs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), vt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ps = de("RegExp"), yr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Be(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, ms = (e) => {
  yr(e, (t, n) => {
    if (re(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (re(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, bs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Te(e) ? r(e) : r(String(e).split(t)), n;
}, hs = () => {
}, xs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gs(e) {
  return !!(e && re(e.append) && e[mr] === "FormData" && e[et]);
}
const ys = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if ($e(r)) {
      if (t.has(r))
        return;
      if (Ue(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const s = Te(r) ? [] : {};
        return Be(r, (o, i) => {
          const l = n(o);
          !_e(l) && (s[i] = l);
        }), t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, vs = de("AsyncFunction"), Es = (e) => e && ($e(e) || re(e)) && re(e.then) && re(e.catch), vr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ee.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Ee && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ee.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", re(Ee.postMessage)), ws = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ee) : typeof process < "u" && process.nextTick || vr, js = (e) => e != null && re(e[et]), u = {
  isArray: Te,
  isArrayBuffer: br,
  isBuffer: Ue,
  isFormData: Yn,
  isArrayBufferView: In,
  isString: Un,
  isNumber: hr,
  isBoolean: $n,
  isObject: $e,
  isPlainObject: Ve,
  isEmptyObject: Bn,
  isReadableStream: Xn,
  isRequest: Qn,
  isResponse: Zn,
  isHeaders: es,
  isUndefined: _e,
  isDate: qn,
  isFile: Mn,
  isReactNativeBlob: zn,
  isReactNative: Hn,
  isBlob: Wn,
  isRegExp: ps,
  isFunction: re,
  isStream: Vn,
  isURLSearchParams: Gn,
  isTypedArray: cs,
  isFileList: Jn,
  forEach: Be,
  merge: yt,
  extend: rs,
  trim: ts,
  stripBOM: ns,
  inherits: ss,
  toFlatObject: os,
  kindOf: tt,
  kindOfTest: de,
  endsWith: as,
  toArray: is,
  forEachEntry: ls,
  matchAll: ds,
  isHTMLForm: us,
  hasOwnProperty: vt,
  hasOwnProp: vt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yr,
  freezeMethods: ms,
  toObjectSet: bs,
  toCamelCase: fs,
  noop: hs,
  toFiniteNumber: xs,
  findKey: xr,
  global: Ee,
  isContextDefined: gr,
  isSpecCompliantForm: gs,
  toJSONObject: ys,
  isAsyncFn: vs,
  isThenable: Es,
  setImmediate: vr,
  asap: ws,
  isIterable: js
}, Rs = u.toObjectSet([
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
]), Ss = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Rs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function Ns(e) {
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
const Cs = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Os = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Rt(e, t) {
  return u.isArray(e) ? e.map((n) => Rt(n, t)) : Ns(String(e).replace(t, ""));
}
const _s = (e) => Rt(e, Cs), Ts = (e) => Rt(e, Os);
function Er(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (n, r) => {
    t[r] = Ts(n);
  }), t;
}
const Zt = Symbol("internals");
function Ie(e) {
  return e && String(e).trim().toLowerCase();
}
function Ke(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ke) : _s(String(e));
}
function As(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ks = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mt(e, t, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function Ps(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ds(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class nt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, p) {
      const d = Ie(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const m = u.findKey(s, d);
      (!m || s[m] === void 0 || p === !0 || p === void 0 && s[m] !== !1) && (s[m || f] = Ke(l));
    }
    const i = (l, f) => u.forEach(l, (p, d) => o(p, d, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (u.isString(t) && (t = t.trim()) && !ks(t))
      i(Ss(t), n);
    else if (u.isObject(t) && u.isIterable(t)) {
      let l = {}, f, p;
      for (const d of t) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[p = d[0]] = (f = l[p]) ? u.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return As(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ie(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || mt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ie(i), i) {
        const l = u.findKey(r, i);
        l && (!n || mt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return u.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || mt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (s, o) => {
      const i = u.findKey(r, o);
      if (i) {
        n[i] = Ke(s), delete n[o];
        return;
      }
      const l = t ? Ps(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ke(s), r[l] = !0;
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
    function o(i) {
      const l = Ie(i);
      r[l] || (Ds(s, i), r[l] = !0);
    }
    return u.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
nt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
u.reduceDescriptors(nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(nt);
const ce = nt, Fs = "[REDACTED ****]";
function Ls(e) {
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
function Is(e, t) {
  const n = new Set(t.map((o) => String(o).toLowerCase())), r = [], s = (o) => {
    if (o === null || typeof o != "object" || u.isBuffer(o))
      return o;
    if (r.indexOf(o) !== -1)
      return;
    o instanceof ce && (o = o.toJSON()), r.push(o);
    let i;
    if (u.isArray(o))
      i = [], o.forEach((l, f) => {
        const p = s(l);
        u.isUndefined(p) || (i[f] = p);
      });
    else {
      if (!u.isPlainObject(o) && Ls(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(o)) {
        const p = n.has(l.toLowerCase()) ? Fs : s(f);
        u.isUndefined(p) || (i[l] = p);
      }
    }
    return r.pop(), i;
  };
  return s(e);
}
class V extends Error {
  static from(t, n, r, s, o, i) {
    const l = new V(t.message, n || t.code, r, s, o);
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
    const t = this.config, n = t && u.hasOwnProp(t, "redact") ? t.redact : void 0, r = u.isArray(n) && n.length > 0 ? Is(t, n) : u.toJSONObject(t);
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
V.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
V.ERR_BAD_OPTION = "ERR_BAD_OPTION";
V.ECONNABORTED = "ECONNABORTED";
V.ETIMEDOUT = "ETIMEDOUT";
V.ECONNREFUSED = "ECONNREFUSED";
V.ERR_NETWORK = "ERR_NETWORK";
V.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
V.ERR_DEPRECATED = "ERR_DEPRECATED";
V.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
V.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
V.ERR_CANCELED = "ERR_CANCELED";
V.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
V.ERR_INVALID_URL = "ERR_INVALID_URL";
V.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const R = V, Us = null;
function Et(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function wr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = wr(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function $s(e) {
  return u.isArray(e) && !e.some(Et);
}
const Bs = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function st(e, t, n) {
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
    function(x, g) {
      return !u.isUndefined(g[x]);
    }
  );
  const r = n.metaTokens, s = n.visitor || m, o = n.dots, i = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, p = l && u.isSpecCompliantForm(t);
  if (!u.isFunction(s))
    throw new TypeError("visitor must be a function");
  function d(y) {
    if (y === null)
      return "";
    if (u.isDate(y))
      return y.toISOString();
    if (u.isBoolean(y))
      return y.toString();
    if (!p && u.isBlob(y))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(y) || u.isTypedArray(y) ? p && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function m(y, x, g) {
    let h = y;
    if (u.isReactNative(t) && u.isReactNativeBlob(y))
      return t.append(bt(g, x, o), d(y)), !1;
    if (y && !g && typeof y == "object") {
      if (u.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), y = JSON.stringify(y);
      else if (u.isArray(y) && $s(y) || (u.isFileList(y) || u.endsWith(x, "[]")) && (h = u.toArray(y)))
        return x = wr(x), h.forEach(function(N, q) {
          !(u.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([x], q, o) : i === null ? x : x + "[]",
            d(N)
          );
        }), !1;
    }
    return Et(y) ? !0 : (t.append(bt(g, x, o), d(y)), !1);
  }
  const w = [], v = Object.assign(Bs, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: Et
  });
  function j(y, x, g = 0) {
    if (!u.isUndefined(y)) {
      if (g > f)
        throw new R(
          "Object is too deeply nested (" + g + " levels). Max depth: " + f,
          R.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (w.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      w.push(y), u.forEach(y, function(C, N) {
        (!(u.isUndefined(C) || C === null) && s.call(t, C, u.isString(N) ? N.trim() : N, x, v)) === !0 && j(C, x ? x.concat(N) : [N], g + 1);
      }), w.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return j(e), t;
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
function St(e, t) {
  this._pairs = [], e && st(e, this, t);
}
const jr = St.prototype;
jr.append = function(t, n) {
  this._pairs.push([t, n]);
};
jr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, er);
  } : er;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function qs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || qs, s = u.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let i;
  if (o ? i = o(t, s) : i = u.isURLSearchParams(t) ? t.toString() : new St(t, s).toString(r), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Ms {
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
const tr = Ms, Nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, zs = typeof URLSearchParams < "u" ? URLSearchParams : St, Hs = typeof FormData < "u" ? FormData : null, Ws = typeof Blob < "u" ? Blob : null, Js = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zs,
    FormData: Hs,
    Blob: Ws
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ct = typeof window < "u" && typeof document < "u", wt = typeof navigator == "object" && navigator || void 0, Vs = Ct && (!wt || ["ReactNative", "NativeScript", "NS"].indexOf(wt.product) < 0), Ks = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ys = Ct && window.location.href || "http://localhost", Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ct,
  hasStandardBrowserEnv: Vs,
  hasStandardBrowserWebWorkerEnv: Ks,
  navigator: wt,
  origin: Ys
}, Symbol.toStringTag, { value: "Module" })), G = {
  ...Gs,
  ...Js
};
function Xs(e, t) {
  return st(e, new G.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return G.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Qs(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Sr(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && u.isArray(s) ? s.length : i, f ? (u.hasOwnProp(s, i) ? s[i] = u.isArray(s[i]) ? s[i].concat(r) : [s[i], r] : s[i] = r, !l) : ((!u.hasOwnProp(s, i) || !u.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && u.isArray(s[i]) && (s[i] = Zs(s[i])), !l);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, s) => {
      t(Qs(r), s, n, 0);
    }), n;
  }
  return null;
}
const Ce = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
function eo(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ot = {
  transitional: Nt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = u.isObject(t);
      if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
        return s ? JSON.stringify(Sr(t)) : t;
      if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
        return t;
      if (u.isArrayBufferView(t))
        return t.buffer;
      if (u.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (o) {
        const f = Ce(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Xs(t, f).toString();
        if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const p = Ce(this, "env"), d = p && p.FormData;
          return st(
            l ? { "files[]": t } : t,
            d && new d(),
            f
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), eo(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Ce(this, "transitional") || Ot.transitional, r = n && n.forcedJSONParsing, s = Ce(this, "responseType"), o = s === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !s || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Ce(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? R.from(f, R.ERR_BAD_RESPONSE, this, null, Ce(this, "response")) : f;
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
    FormData: G.classes.FormData,
    Blob: G.classes.Blob
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
  Ot.headers[e] = {};
});
const _t = Ot;
function ht(e, t) {
  const n = this || _t, r = t || n, s = ce.from(r.headers);
  let o = r.data;
  return u.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Nr(e) {
  return !!(e && e.__CANCEL__);
}
class to extends R {
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
    super(t ?? "canceled", R.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const qe = to;
function Cr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new R(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? R.ERR_BAD_REQUEST : R.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function ro(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function no(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const p = Date.now(), d = r[o];
    i || (i = p), n[s] = f, r[s] = p;
    let m = o, w = 0;
    for (; m !== s; )
      w += n[m++], m = m % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - i < t)
      return;
    const v = d && p - d;
    return v ? Math.round(w * 1e3 / v) : void 0;
  };
}
function so(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (p, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const d = Date.now(), m = d - n;
    m >= r ? i(p, d) : (s = p, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - m)));
  }, () => s && i(s)];
}
const Xe = (e, t, n = 3) => {
  let r = 0;
  const s = no(50, 250);
  return so((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = l != null ? Math.min(i, l) : i, p = Math.max(0, f - r), d = s(p);
    r = Math.max(r, f);
    const m = {
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
    e(m);
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
}, nr = (e) => (...t) => u.asap(() => e(...t)), oo = G.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, G.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(G.origin),
  G.navigator && /(msie|trident)/i.test(G.navigator.userAgent)
) : () => !0, ao = G.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o, i) {
      if (typeof document > "u")
        return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      u.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), u.isString(r) && l.push(`path=${r}`), u.isString(s) && l.push(`domain=${s}`), o === !0 && l.push("secure"), u.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
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
function io(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function co(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Or(e, t, n) {
  let r = !io(t);
  return e && (r || n === !1) ? co(e, t) : t;
}
const sr = (e) => e instanceof ce ? { ...e } : e;
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
  function r(p, d, m, w) {
    return u.isPlainObject(p) && u.isPlainObject(d) ? u.merge.call({ caseless: w }, p, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(p, d, m, w) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p, m, w);
    } else
      return r(p, d, m, w);
  }
  function o(p, d) {
    if (!u.isUndefined(d))
      return r(void 0, d);
  }
  function i(p, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, d);
  }
  function l(p, d, m) {
    if (u.hasOwnProp(t, m))
      return r(p, d);
    if (u.hasOwnProp(e, m))
      return r(void 0, p);
  }
  const f = {
    url: o,
    method: o,
    data: o,
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
    headers: (p, d, m) => s(sr(p), sr(d), m, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const m = u.hasOwnProp(f, d) ? f[d] : s, w = u.hasOwnProp(e, d) ? e[d] : void 0, v = u.hasOwnProp(t, d) ? t[d] : void 0, j = m(w, v, d);
    u.isUndefined(j) && m !== l || (n[d] = j);
  }), n;
}
const lo = ["content-type", "content-length"];
function uo(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    lo.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const fo = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), _r = (e) => {
  const t = we({}, e), n = (w) => u.hasOwnProp(t, w) ? t[w] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), p = n("baseURL"), d = n("allowAbsoluteUrls"), m = n("url");
  if (t.headers = l = ce.from(l), t.url = Rr(
    Or(p, m, d),
    e.params,
    e.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? fo(f.password) : ""))
  ), u.isFormData(r) && (G.hasStandardBrowserEnv || G.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && uo(l, r.getHeaders(), n("formDataHeaderPolicy"))), G.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(t)), s === !0 || s == null && oo(t.url))) {
    const v = o && i && ao.read(i);
    v && l.set(o, v);
  }
  return t;
}, po = typeof XMLHttpRequest < "u", mo = po && function(e) {
  return new Promise(function(n, r) {
    const s = _r(e);
    let o = s.data;
    const i = ce.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: p } = s, d, m, w, v, j;
    function y() {
      v && v(), j && j(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function g() {
      if (!x)
        return;
      const C = ce.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), q = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: C,
        config: e,
        request: x
      };
      Cr(
        function(fe) {
          n(fe), y();
        },
        function(fe) {
          r(fe), y();
        },
        q
      ), x = null;
    }
    "onloadend" in x ? x.onloadend = g : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.startsWith("file:")) || setTimeout(g);
    }, x.onabort = function() {
      x && (r(new R("Request aborted", R.ECONNABORTED, e, x)), y(), x = null);
    }, x.onerror = function(N) {
      const q = N && N.message ? N.message : "Network Error", ne = new R(q, R.ERR_NETWORK, e, x);
      ne.event = N || null, r(ne), y(), x = null;
    }, x.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const q = s.transitional || Nt;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), r(
        new R(
          N,
          q.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
          e,
          x
        )
      ), y(), x = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in x && u.forEach(Er(i), function(N, q) {
      x.setRequestHeader(q, N);
    }), u.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), p && ([w, j] = Xe(p, !0), x.addEventListener("progress", w)), f && x.upload && ([m, v] = Xe(f), x.upload.addEventListener("progress", m), x.upload.addEventListener("loadend", v)), (s.cancelToken || s.signal) && (d = (C) => {
      x && (r(!C || C.type ? new qe(null, e, x) : C), x.abort(), y(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const h = ro(s.url);
    if (h && !G.protocols.includes(h)) {
      r(
        new R(
          "Unsupported protocol " + h + ":",
          R.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    x.send(o || null);
  });
}, bo = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(f) {
    if (!r) {
      r = !0, i();
      const p = f instanceof Error ? f : this.reason;
      n.abort(
        p instanceof R ? p : new qe(p instanceof Error ? p.message : p)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new R(`timeout of ${t}ms exceeded`, R.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((f) => f.addEventListener("abort", s));
  const { signal: l } = n;
  return l.unsubscribe = () => u.asap(i), l;
}, ho = bo, xo = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, go = async function* (e, t) {
  for await (const n of yo(e))
    yield* xo(n, t);
}, yo = async function* (e) {
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
  const s = go(e, t);
  let o = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
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
          let m = d.byteLength;
          if (n) {
            let w = o += m;
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
function vo(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:"))
    return 0;
  const t = e.indexOf(",");
  if (t < 0)
    return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const l = r.length;
    for (let v = 0; v < l; v++)
      if (r.charCodeAt(v) === 37 && v + 2 < l) {
        const j = r.charCodeAt(v + 1), y = r.charCodeAt(v + 2);
        (j >= 48 && j <= 57 || j >= 65 && j <= 70 || j >= 97 && j <= 102) && (y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102) && (i -= 2, v += 2);
      }
    let f = 0, p = l - 1;
    const d = (v) => v >= 2 && r.charCodeAt(v - 2) === 37 && // '%'
    r.charCodeAt(v - 1) === 51 && // '3'
    (r.charCodeAt(v) === 68 || r.charCodeAt(v) === 100);
    p >= 0 && (r.charCodeAt(p) === 61 ? (f++, p--) : d(p) && (f++, p -= 3)), f === 1 && p >= 0 && (r.charCodeAt(p) === 61 || d(p)) && f++;
    const w = Math.floor(i / 4) * 3 - (f || 0);
    return w > 0 ? w : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let o = 0;
  for (let i = 0, l = r.length; i < l; i++) {
    const f = r.charCodeAt(i);
    if (f < 128)
      o += 1;
    else if (f < 2048)
      o += 2;
    else if (f >= 55296 && f <= 56319 && i + 1 < l) {
      const p = r.charCodeAt(i + 1);
      p >= 56320 && p <= 57343 ? (o += 4, i++) : o += 3;
    } else
      o += 3;
  }
  return o;
}
const Tt = "1.16.1", ar = 64 * 1024, { isFunction: We } = u, ir = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Eo = (e) => {
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
  const { fetch: s, Request: o, Response: i } = e, l = s ? We(s) : typeof fetch == "function", f = We(o), p = We(i);
  if (!l)
    return !1;
  const d = l && We(n), m = l && (typeof r == "function" ? ((g) => (h) => g.encode(h))(new r()) : async (g) => new Uint8Array(await new o(g).arrayBuffer())), w = f && d && ir(() => {
    let g = !1;
    const h = new o(G.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), C = h.headers.has("Content-Type");
    return h.body != null && h.body.cancel(), g && !C;
  }), v = p && d && ir(() => u.isReadableStream(new i("").body)), j = {
    stream: v && ((g) => g.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !j[g] && (j[g] = (h, C) => {
      let N = h && h[g];
      if (N)
        return N.call(h);
      throw new R(
        `Response type '${g}' is not supported`,
        R.ERR_NOT_SUPPORT,
        C
      );
    });
  });
  const y = async (g) => {
    if (g == null)
      return 0;
    if (u.isBlob(g))
      return g.size;
    if (u.isSpecCompliantForm(g))
      return (await new o(G.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(g) || u.isArrayBuffer(g))
      return g.byteLength;
    if (u.isURLSearchParams(g) && (g = g + ""), u.isString(g))
      return (await m(g)).byteLength;
  }, x = async (g, h) => {
    const C = u.toFiniteNumber(g.getContentLength());
    return C ?? y(h);
  };
  return async (g) => {
    let {
      url: h,
      method: C,
      data: N,
      signal: q,
      cancelToken: ne,
      timeout: fe,
      onDownloadProgress: he,
      onUploadProgress: xe,
      responseType: oe,
      headers: le,
      withCredentials: pe = "same-origin",
      fetchOptions: K,
      maxContentLength: z,
      maxBodyLength: X
    } = _r(g);
    const ue = u.isNumber(z) && z > -1, je = u.isNumber(X) && X > -1;
    let A = s || fetch;
    oe = oe ? (oe + "").toLowerCase() : "text";
    let L = ho(
      [q, ne && ne.toAbortSignal()],
      fe
    ), J = null;
    const se = L && L.unsubscribe && (() => {
      L.unsubscribe();
    });
    let ge;
    try {
      if (ue && typeof h == "string" && h.startsWith("data:") && vo(h) > z)
        throw new R(
          "maxContentLength size of " + z + " exceeded",
          R.ERR_BAD_RESPONSE,
          g,
          J
        );
      if (je && C !== "get" && C !== "head") {
        const O = await x(le, N);
        if (typeof O == "number" && isFinite(O) && O > X)
          throw new R(
            "Request body larger than maxBodyLength limit",
            R.ERR_BAD_REQUEST,
            g,
            J
          );
      }
      if (xe && w && C !== "get" && C !== "head" && (ge = await x(le, N)) !== 0) {
        let O = new o(h, {
          method: "POST",
          body: N,
          duplex: "half"
        }), Y;
        if (u.isFormData(N) && (Y = O.headers.get("content-type")) && le.setContentType(Y), O.body) {
          const [me, Re] = rr(
            ge,
            Xe(nr(xe))
          );
          N = or(O.body, ar, me, Re);
        }
      }
      u.isString(pe) || (pe = pe ? "include" : "omit");
      const B = f && "credentials" in o.prototype;
      if (u.isFormData(N)) {
        const O = le.getContentType();
        O && /^multipart\/form-data/i.test(O) && !/boundary=/i.test(O) && le.delete("content-type");
      }
      le.set("User-Agent", "axios/" + Tt, !1);
      const Z = {
        ...K,
        signal: L,
        method: C.toUpperCase(),
        headers: Er(le.normalize()),
        body: N,
        duplex: "half",
        credentials: B ? pe : void 0
      };
      J = f && new o(h, Z);
      let _ = await (f ? A(J, K) : A(h, Z));
      if (ue) {
        const O = u.toFiniteNumber(_.headers.get("content-length"));
        if (O != null && O > z)
          throw new R(
            "maxContentLength size of " + z + " exceeded",
            R.ERR_BAD_RESPONSE,
            g,
            J
          );
      }
      const I = v && (oe === "stream" || oe === "response");
      if (v && _.body && (he || ue || I && se)) {
        const O = {};
        ["status", "statusText", "headers"].forEach((ye) => {
          O[ye] = _[ye];
        });
        const Y = u.toFiniteNumber(_.headers.get("content-length")), [me, Re] = he && rr(
          Y,
          Xe(nr(he), !0)
        ) || [];
        let Ae = 0;
        const at = (ye) => {
          if (ue && (Ae = ye, Ae > z))
            throw new R(
              "maxContentLength size of " + z + " exceeded",
              R.ERR_BAD_RESPONSE,
              g,
              J
            );
          me && me(ye);
        };
        _ = new i(
          or(_.body, ar, at, () => {
            Re && Re(), se && se();
          }),
          O
        );
      }
      oe = oe || "text";
      let F = await j[u.findKey(j, oe) || "text"](
        _,
        g
      );
      if (ue && !v && !I) {
        let O;
        if (F != null && (typeof F.byteLength == "number" ? O = F.byteLength : typeof F.size == "number" ? O = F.size : typeof F == "string" && (O = typeof r == "function" ? new r().encode(F).byteLength : F.length)), typeof O == "number" && O > z)
          throw new R(
            "maxContentLength size of " + z + " exceeded",
            R.ERR_BAD_RESPONSE,
            g,
            J
          );
      }
      return !I && se && se(), await new Promise((O, Y) => {
        Cr(O, Y, {
          data: F,
          headers: ce.from(_.headers),
          status: _.status,
          statusText: _.statusText,
          config: g,
          request: J
        });
      });
    } catch (B) {
      if (se && se(), L && L.aborted && L.reason instanceof R) {
        const Z = L.reason;
        throw Z.config = g, J && (Z.request = J), B !== Z && (Z.cause = B), Z;
      }
      throw B && B.name === "TypeError" && /Load failed|fetch/i.test(B.message) ? Object.assign(
        new R(
          "Network Error",
          R.ERR_NETWORK,
          g,
          J,
          B && B.response
        ),
        {
          cause: B.cause || B
        }
      ) : R.from(B, B && B.code, g, J, B && B.response);
    }
  };
}, wo = /* @__PURE__ */ new Map(), Tr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, l = i, f, p, d = wo;
  for (; l--; )
    f = o[l], p = d.get(f), p === void 0 && d.set(f, p = l ? /* @__PURE__ */ new Map() : Eo(t)), d = p;
  return p;
};
Tr();
const At = {
  http: Us,
  xhr: mo,
  fetch: {
    get: Tr
  }
};
u.forEach(At, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const cr = (e) => `- ${e}`, jo = (e) => u.isFunction(e) || e === null || e === !1;
function Ro(e, t) {
  e = u.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const o = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let l;
    if (s = r, !jo(r) && (s = At[(l = String(r)).toLowerCase()], s === void 0))
      throw new R(`Unknown adapter '${l}'`);
    if (s && (u.isFunction(s) || (s = s.get(t))))
      break;
    o[l || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([f, p]) => `adapter ${f} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(cr).join(`
`) : " " + cr(i[0]) : "as no adapter specified";
    throw new R(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const Ar = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ro,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: At
};
function xt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function lr(e) {
  return xt(e), e.headers = ce.from(e.headers), e.data = ht.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ar.getAdapter(e.adapter || _t.adapter, e)(e).then(
    function(r) {
      xt(e), e.response = r;
      try {
        r.data = ht.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = ce.from(r.headers), r;
    },
    function(r) {
      if (!Nr(r) && (xt(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = ht.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = ce.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const ot = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ot[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dr = {};
ot.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Tt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new R(
        s(i, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return n && !dr[i] && (dr[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
ot.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function So(e, t, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new R(
          "option " + o + " must be " + f,
          R.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new R("Unknown option " + o, R.ERR_BAD_OPTION);
  }
}
const Ye = {
  assertOptions: So,
  validators: ot
}, ie = Ye.validators;
class Qe {
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
        const o = (() => {
          if (!s.stack)
            return "";
          const i = s.stack.indexOf(`
`);
          return i === -1 ? "" : s.stack.slice(i + 1);
        })();
        try {
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const i = o.indexOf(`
`), l = i === -1 ? -1 : o.indexOf(`
`, i + 1), f = l === -1 ? "" : o.slice(l + 1);
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
    r !== void 0 && Ye.assertOptions(
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
    } : Ye.assertOptions(
      s,
      {
        encode: ie.function,
        serialize: ie.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ye.assertOptions(
      n,
      {
        baseUrl: ie.spelling("baseURL"),
        withXsrfToken: ie.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && u.merge(o.common, o[n.method]);
    o && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (j) => {
      delete o[j];
    }), n.headers = ce.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1)
        return;
      f = f && y.synchronous;
      const x = n.transitional || Nt;
      x && x.legacyInterceptorReqResOrdering ? l.unshift(y.fulfilled, y.rejected) : l.push(y.fulfilled, y.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    let d, m = 0, w;
    if (!f) {
      const j = [lr.bind(this), void 0];
      for (j.unshift(...l), j.push(...p), w = j.length, d = Promise.resolve(n); m < w; )
        d = d.then(j[m++], j[m++]);
      return d;
    }
    w = l.length;
    let v = n;
    for (; m < w; ) {
      const j = l[m++], y = l[m++];
      try {
        v = j(v);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      d = lr.call(this, v);
    } catch (j) {
      return Promise.reject(j);
    }
    for (m = 0, w = p.length; m < w; )
      d = d.then(p[m++], p[m++]);
    return d;
  }
  getUri(t) {
    t = we(this.defaults, t);
    const n = Or(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Rr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Qe.prototype[t] = function(n, r) {
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
    return function(o, i, l) {
      return this.request(
        we(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: i
        })
      );
    };
  }
  Qe.prototype[t] = n(), t !== "query" && (Qe.prototype[t + "Form"] = n(!0));
});
const Ge = Qe;
class kt {
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
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new qe(o, i, l), n(r.reason));
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
      token: new kt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const No = kt;
function Co(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Oo(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const jt = {
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
Object.entries(jt).forEach(([e, t]) => {
  jt[t] = e;
});
const _o = jt;
function kr(e) {
  const t = new Ge(e), n = pr(Ge.prototype.request, t);
  return u.extend(n, Ge.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return kr(we(e, s));
  }, n;
}
const W = kr(_t);
W.Axios = Ge;
W.CanceledError = qe;
W.CancelToken = No;
W.isCancel = Nr;
W.VERSION = Tt;
W.toFormData = st;
W.AxiosError = R;
W.Cancel = W.CanceledError;
W.all = function(t) {
  return Promise.all(t);
};
W.spread = Co;
W.isAxiosError = Oo;
W.mergeConfig = we;
W.AxiosHeaders = ce;
W.formToJSON = (e) => Sr(u.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = Ar.getAdapter;
W.HttpStatusCode = _o;
W.default = W;
const To = W;
class Ao {
  constructor(t = {}) {
    He(this, "instance");
    He(this, "jsonPath");
    const n = t.baseUrl || window.location.origin, r = t.jsonPath || "/socket-docs/json";
    console.log(`[SocketDocs] ApiService initialized with: baseUrl=${n}, jsonPath=${r}`), this.instance = To.create({
      baseURL: n,
      timeout: 1e4
      // 10 second timeout
    }), this.jsonPath = r;
  }
  async fetchDocs() {
    console.log(`[SocketDocs] Fetching docs from: ${this.instance.defaults.baseURL}${this.jsonPath}`);
    const { data: t } = await this.instance.get(this.jsonPath);
    return console.log("[SocketDocs] Docs fetched successfully:", t), t;
  }
}
const ko = (e) => new Ao(e), Pr = "socket_docs_payloads", Po = (e) => {
  const t = {};
  if (!e || !e.gateways)
    return t;
  const n = localStorage.getItem(Pr), r = n ? JSON.parse(n) : {};
  return e.gateways.forEach((s) => {
    s.events.forEach((o) => {
      var l;
      const i = `${s.name}-${o.event}`;
      t[i] = r[i] || JSON.stringify(
        ((l = o.payloadSchema) == null ? void 0 : l.example) ?? {},
        null,
        2
      );
    });
  }), t;
}, Do = (e = {}) => {
  const [t, n] = te(null), [r, s] = te({}), [o, i] = te({}), [l, f] = te(!0), [p, d] = te(null), m = ur(() => ko(e), [e.baseUrl, e.jsonPath]);
  return Oe(() => {
    f(!0), m.fetchDocs().then((v) => {
      n(v), s(Po(v)), d(null);
    }).catch((v) => {
      console.error("Failed to fetch socket docs:", v), d(v instanceof Error ? v : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [m]), Oe(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Pr, JSON.stringify(r));
  }, [r]), {
    data: t,
    payloads: r,
    expanded: o,
    loading: l,
    error: p,
    setPayloads: s,
    toggleExpand: (v) => {
      i((j) => ({ ...j, [v]: !j[v] }));
    }
  };
}, be = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search"
}, Fo = (e) => {
  var x;
  const [t, n] = te(() => {
    const g = localStorage.getItem(be.GATEWAY_IDX);
    return g ? parseInt(g) : 0;
  }), [r, s] = te(() => {
    const g = localStorage.getItem(be.EVENT_IDX);
    return g ? parseInt(g) : 0;
  }), [o, i] = te(() => localStorage.getItem(be.SEARCH) || ""), [l, f] = te(!1), [p, d] = te(() => localStorage.getItem(be.THEME) || "dark");
  Oe(() => {
    localStorage.setItem(be.THEME, p), p === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [p]), Oe(() => {
    localStorage.setItem(be.GATEWAY_IDX, t.toString());
  }, [t]), Oe(() => {
    localStorage.setItem(be.EVENT_IDX, r.toString());
  }, [r]), Oe(() => {
    localStorage.setItem(be.SEARCH, o);
  }, [o]);
  const m = ur(() => e ? o ? e.gateways.map((g) => ({
    ...g,
    events: g.events.filter(
      (h) => h.event.toLowerCase().includes(o.toLowerCase()) || g.name.toLowerCase().includes(o.toLowerCase())
    )
  })).filter((g) => g.events.length > 0) : e.gateways : [], [e, o]), w = m[t], v = (x = w == null ? void 0 : w.events) == null ? void 0 : x[r];
  return {
    // ...
    activeGatewayIdx: t,
    setActiveGatewayIdx: n,
    activeEventIdx: r,
    setActiveEventIdx: s,
    searchQuery: o,
    setSearchQuery: i,
    isPaused: l,
    setIsPaused: f,
    theme: p,
    toggleTheme: () => {
      d((g) => g === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const g = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), h = URL.createObjectURL(g), C = document.createElement("a");
      C.href = h, C.download = "socket-docs-contract.json", C.click();
    },
    activeGateway: w,
    activeEvent: v,
    filteredGateways: m
  };
}, Je = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, Bo = () => {
  const e = $.useMemo(() => !window.location.pathname.includes("socket-docs"), []), [t, n] = $.useState(() => {
    var Y;
    const _ = ((Y = window.SOCKET_DOCS_CONFIG) == null ? void 0 : Y.api) || {}, I = localStorage.getItem(Je.API), F = I ? JSON.parse(I) : {}, O = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json",
      ..._
    };
    return F.baseUrl && (O.baseUrl = F.baseUrl), F.jsonPath && !_.jsonPath && (O.jsonPath = F.jsonPath), O;
  }), [r, s] = $.useState(() => {
    var Y;
    const _ = (Y = window.SOCKET_DOCS_CONFIG) == null ? void 0 : Y.socket, I = localStorage.getItem(Je.SOCKET), F = I ? JSON.parse(I) : null, O = {
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
    return _ ? { ...O, ...F, ..._ } : F || O;
  }), [o, i] = $.useState(!1), l = $.useMemo(() => e ? {
    ...t,
    baseUrl: window.location.origin
  } : t, [t, e]), { data: f, payloads: p, setPayloads: d, expanded: m, toggleExpand: w, loading: v, error: j } = Do(l);
  $.useEffect(() => {
    console.log("[SocketDocs] UI State:", { data: f, loading: v, error: j });
  }, [f, v, j]);
  const y = $.useMemo(() => ({
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
  }), [r]), { connected: x, logs: g, connect: h, disconnect: C, emitEvent: N, clearLogs: q } = Fn(y), ne = $.useMemo(() => {
    if (!f)
      return ["/"];
    const _ = /* @__PURE__ */ new Set();
    return f.gateways.forEach((I) => _.add(I.namespace)), Array.from(_);
  }, [f]), {
    activeGatewayIdx: fe,
    setActiveGatewayIdx: he,
    activeEventIdx: xe,
    setActiveEventIdx: oe,
    searchQuery: le,
    setSearchQuery: pe,
    isPaused: K,
    setIsPaused: z,
    theme: X,
    toggleTheme: ue,
    exportContract: je,
    activeGateway: A,
    activeEvent: L,
    filteredGateways: J
  } = Fo(f);
  $.useEffect(() => {
    if (A) {
      const _ = t.baseUrl.replace(/\/$/, ""), I = r.namespace === "/" ? A.namespace : r.namespace, F = `${_}${B(I)}`;
      if (r.autoConnect) {
        const O = setTimeout(() => {
          h(A.name, F, A.path);
        }, 300);
        return () => clearTimeout(O);
      }
    }
  }, [
    A == null ? void 0 : A.name,
    r.autoConnect,
    r.namespace,
    r.auth.token,
    t.baseUrl,
    h
  ]);
  const se = (_, I) => {
    localStorage.setItem(Je.API, JSON.stringify(_)), localStorage.setItem(Je.SOCKET, JSON.stringify(I)), n(_), s(I), i(!1), window.location.reload();
  }, ge = () => {
    if (!A)
      return;
    const _ = t.baseUrl.replace(/\/$/, ""), I = r.namespace === "/" ? A.namespace : r.namespace, F = `${_}${B(I)}`;
    x[A.name] ? C(A.name, I) : h(A.name, F, A.path);
  }, B = (_) => _.startsWith("/") ? _ : `/${_}`;
  if (v)
    return /* @__PURE__ */ a.jsx(Yt, {});
  if (j)
    return /* @__PURE__ */ a.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${X === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ a.jsx("p", { className: "text-text-muted", children: j.message }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => i(!0),
            className: "px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors",
            children: "Configurar API"
          }
        ),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors",
            children: "Reintentar"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx(
        Gt,
        {
          show: o,
          onClose: () => i(!1),
          onSave: se,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: X
        }
      )
    ] });
  if (!f)
    return /* @__PURE__ */ a.jsx(Yt, {});
  const Z = A && L ? `${A.name}-${L.event}` : "";
  return /* @__PURE__ */ a.jsxs("div", { className: `flex h-screen overflow-hidden font-sans text-text-primary ${X === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ a.jsx(
      Nn,
      {
        gateways: J,
        activeGatewayIdx: fe,
        activeEventIdx: xe,
        onSelectGateway: he,
        onSelectEvent: oe,
        searchQuery: le,
        onSearchChange: pe,
        onExport: je,
        expanded: m,
        onToggleExpand: w
      }
    ),
    /* @__PURE__ */ a.jsxs("main", { className: "flex flex-1 flex-col overflow-hidden bg-bg-secondary", children: [
      /* @__PURE__ */ a.jsx(
        Cn,
        {
          connected: A ? !!x[A.name] : !1,
          gatewayPath: A ? `${t.baseUrl.replace(/https?:\/\//, "")}${A.path}` : "ws://localhost:3000",
          namespace: r.namespace === "/" && A ? A.namespace : r.namespace,
          namespaces: ne,
          theme: X,
          onToggleTheme: ue,
          onOpenSettings: () => i(!0),
          onNamespaceChange: (_) => s((I) => ({ ...I, namespace: _ })),
          onConnect: ge
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 overflow-hidden p-4 md:p-6 gap-4 md:gap-6 flex-col lg:flex-row", children: A && L ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-[1.5] flex-col overflow-y-auto min-w-0 gap-6 custom-scrollbar pr-0 lg:pr-2 h-full", children: [
          /* @__PURE__ */ a.jsx(
            _n,
            {
              gatewayName: A.name,
              eventName: L.event,
              summary: L.summary ?? "",
              description: L.description ?? "",
              auth: L.auth
            }
          ),
          /* @__PURE__ */ a.jsx(
            Tn,
            {
              schema: L.payloadSchema,
              responseSchema: L.responseSchema
            }
          ),
          /* @__PURE__ */ a.jsx(
            An,
            {
              payload: p[Z] ?? "{}",
              schema: L.payloadSchema,
              responseSchema: L.responseSchema,
              emits: L.emits,
              onChange: (_) => d({ ...p, [Z]: _ }),
              onSend: () => N(A.name, L.event, p[Z] ?? "{}")
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 flex-col overflow-hidden border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 min-h-[300px] lg:min-h-0", children: /* @__PURE__ */ a.jsx(
          Pn,
          {
            connected: !!x[A.name],
            logs: g,
            onClear: q,
            isPaused: K,
            onTogglePause: () => z(!K)
          }
        ) })
      ] }) : /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) }),
      /* @__PURE__ */ a.jsx(
        Gt,
        {
          show: o,
          onClose: () => i(!1),
          onSave: se,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: X,
          activeGatewayNamespace: A == null ? void 0 : A.namespace
        }
      )
    ] })
  ] });
};
export {
  Bo as App
};
