var Xr = Object.defineProperty;
var Qr = (e, t, n) => t in e ? Xr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Me = (e, t, n) => (Qr(e, typeof t != "symbol" ? t + "" : t, n), n);
import te, { useState as re, useCallback as qe, useMemo as cr, useEffect as Zr } from "react";
import { RefreshCw as en, Sun as tn, Moon as rn, Settings as nn, Play as sn, RotateCcw as on } from "lucide-react";
import { io as an } from "socket.io-client";
var bt = { exports: {} }, Pe = {};
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
  var e = te, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, f, p) {
    var d, h = {}, v = null, E = null;
    p !== void 0 && (v = "" + p), f.key !== void 0 && (v = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (d in f)
      r.call(f, d) && !o.hasOwnProperty(d) && (h[d] = f[d]);
    if (l && l.defaultProps)
      for (d in f = l.defaultProps, f)
        h[d] === void 0 && (h[d] = f[d]);
    return { $$typeof: t, type: l, key: v, ref: E, props: h, _owner: s.current };
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
    var e = te, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), R = Symbol.iterator, y = "@@iterator";
    function x(i) {
      if (i === null || typeof i != "object")
        return null;
      var m = R && i[R] || i[y];
      return typeof m == "function" ? m : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(i) {
      {
        for (var m = arguments.length, w = new Array(m > 1 ? m - 1 : 0), j = 1; j < m; j++)
          w[j - 1] = arguments[j];
        C("error", i, w);
      }
    }
    function C(i, m, w) {
      {
        var j = g.ReactDebugCurrentFrame, P = j.getStackAddendum();
        P !== "" && (m += "%s", w = w.concat([P]));
        var D = w.map(function(T) {
          return String(T);
        });
        D.unshift("Warning: " + m), Function.prototype.apply.call(console[i], console, D);
      }
    }
    var O = !1, I = !1, G = !1, ue = !1, me = !1, be;
    be = Symbol.for("react.module.reference");
    function z(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === o || me || i === s || i === p || i === d || ue || i === E || O || I || G || typeof i == "object" && i !== null && (i.$$typeof === v || i.$$typeof === h || i.$$typeof === a || i.$$typeof === l || i.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === be || i.getModuleId !== void 0));
    }
    function se(i, m, w) {
      var j = i.displayName;
      if (j)
        return j;
      var P = m.displayName || m.name || "";
      return P !== "" ? w + "(" + P + ")" : w;
    }
    function de(i) {
      return i.displayName || "Context";
    }
    function N(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
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
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var m = i;
            return de(m) + ".Consumer";
          case a:
            var w = i;
            return de(w._context) + ".Provider";
          case f:
            return se(i, i.render, "ForwardRef");
          case h:
            var j = i.displayName || null;
            return j !== null ? j : N(i.type) || "Memo";
          case v: {
            var P = i, D = P._payload, T = P._init;
            try {
              return N(T(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, oe = 0, ae, ve, fe, k, L, W, he;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function ce() {
      {
        if (oe === 0) {
          ae = console.log, ve = console.info, fe = console.warn, k = console.error, L = console.group, W = console.groupCollapsed, he = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        oe++;
      }
    }
    function Q() {
      {
        if (oe--, oe === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, i, {
              value: ae
            }),
            info: F({}, i, {
              value: ve
            }),
            warn: F({}, i, {
              value: fe
            }),
            error: F({}, i, {
              value: k
            }),
            group: F({}, i, {
              value: L
            }),
            groupCollapsed: F({}, i, {
              value: W
            }),
            groupEnd: F({}, i, {
              value: he
            })
          });
        }
        oe < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = g.ReactCurrentDispatcher, X;
    function A(i, m, w) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (P) {
            var j = P.stack.trim().match(/\n( *(at )?)/);
            X = j && j[1] || "";
          }
        return `
` + X + i;
      }
    }
    var le = !1, pe;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Re();
    }
    function _e(i, m) {
      if (!i || le)
        return "";
      {
        var w = pe.get(i);
        if (w !== void 0)
          return w;
      }
      var j;
      le = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = xe.current, xe.current = null, ce();
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
              j = K;
            }
            Reflect.construct(i, [], T);
          } else {
            try {
              T.call();
            } catch (K) {
              j = K;
            }
            i.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            j = K;
          }
          i();
        }
      } catch (K) {
        if (K && j && typeof K.stack == "string") {
          for (var _ = K.stack.split(`
`), J = j.stack.split(`
`), B = _.length - 1, $ = J.length - 1; B >= 1 && $ >= 0 && _[B] !== J[$]; )
            $--;
          for (; B >= 1 && $ >= 0; B--, $--)
            if (_[B] !== J[$]) {
              if (B !== 1 || $ !== 1)
                do
                  if (B--, $--, $ < 0 || _[B] !== J[$]) {
                    var Z = `
` + _[B].replace(" at new ", " at ");
                    return i.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", i.displayName)), typeof i == "function" && pe.set(i, Z), Z;
                  }
                while (B >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        le = !1, xe.current = D, Q(), Error.prepareStackTrace = P;
      }
      var je = i ? i.displayName || i.name : "", ye = je ? A(je) : "";
      return typeof i == "function" && pe.set(i, ye), ye;
    }
    function st(i, m, w) {
      return _e(i, !1);
    }
    function ge(i) {
      var m = i.prototype;
      return !!(m && m.isReactComponent);
    }
    function Be(i, m, w) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return _e(i, ge(i));
      if (typeof i == "string")
        return A(i);
      switch (i) {
        case p:
          return A("Suspense");
        case d:
          return A("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case f:
            return st(i.render);
          case h:
            return Be(i.type, m, w);
          case v: {
            var j = i, P = j._payload, D = j._init;
            try {
              return Be(D(P), m, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, At = {}, Pt = g.ReactDebugCurrentFrame;
    function $e(i) {
      if (i) {
        var m = i._owner, w = Be(i.type, i._source, m ? m.type : null);
        Pt.setExtraStackFrame(w);
      } else
        Pt.setExtraStackFrame(null);
    }
    function _r(i, m, w, j, P) {
      {
        var D = Function.call.bind(Te);
        for (var T in i)
          if (D(i, T)) {
            var _ = void 0;
            try {
              if (typeof i[T] != "function") {
                var J = Error((j || "React class") + ": " + w + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = i[T](m, T, j, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              _ = B;
            }
            _ && !(_ instanceof Error) && ($e(P), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", w, T, typeof _), $e(null)), _ instanceof Error && !(_.message in At) && (At[_.message] = !0, $e(P), b("Failed %s type: %s", w, _.message), $e(null));
          }
      }
    }
    var Tr = Array.isArray;
    function ot(i) {
      return Tr(i);
    }
    function Ar(i) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, w = m && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return w;
      }
    }
    function Pr(i) {
      try {
        return kt(i), !1;
      } catch {
        return !0;
      }
    }
    function kt(i) {
      return "" + i;
    }
    function Dt(i) {
      if (Pr(i))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(i)), kt(i);
    }
    var Ae = g.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Lt, at;
    at = {};
    function Dr(i) {
      if (Te.call(i, "ref")) {
        var m = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Fr(i) {
      if (Te.call(i, "key")) {
        var m = Object.getOwnPropertyDescriptor(i, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function Lr(i, m) {
      if (typeof i.ref == "string" && Ae.current && m && Ae.current.stateNode !== m) {
        var w = N(Ae.current.type);
        at[w] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Ae.current.type), i.ref), at[w] = !0);
      }
    }
    function Ur(i, m) {
      {
        var w = function() {
          Ft || (Ft = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Ir(i, m) {
      {
        var w = function() {
          Lt || (Lt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        w.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Br = function(i, m, w, j, P, D, T) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: m,
        ref: w,
        props: T,
        // Record the component responsible for creating this element.
        _owner: D
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
        value: j
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function $r(i, m, w, j, P) {
      {
        var D, T = {}, _ = null, J = null;
        w !== void 0 && (Dt(w), _ = "" + w), Fr(m) && (Dt(m.key), _ = "" + m.key), Dr(m) && (J = m.ref, Lr(m, P));
        for (D in m)
          Te.call(m, D) && !kr.hasOwnProperty(D) && (T[D] = m[D]);
        if (i && i.defaultProps) {
          var B = i.defaultProps;
          for (D in B)
            T[D] === void 0 && (T[D] = B[D]);
        }
        if (_ || J) {
          var $ = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          _ && Ur(T, $), J && Ir(T, $);
        }
        return Br(i, _, J, P, j, Ae.current, T);
      }
    }
    var it = g.ReactCurrentOwner, Ut = g.ReactDebugCurrentFrame;
    function Se(i) {
      if (i) {
        var m = i._owner, w = Be(i.type, i._source, m ? m.type : null);
        Ut.setExtraStackFrame(w);
      } else
        Ut.setExtraStackFrame(null);
    }
    var ct;
    ct = !1;
    function lt(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function It() {
      {
        if (it.current) {
          var i = N(it.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Mr(i) {
      {
        if (i !== void 0) {
          var m = i.fileName.replace(/^.*[\\\/]/, ""), w = i.lineNumber;
          return `

Check your code at ` + m + ":" + w + ".";
        }
        return "";
      }
    }
    var Bt = {};
    function qr(i) {
      {
        var m = It();
        if (!m) {
          var w = typeof i == "string" ? i : i.displayName || i.name;
          w && (m = `

Check the top-level render call using <` + w + ">.");
        }
        return m;
      }
    }
    function $t(i, m) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var w = qr(m);
        if (Bt[w])
          return;
        Bt[w] = !0;
        var j = "";
        i && i._owner && i._owner !== it.current && (j = " It was passed a child from " + N(i._owner.type) + "."), Se(i), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, j), Se(null);
      }
    }
    function Mt(i, m) {
      {
        if (typeof i != "object")
          return;
        if (ot(i))
          for (var w = 0; w < i.length; w++) {
            var j = i[w];
            lt(j) && $t(j, m);
          }
        else if (lt(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var P = x(i);
          if (typeof P == "function" && P !== i.entries)
            for (var D = P.call(i), T; !(T = D.next()).done; )
              lt(T.value) && $t(T.value, m);
        }
      }
    }
    function Hr(i) {
      {
        var m = i.type;
        if (m == null || typeof m == "string")
          return;
        var w;
        if (typeof m == "function")
          w = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === h))
          w = m.propTypes;
        else
          return;
        if (w) {
          var j = N(m);
          _r(w, i.props, "prop", j, i);
        } else if (m.PropTypes !== void 0 && !ct) {
          ct = !0;
          var P = N(m);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zr(i) {
      {
        for (var m = Object.keys(i.props), w = 0; w < m.length; w++) {
          var j = m[w];
          if (j !== "children" && j !== "key") {
            Se(i), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Se(null);
            break;
          }
        }
        i.ref !== null && (Se(i), b("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var qt = {};
    function Ht(i, m, w, j, P, D) {
      {
        var T = z(i);
        if (!T) {
          var _ = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Mr(P);
          J ? _ += J : _ += It();
          var B;
          i === null ? B = "null" : ot(i) ? B = "array" : i !== void 0 && i.$$typeof === t ? (B = "<" + (N(i.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : B = typeof i, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, _);
        }
        var $ = $r(i, m, w, P, D);
        if ($ == null)
          return $;
        if (T) {
          var Z = m.children;
          if (Z !== void 0)
            if (j)
              if (ot(Z)) {
                for (var je = 0; je < Z.length; je++)
                  Mt(Z[je], i);
                Object.freeze && Object.freeze(Z);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mt(Z, i);
        }
        if (Te.call(m, "key")) {
          var ye = N(i), K = Object.keys(m).filter(function(Gr) {
            return Gr !== "key";
          }), ut = K.length > 0 ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qt[ye + ut]) {
            var Yr = K.length > 0 ? "{" + K.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ut, ye, Yr, ye), qt[ye + ut] = !0;
          }
        }
        return i === r ? zr($) : Hr($), $;
      }
    }
    function Wr(i, m, w) {
      return Ht(i, m, w, !0);
    }
    function Vr(i, m, w) {
      return Ht(i, m, w, !1);
    }
    var Jr = Vr, Kr = Wr;
    ke.Fragment = r, ke.jsx = Jr, ke.jsxs = Kr;
  }()), ke;
}
process.env.NODE_ENV === "production" ? bt.exports = cn() : bt.exports = ln();
var c = bt.exports;
const Vt = () => /* @__PURE__ */ c.jsxs("div", { className: "flex min-h-screen items-center justify-center bg-bg-primary text-brand-emerald", children: [
  /* @__PURE__ */ c.jsx(en, { className: "animate-spin", size: 32 }),
  /* @__PURE__ */ c.jsx("span", { className: "ml-4 text-xl font-medium", children: "Cargando contratos..." })
] }), un = ({
  gateways: e,
  activeGatewayIdx: t,
  activeEventIdx: n,
  onSelectGateway: r,
  onSelectEvent: s
}) => /* @__PURE__ */ c.jsx("div", { className: "space-y-4", children: e.map((o, a) => /* @__PURE__ */ c.jsxs("div", { className: "nav-group", children: [
  /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
      onClick: () => r(a),
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: "text-text-muted", children: "📁" }),
          o.name
        ] }),
        /* @__PURE__ */ c.jsxs("span", { className: "text-[11px] text-text-muted", children: [
          o.namespace,
          " ▾"
        ] })
      ]
    }
  ),
  /* @__PURE__ */ c.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: o.events.map((l, f) => {
    const p = t === a && n === f;
    return /* @__PURE__ */ c.jsxs(
      "li",
      {
        onClick: () => {
          r(a), s(f);
        },
        className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${p ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
        children: [
          /* @__PURE__ */ c.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
          /* @__PURE__ */ c.jsx("span", { className: "truncate", children: l.event })
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
}) => /* @__PURE__ */ c.jsxs("aside", { className: "flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
    /* @__PURE__ */ c.jsx("span", { className: "text-xl text-brand-emerald", children: "■" }),
    /* @__PURE__ */ c.jsx("span", { className: "text-base font-semibold", children: U.common.socketDocs }),
    /* @__PURE__ */ c.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: U.common.v1 })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "relative mb-6", children: [
    /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "text",
        className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
        placeholder: U.common.searchPlaceholder,
        value: o,
        onChange: (f) => a(f.target.value)
      }
    ),
    /* @__PURE__ */ c.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary", children: [
    /* @__PURE__ */ c.jsx("span", { children: U.common.gateways }),
    /* @__PURE__ */ c.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: e.length })
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ c.jsx(
    un,
    {
      gateways: e,
      activeGatewayIdx: t,
      activeEventIdx: n,
      onSelectGateway: r,
      onSelectEvent: s
    }
  ) }),
  /* @__PURE__ */ c.jsxs("div", { className: "mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted", children: [
    /* @__PURE__ */ c.jsxs(
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
    /* @__PURE__ */ c.jsxs("p", { children: [
      U.common.socketDocs,
      " ",
      U.common.v1
    ] }),
    /* @__PURE__ */ c.jsx("p", { children: U.common.madeWith })
  ] })
] }), fn = ({
  connected: e,
  gatewayPath: t,
  namespace: n,
  theme: r,
  onToggleTheme: s,
  onOpenSettings: o
}) => (console.log(e, t, n), /* @__PURE__ */ c.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs", children: [
    /* @__PURE__ */ c.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "bg-brand-emerald" : "bg-red-500"}` }),
    /* @__PURE__ */ c.jsx("span", { children: e ? U.common.connected : U.common.disconnected }),
    /* @__PURE__ */ c.jsx("span", { className: "text-text-muted", children: t })
  ] }),
  /* @__PURE__ */ c.jsx("select", { className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none", children: /* @__PURE__ */ c.jsx("option", { children: n }) }),
  /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: s,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: r === "dark" ? /* @__PURE__ */ c.jsx(tn, { size: 14 }) : /* @__PURE__ */ c.jsx(rn, { size: 14 })
    }
  ),
  /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: o,
      className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle",
      children: /* @__PURE__ */ c.jsx(nn, { size: 14 })
    }
  )
] })), pn = ({
  gatewayName: e,
  eventName: t,
  summary: n,
  description: r
}) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ c.jsxs("div", { className: "mb-4 flex gap-2 text-sm text-text-secondary", children: [
    /* @__PURE__ */ c.jsx("span", { children: e }),
    " / ",
    /* @__PURE__ */ c.jsx("span", { children: "events" }),
    " / ",
    /* @__PURE__ */ c.jsx("span", { className: "font-medium text-text-primary", children: t })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
    /* @__PURE__ */ c.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: U.event.type }),
    /* @__PURE__ */ c.jsx("span", { className: "font-mono text-xl font-semibold", children: t }),
    /* @__PURE__ */ c.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] }),
  /* @__PURE__ */ c.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: r || "No description provided for this event." })
] }), mn = ({ connected: e, onConnect: t }) => /* @__PURE__ */ c.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
    /* @__PURE__ */ c.jsx("span", { className: "text-[13px] font-semibold", children: U.event.parameters }),
    /* @__PURE__ */ c.jsx(
      "button",
      {
        onClick: t,
        className: "rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
        children: e ? U.event.reconnect : U.event.connect
      }
    )
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "p-4 italic text-text-secondary", children: U.event.noParameters })
] }), hn = ({ payload: e, onChange: t, onSend: n }) => /* @__PURE__ */ c.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
    /* @__PURE__ */ c.jsxs("span", { className: "text-[13px] font-semibold", children: [
      U.event.requestBody,
      " ",
      /* @__PURE__ */ c.jsx("span", { className: "text-[11px] text-red-400", children: U.event.required })
    ] }),
    /* @__PURE__ */ c.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ c.jsx("option", { children: "application/json" }) })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
      /* @__PURE__ */ c.jsx("span", { className: "cursor-pointer border-b-2 border-brand-emerald pb-1.5 text-brand-emerald", children: U.event.exampleValue }),
      /* @__PURE__ */ c.jsx("span", { className: "cursor-pointer pb-1.5 text-text-secondary", children: U.event.schema })
    ] }),
    /* @__PURE__ */ c.jsx(
      "textarea",
      {
        value: e,
        onChange: (r) => t(r.target.value),
        className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
        rows: 6
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          onClick: n,
          className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
          children: [
            /* @__PURE__ */ c.jsx(sn, { size: 14 }),
            " ",
            U.event.sendEvent
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
        /* @__PURE__ */ c.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
        " ",
        U.event.includeAck
      ] })
    ] })
  ] })
] }), bn = ({ logs: e }) => e.length === 0 ? /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ c.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ c.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ c.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: e.map((t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("span", { className: `font-bold ${t.type === "sent" ? "text-blue-400" : t.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: t.type.toUpperCase() }),
          /* @__PURE__ */ c.jsx("span", { className: "text-text-secondary", children: t.message })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-[10px] text-text-muted", children: t.timestamp })
      ] }),
      t.data != null && /* @__PURE__ */ c.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(t.data, null, 2) })
    ]
  },
  t.id
)) }), xn = ({
  connected: e,
  logs: t,
  onClear: n,
  isPaused: r,
  onTogglePause: s
}) => /* @__PURE__ */ c.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: `h-2 w-2 rounded-full ${e ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
      /* @__PURE__ */ c.jsx("span", { className: "text-[13px] font-semibold", children: U.realtime.title })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ c.jsxs("button", { onClick: n, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
        /* @__PURE__ */ c.jsx(on, { size: 12 }),
        " ",
        U.realtime.clear
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: s,
          className: `rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle ${r ? "bg-brand-emerald-dim text-brand-emerald" : ""}`,
          children: r ? "Continuar" : U.realtime.pause
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ c.jsx(bn, { logs: r ? [] : t, onClear: n }) })
] }), Jt = ({
  show: e,
  onClose: t,
  onSave: n,
  initialApiConfig: r,
  initialSocketConfig: s,
  isStandalone: o,
  theme: a,
  activeGatewayNamespace: l
}) => {
  const [f, p] = te.useState(r), [d, h] = te.useState(s), [v, E] = te.useState(!1), [R, y] = te.useState(null);
  te.useEffect(() => {
    e && (p(r), h(s), y(null));
  }, [e, r, s]);
  const x = (b) => b.startsWith("/") ? b : `/${b}`, g = async () => {
    E(!0), y(null);
    const b = f.baseUrl.replace(/\/$/, ""), C = d.namespace === "/" ? l ?? "/" : d.namespace;
    try {
      const { io: O } = await import("socket.io-client"), I = O(`${b}${x(C)}`, {
        path: d.path,
        transports: d.transports,
        auth: d.auth,
        timeout: 5e3,
        forceNew: !0,
        reconnection: !1
      });
      I.on("connect", () => {
        y({ success: !0, message: "¡Conexión exitosa!" }), E(!1), I.disconnect();
      }), I.on("connect_error", (G) => {
        y({ success: !1, message: `Error: ${G.message}` }), E(!1), I.disconnect();
      });
    } catch (O) {
      y({ success: !1, message: `Error: ${O instanceof Error ? O.message : "Error desconocido"}` }), E(!1);
    }
  };
  return e ? /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ c.jsxs("div", { className: `w-full max-w-4xl rounded-lg p-6 shadow-xl border border-border-subtle flex flex-col max-h-[90vh] ${a === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ c.jsx("h2", { className: "mb-4 text-xl font-bold", children: "Configuración Completa" }),
    /* @__PURE__ */ c.jsx("div", { className: "flex-1 overflow-y-auto pr-2", children: /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ c.jsx("h3", { className: "text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Documentación API" }),
          /* @__PURE__ */ c.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${o ? "bg-orange-500/20 text-orange-500" : "bg-brand-emerald/20 text-brand-emerald"}`, children: o ? "Modo Standalone" : "Modo Integrado" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Base URL" }),
            /* @__PURE__ */ c.jsx(
              "input",
              {
                type: "text",
                value: f.baseUrl,
                onChange: (b) => p({ ...f, baseUrl: b.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                placeholder: "http://localhost:3000"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { children: [
            /* @__PURE__ */ c.jsxs("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: [
              "JSON Path ",
              o && /* @__PURE__ */ c.jsx("span", { className: "text-[10px] text-orange-500 font-normal", children: "(Bloqueado en Standalone)" })
            ] }),
            /* @__PURE__ */ c.jsx(
              "input",
              {
                type: "text",
                disabled: o,
                value: f.jsonPath,
                onChange: (b) => p({ ...f, jsonPath: b.target.value }),
                className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${o ? "opacity-50 cursor-not-allowed bg-bg-secondary/50" : a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("section", { children: [
          /* @__PURE__ */ c.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Autenticación" }),
          /* @__PURE__ */ c.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "JWT Token" }),
              /* @__PURE__ */ c.jsx(
                "textarea",
                {
                  value: d.auth.token,
                  onChange: (b) => h({
                    ...d,
                    auth: { ...d.auth, token: b.target.value }
                  }),
                  className: `w-full h-24 rounded border border-border-subtle p-2 text-xs outline-none resize-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "Bearer eyJhbG..."
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "User ID" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  value: d.auth.userId,
                  onChange: (b) => h({
                    ...d,
                    auth: { ...d.auth, userId: b.target.value }
                  }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ c.jsxs("section", { children: [
          /* @__PURE__ */ c.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Socket.IO Core" }),
          /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "col-span-2", children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Namespace Override" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  value: d.namespace,
                  onChange: (b) => h({ ...d, namespace: b.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Socket Path" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "text",
                  value: d.path,
                  onChange: (b) => h({ ...d, path: b.target.value }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Transporte" }),
              /* @__PURE__ */ c.jsxs(
                "select",
                {
                  value: d.transports.join(","),
                  onChange: (b) => {
                    const C = b.target.value;
                    let O = ["polling", "websocket"];
                    C === "websocket" && (O = ["websocket"]), C === "polling" && (O = ["polling"]), h({ ...d, transports: O });
                  },
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  children: [
                    /* @__PURE__ */ c.jsx("option", { value: "polling,websocket", children: "Automático" }),
                    /* @__PURE__ */ c.jsx("option", { value: "websocket", children: "Websocket" }),
                    /* @__PURE__ */ c.jsx("option", { value: "polling", children: "Polling" })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("section", { children: [
          /* @__PURE__ */ c.jsx("h3", { className: "mb-3 text-sm font-semibold uppercase text-brand-emerald tracking-wider", children: "Reconexión y Tiempos" }),
          /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "reconnection",
                  checked: d.reconnection,
                  onChange: (b) => h({ ...d, reconnection: b.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ c.jsx("label", { htmlFor: "reconnection", className: "text-xs font-medium text-text-muted", children: "Habilitar Reconexión" })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "checkbox",
                  id: "autoConnect",
                  checked: d.autoConnect,
                  onChange: (b) => h({ ...d, autoConnect: b.target.checked }),
                  className: "h-4 w-4 rounded border-border-subtle accent-brand-emerald"
                }
              ),
              /* @__PURE__ */ c.jsx("label", { htmlFor: "autoConnect", className: "text-xs font-medium text-text-muted", children: "Auto Conectar" })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Máx Intentos" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionAttempts === 1 / 0 ? 0 : d.reconnectionAttempts,
                  onChange: (b) => h({ ...d, reconnectionAttempts: b.target.value === "0" ? 1 / 0 : parseInt(b.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`,
                  placeholder: "0 = Infinito"
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Timeout (ms)" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "number",
                  value: d.timeout,
                  onChange: (b) => h({ ...d, timeout: parseInt(b.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Inicial (ms)" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelay,
                  onChange: (b) => h({ ...d, reconnectionDelay: parseInt(b.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] }),
            /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx("label", { className: "mb-1 block text-xs font-medium text-text-muted", children: "Delay Máximo (ms)" }),
              /* @__PURE__ */ c.jsx(
                "input",
                {
                  type: "number",
                  value: d.reconnectionDelayMax,
                  onChange: (b) => h({ ...d, reconnectionDelayMax: parseInt(b.target.value) }),
                  className: `w-full rounded border border-border-subtle p-2 text-sm outline-none transition-colors focus:border-brand-emerald ${a === "dark" ? "bg-bg-secondary" : "bg-gray-100"}`
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ c.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border-subtle pt-5", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: g,
            disabled: v,
            className: `rounded px-4 py-2 text-sm font-semibold transition-all ${v ? "bg-bg-secondary text-text-muted cursor-not-allowed" : "bg-bg-surface border border-border-subtle text-text-primary hover:bg-border-subtle"}`,
            children: v ? "Probando..." : "Probar Conexión"
          }
        ),
        R && /* @__PURE__ */ c.jsx("span", { className: `text-xs font-medium ${R.success ? "text-brand-emerald" : "text-red-500"}`, children: R.message })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: t,
            className: "rounded bg-bg-secondary px-6 py-2 text-sm font-medium text-text-primary hover:bg-border-subtle transition-all",
            children: "Cancelar"
          }
        ),
        /* @__PURE__ */ c.jsx(
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
    Me(this, "sockets", {});
  }
  connect(t, n, r = {}, s) {
    this.sockets[t] && this.sockets[t].disconnect();
    const o = {
      transports: ["polling", "websocket"],
      forceNew: !0,
      ...r.options
    }, a = an(n, o);
    return a.on("connect", s.onConnect), a.on("connect_error", (l) => s.onConnectError(l)), a.on("disconnect", s.onDisconnect), a.onAny(s.onAny), this.sockets[t] = a, a;
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
  const [t, n] = re({}), [r, s] = re([]), o = qe((p, d, h) => {
    s(
      (v) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: p,
          message: d,
          data: h
        },
        ...v
      ].slice(0, 50)
    );
  }, []), a = qe((p, d, h) => {
    n((v) => {
      if (v[p])
        return dt.disconnect(p), o("error", `Disconnected from ${d}`), { ...v, [p]: !1 };
      const E = {
        ...e,
        options: {
          path: h ?? "/socket.io",
          auth: e.auth,
          ...e.options
        }
      };
      return dt.connect(p, d, E, {
        onConnect: () => {
          n((R) => ({ ...R, [p]: !0 })), o("received", `Connected to ${d}`);
        },
        onDisconnect: () => {
          n((R) => ({ ...R, [p]: !1 })), o("error", `Disconnected from ${d}`);
        },
        onConnectError: (R) => {
          n((y) => ({ ...y, [p]: !1 })), o("error", `Connection Error: ${R.message}`);
        },
        onAny: (R, ...y) => {
          o("received", `Event: ${R}`, y);
        }
      }), v;
    });
  }, [e, o]), l = qe((p, d, h) => {
    try {
      const v = JSON.parse(h);
      o("sent", `Emitting ${d}`, v), dt.emit(p, d, v, (E) => {
        o("received", `ACK for ${d}`, E);
      });
    } catch (v) {
      const E = v instanceof Error ? v.message : "Invalid JSON";
      console.error(`Emit error: ${E}`);
    }
  }, [o]), f = qe(() => {
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
const { toString: wn } = Object.prototype, { getPrototypeOf: Xe } = Object, { iterator: Qe, toStringTag: ur } = Symbol, Ze = ((e) => (t) => {
  const n = wn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ie = (e) => (e = e.toLowerCase(), (t) => Ze(t) === e), et = (e) => (t) => typeof t === e, { isArray: Ne } = Array, Ce = et("undefined");
function Fe(e) {
  return e !== null && !Ce(e) && e.constructor !== null && !Ce(e.constructor) && Y(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dr = ie("ArrayBuffer");
function En(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dr(e.buffer), t;
}
const vn = et("string"), Y = et("function"), fr = et("number"), Le = (e) => e !== null && typeof e == "object", Rn = (e) => e === !0 || e === !1, We = (e) => {
  if (Ze(e) !== "object")
    return !1;
  const t = Xe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ur in e) && !(Qe in e);
}, Sn = (e) => {
  if (!Le(e) || Fe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, jn = ie("Date"), On = ie("File"), Cn = (e) => !!(e && typeof e.uri < "u"), Nn = (e) => e && typeof e.getParts < "u", _n = ie("Blob"), Tn = ie("FileList"), An = (e) => Le(e) && Y(e.pipe);
function Pn() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Kt = Pn(), Yt = typeof Kt.FormData < "u" ? Kt.FormData : void 0, kn = (e) => {
  if (!e)
    return !1;
  if (Yt && e instanceof Yt)
    return !0;
  const t = Xe(e);
  if (!t || t === Object.prototype || !Y(e.append))
    return !1;
  const n = Ze(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && Y(e.toString) && e.toString() === "[object FormData]";
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
  if (typeof e != "object" && (e = [e]), Ne(e))
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
const we = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), mr = (e) => !Ce(e) && e !== we;
function xt(...e) {
  const { caseless: t, skipUndefined: n } = mr(this) && this || {}, r = {}, s = (o, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return;
    const l = t && pr(r, a) || a, f = gt(r, l) ? r[l] : void 0;
    We(f) && We(o) ? r[l] = xt(f, o) : We(o) ? r[l] = xt({}, o) : Ne(o) ? r[l] = o.slice() : (!n || !Ce(o)) && (r[l] = o);
  };
  for (let o = 0, a = e.length; o < a; o++)
    e[o] && Ue(e[o], s);
  return r;
}
const $n = (e, t, n, { allOwnKeys: r } = {}) => (Ue(
  t,
  (s, o) => {
    n && Y(s) ? Object.defineProperty(e, o, {
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
), e), Mn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), qn = (e, t, n, r) => {
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
    e = n !== !1 && Xe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wn = (e) => {
  if (!e)
    return null;
  if (Ne(e))
    return e;
  let t = e.length;
  if (!fr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Vn = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Xe(Uint8Array)), Jn = (e, t) => {
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
}, Yn = ie("HTMLFormElement"), Gn = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), gt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Xn = ie("RegExp"), hr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ue(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Qn = (e) => {
  hr(e, (t, n) => {
    if (Y(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (Y(r)) {
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
  return Ne(e) ? r(e) : r(String(e).split(t)), n;
}, es = () => {
}, ts = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rs(e) {
  return !!(e && Y(e.append) && e[ur] === "FormData" && e[Qe]);
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
        const s = Ne(r) ? [] : {};
        return Ue(r, (o, a) => {
          const l = n(o);
          !Ce(l) && (s[a] = l);
        }), t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, ss = ie("AsyncFunction"), os = (e) => e && (Le(e) || Y(e)) && Y(e.then) && Y(e.catch), br = ((e, t) => e ? setImmediate : t ? ((n, r) => (we.addEventListener(
  "message",
  ({ source: s, data: o }) => {
    s === we && o === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), we.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Y(we.postMessage)), as = typeof queueMicrotask < "u" ? queueMicrotask.bind(we) : typeof process < "u" && process.nextTick || br, is = (e) => e != null && Y(e[Qe]), u = {
  isArray: Ne,
  isArrayBuffer: dr,
  isBuffer: Fe,
  isFormData: kn,
  isArrayBufferView: En,
  isString: vn,
  isNumber: fr,
  isBoolean: Rn,
  isObject: Le,
  isPlainObject: We,
  isEmptyObject: Sn,
  isReadableStream: Fn,
  isRequest: Ln,
  isResponse: Un,
  isHeaders: In,
  isUndefined: Ce,
  isDate: jn,
  isFile: On,
  isReactNativeBlob: Cn,
  isReactNative: Nn,
  isBlob: _n,
  isRegExp: Xn,
  isFunction: Y,
  isStream: An,
  isURLSearchParams: Dn,
  isTypedArray: Vn,
  isFileList: Tn,
  forEach: Ue,
  merge: xt,
  extend: $n,
  trim: Bn,
  stripBOM: Mn,
  inherits: qn,
  toFlatObject: Hn,
  kindOf: Ze,
  kindOfTest: ie,
  endsWith: zn,
  toArray: Wn,
  forEachEntry: Jn,
  matchAll: Kn,
  isHTMLForm: Yn,
  hasOwnProperty: gt,
  hasOwnProp: gt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: hr,
  freezeMethods: Qn,
  toObjectSet: Zn,
  toCamelCase: Gn,
  noop: es,
  toFiniteNumber: ts,
  findKey: pr,
  global: we,
  isContextDefined: mr,
  isSpecCompliantForm: rs,
  toJSONObject: ns,
  isAsyncFn: ss,
  isThenable: os,
  setImmediate: br,
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
function vt(e, t) {
  return u.isArray(e) ? e.map((n) => vt(n, t)) : us(String(e).replace(t, ""));
}
const ps = (e) => vt(e, ds), ms = (e) => vt(e, fs);
function xr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return u.forEach(e.toJSON(), (n, r) => {
    t[r] = ms(n);
  }), t;
}
const Gt = Symbol("internals");
function De(e) {
  return e && String(e).trim().toLowerCase();
}
function Ve(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ve) : ps(String(e));
}
function hs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const bs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
      const h = u.findKey(s, d);
      (!h || s[h] === void 0 || p === !0 || p === void 0 && s[h] !== !1) && (s[h || f] = Ve(l));
    }
    const a = (l, f) => u.forEach(l, (p, d) => o(p, d, f));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (u.isString(t) && (t = t.trim()) && !bs(t))
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
          return hs(s);
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
        n[a] = Ve(s), delete n[o];
        return;
      }
      const l = t ? xs(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ve(s), r[l] = !0;
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
    const r = (this[Gt] = this[Gt] = {
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
function ws(e) {
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
      if (!u.isPlainObject(o) && ws(o))
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
class H extends Error {
  static from(t, n, r, s, o, a) {
    const l = new H(t.message, n || t.code, r, s, o);
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
H.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
H.ERR_BAD_OPTION = "ERR_BAD_OPTION";
H.ECONNABORTED = "ECONNABORTED";
H.ETIMEDOUT = "ETIMEDOUT";
H.ECONNREFUSED = "ECONNREFUSED";
H.ERR_NETWORK = "ERR_NETWORK";
H.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
H.ERR_DEPRECATED = "ERR_DEPRECATED";
H.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
H.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
H.ERR_CANCELED = "ERR_CANCELED";
H.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
H.ERR_INVALID_URL = "ERR_INVALID_URL";
H.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const S = H, vs = null;
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
const Ss = u.toFlatObject(u, {}, null, function(t) {
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
    function(x, g) {
      return !u.isUndefined(g[x]);
    }
  );
  const r = n.metaTokens, s = n.visitor || h, o = n.dots, a = n.indexes, l = n.Blob || typeof Blob < "u" && Blob, f = n.maxDepth === void 0 ? 100 : n.maxDepth, p = l && u.isSpecCompliantForm(t);
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
      throw new S("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(y) || u.isTypedArray(y) ? p && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function h(y, x, g) {
    let b = y;
    if (u.isReactNative(t) && u.isReactNativeBlob(y))
      return t.append(pt(g, x, o), d(y)), !1;
    if (y && !g && typeof y == "object") {
      if (u.endsWith(x, "{}"))
        x = r ? x : x.slice(0, -2), y = JSON.stringify(y);
      else if (u.isArray(y) && Rs(y) || (u.isFileList(y) || u.endsWith(x, "[]")) && (b = u.toArray(y)))
        return x = gr(x), b.forEach(function(O, I) {
          !(u.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? pt([x], I, o) : a === null ? x : x + "[]",
            d(O)
          );
        }), !1;
    }
    return yt(y) ? !0 : (t.append(pt(g, x, o), d(y)), !1);
  }
  const v = [], E = Object.assign(Ss, {
    defaultVisitor: h,
    convertValue: d,
    isVisitable: yt
  });
  function R(y, x, g = 0) {
    if (!u.isUndefined(y)) {
      if (g > f)
        throw new S(
          "Object is too deeply nested (" + g + " levels). Max depth: " + f,
          S.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (v.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(y), u.forEach(y, function(C, O) {
        (!(u.isUndefined(C) || C === null) && s.call(t, C, u.isString(O) ? O.trim() : O, x, E)) === !0 && R(C, x ? x.concat(O) : [O], g + 1);
      }), v.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Xt(e) {
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
    return t.call(this, r, Xt);
  } : Xt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function js(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function wr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || js, s = u.isFunction(n) ? {
    serialize: n
  } : n, o = s && s.serialize;
  let a;
  if (o ? a = o(t, s) : a = u.isURLSearchParams(t) ? t.toString() : new Rt(t, s).toString(r), a) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
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
const Qt = Os, St = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, Cs = typeof URLSearchParams < "u" ? URLSearchParams : Rt, Ns = typeof FormData < "u" ? FormData : null, _s = typeof Blob < "u" ? Blob : null, Ts = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cs,
    FormData: Ns,
    Blob: _s
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, jt = typeof window < "u" && typeof document < "u", wt = typeof navigator == "object" && navigator || void 0, As = jt && (!wt || ["ReactNative", "NativeScript", "NS"].indexOf(wt.product) < 0), Ps = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ks = jt && window.location.href || "http://localhost", Ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: jt,
  hasStandardBrowserEnv: As,
  hasStandardBrowserWebWorkerEnv: Ps,
  navigator: wt,
  origin: ks
}, Symbol.toStringTag, { value: "Module" })), V = {
  ...Ds,
  ...Ts
};
function Fs(e, t) {
  return rt(e, new V.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return V.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
const Oe = (e, t) => e != null && u.hasOwnProp(e, t) ? e[t] : void 0;
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
const Ot = {
  transitional: St,
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
        const f = Oe(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Fs(t, f).toString();
        if ((l = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const p = Oe(this, "env"), d = p && p.FormData;
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
      const n = Oe(this, "transitional") || Ot.transitional, r = n && n.forcedJSONParsing, s = Oe(this, "responseType"), o = s === "json";
      if (u.isResponse(t) || u.isReadableStream(t))
        return t;
      if (t && u.isString(t) && (r && !s || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Oe(this, "parseReviver"));
        } catch (f) {
          if (l)
            throw f.name === "SyntaxError" ? S.from(f, S.ERR_BAD_RESPONSE, this, null, Oe(this, "response")) : f;
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
    FormData: V.classes.FormData,
    Blob: V.classes.Blob
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
const Ct = Ot;
function mt(e, t) {
  const n = this || Ct, r = t || n, s = ne.from(r.headers);
  let o = r.data;
  return u.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function vr(e) {
  return !!(e && e.__CANCEL__);
}
class Bs extends S {
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
const Ie = Bs;
function Rr(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? S.ERR_BAD_REQUEST : S.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
function $s(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Ms(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const p = Date.now(), d = r[o];
    a || (a = p), n[s] = f, r[s] = p;
    let h = o, v = 0;
    for (; h !== s; )
      v += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - a < t)
      return;
    const E = d && p - d;
    return E ? Math.round(v * 1e3 / E) : void 0;
  };
}
function qs(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const a = (p, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const d = Date.now(), h = d - n;
    h >= r ? a(p, d) : (s = p, o || (o = setTimeout(() => {
      o = null, a(s);
    }, r - h)));
  }, () => s && a(s)];
}
const Ye = (e, t, n = 3) => {
  let r = 0;
  const s = Ms(50, 250);
  return qs((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const a = o.loaded, l = o.lengthComputable ? o.total : void 0, f = l != null ? Math.min(a, l) : a, p = Math.max(0, f - r), d = s(p);
    r = Math.max(r, f);
    const h = {
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
    e(h);
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
}, er = (e) => (...t) => u.asap(() => e(...t)), Hs = V.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, V.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(V.origin),
  V.navigator && /(msie|trident)/i.test(V.navigator.userAgent)
) : () => !0, zs = V.hasStandardBrowserEnv ? (
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
function Vs(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Sr(e, t, n) {
  let r = !Ws(t);
  return e && (r || n === !1) ? Vs(e, t) : t;
}
const tr = (e) => e instanceof ne ? { ...e } : e;
function Ee(e, t) {
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
  function r(p, d, h, v) {
    return u.isPlainObject(p) && u.isPlainObject(d) ? u.merge.call({ caseless: v }, p, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(p, d, h, v) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(p))
        return r(void 0, p, h, v);
    } else
      return r(p, d, h, v);
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
  function l(p, d, h) {
    if (u.hasOwnProp(t, h))
      return r(p, d);
    if (u.hasOwnProp(e, h))
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
    headers: (p, d, h) => s(tr(p), tr(d), h, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const h = u.hasOwnProp(f, d) ? f[d] : s, v = u.hasOwnProp(e, d) ? e[d] : void 0, E = u.hasOwnProp(t, d) ? t[d] : void 0, R = h(v, E, d);
    u.isUndefined(R) && h !== l || (n[d] = R);
  }), n;
}
const Js = ["content-type", "content-length"];
function Ks(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([r, s]) => {
    Js.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const Ys = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), jr = (e) => {
  const t = Ee({}, e), n = (v) => u.hasOwnProp(t, v) ? t[v] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const o = n("xsrfHeaderName"), a = n("xsrfCookieName");
  let l = n("headers");
  const f = n("auth"), p = n("baseURL"), d = n("allowAbsoluteUrls"), h = n("url");
  if (t.headers = l = ne.from(l), t.url = wr(
    Sr(p, h, d),
    e.params,
    e.paramsSerializer
  ), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? Ys(f.password) : ""))
  ), u.isFormData(r) && (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv ? l.setContentType(void 0) : u.isFunction(r.getHeaders) && Ks(l, r.getHeaders(), n("formDataHeaderPolicy"))), V.hasStandardBrowserEnv && (u.isFunction(s) && (s = s(t)), s === !0 || s == null && Hs(t.url))) {
    const E = o && a && zs.read(a);
    E && l.set(o, E);
  }
  return t;
}, Gs = typeof XMLHttpRequest < "u", Xs = Gs && function(e) {
  return new Promise(function(n, r) {
    const s = jr(e);
    let o = s.data;
    const a = ne.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: p } = s, d, h, v, E, R;
    function y() {
      E && E(), R && R(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let x = new XMLHttpRequest();
    x.open(s.method.toUpperCase(), s.url, !0), x.timeout = s.timeout;
    function g() {
      if (!x)
        return;
      const C = ne.from(
        "getAllResponseHeaders" in x && x.getAllResponseHeaders()
      ), I = {
        data: !l || l === "text" || l === "json" ? x.responseText : x.response,
        status: x.status,
        statusText: x.statusText,
        headers: C,
        config: e,
        request: x
      };
      Rr(
        function(ue) {
          n(ue), y();
        },
        function(ue) {
          r(ue), y();
        },
        I
      ), x = null;
    }
    "onloadend" in x ? x.onloadend = g : x.onreadystatechange = function() {
      !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.startsWith("file:")) || setTimeout(g);
    }, x.onabort = function() {
      x && (r(new S("Request aborted", S.ECONNABORTED, e, x)), y(), x = null);
    }, x.onerror = function(O) {
      const I = O && O.message ? O.message : "Network Error", G = new S(I, S.ERR_NETWORK, e, x);
      G.event = O || null, r(G), y(), x = null;
    }, x.ontimeout = function() {
      let O = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const I = s.transitional || St;
      s.timeoutErrorMessage && (O = s.timeoutErrorMessage), r(
        new S(
          O,
          I.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
          e,
          x
        )
      ), y(), x = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in x && u.forEach(xr(a), function(O, I) {
      x.setRequestHeader(I, O);
    }), u.isUndefined(s.withCredentials) || (x.withCredentials = !!s.withCredentials), l && l !== "json" && (x.responseType = s.responseType), p && ([v, R] = Ye(p, !0), x.addEventListener("progress", v)), f && x.upload && ([h, E] = Ye(f), x.upload.addEventListener("progress", h), x.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (d = (C) => {
      x && (r(!C || C.type ? new Ie(null, e, x) : C), x.abort(), y(), x = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const b = $s(s.url);
    if (b && !V.protocols.includes(b)) {
      r(
        new S(
          "Unsupported protocol " + b + ":",
          S.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    x.send(o || null);
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
        p instanceof S ? p : new Ie(p instanceof Error ? p.message : p)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, s(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
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
          let h = d.byteLength;
          if (n) {
            let v = o += h;
            n(v);
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
    for (let E = 0; E < l; E++)
      if (r.charCodeAt(E) === 37 && E + 2 < l) {
        const R = r.charCodeAt(E + 1), y = r.charCodeAt(E + 2);
        (R >= 48 && R <= 57 || R >= 65 && R <= 70 || R >= 97 && R <= 102) && (y >= 48 && y <= 57 || y >= 65 && y <= 70 || y >= 97 && y <= 102) && (a -= 2, E += 2);
      }
    let f = 0, p = l - 1;
    const d = (E) => E >= 2 && r.charCodeAt(E - 2) === 37 && // '%'
    r.charCodeAt(E - 1) === 51 && // '3'
    (r.charCodeAt(E) === 68 || r.charCodeAt(E) === 100);
    p >= 0 && (r.charCodeAt(p) === 61 ? (f++, p--) : d(p) && (f++, p -= 3)), f === 1 && p >= 0 && (r.charCodeAt(p) === 61 || d(p)) && f++;
    const v = Math.floor(a / 4) * 3 - (f || 0);
    return v > 0 ? v : 0;
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
const Nt = "1.16.1", nr = 64 * 1024, { isFunction: He } = u, sr = (e, ...t) => {
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
  const d = l && He(n), h = l && (typeof r == "function" ? ((g) => (b) => g.encode(b))(new r()) : async (g) => new Uint8Array(await new o(g).arrayBuffer())), v = f && d && sr(() => {
    let g = !1;
    const b = new o(V.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), C = b.headers.has("Content-Type");
    return b.body != null && b.body.cancel(), g && !C;
  }), E = p && d && sr(() => u.isReadableStream(new a("").body)), R = {
    stream: E && ((g) => g.body)
  };
  l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((g) => {
    !R[g] && (R[g] = (b, C) => {
      let O = b && b[g];
      if (O)
        return O.call(b);
      throw new S(
        `Response type '${g}' is not supported`,
        S.ERR_NOT_SUPPORT,
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
      return (await new o(V.origin, {
        method: "POST",
        body: g
      }).arrayBuffer()).byteLength;
    if (u.isArrayBufferView(g) || u.isArrayBuffer(g))
      return g.byteLength;
    if (u.isURLSearchParams(g) && (g = g + ""), u.isString(g))
      return (await h(g)).byteLength;
  }, x = async (g, b) => {
    const C = u.toFiniteNumber(g.getContentLength());
    return C ?? y(b);
  };
  return async (g) => {
    let {
      url: b,
      method: C,
      data: O,
      signal: I,
      cancelToken: G,
      timeout: ue,
      onDownloadProgress: me,
      onUploadProgress: be,
      responseType: z,
      headers: se,
      withCredentials: de = "same-origin",
      fetchOptions: N,
      maxContentLength: F,
      maxBodyLength: oe
    } = jr(g);
    const ae = u.isNumber(F) && F > -1, ve = u.isNumber(oe) && oe > -1;
    let fe = s || fetch;
    z = z ? (z + "").toLowerCase() : "text";
    let k = Zs(
      [I, G && G.toAbortSignal()],
      ue
    ), L = null;
    const W = k && k.unsubscribe && (() => {
      k.unsubscribe();
    });
    let he;
    try {
      if (ae && typeof b == "string" && b.startsWith("data:") && no(b) > F)
        throw new S(
          "maxContentLength size of " + F + " exceeded",
          S.ERR_BAD_RESPONSE,
          g,
          L
        );
      if (ve && C !== "get" && C !== "head") {
        const A = await x(se, O);
        if (typeof A == "number" && isFinite(A) && A > oe)
          throw new S(
            "Request body larger than maxBodyLength limit",
            S.ERR_BAD_REQUEST,
            g,
            L
          );
      }
      if (be && v && C !== "get" && C !== "head" && (he = await x(se, O)) !== 0) {
        let A = new o(b, {
          method: "POST",
          body: O,
          duplex: "half"
        }), le;
        if (u.isFormData(O) && (le = A.headers.get("content-type")) && se.setContentType(le), A.body) {
          const [pe, Re] = Zt(
            he,
            Ye(er(be))
          );
          O = rr(A.body, nr, pe, Re);
        }
      }
      u.isString(de) || (de = de ? "include" : "omit");
      const q = f && "credentials" in o.prototype;
      if (u.isFormData(O)) {
        const A = se.getContentType();
        A && /^multipart\/form-data/i.test(A) && !/boundary=/i.test(A) && se.delete("content-type");
      }
      se.set("User-Agent", "axios/" + Nt, !1);
      const ce = {
        ...N,
        signal: k,
        method: C.toUpperCase(),
        headers: xr(se.normalize()),
        body: O,
        duplex: "half",
        credentials: q ? de : void 0
      };
      L = f && new o(b, ce);
      let Q = await (f ? fe(L, N) : fe(b, ce));
      if (ae) {
        const A = u.toFiniteNumber(Q.headers.get("content-length"));
        if (A != null && A > F)
          throw new S(
            "maxContentLength size of " + F + " exceeded",
            S.ERR_BAD_RESPONSE,
            g,
            L
          );
      }
      const xe = E && (z === "stream" || z === "response");
      if (E && Q.body && (me || ae || xe && W)) {
        const A = {};
        ["status", "statusText", "headers"].forEach((ge) => {
          A[ge] = Q[ge];
        });
        const le = u.toFiniteNumber(Q.headers.get("content-length")), [pe, Re] = me && Zt(
          le,
          Ye(er(me), !0)
        ) || [];
        let _e = 0;
        const st = (ge) => {
          if (ae && (_e = ge, _e > F))
            throw new S(
              "maxContentLength size of " + F + " exceeded",
              S.ERR_BAD_RESPONSE,
              g,
              L
            );
          pe && pe(ge);
        };
        Q = new a(
          rr(Q.body, nr, st, () => {
            Re && Re(), W && W();
          }),
          A
        );
      }
      z = z || "text";
      let X = await R[u.findKey(R, z) || "text"](
        Q,
        g
      );
      if (ae && !E && !xe) {
        let A;
        if (X != null && (typeof X.byteLength == "number" ? A = X.byteLength : typeof X.size == "number" ? A = X.size : typeof X == "string" && (A = typeof r == "function" ? new r().encode(X).byteLength : X.length)), typeof A == "number" && A > F)
          throw new S(
            "maxContentLength size of " + F + " exceeded",
            S.ERR_BAD_RESPONSE,
            g,
            L
          );
      }
      return !xe && W && W(), await new Promise((A, le) => {
        Rr(A, le, {
          data: X,
          headers: ne.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: g,
          request: L
        });
      });
    } catch (q) {
      if (W && W(), k && k.aborted && k.reason instanceof S) {
        const ce = k.reason;
        throw ce.config = g, L && (ce.request = L), q !== ce && (ce.cause = q), ce;
      }
      throw q && q.name === "TypeError" && /Load failed|fetch/i.test(q.message) ? Object.assign(
        new S(
          "Network Error",
          S.ERR_NETWORK,
          g,
          L,
          q && q.response
        ),
        {
          cause: q.cause || q
        }
      ) : S.from(q, q && q.code, g, L, q && q.response);
    }
  };
}, oo = /* @__PURE__ */ new Map(), Or = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, o = [r, s, n];
  let a = o.length, l = a, f, p, d = oo;
  for (; l--; )
    f = o[l], p = d.get(f), p === void 0 && d.set(f, p = l ? /* @__PURE__ */ new Map() : so(t)), d = p;
  return p;
};
Or();
const _t = {
  http: vs,
  xhr: Xs,
  fetch: {
    get: Or
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
      throw new S(`Unknown adapter '${l}'`);
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
    throw new S(
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
function ht(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ie(null, e);
}
function ar(e) {
  return ht(e), e.headers = ne.from(e.headers), e.data = mt.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cr.getAdapter(e.adapter || Ct.adapter, e)(e).then(
    function(r) {
      ht(e), e.response = r;
      try {
        r.data = mt.call(e, e.transformResponse, r);
      } finally {
        delete e.response;
      }
      return r.headers = ne.from(r.headers), r;
    },
    function(r) {
      if (!vr(r) && (ht(e), r && r.response)) {
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
    return "[Axios v" + Nt + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, l) => {
    if (t === !1)
      throw new S(
        s(a, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
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
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (a) {
      const l = e[o], f = l === void 0 || a(l, o, e);
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
const Je = {
  assertOptions: co,
  validators: nt
}, ee = Je.validators;
class Ge {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ee(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Je.assertOptions(
      r,
      {
        silentJSONParsing: ee.transitional(ee.boolean),
        forcedJSONParsing: ee.transitional(ee.boolean),
        clarifyTimeoutError: ee.transitional(ee.boolean),
        legacyInterceptorReqResOrdering: ee.transitional(ee.boolean)
      },
      !1
    ), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Je.assertOptions(
      s,
      {
        encode: ee.function,
        serialize: ee.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Je.assertOptions(
      n,
      {
        baseUrl: ee.spelling("baseURL"),
        withXsrfToken: ee.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && u.merge(o.common, o[n.method]);
    o && u.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (R) => {
      delete o[R];
    }), n.headers = ne.concat(a, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      if (typeof y.runWhen == "function" && y.runWhen(n) === !1)
        return;
      f = f && y.synchronous;
      const x = n.transitional || St;
      x && x.legacyInterceptorReqResOrdering ? l.unshift(y.fulfilled, y.rejected) : l.push(y.fulfilled, y.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(y) {
      p.push(y.fulfilled, y.rejected);
    });
    let d, h = 0, v;
    if (!f) {
      const R = [ar.bind(this), void 0];
      for (R.unshift(...l), R.push(...p), v = R.length, d = Promise.resolve(n); h < v; )
        d = d.then(R[h++], R[h++]);
      return d;
    }
    v = l.length;
    let E = n;
    for (; h < v; ) {
      const R = l[h++], y = l[h++];
      try {
        E = R(E);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      d = ar.call(this, E);
    } catch (R) {
      return Promise.reject(R);
    }
    for (h = 0, v = p.length; h < v; )
      d = d.then(p[h++], p[h++]);
    return d;
  }
  getUri(t) {
    t = Ee(this.defaults, t);
    const n = Sr(t.baseURL, t.url, t.allowAbsoluteUrls);
    return wr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  Ge.prototype[t] = function(n, r) {
    return this.request(
      Ee(r || {}, {
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
        Ee(l || {}, {
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
  Ge.prototype[t] = n(), t !== "query" && (Ge.prototype[t + "Form"] = n(!0));
});
const Ke = Ge;
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
function Nr(e) {
  const t = new Ke(e), n = lr(Ke.prototype.request, t);
  return u.extend(n, Ke.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Nr(Ee(e, s));
  }, n;
}
const M = Nr(Ct);
M.Axios = Ke;
M.CanceledError = Ie;
M.CancelToken = lo;
M.isCancel = vr;
M.VERSION = Nt;
M.toFormData = rt;
M.AxiosError = S;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = uo;
M.isAxiosError = fo;
M.mergeConfig = Ee;
M.AxiosHeaders = ne;
M.formToJSON = (e) => Er(u.isHTMLForm(e) ? new FormData(e) : e);
M.getAdapter = Cr.getAdapter;
M.HttpStatusCode = po;
M.default = M;
const mo = M;
class ho {
  constructor(t = {}) {
    Me(this, "instance");
    Me(this, "jsonPath");
    this.instance = mo.create({
      baseURL: t.baseUrl || window.location.origin
    }), this.jsonPath = t.jsonPath || "/socket-docs/json";
  }
  async fetchDocs() {
    const { data: t } = await this.instance.get(this.jsonPath);
    return t;
  }
}
const bo = (e) => new ho(e), xo = (e) => {
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
  const [t, n] = re(null), [r, s] = re({}), [o, a] = re({}), [l, f] = re(!0), [p, d] = re(null), h = cr(() => bo(e), [e.baseUrl, e.jsonPath]);
  return Zr(() => {
    f(!0), h.fetchDocs().then((E) => {
      n(E), s(xo(E)), d(null);
    }).catch((E) => {
      console.error("Failed to fetch socket docs:", E), d(E instanceof Error ? E : new Error("Unknown error"));
    }).finally(() => f(!1));
  }, [h]), {
    data: t,
    payloads: r,
    expanded: o,
    loading: l,
    error: p,
    setPayloads: s,
    toggleExpand: (E) => {
      a((R) => ({ ...R, [E]: !R[E] }));
    }
  };
}, yo = (e) => {
  var x;
  const [t, n] = re(0), [r, s] = re(0), [o, a] = re(""), [l, f] = re(!1), [p, d] = re("dark"), h = cr(() => e ? o ? e.gateways.map((g) => ({
    ...g,
    events: g.events.filter(
      (b) => b.event.toLowerCase().includes(o.toLowerCase()) || g.name.toLowerCase().includes(o.toLowerCase())
    )
  })).filter((g) => g.events.length > 0) : e.gateways : [], [e, o]), v = h[t], E = (x = v == null ? void 0 : v.events) == null ? void 0 : x[r];
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
      d((g) => g === "dark" ? "light" : "dark");
    },
    exportContract: () => {
      if (!e)
        return;
      const g = new Blob([JSON.stringify(e, null, 2)], { type: "application/json" }), b = URL.createObjectURL(g), C = document.createElement("a");
      C.href = b, C.download = "socket-docs-contract.json", C.click();
    },
    activeGateway: v,
    activeEvent: E,
    filteredGateways: h
  };
}, ze = {
  API: "socket_docs_api_config",
  SOCKET: "socket_docs_socket_config"
}, So = () => {
  const e = te.useMemo(() => !window.location.pathname.includes("socket-docs"), []), [t, n] = te.useState(() => {
    var W;
    const k = localStorage.getItem(ze.API), L = (W = window.SOCKET_DOCS_CONFIG) == null ? void 0 : W.api;
    return k ? JSON.parse(k) : L ? { ...L } : {
      baseUrl: window.location.origin,
      jsonPath: "/socket-docs/json"
    };
  }), [r, s] = te.useState(() => {
    var he;
    const k = localStorage.getItem(ze.SOCKET), L = (he = window.SOCKET_DOCS_CONFIG) == null ? void 0 : he.socket, W = {
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
    return k ? JSON.parse(k) : L ? { ...W, ...L } : W;
  }), [o, a] = te.useState(!1), { data: l, payloads: f, setPayloads: p, loading: d, error: h } = go(t), v = te.useMemo(() => ({
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
  }), [r]), { connected: E, logs: R, connect: y, emitEvent: x, clearLogs: g } = yn(v), {
    activeGatewayIdx: b,
    setActiveGatewayIdx: C,
    activeEventIdx: O,
    setActiveEventIdx: I,
    searchQuery: G,
    setSearchQuery: ue,
    isPaused: me,
    setIsPaused: be,
    theme: z,
    toggleTheme: se,
    exportContract: de,
    activeGateway: N,
    activeEvent: F,
    filteredGateways: oe
  } = yo(l), ae = (k, L) => {
    localStorage.setItem(ze.API, JSON.stringify(k)), localStorage.setItem(ze.SOCKET, JSON.stringify(L)), n(k), s(L), a(!1);
  }, ve = (k) => k.startsWith("/") ? k : `/${k}`;
  if (d)
    return /* @__PURE__ */ c.jsx(Vt, {});
  if (h)
    return /* @__PURE__ */ c.jsxs("div", { className: `flex h-screen flex-col items-center justify-center gap-4 ${z === "dark" ? "bg-bg-primary text-text-primary" : "bg-white text-gray-900"}`, children: [
      /* @__PURE__ */ c.jsx("h1", { className: "text-2xl font-bold text-red-500", children: "Error loading Socket Docs" }),
      /* @__PURE__ */ c.jsx("p", { className: "text-text-muted", children: h.message }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => a(!0),
            className: "px-6 py-2 bg-bg-surface border border-border-subtle rounded-md font-medium hover:bg-border-subtle transition-colors",
            children: "Configurar API"
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-2 bg-brand-emerald text-bg-primary rounded-md font-bold hover:bg-brand-emerald-light transition-colors",
            children: "Reintentar"
          }
        )
      ] }),
      /* @__PURE__ */ c.jsx(
        Jt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: ae,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: z
        }
      )
    ] });
  if (!l)
    return /* @__PURE__ */ c.jsx(Vt, {});
  const fe = N && F ? `${N.name}-${F.event}` : "";
  return console.log(N), /* @__PURE__ */ c.jsxs("div", { className: `flex h-screen overflow-hidden font-sans text-text-primary ${z === "dark" ? "bg-bg-primary" : "bg-white text-gray-900"}`, children: [
    /* @__PURE__ */ c.jsx(
      dn,
      {
        gateways: oe,
        activeGatewayIdx: b,
        activeEventIdx: O,
        onSelectGateway: C,
        onSelectEvent: I,
        searchQuery: G,
        onSearchChange: ue,
        onExport: de
      }
    ),
    /* @__PURE__ */ c.jsxs("main", { className: "flex flex-1 flex-col overflow-y-auto bg-bg-secondary", children: [
      /* @__PURE__ */ c.jsx(
        fn,
        {
          connected: N ? !!E[N.name] : !1,
          gatewayPath: (N == null ? void 0 : N.path) ?? "ws://localhost:3000",
          namespace: (N == null ? void 0 : N.namespace) ?? "/",
          theme: z,
          onToggleTheme: se,
          onOpenSettings: () => a(!0)
        }
      ),
      /* @__PURE__ */ c.jsx("div", { className: "mx-auto w-full max-w-[1200px] p-6", children: N && F ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(
          pn,
          {
            gatewayName: N.name,
            eventName: F.event,
            summary: F.summary ?? "",
            description: F.description ?? ""
          }
        ),
        /* @__PURE__ */ c.jsx(
          mn,
          {
            connected: !!E[N.name],
            onConnect: () => {
              const k = t.baseUrl.replace(/\/$/, ""), L = r.namespace === "/" ? N.namespace : r.namespace;
              y(
                N.name,
                `${k}${ve(L)}`,
                N.path
              );
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          hn,
          {
            payload: f[fe] ?? "{}",
            onChange: (k) => p({ ...f, [fe]: k }),
            onSend: () => x(N.name, F.event, f[fe] ?? "{}")
          }
        ),
        /* @__PURE__ */ c.jsx(
          xn,
          {
            connected: !!E[N.name],
            logs: R,
            onClear: g,
            isPaused: me,
            onTogglePause: () => be(!me)
          }
        )
      ] }) : /* @__PURE__ */ c.jsx("div", { className: "flex h-full items-center justify-center text-text-secondary italic", children: "Selecciona un evento para comenzar" }) }),
      /* @__PURE__ */ c.jsx(
        Jt,
        {
          show: o,
          onClose: () => a(!1),
          onSave: ae,
          initialApiConfig: t,
          initialSocketConfig: r,
          isStandalone: e,
          theme: z,
          activeGatewayNamespace: N == null ? void 0 : N.namespace
        }
      )
    ] })
  ] });
};
export {
  So as App
};
