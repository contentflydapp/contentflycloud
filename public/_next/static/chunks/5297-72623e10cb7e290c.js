"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5297],
  {
    70655: function (t, e, n) {
      n.d(e, {
        CR: function () {
          return c
        },
        Jh: function () {
          return u
        },
        XA: function () {
          return l
        },
        ZT: function () {
          return i
        },
        _T: function () {
          return a
        },
        ev: function () {
          return d
        },
        mG: function () {
          return s
        },
        pi: function () {
          return o
        }
      })
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }),
          r(t, e)
        )
      }
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          )
        function n() {
          this.constructor = t
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()))
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              return t
            }),
          o.apply(this, arguments)
        )
      }
      function a(t, e) {
        var n = {}
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r])
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]])
        }
        return n
      }
      function s(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              u(r.next(t))
            } catch (e) {
              o(e)
            }
          }
          function s(t) {
            try {
              u(r.throw(t))
            } catch (e) {
              o(e)
            }
          }
          function u(t) {
            var e
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e)
                    })).then(a, s)
          }
          u((r = r.apply(t, e || [])).next())
        })
      }
      function u(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1]
              return i[1]
            },
            trys: [],
            ops: []
          }
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this
            }),
          o
        )
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.")
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o
                      break
                    case 4:
                      return a.label++, { value: o[1], done: !1 }
                    case 5:
                      a.label++, (r = o[1]), (o = [0])
                      continue
                    case 7:
                      ;(o = a.ops.pop()), a.trys.pop()
                      continue
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0
                        continue
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1]
                        break
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        ;(a.label = i[1]), (i = o)
                        break
                      }
                      if (i && a.label < i[2]) {
                        ;(a.label = i[2]), a.ops.push(o)
                        break
                      }
                      i[2] && a.ops.pop(), a.trys.pop()
                      continue
                  }
                  o = e.call(t, a)
                } catch (s) {
                  ;(o = [6, s]), (r = 0)
                } finally {
                  n = i = 0
                }
              if (5 & o[0]) throw o[1]
              return { value: o[0] ? o[1] : void 0, done: !0 }
            })([o, s])
          }
        }
      }
      Object.create
      function l(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0
        if (n) return n.call(t)
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              )
            }
          }
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        )
      }
      function c(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator]
        if (!n) return t
        var r,
          i,
          o = n.call(t),
          a = []
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value)
        } catch (s) {
          i = { error: s }
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
        return a
      }
      function d(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]))
        return t.concat(r || Array.prototype.slice.call(e))
      }
      Object.create
    },
    21190: function (t, e, n) {
      n.d(e, {
        M: function () {
          return m
        }
      })
      var r = n(70655),
        i = n(67294),
        o = n(89073),
        a = n(58868)
      function s() {
        var t = (0, i.useRef)(!1)
        return (
          (0, a.L)(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, []),
          t
        )
      }
      var u = n(240),
        l = n(96681),
        c = n(76316),
        d = function (t) {
          var e = t.children,
            n = t.initial,
            o = t.isPresent,
            a = t.onExitComplete,
            s = t.custom,
            d = t.presenceAffectsLayout,
            p = (0, l.h)(f),
            v = (0, c.M)(),
            h = (0, i.useMemo)(
              function () {
                return {
                  id: v,
                  initial: n,
                  isPresent: o,
                  custom: s,
                  onExitComplete: function (t) {
                    var e, n
                    p.set(t, !0)
                    try {
                      for (
                        var i = (0, r.XA)(p.values()), o = i.next();
                        !o.done;
                        o = i.next()
                      ) {
                        if (!o.value) return
                      }
                    } catch (s) {
                      e = { error: s }
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i)
                      } finally {
                        if (e) throw e.error
                      }
                    }
                    null === a || void 0 === a || a()
                  },
                  register: function (t) {
                    return (
                      p.set(t, !1),
                      function () {
                        return p.delete(t)
                      }
                    )
                  }
                }
              },
              d ? void 0 : [o]
            )
          return (
            (0, i.useMemo)(
              function () {
                p.forEach(function (t, e) {
                  return p.set(e, !1)
                })
              },
              [o]
            ),
            i.useEffect(
              function () {
                !o && !p.size && (null === a || void 0 === a || a())
              },
              [o]
            ),
            i.createElement(u.O.Provider, { value: h }, e)
          )
        }
      function f() {
        return new Map()
      }
      var p = n(25364),
        v = n(65411),
        h = function (t) {
          return t.key || ""
        }
      var m = function (t) {
        var e = t.children,
          n = t.custom,
          u = t.initial,
          l = void 0 === u || u,
          c = t.onExitComplete,
          f = t.exitBeforeEnter,
          m = t.presenceAffectsLayout,
          y = void 0 === m || m,
          g = (0, r.CR)(
            (function () {
              var t = s(),
                e = (0, r.CR)((0, i.useState)(0), 2),
                n = e[0],
                a = e[1],
                u = (0, i.useCallback)(
                  function () {
                    t.current && a(n + 1)
                  },
                  [n]
                )
              return [
                (0, i.useCallback)(
                  function () {
                    return o.ZP.postRender(u)
                  },
                  [u]
                ),
                n
              ]
            })(),
            1
          ),
          x = g[0],
          b = (0, i.useContext)(p.p).forceRender
        b && (x = b)
        var E = s(),
          w = (function (t) {
            var e = []
            return (
              i.Children.forEach(t, function (t) {
                ;(0, i.isValidElement)(t) && e.push(t)
              }),
              e
            )
          })(e),
          P = w,
          T = new Set(),
          S = (0, i.useRef)(P),
          A = (0, i.useRef)(new Map()).current,
          C = (0, i.useRef)(!0)
        if (
          ((0, a.L)(function () {
            ;(C.current = !1),
              (function (t, e) {
                t.forEach(function (t) {
                  var n = h(t)
                  e.set(n, t)
                })
              })(w, A),
              (S.current = P)
          }),
          (0, v.z)(function () {
            ;(C.current = !0), A.clear(), T.clear()
          }),
          C.current)
        )
          return i.createElement(
            i.Fragment,
            null,
            P.map(function (t) {
              return i.createElement(
                d,
                {
                  key: h(t),
                  isPresent: !0,
                  initial: !!l && void 0,
                  presenceAffectsLayout: y
                },
                t
              )
            })
          )
        P = (0, r.ev)([], (0, r.CR)(P), !1)
        for (
          var V = S.current.map(h), R = w.map(h), M = V.length, L = 0;
          L < M;
          L++
        ) {
          var O = V[L]
          ;-1 === R.indexOf(O) && T.add(O)
        }
        return (
          f && T.size && (P = []),
          T.forEach(function (t) {
            if (-1 === R.indexOf(t)) {
              var e = A.get(t)
              if (e) {
                var r = V.indexOf(t)
                P.splice(
                  r,
                  0,
                  i.createElement(
                    d,
                    {
                      key: h(e),
                      isPresent: !1,
                      onExitComplete: function () {
                        A.delete(t), T.delete(t)
                        var e = S.current.findIndex(function (e) {
                          return e.key === t
                        })
                        if ((S.current.splice(e, 1), !T.size)) {
                          if (((S.current = w), !1 === E.current)) return
                          x(), c && c()
                        }
                      },
                      custom: n,
                      presenceAffectsLayout: y
                    },
                    e
                  )
                )
              }
            }
          }),
          (P = P.map(function (t) {
            var e = t.key
            return T.has(e)
              ? t
              : i.createElement(
                  d,
                  { key: h(t), isPresent: !0, presenceAffectsLayout: y },
                  t
                )
          })),
          i.createElement(
            i.Fragment,
            null,
            T.size
              ? P
              : P.map(function (t) {
                  return (0, i.cloneElement)(t)
                })
          )
        )
      }
    },
    15947: function (t, e, n) {
      n.d(e, {
        hO: function () {
          return s
        },
        oO: function () {
          return a
        }
      })
      var r = n(67294),
        i = n(240),
        o = n(76316)
      function a() {
        var t = (0, r.useContext)(i.O)
        if (null === t) return [!0, null]
        var e = t.isPresent,
          n = t.onExitComplete,
          a = t.register,
          s = (0, o.M)()
        ;(0, r.useEffect)(function () {
          return a(s)
        }, [])
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(s)
              }
            ]
          : [!0]
      }
      function s() {
        return null === (t = (0, r.useContext)(i.O)) || t.isPresent
        var t
      }
    },
    25364: function (t, e, n) {
      n.d(e, {
        p: function () {
          return r
        }
      })
      var r = (0, n(67294).createContext)({})
    },
    240: function (t, e, n) {
      n.d(e, {
        O: function () {
          return r
        }
      })
      var r = (0, n(67294).createContext)(null)
    },
    94930: function (t, e, n) {
      n.d(e, {
        E: function () {
          return ga
        }
      })
      var r = n(70655),
        i = n(67294),
        o = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t]
              })
            }
          }
        },
        a = {
          measureLayout: o(["layout", "layoutId", "drag"]),
          animation: o([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView"
          ]),
          exit: o(["exit"]),
          drag: o(["drag", "dragControls"]),
          focus: o(["whileFocus"]),
          hover: o(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: o(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: o(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: o(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
      var s = (0, i.createContext)({ strict: !1 }),
        u = Object.keys(a),
        l = u.length
      var c = (0, i.createContext)({
          transformPagePoint: function (t) {
            return t
          },
          isStatic: !1,
          reducedMotion: "never"
        }),
        d = (0, i.createContext)({})
      var f = n(240),
        p = n(58868),
        v = n(11741),
        h = { current: null },
        m = !1
      function y() {
        return (
          !m &&
            (function () {
              if (((m = !0), v.j))
                if (window.matchMedia) {
                  var t = window.matchMedia("(prefers-reduced-motion)"),
                    e = function () {
                      return (h.current = t.matches)
                    }
                  t.addListener(e), e()
                } else h.current = !1
            })(),
          (0, r.CR)((0, i.useState)(h.current), 1)[0]
        )
      }
      function g(t, e, n, r) {
        var o = (0, i.useContext)(s),
          a = (0, i.useContext)(d).visualElement,
          u = (0, i.useContext)(f.O),
          l = (function () {
            var t = y(),
              e = (0, i.useContext)(c).reducedMotion
            return "never" !== e && ("always" === e || t)
          })(),
          v = (0, i.useRef)(void 0)
        r || (r = o.renderer),
          !v.current &&
            r &&
            (v.current = r(t, {
              visualState: e,
              parent: a,
              props: n,
              presenceId: null === u || void 0 === u ? void 0 : u.id,
              blockInitialAnimation:
                !1 === (null === u || void 0 === u ? void 0 : u.initial),
              shouldReduceMotion: l
            }))
        var h = v.current
        return (
          (0, p.L)(function () {
            null === h || void 0 === h || h.syncRender()
          }),
          (0, i.useEffect)(function () {
            var t
            null ===
              (t = null === h || void 0 === h ? void 0 : h.animationState) ||
              void 0 === t ||
              t.animateChanges()
          }),
          (0, p.L)(function () {
            return function () {
              return null === h || void 0 === h ? void 0 : h.notifyUnmount()
            }
          }, []),
          h
        )
      }
      function x(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        )
      }
      function b(t) {
        return Array.isArray(t)
      }
      function E(t) {
        return "string" === typeof t || b(t)
      }
      function w(t, e, n, r, i) {
        var o
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        )
      }
      function P(t, e, n) {
        var r = t.getProps()
        return w(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get())
              }),
              e
            )
          })(t),
          (function (t) {
            var e = {}
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity())
              }),
              e
            )
          })(t)
        )
      }
      function T(t) {
        var e
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          E(t.initial) ||
          E(t.animate) ||
          E(t.whileHover) ||
          E(t.whileDrag) ||
          E(t.whileTap) ||
          E(t.whileFocus) ||
          E(t.exit)
        )
      }
      function S(t) {
        return Boolean(T(t) || t.variants)
      }
      function A(t) {
        var e = (function (t, e) {
            if (T(t)) {
              var n = t.initial,
                r = t.animate
              return {
                initial: !1 === n || E(n) ? n : void 0,
                animate: E(r) ? r : void 0
              }
            }
            return !1 !== t.inherit ? e : {}
          })(t, (0, i.useContext)(d)),
          n = e.initial,
          r = e.animate
        return (0, i.useMemo)(
          function () {
            return { initial: n, animate: r }
          },
          [C(n), C(r)]
        )
      }
      function C(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var V = n(96681),
        R = n(89073)
      const M = (t, e, n) => -n * t + n * e + t
      function L(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      function O(t, e) {
        ;-1 === t.indexOf(e) && t.push(e)
      }
      function k(t, e) {
        var n = t.indexOf(e)
        n > -1 && t.splice(n, 1)
      }
      var D = (function () {
          function t() {
            this.subscriptions = []
          }
          return (
            (t.prototype.add = function (t) {
              var e = this
              return (
                O(this.subscriptions, t),
                function () {
                  return k(e.subscriptions, t)
                }
              )
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n)
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i]
                    o && o(t, e, n)
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0
            }),
            t
          )
        })(),
        j = (function () {
          function t(t) {
            var e,
              n = this
            ;(this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new D()),
              (this.velocityUpdateSubscribers = new D()),
              (this.renderSubscribers = new D()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t)
                var r = (0, R.$B)(),
                  i = r.delta,
                  o = r.timestamp
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  R.ZP.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current)
              }),
              (this.scheduleVelocityCheck = function () {
                return R.ZP.postRender(n.velocityCheck)
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()))
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))))
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t)
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear()
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t)
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e)
            }),
            (t.prototype.get = function () {
              return this.current
            }),
            (t.prototype.getPrevious = function () {
              return this.prev
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? L(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0
            }),
            (t.prototype.start = function (t) {
              var e = this
              return (
                this.stop(),
                new Promise(function (n) {
                  ;(e.hasAnimated = !0), (e.stopAnimation = t(n))
                }).then(function () {
                  return e.clearAnimation()
                })
              )
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation()
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }),
            t
          )
        })()
      function F(t) {
        return new j(t)
      }
      var B = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity)
      }
      const U = (t, e, n) => Math.min(Math.max(n, t), e),
        I = 0.001
      function N({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1
      }) {
        let i,
          o,
          a = 1 - e
        ;(a = U(0.05, 1, a)),
          (t = U(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = e => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = z(e, a),
                  u = Math.exp(-i)
                return I - (o / s) * u
              }),
              (o = e => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = z(Math.pow(e, 2), a)
                return ((-i(e) + I > 0 ? -1 : 1) * ((o - s) * u)) / l
              }))
            : ((i = e => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = e => Math.exp(-e * t) * (t * t * (n - e))))
        const s = (function (t, e, n) {
          let r = n
          for (let i = 1; i < 12; i++) r -= t(r) / e(r)
          return r
        })(i, o, 5 / t)
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t }
        {
          const e = Math.pow(s, 2) * r
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t
          }
        }
      }
      function z(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      const H = ["duration", "bounce"],
        Y = ["stiffness", "damping", "mass"]
      function W(t, e) {
        return e.some(e => void 0 !== t[e])
      }
      function X(t) {
        var { from: e = 0, to: n = 1, restSpeed: i = 2, restDelta: o } = t,
          a = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"])
        const s = { done: !1, value: e }
        let {
            stiffness: u,
            damping: l,
            mass: c,
            velocity: d,
            duration: f,
            isResolvedFromDuration: p
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1
              },
              t
            )
            if (!W(t, Y) && W(t, H)) {
              const n = N(t)
              ;(e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1
              })),
                (e.isResolvedFromDuration = !0)
            }
            return e
          })(a),
          v = _,
          h = _
        function m() {
          const t = d ? -d / 1e3 : 0,
            r = n - e,
            i = l / (2 * Math.sqrt(u * c)),
            a = Math.sqrt(u / c) / 1e3
          if (
            (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, 0.4)), i < 1)
          ) {
            const e = z(a, i)
            ;(v = o => {
              const s = Math.exp(-i * a * o)
              return (
                n -
                s *
                  (((t + i * a * r) / e) * Math.sin(e * o) +
                    r * Math.cos(e * o))
              )
            }),
              (h = n => {
                const o = Math.exp(-i * a * n)
                return (
                  i *
                    a *
                    o *
                    ((Math.sin(e * n) * (t + i * a * r)) / e +
                      r * Math.cos(e * n)) -
                  o *
                    (Math.cos(e * n) * (t + i * a * r) -
                      e * r * Math.sin(e * n))
                )
              })
          } else if (1 === i)
            v = e => n - Math.exp(-a * e) * (r + (t + a * r) * e)
          else {
            const e = a * Math.sqrt(i * i - 1)
            v = o => {
              const s = Math.exp(-i * a * o),
                u = Math.min(e * o, 300)
              return (
                n -
                (s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              )
            }
          }
        }
        return (
          m(),
          {
            next: t => {
              const e = v(t)
              if (p) s.done = t >= f
              else {
                const r = 1e3 * h(t),
                  a = Math.abs(r) <= i,
                  u = Math.abs(n - e) <= o
                s.done = a && u
              }
              return (s.value = s.done ? n : e), s
            },
            flipTarget: () => {
              ;(d = -d), ([e, n] = [n, e]), m()
            }
          }
        )
      }
      X.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e
      const _ = t => 0,
        Z = (t, e, n) => {
          const r = e - t
          return 0 === r ? 1 : (n - t) / r
        },
        G = (t, e) => n => Math.max(Math.min(n, e), t),
        q = t => (t % 1 ? Number(t.toFixed(5)) : t),
        $ = /(-)?([\d]*\.?[\d])+/g,
        K =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        J =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i
      function Q(t) {
        return "string" === typeof t
      }
      const tt = {
          test: t => "number" === typeof t,
          parse: parseFloat,
          transform: t => t
        },
        et = Object.assign(Object.assign({}, tt), { transform: G(0, 1) }),
        nt = Object.assign(Object.assign({}, tt), { default: 1 }),
        rt = (t, e) => n =>
          Boolean(
            (Q(n) && J.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        it = (t, e, n) => r => {
          if (!Q(r)) return r
          const [i, o, a, s] = r.match($)
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1
          }
        },
        ot = G(0, 255),
        at = Object.assign(Object.assign({}, tt), {
          transform: t => Math.round(ot(t))
        }),
        st = {
          test: rt("rgb", "red"),
          parse: it("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            at.transform(t) +
            ", " +
            at.transform(e) +
            ", " +
            at.transform(n) +
            ", " +
            q(et.transform(r)) +
            ")"
        }
      const ut = {
          test: rt("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = ""
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1
              }
            )
          },
          transform: st.transform
        },
        lt = t => ({
          test: e => Q(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        ct = lt("deg"),
        dt = lt("%"),
        ft = lt("px"),
        pt = lt("vh"),
        vt = lt("vw"),
        ht = Object.assign(Object.assign({}, dt), {
          parse: t => dt.parse(t) / 100,
          transform: t => dt.transform(100 * t)
        }),
        mt = {
          test: rt("hsl", "hue"),
          parse: it("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            dt.transform(q(e)) +
            ", " +
            dt.transform(q(n)) +
            ", " +
            q(et.transform(r)) +
            ")"
        }
      function yt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        )
      }
      function gt({ hue: t, saturation: e, lightness: n, alpha: r }) {
        ;(t /= 360), (n /= 100)
        let i = 0,
          o = 0,
          a = 0
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r
          ;(i = yt(s, r, t + 1 / 3)),
            (o = yt(s, r, t)),
            (a = yt(s, r, t - 1 / 3))
        } else i = o = a = n
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r
        }
      }
      const xt = (t, e, n) => {
          const r = t * t,
            i = e * e
          return Math.sqrt(Math.max(0, n * (i - r) + r))
        },
        bt = [ut, st, mt],
        Et = t => bt.find(e => e.test(t)),
        wt = t =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Pt = (t, e) => {
          let n = Et(t),
            r = Et(e)
          wt(t), wt(e)
          let i = n.parse(t),
            o = r.parse(e)
          n === mt && ((i = gt(i)), (n = st)),
            r === mt && ((o = gt(o)), (r = st))
          const a = Object.assign({}, i)
          return t => {
            for (const e in a) "alpha" !== e && (a[e] = xt(i[e], o[e], t))
            return (a.alpha = M(i.alpha, o.alpha, t)), n.transform(a)
          }
        },
        Tt = {
          test: t => st.test(t) || ut.test(t) || mt.test(t),
          parse: t =>
            st.test(t) ? st.parse(t) : mt.test(t) ? mt.parse(t) : ut.parse(t),
          transform: t =>
            Q(t)
              ? t
              : t.hasOwnProperty("red")
              ? st.transform(t)
              : mt.transform(t)
        },
        St = "${c}",
        At = "${n}"
      function Ct(t) {
        "number" === typeof t && (t = `${t}`)
        const e = []
        let n = 0
        const r = t.match(K)
        r &&
          ((n = r.length), (t = t.replace(K, St)), e.push(...r.map(Tt.parse)))
        const i = t.match($)
        return (
          i && ((t = t.replace($, At)), e.push(...i.map(tt.parse))),
          { values: e, numColors: n, tokenised: t }
        )
      }
      function Vt(t) {
        return Ct(t).values
      }
      function Rt(t) {
        const { values: e, numColors: n, tokenised: r } = Ct(t),
          i = e.length
        return t => {
          let e = r
          for (let r = 0; r < i; r++)
            e = e.replace(r < n ? St : At, r < n ? Tt.transform(t[r]) : q(t[r]))
          return e
        }
      }
      const Mt = t => ("number" === typeof t ? 0 : t)
      const Lt = {
          test: function (t) {
            var e, n, r, i
            return (
              isNaN(t) &&
              Q(t) &&
              (null !==
                (n =
                  null === (e = t.match($)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(K)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            )
          },
          parse: Vt,
          createTransformer: Rt,
          getAnimatableNone: function (t) {
            const e = Vt(t)
            return Rt(t)(e.map(Mt))
          }
        },
        Ot = t => "number" === typeof t,
        kt = (t, e) => n => e(t(n)),
        Dt = (...t) => t.reduce(kt)
      function jt(t, e) {
        return Ot(t) ? n => M(t, e, n) : Tt.test(t) ? Pt(t, e) : It(t, e)
      }
      const Ft = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => jt(t, e[n]))
          return t => {
            for (let e = 0; e < r; e++) n[e] = i[e](t)
            return n
          }
        },
        Bt = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {}
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = jt(t[i], e[i]))
          return t => {
            for (const e in r) n[e] = r[e](t)
            return n
          }
        }
      function Ut(t) {
        const e = Lt.parse(t),
          n = e.length
        let r = 0,
          i = 0,
          o = 0
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o }
      }
      const It = (t, e) => {
          const n = Lt.createTransformer(e),
            r = Ut(t),
            i = Ut(e)
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? Dt(Ft(r.parsed, i.parsed), n)
            : n => `${n > 0 ? e : t}`
        },
        Nt = (t, e) => n => M(t, e, n)
      function zt(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? Nt
              : "string" === typeof o
              ? Tt.test(o)
                ? Pt
                : It
              : Array.isArray(o)
              ? Ft
              : "object" === typeof o
              ? Bt
              : void 0)
        var o
        const a = t.length - 1
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1])
          if (e) {
            const t = Array.isArray(e) ? e[s] : e
            n = Dt(t, n)
          }
          r.push(n)
        }
        return r
      }
      function Ht(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse())
        const a = zt(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return r => n(Z(t, e, r))
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1
                  return i => {
                    let o = 0,
                      a = !1
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1
                    }
                    const s = Z(t[o], t[o + 1], i)
                    return e[o](s)
                  }
                })(t, a)
        return n ? e => s(U(t[0], t[o - 1], e)) : s
      }
      const Yt = t => e => 1 - t(1 - e),
        Wt = t => e => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        Xt = t => e => e * e * ((t + 1) * e - t),
        _t = t => t,
        Zt = ((Gt = 2), t => Math.pow(t, Gt))
      var Gt
      const qt = Yt(Zt),
        $t = Wt(Zt),
        Kt = t => 1 - Math.sin(Math.acos(t)),
        Jt = Yt(Kt),
        Qt = Wt(Jt),
        te = Xt(1.525),
        ee = Yt(te),
        ne = Wt(te),
        re = (t => {
          const e = Xt(t)
          return t =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))
        })(1.525),
        ie = t => {
          if (1 === t || 0 === t) return t
          const e = t * t
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72
        },
        oe = Yt(ie)
      function ae(t, e) {
        return t.map(() => e || $t).splice(0, t.length - 1)
      }
      function se({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map(t => t * e)
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0))
                })(a),
            i
          )
        function u() {
          return Ht(s, a, { ease: Array.isArray(n) ? n : ae(a, n) })
        }
        let l = u()
        return {
          next: t => ((o.value = l(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (l = u())
          }
        }
      }
      const ue = {
        keyframes: se,
        spring: X,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o
        }) {
          const a = { done: !1, value: e }
          let s = n * t
          const u = e + s,
            l = void 0 === o ? u : o(u)
          return (
            l !== u && (s = l - e),
            {
              next: t => {
                const e = -s * Math.exp(-t / r)
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? l : l + e),
                  a
                )
              },
              flipTarget: () => {}
            }
          )
        }
      }
      const le = (1 / 60) * 1e3,
        ce =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        de =
          "undefined" !== typeof window
            ? t => window.requestAnimationFrame(t)
            : t => setTimeout(() => t(ce()), le)
      let fe = !0,
        pe = !1,
        ve = !1
      const he = { delta: 0, timestamp: 0 },
        me = ["read", "update", "preRender", "render", "postRender"],
        ye = me.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const u = s && i,
                      l = u ? e : n
                    return (
                      o && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && i && (r = e.length)),
                      t
                    )
                  },
                  cancel: t => {
                    const e = n.indexOf(t)
                    ;-1 !== e && n.splice(e, 1), a.delete(t)
                  },
                  process: u => {
                    if (i) o = !0
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n]
                          r(u), a.has(r) && (s.schedule(r), t())
                        }
                      ;(i = !1), o && ((o = !1), s.process(u))
                    }
                  }
                }
              return s
            })(() => (pe = !0))),
            t
          ),
          {}
        ),
        ge = me.reduce((t, e) => {
          const n = ye[e]
          return (
            (t[e] = (t, e = !1, r = !1) => (pe || we(), n.schedule(t, e, r))), t
          )
        }, {}),
        xe = me.reduce((t, e) => ((t[e] = ye[e].cancel), t), {}),
        be =
          (me.reduce((t, e) => ((t[e] = () => ye[e].process(he)), t), {}),
          t => ye[t].process(he)),
        Ee = t => {
          ;(pe = !1),
            (he.delta = fe ? le : Math.max(Math.min(t - he.timestamp, 40), 1)),
            (he.timestamp = t),
            (ve = !0),
            me.forEach(be),
            (ve = !1),
            pe && ((fe = !1), de(Ee))
        },
        we = () => {
          ;(pe = !0), (fe = !0), ve || de(Ee)
        }
      var Pe = ge
      function Te(t, e, n = 0) {
        return t - e - n
      }
      const Se = t => {
        const e = ({ delta: e }) => t(e)
        return { start: () => Pe.update(e, !0), stop: () => xe.update(e) }
      }
      function Ae(t) {
        var e,
          n,
          {
            from: i,
            autoplay: o = !0,
            driver: a = Se,
            elapsed: s = 0,
            repeat: u = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: d,
            onStop: f,
            onComplete: p,
            onRepeat: v,
            onUpdate: h
          } = t,
          m = (0, r._T)(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate"
          ])
        let y,
          g,
          x,
          { to: b } = m,
          E = 0,
          w = m.duration,
          P = !1,
          T = !0
        const S = (function (t) {
          if (Array.isArray(t.to)) return se
          if (ue[t.type]) return ue[t.type]
          const e = new Set(Object.keys(t))
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? se
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? X
            : se
        })(m)
        ;(null === (n = (e = S).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, i, b)) &&
          ((x = Ht([0, 100], [i, b], { clamp: !1 })), (i = 0), (b = 100))
        const A = S(Object.assign(Object.assign({}, m), { from: i, to: b }))
        function C() {
          E++,
            "reverse" === l
              ? ((T = E % 2 === 0),
                (s = (function (t, e, n = 0, r = !0) {
                  return r ? Te(e + -t, e, n) : e - (t - e) + n
                })(s, w, c, T)))
              : ((s = Te(s, w, c)), "mirror" === l && A.flipTarget()),
            (P = !1),
            v && v()
        }
        function V(t) {
          if ((T || (t = -t), (s += t), !P)) {
            const t = A.next(Math.max(0, s))
            ;(g = t.value), x && (g = x(g)), (P = T ? t.done : s <= 0)
          }
          null === h || void 0 === h || h(g),
            P &&
              (0 === E && ((null !== w && void 0 !== w) || (w = s)),
              E < u
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n
                  })(s, w, c, T) && C()
                : (y.stop(), p && p()))
        }
        return (
          o && (null === d || void 0 === d || d(), (y = a(V)), y.start()),
          {
            stop: () => {
              null === f || void 0 === f || f(), y.stop()
            }
          }
        )
      }
      function Ce({
        from: t = 0,
        velocity: e = 0,
        min: n,
        max: r,
        power: i = 0.8,
        timeConstant: o = 750,
        bounceStiffness: a = 500,
        bounceDamping: s = 10,
        restDelta: u = 1,
        modifyTarget: l,
        driver: c,
        onUpdate: d,
        onComplete: f,
        onStop: p
      }) {
        let v
        function h(t) {
          return (void 0 !== n && t < n) || (void 0 !== r && t > r)
        }
        function m(t) {
          return void 0 === n
            ? r
            : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
            ? n
            : r
        }
        function y(t) {
          null === v || void 0 === v || v.stop(),
            (v = Ae(
              Object.assign(Object.assign({}, t), {
                driver: c,
                onUpdate: e => {
                  var n
                  null === d || void 0 === d || d(e),
                    null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: f,
                onStop: p
              })
            ))
        }
        function g(t) {
          y(
            Object.assign(
              { type: "spring", stiffness: a, damping: s, restDelta: u },
              t
            )
          )
        }
        if (h(t)) g({ from: t, velocity: e, to: m(t) })
        else {
          let r = i * e + t
          "undefined" !== typeof l && (r = l(r))
          const a = m(r),
            s = a === n ? -1 : 1
          let c, d
          const f = t => {
            ;(c = d),
              (d = t),
              (e = L(t - c, he.delta)),
              ((1 === s && t > a) || (-1 === s && t < a)) &&
                g({ from: t, to: a, velocity: e })
          }
          y({
            type: "decay",
            from: t,
            velocity: e,
            timeConstant: o,
            power: i,
            restDelta: u,
            modifyTarget: l,
            onUpdate: h(r) ? f : void 0
          })
        }
        return { stop: () => (null === v || void 0 === v ? void 0 : v.stop()) }
      }
      var Ve = function (t) {
        return 1e3 * t
      }
      const Re = (t, e) => 1 - 3 * e + 3 * t,
        Me = (t, e) => 3 * e - 6 * t,
        Le = t => 3 * t,
        Oe = (t, e, n) => ((Re(e, n) * t + Me(e, n)) * t + Le(e)) * t,
        ke = (t, e, n) => 3 * Re(e, n) * t * t + 2 * Me(e, n) * t + Le(e)
      const De = 0.1
      function je(t, e, n, r) {
        if (t === e && n === r) return _t
        const i = new Float32Array(11)
        for (let a = 0; a < 11; ++a) i[a] = Oe(a * De, t, n)
        function o(e) {
          let r = 0,
            o = 1
          for (; 10 !== o && i[o] <= e; ++o) r += De
          --o
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * De,
            s = ke(a, t, n)
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = ke(e, n, r)
                  if (0 === i) return e
                  e -= (Oe(e, n, r) - t) / i
                }
                return e
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0
                do {
                  ;(a = e + (n - e) / 2),
                    (o = Oe(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a)
                } while (Math.abs(o) > 1e-7 && ++s < 10)
                return a
              })(e, r, r + De, t, n)
        }
        return t => (0 === t || 1 === t ? t : Oe(o(t), e, r))
      }
      var Fe = {
          linear: _t,
          easeIn: Zt,
          easeInOut: $t,
          easeOut: qt,
          circIn: Kt,
          circInOut: Qt,
          circOut: Jt,
          backIn: te,
          backInOut: ne,
          backOut: ee,
          anticipate: re,
          bounceIn: oe,
          bounceInOut: t =>
            t < 0.5 ? 0.5 * (1 - ie(1 - 2 * t)) : 0.5 * ie(2 * t - 1) + 0.5,
          bounceOut: ie
        },
        Be = function (t) {
          if (Array.isArray(t)) {
            t.length
            var e = (0, r.CR)(t, 4)
            return je(e[0], e[1], e[2], e[3])
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), Fe[t])
            : t
        },
        Ue = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Lt.test(e) || e.startsWith("url(")))
          )
        },
        Ie = function (t) {
          return Array.isArray(t)
        },
        Ne = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }
        },
        ze = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
          }
        },
        He = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 }
        },
        Ye = function (t) {
          return { type: "keyframes", duration: 0.8, values: t }
        },
        We = {
          x: Ne,
          y: Ne,
          z: Ne,
          rotate: Ne,
          rotateX: Ne,
          rotateY: Ne,
          rotateZ: Ne,
          scaleX: ze,
          scaleY: ze,
          scale: ze,
          opacity: He,
          backgroundColor: He,
          color: He,
          default: ze
        }
      const Xe = new Set(["brightness", "contrast", "saturate", "opacity"])
      function _e(t) {
        let [e, n] = t.slice(0, -1).split("(")
        if ("drop-shadow" === e) return t
        const [r] = n.match($) || []
        if (!r) return t
        const i = n.replace(r, "")
        let o = Xe.has(e) ? 1 : 0
        return r !== n && (o *= 100), e + "(" + o + i + ")"
      }
      const Ze = /([a-z-]*)\(.*?\)/g,
        Ge = Object.assign(Object.assign({}, Lt), {
          getAnimatableNone: t => {
            const e = t.match(Ze)
            return e ? e.map(_e).join(" ") : t
          }
        })
      var qe = (0, r.pi)((0, r.pi)({}, tt), { transform: Math.round }),
        $e = {
          borderWidth: ft,
          borderTopWidth: ft,
          borderRightWidth: ft,
          borderBottomWidth: ft,
          borderLeftWidth: ft,
          borderRadius: ft,
          radius: ft,
          borderTopLeftRadius: ft,
          borderTopRightRadius: ft,
          borderBottomRightRadius: ft,
          borderBottomLeftRadius: ft,
          width: ft,
          maxWidth: ft,
          height: ft,
          maxHeight: ft,
          size: ft,
          top: ft,
          right: ft,
          bottom: ft,
          left: ft,
          padding: ft,
          paddingTop: ft,
          paddingRight: ft,
          paddingBottom: ft,
          paddingLeft: ft,
          margin: ft,
          marginTop: ft,
          marginRight: ft,
          marginBottom: ft,
          marginLeft: ft,
          rotate: ct,
          rotateX: ct,
          rotateY: ct,
          rotateZ: ct,
          scale: nt,
          scaleX: nt,
          scaleY: nt,
          scaleZ: nt,
          skew: ct,
          skewX: ct,
          skewY: ct,
          distance: ft,
          translateX: ft,
          translateY: ft,
          translateZ: ft,
          x: ft,
          y: ft,
          z: ft,
          perspective: ft,
          transformPerspective: ft,
          opacity: et,
          originX: ht,
          originY: ht,
          originZ: ft,
          zIndex: qe,
          fillOpacity: et,
          strokeOpacity: et,
          numOctaves: qe
        },
        Ke = (0, r.pi)((0, r.pi)({}, $e), {
          color: Tt,
          backgroundColor: Tt,
          outlineColor: Tt,
          fill: Tt,
          stroke: Tt,
          borderColor: Tt,
          borderTopColor: Tt,
          borderRightColor: Tt,
          borderBottomColor: Tt,
          borderLeftColor: Tt,
          filter: Ge,
          WebkitFilter: Ge
        }),
        Je = function (t) {
          return Ke[t]
        }
      function Qe(t, e) {
        var n,
          r = Je(t)
        return (
          r !== Ge && (r = Lt),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        )
      }
      var tn = !1,
        en = function (t) {
          return Ie(t) ? t[t.length - 1] || 0 : t
        }
      function nn(t) {
        var e = t.ease,
          n = t.times,
          i = t.yoyo,
          o = t.flip,
          a = t.loop,
          s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
          u = (0, r.pi)({}, s)
        return (
          n && (u.offset = n),
          s.duration && (u.duration = Ve(s.duration)),
          s.repeatDelay && (u.repeatDelay = Ve(s.repeatDelay)),
          e &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0]
            })(e)
              ? e.map(Be)
              : Be(e)),
          "tween" === s.type && (u.type = "keyframes"),
          (i || a || o) &&
            (!0,
            i
              ? (u.repeatType = "reverse")
              : a
              ? (u.repeatType = "loop")
              : o && (u.repeatType = "mirror"),
            (u.repeat = a || i || o || s.repeat)),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        )
      }
      function rn(t, e, n) {
        var i
        return (
          Array.isArray(e.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.ev)([], (0, r.CR)(t.to), !1)), (t.to[0] = t.from))
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from
            var e = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from"
            ])
            return !!Object.keys(e).length
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, e) {
                var n
                return (
                  (n = Ie(e) ? Ye : We[t] || We.default),
                  (0, r.pi)({ to: e }, n(e))
                )
              })(n, e.to)
            )),
          (0, r.pi)((0, r.pi)({}, e), nn(t))
        )
      }
      function on(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        )
      }
      function an(t) {
        return "number" === typeof t ? 0 : Qe("", t)
      }
      function sn(t, e) {
        return t[e] || t.default || t
      }
      function un(t, e, n, i) {
        return (
          void 0 === i && (i = {}),
          tn && (i = { type: !1 }),
          e.start(function (o) {
            var a,
              s,
              u = (function (t, e, n, i, o) {
                var a,
                  s = sn(i, t),
                  u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
                  l = Ue(t, n)
                "none" === u && l && "string" === typeof n
                  ? (u = Qe(t, n))
                  : on(u) && "string" === typeof n
                  ? (u = an(n))
                  : !Array.isArray(n) &&
                    on(n) &&
                    "string" === typeof u &&
                    (n = an(u))
                var c = Ue(t, u)
                return (
                  "You are trying to animate "
                    .concat(t, ' from "')
                    .concat(u, '" to "')
                    .concat(n, '". ')
                    .concat(
                      u,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(u, " to a value animatable to ")
                    .concat(n, " via the `style` property."),
                  c && l && !1 !== s.type
                    ? function () {
                        var i = {
                          from: u,
                          to: n,
                          velocity: e.getVelocity(),
                          onComplete: o,
                          onUpdate: function (t) {
                            return e.set(t)
                          }
                        }
                        return "inertia" === s.type || "decay" === s.type
                          ? Ce((0, r.pi)((0, r.pi)({}, i), s))
                          : Ae(
                              (0, r.pi)((0, r.pi)({}, rn(s, i, t)), {
                                onUpdate: function (t) {
                                  var e
                                  i.onUpdate(t),
                                    null === (e = s.onUpdate) ||
                                      void 0 === e ||
                                      e.call(s, t)
                                },
                                onComplete: function () {
                                  var t
                                  i.onComplete(),
                                    null === (t = s.onComplete) ||
                                      void 0 === t ||
                                      t.call(s)
                                }
                              })
                            )
                      }
                    : function () {
                        var t,
                          r,
                          i = en(n)
                        return (
                          e.set(i),
                          o(),
                          null ===
                            (t =
                              null === s || void 0 === s
                                ? void 0
                                : s.onUpdate) ||
                            void 0 === t ||
                            t.call(s, i),
                          null ===
                            (r =
                              null === s || void 0 === s
                                ? void 0
                                : s.onComplete) ||
                            void 0 === r ||
                            r.call(s),
                          { stop: function () {} }
                        )
                      }
                )
              })(t, e, n, i, o),
              l = (function (t, e) {
                var n, r
                return null !==
                  (r =
                    null !== (n = (sn(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0
              })(i, t),
              c = function () {
                return (s = u())
              }
            return (
              l ? (a = window.setTimeout(c, Ve(l))) : c(),
              function () {
                clearTimeout(a), null === s || void 0 === s || s.stop()
              }
            )
          })
        )
      }
      var ln = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        cn = ln.length,
        dn = function (t) {
          return "string" === typeof t ? parseFloat(t) : t
        },
        fn = function (t) {
          return "number" === typeof t || ft.test(t)
        }
      function pn(t, e) {
        var n
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
      }
      var vn = mn(0, 0.5, Jt),
        hn = mn(0.5, 0.95, _t)
      function mn(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Z(t, e, r))
        }
      }
      function yn(t, e) {
        ;(t.min = e.min), (t.max = e.max)
      }
      function gn(t, e) {
        yn(t.x, e.x), yn(t.y, e.y)
      }
      function xn(t) {
        return void 0 === t || 1 === t
      }
      function bn(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY
        return !xn(e) || !xn(n) || !xn(r)
      }
      function En(t) {
        return (
          bn(t) ||
          wn(t.x) ||
          wn(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        )
      }
      function wn(t) {
        return t && "0%" !== t
      }
      function Pn(t, e, n) {
        return n + e * (t - n)
      }
      function Tn(t, e, n, r, i) {
        return void 0 !== i && (t = Pn(t, i, r)), Pn(t, n, r) + e
      }
      function Sn(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = Tn(t.min, e, n, r, i)),
          (t.max = Tn(t.max, e, n, r, i))
      }
      function An(t, e) {
        var n = e.x,
          r = e.y
        Sn(t.x, n.translate, n.scale, n.originPoint),
          Sn(t.y, r.translate, r.scale, r.originPoint)
      }
      function Cn(t, e) {
        ;(t.min = t.min + e), (t.max = t.max + e)
      }
      function Vn(t, e, n) {
        var i = (0, r.CR)(n, 3),
          o = i[0],
          a = i[1],
          s = i[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = M(t.min, t.max, u)
        Sn(t, e[o], e[a], l, e.scale)
      }
      var Rn = ["x", "scaleX", "originX"],
        Mn = ["y", "scaleY", "originY"]
      function Ln(t, e) {
        Vn(t.x, e, Rn), Vn(t.y, e, Mn)
      }
      const On = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        kn = t => On(t) && t.hasOwnProperty("z"),
        Dn = (t, e) => Math.abs(t - e)
      function jn(t, e) {
        if (Ot(t) && Ot(e)) return Dn(t, e)
        if (On(t) && On(e)) {
          const n = Dn(t.x, e.x),
            r = Dn(t.y, e.y),
            i = kn(t) && kn(e) ? Dn(t.z, e.z) : 0
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2))
        }
      }
      function Fn(t) {
        return t.max - t.min
      }
      function Bn(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0.01), jn(t, e) < n
      }
      function Un(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = M(e.min, e.max, t.origin)),
          (t.scale = Fn(n) / Fn(e)),
          (Bn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = M(n.min, n.max, t.origin) - t.originPoint),
          (Bn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }
      function In(t, e, n, r) {
        Un(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Un(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
      }
      function Nn(t, e, n) {
        ;(t.min = n.min + e.min), (t.max = t.min + Fn(e))
      }
      function zn(t, e, n) {
        ;(t.min = e.min - n.min), (t.max = t.min + Fn(e))
      }
      function Hn(t, e, n) {
        zn(t.x, e.x, n.x), zn(t.y, e.y, n.y)
      }
      function Yn(t, e, n, r, i) {
        return (
          (t = Pn((t -= e), 1 / n, r)), void 0 !== i && (t = Pn(t, 1 / i, r)), t
        )
      }
      function Wn(t, e, n, i, o) {
        var a = (0, r.CR)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2]
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            dt.test(e) &&
              ((e = parseFloat(e)), (e = M(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = M(o.min, o.max, r)
            t === o && (s -= e),
              (t.min = Yn(t.min, e, n, s, i)),
              (t.max = Yn(t.max, e, n, s, i))
          }
        })(t, e[s], e[u], e[l], e.scale, i, o)
      }
      var Xn = ["x", "scaleX", "originX"],
        _n = ["y", "scaleY", "originY"]
      function Zn(t, e, n, r) {
        Wn(
          t.x,
          e,
          Xn,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Wn(
            t.y,
            e,
            _n,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          )
      }
      function Gn(t) {
        return 0 === t.translate && 1 === t.scale
      }
      function qn(t) {
        return Gn(t.x) && Gn(t.y)
      }
      function $n(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        )
      }
      var Kn = (function () {
          function t() {
            this.members = []
          }
          return (
            (t.prototype.add = function (t) {
              O(this.members, t), t.scheduleRender()
            }),
            (t.prototype.remove = function (t) {
              if (
                (k(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1]
                e && this.promote(e)
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e
                })
              if (0 === n) return !1
              for (var r = n; r >= 0; r--) {
                var i = this.members[r]
                if (!1 !== i.isPresent) {
                  e = i
                  break
                }
              }
              return !!e && (this.promote(e), !0)
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()))
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i)
              })
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1)
              })
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }),
            t
          )
        })(),
        Jn = {}
      function Qn(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ")
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "))
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : o
      }
      function tr(t) {
        return [t("x"), t("y")]
      }
      var er = ["", "X", "Y", "Z"],
        nr = ["transformPerspective", "x", "y", "z"]
      function rr(t, e) {
        return nr.indexOf(t) - nr.indexOf(e)
      }
      ;["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return er.forEach(function (e) {
          return nr.push(t + e)
        })
      })
      var ir = new Set(nr)
      function or(t) {
        return ir.has(t)
      }
      var ar = new Set(["originX", "originY", "originZ"])
      function sr(t) {
        return ar.has(t)
      }
      var ur = function (t, e) {
          return t.depth - e.depth
        },
        lr = (function () {
          function t() {
            ;(this.children = []), (this.isDirty = !1)
          }
          return (
            (t.prototype.add = function (t) {
              O(this.children, t), (this.isDirty = !0)
            }),
            (t.prototype.remove = function (t) {
              k(this.children, t), (this.isDirty = !0)
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(ur),
                (this.isDirty = !1),
                this.children.forEach(t)
            }),
            t
          )
        })()
      function cr(t) {
        var e,
          n = B(t) ? t.get() : t
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        )
      }
      var dr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
      function fr(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          i = t.measureScroll,
          o = t.resetTransform
        return (function () {
          function t(t, e, i) {
            var o = this
            void 0 === e && (e = {}),
              void 0 === i && (i = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                o.isUpdating && ((o.isUpdating = !1), o.clearAllSnapshots())
              }),
              (this.updateProjection = function () {
                o.nodes.forEach(xr), o.nodes.forEach(br)
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = i ? i.root || i : this),
              (this.path = i
                ? (0, r.ev)((0, r.ev)([], (0, r.CR)(i.path), !1), [i], !1)
                : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this)
            for (var a = 0; a < this.path.length; a++)
              this.path[a].shouldResetTransform = !0
            this.root === this && (this.nodes = new lr())
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) || this.eventHandlers.set(t, new D()),
                this.eventHandlers.get(t).add(e)
              )
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
              var i = this.eventHandlers.get(t)
              null === i ||
                void 0 === i ||
                i.notify.apply(i, (0, r.ev)([], (0, r.CR)(e), !1))
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t)
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e)
            }),
            (t.prototype.mount = function (t, n) {
              var i,
                o = this
              if ((void 0 === n && (n = !1), !this.instance)) {
                ;(this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t)
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (i = this.parent) ||
                    void 0 === i ||
                    i.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function () {
                      return (o.root.updateBlockedByResize = !1)
                    }
                  e(t, function () {
                    ;(o.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      dr.hasAnimatedSinceResize &&
                        ((dr.hasAnimatedSinceResize = !1), o.nodes.forEach(gr))
                  })
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        i,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        f = t.layout
                      if (o.isTreeAnimationBlocked())
                        return (
                          (o.target = void 0), void (o.relativeTarget = void 0)
                        )
                      var p =
                          null !==
                            (n =
                              null !== (e = o.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : Ar,
                        v = l.getProps(),
                        h = v.onLayoutAnimationStart,
                        m = v.onLayoutAnimationComplete,
                        y = !o.targetLayout || !$n(o.targetLayout, f) || d,
                        g = !c && d
                      if (
                        (null === (i = o.resumeFrom) || void 0 === i
                          ? void 0
                          : i.instance) ||
                        g ||
                        (c && (y || !o.currentAnimation))
                      ) {
                        o.resumeFrom &&
                          ((o.resumingFrom = o.resumeFrom),
                          (o.resumingFrom.resumingFrom = void 0)),
                          o.setAnimationOrigin(u, g)
                        var x = (0, r.pi)((0, r.pi)({}, sn(p, "layout")), {
                          onPlay: h,
                          onComplete: m
                        })
                        l.shouldReduceMotion && ((x.delay = 0), (x.type = !1)),
                          o.startAnimation(x)
                      } else c || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a))
                      o.targetLayout = f
                    })
              }
            }),
            (t.prototype.unmount = function () {
              var t, e
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                R.qY.preRender(this.updateProjection)
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              )
            }),
            (t.prototype.startUpdate = function () {
              var t
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(Er))
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e)
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i]
                  ;(o.shouldResetTransform = !0), o.updateScroll()
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate
                  ;(this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(mr)
                )
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Cr),
                  this.potentialNodes.clear()),
                this.nodes.forEach(yr),
                this.nodes.forEach(pr),
                this.nodes.forEach(vr),
                this.clearAllSnapshots(),
                R.iW.update(),
                R.iW.preRender(),
                R.iW.render())
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(hr), this.sharedNodes.forEach(wr)
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              R.ZP.preRender(this.updateProjection, !1, !0)
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this
              R.ZP.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed()
              })
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t))
                Rr(e),
                  (this.snapshot = { measured: t, layout: e, latestValues: {} })
              }
            }),
            (t.prototype.updateLayout = function () {
              var t
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll()
                  }
                var n = this.measure()
                Rr(n)
                var r = this.layout
                ;(this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n)
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 }
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    )
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = i(this.instance))
            }),
            (t.prototype.resetTransform = function () {
              var t
              if (o) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !qn(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  i =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = i !== this.prevTransformTemplateValue
                e &&
                  (n || En(this.latestValues) || a) &&
                  (o(this.instance, i),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender())
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              var e = t.measureViewportBox(),
                n = this.root.scroll
              return n && (Cn(e.x, n.x), Cn(e.y, n.y)), e
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              gn(e, t)
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (Cn(e.x, i.x), Cn(e.y, i.y))
              }
              return e
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1)
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              gn(n, t)
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r]
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  Ln(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  En(i.latestValues) && Ln(n, i.latestValues)
              }
              return En(this.latestValues) && Ln(n, this.latestValues), n
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              gn(n, t)
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r]
                if (i.instance && En(i.latestValues)) {
                  bn(i.latestValues) && i.updateSnapshot()
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
                  gn(o, i.measure()),
                    Zn(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    )
                }
              }
              return En(this.latestValues) && Zn(n, this.latestValues), n
            }),
            (t.prototype.setTargetDelta = function (t) {
              ;(this.targetDelta = t), this.root.scheduleUpdateProjection()
            }),
            (t.prototype.setOptions = function (t) {
              var e
              this.options = (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, this.options), t),
                { crossfade: null === (e = t.crossfade) || void 0 === e || e }
              )
            }),
            (t.prototype.clearMeasurements = function () {
              ;(this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1)
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 }
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 }
                    }),
                    Hn(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    gn(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 }
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 }
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Nn(e.x, n.x, r.x),
                      Nn(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : gn(this.target, this.layout.actual),
                      An(this.target, this.targetDelta))
                    : gn(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 }
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 }
                      }),
                      Hn(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      gn(this.relativeTarget, this.relativeTargetOrigin)))))
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !En(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent()
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead()
                gn(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o
                    void 0 === r && (r = !1)
                    var a = n.length
                    if (a) {
                      var s, u
                      e.x = e.y = 1
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              Ln(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              An(t, u)),
                            r && En(s.latestValues) && Ln(t, s.latestValues))
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  )
                var o = i.target
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
                    }))
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform
                  In(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = Qn(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o))
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1
            }),
            (t.prototype.show = function () {
              this.isVisible = !0
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0)
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                i = this
              void 0 === e && (e = !1)
              var o = this.snapshot,
                a =
                  (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                s = (0, r.pi)({}, this.latestValues),
                u = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
                }
              ;(this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e)
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === o || void 0 === o ? void 0 : o.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                f = Boolean(
                  c &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(Sr)
                )
              ;(this.animationProgress = 0),
                (this.mixTargetDelta = function (e) {
                  var n,
                    r,
                    o,
                    p,
                    v,
                    h = e / 1e3
                  Pr(u.x, t.x, h),
                    Pr(u.y, t.y, h),
                    i.setTargetDelta(u),
                    i.relativeTarget &&
                      i.relativeTargetOrigin &&
                      i.layout &&
                      (null === (n = i.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Hn(l, i.layout.actual, i.relativeParent.layout.actual),
                      (r = i.relativeTarget),
                      (o = i.relativeTargetOrigin),
                      (p = l),
                      (v = h),
                      Tr(r.x, o.x, p.x, v),
                      Tr(r.y, o.y, p.y, v)),
                    c &&
                      ((i.animationValues = s),
                      (function (t, e, n, r, i, o) {
                        var a, s, u, l
                        i
                          ? ((t.opacity = M(
                              0,
                              null !== (a = n.opacity) && void 0 !== a ? a : 1,
                              vn(r)
                            )),
                            (t.opacityExit = M(
                              null !== (s = e.opacity) && void 0 !== s ? s : 1,
                              0,
                              hn(r)
                            )))
                          : o &&
                            (t.opacity = M(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              r
                            ))
                        for (var c = 0; c < cn; c++) {
                          var d = "border".concat(ln[c], "Radius"),
                            f = pn(e, d),
                            p = pn(n, d)
                          ;(void 0 === f && void 0 === p) ||
                            (f || (f = 0),
                            p || (p = 0),
                            0 === f || 0 === p || fn(f) === fn(p)
                              ? ((t[d] = Math.max(M(dn(f), dn(p), r), 0)),
                                (dt.test(p) || dt.test(f)) && (t[d] += "%"))
                              : (t[d] = p))
                        }
                        ;(e.rotate || n.rotate) &&
                          (t.rotate = M(e.rotate || 0, n.rotate || 0, r))
                      })(s, a, i.latestValues, h, f, d)),
                    i.root.scheduleUpdateProjection(),
                    i.scheduleRender(),
                    (i.animationProgress = h)
                }),
                this.mixTargetDelta(0)
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                i = this
              this.notifyListeners("animationStart"),
                null === (e = this.currentAnimation) ||
                  void 0 === e ||
                  e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (R.qY.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = R.ZP.update(function () {
                  ;(dr.hasAnimatedSinceResize = !0),
                    (i.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {})
                      var r = B(t) ? t : F(t)
                      return (
                        un("", r, e, n),
                        {
                          stop: function () {
                            return r.stop()
                          },
                          isAnimating: function () {
                            return r.isAnimating()
                          }
                        }
                      )
                    })(
                      0,
                      1e3,
                      (0, r.pi)((0, r.pi)({}, t), {
                        onUpdate: function (e) {
                          var n
                          i.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e)
                        },
                        onComplete: function () {
                          var e
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            i.completeAnimation()
                        }
                      })
                    )),
                    i.resumingFrom &&
                      (i.resumingFrom.currentAnimation = i.currentAnimation),
                    (i.pendingAnimation = void 0)
                }))
            }),
            (t.prototype.completeAnimation = function () {
              var t
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete")
            }),
            (t.prototype.finishAnimation = function () {
              var t
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation()
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues
              e &&
                n &&
                r &&
                (gn(e, n),
                Ln(e, i),
                In(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ))
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new Kn()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e)
                })
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack()
              return !t || t.lead === this
            }),
            (t.prototype.getLead = function () {
              var t
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              )
            }),
            (t.prototype.getPrevLead = function () {
              var t
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId
              if (t) return this.root.sharedNodes.get(t)
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack()
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r })
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack()
              return !!t && t.relegate(this)
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement
              if (t) {
                for (var e = !1, n = {}, r = 0; r < er.length; r++) {
                  var i = "rotate" + er[r]
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0))
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i])
                  t.scheduleRender()
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a
              void 0 === t && (t = {})
              var s = {}
              if (!this.instance || this.isSVG) return s
              if (!this.isVisible) return { visibility: "hidden" }
              s.visibility = ""
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = cr(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                )
              var l = this.getLead()
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {}
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = cr(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !En(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                )
              }
              var d = l.animationValues || l.latestValues
              this.applyTransformsToTarget(),
                (s.transform = Qn(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform))
              var f = this.projectionDelta,
                p = f.x,
                v = f.y
              for (var h in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              Jn))
                if (void 0 !== d[h]) {
                  var m = Jn[h],
                    y = m.correct,
                    g = m.applyTo,
                    x = y(d[h], l)
                  if (g) for (var b = g.length, E = 0; E < b; E++) s[g[E]] = x
                  else s[h] = x
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? cr(t.pointerEvents) || "" : "none"),
                s
              )
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop()
              }),
                this.root.nodes.forEach(mr),
                this.root.sharedNodes.clear()
            }),
            t
          )
        })()
      }
      function pr(t) {
        t.updateLayout()
      }
      function vr(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured
          "size" === t.options.animationType
            ? tr(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Fn(e)
                ;(e.min = s[t].min), (e.max = e.min + n)
              })
            : "position" === t.options.animationType &&
              tr(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Fn(s[t])
                e.max = e.min + n
              })
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
          }
          In(l, s, o.layout)
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
          }
          o.isShared
            ? In(c, t.applyTransform(u, !0), o.measured)
            : In(c, s, o.layout)
          var d = !qn(l),
            f = !1
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              Hn(m, o.layout, v.layout)
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }
              Hn(y, s, h.actual), $n(m, y) || (f = !0)
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f
          })
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r))
        t.options.transition = void 0
      }
      function hr(t) {
        t.clearSnapshot()
      }
      function mr(t) {
        t.clearMeasurements()
      }
      function yr(t) {
        var e = t.options.visualElement
        ;(null === e || void 0 === e
          ? void 0
          : e.getProps().onBeforeLayoutMeasure) &&
          e.notifyBeforeLayoutMeasure(),
          t.resetTransform()
      }
      function gr(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0)
      }
      function xr(t) {
        t.resolveTargetDelta()
      }
      function br(t) {
        t.calcProjection()
      }
      function Er(t) {
        t.resetRotation()
      }
      function wr(t) {
        t.removeLeadSnapshot()
      }
      function Pr(t, e, n) {
        ;(t.translate = M(e.translate, 0, n)),
          (t.scale = M(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint)
      }
      function Tr(t, e, n, r) {
        ;(t.min = M(e.min, n.min, r)), (t.max = M(e.max, n.max, r))
      }
      function Sr(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      var Ar = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }
      function Cr(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r]
            break
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        )
        i && t.mount(i, !0)
      }
      function Vr(t) {
        ;(t.min = Math.round(t.min)), (t.max = Math.round(t.max))
      }
      function Rr(t) {
        Vr(t.x), Vr(t.y)
      }
      var Mr = 1
      var Lr = n(25364),
        Or = (0, i.createContext)({})
      var kr = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          (0, r.ZT)(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props
            e && e.setProps(n)
          }),
          (e.prototype.render = function () {
            return this.props.children
          }),
          e
        )
      })(i.Component)
      function Dr(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          o = t.projectionNodeConstructor,
          f = t.useRender,
          p = t.useVisualState,
          h = t.Component
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (a.projectionNodeConstructor = t[e])
                    : (a[e].Component = t[e]))
            })(e),
          (0, i.forwardRef)(function (t, e) {
            var m = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, i.useContext)(Lr.p)) || void 0 === e
                    ? void 0
                    : e.id
              return r && void 0 !== n ? r + "-" + n : n
            })(t)
            t = (0, r.pi)((0, r.pi)({}, t), { layoutId: m })
            var y = (0, i.useContext)(c),
              b = null,
              E = A(t),
              w = y.isStatic
                ? void 0
                : (0, V.h)(function () {
                    if (dr.hasEverUpdated) return Mr++
                  }),
              P = p(t, y.isStatic)
            return (
              !y.isStatic &&
                v.j &&
                ((E.visualElement = g(h, P, (0, r.pi)((0, r.pi)({}, y), t), n)),
                (function (t, e, n, r) {
                  var o,
                    a = e.layoutId,
                    s = e.layout,
                    u = e.drag,
                    l = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, i.useContext)(Or)
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (o = n.parent) || void 0 === o
                        ? void 0
                        : o.projection
                    )),
                    n.projection.setOptions({
                      layoutId: a,
                      layout: s,
                      alwaysMeasureLayout: Boolean(u) || (l && x(l)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender()
                      },
                      animationType: "string" === typeof s ? s : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c
                    }))
                })(w, t, E.visualElement, o || a.projectionNodeConstructor),
                (b = (function (t, e, n) {
                  var o = []
                  if (((0, i.useContext)(s), !e)) return null
                  for (var c = 0; c < l; c++) {
                    var d = u[c],
                      f = a[d],
                      p = f.isEnabled,
                      v = f.Component
                    p(t) &&
                      v &&
                      o.push(
                        i.createElement(
                          v,
                          (0, r.pi)({ key: d }, t, { visualElement: e })
                        )
                      )
                  }
                  return o
                })(t, E.visualElement))),
              i.createElement(
                kr,
                {
                  visualElement: E.visualElement,
                  props: (0, r.pi)((0, r.pi)({}, y), t)
                },
                b,
                i.createElement(
                  d.Provider,
                  { value: E },
                  f(
                    h,
                    t,
                    w,
                    (function (t, e, n) {
                      return (0, i.useCallback)(
                        function (r) {
                          var i
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : x(n) && (n.current = r))
                        },
                        [e]
                      )
                    })(P, E.visualElement, e),
                    P,
                    y.isStatic,
                    E.visualElement
                  )
                )
              )
            )
          })
        )
      }
      function jr(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), Dr(t(e, n))
        }
        if ("undefined" === typeof Proxy) return e
        var n = new Map()
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r)
          }
        })
      }
      var Fr = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view"
      ]
      function Br(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(Fr.indexOf(t) > -1 || /[A-Z]/.test(t))
        )
      }
      function Ur(t, e) {
        var n = e.layout,
          r = e.layoutId
        return (
          or(t) ||
          sr(t) ||
          ((n || void 0 !== r) && (!!Jn[t] || "opacity" === t))
        )
      }
      var Ir = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
      }
      function Nr(t) {
        return t.startsWith("--")
      }
      var zr = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t
      }
      function Hr(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin
        u.length = 0
        var c = !1,
          d = !1,
          f = !0
        for (var p in e) {
          var v = e[p]
          if (Nr(p)) a[p] = v
          else {
            var h = $e[p],
              m = zr(v, h)
            if (or(p)) {
              if (((c = !0), (s[p] = m), u.push(p), !f)) continue
              v !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (f = !1)
            } else sr(p) ? ((l[p] = m), (d = !0)) : (o[p] = m)
          }
        }
        c
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = ""
              o.sort(rr)
              for (var d = !1, f = o.length, p = 0; p < f; p++) {
                var v = o[p]
                ;(c += "".concat(Ir[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0)
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : l && n && (c = "none"),
                c
              )
            })(t, n, f, r))
          : r
          ? (o.transform = r({}, ""))
          : !e.transform && o.transform && (o.transform = "none"),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o
              return "".concat(n, " ").concat(i, " ").concat(a)
            })(l))
      }
      var Yr = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {}
        }
      }
      function Wr(t, e, n) {
        for (var r in e) B(e[r]) || Ur(r, n) || (t[r] = e[r])
      }
      function Xr(t, e, n) {
        var o = {}
        return (
          Wr(o, t.style || {}, t),
          Object.assign(
            o,
            (function (t, e, n) {
              var o = t.transformTemplate
              return (0, i.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                  }
                  Hr(t, e, { enableHardwareAcceleration: !n }, o)
                  var i = t.vars,
                    a = t.style
                  return (0, r.pi)((0, r.pi)({}, i), a)
                },
                [e]
              )
            })(t, e, n)
          ),
          t.transformValues && (o = t.transformValues(o)),
          o
        )
      }
      function _r(t, e, n) {
        var r = {},
          i = Xr(t, e, n)
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        )
      }
      var Zr = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll"
      ])
      function Gr(t) {
        return Zr.has(t)
      }
      var qr,
        $r = function (t) {
          return !Gr(t)
        }
      try {
        ;(qr = require("@emotion/is-prop-valid").default) &&
          ($r = function (t) {
            return t.startsWith("on") ? !Gr(t) : qr(t)
          })
      } catch (xa) {}
      function Kr(t, e, n) {
        return "string" === typeof t ? t : ft.transform(e + n * t)
      }
      var Jr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Qr = { offset: "strokeDashoffset", array: "strokeDasharray" }
      function ti(t, e, n, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          d = void 0 === c ? 1 : c,
          f = e.pathOffset,
          p = void 0 === f ? 0 : f
        Hr(
          t,
          (0, r._T)(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset"
          ]),
          n,
          i
        ),
          (t.attrs = t.style),
          (t.style = {})
        var v = t.attrs,
          h = t.style,
          m = t.dimensions
        v.transform && (m && (h.transform = v.transform), delete v.transform),
          m &&
            (void 0 !== s || void 0 !== u || h.transform) &&
            (h.transformOrigin = (function (t, e, n) {
              var r = Kr(e, t.x, t.width),
                i = Kr(n, t.y, t.height)
              return "".concat(r, " ").concat(i)
            })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== o && (v.x = o),
          void 0 !== a && (v.y = a),
          void 0 !== l &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1)
              var o = i ? Jr : Qr
              t[o.offset] = ft.transform(-r)
              var a = ft.transform(e),
                s = ft.transform(n)
              t[o.array] = "".concat(a, " ").concat(s)
            })(v, l, d, p, !1)
      }
      var ei = function () {
        return (0, r.pi)(
          (0, r.pi)(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
            }
          ),
          { attrs: {} }
        )
      }
      function ni(t, e) {
        var n = (0, i.useMemo)(
          function () {
            var n = ei()
            return (
              ti(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              (0, r.pi)((0, r.pi)({}, n.attrs), {
                style: (0, r.pi)({}, n.style)
              })
            )
          },
          [e]
        )
        if (t.style) {
          var o = {}
          Wr(o, t.style, t), (n.style = (0, r.pi)((0, r.pi)({}, o), n.style))
        }
        return n
      }
      function ri(t) {
        void 0 === t && (t = !1)
        return function (e, n, o, a, s, u) {
          var l = s.latestValues,
            c = (Br(e) ? ni : _r)(n, l, u),
            d = (function (t, e, n) {
              var r = {}
              for (var i in t)
                ($r(i) ||
                  (!0 === n && Gr(i)) ||
                  (!e && !Gr(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i])
              return r
            })(n, "string" === typeof e, t),
            f = (0, r.pi)((0, r.pi)((0, r.pi)({}, d), c), { ref: a })
          return o && (f["data-projection-id"] = o), (0, i.createElement)(e, f)
        }
      }
      var ii = /([a-z])([A-Z])/g,
        oi = function (t) {
          return t.replace(ii, "$1-$2").toLowerCase()
        }
      function ai(t, e, n, r) {
        var i = e.style,
          o = e.vars
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a])
      }
      var si = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength"
      ])
      function ui(t, e, n, r) {
        for (var i in (ai(t, e, void 0, r), e.attrs))
          t.setAttribute(si.has(i) ? i : oi(i), e.attrs[i])
      }
      function li(t) {
        var e = t.style,
          n = {}
        for (var r in e) (B(e[r]) || Ur(r, t)) && (n[r] = e[r])
        return n
      }
      function ci(t) {
        var e = li(t)
        for (var n in t) {
          if (B(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
        }
        return e
      }
      function di(t) {
        return "object" === typeof t && "function" === typeof t.start
      }
      function fi(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: vi(e, n, r, i), renderState: o() }
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s)
            }),
          s
        )
      }
      var pi = function (t) {
        return function (e, n) {
          var r = (0, i.useContext)(d),
            o = (0, i.useContext)(f.O)
          return n
            ? fi(t, e, r, o)
            : (0, V.h)(function () {
                return fi(t, e, r, o)
              })
        }
      }
      function vi(t, e, n, i) {
        var o = {},
          a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = i(t)
        for (var u in s) o[u] = cr(s[u])
        var l = t.initial,
          c = t.animate,
          d = T(t),
          f = S(t)
        e &&
          f &&
          !d &&
          !1 !== t.inherit &&
          ((null !== l && void 0 !== l) || (l = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate))
        var p = a || !1 === l,
          v = p ? c : l
        v &&
          "boolean" !== typeof v &&
          !di(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = w(t, e)
            if (n) {
              var i = n.transitionEnd
              n.transition
              var a = (0, r._T)(n, ["transitionEnd", "transition"])
              for (var s in a) {
                var u = a[s]
                if (Array.isArray(u)) u = u[p ? u.length - 1 : 0]
                null !== u && (o[s] = u)
              }
              for (var s in i) o[s] = i[s]
            }
          })
        return o
      }
      var hi,
        mi = {
          useVisualState: pi({
            scrapeMotionValuesFromProps: ci,
            createRenderState: ei,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect()
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 }
              }
              ti(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                ui(e, r)
            }
          })
        },
        yi = {
          useVisualState: pi({
            scrapeMotionValuesFromProps: li,
            createRenderState: Yr
          })
        }
      function gi(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r)
          }
        )
      }
      function xi(t, e, n, r) {
        ;(0, i.useEffect)(
          function () {
            var i = t.current
            if (n && i) return gi(i, e, n, r)
          },
          [t, e, n, r]
        )
      }
      function bi(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent
      }
      function Ei(t) {
        return !!t.touches
      }
      !(function (t) {
        ;(t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit")
      })(hi || (hi = {}))
      var wi = { pageX: 0, pageY: 0 }
      function Pi(t, e) {
        void 0 === e && (e = "page")
        var n = t.touches[0] || t.changedTouches[0] || wi
        return { x: n[e + "X"], y: n[e + "Y"] }
      }
      function Ti(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] }
      }
      function Si(t, e) {
        return (
          void 0 === e && (e = "page"), { point: Ei(t) ? Pi(t, e) : Ti(t, e) }
        )
      }
      var Ai = function (t, e) {
          void 0 === e && (e = !1)
          var n,
            r = function (e) {
              return t(e, Si(e))
            }
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent
                ;(!e || (e && 0 === t.button)) && n(t)
              })
            : r
        },
        Ci = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        Vi = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        }
      function Ri(t) {
        return v.j && null === window.onpointerdown
          ? t
          : v.j && null === window.ontouchstart
          ? Vi[t]
          : v.j && null === window.onmousedown
          ? Ci[t]
          : t
      }
      function Mi(t, e, n, r) {
        return gi(t, Ri(e), Ai(n, "pointerdown" === e), r)
      }
      function Li(t, e, n, r) {
        return xi(t, Ri(e), n && Ai(n, "pointerdown" === e), r)
      }
      function Oi(t) {
        var e = null
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null
            })
          )
        }
      }
      var ki = Oi("dragHorizontal"),
        Di = Oi("dragVertical")
      function ji(t) {
        var e = !1
        if ("y" === t) e = Di()
        else if ("x" === t) e = ki()
        else {
          var n = ki(),
            r = Di()
          n && r
            ? (e = function () {
                n(), r()
              })
            : (n && n(), r && r())
        }
        return e
      }
      function Fi() {
        var t = ji(!0)
        return !t || (t(), !1)
      }
      function Bi(t, e, n) {
        return function (r, i) {
          var o
          bi(r) &&
            !Fi() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(hi.Hover, e),
            null === n || void 0 === n || n(r, i))
        }
      }
      var Ui = function (t, e) {
          return !!e && (t === e || Ui(t, e.parentElement))
        },
        Ii = n(65411)
      var Ni = new WeakMap(),
        zi = new WeakMap(),
        Hi = function (t) {
          var e
          null === (e = Ni.get(t.target)) || void 0 === e || e(t)
        },
        Yi = function (t) {
          t.forEach(Hi)
        }
      function Wi(t, e, n) {
        var i = (function (t) {
          var e = t.root,
            n = (0, r._T)(t, ["root"]),
            i = e || document
          zi.has(i) || zi.set(i, {})
          var o = zi.get(i),
            a = JSON.stringify(n)
          return (
            o[a] ||
              (o[a] = new IntersectionObserver(Yi, (0, r.pi)({ root: e }, n))),
            o[a]
          )
        })(e)
        return (
          Ni.set(t, n),
          i.observe(t),
          function () {
            Ni.delete(t), i.unobserve(t)
          }
        )
      }
      var Xi = { some: 0, all: 1 }
      function _i(t, e, n, r) {
        var o = r.root,
          a = r.margin,
          s = r.amount,
          u = void 0 === s ? "some" : s,
          l = r.once
        ;(0, i.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: a,
                threshold: "number" === typeof u ? u : Xi[u]
              }
              return Wi(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !l || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(hi.InView, i)
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave
                  null === a || void 0 === a || a(t)
                }
              })
            }
          },
          [t, o, a, u]
        )
      }
      function Zi(t, e, n, r) {
        var o = r.fallback,
          a = void 0 === o || o
        ;(0, i.useEffect)(
          function () {
            t &&
              a &&
              requestAnimationFrame(function () {
                var t
                e.hasEnteredView = !0
                var r = n.getProps().onViewportEnter
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(hi.InView, !0)
              })
          },
          [t]
        )
      }
      var Gi = function (t) {
          return function (e) {
            return t(e), null
          }
        },
        qi = {
          inView: Gi(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              o = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, i.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || r || o)
            s.once && u.current.hasEnteredView && (l = !1),
              ("undefined" === typeof IntersectionObserver ? Zi : _i)(
                l,
                u.current,
                e,
                s
              )
          }),
          tap: Gi(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              o = t.whileTap,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(!1),
              l = (0, i.useRef)(null)
            function c() {
              var t
              null === (t = l.current) || void 0 === t || t.call(l),
                (l.current = null)
            }
            function d() {
              var t
              return (
                c(),
                (u.current = !1),
                null === (t = a.animationState) ||
                  void 0 === t ||
                  t.setActive(hi.Tap, !1),
                !Fi()
              )
            }
            function f(t, n) {
              d() &&
                (Ui(a.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n))
            }
            function p(t, e) {
              d() && (null === r || void 0 === r || r(t, e))
            }
            Li(
              a,
              "pointerdown",
              s
                ? function (t, e) {
                    var r
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (l.current = Dt(
                          Mi(window, "pointerup", f),
                          Mi(window, "pointercancel", p)
                        )),
                        null === (r = a.animationState) ||
                          void 0 === r ||
                          r.setActive(hi.Tap, !0),
                        null === n || void 0 === n || n(t, e))
                  }
                : void 0
            ),
              (0, Ii.z)(c)
          }),
          focus: Gi(function (t) {
            var e = t.whileFocus,
              n = t.visualElement
            xi(
              n,
              "focus",
              e
                ? function () {
                    var t
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(hi.Focus, !0)
                  }
                : void 0
            ),
              xi(
                n,
                "blur",
                e
                  ? function () {
                      var t
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(hi.Focus, !1)
                    }
                  : void 0
              )
          }),
          hover: Gi(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement
            Li(i, "pointerenter", e || r ? Bi(i, !0, e) : void 0),
              Li(i, "pointerleave", n || r ? Bi(i, !1, n) : void 0)
          })
        },
        $i = n(15947)
      function Ki(t, e) {
        if (!Array.isArray(e)) return !1
        var n = e.length
        if (n !== t.length) return !1
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1
        return !0
      }
      var Ji = function (t) {
          return /^0[^.\s]+$/.test(t)
        },
        Qi = function (t) {
          return function (e) {
            return e.test(t)
          }
        },
        to = [
          tt,
          ft,
          dt,
          ct,
          vt,
          pt,
          {
            test: function (t) {
              return "auto" === t
            },
            parse: function (t) {
              return t
            }
          }
        ],
        eo = function (t) {
          return to.find(Qi(t))
        },
        no = (0, r.ev)((0, r.ev)([], (0, r.CR)(to), !1), [Tt, Lt], !1),
        ro = function (t) {
          return no.find(Qi(t))
        }
      function io(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, F(n))
      }
      function oo(t, e) {
        var n = P(t, e),
          i = n ? t.makeTargetAnimatable(n, !1) : {},
          o = i.transitionEnd,
          a = void 0 === o ? {} : o
        i.transition
        var s = (0, r._T)(i, ["transitionEnd", "transition"])
        for (var u in (s = (0, r.pi)((0, r.pi)({}, s), a))) {
          io(t, u, en(s[u]))
        }
      }
      function ao(t, e) {
        if (e) return (e[t] || e.default || e).from
      }
      function so(t, e, n) {
        var i
        void 0 === n && (n = {})
        var o = P(t, e, n.custom),
          a = (o || {}).transition,
          s = void 0 === a ? t.getDefaultTransition() || {} : a
        n.transitionOverride && (s = n.transitionOverride)
        var u = o
            ? function () {
                return uo(t, o, n)
              }
            : function () {
                return Promise.resolve()
              },
          l = (
            null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? function (i) {
                void 0 === i && (i = 0)
                var o = s.delayChildren,
                  a = void 0 === o ? 0 : o,
                  u = s.staggerChildren,
                  l = s.staggerDirection
                return (function (t, e, n, i, o, a) {
                  void 0 === n && (n = 0)
                  void 0 === i && (i = 0)
                  void 0 === o && (o = 1)
                  var s = [],
                    u = (t.variantChildren.size - 1) * i,
                    l =
                      1 === o
                        ? function (t) {
                            return void 0 === t && (t = 0), t * i
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * i
                          }
                  return (
                    Array.from(t.variantChildren)
                      .sort(lo)
                      .forEach(function (t, i) {
                        s.push(
                          so(
                            t,
                            e,
                            (0, r.pi)((0, r.pi)({}, a), { delay: n + l(i) })
                          ).then(function () {
                            return t.notifyAnimationComplete(e)
                          })
                        )
                      }),
                    Promise.all(s)
                  )
                })(t, e, a + i, u, l, n)
              }
            : function () {
                return Promise.resolve()
              },
          c = s.when
        if (c) {
          var d = (0, r.CR)("beforeChildren" === c ? [u, l] : [l, u], 2),
            f = d[0],
            p = d[1]
          return f().then(p)
        }
        return Promise.all([u(), l(n.delay)])
      }
      function uo(t, e, n) {
        var i,
          o = void 0 === n ? {} : n,
          a = o.delay,
          s = void 0 === a ? 0 : a,
          u = o.transitionOverride,
          l = o.type,
          c = t.makeTargetAnimatable(e),
          d = c.transition,
          f = void 0 === d ? t.getDefaultTransition() : d,
          p = c.transitionEnd,
          v = (0, r._T)(c, ["transition", "transitionEnd"])
        u && (f = u)
        var h = [],
          m =
            l &&
            (null === (i = t.animationState) || void 0 === i
              ? void 0
              : i.getState()[l])
        for (var y in v) {
          var g = t.getValue(y),
            x = v[y]
          if (!(!g || void 0 === x || (m && co(m, y)))) {
            var b = (0, r.pi)({ delay: s }, f)
            t.shouldReduceMotion &&
              or(y) &&
              (b = (0, r.pi)((0, r.pi)({}, b), { type: !1, delay: 0 }))
            var E = un(y, g, x, b)
            h.push(E)
          }
        }
        return Promise.all(h).then(function () {
          p && oo(t, p)
        })
      }
      function lo(t, e) {
        return t.sortNodePosition(e)
      }
      function co(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e]
        return (r[e] = !1), i
      }
      var fo = [
          hi.Animate,
          hi.InView,
          hi.Focus,
          hi.Hover,
          hi.Tap,
          hi.Drag,
          hi.Exit
        ],
        po = (0, r.ev)([], (0, r.CR)(fo), !1).reverse(),
        vo = fo.length
      function ho(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options
              return (function (t, e, n) {
                var r
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return so(t, e, n)
                  })
                  r = Promise.all(i)
                } else if ("string" === typeof e) r = so(t, e, n)
                else {
                  var o = "function" === typeof e ? P(t, e, n.custom) : e
                  r = uo(t, o, n)
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e)
                })
              })(t, n, r)
            })
          )
        }
      }
      function mo(t) {
        var e = ho(t),
          n = (function () {
            var t
            return (
              ((t = {})[hi.Animate] = yo(!0)),
              (t[hi.InView] = yo()),
              (t[hi.Hover] = yo()),
              (t[hi.Tap] = yo()),
              (t[hi.Drag] = yo()),
              (t[hi.Focus] = yo()),
              (t[hi.Exit] = yo()),
              t
            )
          })(),
          i = {},
          o = !0,
          a = function (e, n) {
            var i = P(t, n)
            if (i) {
              i.transition
              var o = i.transitionEnd,
                a = (0, r._T)(i, ["transition", "transitionEnd"])
              e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), o)
            }
            return e
          }
        function s(s, u) {
          for (
            var l,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              f = [],
              p = new Set(),
              v = {},
              h = 1 / 0,
              m = function (e) {
                var i = po[e],
                  m = n[i],
                  y = null !== (l = c[i]) && void 0 !== l ? l : d[i],
                  g = E(y),
                  x = i === u ? m.isActive : null
                !1 === x && (h = e)
                var w = y === d[i] && y !== c[i] && g
                if (
                  (w && o && t.manuallyAnimateOnMount && (w = !1),
                  (m.protectedKeys = (0, r.pi)({}, v)),
                  (!m.isActive && null === x) ||
                    (!y && !m.prevProp) ||
                    di(y) ||
                    "boolean" === typeof y)
                )
                  return "continue"
                var P = (function (t, e) {
                    if ("string" === typeof e) return e !== t
                    if (b(e)) return !Ki(e, t)
                    return !1
                  })(m.prevProp, y),
                  T = P || (i === u && m.isActive && !w && g) || (e > h && g),
                  S = Array.isArray(y) ? y : [y],
                  A = S.reduce(a, {})
                !1 === x && (A = {})
                var C = m.prevResolvedValues,
                  V = void 0 === C ? {} : C,
                  R = (0, r.pi)((0, r.pi)({}, V), A),
                  M = function (t) {
                    ;(T = !0), p.delete(t), (m.needsAnimating[t] = !0)
                  }
                for (var L in R) {
                  var O = A[L],
                    k = V[L]
                  v.hasOwnProperty(L) ||
                    (O !== k
                      ? Ie(O) && Ie(k)
                        ? !Ki(O, k) || P
                          ? M(L)
                          : (m.protectedKeys[L] = !0)
                        : void 0 !== O
                        ? M(L)
                        : p.add(L)
                      : void 0 !== O && p.has(L)
                      ? M(L)
                      : (m.protectedKeys[L] = !0))
                }
                ;(m.prevProp = y),
                  (m.prevResolvedValues = A),
                  m.isActive && (v = (0, r.pi)((0, r.pi)({}, v), A)),
                  o && t.blockInitialAnimation && (T = !1),
                  T &&
                    !w &&
                    f.push.apply(
                      f,
                      (0, r.ev)(
                        [],
                        (0, r.CR)(
                          S.map(function (t) {
                            return {
                              animation: t,
                              options: (0, r.pi)({ type: i }, s)
                            }
                          })
                        ),
                        !1
                      )
                    )
              },
              y = 0;
            y < vo;
            y++
          )
            m(y)
          if (((i = (0, r.pi)({}, v)), p.size)) {
            var g = {}
            p.forEach(function (e) {
              var n = t.getBaseTarget(e)
              void 0 !== n && (g[e] = n)
            }),
              f.push({ animation: g })
          }
          var x = Boolean(f.length)
          return (
            o && !1 === c.initial && !t.manuallyAnimateOnMount && (x = !1),
            (o = !1),
            x ? e(f) : Promise.resolve()
          )
        }
        return {
          isAnimated: function (t) {
            return void 0 !== i[t]
          },
          animateChanges: s,
          setActive: function (e, r, i) {
            var o
            if (n[e].isActive === r) return Promise.resolve()
            null === (o = t.variantChildren) ||
              void 0 === o ||
              o.forEach(function (t) {
                var n
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r)
              }),
              (n[e].isActive = r)
            var a = s(i, e)
            for (var u in n) n[u].protectedKeys = {}
            return a
          },
          setAnimateFunction: function (n) {
            e = n(t)
          },
          getState: function () {
            return n
          }
        }
      }
      function yo(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
          }
        )
      }
      var go = {
          animation: Gi(function (t) {
            var e = t.visualElement,
              n = t.animate
            e.animationState || (e.animationState = mo(e)),
              di(n) &&
                (0, i.useEffect)(
                  function () {
                    return n.subscribe(e)
                  },
                  [n]
                )
          }),
          exit: Gi(function (t) {
            var e = t.custom,
              n = t.visualElement,
              o = (0, r.CR)((0, $i.oO)(), 2),
              a = o[0],
              s = o[1],
              u = (0, i.useContext)(f.O)
            ;(0, i.useEffect)(
              function () {
                var t, r
                n.isPresent = a
                var i =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(hi.Exit, !a, {
                        custom:
                          null !==
                            (r =
                              null === u || void 0 === u ? void 0 : u.custom) &&
                          void 0 !== r
                            ? r
                            : e
                      })
                !a && (null === i || void 0 === i || i.then(s))
              },
              [a]
            )
          })
        },
        xo = (function () {
          function t(t, e, n) {
            var i = this,
              o = (void 0 === n ? {} : n).transformPagePoint
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (i.lastMoveEvent && i.lastMoveEventInfo) {
                  var t = wo(i.lastMoveEventInfo, i.history),
                    e = null !== i.startEvent,
                    n = jn(t.offset, { x: 0, y: 0 }) >= 3
                  if (e || n) {
                    var o = t.point,
                      a = (0, R.$B)().timestamp
                    i.history.push(
                      (0, r.pi)((0, r.pi)({}, o), { timestamp: a })
                    )
                    var s = i.handlers,
                      u = s.onStart,
                      l = s.onMove
                    e ||
                      (u && u(i.lastMoveEvent, t),
                      (i.startEvent = i.lastMoveEvent)),
                      l && l(i.lastMoveEvent, t)
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                ;(i.lastMoveEvent = t),
                  (i.lastMoveEventInfo = bo(e, i.transformPagePoint)),
                  bi(t) && 0 === t.buttons
                    ? i.handlePointerUp(t, e)
                    : R.ZP.update(i.updatePoint, !0)
              }),
              (this.handlePointerUp = function (t, e) {
                i.end()
                var n = i.handlers,
                  r = n.onEnd,
                  o = n.onSessionEnd,
                  a = wo(bo(e, i.transformPagePoint), i.history)
                i.startEvent && r && r(t, a), o && o(t, a)
              }),
              !(Ei(t) && t.touches.length > 1))
            ) {
              ;(this.handlers = e), (this.transformPagePoint = o)
              var a = bo(Si(t), this.transformPagePoint),
                s = a.point,
                u = (0, R.$B)().timestamp
              this.history = [(0, r.pi)((0, r.pi)({}, s), { timestamp: u })]
              var l = e.onSessionStart
              l && l(t, wo(a, this.history)),
                (this.removeListeners = Dt(
                  Mi(window, "pointermove", this.handlePointerMove),
                  Mi(window, "pointerup", this.handlePointerUp),
                  Mi(window, "pointercancel", this.handlePointerUp)
                ))
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                R.qY.update(this.updatePoint)
            }),
            t
          )
        })()
      function bo(t, e) {
        return e ? { point: e(t.point) } : t
      }
      function Eo(t, e) {
        return { x: t.x - e.x, y: t.y - e.y }
      }
      function wo(t, e) {
        var n = t.point
        return {
          point: n,
          delta: Eo(n, To(e)),
          offset: Eo(n, Po(e)),
          velocity: So(e, 0.1)
        }
      }
      function Po(t) {
        return t[0]
      }
      function To(t) {
        return t[t.length - 1]
      }
      function So(t, e) {
        if (t.length < 2) return { x: 0, y: 0 }
        for (
          var n = t.length - 1, r = null, i = To(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Ve(e)));

        )
          n--
        if (!r) return { x: 0, y: 0 }
        var o = (i.timestamp - r.timestamp) / 1e3
        if (0 === o) return { x: 0, y: 0 }
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o }
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      function Ao(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }
      function Co(t, e) {
        var n,
          i = e.min - t.min,
          o = e.max - t.max
        return (
          e.max - e.min < t.max - t.min &&
            ((i = (n = (0, r.CR)([o, i], 2))[0]), (o = n[1])),
          { min: i, max: o }
        )
      }
      var Vo = 0.35
      function Ro(t, e, n) {
        return { min: Mo(t, e), max: Mo(t, n) }
      }
      function Mo(t, e) {
        var n
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0
      }
      function Lo(t) {
        var e = t.top
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom }
        }
      }
      function Oo(t, e) {
        return Lo(
          (function (t, e) {
            if (!e) return t
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom })
            return { top: n.y, left: n.x, bottom: r.y, right: r.x }
          })(t.getBoundingClientRect(), e)
        )
      }
      var ko = new WeakMap(),
        Do = (function () {
          function t(t) {
            ;(this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t)
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new xo(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(Si(t, "page").point)
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart
                      ;(!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = ji(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        tr(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0
                          if (dt.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t]
                            if (o) i = Fn(o) * (parseFloat(i) / 100)
                          }
                          n.originPoint[t] = i
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(hi.Drag, !0))
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag
                      if (i || n.openGlobalLock) {
                        var u = e.offset
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10)
                              var n = null
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x")
                              return n
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          )
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e)
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e)
                    }
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint()
                  }
                )
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging
              if ((this.cancel(), n)) {
                var r = e.velocity
                this.startAnimation(r)
                var i = this.getProps().onDragEnd
                null === i || void 0 === i || i(t, e)
              }
            }),
            (t.prototype.cancel = function () {
              var t, e
              ;(this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(hi.Drag, !1)
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag
              if (n && jo(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t]
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? M(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? M(i, t, n.max) : Math.min(t, i)),
                      t
                    )
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o)
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints
              n && x(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right
                      return { x: Ao(t.x, r, o), y: Ao(t.y, n, i) }
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = Vo),
                    !1 === t ? (t = 0) : !0 === t && (t = Vo),
                    { x: Ro(t, "left", "right"), y: Ro(t, "top", "bottom") }
                  )
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  tr(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {}
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        )
                      })(i.actual[e], t.constraints[e]))
                  })
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints
              if (!e || !x(e)) return !1
              var r = e.current,
                i = this.visualElement.projection
              if (!i || !i.layout) return !1
              var o = (function (t, e, n) {
                  var r = Oo(t, n),
                    i = e.scroll
                  return i && (Cn(r.x, i.x), Cn(r.y, i.y)), r
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: Co(t.x, e.x), y: Co(t.y, e.y) }
                })(i.layout.actual, o)
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min
                    }
                  })(a)
                )
                ;(this.hasMutatedConstraints = !!s), s && (a = Lo(s))
              }
              return a
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = tr(function (n) {
                  var l
                  if (jo(n, i, e.currentDirection)) {
                    var d =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {}
                    u && (d = { min: 0, max: 0 })
                    var f = a ? 200 : 1e6,
                      p = a ? 40 : 1e7,
                      v = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: p,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                          },
                          s
                        ),
                        d
                      )
                    return e.startAxisValueAnimation(n, v)
                  }
                })
              return Promise.all(d).then(l)
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return un(t, this.getAxisMotionValue(t), 0, e)
            }),
            (t.prototype.stopAnimation = function () {
              var t = this
              tr(function (e) {
                return t.getAxisMotionValue(e).stop()
              })
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r]
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              )
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this
              tr(function (n) {
                if (jo(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n)
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max
                    i.set(t[n] - M(a, s, 0.5))
                  }
                }
              })
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection
              if (x(i) && o && this.constraints) {
                this.stopAnimation()
                var a = { x: 0, y: 0 }
                tr(function (t) {
                  var n = e.getAxisMotionValue(t)
                  if (n) {
                    var r = n.get()
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = Fn(t),
                        i = Fn(e)
                      return (
                        i > r
                          ? (n = Z(e.min, e.max - r, t.min))
                          : r > i && (n = Z(t.min, t.max - i, e.min)),
                        U(0, 1, n)
                      )
                    })({ min: r, max: r }, e.constraints[t])
                  }
                })
                var s = this.visualElement.getProps().transformTemplate
                ;(this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  tr(function (t) {
                    if (jo(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max
                      n.set(M(o, s, a[t]))
                    }
                  })
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this
              ko.set(this.visualElement, this)
              var n = Mi(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener
                    r && (void 0 === i || i) && e.start(t)
                  }
                ),
                r = function () {
                  x(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints())
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r)
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r()
              var a = gi(window, "resize", function () {
                e.scalePositionWithinConstraints()
              })
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged
                  e.isDragging &&
                    r &&
                    (tr(function (t) {
                      var r = e.getAxisMotionValue(t)
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate))
                    }),
                    e.visualElement.syncRender())
                }),
                function () {
                  a(), n(), o()
                }
              )
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? Vo : c,
                f = t.dragMomentum,
                p = void 0 === f || f
              return (0, r.pi)((0, r.pi)({}, t), {
                drag: n,
                dragDirectionLock: o,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: p
              })
            }),
            t
          )
        })()
      function jo(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t)
      }
      var Fo = {
          pan: Gi(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              o = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || r || o,
              u = (0, i.useRef)(null),
              l = (0, i.useContext)(c).transformPagePoint,
              d = {
                onSessionStart: o,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  ;(u.current = null), r && r(t, e)
                }
              }
            ;(0, i.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(d)
            }),
              Li(
                a,
                "pointerdown",
                s &&
                  function (t) {
                    u.current = new xo(t, d, { transformPagePoint: l })
                  }
              ),
              (0, Ii.z)(function () {
                return u.current && u.current.end()
              })
          }),
          drag: Gi(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = (0, V.h)(function () {
                return new Do(n)
              })
            ;(0, i.useEffect)(
              function () {
                return e && e.subscribe(r)
              },
              [r, e]
            ),
              (0, i.useEffect)(
                function () {
                  return r.addListeners()
                },
                [r]
              )
          })
        },
        Bo = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "LayoutAnimationStart",
          "SetAxisTarget",
          "Unmount"
        ]
      var Uo = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            i = t.build,
            o = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            f = t.scrapeMotionValuesFromProps
          return function (t, e) {
            var p = t.parent,
              v = t.props,
              h = t.presenceId,
              m = t.blockInitialAnimation,
              y = t.visualState,
              g = t.shouldReduceMotion
            void 0 === e && (e = {})
            var x,
              b,
              w = !1,
              P = y.latestValues,
              A = y.renderState,
              C = (function () {
                var t = Bo.map(function () {
                    return new D()
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear()
                      })
                    },
                    updatePropListeners: function (t) {
                      Bo.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o]
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a))
                      })
                    }
                  }
                return (
                  t.forEach(function (t, e) {
                    ;(n["on" + Bo[e]] = function (e) {
                      return t.add(e)
                    }),
                      (n["notify" + Bo[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n]
                        return t.notify.apply(
                          t,
                          (0, r.ev)([], (0, r.CR)(e), !1)
                        )
                      })
                  }),
                  n
                )
              })(),
              V = new Map(),
              M = new Map(),
              L = {},
              O = (0, r.pi)({}, P)
            function k() {
              x && w && (j(), u(x, A, v.style, X.projection))
            }
            function j() {
              i(X, A, P, e, v)
            }
            function U() {
              C.notifyUpdate(P)
            }
            function I(t, e) {
              var n = e.onChange(function (e) {
                  ;(P[t] = e), v.onUpdate && R.ZP.update(U, !1, !0)
                }),
                r = e.onRenderRequest(X.scheduleRender)
              M.set(t, function () {
                n(), r()
              })
            }
            var N = f(v)
            for (var z in N) {
              var H = N[z]
              void 0 !== P[z] && B(H) && H.set(P[z], !1)
            }
            var Y = T(v),
              W = S(v),
              X = (0, r.pi)(
                (0, r.pi)(
                  {
                    treeType: n,
                    current: null,
                    depth: p ? p.depth + 1 : 0,
                    parent: p,
                    children: new Set(),
                    presenceId: h,
                    shouldReduceMotion: g,
                    variantChildren: W ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === p || void 0 === p ? void 0 : p.isMounted()
                    ),
                    blockInitialAnimation: m,
                    isMounted: function () {
                      return Boolean(x)
                    },
                    mount: function (t) {
                      ;(w = !0),
                        (x = X.current = t),
                        X.projection && X.projection.mount(t),
                        W &&
                          p &&
                          !Y &&
                          (b =
                            null === p || void 0 === p
                              ? void 0
                              : p.addVariantChild(X)),
                        V.forEach(function (t, e) {
                          return I(e, t)
                        }),
                        null === p || void 0 === p || p.children.add(X),
                        X.setProps(v)
                    },
                    unmount: function () {
                      var t
                      null === (t = X.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        R.qY.update(U),
                        R.qY.render(k),
                        M.forEach(function (t) {
                          return t()
                        }),
                        null === b || void 0 === b || b(),
                        null === p || void 0 === p || p.children.delete(X),
                        C.clearAllListeners(),
                        (x = void 0),
                        (w = !1)
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = X.getClosestVariantNode()
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t)
                          }
                        )
                    },
                    sortNodePosition: function (t) {
                      return d && n === t.treeType
                        ? d(X.getInstance(), t.getInstance())
                        : 0
                    },
                    getClosestVariantNode: function () {
                      return W
                        ? X
                        : null === p || void 0 === p
                        ? void 0
                        : p.getClosestVariantNode()
                    },
                    getLayoutId: function () {
                      return v.layoutId
                    },
                    getInstance: function () {
                      return x
                    },
                    getStaticValue: function (t) {
                      return P[t]
                    },
                    setStaticValue: function (t, e) {
                      return (P[t] = e)
                    },
                    getLatestValues: function () {
                      return P
                    },
                    setVisibility: function (t) {
                      X.isVisible !== t &&
                        ((X.isVisible = t), X.scheduleRender())
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(X, t, v, e)
                    },
                    measureViewportBox: function () {
                      return s(x, v)
                    },
                    addValue: function (t, e) {
                      X.hasValue(t) && X.removeValue(t),
                        V.set(t, e),
                        (P[t] = e.get()),
                        I(t, e)
                    },
                    removeValue: function (t) {
                      var e
                      V.delete(t),
                        null === (e = M.get(t)) || void 0 === e || e(),
                        M.delete(t),
                        delete P[t],
                        c(t, A)
                    },
                    hasValue: function (t) {
                      return V.has(t)
                    },
                    getValue: function (t, e) {
                      var n = V.get(t)
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = F(e)), X.addValue(t, n)),
                        n
                      )
                    },
                    forEachValue: function (t) {
                      return V.forEach(t)
                    },
                    readValue: function (t) {
                      var n
                      return null !== (n = P[t]) && void 0 !== n
                        ? n
                        : l(x, t, e)
                    },
                    setBaseTarget: function (t, e) {
                      O[t] = e
                    },
                    getBaseTarget: function (t) {
                      if (o) {
                        var e = o(v, t)
                        if (void 0 !== e && !B(e)) return e
                      }
                      return O[t]
                    }
                  },
                  C
                ),
                {
                  build: function () {
                    return j(), A
                  },
                  scheduleRender: function () {
                    R.ZP.render(k, !1, !0)
                  },
                  syncRender: k,
                  setProps: function (t) {
                    ;(t.transformTemplate || v.transformTemplate) &&
                      X.scheduleRender(),
                      (v = t),
                      C.updatePropListeners(t),
                      (L = (function (t, e, n) {
                        var r
                        for (var i in e) {
                          var o = e[i],
                            a = n[i]
                          if (B(o)) t.addValue(i, o)
                          else if (B(a)) t.addValue(i, F(o))
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i)
                              !s.hasAnimated && s.set(o)
                            } else
                              t.addValue(
                                i,
                                F(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              )
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i)
                        return e
                      })(X, f(v), L))
                  },
                  getProps: function () {
                    return v
                  },
                  getVariant: function (t) {
                    var e
                    return null === (e = v.variants) || void 0 === e
                      ? void 0
                      : e[t]
                  },
                  getDefaultTransition: function () {
                    return v.transition
                  },
                  getTransformPagePoint: function () {
                    return v.transformPagePoint
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === p || void 0 === p
                        ? void 0
                        : p.getVariantContext()
                    if (!Y) {
                      var e =
                        (null === p || void 0 === p
                          ? void 0
                          : p.getVariantContext()) || {}
                      return void 0 !== v.initial && (e.initial = v.initial), e
                    }
                    for (var n = {}, r = 0; r < No; r++) {
                      var i = Io[r],
                        o = v[i]
                      ;(E(o) || !1 === o) && (n[i] = o)
                    }
                    return n
                  }
                }
              )
            return X
          }
        },
        Io = (0, r.ev)(["initial"], (0, r.CR)(fo), !1),
        No = Io.length
      function zo(t) {
        return "string" === typeof t && t.startsWith("var(--")
      }
      var Ho = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/
      function Yo(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          )
        var i = (0, r.CR)(
            (function (t) {
              var e = Ho.exec(t)
              if (!e) return [,]
              var n = (0, r.CR)(e, 3)
              return [n[1], n[2]]
            })(t),
            2
          ),
          o = i[0],
          a = i[1]
        if (o) {
          var s = window.getComputedStyle(e).getPropertyValue(o)
          return s ? s.trim() : zo(a) ? Yo(a, e, n + 1) : a
        }
      }
      var Wo,
        Xo = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y"
        ]),
        _o = function (t) {
          return Xo.has(t)
        },
        Zo = function (t, e) {
          t.set(e, !1), t.set(e)
        },
        Go = function (t) {
          return t === tt || t === ft
        }
      !(function (t) {
        ;(t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom")
      })(Wo || (Wo = {}))
      var qo = function (t, e) {
          return parseFloat(t.split(", ")[e])
        },
        $o = function (t, e) {
          return function (n, r) {
            var i = r.transform
            if ("none" === i || !i) return 0
            var o = i.match(/^matrix3d\((.+)\)$/)
            if (o) return qo(o[1], e)
            var a = i.match(/^matrix\((.+)\)$/)
            return a ? qo(a[1], t) : 0
          }
        },
        Ko = new Set(["x", "y", "z"]),
        Jo = nr.filter(function (t) {
          return !Ko.has(t)
        })
      var Qo = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o
            return n.max - n.min - parseFloat(i) - parseFloat(a)
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o
            return n.max - n.min - parseFloat(i) - parseFloat(a)
          },
          top: function (t, e) {
            var n = e.top
            return parseFloat(n)
          },
          left: function (t, e) {
            var n = e.left
            return parseFloat(n)
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top
            return parseFloat(r) + (n.max - n.min)
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left
            return parseFloat(r) + (n.max - n.min)
          },
          x: $o(4, 13),
          y: $o(5, 14)
        },
        ta = function (t, e, n, i) {
          void 0 === n && (n = {}),
            void 0 === i && (i = {}),
            (e = (0, r.pi)({}, e)),
            (i = (0, r.pi)({}, i))
          var o = Object.keys(e).filter(_o),
            a = [],
            s = !1,
            u = []
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r)
              if (t.hasValue(r)) {
                var l,
                  c = n[r],
                  d = eo(c),
                  f = e[r]
                if (Ie(f)) {
                  var p = f.length,
                    v = null === f[0] ? 1 : 0
                  ;(c = f[v]), (d = eo(c))
                  for (var h = v; h < p; h++)
                    l ? eo(f[h]) : (l = eo(f[h])) === d || (Go(d) && Go(l))
                } else l = eo(f)
                if (d !== l)
                  if (Go(d) && Go(l)) {
                    var m = o.get()
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof f
                        ? (e[r] = parseFloat(f))
                        : Array.isArray(f) &&
                          l === ft &&
                          (e[r] = f.map(parseFloat))
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === l || void 0 === l ? void 0 : l.transform) &&
                    (0 === c || 0 === f)
                      ? 0 === c
                        ? o.set(l.transform(c))
                        : (e[r] = d.transform(f))
                      : (s ||
                          ((a = (function (t) {
                            var e = []
                            return (
                              Jo.forEach(function (n) {
                                var r = t.getValue(n)
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0))
                              }),
                              e.length && t.syncRender(),
                              e
                            )
                          })(t)),
                          (s = !0)),
                        u.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : e[r]),
                        Zo(o, f))
              }
            }),
            u.length)
          ) {
            var l = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                s = {}
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = Qo[t](r, o)
                }),
                e.syncRender()
              var u = e.measureViewportBox()
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n)
                  Zo(r, s[n]), (t[n] = Qo[n](u, o))
                }),
                t
              )
            })(e, t, u)
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = (0, r.CR)(e, 2),
                    i = n[0],
                    o = n[1]
                  t.getValue(i).set(o)
                }),
              t.syncRender(),
              { target: l, transitionEnd: i }
            )
          }
          return { target: e, transitionEnd: i }
        }
      function ea(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(_o)
        })(e)
          ? ta(t, e, n, r)
          : { target: e, transitionEnd: r }
      }
      var na = function (t, e, n, i) {
        var o = (function (t, e, n) {
          var i,
            o = (0, r._T)(e, []),
            a = t.getInstance()
          if (!(a instanceof Element)) return { target: o, transitionEnd: n }
          for (var s in (n && (n = (0, r.pi)({}, n)),
          t.forEachValue(function (t) {
            var e = t.get()
            if (zo(e)) {
              var n = Yo(e, a)
              n && t.set(n)
            }
          }),
          o)) {
            var u = o[s]
            if (zo(u)) {
              var l = Yo(u, a)
              l &&
                ((o[s] = l),
                n && ((null !== (i = n[s]) && void 0 !== i) || (n[s] = u)))
            }
          }
          return { target: o, transitionEnd: n }
        })(t, e, i)
        return ea(t, (e = o.target), n, (i = o.transitionEnd))
      }
      var ra = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (or(e)) {
              var n = Je(e)
              return (n && n.default) || 0
            }
            var r,
              i = ((r = t), window.getComputedStyle(r))
            return (Nr(e) ? i.getPropertyValue(e) : i[e]) || 0
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
          },
          getBaseTarget: function (t, e) {
            var n
            return null === (n = t.style) || void 0 === n ? void 0 : n[e]
          },
          measureViewportBox: function (t, e) {
            return Oo(t, e.transformPagePoint)
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate
            ;(e.style.transform = r ? r({}, "") : "none"), t.scheduleRender()
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style
            delete n[t], delete r[t]
          },
          makeTargetAnimatable: function (t, e, n, i) {
            var o = n.transformValues
            void 0 === i && (i = !0)
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, r._T)(e, ["transition", "transitionEnd"]),
              l = (function (t, e, n) {
                var r,
                  i,
                  o = {}
                for (var a in t)
                  o[a] =
                    null !== (r = ao(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get()
                return o
              })(u, a || {}, t)
            if ((o && (s && (s = o(s)), u && (u = o(u)), l && (l = o(l))), i)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e)
                  }),
                  u = s.length
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      f = null
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== i
                            ? i
                            : e[c]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || Ji(f))
                          ? (f = parseFloat(f))
                          : !ro(f) && Lt.test(d) && (f = Qe(c, d)),
                        t.addValue(c, F(f)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = f),
                        t.setBaseTarget(c, f))
                  }
              })(t, u, l)
              var c = na(t, u, l, s)
              ;(s = c.transitionEnd), (u = c.target)
            }
            return (0, r.pi)({ transition: a, transitionEnd: s }, u)
          },
          scrapeMotionValuesFromProps: li,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              Hr(e, n, r, i.transformTemplate)
          },
          render: ai
        },
        ia = Uo(ra),
        oa = Uo(
          (0, r.pi)((0, r.pi)({}, ra), {
            getBaseTarget: function (t, e) {
              return t[e]
            },
            readValueFromInstance: function (t, e) {
              var n
              return or(e)
                ? (null === (n = Je(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = si.has(e) ? e : oi(e)), t.getAttribute(e))
            },
            scrapeMotionValuesFromProps: ci,
            build: function (t, e, n, r, i) {
              ti(e, n, r, i.transformTemplate)
            },
            render: ui
          })
        ),
        aa = function (t, e) {
          return Br(t)
            ? oa(e, { enableHardwareAcceleration: !1 })
            : ia(e, { enableHardwareAcceleration: !0 })
        }
      function sa(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100
      }
      var ua = {
          correct: function (t, e) {
            if (!e.target) return t
            if ("string" === typeof t) {
              if (!ft.test(t)) return t
              t = parseFloat(t)
            }
            var n = sa(t, e.target.x),
              r = sa(t, e.target.y)
            return "".concat(n, "% ").concat(r, "%")
          }
        },
        la = "_$css",
        ca = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = []
            o &&
              (t = t.replace(Ho, function (t) {
                return a.push(t), la
              }))
            var s = Lt.parse(t)
            if (s.length > 5) return i
            var u = Lt.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y
            ;(s[0 + l] /= c), (s[1 + l] /= d)
            var f = M(c, d, 0.5)
            "number" === typeof s[2 + l] && (s[2 + l] /= f),
              "number" === typeof s[3 + l] && (s[3 + l] /= f)
            var p = u(s)
            if (o) {
              var v = 0
              p = p.replace(la, function () {
                var t = a[v]
                return v++, t
              })
            }
            return p
          }
        },
        da = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            (0, r.ZT)(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                i = n.visualElement,
                o = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                u = i.projection
              ;(t = fa),
                Object.assign(Jn, t),
                u &&
                  ((null === o || void 0 === o ? void 0 : o.group) &&
                    o.group.add(u),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(u),
                  u.root.didUpdate(),
                  u.addEventListener("animationComplete", function () {
                    e.safeToRemove()
                  }),
                  u.setOptions(
                    (0, r.pi)((0, r.pi)({}, u.options), {
                      onExitComplete: function () {
                        return e.safeToRemove()
                      }
                    })
                  )),
                (dr.hasEverUpdated = !0)
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        R.ZP.postRender(function () {
                          var t
                          ;(null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove()
                        })),
                  null)
                : null
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i))
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove
              null === t || void 0 === t || t()
            }),
            (e.prototype.render = function () {
              return null
            }),
            e
          )
        })(i.Component)
      var fa = {
          borderRadius: (0, r.pi)((0, r.pi)({}, ua), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius"
            ]
          }),
          borderTopLeftRadius: ua,
          borderTopRightRadius: ua,
          borderBottomLeftRadius: ua,
          borderBottomRightRadius: ua,
          boxShadow: ca
        },
        pa = {
          measureLayout: function (t) {
            var e = (0, r.CR)((0, $i.oO)(), 2),
              n = e[0],
              o = e[1],
              a = (0, i.useContext)(Lr.p)
            return i.createElement(
              da,
              (0, r.pi)({}, t, {
                layoutGroup: a,
                switchLayoutGroup: (0, i.useContext)(Or),
                isPresent: n,
                safeToRemove: o
              })
            )
          }
        },
        va = fr({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e)
              }
            )
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop
            }
          }
        }),
        ha = { current: void 0 },
        ma = fr({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop }
          },
          defaultParent: function () {
            if (!ha.current) {
              var t = new va(0, {})
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ha.current = t)
            }
            return ha.current
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none"
          }
        }),
        ya = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, go), qi), Fo), pa),
        ga = jr(function (t, e) {
          return (function (t, e, n, i, o) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              u = Br(t) ? mi : yi
            return (0,
            r.pi)((0, r.pi)({}, u), { preloadedFeatures: n, useRender: ri(s), createVisualElement: i, projectionNodeConstructor: o, Component: t })
          })(t, e, ya, aa, ma)
        })
    },
    11741: function (t, e, n) {
      n.d(e, {
        j: function () {
          return r
        }
      })
      var r = "undefined" !== typeof document
    },
    96681: function (t, e, n) {
      n.d(e, {
        h: function () {
          return i
        }
      })
      var r = n(67294)
      function i(t) {
        var e = (0, r.useRef)(null)
        return null === e.current && (e.current = t()), e.current
      }
    },
    76316: function (t, e, n) {
      n.d(e, {
        M: function () {
          return a
        }
      })
      var r = n(96681),
        i = 0,
        o = function () {
          return i++
        },
        a = function () {
          return (0, r.h)(o)
        }
    },
    58868: function (t, e, n) {
      n.d(e, {
        L: function () {
          return i
        }
      })
      var r = n(67294),
        i = n(11741).j ? r.useLayoutEffect : r.useEffect
    },
    65411: function (t, e, n) {
      n.d(e, {
        z: function () {
          return i
        }
      })
      var r = n(67294)
      function i(t) {
        return (0, r.useEffect)(function () {
          return function () {
            return t()
          }
        }, [])
      }
    },
    89073: function (t, e, n) {
      n.d(e, {
        qY: function () {
          return p
        },
        ZP: function () {
          return x
        },
        iW: function () {
          return v
        },
        $B: function () {
          return g
        }
      })
      const r = (1 / 60) * 1e3,
        i =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        o =
          "undefined" !== typeof window
            ? t => window.requestAnimationFrame(t)
            : t => setTimeout(() => t(i()), r)
      let a = !0,
        s = !1,
        u = !1
      const l = { delta: 0, timestamp: 0 },
        c = ["read", "update", "preRender", "render", "postRender"],
        d = c.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const u = s && i,
                      l = u ? e : n
                    return (
                      o && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && i && (r = e.length)),
                      t
                    )
                  },
                  cancel: t => {
                    const e = n.indexOf(t)
                    ;-1 !== e && n.splice(e, 1), a.delete(t)
                  },
                  process: u => {
                    if (i) o = !0
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n]
                          r(u), a.has(r) && (s.schedule(r), t())
                        }
                      ;(i = !1), o && ((o = !1), s.process(u))
                    }
                  }
                }
              return s
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        f = c.reduce((t, e) => {
          const n = d[e]
          return (
            (t[e] = (t, e = !1, r = !1) => (s || y(), n.schedule(t, e, r))), t
          )
        }, {}),
        p = c.reduce((t, e) => ((t[e] = d[e].cancel), t), {}),
        v = c.reduce((t, e) => ((t[e] = () => d[e].process(l)), t), {}),
        h = t => d[t].process(l),
        m = t => {
          ;(s = !1),
            (l.delta = a ? r : Math.max(Math.min(t - l.timestamp, 40), 1)),
            (l.timestamp = t),
            (u = !0),
            c.forEach(h),
            (u = !1),
            s && ((a = !1), o(m))
        },
        y = () => {
          ;(s = !0), (a = !0), u || o(m)
        },
        g = () => l
      var x = f
    }
  }
])
