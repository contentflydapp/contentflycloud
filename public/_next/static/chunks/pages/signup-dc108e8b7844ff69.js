;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7616],
  {
    44380: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(67294),
            l = n(11163),
            o = n(9008),
            c = n.n(o),
            i = n(11972),
            u = n(81625),
            s = n(40874),
            p = e([u])
          function m() {
            var e = (0, l.useRouter)()
            return a.createElement(
              i.xu,
              { position: "relative" },
              a.createElement(
                c(),
                null,
                a.createElement("title", null, "Signup - Content Fly")
              ),
              a.createElement(
                i.kC,
                { spacing: { base: 10, lg: 32 } },
                a.createElement(u.Z, {
                  proceedCreateAccount: function () {
                    e.push("/create-account", "/create-account.html")
                  },
                  proceedHome: function () {
                    e.push("/", "")
                  }
                }),
                a.createElement(s.Z, { display: { base: "none", lg: "flex" } })
              )
            )
          }
          ;(u = (p.then ? (await p)() : p)[0]), (t.default = m), r()
        } catch (m) {
          r(m)
        }
      })
    },
    70216: function (e, t, n) {
      "use strict"
      n.d(t, {
        Z: function () {
          return o
        }
      })
      var r = n(87462),
        a = n(67294),
        l = n(11972)
      function o(e) {
        return a.createElement(
          l.rU,
          (0, r.Z)({ target: "_blank", textDecoration: "underline" }, e),
          e.children
        )
      }
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
        l = n(11972),
        o = n(51815),
        c = n(49697),
        i = n(49162),
        u = n(15658),
        s = function (e) {
          return a.createElement(
            c.W,
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
              l.gC,
              null,
              a.createElement(
                l.M5,
                null,
                a.createElement(
                  l.rU,
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
              l.Ug,
              { pt: 6, px: 1, fontSize: { base: "12px", md: "14px" } },
              a.createElement(
                l.rU,
                { href: "mailto://hello@contentfly.app" },
                "hello@contentfly.app"
              ),
              a.createElement(
                l.rU,
                { href: "https://twitter.com/ContentFlyApp", isExternal: !0 },
                "Twitter"
              ),
              a.createElement(
                l.rU,
                {
                  href: "https://medium.com/contentfly-app-blog",
                  isExternal: !0
                },
                "Medium"
              ),
              a.createElement(
                l.rU,
                { href: "https://discord.gg/uuDzQxdmmY", isExternal: !0 },
                "Discord"
              ),
              a.createElement(
                l.rU,
                { href: "/terms.html", isExternal: !0 },
                "Terms"
              )
            ),
            a.createElement(o.hU, {
              icon: a.createElement(u.kD, { w: "278px", h: "34px" }),
              variant: "unstyled",
              onClick: function () {
                window.open("https://smartcontracts.org", "_blank")
              },
              mt: "6"
            })
          )
        }
    },
    39878: function (e, t, n) {
      "use strict"
      n.d(t, {
        y: function () {
          return f
        }
      })
      var r = n(67294),
        a = n(88523),
        l = n(25527),
        o = n(11972),
        c = n(51815),
        i = n(59876),
        u = n(23940),
        s = n(70216),
        p = n(15658),
        m = n(31681),
        f = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            f = e.selectAuth,
            x = (0, a.qY)(),
            d = x.isOpen,
            h = x.onOpen,
            g = x.onClose,
            E = m.Ho.InternetIdentity,
            b = m.Ho.Plug,
            v = function (e) {
              var t
              if (
                e === b &&
                (null === (t = window.ic) || void 0 === t || !t.plug)
              )
                return void h()
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
                    o.xv,
                    { pb: "10px" },
                    "By continuing, I agree to the",
                    " ",
                    r.createElement(
                      s.Z,
                      { href: "terms.html" },
                      "Terms of use",
                      r.createElement(i.h0, { ml: "6px", mb: "2px" })
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
                    o.gC,
                    { py: "12px" },
                    r.createElement(
                      o.xv,
                      { align: "center", fontWeight: "medium" },
                      "Don't have Internet Identity or Plug Wallet?"
                    ),
                    r.createElement(
                      o.rU,
                      {
                        isExternal: !0,
                        href: "internet-identity.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Internet Identity",
                      r.createElement(i.h0, { ml: "6px", mb: "2px" })
                    ),
                    r.createElement(
                      o.rU,
                      {
                        isExternal: !0,
                        href: "wallet.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Plug Wallet",
                      r.createElement(i.h0, { ml: "6px", mb: "2px" })
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
                    o.rU,
                    {
                      isExternal: !0,
                      href: "wallet.html",
                      color: "blue_2",
                      fontSize: "16px",
                      fontWeight: "light"
                    },
                    "Learn more about installing Plug Wallet",
                    r.createElement(i.h0, { ml: "6px", mb: "2px" })
                  )
                ),
                r.createElement(
                  l.mz,
                  null,
                  r.createElement(
                    c.zx,
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
      "use strict"
      n.d(t, {
        Z: function () {
          return o
        }
      })
      var r = n(31681),
        a = n(64380),
        l = n(22169)
      function o(e, t) {
        var n = r.Ho.InternetIdentity,
          o = r.Ho.Plug
        switch (t) {
          case n:
            return (0, a.w)(e, t)
          case o:
            return (0, l.cR)(e, t)
          default:
            return function () {}
        }
      }
    },
    23940: function (e, t, n) {
      "use strict"
      n.d(t, {
        o: function () {
          return i
        }
      })
      var r = n(87462),
        a = n(45987),
        l = n(67294),
        o = n(51815),
        c = ["onClick", "isLoading", "children"],
        i = function (e) {
          var t = e.onClick,
            n = e.isLoading,
            i = e.children,
            u = (0, a.Z)(e, c)
          return l.createElement(
            o.zx,
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
            i
          )
        }
    },
    17525: function (e, t, n) {
      "use strict"
      n.d(t, {
        T: function () {
          return _
        }
      })
      var r = n(87462),
        a = n(15861),
        l = n(86854),
        o = n(45987),
        c = n(87757),
        i = n.n(c),
        u = n(67294),
        s = n(88523),
        p = n(45607),
        m = n(51815),
        f = n(98400),
        x = n(66897),
        d = n(74865),
        h = n.n(d),
        g = n(31681),
        E = n(23256),
        b = n(27149),
        v = n(39878),
        w = n(66985),
        k = n(24686),
        y = n(5508),
        C = n(23940),
        Z = ["handleAuthenticated"],
        _ = function (e) {
          var t = e.handleAuthenticated,
            n = (0, o.Z)(e, Z),
            c = (0, s.qY)(),
            d = c.isOpen,
            _ = c.onOpen,
            P = c.onClose,
            S = (0, u.useState)(!1),
            z = (0, l.Z)(S, 2),
            W = z[0],
            A = z[1],
            L = (0, p.pm)(),
            U = (0, f.oR)(E.Z),
            F = (function () {
              var e = (0, a.Z)(
                i().mark(function e(n) {
                  var r, l, o
                  return i().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            P(),
                            U.appContext.setAuthProvider(n),
                            (r = (function () {
                              var e = (0, a.Z)(
                                i().mark(function e(n, r) {
                                  var a, o, c, u, s, p, m
                                  return i().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (null != n) {
                                              e.next = 3
                                              break
                                            }
                                            return A(!1), e.abrupt("return")
                                          case 3:
                                            return (
                                              h().start(),
                                              (e.prev = 4),
                                              (e.next = 7),
                                              (0, k.makeUserProfileActor)(n, r)
                                            )
                                          case 7:
                                            return (
                                              (s = e.sent),
                                              (e.next = 10),
                                              s.login((0, y.$6)(r))
                                            )
                                          case 10:
                                            if (
                                              ((p = e.sent),
                                              !(
                                                (null !== (a = p.err) &&
                                                  void 0 !== a &&
                                                  a.user_notfound) ||
                                                (null !== (o = p.err) &&
                                                  void 0 !== o &&
                                                  o.usermodel_notfound) ||
                                                0 ==
                                                  (null === (c = p.ok) ||
                                                  void 0 === c
                                                    ? void 0
                                                    : c.length)
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
                                            A(!1), t(n), (e.next = 29)
                                            break
                                          case 26:
                                            ;(e.prev = 26),
                                              (e.t0 = e.catch(4)),
                                              w.default.error(e.t0)
                                          case 29:
                                            return (
                                              (e.prev = 29),
                                              W && A(!1),
                                              h().done(),
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
                              var e = (0, a.Z)(
                                i().mark(function e(t, n) {
                                  var r
                                  return i().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (0, x.showToast)(
                                              L,
                                              "Login",
                                              n,
                                              "warning"
                                            ),
                                            (r = (0, k.makeLogout)(t)),
                                            (e.next = 4),
                                            r()
                                          )
                                        case 4:
                                          A(!1), h().done()
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
                            (o = (0, b.Z)(r, n)),
                            n == g.Ho.Plug &&
                              (0, x.showToast)(
                                L,
                                "Login with Plug",
                                "Please make sure your have unlocked your Plug Wallet.",
                                "info"
                              ),
                            A(!0),
                            (e.next = 9),
                            o()
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
              C.o,
              (0, r.Z)(
                {
                  onClick: _,
                  isLoading: W,
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
            u.createElement(v.y, { isOpen: d, onClose: P, selectAuth: F }),
            W &&
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
                      A(!1)
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
      "use strict"
      n.d(t, {
        Z: function () {
          return u
        }
      })
      var r = n(87462),
        a = n(45987),
        l = n(67294),
        o = n(51815),
        c = n(11972),
        i = ["children"]
      function u(e) {
        var t = e.children,
          n = (0, a.Z)(e, i)
        return l.createElement(
          o.zx,
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
          l.createElement(c.xv, { noOfLines: 0 }, t)
        )
      }
    },
    40874: function (e, t, n) {
      "use strict"
      n.d(t, {
        Z: function () {
          return u
        }
      })
      var r = n(87462),
        a = n(67294),
        l = n(11972),
        o = n(49162),
        c = function (e) {
          return a.createElement(
            l.X6,
            (0, r.Z)(
              {
                fontSize: { base: "16px", xl: "18px" },
                fontWeight: "semibold",
                color: "black_2"
              },
              e
            ),
            e.children
          )
        },
        i = function (e) {
          var t = e.color
          return a.createElement(l.xu, {
            background: t,
            h: "4px",
            w: "54px",
            borderRadius: "10px"
          })
        }
      function u(e) {
        return a.createElement(
          l.Kq,
          (0, r.Z)(
            {
              background: "purple_background",
              w: "100%",
              pt: { base: 0, md: "130px" },
              spacing: { base: 10, md: 20 }
            },
            e
          ),
          a.createElement(
            l.M5,
            null,
            a.createElement(o.Z, {
              src: "/signup-creatormap.jpg",
              w: { base: "0px", lg: "380px", xl: "580px", "2xl": "680px" },
              alt: "Creator Map"
            })
          ),
          a.createElement(
            l.xu,
            null,
            a.createElement(
              l.M5,
              { pb: "14px" },
              a.createElement(c, null, "Calling all Fabulous \xa0"),
              a.createElement(
                c,
                { fontWeight: "normal" },
                "Creators & Brands !"
              )
            ),
            a.createElement(
              l.M5,
              null,
              a.createElement(
                l.Kq,
                { direction: "row", spacing: "4px" },
                a.createElement(i, { color: "purple_2" }),
                a.createElement(i, { color: "blue_light" }),
                a.createElement(i, { color: "blue_dark" })
              )
            )
          )
        )
      }
    },
    81625: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            var a = n(15861),
              l = n(86854),
              o = n(87462),
              c = n(45987),
              i = n(87757),
              u = n.n(i),
              s = n(67294),
              p = n(11972),
              m = n(88523),
              f = n(45607),
              x = n(51815),
              d = n(59876),
              h = n(91632),
              g = n(42273),
              E = n(50828),
              b = n(98400),
              v = n(23256),
              w = n(66985),
              k = n(5508),
              y = n(17525),
              C = n(27149),
              Z = n(31681),
              _ = n(39878),
              P = n(15658),
              S = ["children"],
              z = (await Promise.resolve().then(n.bind(n, 66897))).showToast,
              W = await Promise.resolve().then(n.bind(n, 24686)),
              A = W.makeUserProfileActor,
              L = W.makeLogout,
              U = { base: "300px", md: "394px" },
              F = function (e) {
                var t = e.children,
                  n = (0, c.Z)(e, S)
                return s.createElement(
                  p.xv,
                  (0, o.Z)(
                    {
                      color: "gray_light2",
                      fontSize: "16px",
                      align: { base: "center", lg: "left" },
                      width: { base: "100%", md: "116%" },
                      w: U
                    },
                    n
                  ),
                  t
                )
              }
            function e(e) {
              var t = e.proceedCreateAccount,
                n = e.proceedHome,
                r = (0, m.qY)(),
                o = r.isOpen,
                c = r.onOpen,
                i = r.onClose,
                E = (0, s.useState)(!1),
                S = (0, l.Z)(E, 2),
                W = S[0],
                I = S[1],
                O = (0, f.pm)(),
                T = (0, b.oR)(v.Z),
                M = (function () {
                  var e = (0, a.Z)(
                    u().mark(function e(n, r) {
                      var l, o, c
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (((e.prev = 0), null != n)) {
                                  e.next = 4
                                  break
                                }
                                return I(!1), e.abrupt("return")
                              case 4:
                                return (e.next = 6), A(n, r)
                              case 6:
                                return (
                                  (l = e.sent),
                                  (e.next = 9),
                                  l.login((0, k.$6)(r))
                                )
                              case 9:
                                if (
                                  ((o = e.sent),
                                  (c = (function () {
                                    var e = (0, a.Z)(
                                      u().mark(function e() {
                                        var t
                                        return u().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (t = L(r)), (e.next = 3), t()
                                                )
                                              case 3:
                                                T.reset(), I(!1)
                                              case 5:
                                              case "end":
                                                return e.stop()
                                            }
                                        }, e)
                                      })
                                    )
                                    return function () {
                                      return e.apply(this, arguments)
                                    }
                                  })()),
                                  !o.ok)
                                ) {
                                  e.next = 16
                                  break
                                }
                                return (
                                  z(
                                    O,
                                    "Signup",
                                    "You have a Content Fly account already. Please login instead.",
                                    "warning"
                                  ),
                                  (e.next = 15),
                                  c()
                                )
                              case 15:
                                return e.abrupt("return")
                              case 16:
                                t(), (e.next = 23)
                                break
                              case 19:
                                ;(e.prev = 19),
                                  (e.t0 = e.catch(0)),
                                  w.default.error(e.t0),
                                  z(
                                    O,
                                    "Signup",
                                    "We have a problem with signup. Please try agian later.",
                                    "warning"
                                  )
                              case 23:
                                return (e.prev = 23), W && I(!1), e.finish(23)
                              case 26:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 19, 23, 26]]
                      )
                    })
                  )
                  return function (t, n) {
                    return e.apply(this, arguments)
                  }
                })(),
                q = (function () {
                  var e = (0, a.Z)(
                    u().mark(function e(t) {
                      var n
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                i(),
                                T.appContext.setAuthProvider(t),
                                (n = (0, C.Z)(M, t)),
                                t == Z.Ho.Plug &&
                                  z(
                                    O,
                                    "Login with Plug",
                                    "Please make sure your have unlocked your Plug Wallet.",
                                    "info"
                                  ),
                                (e.next = 6),
                                n()
                              )
                            case 6:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
                H = (function () {
                  var e = (0, a.Z)(
                    u().mark(function e() {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              I(!0), T.reset(), c()
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
              return s.createElement(
                p.xu,
                { style: { width: "100%" } },
                s.createElement(
                  p.Kq,
                  {
                    background: "white",
                    px: { base: "50px", md: "80px", lg: "100px" },
                    pt: { base: "50px", md: "80px" },
                    pb: { base: "36px", md: "40px" },
                    spacing: { base: 8 },
                    w: { base: "100%", lg: "unset" }
                  },
                  s.createElement(
                    p.Kq,
                    {
                      spacing: "5px",
                      mb: { base: "20px", lg: "0px" },
                      alignItems: { base: "center", lg: "normal" }
                    },
                    s.createElement(
                      p.xv,
                      {
                        fontSize: "48px",
                        fontWeight: "bold",
                        background: "gradient.purple.2",
                        bgClip: "text",
                        w: "186px",
                        textAlign: { base: "center", md: "left" }
                      },
                      "Sign Up"
                    ),
                    s.createElement(F, { pt: "22px" }, "Buyers"),
                    s.createElement(
                      F,
                      null,
                      s.createElement(P.J$, { boxSize: "8px", mx: "12px" }),
                      "Find & work with content creation freelancers in a trustless way."
                    ),
                    s.createElement(F, { pt: "22px" }, "Creators"),
                    s.createElement(
                      F,
                      null,
                      s.createElement(P.J$, { boxSize: "8px", mx: "12px" }),
                      "Undertake jobs that match your skills & get paid securely through blockchain powered smart contracts."
                    )
                  ),
                  s.createElement(
                    p.xu,
                    null,
                    s.createElement(
                      p.Kq,
                      {
                        spacing: 4,
                        alignItems: { base: "center", lg: "normal" }
                      },
                      s.createElement(
                        g.Z,
                        { isLoading: W, onClick: H, w: U },
                        "Sign Up"
                      ),
                      W &&
                        s.createElement(
                          x.zx,
                          {
                            color: "blue_1",
                            variant: "link",
                            textAlign: "center",
                            w: U,
                            onClick: function () {
                              I(!1)
                            }
                          },
                          "Cancel"
                        ),
                      s.createElement(
                        p.M5,
                        { mt: "5px", w: U },
                        s.createElement(
                          p.gC,
                          null,
                          s.createElement(
                            p.xv,
                            { align: "center", fontWeight: "medium" },
                            "New to Content Fly?"
                          ),
                          s.createElement(
                            p.xv,
                            { align: "center", fontSize: "15px" },
                            "Content Fly is a Web3 Dapp on",
                            " ",
                            s.createElement(
                              p.rU,
                              {
                                isExternal: !0,
                                href: "https://smartcontracts.org"
                              },
                              "Internet Computer",
                              s.createElement(d.h0, { ml: "6px", mb: "2px" })
                            )
                          )
                        )
                      ),
                      s.createElement(
                        p.xv,
                        {
                          textAlign: "center",
                          fontWeight: "medium",
                          fontSize: "16px",
                          w: U,
                          pt: { base: "60px", md: "60px" }
                        },
                        "Already have an account"
                      ),
                      s.createElement(
                        y.T,
                        {
                          w: U,
                          fontSize: "16px",
                          fontWeight: "medium",
                          handleAuthenticated: n,
                          h: "60px",
                          variant: "link",
                          border: "0px",
                          color: "blue_1"
                        },
                        "Login"
                      )
                    )
                  ),
                  s.createElement(h.$, {
                    w: { base: "unset", lg: "394px" },
                    pt: { base: "44px", md: "44px" }
                  }),
                  s.createElement(_.y, {
                    isOpen: o,
                    onClose: function () {
                      i(), I(!1)
                    },
                    selectAuth: q
                  })
                )
              )
            }
            ;(t.Z = (0, E.Pi)(e)), r()
          } catch (I) {
            r(I)
          }
        },
        1
      )
    },
    66897: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          showLongToast: function () {
            return l
          },
          showMediumToast: function () {
            return a
          },
          showStandardErrorMesg: function () {
            return o
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
        a = function (e, t, n, r) {
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
        o = function (e) {
          r(
            e,
            "\ud83e\udd16 We have a problem.",
            "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
            "error"
          )
        }
    },
    98588: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/signup",
        function () {
          return n(44380)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [
        2328, 8760, 5297, 253, 6804, 5607, 5527, 9876, 828, 2144, 5658, 2888,
        9774, 179
      ],
      function () {
        return (t = 98588), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
