import Oe, { useState as D, useRef as fr, useEffect as br } from "react";
import { RefreshCw as pr, Sun as xr, Settings as mr, Play as vr, RotateCcw as hr } from "lucide-react";
import { io as gr } from "socket.io-client";
var ne = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function yr() {
  if (Ce)
    return Y;
  Ce = 1;
  var g = Oe, d = Symbol.for("react.element"), N = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(m, b, x) {
    var u, E = {}, a = null, i = null;
    x !== void 0 && (a = "" + x), b.key !== void 0 && (a = "" + b.key), b.ref !== void 0 && (i = b.ref);
    for (u in b)
      p.call(b, u) && !j.hasOwnProperty(u) && (E[u] = b[u]);
    if (m && m.defaultProps)
      for (u in b = m.defaultProps, b)
        E[u] === void 0 && (E[u] = b[u]);
    return { $$typeof: d, type: m, key: a, ref: i, props: E, _owner: y.current };
  }
  return Y.Fragment = N, Y.jsx = S, Y.jsxs = S, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function jr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Oe, d = Symbol.for("react.element"), N = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), m = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), i = Symbol.for("react.offscreen"), C = Symbol.iterator, U = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = C && e[C] || e[U];
      return typeof r == "function" ? r : null;
    }
    var A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        Pe("error", e, n);
      }
    }
    function Pe(e, r, n) {
      {
        var s = A.ReactDebugCurrentFrame, c = s.getStackAddendum();
        c !== "" && (r += "%s", n = n.concat([c]));
        var f = n.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var ke = !1, De = !1, Ae = !1, $e = !1, Fe = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === j || Fe || e === y || e === x || e === u || $e || e === i || ke || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === E || e.$$typeof === S || e.$$typeof === m || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Le(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var c = r.displayName || r.name || "";
      return c !== "" ? n + "(" + c + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case N:
          return "Portal";
        case j:
          return "Profiler";
        case y:
          return "StrictMode";
        case x:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return se(r) + ".Consumer";
          case S:
            var n = e;
            return se(n._context) + ".Provider";
          case b:
            return Le(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : O(e.type) || "Memo";
          case a: {
            var c = e, f = c._payload, l = c._init;
            try {
              return O(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, I = 0, oe, ie, le, ce, de, ue, fe;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function We() {
      {
        if (I === 0) {
          oe = console.log, ie = console.info, le = console.warn, ce = console.error, de = console.group, ue = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        I++;
      }
    }
    function Ye() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: oe
            }),
            info: P({}, e, {
              value: ie
            }),
            warn: P({}, e, {
              value: le
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: de
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: fe
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = A.ReactCurrentDispatcher, X;
    function M(e, r, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (c) {
            var s = c.stack.trim().match(/\n( *(at )?)/);
            X = s && s[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, J;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ve();
    }
    function pe(e, r) {
      if (!e || H)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = B.current, B.current = null, We();
      try {
        if (r) {
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
            } catch (w) {
              s = w;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (w) {
              s = w;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            s = w;
          }
          e();
        }
      } catch (w) {
        if (w && s && typeof w.stack == "string") {
          for (var o = w.stack.split(`
`), _ = s.stack.split(`
`), v = o.length - 1, h = _.length - 1; v >= 1 && h >= 0 && o[v] !== _[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (o[v] !== _[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || o[v] !== _[h]) {
                    var T = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, T), T;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        H = !1, B.current = f, Ye(), Error.prepareStackTrace = c;
      }
      var F = e ? e.displayName || e.name : "", k = F ? M(F) : "";
      return typeof e == "function" && J.set(e, k), k;
    }
    function Ue(e, r, n) {
      return pe(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Me(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case x:
          return M("Suspense");
        case u:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return Ue(e.render);
          case E:
            return K(e.type, r, n);
          case a: {
            var s = e, c = s._payload, f = s._init;
            try {
              return K(f(c), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, xe = {}, me = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Je(e, r, n, s, c) {
      {
        var f = Function.call.bind(L);
        for (var l in e)
          if (f(e, l)) {
            var o = void 0;
            try {
              if (typeof e[l] != "function") {
                var _ = Error((s || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              o = e[l](r, l, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (q(c), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, l, typeof o), q(null)), o instanceof Error && !(o.message in xe) && (xe[o.message] = !0, q(c), R("Failed %s type: %s", n, o.message), q(null));
          }
      }
    }
    var Ke = Array.isArray;
    function Z(e) {
      return Ke(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ze(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ve(e);
    }
    var W = A.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, ye, Q;
    Q = {};
    function Xe(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var n = O(W.current.type);
        Q[n] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(W.current.type), e.ref), Q[n] = !0);
      }
    }
    function Qe(e, r) {
      {
        var n = function() {
          ge || (ge = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Ge(e, r) {
      {
        var n = function() {
          ye || (ye = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var er = function(e, r, n, s, c, f, l) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, n, s, c) {
      {
        var f, l = {}, o = null, _ = null;
        n !== void 0 && (he(n), o = "" + n), He(r) && (he(r.key), o = "" + r.key), Xe(r) && (_ = r.ref, Ze(r, c));
        for (f in r)
          L.call(r, f) && !Be.hasOwnProperty(f) && (l[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            l[f] === void 0 && (l[f] = v[f]);
        }
        if (o || _) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Qe(l, h), _ && Ge(l, h);
        }
        return er(e, o, _, c, s, W.current, l);
      }
    }
    var G = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, n = K(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(n);
      } else
        je.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Ee() {
      {
        if (G.current) {
          var e = O(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Re = {};
    function nr(e) {
      {
        var r = Ee();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = nr(r);
        if (Re[n])
          return;
        Re[n] = !0;
        var s = "";
        e && e._owner && e._owner !== G.current && (s = " It was passed a child from " + O(e._owner.type) + "."), $(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), $(null);
      }
    }
    function Ne(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            re(s) && _e(s, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = z(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), l; !(l = f.next()).done; )
              re(l.value) && _e(l.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = O(r);
          Je(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var c = O(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            $(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Se = {};
    function we(e, r, n, s, c, f) {
      {
        var l = Ie(e);
        if (!l) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = tr(c);
          _ ? o += _ : o += Ee();
          var v;
          e === null ? v = "null" : Z(e) ? v = "array" : e !== void 0 && e.$$typeof === d ? (v = "<" + (O(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var h = rr(e, r, n, c, f);
        if (h == null)
          return h;
        if (l) {
          var T = r.children;
          if (T !== void 0)
            if (s)
              if (Z(T)) {
                for (var F = 0; F < T.length; F++)
                  Ne(T[F], e);
                Object.freeze && Object.freeze(T);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(T, e);
        }
        if (L.call(r, "key")) {
          var k = O(e), w = Object.keys(r).filter(function(ur) {
            return ur !== "key";
          }), te = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[k + te]) {
            var dr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, k, dr, k), Se[k + te] = !0;
          }
        }
        return e === p ? sr(h) : ar(h), h;
      }
    }
    function or(e, r, n) {
      return we(e, r, n, !0);
    }
    function ir(e, r, n) {
      return we(e, r, n, !1);
    }
    var lr = ir, cr = or;
    V.Fragment = p, V.jsx = lr, V.jsxs = cr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ne.exports = yr() : ne.exports = jr();
var t = ne.exports;
const Er = ({
  gateways: g,
  activeGatewayIdx: d,
  activeEventIdx: N,
  onSelectGateway: p,
  onSelectEvent: y
}) => /* @__PURE__ */ t.jsx("div", { className: "space-y-4", children: g.map((j, S) => /* @__PURE__ */ t.jsxs("div", { className: "nav-group", children: [
  /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "flex cursor-pointer items-center justify-between py-2 text-[13px] font-semibold text-text-primary",
      onClick: () => p(S),
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-text-muted", children: "📁" }),
          j.name
        ] }),
        /* @__PURE__ */ t.jsxs("span", { className: "text-[11px] text-text-muted", children: [
          j.namespace,
          " ▾"
        ] })
      ]
    }
  ),
  /* @__PURE__ */ t.jsx("ul", { className: "mt-1 space-y-0.5 border-l border-border-subtle ml-2 pl-2", children: j.events.map((m, b) => {
    const x = d === S && N === b;
    return /* @__PURE__ */ t.jsxs(
      "li",
      {
        onClick: () => {
          p(S), y(b);
        },
        className: `flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition ${x ? "bg-brand-emerald-dim text-brand-emerald" : "text-text-secondary hover:bg-bg-secondary"}`,
        children: [
          /* @__PURE__ */ t.jsx("span", { className: "inline-block w-[42px] rounded bg-bg-surface py-0.5 text-center font-mono text-[10px] font-bold text-brand-emerald", children: "EVENT" }),
          /* @__PURE__ */ t.jsx("span", { className: "truncate", children: m.event })
        ]
      },
      b
    );
  }) })
] }, S)) }), Rr = ({ logs: g }) => g.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center py-10 text-center text-text-muted", children: [
  /* @__PURE__ */ t.jsx("div", { className: "mb-2 text-2xl", children: "(( ∙ ))" }),
  /* @__PURE__ */ t.jsx("p", { className: "text-[13px]", children: "Envía un evento para ver la respuesta..." })
] }) : /* @__PURE__ */ t.jsx("div", { className: "max-h-[400px] space-y-2 overflow-y-auto p-4", children: g.map((d) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: "rounded border border-border-subtle bg-bg-primary p-3 text-[12px]",
    children: [
      /* @__PURE__ */ t.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ t.jsx("span", { className: `font-bold ${d.type === "sent" ? "text-blue-400" : d.type === "received" ? "text-brand-emerald" : "text-red-400"}`, children: d.type.toUpperCase() }),
          /* @__PURE__ */ t.jsx("span", { className: "text-text-secondary", children: d.message })
        ] }),
        /* @__PURE__ */ t.jsx("span", { className: "text-[10px] text-text-muted", children: d.timestamp })
      ] }),
      d.data != null && /* @__PURE__ */ t.jsx("pre", { className: "overflow-x-auto rounded border border-border-subtle bg-bg-secondary p-2 font-mono text-text-primary", children: JSON.stringify(d.data, null, 2) })
    ]
  },
  d.id
)) }), _r = () => /* @__PURE__ */ t.jsxs("div", { className: "flex min-h-screen items-center justify-center bg-bg-primary text-brand-emerald", children: [
  /* @__PURE__ */ t.jsx(pr, { className: "animate-spin", size: 32 }),
  /* @__PURE__ */ t.jsx("span", { className: "ml-4 text-xl font-medium", children: "Cargando contratos..." })
] }), Nr = () => {
  const [g, d] = D({}), [N, p] = D([]), y = fr({}), j = (x, u, E) => {
    p(
      (a) => [
        {
          id: Date.now(),
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
          type: x,
          message: u,
          data: E
        },
        ...a
      ].slice(0, 50)
    );
  };
  return {
    connected: g,
    logs: N,
    connect: (x, u, E) => {
      if (y.current[x]) {
        y.current[x].disconnect(), delete y.current[x], d((i) => ({ ...i, [x]: !1 })), j("error", `Disconnected from ${u}`);
        return;
      }
      const a = gr(u, {
        path: E ?? "/socket.io",
        transports: ["websocket"]
      });
      a.on("connect", () => {
        d((i) => ({ ...i, [x]: !0 })), j("received", `Connected to ${u}`);
      }), a.on("disconnect", () => {
        d((i) => ({ ...i, [x]: !1 })), j("error", `Disconnected from ${u}`);
      }), a.onAny((i, ...C) => {
        j("received", `Event: ${i}`, C);
      }), y.current[x] = a;
    },
    emitEvent: (x, u, E) => {
      const a = y.current[x];
      if (!a) {
        alert("Connect first!");
        return;
      }
      try {
        const i = JSON.parse(E);
        j("sent", `Emitting ${u}`, i), a.emit(u, i, (C) => {
          j("received", `ACK for ${u}`, C);
        });
      } catch (i) {
        const C = i instanceof Error ? i.message : "Invalid JSON";
        alert(`Invalid JSON: ${C}`);
      }
    },
    clearLogs: () => {
      p([]);
    }
  };
}, Sr = (g) => {
  const d = {};
  return g.gateways.forEach((N) => {
    N.events.forEach((p) => {
      var y;
      d[`${N.name}-${p.event}`] = JSON.stringify(
        ((y = p.payloadSchema) == null ? void 0 : y.example) ?? {},
        null,
        2
      );
    });
  }), d;
}, wr = () => {
  const [g, d] = D(null), [N, p] = D({}), [y, j] = D({});
  return br(() => {
    fetch("/socket-docs/json").then((m) => m.json()).then((m) => {
      d(m), p(Sr(m));
    }).catch(console.error);
  }, []), {
    data: g,
    payloads: N,
    expanded: y,
    setPayloads: p,
    toggleExpand: (m) => {
      j((b) => ({ ...b, [m]: !b[m] }));
    }
  };
}, Pr = () => {
  var U;
  const { data: g, payloads: d, setPayloads: N } = wr(), { connected: p, logs: y, connect: j, emitEvent: S, clearLogs: m } = Nr(), [b, x] = D(0), [u, E] = D(0);
  if (!g)
    return /* @__PURE__ */ t.jsx(_r, {});
  const a = g.gateways[b], i = (U = a == null ? void 0 : a.events) == null ? void 0 : U[u], C = a && i ? `${a.name}-${i.event}` : "";
  return /* @__PURE__ */ t.jsxs("div", { className: "flex h-screen overflow-hidden bg-bg-primary font-sans text-text-primary", children: [
    /* @__PURE__ */ t.jsxs("aside", { className: "flex w-[300px] flex-col border-r border-border-subtle bg-bg-primary p-4", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ t.jsx("span", { className: "text-xl text-brand-emerald", children: "■" }),
        /* @__PURE__ */ t.jsx("span", { className: "text-base font-semibold", children: "Socket Docs" }),
        /* @__PURE__ */ t.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px] text-text-secondary", children: "v1.0.0" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "relative mb-6", children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "text",
            className: "w-full rounded-md border border-border-subtle bg-bg-secondary px-3 py-2 text-sm text-text-primary outline-none",
            placeholder: "Buscar eventos..."
          }
        ),
        /* @__PURE__ */ t.jsx("span", { className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded bg-bg-surface px-1 py-0.5 text-[11px] text-text-muted", children: "⌘K" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "mb-3 flex justify-between text-[12px] font-semibold uppercase tracking-wider text-text-secondary", children: [
        /* @__PURE__ */ t.jsx("span", { children: "Gateways" }),
        /* @__PURE__ */ t.jsx("span", { className: "rounded bg-bg-surface px-1.5 py-0.5 text-[11px]", children: g.gateways.length })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsx(
        Er,
        {
          gateways: g.gateways,
          activeGatewayIdx: b,
          activeEventIdx: u,
          onSelectGateway: x,
          onSelectEvent: E
        }
      ) }),
      /* @__PURE__ */ t.jsxs("div", { className: "mt-auto border-t border-border-subtle pt-4 text-[11px] text-text-muted", children: [
        /* @__PURE__ */ t.jsx("button", { className: "mb-3 flex w-full items-center justify-center gap-2 rounded border border-border-subtle bg-bg-elevation py-2 text-text-primary transition hover:bg-border-subtle", children: "↓ Exportar contrato" }),
        /* @__PURE__ */ t.jsx("p", { children: "Socket Docs v1.0.0" }),
        /* @__PURE__ */ t.jsx("p", { children: "Hecho con 💚 para NestJS" })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("main", { className: "flex flex-1 flex-col overflow-y-auto bg-bg-secondary", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex h-14 items-center justify-end gap-3 border-b border-border-subtle px-6", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs", children: [
          /* @__PURE__ */ t.jsx("div", { className: `h-2 w-2 rounded-full ${p[a == null ? void 0 : a.name] ? "bg-brand-emerald" : "bg-red-500"}` }),
          /* @__PURE__ */ t.jsx("span", { children: p[a == null ? void 0 : a.name] ? "Conectado" : "Desconectado" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-text-muted", children: (a == null ? void 0 : a.path) ?? "ws://localhost:3000" })
        ] }),
        /* @__PURE__ */ t.jsx("select", { className: "rounded-md border border-border-subtle bg-bg-surface px-3 py-1.5 text-xs text-text-primary outline-none", children: /* @__PURE__ */ t.jsx("option", { children: (a == null ? void 0 : a.namespace) ?? "/" }) }),
        /* @__PURE__ */ t.jsx("button", { className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle", children: /* @__PURE__ */ t.jsx(xr, { size: 14 }) }),
        /* @__PURE__ */ t.jsx("button", { className: "flex h-8 w-8 items-center justify-center rounded border border-border-subtle bg-bg-surface text-text-primary transition hover:bg-border-subtle", children: /* @__PURE__ */ t.jsx(mr, { size: 14 }) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "mx-auto w-full max-w-[1200px] p-6", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "mb-4 flex gap-2 text-sm text-text-secondary", children: [
          /* @__PURE__ */ t.jsx("span", { children: (a == null ? void 0 : a.name) ?? "..." }),
          " / ",
          /* @__PURE__ */ t.jsx("span", { children: "events" }),
          " / ",
          /* @__PURE__ */ t.jsx("span", { className: "font-medium text-text-primary", children: (i == null ? void 0 : i.event) ?? "..." })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "mb-2 flex items-center gap-3", children: [
          /* @__PURE__ */ t.jsx("span", { className: "rounded bg-brand-emerald-dim px-2 py-1 font-mono text-sm font-bold text-brand-emerald", children: "EVENT" }),
          /* @__PURE__ */ t.jsx("span", { className: "font-mono text-xl font-semibold", children: i == null ? void 0 : i.event }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-text-secondary", children: i == null ? void 0 : i.summary })
        ] }),
        /* @__PURE__ */ t.jsx("p", { className: "mb-6 leading-relaxed text-text-secondary", children: (i == null ? void 0 : i.description) ?? "No description provided for this event." }),
        /* @__PURE__ */ t.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
            /* @__PURE__ */ t.jsx("span", { className: "text-[13px] font-semibold", children: "Parameters" }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: () => j(a.name, a.namespace, a.path),
                className: "rounded bg-brand-emerald px-3 py-1 text-[12px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
                children: p[a.name] ? "Reconnect" : "Connect"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "p-4 italic text-text-secondary", children: "No parameters defined" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "mb-5 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between border-b border-border-subtle bg-bg-surface/50 px-4 py-3", children: [
            /* @__PURE__ */ t.jsxs("span", { className: "text-[13px] font-semibold", children: [
              "Request body ",
              /* @__PURE__ */ t.jsx("span", { className: "text-[11px] text-red-400", children: "required" })
            ] }),
            /* @__PURE__ */ t.jsx("select", { className: "rounded border border-border-subtle bg-bg-surface px-2 py-0.5 text-xs", children: /* @__PURE__ */ t.jsx("option", { children: "application/json" }) })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "mb-3 flex gap-4 border-b border-border-subtle pb-2 text-[13px]", children: [
              /* @__PURE__ */ t.jsx("span", { className: "cursor-pointer border-b-2 border-brand-emerald pb-1.5 text-brand-emerald", children: "Example Value" }),
              /* @__PURE__ */ t.jsx("span", { className: "cursor-pointer pb-1.5 text-text-secondary", children: "Schema" })
            ] }),
            /* @__PURE__ */ t.jsx(
              "textarea",
              {
                value: d[C] ?? "{}",
                onChange: (z) => N({ ...d, [C]: z.target.value }),
                className: "w-full rounded border border-border-subtle bg-bg-primary p-4 font-mono text-[13px] leading-relaxed text-text-primary outline-none focus:border-brand-emerald",
                rows: 6
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
              /* @__PURE__ */ t.jsxs(
                "button",
                {
                  onClick: () => S(a.name, i.event, d[C] ?? "{}"),
                  className: "flex items-center gap-2 rounded bg-brand-emerald px-4 py-2 text-[13px] font-semibold text-bg-primary transition hover:bg-brand-emerald-light",
                  children: [
                    /* @__PURE__ */ t.jsx(vr, { size: 14 }),
                    " Enviar evento"
                  ]
                }
              ),
              /* @__PURE__ */ t.jsxs("label", { className: "flex cursor-pointer items-center gap-1.5 text-[13px] text-text-secondary", children: [
                /* @__PURE__ */ t.jsx("input", { type: "checkbox", className: "rounded border-border-subtle bg-bg-surface" }),
                " Incluir ACK"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "mt-6 overflow-hidden rounded-lg border border-border-subtle bg-bg-surface", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between px-4 py-3", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t.jsx("div", { className: `h-2 w-2 rounded-full ${p[a == null ? void 0 : a.name] ? "animate-pulse bg-brand-emerald" : "bg-text-muted"}` }),
              /* @__PURE__ */ t.jsx("span", { className: "text-[13px] font-semibold", children: "Respuesta en tiempo real" })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ t.jsxs("button", { onClick: m, className: "flex items-center gap-1.5 rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: [
                /* @__PURE__ */ t.jsx(hr, { size: 12 }),
                " Limpiar"
              ] }),
              /* @__PURE__ */ t.jsx("button", { className: "rounded border border-border-subtle bg-bg-elevation px-2 py-1 text-[12px] transition hover:bg-border-subtle", children: "Pausar" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "min-h-[200px] border-t border-border-subtle", children: /* @__PURE__ */ t.jsx(Rr, { logs: y, onClear: m }) })
        ] })
      ] })
    ] })
  ] });
};
export {
  Pr as App
};
