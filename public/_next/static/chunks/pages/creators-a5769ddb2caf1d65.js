;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    32323: function (e, t, n) {
      "use strict"
      var r = n(95318),
        u = r(n(59713)),
        o = r(n(50008))
      function i(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                ;(0, u.default)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = c.default,
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
            : "object" === (0, o.default)(e) && (r = a(a({}, r), e))
          var u = (r = a(a({}, r), t))
          if (u.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (u.suspense) return n(u)
          r.loadableGenerated &&
            delete (r = a(a({}, r), r.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, s(n, r)
            delete r.ssr
          }
          return n(r)
        }),
        (t.noSSR = s)
      l(n(67294))
      var c = l(n(82271))
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t)
      }
      ;("function" === typeof t.default ||
        ("object" === (0, o.default)(t.default) && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default))
    },
    65066: function (e, t, n) {
      "use strict"
      var r
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LoadableContext = void 0)
      var u = (
        (r = n(67294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null)
      t.LoadableContext = u
    },
    82271: function (e, t, n) {
      "use strict"
      var r = n(95318),
        u = r(n(34575)),
        o = r(n(93913)),
        i = r(n(59713))
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                ;(0, i.default)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function l(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ("string" === typeof e) return s(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === n && e.constructor && (n = e.constructor.name)
              if ("Map" === n || "Set" === n) return Array.from(e)
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return s(e, t)
            })(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              u = function () {}
            return {
              s: u,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
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
        var o,
          i = !0,
          a = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(a = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (a) throw o
            }
          }
        }
      }
      function s(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var f,
        p = (f = n(67294)) && f.__esModule ? f : { default: f },
        d = n(82021),
        v = n(65066)
      var h = [],
        m = [],
        b = !1
      function y(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null }
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e)
            })),
          n
        )
      }
      var g = (function () {
        function e(t, n) {
          ;(0, u.default)(this, e),
            (this._loadFn = t),
            (this._opts = n),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        return (
          (0, o.default)(e, [
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
                  n = this._opts
                t.loading &&
                  ("number" === typeof n.delay &&
                    (0 === n.delay
                      ? (this._state.pastDelay = !0)
                      : (this._delay = setTimeout(function () {
                          e._update({ pastDelay: !0 })
                        }, n.delay))),
                  "number" === typeof n.timeout &&
                    (this._timeout = setTimeout(function () {
                      e._update({ timedOut: !0 })
                    }, n.timeout))),
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
          var n = Object.assign(
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
          n.suspense && (n.lazy = p.default.lazy(n.loader))
          var r = null
          function u() {
            if (!r) {
              var t = new g(e, n)
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t)
              }
            }
            return r.promise()
          }
          if (!b && !n.suspense) {
            var o = n.webpack ? n.webpack() : n.modules
            o &&
              m.push(function (e) {
                var t,
                  n = l(o)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    if (-1 !== e.indexOf(r)) return u()
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              })
          }
          var i = n.suspense
            ? function (e, t) {
                return p.default.createElement(
                  n.lazy,
                  c(c({}, e), {}, { ref: t })
                )
              }
            : function (e, t) {
                u()
                var o = p.default.useContext(v.LoadableContext),
                  i = d.useSubscription(r)
                return (
                  p.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: r.retry }
                    },
                    []
                  ),
                  o &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      o(e)
                    }),
                  p.default.useMemo(
                    function () {
                      return i.loading || i.error
                        ? p.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry
                          })
                        : i.loaded
                        ? p.default.createElement(
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
              return !n.suspense && u()
            }),
            (i.displayName = "LoadableComponent"),
            p.default.forwardRef(i)
          )
        })(y, e)
      }
      function w(e, t) {
        for (var n = []; e.length; ) {
          var r = e.pop()
          n.push(r(t))
        }
        return Promise.all(n).then(function () {
          if (e.length) return w(e, t)
        })
      }
      ;(x.preloadAll = function () {
        return new Promise(function (e, t) {
          w(h).then(e, t)
        })
      }),
        (x.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (t) {
            var n = function () {
              return (b = !0), t()
            }
            w(m, e).then(n, n)
          })
        }),
        (window.__NEXT_PRELOADREADY = x.preloadReady)
      var _ = x
      t.default = _
    },
    18434: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var u = n(87462),
            o = n(86854),
            i = n(67294),
            a = n(9008),
            c = n.n(a),
            l = n(88523),
            s = n(62639),
            f = n(11972),
            p = n(91204),
            d = n(13130),
            v = n(96217),
            h = n(80585),
            m = n(78132),
            b = n(31681),
            y = n(33224),
            g = n(92906),
            x = e([d, v, m])
          ;[d, v, m] = x.then ? (await x)() : x
          var w = (0, i.lazy)(function () {
            return Promise.resolve()
              .then(n.bind(n, 16746))
              .then(function (e) {
                return { default: e.PortfolioViewerContainer }
              })
          })
          function _(e) {
            var t = e.identity,
              n = (0, l.qY)(),
              r = n.isOpen,
              a = n.onOpen,
              g = n.onClose,
              x = (0, i.useState)(null),
              _ = (0, o.Z)(x, 2),
              k = _[0],
              E = _[1],
              O = (0, i.useState)(1),
              C = (0, o.Z)(O, 2),
              j = C[0],
              P = C[1]
            return i.createElement(
              d.Z,
              (0, u.Z)(
                { opacity: j, setOpacity: P, activeLink: b.Az.BrowseCreators },
                e
              ),
              i.createElement(
                c(),
                null,
                i.createElement("title", null, "Browse Creators - Content Fly")
              ),
              i.createElement(
                s.mQ,
                { isLazy: !0, variant: "unstyled" },
                i.createElement(
                  f.kC,
                  { h: { base: "41px", md: "81px" } },
                  i.createElement(
                    s.td,
                    { pt: "10px", pl: { md: "45px", lg: "80px" }, opacity: j },
                    i.createElement(h.e, null, "Browse Creators")
                  ),
                  i.createElement(f.LZ, null),
                  i.createElement(v.d, (0, u.Z)({ opacity: j }, e))
                ),
                i.createElement(f.iz, {
                  h: "1px",
                  color: "gray_light",
                  opacity: j,
                  display: { base: "none", md: "flex" }
                }),
                i.createElement(
                  s.nP,
                  null,
                  i.createElement(
                    s.x4,
                    { px: "0px", pb: "0" },
                    i.createElement(m.w, {
                      opacity: j,
                      openPortfolio: function (e) {
                        E(e),
                          P(0),
                          window.history.replaceState(
                            null,
                            "".concat(
                              e.creatorName,
                              "'s Portolio - Content Fly"
                            ),
                            "/p.html?id=".concat(e.id)
                          ),
                          a()
                      }
                    }),
                    r &&
                      null != k &&
                      i.createElement(
                        i.Suspense,
                        { fallback: i.createElement(y.j, null) },
                        i.createElement(
                          p.Mi,
                          {
                            direction: "right",
                            in: r,
                            style: { zIndex: 10, overflow: "scroll" }
                          },
                          i.createElement(w, {
                            model: k,
                            identity: t,
                            goBack: function () {
                              P(1),
                                window.history.replaceState(
                                  null,
                                  "Browse Creators - Content Fly",
                                  "/creators.html"
                                ),
                                g()
                            },
                            pt: "50px"
                          })
                        )
                      )
                  )
                )
              )
            )
          }
          ;(t.default = (0, g.v_)(_)), r()
        } catch (_) {
          r(_)
        }
      })
    },
    2243: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return o
        }
      })
      var r = n(67294),
        u = n(66956),
        o = function () {
          return r.createElement(u.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    30647: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return l
        }
      })
      var r = n(15861),
        u = n(87757),
        o = n.n(u),
        i = n(64380),
        a = n(22169),
        c = n(31681),
        l = (function () {
          var e = (0, r.Z)(
            o().mark(function e(t, n) {
              var r, u, l, s
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = c.Ho.InternetIdentity),
                        (u = c.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === u ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, i.l)()
                    case 6:
                      return (l = e.sent), e.abrupt("return", l)
                    case 8:
                      return (e.next = 10), (0, a.gX)(n || {})
                    case 10:
                      return (s = e.sent), e.abrupt("return", s)
                    case 12:
                      return e.abrupt("return", null)
                    case 13:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })()
    },
    92906: function (e, t, n) {
      "use strict"
      n.d(t, {
        J3: function () {
          return C
        },
        bv: function () {
          return O
        },
        vV: function () {
          return j
        },
        v_: function () {
          return P
        }
      })
      var r = n(87462),
        u = n(15861),
        o = n(86854),
        i = n(87757),
        a = n.n(i),
        c = n(67294),
        l = n(5152),
        s = n.n(l),
        f = n(11163),
        p = n(30647),
        d = n(11972),
        v = n(49697),
        h = n(49162),
        m = n(2243),
        b = function () {
          return c.createElement(
            v.W,
            { h: "120vh" },
            c.createElement(
              d.xu,
              { mt: "120px", mb: "30px" },
              c.createElement(h.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            c.createElement(m.u, null)
          )
        },
        y = n(98400),
        g = n(23256),
        x = n(66985),
        w = n(24686),
        _ = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        k = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5527),
            n.e(9876),
            n.e(5658),
            n.e(7906)
          ]).then(n.bind(n, 7906))
        }),
        E = s()(function () {
          return Promise.all([
            n.e(5445),
            n.e(2013),
            n.e(260),
            n.e(4617),
            n.e(6556),
            n.e(5297),
            n.e(6804),
            n.e(4597),
            n.e(5607),
            n.e(5527),
            n.e(9876),
            n.e(828),
            n.e(9748),
            n.e(5658),
            n.e(3130),
            n.e(8265)
          ]).then(n.bind(n, 78265))
        }),
        O = function (e, t) {
          return function (n) {
            return S(e, null !== t && void 0 !== t ? t : E, null, !1)(n)
          }
        },
        C = function (e) {
          return function (t) {
            return S(
              e,
              _,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        j = function (e) {
          return function (t) {
            return S(e, k, null, !1)(t)
          }
        },
        P = function (e) {
          return function (t) {
            return S(e, k, null, !0)(t)
          }
        },
        S = function (e, t, i, l) {
          return function (s) {
            var d = (0, c.useState)(null),
              v = (0, o.Z)(d, 2),
              h = v[0],
              m = v[1],
              _ = (0, c.useState)(!0),
              E = (0, o.Z)(_, 2),
              O = E[0],
              C = E[1],
              j = (0, c.useState)(""),
              P = (0, o.Z)(j, 2),
              S = P[0],
              Z = P[1],
              A = (0, c.useState)(1),
              L = (0, o.Z)(A, 2),
              T = L[0],
              z = L[1],
              D = (0, f.useRouter)(),
              I = (0, y.oR)(g.Z),
              R = I.appContext.authProvider,
              N = I.appContext.candidAuthProvider(),
              V = null !== t && void 0 !== t ? t : k
            ;(0, c.useEffect)(
              function () {
                function e() {
                  return (e = (0, u.Z)(
                    a().mark(function e() {
                      var t
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  C(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(I.appContext.authProvider, {
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
                                if (!G(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!I.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), M(t)
                              case 13:
                                F(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), H()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  x.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), C(!1), e.finish(23)
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
              [T]
            )
            var M = (function () {
                var e = (0, u.Z)(
                  a().mark(function e(t) {
                    var n, r, u, o
                    return a().wrap(
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
                              return (r = e.sent), (e.next = 6), r.login(N)
                            case 6:
                              if (
                                ((u = e.sent),
                                !(
                                  (null === (n = u.ok) || void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (o = u.ok[0]),
                                (e.next = 11),
                                I.updateForNewSignupLogin(o)
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
              W = function () {
                z(T + 1)
              },
              F = (function () {
                var e = (0, u.Z)(
                  a().mark(function e(t) {
                    var r, u
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((m(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), n.e(7130).then(n.bind(n, 47130))
                            )
                          case 4:
                            ;(r = e.sent),
                              (u = r.Usergeek).setPrincipal(t.getPrincipal()),
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
            function U() {
              return (
                (U = (0, u.Z)(
                  a().mark(function e(t) {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return F(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            G(e.sent)
                              ? F(t)
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
                U.apply(this, arguments)
              )
            }
            function G(e) {
              if (null == i) return !0
              var t = i.split(",").map(function (e) {
                return e.trim()
              })
              return "" == i.trim() || t.includes(e.toString())
            }
            var H = (function () {
                var e = (0, u.Z)(
                  a().mark(function e() {
                    var t
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(R)), (e.next = 3), t()
                          case 3:
                            F(null), I.reset(), (0, w.clearCache)()
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
              B = (function () {
                var e = (0, u.Z)(
                  a().mark(function e() {
                    return a().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), H()
                          case 2:
                            D.push("/")
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
              ? c.createElement(
                  e,
                  (0, r.Z)({ identity: h, logout: B, triggerAuthUpdate: W }, s)
                )
              : O
              ? c.createElement(b, null)
              : l
              ? c.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: W }))
              : c.createElement(V, {
                  handleAuthenticated: function (e) {
                    return U.apply(this, arguments)
                  },
                  warningMesg: S
                })
          }
        }
    },
    78132: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            w: function () {
              return p
            }
          })
          var u = n(86854),
            o = n(67294),
            i = n(11972),
            a = n(16830),
            c = n(74476),
            l = n(25121),
            s = n(89842),
            f = e([c])
          c = (f.then ? (await f)() : f)[0]
          var p = function (e) {
            var t = e.identity,
              n = e.openPortfolio,
              r = e.opacity,
              f = (0, o.useState)(a.pG.value),
              p = (0, u.Z)(f, 2),
              d = p[0],
              v = p[1],
              h = (0, o.useState)(a.Kc),
              m = (0, u.Z)(h, 2),
              b = m[0],
              y = m[1],
              g = (0, o.useState)(0),
              x = (0, u.Z)(g, 2),
              w = x[0],
              _ = x[1],
              k = (0, o.useState)(0),
              E = (0, u.Z)(k, 2),
              O = E[0],
              C = E[1]
            return o.createElement(
              i.xu,
              { opacity: r },
              o.createElement(l.z, {
                selectedCreatorType: d,
                onChangeCreatorType: function (e) {
                  v(e), y(a.Kc), _(0)
                },
                refreshContent: function () {
                  C(O + 1)
                }
              }),
              o.createElement(s.H, {
                selectedCreatorType: d,
                selectedSkill: b,
                onChangeSkill: function (e) {
                  y(e), _(0)
                }
              }),
              o.createElement(c.r, {
                identity: t,
                openPortfolio: n,
                selectedCreatorType: d,
                selectedSkill: b,
                pageNum: w,
                setPageNum: _,
                refreshIncrement: O
              })
            )
          }
          r()
        } catch (d) {
          r(d)
        }
      })
    },
    89842: function (e, t, n) {
      "use strict"
      n.d(t, {
        H: function () {
          return f
        }
      })
      var r = n(86854),
        u = n(67294),
        o = n(51815),
        i = n(11972),
        a = n(1095),
        c = n(16830),
        l = n(47971),
        s = function (e) {
          var t = e.isActive,
            n = e.onClick,
            r = e.children
          return u.createElement(
            o.zx,
            {
              color: t ? "blue_4" : "gray_light2",
              textDecoration: t ? "underline" : "unset",
              variant: "link",
              fontWeight: "medium",
              fontSize: "13px",
              minW: { base: "unset", md: "unset" },
              px: { base: "10px", md: "10px" },
              h: "29px",
              onClick: n
            },
            r
          )
        },
        f = function (e) {
          var t = e.selectedCreatorType,
            n = e.selectedSkill,
            o = e.onChangeSkill,
            f = (0, u.useState)(!1),
            p = (0, r.Z)(f, 2),
            d = p[0],
            v = p[1],
            h = (0, u.useRef)(),
            m = (0, u.useRef)(),
            b = (0, a.i)()
          ;(0, u.useLayoutEffect)(
            function () {
              v(y(h.current))
            },
            [b]
          ),
            (0, u.useLayoutEffect)(
              function () {
                v(y(h.current))
              },
              [t]
            )
          var y = function (e) {
            return e.clientWidth < e.scrollWidth
          }
          return u.createElement(
            i.Ug,
            {
              ml: { base: "6px", md: "29px" },
              px: "6px",
              mt: "2px",
              pb: "16px",
              spacing: "10px",
              overflow: "scroll",
              ref: h
            },
            (0, c.f1)(t).map(function (e) {
              return u.createElement(
                s,
                {
                  key: e.value,
                  isActive: n == e.value,
                  onClick: function () {
                    return o(e.value)
                  }
                },
                e.label
              )
            }),
            u.createElement(i.xu, { ref: m }),
            d &&
              u.createElement(l.w, {
                onClick: function () {
                  var e
                  null === m ||
                    void 0 === m ||
                    null === (e = m.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest"
                    })
                }
              })
          )
        }
    },
    25121: function (e, t, n) {
      "use strict"
      n.d(t, {
        z: function () {
          return s
        }
      })
      var r = n(86854),
        u = n(67294),
        o = n(11972),
        i = n(1095),
        a = n(16830),
        c = n(47971),
        l = n(59201),
        s = function (e) {
          var t = e.selectedCreatorType,
            n = e.onChangeCreatorType,
            s = (0, u.useRef)(),
            f = (0, u.useRef)(),
            p = (0, u.useState)(!1),
            d = (0, r.Z)(p, 2),
            v = d[0],
            h = d[1],
            m = (0, i.i)()
          ;(0, u.useLayoutEffect)(
            function () {
              var e
              h((e = s.current).clientWidth < e.scrollWidth)
            },
            [m]
          )
          return u.createElement(
            o.Ug,
            {
              ml: { base: "6px", md: "24px" },
              pt: "6px",
              pb: "16px",
              pr: "6px",
              spacing: "17px",
              overflow: "scroll",
              ref: s
            },
            (0, a.YI)().map(function (e) {
              return u.createElement(
                l.L,
                {
                  key: e.value,
                  isActive: t == e.value,
                  onClick: function () {
                    return n(e.value)
                  },
                  w: "120px",
                  minW: "120px"
                },
                e.label
              )
            }),
            u.createElement(o.xu, { ref: f }),
            v &&
              u.createElement(c.w, {
                onClick: function () {
                  var e
                  null === f ||
                    void 0 === f ||
                    null === (e = f.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest"
                    })
                }
              }),
            u.createElement(o.LZ, null)
          )
        }
    },
    47971: function (e, t, n) {
      "use strict"
      n.d(t, {
        w: function () {
          return i
        }
      })
      var r = n(67294),
        u = n(64737),
        o = n(63750),
        i = function (e) {
          var t = e.onClick
          return r.createElement(u.JO, {
            as: o.Igg,
            boxSize: "1.4rem",
            color: "purple",
            position: "sticky",
            right: "0px",
            opacity: "0.5",
            onClick: t,
            _hover: { cursor: "pointer" }
          })
        }
    },
    59201: function (e, t, n) {
      "use strict"
      n.d(t, {
        L: function () {
          return c
        }
      })
      var r = n(87462),
        u = n(45987),
        o = n(67294),
        i = n(51815),
        a = ["isActive", "onClick", "children", "themeColor"],
        c = function (e) {
          var t = e.isActive,
            n = e.onClick,
            c = e.children,
            l = e.themeColor,
            s = (0, u.Z)(e, a),
            f = null !== l && void 0 !== l ? l : "purple_2"
          return o.createElement(
            i.zx,
            (0, r.Z)(
              {
                background: t ? f : "white",
                color: t ? "white" : "gray_light2",
                variant: t ? "solid" : "outline",
                _hover: {
                  bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                  boxShadow: "lg",
                  color: "white",
                  borderColor: t ? "unset" : "white"
                },
                fontWeight: "medium",
                fontSize: "13px",
                h: "29px",
                borderRadius: "29px",
                borderColor: t ? "unset" : "gray_light2",
                onClick: n
              },
              s
            ),
            c
          )
        }
    },
    1095: function (e, t, n) {
      "use strict"
      n.d(t, {
        i: function () {
          return o
        }
      })
      var r = n(86854),
        u = n(67294)
      function o() {
        var e = (0, u.useState)({ width: void 0, height: void 0 }),
          t = (0, r.Z)(e, 2),
          n = t[0],
          o = t[1]
        return (
          (0, u.useEffect)(function () {
            function e() {
              o({ width: window.innerWidth, height: window.innerHeight })
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e)
              }
            )
          }, []),
          n
        )
      }
    },
    66497: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/creators",
        function () {
          return n(18434)
        }
      ])
    },
    82021: function (e, t, n) {
      !(function () {
        "use strict"
        var t = {
            800: function (e) {
              var t = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable
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
                  for (var t = {}, n = 0; n < 10; n++)
                    t["_" + String.fromCharCode(n)] = n
                  var r = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                  })
                  if ("0123456789" !== r.join("")) return !1
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
                : function (e, o) {
                    for (var i, a, c = u(e), l = 1; l < arguments.length; l++) {
                      for (var s in (i = Object(arguments[l])))
                        n.call(i, s) && (c[s] = i[s])
                      if (t) {
                        a = t(i)
                        for (var f = 0; f < a.length; f++)
                          r.call(i, a[f]) && (c[a[f]] = i[a[f]])
                      }
                    }
                    return c
                  }
            },
            569: function (e, t, n) {
              0
            },
            403: function (e, t, n) {
              var r = n(800),
                u = n(522)
              t.useSubscription = function (e) {
                var t = e.getCurrentValue,
                  n = e.subscribe,
                  o = u.useState(function () {
                    return { getCurrentValue: t, subscribe: n, value: t() }
                  })
                e = o[0]
                var i = o[1]
                return (
                  (o = e.value),
                  (e.getCurrentValue === t && e.subscribe === n) ||
                    ((o = t()),
                    i({ getCurrentValue: t, subscribe: n, value: o })),
                  u.useDebugValue(o),
                  u.useEffect(
                    function () {
                      function e() {
                        if (!u) {
                          var e = t()
                          i(function (u) {
                            return u.getCurrentValue !== t ||
                              u.subscribe !== n ||
                              u.value === e
                              ? u
                              : r({}, u, { value: e })
                          })
                        }
                      }
                      var u = !1,
                        o = n(e)
                      return (
                        e(),
                        function () {
                          ;(u = !0), o()
                        }
                      )
                    },
                    [t, n]
                  ),
                  o
                )
              }
            },
            138: function (e, t, n) {
              e.exports = n(403)
            },
            522: function (e) {
              e.exports = n(67294)
            }
          },
          r = {}
        function u(e) {
          var n = r[e]
          if (void 0 !== n) return n.exports
          var o = (r[e] = { exports: {} }),
            i = !0
          try {
            t[e](o, o.exports, u), (i = !1)
          } finally {
            i && delete r[e]
          }
          return o.exports
        }
        u.ab = "//"
        var o = u(138)
        e.exports = o
      })()
    },
    5152: function (e, t, n) {
      e.exports = n(32323)
    }
  },
  function (e) {
    e.O(
      0,
      [
        5445, 2013, 260, 4617, 6556, 2328, 8760, 5297, 253, 6804, 4597, 5607,
        5527, 9876, 828, 9748, 2144, 5658, 3130, 2888, 9774, 179
      ],
      function () {
        return (t = 66497), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
