;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8405, 953],
  {
    90635: function (e, t, n) {
      "use strict"
      n.d(t, {
        h: function () {
          return r.c
        }
      })
      n(67294)
      var r = n(29574)
    },
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
      var g = [],
        h = [],
        v = !1
      function b(e) {
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
      var x = (function () {
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
      function y(e) {
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
              var t = new x(e, n)
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
              h.push(function (e) {
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
        })(b, e)
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
      ;(y.preloadAll = function () {
        return new Promise(function (e, t) {
          w(g).then(e, t)
        })
      }),
        (y.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (t) {
            var n = function () {
              return (v = !0), t()
            }
            w(h, e).then(n, n)
          })
        }),
        (window.__NEXT_PRELOADREADY = y.preloadReady)
      var k = y
      t.default = k
    },
    3782: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(15861),
            o = n(86854),
            u = n(87757),
            i = n.n(u),
            l = n(67294),
            c = n(9008),
            s = n.n(c),
            f = n(88523),
            p = n(45607),
            d = n(11972),
            m = n(51815),
            g = n(64737),
            h = n(96217),
            v = n(13130),
            b = n(59876),
            x = n(92906),
            y = n(31681),
            w = n(24686),
            k = n(23256),
            E = n(98400),
            C = n(66985),
            P = n(27149),
            _ = n(66897),
            O = n(49443),
            S = n(57299),
            j = n(4037),
            W = n(84720),
            A = n(22856),
            Z = n(2243),
            F = e([h, v])
          ;[h, v] = F.then ? (await F)() : F
          var D = y.oK.Checking,
            T = y.oK.Connected,
            z = y.oK.Disconnected,
            U = y.oK.MayPromptWallet,
            M = y.oK.Unknown,
            R = [
              {
                title: "Web3 Dapp Wallet",
                text: "Your active wallet for interacting with Web3 dapps and smart contracts in a decentralized way"
              },
              {
                title: "Full Control",
                text: "Take full control of your IC crypto tokens, no 3rd party or centralized party"
              },
              {
                title: "Token Standard",
                text: "Supports NFT and DIP20 token standard similiar to Ethereum ERC721 and ERC20"
              },
              {
                title: "Your identity",
                text: "Login to Content Fly with Plug, so your wallet and identity are in one place, improving your experience"
              },
              {
                title: "Easy to use",
                text: "Plug is installed as a Chrome web browser extension, similar to Metamask in Ethereum. Users with Ethereum experience will feel at home."
              },
              {
                title: "NFT",
                text: "Receive Content Fly Proof of Job Completion and Deliverable Ownership NFT's when a job is completed"
              },
              {
                title: "Self Custody Job Payment",
                text: "Content buyers can deposit job payment into a job's smart contract in a self-custodial manner"
              },
              {
                title: "Creators Payouts",
                text: "Creators can receive payout from the smart contracts for their completed jobs"
              }
            ]
          function I(e) {
            var t = e.logout,
              n = e.triggerAuthUpdate,
              r = e.identity,
              u = (0, f.qY)(),
              c = u.isOpen,
              x = u.onOpen,
              F = u.onClose,
              I = (0, l.useState)(!1),
              N = (0, o.Z)(I, 2),
              L = N[0],
              K = N[1],
              Y = (0, l.useState)(!1),
              V = (0, o.Z)(Y, 2),
              H = V[0],
              X = V[1],
              q = (0, l.useState)(!1),
              G = (0, o.Z)(q, 2),
              J = G[0],
              $ = G[1],
              B = (0, l.useState)(null),
              Q = (0, o.Z)(B, 2),
              ee = Q[0],
              te = Q[1],
              ne = (0, l.useState)(1),
              re = (0, o.Z)(ne, 2),
              ae = re[0],
              oe = re[1],
              ue = (0, E.oR)(k.Z),
              ie = ue.appContext,
              le = ue.user,
              ce = y.Ho.Plug,
              se = (0, A.d)(r, !0, !0),
              fe = (0, p.pm)()
            ;(0, l.useEffect)(
              function () {
                var e, t
                H
                  ? te(
                      null === (e = window.ic) ||
                        void 0 === e ||
                        null === (t = e.plug) ||
                        void 0 === t
                        ? void 0
                        : t.agent
                    )
                  : te(null)
              },
              [H]
            )
            var pe = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t) {
                    var n, a, o
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (null != t) {
                                e.next = 3
                                break
                              }
                              return (
                                (0, _.showToast)(
                                  fe,
                                  "Connect Plug",
                                  "We didn't get the approval from your Plug Wallet. Please choose Allow in Plug to approve the Content Fly Canisters.",
                                  "warning"
                                ),
                                e.abrupt("return")
                              )
                            case 3:
                              return (
                                (e.prev = 3),
                                K(!0),
                                (e.next = 7),
                                (0, w.makeUserProfileActor)(r, ce)
                              )
                            case 7:
                              return (
                                (n = e.sent),
                                (a = r.getPrincipal()),
                                (e.next = 11),
                                n.connectPlug(le.id, a, "BhhcPH3nLaDk48WoXpkx")
                              )
                            case 11:
                              ;(o = e.sent).ok
                                ? (C.default.info(
                                    "Connected to CF successfully"
                                  ),
                                  ie.setWalletConnected(y.gF.Unknown))
                                : o.err.plug_connected_other_user
                                ? (0, _.showToast)(
                                    fe,
                                    "Connect Plug",
                                    "Your Plug Wallet Account is connected to another user. Please try again with a different account.",
                                    "error"
                                  )
                                : o.err.permission_denied
                                ? (0, _.showToast)(
                                    fe,
                                    "Connect Plug",
                                    "You don't have permission to connect Plug to the current user account.",
                                    "error"
                                  )
                                : C.default.info(
                                    "Unknown error when connecting to CF"
                                  ),
                                (e.next = 18)
                              break
                            case 15:
                              ;(e.prev = 15),
                                (e.t0 = e.catch(3)),
                                C.default.error(e.t0)
                            case 18:
                              return (e.prev = 18), K(!1), e.finish(18)
                            case 21:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[3, 15, 18, 21]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              de = (function () {
                var e = (0, a.Z)(
                  i().mark(function e() {
                    var t, n
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                null !=
                                (null === (t = window.ic) || void 0 === t
                                  ? void 0
                                  : t.plug)
                              ) {
                                e.next = 4
                                break
                              }
                              return x(), e.abrupt("return")
                            case 4:
                              return (
                                (e.prev = 4),
                                (n = (0, P.Z)(pe, ce)),
                                K(!0),
                                (e.next = 9),
                                n()
                              )
                            case 9:
                              e.next = 13
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(4))
                            case 13:
                              return (e.prev = 13), K(!1), e.finish(13)
                            case 16:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[4, 11, 13, 16]]
                    )
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()
            return (
              (0, l.useEffect)(
                function () {
                  switch (se) {
                    case D:
                      $(!0), X(!1)
                      break
                    case T:
                      $(!1), X(!0), ie.setWalletConnected(y.gF.Connected)
                      break
                    case z:
                      $(!1), X(!1), ie.setWalletConnected(y.gF.Disconnected)
                      break
                    case U:
                      $(!0),
                        (0, _.showToast)(
                          fe,
                          "Checking Your Status",
                          "You may be prompted to unlock your Plug Wallet too.",
                          "info"
                        )
                      break
                    case M:
                      $(!1), X(!1)
                  }
                },
                [se]
              ),
              l.createElement(
                v.Z,
                {
                  logout: t,
                  triggerAuthUpdate: n,
                  identity: r,
                  opacity: ae,
                  setOpacity: oe
                },
                l.createElement(
                  s(),
                  null,
                  l.createElement("title", null, "My Web3 Wallet - Content Fly")
                ),
                l.createElement(
                  d.kC,
                  { h: "81px", display: { base: "none", md: "flex" } },
                  l.createElement(d.LZ, null),
                  l.createElement(h.d, {
                    logout: t,
                    identity: r,
                    triggerAuthUpdate: n
                  })
                ),
                l.createElement(d.iz, {
                  h: "1px",
                  color: "gray_light",
                  display: { base: "none", md: "flex" }
                }),
                l.createElement(
                  d.kC,
                  { flexDirection: "row", flex: "1" },
                  l.createElement(
                    d.kC,
                    {
                      flex: "1",
                      width: "96",
                      direction: "column",
                      overflowY: "auto",
                      p: "6"
                    },
                    l.createElement(
                      d.X6,
                      { size: "lg", textAlign: "center", color: "black" },
                      "My Web3 Wallet",
                      ee && l.createElement(O.R, { identity: ee })
                    ),
                    l.createElement(
                      d.xu,
                      { pb: "80px", pt: "24px" },
                      J &&
                        l.createElement(d.M5, null, l.createElement(Z.u, null)),
                      !H &&
                        !J &&
                        l.createElement(W.S, {
                          connectPlug: de,
                          isConnectPlugLoading: L
                        }),
                      H && !J && l.createElement(j.x, null),
                      !J &&
                        l.createElement(
                          d.M5,
                          { pt: "12px" },
                          l.createElement(
                            m.zx,
                            {
                              onClick: function () {
                                $(!0), ie.setWalletConnected(y.gF.Unknown)
                              },
                              variant: "link",
                              fontWeight: "medium",
                              color: "blue_1"
                            },
                            "Check My Wallet Connection"
                          )
                        ),
                      l.createElement(
                        d.W2,
                        { maxW: "6xl", mt: 10 },
                        l.createElement(
                          d.MI,
                          { columns: { base: 1, md: 2, lg: 4 }, spacing: 10 },
                          R.map(function (e, t) {
                            return l.createElement(
                              d.Ug,
                              { key: t, align: "top" },
                              l.createElement(
                                d.xu,
                                { color: "green.400", px: 2 },
                                l.createElement(g.JO, { as: b.nQ })
                              ),
                              l.createElement(
                                d.gC,
                                { align: "start" },
                                l.createElement(
                                  d.xv,
                                  { fontWeight: 600 },
                                  e.title
                                ),
                                l.createElement(
                                  d.xv,
                                  { color: "gray.600" },
                                  e.text
                                )
                              )
                            )
                          })
                        )
                      ),
                      l.createElement(S.E, { isOpen: c, onClose: F })
                    )
                  )
                )
              )
            )
          }
          ;(t.default = (0, x.v_)(I)), r()
        } catch (I) {
          r(I)
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
          return _
        },
        bv: function () {
          return P
        },
        vV: function () {
          return O
        },
        v_: function () {
          return S
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
        g = n(49162),
        h = n(2243),
        v = function () {
          return l.createElement(
            m.W,
            { h: "120vh" },
            l.createElement(
              d.xu,
              { mt: "120px", mb: "30px" },
              l.createElement(g.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            l.createElement(h.u, null)
          )
        },
        b = n(98400),
        x = n(23256),
        y = n(66985),
        w = n(24686),
        k = s()(function () {
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
        P = function (e, t) {
          return function (n) {
            return j(e, null !== t && void 0 !== t ? t : C, null, !1)(n)
          }
        },
        _ = function (e) {
          return function (t) {
            return j(
              e,
              k,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        O = function (e) {
          return function (t) {
            return j(e, E, null, !1)(t)
          }
        },
        S = function (e) {
          return function (t) {
            return j(e, E, null, !0)(t)
          }
        },
        j = function (e, t, u, c) {
          return function (s) {
            var d = (0, l.useState)(null),
              m = (0, o.Z)(d, 2),
              g = m[0],
              h = m[1],
              k = (0, l.useState)(!0),
              C = (0, o.Z)(k, 2),
              P = C[0],
              _ = C[1],
              O = (0, l.useState)(""),
              S = (0, o.Z)(O, 2),
              j = S[0],
              W = S[1],
              A = (0, l.useState)(1),
              Z = (0, o.Z)(A, 2),
              F = Z[0],
              D = Z[1],
              T = (0, f.useRouter)(),
              z = (0, b.oR)(x.Z),
              U = z.appContext.authProvider,
              M = z.appContext.candidAuthProvider(),
              R = null !== t && void 0 !== t ? t : E
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
                                  _(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(z.appContext.authProvider, {
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
                                if (!Y(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!z.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), I(t)
                              case 13:
                                L(t)
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
                                return (e.prev = 23), _(!1), e.finish(23)
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
            var I = (function () {
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
                                (0, w.makeUserProfileActor)(t, U)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(M)
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
                                z.updateForNewSignupLogin(o)
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
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              N = function () {
                D(F + 1)
              },
              L = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t) {
                    var r, a
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((h(t), null == t)) {
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
            function K() {
              return (
                (K = (0, a.Z)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return L(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            Y(e.sent)
                              ? L(t)
                              : W(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                K.apply(this, arguments)
              )
            }
            function Y(e) {
              if (null == u) return !0
              var t = u.split(",").map(function (e) {
                return e.trim()
              })
              return "" == u.trim() || t.includes(e.toString())
            }
            var V = (function () {
                var e = (0, a.Z)(
                  i().mark(function e() {
                    var t
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(U)), (e.next = 3), t()
                          case 3:
                            L(null), z.reset(), (0, w.clearCache)()
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
                var e = (0, a.Z)(
                  i().mark(function e() {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), V()
                          case 2:
                            T.push("/")
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
            return null != g
              ? l.createElement(
                  e,
                  (0, r.Z)({ identity: g, logout: H, triggerAuthUpdate: N }, s)
                )
              : P
              ? l.createElement(v, null)
              : c
              ? l.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: N }))
              : l.createElement(R, {
                  handleAuthenticated: function (e) {
                    return K.apply(this, arguments)
                  },
                  warningMesg: j
                })
          }
        }
    },
    84720: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return c
        }
      })
      var r = n(67294),
        a = n(42273),
        o = n(11972),
        u = n(15658),
        i = n(70216),
        l = n(59876),
        c = function (e) {
          var t = e.connectPlug,
            n = e.isConnectPlugLoading
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              o.M5,
              null,
              r.createElement(
                a.Z,
                { w: "220px", onClick: t, isLoading: n },
                r.createElement(u.gk, { h: "40px", mr: "10px" }),
                "Connect Plug"
              )
            ),
            r.createElement(
              o.M5,
              null,
              r.createElement(
                i.Z,
                {
                  href: "https://medium.com/plugwallet/how-to-setup-a-wallet-in-plug-quick-guide-6504daaa37e9",
                  textDecoration: "none"
                },
                "Plug Quick Guide",
                r.createElement(l.h0, { ml: "6px", mb: "2px" })
              )
            ),
            r.createElement(
              o.Kq,
              {
                spacing: 4,
                as: o.W2,
                maxW: "3xl",
                textAlign: "center",
                mt: "12px"
              },
              r.createElement(
                o.xv,
                { color: "gray.600", fontSize: "xl" },
                "Enjoy the full features of Content Fly by",
                " ",
                r.createElement(
                  i.Z,
                  { href: "https://plugwallet.ooo/", textDecoration: "none" },
                  "connecting to ",
                  r.createElement(u.gk, { h: "40px", mr: "10px" }),
                  "Plug"
                ),
                ", which is the first supported wallet in Content Fly"
              )
            )
          )
        }
    },
    57299: function (e, t, n) {
      "use strict"
      n.d(t, {
        E: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(25527),
        o = n(11972),
        u = n(51815),
        i = function (e) {
          var t = e.isOpen,
            n = e.onClose
          return r.createElement(
            a.aR,
            { isOpen: t, onClose: n },
            r.createElement(
              a.dh,
              null,
              r.createElement(
                a._T,
                null,
                r.createElement(
                  a.fY,
                  { fontSize: "lg", fontWeight: "bold" },
                  "Connect Plug"
                ),
                r.createElement(
                  a.iP,
                  null,
                  r.createElement(
                    o.xv,
                    null,
                    "Please install Plug Wallet Chrome Extension first. If you have installed it, please reload this page so that we can detect it."
                  ),
                  r.createElement(
                    o.xv,
                    { py: "8px" },
                    "Notes: Chrome Web Browser is needed"
                  )
                ),
                r.createElement(
                  a.xo,
                  null,
                  r.createElement(
                    u.zx,
                    {
                      onClick: function () {
                        n(),
                          setTimeout(function () {
                            window.location.reload()
                          }, 500)
                      },
                      ml: 3
                    },
                    "Reload Page"
                  ),
                  r.createElement(
                    u.zx,
                    {
                      onClick: function () {
                        n(), window.open("https://plugwallet.ooo/", "_blank")
                      }
                    },
                    "Install Plug"
                  )
                )
              )
            )
          )
        }
    },
    4037: function (e, t, n) {
      "use strict"
      n.d(t, {
        x: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(11972),
        o = n(15658),
        u = function (e) {
          return r.createElement(
            a.xv,
            { fontSize: "20px", textAlign: "center", color: "black" },
            e.children
          )
        },
        i = function () {
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              u,
              null,
              "Awesome \ud83d\udc4d ! \ud83d\ude03 Your ",
              r.createElement(o.gk, { h: "40px", mr: "10px" }),
              "Plug Wallet is connected to Content Fly."
            ),
            r.createElement(
              u,
              null,
              "Enjoy the full features of Content Fly. \u2b07\ufe0f"
            )
          )
        }
    },
    49443: function (e, t, n) {
      "use strict"
      n.d(t, {
        R: function () {
          return P
        }
      })
      var r = n(15861),
        a = n(86854),
        o = n(87757),
        u = n.n(o),
        i = n(67294),
        l = n(45607),
        c = n(11972),
        s = n(64737),
        f = n(56223),
        p = n(25927),
        d = n(51815),
        m = n(87462),
        g = n(45987),
        h = ["onClick", "children"],
        v = (0, i.forwardRef)(function (e, t) {
          var n = e.onClick,
            r = e.children,
            a = (0, g.Z)(e, h)
          return i.createElement(
            d.zx,
            (0, m.Z)(
              {
                background: "white",
                color: "black",
                variant: "outline",
                _hover: {
                  bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                  boxShadow: "lg",
                  color: "white",
                  borderColor: "white"
                },
                fontWeight: "medium",
                fontSize: "13px",
                w: "120px",
                minW: "120px",
                h: "29px",
                borderRadius: "29px",
                borderColor: "gray_light2",
                onClick: n,
                ref: t
              },
              a
            ),
            r
          )
        })
      v.displayName = "GradientHighlightButton"
      var b = n(60953),
        x = ["principal"],
        y = function (e) {
          var t = e.principal,
            n = (0, g.Z)(e, x)
          return i.createElement(
            c.xv,
            n,
            (0, b.$)(
              null === t || void 0 === t ? void 0 : t.toString(),
              5,
              3,
              3
            )
          )
        },
        w = n(15658),
        k = n(63750),
        E = n(59876),
        C = n(66897),
        P = function (e) {
          var t = e.identity,
            n = (0, i.useState)(null),
            o = (0, a.Z)(n, 2),
            m = o[0],
            g = o[1],
            h = (0, l.pm)()
          ;(0, i.useEffect)(
            function () {
              var e = (function () {
                var e = (0, r.Z)(
                  u().mark(function e() {
                    var n
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.getPrincipal()
                          case 2:
                            ;(n = e.sent), g(n)
                          case 4:
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
              e()
            },
            [1]
          )
          var b = (function () {
            var e = (0, r.Z)(
              u().mark(function e() {
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!m) {
                            e.next = 10
                            break
                          }
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            window.navigator.clipboard.writeText(m.toString())
                          )
                        case 4:
                          ;(0, C.showToast)(
                            h,
                            "My Wallet",
                            "Wallet Account String copied to clipboard",
                            "success"
                          ),
                            (e.next = 10)
                          break
                        case 7:
                          ;(e.prev = 7),
                            (e.t0 = e.catch(1)),
                            (0, C.showToast)(
                              h,
                              "My Wallet",
                              "We have a problem copying your Wallet Account String to clipboard",
                              "error"
                            )
                        case 10:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 7]]
                )
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          return i.createElement(
            c.xu,
            {
              position: "absolute",
              mt: "-42px",
              right: { base: "6px", md: "16px" }
            },
            i.createElement(s.JO, {
              as: k.KC7,
              color: "green.400",
              fontSize: "10px",
              mr: "10px"
            }),
            i.createElement(
              f.J2,
              null,
              i.createElement(
                f.xo,
                null,
                i.createElement(
                  v,
                  {
                    w: { base: "80px", md: "100px", lg: "180px" },
                    minW: "60px",
                    h: "40px",
                    fontSize: { base: "10px", lg: "16px" },
                    borderRadius: "12px"
                  },
                  i.createElement(w.gk, { h: "40px", mr: "10px" }),
                  m && i.createElement(y, { principal: m })
                )
              ),
              i.createElement(
                f.yk,
                {
                  right: "16px",
                  top: "10px",
                  textAlign: "left",
                  py: "12px",
                  px: "10px"
                },
                i.createElement(f.us, null),
                i.createElement(
                  f.Yt,
                  { fontSize: "20px", py: "12px" },
                  "Wallet Account"
                ),
                i.createElement(
                  f.b,
                  {
                    fontSize: "14px",
                    fontWeight: "normal",
                    py: "12px",
                    color: "black"
                  },
                  i.createElement(
                    c.Ug,
                    { pb: "16px", spacing: "12px" },
                    i.createElement(p.qE, {
                      bg: "purple_light2",
                      icon: i.createElement(w.gk, { fontSize: "26px" })
                    }),
                    i.createElement(
                      c.gC,
                      { align: "left", spacing: "6px" },
                      m &&
                        i.createElement(
                          c.Ug,
                          { spacing: "14px" },
                          i.createElement(
                            d.zx,
                            { variant: "link", color: "blue_1", onClick: b },
                            i.createElement(y, {
                              principal: m,
                              fontSize: "16px",
                              fontWeight: "medium"
                            })
                          ),
                          i.createElement(d.hU, {
                            onClick: b,
                            icon: i.createElement(E.TI, null),
                            size: "xs"
                          })
                        ),
                      i.createElement(c.xv, { color: "black" }, "Plug")
                    )
                  ),
                  i.createElement(
                    c.gC,
                    { align: "left", spacing: "12px" },
                    i.createElement(c.xv, null, "Network"),
                    i.createElement(
                      c.xv,
                      { fontWeight: "medium" },
                      i.createElement(s.JO, {
                        as: k.KC7,
                        color: "green.400",
                        fontSize: "10px",
                        mr: "10px"
                      }),
                      "Internet Computer"
                    )
                  )
                )
              )
            )
          )
        }
    },
    22856: function (e, t, n) {
      "use strict"
      n.d(t, {
        d: function () {
          return x
        }
      })
      var r = n(15861),
        a = n(86854),
        o = n(87757),
        u = n.n(o),
        i = n(67294),
        l = n(98400),
        c = n(23256),
        s = n(22169),
        f = n(31681),
        p = n(24686),
        d = n(66985),
        m = f.oK.Checking,
        g = f.oK.Connected,
        h = f.oK.Disconnected,
        v = f.oK.MayPromptWallet,
        b = f.oK.Unknown,
        x = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = (0, i.useState)(b),
            x = (0, a.Z)(o, 2),
            y = x[0],
            w = x[1],
            k = (0, i.useState)(n),
            E = (0, a.Z)(k, 2),
            C = E[0],
            P = E[1],
            _ = (0, l.oR)(c.Z),
            O = _.appContext,
            S = O.authProvider,
            j = _.user,
            W = f.Ho.InternetIdentity,
            A = f.Ho.Plug,
            Z = (function () {
              var n = (0, r.Z)(
                u().mark(function n() {
                  var r, a, o, i, l, c, f
                  return u().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (((n.prev = 0), null != e)) {
                              n.next = 4
                              break
                            }
                            return F(b), n.abrupt("return")
                          case 4:
                            if ((F(m), S != A)) {
                              n.next = 22
                              break
                            }
                            return (
                              d.default.info("Using Plug Auth"),
                              (n.next = 9),
                              (0, s.gX)({ isCreateAgent: !0 })
                            )
                          case 9:
                            if (n.sent) {
                              n.next = 13
                              break
                            }
                            return F(h), n.abrupt("return")
                          case 13:
                            return (
                              (n.next = 15), (0, p.makeUserProfileActor)(e, A)
                            )
                          case 15:
                            return (
                              (r = n.sent),
                              (n.next = 18),
                              r.isPlugConnected(j.id)
                            )
                          case 18:
                            ;(a = n.sent), F(a ? g : h), (n.next = 51)
                            break
                          case 22:
                            if (S != W) {
                              n.next = 51
                              break
                            }
                            return (
                              d.default.info(
                                "Using Internet Identity Auth: isPromptCreateAgent=".concat(
                                  t
                                )
                              ),
                              (n.next = 26),
                              null === (o = window.ic) ||
                              void 0 === o ||
                              null === (i = o.plug) ||
                              void 0 === i
                                ? void 0
                                : i.isConnected()
                            )
                          case 26:
                            if (n.sent) {
                              n.next = 31
                              break
                            }
                            return (
                              d.default.info("Plug is not connected"),
                              F(h),
                              n.abrupt("return")
                            )
                          case 31:
                            return (
                              d.default.info("Plug is connected."),
                              t && F(v),
                              (n.next = 35),
                              (0, s.gX)({ isCreateAgent: t })
                            )
                          case 35:
                            if (!n.sent) {
                              n.next = 49
                              break
                            }
                            return (
                              d.default.info(
                                "Plug agent available.  Check if Plug is connected to CF with the current user."
                              ),
                              (l = window.ic.plug.agent),
                              (n.next = 41),
                              (0, p.makeUserProfileActor)(l, A)
                            )
                          case 41:
                            return (
                              (c = n.sent),
                              (n.next = 44),
                              c.isPlugConnected(j.id)
                            )
                          case 44:
                            ;(f = n.sent),
                              d.default.info(
                                "Connection to CF result: ".concat(f)
                              ),
                              F(f ? g : h),
                              (n.next = 51)
                            break
                          case 49:
                            d.default.info(
                              "Plug agent not available. Skip checking with CF. Assume disconnected."
                            ),
                              F(h)
                          case 51:
                            n.next = 57
                            break
                          case 53:
                            ;(n.prev = 53),
                              (n.t0 = n.catch(0)),
                              d.default.error(n.t0),
                              F(h)
                          case 57:
                          case "end":
                            return n.stop()
                        }
                    },
                    n,
                    null,
                    [[0, 53]]
                  )
                })
              )
              return function () {
                return n.apply(this, arguments)
              }
            })(),
            F = function (e) {
              w(e), D(e)
            },
            D = function (e) {
              switch (e) {
                case g:
                  O.setWalletConnected(f.gF.Connected)
                  break
                case h:
                  O.setWalletConnected(f.gF.Disconnected)
                  break
                default:
                  O.setWalletConnected(f.gF.Unknown)
              }
            }
          return (
            (0, i.useEffect)(
              function () {
                if (C)
                  return (
                    O.setWalletConnected(f.gF.Unknown),
                    P(!1),
                    void d.default.info(
                      "Ignore cache state: set WalletConnectStatus to unknown to trigger detect"
                    )
                  )
                switch (O.isWalletConnected) {
                  case f.gF.Unknown:
                    Z()
                    break
                  case f.gF.Connected:
                    w(g)
                    break
                  case f.gF.Disconnected:
                  default:
                    w(h)
                }
              },
              [O.isWalletConnected]
            ),
            y
          )
        }
    },
    60953: function (e, t, n) {
      "use strict"
      n.d(t, {
        $: function () {
          return r
        },
        c: function () {
          return a
        }
      })
      var r = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.length,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 3,
            a = ""
          return (
            (a += e.substring(0, t)),
            (a += ".".repeat(r)),
            (a += e.substring(e.length - n, e.length))
          )
        },
        a = function (e) {
          return null == e
            ? ""
            : e.startsWith("https://") || e.startsWith("http://")
            ? e
            : "https://".concat(e)
        }
    },
    72642: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/mywallet",
        function () {
          return n(3782)
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
        5527, 9876, 828, 9748, 6223, 2144, 5658, 3130, 2888, 9774, 179
      ],
      function () {
        return (t = 72642), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
