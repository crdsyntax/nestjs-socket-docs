var rn = Object.defineProperty;
var nn = (e, t, n) => t in e ? rn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => (nn(e, typeof t != "symbol" ? t + "" : t, n), n);
import B, { useState as le, useCallback as Ie, useMemo as ur, useEffect as Te } from "react";
import { RefreshCw as sn, AlertCircle as on, ChevronRight as fr, ChevronLeft as an, Search as ln, LayoutGrid as cn, Download as dn, WifiOff as un, Wifi as fn, Sun as mn, Moon as pn, Settings as bn, Shield as hn, Key as xn, User as gn, Braces as Jt, ChevronDown as yn, Play as vn, RotateCcw as wn } from "lucide-react";
import { io as En } from "socket.io-client";
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
  var e = B, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, u, m) {
    var f, p = {}, x = null, w = null;
    m !== void 0 && (x = "" + m), u.key !== void 0 && (x = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (f in u)
      r.call(u, f) && !a.hasOwnProperty(f) && (p[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: t, type: c, key: x, ref: w, props: p, _owner: o.current };
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
    var e = B, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), j = Symbol.iterator, g = "@@iterator";
    function h(l) {
      if (l === null || typeof l != "object")
        return null;
      var b = j && l[j] || l[g];
      return typeof b == "function" ? b : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(l) {
      {
        for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), _ = 1; _ < b; _++)
          v[_ - 1] = arguments[_];
        O("error", l, v);
      }
    }
    function O(l, b, v) {
      {
        var _ = y.ReactDebugCurrentFrame, D = _.getStackAddendum();
        D !== "" && (b += "%s", v = v.concat([D]));
        var F = v.map(function(P) {
          return String(P);
        });
        F.unshift("Warning: " + b), Function.prototype.apply.call(console[l], console, F);
      }
    }
    var T = !1, $ = !1, K = !1, ne = !1, S = !1, Y;
    Y = Symbol.for("react.module.reference");
    function q(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === a || S || l === o || l === m || l === f || ne || l === w || T || $ || K || typeof l == "object" && l !== null && (l.$$typeof === x || l.$$typeof === p || l.$$typeof === i || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Y || l.getModuleId !== void 0));
    }
    function se(l, b, v) {
      var _ = l.displayName;
      if (_)
        return _;
      var D = b.displayName || b.name || "";
      return D !== "" ? v + "(" + D + ")" : v;
    }
    function be(l) {
      return l.displayName || "Context";
    }
    function G(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
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
        case f:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var b = l;
            return be(b) + ".Consumer";
          case i:
            var v = l;
            return be(v._context) + ".Provider";
          case u:
            return se(l, l.render, "ForwardRef");
          case p:
            var _ = l.displayName || null;
            return _ !== null ? _ : G(l.type) || "Memo";
          case x: {
            var D = l, F = D._payload, P = D._init;
            try {
              return G(P(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, oe = 0, Q, Se, we, C, I, de, ye;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function ue() {
      {
        if (oe === 0) {
          Q = console.log, Se = console.info, we = console.warn, C = console.error, I = console.group, de = console.groupCollapsed, ye = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: M,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        oe++;
      }
    }
    function te() {
      {
        if (oe--, oe === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, l, {
              value: Q
            }),
            info: L({}, l, {
              value: Se
            }),
            warn: L({}, l, {
              value: we
            }),
            error: L({}, l, {
              value: C
            }),
            group: L({}, l, {
              value: I
            }),
            groupCollapsed: L({}, l, {
              value: de
            }),
            groupEnd: L({}, l, {
              value: ye
            })
          });
        }
        oe < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = y.ReactCurrentDispatcher, Z;
    function R(l, b, v) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (D) {
            var _ = D.stack.trim().match(/\n( *(at )?)/);
            Z = _ && _[1] || "";
          }
        return `
` + Z + l;
      }
    }
    var k = !1, V;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      V = new H();
    }
    function ae(l, b) {
      if (!l || k)
        return "";
      {
        var v = V.get(l);
        if (v !== void 0)
          return v;
      }
      var _;
      k = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = he.current, he.current = null, ue();
      try {
        if (b) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (ie) {
              _ = ie;
            }
            Reflect.construct(l, [], P);
          } else {
            try {
              P.call();
            } catch (ie) {
              _ = ie;
            }
            l.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            _ = ie;
          }
          l();
        }
      } catch (ie) {
        if (ie && _ && typeof ie.stack == "string") {
          for (var A = ie.stack.split(`
`), re = _.stack.split(`
`), z = A.length - 1, W = re.length - 1; z >= 1 && W >= 0 && A[z] !== re[W]; )
            W--;
          for (; z >= 1 && W >= 0; z--, W--)
            if (A[z] !== re[W]) {
              if (z !== 1 || W !== 1)
                do
                  if (z--, W--, W < 0 || A[z] !== re[W]) {
                    var fe = `
` + A[z].replace(" at new ", " at ");
                    return l.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", l.displayName)), typeof l == "function" && V.set(l, fe), fe;
                  }
                while (z >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        k = !1, he.current = F, te(), Error.prepareStackTrace = D;
      }
      var _e = l ? l.displayName || l.name : "", je = _e ? R(_e) : "";
      return typeof l == "function" && V.set(l, je), je;
    }
    function ge(l, b, v) {
      return ae(l, !1);
    }
    function Ee(l) {
      var b = l.prototype;
      return !!(b && b.isReactComponent);
    }
    function He(l, b, v) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return ae(l, Ee(l));
      if (typeof l == "string")
        return R(l);
      switch (l) {
        case m:
          return R("Suspense");
        case f:
          return R("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return ge(l.render);
          case p:
            return He(l.type, b, v);
          case x: {
            var _ = l, D = _._payload, F = _._init;
            try {
              return He(F(D), b, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Pt = {}, Dt = y.ReactDebugCurrentFrame;
    function We(l) {
      if (l) {
        var b = l._owner, v = He(l.type, l._source, b ? b.type : null);
        Dt.setExtraStackFrame(v);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Dr(l, b, v, _, D) {
      {
        var F = Function.call.bind(Pe);
        for (var P in l)
          if (F(l, P)) {
            var A = void 0;
            try {
              if (typeof l[P] != "function") {
                var re = Error((_ || "React class") + ": " + v + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              A = l[P](b, P, _, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              A = z;
            }
            A && !(A instanceof Error) && (We(D), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", v, P, typeof A), We(null)), A instanceof Error && !(A.message in Pt) && (Pt[A.message] = !0, We(D), E("Failed %s type: %s", v, A.message), We(null));
          }
      }
    }
    var Ir = Array.isArray;
    function it(l) {
      return Ir(l);
    }
    function Lr(l) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, v = b && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return v;
      }
    }
    function Fr(l) {
      try {
        return It(l), !1;
      } catch {
        return !0;
      }
    }
    function It(l) {
      return "" + l;
    }
    function Lt(l) {
      if (Fr(l))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lr(l)), It(l);
    }
    var De = y.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Ut, lt;
    lt = {};
    function $r(l) {
      if (Pe.call(l, "ref")) {
        var b = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Br(l) {
      if (Pe.call(l, "key")) {
        var b = Object.getOwnPropertyDescriptor(l, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function qr(l, b) {
      if (typeof l.ref == "string" && De.current && b && De.current.stateNode !== b) {
        var v = G(De.current.type);
        lt[v] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(De.current.type), l.ref), lt[v] = !0);
      }
    }
    function Mr(l, b) {
      {
        var v = function() {
          Ft || (Ft = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function zr(l, b) {
      {
        var v = function() {
          Ut || (Ut = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        v.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Hr = function(l, b, v, _, D, F, P) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: b,
        ref: v,
        props: P,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Wr(l, b, v, _, D) {
      {
        var F, P = {}, A = null, re = null;
        v !== void 0 && (Lt(v), A = "" + v), Br(b) && (Lt(b.key), A = "" + b.key), $r(b) && (re = b.ref, qr(b, D));
        for (F in b)
          Pe.call(b, F) && !Ur.hasOwnProperty(F) && (P[F] = b[F]);
        if (l && l.defaultProps) {
          var z = l.defaultProps;
          for (F in z)
            P[F] === void 0 && (P[F] = z[F]);
        }
        if (A || re) {
          var W = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          A && Mr(P, W), re && zr(P, W);
        }
        return Hr(l, A, re, D, _, De.current, P);
      }
    }
    var ct = y.ReactCurrentOwner, $t = y.ReactDebugCurrentFrame;
    function Ce(l) {
      if (l) {
        var b = l._owner, v = He(l.type, l._source, b ? b.type : null);
        $t.setExtraStackFrame(v);
      } else
        $t.setExtraStackFrame(null);
    }
    var dt;
    dt = !1;
    function ut(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function Bt() {
      {
        if (ct.current) {
          var l = G(ct.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Jr(l) {
      {
        if (l !== void 0) {
          var b = l.fileName.replace(/^.*[\\\/]/, ""), v = l.lineNumber;
          return `

Check your code at ` + b + ":" + v + ".";
        }
        return "";
      }
    }
    var qt = {};
    function Vr(l) {
      {
        var b = Bt();
        if (!b) {
          var v = typeof l == "string" ? l : l.displayName || l.name;
          v && (b = `

Check the top-level render call using <` + v + ">.");
        }
        return b;
      }
    }
    function Mt(l, b) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var v = Vr(b);
        if (qt[v])
          return;
        qt[v] = !0;
        var _ = "";
        l && l._owner && l._owner !== ct.current && (_ = " It was passed a child from " + G(l._owner.type) + "."), Ce(l), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, _), Ce(null);
      }
    }
    function zt(l, b) {
      {
        if (typeof l != "object")
          return;
        if (it(l))
          for (var v = 0; v < l.length; v++) {
            var _ = l[v];
            ut(_) && Mt(_, b);
          }
        else if (ut(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var D = h(l);
          if (typeof D == "function" && D !== l.entries)
            for (var F = D.call(l), P; !(P = F.next()).done; )
              ut(P.value) && Mt(P.value, b);
        }
      }
    }
    function Kr(l) {
      {
        var b = l.type;
        if (b == null || typeof b == "string")
          return;
        var v;
        if (typeof b == "function")
          v = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          v = b.propTypes;
        else
          return;
        if (v) {
          var _ = G(b);
          Dr(v, l.props, "prop", _, l);
        } else if (b.PropTypes !== void 0 && !dt) {
          dt = !0;
          var D = G(b);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yr(l) {
      {
        for (var b = Object.keys(l.props), v = 0; v < b.length; v++) {
          var _ = b[v];
          if (_ !== "children" && _ !== "key") {
            Ce(l), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), Ce(null);
            break;
          }
        }
        l.ref !== null && (Ce(l), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var Ht = {};
    function Wt(l, b, v, _, D, F) {
      {
        var P = q(l);
        if (!P) {
          var A = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = Jr(D);
          re ? A += re : A += Bt();
          var z;
          l === null ? z = "null" : it(l) ? z = "array" : l !== void 0 && l.$$typeof === t ? (z = "<" + (G(l.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : z = typeof l, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, A);
        }
        var W = Wr(l, b, v, D, F);
        if (W == null)
          return W;
        if (P) {
          var fe = b.children;
          if (fe !== void 0)
            if (_)
              if (it(fe)) {
                for (var _e = 0; _e < fe.length; _e++)
                  zt(fe[_e], l);
                Object.freeze && Object.freeze(fe);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zt(fe, l);
        }
        if (Pe.call(b, "key")) {
          var je = G(l), ie = Object.keys(b).filter(function(tn) {
            return tn !== "key";
          }), ft = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ht[je + ft]) {
            var en = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, je, en, je), Ht[je + ft] = !0;
          }
        }
        return l === r ? Yr(W) : Kr(W), W;
      }
    }
    function Gr(l, b, v) {
      return Wt(l, b, v, !0);
    }
    function Xr(l, b, v) {
      return Wt(l, b, v, !1);
    }
    var Qr = Xr, Zr = Gr;
    Fe.Fragment = r, Fe.jsx = Qr, Fe.jsxs = Zr;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? gt.exports = jn() : gt.exports = Rn();
var s = gt.exports;
const Yt = () => {
  const [e, t] = B.useState(!1);
  return B.useEffect(() => {
    const n = setTimeout(() => t(!0), 5e3);
    return () => clearTimeout(n);
  }, []), /* @__PURE__ */ s.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-bg-primary text-brand-emerald p-6 text-center", children: [
    /* @__PURE__ */ s.jsx(sn, { className: "animate-spin mb-4", size: 48 }),
    /* @__PURE__ */ s.jsx("span", { className: "text-xl font-medium mb-2", children: "Cargando contratos..." }),
    e && /* @__PURE__ */ s.jsxs("div", { className: "mt-8 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-center gap-2 text-orange-400 mb-2", children: [
        /* @__PURE__ */ s.jsx(on, { size: 20 }),
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
}, Nn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: o,
  expanded: a,
  onToggleExpand: i
}) => /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: e.map((c, u) => {
  const m = a[c.name] !== !1;
  return /* @__PURE__ */ s.jsxs("div", { className: "nav-group", children: [
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary group",
        onClick: () => i(c.name),
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-text-muted", children: "📁" }),
            /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ s.jsx("span", { children: c.name }),
              /* @__PURE__ */ s.jsx("span", { className: "text-[10px] text-brand-emerald font-mono", children: c.namespace })
            ] })
          ] }),
          /* @__PURE__ */ s.jsx("span", { className: `text-[11px] text-text-muted transition-transform ${m ? "" : "-rotate-90"}`, children: "▾" })
        ]
      }
    ),
    m && /* @__PURE__ */ s.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: c.events.map((f, p) => {
      const x = t === u && n === p;
      return /* @__PURE__ */ s.jsx(
        "li",
        {
          onClick: (w) => {
            w.stopPropagation(), r(u), o(p);
          },
          className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${x ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
          children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col min-w-0 flex-1", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s.jsx("span", { className: "inline-block rounded bg-bg-surface px-1.5 py-0.5 font-mono text-[9px] font-bold text-brand-emerald", children: "EVENT" }),
              /* @__PURE__ */ s.jsx("span", { className: "truncate font-medium", children: f.event })
            ] }),
            /* @__PURE__ */ s.jsxs("span", { className: "text-[10px] text-text-muted ml-[42px] truncate", children: [
              "Namespace: ",
              c.namespace
            ] })
          ] })
        },
        p
      );
    }) })
  ] }, u);
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
}, Sn = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: o,
  searchQuery: a,
  onSearchChange: i,
  onExport: c,
  expanded: u,
  onToggleExpand: m
}) => {
  const [f, p] = le(!1);
  return /* @__PURE__ */ s.jsxs("aside", { className: `relative flex h-full flex-col border-r border-border-subtle bg-bg-primary transition-all duration-300 ${f ? "w-16 p-2" : "w-[300px] p-4"}`, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => p(!f),
        className: "absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-bg-primary text-text-primary shadow-sm hover:bg-bg-surface transition-colors",
        children: f ? /* @__PURE__ */ s.jsx(fr, { size: 14 }) : /* @__PURE__ */ s.jsx(an, { size: 14 })
      }
    ),
    /* @__PURE__ */ s.jsxs("div", { className: `mb-6 flex items-center ${f ? "justify-center" : "gap-2"}`, children: [
      /* @__PURE__ */ s.jsx("span", { className: "text-xl text-brand-emerald shrink-0", children: "■" }),
      !f && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("span", { className: "text-base font-semibold truncate", children: U.common.socketDocs }),
        /* @__PURE__ */ s.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: U.common.v1 })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "relative mb-6", children: f ? /* @__PURE__ */ s.jsx("div", { className: "flex justify-center text-text-muted cursor-pointer hover:text-text-primary", onClick: () => p(!1), children: /* @__PURE__ */ s.jsx(ln, { size: 18 }) }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
          placeholder: U.common.searchPlaceholder,
          value: a,
          onChange: (x) => i(x.target.value)
        }
      ),
      /* @__PURE__ */ s.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
    ] }) }),
    !f && /* @__PURE__ */ s.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary px-1", children: [
      /* @__PURE__ */ s.jsx("span", { children: U.common.gateways }),
      /* @__PURE__ */ s.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
    ] }),
    f && /* @__PURE__ */ s.jsx("div", { className: "mb-3 flex justify-center text-text-secondary", children: /* @__PURE__ */ s.jsx(cn, { size: 18 }) }),
    /* @__PURE__ */ s.jsx("div", { className: `flex-1 overflow-y-auto ${f ? "hidden" : "block"}`, children: /* @__PURE__ */ s.jsx(
      Nn,
      {
        gateways: e,
        activeGatewayIdx: t,
        activeEventIdx: n,
        onSelectGateway: r,
        onSelectEvent: o,
        expanded: u,
        onToggleExpand: m
      }
    ) }),
    /* @__PURE__ */ s.jsxs("div", { className: `mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted ${f ? "flex flex-col items-center gap-4" : ""}`, children: [
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: c,
          title: U.common.exportContract,
          className: `flex items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation text-text-primary transition hover:bg-border-subtle ${f ? "h-9 w-9" : "mb-3 w-full py-2"}`,
          children: [
            /* @__PURE__ */ s.jsx(dn, { size: 14 }),
            !f && U.common.exportContract
          ]
        }
      ),
      !f && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          U.common.socketDocs,
          " ",
          U.common.v1
        ] }),
        /* @__PURE__ */ s.jsx("p", { children: U.common.madeWith })
      ] })
    ] })
  ] });
}, Cn = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  namespaces: r,
  path: o,
  paths: a,
  theme: i,
  onToggleTheme: c,
  onOpenSettings: u,
  onNamespaceChange: m,
  onPathChange: f,
  onConnect: p
}) => /* @__PURE__ */ s.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6 bg-bg-primary", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs mr-auto", children: [
    /* @__PURE__ */ s.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-red-500"}` }),
    /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: e ? U.common.connected : U.common.disconnected }),
    /* @__PURE__ */ s.jsx("span", { className: "text-text-muted border-l border-border-subtle pl-2", children: t })
  ] }),
  /* @__PURE__ */ s.jsxs(
    "button",
    {
      onClick: p,
      className: `flex items-center gap-2 rounded-md px-4 py-1.5 text-xs font-bold transition-all active:scale-95 ${e ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20" : "bg-brand-emerald text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20"}`,
      children: [
        e ? /* @__PURE__ */ s.jsx(un, { size: 14 }) : /* @__PURE__ */ s.jsx(fn, { size: 14 }),
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
          onChange: (x) => m(x.target.value),
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
          onChange: (x) => f(x.target.value),
          className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1 text-xs text-text-primary outline-none focus:border-brand-emerald transition-colors",
          children: a.map((x) => /* @__PURE__ */ s.jsx("option", { value: x, children: x }, x))
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 border-l border-border-subtle pl-3", children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: c,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: i === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
        children: i === "dark" ? /* @__PURE__ */ s.jsx(mn, { size: 14 }) : /* @__PURE__ */ s.jsx(pn, { size: 14 })
      }
    ),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: u,
        className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
        title: "Configuración",
        children: /* @__PURE__ */ s.jsx(bn, { size: 14 })
      }
    )
  ] })
] }), _n = ({ type: e }) => {
  const t = {
    JWT: {
      icon: /* @__PURE__ */ s.jsx(hn, { size: 12 }),
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      desc: "Requiere token Bearer JWT en el campo auth.token."
    },
    API_KEY: {
      icon: /* @__PURE__ */ s.jsx(xn, { size: 12 }),
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      desc: "Requiere una clave de API válida enviada en los headers o query."
    },
    BASIC: {
      icon: /* @__PURE__ */ s.jsx(gn, { size: 12 }),
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
}, On = ({
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
    o && /* @__PURE__ */ s.jsx(_n, { type: o })
  ] }),
  /* @__PURE__ */ s.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ s.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: U.event.type }),
    /* @__PURE__ */ s.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ s.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ s.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), Tn = ({ schema: e, responseSchema: t }) => {
  const [n, r] = B.useState("request"), [o, a] = B.useState(!1), i = (m) => JSON.stringify(m, null, 2), c = !!e && (Object.keys((e == null ? void 0 : e.properties) || {}).length > 0 || !!e.type), u = !!t && (Object.keys((t == null ? void 0 : t.properties) || {}).length > 0 || !!t.type);
  return !c && !u ? /* @__PURE__ */ s.jsxs("div", { className: "mb-4 flex items-center gap-2 text-text-secondary italic", children: [
    /* @__PURE__ */ s.jsx(Jt, { size: 14, className: "opacity-40" }),
    /* @__PURE__ */ s.jsx("span", { className: "text-[12px]", children: U.event.noParameters })
  ] }) : /* @__PURE__ */ s.jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "mb-3 flex items-center gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex items-center gap-2 mr-2 cursor-pointer hover:text-brand-emerald transition-colors",
          onClick: () => a(!o),
          children: [
            o ? /* @__PURE__ */ s.jsx(yn, { size: 14 }) : /* @__PURE__ */ s.jsx(fr, { size: 14 }),
            /* @__PURE__ */ s.jsx(Jt, { size: 14, className: "text-brand-emerald" }),
            /* @__PURE__ */ s.jsx("span", { className: "font-bold uppercase tracking-wider text-text-primary text-[11px]", children: U.event.parameters })
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
        u && /* @__PURE__ */ s.jsx(
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
}, kn = ({ payload: e, schema: t, responseSchema: n, emits: r, onChange: o, onSend: a }) => {
  const [i, c] = le(r || "");
  return B.useEffect(() => {
    c(r || "");
  }, [r]), /* @__PURE__ */ s.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ s.jsxs("span", { className: "text-[13px] font-semibold", children: [
          U.event.requestBody,
          " ",
          /* @__PURE__ */ s.jsx("span", { className: "text-[11px] text-red-400", children: U.event.required })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-[10px] uppercase font-bold text-text-muted", children: "Listen for:" }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (u) => c(u.target.value),
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
          children: U.event.exampleValue
        }
      ) }),
      /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ s.jsx(
        "textarea",
        {
          value: e,
          onChange: (u) => o(u.target.value),
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
              /* @__PURE__ */ s.jsx(vn, { size: 14 }),
              " ",
              U.event.sendEvent
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
          /* @__PURE__ */ s.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
          " ",
          U.event.includeAck
        ] })
      ] })
    ] })
  ] });
}, An = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
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
)) }), Pn = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: o
}) => {
  const [a, i] = B.useState("all"), c = B.useMemo(() => a === "all" ? t : a === "emits" ? t.filter((u) => u.type === "sent") : a === "listeners" ? t.filter((u) => u.type === "received") : t, [t, a]);
  return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col rounded-lg border border-border-subtle bg-bg-surface", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex flex-shrink-0 items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
          /* @__PURE__ */ s.jsx("span", { className: "text-[13px] font-semibold", children: U.realtime.title })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-1 rounded-md bg-bg-secondary p-0.5", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("all"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "all" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.all
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("emits"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "emits" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.emits
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => i("listeners"),
              className: `rounded px-2 py-0.5 text-[11px] font-medium transition ${a === "listeners" ? "bg-bg-surface text-brand-emerald shadow-sm" : "text-text-muted hover:text-text-primary"}`,
              children: U.realtime.listeners
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ s.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
          /* @__PURE__ */ s.jsx(wn, { size: 12 }),
          " ",
          U.realtime.clear
        ] }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: o,
            className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
            children: r ? "Continuar" : U.realtime.pause
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "border-t border-border-subtle", children: /* @__PURE__ */ s.jsx(An, { logs: r ? [] : c, onClear: n }) })
  ] });
}, Gt = ({
  show: e,
  onClose: t,
  onSave: n,
  onClear: r,
  initialApiConfig: o,
  initialSocketConfig: a,
  isStandalone: i,
  theme: c,
  activeGatewayNamespace: u
}) => {
  var $, K, ne;
  const [m, f] = B.useState(o), [p, x] = B.useState(a), [w, j] = B.useState(!1), [g, h] = B.useState(null), [y, E] = B.useState(!1);
  B.useEffect(() => {
    e && (f(o), x(a), h(null), E(!1));
  }, [e, o, a]);
  const O = (S) => S.startsWith("/") ? S : `/${S}`, T = async () => {
    j(!0), h(null);
    const S = m.baseUrl.replace(/\/$/, ""), Y = m.jsonPath.startsWith("/") ? m.jsonPath : `/${m.jsonPath}`;
    try {
      const q = await fetch(`${S}${Y}`);
      if (!q.ok)
        throw new Error(`HTTP Error: ${q.status}`);
      const se = await q.json(), { io: be } = await import("socket.io-client"), G = p.namespace === "/" ? u ?? "/" : p.namespace, L = be(`${S}${O(G)}`, {
        path: p.path,
        transports: p.transports,
        auth: p.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      }), oe = () => {
        L.off("connect"), L.off("connect_error"), L.disconnect();
      };
      L.on("connect", () => {
        h({
          success: !0,
          message: "¡Conexión exitosa!",
          data: { schema: se, socketId: L.id }
        }), j(!1), E(!0), oe();
      }), L.on("connect_error", (Q) => {
        h({
          success: !1,
          message: `Error Socket: ${Q.message}. Pero API OK.`,
          data: { schema: se }
        }), j(!1), E(!0), oe();
      });
    } catch (q) {
      h({ success: !1, message: `Error: ${q instanceof Error ? q.message : "Error desconocido"}` }), j(!1), E(!0);
    }
  };
  return e ? /* @__PURE__ */ s.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: [
    y && g && /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 z-[60] flex items-center justify-center bg-black/40", children: /* @__PURE__ */ s.jsxs("div", { className: `w-full max-w-2xl rounded-lg p-6 shadow-2xl border border-border-subtle ${c === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ s.jsx("h3", { className: `text-lg font-bold mb-4 ${g.success ? "text-brand-emerald" : "text-red-500"}`, children: g.success ? "✓ Conexión Verificada" : "✗ Fallo en la Conexión" }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-sm border border-border-subtle", children: [
          /* @__PURE__ */ s.jsx("p", { className: "font-semibold mb-1", children: "Resultado:" }),
          /* @__PURE__ */ s.jsx("p", { className: "text-text-secondary", children: g.message })
        ] }),
        (($ = g.data) == null ? void 0 : $.schema) && /* @__PURE__ */ s.jsxs("div", { className: "rounded bg-bg-secondary p-3 text-xs border border-border-subtle max-h-60 overflow-y-auto", children: [
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
    /* @__PURE__ */ s.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${c === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
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
                  onChange: (S) => f({ ...m, baseUrl: S.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "http://localhost:3000"
                }
              )
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
                  onChange: (S) => f({ ...m, jsonPath: S.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${i ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("section", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
            /* @__PURE__ */ s.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
                /* @__PURE__ */ s.jsx(
                  "textarea",
                  {
                    value: p.auth.token,
                    onChange: (S) => x({
                      ...p,
                      auth: { ...p.auth, token: S.target.value }
                    }),
                    className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
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
                    onChange: (S) => x({
                      ...p,
                      auth: { ...p.auth, userId: S.target.value }
                    }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
                    onChange: (S) => x({ ...p, namespace: S.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
                    onChange: (S) => x({ ...p, path: S.target.value }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                  }
                )
              ] }),
              /* @__PURE__ */ s.jsxs("div", { children: [
                /* @__PURE__ */ s.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
                /* @__PURE__ */ s.jsxs(
                  "select",
                  {
                    value: p.transports.join(","),
                    onChange: (S) => {
                      const Y = S.target.value;
                      let q = ["polling", "websocket"];
                      Y === "websocket" && (q = ["websocket"]), Y === "polling" && (q = ["polling"]), x({ ...p, transports: q });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
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
                    onChange: (S) => x({ ...p, reconnection: S.target.checked }),
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
                    onChange: (S) => x({ ...p, autoConnect: S.target.checked }),
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
                    onChange: (S) => x({ ...p, reconnectionAttempts: S.target.value === "0" ? 1 / 0 : parseInt(S.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
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
                    onChange: (S) => x({ ...p, timeout: parseInt(S.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
                    onChange: (S) => x({ ...p, reconnectionDelay: parseInt(S.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
                    onChange: (S) => x({ ...p, reconnectionDelayMax: parseInt(S.target.value) }),
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
                    value: ((K = p.eventRetries) == null ? void 0 : K.attempts) ?? 0,
                    onChange: (S) => {
                      var Y;
                      return x({
                        ...p,
                        eventRetries: {
                          attempts: parseInt(S.target.value),
                          delay: ((Y = p.eventRetries) == null ? void 0 : Y.delay) ?? 1e3
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
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
                    value: ((ne = p.eventRetries) == null ? void 0 : ne.delay) ?? 1e3,
                    onChange: (S) => {
                      var Y;
                      return x({
                        ...p,
                        eventRetries: {
                          attempts: ((Y = p.eventRetries) == null ? void 0 : Y.attempts) ?? 0,
                          delay: parseInt(S.target.value)
                        }
                      });
                    },
                    className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${c === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
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
              onClick: T,
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
              onClick: () => n(m, p),
              className: "rounded bg-brand-emerald px-6 py-2 text-sm font-bold text-bg-primary hover:bg-brand-emerald-light shadow-lg shadow-brand-emerald/20 transition-all active:scale-95",
              children: "Guardar Configuración"
            }
          )
        ] })
      ] })
    ] })
  ] }) : null;
};
class Dn {
  constructor() {
    Je(this, "sockets", {});
  }
  connect(t, n, r = {}, o) {
    this.sockets[t] && this.sockets[t].disconnect();
    const a = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      reconnection: !0,
      ...r.options
    }, i = En(n, a);
    return i.on("connect", o.onConnect), i.on("connect_error", (c) => o.onConnectError(c)), i.on("disconnect", (c) => o.onDisconnect(c)), i.onAny(o.onAny), this.sockets[t] = i, i;
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
const mt = new Dn(), In = (e = {}) => {
  const [t, n] = le({}), [r, o] = le([]), a = Ie((f, p, x) => {
    o(
      (w) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: f,
          message: p,
          data: x
        },
        ...w
      ].slice(0, 50)
    );
  }, []), i = Ie((f, p, x) => {
    const w = {
      ...e,
      options: {
        path: x ?? "/socket.io",
        auth: e.auth,
        ...e.options
      }
    };
    mt.connect(f, p, w, {
      onConnect: () => {
        n((j) => ({ ...j, [f]: !0 })), a("received", `Connected to ${p}`);
      },
      onDisconnect: (j) => {
        n((g) => ({ ...g, [f]: !1 })), a("error", `Disconnected from ${p} (${j})`);
      },
      onConnectError: (j) => {
        console.error(`[SocketDocs] Connection error for ${f}:`, j), n((g) => ({ ...g, [f]: !1 })), a("error", `Connection Error: ${j.message}`);
      },
      onAny: (j, ...g) => {
        a("received", `Event: ${j}`, g);
      }
    });
  }, [e, a]), c = Ie((f, p) => {
    mt.disconnect(f), n((x) => ({ ...x, [f]: !1 })), a("error", `Disconnected from ${p || f}`);
  }, [a]), u = Ie((f, p, x) => {
    var h, y;
    const w = ((h = e.eventRetries) == null ? void 0 : h.attempts) ?? 0, j = ((y = e.eventRetries) == null ? void 0 : y.delay) ?? 1e3, g = (E) => {
      var O;
      try {
        const T = JSON.parse(x), $ = E > 0 ? ` (Reintento ${E}/${w})` : "";
        a("sent", `Emitting ${p}${$}`, T);
        let K = !1;
        const ne = setTimeout(() => {
          !K && E < w ? (a("error", `Timeout esperando ACK para ${p}. Reintentando en ${j}ms...`), setTimeout(() => g(E + 1), j)) : !K && w > 0 && a("error", `Fallo final: No se recibió ACK para ${p} después de ${w} reintentos.`);
        }, ((O = e.options) == null ? void 0 : O.timeout) ?? 2e4);
        mt.emit(f, p, T, (S) => {
          K = !0, clearTimeout(ne), a("received", `ACK for ${p}`, S);
        });
      } catch (T) {
        const $ = T instanceof Error ? T.message : "Invalid JSON";
        console.error(`Emit error: ${$}`), a("error", `Error de emisión: ${$}`);
      }
    };
    g(0);
  }, [e, a]), m = Ie(() => {
    o([]);
  }, []);
  return {
    connected: t,
    logs: r,
    connect: i,
    disconnect: c,
    emitEvent: u,
    clearLogs: m
  };
};
function mr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ln } = Object.prototype, { getPrototypeOf: et } = Object, { iterator: tt, toStringTag: pr } = Symbol, rt = ((e) => (t) => {
  const n = Ln.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xe = (e) => (e = e.toLowerCase(), (t) => rt(t) === e), nt = (e) => (t) => typeof t === e, { isArray: Ae } = Array, ke = nt("undefined");
function Be(e) {
  return e !== null && !ke(e) && e.constructor !== null && !ke(e.constructor) && ce(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const br = xe("ArrayBuffer");
function Fn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && br(e.buffer), t;
}
const Un = nt("string"), ce = nt("function"), hr = nt("number"), qe = (e) => e !== null && typeof e == "object", $n = (e) => e === !0 || e === !1, Ke = (e) => {
  if (rt(e) !== "object")
    return !1;
  const t = et(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(pr in e) && !(tt in e);
}, Bn = (e) => {
  if (!qe(e) || Be(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, qn = xe("Date"), Mn = xe("File"), zn = (e) => !!(e && typeof e.uri < "u"), Hn = (e) => e && typeof e.getParts < "u", Wn = xe("Blob"), Jn = xe("FileList"), Vn = (e) => qe(e) && ce(e.pipe);
function Kn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Xt = Kn(), Qt = typeof Xt.FormData < "u" ? Xt.FormData : void 0, Yn = (e) => {
  if (!e)
    return !1;
  if (Qt && e instanceof Qt)
    return !0;
  const t = et(e);
  if (!t || t === Object.prototype || !ce(e.append))
    return !1;
  const n = rt(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && ce(e.toString) && e.toString() === "[object FormData]";
}, Gn = xe("URLSearchParams"), [Xn, Qn, Zn, es] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(xe), ts = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Ae(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    if (Be(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = a.length;
    let c;
    for (r = 0; r < i; r++)
      c = a[r], t.call(null, e[c], c, e);
  }
}
function xr(e, t) {
  if (Be(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Re = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gr = (e) => !ke(e) && e !== Re;
function yt(...e) {
  const { caseless: t, skipUndefined: n } = gr(this) && this || {}, r = {}, o = (a, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const c = t && xr(r, i) || i, u = vt(r, c) ? r[c] : void 0;
    Ke(u) && Ke(a) ? r[c] = yt(u, a) : Ke(a) ? r[c] = yt({}, a) : Ae(a) ? r[c] = a.slice() : (!n || !ke(a)) && (r[c] = a);
  };
  for (let a = 0, i = e.length; a < i; a++)
    e[a] && Me(e[a], o);
  return r;
}
const rs = (e, t, n, { allOwnKeys: r } = {}) => (Me(
  t,
  (o, a) => {
    n && ce(o) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: mr(o, n),
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
  let o, a, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      i = o[a], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && et(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, as = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, is = (e) => {
  if (!e)
    return null;
  if (Ae(e))
    return e;
  let t = e.length;
  if (!hr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ls = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && et(Uint8Array)), cs = (e, t) => {
  const r = (e && e[tt]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, ds = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, us = xe("HTMLFormElement"), fs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
  return r.toUpperCase() + o;
}), vt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ms = xe("RegExp"), yr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Me(n, (o, a) => {
    let i;
    (i = t(o, a, e)) !== !1 && (r[a] = i || o);
  }), Object.defineProperties(e, r);
}, ps = (e) => {
  yr(e, (t, n) => {
    if (ce(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (ce(r)) {
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
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Ae(e) ? r(e) : r(String(e).split(t)), n;
}, hs = () => {
}, xs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function gs(e) {
  return !!(e && ce(e.append) && e[pr] === "FormData" && e[tt]);
}
const ys = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (qe(r)) {
      if (t.has(r))
        return;
      if (Be(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        const o = Ae(r) ? [] : {};
        return Me(r, (a, i) => {
          const c = n(a);
          !ke(c) && (o[i] = c);
        }), t.delete(r), o;
      }
    }
    return r;
  };
  return n(e);
}, vs = xe("AsyncFunction"), ws = (e) => e && (qe(e) || ce(e)) && ce(e.then) && ce(e.catch), vr = ((e, t) => e ? setImmediate : t ? ((n, r) => (Re.addEventListener(
  "message",
  ({ source: o, data: a }) => {
    o === Re && a === n && r.length && r.shift()();
  },
  !1
), (o) => {
  r.push(o), Re.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", ce(Re.postMessage)), Es = typeof queueMicrotask < "u" ? queueMicrotask.bind(Re) : typeof process < "u" && process.nextTick || vr, js = (e) => e != null && ce(e[tt]), d = {
  isArray: Ae,
  isArrayBuffer: br,
  isBuffer: Be,
  isFormData: Yn,
  isArrayBufferView: Fn,
  isString: Un,
  isNumber: hr,
  isBoolean: $n,
  isObject: qe,
  isPlainObject: Ke,
  isEmptyObject: Bn,
  isReadableStream: Xn,
  isRequest: Qn,
  isResponse: Zn,
  isHeaders: es,
  isUndefined: ke,
  isDate: qn,
  isFile: Mn,
  isReactNativeBlob: zn,
  isReactNative: Hn,
  isBlob: Wn,
  isRegExp: ms,
  isFunction: ce,
  isStream: Vn,
  isURLSearchParams: Gn,
  isTypedArray: ls,
  isFileList: Jn,
  forEach: Me,
  merge: yt,
  extend: rs,
  trim: ts,
  stripBOM: ns,
  inherits: ss,
  toFlatObject: os,
  kindOf: rt,
  kindOfTest: xe,
  endsWith: as,
  toArray: is,
  forEachEntry: cs,
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
  global: Re,
  isContextDefined: gr,
  isSpecCompliantForm: gs,
  toJSONObject: ys,
  isAsyncFn: vs,
  isThenable: ws,
  setImmediate: vr,
  asap: Es,
  isIterable: js
}, Rs = d.toObjectSet([
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
]), Ns = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Rs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
function Ss(e) {
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
const Cs = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), _s = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Rt(e, t) {
  return d.isArray(e) ? e.map((n) => Rt(n, t)) : Ss(String(e).replace(t, ""));
}
const Os = (e) => Rt(e, Cs), Ts = (e) => Rt(e, _s);
function wr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return d.forEach(e.toJSON(), (n, r) => {
    t[r] = Ts(n);
  }), t;
}
const Zt = Symbol("internals");
function Ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ye) : Os(String(e));
}
function ks(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const As = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pt(e, t, n, r, o) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function Ps(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ds(e, t) {
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
class st {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(c, u, m) {
      const f = Ue(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const p = d.findKey(o, f);
      (!p || o[p] === void 0 || m === !0 || m === void 0 && o[p] !== !1) && (o[p || u] = Ye(c));
    }
    const i = (c, u) => d.forEach(c, (m, f) => a(m, f, u));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (d.isString(t) && (t = t.trim()) && !As(t))
      i(Ns(t), n);
    else if (d.isObject(t) && d.isIterable(t)) {
      let c = {}, u, m;
      for (const f of t) {
        if (!d.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        c[m = f[0]] = (u = c[m]) ? d.isArray(u) ? [...u, f[1]] : [u, f[1]] : f[1];
      }
      i(c, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ue(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return ks(o);
        if (d.isFunction(n))
          return n.call(this, o, r);
        if (d.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ue(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(i) {
      if (i = Ue(i), i) {
        const c = d.findKey(r, i);
        c && (!n || pt(r, r[c], c, n)) && (delete r[c], o = !0);
      }
    }
    return d.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || pt(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return d.forEach(this, (o, a) => {
      const i = d.findKey(r, a);
      if (i) {
        n[i] = Ye(o), delete n[a];
        return;
      }
      const c = t ? Ps(a) : String(a).trim();
      c !== a && delete n[a], n[c] = Ye(o), r[c] = !0;
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
    const r = (this[Zt] = this[Zt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(i) {
      const c = Ue(i);
      r[c] || (Ds(o, i), r[c] = !0);
    }
    return d.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
st.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
d.reduceDescriptors(st.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(st);
const pe = st, Is = "[REDACTED ****]";
function Ls(e) {
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
function Fs(e, t) {
  const n = new Set(t.map((a) => String(a).toLowerCase())), r = [], o = (a) => {
    if (a === null || typeof a != "object" || d.isBuffer(a))
      return a;
    if (r.indexOf(a) !== -1)
      return;
    a instanceof pe && (a = a.toJSON()), r.push(a);
    let i;
    if (d.isArray(a))
      i = [], a.forEach((c, u) => {
        const m = o(c);
        d.isUndefined(m) || (i[u] = m);
      });
    else {
      if (!d.isPlainObject(a) && Ls(a))
        return r.pop(), a;
      i = /* @__PURE__ */ Object.create(null);
      for (const [c, u] of Object.entries(a)) {
        const m = n.has(c.toLowerCase()) ? Is : o(u);
        d.isUndefined(m) || (i[c] = m);
      }
    }
    return r.pop(), i;
  };
  return o(e);
}
class X extends Error {
  static from(t, n, r, o, a, i) {
    const c = new X(t.message, n || t.code, r, o, a);
    return c.cause = t, c.name = t.name, t.status != null && c.status == null && (c.status = t.status), i && Object.assign(c, i), c;
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
    const t = this.config, n = t && d.hasOwnProp(t, "redact") ? t.redact : void 0, r = d.isArray(n) && n.length > 0 ? Fs(t, n) : d.toJSONObject(t);
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
X.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
X.ERR_BAD_OPTION = "ERR_BAD_OPTION";
X.ECONNABORTED = "ECONNABORTED";
X.ETIMEDOUT = "ETIMEDOUT";
X.ECONNREFUSED = "ECONNREFUSED";
X.ERR_NETWORK = "ERR_NETWORK";
X.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
X.ERR_DEPRECATED = "ERR_DEPRECATED";
X.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
X.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
X.ERR_CANCELED = "ERR_CANCELED";
X.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
X.ERR_INVALID_URL = "ERR_INVALID_URL";
X.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const N = X, Us = null;
function wt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Er(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bt(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Er(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function $s(e) {
  return d.isArray(e) && !e.some(wt);
}
const Bs = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ot(e, t, n) {
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
    function(h, y) {
      return !d.isUndefined(y[h]);
    }
  );
  const r = n.metaTokens, o = n.visitor || p, a = n.dots, i = n.indexes, c = n.Blob || typeof Blob < "u" && Blob, u = n.maxDepth === void 0 ? 100 : n.maxDepth, m = c && d.isSpecCompliantForm(t);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(g) {
    if (g === null)
      return "";
    if (d.isDate(g))
      return g.toISOString();
    if (d.isBoolean(g))
      return g.toString();
    if (!m && d.isBlob(g))
      throw new N("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(g) || d.isTypedArray(g) ? m && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function p(g, h, y) {
    let E = g;
    if (d.isReactNative(t) && d.isReactNativeBlob(g))
      return t.append(bt(y, h, a), f(g)), !1;
    if (g && !y && typeof g == "object") {
      if (d.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), g = JSON.stringify(g);
      else if (d.isArray(g) && $s(g) || (d.isFileList(g) || d.endsWith(h, "[]")) && (E = d.toArray(g)))
        return h = Er(h), E.forEach(function(T, $) {
          !(d.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? bt([h], $, a) : i === null ? h : h + "[]",
            f(T)
          );
        }), !1;
    }
    return wt(g) ? !0 : (t.append(bt(y, h, a), f(g)), !1);
  }
  const x = [], w = Object.assign(Bs, {
    defaultVisitor: p,
    convertValue: f,
    isVisitable: wt
  });
  function j(g, h, y = 0) {
    if (!d.isUndefined(g)) {
      if (y > u)
        throw new N(
          "Object is too deeply nested (" + y + " levels). Max depth: " + u,
          N.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (x.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      x.push(g), d.forEach(g, function(O, T) {
        (!(d.isUndefined(O) || O === null) && o.call(t, O, d.isString(T) ? T.trim() : T, h, w)) === !0 && j(O, h ? h.concat(T) : [T], y + 1);
      }), x.pop();
    }
  }
  if (!d.isObject(e))
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
function Nt(e, t) {
  this._pairs = [], e && ot(e, this, t);
}
const jr = Nt.prototype;
jr.append = function(t, n) {
  this._pairs.push([t, n]);
};
jr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, er);
  } : er;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function qs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || qs, o = d.isFunction(n) ? {
    serialize: n
  } : n, a = o && o.serialize;
  let i;
  if (a ? i = a(t, o) : i = d.isURLSearchParams(t) ? t.toString() : new Nt(t, o).toString(r), i) {
    const c = e.indexOf("#");
    c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
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
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tr = Ms, St = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, zs = typeof URLSearchParams < "u" ? URLSearchParams : Nt, Hs = typeof FormData < "u" ? FormData : null, Ws = typeof Blob < "u" ? Blob : null, Js = {
  isBrowser: !0,
  classes: {
    URLSearchParams: zs,
    FormData: Hs,
    Blob: Ws
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ct = typeof window < "u" && typeof document < "u", Et = typeof navigator == "object" && navigator || void 0, Vs = Ct && (!Et || ["ReactNative", "NativeScript", "NS"].indexOf(Et.product) < 0), Ks = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ys = Ct && window.location.href || "http://localhost", Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ct,
  hasStandardBrowserEnv: Vs,
  hasStandardBrowserWebWorkerEnv: Ks,
  navigator: Et,
  origin: Ys
}, Symbol.toStringTag, { value: "Module" })), ee = {
  ...Gs,
  ...Js
};
function Xs(e, t) {
  return ot(e, new ee.classes.URLSearchParams(), {
    visitor: function(n, r, o, a) {
      return ee.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Qs(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Zs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Nr(e) {
  function t(n, r, o, a) {
    let i = n[a++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), u = a >= n.length;
    return i = !i && d.isArray(o) ? o.length : i, u ? (d.hasOwnProp(o, i) ? o[i] = d.isArray(o[i]) ? o[i].concat(r) : [o[i], r] : o[i] = r, !c) : ((!d.hasOwnProp(o, i) || !d.isObject(o[i])) && (o[i] = []), t(n, r, o[i], a) && d.isArray(o[i]) && (o[i] = Zs(o[i])), !c);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, o) => {
      t(Qs(r), o, n, 0);
    }), n;
  }
  return null;
}
const Oe = (e, t) => e != null && d.hasOwnProp(e, t) ? e[t] : void 0;
function eo(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _t = {
  transitional: St,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = d.isObject(t);
      if (a && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
        return o ? JSON.stringify(Nr(t)) : t;
      if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
        return t;
      if (d.isArrayBufferView(t))
        return t.buffer;
      if (d.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let c;
      if (a) {
        const u = Oe(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Xs(t, u).toString();
        if ((c = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const m = Oe(this, "env"), f = m && m.FormData;
          return ot(
            c ? { "files[]": t } : t,
            f && new f(),
            u
          );
        }
      }
      return a || o ? (n.setContentType("application/json", !1), eo(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Oe(this, "transitional") || _t.transitional, r = n && n.forcedJSONParsing, o = Oe(this, "responseType"), a = o === "json";
      if (d.isResponse(t) || d.isReadableStream(t))
        return t;
      if (t && d.isString(t) && (r && !o || a)) {
        const c = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(t, Oe(this, "parseReviver"));
        } catch (u) {
          if (c)
            throw u.name === "SyntaxError" ? N.from(u, N.ERR_BAD_RESPONSE, this, null, Oe(this, "response")) : u;
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
d.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  _t.headers[e] = {};
});
const Ot = _t;
function ht(e, t) {
  const n = this || Ot, r = t || n, o = pe.from(r.headers);
  let a = r.data;
  return d.forEach(e, function(c) {
    a = c.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Sr(e) {
  return !!(e && e.__CANCEL__);
}
class to extends N {
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
    super(t ?? "canceled", N.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
const ze = to;
function Cr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new N(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? N.ERR_BAD_REQUEST : N.ERR_BAD_RESPONSE,
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
  let o = 0, a = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const m = Date.now(), f = r[a];
    i || (i = m), n[o] = u, r[o] = m;
    let p = a, x = 0;
    for (; p !== o; )
      x += n[p++], p = p % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), m - i < t)
      return;
    const w = f && m - f;
    return w ? Math.round(x * 1e3 / w) : void 0;
  };
}
function so(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const i = (m, f = Date.now()) => {
    n = f, o = null, a && (clearTimeout(a), a = null), e(...m);
  };
  return [(...m) => {
    const f = Date.now(), p = f - n;
    p >= r ? i(m, f) : (o = m, a || (a = setTimeout(() => {
      a = null, i(o);
    }, r - p)));
  }, () => o && i(o)];
}
const Qe = (e, t, n = 3) => {
  let r = 0;
  const o = no(50, 250);
  return so((a) => {
    if (!a || typeof a.loaded != "number")
      return;
    const i = a.loaded, c = a.lengthComputable ? a.total : void 0, u = c != null ? Math.min(i, c) : i, m = Math.max(0, u - r), f = o(m);
    r = Math.max(r, u);
    const p = {
      loaded: u,
      total: c,
      progress: c ? u / c : void 0,
      bytes: m,
      rate: f || void 0,
      estimated: f && c ? (c - u) / f : void 0,
      event: a,
      lengthComputable: c != null,
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
}, nr = (e) => (...t) => d.asap(() => e(...t)), oo = ee.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, ee.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ee.origin),
  ee.navigator && /(msie|trident)/i.test(ee.navigator.userAgent)
) : () => !0, ao = ee.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a, i) {
      if (typeof document > "u")
        return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), d.isString(r) && c.push(`path=${r}`), d.isString(o) && c.push(`domain=${o}`), a === !0 && c.push("secure"), d.isString(i) && c.push(`SameSite=${i}`), document.cookie = c.join("; ");
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
function io(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lo(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _r(e, t, n) {
  let r = !io(t);
  return e && (r || n === !1) ? lo(e, t) : t;
}
const sr = (e) => e instanceof pe ? { ...e } : e;
function Ne(e, t) {
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
  function r(m, f, p, x) {
    return d.isPlainObject(m) && d.isPlainObject(f) ? d.merge.call({ caseless: x }, m, f) : d.isPlainObject(f) ? d.merge({}, f) : d.isArray(f) ? f.slice() : f;
  }
  function o(m, f, p, x) {
    if (d.isUndefined(f)) {
      if (!d.isUndefined(m))
        return r(void 0, m, p, x);
    } else
      return r(m, f, p, x);
  }
  function a(m, f) {
    if (!d.isUndefined(f))
      return r(void 0, f);
  }
  function i(m, f) {
    if (d.isUndefined(f)) {
      if (!d.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, f);
  }
  function c(m, f, p) {
    if (d.hasOwnProp(t, p))
      return r(m, f);
    if (d.hasOwnProp(e, p))
      return r(void 0, m);
  }
  const u = {
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
    validateStatus: c,
    headers: (m, f, p) => o(sr(m), sr(f), p, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return;
    const p = d.hasOwnProp(u, f) ? u[f] : o, x = d.hasOwnProp(e, f) ? e[f] : void 0, w = d.hasOwnProp(t, f) ? t[f] : void 0, j = p(x, w, f);
    d.isUndefined(j) && p !== c || (n[f] = j);
  }), n;
}
const co = ["content-type", "content-length"];
function uo(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, o]) => {
    co.includes(r.toLowerCase()) && e.set(r, o);
  });
}
const fo = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), Or = (e) => {
  const t = Ne({}, e), n = (x) => d.hasOwnProp(t, x) ? t[x] : void 0, r = n("data");
  let o = n("withXSRFToken");
  const a = n("xsrfHeaderName"), i = n("xsrfCookieName");
  let c = n("headers");
  const u = n("auth"), m = n("baseURL"), f = n("allowAbsoluteUrls"), p = n("url");
  if (t.headers = c = pe.from(c), t.url = Rr(
    _r(m, p, f),
    e.params,
    e.paramsSerializer
  ), u && c.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? fo(u.password) : ""))
  ), d.isFormData(r) && (ee.hasStandardBrowserEnv || ee.hasStandardBrowserWebWorkerEnv ? c.setContentType(void 0) : d.isFunction(r.getHeaders) && uo(c, r.getHeaders(), n("formDataHeaderPolicy"))), ee.hasStandardBrowserEnv && (d.isFunction(o) && (o = o(t)), o === !0 || o == null && oo(t.url))) {
    const w = a && i && ao.read(i);
    w && c.set(a, w);
  }
  return t;
}, mo = typeof XMLHttpRequest < "u", po = mo && function(e) {
  return new Promise(function(n, r) {
    const o = Or(e);
    let a = o.data;
    const i = pe.from(o.headers).normalize();
    let { responseType: c, onUploadProgress: u, onDownloadProgress: m } = o, f, p, x, w, j;
    function g() {
      w && w(), j && j(), o.cancelToken && o.cancelToken.unsubscribe(f), o.signal && o.signal.removeEventListener("abort", f);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function y() {
      if (!h)
        return;
      const O = pe.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), $ = {
        data: !c || c === "text" || c === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: O,
        config: e,
        request: h
      };
      Cr(
        function(ne) {
          n(ne), g();
        },
        function(ne) {
          r(ne), g();
        },
        $
      ), h = null;
    }
    "onloadend" in h ? h.onloadend = y : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(y);
    }, h.onabort = function() {
      h && (r(new N("Request aborted", N.ECONNABORTED, e, h)), g(), h = null);
    }, h.onerror = function(T) {
      const $ = T && T.message ? T.message : "Network Error", K = new N($, N.ERR_NETWORK, e, h);
      K.event = T || null, r(K), g(), h = null;
    }, h.ontimeout = function() {
      let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || St;
      o.timeoutErrorMessage && (T = o.timeoutErrorMessage), r(
        new N(
          T,
          $.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED,
          e,
          h
        )
      ), g(), h = null;
    }, a === void 0 && i.setContentType(null), "setRequestHeader" in h && d.forEach(wr(i), function(T, $) {
      h.setRequestHeader($, T);
    }), d.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), c && c !== "json" && (h.responseType = o.responseType), m && ([x, j] = Qe(m, !0), h.addEventListener("progress", x)), u && h.upload && ([p, w] = Qe(u), h.upload.addEventListener("progress", p), h.upload.addEventListener("loadend", w)), (o.cancelToken || o.signal) && (f = (O) => {
      h && (r(!O || O.type ? new ze(null, e, h) : O), h.abort(), g(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(f), o.signal && (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
    const E = ro(o.url);
    if (E && !ee.protocols.includes(E)) {
      r(
        new N(
          "Unsupported protocol " + E + ":",
          N.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    h.send(a || null);
  });
}, bo = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const o = function(u) {
    if (!r) {
      r = !0, i();
      const m = u instanceof Error ? u : this.reason;
      n.abort(
        m instanceof N ? m : new ze(m instanceof Error ? m.message : m)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, o(new N(`timeout of ${t}ms exceeded`, N.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((u) => {
      u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
    }), e = null);
  };
  e.forEach((u) => u.addEventListener("abort", o));
  const { signal: c } = n;
  return c.unsubscribe = () => d.asap(i), c;
}, ho = bo, xo = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
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
  const o = go(e, t);
  let a = 0, i, c = (u) => {
    i || (i = !0, r && r(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: m, value: f } = await o.next();
          if (m) {
            c(), u.close();
            return;
          }
          let p = f.byteLength;
          if (n) {
            let x = a += p;
            n(x);
          }
          u.enqueue(new Uint8Array(f));
        } catch (m) {
          throw c(m), m;
        }
      },
      cancel(u) {
        return c(u), o.return();
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
    const c = r.length;
    for (let w = 0; w < c; w++)
      if (r.charCodeAt(w) === 37 && w + 2 < c) {
        const j = r.charCodeAt(w + 1), g = r.charCodeAt(w + 2);
        (j >= 48 && j <= 57 || j >= 65 && j <= 70 || j >= 97 && j <= 102) && (g >= 48 && g <= 57 || g >= 65 && g <= 70 || g >= 97 && g <= 102) && (i -= 2, w += 2);
      }
    let u = 0, m = c - 1;
    const f = (w) => w >= 2 && r.charCodeAt(w - 2) === 37 && // '%'
    r.charCodeAt(w - 1) === 51 && // '3'
    (r.charCodeAt(w) === 68 || r.charCodeAt(w) === 100);
    m >= 0 && (r.charCodeAt(m) === 61 ? (u++, m--) : f(m) && (u++, m -= 3)), u === 1 && m >= 0 && (r.charCodeAt(m) === 61 || f(m)) && u++;
    const x = Math.floor(i / 4) * 3 - (u || 0);
    return x > 0 ? x : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(r, "utf8");
  let a = 0;
  for (let i = 0, c = r.length; i < c; i++) {
    const u = r.charCodeAt(i);
    if (u < 128)
      a += 1;
    else if (u < 2048)
      a += 2;
    else if (u >= 55296 && u <= 56319 && i + 1 < c) {
      const m = r.charCodeAt(i + 1);
      m >= 56320 && m <= 57343 ? (a += 4, i++) : a += 3;
    } else
      a += 3;
  }
  return a;
}
const Tt = "1.16.1", ar = 64 * 1024, { isFunction: Ve } = d, ir = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, wo = (e) => {
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
  const { fetch: o, Request: a, Response: i } = e, c = o ? Ve(o) : typeof fetch == "function", u = Ve(a), m = Ve(i);
  if (!c)
    return !1;
  const f = c && Ve(n), p = c && (typeof r == "function" ? ((y) => (E) => y.encode(E))(new r()) : async (y) => new Uint8Array(await new a(y).arrayBuffer())), x = u && f && ir(() => {
    let y = !1;
    const E = new a(ee.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }), O = E.headers.has("Content-Type");
    return E.body != null && E.body.cancel(), y && !O;
  }), w = m && f && ir(() => d.isReadableStream(new i("").body)), j = {
    stream: w && ((y) => y.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !j[y] && (j[y] = (E, O) => {
      let T = E && E[y];
      if (T)
        return T.call(E);
      throw new N(
        `Response type '${y}' is not supported`,
        N.ERR_NOT_SUPPORT,
        O
      );
    });
  });
  const g = async (y) => {
    if (y == null)
      return 0;
    if (d.isBlob(y))
      return y.size;
    if (d.isSpecCompliantForm(y))
      return (await new a(ee.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(y) || d.isArrayBuffer(y))
      return y.byteLength;
    if (d.isURLSearchParams(y) && (y = y + ""), d.isString(y))
      return (await p(y)).byteLength;
  }, h = async (y, E) => {
    const O = d.toFiniteNumber(y.getContentLength());
    return O ?? g(E);
  };
  return async (y) => {
    let {
      url: E,
      method: O,
      data: T,
      signal: $,
      cancelToken: K,
      timeout: ne,
      onDownloadProgress: S,
      onUploadProgress: Y,
      responseType: q,
      headers: se,
      withCredentials: be = "same-origin",
      fetchOptions: G,
      maxContentLength: L,
      maxBodyLength: oe
    } = Or(y);
    const Q = d.isNumber(L) && L > -1, Se = d.isNumber(oe) && oe > -1;
    let we = o || fetch;
    q = q ? (q + "").toLowerCase() : "text";
    let C = ho(
      [$, K && K.toAbortSignal()],
      ne
    ), I = null;
    const de = C && C.unsubscribe && (() => {
      C.unsubscribe();
    });
    let ye;
    try {
      if (Q && typeof E == "string" && E.startsWith("data:") && vo(E) > L)
        throw new N(
          "maxContentLength size of " + L + " exceeded",
          N.ERR_BAD_RESPONSE,
          y,
          I
        );
      if (Se && O !== "get" && O !== "head") {
        const R = await h(se, T);
        if (typeof R == "number" && isFinite(R) && R > oe)
          throw new N(
            "Request body larger than maxBodyLength limit",
            N.ERR_BAD_REQUEST,
            y,
            I
          );
      }
      if (Y && x && O !== "get" && O !== "head" && (ye = await h(se, T)) !== 0) {
        let R = new a(E, {
          method: "POST",
          body: T,
          duplex: "half"
        }), k;
        if (d.isFormData(T) && (k = R.headers.get("content-type")) && se.setContentType(k), R.body) {
          const [V, H] = rr(
            ye,
            Qe(nr(Y))
          );
          T = or(R.body, ar, V, H);
        }
      }
      d.isString(be) || (be = be ? "include" : "omit");
      const M = u && "credentials" in a.prototype;
      if (d.isFormData(T)) {
        const R = se.getContentType();
        R && /^multipart\/form-data/i.test(R) && !/boundary=/i.test(R) && se.delete("content-type");
      }
      se.set("User-Agent", "axios/" + Tt, !1);
      const ue = {
        ...G,
        signal: C,
        method: O.toUpperCase(),
        headers: wr(se.normalize()),
        body: T,
        duplex: "half",
        credentials: M ? be : void 0
      };
      I = u && new a(E, ue);
      let te = await (u ? we(I, G) : we(E, ue));
      if (Q) {
        const R = d.toFiniteNumber(te.headers.get("content-length"));
        if (R != null && R > L)
          throw new N(
            "maxContentLength size of " + L + " exceeded",
            N.ERR_BAD_RESPONSE,
            y,
            I
          );
      }
      const he = w && (q === "stream" || q === "response");
      if (w && te.body && (S || Q || he && de)) {
        const R = {};
        ["status", "statusText", "headers"].forEach((Ee) => {
          R[Ee] = te[Ee];
        });
        const k = d.toFiniteNumber(te.headers.get("content-length")), [V, H] = S && rr(
          k,
          Qe(nr(S), !0)
        ) || [];
        let ae = 0;
        const ge = (Ee) => {
          if (Q && (ae = Ee, ae > L))
            throw new N(
              "maxContentLength size of " + L + " exceeded",
              N.ERR_BAD_RESPONSE,
              y,
              I
            );
          V && V(Ee);
        };
        te = new i(
          or(te.body, ar, ge, () => {
            H && H(), de && de();
          }),
          R
        );
      }
      q = q || "text";
      let Z = await j[d.findKey(j, q) || "text"](
        te,
        y
      );
      if (Q && !w && !he) {
        let R;
        if (Z != null && (typeof Z.byteLength == "number" ? R = Z.byteLength : typeof Z.size == "number" ? R = Z.size : typeof Z == "string" && (R = typeof r == "function" ? new r().encode(Z).byteLength : Z.length)), typeof R == "number" && R > L)
          throw new N(
            "maxContentLength size of " + L + " exceeded",
            N.ERR_BAD_RESPONSE,
            y,
            I
          );
      }
      return !he && de && de(), await new Promise((R, k) => {
        Cr(R, k, {
          data: Z,
          headers: pe.from(te.headers),
          status: te.status,
          statusText: te.statusText,
          config: y,
          request: I
        });
      });
    } catch (M) {
      if (de && de(), C && C.aborted && C.reason instanceof N) {
        const ue = C.reason;
        throw ue.config = y, I && (ue.request = I), M !== ue && (ue.cause = M), ue;
      }
      throw M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new N(
          "Network Error",
          N.ERR_NETWORK,
          y,
          I,
          M && M.response
        ),
        {
          cause: M.cause || M
        }
      ) : N.from(M, M && M.code, y, I, M && M.response);
    }
  };
}, Eo = /* @__PURE__ */ new Map(), Tr = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: o } = t, a = [r, o, n];
  let i = a.length, c = i, u, m, f = Eo;
  for (; c--; )
    u = a[c], m = f.get(u), m === void 0 && f.set(u, m = c ? /* @__PURE__ */ new Map() : wo(t)), f = m;
  return m;
};
Tr();
const kt = {
  http: Us,
  xhr: po,
  fetch: {
    get: Tr
  }
};
d.forEach(kt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const lr = (e) => `- ${e}`, jo = (e) => d.isFunction(e) || e === null || e === !1;
function Ro(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const a = {};
  for (let i = 0; i < n; i++) {
    r = e[i];
    let c;
    if (o = r, !jo(r) && (o = kt[(c = String(r)).toLowerCase()], o === void 0))
      throw new N(`Unknown adapter '${c}'`);
    if (o && (d.isFunction(o) || (o = o.get(t))))
      break;
    a[c || "#" + i] = o;
  }
  if (!o) {
    const i = Object.entries(a).map(
      ([u, m]) => `adapter ${u} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? i.length > 1 ? `since :
` + i.map(lr).join(`
`) : " " + lr(i[0]) : "as no adapter specified";
    throw new N(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const kr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ro,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: kt
};
function xt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ze(null, e);
}
function cr(e) {
  return xt(e), e.headers = pe.from(e.headers), e.data = ht.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kr.getAdapter(e.adapter || Ot.adapter, e)(e).then(
    function(r) {
      xt(e), e.response = r;
      try {
        r.data = ht.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = pe.from(r.headers), r;
    },
    function(r) {
      if (!Sr(r) && (xt(e), r && r.response)) {
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
        r.response.headers = pe.from(r.response.headers);
      }
      return Promise.reject(r);
    }
  );
}
const at = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  at[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const dr = {};
at.transitional = function(t, n, r) {
  function o(a, i) {
    return "[Axios v" + Tt + "] Transitional option '" + a + "'" + i + (r ? ". " + r : "");
  }
  return (a, i, c) => {
    if (t === !1)
      throw new N(
        o(i, " has been removed" + (n ? " in " + n : "")),
        N.ERR_DEPRECATED
      );
    return n && !dr[i] && (dr[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, i, c) : !0;
  };
};
at.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function No(e, t, n) {
  if (typeof e != "object")
    throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], i = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (i) {
      const c = e[a], u = c === void 0 || i(c, a, e);
      if (u !== !0)
        throw new N(
          "option " + a + " must be " + u,
          N.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new N("Unknown option " + a, N.ERR_BAD_OPTION);
  }
}
const Ge = {
  assertOptions: No,
  validators: at
}, me = Ge.validators;
class Ze {
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
`), c = i === -1 ? -1 : a.indexOf(`
`, i + 1), u = c === -1 ? "" : a.slice(c + 1);
            String(r.stack).endsWith(u) || (r.stack += `
` + a);
          }
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ne(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Ge.assertOptions(
      r,
      {
        silentJSONParsing: me.transitional(me.boolean),
        forcedJSONParsing: me.transitional(me.boolean),
        clarifyTimeoutError: me.transitional(me.boolean),
        legacyInterceptorReqResOrdering: me.transitional(me.boolean)
      },
      !1
    ), o != null && (d.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ge.assertOptions(
      o,
      {
        encode: me.function,
        serialize: me.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ge.assertOptions(
      n,
      {
        baseUrl: me.spelling("baseURL"),
        withXsrfToken: me.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = a && d.merge(a.common, a[n.method]);
    a && d.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (j) => {
      delete a[j];
    }), n.headers = pe.concat(i, a);
    const c = [];
    let u = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      u = u && g.synchronous;
      const h = n.transitional || St;
      h && h.legacyInterceptorReqResOrdering ? c.unshift(g.fulfilled, g.rejected) : c.push(g.fulfilled, g.rejected);
    });
    const m = [];
    this.interceptors.response.forEach(function(g) {
      m.push(g.fulfilled, g.rejected);
    });
    let f, p = 0, x;
    if (!u) {
      const j = [cr.bind(this), void 0];
      for (j.unshift(...c), j.push(...m), x = j.length, f = Promise.resolve(n); p < x; )
        f = f.then(j[p++], j[p++]);
      return f;
    }
    x = c.length;
    let w = n;
    for (; p < x; ) {
      const j = c[p++], g = c[p++];
      try {
        w = j(w);
      } catch (h) {
        g.call(this, h);
        break;
      }
    }
    try {
      f = cr.call(this, w);
    } catch (j) {
      return Promise.reject(j);
    }
    for (p = 0, x = m.length; p < x; )
      f = f.then(m[p++], m[p++]);
    return f;
  }
  getUri(t) {
    t = Ne(this.defaults, t);
    const n = _r(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Rr(n, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(n, r) {
    return this.request(
      Ne(r || {}, {
        method: t,
        url: n,
        data: (r || {}).data
      })
    );
  };
});
d.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(a, i, c) {
      return this.request(
        Ne(c || {}, {
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
  Ze.prototype[t] = n(), t !== "query" && (Ze.prototype[t + "Form"] = n(!0));
});
const Xe = Ze;
class At {
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
      const i = new Promise((c) => {
        r.subscribe(c), a = c;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(a);
      }, i;
    }, t(function(a, i, c) {
      r.reason || (r.reason = new ze(a, i, c), n(r.reason));
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
      token: new At(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const So = At;
function Co(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _o(e) {
  return d.isObject(e) && e.isAxiosError === !0;
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
const Oo = jt;
function Ar(e) {
  const t = new Xe(e), n = mr(Xe.prototype.request, t);
  return d.extend(n, Xe.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Ar(Ne(e, o));
  }, n;
}
const J = Ar(Ot);
J.Axios = Xe;
J.CanceledError = ze;
J.CancelToken = So;
J.isCancel = Sr;
J.VERSION = Tt;
J.toFormData = ot;
J.AxiosError = N;
J.Cancel = J.CanceledError;
J.all = function(t) {
  return Promise.all(t);
};
J.spread = Co;
J.isAxiosError = _o;
J.mergeConfig = Ne;
J.AxiosHeaders = pe;
J.formToJSON = (e) => Nr(d.isHTMLForm(e) ? new FormData(e) : e);
J.getAdapter = kr.getAdapter;
J.HttpStatusCode = Oo;
J.default = J;
const To = J;
class ko {
  constructor(t = {}) {
    Je(this, "instance");
    Je(this, "jsonPath");
    this.jsonPath = t.jsonPath || "/socket-docs/json", this.instance = To.create({
      baseURL: t.baseUrl || window.location.origin,
      timeout: 1e4
    });
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
  }
}
const Ao = (e) => new ko(e), Pr = "socket_docs_payloads", Po = (e) => {
  const t = {};
  if (!e || !e.gateways)
    return t;
  const n = localStorage.getItem(Pr), r = n ? JSON.parse(n) : {};
  return e.gateways.forEach((o) => {
    o.events.forEach((a) => {
      var c;
      const i = `${o.name}-${a.event}`;
      t[i] = r[i] || JSON.stringify(
        ((c = a.payloadSchema) == null ? void 0 : c.example) ?? {},
        null,
        2
      );
    });
  }), t;
}, Do = (e = {}) => {
  const [t, n] = le(null), [r, o] = le({}), [a, i] = le({}), [c, u] = le(!0), [m, f] = le(null), p = ur(() => Ao(e), [e.baseUrl, e.jsonPath]);
  return Te(() => {
    u(!0), p.fetchDocs().then((w) => {
      n(w), o(Po(w)), f(null);
    }).catch((w) => {
      console.error("Failed to fetch socket docs:", w), f(w instanceof Error ? w : new Error("Unknown error"));
    }).finally(() => u(!1));
  }, [p]), Te(() => {
    Object.keys(r).length > 0 && localStorage.setItem(Pr, JSON.stringify(r));
  }, [r]), {
    data: t,
    payloads: r,
    expanded: a,
    loading: c,
    error: m,
    setPayloads: o,
    toggleExpand: (w) => {
      i((j) => ({ ...j, [w]: !j[w] }));
    }
  };
}, ve = {
  THEME: "socket_docs_theme",
  GATEWAY_IDX: "socket_docs_gateway_idx",
  EVENT_IDX: "socket_docs_event_idx",
  SEARCH: "socket_docs_search"
}, Io = (e) => {
  var h;
  const [t, n] = le(() => {
    const y = localStorage.getItem(ve.GATEWAY_IDX);
    return y ? parseInt(y) : -1;
  }), [r, o] = le(() => {
    const y = localStorage.getItem(ve.EVENT_IDX);
    return y ? parseInt(y) : -1;
  }), [a, i] = le(() => localStorage.getItem(ve.SEARCH) || ""), [c, u] = le(!1), [m, f] = le(() => localStorage.getItem(ve.THEME) || "dark");
  Te(() => {
    localStorage.setItem(ve.THEME, m), m === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [m]), Te(() => {
    localStorage.setItem(ve.GATEWAY_IDX, t.toString());
  }, [t]), Te(() => {
    localStorage.setItem(ve.EVENT_IDX, r.toString());
  }, [r]), Te(() => {
    localStorage.setItem(ve.SEARCH, a);
  }, [a]);
  const p = ur(() => e ? a ? e.gateways.map((y) => ({
    ...y,
    events: y.events.filter(
      (E) => E.event.toLowerCase().includes(a.toLowerCase()) || y.name.toLowerCase().includes(a.toLowerCase())
    )
  })).filter((y) => y.events.length > 0) : e.gateways : [], [e, a]), x = p[t], w = (h = x == null ? void 0 : x.events) == null ? void 0 : h[r];
  return {
    // ...
    activeGatewayIdx: t,
    setActiveGatewayIdx: n,
    activeEventIdx: r,
    setActiveEventIdx: o,
    searchQuery: a,
    setSearchQuery: i,
    isPaused: c,
    setIsPaused: u,
    theme: m,
    toggleTheme: () => {
      f((y) => y === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const y = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), E = URL.createObjectURL(y), O = document.createElement("a");
      O.href = E, O.download = "socket-docs-contract.json", document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(E);
    },
    activeGateway: x,
    activeEvent: w,
    filteredGateways: p
  };
}, $e = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, Bo = () => {
  var Z;
  const e = B.useMemo(() => {
    var k;
    return !!((k = (window.SOCKET_DOCS_CONFIG || {}).api) != null && k.jsonPath) || !window.location.pathname.includes("socket-docs");
  }, []), [t, n] = B.useState(() => {
    const k = (window.SOCKET_DOCS_CONFIG || {}).api || {}, V = localStorage.getItem($e.API), H = V ? JSON.parse(V) : {}, ae = {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
    k.baseUrl && (ae.baseUrl = k.baseUrl), k.jsonPath && (ae.jsonPath = k.jsonPath), H.baseUrl && (ae.baseUrl = H.baseUrl);
    const ge = H.baseUrl ? H.baseUrl.includes(window.location.host) : !0;
    return H.jsonPath && (!e || !ge) && (ae.jsonPath = H.jsonPath), ae;
  }), [r, o] = B.useState(() => {
    const k = (window.SOCKET_DOCS_CONFIG || {}).socket, V = localStorage.getItem($e.SOCKET), H = V ? JSON.parse(V) : null, ge = { ...{
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
    return k && Object.assign(ge, k), H && Object.assign(ge, H), ge;
  }), [a, i] = B.useState(!1), c = B.useMemo(() => t, [t]), { data: u, payloads: m, setPayloads: f, expanded: p, toggleExpand: x, loading: w, error: j } = Do(c), g = B.useMemo(() => ({
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
  }), [r]), { connected: h, logs: y, connect: E, disconnect: O, emitEvent: T, clearLogs: $ } = In(g), K = B.useMemo(() => {
    if (!u)
      return ["/"];
    const R = /* @__PURE__ */ new Set(["/"]);
    return u.gateways.forEach((k) => R.add(k.namespace)), Array.from(R);
  }, [u]), ne = B.useMemo(() => {
    if (!u)
      return ["/socket.io"];
    const R = /* @__PURE__ */ new Set(["/socket.io"]);
    return u.gateways.forEach((k) => R.add(k.path)), Array.from(R);
  }, [u]), {
    activeGatewayIdx: S,
    setActiveGatewayIdx: Y,
    activeEventIdx: q,
    setActiveEventIdx: se,
    searchQuery: be,
    setSearchQuery: G,
    isPaused: L,
    setIsPaused: oe,
    theme: Q,
    toggleTheme: Se,
    exportContract: we,
    activeGateway: C,
    activeEvent: I,
    filteredGateways: de
  } = Io(u);
  B.useEffect(() => {
    if (C) {
      const R = t.baseUrl.replace(/\/$/, ""), k = r.namespace === "/" ? C.namespace : r.namespace, V = r.path === "/socket.io" ? C.path : r.path, H = `${R}${te(k)}`;
      if (r.autoConnect) {
        const ae = setTimeout(() => {
          E(C.name, H, V);
        }, 300);
        return () => clearTimeout(ae);
      }
    }
  }, [
    C == null ? void 0 : C.name,
    r.autoConnect,
    r.namespace,
    r.path,
    r.auth.token,
    t.baseUrl,
    E
  ]);
  const ye = (R, k) => {
    localStorage.setItem($e.API, JSON.stringify(R)), localStorage.setItem($e.SOCKET, JSON.stringify(k)), n(R), o(k), i(!1), window.location.reload();
  }, M = () => {
    Object.values($e).forEach((R) => localStorage.removeItem(R)), localStorage.removeItem("socket_docs_payloads"), localStorage.removeItem("socket_docs_theme"), localStorage.removeItem("socket_docs_gateway_idx"), localStorage.removeItem("socket_docs_event_idx"), localStorage.removeItem("socket_docs_search"), window.location.reload();
  }, ue = () => {
    if (!C)
      return;
    const R = t.baseUrl.replace(/\/$/, ""), k = r.namespace === "/" ? C.namespace : r.namespace, V = r.path === "/socket.io" ? C.path : r.path, H = `${R}${te(k)}`;
    h[C.name] ? O(C.name, k) : E(C.name, H, V);
  }, te = (R) => R.startsWith("/") ? R : `/${R}`;
  if (w)
    return /* @__PURE__ */ s.jsx(Yt, {});
  if (j) {
    const R = ((Z = j.config) == null ? void 0 : Z.url) || t.jsonPath;
    return /* @__PURE__ */ s.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${Q === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ s.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ s.jsx("p", { className: "text-text-muted", children: j.message }),
      /* @__PURE__ */ s.jsxs("p", { className: "text-xs text-text-muted opacity-50", children: [
        "URL: ",
        R
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex gap-3", children: [
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
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        Gt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: ye,
          onClear: M,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Q,
          activeGatewayNamespace: C == null ? void 0 : C.namespace
        }
      )
    ] });
  }
  if (!u)
    return /* @__PURE__ */ s.jsx(Yt, {});
  const he = C && I ? `${C.name}-${I.event}` : "";
  return /* @__PURE__ */ s.jsxs("div", { className: `flex min-h-screen font-sans text-text-primary ${Q === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ s.jsx(
      Sn,
      {
        gateways: de,
        activeGatewayIdx: S,
        activeEventIdx: q,
        onSelectGateway: Y,
        onSelectEvent: se,
        searchQuery: be,
        onSearchChange: G,
        onExport: we,
        expanded: p,
        onToggleExpand: x
      }
    ),
    /* @__PURE__ */ s.jsxs("main", { className: "flex flex-1 flex-col bg-bg-secondary", children: [
      /* @__PURE__ */ s.jsx(
        Cn,
        {
          connected: C ? !!h[C.name] : !1,
          gatewayPath: C ? `${t.baseUrl.replace(/https?:\/\//, "")}${C.path}` : "ws://localhost:3000",
          namespace: r.namespace !== "/" ? r.namespace : (C == null ? void 0 : C.namespace) || "/",
          namespaces: K,
          path: r.path !== "/socket.io" ? r.path : (C == null ? void 0 : C.path) || "/socket.io",
          paths: ne,
          theme: Q,
          onToggleTheme: Se,
          onOpenSettings: () => i(!0),
          onNamespaceChange: (R) => o((k) => ({ ...k, namespace: R })),
          onPathChange: (R) => o((k) => ({ ...k, path: R })),
          onConnect: ue
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 p-4 md:p-6 gap-6 flex-col lg:flex-row overflow-hidden", children: C && I ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex flex-[1.5] flex-col min-w-0 gap-6 overflow-y-auto pr-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            On,
            {
              gatewayName: C.name,
              eventName: I.event,
              summary: I.summary ?? "",
              description: I.description ?? "",
              auth: I.auth
            }
          ) }),
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            Tn,
            {
              schema: I.payloadSchema,
              responseSchema: I.responseSchema
            }
          ) }),
          /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s.jsx(
            kn,
            {
              payload: m[he] ?? "{}",
              schema: I.payloadSchema,
              responseSchema: I.responseSchema,
              emits: I.emits,
              onChange: (R) => f({ ...m, [he]: R }),
              onSend: () => T(C.name, I.event, m[he] ?? "{}")
            }
          ) })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "flex flex-1 flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pt-6 lg:pt-0 lg:pl-6 overflow-hidden", children: /* @__PURE__ */ s.jsx(
          Pn,
          {
            connected: !!h[C.name],
            logs: y,
            onClear: $,
            isPaused: L,
            onTogglePause: () => oe(!L)
          }
        ) })
      ] }) : /* @__PURE__ */ s.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center text-center p-12", children: [
        /* @__PURE__ */ s.jsx("div", { className: "mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-emerald/10 text-brand-emerald shadow-xl shadow-brand-emerald/5", children: /* @__PURE__ */ s.jsx("span", { className: "text-4xl font-bold", children: "■" }) }),
        /* @__PURE__ */ s.jsx("h2", { className: "mb-3 text-2xl font-bold text-text-primary", children: "Bienvenido a Socket Docs" }),
        /* @__PURE__ */ s.jsx("p", { className: "max-w-md text-text-secondary", children: "Selecciona un Gateway y un evento de la barra lateral para comenzar a interactuar con tu servidor WebSocket en tiempo real." }),
        u && /* @__PURE__ */ s.jsxs("div", { className: "mt-8 flex gap-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Gateways" }),
            /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold", children: u.gateways.length })
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "h-10 w-px bg-border-subtle mx-4" }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ s.jsx("span", { className: "text-xs font-semibold uppercase text-text-muted", children: "Total Eventos" }),
            /* @__PURE__ */ s.jsx("span", { className: "text-xl font-bold", children: u.gateways.reduce((R, k) => R + k.events.length, 0) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsx(
        Gt,
        {
          show: a,
          onClose: () => i(!1),
          onSave: ye,
          onClear: M,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: Q,
          activeGatewayNamespace: C == null ? void 0 : C.namespace
        }
      )
    ] })
  ] });
};
export {
  Bo as App
};
