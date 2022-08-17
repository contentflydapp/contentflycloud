;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7398],
  {
    32323: function (e, r, t) {
      "use strict"
      var n = t(95318),
        o = n(t(59713)),
        a = n(t(50008))
      function i(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? i(Object(t), !0).forEach(function (r) {
                ;(0, o.default)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = function (e, r) {
          var t = l.default,
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
            : "object" === (0, a.default)(e) && (n = u(u({}, n), e))
          var o = (n = u(u({}, n), r))
          if (o.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (o.suspense) return t(o)
          n.loadableGenerated &&
            delete (n = u(u({}, n), n.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof n.ssr) {
            if (!n.ssr) return delete n.ssr, c(t, n)
            delete n.ssr
          }
          return t(n)
        }),
        (r.noSSR = c)
      s(t(67294))
      var l = s(t(82271))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function c(e, r) {
        return delete r.webpack, delete r.modules, e(r)
      }
      ;("function" === typeof r.default ||
        ("object" === (0, a.default)(r.default) && null !== r.default)) &&
        (Object.assign(r.default, r), (e.exports = r.default))
    },
    65066: function (e, r, t) {
      "use strict"
      var n
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.LoadableContext = void 0)
      var o = (
        (n = t(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null)
      r.LoadableContext = o
    },
    82271: function (e, r, t) {
      "use strict"
      var n = t(95318),
        o = n(t(34575)),
        a = n(t(93913)),
        i = n(t(59713))
      function u(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? u(Object(t), !0).forEach(function (r) {
                ;(0, i.default)(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                )
              })
        }
        return e
      }
      function s(e, r) {
        var t =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!t) {
          if (
            Array.isArray(e) ||
            (t = (function (e, r) {
              if (!e) return
              if ("string" === typeof e) return c(e, r)
              var t = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === t && e.constructor && (t = e.constructor.name)
              if ("Map" === t || "Set" === t) return Array.from(e)
              if (
                "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              )
                return c(e, r)
            })(e)) ||
            (r && e && "number" === typeof e.length)
          ) {
            t && (e = t)
            var n = 0,
              o = function () {}
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] }
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
      function c(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t]
        return n
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0)
      var d,
        f = (d = t(67294)) && d.__esModule ? d : { default: d },
        p = t(82021),
        m = t(65066)
      var h = [],
        b = [],
        g = !1
      function v(e) {
        var r = e(),
          t = { loading: !0, loaded: null, error: null }
        return (
          (t.promise = r
            .then(function (e) {
              return (t.loading = !1), (t.loaded = e), e
            })
            .catch(function (e) {
              throw ((t.loading = !1), (t.error = e), e)
            })),
          t
        )
      }
      var x = (function () {
        function e(r, t) {
          ;(0, o.default)(this, e),
            (this._loadFn = r),
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
                var r = this._res,
                  t = this._opts
                r.loading &&
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
                    .catch(function (r) {
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
                var r = this
                return (
                  this._callbacks.add(e),
                  function () {
                    r._callbacks.delete(e)
                  }
                )
              }
            }
          ]),
          e
        )
      })()
      function y(e) {
        return (function (e, r) {
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
            r
          )
          t.suspense && (t.lazy = f.default.lazy(t.loader))
          var n = null
          function o() {
            if (!n) {
              var r = new x(e, t)
              n = {
                getCurrentValue: r.getCurrentValue.bind(r),
                subscribe: r.subscribe.bind(r),
                retry: r.retry.bind(r),
                promise: r.promise.bind(r)
              }
            }
            return n.promise()
          }
          if (!g && !t.suspense) {
            var a = t.webpack ? t.webpack() : t.modules
            a &&
              b.push(function (e) {
                var r,
                  t = s(a)
                try {
                  for (t.s(); !(r = t.n()).done; ) {
                    var n = r.value
                    if (-1 !== e.indexOf(n)) return o()
                  }
                } catch (i) {
                  t.e(i)
                } finally {
                  t.f()
                }
              })
          }
          var i = t.suspense
            ? function (e, r) {
                return f.default.createElement(
                  t.lazy,
                  l(l({}, e), {}, { ref: r })
                )
              }
            : function (e, r) {
                o()
                var a = f.default.useContext(m.LoadableContext),
                  i = p.useSubscription(n)
                return (
                  f.default.useImperativeHandle(
                    r,
                    function () {
                      return { retry: n.retry }
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
                            retry: n.retry
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
        })(v, e)
      }
      function w(e, r) {
        for (var t = []; e.length; ) {
          var n = e.pop()
          t.push(n(r))
        }
        return Promise.all(t).then(function () {
          if (e.length) return w(e, r)
        })
      }
      ;(y.preloadAll = function () {
        return new Promise(function (e, r) {
          w(h).then(e, r)
        })
      }),
        (y.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (r) {
            var t = function () {
              return (g = !0), r()
            }
            w(b, e).then(t, t)
          })
        }),
        (window.__NEXT_PRELOADREADY = y.preloadReady)
      var _ = y
      r.default = _
    },
    63242: function (e, r, t) {
      "use strict"
      t.a(e, async function (e, n) {
        try {
          t.r(r)
          var o = t(87462),
            a = t(67294),
            i = t(9008),
            u = t.n(i),
            l = t(11163),
            s = t(62639),
            c = t(11972),
            d = t(96217),
            f = t(13130),
            p = t(63298),
            m = t(92906),
            h = e([d, f, p])
          ;[d, f, p] = h.then ? (await h)() : h
          var b = function (e) {
            return a.createElement(
              s.OK,
              {
                color: "black",
                fontSize: { md: "16px", lg: "20px" },
                fontWeight: "medium",
                _selected: {
                  fontWeight: "semibold",
                  borderBottom: "3px solid currentColor",
                  borderBottomColor: "purple_2"
                }
              },
              e.children
            )
          }
          function g(e) {
            var r = e.identity,
              t = (0, l.useRouter)()
            return a.createElement(
              f.Z,
              {
                opacity: "0.5",
                pointerEvents: "none",
                hideBottomBar: !0,
                identity: r
              },
              a.createElement(
                u(),
                null,
                a.createElement("title", null, "Create Account - Content Fly")
              ),
              a.createElement(
                s.mQ,
                { isLazy: !0, variant: "unstyled", defaultIndex: 0 },
                a.createElement(
                  c.kC,
                  { h: "81px", display: { base: "none", md: "flex" } },
                  a.createElement(
                    s.td,
                    { pt: "10px", pl: { md: "45px", lg: "80px" } },
                    a.createElement(b, null, "Create Account")
                  ),
                  a.createElement(c.LZ, null),
                  a.createElement(d.d, e)
                ),
                a.createElement(c.iz, {
                  h: "1px",
                  color: "gray_light",
                  display: { base: "none", md: "flex" }
                }),
                a.createElement(
                  s.nP,
                  null,
                  a.createElement(
                    s.x4,
                    null,
                    a.createElement(
                      p.Z,
                      (0, o.Z)(
                        {
                          openHome: function () {
                            t.push("/", "")
                          }
                        },
                        e
                      )
                    )
                  )
                )
              )
            )
          }
          ;(r.default = (0, m.bv)(g)), n()
        } catch (g) {
          n(g)
        }
      })
    },
    2243: function (e, r, t) {
      "use strict"
      t.d(r, {
        u: function () {
          return a
        }
      })
      var n = t(67294),
        o = t(66956),
        a = function () {
          return n.createElement(o.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    42289: function (e, r, t) {
      "use strict"
      t.d(r, {
        D: function () {
          return i
        }
      })
      var n = t(87462),
        o = t(67294),
        a = t(11972),
        i = function (e) {
          return o.createElement(
            a.X6,
            (0, n.Z)(
              {
                pt: "12px",
                pb: "27px",
                textAlign: { base: "center", md: "unset" },
                color: "black",
                fontSize: "32px",
                fontWeight: "semibold"
              },
              e
            ),
            e.children
          )
        }
    },
    30647: function (e, r, t) {
      "use strict"
      t.d(r, {
        S: function () {
          return s
        }
      })
      var n = t(15861),
        o = t(87757),
        a = t.n(o),
        i = t(64380),
        u = t(22169),
        l = t(31681),
        s = (function () {
          var e = (0, n.Z)(
            a().mark(function e(r, t) {
              var n, o, s, c
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(n = l.Ho.InternetIdentity),
                        (o = l.Ho.Plug),
                        (e.t0 = r),
                        (e.next = e.t0 === n ? 4 : e.t0 === o ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, i.l)()
                    case 6:
                      return (s = e.sent), e.abrupt("return", s)
                    case 8:
                      return (e.next = 10), (0, u.gX)(t || {})
                    case 10:
                      return (c = e.sent), e.abrupt("return", c)
                    case 12:
                      return e.abrupt("return", null)
                    case 13:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (r, t) {
            return e.apply(this, arguments)
          }
        })()
    },
    92906: function (e, r, t) {
      "use strict"
      t.d(r, {
        J3: function () {
          return S
        },
        bv: function () {
          return k
        },
        vV: function () {
          return Z
        },
        v_: function () {
          return T
        }
      })
      var n = t(87462),
        o = t(15861),
        a = t(86854),
        i = t(87757),
        u = t.n(i),
        l = t(67294),
        s = t(5152),
        c = t.n(s),
        d = t(11163),
        f = t(30647),
        p = t(11972),
        m = t(49697),
        h = t(49162),
        b = t(2243),
        g = function () {
          return l.createElement(
            m.W,
            { h: "120vh" },
            l.createElement(
              p.xu,
              { mt: "120px", mb: "30px" },
              l.createElement(h.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            l.createElement(b.u, null)
          )
        },
        v = t(98400),
        x = t(23256),
        y = t(66985),
        w = t(24686),
        _ = c()(function () {
          return Promise.all([
            t.e(5297),
            t.e(6804),
            t.e(5607),
            t.e(5658),
            t.e(9213)
          ]).then(t.bind(t, 89213))
        }),
        E = c()(function () {
          return Promise.all([
            t.e(5297),
            t.e(6804),
            t.e(5607),
            t.e(5527),
            t.e(9876),
            t.e(5658),
            t.e(7906)
          ]).then(t.bind(t, 7906))
        }),
        q = c()(function () {
          return Promise.all([
            t.e(5445),
            t.e(2013),
            t.e(260),
            t.e(4617),
            t.e(6556),
            t.e(5297),
            t.e(6804),
            t.e(4597),
            t.e(5607),
            t.e(5527),
            t.e(9876),
            t.e(828),
            t.e(9748),
            t.e(5658),
            t.e(3130),
            t.e(8265)
          ]).then(t.bind(t, 78265))
        }),
        k = function (e, r) {
          return function (t) {
            return O(e, null !== r && void 0 !== r ? r : q, null, !1)(t)
          }
        },
        S = function (e) {
          return function (r) {
            return O(
              e,
              _,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(r)
          }
        },
        Z = function (e) {
          return function (r) {
            return O(e, E, null, !1)(r)
          }
        },
        T = function (e) {
          return function (r) {
            return O(e, E, null, !0)(r)
          }
        },
        O = function (e, r, i, s) {
          return function (c) {
            var p = (0, l.useState)(null),
              m = (0, a.Z)(p, 2),
              h = m[0],
              b = m[1],
              _ = (0, l.useState)(!0),
              q = (0, a.Z)(_, 2),
              k = q[0],
              S = q[1],
              Z = (0, l.useState)(""),
              T = (0, a.Z)(Z, 2),
              O = T[0],
              P = T[1],
              C = (0, l.useState)(1),
              I = (0, a.Z)(C, 2),
              N = I[0],
              R = I[1],
              j = (0, d.useRouter)(),
              L = (0, v.oR)(x.Z),
              D = L.appContext.authProvider,
              A = L.appContext.candidAuthProvider(),
              M = null !== r && void 0 !== r ? r : E
            ;(0, l.useEffect)(
              function () {
                function e() {
                  return (e = (0, o.Z)(
                    u().mark(function e() {
                      var r
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  S(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, f.S)(L.appContext.authProvider, {
                                    isCreateAgent: !0
                                  })
                                )
                              case 4:
                                if (null == (r = e.sent)) {
                                  e.next = 16
                                  break
                                }
                                return (e.next = 8), r.getPrincipal()
                              case 8:
                                if (!B(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!L.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), z(r)
                              case 13:
                                F(r)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), V()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  y.default.error(e.t0)
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
              [N]
            )
            var z = (function () {
                var e = (0, o.Z)(
                  u().mark(function e(r) {
                    var t, n, o, a
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(r, D)
                              )
                            case 3:
                              return (n = e.sent), (e.next = 6), n.login(A)
                            case 6:
                              if (
                                ((o = e.sent),
                                !(
                                  (null === (t = o.ok) || void 0 === t
                                    ? void 0
                                    : t.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (a = o.ok[0]),
                                (e.next = 11),
                                L.updateForNewSignupLogin(a)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                y.default.error(e.t0)
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
                return function (r) {
                  return e.apply(this, arguments)
                }
              })(),
              U = function () {
                R(N + 1)
              },
              F = (function () {
                var e = (0, o.Z)(
                  u().mark(function e(r) {
                    var n, o
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((b(r), null == r)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), t.e(7130).then(t.bind(t, 47130))
                            )
                          case 4:
                            ;(n = e.sent),
                              (o = n.Usergeek).setPrincipal(r.getPrincipal()),
                              o.trackSession()
                          case 8:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (r) {
                  return e.apply(this, arguments)
                }
              })()
            function W() {
              return (
                (W = (0, o.Z)(
                  u().mark(function e(r) {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != r) {
                              e.next = 3
                              break
                            }
                            return F(r), e.abrupt("return")
                          case 3:
                            return (e.next = 5), r.getPrincipal()
                          case 5:
                            B(e.sent)
                              ? F(r)
                              : P(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                W.apply(this, arguments)
              )
            }
            function B(e) {
              if (null == i) return !0
              var r = i.split(",").map(function (e) {
                return e.trim()
              })
              return "" == i.trim() || r.includes(e.toString())
            }
            var V = (function () {
                var e = (0, o.Z)(
                  u().mark(function e() {
                    var r
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (r = (0, w.makeLogout)(D)), (e.next = 3), r()
                          case 3:
                            F(null), L.reset(), (0, w.clearCache)()
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
                var e = (0, o.Z)(
                  u().mark(function e() {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), V()
                          case 2:
                            j.push("/")
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
            return null != h
              ? l.createElement(
                  e,
                  (0, n.Z)({ identity: h, logout: H, triggerAuthUpdate: U }, c)
                )
              : k
              ? l.createElement(g, null)
              : s
              ? l.createElement(e, (0, n.Z)({}, c, { triggerAuthUpdate: U }))
              : l.createElement(M, {
                  handleAuthenticated: function (e) {
                    return W.apply(this, arguments)
                  },
                  warningMesg: O
                })
          }
        }
    },
    77506: function (e, r, t) {
      "use strict"
      t.d(r, {
        f: function () {
          return i
        }
      })
      var n = t(87462),
        o = t(67294),
        a = t(33932),
        i = function (e) {
          return o.createElement(
            a.y,
            (0, n.Z)(
              {
                pb: { md: "10px", lg: "20px" },
                w: { base: "340px", md: "300px", "2xl": "340px" }
              },
              e
            ),
            e.children
          )
        }
    },
    75841: function (e, r, t) {
      "use strict"
      t.d(r, {
        h: function () {
          return u
        }
      })
      var n = t(87462),
        o = t(67294),
        a = t(91822),
        i = t(15658),
        u = function (e) {
          return o.createElement(
            a.Z,
            (0, n.Z)(
              {
                id: "country",
                title: "Country",
                placeholder: "\u2b07 Select",
                isRequired: !0,
                pb: { md: "10px", lg: "20px" },
                w: { base: "340px", md: "300px", "2xl": "340px" },
                icon: o.createElement(i.YI, { color: "gray_light2" })
              },
              e
            ),
            e.children
          )
        }
    },
    92619: function (e, r, t) {
      "use strict"
      t.d(r, {
        Z: function () {
          return s
        }
      })
      var n = t(87462),
        o = t(45987),
        a = t(67294),
        i = t(73733),
        u = t(99575),
        l = [
          "id",
          "field",
          "errorMesg",
          "isChecked",
          "isRequired",
          "isInvalid",
          "w",
          "children"
        ]
      function s(e) {
        var r = e.id,
          t = e.field,
          s = e.errorMesg,
          c = e.isChecked,
          d = e.isRequired,
          f = e.isInvalid,
          p = e.w,
          m = e.children,
          h = (0, o.Z)(e, l)
        return a.createElement(
          i.NI,
          { isRequired: d, isInvalid: f, w: p },
          a.createElement(
            i.lX,
            (0, n.Z)(
              {
                htmlFor: r,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              h,
              { px: "22px" }
            ),
            a.createElement(
              u.XZ,
              (0, n.Z)({ id: r }, t, {
                defaultIsChecked: c,
                isRequired: d,
                isInvalid: f,
                size: "lg",
                spacing: "1rem",
                iconColor: "purple",
                colorScheme: "white"
              }),
              m
            )
          ),
          a.createElement(i.J1, null, s)
        )
      }
    },
    33932: function (e, r, t) {
      "use strict"
      t.d(r, {
        y: function () {
          return c
        }
      })
      var n = t(87462),
        o = t(45987),
        a = t(67294),
        i = t(73733),
        u = t(84597),
        l = t(25996),
        s = [
          "id",
          "type",
          "field",
          "rightIcon",
          "placeholder",
          "errorMesg",
          "isRequired",
          "isInvalid",
          "variant",
          "inputFontWeight",
          "inputFontColor",
          "inputFontSize"
        ],
        c = (0, a.forwardRef)(function (e, r) {
          var t = e.id,
            c = e.type,
            d = e.field,
            f = e.rightIcon,
            p = e.placeholder,
            m = e.errorMesg,
            h = e.isRequired,
            b = e.isInvalid,
            g = e.variant,
            v = e.inputFontWeight,
            x = e.inputFontColor,
            y = e.inputFontSize,
            w = (0, o.Z)(e, s)
          return a.createElement(
            i.NI,
            (0, n.Z)(
              {
                isRequired: h,
                isInvalid: b,
                w: { base: "300px", md: "324px", lg: "364px", xl: "394px" }
              },
              w
            ),
            a.createElement(
              i.lX,
              {
                htmlFor: t,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              e.children
            ),
            a.createElement(
              u.BZ,
              null,
              a.createElement(
                u.II,
                (0, n.Z)(
                  {
                    id: t,
                    placeholder: p,
                    variant: g,
                    fontWeight: v,
                    fontSize: y,
                    color: x,
                    ref: r
                  },
                  d,
                  {
                    focusBorderColor: "purple",
                    h: { base: "40px", md: "40px", lg: "50px" },
                    type: c,
                    onKeyPress: function (e) {
                      ;(0, l.r)(e) && e.preventDefault()
                    }
                  }
                )
              ),
              f && a.createElement(u.xH, { children: f })
            ),
            a.createElement(i.J1, null, m)
          )
        })
      c.displayName = "FormInput"
    },
    91822: function (e, r, t) {
      "use strict"
      t.d(r, {
        Z: function () {
          return s
        }
      })
      var n = t(87462),
        o = t(45987),
        a = t(67294),
        i = t(73733),
        u = t(24834),
        l = [
          "id",
          "field",
          "title",
          "placeholder",
          "icon",
          "errorMesg",
          "isRequired",
          "isInvalid"
        ]
      function s(e) {
        var r = e.id,
          t = e.field,
          s = e.title,
          c = e.placeholder,
          d = e.icon,
          f = e.errorMesg,
          p = e.isRequired,
          m = e.isInvalid,
          h = (0, o.Z)(e, l)
        return a.createElement(
          i.NI,
          (0, n.Z)({ isRequired: p, isInvalid: m }, h),
          a.createElement(
            i.lX,
            {
              htmlFor: r,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            s
          ),
          a.createElement(
            u.Z,
            (0, n.Z)({ id: r }, t, { placeholder: c, icon: d }),
            e.children
          ),
          a.createElement(i.J1, null, f)
        )
      }
    },
    24834: function (e, r, t) {
      "use strict"
      t.d(r, {
        Z: function () {
          return l
        }
      })
      var n = t(87462),
        o = t(45987),
        a = t(67294),
        i = t(62304),
        u = ["icon"]
      function l(e) {
        var r = e.icon,
          t = (0, o.Z)(e, u)
        return a.createElement(
          i.Ph,
          (0, n.Z)(
            {
              rootProps: { style: { marginTop: "8px" } },
              size: "md",
              h: { base: "40px", md: "40px", lg: "50px" },
              iconColor: "gray_light2",
              iconSize: "14px",
              icon: r,
              _active: { color: "purple", borderColor: "purple" },
              _focus: { color: "purple", borderColor: "purple" }
            },
            t
          ),
          e.children
        )
      }
    },
    63298: function (e, r, t) {
      "use strict"
      t.a(
        e,
        async function (e, n) {
          try {
            var o = t(87462),
              a = t(15861),
              i = t(86854),
              u = t(87757),
              l = t.n(u),
              s = t(67294),
              c = t(5152),
              d = t.n(c),
              f = t(82175),
              p = t(45607),
              m = t(11972),
              h = t(15040),
              b = t(25927),
              g = t(59876),
              v = t(32512),
              x = t(15658),
              y = t(92619),
              w = t(42273),
              _ = t(70216),
              E = t(77506),
              q = t(75841),
              k = t(42289),
              S = t(4349),
              Z = t(50828),
              T = t(98400),
              O = t(23256),
              P = t(66985),
              C = t(42340),
              I = t(5508),
              N = t(31681),
              R = d()(function () {
                return t.e(7643).then(t.bind(t, 27643))
              }),
              j = await Promise.all([t.e(8005), t.e(6451)]).then(
                t.bind(t, 76451)
              ),
              L = j.fileToCanisterBinaryStoreFormat,
              D = j.resizeImage,
              A = (await Promise.resolve().then(t.bind(t, 66897))).showToast,
              M = (await t.e(5985).then(t.bind(t, 5985))).actorRunner,
              z = (await Promise.resolve().then(t.bind(t, 24686)))
                .makeUserProfileActor
            function e(e) {
              var r = e.identity,
                t = e.openHome,
                n = (0, p.pm)(),
                u = (0, T.oR)(O.Z),
                c = u.user,
                d = u.appContext.authProvider,
                Z = (0, s.useState)(null),
                j = (0, i.Z)(Z, 2),
                U = j[0],
                F = j[1],
                W = (0, s.useState)(null),
                B = (0, i.Z)(W, 2),
                V = B[0],
                H = B[1],
                K = (0, v.uI)({
                  maxFiles: 1,
                  accept: N.Et.DefaultImageType,
                  onDrop: (function () {
                    var e = (0, a.Z)(
                      l().mark(function e(r) {
                        var t, o
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(r.length > 0)) {
                                    e.next = 14
                                    break
                                  }
                                  return (
                                    (e.prev = 1), (t = r[0]), (e.next = 5), D(t)
                                  )
                                case 5:
                                  ;(o = e.sent),
                                    F(o),
                                    H(URL.createObjectURL(o)),
                                    (e.next = 14)
                                  break
                                case 10:
                                  ;(e.prev = 10),
                                    (e.t0 = e.catch(1)),
                                    P.default.error(e.t0),
                                    A(
                                      n,
                                      "Profile Picture",
                                      "We have a problem processing your image. Please choose a new one.",
                                      "warning"
                                    )
                                case 14:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 10]]
                        )
                      })
                    )
                    return function (r) {
                      return e.apply(this, arguments)
                    }
                  })()
                }),
                X = K.getRootProps,
                G = K.getInputProps
              ;(0, s.useEffect)(
                function () {
                  return function () {
                    URL.revokeObjectURL(V)
                  }
                },
                [V]
              )
              var J = (0, s.useMemo)(function () {
                  return S.O
                }, []),
                Y = S.H.map(function (e) {
                  return s.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.label
                  )
                }),
                Q = J.map(function (e) {
                  return s.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.label
                  )
                }),
                $ = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(r, t) {
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                U ||
                                (A(
                                  n,
                                  "Profile picture missing",
                                  "Please upload your profile picture.",
                                  "warning"
                                ),
                                0)
                              ) {
                                e.next = 2
                                break
                              }
                              return e.abrupt("return")
                            case 2:
                              return (e.next = 4), ee(r, t)
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (r, t) {
                    return e.apply(this, arguments)
                  }
                })(),
                ee = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(o, i) {
                      var s, c, f, p, m, h, b
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (s = o.username),
                                (c = o.firstName),
                                (f = o.lastName),
                                (p = o.brand),
                                (m = o.website),
                                (h = o.country),
                                (b = {
                                  appStore: u,
                                  showErrorMesg: re,
                                  finalClosure: function () {
                                    i.setSubmitting(!1)
                                  }
                                }),
                                (e.next = 4),
                                M(
                                  b,
                                  (0, a.Z)(
                                    l().mark(function e() {
                                      var o, a, i, b, g
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (e.next = 2), L(U)
                                            case 2:
                                              return (
                                                (o = e.sent),
                                                (a = {
                                                  username: s,
                                                  firstName: c,
                                                  lastName: f,
                                                  brand: p,
                                                  website: m,
                                                  country: h,
                                                  profileImage: o
                                                }),
                                                (e.next = 6),
                                                z(r, d)
                                              )
                                            case 6:
                                              return (
                                                (i = e.sent),
                                                (e.next = 9),
                                                i.createUser(a, (0, I.$6)(d))
                                              )
                                            case 9:
                                              ;(b = e.sent).ok
                                                ? ((g = b.ok),
                                                  u.updateForNewSignupLogin(g),
                                                  A(
                                                    n,
                                                    "Account created",
                                                    "Congratulations! \ud83c\udf89\ud83e\udd73 We've created a Content Fly account for you.",
                                                    "success"
                                                  ),
                                                  t())
                                                : b.err.duplicated_username
                                                ? A(
                                                    n,
                                                    "\ud83d\ude05 Almost there...",
                                                    "Your username ".concat(
                                                      s,
                                                      " is already taken. Please pick another one."
                                                    ),
                                                    "warning"
                                                  )
                                                : (P.default.error(b.err),
                                                  A(
                                                    n,
                                                    "\ud83e\udd16 We have a problem",
                                                    "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
                                                    "error"
                                                  ))
                                            case 11:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (r, t) {
                    return e.apply(this, arguments)
                  }
                })(),
                re = function () {
                  A(
                    n,
                    "\ud83e\udd16 We have a problem",
                    "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
                    "error"
                  )
                }
              return s.createElement(
                f.J9,
                {
                  initialValues: {
                    username: c.username,
                    firstName: c.firstName,
                    lastName: c.lastName,
                    brand: c.brand,
                    website: c.website,
                    country: c.country
                  },
                  validationSchema: C.IY,
                  onSubmit: $
                },
                function (e) {
                  return s.createElement(
                    f.l0,
                    { style: { width: "100%" } },
                    s.createElement(
                      m.xu,
                      { pl: { base: "16px", md: "30px", lg: "80px" } },
                      s.createElement(k.D, null, "Profile"),
                      s.createElement(
                        m.kC,
                        { wrap: "wrap-reverse", pl: "0px", py: "4px" },
                        s.createElement(
                          m.kC,
                          {
                            wrap: "wrap",
                            py: "4px",
                            width: { base: "100%", lg: "unset" }
                          },
                          s.createElement(
                            m.Kq,
                            {
                              spacing: "12px",
                              px: "20px",
                              alignItems: { base: "center", md: "normal" },
                              width: { base: "100%", md: "unset" }
                            },
                            s.createElement(
                              f.gN,
                              { name: "username" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  E.f,
                                  {
                                    id: "username",
                                    field: r,
                                    isInvalid:
                                      t.errors.username && t.touched.username,
                                    errorMesg: t.errors.username,
                                    isRequired: !0,
                                    rightIcon: s.createElement(x.ew, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Username"
                                )
                              }
                            ),
                            s.createElement(
                              f.gN,
                              { name: "firstName" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  E.f,
                                  {
                                    id: "firstName",
                                    field: r,
                                    isInvalid:
                                      t.errors.firstName && t.touched.firstName,
                                    errorMesg: t.errors.firstName,
                                    isRequired: !0
                                  },
                                  "First name"
                                )
                              }
                            ),
                            s.createElement(
                              f.gN,
                              { name: "lastName" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  E.f,
                                  {
                                    id: "lastName",
                                    field: r,
                                    isInvalid:
                                      t.errors.lastName && t.touched.lastName,
                                    errorMesg: t.errors.lastName,
                                    isRequired: !0
                                  },
                                  "Last name"
                                )
                              }
                            )
                          ),
                          s.createElement(
                            m.Kq,
                            {
                              spacing: "12px",
                              px: "20px",
                              alignItems: { base: "center", lg: "normal" },
                              width: { base: "100%", md: "unset" }
                            },
                            s.createElement(
                              f.gN,
                              { name: "brand" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  E.f,
                                  {
                                    id: "brand",
                                    field: r,
                                    isInvalid:
                                      t.errors.brand && t.touched.brand,
                                    errorMesg: t.errors.brand,
                                    isRequired: !0,
                                    rightIcon: s.createElement(x.Vr, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Brand / Business Name",
                                  s.createElement(
                                    h.u,
                                    {
                                      label:
                                        "If you are content creator, enter your business name known to others. If you are brand, enter your brand name.",
                                      fontSize: "md",
                                      bg: "gray.300",
                                      color: "black"
                                    },
                                    s.createElement(g.hQ, {
                                      mx: "6px",
                                      w: "18px",
                                      h: "18px",
                                      bottom: "3px",
                                      position: "relative",
                                      color: "purple"
                                    })
                                  )
                                )
                              }
                            ),
                            s.createElement(
                              f.gN,
                              { name: "website" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  E.f,
                                  {
                                    id: "website",
                                    field: r,
                                    isInvalid:
                                      t.errors.website && t.touched.website,
                                    errorMesg: t.errors.website,
                                    isRequired: !0,
                                    rightIcon: s.createElement(x.cU, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Website URL"
                                )
                              }
                            ),
                            s.createElement(
                              f.gN,
                              { name: "country" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return s.createElement(
                                  q.h,
                                  {
                                    field: r,
                                    isInvalid:
                                      t.errors.country && t.touched.country,
                                    errorMesg: t.errors.country
                                  },
                                  Y,
                                  Q
                                )
                              }
                            )
                          )
                        ),
                        s.createElement(
                          m.Kq,
                          {
                            px: "20px",
                            alignItems: "center",
                            width: { base: "100%", md: "unset" }
                          },
                          s.createElement(
                            m.Kq,
                            (0, o.Z)(
                              { spacing: 4 },
                              X({ className: "dropzone" }),
                              { alignItems: "center" }
                            ),
                            s.createElement(
                              b.qE,
                              {
                                showBorder: !0,
                                borderColor: "purple_light2",
                                w: "100px",
                                h: "100px",
                                icon: s.createElement(x.xm, { w: "32px" }),
                                src: V,
                                _hover: { cursor: "pointer" }
                              },
                              s.createElement(
                                h.u,
                                {
                                  label:
                                    "Click to select a file or drag and drop a file to the thumbnail",
                                  fontSize: "md",
                                  bg: "gray.300",
                                  color: "black"
                                },
                                s.createElement(g.hQ, {
                                  right: "-20px",
                                  w: "18px",
                                  h: "18px",
                                  bottom: "0px",
                                  position: "absolute",
                                  color: "purple"
                                })
                              )
                            ),
                            s.createElement("input", G()),
                            s.createElement(
                              m.xv,
                              {
                                pb: "12px",
                                color: "purple",
                                fontSize: "16px",
                                _hover: { cursor: "pointer" }
                              },
                              "Upload Profile Picture",
                              " "
                            )
                          )
                        )
                      ),
                      s.createElement(
                        m.xu,
                        { px: "20px", pt: { base: "16px", md: "unset" } },
                        s.createElement(f.gN, { name: "terms" }, function (e) {
                          var r = e.field,
                            t = e.form
                          return s.createElement(
                            y.Z,
                            {
                              id: "terms",
                              field: r,
                              isInvalid: t.errors.terms && t.touched.terms,
                              errorMesg: t.errors.terms,
                              isRequired: !0,
                              textAlign: { base: "center", md: "unset" },
                              w: { base: "unset", md: "320px" }
                            },
                            s.createElement(
                              m.xv,
                              { fontWeight: "medium", fontSize: "13px" },
                              "Agree to",
                              " ",
                              s.createElement(
                                _.Z,
                                { href: "terms.html" },
                                "Terms of use",
                                s.createElement(g.h0, { ml: "6px", mb: "2px" })
                              )
                            )
                          )
                        })
                      ),
                      s.createElement(
                        m.xu,
                        {
                          textAlign: { base: "center", md: "unset" },
                          px: "20px"
                        },
                        s.createElement(
                          w.Z,
                          {
                            mt: "26px",
                            mb: "100px",
                            isLoading: e.isSubmitting,
                            w: { base: "340px", md: "300px", "2xl": "340px" },
                            type: "submit"
                          },
                          "Create Account"
                        )
                      ),
                      s.createElement(R, null)
                    )
                  )
                }
              )
            }
            ;(r.Z = (0, Z.Pi)(e)), n()
          } catch (U) {
            n(U)
          }
        },
        1
      )
    },
    4349: function (e, r, t) {
      "use strict"
      t.d(r, {
        H: function () {
          return o
        },
        O: function () {
          return a
        }
      })
      var n = t(72635),
        o = [
          { value: "US", label: "United States" },
          { value: "AU", label: "Australia" },
          { value: "UK", label: "United Kingdom" },
          { value: "NG", label: "Nigeria" },
          { value: "VN", label: "Viet Nam" },
          { value: "IN", label: "India" },
          { value: "CN", label: "China" },
          { value: "ID", label: "Indonesia" },
          { value: "HK", label: "Hong Kong" },
          { value: "JP", label: "Japan" },
          { value: "TW", label: "Taiwan" },
          { value: "SG", label: "Singapore" },
          { value: "NL", label: "Netherlands" }
        ],
        a = t.n(n)()().getData()
    },
    42340: function (e, r, t) {
      "use strict"
      t.d(r, {
        B9: function () {
          return f
        },
        G_: function () {
          return h
        },
        Gl: function () {
          return a
        },
        HQ: function () {
          return l
        },
        IY: function () {
          return o
        },
        P4: function () {
          return y
        },
        PH: function () {
          return x
        },
        Pn: function () {
          return d
        },
        QZ: function () {
          return s
        },
        UD: function () {
          return u
        },
        Ux: function () {
          return v
        },
        _9: function () {
          return m
        },
        dp: function () {
          return i
        },
        eH: function () {
          return c
        },
        xb: function () {
          return g
        }
      })
      var n = t(74231),
        o = (0, n.Ry)().shape({
          username: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(26, "Too Long!")
            .required("Username is required"),
          firstName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("First name is required"),
          lastName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Last name is required"),
          brand: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Brand / Business Name is required"),
          website: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .min(5, "Too Short!")
            .max(200, "Too Long!")
            .required("Website is required"),
          country: (0, n.Z_)().required("Country is required"),
          terms: (0, n.O7)().required(
            "Please agree to the Terms of use to proceed."
          )
        }),
        a = (0, n.Ry)().shape({
          username: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(26, "Too Long!")
            .required("Username is required"),
          firstName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("First name is required"),
          lastName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Last name is required"),
          brand: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Brand / Business Name is required"),
          website: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .min(5, "Too Short!")
            .max(200, "Too Long!")
            .required("Website is required"),
          country: (0, n.Z_)().required("Country is required")
        }),
        i = (0, n.Ry)().shape({
          creatorName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Creator Name is required"),
          tagline: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Tagline is required"),
          bio: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Biography is required")
        }),
        u = (0, n.Ry)().shape({
          title: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Title is required"),
          description: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Description is required")
        }),
        l = (0, n.Ry)().shape({
          jobName: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(60, "Too Long!")
            .required("Job Name is required"),
          aboutBrand: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(1e3, "Too Long!")
            .required("About your brand is required"),
          industry: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Industry is required"),
          targetAudience: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Target audience is required")
        }),
        s = (0, n.Ry)().shape({
          whatWeNeed: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(3e3, "Too Long!")
            .required("Enter your requirements"),
          creatorType: (0, n.Z_)()
            .min(1, "Too Short!")
            .max(100, "Too Long!")
            .required("Creator Type is required"),
          skill: (0, n.Z_)()
            .min(1, "Too Short!")
            .max(100, "Too Long!")
            .required("Skill is required")
        }),
        c = (0, n.Ry)().shape({
          deliverableMedia: (0, n.Z_)()
            .min(2, "Too Short!")
            .max(200, "Too Long!")
            .required("Deliverable Media is required"),
          dueDate: (0, n.hT)()
            .min(new Date(), "Must be in the future!")
            .required("Due Date is required"),
          copyright: (0, n.O7)().required(
            "Please agree to the Copyright Statement to proceed."
          )
        }),
        d = (0, n.Ry)().shape({
          preferredStyleDesc: (0, n.Z_)().max(300, "Too Long!"),
          preferredTools: (0, n.Z_)().max(300, "Too Long!"),
          preferredStyledWebsite: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .max(300, "Too Long!")
        }),
        f = (0, n.Ry)().shape({
          futurePlan: (0, n.Z_)().max(300, "Too Long!")
        }),
        p = "Please check all the boxes before approving.",
        m = (0, n.Ry)().shape({
          receiveFinal: (0, n.O7)().required(p),
          copyright: (0, n.O7)().required(p),
          payment: (0, n.O7)().required(p)
        }),
        h = (0, n.Ry)().shape({ changes: (0, n.Z_)().max(500, "Too Long!") }),
        b = "Please check all the boxes before requesting approval.",
        g = (0, n.Ry)().shape({
          copyright: (0, n.O7)().required(b),
          authentic: (0, n.O7)().required(b),
          payment: (0, n.O7)().required(b)
        }),
        v = (0, n.Ry)().shape({
          email: (0, n.Z_)()
            .email("Invalid email")
            .required("Email is required")
        }),
        x = (0, n.Ry)().shape({
          reason: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Reason is required"),
          terms: (0, n.O7)().required("Please tick the acknowledgement.")
        }),
        y = (0, n.Ry)().shape({
          story: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Your story is required")
        })
    },
    25996: function (e, r, t) {
      "use strict"
      t.d(r, {
        X: function () {
          return o
        },
        r: function () {
          return n
        }
      })
      var n = function (e) {
          return a(13)(e)
        },
        o = function (e) {
          return a(32)(e)
        },
        a = function (e) {
          return function (r) {
            return r.charCode === e || r.keyCode === e
          }
        }
    },
    91176: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/create-account",
        function () {
          return t(63242)
        }
      ])
    },
    82021: function (e, r, t) {
      !(function () {
        "use strict"
        var r = {
            800: function (e) {
              var r = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable
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
                  for (var r = {}, t = 0; t < 10; t++)
                    r["_" + String.fromCharCode(t)] = t
                  var n = Object.getOwnPropertyNames(r).map(function (e) {
                    return r[e]
                  })
                  if ("0123456789" !== n.join("")) return !1
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
                      if (r) {
                        u = r(i)
                        for (var d = 0; d < u.length; d++)
                          n.call(i, u[d]) && (l[u[d]] = i[u[d]])
                      }
                    }
                    return l
                  }
            },
            569: function (e, r, t) {
              0
            },
            403: function (e, r, t) {
              var n = t(800),
                o = t(522)
              r.useSubscription = function (e) {
                var r = e.getCurrentValue,
                  t = e.subscribe,
                  a = o.useState(function () {
                    return { getCurrentValue: r, subscribe: t, value: r() }
                  })
                e = a[0]
                var i = a[1]
                return (
                  (a = e.value),
                  (e.getCurrentValue === r && e.subscribe === t) ||
                    ((a = r()),
                    i({ getCurrentValue: r, subscribe: t, value: a })),
                  o.useDebugValue(a),
                  o.useEffect(
                    function () {
                      function e() {
                        if (!o) {
                          var e = r()
                          i(function (o) {
                            return o.getCurrentValue !== r ||
                              o.subscribe !== t ||
                              o.value === e
                              ? o
                              : n({}, o, { value: e })
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
                    [r, t]
                  ),
                  a
                )
              }
            },
            138: function (e, r, t) {
              e.exports = t(403)
            },
            522: function (e) {
              e.exports = t(67294)
            }
          },
          n = {}
        function o(e) {
          var t = n[e]
          if (void 0 !== t) return t.exports
          var a = (n[e] = { exports: {} }),
            i = !0
          try {
            r[e](a, a.exports, o), (i = !1)
          } finally {
            i && delete n[e]
          }
          return a.exports
        }
        o.ab = "//"
        var a = o(138)
        e.exports = a
      })()
    },
    5152: function (e, r, t) {
      e.exports = t(32323)
    }
  },
  function (e) {
    e.O(
      0,
      [
        5445, 2013, 260, 4617, 6556, 2328, 8760, 5297, 253, 6804, 4597, 5607,
        5527, 9876, 828, 9748, 1141, 2512, 9575, 3646, 2144, 5658, 3130, 2888,
        9774, 179
      ],
      function () {
        return (r = 91176), e((e.s = r))
        var r
      }
    )
    var r = e.O()
    _N_E = r
  }
])
