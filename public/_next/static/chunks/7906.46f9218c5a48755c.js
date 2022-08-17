"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7906],
  {
    70216: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a
        }
      })
      var r = n(87462),
        o = n(67294),
        l = n(11972)
      function a(e) {
        return o.createElement(
          l.rU,
          (0, r.Z)({ target: "_blank", textDecoration: "underline" }, e),
          e.children
        )
      }
    },
    91632: function (e, t, n) {
      n.d(t, {
        $: function () {
          return s
        }
      })
      var r = n(87462),
        o = n(67294),
        l = n(11972),
        a = n(51815),
        i = n(49697),
        c = n(49162),
        u = n(15658),
        s = function (e) {
          return o.createElement(
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
            o.createElement(
              l.gC,
              null,
              o.createElement(
                l.M5,
                null,
                o.createElement(
                  l.rU,
                  { href: "https://contentfly.app" },
                  o.createElement(c.Z, {
                    width: "100px",
                    src: "/logo-vertical-".concat("light", ".png"),
                    alt: "Content Fly logo"
                  })
                )
              )
            ),
            o.createElement(
              l.Ug,
              { pt: 6, px: 1, fontSize: { base: "12px", md: "14px" } },
              o.createElement(
                l.rU,
                { href: "mailto://hello@contentfly.app" },
                "hello@contentfly.app"
              ),
              o.createElement(
                l.rU,
                { href: "https://twitter.com/ContentFlyApp", isExternal: !0 },
                "Twitter"
              ),
              o.createElement(
                l.rU,
                {
                  href: "https://medium.com/contentfly-app-blog",
                  isExternal: !0
                },
                "Medium"
              ),
              o.createElement(
                l.rU,
                { href: "https://discord.gg/uuDzQxdmmY", isExternal: !0 },
                "Discord"
              ),
              o.createElement(
                l.rU,
                { href: "/terms.html", isExternal: !0 },
                "Terms"
              )
            ),
            o.createElement(a.hU, {
              icon: o.createElement(u.kD, { w: "278px", h: "34px" }),
              variant: "unstyled",
              onClick: function () {
                window.open("https://smartcontracts.org", "_blank")
              },
              mt: "6"
            })
          )
        }
    },
    99171: function (e, t, n) {
      n.d(t, {
        t: function () {
          return a
        }
      })
      var r = n(87462),
        o = n(67294),
        l = n(11972),
        a = function (e) {
          return o.createElement(
            l.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            o.createElement(
              l.X6,
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
      n.d(t, {
        o: function () {
          return a
        }
      })
      var r = n(87462),
        o = n(67294),
        l = n(11972),
        a = function (e) {
          return o.createElement(
            l.Kq,
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
    7906: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return b
          }
        })
      var r = n(15861),
        o = n(87757),
        l = n.n(o),
        a = n(67294),
        i = n(9008),
        c = n.n(i),
        u = n(11163),
        s = n(49697),
        p = n(95641),
        m = n(99171),
        f = n(42273),
        h = n(91632),
        d = n(66897),
        x = n(17525),
        g = n(45607),
        E = n(11972)
      function b(e) {
        var t = e.handleAuthenticated,
          n = e.warningMesg,
          o = (0, g.pm)(),
          i = (0, u.useRouter)()
        ;(0, a.useEffect)(
          function () {
            function e() {
              return (e = (0, r.Z)(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          "" != n && (0, d.showToast)(o, "Login", n, "warning")
                        case 1:
                        case "end":
                          return e.stop()
                      }
                  }, e)
                })
              )).apply(this, arguments)
            }
            !(function () {
              e.apply(this, arguments)
            })()
          },
          [n]
        )
        return a.createElement(
          s.W,
          { height: "100vh" },
          a.createElement(
            p.o,
            null,
            a.createElement(
              c(),
              null,
              a.createElement("title", null, "Content Fly")
            ),
            a.createElement(m.t, null, "Content Fly"),
            a.createElement(
              E.gC,
              {
                divider: a.createElement(E.cX, { borderColor: "gray.200" }),
                spacing: 4,
                align: "stretch"
              },
              a.createElement(
                E.M5,
                null,
                a.createElement(
                  E.gC,
                  { spacing: 4 },
                  a.createElement(
                    f.Z,
                    {
                      onClick: function () {
                        i.push("/signup", "/signup.html")
                      },
                      w: { base: "300px", md: "394px" }
                    },
                    "Sign Up"
                  ),
                  a.createElement(
                    E.xv,
                    {
                      textAlign: "center",
                      fontWeight: "medium",
                      fontSize: "14px",
                      color: "black",
                      w: { base: "300px", md: "394px" }
                    },
                    "or"
                  ),
                  a.createElement(x.T, {
                    handleAuthenticated: t,
                    mt: "9px",
                    mb: "22px",
                    w: { base: "300px", md: "394px" },
                    h: "60px",
                    fontSize: "16px",
                    fontWeight: "semibold"
                  }),
                  a.createElement(
                    E.xv,
                    {
                      textAlign: "center",
                      color: "gray_light2",
                      fontSize: "12px",
                      fontWeight: "light",
                      w: { base: "300px", md: "394px" }
                    },
                    "if you have joined"
                  )
                )
              )
            ),
            a.createElement(h.$, null)
          )
        )
      }
    },
    39878: function (e, t, n) {
      n.d(t, {
        y: function () {
          return f
        }
      })
      var r = n(67294),
        o = n(88523),
        l = n(25527),
        a = n(11972),
        i = n(51815),
        c = n(59876),
        u = n(23940),
        s = n(70216),
        p = n(15658),
        m = n(31681),
        f = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            f = e.selectAuth,
            h = (0, o.qY)(),
            d = h.isOpen,
            x = h.onOpen,
            g = h.onClose,
            E = m.Ho.InternetIdentity,
            b = m.Ho.Plug,
            v = function (e) {
              var t
              if (
                e === b &&
                (null === (t = window.ic) || void 0 === t || !t.plug)
              )
                return void x()
              f(e)
            }
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              l.u_,
              { onClose: n, size: "lg", isOpen: t },
              r.createElement(l.ZA, null),
              r.createElement(
                l.hz,
                null,
                r.createElement(l.xB, null, "Choose"),
                r.createElement(l.ol, null),
                r.createElement(
                  l.fe,
                  { align: "center" },
                  r.createElement(
                    a.xv,
                    { pb: "10px" },
                    "By continuing, I agree to the",
                    " ",
                    r.createElement(
                      s.Z,
                      { href: "terms.html" },
                      "Terms of use",
                      r.createElement(c.h0, { ml: "6px", mb: "2px" })
                    )
                  ),
                  r.createElement(
                    u.o,
                    {
                      onClick: function () {
                        return v(E)
                      }
                    },
                    r.createElement(p.cD, { h: "55px", w: "76px", mr: "0px" }),
                    "Internet Identity"
                  ),
                  r.createElement(
                    u.o,
                    {
                      onClick: function () {
                        return v(b)
                      }
                    },
                    r.createElement(p.gk, { h: "40px", mr: "18px" }),
                    "Plug Wallet"
                  ),
                  r.createElement(
                    a.gC,
                    { py: "12px" },
                    r.createElement(
                      a.xv,
                      { align: "center", fontWeight: "medium" },
                      "Don't have Internet Identity or Plug Wallet?"
                    ),
                    r.createElement(
                      a.rU,
                      {
                        isExternal: !0,
                        href: "internet-identity.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Internet Identity",
                      r.createElement(c.h0, { ml: "6px", mb: "2px" })
                    ),
                    r.createElement(
                      a.rU,
                      {
                        isExternal: !0,
                        href: "wallet.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Plug Wallet",
                      r.createElement(c.h0, { ml: "6px", mb: "2px" })
                    )
                  )
                )
              )
            ),
            r.createElement(
              l.u_,
              { onClose: g, size: "lg", isOpen: d },
              r.createElement(l.ZA, null),
              r.createElement(
                l.hz,
                null,
                r.createElement(l.xB, null, "Plug Wallet is not found"),
                r.createElement(l.ol, null),
                r.createElement(
                  l.fe,
                  { align: "center" },
                  r.createElement(
                    a.rU,
                    {
                      isExternal: !0,
                      href: "wallet.html",
                      color: "blue_2",
                      fontSize: "16px",
                      fontWeight: "light"
                    },
                    "Learn more about installing Plug Wallet",
                    r.createElement(c.h0, { ml: "6px", mb: "2px" })
                  )
                ),
                r.createElement(
                  l.mz,
                  null,
                  r.createElement(
                    i.zx,
                    {
                      onClick: function () {
                        g(), n()
                      },
                      color: "black_2",
                      mx: "12px"
                    },
                    "Close"
                  )
                )
              )
            )
          )
        }
    },
    27149: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a
        }
      })
      var r = n(31681),
        o = n(64380),
        l = n(22169)
      function a(e, t) {
        var n = r.Ho.InternetIdentity,
          a = r.Ho.Plug
        switch (t) {
          case n:
            return (0, o.w)(e, t)
          case a:
            return (0, l.cR)(e, t)
          default:
            return function () {}
        }
      }
    },
    23940: function (e, t, n) {
      n.d(t, {
        o: function () {
          return c
        }
      })
      var r = n(87462),
        o = n(45987),
        l = n(67294),
        a = n(51815),
        i = ["onClick", "isLoading", "children"],
        c = function (e) {
          var t = e.onClick,
            n = e.isLoading,
            c = e.children,
            u = (0, o.Z)(e, i)
          return l.createElement(
            a.zx,
            (0, r.Z)(
              {
                onClick: t,
                isLoading: n,
                mt: "9px",
                mb: "22px",
                w: { base: "300px", md: "394px" },
                h: "60px",
                variant: "outline",
                borderColor: "black",
                borderRadius: "7px",
                border: "2px",
                color: "black_2",
                fontSize: "16px",
                fontWeight: "semibold"
              },
              u
            ),
            c
          )
        }
    },
    17525: function (e, t, n) {
      n.d(t, {
        T: function () {
          return z
        }
      })
      var r = n(87462),
        o = n(15861),
        l = n(86854),
        a = n(45987),
        i = n(87757),
        c = n.n(i),
        u = n(67294),
        s = n(88523),
        p = n(45607),
        m = n(51815),
        f = n(98400),
        h = n(66897),
        d = n(74865),
        x = n.n(d),
        g = n(31681),
        E = n(23256),
        b = n(27149),
        v = n(39878),
        w = n(66985),
        k = n(24686),
        C = n(5508),
        y = n(23940),
        Z = ["handleAuthenticated"],
        z = function (e) {
          var t = e.handleAuthenticated,
            n = (0, a.Z)(e, Z),
            i = (0, s.qY)(),
            d = i.isOpen,
            z = i.onOpen,
            _ = i.onClose,
            W = (0, u.useState)(!1),
            A = (0, l.Z)(W, 2),
            S = A[0],
            L = A[1],
            P = (0, p.pm)(),
            U = (0, f.oR)(E.Z),
            F = (function () {
              var e = (0, o.Z)(
                c().mark(function e(n) {
                  var r, l, a
                  return c().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            _(),
                            U.appContext.setAuthProvider(n),
                            (r = (function () {
                              var e = (0, o.Z)(
                                c().mark(function e(n, r) {
                                  var o, a, i, u, s, p, m
                                  return c().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (null != n) {
                                              e.next = 3
                                              break
                                            }
                                            return L(!1), e.abrupt("return")
                                          case 3:
                                            return (
                                              x().start(),
                                              (e.prev = 4),
                                              (e.next = 7),
                                              (0, k.makeUserProfileActor)(n, r)
                                            )
                                          case 7:
                                            return (
                                              (s = e.sent),
                                              (e.next = 10),
                                              s.login((0, C.$6)(r))
                                            )
                                          case 10:
                                            if (
                                              ((p = e.sent),
                                              !(
                                                (null !== (o = p.err) &&
                                                  void 0 !== o &&
                                                  o.user_notfound) ||
                                                (null !== (a = p.err) &&
                                                  void 0 !== a &&
                                                  a.usermodel_notfound) ||
                                                0 ==
                                                  (null === (i = p.ok) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.length)
                                              ))
                                            ) {
                                              e.next = 16
                                              break
                                            }
                                            return (
                                              l(
                                                r,
                                                "You don't have a Content Fly account yet. Please sign up now."
                                              ),
                                              e.abrupt("return")
                                            )
                                          case 16:
                                            if (
                                              null === (u = p.err) ||
                                              void 0 === u ||
                                              !u.permission_denied
                                            ) {
                                              e.next = 19
                                              break
                                            }
                                            return (
                                              l(
                                                r,
                                                "You don't have permission to login to the connected user account"
                                              ),
                                              e.abrupt("return")
                                            )
                                          case 19:
                                            return (
                                              (m = p.ok[0]),
                                              (e.next = 22),
                                              U.updateForNewSignupLogin(m)
                                            )
                                          case 22:
                                            L(!1), t(n), (e.next = 29)
                                            break
                                          case 26:
                                            ;(e.prev = 26),
                                              (e.t0 = e.catch(4)),
                                              w.default.error(e.t0)
                                          case 29:
                                            return (
                                              (e.prev = 29),
                                              S && L(!1),
                                              x().done(),
                                              e.finish(29)
                                            )
                                          case 33:
                                          case "end":
                                            return e.stop()
                                        }
                                    },
                                    e,
                                    null,
                                    [[4, 26, 29, 33]]
                                  )
                                })
                              )
                              return function (t, n) {
                                return e.apply(this, arguments)
                              }
                            })()),
                            (l = (function () {
                              var e = (0, o.Z)(
                                c().mark(function e(t, n) {
                                  var r
                                  return c().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (0, h.showToast)(
                                              P,
                                              "Login",
                                              n,
                                              "warning"
                                            ),
                                            (r = (0, k.makeLogout)(t)),
                                            (e.next = 4),
                                            r()
                                          )
                                        case 4:
                                          L(!1), x().done()
                                        case 6:
                                        case "end":
                                          return e.stop()
                                      }
                                  }, e)
                                })
                              )
                              return function (t, n) {
                                return e.apply(this, arguments)
                              }
                            })()),
                            (a = (0, b.Z)(r, n)),
                            n == g.Ho.Plug &&
                              (0, h.showToast)(
                                P,
                                "Login with Plug",
                                "Please make sure your have unlocked your Plug Wallet.",
                                "info"
                              ),
                            L(!0),
                            (e.next = 9),
                            a()
                          )
                        case 9:
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
          return u.createElement(
            u.Fragment,
            null,
            u.createElement(
              y.o,
              (0, r.Z)(
                {
                  onClick: z,
                  isLoading: S,
                  w: "110px",
                  h: "38px",
                  mr: "38px",
                  mb: "18px",
                  fontSize: "14px"
                },
                n
              ),
              "Login"
            ),
            u.createElement(v.y, { isOpen: d, onClose: _, selectAuth: F }),
            S &&
              u.createElement(
                m.zx,
                (0, r.Z)(
                  {
                    w: "110px",
                    h: "38px",
                    color: "blue_1",
                    variant: "link",
                    textAlign: "center",
                    onClick: function () {
                      L(!1)
                    }
                  },
                  n
                ),
                "Cancel"
              )
          )
        }
    },
    42273: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u
        }
      })
      var r = n(87462),
        o = n(45987),
        l = n(67294),
        a = n(51815),
        i = n(11972),
        c = ["children"]
      function u(e) {
        var t = e.children,
          n = (0, o.Z)(e, c)
        return l.createElement(
          a.zx,
          (0, r.Z)(
            {
              color: "white",
              variant: "solid",
              background: "gradient.purple.2",
              _hover: {
                bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                boxShadow: "xl"
              },
              _active: { bgGradient: "linear(to-l, #9a5bf1, #fc4f92)" },
              _focus: { bgGradient: "linear(to-l, #620FAE, #FA1B69)" },
              loadingText: "Submitting",
              fontSize: "16px",
              fontWeight: "semibold",
              borderRadius: "7px",
              mb: "9px",
              h: "60px"
            },
            n
          ),
          l.createElement(i.xv, { noOfLines: 0 }, t)
        )
      }
    },
    66897: function (e, t, n) {
      n.r(t),
        n.d(t, {
          showLongToast: function () {
            return l
          },
          showMediumToast: function () {
            return o
          },
          showStandardErrorMesg: function () {
            return a
          },
          showToast: function () {
            return r
          }
        })
      var r = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 9e3,
            isClosable: !0
          })
        },
        o = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 2e4,
            isClosable: !0
          })
        },
        l = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 4e4,
            isClosable: !0
          })
        },
        a = function (e) {
          r(
            e,
            "\ud83e\udd16 We have a problem.",
            "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
            "error"
          )
        }
    }
  }
])
