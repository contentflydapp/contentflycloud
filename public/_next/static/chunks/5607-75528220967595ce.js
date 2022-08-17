"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5607],
  {
    13119: function (t, e, n) {
      n.d(e, {
        P: function () {
          return s
        }
      })
      var o = n(64737),
        r = n(78042),
        i = n(63949),
        a = n(67294)
      function l() {
        return (
          (l =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
              }
              return t
            }),
          l.apply(this, arguments)
        )
      }
      var u = ["children", "isDisabled", "__css"],
        c = function (t) {
          return a.createElement(
            o.JO,
            l({ focusable: "false", "aria-hidden": !0 }, t),
            a.createElement("path", {
              fill: "currentColor",
              d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            })
          )
        },
        s = (0, r.Gp)(function (t, e) {
          var n = (0, r.mq)("CloseButton", t),
            o = (0, r.Lr)(t),
            i = o.children,
            s = o.isDisabled,
            f = o.__css,
            d = (function (t, e) {
              if (null == t) return {}
              var n,
                o,
                r = {},
                i = Object.keys(t)
              for (o = 0; o < i.length; o++)
                (n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n])
              return r
            })(o, u)
          return a.createElement(
            r.m$.button,
            l(
              {
                type: "button",
                "aria-label": "Close",
                ref: e,
                disabled: s,
                __css: l(
                  {},
                  {
                    outline: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  },
                  n,
                  f
                )
              },
              d
            ),
            i || a.createElement(c, { width: "1em", height: "1em" })
          )
        })
      i.Ts && (s.displayName = "CloseButton")
    },
    45607: function (t, e, n) {
      n.d(e, {
        pm: function () {
          return nt
        }
      })
      var o = n(78042),
        r = n(63949),
        i = n(67294)
      var a = n(64737)
      function l() {
        return (
          (l =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
              }
              return t
            }),
          l.apply(this, arguments)
        )
      }
      var u = function (t) {
          return i.createElement(
            a.JO,
            l({ viewBox: "0 0 24 24" }, t),
            i.createElement("path", {
              fill: "currentColor",
              d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
            })
          )
        },
        c = ["status"],
        s = {
          info: {
            icon: function (t) {
              return i.createElement(
                a.JO,
                l({ viewBox: "0 0 24 24" }, t),
                i.createElement("path", {
                  fill: "currentColor",
                  d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
                })
              )
            },
            colorScheme: "blue"
          },
          warning: { icon: u, colorScheme: "orange" },
          success: {
            icon: function (t) {
              return i.createElement(
                a.JO,
                l({ viewBox: "0 0 24 24" }, t),
                i.createElement("path", {
                  fill: "currentColor",
                  d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                })
              )
            },
            colorScheme: "green"
          },
          error: { icon: u, colorScheme: "red" }
        },
        f = (function (t) {
          void 0 === t && (t = {})
          var e = t,
            n = e.strict,
            o = void 0 === n || n,
            r = e.errorMessage,
            a =
              void 0 === r
                ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
                : r,
            l = e.name,
            u = i.createContext(void 0)
          return (
            (u.displayName = l),
            [
              u.Provider,
              function t() {
                var e = i.useContext(u)
                if (!e && o) {
                  var n = new Error(a)
                  throw (
                    ((n.name = "ContextError"),
                    null == Error.captureStackTrace ||
                      Error.captureStackTrace(n, t),
                    n)
                  )
                }
                return e
              },
              u
            ]
          )
        })({
          name: "AlertContext",
          errorMessage:
            "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
        }),
        d = f[0],
        v = f[1],
        m = (0, o.Gp)(function (t, e) {
          var n,
            a = (0, o.Lr)(t),
            u = a.status,
            f = void 0 === u ? "info" : u,
            v = (function (t, e) {
              if (null == t) return {}
              var n,
                o,
                r = {},
                i = Object.keys(t)
              for (o = 0; o < i.length; o++)
                (n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n])
              return r
            })(a, c),
            m = null != (n = t.colorScheme) ? n : s[f].colorScheme,
            p = (0, o.jC)("Alert", l({}, t, { colorScheme: m })),
            h = l(
              {
                width: "100%",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden"
              },
              p.container
            )
          return i.createElement(
            d,
            { value: { status: f } },
            i.createElement(
              o.Fo,
              { value: p },
              i.createElement(
                o.m$.div,
                l({ role: "alert", ref: e }, v, {
                  className: (0, r.cx)("chakra-alert", t.className),
                  __css: h
                })
              )
            )
          )
        }),
        p = (0, o.Gp)(function (t, e) {
          var n = (0, o.yK)()
          return i.createElement(
            o.m$.div,
            l({ ref: e }, t, {
              className: (0, r.cx)("chakra-alert__title", t.className),
              __css: n.title
            })
          )
        }),
        h = (0, o.Gp)(function (t, e) {
          var n = l({ display: "inline" }, (0, o.yK)().description)
          return i.createElement(
            o.m$.div,
            l({ ref: e }, t, {
              className: (0, r.cx)("chakra-alert__desc", t.className),
              __css: n
            })
          )
        }),
        y = function (t) {
          var e = v().status,
            n = s[e].icon,
            a = (0, o.yK)()
          return i.createElement(
            o.m$.span,
            l({ display: "inherit" }, t, {
              className: (0, r.cx)("chakra-alert__icon", t.className),
              __css: a.icon
            }),
            i.createElement(n, { w: "100%", h: "100%" })
          )
        },
        g = n(13119),
        b = n(97222),
        E = n(48928),
        x = n(88523),
        w = n(73935),
        C = n(15947),
        O = n(94930),
        A = n(21190)
      function M() {
        return (
          (M =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
              }
              return t
            }),
          M.apply(this, arguments)
        )
      }
      var T = (0, i.forwardRef)(function (t, e) {
        var n = t.as,
          o = void 0 === n ? "span" : n,
          r = t.style,
          a = void 0 === r ? {} : r,
          l = (function (t, e) {
            if (null == t) return {}
            var n,
              o,
              r = {},
              i = Object.keys(t)
            for (o = 0; o < i.length; o++)
              (n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n])
            return r
          })(t, ["as", "style"])
        return (0,
        i.createElement)(o, M({ ref: e, style: M({ border: 0, clip: "rect(0 0 0 0)", height: "1px", margin: "-1px", overflow: "hidden", padding: 0, position: "absolute", width: "1px", whiteSpace: "nowrap", wordWrap: "normal" }, a) }, l))
      })
      var _ = n(42473),
        S = n.n(_)
      j() ? i.useLayoutEffect : i.useEffect,
        S(),
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math && self
      function k(t, e) {
        if (null != t)
          if (
            (function (t) {
              return !(!t || "[object Function]" != {}.toString.call(t))
            })(t)
          )
            t(e)
          else
            try {
              t.current = e
            } catch (n) {
              throw new Error(
                'Cannot assign value "' + e + '" to ref "' + t + '"'
              )
            }
      }
      function j() {
        return !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        )
      }
      function N(t) {
        return (0, i.forwardRef)(t)
      }
      function P(t) {
        return j() ? (t ? t.ownerDocument : document) : null
      }
      function Z() {
        return (
          (Z =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
              }
              return t
            }),
          Z.apply(this, arguments)
        )
      }
      var R,
        I = { polite: -1, assertive: -1 },
        L = { polite: {}, assertive: {} },
        q = { polite: null, assertive: null },
        B = N(function (t, e) {
          var n = t.as,
            o = void 0 === n ? "div" : n,
            r = t.children,
            a = t.type,
            l = void 0 === a ? "polite" : a,
            u = (function (t, e) {
              if (null == t) return {}
              var n,
                o,
                r = {},
                i = Object.keys(t)
              for (o = 0; o < i.length; o++)
                (n = i[o]), e.indexOf(n) >= 0 || (r[n] = t[n])
              return r
            })(t, ["as", "children", "type"]),
            c = (0, i.useRef)(null),
            s = (function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n]
              return (0, i.useMemo)(function () {
                return e.every(function (t) {
                  return null == t
                })
                  ? null
                  : function (t) {
                      e.forEach(function (e) {
                        k(e, t)
                      })
                    }
              }, [].concat(e))
            })(e, c),
            f = (0, i.useMemo)(
              function () {
                return (0, i.createElement)(
                  o,
                  Z({}, u, { ref: s, "data-reach-alert": !0 }),
                  r
                )
              },
              [r, u]
            )
          return (
            (function (t, e, n) {
              var o = (function (t) {
                  var e = (0, i.useRef)(null)
                  return (
                    (0, i.useEffect)(
                      function () {
                        e.current = t
                      },
                      [t]
                    ),
                    e.current
                  )
                })(t),
                r = (0, i.useRef)(null),
                a = (0, i.useRef)(!1)
              ;(0, i.useEffect)(
                function () {
                  var i = P(n.current)
                  a.current
                    ? o !== t
                      ? (r.current && r.current.unmount(),
                        (r.current = $(t, i)),
                        r.current.mount(e))
                      : r.current && r.current.update(e)
                    : ((a.current = !0),
                      (r.current = $(t, i)),
                      r.current.mount(e))
                },
                [e, t, o, n]
              ),
                (0, i.useEffect)(function () {
                  return function () {
                    r.current && r.current.unmount()
                  }
                }, [])
            })(l, f, c),
            f
          )
        })
      function $(t, e) {
        var n = ++I[t]
        return {
          mount: function o(r) {
            if (q[t]) (L[t][n] = r), D()
            else {
              var i = e.createElement("div")
              i.setAttribute("data-reach-live-" + t, "true"),
                (q[t] = i),
                e.body.appendChild(q[t]),
                o(r)
            }
          },
          update: function (e) {
            ;(L[t][n] = e), D()
          },
          unmount: function () {
            delete L[t][n], D()
          }
        }
      }
      function D() {
        null != R && window.clearTimeout(R),
          (R = window.setTimeout(function () {
            Object.keys(L).forEach(function (t) {
              var e = t
              q[e] &&
                (0, w.render)(
                  (0, i.createElement)(
                    T,
                    { as: "div" },
                    (0, i.createElement)(
                      "div",
                      {
                        role: "assertive" === e ? "alert" : "status",
                        "aria-live": e
                      },
                      Object.keys(L[e]).map(function (t) {
                        return (0,
                        i.cloneElement)(L[e][t], { key: t, ref: null })
                      })
                    )
                  ),
                  q[e]
                )
            })
          }, 500))
      }
      var F = B
      function G() {
        return (
          (G =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
              }
              return t
            }),
          G.apply(this, arguments)
        )
      }
      function J(t, e) {
        return (
          (J =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            }),
          J(t, e)
        )
      }
      function K(t, e) {
        var n = W(t, e),
          o = n
            ? t[n].findIndex(function (t) {
                return t.id === e
              })
            : -1
        return { position: n, index: o }
      }
      var W = function (t, e) {
        var n
        return null ==
          (n = Object.values(t)
            .flat()
            .find(function (t) {
              return t.id === e
            }))
          ? void 0
          : n.position
      }
      var H = {
          initial: function (t) {
            var e,
              n = t.position,
              o = ["top", "bottom"].includes(n) ? "y" : "x",
              r = ["top-right", "bottom-right"].includes(n) ? 1 : -1
            return (
              "bottom" === n && (r = 1), ((e = { opacity: 0 })[o] = 24 * r), e
            )
          },
          animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
          },
          exit: {
            opacity: 0,
            scale: 0.85,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
          }
        },
        z = function (t) {
          var e = t.id,
            n = t.message,
            o = t.onCloseComplete,
            a = t.onRequestRemove,
            l = t.requestClose,
            u = void 0 !== l && l,
            c = t.position,
            s = void 0 === c ? "bottom" : c,
            f = t.duration,
            d = void 0 === f ? 5e3 : f,
            v = t.containerStyle,
            m = void 0 === v ? {} : v,
            p = i.useState(d),
            h = p[0],
            y = p[1],
            g = (0, C.hO)()
          ;(0, x.rf)(
            function () {
              g || null == o || o()
            },
            [g]
          ),
            (0, x.rf)(
              function () {
                y(d)
              },
              [d]
            )
          var b = function () {
            g && a()
          }
          i.useEffect(
            function () {
              g && u && a()
            },
            [g, u, a]
          ),
            (0, x.KS)(b, h)
          var E = i.useMemo(
            function () {
              return (function (t) {
                var e = "center"
                return (
                  t.includes("right") && (e = "flex-end"),
                  t.includes("left") && (e = "flex-start"),
                  { display: "flex", flexDirection: "column", alignItems: e }
                )
              })(s)
            },
            [s]
          )
          return i.createElement(
            O.E.li,
            {
              layout: !0,
              className: "chakra-toast",
              variants: H,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              onHoverStart: function () {
                return y(null)
              },
              onHoverEnd: function () {
                return y(d)
              },
              custom: { position: s },
              style: E
            },
            i.createElement(
              F,
              {
                className: "chakra-toast__inner",
                style: G(
                  {
                    pointerEvents: "auto",
                    maxWidth: 560,
                    minWidth: 300,
                    margin: "0.5rem"
                  },
                  m
                )
              },
              (0, r.mf)(n) ? n({ id: e, onClose: b }) : n
            )
          )
        }
      r.Ts && (z.displayName = "Toast")
      var V = (function (t) {
        var e, n
        function o(e) {
          var n
          ;((n = t.call(this, e) || this).state = {
            top: [],
            "top-left": [],
            "top-right": [],
            "bottom-left": [],
            bottom: [],
            "bottom-right": []
          }),
            (n.notify = function (t, e) {
              var o = n.createToast(t, e),
                r = o.position,
                i = o.id
              return (
                n.setState(function (t) {
                  var e,
                    n = r.includes("top")
                      ? [o].concat(t[r])
                      : [].concat(t[r], [o])
                  return G({}, t, (((e = {})[r] = n), e))
                }),
                i
              )
            }),
            (n.updateToast = function (t, e) {
              n.setState(function (n) {
                var o = G({}, n),
                  r = K(o, t),
                  i = r.position,
                  a = r.index
                return i && -1 !== a && (o[i][a] = G({}, o[i][a], e)), o
              })
            }),
            (n.closeAll = function (t) {
              var e = (void 0 === t ? {} : t).positions
              n.setState(function (t) {
                return (
                  null != e
                    ? e
                    : [
                        "bottom",
                        "bottom-right",
                        "bottom-left",
                        "top",
                        "top-left",
                        "top-right"
                      ]
                ).reduce(function (e, n) {
                  return (
                    (e[n] = t[n].map(function (t) {
                      return G({}, t, { requestClose: !0 })
                    })),
                    e
                  )
                }, {})
              })
            }),
            (n.createToast = function (t, e) {
              var r, i
              o.counter += 1
              var a = null != (r = e.id) ? r : o.counter,
                l = null != (i = e.position) ? i : "top"
              return {
                id: a,
                message: t,
                position: l,
                duration: e.duration,
                onCloseComplete: e.onCloseComplete,
                onRequestRemove: function () {
                  return n.removeToast(String(a), l)
                },
                status: e.status,
                requestClose: !1,
                containerStyle: e.containerStyle
              }
            }),
            (n.closeToast = function (t) {
              n.setState(function (e) {
                var n,
                  o = W(e, t)
                return o
                  ? G(
                      {},
                      e,
                      (((n = {})[o] = e[o].map(function (e) {
                        return e.id == t ? G({}, e, { requestClose: !0 }) : e
                      })),
                      n)
                    )
                  : e
              })
            }),
            (n.removeToast = function (t, e) {
              n.setState(function (n) {
                var o
                return G(
                  {},
                  n,
                  (((o = {})[e] = n[e].filter(function (e) {
                    return e.id != t
                  })),
                  o)
                )
              })
            }),
            (n.isVisible = function (t) {
              var e = K(n.state, t).position
              return Boolean(e)
            }),
            (n.getStyle = function (t) {
              return {
                position: "fixed",
                zIndex: 5500,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                margin: "top" === t || "bottom" === t ? "0 auto" : void 0,
                top: t.includes("top")
                  ? "env(safe-area-inset-top, 0px)"
                  : void 0,
                bottom: t.includes("bottom")
                  ? "env(safe-area-inset-bottom, 0px)"
                  : void 0,
                right: t.includes("left")
                  ? void 0
                  : "env(safe-area-inset-right, 0px)",
                left: t.includes("right")
                  ? void 0
                  : "env(safe-area-inset-left, 0px)"
              }
            })
          var r = {
            notify: n.notify,
            closeAll: n.closeAll,
            close: n.closeToast,
            update: n.updateToast,
            isActive: n.isVisible
          }
          return e.notify(r), n
        }
        return (
          (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          J(e, n),
          (o.prototype.render = function () {
            var t = this
            return (0, r.Yd)(this.state).map(function (e) {
              var n = t.state[e]
              return i.createElement(
                "ul",
                {
                  key: e,
                  id: "chakra-toast-manager-" + e,
                  style: t.getStyle(e)
                },
                i.createElement(
                  A.M,
                  { initial: !1 },
                  n.map(function (t) {
                    return i.createElement(z, G({ key: t.id }, t))
                  })
                )
              )
            })
          }),
          o
        )
      })(i.Component)
      V.counter = 0
      var U = "chakra-toast-portal",
        Y = new (function () {
          var t = this
          if (
            ((this.createToast = void 0),
            (this.removeAll = void 0),
            (this.closeToast = void 0),
            (this.updateToast = void 0),
            (this.isToastActive = void 0),
            (this.bindFunctions = function (e) {
              ;(t.createToast = e.notify),
                (t.removeAll = e.closeAll),
                (t.closeToast = e.close),
                (t.updateToast = e.update),
                (t.isToastActive = e.isActive)
            }),
            (this.notify = function (e, n) {
              return (
                void 0 === n && (n = {}),
                null == t.createToast ? void 0 : t.createToast(e, n)
              )
            }),
            (this.close = function (e) {
              null == t.closeToast || t.closeToast(e)
            }),
            (this.closeAll = function (e) {
              null == t.removeAll || t.removeAll(e)
            }),
            (this.update = function (e, n) {
              void 0 === n && (n = {}),
                null == t.updateToast || t.updateToast(e, n)
            }),
            (this.isActive = function (e) {
              return null == t.isToastActive ? void 0 : t.isToastActive(e)
            }),
            r.jU)
          ) {
            var e,
              n = document.getElementById(U)
            if (n) e = n
            else {
              var o,
                a = document.createElement("div")
              ;(a.id = U),
                null == (o = document.body) || o.appendChild(a),
                (e = a)
            }
            ;(0, w.render)(
              i.createElement(V, { notify: this.bindFunctions }),
              e
            )
          }
        })()
      function Q(t, e) {
        var n
        if (t) {
          var o = {
            "top-start": { ltr: "top-left", rtl: "top-right" },
            "top-end": { ltr: "top-right", rtl: "top-left" },
            "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
            "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
          }[t]
          return null != (n = null == o ? void 0 : o[e]) ? n : t
        }
      }
      var X = function (t) {
          var e = t.status,
            n = t.variant,
            r = t.id,
            a = t.title,
            l = t.isClosable,
            u = t.onClose,
            c = t.description,
            s = "undefined" !== typeof r ? "toast-" + r + "-title" : void 0
          return i.createElement(
            m,
            {
              status: e,
              variant: n,
              id: r,
              alignItems: "start",
              borderRadius: "md",
              boxShadow: "lg",
              paddingEnd: 8,
              textAlign: "start",
              width: "auto",
              "aria-labelledby": s
            },
            i.createElement(y, null),
            i.createElement(
              o.m$.div,
              { flex: "1", maxWidth: "100%" },
              a && i.createElement(p, { id: s }, a),
              c && i.createElement(h, { display: "block" }, c)
            ),
            l &&
              i.createElement(g.P, {
                size: "sm",
                onClick: u,
                position: "absolute",
                insetEnd: 1,
                top: 1
              })
          )
        },
        tt = { duration: 5e3, position: "bottom", variant: "solid" },
        et = {
          theme: E.ZP,
          colorMode: "light",
          toggleColorMode: r.ZT,
          setColorMode: r.ZT,
          defaultOptions: tt
        }
      function nt(t) {
        var e = (0, o.uP)(),
          n = e.theme,
          a = e.setColorMode,
          l = e.toggleColorMode,
          u = e.colorMode,
          c = (0, x.II)(t)
        return i.useMemo(
          function () {
            return (function (t) {
              var e = void 0 === t ? et : t,
                n = e.theme,
                a = void 0 === n ? et.theme : n,
                l = e.colorMode,
                u = void 0 === l ? et.colorMode : l,
                c = e.toggleColorMode,
                s = void 0 === c ? et.toggleColorMode : c,
                f = e.setColorMode,
                d = void 0 === f ? et.setColorMode : f,
                v = e.defaultOptions,
                m = void 0 === v ? et.defaultOptions : v,
                p = function (t, e) {
                  return i.createElement(
                    o.f6,
                    { theme: a },
                    i.createElement(
                      b.kc.Provider,
                      {
                        value: {
                          colorMode: u,
                          setColorMode: d,
                          toggleColorMode: s
                        }
                      },
                      (0, r.mf)(e.render)
                        ? e.render(t)
                        : i.createElement(X, G({}, t, e))
                    )
                  )
                },
                h = function (t) {
                  var e = G({}, m, t)
                  return (
                    (e.position = Q(e.position, a.direction)),
                    Y.notify(function (t) {
                      return p(t, e)
                    }, e)
                  )
                }
              return (
                (h.close = Y.close),
                (h.closeAll = Y.closeAll),
                (h.update = function (t, e) {
                  if (t) {
                    var n = G({}, m, e)
                    ;(n.position = Q(n.position, a.direction)),
                      Y.update(
                        t,
                        G({}, n, {
                          message: function (t) {
                            return p(t, n)
                          }
                        })
                      )
                  }
                }),
                (h.isActive = Y.isActive),
                h
              )
            })({
              theme: n,
              colorMode: u,
              setColorMode: a,
              toggleColorMode: l,
              defaultOptions: G({}, tt, c.current)
            })
          },
          [n, a, l, u, c]
        )
      }
    },
    42473: function (t) {
      var e = function () {}
      t.exports = e
    }
  }
])
