var sn = Object.defineProperty;
var on = (e, t, n) => t in e ? sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ye = (e, t, n) => (on(e, typeof t != "symbol" ? t + "" : t, n), n);
import F, { useState as pe, useCallback as Be, useMemo as fr, useEffect as Ie } from "react";
import { RefreshCw as an, AlertCircle as cn, ChevronRight as mr, ChevronLeft as ln, Search as dn, LayoutGrid as un, Download as fn, WifiOff as mn, Wifi as pn, Sun as bn, Moon as hn, Settings as xn, Shield as gn, Key as yn, User as vn, Braces as Vt, ChevronDown as wn, Play as jn, RotateCcw as En } from "lucide-react";
import { io as Nn } from "socket.io-client";
var wt = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function Sn() {
  if (Kt)
    return qe;
  Kt = 1;
  var e = F, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, m) {
    var u, p = {}, h = null, w = null;
    m !== void 0 && (h = "" + m), f.key !== void 0 && (h = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (u in f)
      r.call(f, u) && !a.hasOwnProperty(u) && (p[u] = f[u]);
    if (l && l.defaultProps)
      for (u in f = l.defaultProps, f)
        p[u] === void 0 && (p[u] = f[u]);
    return { $$typeof: t, type: l, key: h, ref: w, props: p, _owner: o.current };
  }
  return qe.Fragment = n, qe.jsx = i, qe.jsxs = i, qe;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Rn() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = F, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), N = Symbol.iterator, g = "@@iterator";
    function x(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = N && c[N] || c[g];
      return typeof b == "function" ? b : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(c) {
      {
        for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), T = 1; T < b; T++)
          j[T - 1] = arguments[T];
        R("error", c, j);
      }
    }
    function R(c, b, j) {
      {
        var T = y.ReactDebugCurrentFrame, B = T.getStackAddendum();
        B !== "" && (b += "%s", j = j.concat([B]));
        var z = j.map(function(I) {
          return String(I);
        });
        z.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, z);
      }
    }
    var O = !1, M = !1, Z = !1, ue = !1, fe = !1, je;
    je = Symbol.for("react.module.reference");
    function le(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === a || fe || c === o || c === m || c === u || ue || c === w || O || M || Z || typeof c == "object" && c !== null && (c.$$typeof === h || c.$$typeof === p || c.$$typeof === i || c.$$typeof === l || c.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === je || c.getModuleId !== void 0));
    }
    function he(c, b, j) {
      var T = c.displayName;
      if (T)
        return T;
      var B = b.displayName || b.name || "";
      return B !== "" ? j + "(" + B + ")" : j;
    }
    function xe(c) {
      return c.displayName || "Context";
    }
    function ne(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
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
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var b = c;
            return xe(b) + ".Consumer";
          case i:
            var j = c;
            return xe(j._context) + ".Provider";
          case f:
            return he(c, c.render, "ForwardRef");
          case p:
            var T = c.displayName || null;
            return T !== null ? T : ne(c.type) || "Memo";
          case h: {
            var B = c, z = B._payload, I = B._init;
            try {
              return ne(I(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, ae = 0, ge, Se, Ee, ie, v, L, K;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function $() {
      {
        if (ae === 0) {
          ge = console.log, Se = console.info, Ee = console.warn, ie = console.error, v = console.group, L = console.groupCollapsed, K = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: S,
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
        ae++;
      }
    }
    function ee() {
      {
        if (ae--, ae === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, c, {
              value: ge
            }),
            info: V({}, c, {
              value: Se
            }),
            warn: V({}, c, {
              value: Ee
            }),
            error: V({}, c, {
              value: ie
            }),
            group: V({}, c, {
              value: v
            }),
            groupCollapsed: V({}, c, {
              value: L
            }),
            groupEnd: V({}, c, {
              value: K
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = y.ReactCurrentDispatcher, W;
    function A(c, b, j) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (B) {
            var T = B.stack.trim().match(/\n( *(at )?)/);
            W = T && T[1] || "";
          }
        return `
` + W + c;
      }
    }
    var J = !1, te;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      te = new se();
    }
    function C(c, b) {
      if (!c || J)
        return "";
      {
        var j = te.get(c);
        if (j !== void 0)
          return j;
      }
      var T;
      J = !0;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = G.current, G.current = null, $();
      try {
        if (b) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (me) {
              T = me;
            }
            Reflect.construct(c, [], I);
          } else {
            try {
              I.call();
            } catch (me) {
              T = me;
            }
            c.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (me) {
            T = me;
          }
          c();
        }
      } catch (me) {
        if (me && T && typeof me.stack == "string") {
          for (var D = me.stack.split(`
`), de = T.stack.split(`
`), Y = D.length - 1, X = de.length - 1; Y >= 1 && X >= 0 && D[Y] !== de[X]; )
            X--;
          for (; Y >= 1 && X >= 0; Y--, X--)
            if (D[Y] !== de[X]) {
              if (Y !== 1 || X !== 1)
                do
                  if (Y--, X--, X < 0 || D[Y] !== de[X]) {
                    var ye = `
` + D[Y].replace(" at new ", " at ");
                    return c.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", c.displayName)), typeof c == "function" && te.set(c, ye), ye;
                  }
                while (Y >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        J = !1, G.current = z, ee(), Error.prepareStackTrace = B;
      }
      var De = c ? c.displayName || c.name : "", _e = De ? A(De) : "";
      return typeof c == "function" && te.set(c, _e), _e;
    }
    function k(c, b, j) {
      return C(c, !1);
    }
    function P(c) {
      var b = c.prototype;
      return !!(b && b.isReactComponent);
    }
    function q(c, b, j) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return C(c, P(c));
      if (typeof c == "string")
        return A(c);
      switch (c) {
        case m:
          return A("Suspense");
        case u:
          return A("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case f:
            return k(c.render);
          case p:
            return q(c.type, b, j);
          case h: {
            var T = c, B = T._payload, z = T._init;
            try {
              return q(z(B), b, j);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, U = {}, Ce = y.ReactDebugCurrentFrame;
    function Ae(c) {
      if (c) {
        var b = c._owner, j = q(c.type, c._source, b ? b.type : null);
        Ce.setExtraStackFrame(j);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ke(c, b, j, T, B) {
      {
        var z = Function.call.bind(re);
        for (var I in c)
          if (z(c, I)) {
            var D = void 0;
            try {
              if (typeof c[I] != "function") {
                var de = Error((T || "React class") + ": " + j + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              D = c[I](b, I, T, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              D = Y;
            }
            D && !(D instanceof Error) && (Ae(B), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", j, I, typeof D), Ae(null)), D instanceof Error && !(D.message in U) && (U[D.message] = !0, Ae(B), E("Failed %s type: %s", j, D.message), Ae(null));
          }
      }
    }
    var $r = Array.isArray;
    function dt(c) {
      return $r(c);
    }
    function Lr(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, j = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return j;
      }
    }
    function Fr(c) {
      try {
        return It(c), !1;
      } catch {
        return !0;
      }
    }
    function It(c) {
      return "" + c;
    }
    function $t(c) {
      if (Fr(c))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(c)), It(c);
    }
    var Fe = y.ReactCurrentOwner, Br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Lt, Ft, ut;
    ut = {};
    function qr(c) {
      if (re.call(c, "ref")) {
        var b = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Mr(c) {
      if (re.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function zr(c, b) {
      if (typeof c.ref == "string" && Fe.current && b && Fe.current.stateNode !== b) {
        var j = ne(Fe.current.type);
        ut[j] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(Fe.current.type), c.ref), ut[j] = !0);
      }
    }
    function Hr(c, b) {
      {
        var j = function() {
          Lt || (Lt = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: j,
          configurable: !0
        });
      }
    }
    function Wr(c, b) {
      {
        var j = function() {
          Ft || (Ft = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: j,
          configurable: !0
        });
      }
    }
    var Jr = function(c, b, j, T, B, z, I) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: j,
        props: I,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Vr(c, b, j, T, B) {
      {
        var z, I = {}, D = null, de = null;
        j !== void 0 && ($t(j), D = "" + j), Mr(b) && ($t(b.key), D = "" + b.key), qr(b) && (de = b.ref, zr(b, B));
        for (z in b)
          re.call(b, z) && !Br.hasOwnProperty(z) && (I[z] = b[z]);
        if (c && c.defaultProps) {
          var Y = c.defaultProps;
          for (z in Y)
            I[z] === void 0 && (I[z] = Y[z]);
        }
        if (D || de) {
          var X = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          D && Hr(I, X), de && Wr(I, X);
        }
        return Jr(c, D, de, B, T, Fe.current, I);
      }
    }
    var ft = y.ReactCurrentOwner, Bt = y.ReactDebugCurrentFrame;
    function Pe(c) {
      if (c) {
        var b = c._owner, j = q(c.type, c._source, b ? b.type : null);
        Bt.setExtraStackFrame(j);
      } else
        Bt.setExtraStackFrame(null);
    }
    var mt;
    mt = !1;
    function pt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function qt() {
      {
        if (ft.current) {
          var c = ne(ft.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Kr(c) {
      {
        if (c !== void 0) {
          var b = c.fileName.replace(/^.*[\\\/]/, ""), j = c.lineNumber;
          return `

Check your code at ` + b + ":" + j + ".";
        }
        return "";
      }
    }
    var Mt = {};
    function Yr(c) {
      {
        var b = qt();
        if (!b) {
          var j = typeof c == "string" ? c : c.displayName || c.name;
          j && (b = `

Check the top-level render call using <` + j + ">.");
        }
        return b;
      }
    }
    function zt(c, b) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var j = Yr(b);
        if (Mt[j])
          return;
        Mt[j] = !0;
        var T = "";
        c && c._owner && c._owner !== ft.current && (T = " It was passed a child from " + ne(c._owner.type) + "."), Pe(c), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, T), Pe(null);
      }
    }
    function Ht(c, b) {
      {
        if (typeof c != "object")
          return;
        if (dt(c))
          for (var j = 0; j < c.length; j++) {
            var T = c[j];
            pt(T) && zt(T, b);
          }
        else if (pt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var B = x(c);
          if (typeof B == "function" && B !== c.entries)
            for (var z = B.call(c), I; !(I = z.next()).done; )
              pt(I.value) && zt(I.value, b);
        }
      }
    }
    function Gr(c) {
      {
        var b = c.type;
        if (b == null || typeof b == "string")
          return;
        var j;
        if (typeof b == "function")
          j = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          j = b.propTypes;
        else
          return;
        if (j) {
          var T = ne(b);
          Ke(j, c.props, "prop", T, c);
        } else if (b.PropTypes !== void 0 && !mt) {
          mt = !0;
          var B = ne(b);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xr(c) {
      {
        for (var b = Object.keys(c.props), j = 0; j < b.length; j++) {
          var T = b[j];
          if (T !== "children" && T !== "key") {
            Pe(c), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Pe(null);
            break;
          }
        }
        c.ref !== null && (Pe(c), E("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    var Wt = {};
    function Jt(c, b, j, T, B, z) {
      {
        var I = le(c);
        if (!I) {
          var D = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Kr(B);
          de ? D += de : D += qt();
          var Y;
          c === null ? Y = "null" : dt(c) ? Y = "array" : c !== void 0 && c.$$typeof === t ? (Y = "<" + (ne(c.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof c, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, D);
        }
        var X = Vr(c, b, j, B, z);
        if (X == null)
          return X;
        if (I) {
          var ye = b.children;
          if (ye !== void 0)
            if (T)
              if (dt(ye)) {
                for (var De = 0; De < ye.length; De++)
                  Ht(ye[De], c);
                Object.freeze && Object.freeze(ye);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(ye, c);
        }
        if (re.call(b, "key")) {
          var _e = ne(c), me = Object.keys(b).filter(function(nn) {
            return nn !== "key";
          }), bt = me.length > 0 ? "{key: someKey, " + me.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wt[_e + bt]) {
            var rn = me.length > 0 ? "{" + me.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, _e, rn, _e), Wt[_e + bt] = !0;
          }
        }
        return c === r ? Xr(X) : Gr(X), X;
      }
    }
    function Qr(c, b, j) {
      return Jt(c, b, j, !0);
    }
    function Zr(c, b, j) {
      return Jt(c, b, j, !1);
    }
    var en = Zr, tn = Qr;
    Me.Fragment = r, Me.jsx = en, Me.jsxs = tn;
  }()), Me;
}
process.env.NODE_ENV === "production" ? wt.exports = Sn() : wt.exports = Rn();
var s = wt.exports;
const Gt = () => {
  const [e, t] = F.useState(!1);
  return F.useEffect(() => {
    const n = setTimeout(() => t(!0), 5e3);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ s.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center", children: [
    /* @__PURE__ */ s.jsx(an, { className: "animate-spin mb-4", size: 48 }),
    /* @__PURE__ */ s.jsx("span", { className: "text-xl font-medium mb-2", children: "Cargando contratos..." }),
    e && /* @__PURE__ */ s.jsxs("div", { className: "mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-center gap-2 text-orange-400 mb-2", children: [
        /* @__PURE__ */ s.jsx(cn, { size: 20 }),
        /* @__PURE__ */ s.jsx("span", { className: "font-bold uppercase text-xs tracking-wider", children: "¿Demasiado tiempo?" })
      ] }),
      /* @__PURE__ */ s.jsxs("p", { className: "text-text-secondary text-sm leading-relaxed", children: [
        "Parece que la carga está tardando más de lo normal. Verifica la ",
        /* @__PURE__ */ s.jsx("b", { children: "consola del navegador (F12)" }),
        " para ver errores de red o configuración."
      ] }),
      /* @__PURE__ */ s.jsx(
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
}, Cn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: o,
  expanded: a,
  onToggleExpand: i
}) => /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: e.map((l, f) => {
  const m = a[l.name] !== !1;
  return /* @__PURE__ */ s.jsxs("div", { className: "nav-group", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary group",
        onClick: () => i(l.name),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-text-muted", children: "📁" }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ s.jsx("span", { children: l.name }),
              /* @__PURE__ */ s.jsx("span", { className: "text-[10px] text-brand-emerald font-mono", children: l.namespace })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx("span", { className: `text-[11px] text-text-muted transition-transform ${m ? "" : "-rotate-90"}`, children: "▾" })
        ]
      }
    ),
    m && /* @__PURE__ */ s.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: l.events.map((u, p) => {
      const h = t === f && n === p;
      return /* @__PURE__ */ s.jsx(
        "li",
        {
          onClick: (w) => {
            w.stopPropagation(), r(f), o(p);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${h ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col min-w-0 flex-1", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s.jsx("span", { className: "inline-block rounded bg-bg-surface px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand-emerald", children: "EVENT" }),
              /* @__PURE__ */ s.jsx("span", { className: "truncate font-medium", children: u.event })
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "text-[10px] text-text-muted ml-[42px] truncate", children: [
              "Namespace: ",
              l.namespace
            ] })
          ] })
        },
        p
      );
    }) })
  ] }, f);
}) }), H = {
  common: {
    v1: "v1.0.0",
    socketDocs: "Socket Docs",
    gateways: "Gateways",
    events: "eventos",
    connected: "Conectado",
    disconnected: "Desconectado",
    searchPlaceholder: "Buscar eventos...",
    exportContract: "Exportar contrato"
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
}, _n = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: o,
  searchQuery: a,
  onSearchChange: i,
  onExport: l,
  expanded: f,
  onToggleExpand: m
}) => {
  const [u, p] = pe(!1);
  return /* @__PURE__ */ s.jsxs("aside", { className: `relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${u ? "w-16 p-2" : "w-[300px] p-4"}`, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => p(!u),
        className: "absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors",
        children: u ? /* @__PURE__ */ s.jsx(mr, { size: 14 }) : /* @__PURE__ */ s.jsx(ln, { size: 14 })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: `mb-6 flex items-center ${u ? "justify-center" : "gap-2"}`, children: [
      /* @__PURE__ */ s.jsx("span", { className: "text-xl text-brand-emerald shrink-0", children: "■" }),
      !u && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "text-base font-semibold truncate", children: H.common.socketDocs }),
        /* @__PURE__ */ s.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: H.common.v1 })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "relative mb-6", children: u ? /* @__PURE__ */ s.jsx("div", { className: "flex justify-center text-text-muted cursor-pointer hover:text-text-primary", onClick: () => p(!1), children: /* @__PURE__ */ s.jsx(dn, { size: 18 }) }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
          placeholder: H.common.searchPlaceholder,
          value: a,
          onChange: (h) => i(h.target.value)
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
    ] }) }),
    !u && /* @__PURE__ */ s.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1", children: [
      /* @__PURE__ */ s.jsx("span", { children: H.common.gateways }),
      /* @__PURE__ */ s.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
    ] }),
    u && /* @__PURE__ */ s.jsx("div", { className: "mb-3 flex justify-center text-text-secondary", children: /* @__PURE__ */ s.jsx(un, { size: 18 }) }),
    /* @__PURE__ */ s.jsx("div", { className: `flex-1 overflow-y-auto ${u ? "hidden" : "block"}`, children: /* @__PURE__ */ s.jsx(
      Cn,
      {
        gateways: e,
        activeGatewayIdx: t,
        activeEventIdx: n,
        onSelectGateway: r,
        onSelectEvent: o,
        expanded: f,
        onToggleExpand: m
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { className: `mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${u ? "flex flex-col items-center gap-4" : ""}`, children: [
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: l,
          title: H.common.exportContract,
          className: `flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${u ? "h-9 w-9" : "mb-3 w-full py-2"}`,
          children: [
            /* @__PURE__ */ s.jsx(fn, { size: 14 }),
            !u && H.common.exportContract
          ]
        }
      ),
      !u && /* @__PURE__ */ s.jsxs("p", { children: [
        H.common.socketDocs,
        " ",
        H.common.v1
      ] })
    ] })
  ] });
}, On = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  namespaces: r,
  path: o,
  paths: a,
  theme: i,
  onToggleTheme: l,
  onOpenSettings: f,
  onNamespaceChange: m,
  onPathChange: u,
  onConnect: p
}) => /* @__PURE__ */ s.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6 bg-bg-primary", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs mr-auto", children: [
    /* @__PURE__ */ s.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500"}` }),
    /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: e ? H.common.connected : H.common.disconnected }),
    /* @__PURE__ */ s.jsx("span", { className: "text-text-muted border-l border-border-subtle pl-2", children: t })
  ] }),
  /* @__PURE__ */ s.jsxs(
    "button",
    {
      onClick: p,
      className: `flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${e ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20"}`,
      children: [
        e ? /* @__PURE__ */ s.jsx(mn, { size: 14 }) : /* @__PURE__ */ s.jsx(pn, { size: 14 }),
        e ? "Desconectar" : "Conectar"
      ]
    }
  ),
  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ s.jsx("span", { className: "text-[9px] font-bold uppercase text-text-muted px-1", children: "Namespace" }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          value: n,
          onChange: (h) => m(h.target.value),
          placeholder: "/namespace",
          className: "w-32 rounded-md border border-border-subtle bg-bg-surface px-3 py-1 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors"
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ s.jsx("span", { className: "text-[9px] font-bold uppercase text-text-muted px-1", children: "Path" }),
      /* @__PURE__ */ s.jsx(
        "select",
        {
          value: o,
          onChange: (h) => u(h.target.value),
          className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors",
          children: a.map((h) => /* @__PURE__ */ s.jsx("option", { value: h, children: h }, h))
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 border-l border-border-subtle pl-3", children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: l,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: i === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        children: i === "dark" ? /* @__PURE__ */ s.jsx(bn, { size: 14 }) : /* @__PURE__ */ s.jsx(hn, { size: 14 })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: f,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: "Configuración",
        children: /* @__PURE__ */ s.jsx(xn, { size: 14 })
      }
    )
  ] })
] }), Tn = ({ type: e }) => {
  const t = {
    JWT: {
      icon: /* @__PURE__ */ s.jsx(gn, { size: 12 }),
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Requiere token Bearer JWT en el campo auth.token."
    },
    API_KEY: {
      icon: /* @__PURE__ */ s.jsx(yn, { size: 12 }),
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      desc: "Requiere una clave de API válida enviada en los headers o query."
    },
    BASIC: {
      icon: /* @__PURE__ */ s.jsx(vn, { size: 12 }),
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      desc: "Autenticación básica de usuario/contraseña."
    },
    NONE: {
      icon: null,
      color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
      desc: "No requiere autenticación."
    }
  }, n = t[e] || t.NONE;
  return e === "NONE" ? null : /* @__PURE__ */ s.jsxs("div", { className: `flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${n.color}`, title: n.desc, children: [
    n.icon,
    /* @__PURE__ */ s.jsx("span", { children: e })
  ] });
}, kn = ({
  gatewayName: e,
  eventName: t,
  summary: n,
  description: r,
  auth: o
}) => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
  /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2 text-sm text-text-secondary", children: [
      /* @__PURE__ */ s.jsx("span", { children: e }),
      " / ",
      /* @__PURE__ */ s.jsx("span", { children: "events" }),
      " / ",
      /* @__PURE__ */ s.jsx("span", { className: "font-medium text-text-primary", children: t })
    ] }),
    o && /* @__PURE__ */ s.jsx(Tn, { type: o })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ s.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: H.event.type }),
    /* @__PURE__ */ s.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ s.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ s.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), An = ({ schema: e, responseSchema: t }) => {
  const [n, r] = F.useState("request"), [o, a] = F.useState(!1), i = (m) => JSON.stringify(m, null, 2), l = !!e && (Object.keys((e == null ? void 0 : e.properties) || {}).length > 0 || !!e.type), f = !!t && (Object.keys((t == null ? void 0 : t.properties) || {}).length > 0 || !!t.type);
  return !l && !f ? /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center gap-2 text-text-secondary italic", children: [
    /* @__PURE__ */ s.jsx(Vt, { size: 14, className: "opacity-40" }),
    /* @__PURE__ */ s.jsx("span", { className: "text-[12px]", children: H.event.noParameters })
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "mb-3 flex items-center gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex items-center gap-2 mr-2 cursor-pointer hover:text-brand-emerald transition-colors",
          onClick: () => a(!o),
          children: [
            o ? /* @__PURE__ */ s.jsx(wn, { size: 14 }) : /* @__PURE__ */ s.jsx(mr, { size: 14 }),
            /* @__PURE__ */ s.jsx(Vt, { size: 14, className: "text-brand-emerald" }),
            /* @__PURE__ */ s.jsx("span", { className: "font-bold uppercase tracking-wider text-text-primary text-[11px]", children: H.event.parameters })
          ]
        }
      ),
      o && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => r("request"),
            className: `pb-1.5 transition-colors ${n === "request" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Request Schema"
          }
        ),
        f && /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => r("response"),
            className: `pb-1.5 transition-colors ${n === "response" ? "border-b-2 border-brand-emerald text-brand-emerald" : "text-text-secondary hover:text-text-primary"}`,
            children: "Response Schema"
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ s.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ s.jsx("div", { className: "absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ s.jsx("span", { className: "text-[10px] bg-bg-elevation px-2 py-1 rounded border border-border-subtle font-bold text-text-muted uppercase", children: "JSON Schema" }) }),
      /* @__PURE__ */ s.jsx("pre", { className: "overflow-x-auto rounded-md bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-brand-emerald/90 custom-scrollbar max-h-[400px]", children: i(n === "request" ? e : t) })
    ] })
  ] });
}, Pn = ({ payload: e, schema: t, responseSchema: n, emits: r, onChange: o, onSend: a }) => {
  const [i, l] = pe(r || "");
  return F.useEffect(() => {
    l(r || "");
  }, [r]), /* @__PURE__ */ s.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ s.jsxs("span", { className: "text-[13px] font-semibold", children: [
          H.event.requestBody,
          " ",
          /* @__PURE__ */ s.jsx("span", { className: "text-[11px] text-red-400", children: H.event.required })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Listen for:" }),
          /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ s.jsx("option", { children: "application/json" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ s.jsx("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: /* @__PURE__ */ s.jsx(
        "span",
        {
          className: "pb-1.5 border-b-2 border-brand-emerald text-brand-emerald font-medium",
          children: H.event.exampleValue
        }
      ) }),
      /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ s.jsx(
        "textarea",
        {
          value: e,
          onChange: (f) => o(f.target.value),
          className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
          rows: 8
        }
      ) }),
      /* @__PURE__ */ s.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: a,
            className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
            children: [
              /* @__PURE__ */ s.jsx(jn, { size: 14 }),
              " ",
              H.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          H.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, Dn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ s.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ s.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ s.jsx("div", { className: "space-y-2 p-4", children: e.map((t) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ s.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx("span", { className: `font-bold ${t.type === "sent" ? "text-blue-400" : t.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: t.type.toUpperCase() }),
          /* @__PURE__ */ s.jsx("span", { className: "text-text-secondary", children: t.message })
        ] }),
        /* @__PURE__ */ s.jsx("span", { className: "text-[10px] text-text-muted", children: t.timestamp })
      ] }),
      t.data != null && /* @__PURE__ */ s.jsx("pre", { className: "whitespace-pre-wrap break-all overflow-x-hidden rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
    ]
  },
  t.id
)) }), Un = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: o
}) => {
  const [a, i] = F.useState("all"), l = F.useMemo(() => a === "all" ? t : a === "emits" ? t.filter((f) => f.type === "sent") : a === "listeners" ? t.filter((f) => f.type === "received") : t, [t, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex flex-shrink-0 items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ s.jsx("span", { className: "text-[13px] font-semibold", children: H.realtime.title })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: H.realtime.all
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: H.realtime.emits
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: H.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ s.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ s.jsx(En, { size: 12 }),
          " ",
          H.realtime.clear
        ] }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: o,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : H.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "border-t border-border-subtle", children: /* @__PURE__ */ s.jsx(Dn, { logs: r ? [] : l, onClear: n }) })
  ] });
}, In = [
  3e3,
  3001,
  3002,
  3003,
  3004,
  3005,
  3010,
  4e3,
  4001,
  5e3,
  5001,
  7e3,
  7001,
  8e3,
  8080,
  8081,
  8082,
  9e3,
  9001,
  3333,
  4200,
  5173,
  5500
], $n = 1200;
function pr(e) {
  try {
    if (typeof AbortSignal < "u" && typeof AbortSignal.timeout == "function")
      return AbortSignal.timeout(e);
  } catch {
  }
  const t = new AbortController();
  return setTimeout(() => t.abort(), e), t.signal;
}
async function br(e) {
  const t = ((e == null ? void 0 : e.baseUrl) || window.location.origin).replace(/\/$/, ""), n = (e == null ? void 0 : e.ports) || In;
  if ((e == null ? void 0 : e.useServerSide) !== !1) {
    const r = [
      `${t}/socket-docs/servers`,
      `${t}/socket-docs/discover`,
      `${t}/__socket-docs/servers`
    ];
    for (const o of r)
      try {
        const a = n ? `${o}?ports=${n.join(",")}` : o, i = await fetch(a, { headers: { Accept: "application/json" }, signal: pr(2500) });
        if (!i.ok || !(i.headers.get("content-type") || "").includes("application/json"))
          continue;
        const f = await i.json();
        if (Array.isArray(f.servers))
          return f;
        if (Array.isArray(f))
          return { servers: f, scannedPorts: n, timestamp: Date.now() };
      } catch {
      }
  }
  return await Ln(n);
}
async function Ln(e) {
  const t = ["/socket-docs/json", "/json"], n = [], r = async (a) => {
    for (const i of t) {
      const l = `http://localhost:${a}${i}`, f = Date.now();
      try {
        const m = await fetch(l, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: pr($n)
        });
        if (!m.ok)
          continue;
        const u = await m.json();
        if (!Array.isArray(u == null ? void 0 : u.gateways))
          continue;
        return {
          baseUrl: `http://localhost:${a}`,
          port: a,
          jsonPath: i,
          gateways: u.gateways.length,
          latencyMs: Date.now() - f
        };
      } catch {
      }
    }
    return null;
  };
  for (let a = 0; a < e.length; a += 8) {
    const i = e.slice(a, a + 8), l = await Promise.all(i.map(r));
    for (const f of l)
      f && n.push(f);
  }
  return n.sort((a, i) => a.port - i.port), { servers: n, scannedPorts: e, timestamp: Date.now() };
}
const Xt = ({
  show: e,
  onClose: t,
  onSave: n,
  onClear: r,
  initialApiConfig: o,
  initialSocketConfig: a,
  isStandalone: i,
  theme: l,
  activeGatewayNamespace: f
}) => {
  var Se, Ee, ie;
  const [m, u] = F.useState(o), [p, h] = F.useState(a), [w, N] = F.useState(!1), [g, x] = F.useState(null), [y, E] = F.useState(!1), [R, O] = F.useState(!1), [M, Z] = F.useState([]), [ue, fe] = F.useState(null), [je, le] = F.useState(!1), [he, xe] = F.useState(!1);
  F.useEffect(() => {
    e && (u(o), h(a), x(null), E(!1), fe(null), xe(!1));
  }, [e, o, a]), F.useEffect(() => {
    if (!e)
      return;
    const v = (m.baseUrl || window.location.origin).replace(/\/$/, ""), L = m.jsonPath.startsWith("/") ? m.jsonPath : `/${m.jsonPath}`, K = p.namespace === "/" ? f ?? "/" : p.namespace, S = ae(K), $ = !!(p.auth.token || p.auth.userId);
    if (!v || $) {
      xe(!1);
      return;
    }
    let ee = !1;
    return fetch(`${v}${L}`).then((G) => G.ok ? G.json() : null).then((G) => {
      if (ee || !G)
        return;
      const W = ((G == null ? void 0 : G.gateways) || []).find(
        (J) => ae(J.namespace || "/") === S
      ), A = ((W == null ? void 0 : W.events) || []).some(
        (J) => J.auth && J.auth !== "NONE"
      );
      xe(A && !$);
    }).catch(() => {
    }), () => {
      ee = !0;
    };
  }, [e, m.baseUrl, m.jsonPath, p.namespace, p.auth.token, p.auth.userId, f]);
  const ne = async () => {
    O(!0), fe(null);
    try {
      const v = await br();
      Z(v.servers), le(!0), v.servers.length === 0 && fe("No se encontraron servidores locales con /socket-docs/json. Verifica que tu app NestJS esté corriendo con SocketDocsModule.setup().");
    } catch (v) {
      fe(v instanceof Error ? v.message : "Error desconocido al escanear"), le(!0);
    } finally {
      O(!1);
    }
  }, V = (v) => {
    u((L) => ({
      ...L,
      baseUrl: v.baseUrl,
      // En modo standalone el jsonPath está bloqueado, pero si el servidor descubierto usa el mismo path lo respetamos.
      // Si no es standalone, adoptamos el jsonPath detectado.
      jsonPath: i ? L.jsonPath : v.jsonPath
    }));
  }, ae = (v) => v.startsWith("/") ? v : `/${v}`, ge = async () => {
    N(!0), x(null);
    const v = (m.baseUrl || window.location.origin).replace(/\/$/, ""), L = m.jsonPath.startsWith("/") ? m.jsonPath : `/${m.jsonPath}`;
    try {
      const K = await fetch(`${v}${L}`);
      if (!K.ok)
        throw new Error(`HTTP Error: ${K.status}`);
      const S = K.headers.get("content-type");
      if (!S || !S.includes("application/json"))
        throw new Error(`Respuesta no es JSON. Content-Type: ${S}`);
      const $ = await K.json(), { io: ee } = await import("socket.io-client"), G = p.namespace === "/" ? f ?? "/" : p.namespace, W = ae(G), A = (($ == null ? void 0 : $.gateways) || []).find(
        (se) => ae(se.namespace || "/") === W
      ), J = ((A == null ? void 0 : A.events) || []).some(
        (se) => se.auth && se.auth !== "NONE"
      ), te = !!(p.auth.token || p.auth.userId);
      await new Promise((se) => {
        const C = ee(`${v}${W}`, {
          path: p.path,
          transports: p.transports,
          auth: p.auth,
          timeout: 5e3,
          forceNew: !0,
          reconnection: !1
        });
        let k = !1;
        const P = () => {
          C.off("connect"), C.off("connect_error"), C.off("disconnect"), C.disconnect();
        }, q = (U, Ce) => {
          k || (k = !0, x({
            success: !1,
            message: U,
            data: { schema: $, ...Ce }
          }), N(!1), E(!0), P(), se());
        }, re = (U) => {
          k || (k = !0, x({
            success: !0,
            message: "¡Conexión exitosa!",
            data: { schema: $, socketId: U }
          }), N(!1), E(!0), P(), se());
        };
        J && !te && console.warn("[SocketDocs] Gateway requires auth but no token provided"), C.on("connect", () => {
          setTimeout(() => {
            C.connected && re(C.id);
          }, 600);
        }), C.on("connect_error", (U) => {
          var Ke;
          const Ce = (U == null ? void 0 : U.message) || (U == null ? void 0 : U.description) || (typeof U == "string" ? U : "Error de conexión"), Ae = ((Ke = U == null ? void 0 : U.data) == null ? void 0 : Ke.message) || (U == null ? void 0 : U.data) || Ce;
          J && !te ? q(`Autenticación requerida: falta el token. El servidor respondió: "${Ae}"`, {
            authRequired: !0
          }) : q(`Error Socket: ${Ce}`, { serverError: U == null ? void 0 : U.data });
        }), C.on("disconnect", (U) => {
          k || (U === "io server disconnect" || U === "transport close" || U === "parse error") && (J && !te ? q("Autenticación fallida: el servidor rechazó la conexión (token faltante o inválido).", {
            authRequired: !0
          }) : q(`El servidor rechazó la conexión: ${U}. Verifica auth / path / namespace.`));
        }), setTimeout(() => {
          k || q(J && !te ? "Tiempo de espera agotado. El gateway requiere autenticación; verifica el token." : "Tiempo de espera agotado. El servidor no confirmó la conexión.");
        }, 6e3);
      });
    } catch (K) {
      x({ success: !1, message: `Error: ${K instanceof Error ? K.message : "Error desconocido"}` }), N(!1), E(!0);
    }
  };
  return e ? /* @__PURE__ */ s.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: [
    y && g && /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 z-[60] flex items-center justify-center bg-black/40", children: /* @__PURE__ */ s.jsxs("div", { className: `w-full max-w-2xl rounded-lg p-6 shadow-2xl border border-border-subtle ${l === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ s.jsx("h3", { className: `text-lg font-bold mb-4 ${g.success ? "text-brand-emerald" : "text-red-500"}`, children: g.success ? "✓ Conexión Verificada" : "✗ Fallo en la Conexión" }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-sm border border-border-subtle", children: [
          /* @__PURE__ */ s.jsx("p", { className: "font-semibold mb-1", children: "Resultado:" }),
          /* @__PURE__ */ s.jsx("p", { className: "text-text-secondary", children: g.message })
        ] }),
        ((Se = g.data) == null ? void 0 : Se.schema) && /* @__PURE__ */ s.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-xs border border-border-subtle max-h-60 overflow-y-auto", children: [
          /* @__PURE__ */ s.jsx("p", { className: "font-semibold mb-2 text-brand-emerald", children: "Esquema detectado:" }),
          /* @__PURE__ */ s.jsx("pre", { className: "font-mono text-text-muted", children: JSON.stringify(g.data.schema, null, 2) })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "mt-6 flex justify-end gap-3", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => E(!1),
            className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium hover:bg-border-subtle transition-all",
            children: "Cerrar"
          }
        ),
        g.success && /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => {
              n(m, p), E(!1);
            },
            className: "rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light transition-all",
            children: "Guardar y Aplicar"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${l === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ s.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Configuración Completa" }),
      /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto pr-2", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Documentación API" }),
            /* @__PURE__ */ s.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${i ? "bg-orange-500/20 text-orange-500" : "bg-brand-emerald/20 text-brand-emerald"}`, children: i ? "Modo Standalone" : "Modo Integrado" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Base URL" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "text",
                  value: m.baseUrl,
                  onChange: (v) => u({ ...m, baseUrl: v.target.value }),
                  className: `w-full rounded border p-2 text-sm outline-none transition-colors ${m.baseUrl ? "border-border-subtle focus:border-brand-emerald" : "border-red-500 focus:border-red-500"} ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "http://localhost:3000"
                }
              ),
              !m.baseUrl && /* @__PURE__ */ s.jsx("p", { className: "mt-1 text-[10px] text-red-500", children: "La Base URL es requerida" })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: [
                "JSON Path ",
                i && /* @__PURE__ */ s.jsx("span", { className: "text-[10px] text-orange-500 font-normal", children: "(Bloqueado en Standalone)" })
              ] }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "text",
                  disabled: i,
                  value: m.jsonPath,
                  onChange: (v) => u({ ...m, jsonPath: v.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: `rounded border p-3 ${l === "dark" ? "bg-bg-secondary/50 border-border-subtle" : "bg-gray-50 border-gray-200"}`, children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("p", { className: "text-xs font-semibold text-text-primary", children: "Servidores locales" }),
                /* @__PURE__ */ s.jsx("p", { className: "text-[11px] text-text-muted", children: "Detecta apps NestJS con SocketDocs en tu máquina" })
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  type: "button",
                  onClick: ne,
                  disabled: R,
                  className: `shrink-0 rounded px-3 py-1.5 text-xs font-bold transition-all ${R ? "bg-bg-secondary text-text-muted cursor-wait" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light"}`,
                  children: R ? "Escaneando…" : "Detectar"
                }
              )
            ] }),
            R && /* @__PURE__ */ s.jsx("p", { className: "mt-2 text-[11px] text-text-muted animate-pulse", children: "Escaneando puertos locales (3000, 4000, 5000, 8080, …)" }),
            !R && je && M.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "mt-3 space-y-2", children: [
              /* @__PURE__ */ s.jsxs("p", { className: "text-[11px] font-medium text-brand-emerald", children: [
                M.length,
                " servidor",
                M.length !== 1 ? "es" : "",
                " encontrado",
                M.length !== 1 ? "s" : "",
                ":"
              ] }),
              M.map((v) => {
                const L = m.baseUrl === v.baseUrl && m.jsonPath === v.jsonPath;
                return /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => V(v),
                    className: `flex w-full items-center justify-between rounded border px-3 py-2 text-left transition-colors ${L ? "border-brand-emerald bg-brand-emerald/10" : "border-border-subtle hover:border-brand-emerald/50 hover:bg-bg-secondary"}`,
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ s.jsxs("p", { className: "truncate text-xs font-semibold text-text-primary", children: [
                          v.baseUrl,
                          /* @__PURE__ */ s.jsx("span", { className: "font-normal text-text-muted", children: v.jsonPath })
                        ] }),
                        /* @__PURE__ */ s.jsxs("p", { className: "text-[11px] text-text-muted", children: [
                          v.gateways,
                          " gateway",
                          v.gateways !== 1 ? "s" : "",
                          " · ",
                          v.latencyMs,
                          "ms · :",
                          v.port
                        ] })
                      ] }),
                      /* @__PURE__ */ s.jsx("span", { className: `ml-2 shrink-0 rounded px-2 py-0.5 text-[10px] font-bold ${L ? "bg-brand-emerald text-bg-primary" : "bg-bg-surface border border-border-subtle text-text-muted"}`, children: L ? "Seleccionado" : "Usar" })
                    ]
                  },
                  `${v.baseUrl}${v.jsonPath}`
                );
              })
            ] }),
            !R && je && M.length === 0 && ue && /* @__PURE__ */ s.jsx("p", { className: "mt-2 rounded bg-red-500/10 px-2 py-1.5 text-[11px] text-red-500 border border-red-500/20", children: ue }),
            !je && !R && /* @__PURE__ */ s.jsx("p", { className: "mt-2 text-[11px] text-text-muted", children: "Haz clic en Detectar para escanear puertos locales y autocompletar la Base URL." })
          ] }),
          /* @__PURE__ */ s.jsxs("section", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
            he && /* @__PURE__ */ s.jsx("div", { className: "mb-3 rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-[11px] text-red-500", children: "⚠️ Este gateway requiere autenticación. Completa el Token (o User ID) o la conexión será rechazada con 400." }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
                /* @__PURE__ */ s.jsx(
                  "textarea",
                  {
                    value: p.auth.token,
                    onChange: (v) => h({
                      ...p,
                      auth: { ...p.auth, token: v.target.value }
                    }),
                    className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "Bearer eyJhbG..."
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "User ID" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    value: p.auth.userId,
                    onChange: (v) => h({
                      ...p,
                      auth: { ...p.auth, userId: v.target.value }
                    }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ s.jsxs("section", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Socket.IO Core" }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Namespace Override" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    value: p.namespace,
                    onChange: (v) => h({ ...p, namespace: v.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Socket Path" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "text",
                    value: p.path,
                    onChange: (v) => h({ ...p, path: v.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
                /* @__PURE__ */ s.jsxs(
                  "select",
                  {
                    value: p.transports.join(","),
                    onChange: (v) => {
                      const L = v.target.value;
                      let K = ["polling", "websocket"];
                      L === "websocket" && (K = ["websocket"]), L === "polling" && (K = ["polling"]), h({ ...p, transports: K });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    children: [
                      /* @__PURE__ */ s.jsx("option", { value: "polling,websocket", children: "Automático" }),
                      /* @__PURE__ */ s.jsx("option", { value: "websocket", children: "Websocket" }),
                      /* @__PURE__ */ s.jsx("option", { value: "polling", children: "Polling" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("section", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reconexión y Tiempos" }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "reconnection",
                    checked: p.reconnection,
                    onChange: (v) => h({ ...p, reconnection: v.target.checked }),
                    className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                  }
                ),
                /* @__PURE__ */ s.jsx("label", { htmlFor: "reconnection", className: "text-xs font-medium text-text-muted", children: "Habilitar Reconexión" })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "autoConnect",
                    checked: p.autoConnect,
                    onChange: (v) => h({ ...p, autoConnect: v.target.checked }),
                    className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                  }
                ),
                /* @__PURE__ */ s.jsx("label", { htmlFor: "autoConnect", className: "text-xs font-medium text-text-muted", children: "Auto Conectar" })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Máx Intentos" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: p.reconnectionAttempts === 1 / 0 ? 0 : p.reconnectionAttempts,
                    onChange: (v) => h({ ...p, reconnectionAttempts: v.target.value === "0" ? 1 / 0 : parseInt(v.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "0 = Infinito"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Timeout (ms)" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: p.timeout,
                    onChange: (v) => h({ ...p, timeout: parseInt(v.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Inicial (ms)" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: p.reconnectionDelay,
                    onChange: (v) => h({ ...p, reconnectionDelay: parseInt(v.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Máximo (ms)" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: p.reconnectionDelayMax,
                    onChange: (v) => h({ ...p, reconnectionDelayMax: parseInt(v.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("section", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reintentos de Eventos" }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intentos" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: ((Ee = p.eventRetries) == null ? void 0 : Ee.attempts) ?? 0,
                    onChange: (v) => {
                      var L;
                      return h({
                        ...p,
                        eventRetries: {
                          attempts: parseInt(v.target.value),
                          delay: ((L = p.eventRetries) == null ? void 0 : L.delay) ?? 1e3
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                    placeholder: "0 = Sin reintentos"
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Intervalo (ms)" }),
                /* @__PURE__ */ s.jsx(
                  "input",
                  {
                    type: "number",
                    value: ((ie = p.eventRetries) == null ? void 0 : ie.delay) ?? 1e3,
                    onChange: (v) => {
                      var L;
                      return h({
                        ...p,
                        eventRetries: {
                          attempts: ((L = p.eventRetries) == null ? void 0 : L.attempts) ?? 0,
                          delay: parseInt(v.target.value)
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${l === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: ge,
              disabled: w,
              className: `rounded px-4 py-2 text-sm font-semibold transition-all ${w ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
              children: w ? "Probando..." : "Probar Conexión"
            }
          ),
          g && /* @__PURE__ */ s.jsx("span", { className: `text-xs font-medium ${g.success ? "text-brand-emerald" : "text-red-500"}`, children: g.message })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => {
                confirm("¿Estás seguro de que deseas limpiar todos los datos de conexión?") && r();
              },
              className: "rounded border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/20 transition-all",
              children: "Limpiar Datos"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: t,
              className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all",
              children: "Cancelar"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => {
                const v = {
                  ...m,
                  baseUrl: m.baseUrl || window.location.origin
                };
                n(v, p);
              },
              disabled: !m.baseUrl && !m.jsonPath,
              className: `rounded px-6 py-2 text-sm font-bold shadow-lg transition-all active:scale-95 ${!m.baseUrl && !m.jsonPath ? "bg-gray-500 text-gray-300 cursor-not-allowed shadow-none" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-brand-emerald/20"}`,
              children: "Guardar Configuración"
            }
          )
        ] })
      ] })
    ] })
  ] }) : null;
};
class Fn {
  constructor() {
    Ye(this, "sockets", {});
  }
  connect(t, n, r = {}, o) {
    this.sockets[t] && this.sockets[t].disconnect();
    const a = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, i = Nn(n, a);
    return i.on("connect", o.onConnect), i.on("connect_error", (l) => o.onConnectError(l)), i.on("disconnect", (l) => o.onDisconnect(l)), i.onAny(o.onAny), this.sockets[t] = i, i;
  }
  disconnect(t) {
    this.sockets[t] && (this.sockets[t].disconnect(), delete this.sockets[t]);
  }
  emit(t, n, r, o) {
    const a = this.sockets[t];
    if (!a)
      throw new Error("Socket not connected");
    o ? a.emit(n, r, o) : a.emit(n, r);
  }
  getSocket(t) {
    return this.sockets[t];
  }
}
const ht = new Fn(), Bn = (e = {}) => {
  const [t, n] = pe({}), [r, o] = pe([]), a = Be((u, p, h) => {
    o(
      (w) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: u,
          message: p,
          data: h
        },
        ...w
      ].slice(0, 50)
    );
  }, []), i = Be((u, p, h) => {
    const w = {
      ...e,
      options: {
        path: h ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    ht.connect(u, p, w, {
      onConnect: () => {
        n((N) => ({ ...N, [u]: !0 })), a("received", `Connected to ${p}`);
      },
      onDisconnect: (N) => {
        n((g) => ({ ...g, [u]: !1 })), a("error", `Disconnected from ${p} (${N})`);
      },
      onConnectError: (N) => {
        console.error(`[SocketDocs] Connection error for ${u}:`, N), n((g) => ({ ...g, [u]: !1 })), a("error", `Connection Error: ${N.message}`);
      },
      onAny: (N, ...g) => {
        a("received", `Event: ${N}`, g);
      }
    });
  }, [e, a]), l = Be((u, p) => {
    ht.disconnect(u), n((h) => ({ ...h, [u]: !1 })), a("error", `Disconnected from ${p || u}`);
  }, [a]), f = Be((u, p, h) => {
    var x, y;
    const w = ((x = e.eventRetries) == null ? void 0 : x.attempts) ?? 0, N = ((y = e.eventRetries) == null ? void 0 : y.delay) ?? 1e3, g = (E) => {
      var R;
      try {
        const O = JSON.parse(h), M = E > 0 ? ` (Reintento ${E}/${w})` : "";
        a("sent", `Emitting ${p}${M}`, O);
        let Z = !1;
        const ue = setTimeout(() => {
          !Z && E < w ? (a("error", `Timeout esperando ACK para ${p}. Reintentando en ${N}ms...`), setTimeout(() => g(E + 1), N)) : !Z && w > 0 && a("error", `Fallo final: No se recibió ACK para ${p} después de ${w} reintentos.`);
        }, ((R = e.options) == null ? void 0 : R.timeout) ?? 2e4);
        ht.emit(u, p, O, (fe) => {
          Z = !0, clearTimeout(ue), a("received", `ACK for ${p}`, fe);
        });
      } catch (O) {
        const M = O instanceof Error ? O.message : "Invalid JSON";
        console.error(`Emit error: ${M}`), a("error", `Error de emisión: ${M}`);
      }
    };
    g(0);
  }, [e, a]), m = Be(() => {
    o([]);
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
function hr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: qn } = Object.prototype, { getPrototypeOf: nt } = Object, { iterator: st, toStringTag: xr } = Symbol, ot = ((e) => (t) => {
  const n = qn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ne = (e) => (e = e.toLowerCase(), (t) => ot(t) === e), at = (e) => (t) => typeof t === e, { isArray: Le } = Array, $e = at("undefined");
function He(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && be(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gr = Ne("ArrayBuffer");
function Mn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gr(e.buffer), t;
}
const zn = at("string"), be = at("function"), yr = at("number"), We = (e) => e !== null && typeof e == "object", Hn = (e) => e === !0 || e === !1, Xe = (e) => {
  if (ot(e) !== "object")
    return !1;
  const t = nt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xr in e) && !(st in e);
}, Wn = (e) => {
  if (!We(e) || He(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Jn = Ne("Date"), Vn = Ne("File"), Kn = (e) => !!(e && typeof e.uri < "u"), Yn = (e) => e && typeof e.getParts < "u", Gn = Ne("Blob"), Xn = Ne("FileList"), Qn = (e) => We(e) && be(e.pipe);
function Zn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Qt = Zn(), Zt = typeof Qt.FormData < "u" ? Qt.FormData : void 0, es = (e) => {
  if (!e)
    return !1;
  if (Zt && e instanceof Zt)
    return !0;
  const t = nt(e);
  if (!t || t === Object.prototype || !be(e.append))
    return !1;
  const n = ot(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && be(e.toString) && e.toString() === "[object FormData]";
}, ts = Ne("URLSearchParams"), [rs, ns, ss, os] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(Ne), as = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Je(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Le(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (He(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let l;
    for (r = 0; r < i; r++)
      l = a[r], t.call(null, e[l], l, e);
  }
}
function vr(e, t) {
  if (He(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Te = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), wr = (e) => !$e(e) && e !== Te;
function jt(...e) {
  const { caseless: t, skipUndefined: n } = wr(this) && this || {}, r = {}, o = (a, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const l = t && vr(r, i) || i, f = Et(r, l) ? r[l] : void 0;
    Xe(f) && Xe(a) ? r[l] = jt(f, a) : Xe(a) ? r[l] = jt({}, a) : Le(a) ? r[l] = a.slice() : (!n || !$e(a)) && (r[l] = a);
  };
  for (let a = 0, i = e.length; a < i; a++)
    e[a] && Je(e[a], o);
  return r;
}
const is = (e, t, n, { allOwnKeys: r } = {}) => (Je(
  t,
  (o, a) => {
    n && be(o) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: hr(o, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      __proto__: null,
      value: o,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), cs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ls = (e, t, n, r) => {
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
}, ds = (e, t, n, r) => {
  let o, a, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && nt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, us = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, fs = (e) => {
  if (!e)
    return null;
  if (Le(e))
    return e;
  let t = e.length;
  if (!yr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ms = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && nt(Uint8Array)), ps = (e, t) => {
  const r = (e && e[st]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, bs = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, hs = Ne("HTMLFormElement"), xs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), Et = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), gs = Ne("RegExp"), jr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Je(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, ys = (e) => {
  jr(e, (t, n) => {
    if (be(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (be(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, vs = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Le(e) ? r(e) : r(String(e).split(t)), n;
}, ws = () => {
}, js = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Es(e) {
  return !!(e && be(e.append) && e[xr] === "FormData" && e[st]);
}
const Ns = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (We(r)) {
      if (t.has(r))
        return;
      if (He(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Le(r) ? [] : {};
        return Je(r, (a, i) => {
          const l = n(a);
          !$e(l) && (o[i] = l);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, Ss = Ne("AsyncFunction"), Rs = (e) => e && (We(e) || be(e)) && be(e.then) && be(e.catch), Er = ((e, t) => e ? setImmediate : t ? ((n, r) => (Te.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Te && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Te.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", be(Te.postMessage)), Cs = typeof queueMicrotask < "u" ? queueMicrotask.bind(Te) : typeof process < "u" && process.nextTick || Er, _s = (e) => e != null && be(e[st]), d = {
  isArray: Le,
  isArrayBuffer: gr,
  isBuffer: He,
  isFormData: es,
  isArrayBufferView: Mn,
  isString: zn,
  isNumber: yr,
  isBoolean: Hn,
  isObject: We,
  isPlainObject: Xe,
  isEmptyObject: Wn,
  isReadableStream: rs,
  isRequest: ns,
  isResponse: ss,
  isHeaders: os,
  isUndefined: $e,
  isDate: Jn,
  isFile: Vn,
  isReactNativeBlob: Kn,
  isReactNative: Yn,
  isBlob: Gn,
  isRegExp: gs,
  isFunction: be,
  isStream: Qn,
  isURLSearchParams: ts,
  isTypedArray: ms,
  isFileList: Xn,
  forEach: Je,
  merge: jt,
  extend: is,
  trim: as,
  stripBOM: cs,
  inherits: ls,
  toFlatObject: ds,
  kindOf: ot,
  kindOfTest: Ne,
  endsWith: us,
  toArray: fs,
  forEachEntry: ps,
  matchAll: bs,
  isHTMLForm: hs,
  hasOwnProperty: Et,
  hasOwnProp: Et,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: jr,
  freezeMethods: ys,
  toObjectSet: vs,
  toCamelCase: xs,
  noop: ws,
  toFiniteNumber: js,
  findKey: vr,
  global: Te,
  isContextDefined: wr,
  isSpecCompliantForm: Es,
  toJSONObject: Ns,
  isAsyncFn: Ss,
  isThenable: Rs,
  setImmediate: Er,
  asap: Cs,
  isIterable: _s
}, Os = d.toObjectSet([
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
]), Ts = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Os[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function ks(e) {
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
const As = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Ps = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ct(e, t) {
  return d.isArray(e) ? e.map((n) => Ct(n, t)) : ks(String(e).replace(t, ""));
}
const Ds = (e) => Ct(e, As), Us = (e) => Ct(e, Ps);
function Nr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return d.forEach(e.toJSON(), (n, r) => {
    t[r] = Us(n);
  }), t;
}
const er = Symbol("internals");
function ze(e) {
  return e && String(e).trim().toLowerCase();
}
function Qe(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Qe) : Ds(String(e));
}
function Is(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const $s = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function xt(e, t, n, r, o) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function Ls(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fs(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(o, a, i) {
        return this[r].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
class it {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(l, f, m) {
      const u = ze(f);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = d.findKey(o, u);
      (!p || o[p] === void 0 || m === !0 || m === void 0 && o[p] !== !1) && (o[p || f] = Qe(l));
    }
    const i = (l, f) => d.forEach(l, (m, u) => a(m, u, f));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (d.isString(t) && (t = t.trim()) && !$s(t))
      i(Ts(t), n);
    else if (d.isObject(t) && d.isIterable(t)) {
      let l = {}, f, m;
      for (const u of t) {
        if (!d.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[m = u[0]] = (f = l[m]) ? d.isArray(f) ? [...f, u[1]] : [f, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ze(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Is(o);
        if (d.isFunction(n))
          return n.call(this, o, r);
        if (d.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ze(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || xt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = ze(i), i) {
        const l = d.findKey(r, i);
        l && (!n || xt(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || xt(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return d.forEach(this, (o, a) => {
      const i = d.findKey(r, a);
      if (i) {
        n[i] = Qe(o), delete n[a];
        return;
      }
      const l = t ? Ls(a) : String(a).trim();
      l !== a && delete n[a], n[l] = Qe(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && d.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[er] = this[er] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const l = ze(i);
      r[l] || (Fs(o, i), r[l] = !0);
    }
    return d.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
it.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
d.reduceDescriptors(it.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(it);
const we = it, Bs = "[REDACTED ****]";
function qs(e) {
  if (d.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (d.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Ms(e, t) {
  const n = new Set(t.map((a) => String(a).toLowerCase())), r = [], o = (a) => {
    if (a === null || typeof a != "object" || d.isBuffer(a))
      return a;
    if (r.indexOf(a) !== -1)
      return;
    a instanceof we && (a = a.toJSON()), r.push(a);
    let i;
    if (d.isArray(a))
      i = [], a.forEach((l, f) => {
        const m = o(l);
        d.isUndefined(m) || (i[f] = m);
      });
    else {
      if (!d.isPlainObject(a) && qs(a))
        return r.pop(), a;
      i = /* @__PURE__ */ Object.create(null);
      for (const [l, f] of Object.entries(a)) {
        const m = n.has(l.toLowerCase()) ? Bs : o(f);
        d.isUndefined(m) || (i[l] = m);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
class oe extends Error {
  static from(t, n, r, o, a, i) {
    const l = new oe(t.message, n || t.code, r, o, a);
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
  constructor(t, n, r, o, a) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), o && (this.request = o), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    const t = this.config, n = t && d.hasOwnProp(t, "redact") ? t.redact : void 0, r = d.isArray(n) && n.length > 0 ? Ms(t, n) : d.toJSONObject(t);
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
oe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
oe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
oe.ECONNABORTED = "ECONNABORTED";
oe.ETIMEDOUT = "ETIMEDOUT";
oe.ECONNREFUSED = "ECONNREFUSED";
oe.ERR_NETWORK = "ERR_NETWORK";
oe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
oe.ERR_DEPRECATED = "ERR_DEPRECATED";
oe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
oe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
oe.ERR_CANCELED = "ERR_CANCELED";
oe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
oe.ERR_INVALID_URL = "ERR_INVALID_URL";
oe.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const _ = oe, zs = null;
function Nt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Sr(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function gt(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Sr(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Hs(e) {
  return d.isArray(e) && !e.some(Nt);
}
const Ws = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ct(e, t, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = d.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(x, y) {
      return !d.isUndefined(y[x]);
    }
  );
  const r = n.metaTokens, o = n.visitor || p, a = n.dots, i = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, m = l && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null)
      return "";
    if (d.isDate(g))
      return g.toISOString();
    if (d.isBoolean(g))
      return g.toString();
    if (!m && d.isBlob(g))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(g) || d.isTypedArray(g) ? m && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function p(g, x, y) {
    let E = g;
    if (d.isReactNative(t) && d.isReactNativeBlob(g))
      return t.append(gt(y, x, a), u(g)), !1;
    if (g && !y && typeof g == "object") {
      if (d.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), g = JSON.stringify(g);
      else if (d.isArray(g) && Hs(g) || (d.isFileList(g) || d.endsWith(x, "[]")) && (E = d.toArray(g)))
        return x = Sr(x), E.forEach(function(O, M) {
          !(d.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? gt([x], M, a) : i === null ? x : x + "[]",
            u(O)
          );
        }), !1;
    }
    return Nt(g) ? !0 : (t.append(gt(y, x, a), u(g)), !1);
  }
  const h = [], w = Object.assign(Ws, {
    defaultVisitor: p,
    convertValue: u,
    isVisitable: Nt
  });
  function N(g, x, y = 0) {
    if (!d.isUndefined(g)) {
      if (y > f)
        throw new _(
          "Object is too deeply nested (" + y + " levels). Max depth: " + f,
          _.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (h.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      h.push(g), d.forEach(g, function(R, O) {
        (!(d.isUndefined(R) || R === null) && o.call(t, R, d.isString(O) ? O.trim() : O, x, w)) === !0 && N(R, x ? x.concat(O) : [O], y + 1);
      }), h.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return N(e), t;
}
function tr(e) {
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
function _t(e, t) {
  this._pairs = [], e && ct(e, this, t);
}
const Rr = _t.prototype;
Rr.append = function(t, n) {
  this._pairs.push([t, n]);
};
Rr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, tr);
  } : tr;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Js(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Cr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Js, o = d.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let i;
  if (a ? i = a(t, o) : i = d.isURLSearchParams(t) ? t.toString() : new _t(t, o).toString(r), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vs {
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
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rr = Vs, Ot = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Ks = typeof URLSearchParams < "u" ? URLSearchParams : _t, Ys = typeof FormData < "u" ? FormData : null, Gs = typeof Blob < "u" ? Blob : null, Xs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ks,
    FormData: Ys,
    Blob: Gs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tt = typeof window < "u" && typeof document < "u", St = typeof navigator == "object" && navigator || void 0, Qs = Tt && (!St || ["ReactNative", "NativeScript", "NS"].indexOf(St.product) < 0), Zs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), eo = Tt && window.location.href || "http://localhost", to = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tt,
  hasStandardBrowserEnv: Qs,
  hasStandardBrowserWebWorkerEnv: Zs,
  navigator: St,
  origin: eo
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...to,
  ...Xs
};
function ro(e, t) {
  return ct(e, new ce.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ce.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function no(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function so(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function _r(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const l = Number.isFinite(+i), f = a >= n.length;
    return i = !i && d.isArray(o) ? o.length : i, f ? (d.hasOwnProp(o, i) ? o[i] = d.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !l) : ((!d.hasOwnProp(o, i) || !d.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && d.isArray(o[i]) && (o[i] = so(o[i])), !l);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, o) => {
      t(no(r), o, n, 0);
    }), n;
  }
  return null;
}
const Ue = (e, t) => e != null && d.hasOwnProp(e, t) ? e[t] : void 0;
function oo(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const kt = {
  transitional: Ot,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = d.isObject(t);
      if (a && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
        return o ? JSON.stringify(_r(t)) : t;
      if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
        return t;
      if (d.isArrayBufferView(t))
        return t.buffer;
      if (d.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (a) {
        const f = Ue(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ro(t, f).toString();
        if ((l = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const m = Ue(this, "env"), u = m && m.FormData;
          return ct(
            l ? { "files[]": t } : t,
            u && new u(),
            f
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), oo(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Ue(this, "transitional") || kt.transitional, r = n && n.forcedJSONParsing, o = Ue(this, "responseType"), a = o === "json";
      if (d.isResponse(t) || d.isReadableStream(t))
        return t;
      if (t && d.isString(t) && (r && !o || a)) {
        const l = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(t, Ue(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? _.from(f, _.ERR_BAD_RESPONSE, this, null, Ue(this, "response")) : f;
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
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
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
d.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  kt.headers[e] = {};
});
const At = kt;
function yt(e, t) {
  const n = this || At, r = t || n, o = we.from(r.headers);
  let a = r.data;
  return d.forEach(e, function(l) {
    a = l.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Or(e) {
  return !!(e && e.__CANCEL__);
}
class ao extends _ {
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
    super(t ?? "canceled", _.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const Ve = ao;
function Tr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new _(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? _.ERR_BAD_REQUEST : _.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function io(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function co(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const m = Date.now(), u = r[a];
    i || (i = m), n[o] = f, r[o] = m;
    let p = a, h = 0;
    for (; p !== o; )
      h += n[p++], p = p % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), m - i < t)
      return;
    const w = u && m - u;
    return w ? Math.round(h * 1e3 / w) : void 0;
  };
}
function lo(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (m, u = Date.now()) => {
    n = u, o = null, a && (clearTimeout(a), a = null), e(...m);
  };
  return [(...m) => {
    const u = Date.now(), p = u - n;
    p >= r ? i(m, u) : (o = m, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - p)));
  }, () => o && i(o)];
}
const tt = (e, t, n = 3) => {
  let r = 0;
  const o = co(50, 250);
  return lo((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const i = a.loaded, l = a.lengthComputable ? a.total : void 0, f = l != null ? Math.min(i, l) : i, m = Math.max(0, f - r), u = o(m);
    r = Math.max(r, f);
    const p = {
      loaded: f,
      total: l,
      progress: l ? f / l : void 0,
      bytes: m,
      rate: u || void 0,
      estimated: u && l ? (l - f) / u : void 0,
      event: a,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, nr = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, sr = (e) => (...t) => d.asap(() => e(...t)), uo = ce.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, ce.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ce.origin),
  ce.navigator && /(msie|trident)/i.test(ce.navigator.userAgent)
) : () => !0, fo = ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, i) {
      if (typeof document > "u")
        return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), d.isString(r) && l.push(`path=${r}`), d.isString(o) && l.push(`domain=${o}`), a === !0 && l.push("secure"), d.isString(i) && l.push(`SameSite=${i}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u")
        return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), o = r.indexOf("=");
        if (o !== -1 && r.slice(0, o) === e)
          return decodeURIComponent(r.slice(o + 1));
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
function mo(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function po(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kr(e, t, n) {
  let r = !mo(t);
  return e && (r || n === !1) ? po(e, t) : t;
}
const or = (e) => e instanceof we ? { ...e } : e;
function ke(e, t) {
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
  function r(m, u, p, h) {
    return d.isPlainObject(m) && d.isPlainObject(u) ? d.merge.call({ caseless: h }, m, u) : d.isPlainObject(u) ? d.merge({}, u) : d.isArray(u) ? u.slice() : u;
  }
  function o(m, u, p, h) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(m))
        return r(void 0, m, p, h);
    } else
      return r(m, u, p, h);
  }
  function a(m, u) {
    if (!d.isUndefined(u))
      return r(void 0, u);
  }
  function i(m, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, u);
  }
  function l(m, u, p) {
    if (d.hasOwnProp(t, p))
      return r(m, u);
    if (d.hasOwnProp(e, p))
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
    headers: (m, u, p) => o(or(m), or(u), p, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return;
    const p = d.hasOwnProp(f, u) ? f[u] : o, h = d.hasOwnProp(e, u) ? e[u] : void 0, w = d.hasOwnProp(t, u) ? t[u] : void 0, N = p(h, w, u);
    d.isUndefined(N) && p !== l || (n[u] = N);
  }), n;
}
const bo = ["content-type", "content-length"];
function ho(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, o]) => {
    bo.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const xo = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Ar = (e) => {
  const t = ke({}, e), n = (h) => d.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const a = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), m = n("baseURL"), u = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = l = we.from(l), t.url = Cr(
    kr(m, p, u),
    e.params,
    e.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? xo(f.password) : ""))
  ), d.isFormData(r) && (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : d.isFunction(r.getHeaders) && ho(l, r.getHeaders(), n("formDataHeaderPolicy"))), ce.hasStandardBrowserEnv && (d.isFunction(o) && (o = o(t)), o === !0 || o == null && uo(t.url))) {
    const w = a && i && fo.read(i);
    w && l.set(a, w);
  }
  return t;
}, go = typeof XMLHttpRequest < "u", yo = go && function(e) {
  return new Promise(function(n, r) {
    const o = Ar(e);
    let a = o.data;
    const i = we.from(o.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: m } = o, u, p, h, w, N;
    function g() {
      w && w(), N && N(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let x = new XMLHttpRequest();
    x.open(o.method.toUpperCase(), o.url, !0), x.timeout = o.timeout;
    function y() {
      if (!x)
        return;
      const R = we.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), M = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: R,
        config: e,
        request: x
      };
      Tr(
        function(ue) {
          n(ue), g();
        },
        function(ue) {
          r(ue), g();
        },
        M
      ), x = null;
    }
    "onloadend" in x ? x.onloadend = y : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.startsWith("file:")) || setTimeout(y);
    }, x.onabort = function() {
      x && (r(new _("Request aborted", _.ECONNABORTED, e, x)), g(), x = null);
    }, x.onerror = function(O) {
      const M = O && O.message ? O.message : "Network Error", Z = new _(M, _.ERR_NETWORK, e, x);
      Z.event = O || null, r(Z), g(), x = null;
    }, x.ontimeout = function() {
      let O = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const M = o.transitional || Ot;
      o.timeoutErrorMessage && (O = o.timeoutErrorMessage), r(
        new _(
          O,
          M.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
          e,
          x
        )
      ), g(), x = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in x && d.forEach(Nr(i), function(O, M) {
      x.setRequestHeader(M, O);
    }), d.isUndefined(o.withCredentials) || (x.withCredentials = !!o.withCredentials), l && l !== "json" && (x.responseType = o.responseType), m && ([h, N] = tt(m, !0), x.addEventListener("progress", h)), f && x.upload && ([p, w] = tt(f), x.upload.addEventListener("progress", p), x.upload.addEventListener("loadend", w)), (o.cancelToken || o.signal) && (u = (R) => {
      x && (r(!R || R.type ? new Ve(null, e, x) : R), x.abort(), g(), x = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const E = io(o.url);
    if (E && !ce.protocols.includes(E)) {
      r(
        new _(
          "Unsupported protocol " + E + ":",
          _.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    x.send(a || null);
  });
}, vo = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(f) {
    if (!r) {
      r = !0, i();
      const m = f instanceof Error ? f : this.reason;
      n.abort(
        m instanceof _ ? m : new Ve(m instanceof Error ? m.message : m)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, o(new _(`timeout of ${t}ms exceeded`, _.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((f) => {
      f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((f) => f.addEventListener("abort", o));
  const { signal: l } = n;
  return l.unsubscribe = () => d.asap(i), l;
}, wo = vo, jo = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Eo = async function* (e, t) {
  for await (const n of No(e))
    yield* jo(n, t);
}, No = async function* (e) {
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
}, ar = (e, t, n, r) => {
  const o = Eo(e, t);
  let a = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream(
    {
      async pull(f) {
        try {
          const { done: m, value: u } = await o.next();
          if (m) {
            l(), f.close();
            return;
          }
          let p = u.byteLength;
          if (n) {
            let h = a += p;
            n(h);
          }
          f.enqueue(new Uint8Array(u));
        } catch (m) {
          throw l(m), m;
        }
      },
      cancel(f) {
        return l(f), o.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
function So(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:"))
    return 0;
  const t = e.indexOf(",");
  if (t < 0)
    return 0;
  const n = e.slice(5, t), r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let i = r.length;
    const l = r.length;
    for (let w = 0; w < l; w++)
      if (r.charCodeAt(w) === 37 && w + 2 < l) {
        const N = r.charCodeAt(w + 1), g = r.charCodeAt(w + 2);
        (N >= 48 && N <= 57 || N >= 65 && N <= 70 || N >= 97 && N <= 102) && (g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102) && (i -= 2, w += 2);
      }
    let f = 0, m = l - 1;
    const u = (w) => w >= 2 && r.charCodeAt(w - 2) === 37 && // '%'
    r.charCodeAt(w - 1) === 51 && // '3'
    (r.charCodeAt(w) === 68 || r.charCodeAt(w) === 100);
    m >= 0 && (r.charCodeAt(m) === 61 ? (f++, m--) : u(m) && (f++, m -= 3)), f === 1 && m >= 0 && (r.charCodeAt(m) === 61 || u(m)) && f++;
    const h = Math.floor(i / 4) * 3 - (f || 0);
    return h > 0 ? h : 0;
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
const Pt = "1.16.1", ir = 64 * 1024, { isFunction: Ge } = d, cr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ro = (e) => {
  const t = d.global !== void 0 && d.global !== null ? d.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = d.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: o, Request: a, Response: i } = e, l = o ? Ge(o) : typeof fetch == "function", f = Ge(a), m = Ge(i);
  if (!l)
    return !1;
  const u = l && Ge(n), p = l && (typeof r == "function" ? ((y) => (E) => y.encode(E))(new r()) : async (y) => new Uint8Array(await new a(y).arrayBuffer())), h = f && u && cr(() => {
    let y = !1;
    const E = new a(ce.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }), R = E.headers.has("Content-Type");
    return E.body != null && E.body.cancel(), y && !R;
  }), w = m && u && cr(() => d.isReadableStream(new i("").body)), N = {
    stream: w && ((y) => y.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !N[y] && (N[y] = (E, R) => {
      let O = E && E[y];
      if (O)
        return O.call(E);
      throw new _(
        `Response type '${y}' is not supported`,
        _.ERR_NOT_SUPPORT,
        R
      );
    });
  });
  const g = async (y) => {
    if (y == null)
      return 0;
    if (d.isBlob(y))
      return y.size;
    if (d.isSpecCompliantForm(y))
      return (await new a(ce.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(y) || d.isArrayBuffer(y))
      return y.byteLength;
    if (d.isURLSearchParams(y) && (y = y + ""), d.isString(y))
      return (await p(y)).byteLength;
  }, x = async (y, E) => {
    const R = d.toFiniteNumber(y.getContentLength());
    return R ?? g(E);
  };
  return async (y) => {
    let {
      url: E,
      method: R,
      data: O,
      signal: M,
      cancelToken: Z,
      timeout: ue,
      onDownloadProgress: fe,
      onUploadProgress: je,
      responseType: le,
      headers: he,
      withCredentials: xe = "same-origin",
      fetchOptions: ne,
      maxContentLength: V,
      maxBodyLength: ae
    } = Ar(y);
    const ge = d.isNumber(V) && V > -1, Se = d.isNumber(ae) && ae > -1;
    let Ee = o || fetch;
    le = le ? (le + "").toLowerCase() : "text";
    let ie = wo(
      [M, Z && Z.toAbortSignal()],
      ue
    ), v = null;
    const L = ie && ie.unsubscribe && (() => {
      ie.unsubscribe();
    });
    let K;
    try {
      if (ge && typeof E == "string" && E.startsWith("data:") && So(E) > V)
        throw new _(
          "maxContentLength size of " + V + " exceeded",
          _.ERR_BAD_RESPONSE,
          y,
          v
        );
      if (Se && R !== "get" && R !== "head") {
        const A = await x(he, O);
        if (typeof A == "number" && isFinite(A) && A > ae)
          throw new _(
            "Request body larger than maxBodyLength limit",
            _.ERR_BAD_REQUEST,
            y,
            v
          );
      }
      if (je && h && R !== "get" && R !== "head" && (K = await x(he, O)) !== 0) {
        let A = new a(E, {
          method: "POST",
          body: O,
          duplex: "half"
        }), J;
        if (d.isFormData(O) && (J = A.headers.get("content-type")) && he.setContentType(J), A.body) {
          const [te, se] = nr(
            K,
            tt(sr(je))
          );
          O = ar(A.body, ir, te, se);
        }
      }
      d.isString(xe) || (xe = xe ? "include" : "omit");
      const S = f && "credentials" in a.prototype;
      if (d.isFormData(O)) {
        const A = he.getContentType();
        A && /^multipart\/form-data/i.test(A) && !/boundary=/i.test(A) && he.delete("content-type");
      }
      he.set("User-Agent", "axios/" + Pt, !1);
      const $ = {
        ...ne,
        signal: ie,
        method: R.toUpperCase(),
        headers: Nr(he.normalize()),
        body: O,
        duplex: "half",
        credentials: S ? xe : void 0
      };
      v = f && new a(E, $);
      let ee = await (f ? Ee(v, ne) : Ee(E, $));
      if (ge) {
        const A = d.toFiniteNumber(ee.headers.get("content-length"));
        if (A != null && A > V)
          throw new _(
            "maxContentLength size of " + V + " exceeded",
            _.ERR_BAD_RESPONSE,
            y,
            v
          );
      }
      const G = w && (le === "stream" || le === "response");
      if (w && ee.body && (fe || ge || G && L)) {
        const A = {};
        ["status", "statusText", "headers"].forEach((P) => {
          A[P] = ee[P];
        });
        const J = d.toFiniteNumber(ee.headers.get("content-length")), [te, se] = fe && nr(
          J,
          tt(sr(fe), !0)
        ) || [];
        let C = 0;
        const k = (P) => {
          if (ge && (C = P, C > V))
            throw new _(
              "maxContentLength size of " + V + " exceeded",
              _.ERR_BAD_RESPONSE,
              y,
              v
            );
          te && te(P);
        };
        ee = new i(
          ar(ee.body, ir, k, () => {
            se && se(), L && L();
          }),
          A
        );
      }
      le = le || "text";
      let W = await N[d.findKey(N, le) || "text"](
        ee,
        y
      );
      if (ge && !w && !G) {
        let A;
        if (W != null && (typeof W.byteLength == "number" ? A = W.byteLength : typeof W.size == "number" ? A = W.size : typeof W == "string" && (A = typeof r == "function" ? new r().encode(W).byteLength : W.length)), typeof A == "number" && A > V)
          throw new _(
            "maxContentLength size of " + V + " exceeded",
            _.ERR_BAD_RESPONSE,
            y,
            v
          );
      }
      return !G && L && L(), await new Promise((A, J) => {
        Tr(A, J, {
          data: W,
          headers: we.from(ee.headers),
          status: ee.status,
          statusText: ee.statusText,
          config: y,
          request: v
        });
      });
    } catch (S) {
      if (L && L(), ie && ie.aborted && ie.reason instanceof _) {
        const $ = ie.reason;
        throw $.config = y, v && ($.request = v), S !== $ && ($.cause = S), $;
      }
      throw S && S.name === "TypeError" && /Load failed|fetch/i.test(S.message) ? Object.assign(
        new _(
          "Network Error",
          _.ERR_NETWORK,
          y,
          v,
          S && S.response
        ),
        {
          cause: S.cause || S
        }
      ) : _.from(S, S && S.code, y, v, S && S.response);
    }
  };
}, Co = /* @__PURE__ */ new Map(), Pr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let i = a.length, l = i, f, m, u = Co;
  for (; l--; )
    f = a[l], m = u.get(f), m === void 0 && u.set(f, m = l ? /* @__PURE__ */ new Map() : Ro(t)), u = m;
  return m;
};
Pr();
const Dt = {
  http: zs,
  xhr: yo,
  fetch: {
    get: Pr
  }
};
d.forEach(Dt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const lr = (e) => `- ${e}`, _o = (e) => d.isFunction(e) || e === null || e === !1;
function Oo(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let l;
    if (o = r, !_o(r) && (o = Dt[(l = String(r)).toLowerCase()], o === void 0))
      throw new _(`Unknown adapter '${l}'`);
    if (o && (d.isFunction(o) || (o = o.get(t))))
      break;
    a[l || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([f, m]) => `adapter ${f} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? i.length > 1 ? `since :
` + i.map(lr).join(`
`) : " " + lr(i[0]) : "as no adapter specified";
    throw new _(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Dr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Oo,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Dt
};
function vt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ve(null, e);
}
function dr(e) {
  return vt(e), e.headers = we.from(e.headers), e.data = yt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Dr.getAdapter(e.adapter || At.adapter, e)(e).then(
    function(r) {
      vt(e), e.response = r;
      try {
        r.data = yt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = we.from(r.headers), r;
    },
    function(r) {
      if (!Or(r) && (vt(e), r && r.response)) {
        e.response = r.response;
        try {
          r.response.data = yt.call(
            e,
            e.transformResponse,
            r.response
          );
        } finally {
          delete e.response;
        }
        r.response.headers = we.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ur = {};
lt.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Pt + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, l) => {
    if (t === !1)
      throw new _(
        o(i, " has been removed" + (n ? " in " + n : "")),
        _.ERR_DEPRECATED
      );
    return n && !ur[i] && (ur[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, l) : !0;
  };
};
lt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function To(e, t, n) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (i) {
      const l = e[a], f = l === void 0 || i(l, a, e);
      if (f !== !0)
        throw new _(
          "option " + a + " must be " + f,
          _.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new _("Unknown option " + a, _.ERR_BAD_OPTION);
  }
}
const Ze = {
  assertOptions: To,
  validators: lt
}, ve = Ze.validators;
class rt {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new rr(),
      response: new rr()
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
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const a = (() => {
          if (!o.stack)
            return "";
          const i = o.stack.indexOf(`
`);
          return i === -1 ? "" : o.stack.slice(i + 1);
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ke(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Ze.assertOptions(
      r,
      {
        silentJSONParsing: ve.transitional(ve.boolean),
        forcedJSONParsing: ve.transitional(ve.boolean),
        clarifyTimeoutError: ve.transitional(ve.boolean),
        legacyInterceptorReqResOrdering: ve.transitional(ve.boolean)
      },
      !1
    ), o != null && (d.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ze.assertOptions(
      o,
      {
        encode: ve.function,
        serialize: ve.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ze.assertOptions(
      n,
      {
        baseUrl: ve.spelling("baseURL"),
        withXsrfToken: ve.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && d.merge(a.common, a[n.method]);
    a && d.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (N) => {
      delete a[N];
    }), n.headers = we.concat(i, a);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      f = f && g.synchronous;
      const x = n.transitional || Ot;
      x && x.legacyInterceptorReqResOrdering ? l.unshift(g.fulfilled, g.rejected) : l.push(g.fulfilled, g.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(g) {
      m.push(g.fulfilled, g.rejected);
    });
    let u, p = 0, h;
    if (!f) {
      const N = [dr.bind(this), void 0];
      for (N.unshift(...l), N.push(...m), h = N.length, u = Promise.resolve(n); p < h; )
        u = u.then(N[p++], N[p++]);
      return u;
    }
    h = l.length;
    let w = n;
    for (; p < h; ) {
      const N = l[p++], g = l[p++];
      try {
        w = N(w);
      } catch (x) {
        g.call(this, x);
        break;
      }
    }
    try {
      u = dr.call(this, w);
    } catch (N) {
      return Promise.reject(N);
    }
    for (p = 0, h = m.length; p < h; )
      u = u.then(m[p++], m[p++]);
    return u;
  }
  getUri(t) {
    t = ke(this.defaults, t);
    const n = kr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Cr(n, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  rt.prototype[t] = function(n, r) {
    return this.request(
      ke(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
d.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(a, i, l) {
      return this.request(
        ke(l || {}, {
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
  rt.prototype[t] = n(), t !== "query" && (rt.prototype[t + "Form"] = n(!0));
});
const et = rt;
class Ut {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const i = new Promise((l) => {
        r.subscribe(l), a = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, l) {
      r.reason || (r.reason = new Ve(a, i, l), n(r.reason));
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
      token: new Ut(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const ko = Ut;
function Ao(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Po(e) {
  return d.isObject(e) && e.isAxiosError === !0;
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
const Do = Rt;
function Ur(e) {
  const t = new et(e), n = hr(et.prototype.request, t);
  return d.extend(n, et.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ur(ke(e, o));
  }, n;
}
const Q = Ur(At);
Q.Axios = et;
Q.CanceledError = Ve;
Q.CancelToken = ko;
Q.isCancel = Or;
Q.VERSION = Pt;
Q.toFormData = ct;
Q.AxiosError = _;
Q.Cancel = Q.CanceledError;
Q.all = function(t) {
  return Promise.all(t);
};
Q.spread = Ao;
Q.isAxiosError = Po;
Q.mergeConfig = ke;
Q.AxiosHeaders = we;
Q.formToJSON = (e) => _r(d.isHTMLForm(e) ? new FormData(e) : e);
Q.getAdapter = Dr.getAdapter;
Q.HttpStatusCode = Do;
Q.default = Q;
const Uo = Q;
class Io {
  constructor(t = {}) {
    Ye(this, "instance");
    Ye(this, "jsonPath");
    this.jsonPath = t.jsonPath || "/socket-docs/json", this.instance = Uo.create({
      baseURL: t.baseUrl || window.location.origin,
      timeout: 1e4
    });
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
  }
}
const $o = (e) => new Io(e), Ir = "socket_docs_payloads", Lo = (e) => {
  const t = {};
  if (!e || !e.gateways)
    return t;
  const n = localStorage.getItem(Ir), r = n ? JSON.parse(n) : {};
  return e.gateways.forEach((o) => {
    o.events.forEach((a) => {
      var l;
      const i = `${o.name}-${a.event}`;
      t[i] = r[i] || JSON.stringify(
        ((l = a.payloadSchema) == null ? void 0 : l.example) ?? {},
        null,
        2
      );
    });
  }), t;
}, Fo = (e = {}) => {
  const [t, n] = pe(null), [r, o] = pe({}), [a, i] = pe({}), [l, f] = pe(!0), [m, u] = pe(null), p = fr(() => $o(e), [e.baseUrl, e.jsonPath]);
  return Ie(() => {
    f(!0), p.fetchDocs().then((w) => {
      n(w), o(Lo(w)), u(null);
    }).catch((w) => {
      console.error("Failed to fetch socket docs:", w), u(w instanceof Error ? w : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [p]), Ie(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Ir, JSON.stringify(r));
  }, [r]), {
    data: t,
    payloads: r,
    expanded: a,
    loading: l,
    error: m,
    setPayloads: o,
    toggleExpand: (w) => {
      i((N) => ({ ...N, [w]: !N[w] }));
    }
  };
}, Re = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search"
}, Bo = (e) => {
  var x;
  const [t, n] = pe(() => {
    const y = localStorage.getItem(Re.GATEWAY_IDX), E = y !== null ? parseInt(y) : 0;
    return !isNaN(E) && E >= 0 ? E : 0;
  }), [r, o] = pe(() => {
    const y = localStorage.getItem(Re.EVENT_IDX);
    return y ? parseInt(y) : -1;
  }), [a, i] = pe(() => localStorage.getItem(Re.SEARCH) || ""), [l, f] = pe(!1), [m, u] = pe(() => localStorage.getItem(Re.THEME) || "dark");
  Ie(() => {
    localStorage.setItem(Re.THEME, m), m === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [m]), Ie(() => {
    localStorage.setItem(Re.GATEWAY_IDX, t.toString());
  }, [t]), Ie(() => {
    localStorage.setItem(Re.EVENT_IDX, r.toString());
  }, [r]), Ie(() => {
    localStorage.setItem(Re.SEARCH, a);
  }, [a]);
  const p = fr(() => e ? a ? e.gateways.map((y) => ({
    ...y,
    events: y.events.filter(
      (E) => E.event.toLowerCase().includes(a.toLowerCase()) || y.name.toLowerCase().includes(a.toLowerCase())
    )
  })).filter((y) => y.events.length > 0) : e.gateways : [], [e, a]), h = p[t], w = (x = h == null ? void 0 : h.events) == null ? void 0 : x[r];
  return {
    // ...
    activeGatewayIdx: t,
    setActiveGatewayIdx: n,
    activeEventIdx: r,
    setActiveEventIdx: o,
    searchQuery: a,
    setSearchQuery: i,
    isPaused: l,
    setIsPaused: f,
    theme: m,
    toggleTheme: () => {
      u((y) => y === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const y = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), E = URL.createObjectURL(y), R = document.createElement("a");
      R.href = E, R.download = "socket-docs-contract.json", document.body.appendChild(R), R.click(), document.body.removeChild(R), URL.revokeObjectURL(E);
    },
    activeGateway: h,
    activeEvent: w,
    filteredGateways: p
  };
}, Oe = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, Wo = () => {
  var se;
  const e = F.useMemo(() => {
    var k;
    const C = window.SOCKET_DOCS_CONFIG || {};
    return !!C.standalone || !!((k = C.api) != null && k.jsonPath) && C.api.jsonPath !== "/socket-docs/json" || !window.location.pathname.includes("socket-docs");
  }, []), [t, n] = F.useState(() => {
    const k = (window.SOCKET_DOCS_CONFIG || {}).api || {}, P = localStorage.getItem(Oe.API), q = P ? JSON.parse(P) : {}, re = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
    k.baseUrl && (re.baseUrl = k.baseUrl), k.jsonPath && (re.jsonPath = k.jsonPath), q.baseUrl && (re.baseUrl = q.baseUrl);
    const U = q.baseUrl ? q.baseUrl.includes(window.location.host) : !0;
    return q.jsonPath && (!e || !U) && (re.jsonPath = q.jsonPath), re;
  }), [r, o] = F.useState(() => {
    const k = (window.SOCKET_DOCS_CONFIG || {}).socket, P = localStorage.getItem(Oe.SOCKET), q = P ? JSON.parse(P) : null, U = { ...{
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
    return k && Object.assign(U, k), q && Object.assign(U, q), U;
  }), [a, i] = F.useState(!1), [l, f] = F.useState(null), [m, u] = F.useState(!1), p = F.useMemo(() => t, [t]), { data: h, payloads: w, setPayloads: N, expanded: g, toggleExpand: x, loading: y, error: E } = Fo(p), R = F.useMemo(() => ({
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
  }), [r]), { connected: O, logs: M, connect: Z, disconnect: ue, emitEvent: fe, clearLogs: je } = Bn(R), le = F.useMemo(() => {
    if (!h)
      return ["/"];
    const C = /* @__PURE__ */ new Set(["/"]);
    return h.gateways.forEach((k) => C.add(k.namespace)), Array.from(C);
  }, [h]), he = F.useMemo(() => {
    if (!h)
      return ["/socket.io"];
    const C = /* @__PURE__ */ new Set(["/socket.io"]);
    return h.gateways.forEach((k) => C.add(k.path)), Array.from(C);
  }, [h]), {
    activeGatewayIdx: xe,
    setActiveGatewayIdx: ne,
    activeEventIdx: V,
    setActiveEventIdx: ae,
    searchQuery: ge,
    setSearchQuery: Se,
    isPaused: Ee,
    setIsPaused: ie,
    theme: v,
    toggleTheme: L,
    exportContract: K,
    activeGateway: S,
    activeEvent: $,
    filteredGateways: ee
  } = Bo(h);
  F.useEffect(() => {
    if (S) {
      const C = t.baseUrl.replace(/\/$/, ""), k = r.namespace === "/" ? S.namespace : r.namespace, P = r.path === "/socket.io" ? S.path : r.path, q = `${C}${J(k)}`;
      if (r.autoConnect) {
        const re = setTimeout(() => {
          Z(S.name, q, P);
        }, 300);
        return () => clearTimeout(re);
      }
    }
  }, [
    S == null ? void 0 : S.name,
    r.autoConnect,
    r.namespace,
    r.path,
    r.auth.token,
    t.baseUrl,
    Z
  ]);
  const G = (C, k) => {
    const P = {
      ...C,
      baseUrl: C.baseUrl || window.location.origin
    };
    localStorage.setItem(Oe.API, JSON.stringify(P)), localStorage.setItem(Oe.SOCKET, JSON.stringify(k)), n(P), o(k), i(!1), window.location.reload();
  }, W = () => {
    Object.values(Oe).forEach((C) => localStorage.removeItem(C)), localStorage.removeItem("socket_docs_payloads"), localStorage.removeItem("socket_docs_theme"), localStorage.removeItem("socket_docs_gateway_idx"), localStorage.removeItem("socket_docs_event_idx"), localStorage.removeItem("socket_docs_search"), window.location.reload();
  }, A = () => {
    if (!S)
      return;
    const C = t.baseUrl.replace(/\/$/, ""), k = r.namespace === "/" ? S.namespace : r.namespace, P = r.path === "/socket.io" ? S.path : r.path, q = `${C}${J(k)}`;
    O[S.name] ? ue(S.name, k) : Z(S.name, q, P);
  }, J = (C) => C.startsWith("/") ? C : `/${C}`;
  if (y)
    return /* @__PURE__ */ s.jsx(Gt, {});
  if (E) {
    const C = ((se = E.config) == null ? void 0 : se.url) || t.jsonPath, k = async () => {
      u(!0);
      try {
        const P = await br();
        if (f(P.servers), P.servers.length === 1) {
          const q = P.servers[0], re = { ...t, baseUrl: q.baseUrl, jsonPath: q.jsonPath };
          localStorage.setItem(Oe.API, JSON.stringify(re)), window.location.reload();
        }
      } finally {
        u(!1);
      }
    };
    return /* @__PURE__ */ s.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 p-4 ${v === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ s.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ s.jsx("p", { className: "text-text-muted text-center max-w-lg", children: E.message }),
      /* @__PURE__ */ s.jsxs("p", { className: "text-xs text-text-muted opacity-50", children: [
        "URL: ",
        C
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-3 flex-wrap justify-center", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => i(!0),
            className: "px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors",
            children: "Configurar API"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors",
            children: "Reintentar"
          }
        ),
        e && /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: k,
            disabled: m,
            className: "px-6 py-2 bg-bg-secondary border border-brand-emerald/30 rounded-md font-bold text-brand-emerald hover:bg-brand-emerald/10 transition-colors disabled:opacity-50",
            children: m ? "Buscando…" : "Detectar servidores locales"
          }
        )
      ] }),
      e && l && l.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "mt-2 w-full max-w-lg rounded border border-border-subtle bg-bg-secondary p-3", children: [
        /* @__PURE__ */ s.jsx("p", { className: "mb-2 text-xs font-semibold text-brand-emerald", children: "Servidores encontrados:" }),
        /* @__PURE__ */ s.jsx("div", { className: "space-y-2", children: l.map((P) => /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              const q = { ...t, baseUrl: P.baseUrl, jsonPath: P.jsonPath };
              localStorage.setItem(Oe.API, JSON.stringify(q)), window.location.reload();
            },
            className: "flex w-full items-center justify-between rounded border border-border-subtle px-3 py-2 text-left hover:border-brand-emerald/50 hover:bg-bg-primary transition-colors",
            children: [
              /* @__PURE__ */ s.jsxs("span", { className: "text-sm font-medium", children: [
                P.baseUrl,
                /* @__PURE__ */ s.jsx("span", { className: "text-text-muted font-normal", children: P.jsonPath })
              ] }),
              /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-text-muted", children: [
                P.gateways,
                " gateways · :",
                P.port
              ] })
            ]
          },
          `${P.baseUrl}${P.jsonPath}`
        )) })
      ] }),
      e && l && l.length === 0 && /* @__PURE__ */ s.jsxs("p", { className: "text-xs text-text-muted max-w-lg text-center", children: [
        "No se encontraron servidores locales. Asegúrate de que tu app NestJS esté corriendo con ",
        /* @__PURE__ */ s.jsx("code", { className: "px-1 py-0.5 bg-bg-secondary rounded", children: "SocketDocsModule.setup(app)" }),
        " y que el puerto esté accesible."
      ] }),
      /* @__PURE__ */ s.jsx(
        Xt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: G,
          onClear: W,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: v,
          activeGatewayNamespace: S == null ? void 0 : S.namespace
        }
      )
    ] });
  }
  if (!h)
    return /* @__PURE__ */ s.jsx(Gt, {});
  const te = S && $ ? `${S.name}-${$.event}` : "";
  return /* @__PURE__ */ s.jsxs("div", { className: `flex min-h-screen font-sans text-text-primary ${v === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ s.jsx(
      _n,
      {
        gateways: ee,
        activeGatewayIdx: xe,
        activeEventIdx: V,
        onSelectGateway: ne,
        onSelectEvent: ae,
        searchQuery: ge,
        onSearchChange: Se,
        onExport: K,
        expanded: g,
        onToggleExpand: x
      }
    ),
    /* @__PURE__ */ s.jsxs("main", { className: "flex flex-1 flex-col bg-bg-secondary", children: [
      /* @__PURE__ */ s.jsx(
        On,
        {
          connected: S ? !!O[S.name] : !1,
          gatewayPath: S ? `${t.baseUrl.replace(/https?:\/\//, "")}${S.path}` : `${t.baseUrl.replace(/https?:\/\//, "")}${r.path || "/socket.io"}`,
          namespace: r.namespace !== "/" ? r.namespace : (S == null ? void 0 : S.namespace) || "/",
          namespaces: le,
          path: r.path !== "/socket.io" ? r.path : (S == null ? void 0 : S.path) || "/socket.io",
          paths: he,
          theme: v,
          onToggleTheme: L,
          onOpenSettings: () => i(!0),
          onNamespaceChange: (C) => o((k) => ({ ...k, namespace: C })),
          onPathChange: (C) => o((k) => ({ ...k, path: C })),
          onConnect: A
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row overflow-hidden", children: S && $ ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex flex-[1.5] flex-col min-w-0 gap-6 overflow-y-auto pr-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            kn,
            {
              gatewayName: S.name,
              eventName: $.event,
              summary: $.summary ?? "",
              description: $.description ?? "",
              auth: $.auth
            }
          ) }),
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            An,
            {
              schema: $.payloadSchema,
              responseSchema: $.responseSchema
            }
          ) }),
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            Pn,
            {
              payload: w[te] ?? "{}",
              schema: $.payloadSchema,
              responseSchema: $.responseSchema,
              emits: $.emits,
              onChange: (C) => N({ ...w, [te]: C }),
              onSend: () => fe(S.name, $.event, w[te] ?? "{}")
            }
          ) })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 overflow-hidden", children: /* @__PURE__ */ s.jsx(
          Un,
          {
            connected: !!O[S.name],
            logs: M,
            onClear: je,
            isPaused: Ee,
            onTogglePause: () => ie(!Ee)
          }
        ) })
      ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center text-center p-12", children: [
        /* @__PURE__ */ s.jsx("div", { className: "mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-emerald/10 text-brand-emerald shadow-xl shadow-brand-emerald/5", children: /* @__PURE__ */ s.jsx("span", { className: "text-4xl font-bold", children: "■" }) }),
        /* @__PURE__ */ s.jsx("h2", { className: "mb-3 text-2xl font-bold text-text-primary", children: "Bienvenido a Socket Docs" }),
        /* @__PURE__ */ s.jsx("p", { className: "max-w-md text-text-secondary", children: "Selecciona un Gateway y un evento de la barra lateral para comenzar a interactuar con tu servidor WebSocket en tiempo real." }),
        h && /* @__PURE__ */ s.jsxs("div", { className: "mt-8 flex gap-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Gateways" }),
            /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold", children: h.gateways.length })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "h-10 w-px bg-border-subtle mx-4" }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Total Eventos" }),
            /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold", children: h.gateways.reduce((C, k) => C + k.events.length, 0) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsx(
        Xt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: G,
          onClear: W,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: v,
          activeGatewayNamespace: S == null ? void 0 : S.namespace
        }
      )
    ] })
  ] });
};
export {
  Wo as App
};
