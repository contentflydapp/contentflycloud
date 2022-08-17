"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6223],
  {
    56223: function (e, r, o) {
      o.d(r, {
        J2: function () {
          return O
        },
        QH: function () {
          return F
        },
        b: function () {
          return R
        },
        us: function () {
          return A
        },
        yk: function () {
          return B
        },
        Yt: function () {
          return S
        },
        xo: function () {
          return T
        }
      })
      var n = o(13119),
        t = o(78042),
        a = o(63949),
        i = o(38554),
        s = o.n(i),
        u = o(67294)
      function c(e, r) {
        if (null != e)
          if ((0, a.mf)(e)) e(r)
          else
            try {
              e.current = r
            } catch (o) {
              throw new Error(
                "Cannot assign value '" + r + "' to ref '" + e + "'"
              )
            }
      }
      function l() {
        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
          r[o] = arguments[o]
        return function (e) {
          r.forEach(function (r) {
            return c(r, e)
          })
        }
      }
      var p = o(94930),
        v = o(88523),
        d = o(90635),
        f = o(75345)
      function m() {
        return (
          (m =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var o = arguments[r]
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
              }
              return e
            }),
          m.apply(this, arguments)
        )
      }
      function y(e, r) {
        if (null == e) return {}
        var o,
          n,
          t = {},
          a = Object.keys(e)
        for (n = 0; n < a.length; n++)
          (o = a[n]), r.indexOf(o) >= 0 || (t[o] = e[o])
        return t
      }
      var g = (function (e) {
          void 0 === e && (e = {})
          var r = e,
            o = r.strict,
            n = void 0 === o || o,
            t = r.errorMessage,
            a =
              void 0 === t
                ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
                : t,
            i = r.name,
            s = u.createContext(void 0)
          return (
            (s.displayName = i),
            [
              s.Provider,
              function e() {
                var r = u.useContext(s)
                if (!r && n) {
                  var o = new Error(a)
                  throw (
                    ((o.name = "ContextError"),
                    null == Error.captureStackTrace ||
                      Error.captureStackTrace(o, e),
                    o)
                  )
                }
                return r
              },
              s
            ]
          )
        })({
          name: "PopoverContext",
          errorMessage:
            "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
        }),
        P = g[0],
        h = g[1],
        w = function (e) {
          if (e)
            return s()(e, {
              enter: { visibility: "visible" },
              exit: { transitionEnd: { visibility: "hidden" } }
            })
        },
        C = (0, p.E)(t.m$.section),
        b = u.forwardRef(function (e, r) {
          var o = h().isOpen
          return u.createElement(
            C,
            m({ ref: r, variants: w(e.variants) }, e, {
              initial: !1,
              animate: o ? "enter" : "exit"
            })
          )
        })
      b.defaultProps = {
        variants: {
          exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.1, ease: [0.4, 0, 1, 1] }
          },
          enter: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.15, ease: [0, 0, 0.2, 1] }
          }
        }
      }
      var k = [
          "closeOnBlur",
          "closeOnEsc",
          "initialFocusRef",
          "id",
          "returnFocusOnClose",
          "autoFocus",
          "arrowSize",
          "arrowShadowColor",
          "trigger",
          "openDelay",
          "closeDelay",
          "isLazy",
          "lazyBehavior",
          "computePositionOnMount"
        ],
        E = "click",
        _ = "hover"
      var N = ["children"],
        x = ["rootProps"],
        O = function (e) {
          var r = (0, t.jC)("Popover", e),
            o = (0, t.Lr)(e),
            n = o.children,
            i = (function (e) {
              void 0 === e && (e = {})
              var r = e,
                o = r.closeOnBlur,
                n = void 0 === o || o,
                t = r.closeOnEsc,
                i = void 0 === t || t,
                s = r.initialFocusRef,
                c = r.id,
                p = r.returnFocusOnClose,
                g = void 0 === p || p,
                P = r.autoFocus,
                h = void 0 === P || P,
                w = r.arrowSize,
                C = r.arrowShadowColor,
                b = r.trigger,
                N = void 0 === b ? E : b,
                x = r.openDelay,
                O = void 0 === x ? 200 : x,
                T = r.closeDelay,
                B = void 0 === T ? 200 : T,
                S = r.isLazy,
                R = r.lazyBehavior,
                A = void 0 === R ? "unmount" : R,
                F = r.computePositionOnMount,
                M = y(r, k),
                z = (0, v.qY)(e),
                D = z.isOpen,
                K = z.onClose,
                L = z.onOpen,
                j = z.onToggle,
                $ = (0, u.useRef)(null),
                I = (0, u.useRef)(null),
                G = (0, u.useRef)(null),
                H = (0, u.useRef)(!1),
                U = (0, u.useRef)(!1)
              D && (U.current = !0)
              var Y = (0, u.useState)(!1),
                q = Y[0],
                J = Y[1],
                Q = (0, u.useState)(!1),
                V = Q[0],
                Z = Q[1],
                W = (0, v.ZS)(
                  c,
                  "popover-trigger",
                  "popover-content",
                  "popover-header",
                  "popover-body"
                ),
                X = W[0],
                ee = W[1],
                re = W[2],
                oe = W[3],
                ne = (0, f.D)(m({}, M, { enabled: D || !!F })),
                te = ne.referenceRef,
                ae = ne.getArrowProps,
                ie = ne.getPopperProps,
                se = ne.getArrowInnerProps,
                ue = ne.forceUpdate,
                ce = (0, d.h)({ isOpen: D, ref: G })
              ;(0, v.s9)({ enabled: D, ref: I }),
                (0, v.Ck)(G, {
                  focusRef: I,
                  visible: D,
                  shouldFocus: g && N === E
                }),
                (0, v.Gp)(G, {
                  focusRef: s,
                  visible: D,
                  shouldFocus: h && N === E
                })
              var le = (0, a.VI)({
                  hasBeenSelected: U.current,
                  isLazy: S,
                  lazyBehavior: A,
                  isSelected: ce.present
                }),
                pe = (0, u.useCallback)(
                  function (e, r) {
                    var o
                    void 0 === e && (e = {}), void 0 === r && (r = null)
                    var t = m({}, e, {
                      style: m(
                        {},
                        e.style,
                        ((o = { transformOrigin: f.j.transformOrigin.varRef }),
                        (o[f.j.arrowSize.var] = w ? (0, a.px)(w) : void 0),
                        (o[f.j.arrowShadowColor.var] = C),
                        o)
                      ),
                      ref: l(G, r),
                      children: le ? e.children : null,
                      id: ee,
                      tabIndex: -1,
                      role: "dialog",
                      onKeyDown: (0, a.v0)(e.onKeyDown, function (e) {
                        i && "Escape" === e.key && K()
                      }),
                      onBlur: (0, a.v0)(e.onBlur, function (e) {
                        var r = (0, a.wN)(e),
                          o = (0, a.r3)(G.current, r),
                          t = (0, a.r3)(I.current, r)
                        D && n && !o && !t && K()
                      }),
                      "aria-labelledby": q ? re : void 0,
                      "aria-describedby": V ? oe : void 0
                    })
                    return (
                      N === _ &&
                        ((t.role = "tooltip"),
                        (t.onMouseEnter = (0, a.v0)(
                          e.onMouseEnter,
                          function () {
                            H.current = !0
                          }
                        )),
                        (t.onMouseLeave = (0, a.v0)(
                          e.onMouseLeave,
                          function () {
                            ;(H.current = !1), setTimeout(K, B)
                          }
                        ))),
                      t
                    )
                  },
                  [le, ee, q, re, V, oe, N, i, K, D, n, B, C, w]
                ),
                ve = (0, u.useCallback)(
                  function (e, r) {
                    return (
                      void 0 === e && (e = {}),
                      void 0 === r && (r = null),
                      ie(
                        m({}, e, {
                          style: m(
                            { visibility: D ? "visible" : "hidden" },
                            e.style
                          )
                        }),
                        r
                      )
                    )
                  },
                  [D, ie]
                ),
                de = (0, u.useCallback)(
                  function (e, r) {
                    return (
                      void 0 === r && (r = null), m({}, e, { ref: l(r, $, te) })
                    )
                  },
                  [$, te]
                ),
                fe = (0, u.useRef)(),
                me = (0, u.useRef)(),
                ye = (0, u.useCallback)(
                  function (e) {
                    null == $.current && te(e)
                  },
                  [te]
                ),
                ge = (0, u.useCallback)(
                  function (e, r) {
                    void 0 === e && (e = {}), void 0 === r && (r = null)
                    var o = m({}, e, {
                      ref: l(I, r, ye),
                      id: X,
                      "aria-haspopup": "dialog",
                      "aria-expanded": D,
                      "aria-controls": ee
                    })
                    return (
                      N === E && (o.onClick = (0, a.v0)(e.onClick, j)),
                      N === _ &&
                        ((o.onFocus = (0, a.v0)(e.onFocus, L)),
                        (o.onBlur = (0, a.v0)(e.onBlur, function (e) {
                          var r = (0, a.wN)(e),
                            o = !(0, a.r3)(G.current, r)
                          D && n && o && K()
                        })),
                        (o.onKeyDown = (0, a.v0)(e.onKeyDown, function (e) {
                          "Escape" === e.key && K()
                        })),
                        (o.onMouseEnter = (0, a.v0)(
                          e.onMouseEnter,
                          function () {
                            ;(H.current = !0),
                              (fe.current = window.setTimeout(L, O))
                          }
                        )),
                        (o.onMouseLeave = (0, a.v0)(
                          e.onMouseLeave,
                          function () {
                            ;(H.current = !1),
                              fe.current &&
                                (clearTimeout(fe.current),
                                (fe.current = void 0)),
                              (me.current = window.setTimeout(function () {
                                !1 === H.current && K()
                              }, B))
                          }
                        ))),
                      o
                    )
                  },
                  [X, D, ee, N, ye, j, L, n, K, O, B]
                )
              ;(0, u.useEffect)(function () {
                return function () {
                  fe.current && clearTimeout(fe.current),
                    me.current && clearTimeout(me.current)
                }
              }, [])
              var Pe = (0, u.useCallback)(
                  function (e, r) {
                    return (
                      void 0 === e && (e = {}),
                      void 0 === r && (r = null),
                      m({}, e, {
                        id: re,
                        ref: l(r, function (e) {
                          J(!!e)
                        })
                      })
                    )
                  },
                  [re]
                ),
                he = (0, u.useCallback)(
                  function (e, r) {
                    return (
                      void 0 === e && (e = {}),
                      void 0 === r && (r = null),
                      m({}, e, {
                        id: oe,
                        ref: l(r, function (e) {
                          Z(!!e)
                        })
                      })
                    )
                  },
                  [oe]
                )
              return {
                forceUpdate: ue,
                isOpen: D,
                onAnimationComplete: ce.onComplete,
                onClose: K,
                getAnchorProps: de,
                getArrowProps: ae,
                getArrowInnerProps: se,
                getPopoverPositionerProps: ve,
                getPopoverProps: pe,
                getTriggerProps: ge,
                getHeaderProps: Pe,
                getBodyProps: he
              }
            })(m({}, y(o, N), { direction: (0, t.Fg)().direction }))
          return u.createElement(
            P,
            { value: i },
            u.createElement(
              t.Fo,
              { value: r },
              (0, a.Pu)(n, {
                isOpen: i.isOpen,
                onClose: i.onClose,
                forceUpdate: i.forceUpdate
              })
            )
          )
        }
      a.Ts && (O.displayName = "Popover")
      a.Ts
      var T = function (e) {
        var r = u.Children.only(e.children),
          o = h().getTriggerProps
        return u.cloneElement(r, o(r.props, r.ref))
      }
      a.Ts && (T.displayName = "PopoverTrigger")
      var B = (0, t.Gp)(function (e, r) {
        var o = e.rootProps,
          n = y(e, x),
          i = h(),
          s = i.getPopoverProps,
          c = i.getPopoverPositionerProps,
          l = i.onAnimationComplete,
          p = (0, t.yK)(),
          v = m(
            { position: "relative", display: "flex", flexDirection: "column" },
            p.content
          )
        return u.createElement(
          t.m$.div,
          m({}, c(o), { __css: p.popper, className: "chakra-popover__popper" }),
          u.createElement(
            b,
            m({}, s(n, r), {
              onAnimationComplete: (0, a.PP)(l, n.onAnimationComplete),
              className: (0, a.cx)("chakra-popover__content", e.className),
              __css: v
            })
          )
        )
      })
      a.Ts && (B.displayName = "PopoverContent")
      var S = (0, t.Gp)(function (e, r) {
        var o = h().getHeaderProps,
          n = (0, t.yK)()
        return u.createElement(
          t.m$.header,
          m({}, o(e, r), {
            className: (0, a.cx)("chakra-popover__header", e.className),
            __css: n.header
          })
        )
      })
      a.Ts && (S.displayName = "PopoverHeader")
      var R = (0, t.Gp)(function (e, r) {
        var o = h().getBodyProps,
          n = (0, t.yK)()
        return u.createElement(
          t.m$.div,
          m({}, o(e, r), {
            className: (0, a.cx)("chakra-popover__body", e.className),
            __css: n.body
          })
        )
      })
      a.Ts && (R.displayName = "PopoverBody")
      a.Ts
      var A = function (e) {
        var r = h().onClose,
          o = (0, t.yK)()
        return u.createElement(
          n.P,
          m(
            {
              size: "sm",
              onClick: r,
              className: (0, a.cx)("chakra-popover__close-btn", e.className),
              __css: o.closeButton
            },
            e
          )
        )
      }
      a.Ts && (A.displayName = "PopoverCloseButton")
      var F = function (e) {
        var r,
          o = e.bg,
          n = e.bgColor,
          i = e.backgroundColor,
          s = h(),
          c = s.getArrowProps,
          l = s.getArrowInnerProps,
          p = (0, t.yK)(),
          v = null != (r = null != o ? o : n) ? r : i
        return u.createElement(
          t.m$.div,
          m({}, c(), { className: "chakra-popover__arrow-positioner" }),
          u.createElement(
            t.m$.div,
            m(
              { className: (0, a.cx)("chakra-popover__arrow", e.className) },
              l(e),
              {
                __css: m({}, p.arrow, {
                  "--popper-arrow-bg": v ? "colors." + v + ", " + v : void 0
                })
              }
            )
          )
        )
      }
      a.Ts && (F.displayName = "PopoverArrow")
    }
  }
])
