;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7107],
  {
    90635: function (e, n, t) {
      "use strict"
      t.d(n, {
        h: function () {
          return r.c
        }
      })
      t(67294)
      var r = t(29574)
    },
    50715: function (e, n, t) {
      "use strict"
      t.d(n, {
        v2: function () {
          return J
        },
        j2: function () {
          return X
        },
        sN: function () {
          return te
        },
        qy: function () {
          return ee
        }
      })
      var r = t(78042),
        o = t(63949),
        a = t(94930),
        i = t(67294)
      function u(e, n) {
        if (null != e)
          if ((0, o.mf)(e)) e(n)
          else
            try {
              e.current = n
            } catch (t) {
              throw new Error(
                "Cannot assign value '" + n + "' to ref '" + e + "'"
              )
            }
      }
      function l() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t]
        return function (e) {
          n.forEach(function (n) {
            return u(n, e)
          })
        }
      }
      function s(e) {
        void 0 === e && (e = {})
        var n = e,
          t = n.strict,
          r = void 0 === t || t,
          o = n.errorMessage,
          a =
            void 0 === o
              ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
              : o,
          u = n.name,
          l = i.createContext(void 0)
        return (
          (l.displayName = u),
          [
            l.Provider,
            function e() {
              var n = i.useContext(l)
              if (!n && r) {
                var t = new Error(a)
                throw (
                  ((t.name = "ContextError"),
                  null == Error.captureStackTrace ||
                    Error.captureStackTrace(t, e),
                  t)
                )
              }
              return n
            },
            l
          ]
        )
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          c.apply(this, arguments)
        )
      }
      var d = [
        "ref",
        "isDisabled",
        "isFocusable",
        "clickOnEnter",
        "clickOnSpace",
        "onMouseDown",
        "onMouseUp",
        "onClick",
        "onKeyDown",
        "onKeyUp",
        "tabIndex",
        "onMouseOver",
        "onMouseLeave"
      ]
      function f(e) {
        var n = e.target,
          t = n.tagName,
          r = n.isContentEditable
        return "INPUT" !== t && "TEXTAREA" !== t && !0 !== r
      }
      function p(e) {
        void 0 === e && (e = {})
        var n = e,
          t = n.ref,
          r = n.isDisabled,
          a = n.isFocusable,
          u = n.clickOnEnter,
          s = void 0 === u || u,
          p = n.clickOnSpace,
          v = void 0 === p || p,
          m = n.onMouseDown,
          b = n.onMouseUp,
          y = n.onClick,
          h = n.onKeyDown,
          O = n.onKeyUp,
          g = n.tabIndex,
          _ = n.onMouseOver,
          E = n.onMouseLeave,
          C = (function (e, n) {
            if (null == e) return {}
            var t,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t])
            return o
          })(n, d),
          x = i.useState(!0),
          k = x[0],
          w = x[1],
          I = i.useState(!1),
          T = I[0],
          N = I[1],
          S = (function () {
            var e = i.useRef(new Map()),
              n = e.current,
              t = i.useCallback(function (n, t, r, o) {
                e.current.set(r, { type: t, el: n, options: o }),
                  n.addEventListener(t, r, o)
              }, []),
              r = i.useCallback(function (n, t, r, o) {
                n.removeEventListener(t, r, o), e.current.delete(r)
              }, [])
            return (
              i.useEffect(
                function () {
                  return function () {
                    n.forEach(function (e, n) {
                      r(e.el, e.type, n, e.options)
                    })
                  }
                },
                [r, n]
              ),
              { add: t, remove: r }
            )
          })(),
          M = k ? g : g || 0,
          D = r && !a,
          j = i.useCallback(
            function (e) {
              if (r) return e.stopPropagation(), void e.preventDefault()
              e.currentTarget.focus(), null == y || y(e)
            },
            [r, y]
          ),
          P = i.useCallback(
            function (e) {
              T &&
                f(e) &&
                (e.preventDefault(),
                e.stopPropagation(),
                N(!1),
                S.remove(document, "keyup", P, !1))
            },
            [T, S]
          ),
          A = i.useCallback(
            function (e) {
              if (
                (null == h || h(e),
                !(r || e.defaultPrevented || e.metaKey) &&
                  f(e.nativeEvent) &&
                  !k)
              ) {
                var n = s && "Enter" === e.key
                if ((v && " " === e.key && (e.preventDefault(), N(!0)), n))
                  e.preventDefault(), e.currentTarget.click()
                S.add(document, "keyup", P, !1)
              }
            },
            [r, k, h, s, v, S, P]
          ),
          L = i.useCallback(
            function (e) {
              ;(null == O || O(e), r || e.defaultPrevented || e.metaKey) ||
                (f(e.nativeEvent) &&
                  !k &&
                  v &&
                  " " === e.key &&
                  (e.preventDefault(), N(!1), e.currentTarget.click()))
            },
            [v, k, r, O]
          ),
          R = i.useCallback(
            function (e) {
              0 === e.button && (N(!1), S.remove(document, "mouseup", R, !1))
            },
            [S]
          ),
          U = i.useCallback(
            function (e) {
              if (!(0, o.n_)(e)) {
                if (r) return e.stopPropagation(), void e.preventDefault()
                k || N(!0),
                  e.currentTarget.focus({ preventScroll: !0 }),
                  S.add(document, "mouseup", R, !1),
                  null == m || m(e)
              }
            },
            [r, k, m, S, R]
          ),
          F = i.useCallback(
            function (e) {
              ;(0, o.n_)(e) || (k || N(!1), null == b || b(e))
            },
            [b, k]
          ),
          z = i.useCallback(
            function (e) {
              r ? e.preventDefault() : null == _ || _(e)
            },
            [r, _]
          ),
          K = i.useCallback(
            function (e) {
              T && (e.preventDefault(), N(!1)), null == E || E(e)
            },
            [T, E]
          ),
          B = l(t, function (e) {
            e && "BUTTON" !== e.tagName && w(!1)
          })
        return c(
          {},
          C,
          k
            ? {
                ref: B,
                type: "button",
                "aria-disabled": D ? void 0 : r,
                disabled: D,
                onClick: j,
                onMouseDown: m,
                onMouseUp: b,
                onKeyUp: O,
                onKeyDown: h,
                onMouseOver: _,
                onMouseLeave: E
              }
            : {
                ref: B,
                role: "button",
                "data-active": (0, o.PB)(T),
                "aria-disabled": r ? "true" : void 0,
                tabIndex: D ? void 0 : M,
                onClick: j,
                onMouseDown: U,
                onMouseUp: F,
                onKeyUp: L,
                onKeyDown: A,
                onMouseOver: z,
                onMouseLeave: K
              }
        )
      }
      function v() {
        return (
          (v =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          v.apply(this, arguments)
        )
      }
      function m(e) {
        return e.sort(function (e, n) {
          var t = e.compareDocumentPosition(n)
          if (
            t & Node.DOCUMENT_POSITION_FOLLOWING ||
            t & Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            return -1
          if (
            t & Node.DOCUMENT_POSITION_PRECEDING ||
            t & Node.DOCUMENT_POSITION_CONTAINS
          )
            return 1
          if (
            t & Node.DOCUMENT_POSITION_DISCONNECTED ||
            t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
          )
            throw Error("Cannot sort the given nodes.")
          return 0
        })
      }
      function b(e, n, t) {
        var r = e + 1
        return t && r >= n && (r = 0), r
      }
      function y(e, n, t) {
        var r = e - 1
        return t && r < 0 && (r = n), r
      }
      var h = "undefined" !== typeof window ? i.useLayoutEffect : i.useEffect,
        O = function () {
          var e = this
          ;(this.descendants = new Map()),
            (this.register = function (n) {
              var t
              if (null != n)
                return "object" == typeof (t = n) &&
                  "nodeType" in t &&
                  t.nodeType === Node.ELEMENT_NODE
                  ? e.registerNode(n)
                  : function (t) {
                      e.registerNode(t, n)
                    }
            }),
            (this.unregister = function (n) {
              e.descendants.delete(n)
              var t = m(Array.from(e.descendants.keys()))
              e.assignIndex(t)
            }),
            (this.destroy = function () {
              e.descendants.clear()
            }),
            (this.assignIndex = function (n) {
              e.descendants.forEach(function (e) {
                var t = n.indexOf(e.node)
                ;(e.index = t), (e.node.dataset.index = e.index.toString())
              })
            }),
            (this.count = function () {
              return e.descendants.size
            }),
            (this.enabledCount = function () {
              return e.enabledValues().length
            }),
            (this.values = function () {
              return Array.from(e.descendants.values()).sort(function (e, n) {
                return e.index - n.index
              })
            }),
            (this.enabledValues = function () {
              return e.values().filter(function (e) {
                return !e.disabled
              })
            }),
            (this.item = function (n) {
              if (0 !== e.count()) return e.values()[n]
            }),
            (this.enabledItem = function (n) {
              if (0 !== e.enabledCount()) return e.enabledValues()[n]
            }),
            (this.first = function () {
              return e.item(0)
            }),
            (this.firstEnabled = function () {
              return e.enabledItem(0)
            }),
            (this.last = function () {
              return e.item(e.descendants.size - 1)
            }),
            (this.lastEnabled = function () {
              var n = e.enabledValues().length - 1
              return e.enabledItem(n)
            }),
            (this.indexOf = function (n) {
              var t, r
              return n &&
                null !=
                  (t = null == (r = e.descendants.get(n)) ? void 0 : r.index)
                ? t
                : -1
            }),
            (this.enabledIndexOf = function (n) {
              return null == n
                ? -1
                : e.enabledValues().findIndex(function (e) {
                    return e.node.isSameNode(n)
                  })
            }),
            (this.next = function (n, t) {
              void 0 === t && (t = !0)
              var r = b(n, e.count(), t)
              return e.item(r)
            }),
            (this.nextEnabled = function (n, t) {
              void 0 === t && (t = !0)
              var r = e.item(n)
              if (r) {
                var o = b(e.enabledIndexOf(r.node), e.enabledCount(), t)
                return e.enabledItem(o)
              }
            }),
            (this.prev = function (n, t) {
              void 0 === t && (t = !0)
              var r = y(n, e.count() - 1, t)
              return e.item(r)
            }),
            (this.prevEnabled = function (n, t) {
              void 0 === t && (t = !0)
              var r = e.item(n)
              if (r) {
                var o = y(e.enabledIndexOf(r.node), e.enabledCount() - 1, t)
                return e.enabledItem(o)
              }
            }),
            (this.registerNode = function (n, t) {
              if (n && !e.descendants.has(n)) {
                var r = m(Array.from(e.descendants.keys()).concat(n))
                null != t && t.disabled && (t.disabled = !!t.disabled)
                var o = v({ node: n, index: -1 }, t)
                e.descendants.set(n, o), e.assignIndex(r)
              }
            })
        }
      var g = s({
          name: "DescendantsProvider",
          errorMessage:
            "useDescendantsContext must be used within DescendantsProvider"
        }),
        _ = g[0],
        E = g[1]
      var C = t(88523),
        x = t(90635),
        k = t(75345)
      function w() {
        return (
          (w =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          w.apply(this, arguments)
        )
      }
      function I(e, n) {
        if (null == e) return {}
        var t,
          r,
          o = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t])
        return o
      }
      var T = [
          "id",
          "closeOnSelect",
          "closeOnBlur",
          "autoSelect",
          "isLazy",
          "isOpen",
          "defaultIsOpen",
          "onClose",
          "onOpen",
          "placement",
          "lazyBehavior",
          "direction",
          "computePositionOnMount"
        ],
        N = [
          "onMouseEnter",
          "onMouseMove",
          "onMouseLeave",
          "onClick",
          "isDisabled",
          "isFocusable",
          "closeOnSelect",
          "type"
        ],
        S = ["type", "isChecked"],
        M = [
          _,
          function () {
            return E()
          },
          function () {
            return (function () {
              var e = (0, i.useRef)(new O())
              return (
                h(function () {
                  return function () {
                    return e.current.destroy()
                  }
                }),
                e.current
              )
            })()
          },
          function (e) {
            return (function (e) {
              var n = E(),
                t = (0, i.useState)(-1),
                r = t[0],
                o = t[1],
                a = (0, i.useRef)(null)
              h(function () {
                return function () {
                  a.current && n.unregister(a.current)
                }
              }, []),
                h(function () {
                  if (a.current) {
                    var e = Number(a.current.dataset.index)
                    r == e || Number.isNaN(e) || o(e)
                  }
                })
              var u = e ? n.register(e) : n.register
              return {
                descendants: n,
                index: r,
                enabledIndex: n.enabledIndexOf(a.current),
                register: l(u, a)
              }
            })(e)
          }
        ],
        D = M[0],
        j = M[1],
        P = M[2],
        A = M[3],
        L = s({ strict: !1, name: "MenuContext" }),
        R = L[0],
        U = L[1]
      function F(e) {
        var n
        return (
          (0, o.Re)(e) &&
          !(null == (n = e.getAttribute("role")) || !n.startsWith("menuitem"))
        )
      }
      function z(e, n) {
        void 0 === e && (e = {}), void 0 === n && (n = null)
        var t = e,
          r = t.onMouseEnter,
          a = t.onMouseMove,
          u = t.onMouseLeave,
          s = t.onClick,
          c = t.isDisabled,
          d = t.isFocusable,
          f = t.closeOnSelect,
          v = t.type,
          m = I(t, N),
          b = U(),
          y = b.setFocusedIndex,
          h = b.focusedIndex,
          O = b.closeOnSelect,
          g = b.onClose,
          _ = b.menuRef,
          E = b.isOpen,
          x = b.menuId,
          k = i.useRef(null),
          T = x + "-menuitem-" + (0, C.Me)(),
          S = A({ disabled: c && !d }),
          M = S.index,
          D = S.register,
          j = i.useCallback(
            function (e) {
              null == r || r(e), c || y(M)
            },
            [y, M, c, r]
          ),
          P = i.useCallback(
            function (e) {
              null == a || a(e), k.current && !(0, o.H9)(k.current) && j(e)
            },
            [j, a]
          ),
          L = i.useCallback(
            function (e) {
              null == u || u(e), c || y(-1)
            },
            [y, c, u]
          ),
          R = i.useCallback(
            function (e) {
              null == s || s(e),
                F(e.currentTarget) && (null != f ? f : O) && g()
            },
            [g, s, O, f]
          ),
          z = M === h,
          K = c && !d
        ;(0, C.rf)(
          function () {
            E &&
              (z && !K && k.current
                ? (0, o.T_)(k.current, {
                    nextTick: !0,
                    selectTextIfInput: !1,
                    preventScroll: !1
                  })
                : _.current &&
                  !(0, o.H9)(_.current) &&
                  (0, o.T_)(_.current, { preventScroll: !1 }))
          },
          [z, K, _, E]
        )
        var B = p({
          onClick: R,
          onMouseEnter: j,
          onMouseMove: P,
          onMouseLeave: L,
          ref: l(D, k, n),
          isDisabled: c,
          isFocusable: d
        })
        return w({}, m, B, {
          type: null != v ? v : B.type,
          id: T,
          role: "menuitem",
          tabIndex: z ? 0 : -1
        })
      }
      var K = ["descendants"],
        B = ["children", "as"],
        G = ["rootProps"],
        V = ["type"],
        $ = ["icon", "iconSpacing", "command", "commandSpacing", "children"],
        q = ["icon", "iconSpacing"],
        W = ["title", "children", "className"],
        H = ["className", "children"],
        J = function (e) {
          var n = e.children,
            t = (0, r.jC)("Menu", e),
            a = (function (e) {
              void 0 === e && (e = {})
              var n = e,
                t = n.id,
                r = n.closeOnSelect,
                a = void 0 === r || r,
                u = n.closeOnBlur,
                l = void 0 === u || u,
                s = n.autoSelect,
                c = void 0 === s || s,
                d = n.isLazy,
                f = n.isOpen,
                p = n.defaultIsOpen,
                v = n.onClose,
                m = n.onOpen,
                b = n.placement,
                y = void 0 === b ? "bottom-start" : b,
                h = n.lazyBehavior,
                O = void 0 === h ? "unmount" : h,
                g = n.direction,
                _ = n.computePositionOnMount,
                E = void 0 !== _ && _,
                N = I(n, T),
                S = i.useRef(null),
                M = i.useRef(null),
                D = P(),
                j = i.useCallback(function () {
                  ;(0, o.T_)(S.current, { nextTick: !0, selectTextIfInput: !1 })
                }, []),
                A = i.useCallback(
                  function () {
                    var e = setTimeout(function () {
                      var e = D.firstEnabled()
                      e && q(e.index)
                    })
                    Z.current.add(e)
                  },
                  [D]
                ),
                L = i.useCallback(
                  function () {
                    var e = setTimeout(function () {
                      var e = D.lastEnabled()
                      e && q(e.index)
                    })
                    Z.current.add(e)
                  },
                  [D]
                ),
                R = i.useCallback(
                  function () {
                    null == m || m(), c ? A() : j()
                  },
                  [c, A, j, m]
                ),
                U = (0, C.qY)({
                  isOpen: f,
                  defaultIsOpen: p,
                  onClose: v,
                  onOpen: R
                }),
                F = U.isOpen,
                z = U.onOpen,
                K = U.onClose,
                B = U.onToggle
              ;(0, C.O3)({
                enabled: F && l,
                ref: S,
                handler: function (e) {
                  var n
                  ;(null != (n = M.current) && n.contains(e.target)) || K()
                }
              })
              var G = (0, k.D)(
                  w({}, N, { enabled: F || E, placement: y, direction: g })
                ),
                V = i.useState(-1),
                $ = V[0],
                q = V[1]
              ;(0, C.rf)(
                function () {
                  F || q(-1)
                },
                [F]
              ),
                (0, C.Ck)(S, { focusRef: M, visible: F, shouldFocus: !0 })
              var W = (0, x.h)({ isOpen: F, ref: S }),
                H = (0, C.ZS)(t, "menu-button", "menu-list"),
                J = H[0],
                Y = H[1],
                X = i.useCallback(
                  function () {
                    z(), j()
                  },
                  [z, j]
                ),
                Z = i.useRef(new Set([]))
              return (
                (0, C.zq)(function () {
                  Z.current.forEach(function (e) {
                    return clearTimeout(e)
                  }),
                    Z.current.clear()
                }),
                {
                  openAndFocusMenu: X,
                  openAndFocusFirstItem: i.useCallback(
                    function () {
                      z(), A()
                    },
                    [A, z]
                  ),
                  openAndFocusLastItem: i.useCallback(
                    function () {
                      z(), L()
                    },
                    [z, L]
                  ),
                  onTransitionEnd: i.useCallback(
                    function () {
                      var e,
                        n,
                        t = (0, o.lZ)(S.current),
                        r =
                          null == (e = S.current)
                            ? void 0
                            : e.contains(t.activeElement)
                      if (F && !r) {
                        var a = null == (n = D.item($)) ? void 0 : n.node
                        a &&
                          (0, o.T_)(a, {
                            selectTextIfInput: !1,
                            preventScroll: !1
                          })
                      }
                    },
                    [F, $, D]
                  ),
                  unstable__animationState: W,
                  descendants: D,
                  popper: G,
                  buttonId: J,
                  menuId: Y,
                  forceUpdate: G.forceUpdate,
                  orientation: "vertical",
                  isOpen: F,
                  onToggle: B,
                  onOpen: z,
                  onClose: K,
                  menuRef: S,
                  buttonRef: M,
                  focusedIndex: $,
                  closeOnSelect: a,
                  closeOnBlur: l,
                  autoSelect: c,
                  setFocusedIndex: q,
                  isLazy: d,
                  lazyBehavior: O
                }
              )
            })(w({}, (0, r.Lr)(e), { direction: (0, r.Fg)().direction })),
            u = a.descendants,
            l = I(a, K),
            s = i.useMemo(
              function () {
                return l
              },
              [l]
            ),
            c = s.isOpen,
            d = s.onClose,
            f = s.forceUpdate
          return i.createElement(
            D,
            { value: u },
            i.createElement(
              R,
              { value: s },
              i.createElement(
                r.Fo,
                { value: t },
                (0, o.Pu)(n, { isOpen: c, onClose: d, forceUpdate: f })
              )
            )
          )
        }
      o.Ts && (J.displayName = "Menu")
      var Y = (0, r.Gp)(function (e, n) {
          var t = (0, r.yK)()
          return i.createElement(
            r.m$.button,
            w({ ref: n }, e, {
              __css: w(
                {
                  display: "inline-flex",
                  appearance: "none",
                  alignItems: "center",
                  outline: 0
                },
                t.button
              )
            })
          )
        }),
        X = (0, r.Gp)(function (e, n) {
          e.children
          var t = e.as,
            a = (function (e, n) {
              void 0 === e && (e = {}), void 0 === n && (n = null)
              var t = U(),
                r = t.onToggle,
                a = t.popper,
                u = t.openAndFocusFirstItem,
                s = t.openAndFocusLastItem,
                c = i.useCallback(
                  function (e) {
                    var n = (0, o.uh)(e),
                      t = { Enter: u, ArrowDown: u, ArrowUp: s }[n]
                    t && (e.preventDefault(), e.stopPropagation(), t(e))
                  },
                  [u, s]
                )
              return w({}, e, {
                ref: l(t.buttonRef, n, a.referenceRef),
                id: t.buttonId,
                "data-active": (0, o.PB)(t.isOpen),
                "aria-expanded": t.isOpen,
                "aria-haspopup": "menu",
                "aria-controls": t.menuId,
                onClick: (0, o.v0)(e.onClick, r),
                onKeyDown: (0, o.v0)(e.onKeyDown, c)
              })
            })(I(e, B), n),
            u = t || Y
          return i.createElement(
            u,
            w({}, a, {
              className: (0, o.cx)("chakra-menu__menu-button", e.className)
            }),
            i.createElement(
              r.m$.span,
              { __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 } },
              e.children
            )
          )
        })
      o.Ts && (X.displayName = "MenuButton")
      var Z = {
        enter: {
          visibility: "visible",
          opacity: 1,
          scale: 1,
          transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
        },
        exit: {
          transitionEnd: { visibility: "hidden" },
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.1, easings: "easeOut" }
        }
      }
      var Q = (function (e) {
          var n = a.E
          return "custom" in n && "function" === typeof n.custom
            ? n.custom(e)
            : n(e)
        })(r.m$.div),
        ee = (0, r.Gp)(function (e, n) {
          var t,
            a,
            u = e.rootProps,
            s = I(e, G),
            c = U(),
            d = c.isOpen,
            f = c.onTransitionEnd,
            p = c.unstable__animationState,
            v = (function (e, n) {
              void 0 === e && (e = {}), void 0 === n && (n = null)
              var t = U()
              if (!t)
                throw new Error(
                  "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
                )
              var r = t.focusedIndex,
                a = t.setFocusedIndex,
                u = t.menuRef,
                s = t.isOpen,
                c = t.onClose,
                d = t.menuId,
                f = t.isLazy,
                p = t.lazyBehavior,
                v = t.unstable__animationState,
                m = j(),
                b = (0, C.bx)({
                  preventDefault: function (e) {
                    return " " !== e.key && F(e.target)
                  }
                }),
                y = i.useCallback(
                  function (e) {
                    var n = (0, o.uh)(e),
                      t = {
                        Tab: function (e) {
                          return e.preventDefault()
                        },
                        Escape: c,
                        ArrowDown: function () {
                          var e = m.nextEnabled(r)
                          e && a(e.index)
                        },
                        ArrowUp: function () {
                          var e = m.prevEnabled(r)
                          e && a(e.index)
                        }
                      },
                      i = t[n]
                    if (i) return e.preventDefault(), void i(e)
                    var u = b(function (e) {
                      var n = (0, o.LP)(
                        m.values(),
                        e,
                        function (e) {
                          var n, t
                          return null !=
                            (n =
                              null == e || null == (t = e.node)
                                ? void 0
                                : t.textContent)
                            ? n
                            : ""
                        },
                        m.item(r)
                      )
                      if (n) {
                        var t = m.indexOf(n.node)
                        a(t)
                      }
                    })
                    F(e.target) && u(e)
                  },
                  [m, r, b, c, a]
                ),
                h = i.useRef(!1)
              s && (h.current = !0)
              var O = (0, o.VI)({
                hasBeenSelected: h.current,
                isLazy: f,
                lazyBehavior: p,
                isSelected: v.present
              })
              return w({}, e, {
                ref: l(u, n),
                children: O ? e.children : null,
                tabIndex: -1,
                role: "menu",
                id: d,
                style: w({}, e.style, {
                  transformOrigin: "var(--popper-transform-origin)"
                }),
                "aria-orientation": "vertical",
                onKeyDown: (0, o.v0)(e.onKeyDown, y)
              })
            })(s, n),
            m = (function (e) {
              void 0 === e && (e = {})
              var n = U(),
                t = n.popper,
                r = n.isOpen
              return t.getPopperProps(
                w({}, e, {
                  style: w({ visibility: r ? "visible" : "hidden" }, e.style)
                })
              )
            })(u),
            b = (0, r.yK)()
          return i.createElement(
            r.m$.div,
            w({}, m, {
              __css: {
                zIndex:
                  null != (t = e.zIndex)
                    ? t
                    : null == (a = b.list)
                    ? void 0
                    : a.zIndex
              }
            }),
            i.createElement(
              Q,
              w({}, v, {
                onUpdate: f,
                onAnimationComplete: (0, o.PP)(
                  p.onComplete,
                  v.onAnimationComplete
                ),
                className: (0, o.cx)("chakra-menu__menu-list", v.className),
                variants: Z,
                initial: !1,
                animate: d ? "enter" : "exit",
                __css: w({ outline: 0 }, b.list)
              })
            )
          )
        })
      o.Ts && (ee.displayName = "MenuList")
      var ne = (0, r.Gp)(function (e, n) {
          var t = e.type,
            o = I(e, V),
            a = (0, r.yK)(),
            u = o.as || t ? (null != t ? t : void 0) : "button",
            l = i.useMemo(
              function () {
                return w(
                  {
                    textDecoration: "none",
                    color: "inherit",
                    userSelect: "none",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    textAlign: "start",
                    flex: "0 0 auto",
                    outline: 0
                  },
                  a.item
                )
              },
              [a.item]
            )
          return i.createElement(
            r.m$.button,
            w({ ref: n, type: u }, o, { __css: l })
          )
        }),
        te = (0, r.Gp)(function (e, n) {
          var t = e.icon,
            r = e.iconSpacing,
            a = void 0 === r ? "0.75rem" : r,
            u = e.command,
            l = e.commandSpacing,
            s = void 0 === l ? "0.75rem" : l,
            c = e.children,
            d = z(I(e, $), n),
            f =
              t || u
                ? i.createElement(
                    "span",
                    { style: { pointerEvents: "none", flex: 1 } },
                    c
                  )
                : c
          return i.createElement(
            ne,
            w({}, d, {
              className: (0, o.cx)("chakra-menu__menuitem", d.className)
            }),
            t && i.createElement(ue, { fontSize: "0.8em", marginEnd: a }, t),
            f,
            u && i.createElement(ie, { marginStart: s }, u)
          )
        })
      o.Ts && (te.displayName = "MenuItem")
      var re = function (e) {
          return i.createElement(
            "svg",
            w({ viewBox: "0 0 14 14", width: "1em", height: "1em" }, e),
            i.createElement("polygon", {
              fill: "currentColor",
              points:
                "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
            })
          )
        },
        oe = (0, r.Gp)(function (e, n) {
          var t = e.icon,
            r = e.iconSpacing,
            a = void 0 === r ? "0.75rem" : r,
            u = I(e, q),
            l = (function (e, n) {
              void 0 === e && (e = {}), void 0 === n && (n = null)
              var t = e,
                r = t.type,
                o = void 0 === r ? "radio" : r,
                a = t.isChecked
              return w({}, z(I(t, S), n), {
                role: "menuitem" + o,
                "aria-checked": a
              })
            })(u, n)
          return i.createElement(
            ne,
            w({}, l, {
              className: (0, o.cx)("chakra-menu__menuitem-option", u.className)
            }),
            null !== t &&
              i.createElement(
                ue,
                {
                  fontSize: "0.8em",
                  marginEnd: a,
                  opacity: e.isChecked ? 1 : 0
                },
                t || i.createElement(re, null)
              ),
            i.createElement("span", { style: { flex: 1 } }, l.children)
          )
        })
      ;(oe.id = "MenuItemOption"), o.Ts && (oe.displayName = "MenuItemOption")
      o.Ts
      var ae = (0, r.Gp)(function (e, n) {
        var t = e.title,
          a = e.children,
          u = e.className,
          l = I(e, W),
          s = (0, o.cx)("chakra-menu__group__title", u),
          c = (0, r.yK)()
        return i.createElement(
          "div",
          { ref: n, className: "chakra-menu__group", role: "group" },
          t &&
            i.createElement(
              r.m$.p,
              w({ className: s }, l, { __css: c.groupTitle }),
              t
            ),
          a
        )
      })
      o.Ts && (ae.displayName = "MenuGroup")
      var ie = (0, r.Gp)(function (e, n) {
        var t = (0, r.yK)()
        return i.createElement(
          r.m$.span,
          w({ ref: n }, e, {
            __css: t.command,
            className: "chakra-menu__command"
          })
        )
      })
      o.Ts && (ie.displayName = "MenuCommand")
      var ue = function (e) {
        var n = e.className,
          t = e.children,
          a = I(e, H),
          u = i.Children.only(t),
          l = i.isValidElement(u)
            ? i.cloneElement(u, {
                focusable: "false",
                "aria-hidden": !0,
                className: (0, o.cx)("chakra-menu__icon", u.props.className)
              })
            : null,
          s = (0, o.cx)("chakra-menu__icon-wrapper", n)
        return i.createElement(
          r.m$.span,
          w({ className: s }, a, { __css: { flexShrink: 0 } }),
          l
        )
      }
      o.Ts && (ue.displayName = "MenuIcon")
      o.Ts
    },
    2700: function (e, n, t) {
      "use strict"
      t.d(n, {
        SD: function () {
          return v
        },
        Sn: function () {
          return c
        },
        Vp: function () {
          return s
        }
      })
      var r = t(64737),
        o = t(78042),
        a = t(63949),
        i = t(67294)
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          u.apply(this, arguments)
        )
      }
      var l = ["isDisabled", "children"],
        s = (0, o.Gp)(function (e, n) {
          var t = (0, o.jC)("Tag", e),
            r = (0, o.Lr)(e),
            a = u(
              {
                display: "inline-flex",
                verticalAlign: "top",
                alignItems: "center",
                maxWidth: "100%"
              },
              t.container
            )
          return i.createElement(
            o.Fo,
            { value: t },
            i.createElement(o.m$.span, u({ ref: n }, r, { __css: a }))
          )
        })
      a.Ts && (s.displayName = "Tag")
      var c = (0, o.Gp)(function (e, n) {
        var t = (0, o.yK)()
        return i.createElement(
          o.m$.span,
          u({ ref: n, isTruncated: !0 }, e, { __css: t.label })
        )
      })
      a.Ts && (c.displayName = "TagLabel")
      var d = (0, o.Gp)(function (e, n) {
        return i.createElement(
          r.JO,
          u({ ref: n, verticalAlign: "top", marginEnd: "0.5rem" }, e)
        )
      })
      a.Ts && (d.displayName = "TagLeftIcon")
      var f = (0, o.Gp)(function (e, n) {
        return i.createElement(
          r.JO,
          u({ ref: n, verticalAlign: "top", marginStart: "0.5rem" }, e)
        )
      })
      a.Ts && (f.displayName = "TagRightIcon")
      var p = function (e) {
        return i.createElement(
          r.JO,
          u({ verticalAlign: "inherit", viewBox: "0 0 512 512" }, e),
          i.createElement("path", {
            fill: "currentColor",
            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
          })
        )
      }
      a.Ts && (p.displayName = "TagCloseIcon")
      var v = function (e) {
        var n = e.isDisabled,
          t = e.children,
          r = (function (e, n) {
            if (null == e) return {}
            var t,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++)
              (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t])
            return o
          })(e, l),
          a = u(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "0"
            },
            (0, o.yK)().closeButton
          )
        return i.createElement(
          o.m$.button,
          u({ "aria-label": "close" }, r, {
            type: "button",
            disabled: n,
            __css: a
          }),
          t || i.createElement(p, null)
        )
      }
      a.Ts && (v.displayName = "TagCloseButton")
    },
    32323: function (e, n, t) {
      "use strict"
      var r = t(95318),
        o = r(t(59713)),
        a = r(t(50008))
      function i(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function u(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                ;(0, o.default)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                )
              })
        }
        return e
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e, n) {
          var t = l.default,
            r = {
              loading: function (e) {
                e.error, e.isLoading
                return e.pastDelay, null
              }
            }
          e instanceof Promise
            ? (r.loader = function () {
                return e
              })
            : "function" === typeof e
            ? (r.loader = e)
            : "object" === (0, a.default)(e) && (r = u(u({}, r), e))
          var o = (r = u(u({}, r), n))
          if (o.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (o.suspense) return t(o)
          r.loadableGenerated &&
            delete (r = u(u({}, r), r.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, c(t, r)
            delete r.ssr
          }
          return t(r)
        }),
        (n.noSSR = c)
      s(t(67294))
      var l = s(t(82271))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, n) {
        return delete n.webpack, delete n.modules, e(n)
      }
      ;("function" === typeof n.default ||
        ("object" === (0, a.default)(n.default) && null !== n.default)) &&
        (Object.assign(n.default, n), (e.exports = n.default))
    },
    65066: function (e, n, t) {
      "use strict"
      var r
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LoadableContext = void 0)
      var o = (
        (r = t(67294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null)
      n.LoadableContext = o
    },
    82271: function (e, n, t) {
      "use strict"
      var r = t(95318),
        o = r(t(34575)),
        a = r(t(93913)),
        i = r(t(59713))
      function u(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? u(Object(t), !0).forEach(function (n) {
                ;(0, i.default)(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                )
              })
        }
        return e
      }
      function s(e, n) {
        var t =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, n) {
              if (!e) return
              if ("string" === typeof e) return c(e, n)
              var t = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === t && e.constructor && (t = e.constructor.name)
              if ("Map" === t || "Set" === t) return Array.from(e)
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return c(e, n)
            })(e)) ||
            (n && e && "number" === typeof e.length)
          ) {
            t && (e = t)
            var r = 0,
              o = function () {}
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var a,
          i = !0,
          u = !1
        return {
          s: function () {
            t = t.call(e)
          },
          n: function () {
            var e = t.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(u = !0), (a = e)
          },
          f: function () {
            try {
              i || null == t.return || t.return()
            } finally {
              if (u) throw a
            }
          }
        }
      }
      function c(e, n) {
        ;(null == n || n > e.length) && (n = e.length)
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t]
        return r
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0)
      var d,
        f = (d = t(67294)) && d.__esModule ? d : { default: d },
        p = t(82021),
        v = t(65066)
      var m = [],
        b = [],
        y = !1
      function h(e) {
        var n = e(),
          t = { loading: !0, loaded: null, error: null }
        return (
          (t.promise = n
            .then(function (e) {
              return (t.loading = !1), (t.loaded = e), e
            })
            .catch(function (e) {
              throw ((t.loading = !1), (t.error = e), e)
            })),
          t
        )
      }
      var O = (function () {
        function e(n, t) {
          ;(0, o.default)(this, e),
            (this._loadFn = n),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        return (
          (0, a.default)(e, [
            {
              key: "promise",
              value: function () {
                return this._res.promise
              }
            },
            {
              key: "retry",
              value: function () {
                var e = this
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 })
                var n = this._res,
                  t = this._opts
                n.loading &&
                  ("number" === typeof t.delay &&
                    (0 === t.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 })
                        }, t.delay))),
                  "number" === typeof t.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 })
                    }, t.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts()
                    })
                    .catch(function (n) {
                      e._update({}), e._clearTimeouts()
                    }),
                  this._update({})
              }
            },
            {
              key: "_update",
              value: function (e) {
                ;(this._state = l(
                  l({}, this._state),
                  {},
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e()
                  })
              }
            },
            {
              key: "_clearTimeouts",
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout)
              }
            },
            {
              key: "getCurrentValue",
              value: function () {
                return this._state
              }
            },
            {
              key: "subscribe",
              value: function (e) {
                var n = this
                return (
                  this._callbacks.add(e),
                  function () {
                    n._callbacks.delete(e)
                  }
                )
              }
            }
          ]),
          e
        )
      })()
      function g(e) {
        return (function (e, n) {
          var t = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1
            },
            n
          )
          t.suspense && (t.lazy = f.default.lazy(t.loader))
          var r = null
          function o() {
            if (!r) {
              var n = new O(e, t)
              r = {
                getCurrentValue: n.getCurrentValue.bind(n),
                subscribe: n.subscribe.bind(n),
                retry: n.retry.bind(n),
                promise: n.promise.bind(n)
              }
            }
            return r.promise()
          }
          if (!y && !t.suspense) {
            var a = t.webpack ? t.webpack() : t.modules
            a &&
              b.push(function (e) {
                var n,
                  t = s(a)
                try {
                  for (t.s(); !(n = t.n()).done; ) {
                    var r = n.value
                    if (-1 !== e.indexOf(r)) return o()
                  }
                } catch (i) {
                  t.e(i)
                } finally {
                  t.f()
                }
              })
          }
          var i = t.suspense
            ? function (e, n) {
                return f.default.createElement(
                  t.lazy,
                  l(l({}, e), {}, { ref: n })
                )
              }
            : function (e, n) {
                o()
                var a = f.default.useContext(v.LoadableContext),
                  i = p.useSubscription(r)
                return (
                  f.default.useImperativeHandle(
                    n,
                    function () {
                      return { retry: r.retry }
                    },
                    []
                  ),
                  a &&
                    Array.isArray(t.modules) &&
                    t.modules.forEach(function (e) {
                      a(e)
                    }),
                  f.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? f.default.createElement(t.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry
                          })
                        : i.loaded
                        ? f.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e
                            })(i.loaded),
                            e
                          )
                        : null
                    },
                    [e, i]
                  )
                )
              }
          return (
            (i.preload = function () {
              return !t.suspense && o()
            }),
            (i.displayName = "LoadableComponent"),
            f.default.forwardRef(i)
          )
        })(h, e)
      }
      function _(e, n) {
        for (var t = []; e.length; ) {
          var r = e.pop()
          t.push(r(n))
        }
        return Promise.all(t).then(function () {
          if (e.length) return _(e, n)
        })
      }
      ;(g.preloadAll = function () {
        return new Promise(function (e, n) {
          _(m).then(e, n)
        })
      }),
        (g.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (n) {
            var t = function () {
              return (y = !0), n()
            }
            _(b, e).then(t, t)
          })
        }),
        (window.__NEXT_PRELOADREADY = g.preloadReady)
      var E = g
      n.default = E
    },
    82021: function (e, n, t) {
      !(function () {
        "use strict"
        var n = {
            800: function (e) {
              var n = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable
              function o(e) {
                if (null === e || void 0 === e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  )
                return Object(e)
              }
              e.exports = (function () {
                try {
                  if (!Object.assign) return !1
                  var e = new String("abc")
                  if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                    return !1
                  for (var n = {}, t = 0; t < 10; t++)
                    n["_" + String.fromCharCode(t)] = t
                  var r = Object.getOwnPropertyNames(n).map(function (e) {
                    return n[e]
                  })
                  if ("0123456789" !== r.join("")) return !1
                  var o = {}
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                      o[e] = e
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, o)).join("")
                  )
                } catch (e) {
                  return !1
                }
              })()
                ? Object.assign
                : function (e, a) {
                    for (var i, u, l = o(e), s = 1; s < arguments.length; s++) {
                      for (var c in (i = Object(arguments[s])))
                        t.call(i, c) && (l[c] = i[c])
                      if (n) {
                        u = n(i)
                        for (var d = 0; d < u.length; d++)
                          r.call(i, u[d]) && (l[u[d]] = i[u[d]])
                      }
                    }
                    return l
                  }
            },
            569: function (e, n, t) {
              0
            },
            403: function (e, n, t) {
              var r = t(800),
                o = t(522)
              n.useSubscription = function (e) {
                var n = e.getCurrentValue,
                  t = e.subscribe,
                  a = o.useState(function () {
                    return { getCurrentValue: n, subscribe: t, value: n() }
                  })
                e = a[0]
                var i = a[1]
                return (
                  (a = e.value),
                  (e.getCurrentValue === n && e.subscribe === t) ||
                    ((a = n()),
                    i({ getCurrentValue: n, subscribe: t, value: a })),
                  o.useDebugValue(a),
                  o.useEffect(
                    function () {
                      function e() {
                        if (!o) {
                          var e = n()
                          i(function (o) {
                            return o.getCurrentValue !== n ||
                              o.subscribe !== t ||
                              o.value === e
                              ? o
                              : r({}, o, { value: e })
                          })
                        }
                      }
                      var o = !1,
                        a = t(e)
                      return (
                        e(),
                        function () {
                          ;(o = !0), a()
                        }
                      )
                    },
                    [n, t]
                  ),
                  a
                )
              }
            },
            138: function (e, n, t) {
              e.exports = t(403)
            },
            522: function (e) {
              e.exports = t(67294)
            }
          },
          r = {}
        function o(e) {
          var t = r[e]
          if (void 0 !== t) return t.exports
          var a = (r[e] = { exports: {} }),
            i = !0
          try {
            n[e](a, a.exports, o), (i = !1)
          } finally {
            i && delete r[e]
          }
          return a.exports
        }
        o.ab = "//"
        var a = o(138)
        e.exports = a
      })()
    },
    5152: function (e, n, t) {
      e.exports = t(32323)
    }
  }
])
