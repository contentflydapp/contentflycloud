"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7386],
  {
    27386: function (e, n, t) {
      t.d(n, {
        UQ: function () {
          return U
        },
        KF: function () {
          return B
        },
        XE: function () {
          return z
        },
        Qd: function () {
          return V
        },
        Hk: function () {
          return Z
        }
      })
      var r = t(64737),
        o = t(78042),
        i = t(91204),
        a = t(63949),
        s = t(67294)
      function u(e, n) {
        if (null != e)
          if ((0, a.mf)(e)) e(n)
          else
            try {
              e.current = n
            } catch (t) {
              throw new Error(
                "Cannot assign value '" + n + "' to ref '" + e + "'"
              )
            }
      }
      function c() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t]
        return function (e) {
          n.forEach(function (n) {
            return u(n, e)
          })
        }
      }
      function d(e) {
        void 0 === e && (e = {})
        var n = e,
          t = n.strict,
          r = void 0 === t || t,
          o = n.errorMessage,
          i =
            void 0 === o
              ? "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"
              : o,
          a = n.name,
          u = s.createContext(void 0)
        return (
          (u.displayName = a),
          [
            u.Provider,
            function e() {
              var n = s.useContext(u)
              if (!n && r) {
                var t = new Error(i)
                throw (
                  ((t.name = "ContextError"),
                  null == Error.captureStackTrace ||
                    Error.captureStackTrace(t, e),
                  t)
                )
              }
              return n
            },
            u
          ]
        )
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          l.apply(this, arguments)
        )
      }
      function f(e) {
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
      function v(e, n, t) {
        var r = e + 1
        return t && r >= n && (r = 0), r
      }
      function m(e, n, t) {
        var r = e - 1
        return t && r < 0 && (r = n), r
      }
      var p = "undefined" !== typeof window ? s.useLayoutEffect : s.useEffect,
        h = function () {
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
              var t = f(Array.from(e.descendants.keys()))
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
              var r = v(n, e.count(), t)
              return e.item(r)
            }),
            (this.nextEnabled = function (n, t) {
              void 0 === t && (t = !0)
              var r = e.item(n)
              if (r) {
                var o = v(e.enabledIndexOf(r.node), e.enabledCount(), t)
                return e.enabledItem(o)
              }
            }),
            (this.prev = function (n, t) {
              void 0 === t && (t = !0)
              var r = m(n, e.count() - 1, t)
              return e.item(r)
            }),
            (this.prevEnabled = function (n, t) {
              void 0 === t && (t = !0)
              var r = e.item(n)
              if (r) {
                var o = m(e.enabledIndexOf(r.node), e.enabledCount() - 1, t)
                return e.enabledItem(o)
              }
            }),
            (this.registerNode = function (n, t) {
              if (n && !e.descendants.has(n)) {
                var r = f(Array.from(e.descendants.keys()).concat(n))
                null != t && t.disabled && (t.disabled = !!t.disabled)
                var o = l({ node: n, index: -1 }, t)
                e.descendants.set(n, o), e.assignIndex(r)
              }
            })
        }
      var b = d({
          name: "DescendantsProvider",
          errorMessage:
            "useDescendantsContext must be used within DescendantsProvider"
        }),
        g = b[0],
        x = b[1]
      var N = t(88523)
      function E() {
        return (
          (E =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n]
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
              }
              return e
            }),
          E.apply(this, arguments)
        )
      }
      function I(e, n) {
        if (null == e) return {}
        var t,
          r,
          o = {},
          i = Object.keys(e)
        for (r = 0; r < i.length; r++)
          (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t])
        return o
      }
      var O = [
          "onChange",
          "defaultIndex",
          "index",
          "allowMultiple",
          "allowToggle"
        ],
        y = ["isDisabled", "isFocusable", "id"],
        C = [
          g,
          function () {
            return x()
          },
          function () {
            return (function () {
              var e = (0, s.useRef)(new h())
              return (
                p(function () {
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
              var n = x(),
                t = (0, s.useState)(-1),
                r = t[0],
                o = t[1],
                i = (0, s.useRef)(null)
              p(function () {
                return function () {
                  i.current && n.unregister(i.current)
                }
              }, []),
                p(function () {
                  if (i.current) {
                    var e = Number(i.current.dataset.index)
                    r == e || Number.isNaN(e) || o(e)
                  }
                })
              var a = e ? n.register(e) : n.register
              return {
                descendants: n,
                index: r,
                enabledIndex: n.enabledIndexOf(i.current),
                register: c(a, i)
              }
            })(e)
          }
        ],
        w = C[0],
        _ = C[2],
        T = C[3]
      function P(e) {
        var n = e.onChange,
          t = e.defaultIndex,
          r = e.index,
          o = e.allowMultiple,
          i = e.allowToggle,
          u = I(e, O)
        !(function (e) {
          var n = e.index || e.defaultIndex,
            t = !(0, a.o8)(n) && !(0, a.kJ)(n) && e.allowMultiple
          ;(0, a.ZK)({
            condition: !!t,
            message:
              "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " +
              typeof n +
              ","
          })
        })(e),
          (function (e) {
            ;(0, a.ZK)({
              condition: !(!e.allowMultiple || !e.allowToggle),
              message:
                "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
            })
          })(e)
        var c = _(),
          d = (0, s.useState)(-1),
          l = d[0],
          f = d[1]
        ;(0, N.zq)(function () {
          f(-1)
        })
        var v = (0, N.Tx)({
            value: r,
            defaultValue: function () {
              return o ? (null != t ? t : []) : null != t ? t : -1
            },
            onChange: n
          }),
          m = v[0],
          p = v[1]
        return {
          index: m,
          setIndex: p,
          htmlProps: u,
          getAccordionItemProps: function (e) {
            var n = !1
            null !== e && (n = (0, a.kJ)(m) ? m.includes(e) : m === e)
            return {
              isOpen: n,
              onChange: function (n) {
                if (null !== e)
                  if (o && (0, a.kJ)(m)) {
                    var t = n ? (0, a.jX)(m, e) : (0, a.cl)(m, e)
                    p(t)
                  } else n ? p(e) : i && p(-1)
              }
            }
          },
          focusedIndex: l,
          setFocusedIndex: f,
          descendants: c
        }
      }
      var D = d({
          name: "AccordionContext",
          errorMessage:
            "useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"
        }),
        M = D[0],
        k = D[1]
      function A(e) {
        var n = e.isDisabled,
          t = e.isFocusable,
          r = e.id,
          o = I(e, y),
          i = k(),
          u = i.getAccordionItemProps,
          d = i.setFocusedIndex,
          l = (0, s.useRef)(null),
          f = (0, N.ZS)(r, "accordion-button", "accordion-panel"),
          v = f[0],
          m = f[1]
        !(function (e) {
          ;(0, a.ZK)({
            condition: !(!e.isFocusable || e.isDisabled),
            message:
              "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "
          })
        })(e)
        var p = T({ disabled: n && !t }),
          h = p.register,
          b = p.index,
          g = p.descendants,
          x = u(-1 === b ? null : b),
          O = x.isOpen,
          C = x.onChange
        !(function (e) {
          ;(0, a.ZK)({
            condition: e.isOpen && !!e.isDisabled,
            message: "Cannot open a disabled accordion item"
          })
        })({ isOpen: O, isDisabled: n })
        var w = (0, s.useCallback)(
            function () {
              null == C || C(!O), d(b)
            },
            [b, d, O, C]
          ),
          _ = (0, s.useCallback)(
            function (e) {
              var n = {
                ArrowDown: function () {
                  var e = g.nextEnabled(b)
                  e && (0, a.T_)(e.node)
                },
                ArrowUp: function () {
                  var e = g.prevEnabled(b)
                  e && (0, a.T_)(e.node)
                },
                Home: function () {
                  var e = g.firstEnabled()
                  e && (0, a.T_)(e.node)
                },
                End: function () {
                  var e = g.lastEnabled()
                  e && (0, a.T_)(e.node)
                }
              }[(0, a.uh)(e)]
              n && (e.preventDefault(), n(e))
            },
            [g, b]
          ),
          P = (0, s.useCallback)(
            function () {
              d(b)
            },
            [d, b]
          ),
          D = (0, s.useCallback)(
            function (e, t) {
              return (
                void 0 === e && (e = {}),
                void 0 === t && (t = null),
                E({}, e, {
                  type: "button",
                  ref: c(h, l, t),
                  id: v,
                  disabled: !!n,
                  "aria-expanded": !!O,
                  "aria-controls": m,
                  onClick: (0, a.v0)(e.onClick, w),
                  onFocus: (0, a.v0)(e.onFocus, P),
                  onKeyDown: (0, a.v0)(e.onKeyDown, _)
                })
              )
            },
            [v, n, O, w, P, _, m, h]
          ),
          M = (0, s.useCallback)(
            function (e, n) {
              return (
                void 0 === e && (e = {}),
                void 0 === n && (n = null),
                E({}, e, {
                  ref: n,
                  role: "region",
                  id: m,
                  "aria-labelledby": v,
                  hidden: !O
                })
              )
            },
            [v, O, m]
          )
        return {
          isOpen: O,
          isDisabled: n,
          isFocusable: t,
          onOpen: function () {
            null == C || C(!0)
          },
          onClose: function () {
            null == C || C(!1)
          },
          getButtonProps: D,
          getPanelProps: M,
          htmlProps: o
        }
      }
      var S = ["children", "reduceMotion"],
        F = ["htmlProps", "descendants"],
        K = ["htmlProps"],
        U = (0, o.Gp)(function (e, n) {
          var t = e.children,
            r = e.reduceMotion,
            i = I(e, S),
            u = (0, o.jC)("Accordion", i),
            c = P((0, o.Lr)(i)),
            d = c.htmlProps,
            l = c.descendants,
            f = I(c, F),
            v = s.useMemo(
              function () {
                return E({}, f, { reduceMotion: !!r })
              },
              [f, r]
            )
          return s.createElement(
            w,
            { value: l },
            s.createElement(
              M,
              { value: v },
              s.createElement(
                o.Fo,
                { value: u },
                s.createElement(
                  o.m$.div,
                  E({ ref: n }, d, {
                    className: (0, a.cx)("chakra-accordion", i.className),
                    __css: u.root
                  }),
                  t
                )
              )
            )
          )
        })
      a.Ts && (U.displayName = "Accordion")
      var j = d({
          name: "AccordionItemContext",
          errorMessage:
            "useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "
        }),
        L = j[0],
        G = j[1],
        V = (0, o.Gp)(function (e, n) {
          var t = e.children,
            r = e.className,
            i = A(e),
            u = i.htmlProps,
            c = I(i, K),
            d = E({}, (0, o.yK)().container, { overflowAnchor: "none" }),
            l = s.useMemo(
              function () {
                return c
              },
              [c]
            )
          return s.createElement(
            L,
            { value: l },
            s.createElement(
              o.m$.div,
              E({ ref: n }, u, {
                className: (0, a.cx)("chakra-accordion__item", r),
                __css: d
              }),
              (0, a.Pu)(t, {
                isExpanded: !!c.isOpen,
                isDisabled: !!c.isDisabled
              })
            )
          )
        })
      a.Ts && (V.displayName = "AccordionItem")
      var B = (0, o.Gp)(function (e, n) {
        var t = (0, G().getButtonProps)(e, n),
          r = E(
            {
              display: "flex",
              alignItems: "center",
              width: "100%",
              outline: 0
            },
            (0, o.yK)().button
          )
        return s.createElement(
          o.m$.button,
          E({}, t, {
            className: (0, a.cx)("chakra-accordion__button", e.className),
            __css: r
          })
        )
      })
      a.Ts && (B.displayName = "AccordionButton")
      var Z = (0, o.Gp)(function (e, n) {
        var t = k().reduceMotion,
          r = G(),
          u = r.getPanelProps,
          c = r.isOpen,
          d = u(e, n),
          l = (0, a.cx)("chakra-accordion__panel", e.className),
          f = (0, o.yK)()
        t || delete d.hidden
        var v = s.createElement(
          o.m$.div,
          E({}, d, { __css: f.panel, className: l })
        )
        return t ? v : s.createElement(i.UO, { in: c }, v)
      })
      a.Ts && (Z.displayName = "AccordionPanel")
      var z = function (e) {
        var n = G(),
          t = n.isOpen,
          i = n.isDisabled,
          u = k().reduceMotion,
          c = (0, a.cx)("chakra-accordion__icon", e.className),
          d = E(
            {
              opacity: i ? 0.4 : 1,
              transform: t ? "rotate(-180deg)" : void 0,
              transition: u ? void 0 : "transform 0.2s",
              transformOrigin: "center"
            },
            (0, o.yK)().icon
          )
        return s.createElement(
          r.JO,
          E(
            { viewBox: "0 0 24 24", "aria-hidden": !0, className: c, __css: d },
            e
          ),
          s.createElement("path", {
            fill: "currentColor",
            d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
          })
        )
      }
      a.Ts && (z.displayName = "AccordionIcon")
    }
  }
])
