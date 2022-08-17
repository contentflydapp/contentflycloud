;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2460],
  {
    32323: function (e, t, n) {
      "use strict"
      var r = n(95318),
        a = r(n(59713)),
        o = r(n(50008))
      function u(e, t) {
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
            ? u(Object(n), !0).forEach(function (t) {
                ;(0, a.default)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
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
          var n = l.default,
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
            : "object" === (0, o.default)(e) && (r = i(i({}, r), e))
          var a = (r = i(i({}, r), t))
          if (a.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (a.suspense) return n(a)
          r.loadableGenerated &&
            delete (r = i(i({}, r), r.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, s(n, r)
            delete r.ssr
          }
          return n(r)
        }),
        (t.noSSR = s)
      c(n(67294))
      var l = c(n(82271))
      function c(e) {
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
      var a = (
        (r = n(67294)) && r.__esModule ? r : { default: r }
      ).default.createContext(null)
      t.LoadableContext = a
    },
    82271: function (e, t, n) {
      "use strict"
      var r = n(95318),
        a = r(n(34575)),
        o = r(n(93913)),
        u = r(n(59713))
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
      function l(e) {
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
      function c(e, t) {
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
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var o,
          u = !0,
          i = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (u = e.done), e
          },
          e: function (e) {
            ;(i = !0), (o = e)
          },
          f: function () {
            try {
              u || null == n.return || n.return()
            } finally {
              if (i) throw o
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
        m = n(65066)
      var h = [],
        b = [],
        v = !1
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
          ;(0, a.default)(this, e),
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
          function a() {
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
          if (!v && !n.suspense) {
            var o = n.webpack ? n.webpack() : n.modules
            o &&
              b.push(function (e) {
                var t,
                  n = c(o)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    if (-1 !== e.indexOf(r)) return a()
                  }
                } catch (u) {
                  n.e(u)
                } finally {
                  n.f()
                }
              })
          }
          var u = n.suspense
            ? function (e, t) {
                return p.default.createElement(
                  n.lazy,
                  l(l({}, e), {}, { ref: t })
                )
              }
            : function (e, t) {
                a()
                var o = p.default.useContext(m.LoadableContext),
                  u = d.useSubscription(r)
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
                      return u.loading || u.error
                        ? p.default.createElement(n.loading, {
                            isLoading: u.loading,
                            pastDelay: u.pastDelay,
                            timedOut: u.timedOut,
                            error: u.error,
                            retry: r.retry
                          })
                        : u.loaded
                        ? p.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e
                            })(u.loaded),
                            e
                          )
                        : null
                    },
                    [e, u]
                  )
                )
              }
          return (
            (u.preload = function () {
              return !n.suspense && a()
            }),
            (u.displayName = "LoadableComponent"),
            p.default.forwardRef(u)
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
              return (v = !0), t()
            }
            w(b, e).then(n, n)
          })
        }),
        (window.__NEXT_PRELOADREADY = x.preloadReady)
      var E = x
      t.default = E
    },
    26148: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(86854),
            o = n(67294),
            u = n(9008),
            i = n.n(u),
            l = n(11972),
            c = n(59876),
            s = n(70216),
            f = n(92906),
            p = n(96217),
            d = n(13130),
            m = n(91632),
            h = n(31681),
            b = e([p, d])
          ;[p, d] = b.then ? (await b)() : b
          var v = function (e) {
            var t = e.children
            return o.createElement(
              l.HC,
              null,
              o.createElement(l.DE, {
                as: c.rE,
                color: "green.500",
                bottom: "3px",
                position: "relative"
              }),
              t
            )
          }
          function y(e) {
            var t = e.logout,
              n = e.triggerAuthUpdate,
              r = e.identity,
              u = (0, o.useState)(1),
              f = (0, a.Z)(u, 2),
              b = f[0],
              y = f[1]
            return o.createElement(
              d.Z,
              {
                logout: t,
                triggerAuthUpdate: n,
                identity: r,
                activeLink: h.Az.Whatsnew,
                opacity: b,
                setOpacity: y
              },
              o.createElement(
                i(),
                null,
                o.createElement("title", null, "What's New - Content Fly")
              ),
              o.createElement(
                l.kC,
                { h: "81px", display: { base: "none", md: "flex" } },
                o.createElement(l.LZ, null),
                o.createElement(p.d, {
                  logout: t,
                  identity: r,
                  triggerAuthUpdate: n
                })
              ),
              o.createElement(l.iz, {
                h: "1px",
                color: "gray_light",
                display: { base: "none", md: "flex" }
              }),
              o.createElement(
                l.kC,
                { flexDirection: "row", flex: "1" },
                o.createElement(
                  l.kC,
                  { flex: "1", direction: "column", overflowY: "auto", p: "6" },
                  o.createElement(
                    l.xu,
                    {
                      algin: "center",
                      px: { base: "6px", md: "20px", lg: "40px" },
                      pb: "40px"
                    },
                    o.createElement(
                      l.X6,
                      {
                        size: "lg",
                        pb: "12px",
                        textAlign: "center",
                        color: "black"
                      },
                      "What's New? \ud83d\udce3 \ud83c\udf81 \ud83e\udd29"
                    ),
                    o.createElement(
                      l.xu,
                      null,
                      o.createElement(
                        l.X6,
                        { size: "md", color: "black", py: "10px" },
                        "Alpha 0.2 - Public Release"
                      ),
                      o.createElement(
                        l.xv,
                        { color: "black", py: "10px" },
                        "This is our biggest launch ever! We have made a lot of improvements in the dapp as well as introducing cool new features you have been anticipating."
                      ),
                      o.createElement(
                        l.X6,
                        { size: "sm", color: "black", py: "10px" },
                        "New Features"
                      ),
                      o.createElement(
                        l.xu,
                        { py: "10px" },
                        o.createElement(
                          l.aV,
                          { spacing: 3 },
                          o.createElement(
                            v,
                            null,
                            "Login / Sign up with Plug Wallet"
                          ),
                          o.createElement(
                            v,
                            null,
                            "My Web3 Wallet page where you can connect your Plug Wallet to Content Fly if you have used Internet Identity for login."
                          ),
                          o.createElement(
                            v,
                            null,
                            "After completing a job, you can now claim utility NFTs - Proof of Job Completion & Proof of Deliverable Ownership with your Plug Wallet."
                          ),
                          o.createElement(
                            v,
                            null,
                            "A new Completion tab is added to Job so that creators can submit the final deliverable for approval. The deliverable will become part of the NFT!"
                          ),
                          o.createElement(
                            v,
                            null,
                            "Browse Creators page is now publicly viewable without login."
                          ),
                          o.createElement(
                            v,
                            null,
                            "The overall app performance has improved with the use of direct cachable HTTPS image requests to image canisters. We have also implemented scalable image and file storage canisters using actor class."
                          ),
                          o.createElement(
                            v,
                            null,
                            "Chat Messaging System in Job has improved with better performance and UX responsiveness. Most messages can be sent within a couple of seconds."
                          ),
                          o.createElement(v, null, "Job")
                        )
                      ),
                      o.createElement(
                        l.X6,
                        { size: "sm", color: "black", py: "10px" },
                        "Enhancements / Fixes"
                      ),
                      o.createElement(
                        l.xu,
                        { py: "10px" },
                        o.createElement(
                          l.aV,
                          { spacing: 3 },
                          o.createElement(
                            v,
                            null,
                            "Job due date can now show the count down by hours or minutes"
                          ),
                          o.createElement(
                            v,
                            null,
                            "Clicking on Job skill or category will open similar jobs of the selected group"
                          ),
                          o.createElement(
                            v,
                            null,
                            "All Jobs and My Jobs will show the most recent jobs first."
                          )
                        )
                      ),
                      o.createElement(
                        l.X6,
                        { size: "sm", color: "black", py: "10px" },
                        "Content Fly Community Discord"
                      ),
                      o.createElement(
                        l.xv,
                        { color: "black", py: "10px" },
                        "Got new ideas? Discuss with us or community members at",
                        " ",
                        o.createElement(
                          s.Z,
                          { href: "https://discord.gg/uuDzQxdmmY" },
                          "https://discord.gg/uuDzQxdmmY",
                          o.createElement(c.h0, { ml: "6px", mb: "2px" })
                        )
                      )
                    )
                  ),
                  o.createElement(m.$, { pb: { base: "100px", md: "0px" } })
                )
              )
            )
          }
          ;(t.default = (0, f.v_)(y)), r()
        } catch (y) {
          r(y)
        }
      })
    },
    91632: function (e, t, n) {
      "use strict"
      n.d(t, {
        $: function () {
          return s
        }
      })
      var r = n(87462),
        a = n(67294),
        o = n(11972),
        u = n(51815),
        i = n(49697),
        l = n(49162),
        c = n(15658),
        s = function (e) {
          return a.createElement(
            i.W,
            (0, r.Z)(
              {
                position: "relative",
                bottom: "0",
                width: "100%",
                px: 0,
                pb: 6,
                pt: 3
              },
              e
            ),
            a.createElement(
              o.gC,
              null,
              a.createElement(
                o.M5,
                null,
                a.createElement(
                  o.rU,
                  { href: "https://contentfly.app" },
                  a.createElement(l.Z, {
                    width: "100px",
                    src: "/logo-vertical-".concat("light", ".png"),
                    alt: "Content Fly logo"
                  })
                )
              )
            ),
            a.createElement(
              o.Ug,
              { pt: 6, px: 1, fontSize: { base: "12px", md: "14px" } },
              a.createElement(
                o.rU,
                { href: "mailto://hello@contentfly.app" },
                "hello@contentfly.app"
              ),
              a.createElement(
                o.rU,
                { href: "https://twitter.com/ContentFlyApp", isExternal: !0 },
                "Twitter"
              ),
              a.createElement(
                o.rU,
                {
                  href: "https://medium.com/contentfly-app-blog",
                  isExternal: !0
                },
                "Medium"
              ),
              a.createElement(
                o.rU,
                { href: "https://discord.gg/uuDzQxdmmY", isExternal: !0 },
                "Discord"
              ),
              a.createElement(
                o.rU,
                { href: "/terms.html", isExternal: !0 },
                "Terms"
              )
            ),
            a.createElement(u.hU, {
              icon: a.createElement(c.kD, { w: "278px", h: "34px" }),
              variant: "unstyled",
              onClick: function () {
                window.open("https://smartcontracts.org", "_blank")
              },
              mt: "6"
            })
          )
        }
    },
    2243: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return o
        }
      })
      var r = n(67294),
        a = n(66956),
        o = function () {
          return r.createElement(a.$, {
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
          return c
        }
      })
      var r = n(15861),
        a = n(87757),
        o = n.n(a),
        u = n(64380),
        i = n(22169),
        l = n(31681),
        c = (function () {
          var e = (0, r.Z)(
            o().mark(function e(t, n) {
              var r, a, c, s
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = l.Ho.InternetIdentity),
                        (a = l.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === a ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, u.l)()
                    case 6:
                      return (c = e.sent), e.abrupt("return", c)
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
          return j
        },
        bv: function () {
          return k
        },
        vV: function () {
          return P
        },
        v_: function () {
          return C
        }
      })
      var r = n(87462),
        a = n(15861),
        o = n(86854),
        u = n(87757),
        i = n.n(u),
        l = n(67294),
        c = n(5152),
        s = n.n(c),
        f = n(11163),
        p = n(30647),
        d = n(11972),
        m = n(49697),
        h = n(49162),
        b = n(2243),
        v = function () {
          return l.createElement(
            m.W,
            { h: "120vh" },
            l.createElement(
              d.xu,
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
        y = n(98400),
        g = n(23256),
        x = n(66985),
        w = n(24686),
        E = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        _ = s()(function () {
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
            return S(e, null !== t && void 0 !== t ? t : O, null, !1)(n)
          }
        },
        j = function (e) {
          return function (t) {
            return S(
              e,
              E,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        P = function (e) {
          return function (t) {
            return S(e, _, null, !1)(t)
          }
        },
        C = function (e) {
          return function (t) {
            return S(e, _, null, !0)(t)
          }
        },
        S = function (e, t, u, c) {
          return function (s) {
            var d = (0, l.useState)(null),
              m = (0, o.Z)(d, 2),
              h = m[0],
              b = m[1],
              E = (0, l.useState)(!0),
              O = (0, o.Z)(E, 2),
              k = O[0],
              j = O[1],
              P = (0, l.useState)(""),
              C = (0, o.Z)(P, 2),
              S = C[0],
              A = C[1],
              D = (0, l.useState)(1),
              T = (0, o.Z)(D, 2),
              Z = T[0],
              U = T[1],
              z = (0, f.useRouter)(),
              M = (0, y.oR)(g.Z),
              N = M.appContext.authProvider,
              F = M.appContext.candidAuthProvider(),
              L = null !== t && void 0 !== t ? t : _
            ;(0, l.useEffect)(
              function () {
                function e() {
                  return (e = (0, a.Z)(
                    i().mark(function e() {
                      var t
                      return i().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  j(!0),
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
                                if (!X(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!M.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), V(t)
                              case 13:
                                I(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), J()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  x.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), j(!1), e.finish(23)
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
              [Z]
            )
            var V = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t) {
                    var n, r, a, o
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, N)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(F)
                            case 6:
                              if (
                                ((a = e.sent),
                                !(
                                  (null === (n = a.ok) || void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (o = a.ok[0]),
                                (e.next = 11),
                                M.updateForNewSignupLogin(o)
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
                U(Z + 1)
              },
              I = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t) {
                    var r, a
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((b(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), n.e(7130).then(n.bind(n, 47130))
                            )
                          case 4:
                            ;(r = e.sent),
                              (a = r.Usergeek).setPrincipal(t.getPrincipal()),
                              a.trackSession()
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
            function R() {
              return (
                (R = (0, a.Z)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return I(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            X(e.sent)
                              ? I(t)
                              : A(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                R.apply(this, arguments)
              )
            }
            function X(e) {
              if (null == u) return !0
              var t = u.split(",").map(function (e) {
                return e.trim()
              })
              return "" == u.trim() || t.includes(e.toString())
            }
            var J = (function () {
                var e = (0, a.Z)(
                  i().mark(function e() {
                    var t
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(N)), (e.next = 3), t()
                          case 3:
                            I(null), M.reset(), (0, w.clearCache)()
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
              Y = (function () {
                var e = (0, a.Z)(
                  i().mark(function e() {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), J()
                          case 2:
                            z.push("/")
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
                  (0, r.Z)({ identity: h, logout: Y, triggerAuthUpdate: W }, s)
                )
              : k
              ? l.createElement(v, null)
              : c
              ? l.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: W }))
              : l.createElement(L, {
                  handleAuthenticated: function (e) {
                    return R.apply(this, arguments)
                  },
                  warningMesg: S
                })
          }
        }
    },
    23816: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/whatsnew",
        function () {
          return n(26148)
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
              function a(e) {
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
                  var a = {}
                  return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                      a[e] = e
                    }),
                    "abcdefghijklmnopqrst" ===
                      Object.keys(Object.assign({}, a)).join("")
                  )
                } catch (e) {
                  return !1
                }
              })()
                ? Object.assign
                : function (e, o) {
                    for (var u, i, l = a(e), c = 1; c < arguments.length; c++) {
                      for (var s in (u = Object(arguments[c])))
                        n.call(u, s) && (l[s] = u[s])
                      if (t) {
                        i = t(u)
                        for (var f = 0; f < i.length; f++)
                          r.call(u, i[f]) && (l[i[f]] = u[i[f]])
                      }
                    }
                    return l
                  }
            },
            569: function (e, t, n) {
              0
            },
            403: function (e, t, n) {
              var r = n(800),
                a = n(522)
              t.useSubscription = function (e) {
                var t = e.getCurrentValue,
                  n = e.subscribe,
                  o = a.useState(function () {
                    return { getCurrentValue: t, subscribe: n, value: t() }
                  })
                e = o[0]
                var u = o[1]
                return (
                  (o = e.value),
                  (e.getCurrentValue === t && e.subscribe === n) ||
                    ((o = t()),
                    u({ getCurrentValue: t, subscribe: n, value: o })),
                  a.useDebugValue(o),
                  a.useEffect(
                    function () {
                      function e() {
                        if (!a) {
                          var e = t()
                          u(function (a) {
                            return a.getCurrentValue !== t ||
                              a.subscribe !== n ||
                              a.value === e
                              ? a
                              : r({}, a, { value: e })
                          })
                        }
                      }
                      var a = !1,
                        o = n(e)
                      return (
                        e(),
                        function () {
                          ;(a = !0), o()
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
        function a(e) {
          var n = r[e]
          if (void 0 !== n) return n.exports
          var o = (r[e] = { exports: {} }),
            u = !0
          try {
            t[e](o, o.exports, a), (u = !1)
          } finally {
            u && delete r[e]
          }
          return o.exports
        }
        a.ab = "//"
        var o = a(138)
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
        return (t = 23816), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
