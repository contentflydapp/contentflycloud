;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6392],
  {
    32323: function (e, t, r) {
      "use strict"
      var n = r(95318),
        u = n(r(59713)),
        a = n(r(50008))
      function o(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                ;(0, u.default)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var r = c.default,
            n = {
              loading: function (e) {
                e.error, e.isLoading
                return e.pastDelay, null
              }
            }
          e instanceof Promise
            ? (n.loader = function () {
                return e
              })
            : "function" === typeof e
            ? (n.loader = e)
            : "object" === (0, a.default)(e) && (n = i(i({}, n), e))
          var u = (n = i(i({}, n), t))
          if (u.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (u.suspense) return r(u)
          n.loadableGenerated &&
            delete (n = i(i({}, n), n.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof n.ssr) {
            if (!n.ssr) return delete n.ssr, l(r, n)
            delete n.ssr
          }
          return r(n)
        }),
        (t.noSSR = l)
      s(r(67294))
      var c = s(r(82271))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function l(e, t) {
        return delete t.webpack, delete t.modules, e(t)
      }
      ;("function" === typeof t.default ||
        ("object" === (0, a.default)(t.default) && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default))
    },
    65066: function (e, t, r) {
      "use strict"
      var n
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0)
      var u = (
        (n = r(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null)
      t.LoadableContext = u
    },
    82271: function (e, t, r) {
      "use strict"
      var n = r(95318),
        u = n(r(34575)),
        a = n(r(93913)),
        o = n(r(59713))
      function i(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                ;(0, o.default)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      function s(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return
              if ("string" === typeof e) return l(e, t)
              var r = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === r && e.constructor && (r = e.constructor.name)
              if ("Map" === r || "Set" === r) return Array.from(e)
              if (
                "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return l(e, t)
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r)
            var n = 0,
              u = function () {}
            return {
              s: u,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] }
              },
              e: function (e) {
                throw e
              },
              f: u
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var a,
          o = !0,
          i = !1
        return {
          s: function () {
            r = r.call(e)
          },
          n: function () {
            var e = r.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(i = !0), (a = e)
          },
          f: function () {
            try {
              o || null == r.return || r.return()
            } finally {
              if (i) throw a
            }
          }
        }
      }
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
        return n
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var f,
        p = (f = r(67294)) && f.__esModule ? f : { default: f },
        d = r(82021),
        h = r(65066)
      var v = [],
        m = [],
        b = !1
      function y(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null }
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e)
            })),
          r
        )
      }
      var g = (function () {
        function e(t, r) {
          ;(0, u.default)(this, e),
            (this._loadFn = t),
            (this._opts = r),
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
                var t = this._res,
                  r = this._opts
                t.loading &&
                  ("number" === typeof r.delay &&
                    (0 === r.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 })
                        }, r.delay))),
                  "number" === typeof r.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 })
                    }, r.timeout))),
                  this._res.promise
                    .then(function () {
                      e._update({}), e._clearTimeouts()
                    })
                    .catch(function (t) {
                      e._update({}), e._clearTimeouts()
                    }),
                  this._update({})
              }
            },
            {
              key: "_update",
              value: function (e) {
                ;(this._state = c(
                  c({}, this._state),
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
                var t = this
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e)
                  }
                )
              }
            }
          ]),
          e
        )
      })()
      function x(e) {
        return (function (e, t) {
          var r = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              webpack: null,
              modules: null,
              suspense: !1
            },
            t
          )
          r.suspense && (r.lazy = p.default.lazy(r.loader))
          var n = null
          function u() {
            if (!n) {
              var t = new g(e, r)
              n = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t)
              }
            }
            return n.promise()
          }
          if (!b && !r.suspense) {
            var a = r.webpack ? r.webpack() : r.modules
            a &&
              m.push(function (e) {
                var t,
                  r = s(a)
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value
                    if (-1 !== e.indexOf(n)) return u()
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              })
          }
          var o = r.suspense
            ? function (e, t) {
                return p.default.createElement(
                  r.lazy,
                  c(c({}, e), {}, { ref: t })
                )
              }
            : function (e, t) {
                u()
                var a = p.default.useContext(h.LoadableContext),
                  o = d.useSubscription(n)
                return (
                  p.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: n.retry }
                    },
                    []
                  ),
                  a &&
                    Array.isArray(r.modules) &&
                    r.modules.forEach(function (e) {
                      a(e)
                    }),
                  p.default.useMemo(
                    function () {
                      return o.loading || o.error
                        ? p.default.createElement(r.loading, {
                            isLoading: o.loading,
                            pastDelay: o.pastDelay,
                            timedOut: o.timedOut,
                            error: o.error,
                            retry: n.retry
                          })
                        : o.loaded
                        ? p.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e
                            })(o.loaded),
                            e
                          )
                        : null
                    },
                    [e, o]
                  )
                )
              }
          return (
            (o.preload = function () {
              return !r.suspense && u()
            }),
            (o.displayName = "LoadableComponent"),
            p.default.forwardRef(o)
          )
        })(y, e)
      }
      function w(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop()
          r.push(n(t))
        }
        return Promise.all(r).then(function () {
          if (e.length) return w(e, t)
        })
      }
      ;(x.preloadAll = function () {
        return new Promise(function (e, t) {
          w(v).then(e, t)
        })
      }),
        (x.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (t) {
            var r = function () {
              return (b = !0), t()
            }
            w(m, e).then(r, r)
          })
        }),
        (window.__NEXT_PRELOADREADY = x.preloadReady)
      var _ = x
      t.default = _
    },
    15933: function (e, t, r) {
      "use strict"
      r.a(
        e,
        async function (e, n) {
          try {
            r.r(t)
            var u = r(15861),
              a = r(86854),
              o = r(87757),
              i = r.n(o),
              c = r(67294),
              s = r(9008),
              l = r.n(s),
              f = r(49697),
              p = r(95641),
              d = r(99171),
              h = r(11972),
              v = r(51815),
              m = r(92906),
              b = r(31681),
              y = (await Promise.resolve().then(r.bind(r, 66985))).default,
              g = await Promise.resolve().then(r.bind(r, 24686)),
              x = g.makeJobActor,
              w = g.makeChatActor
            function e(e) {
              var t = e.identity,
                r = e.logout,
                n = (0, c.useState)(""),
                o = (0, a.Z)(n, 2),
                s = o[0],
                m = o[1],
                g = (0, c.useState)(""),
                _ = (0, a.Z)(g, 2),
                k = _[0],
                O = _[1],
                E = (0, c.useState)(""),
                S = (0, a.Z)(E, 2),
                j = S[0],
                C = S[1],
                P = (0, c.useState)(""),
                Z = (0, a.Z)(P, 2),
                z = Z[0],
                A = Z[1],
                D = (0, c.useState)(!1),
                T = (0, a.Z)(D, 2),
                L = T[0],
                M = T[1],
                R = (0, c.useState)(!1),
                I = (0, a.Z)(R, 2),
                N = I[0],
                V = I[1],
                F = (0, c.useState)(!1),
                G = (0, a.Z)(F, 2),
                X = G[0],
                U = G[1],
                q = (0, c.useState)(!1),
                H = (0, a.Z)(q, 2),
                J = H[0],
                W = H[1],
                Y = b.Ho.InternetIdentity
              function $() {
                return ($ = (0, u.Z)(
                  i().mark(function e() {
                    var r, n
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), U(!0), (e.next = 4), w(t, Y)
                            case 4:
                              return (r = e.sent), (e.next = 7), r.getManager()
                            case 7:
                              ;(n = e.sent), m(n.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), y.error(e.t0)
                            case 14:
                              return (e.prev = 14), U(!1), e.finish(14)
                            case 17:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 11, 14, 17]]
                    )
                  })
                )).apply(this, arguments)
              }
              function K() {
                return (K = (0, u.Z)(
                  i().mark(function e() {
                    var r, n
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), M(!0), (e.next = 4), w(t, Y)
                            case 4:
                              return (
                                (r = e.sent),
                                (e.next = 7),
                                r.registryTopicSize()
                              )
                            case 7:
                              ;(n = e.sent), O(n.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), y.error(e.t0)
                            case 14:
                              return (e.prev = 14), M(!1), e.finish(14)
                            case 17:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 11, 14, 17]]
                    )
                  })
                )).apply(this, arguments)
              }
              function B() {
                return (B = (0, u.Z)(
                  i().mark(function e() {
                    var r, n
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), V(!0), (e.next = 4), w(t, Y)
                            case 4:
                              return (
                                (r = e.sent),
                                (e.next = 7),
                                r.numSubscribersForNewChatRoomCreated()
                              )
                            case 7:
                              ;(n = e.sent), C(n.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), y.error(e.t0)
                            case 14:
                              return (e.prev = 14), V(!1), e.finish(14)
                            case 17:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 11, 14, 17]]
                    )
                  })
                )).apply(this, arguments)
              }
              function Q() {
                return (Q = (0, u.Z)(
                  i().mark(function e() {
                    var r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), W(!0), (e.next = 4), x(t, Y)
                            case 4:
                              return (
                                (r = e.sent), (e.next = 7), r.initSubscriber()
                              )
                            case 7:
                              A("Success"), (e.next = 14)
                              break
                            case 10:
                              ;(e.prev = 10),
                                (e.t0 = e.catch(0)),
                                A("Error: check Chrome console"),
                                y.error(e.t0)
                            case 14:
                              return (e.prev = 14), W(!1), e.finish(14)
                            case 17:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 10, 14, 17]]
                    )
                  })
                )).apply(this, arguments)
              }
              return c.createElement(
                f.W,
                { height: "100vh" },
                c.createElement(
                  p.o,
                  null,
                  c.createElement(
                    l(),
                    null,
                    c.createElement("title", null, "Content Fly")
                  ),
                  c.createElement(
                    h.gC,
                    {
                      divider: c.createElement(h.cX, {
                        borderColor: "gray.200"
                      }),
                      spacing: 4,
                      align: "stretch"
                    },
                    c.createElement(
                      h.M5,
                      null,
                      c.createElement(
                        h.gC,
                        { spacing: 4 },
                        c.createElement(d.t, null, "Content Fly PubSub Admin"),
                        c.createElement(h.xv, null, "You have logged in!"),
                        c.createElement(
                          v.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return $.apply(this, arguments)
                            },
                            isLoading: X
                          },
                          "Get Manager"
                        ),
                        c.createElement(h.xv, null, "Manager Id: ", s),
                        c.createElement(
                          v.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return K.apply(this, arguments)
                            },
                            isLoading: L
                          },
                          "Get Chat Registry Size"
                        ),
                        c.createElement(h.xv, null, "Size: ", k),
                        c.createElement(
                          v.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return B.apply(this, arguments)
                            },
                            isLoading: N
                          },
                          "Get New Chat Room Created Topic Size"
                        ),
                        c.createElement(h.xv, null, "Size: ", j),
                        c.createElement(
                          v.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return Q.apply(this, arguments)
                            },
                            isLoading: J
                          },
                          "Subscribe Job to Chat"
                        ),
                        c.createElement(h.xv, null, "Result: ", z),
                        c.createElement(
                          v.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: r
                          },
                          "Logout"
                        )
                      )
                    )
                  )
                )
              )
            }
            ;(t.default = (0, m.J3)(e)), n()
          } catch (_) {
            n(_)
          }
        },
        1
      )
    },
    99171: function (e, t, r) {
      "use strict"
      r.d(t, {
        t: function () {
          return o
        }
      })
      var n = r(87462),
        u = r(67294),
        a = r(11972),
        o = function (e) {
          return u.createElement(
            a.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            u.createElement(
              a.X6,
              (0, n.Z)(
                {
                  size: "lg",
                  bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  bgClip: "text"
                },
                e
              ),
              e.children
            )
          )
        }
    },
    95641: function (e, t, r) {
      "use strict"
      r.d(t, {
        o: function () {
          return o
        }
      })
      var n = r(87462),
        u = r(67294),
        a = r(11972),
        o = function (e) {
          return u.createElement(
            a.Kq,
            (0, n.Z)(
              {
                spacing: "1.5rem",
                width: "100%",
                maxWidth: "48rem",
                pt: "4rem",
                px: "1rem"
              },
              e
            )
          )
        }
    },
    2243: function (e, t, r) {
      "use strict"
      r.d(t, {
        u: function () {
          return a
        }
      })
      var n = r(67294),
        u = r(66956),
        a = function () {
          return n.createElement(u.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    30647: function (e, t, r) {
      "use strict"
      r.d(t, {
        S: function () {
          return s
        }
      })
      var n = r(15861),
        u = r(87757),
        a = r.n(u),
        o = r(64380),
        i = r(22169),
        c = r(31681),
        s = (function () {
          var e = (0, n.Z)(
            a().mark(function e(t, r) {
              var n, u, s, l
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(n = c.Ho.InternetIdentity),
                        (u = c.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === n ? 4 : e.t0 === u ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, o.l)()
                    case 6:
                      return (s = e.sent), e.abrupt("return", s)
                    case 8:
                      return (e.next = 10), (0, i.gX)(r || {})
                    case 10:
                      return (l = e.sent), e.abrupt("return", l)
                    case 12:
                      return e.abrupt("return", null)
                    case 13:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })()
    },
    92906: function (e, t, r) {
      "use strict"
      r.d(t, {
        J3: function () {
          return S
        },
        bv: function () {
          return E
        },
        vV: function () {
          return j
        },
        v_: function () {
          return C
        }
      })
      var n = r(87462),
        u = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        c = r(67294),
        s = r(5152),
        l = r.n(s),
        f = r(11163),
        p = r(30647),
        d = r(11972),
        h = r(49697),
        v = r(49162),
        m = r(2243),
        b = function () {
          return c.createElement(
            h.W,
            { h: "120vh" },
            c.createElement(
              d.xu,
              { mt: "120px", mb: "30px" },
              c.createElement(v.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            c.createElement(m.u, null)
          )
        },
        y = r(98400),
        g = r(23256),
        x = r(66985),
        w = r(24686),
        _ = l()(function () {
          return Promise.all([
            r.e(5297),
            r.e(6804),
            r.e(5607),
            r.e(5658),
            r.e(9213)
          ]).then(r.bind(r, 89213))
        }),
        k = l()(function () {
          return Promise.all([
            r.e(5297),
            r.e(6804),
            r.e(5607),
            r.e(5527),
            r.e(9876),
            r.e(5658),
            r.e(7906)
          ]).then(r.bind(r, 7906))
        }),
        O = l()(function () {
          return Promise.all([
            r.e(5445),
            r.e(2013),
            r.e(260),
            r.e(4617),
            r.e(6556),
            r.e(5297),
            r.e(6804),
            r.e(4597),
            r.e(5607),
            r.e(5527),
            r.e(9876),
            r.e(828),
            r.e(9748),
            r.e(5658),
            r.e(3130),
            r.e(8265)
          ]).then(r.bind(r, 78265))
        }),
        E = function (e, t) {
          return function (r) {
            return P(e, null !== t && void 0 !== t ? t : O, null, !1)(r)
          }
        },
        S = function (e) {
          return function (t) {
            return P(
              e,
              _,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        j = function (e) {
          return function (t) {
            return P(e, k, null, !1)(t)
          }
        },
        C = function (e) {
          return function (t) {
            return P(e, k, null, !0)(t)
          }
        },
        P = function (e, t, o, s) {
          return function (l) {
            var d = (0, c.useState)(null),
              h = (0, a.Z)(d, 2),
              v = h[0],
              m = h[1],
              _ = (0, c.useState)(!0),
              O = (0, a.Z)(_, 2),
              E = O[0],
              S = O[1],
              j = (0, c.useState)(""),
              C = (0, a.Z)(j, 2),
              P = C[0],
              Z = C[1],
              z = (0, c.useState)(1),
              A = (0, a.Z)(z, 2),
              D = A[0],
              T = A[1],
              L = (0, f.useRouter)(),
              M = (0, y.oR)(g.Z),
              R = M.appContext.authProvider,
              I = M.appContext.candidAuthProvider(),
              N = null !== t && void 0 !== t ? t : k
            ;(0, c.useEffect)(
              function () {
                function e() {
                  return (e = (0, u.Z)(
                    i().mark(function e() {
                      var t
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  S(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(M.appContext.authProvider, {
                                    isCreateAgent: !0
                                  })
                                )
                              case 4:
                                if (null == (t = e.sent)) {
                                  e.next = 16
                                  break
                                }
                                return (e.next = 8), t.getPrincipal()
                              case 8:
                                if (!U(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!M.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), V(t)
                              case 13:
                                G(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), q()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  x.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), S(!1), e.finish(23)
                              case 26:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[1, 20, 23, 26]]
                      )
                    })
                  )).apply(this, arguments)
                }
                !(function () {
                  e.apply(this, arguments)
                })()
              },
              [D]
            )
            var V = (function () {
                var e = (0, u.Z)(
                  i().mark(function e(t) {
                    var r, n, u, a
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, R)
                              )
                            case 3:
                              return (n = e.sent), (e.next = 6), n.login(I)
                            case 6:
                              if (
                                ((u = e.sent),
                                !(
                                  (null === (r = u.ok) || void 0 === r
                                    ? void 0
                                    : r.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (a = u.ok[0]),
                                (e.next = 11),
                                M.updateForNewSignupLogin(a)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                x.default.error(e.t0)
                            case 16:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              F = function () {
                T(D + 1)
              },
              G = (function () {
                var e = (0, u.Z)(
                  i().mark(function e(t) {
                    var n, u
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((m(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), r.e(7130).then(r.bind(r, 47130))
                            )
                          case 4:
                            ;(n = e.sent),
                              (u = n.Usergeek).setPrincipal(t.getPrincipal()),
                              u.trackSession()
                          case 8:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()
            function X() {
              return (
                (X = (0, u.Z)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return G(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            U(e.sent)
                              ? G(t)
                              : Z(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                X.apply(this, arguments)
              )
            }
            function U(e) {
              if (null == o) return !0
              var t = o.split(",").map(function (e) {
                return e.trim()
              })
              return "" == o.trim() || t.includes(e.toString())
            }
            var q = (function () {
                var e = (0, u.Z)(
                  i().mark(function e() {
                    var t
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(R)), (e.next = 3), t()
                          case 3:
                            G(null), M.reset(), (0, w.clearCache)()
                          case 6:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })(),
              H = (function () {
                var e = (0, u.Z)(
                  i().mark(function e() {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), q()
                          case 2:
                            L.push("/")
                          case 3:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()
            return null != v
              ? c.createElement(
                  e,
                  (0, n.Z)({ identity: v, logout: H, triggerAuthUpdate: F }, l)
                )
              : E
              ? c.createElement(b, null)
              : s
              ? c.createElement(e, (0, n.Z)({}, l, { triggerAuthUpdate: F }))
              : c.createElement(N, {
                  handleAuthenticated: function (e) {
                    return X.apply(this, arguments)
                  },
                  warningMesg: P
                })
          }
        }
    },
    31507: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/pubsub",
        function () {
          return r(15933)
        }
      ])
    },
    82021: function (e, t, r) {
      !(function () {
        "use strict"
        var t = {
            800: function (e) {
              var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable
              function u(e) {
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
                  for (var t = {}, r = 0; r < 10; r++)
                    t["_" + String.fromCharCode(r)] = r
                  var n = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                  })
                  if ("0123456789" !== n.join("")) return !1
                  var u = {}
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                      u[e] = e
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, u)).join("")
                  )
                } catch (e) {
                  return !1
                }
              })()
                ? Object.assign
                : function (e, a) {
                    for (var o, i, c = u(e), s = 1; s < arguments.length; s++) {
                      for (var l in (o = Object(arguments[s])))
                        r.call(o, l) && (c[l] = o[l])
                      if (t) {
                        i = t(o)
                        for (var f = 0; f < i.length; f++)
                          n.call(o, i[f]) && (c[i[f]] = o[i[f]])
                      }
                    }
                    return c
                  }
            },
            569: function (e, t, r) {
              0
            },
            403: function (e, t, r) {
              var n = r(800),
                u = r(522)
              t.useSubscription = function (e) {
                var t = e.getCurrentValue,
                  r = e.subscribe,
                  a = u.useState(function () {
                    return { getCurrentValue: t, subscribe: r, value: t() }
                  })
                e = a[0]
                var o = a[1]
                return (
                  (a = e.value),
                  (e.getCurrentValue === t && e.subscribe === r) ||
                    ((a = t()),
                    o({ getCurrentValue: t, subscribe: r, value: a })),
                  u.useDebugValue(a),
                  u.useEffect(
                    function () {
                      function e() {
                        if (!u) {
                          var e = t()
                          o(function (u) {
                            return u.getCurrentValue !== t ||
                              u.subscribe !== r ||
                              u.value === e
                              ? u
                              : n({}, u, { value: e })
                          })
                        }
                      }
                      var u = !1,
                        a = r(e)
                      return (
                        e(),
                        function () {
                          ;(u = !0), a()
                        }
                      )
                    },
                    [t, r]
                  ),
                  a
                )
              }
            },
            138: function (e, t, r) {
              e.exports = r(403)
            },
            522: function (e) {
              e.exports = r(67294)
            }
          },
          n = {}
        function u(e) {
          var r = n[e]
          if (void 0 !== r) return r.exports
          var a = (n[e] = { exports: {} }),
            o = !0
          try {
            t[e](a, a.exports, u), (o = !1)
          } finally {
            o && delete n[e]
          }
          return a.exports
        }
        u.ab = "//"
        var a = u(138)
        e.exports = a
      })()
    },
    5152: function (e, t, r) {
      e.exports = r(32323)
    }
  },
  function (e) {
    e.O(0, [2328, 8760, 253, 2144, 2888, 9774, 179], function () {
      return (t = 31507), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  }
])
