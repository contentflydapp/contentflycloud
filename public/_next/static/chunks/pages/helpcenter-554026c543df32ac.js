;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3176],
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
      function l(e) {
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
          var n = i.default,
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
            : "object" === (0, o.default)(e) && (r = l(l({}, r), e))
          var a = (r = l(l({}, r), t))
          if (a.suspense)
            throw new Error(
              "Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense"
            )
          if (a.suspense) return n(a)
          r.loadableGenerated &&
            delete (r = l(l({}, r), r.loadableGenerated)).loadableGenerated
          if ("boolean" === typeof r.ssr) {
            if (!r.ssr) return delete r.ssr, s(n, r)
            delete r.ssr
          }
          return n(r)
        }),
        (t.noSSR = s)
      c(n(67294))
      var i = c(n(82271))
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
      function l(e, t) {
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
            ? l(Object(n), !0).forEach(function (t) {
                ;(0, u.default)(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
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
          l = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (u = e.done), e
          },
          e: function (e) {
            ;(l = !0), (o = e)
          },
          f: function () {
            try {
              u || null == n.return || n.return()
            } finally {
              if (l) throw o
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
        h = n(65066)
      var m = [],
        y = [],
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
      var v = (function () {
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
                ;(this._state = i(
                  i({}, this._state),
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
      function E(e) {
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
              var t = new v(e, n)
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
              y.push(function (e) {
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
                  i(i({}, e), {}, { ref: t })
                )
              }
            : function (e, t) {
                a()
                var o = p.default.useContext(h.LoadableContext),
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
      ;(E.preloadAll = function () {
        return new Promise(function (e, t) {
          w(m).then(e, t)
        })
      }),
        (E.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (t) {
            var n = function () {
              return (b = !0), t()
            }
            w(y, e).then(n, n)
          })
        }),
        (window.__NEXT_PRELOADREADY = E.preloadReady)
      var x = E
      t.default = x
    },
    93554: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(86854),
            o = n(67294),
            u = n(9008),
            l = n.n(u),
            i = n(11972),
            c = n(27386),
            s = n(59876),
            f = n(70216),
            p = n(96217),
            d = n(13130),
            h = n(91632),
            m = n(28725),
            y = n(60343),
            b = n(52672),
            g = n(92906),
            v = e([p, d])
          ;[p, d] = v.then ? (await v)() : v
          var E = function (e) {
            var t = e.children
            return o.createElement(
              i.X6,
              { size: "md", pb: "12px", pl: "0px", pt: "40px", color: "black" },
              t
            )
          }
          function w(e) {
            var t = e.logout,
              n = e.triggerAuthUpdate,
              r = e.identity,
              u = (0, o.useState)(1),
              g = (0, a.Z)(u, 2),
              v = g[0],
              w = g[1]
            return o.createElement(
              d.Z,
              {
                logout: t,
                triggerAuthUpdate: n,
                identity: r,
                opacity: v,
                setOpacity: w
              },
              o.createElement(
                l(),
                null,
                o.createElement("title", null, "Help Center - Content Fly")
              ),
              o.createElement(
                i.kC,
                { h: "81px", display: { base: "none", md: "flex" } },
                o.createElement(i.LZ, null),
                o.createElement(p.d, {
                  logout: t,
                  identity: r,
                  triggerAuthUpdate: n
                })
              ),
              o.createElement(i.iz, {
                h: "1px",
                color: "gray_light",
                display: { base: "none", md: "flex" }
              }),
              o.createElement(
                i.kC,
                { flexDirection: "row", flex: "1" },
                o.createElement(
                  i.kC,
                  {
                    flex: "1",
                    width: "96",
                    direction: "column",
                    overflowY: "auto",
                    p: "6"
                  },
                  o.createElement(
                    i.X6,
                    { size: "lg", textAlign: "center", color: "black" },
                    "Help Center \ud83d\udc68\u200d\ud83d\udcbb"
                  ),
                  o.createElement(
                    i.xu,
                    { pb: "80px" },
                    o.createElement(
                      c.UQ,
                      { px: "20px", allowMultiple: !0 },
                      o.createElement(E, null, "Quickstart"),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(y.D, null, "Single User Type System"),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            i.xv,
                            null,
                            "Content Fly adopts a single user type system which means you can be both content creator and / or content buyer with your single user account. You can create a creator portfolio and/or create a job from that same account."
                          )
                        )
                      ),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(y.D, null, "Quick Start for Creators"),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            m.d,
                            null,
                            o.createElement(
                              i.HC,
                              null,
                              "Signup a new account & Create User Profile"
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "Create a Creator Portfolio for listing in Browse Creators"
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "Goto Browse Creators in the left menu to see all the early adopters like you. You can brwose by creator type and subtypes."
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              'Goto Browse Jobs in the left menu to see if there is any jobs you are interested in. When Content Fly launches, we set up a job "Content Fly NFT Graphics Design". Read the job brief. Add it to My Jobs from the top right button. Switch to Workspace tab to chat with us. Note that the messages are visible only between you and the content buyer. This is guarded by the smart contract with your Interent Identity. Note that the job system requires Creators to initiate chat with Buyer by sending message first so that they know you are interested in the job. You can then collaborate with them to work on the job and negotiate a payment. Content Fly is planning to introduce escrow non-custodial smart contract payment in the next phaase. By then, please work out a payment method with the Content Buyer.'
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "You can find your saved jobs in My Jobs in the menu."
                            )
                          )
                        )
                      ),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(
                          y.D,
                          null,
                          "Quick Start for Brands/Content Buyers"
                        ),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            m.d,
                            null,
                            o.createElement(i.HC, null, "Signup a new account"),
                            o.createElement(
                              i.HC,
                              null,
                              'To see a sample job "Content Fly NFT graphics design" created by us, go to Browse Jobs from the menu. Open job to see what job looks like. Within a Job, there are Job Brief and Workspace. Job Brieft basically specifes what content you needs, the type of content creator you are after, deliverable and due date. There is also inspiration images and documents content buyers can upload for creators to reference. We aim to keep this simple with flexbility for changes in the future.'
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "Goto My Jobs from the left menu and click on New Job"
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "Follow the friendly step by step wizard form to create a job brief and publish your job"
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "Your published job can be seen by all creators. It can also be found in My Jobs from the menu. If you want to update or add new images / docs, you can edit it there. Once your job is complete, you can take it down by setting the status to Hidden from the Job Brief top right button. When you need it again, feel free to set it back to active and edit the Job Brief like updating the Due Date."
                            ),
                            o.createElement(
                              i.HC,
                              null,
                              "When a creator is interested in the job, they can send you messages from Workspace. Note that the current Job system only allows creators to initiate chat with Content Buyers. That can change in the future. You can find a list of creators interested in your job from the Workspace tab. Collaborate with creators to help them get on to the job and negotiate a payment with the creator. In the future, we will provide Web Push Notification for new incoming chat messages. Content Fly is planning to introduce escrow non-custodial smart contract payment in the next phaase. By then, please work out a payment method with the creator."
                            )
                          )
                        )
                      ),
                      o.createElement(E, null, "FAQ - General"),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(y.D, null, "What is the Terms of use?"),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            f.Z,
                            { href: "terms.html" },
                            "Terms of use",
                            o.createElement(s.h0, { ml: "6px", mb: "2px" })
                          )
                        )
                      ),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(
                          y.D,
                          null,
                          "What is the Content Copyright for job done in Content Fly?"
                        ),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            f.Z,
                            { href: "copyright.html" },
                            "Copyright",
                            o.createElement(s.h0, { ml: "6px", mb: "2px" })
                          )
                        )
                      ),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(y.D, null, "Have new ideas?"),
                        o.createElement(
                          b.P,
                          null,
                          "Let us know or discuss with the community at",
                          " ",
                          o.createElement(
                            f.Z,
                            { href: "https://discord.gg/uuDzQxdmmY" },
                            "Content Fly Community Discord",
                            o.createElement(s.h0, { ml: "6px", mb: "2px" })
                          )
                        )
                      ),
                      o.createElement(E, null, "FAQ - Canisters"),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(
                          y.D,
                          null,
                          "What is the offical Frontend Canister ID?"
                        ),
                        o.createElement(
                          b.P,
                          null,
                          "The frontend Canister ID is grwwk-gaaaa-aaaah-aapma-cai. Users can also go to our official domain https://main.contentfly.app for main app. It redirects user to the frontend Canister."
                        )
                      ),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(
                          y.D,
                          null,
                          "What are the offical Backend Canister IDs?"
                        ),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            i.xv,
                            { pb: "12px" },
                            "When users interact with Content Fly Dapp like creating profile, portfolio, job or sending chat message, they would be interacting with our backend Canisters depending on the functions:"
                          ),
                          o.createElement(
                            i.xv,
                            null,
                            "User Profile - osqo2-eaaaa-aaaah-aawca-cai"
                          ),
                          o.createElement(
                            i.xv,
                            null,
                            "Portfolio - ovrio-jyaaa-aaaah-aawcq-cai"
                          ),
                          o.createElement(
                            i.xv,
                            null,
                            "Job - akpg4-7qaaa-aaaah-aa4rq-cai"
                          ),
                          o.createElement(
                            i.xv,
                            null,
                            "Chat - ayjrf-taaaa-aaaah-aa4sq-cai"
                          ),
                          o.createElement(
                            i.xv,
                            null,
                            "NFT - vh6zo-yaaaa-aaaah-abc5q-cai"
                          )
                        )
                      ),
                      o.createElement(E, null, "FAQ - Creator Portfolio"),
                      o.createElement(
                        c.Qd,
                        null,
                        o.createElement(
                          y.D,
                          null,
                          "I can't find a Content Creator Type that matches me. What should I do?"
                        ),
                        o.createElement(
                          b.P,
                          null,
                          o.createElement(
                            i.xv,
                            null,
                            "No worry! We understand the current list is limited. Try to select a creator type that closely matches you for the moment. You can update it later. Drop us a email at",
                            " ",
                            o.createElement(
                              i.rU,
                              { href: "mailto:hello@contentfly.app" },
                              "hello@contentfly.app"
                            ),
                            " ",
                            "or direct message in Twitter",
                            " ",
                            o.createElement(
                              i.rU,
                              { href: "https://twitter.com/contentflyapp" },
                              "@ContentFlyApp"
                            ),
                            " ",
                            "to request new creator type or skill."
                          )
                        )
                      )
                    )
                  ),
                  o.createElement(h.$, { pb: { base: "80px", md: "0px" } })
                )
              )
            )
          }
          ;(t.default = (0, g.v_)(w)), r()
        } catch (w) {
          r(w)
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
        l = n(49697),
        i = n(49162),
        c = n(15658),
        s = function (e) {
          return a.createElement(
            l.W,
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
                  a.createElement(i.Z, {
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
    28725: function (e, t, n) {
      "use strict"
      n.d(t, {
        d: function () {
          return o
        }
      })
      var r = n(67294),
        a = n(11972),
        o = function (e) {
          var t = e.children
          return r.createElement(a.GS, { spacing: "10px" }, t)
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
    52672: function (e, t, n) {
      "use strict"
      n.d(t, {
        P: function () {
          return u
        }
      })
      var r = n(27386),
        a = n(11972),
        o = n(67294),
        u = function (e) {
          var t = e.children
          return o.createElement(
            r.Hk,
            { pt: 3, pb: 6 },
            o.createElement(
              a.xu,
              { color: "black", fontSize: "15px", lineHeight: "164.84%" },
              t
            )
          )
        }
    },
    60343: function (e, t, n) {
      "use strict"
      n.d(t, {
        D: function () {
          return u
        }
      })
      var r = n(67294),
        a = n(27386),
        o = n(11972),
        u = function (e) {
          var t = e.children
          return r.createElement(
            "h2",
            null,
            r.createElement(
              a.KF,
              null,
              r.createElement(
                o.xv,
                { flex: "1", textAlign: "left", color: "black" },
                t
              ),
              r.createElement(a.XE, { color: "purple" })
            )
          )
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
        l = n(22169),
        i = n(31681),
        c = (function () {
          var e = (0, r.Z)(
            o().mark(function e(t, n) {
              var r, a, c, s
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = i.Ho.InternetIdentity),
                        (a = i.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === a ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, u.l)()
                    case 6:
                      return (c = e.sent), e.abrupt("return", c)
                    case 8:
                      return (e.next = 10), (0, l.gX)(n || {})
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
          return _
        },
        vV: function () {
          return O
        },
        v_: function () {
          return P
        }
      })
      var r = n(87462),
        a = n(15861),
        o = n(86854),
        u = n(87757),
        l = n.n(u),
        i = n(67294),
        c = n(5152),
        s = n.n(c),
        f = n(11163),
        p = n(30647),
        d = n(11972),
        h = n(49697),
        m = n(49162),
        y = n(2243),
        b = function () {
          return i.createElement(
            h.W,
            { h: "120vh" },
            i.createElement(
              d.xu,
              { mt: "120px", mb: "30px" },
              i.createElement(m.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            i.createElement(y.u, null)
          )
        },
        g = n(98400),
        v = n(23256),
        E = n(66985),
        w = n(24686),
        x = s()(function () {
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
        C = s()(function () {
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
        _ = function (e, t) {
          return function (n) {
            return D(e, null !== t && void 0 !== t ? t : C, null, !1)(n)
          }
        },
        j = function (e) {
          return function (t) {
            return D(
              e,
              x,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        O = function (e) {
          return function (t) {
            return D(e, k, null, !1)(t)
          }
        },
        P = function (e) {
          return function (t) {
            return D(e, k, null, !0)(t)
          }
        },
        D = function (e, t, u, c) {
          return function (s) {
            var d = (0, i.useState)(null),
              h = (0, o.Z)(d, 2),
              m = h[0],
              y = h[1],
              x = (0, i.useState)(!0),
              C = (0, o.Z)(x, 2),
              _ = C[0],
              j = C[1],
              O = (0, i.useState)(""),
              P = (0, o.Z)(O, 2),
              D = P[0],
              S = P[1],
              T = (0, i.useState)(1),
              A = (0, o.Z)(T, 2),
              F = A[0],
              U = A[1],
              Z = (0, f.useRouter)(),
              H = (0, g.oR)(v.Z),
              I = H.appContext.authProvider,
              N = H.appContext.candidAuthProvider(),
              W = null !== t && void 0 !== t ? t : k
            ;(0, i.useEffect)(
              function () {
                function e() {
                  return (e = (0, a.Z)(
                    l().mark(function e() {
                      var t
                      return l().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  j(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(H.appContext.authProvider, {
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
                                if (!z(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!H.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), Q(t)
                              case 13:
                                B(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), Y()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  E.default.error(e.t0)
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
              [F]
            )
            var Q = (function () {
                var e = (0, a.Z)(
                  l().mark(function e(t) {
                    var n, r, a, o
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, I)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(N)
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
                                H.updateForNewSignupLogin(o)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                E.default.error(e.t0)
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
              M = function () {
                U(F + 1)
              },
              B = (function () {
                var e = (0, a.Z)(
                  l().mark(function e(t) {
                    var r, a
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((y(t), null == t)) {
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
            function J() {
              return (
                (J = (0, a.Z)(
                  l().mark(function e(t) {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return B(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            z(e.sent)
                              ? B(t)
                              : S(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                J.apply(this, arguments)
              )
            }
            function z(e) {
              if (null == u) return !0
              var t = u.split(",").map(function (e) {
                return e.trim()
              })
              return "" == u.trim() || t.includes(e.toString())
            }
            var Y = (function () {
                var e = (0, a.Z)(
                  l().mark(function e() {
                    var t
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(I)), (e.next = 3), t()
                          case 3:
                            B(null), H.reset(), (0, w.clearCache)()
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
                var e = (0, a.Z)(
                  l().mark(function e() {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Y()
                          case 2:
                            Z.push("/")
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
            return null != m
              ? i.createElement(
                  e,
                  (0, r.Z)({ identity: m, logout: q, triggerAuthUpdate: M }, s)
                )
              : _
              ? i.createElement(b, null)
              : c
              ? i.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: M }))
              : i.createElement(W, {
                  handleAuthenticated: function (e) {
                    return J.apply(this, arguments)
                  },
                  warningMesg: D
                })
          }
        }
    },
    48693: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/helpcenter",
        function () {
          return n(93554)
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
                    for (var u, l, i = a(e), c = 1; c < arguments.length; c++) {
                      for (var s in (u = Object(arguments[c])))
                        n.call(u, s) && (i[s] = u[s])
                      if (t) {
                        l = t(u)
                        for (var f = 0; f < l.length; f++)
                          r.call(u, l[f]) && (i[l[f]] = u[l[f]])
                      }
                    }
                    return i
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
        5527, 9876, 828, 9748, 7386, 2144, 5658, 3130, 2888, 9774, 179
      ],
      function () {
        return (t = 48693), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
