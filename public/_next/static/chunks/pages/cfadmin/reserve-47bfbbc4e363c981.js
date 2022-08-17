;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8635],
  {
    32323: function (e, t, n) {
      "use strict"
      var r = n(95318),
        u = r(n(59713)),
        a = r(n(50008))
      function o(e, t) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                ;(0, u.default)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
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
            : "object" === (0, a.default)(e) && (r = i(i({}, r), e))
          var u = (r = i(i({}, r), t))
          if (u.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (u.suspense) return n(u)
          r.loadableGenerated &&
            delete (r = i(i({}, r), r.loadableGenerated)).loadableGenerated
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
        ("object" === (0, a.default)(t.default) && null !== t.default)) &&
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
        a = r(n(93913)),
        o = r(n(59713))
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                ;(0, o.default)(e, t, n[t])
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
        var a,
          o = !0,
          i = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(i = !0), (a = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (i) throw a
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
      function g(e) {
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
      var y = (function () {
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
              var t = new y(e, n)
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
            var a = n.webpack ? n.webpack() : n.modules
            a &&
              m.push(function (e) {
                var t,
                  n = l(a)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    if (-1 !== e.indexOf(r)) return u()
                  }
                } catch (o) {
                  n.e(o)
                } finally {
                  n.f()
                }
              })
          }
          var o = n.suspense
            ? function (e, t) {
                return p.default.createElement(
                  n.lazy,
                  c(c({}, e), {}, { ref: t })
                )
              }
            : function (e, t) {
                u()
                var a = p.default.useContext(v.LoadableContext),
                  o = d.useSubscription(r)
                return (
                  p.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: r.retry }
                    },
                    []
                  ),
                  a &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      a(e)
                    }),
                  p.default.useMemo(
                    function () {
                      return o.loading || o.error
                        ? p.default.createElement(n.loading, {
                            isLoading: o.loading,
                            pastDelay: o.pastDelay,
                            timedOut: o.timedOut,
                            error: o.error,
                            retry: r.retry
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
              return !n.suspense && u()
            }),
            (o.displayName = "LoadableComponent"),
            p.default.forwardRef(o)
          )
        })(g, e)
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
    3251: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var u = n(15861),
              a = n(86854),
              o = n(87757),
              i = n.n(o),
              c = n(67294),
              l = n(9008),
              s = n.n(l),
              f = n(49697),
              p = n(95641),
              d = n(99171),
              v = n(11972),
              h = n(51815),
              m = n(84597),
              b = n(92906),
              g = n(31681),
              y = n(22114)
            function e(e, t) {
              var n =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = _(e)) ||
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
              var a,
                o = !0,
                i = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (o = e.done), e
                },
                e: function (e) {
                  ;(i = !0), (a = e)
                },
                f: function () {
                  try {
                    o || null == n.return || n.return()
                  } finally {
                    if (i) throw a
                  }
                }
              }
            }
            function _(e, t) {
              if (e) {
                if ("string" === typeof e) return E(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? E(e, t)
                    : void 0
                )
              }
            }
            function E(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            var x = (await Promise.resolve().then(n.bind(n, 66985))).default,
              w = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeReserveActor
            function O(t) {
              var n = t.identity,
                r = t.logout,
                o = (0, c.useState)(""),
                l = (0, a.Z)(o, 2),
                b = l[0],
                _ = l[1],
                E = (0, c.useState)(""),
                O = (0, a.Z)(E, 2),
                k = O[0],
                S = O[1],
                j = (0, c.useState)(""),
                P = (0, a.Z)(j, 2),
                C = P[0],
                Z = P[1],
                A = (0, c.useState)(null),
                I = (0, a.Z)(A, 2),
                z = I[0],
                D = I[1],
                R = (0, c.useState)(0),
                L = (0, a.Z)(R, 2),
                M = L[0],
                T = L[1],
                N = (0, c.useState)(1e4),
                U = (0, a.Z)(N, 2),
                V = U[0],
                F = U[1],
                G = (0, c.useState)(!1),
                W = (0, a.Z)(G, 2),
                X = W[0],
                q = W[1],
                H = (0, c.useState)(!1),
                Y = (0, a.Z)(H, 2),
                $ = Y[0],
                J = Y[1],
                B = (0, c.useState)(!1),
                K = (0, a.Z)(B, 2),
                Q = K[0],
                ee = K[1],
                te = (0, c.useState)(!1),
                ne = (0, a.Z)(te, 2),
                re = ne[0],
                ue = ne[1],
                ae = g.Ho.InternetIdentity
              function oe() {
                return (oe = (0, u.Z)(
                  i().mark(function e() {
                    var t, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), q(!0), (e.next = 4), w(n, ae)
                            case 4:
                              return (t = e.sent), (e.next = 7), t.size()
                            case 7:
                              ;(r = e.sent), Z(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), x.error(e.t0)
                            case 14:
                              return (e.prev = 14), q(!1), e.finish(14)
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
              function ie() {
                return (ie = (0, u.Z)(
                  i().mark(function e() {
                    var t, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), J(!0), (e.next = 4), w(n, ae)
                            case 4:
                              return (
                                (t = e.sent),
                                (e.next = 7),
                                t.getCallerPrincipal()
                              )
                            case 7:
                              ;(r = e.sent), _(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), x.error(e.t0)
                            case 14:
                              return (e.prev = 14), J(!1), e.finish(14)
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
              function ce() {
                return (ce = (0, u.Z)(
                  i().mark(function e() {
                    var t, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), ee(!0), (e.next = 4), w(n, ae)
                              )
                            case 4:
                              return (t = e.sent), (e.next = 7), t.getManager()
                            case 7:
                              ;(r = e.sent), S(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), x.error(e.t0)
                            case 14:
                              return (e.prev = 14), ee(!1), e.finish(14)
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
              function le() {
                return (le = (0, u.Z)(
                  i().mark(function e(t) {
                    var r, u, a
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                D(null),
                                ue(!0),
                                (e.next = 5),
                                w(n, ae)
                              )
                            case 5:
                              return (
                                (r = e.sent),
                                (u = M + V - 1),
                                (e.next = 9),
                                r.getReserveEntries(Number(M), u)
                              )
                            case 9:
                              ;(a = e.sent), se(t, a), (e.next = 16)
                              break
                            case 13:
                              ;(e.prev = 13), (e.t0 = e.catch(0)), x.error(e.t0)
                            case 16:
                              return (e.prev = 16), ue(!1), e.finish(16)
                            case 19:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 13, 16, 19]]
                    )
                  })
                )).apply(this, arguments)
              }
              function se(t, n) {
                t.preventDefault()
                var r = []
                r.push(["id", "principal", "createdAt"])
                var u,
                  a = e(n)
                try {
                  for (a.s(); !(u = a.n()).done; ) {
                    var o = u.value
                    r.push([o.id, o.principal, o.createdAt])
                  }
                } catch (s) {
                  a.e(s)
                } finally {
                  a.f()
                }
                var i = (0, y.u)(r),
                  c = new Blob([i]),
                  l = URL.createObjectURL(c)
                D(l)
              }
              return c.createElement(
                f.W,
                { height: "100vh" },
                c.createElement(
                  p.o,
                  null,
                  c.createElement(
                    s(),
                    null,
                    c.createElement("title", null, "Content Fly")
                  ),
                  c.createElement(
                    v.gC,
                    {
                      divider: c.createElement(v.cX, {
                        borderColor: "gray.200"
                      }),
                      spacing: 4,
                      align: "stretch"
                    },
                    c.createElement(
                      v.M5,
                      null,
                      c.createElement(
                        v.gC,
                        { spacing: 4 },
                        c.createElement(
                          d.t,
                          null,
                          "Content Fly Reserve Spot Admin"
                        ),
                        c.createElement(v.xv, null, "You have logged in!"),
                        c.createElement(
                          h.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return ie.apply(this, arguments)
                            },
                            isLoading: $
                          },
                          "Who am I?"
                        ),
                        c.createElement(v.xv, null, "Principal Id: ", b),
                        c.createElement(
                          h.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return ce.apply(this, arguments)
                            },
                            isLoading: Q
                          },
                          "Get Manager"
                        ),
                        c.createElement(v.xv, null, "Manager Id: ", k),
                        c.createElement(
                          h.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: function () {
                              return oe.apply(this, arguments)
                            },
                            isLoading: X
                          },
                          "Get Reserve Size"
                        ),
                        c.createElement(
                          v.xv,
                          null,
                          "No. of reserved users: ",
                          C
                        ),
                        c.createElement(
                          v.xv,
                          { fontWeight: "semibold" },
                          "Reserved Users"
                        ),
                        c.createElement(
                          v.Ug,
                          { spacing: "12px" },
                          c.createElement(
                            v.xu,
                            null,
                            c.createElement(
                              v.xv,
                              { fontWeight: "light" },
                              "Start Index"
                            ),
                            c.createElement(m.II, {
                              placeholder: "Enter start index",
                              w: "200px",
                              onChange: function (e) {
                                T(e.target.value)
                              },
                              value: M
                            })
                          ),
                          c.createElement(
                            v.xu,
                            null,
                            c.createElement(
                              v.xv,
                              { fontWeight: "light" },
                              "Page Size"
                            ),
                            c.createElement(m.II, {
                              placeholder: "Page Size",
                              w: "200px",
                              onChange: function (e) {
                                F(e.target.value)
                              },
                              value: V
                            })
                          )
                        ),
                        c.createElement(
                          h.zx,
                          {
                            h: "3rem",
                            size: "md",
                            variant: "outline",
                            onClick: function (e) {
                              return le.apply(this, arguments)
                            },
                            isLoading: re
                          },
                          "Get Reserved Users"
                        ),
                        null != z &&
                          c.createElement(
                            v.rU,
                            { download: "reserved-users-list.csv", href: z },
                            "Download Now"
                          ),
                        c.createElement(
                          h.zx,
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
            ;(t.default = (0, b.J3)(O)), r()
          } catch (_) {
            r(_)
          }
        },
        1
      )
    },
    99171: function (e, t, n) {
      "use strict"
      n.d(t, {
        t: function () {
          return o
        }
      })
      var r = n(87462),
        u = n(67294),
        a = n(11972),
        o = function (e) {
          return u.createElement(
            a.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            u.createElement(
              a.X6,
              (0, r.Z)(
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
    95641: function (e, t, n) {
      "use strict"
      n.d(t, {
        o: function () {
          return o
        }
      })
      var r = n(87462),
        u = n(67294),
        a = n(11972),
        o = function (e) {
          return u.createElement(
            a.Kq,
            (0, r.Z)(
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
    2243: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return a
        }
      })
      var r = n(67294),
        u = n(66956),
        a = function () {
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
        a = n.n(u),
        o = n(64380),
        i = n(22169),
        c = n(31681),
        l = (function () {
          var e = (0, r.Z)(
            a().mark(function e(t, n) {
              var r, u, l, s
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = c.Ho.InternetIdentity),
                        (u = c.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === u ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, o.l)()
                    case 6:
                      return (l = e.sent), e.abrupt("return", l)
                    case 8:
                      return (e.next = 10), (0, i.gX)(n || {})
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
          return S
        },
        bv: function () {
          return k
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
        a = n(86854),
        o = n(87757),
        i = n.n(o),
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
        g = n(98400),
        y = n(23256),
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
        E = s()(function () {
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
        O = s()(function () {
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
        k = function (e, t) {
          return function (n) {
            return C(e, null !== t && void 0 !== t ? t : O, null, !1)(n)
          }
        },
        S = function (e) {
          return function (t) {
            return C(
              e,
              _,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        j = function (e) {
          return function (t) {
            return C(e, E, null, !1)(t)
          }
        },
        P = function (e) {
          return function (t) {
            return C(e, E, null, !0)(t)
          }
        },
        C = function (e, t, o, l) {
          return function (s) {
            var d = (0, c.useState)(null),
              v = (0, a.Z)(d, 2),
              h = v[0],
              m = v[1],
              _ = (0, c.useState)(!0),
              O = (0, a.Z)(_, 2),
              k = O[0],
              S = O[1],
              j = (0, c.useState)(""),
              P = (0, a.Z)(j, 2),
              C = P[0],
              Z = P[1],
              A = (0, c.useState)(1),
              I = (0, a.Z)(A, 2),
              z = I[0],
              D = I[1],
              R = (0, f.useRouter)(),
              L = (0, g.oR)(y.Z),
              M = L.appContext.authProvider,
              T = L.appContext.candidAuthProvider(),
              N = null !== t && void 0 !== t ? t : E
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
                                  (0, p.S)(L.appContext.authProvider, {
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
                                if (!W(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!L.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), U(t)
                              case 13:
                                F(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), X()
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
              [z]
            )
            var U = (function () {
                var e = (0, u.Z)(
                  i().mark(function e(t) {
                    var n, r, u, a
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, M)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(T)
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
                                (a = u.ok[0]),
                                (e.next = 11),
                                L.updateForNewSignupLogin(a)
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
              V = function () {
                D(z + 1)
              },
              F = (function () {
                var e = (0, u.Z)(
                  i().mark(function e(t) {
                    var r, u
                    return i().wrap(function (e) {
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
            function G() {
              return (
                (G = (0, u.Z)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
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
                            W(e.sent)
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
                G.apply(this, arguments)
              )
            }
            function W(e) {
              if (null == o) return !0
              var t = o.split(",").map(function (e) {
                return e.trim()
              })
              return "" == o.trim() || t.includes(e.toString())
            }
            var X = (function () {
                var e = (0, u.Z)(
                  i().mark(function e() {
                    var t
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(M)), (e.next = 3), t()
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
              q = (function () {
                var e = (0, u.Z)(
                  i().mark(function e() {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), X()
                          case 2:
                            R.push("/")
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
                  (0, r.Z)({ identity: h, logout: q, triggerAuthUpdate: V }, s)
                )
              : k
              ? c.createElement(b, null)
              : l
              ? c.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: V }))
              : c.createElement(N, {
                  handleAuthenticated: function (e) {
                    return G.apply(this, arguments)
                  },
                  warningMesg: C
                })
          }
        }
    },
    22114: function (e, t, n) {
      "use strict"
      function r(e) {
        var t = ""
        return (
          e.forEach(function (e) {
            e.forEach(function (e, n) {
              var r = (null === e ? "" : e.toString()).replace(/"/g, '""')
              r.search(/("|,|\n)/g) >= 0 && (r = '"' + r + '"'),
                n > 0 && (t += ","),
                (t += r)
            }),
              (t += "\n")
          }),
          t
        )
      }
      n.d(t, {
        u: function () {
          return r
        }
      })
    },
    66891: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/reserve",
        function () {
          return n(3251)
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
                : function (e, a) {
                    for (var o, i, c = u(e), l = 1; l < arguments.length; l++) {
                      for (var s in (o = Object(arguments[l])))
                        n.call(o, s) && (c[s] = o[s])
                      if (t) {
                        i = t(o)
                        for (var f = 0; f < i.length; f++)
                          r.call(o, i[f]) && (c[i[f]] = o[i[f]])
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
                  a = u.useState(function () {
                    return { getCurrentValue: t, subscribe: n, value: t() }
                  })
                e = a[0]
                var o = a[1]
                return (
                  (a = e.value),
                  (e.getCurrentValue === t && e.subscribe === n) ||
                    ((a = t()),
                    o({ getCurrentValue: t, subscribe: n, value: a })),
                  u.useDebugValue(a),
                  u.useEffect(
                    function () {
                      function e() {
                        if (!u) {
                          var e = t()
                          o(function (u) {
                            return u.getCurrentValue !== t ||
                              u.subscribe !== n ||
                              u.value === e
                              ? u
                              : r({}, u, { value: e })
                          })
                        }
                      }
                      var u = !1,
                        a = n(e)
                      return (
                        e(),
                        function () {
                          ;(u = !0), a()
                        }
                      )
                    },
                    [t, n]
                  ),
                  a
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
          var a = (r[e] = { exports: {} }),
            o = !0
          try {
            t[e](a, a.exports, u), (o = !1)
          } finally {
            o && delete r[e]
          }
          return a.exports
        }
        u.ab = "//"
        var a = u(138)
        e.exports = a
      })()
    },
    5152: function (e, t, n) {
      e.exports = n(32323)
    }
  },
  function (e) {
    e.O(0, [2328, 8760, 253, 4597, 2144, 2888, 9774, 179], function () {
      return (t = 66891), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  }
])
