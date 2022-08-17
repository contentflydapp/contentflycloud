;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5665],
  {
    82993: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(15861),
              u = n(86854),
              c = n(87757),
              l = n.n(c),
              i = n(67294),
              o = n(9008),
              s = n.n(o),
              m = n(11972),
              p = n(27386),
              f = n(51815),
              d = n(49697),
              h = n(95641),
              v = n(99171),
              E = n(77329),
              x = n(1576),
              y = n(92906),
              g = n(66985),
              b = n(23256),
              w = n(98400),
              C = n(5508),
              k = n(73580),
              Z = n(24154),
              T = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeEscrowPaymentActor
            function e(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, i.useState)(!1),
                c = (0, u.Z)(r, 2),
                o = c[0],
                y = c[1],
                S = (0, i.useState)(null),
                A = (0, u.Z)(S, 2),
                P = A[0],
                M = A[1],
                _ = (0, i.useState)([]),
                z = (0, u.Z)(_, 2),
                L = z[0],
                B = z[1],
                I = (0, w.oR)(b.Z).appContext.authProvider
              function F() {
                return (F = (0, a.Z)(
                  l().mark(function e() {
                    var n, r
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), y(!0), (e.next = 4), T(t, I)
                            case 4:
                              return (
                                (n = e.sent),
                                (e.next = 7),
                                n.canisterBalance((0, C.G8)("icp"))
                              )
                            case 7:
                              null != (r = e.sent).e8s &&
                                M((0, k._)(r.e8s).toString()),
                                (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11),
                                (e.t0 = e.catch(0)),
                                g.default.error(e.t0)
                            case 14:
                              return (e.prev = 14), y(!1), e.finish(14)
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
              function N() {
                return (N = (0, a.Z)(
                  l().mark(function e() {
                    var n, r
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), T(t, I)
                            case 3:
                              return (
                                (n = e.sent), (e.next = 6), n.loadAllEscrow()
                              )
                            case 6:
                              ;(r = e.sent), B(r), (e.next = 13)
                              break
                            case 10:
                              ;(e.prev = 10),
                                (e.t0 = e.catch(0)),
                                g.default.error(e.t0)
                            case 13:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    )
                  })
                )).apply(this, arguments)
              }
              return (
                (0, i.useEffect)(
                  function () {
                    !(function () {
                      N.apply(this, arguments)
                    })()
                  },
                  [1]
                ),
                i.createElement(
                  d.W,
                  { height: "100vh" },
                  i.createElement(
                    h.o,
                    null,
                    i.createElement(
                      s(),
                      null,
                      i.createElement("title", null, "Content Fly")
                    ),
                    i.createElement(
                      m.M5,
                      null,
                      i.createElement(
                        m.gC,
                        {
                          spacing: 4,
                          align: "stretch",
                          pb: "20px",
                          textAlign: "center"
                        },
                        i.createElement(
                          v.t,
                          null,
                          "Content Fly Escrow Payment Admin"
                        ),
                        i.createElement(
                          p.UQ,
                          { allowMultiple: !0 },
                          i.createElement(
                            p.Qd,
                            null,
                            i.createElement(
                              "h2",
                              null,
                              i.createElement(
                                p.KF,
                                null,
                                i.createElement(
                                  m.xu,
                                  { flex: "1", textAlign: "left" },
                                  i.createElement(
                                    m.X6,
                                    { size: "md" },
                                    "Escrow"
                                  )
                                ),
                                i.createElement(p.XE, null)
                              )
                            ),
                            i.createElement(
                              p.Hk,
                              { pb: 4 },
                              i.createElement(
                                m.gC,
                                {
                                  spacing: 4,
                                  align: "stretch",
                                  pb: "20px",
                                  textAlign: "center"
                                },
                                i.createElement(
                                  f.zx,
                                  {
                                    h: "3rem",
                                    size: "md",
                                    colorScheme: "blue_1",
                                    variant: "outline",
                                    onClick: function () {
                                      return F.apply(this, arguments)
                                    },
                                    isLoading: o
                                  },
                                  "Get Actual Canister ICP Balance"
                                ),
                                null != P &&
                                  i.createElement(
                                    m.xv,
                                    null,
                                    "ICP Balance: ",
                                    P
                                  ),
                                i.createElement(Z.j, { escrowContractArray: L })
                              )
                            )
                          ),
                          i.createElement(E.L, { makeActor: T, identity: t }),
                          i.createElement(x.y, { makeActor: T, identity: t })
                        ),
                        i.createElement(
                          f.zx,
                          {
                            h: "3rem",
                            size: "md",
                            colorScheme: "blue_1",
                            variant: "outline",
                            onClick: n
                          },
                          "Logout"
                        )
                      )
                    )
                  )
                )
              )
            }
            ;(t.default = (0, y.J3)(e)), r()
          } catch (S) {
            r(S)
          }
        },
        1
      )
    },
    99171: function (e, t, n) {
      "use strict"
      n.d(t, {
        t: function () {
          return c
        }
      })
      var r = n(87462),
        a = n(67294),
        u = n(11972),
        c = function (e) {
          return a.createElement(
            u.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            a.createElement(
              u.X6,
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
          return c
        }
      })
      var r = n(87462),
        a = n(67294),
        u = n(11972),
        c = function (e) {
          return a.createElement(
            u.Kq,
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
          return u
        }
      })
      var r = n(67294),
        a = n(66956),
        u = function () {
          return r.createElement(a.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    24154: function (e, t, n) {
      "use strict"
      n.d(t, {
        j: function () {
          return o
        }
      })
      var r = n(67294),
        a = n(46386),
        u = n(3962),
        c = n(11972),
        l = n(34076),
        i = n(31681),
        o = function (e) {
          var t = e.escrowContractArray,
            n = t.reduce(function (e, t) {
              return e + new l.u(t).totalOwnedByCanister()
            }, 0)
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              a.kN,
              null,
              r.createElement(
                a.dw,
                null,
                "Escrow Contracts Total Owned by Escrow Canister"
              ),
              r.createElement(a.Jf, null, n)
            ),
            r.createElement(
              u.xJ,
              null,
              r.createElement(
                u.iA,
                { colorScheme: "teal", w: "1000px" },
                r.createElement(
                  u.hr,
                  null,
                  r.createElement(
                    u.Tr,
                    null,
                    r.createElement(u.Th, { isNumeric: !0 }, "ID"),
                    r.createElement(u.Th, null, "Created"),
                    r.createElement(u.Th, null, "Payment"),
                    r.createElement(u.Th, null, "Deposit"),
                    r.createElement(u.Th, null, "Escrow"),
                    r.createElement(u.Th, null, "Creator"),
                    r.createElement(u.Th, null, "Buyer")
                  )
                ),
                r.createElement(
                  u.p3,
                  null,
                  t.map(function (e, t) {
                    var n = new l.u(e)
                    return r.createElement(
                      u.Tr,
                      { key: t },
                      r.createElement(u.Td, null, n.id()),
                      r.createElement(u.Td, null, n.createdAtHuman()),
                      r.createElement(
                        u.Td,
                        null,
                        r.createElement(
                          c.Ct,
                          {
                            size: "sm",
                            colorScheme: n.colorOfPaymentType(),
                            px: "6px",
                            py: "3px"
                          },
                          (0, i.yO)(n.paymentType())
                        ),
                        " "
                      ),
                      r.createElement(
                        u.Td,
                        null,
                        n.initialDeposit(),
                        " ",
                        n.tokenType().toUpperCase()
                      ),
                      r.createElement(u.Td, null, n.escrowAmount()),
                      r.createElement(
                        u.Td,
                        null,
                        n.creatorClaimed(),
                        "/",
                        n.creatorClaimable()
                      ),
                      r.createElement(
                        u.Td,
                        null,
                        n.buyerClaimed(),
                        "/",
                        n.buyerClaimable()
                      )
                    )
                  })
                )
              )
            )
          )
        }
    },
    77329: function (e, t, n) {
      "use strict"
      n.d(t, {
        L: function () {
          return f
        }
      })
      var r = n(15861),
        a = n(86854),
        u = n(87757),
        c = n.n(u),
        l = n(67294),
        i = n(27386),
        o = n(11972),
        s = n(51815),
        m = n(31681),
        p = n(66985),
        f = function (e) {
          var t = e.makeActor,
            n = e.identity,
            u = (0, l.useState)(null),
            f = (0, a.Z)(u, 2),
            d = f[0],
            h = f[1],
            v = (0, l.useState)(!1),
            E = (0, a.Z)(v, 2),
            x = E[0],
            y = E[1]
          function g() {
            return (g = (0, r.Z)(
              c().mark(function e() {
                var r, a, u
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), y(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getActorBalance()
                        case 7:
                          ;(a = e.sent),
                            (u = Number(a) / m.Ly.OneTC),
                            h(u),
                            (e.next = 15)
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
                        case 15:
                          return (e.prev = 15), y(!1), e.finish(15)
                        case 18:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 12, 15, 18]]
                )
              })
            )).apply(this, arguments)
          }
          return l.createElement(
            i.Qd,
            null,
            l.createElement(
              "h2",
              null,
              l.createElement(
                i.KF,
                null,
                l.createElement(
                  o.xu,
                  { flex: "1", textAlign: "left" },
                  l.createElement(o.X6, { size: "md" }, "General")
                ),
                l.createElement(i.XE, null)
              )
            ),
            l.createElement(
              i.Hk,
              { pb: 4 },
              l.createElement(
                o.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                l.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return g.apply(this, arguments)
                    },
                    isLoading: x
                  },
                  "Get Cycles Balance"
                ),
                null != d && l.createElement(o.xv, null, d, " TC")
              )
            )
          )
        }
    },
    1576: function (e, t, n) {
      "use strict"
      n.d(t, {
        y: function () {
          return p
        }
      })
      var r = n(15861),
        a = n(86854),
        u = n(87757),
        c = n.n(u),
        l = n(67294),
        i = n(27386),
        o = n(11972),
        s = n(51815),
        m = n(66985),
        p = function (e) {
          var t = e.makeActor,
            n = e.identity,
            u = (0, l.useState)(null),
            p = (0, a.Z)(u, 2),
            f = p[0],
            d = p[1],
            h = (0, l.useState)(null),
            v = (0, a.Z)(h, 2),
            E = v[0],
            x = v[1],
            y = (0, l.useState)(!1),
            g = (0, a.Z)(y, 2),
            b = g[0],
            w = g[1],
            C = (0, l.useState)(!1),
            k = (0, a.Z)(C, 2),
            Z = k[0],
            T = k[1]
          function S() {
            return (S = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), w(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent), (e.next = 7), r.getCallerPrincipal()
                          )
                        case 7:
                          ;(a = e.sent), x(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            m.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), w(!1), e.finish(14)
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
          function A() {
            return (A = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), T(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getManager()
                        case 7:
                          ;(a = e.sent), d(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            m.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), T(!1), e.finish(14)
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
          return l.createElement(
            i.Qd,
            null,
            l.createElement(
              "h2",
              null,
              l.createElement(
                i.KF,
                null,
                l.createElement(
                  o.xu,
                  { flex: "1", textAlign: "left" },
                  l.createElement(o.X6, { size: "md" }, "Manager")
                ),
                l.createElement(i.XE, null)
              )
            ),
            l.createElement(
              i.Hk,
              { pb: 4 },
              l.createElement(
                o.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                l.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return S.apply(this, arguments)
                    },
                    isLoading: b
                  },
                  "Who am I?"
                ),
                null != E && l.createElement(o.xv, null, "Principal Id: ", E),
                l.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return A.apply(this, arguments)
                    },
                    isLoading: Z
                  },
                  "Get Manager"
                ),
                null != f && l.createElement(o.xv, null, "Manager Id: ", f)
              )
            )
          )
        }
    },
    30647: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return o
        }
      })
      var r = n(15861),
        a = n(87757),
        u = n.n(a),
        c = n(64380),
        l = n(22169),
        i = n(31681),
        o = (function () {
          var e = (0, r.Z)(
            u().mark(function e(t, n) {
              var r, a, o, s
              return u().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = i.Ho.InternetIdentity),
                        (a = i.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === a ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, c.l)()
                    case 6:
                      return (o = e.sent), e.abrupt("return", o)
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
          return T
        },
        bv: function () {
          return Z
        },
        vV: function () {
          return S
        },
        v_: function () {
          return A
        }
      })
      var r = n(87462),
        a = n(15861),
        u = n(86854),
        c = n(87757),
        l = n.n(c),
        i = n(67294),
        o = n(5152),
        s = n.n(o),
        m = n(11163),
        p = n(30647),
        f = n(11972),
        d = n(49697),
        h = n(49162),
        v = n(2243),
        E = function () {
          return i.createElement(
            d.W,
            { h: "120vh" },
            i.createElement(
              f.xu,
              { mt: "120px", mb: "30px" },
              i.createElement(h.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            i.createElement(v.u, null)
          )
        },
        x = n(98400),
        y = n(23256),
        g = n(66985),
        b = n(24686),
        w = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        C = s()(function () {
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
        k = s()(function () {
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
        Z = function (e, t) {
          return function (n) {
            return P(e, null !== t && void 0 !== t ? t : k, null, !1)(n)
          }
        },
        T = function (e) {
          return function (t) {
            return P(
              e,
              w,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        S = function (e) {
          return function (t) {
            return P(e, C, null, !1)(t)
          }
        },
        A = function (e) {
          return function (t) {
            return P(e, C, null, !0)(t)
          }
        },
        P = function (e, t, c, o) {
          return function (s) {
            var f = (0, i.useState)(null),
              d = (0, u.Z)(f, 2),
              h = d[0],
              v = d[1],
              w = (0, i.useState)(!0),
              k = (0, u.Z)(w, 2),
              Z = k[0],
              T = k[1],
              S = (0, i.useState)(""),
              A = (0, u.Z)(S, 2),
              P = A[0],
              M = A[1],
              _ = (0, i.useState)(1),
              z = (0, u.Z)(_, 2),
              L = z[0],
              B = z[1],
              I = (0, m.useRouter)(),
              F = (0, x.oR)(y.Z),
              N = F.appContext.authProvider,
              X = F.appContext.candidAuthProvider(),
              H = null !== t && void 0 !== t ? t : C
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
                                  T(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(F.appContext.authProvider, {
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
                                if (!F.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), O(t)
                              case 13:
                                G(t)
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
                                  g.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), T(!1), e.finish(23)
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
              [L]
            )
            var O = (function () {
                var e = (0, a.Z)(
                  l().mark(function e(t) {
                    var n, r, a, u
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, b.makeUserProfileActor)(t, N)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(X)
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
                                (u = a.ok[0]),
                                (e.next = 11),
                                F.updateForNewSignupLogin(u)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                g.default.error(e.t0)
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
              $ = function () {
                B(L + 1)
              },
              G = (function () {
                var e = (0, a.Z)(
                  l().mark(function e(t) {
                    var r, a
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((v(t), null == t)) {
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
            function D() {
              return (
                (D = (0, a.Z)(
                  l().mark(function e(t) {
                    return l().wrap(function (e) {
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
                              : M(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                D.apply(this, arguments)
              )
            }
            function U(e) {
              if (null == c) return !0
              var t = c.split(",").map(function (e) {
                return e.trim()
              })
              return "" == c.trim() || t.includes(e.toString())
            }
            var Y = (function () {
                var e = (0, a.Z)(
                  l().mark(function e() {
                    var t
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, b.makeLogout)(N)), (e.next = 3), t()
                          case 3:
                            G(null), F.reset(), (0, b.clearCache)()
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
              j = (function () {
                var e = (0, a.Z)(
                  l().mark(function e() {
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Y()
                          case 2:
                            I.push("/")
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
              ? i.createElement(
                  e,
                  (0, r.Z)({ identity: h, logout: j, triggerAuthUpdate: $ }, s)
                )
              : Z
              ? i.createElement(E, null)
              : o
              ? i.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: $ }))
              : i.createElement(H, {
                  handleAuthenticated: function (e) {
                    return D.apply(this, arguments)
                  },
                  warningMesg: P
                })
          }
        }
    },
    34076: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return m
        }
      })
      var r = n(43144),
        a = n(15671),
        u = n(4942),
        c = n(30381),
        l = n.n(c),
        i = n(31681),
        o = n(67839),
        s = n(5508),
        m = (0, r.Z)(function e(t) {
          var n = this
          ;(0, a.Z)(this, e),
            (0, u.Z)(this, "id", function () {
              return n.candidModel.id
            }),
            (0, u.Z)(this, "createdAtHuman", function () {
              var e = (0, s.ju)(n.candidModel.createdAt)
              return l()(e).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, u.Z)(this, "paymentType", function () {
              var e = n.candidModel.paymentType
              return (0, s.wI)(e)
            }),
            (0, u.Z)(this, "colorOfPaymentType", function () {
              var e = n.paymentType(),
                t = i.CS.PaymentType,
                r = t.LumpSum,
                a = t.Beam
              switch (e) {
                case r:
                  return "yellow"
                case a:
                  return "green"
              }
            }),
            (0, u.Z)(this, "isBeamPayment", function () {
              return n.paymentType() == i.CS.PaymentType.Beam
            }),
            (0, u.Z)(this, "isLumpSumPayment", function () {
              return n.paymentType() == i.CS.PaymentType.LumpSum
            }),
            (0, u.Z)(this, "tokenType", function () {
              return (0, s.wI)(n.candidModel.tokenType)
            }),
            (0, u.Z)(this, "initialDeposit", function () {
              var e = n.candidModel.initialDeposit
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "escrowAmount", function () {
              var e = n.candidModel.escrowAmount
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "creatorClaimable", function () {
              var e = n.candidModel.creatorClaimable
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "creatorClaimed", function () {
              var e = n.candidModel.creatorClaimed
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "buyerClaimable", function () {
              var e = n.candidModel.buyerClaimable
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "buyerClaimed", function () {
              var e = n.candidModel.buyerClaimed
              return (0, o.$)(e)
            }),
            (0, u.Z)(this, "totalOwnedByCanister", function () {
              return (
                n.escrowAmount() + n.creatorClaimable() + n.buyerClaimable()
              )
            }),
            (this.candidModel = t)
        })
    },
    67839: function (e, t, n) {
      "use strict"
      n.d(t, {
        $: function () {
          return a
        }
      })
      var r = 1e6,
        a = function (e) {
          return Number(e) / r
        }
    },
    58769: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/escrow",
        function () {
          return n(82993)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [2328, 8760, 5297, 253, 7386, 5468, 3674, 2144, 2888, 9774, 179],
      function () {
        return (t = 58769), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
