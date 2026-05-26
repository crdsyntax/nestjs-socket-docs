var rn = Object.defineProperty;
var nn = (e, t, n) => t in e ? rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var He = (e, t, n) => (nn(e, typeof t != "symbol" ? t + "" : t, n), n);
import q, { useState as ne, useCallback as De, useMemo as ur, useEffect as Oe } from "react";
import { RefreshCw as sn, AlertCircle as on, ChevronRight as fr, ChevronLeft as an, Search as cn, LayoutGrid as ln, Download as dn, WifiOff as un, Wifi as fn, Sun as mn, Moon as pn, Settings as bn, Shield as hn, Key as xn, User as gn, Braces as Jt, ChevronDown as yn, Play as vn, RotateCcw as En } from "lucide-react";
import { io as wn } from "socket.io-client";
var gt = { exports: {} }, Le = {};
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
    return Le;
  Vt = 1;
  var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, m) {
    var d, p = {}, w = null, v = null;
    m !== void 0 && (w = "" + m), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (d in f)
      r.call(f, d) && !o.hasOwnProperty(d) && (p[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        p[d] === void 0 && (p[d] = f[d]);
    return { $$typeof: t, type: l, key: w, ref: v, props: p, _owner: s.current };
  }
  return Le.Fragment = n, Le.jsx = i, Le.jsxs = i, Le;
}
var Fe = {};
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
    var e = q, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), j = Symbol.iterator, g = "@@iterator";
    function h(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = j && c[j] || c[g];
      return typeof b == "function" ? b : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(c) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), N = 1; N < b; N++)
          E[N - 1] = arguments[N];
        C("error", c, E);
      }
    }
    function C(c, b, E) {
      {
        var N = x.ReactDebugCurrentFrame, D = N.getStackAddendum();
        D !== "" && (b += "%s", E = E.concat([D]));
        var L = E.map(function(k) {
          return String(k);
        });
        L.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, L);
      }
    }
    var y = !1, P = !1, B = !1, Y = !1, de = !1, xe;
    xe = Symbol.for("react.module.reference");
    function ae(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === o || de || c === s || c === m || c === d || Y || c === v || y || P || B || typeof c == "object" && c !== null && (c.$$typeof === w || c.$$typeof === p || c.$$typeof === i || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === xe || c.getModuleId !== void 0));
    }
    function ue(c, b, E) {
      var N = c.displayName;
      if (N)
        return N;
      var D = b.displayName || b.name || "";
      return D !== "" ? E + "(" + D + ")" : E;
    }
    function pe(c) {
      return c.displayName || "Context";
    }
    function G(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case m:
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
            return ue(c, c.render, "ForwardRef");
          case p:
            var N = c.displayName || null;
            return N !== null ? N : G(c.type) || "Memo";
          case w: {
            var D = c, L = D._payload, k = D._init;
            try {
              return G(k(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, Z = 0, me, je, A, I, V, oe, ge;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function te() {
      {
        if (Z === 0) {
          me = console.log, je = console.info, A = console.warn, I = console.error, V = console.group, oe = console.groupCollapsed, ge = console.groupEnd;
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
        Z++;
      }
    }
    function _() {
      {
        if (Z--, Z === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, c, {
              value: me
            }),
            info: H({}, c, {
              value: je
            }),
            warn: H({}, c, {
              value: A
            }),
            error: H({}, c, {
              value: I
            }),
            group: H({}, c, {
              value: V
            }),
            groupCollapsed: H({}, c, {
              value: oe
            }),
            groupEnd: H({}, c, {
              value: ge
            })
          });
        }
        Z < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, F;
    function O(c, b, E) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (D) {
            var N = D.stack.trim().match(/\n( *(at )?)/);
            F = N && N[1] || "";
          }
        return `
` + F + c;
      }
    }
    var X = !1, be;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      be = new Re();
    }
    function Ae(c, b) {
      if (!c || X)
        return "";
      {
        var E = be.get(c);
        if (E !== void 0)
          return E;
      }
      var N;
      X = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = U.current, U.current = null, te();
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
            } catch (re) {
              N = re;
            }
            Reflect.construct(c, [], k);
          } else {
            try {
              k.call();
            } catch (re) {
              N = re;
            }
            c.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            N = re;
          }
          c();
        }
      } catch (re) {
        if (re && N && typeof re.stack == "string") {
          for (var T = re.stack.split(`
`), ee = N.stack.split(`
`), z = T.length - 1, W = ee.length - 1; z >= 1 && W >= 0 && T[z] !== ee[W]; )
            W--;
          for (; z >= 1 && W >= 0; z--, W--)
            if (T[z] !== ee[W]) {
              if (z !== 1 || W !== 1)
                do
                  if (z--, W--, W < 0 || T[z] !== ee[W]) {
                    var ie = `
` + T[z].replace(" at new ", " at ");
                    return c.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", c.displayName)), typeof c == "function" && be.set(c, ie), ie;
                  }
                while (z >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        X = !1, U.current = L, _(), Error.prepareStackTrace = D;
      }
      var Ne = c ? c.displayName || c.name : "", ve = Ne ? O(Ne) : "";
      return typeof c == "function" && be.set(c, ve), ve;
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
        case m:
          return O("Suspense");
        case d:
          return O("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return at(c.render);
          case p:
            return Me(c.type, b, E);
          case w: {
            var N = c, D = N._payload, L = N._init;
            try {
              return Me(L(D), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Pt = {}, Dt = x.ReactDebugCurrentFrame;
    function ze(c) {
      if (c) {
        var b = c._owner, E = Me(c.type, c._source, b ? b.type : null);
        Dt.setExtraStackFrame(E);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Dr(c, b, E, N, D) {
      {
        var L = Function.call.bind(ke);
        for (var k in c)
          if (L(c, k)) {
            var T = void 0;
            try {
              if (typeof c[k] != "function") {
                var ee = Error((N || "React class") + ": " + E + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              T = c[k](b, k, N, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              T = z;
            }
            T && !(T instanceof Error) && (ze(D), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", E, k, typeof T), ze(null)), T instanceof Error && !(T.message in Pt) && (Pt[T.message] = !0, ze(D), R("Failed %s type: %s", E, T.message), ze(null));
          }
      }
    }
    var Lr = Array.isArray;
    function it(c) {
      return Lr(c);
    }
    function Fr(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E;
      }
    }
    function Ir(c) {
      try {
        return Lt(c), !1;
      } catch {
        return !0;
      }
    }
    function Lt(c) {
      return "" + c;
    }
    function Ft(c) {
      if (Ir(c))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(c)), Lt(c);
    }
    var Pe = x.ReactCurrentOwner, Ur = {
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
        var E = G(Pe.current.type);
        ct[E] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Pe.current.type), c.ref), ct[E] = !0);
      }
    }
    function Mr(c, b) {
      {
        var E = function() {
          It || (It = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
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
          Ut || (Ut = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Hr = function(c, b, E, N, D, L, k) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: E,
        props: k,
        // Record the component responsible for creating this element.
        _owner: L
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
    function Wr(c, b, E, N, D) {
      {
        var L, k = {}, T = null, ee = null;
        E !== void 0 && (Ft(E), T = "" + E), Br(b) && (Ft(b.key), T = "" + b.key), $r(b) && (ee = b.ref, qr(b, D));
        for (L in b)
          ke.call(b, L) && !Ur.hasOwnProperty(L) && (k[L] = b[L]);
        if (c && c.defaultProps) {
          var z = c.defaultProps;
          for (L in z)
            k[L] === void 0 && (k[L] = z[L]);
        }
        if (T || ee) {
          var W = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          T && Mr(k, W), ee && zr(k, W);
        }
        return Hr(c, T, ee, D, N, Pe.current, k);
      }
    }
    var lt = x.ReactCurrentOwner, $t = x.ReactDebugCurrentFrame;
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
          var c = G(lt.current.type);
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
        var N = "";
        c && c._owner && c._owner !== lt.current && (N = " It was passed a child from " + G(c._owner.type) + "."), Se(c), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, N), Se(null);
      }
    }
    function zt(c, b) {
      {
        if (typeof c != "object")
          return;
        if (it(c))
          for (var E = 0; E < c.length; E++) {
            var N = c[E];
            ut(N) && Mt(N, b);
          }
        else if (ut(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var D = h(c);
          if (typeof D == "function" && D !== c.entries)
            for (var L = D.call(c), k; !(k = L.next()).done; )
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
        b.$$typeof === p))
          E = b.propTypes;
        else
          return;
        if (E) {
          var N = G(b);
          Dr(E, c.props, "prop", N, c);
        } else if (b.PropTypes !== void 0 && !dt) {
          dt = !0;
          var D = G(b);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(c) {
      {
        for (var b = Object.keys(c.props), E = 0; E < b.length; E++) {
          var N = b[E];
          if (N !== "children" && N !== "key") {
            Se(c), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Se(null);
            break;
          }
        }
        c.ref !== null && (Se(c), R("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var Ht = {};
    function Wt(c, b, E, N, D, L) {
      {
        var k = ae(c);
        if (!k) {
          var T = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Jr(D);
          ee ? T += ee : T += Bt();
          var z;
          c === null ? z = "null" : it(c) ? z = "array" : c !== void 0 && c.$$typeof === t ? (z = "<" + (G(c.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : z = typeof c, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, T);
        }
        var W = Wr(c, b, E, D, L);
        if (W == null)
          return W;
        if (k) {
          var ie = b.children;
          if (ie !== void 0)
            if (N)
              if (it(ie)) {
                for (var Ne = 0; Ne < ie.length; Ne++)
                  zt(ie[Ne], c);
                Object.freeze && Object.freeze(ie);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(ie, c);
        }
        if (ke.call(b, "key")) {
          var ve = G(c), re = Object.keys(b).filter(function(tn) {
            return tn !== "key";
          }), ft = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ht[ve + ft]) {
            var en = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, ve, en, ve), Ht[ve + ft] = !0;
          }
        }
        return c === r ? Yr(W) : Kr(W), W;
      }
    }
    function Gr(c, b, E) {
      return Wt(c, b, E, !0);
    }
    function Xr(c, b, E) {
      return Wt(c, b, E, !1);
    }
    var Qr = Xr, Zr = Gr;
    Fe.Fragment = r, Fe.jsx = Qr, Fe.jsxs = Zr;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? gt.exports = jn() : gt.exports = Rn();
var a = gt.exports;
const Yt = () => {
  const [e, t] = q.useState(!1);
  return q.useEffect(() => {
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
  const m = o[l.name] !== !1;
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
          /* @__PURE__ */ a.jsxs("span", { className: `text-[11px] text-text-muted transition-transform ${m ? "" : "-rotate-90"}`, children: [
            l.namespace,
            " ▾"
          ] })
        ]
      }
    ),
    m && /* @__PURE__ */ a.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: l.events.map((d, p) => {
      const w = t === f && n === p;
      return /* @__PURE__ */ a.jsxs(
        "li",
        {
          onClick: (v) => {
            v.stopPropagation(), r(f), s(p);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${w ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
            /* @__PURE__ */ a.jsx("span", { className: "truncate", children: d.event })
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
  onToggleExpand: m
}) => {
  const [d, p] = ne(!1);
  return /* @__PURE__ */ a.jsxs("aside", { className: `relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${d ? "w-16 p-2" : "w-[300px] p-4"}`, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => p(!d),
        className: "absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors",
        children: d ? /* @__PURE__ */ a.jsx(fr, { size: 14 }) : /* @__PURE__ */ a.jsx(an, { size: 14 })
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: `mb-6 flex items-center ${d ? "justify-center" : "gap-2"}`, children: [
      /* @__PURE__ */ a.jsx("span", { className: "text-xl text-brand-emerald shrink-0", children: "■" }),
      !d && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx("span", { className: "text-base font-semibold truncate", children: $.common.socketDocs }),
        /* @__PURE__ */ a.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: $.common.v1 })
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "relative mb-6", children: d ? /* @__PURE__ */ a.jsx("div", { className: "flex justify-center text-text-muted cursor-pointer hover:text-text-primary", onClick: () => p(!1), children: /* @__PURE__ */ a.jsx(cn, { size: 18 }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "text",
          className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
          placeholder: $.common.searchPlaceholder,
          value: o,
          onChange: (w) => i(w.target.value)
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
    ] }) }),
    !d && /* @__PURE__ */ a.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1", children: [
      /* @__PURE__ */ a.jsx("span", { children: $.common.gateways }),
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
        onToggleExpand: m
      }
    ) }),
    /* @__PURE__ */ a.jsxs("div", { className: `mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${d ? "flex flex-col items-center gap-4" : ""}`, children: [
      /* @__PURE__ */ a.jsxs(
        "button",
        {
          onClick: l,
          title: $.common.exportContract,
          className: `flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${d ? "h-9 w-9" : "mb-3 w-full py-2"}`,
          children: [
            /* @__PURE__ */ a.jsx(dn, { size: 14 }),
            !d && $.common.exportContract
          ]
        }
      ),
      !d && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("p", { children: [
          $.common.socketDocs,
          " ",
          $.common.v1
        ] }),
        /* @__PURE__ */ a.jsx("p", { children: $.common.madeWith })
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
    /* @__PURE__ */ a.jsx("span", { className: "font-medium", children: e ? $.common.connected : $.common.disconnected }),
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
      onChange: (m) => l(m.target.value),
      className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors",
      children: r.map((m) => /* @__PURE__ */ a.jsx("option", { value: m, children: m }, m))
    }
  ),
  /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2 border-l border-border-subtle pl-3", children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: o,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: s === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        children: s === "dark" ? /* @__PURE__ */ a.jsx(mn, { size: 14 }) : /* @__PURE__ */ a.jsx(pn, { size: 14 })
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
    /* @__PURE__ */ a.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: $.event.type }),
    /* @__PURE__ */ a.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ a.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ a.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), Tn = ({ schema: e, responseSchema: t }) => {
  const [n, r] = q.useState("request"), [s, o] = q.useState(!1), i = (m) => JSON.stringify(m, null, 2), l = !!e && (Object.keys((e == null ? void 0 : e.properties) || {}).length > 0 || !!e.type), f = !!t && (Object.keys((t == null ? void 0 : t.properties) || {}).length > 0 || !!t.type);
  return !l && !f ? /* @__PURE__ */ a.jsxs("div", { className: "mb-4 flex items-center gap-2 text-text-secondary italic", children: [
    /* @__PURE__ */ a.jsx(Jt, { size: 14, className: "opacity-40" }),
    /* @__PURE__ */ a.jsx("span", { className: "text-[12px]", children: $.event.noParameters })
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
            /* @__PURE__ */ a.jsx("span", { className: "font-bold uppercase tracking-wider text-text-primary text-[11px]", children: $.event.parameters })
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
  const [i, l] = ne(r || "");
  return q.useEffect(() => {
    l(r || "");
  }, [r]), /* @__PURE__ */ a.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ a.jsxs("span", { className: "text-[13px] font-semibold", children: [
          $.event.requestBody,
          " ",
          /* @__PURE__ */ a.jsx("span", { className: "text-[11px] text-red-400", children: $.event.required })
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
          children: $.event.exampleValue
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
              $.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ a.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ a.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          $.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, kn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ a.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ a.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ a.jsx("div", { className: "space-y-2 p-4", children: e.map((t) => /* @__PURE__ */ a.jsxs(
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
      t.data != null && /* @__PURE__ */ a.jsx("pre", { className: "whitespace-pre-wrap break-all overflow-x-hidden rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
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
  const [o, i] = q.useState("all"), l = q.useMemo(() => o === "all" ? t : o === "emits" ? t.filter((f) => f.type === "sent") : o === "listeners" ? t.filter((f) => f.type === "received") : t, [t, o]);
  return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-shrink-0 items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ a.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ a.jsx("span", { className: "text-[13px] font-semibold", children: $.realtime.title })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.all
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.emits
            }
          ),
          /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: () => i("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${o === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: $.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ a.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ a.jsx(En, { size: 12 }),
          " ",
          $.realtime.clear
        ] }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: s,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : $.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "border-t border-border-subtle", children: /* @__PURE__ */ a.jsx(kn, { logs: r ? [] : l, onClear: n }) })
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
  var R, C;
  const [f, m] = q.useState(r), [d, p] = q.useState(s), [w, v] = q.useState(!1), [j, g] = q.useState(null);
  q.useEffect(() => {
    e && (m(r), p(s), g(null));
  }, [e, r, s]);
  const h = (y) => y.startsWith("/") ? y : `/${y}`, x = async () => {
    v(!0), g(null);
    const y = f.baseUrl.replace(/\/$/, ""), P = d.namespace === "/" ? l ?? "/" : d.namespace;
    try {
      const { io: B } = await import("socket.io-client"), Y = B(`${y}${h(P)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      });
      Y.on("connect", () => {
        g({ success: !0, message: "¡Conexión exitosa!" }), v(!1), Y.disconnect();
      }), Y.on("connect_error", (de) => {
        g({ success: !1, message: `Error: ${de.message}` }), v(!1), Y.disconnect();
      });
    } catch (B) {
      g({ success: !1, message: `Error: ${B instanceof Error ? B.message : "Error desconocido"}` }), v(!1);
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
                onChange: (y) => m({ ...f, baseUrl: y.target.value }),
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
                onChange: (y) => m({ ...f, jsonPath: y.target.value }),
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
                  onChange: (y) => p({
                    ...d,
                    auth: { ...d.auth, token: y.target.value }
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
                  onChange: (y) => p({
                    ...d,
                    auth: { ...d.auth, userId: y.target.value }
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
                  onChange: (y) => p({ ...d, namespace: y.target.value }),
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
                  onChange: (y) => p({ ...d, path: y.target.value }),
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
                  onChange: (y) => {
                    const P = y.target.value;
                    let B = ["polling", "websocket"];
                    P === "websocket" && (B = ["websocket"]), P === "polling" && (B = ["polling"]), p({ ...d, transports: B });
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
                  onChange: (y) => p({ ...d, reconnection: y.target.checked }),
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
                  onChange: (y) => p({ ...d, autoConnect: y.target.checked }),
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
                  onChange: (y) => p({ ...d, reconnectionAttempts: y.target.value === "0" ? 1 / 0 : parseInt(y.target.value) }),
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
                  onChange: (y) => p({ ...d, timeout: parseInt(y.target.value) }),
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
                  onChange: (y) => p({ ...d, reconnectionDelay: parseInt(y.target.value) }),
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
                  onChange: (y) => p({ ...d, reconnectionDelayMax: parseInt(y.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a.jsxs("section", { children: [
          /* @__PURE__ */ a.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reintentos de Eventos" }),
          /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intentos" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: ((R = d.eventRetries) == null ? void 0 : R.attempts) ?? 0,
                  onChange: (y) => {
                    var P;
                    return p({
                      ...d,
                      eventRetries: {
                        attempts: parseInt(y.target.value),
                        delay: ((P = d.eventRetries) == null ? void 0 : P.delay) ?? 1e3
                      }
                    });
                  },
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "0 = Sin reintentos"
                }
              )
            ] }),
            /* @__PURE__ */ a.jsxs("div", { children: [
              /* @__PURE__ */ a.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intervalo (ms)" }),
              /* @__PURE__ */ a.jsx(
                "input",
                {
                  type: "number",
                  value: ((C = d.eventRetries) == null ? void 0 : C.delay) ?? 1e3,
                  onChange: (y) => {
                    var P;
                    return p({
                      ...d,
                      eventRetries: {
                        attempts: ((P = d.eventRetries) == null ? void 0 : P.attempts) ?? 0,
                        delay: parseInt(y.target.value)
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
    /* @__PURE__ */ a.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: x,
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
const mt = new Dn(), Ln = (e = {}) => {
  const [t, n] = ne({}), [r, s] = ne([]), o = De((d, p, w) => {
    s(
      (v) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: d,
          message: p,
          data: w
        },
        ...v
      ].slice(0, 50)
    );
  }, []), i = De((d, p, w) => {
    const v = {
      ...e,
      options: {
        path: w ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    mt.connect(d, p, v, {
      onConnect: () => {
        n((j) => ({ ...j, [d]: !0 })), o("received", `Connected to ${p}`);
      },
      onDisconnect: (j) => {
        n((g) => ({ ...g, [d]: !1 })), o("error", `Disconnected from ${p} (${j})`);
      },
      onConnectError: (j) => {
        console.error(`[SocketDocs] Connection error for ${d}:`, j), n((g) => ({ ...g, [d]: !1 })), o("error", `Connection Error: ${j.message}`);
      },
      onAny: (j, ...g) => {
        o("received", `Event: ${j}`, g);
      }
    });
  }, [e, o]), l = De((d, p) => {
    mt.disconnect(d), n((w) => ({ ...w, [d]: !1 })), o("error", `Disconnected from ${p || d}`);
  }, [o]), f = De((d, p, w) => {
    var h, x;
    const v = ((h = e.eventRetries) == null ? void 0 : h.attempts) ?? 0, j = ((x = e.eventRetries) == null ? void 0 : x.delay) ?? 1e3, g = (R) => {
      var C;
      try {
        const y = JSON.parse(w), P = R > 0 ? ` (Reintento ${R}/${v})` : "";
        o("sent", `Emitting ${p}${P}`, y);
        let B = !1;
        const Y = setTimeout(() => {
          !B && R < v ? (o("error", `Timeout esperando ACK para ${p}. Reintentando en ${j}ms...`), setTimeout(() => g(R + 1), j)) : !B && v > 0 && o("error", `Fallo final: No se recibió ACK para ${p} después de ${v} reintentos.`);
        }, ((C = e.options) == null ? void 0 : C.timeout) ?? 2e4);
        mt.emit(d, p, y, (de) => {
          B = !0, clearTimeout(Y), o("received", `ACK for ${p}`, de);
        });
      } catch (y) {
        const P = y instanceof Error ? y.message : "Invalid JSON";
        console.error(`Emit error: ${P}`), o("error", `Error de emisión: ${P}`);
      }
    };
    g(0);
  }, [e, o]), m = De(() => {
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
function mr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fn } = Object.prototype, { getPrototypeOf: Ze } = Object, { iterator: et, toStringTag: pr } = Symbol, tt = ((e) => (t) => {
  const n = Fn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), fe = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: Te } = Array, _e = rt("undefined");
function Ue(e) {
  return e !== null && !_e(e) && e.constructor !== null && !_e(e.constructor) && se(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const br = fe("ArrayBuffer");
function In(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && br(e.buffer), t;
}
const Un = rt("string"), se = rt("function"), hr = rt("number"), $e = (e) => e !== null && typeof e == "object", $n = (e) => e === !0 || e === !1, Ve = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = Ze(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(pr in e) && !(et in e);
}, Bn = (e) => {
  if (!$e(e) || Ue(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qn = fe("Date"), Mn = fe("File"), zn = (e) => !!(e && typeof e.uri < "u"), Hn = (e) => e && typeof e.getParts < "u", Wn = fe("Blob"), Jn = fe("FileList"), Vn = (e) => $e(e) && se(e.pipe);
function Kn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Xt = Kn(), Qt = typeof Xt.FormData < "u" ? Xt.FormData : void 0, Yn = (e) => {
  if (!e)
    return !1;
  if (Qt && e instanceof Qt)
    return !0;
  const t = Ze(e);
  if (!t || t === Object.prototype || !se(e.append))
    return !1;
  const n = tt(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && se(e.toString) && e.toString() === "[object FormData]";
}, Gn = fe("URLSearchParams"), [Xn, Qn, Zn, es] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(fe), ts = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
    n && se(s) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: mr(s, n),
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
}, us = fe("HTMLFormElement"), fs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), vt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ms = fe("RegExp"), yr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Be(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, ps = (e) => {
  yr(e, (t, n) => {
    if (se(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (se(r)) {
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
  return !!(e && se(e.append) && e[pr] === "FormData" && e[et]);
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
}, vs = fe("AsyncFunction"), Es = (e) => e && ($e(e) || se(e)) && se(e.then) && se(e.catch), vr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ee.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === Ee && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ee.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", se(Ee.postMessage)), ws = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ee) : typeof process < "u" && process.nextTick || vr, js = (e) => e != null && se(e[et]), u = {
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
  isRegExp: ms,
  isFunction: se,
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
  kindOfTest: fe,
  endsWith: as,
  toArray: is,
  forEachEntry: ls,
  matchAll: ds,
  isHTMLForm: us,
  hasOwnProperty: vt,
  hasOwnProp: vt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yr,
  freezeMethods: ps,
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
function pt(e, t, n, r, s) {
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
    function o(l, f, m) {
      const d = Ie(f);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const p = u.findKey(s, d);
      (!p || s[p] === void 0 || m === !0 || m === void 0 && s[p] !== !1) && (s[p || f] = Ke(l));
    }
    const i = (l, f) => u.forEach(l, (m, d) => o(m, d, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (u.isString(t) && (t = t.trim()) && !ks(t))
      i(Ss(t), n);
    else if (u.isObject(t) && u.isIterable(t)) {
      let l = {}, f, m;
      for (const d of t) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        l[m = d[0]] = (f = l[m]) ? u.isArray(f) ? [...f, d[1]] : [f, d[1]] : d[1];
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
      return !!(r && this[r] !== void 0 && (!n || pt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Ie(i), i) {
        const l = u.findKey(r, i);
        l && (!n || pt(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return u.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || pt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
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
const le = nt, Ls = "[REDACTED ****]";
function Fs(e) {
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
    o instanceof le && (o = o.toJSON()), r.push(o);
    let i;
    if (u.isArray(o))
      i = [], o.forEach((l, f) => {
        const m = s(l);
        u.isUndefined(m) || (i[f] = m);
      });
    else {
      if (!u.isPlainObject(o) && Fs(o))
        return r.pop(), o;
      i = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(o)) {
        const m = n.has(l.toLowerCase()) ? Ls : s(f);
        u.isUndefined(m) || (i[l] = m);
      }
    }
    return r.pop(), i;
  };
  return s(e);
}
class K extends Error {
  static from(t, n, r, s, o, i) {
    const l = new K(t.message, n || t.code, r, s, o);
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
K.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
K.ERR_BAD_OPTION = "ERR_BAD_OPTION";
K.ECONNABORTED = "ECONNABORTED";
K.ETIMEDOUT = "ETIMEDOUT";
K.ECONNREFUSED = "ECONNREFUSED";
K.ERR_NETWORK = "ERR_NETWORK";
K.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
K.ERR_DEPRECATED = "ERR_DEPRECATED";
K.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
K.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
K.ERR_CANCELED = "ERR_CANCELED";
K.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
K.ERR_INVALID_URL = "ERR_INVALID_URL";
K.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const S = K, Us = null;
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
    function(h, x) {
      return !u.isUndefined(x[h]);
    }
  );
  const r = n.metaTokens, s = n.visitor || p, o = n.dots, i = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, m = l && u.isSpecCompliantForm(t);
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
  function p(g, h, x) {
    let R = g;
    if (u.isReactNative(t) && u.isReactNativeBlob(g))
      return t.append(bt(x, h, o), d(g)), !1;
    if (g && !x && typeof g == "object") {
      if (u.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (u.isArray(g) && $s(g) || (u.isFileList(g) || u.endsWith(h, "[]")) && (R = u.toArray(g)))
        return h = wr(h), R.forEach(function(y, P) {
          !(u.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([h], P, o) : i === null ? h : h + "[]",
            d(y)
          );
        }), !1;
    }
    return Et(g) ? !0 : (t.append(bt(x, h, o), d(g)), !1);
  }
  const w = [], v = Object.assign(Bs, {
    defaultVisitor: p,
    convertValue: d,
    isVisitable: Et
  });
  function j(g, h, x = 0) {
    if (!u.isUndefined(g)) {
      if (x > f)
        throw new S(
          "Object is too deeply nested (" + x + " levels). Max depth: " + f,
          S.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (w.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      w.push(g), u.forEach(g, function(C, y) {
        (!(u.isUndefined(C) || C === null) && s.call(t, C, u.isString(y) ? y.trim() : y, h, v)) === !0 && j(C, h ? h.concat(y) : [y], x + 1);
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
}, Symbol.toStringTag, { value: "Module" })), Q = {
  ...Gs,
  ...Js
};
function Xs(e, t) {
  return st(e, new Q.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return Q.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
          const m = Ce(this, "env"), d = m && m.FormData;
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
            throw f.name === "SyntaxError" ? S.from(f, S.ERR_BAD_RESPONSE, this, null, Ce(this, "response")) : f;
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
    FormData: Q.classes.FormData,
    Blob: Q.classes.Blob
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
  const n = this || _t, r = t || n, s = le.from(r.headers);
  let o = r.data;
  return u.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Nr(e) {
  return !!(e && e.__CANCEL__);
}
class to extends S {
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
const qe = to;
function Cr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? S.ERR_BAD_REQUEST : S.ERR_BAD_RESPONSE,
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
    const m = Date.now(), d = r[o];
    i || (i = m), n[s] = f, r[s] = m;
    let p = o, w = 0;
    for (; p !== s; )
      w += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), m - i < t)
      return;
    const v = d && m - d;
    return v ? Math.round(w * 1e3 / v) : void 0;
  };
}
function so(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (m, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...m);
  };
  return [(...m) => {
    const d = Date.now(), p = d - n;
    p >= r ? i(m, d) : (s = m, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const Xe = (e, t, n = 3) => {
  let r = 0;
  const s = no(50, 250);
  return so((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = l != null ? Math.min(i, l) : i, m = Math.max(0, f - r), d = s(m);
    r = Math.max(r, f);
    const p = {
      loaded: f,
      total: l,
      progress: l ? f / l : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && l ? (l - f) / d : void 0,
      event: o,
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
}, nr = (e) => (...t) => u.asap(() => e(...t)), oo = Q.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Q.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Q.origin),
  Q.navigator && /(msie|trident)/i.test(Q.navigator.userAgent)
) : () => !0, ao = Q.hasStandardBrowserEnv ? (
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
const sr = (e) => e instanceof le ? { ...e } : e;
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
  function r(m, d, p, w) {
    return u.isPlainObject(m) && u.isPlainObject(d) ? u.merge.call({ caseless: w }, m, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(m, d, p, w) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(m))
        return r(void 0, m, p, w);
    } else
      return r(m, d, p, w);
  }
  function o(m, d) {
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
    headers: (m, d, p) => s(sr(m), sr(d), p, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const p = u.hasOwnProp(f, d) ? f[d] : s, w = u.hasOwnProp(e, d) ? e[d] : void 0, v = u.hasOwnProp(t, d) ? t[d] : void 0, j = p(w, v, d);
    u.isUndefined(j) && p !== l || (n[d] = j);
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
  const f = n("auth"), m = n("baseURL"), d = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = l = le.from(l), t.url = Rr(
    Or(m, p, d),
    e.params,
    e.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? fo(f.password) : ""))
  ), u.isFormData(r) && (Q.hasStandardBrowserEnv || Q.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && uo(l, r.getHeaders(), n("formDataHeaderPolicy"))), Q.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(t)), s === !0 || s == null && oo(t.url))) {
    const v = o && i && ao.read(i);
    v && l.set(o, v);
  }
  return t;
}, mo = typeof XMLHttpRequest < "u", po = mo && function(e) {
  return new Promise(function(n, r) {
    const s = _r(e);
    let o = s.data;
    const i = le.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: m } = s, d, p, w, v, j;
    function g() {
      v && v(), j && j(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function x() {
      if (!h)
        return;
      const C = le.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), P = {
        data: !l || l === "text" || l === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: C,
        config: e,
        request: h
      };
      Cr(
        function(Y) {
          n(Y), g();
        },
        function(Y) {
          r(Y), g();
        },
        P
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = x : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(x);
    }, h.onabort = function() {
      h && (r(new S("Request aborted", S.ECONNABORTED, e, h)), g(), h = null);
    }, h.onerror = function(y) {
      const P = y && y.message ? y.message : "Network Error", B = new S(P, S.ERR_NETWORK, e, h);
      B.event = y || null, r(B), g(), h = null;
    }, h.ontimeout = function() {
      let y = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || Nt;
      s.timeoutErrorMessage && (y = s.timeoutErrorMessage), r(
        new S(
          y,
          P.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          h
        )
      ), g(), h = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in h && u.forEach(Er(i), function(y, P) {
      h.setRequestHeader(P, y);
    }), u.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), l && l !== "json" && (h.responseType = s.responseType), m && ([w, j] = Xe(m, !0), h.addEventListener("progress", w)), f && h.upload && ([p, v] = Xe(f), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", v)), (s.cancelToken || s.signal) && (d = (C) => {
      h && (r(!C || C.type ? new qe(null, e, h) : C), h.abort(), g(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const R = ro(s.url);
    if (R && !Q.protocols.includes(R)) {
      r(
        new S(
          "Unsupported protocol " + R + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(o || null);
  });
}, bo = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(f) {
    if (!r) {
      r = !0, i();
      const m = f instanceof Error ? f : this.reason;
      n.abort(
        m instanceof S ? m : new qe(m instanceof Error ? m.message : m)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
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
          const { done: m, value: d } = await s.next();
          if (m) {
            l(), f.close();
            return;
          }
          let p = d.byteLength;
          if (n) {
            let w = o += p;
            n(w);
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
        const j = r.charCodeAt(v + 1), g = r.charCodeAt(v + 2);
        (j >= 48 && j <= 57 || j >= 65 && j <= 70 || j >= 97 && j <= 102) && (g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102) && (i -= 2, v += 2);
      }
    let f = 0, m = l - 1;
    const d = (v) => v >= 2 && r.charCodeAt(v - 2) === 37 && // '%'
    r.charCodeAt(v - 1) === 51 && // '3'
    (r.charCodeAt(v) === 68 || r.charCodeAt(v) === 100);
    m >= 0 && (r.charCodeAt(m) === 61 ? (f++, m--) : d(m) && (f++, m -= 3)), f === 1 && m >= 0 && (r.charCodeAt(m) === 61 || d(m)) && f++;
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
      const m = r.charCodeAt(i + 1);
      m >= 56320 && m <= 57343 ? (o += 4, i++) : o += 3;
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
  const { fetch: s, Request: o, Response: i } = e, l = s ? We(s) : typeof fetch == "function", f = We(o), m = We(i);
  if (!l)
    return !1;
  const d = l && We(n), p = l && (typeof r == "function" ? ((x) => (R) => x.encode(R))(new r()) : async (x) => new Uint8Array(await new o(x).arrayBuffer())), w = f && d && ir(() => {
    let x = !1;
    const R = new o(Q.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return x = !0, "half";
      }
    }), C = R.headers.has("Content-Type");
    return R.body != null && R.body.cancel(), x && !C;
  }), v = m && d && ir(() => u.isReadableStream(new i("").body)), j = {
    stream: v && ((x) => x.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((x) => {
    !j[x] && (j[x] = (R, C) => {
      let y = R && R[x];
      if (y)
        return y.call(R);
      throw new S(
        `Response type '${x}' is not supported`,
        S.ERR_NOT_SUPPORT,
        C
      );
    });
  });
  const g = async (x) => {
    if (x == null)
      return 0;
    if (u.isBlob(x))
      return x.size;
    if (u.isSpecCompliantForm(x))
      return (await new o(Q.origin, {
        method: "POST",
        body: x
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(x) || u.isArrayBuffer(x))
      return x.byteLength;
    if (u.isURLSearchParams(x) && (x = x + ""), u.isString(x))
      return (await p(x)).byteLength;
  }, h = async (x, R) => {
    const C = u.toFiniteNumber(x.getContentLength());
    return C ?? g(R);
  };
  return async (x) => {
    let {
      url: R,
      method: C,
      data: y,
      signal: P,
      cancelToken: B,
      timeout: Y,
      onDownloadProgress: de,
      onUploadProgress: xe,
      responseType: ae,
      headers: ue,
      withCredentials: pe = "same-origin",
      fetchOptions: G,
      maxContentLength: H,
      maxBodyLength: Z
    } = _r(x);
    const me = u.isNumber(H) && H > -1, je = u.isNumber(Z) && Z > -1;
    let A = s || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let I = ho(
      [P, B && B.toAbortSignal()],
      Y
    ), V = null;
    const oe = I && I.unsubscribe && (() => {
      I.unsubscribe();
    });
    let ge;
    try {
      if (me && typeof R == "string" && R.startsWith("data:") && vo(R) > H)
        throw new S(
          "maxContentLength size of " + H + " exceeded",
          S.ERR_BAD_RESPONSE,
          x,
          V
        );
      if (je && C !== "get" && C !== "head") {
        const O = await h(ue, y);
        if (typeof O == "number" && isFinite(O) && O > Z)
          throw new S(
            "Request body larger than maxBodyLength limit",
            S.ERR_BAD_REQUEST,
            x,
            V
          );
      }
      if (xe && w && C !== "get" && C !== "head" && (ge = await h(ue, y)) !== 0) {
        let O = new o(R, {
          method: "POST",
          body: y,
          duplex: "half"
        }), X;
        if (u.isFormData(y) && (X = O.headers.get("content-type")) && ue.setContentType(X), O.body) {
          const [be, Re] = rr(
            ge,
            Xe(nr(xe))
          );
          y = or(O.body, ar, be, Re);
        }
      }
      u.isString(pe) || (pe = pe ? "include" : "omit");
      const M = f && "credentials" in o.prototype;
      if (u.isFormData(y)) {
        const O = ue.getContentType();
        O && /^multipart\/form-data/i.test(O) && !/boundary=/i.test(O) && ue.delete("content-type");
      }
      ue.set("User-Agent", "axios/" + Tt, !1);
      const te = {
        ...G,
        signal: I,
        method: C.toUpperCase(),
        headers: Er(ue.normalize()),
        body: y,
        duplex: "half",
        credentials: M ? pe : void 0
      };
      V = f && new o(R, te);
      let _ = await (f ? A(V, G) : A(R, te));
      if (me) {
        const O = u.toFiniteNumber(_.headers.get("content-length"));
        if (O != null && O > H)
          throw new S(
            "maxContentLength size of " + H + " exceeded",
            S.ERR_BAD_RESPONSE,
            x,
            V
          );
      }
      const U = v && (ae === "stream" || ae === "response");
      if (v && _.body && (de || me || U && oe)) {
        const O = {};
        ["status", "statusText", "headers"].forEach((ye) => {
          O[ye] = _[ye];
        });
        const X = u.toFiniteNumber(_.headers.get("content-length")), [be, Re] = de && rr(
          X,
          Xe(nr(de), !0)
        ) || [];
        let Ae = 0;
        const at = (ye) => {
          if (me && (Ae = ye, Ae > H))
            throw new S(
              "maxContentLength size of " + H + " exceeded",
              S.ERR_BAD_RESPONSE,
              x,
              V
            );
          be && be(ye);
        };
        _ = new i(
          or(_.body, ar, at, () => {
            Re && Re(), oe && oe();
          }),
          O
        );
      }
      ae = ae || "text";
      let F = await j[u.findKey(j, ae) || "text"](
        _,
        x
      );
      if (me && !v && !U) {
        let O;
        if (F != null && (typeof F.byteLength == "number" ? O = F.byteLength : typeof F.size == "number" ? O = F.size : typeof F == "string" && (O = typeof r == "function" ? new r().encode(F).byteLength : F.length)), typeof O == "number" && O > H)
          throw new S(
            "maxContentLength size of " + H + " exceeded",
            S.ERR_BAD_RESPONSE,
            x,
            V
          );
      }
      return !U && oe && oe(), await new Promise((O, X) => {
        Cr(O, X, {
          data: F,
          headers: le.from(_.headers),
          status: _.status,
          statusText: _.statusText,
          config: x,
          request: V
        });
      });
    } catch (M) {
      if (oe && oe(), I && I.aborted && I.reason instanceof S) {
        const te = I.reason;
        throw te.config = x, V && (te.request = V), M !== te && (te.cause = M), te;
      }
      throw M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          x,
          V,
          M && M.response
        ),
        {
          cause: M.cause || M
        }
      ) : S.from(M, M && M.code, x, V, M && M.response);
    }
  };
}, wo = /* @__PURE__ */ new Map(), Tr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let i = o.length, l = i, f, m, d = wo;
  for (; l--; )
    f = o[l], m = d.get(f), m === void 0 && d.set(f, m = l ? /* @__PURE__ */ new Map() : Eo(t)), d = m;
  return m;
};
Tr();
const At = {
  http: Us,
  xhr: po,
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
      throw new S(`Unknown adapter '${l}'`);
    if (s && (u.isFunction(s) || (s = s.get(t))))
      break;
    o[l || "#" + i] = s;
  }
  if (!s) {
    const i = Object.entries(o).map(
      ([f, m]) => `adapter ${f} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(cr).join(`
`) : " " + cr(i[0]) : "as no adapter specified";
    throw new S(
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
  return xt(e), e.headers = le.from(e.headers), e.data = ht.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ar.getAdapter(e.adapter || _t.adapter, e)(e).then(
    function(r) {
      xt(e), e.response = r;
      try {
        r.data = ht.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = le.from(r.headers), r;
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
        r.response.headers = le.from(r.response.headers);
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
      throw new S(
        s(i, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
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
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new S(
          "option " + o + " must be " + f,
          S.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + o, S.ERR_BAD_OPTION);
  }
}
const Ye = {
  assertOptions: So,
  validators: ot
}, ce = Ye.validators;
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
        silentJSONParsing: ce.transitional(ce.boolean),
        forcedJSONParsing: ce.transitional(ce.boolean),
        clarifyTimeoutError: ce.transitional(ce.boolean),
        legacyInterceptorReqResOrdering: ce.transitional(ce.boolean)
      },
      !1
    ), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ye.assertOptions(
      s,
      {
        encode: ce.function,
        serialize: ce.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ye.assertOptions(
      n,
      {
        baseUrl: ce.spelling("baseURL"),
        withXsrfToken: ce.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && u.merge(o.common, o[n.method]);
    o && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (j) => {
      delete o[j];
    }), n.headers = le.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      f = f && g.synchronous;
      const h = n.transitional || Nt;
      h && h.legacyInterceptorReqResOrdering ? l.unshift(g.fulfilled, g.rejected) : l.push(g.fulfilled, g.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(g) {
      m.push(g.fulfilled, g.rejected);
    });
    let d, p = 0, w;
    if (!f) {
      const j = [lr.bind(this), void 0];
      for (j.unshift(...l), j.push(...m), w = j.length, d = Promise.resolve(n); p < w; )
        d = d.then(j[p++], j[p++]);
      return d;
    }
    w = l.length;
    let v = n;
    for (; p < w; ) {
      const j = l[p++], g = l[p++];
      try {
        v = j(v);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      d = lr.call(this, v);
    } catch (j) {
      return Promise.reject(j);
    }
    for (p = 0, w = m.length; p < w; )
      d = d.then(m[p++], m[p++]);
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
  const t = new Ge(e), n = mr(Ge.prototype.request, t);
  return u.extend(n, Ge.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return kr(we(e, s));
  }, n;
}
const J = kr(_t);
J.Axios = Ge;
J.CanceledError = qe;
J.CancelToken = No;
J.isCancel = Nr;
J.VERSION = Tt;
J.toFormData = st;
J.AxiosError = S;
J.Cancel = J.CanceledError;
J.all = function(t) {
  return Promise.all(t);
};
J.spread = Co;
J.isAxiosError = Oo;
J.mergeConfig = we;
J.AxiosHeaders = le;
J.formToJSON = (e) => Sr(u.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = Ar.getAdapter;
J.HttpStatusCode = _o;
J.default = J;
const To = J;
class Ao {
  constructor(t = {}) {
    He(this, "instance");
    He(this, "jsonPath");
    const n = t.baseUrl || window.location.origin, r = t.jsonPath || "/socket-docs/json";
    this.instance = To.create({
      baseURL: n,
      timeout: 1e4
      // 10 second timeout
    }), this.jsonPath = r;
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
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
  const [t, n] = ne(null), [r, s] = ne({}), [o, i] = ne({}), [l, f] = ne(!0), [m, d] = ne(null), p = ur(() => ko(e), [e.baseUrl, e.jsonPath]);
  return Oe(() => {
    f(!0), p.fetchDocs().then((v) => {
      n(v), s(Po(v)), d(null);
    }).catch((v) => {
      console.error("Failed to fetch socket docs:", v), d(v instanceof Error ? v : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [p]), Oe(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Pr, JSON.stringify(r));
  }, [r]), {
    data: t,
    payloads: r,
    expanded: o,
    loading: l,
    error: m,
    setPayloads: s,
    toggleExpand: (v) => {
      i((j) => ({ ...j, [v]: !j[v] }));
    }
  };
}, he = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search"
}, Lo = (e) => {
  var h;
  const [t, n] = ne(() => {
    const x = localStorage.getItem(he.GATEWAY_IDX);
    return x ? parseInt(x) : 0;
  }), [r, s] = ne(() => {
    const x = localStorage.getItem(he.EVENT_IDX);
    return x ? parseInt(x) : 0;
  }), [o, i] = ne(() => localStorage.getItem(he.SEARCH) || ""), [l, f] = ne(!1), [m, d] = ne(() => localStorage.getItem(he.THEME) || "dark");
  Oe(() => {
    localStorage.setItem(he.THEME, m), m === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [m]), Oe(() => {
    localStorage.setItem(he.GATEWAY_IDX, t.toString());
  }, [t]), Oe(() => {
    localStorage.setItem(he.EVENT_IDX, r.toString());
  }, [r]), Oe(() => {
    localStorage.setItem(he.SEARCH, o);
  }, [o]);
  const p = ur(() => e ? o ? e.gateways.map((x) => ({
    ...x,
    events: x.events.filter(
      (R) => R.event.toLowerCase().includes(o.toLowerCase()) || x.name.toLowerCase().includes(o.toLowerCase())
    )
  })).filter((x) => x.events.length > 0) : e.gateways : [], [e, o]), w = p[t], v = (h = w == null ? void 0 : w.events) == null ? void 0 : h[r];
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
    theme: m,
    toggleTheme: () => {
      d((x) => x === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const x = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), R = URL.createObjectURL(x), C = document.createElement("a");
      C.href = R, C.download = "socket-docs-contract.json", document.body.appendChild(C), C.click(), document.body.removeChild(C), URL.revokeObjectURL(R);
    },
    activeGateway: w,
    activeEvent: v,
    filteredGateways: p
  };
}, Je = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, Bo = () => {
  const e = q.useMemo(() => !window.location.pathname.includes("socket-docs"), []), [t, n] = q.useState(() => {
    var X;
    const _ = ((X = window.SOCKET_DOCS_CONFIG) == null ? void 0 : X.api) || {}, U = localStorage.getItem(Je.API), F = U ? JSON.parse(U) : {}, O = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json",
      ..._
    };
    return F.baseUrl && (O.baseUrl = F.baseUrl), F.jsonPath && !_.jsonPath && (O.jsonPath = F.jsonPath), O;
  }), [r, s] = q.useState(() => {
    var X;
    const _ = (X = window.SOCKET_DOCS_CONFIG) == null ? void 0 : X.socket, U = localStorage.getItem(Je.SOCKET), F = U ? JSON.parse(U) : null, O = {
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
    };
    return _ ? { ...O, ...F, ..._ } : F || O;
  }), [o, i] = q.useState(!1), l = q.useMemo(() => e ? {
    ...t,
    baseUrl: window.location.origin
  } : t, [t, e]), { data: f, payloads: m, setPayloads: d, expanded: p, toggleExpand: w, loading: v, error: j } = Do(l);
  q.useEffect(() => {
  }, [f, v, j]);
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
  }), [r]), { connected: h, logs: x, connect: R, disconnect: C, emitEvent: y, clearLogs: P } = Ln(g), B = q.useMemo(() => {
    if (!f)
      return ["/"];
    const _ = /* @__PURE__ */ new Set();
    return f.gateways.forEach((U) => _.add(U.namespace)), Array.from(_);
  }, [f]), {
    activeGatewayIdx: Y,
    setActiveGatewayIdx: de,
    activeEventIdx: xe,
    setActiveEventIdx: ae,
    searchQuery: ue,
    setSearchQuery: pe,
    isPaused: G,
    setIsPaused: H,
    theme: Z,
    toggleTheme: me,
    exportContract: je,
    activeGateway: A,
    activeEvent: I,
    filteredGateways: V
  } = Lo(f);
  q.useEffect(() => {
    if (A) {
      const _ = t.baseUrl.replace(/\/$/, ""), U = r.namespace === "/" ? A.namespace : r.namespace, F = `${_}${M(U)}`;
      if (r.autoConnect) {
        const O = setTimeout(() => {
          R(A.name, F, A.path);
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
    R
  ]);
  const oe = (_, U) => {
    localStorage.setItem(Je.API, JSON.stringify(_)), localStorage.setItem(Je.SOCKET, JSON.stringify(U)), n(_), s(U), i(!1), window.location.reload();
  }, ge = () => {
    if (!A)
      return;
    const _ = t.baseUrl.replace(/\/$/, ""), U = r.namespace === "/" ? A.namespace : r.namespace, F = `${_}${M(U)}`;
    h[A.name] ? C(A.name, U) : R(A.name, F, A.path);
  }, M = (_) => _.startsWith("/") ? _ : `/${_}`;
  if (v)
    return /* @__PURE__ */ a.jsx(Yt, {});
  if (j)
    return /* @__PURE__ */ a.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${Z === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
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
          onSave: oe,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Z
        }
      )
    ] });
  if (!f)
    return /* @__PURE__ */ a.jsx(Yt, {});
  const te = A && I ? `${A.name}-${I.event}` : "";
  return /* @__PURE__ */ a.jsxs("div", { className: `flex min-h-screen font-sans text-text-primary ${Z === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ a.jsx(
      Nn,
      {
        gateways: V,
        activeGatewayIdx: Y,
        activeEventIdx: xe,
        onSelectGateway: de,
        onSelectEvent: ae,
        searchQuery: ue,
        onSearchChange: pe,
        onExport: je,
        expanded: p,
        onToggleExpand: w
      }
    ),
    /* @__PURE__ */ a.jsxs("main", { className: "flex flex-1 flex-col bg-bg-secondary", children: [
      /* @__PURE__ */ a.jsx(
        Cn,
        {
          connected: A ? !!h[A.name] : !1,
          gatewayPath: A ? `${t.baseUrl.replace(/https?:\/\//, "")}${A.path}` : "ws://localhost:3000",
          namespace: r.namespace === "/" && A ? A.namespace : r.namespace,
          namespaces: B,
          theme: Z,
          onToggleTheme: me,
          onOpenSettings: () => i(!0),
          onNamespaceChange: (_) => s((U) => ({ ...U, namespace: _ })),
          onConnect: ge
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row", children: A && I ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-[1.5] flex-col min-w-0 gap-6", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ a.jsx(
            _n,
            {
              gatewayName: A.name,
              eventName: I.event,
              summary: I.summary ?? "",
              description: I.description ?? "",
              auth: I.auth
            }
          ) }),
          /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ a.jsx(
            Tn,
            {
              schema: I.payloadSchema,
              responseSchema: I.responseSchema
            }
          ) }),
          /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ a.jsx(
            An,
            {
              payload: m[te] ?? "{}",
              schema: I.payloadSchema,
              responseSchema: I.responseSchema,
              emits: I.emits,
              onChange: (_) => d({ ...m, [te]: _ }),
              onSend: () => y(A.name, I.event, m[te] ?? "{}")
            }
          ) })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6", children: /* @__PURE__ */ a.jsx(
          Pn,
          {
            connected: !!h[A.name],
            logs: x,
            onClear: P,
            isPaused: G,
            onTogglePause: () => H(!G)
          }
        ) })
      ] }) : /* @__PURE__ */ a.jsx("div", { className: "flex h-full w-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) }),
      /* @__PURE__ */ a.jsx(
        Gt,
        {
          show: o,
          onClose: () => i(!1),
          onSave: oe,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Z,
          activeGatewayNamespace: A == null ? void 0 : A.namespace
        }
      )
    ] })
  ] });
};
export {
  Bo as App
};
