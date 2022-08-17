"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9575],
  {
    99575: function (e, n, a) {
      a.d(n, {
        XZ: function () {
          return S
        },
        O: function () {
          return I
        }
      })
      var t = a(63949),
        i = a(67294)
      function r(e, n) {
        if (null != e)
          if ((0, t.mf)(e)) e(n)
          else
            try {
              e.current = n
            } catch (a) {
              throw new Error(
                "Cannot assign value '" + n + "' to ref '" + e + "'"
              )
            }
      }
      function o() {
        for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
          n[a] = arguments[a]
        return function (e) {
          n.forEach(function (n) {
            return r(n, e)
          })
        }
      }
      var c = a(88523),
        s = a(29574),
        l = a(78042),
        u = a(94930),
        d = a(21190),
        v = a(73733),
        h = a(19113)
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var a = arguments[n]
                for (var t in a)
                  Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
              }
              return e
            }),
          f.apply(this, arguments)
        )
      }
      var k = (function (e) {
          void 0 === e && (e = {})
          var n = e,
            a = n.strict,
            t = void 0 === a || a,
            r = n.errorMessage,
            o =
              void 0 === r
                ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
                : r,
            c = n.name,
            s = i.createContext(void 0)
          return (
            (s.displayName = c),
            [
              s.Provider,
              function e() {
                var n = i.useContext(s)
                if (!n && t) {
                  var a = new Error(o)
                  throw (
                    ((a.name = "ContextError"),
                    null == Error.captureStackTrace ||
                      Error.captureStackTrace(a, e),
                    a)
                  )
                }
                return n
              },
              s
            ]
          )
        })({ name: "CheckboxGroupContext", strict: !1 }),
        p = (k[0], k[1])
      function b(e, n) {
        if (null == e) return {}
        var a,
          t,
          i = {},
          r = Object.keys(e)
        for (t = 0; t < r.length; t++)
          (a = r[t]), n.indexOf(a) >= 0 || (i[a] = e[a])
        return i
      }
      t.Ts
      var m = ["isIndeterminate", "isChecked"]
      var C = (function (e) {
          var n = u.E
          return "custom" in n && "function" === typeof n.custom
            ? n.custom(e)
            : n(e)
        })(l.m$.svg),
        y = function (e) {
          return i.createElement(
            C,
            f(
              {
                width: "1.2em",
                viewBox: "0 0 12 10",
                variants: {
                  unchecked: { opacity: 0, strokeDashoffset: 16 },
                  checked: {
                    opacity: 1,
                    strokeDashoffset: 0,
                    transition: { duration: 0.2 }
                  }
                },
                style: {
                  fill: "none",
                  strokeWidth: 2,
                  stroke: "currentColor",
                  strokeDasharray: 16
                }
              },
              e
            ),
            i.createElement("polyline", { points: "1.5 6 4.5 9 10.5 1" })
          )
        },
        g = function (e) {
          return i.createElement(
            C,
            f(
              {
                width: "1.2em",
                viewBox: "0 0 24 24",
                variants: {
                  unchecked: { scaleX: 0.65, opacity: 0 },
                  checked: {
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      scaleX: { duration: 0 },
                      opacity: { duration: 0.02 }
                    }
                  }
                },
                style: { stroke: "currentColor", strokeWidth: 4 }
              },
              e
            ),
            i.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
          )
        },
        x = function (e) {
          var n = e.open,
            a = e.children
          return i.createElement(
            d.M,
            { initial: !1 },
            n &&
              i.createElement(
                u.E.div,
                {
                  variants: {
                    unchecked: { scale: 0.5 },
                    checked: { scale: 1 }
                  },
                  initial: "unchecked",
                  animate: "checked",
                  exit: "unchecked",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                  }
                },
                a
              )
          )
        },
        P = function (e) {
          var n = e.isIndeterminate,
            a = e.isChecked,
            t = b(e, m),
            r = n ? g : y
          return i.createElement(x, { open: a || n }, i.createElement(r, t))
        },
        E = [
          "defaultIsChecked",
          "defaultChecked",
          "isChecked",
          "isFocusable",
          "onChange",
          "isIndeterminate",
          "name",
          "value",
          "tabIndex",
          "aria-label",
          "aria-labelledby",
          "aria-invalid"
        ]
      function I(e) {
        void 0 === e && (e = {})
        var n = (0, v.Kn)(e),
          a = n.isDisabled,
          r = n.isReadOnly,
          l = n.isRequired,
          u = n.isInvalid,
          d = n.id,
          k = n.onBlur,
          p = n.onFocus,
          m = n["aria-describedby"],
          C = e,
          y = C.defaultIsChecked,
          g = C.defaultChecked,
          x = void 0 === g ? y : g,
          P = C.isChecked,
          I = C.isFocusable,
          w = C.onChange,
          D = C.isIndeterminate,
          _ = C.name,
          S = C.value,
          M = C.tabIndex,
          N = void 0 === M ? void 0 : M,
          O = C["aria-label"],
          R = C["aria-labelledby"],
          T = C["aria-invalid"],
          L = b(C, E),
          F = (0, t.CE)(L, [
            "isDisabled",
            "isReadOnly",
            "isRequired",
            "isInvalid",
            "id",
            "onBlur",
            "onFocus",
            "aria-describedby"
          ]),
          j = (0, s.u)(w),
          K = (0, s.u)(k),
          A = (0, s.u)(p),
          q = (0, c.kt)(),
          U = q[0],
          X = q[1],
          $ = (0, c.kt)(),
          z = $[0],
          G = $[1],
          W = (0, c.kt)(),
          Z = W[0],
          H = W[1],
          Y = (0, i.useRef)(null),
          J = (0, i.useState)(!0),
          Q = J[0],
          V = J[1],
          ee = (0, i.useState)(!!x),
          ne = ee[0],
          ae = ee[1],
          te = (0, c.pY)(P, ne),
          ie = te[0],
          re = te[1]
        ;(0, t.ZK)({
          condition: !!y,
          message:
            'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'
        })
        var oe = (0, i.useCallback)(
          function (e) {
            r || a
              ? e.preventDefault()
              : (ie || ae(re ? e.target.checked : !!D || e.target.checked),
                null == j || j(e))
          },
          [r, a, re, ie, D, j]
        )
        ;(0, s.a)(
          function () {
            Y.current && (Y.current.indeterminate = Boolean(D))
          },
          [D]
        ),
          (0, c.rf)(
            function () {
              a && X.off()
            },
            [a, X]
          )
        var ce = a && !I,
          se = (0, i.useCallback)(
            function (e) {
              " " === e.key && H.on()
            },
            [H]
          ),
          le = (0, i.useCallback)(
            function (e) {
              " " === e.key && H.off()
            },
            [H]
          )
        ;(0, s.a)(
          function () {
            Y.current && Y.current.checked !== re && ae(Y.current.checked)
          },
          [Y.current]
        )
        var ue = (0, i.useCallback)(
            function (e, n) {
              void 0 === e && (e = {}), void 0 === n && (n = null)
              return f({}, e, {
                ref: n,
                "data-active": (0, t.PB)(Z),
                "data-hover": (0, t.PB)(z),
                "data-checked": (0, t.PB)(re),
                "data-focus": (0, t.PB)(U),
                "data-indeterminate": (0, t.PB)(D),
                "data-disabled": (0, t.PB)(a),
                "data-invalid": (0, t.PB)(u),
                "data-readonly": (0, t.PB)(r),
                "aria-hidden": !0,
                onMouseDown: (0, t.v0)(e.onMouseDown, function (e) {
                  e.preventDefault(), H.on()
                }),
                onMouseUp: (0, t.v0)(e.onMouseUp, H.off),
                onMouseEnter: (0, t.v0)(e.onMouseEnter, G.on),
                onMouseLeave: (0, t.v0)(e.onMouseLeave, G.off)
              })
            },
            [Z, re, a, U, z, D, u, r, H, G.off, G.on]
          ),
          de = (0, i.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                f({}, F, e, {
                  ref: o(n, function (e) {
                    e && V("LABEL" === e.tagName)
                  }),
                  onClick: (0, t.v0)(e.onClick, function () {
                    var e
                    Q ||
                      (null == (e = Y.current) || e.click(),
                      (0, t.T_)(Y.current, { nextTick: !0 }))
                  }),
                  "data-disabled": (0, t.PB)(a),
                  "data-checked": (0, t.PB)(re),
                  "data-invalid": (0, t.PB)(u)
                })
              )
            },
            [F, a, re, u, Q]
          ),
          ve = (0, i.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                f({}, e, {
                  ref: o(Y, n),
                  type: "checkbox",
                  name: _,
                  value: S,
                  id: d,
                  tabIndex: N,
                  onChange: (0, t.v0)(e.onChange, oe),
                  onBlur: (0, t.v0)(e.onBlur, K, X.off),
                  onFocus: (0, t.v0)(e.onFocus, A, X.on),
                  onKeyDown: (0, t.v0)(e.onKeyDown, se),
                  onKeyUp: (0, t.v0)(e.onKeyUp, le),
                  required: l,
                  checked: re,
                  disabled: ce,
                  readOnly: r,
                  "aria-label": O,
                  "aria-labelledby": R,
                  "aria-invalid": T ? Boolean(T) : u,
                  "aria-describedby": m,
                  "aria-disabled": a,
                  style: h.NL
                })
              )
            },
            [
              _,
              S,
              d,
              oe,
              X.off,
              X.on,
              K,
              A,
              se,
              le,
              l,
              re,
              ce,
              r,
              O,
              R,
              T,
              u,
              m,
              a,
              N
            ]
          ),
          he = (0, i.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                f({}, e, {
                  ref: n,
                  onMouseDown: (0, t.v0)(e.onMouseDown, B),
                  onTouchStart: (0, t.v0)(e.onTouchStart, B),
                  "data-disabled": (0, t.PB)(a),
                  "data-checked": (0, t.PB)(re),
                  "data-invalid": (0, t.PB)(u)
                })
              )
            },
            [re, a, u]
          )
        return {
          state: {
            isInvalid: u,
            isFocused: U,
            isChecked: re,
            isActive: Z,
            isHovered: z,
            isIndeterminate: D,
            isDisabled: a,
            isReadOnly: r,
            isRequired: l
          },
          getRootProps: de,
          getCheckboxProps: ue,
          getInputProps: ve,
          getLabelProps: he,
          htmlProps: F
        }
      }
      function B(e) {
        e.preventDefault(), e.stopPropagation()
      }
      var w = [
          "spacing",
          "className",
          "children",
          "iconColor",
          "iconSize",
          "icon",
          "isChecked",
          "isDisabled",
          "onChange",
          "inputProps"
        ],
        D = (0, l.m$)("span", {
          baseStyle: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "top",
            userSelect: "none",
            flexShrink: 0
          }
        }),
        _ = (0, l.m$)("label", {
          baseStyle: {
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            verticalAlign: "top",
            position: "relative"
          }
        }),
        S = (0, l.Gp)(function (e, n) {
          var a = p(),
            r = f({}, a, e),
            o = (0, l.jC)("Checkbox", r),
            c = (0, l.Lr)(e),
            s = c.spacing,
            u = void 0 === s ? "0.5rem" : s,
            d = c.className,
            v = c.children,
            h = c.iconColor,
            k = c.iconSize,
            m = c.icon,
            C = void 0 === m ? i.createElement(P, null) : m,
            y = c.isChecked,
            g = c.isDisabled,
            x = void 0 === g ? (null == a ? void 0 : a.isDisabled) : g,
            E = c.onChange,
            B = c.inputProps,
            S = b(c, w),
            M = y
          null != a && a.value && c.value && (M = a.value.includes(c.value))
          var N = E
          null != a && a.onChange && c.value && (N = (0, t.PP)(a.onChange, E))
          var O = I(f({}, S, { isDisabled: x, isChecked: M, onChange: N })),
            R = O.state,
            T = O.getInputProps,
            L = O.getCheckboxProps,
            F = O.getLabelProps,
            j = O.getRootProps,
            K = i.useMemo(
              function () {
                return f(
                  {
                    opacity: R.isChecked || R.isIndeterminate ? 1 : 0,
                    transform:
                      R.isChecked || R.isIndeterminate
                        ? "scale(1)"
                        : "scale(0.95)",
                    fontSize: k,
                    color: h
                  },
                  o.icon
                )
              },
              [h, k, R.isChecked, R.isIndeterminate, o.icon]
            ),
            A = i.cloneElement(C, {
              __css: K,
              isIndeterminate: R.isIndeterminate,
              isChecked: R.isChecked
            })
          return i.createElement(
            _,
            f(
              {
                __css: o.container,
                className: (0, t.cx)("chakra-checkbox", d)
              },
              j()
            ),
            i.createElement(
              "input",
              f({ className: "chakra-checkbox__input" }, T(B, n))
            ),
            i.createElement(
              D,
              f(
                { __css: o.control, className: "chakra-checkbox__control" },
                L()
              ),
              A
            ),
            v &&
              i.createElement(
                l.m$.span,
                f({ className: "chakra-checkbox__label" }, F(), {
                  __css: f({ marginStart: u }, o.label)
                }),
                v
              )
          )
        })
      t.Ts && (S.displayName = "Checkbox")
    }
  }
])
