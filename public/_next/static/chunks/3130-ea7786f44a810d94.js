"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3130],
  {
    33224: function (e, t, n) {
      n.d(t, {
        j: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(11972),
        o = n(66956),
        i = function () {
          return r.createElement(
            a.M5,
            { py: "30px" },
            r.createElement(o.$, {
              thickness: "4px",
              speed: "0.65s",
              emptyColor: "purple_light",
              color: "purple",
              size: "xl"
            })
          )
        }
    },
    65928: function (e, t, n) {
      n.d(t, {
        D: function () {
          return s
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(41664),
        c = n.n(i),
        l = n(11972),
        u = ["page", "children"],
        s = function (e) {
          var t = e.page,
            n = e.children,
            i = (0, a.Z)(e, u),
            s = null !== t && void 0 !== t ? t : "",
            p = "/" == s ? "" : "".concat(s, ".html")
          return o.createElement(
            c(),
            (0, r.Z)({ href: s, as: p, passHref: !0 }, i),
            o.createElement(l.rU, null, n)
          )
        }
    },
    70216: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i
        }
      })
      var r = n(87462),
        a = n(67294),
        o = n(11972)
      function i(e) {
        return a.createElement(
          o.rU,
          (0, r.Z)({ target: "_blank", textDecoration: "underline" }, e),
          e.children
        )
      }
    },
    29950: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(15040),
        c = ["label", "children"],
        l = function (e) {
          var t = e.label,
            n = e.children,
            l = (0, a.Z)(e, c)
          return o.createElement(
            i.u,
            (0, r.Z)(
              {
                label: t,
                fontSize: "sm",
                bg: "gradient.purple.3",
                color: "black",
                borderRadius: "6px",
                textAlign: "center",
                p: "4px"
              },
              l
            ),
            n
          )
        }
    },
    80585: function (e, t, n) {
      n.d(t, {
        e: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(62639),
        o = {
          fontWeight: "semibold",
          borderBottom: "3px solid currentColor",
          borderBottomColor: "purple_2"
        },
        i = function (e) {
          var t = e.selected,
            n = e.hover,
            i = e.active,
            c = e.display,
            l = e.children,
            u = t || o
          return r.createElement(
            a.OK,
            {
              color: "black",
              display: c,
              fontSize: { md: "16px", lg: "20px" },
              fontWeight: "medium",
              _selected: u,
              _hover: n,
              _active: i
            },
            l
          )
        }
    },
    66274: function (e, t, n) {
      n.d(t, {
        X: function () {
          return l
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(11972),
        c = ["children"],
        l = function (e) {
          var t = e.children,
            n = (0, a.Z)(e, c)
          return o.createElement(
            i.xv,
            (0, r.Z)({ color: "muted", fontSize: "sm", noOfLines: 3 }, n),
            t
          )
        }
    },
    49646: function (e, t, n) {
      var r = n(67294),
        a = n(25527),
        o = n(11972),
        i = n(27149),
        c = n(42273),
        l = n(50828),
        u = n(98400),
        s = n(23256)
      t.Z = (0, l.Pi)(function (e) {
        var t = e.triggerAuthUpdate,
          n = (0, u.oR)(s.Z),
          l = (0, i.Z)(function (e) {
            var n, r
            null != e &&
              (t(),
              null === (n = window) ||
                void 0 === n ||
                null === (r = n.location) ||
                void 0 === r ||
                r.reload(),
              p())
          }, n.appContext.authProvider),
          p = function () {
            n.setSessionExpired(!1)
          }
        return r.createElement(
          a.aR,
          { isOpen: n.isSessionExpired },
          r.createElement(
            a.dh,
            null,
            r.createElement(
              a._T,
              null,
              r.createElement(
                a.fY,
                { fontSize: "lg", fontWeight: "bold" },
                "Sesssion expired"
              ),
              r.createElement(
                a.iP,
                null,
                "Your login session has expired. Please login again to continue."
              ),
              r.createElement(
                a.xo,
                null,
                r.createElement(
                  o.Ug,
                  { width: "100%" },
                  r.createElement(
                    c.Z,
                    { onClick: l, mb: "0px", w: "75%" },
                    "Login with Internet Identity"
                  ),
                  r.createElement(o.LZ, null)
                )
              )
            )
          )
        )
      })
    },
    39878: function (e, t, n) {
      n.d(t, {
        y: function () {
          return m
        }
      })
      var r = n(67294),
        a = n(88523),
        o = n(25527),
        i = n(11972),
        c = n(51815),
        l = n(59876),
        u = n(23940),
        s = n(70216),
        p = n(15658),
        d = n(31681),
        m = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            m = e.selectAuth,
            f = (0, a.qY)(),
            h = f.isOpen,
            x = f.onOpen,
            g = f.onClose,
            v = d.Ho.InternetIdentity,
            b = d.Ho.Plug,
            E = function (e) {
              var t
              if (
                e === b &&
                (null === (t = window.ic) || void 0 === t || !t.plug)
              )
                return void x()
              m(e)
            }
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              o.u_,
              { onClose: n, size: "lg", isOpen: t },
              r.createElement(o.ZA, null),
              r.createElement(
                o.hz,
                null,
                r.createElement(o.xB, null, "Choose"),
                r.createElement(o.ol, null),
                r.createElement(
                  o.fe,
                  { align: "center" },
                  r.createElement(
                    i.xv,
                    { pb: "10px" },
                    "By continuing, I agree to the",
                    " ",
                    r.createElement(
                      s.Z,
                      { href: "terms.html" },
                      "Terms of use",
                      r.createElement(l.h0, { ml: "6px", mb: "2px" })
                    )
                  ),
                  r.createElement(
                    u.o,
                    {
                      onClick: function () {
                        return E(v)
                      }
                    },
                    r.createElement(p.cD, { h: "55px", w: "76px", mr: "0px" }),
                    "Internet Identity"
                  ),
                  r.createElement(
                    u.o,
                    {
                      onClick: function () {
                        return E(b)
                      }
                    },
                    r.createElement(p.gk, { h: "40px", mr: "18px" }),
                    "Plug Wallet"
                  ),
                  r.createElement(
                    i.gC,
                    { py: "12px" },
                    r.createElement(
                      i.xv,
                      { align: "center", fontWeight: "medium" },
                      "Don't have Internet Identity or Plug Wallet?"
                    ),
                    r.createElement(
                      i.rU,
                      {
                        isExternal: !0,
                        href: "internet-identity.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Internet Identity",
                      r.createElement(l.h0, { ml: "6px", mb: "2px" })
                    ),
                    r.createElement(
                      i.rU,
                      {
                        isExternal: !0,
                        href: "wallet.html",
                        color: "blue_2",
                        fontSize: "16px",
                        fontWeight: "light"
                      },
                      "Learn more about Plug Wallet",
                      r.createElement(l.h0, { ml: "6px", mb: "2px" })
                    )
                  )
                )
              )
            ),
            r.createElement(
              o.u_,
              { onClose: g, size: "lg", isOpen: h },
              r.createElement(o.ZA, null),
              r.createElement(
                o.hz,
                null,
                r.createElement(o.xB, null, "Plug Wallet is not found"),
                r.createElement(o.ol, null),
                r.createElement(
                  o.fe,
                  { align: "center" },
                  r.createElement(
                    i.rU,
                    {
                      isExternal: !0,
                      href: "wallet.html",
                      color: "blue_2",
                      fontSize: "16px",
                      fontWeight: "light"
                    },
                    "Learn more about installing Plug Wallet",
                    r.createElement(l.h0, { ml: "6px", mb: "2px" })
                  )
                ),
                r.createElement(
                  o.mz,
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
      n.d(t, {
        Z: function () {
          return i
        }
      })
      var r = n(31681),
        a = n(64380),
        o = n(22169)
      function i(e, t) {
        var n = r.Ho.InternetIdentity,
          i = r.Ho.Plug
        switch (t) {
          case n:
            return (0, a.w)(e, t)
          case i:
            return (0, o.cR)(e, t)
          default:
            return function () {}
        }
      }
    },
    23940: function (e, t, n) {
      n.d(t, {
        o: function () {
          return l
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(51815),
        c = ["onClick", "isLoading", "children"],
        l = function (e) {
          var t = e.onClick,
            n = e.isLoading,
            l = e.children,
            u = (0, a.Z)(e, c)
          return o.createElement(
            i.zx,
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
            l
          )
        }
    },
    59513: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(51815),
        c = ["icon", "iconBoxSize"],
        l = function (e) {
          e.icon
          var t = e.iconBoxSize,
            n = (0, a.Z)(e, c)
          return o.createElement(
            i.zx,
            (0, r.Z)(
              {
                fontSize: "13px",
                fontWeight: "medium",
                color: "black",
                variant: "ghost",
                iconSpacing: "8px",
                mr: "30px",
                leftIcon: o.createElement("icon", {
                  boxSize: t,
                  color: "black"
                }),
                _hover: {
                  background: "gradient.purple.3",
                  backgroundSize: "cover"
                }
              },
              n
            ),
            e.children
          )
        }
    },
    17525: function (e, t, n) {
      n.d(t, {
        T: function () {
          return S
        }
      })
      var r = n(87462),
        a = n(15861),
        o = n(86854),
        i = n(45987),
        c = n(87757),
        l = n.n(c),
        u = n(67294),
        s = n(88523),
        p = n(45607),
        d = n(51815),
        m = n(98400),
        f = n(66897),
        h = n(74865),
        x = n.n(h),
        g = n(31681),
        v = n(23256),
        b = n(27149),
        E = n(39878),
        y = n(66985),
        k = n(24686),
        w = n(5508),
        Z = n(23940),
        C = ["handleAuthenticated"],
        S = function (e) {
          var t = e.handleAuthenticated,
            n = (0, i.Z)(e, C),
            c = (0, s.qY)(),
            h = c.isOpen,
            S = c.onOpen,
            I = c.onClose,
            z = (0, u.useState)(!1),
            A = (0, o.Z)(z, 2),
            R = A[0],
            _ = A[1],
            U = (0, p.pm)(),
            P = (0, m.oR)(v.Z),
            W = (function () {
              var e = (0, a.Z)(
                l().mark(function e(n) {
                  var r, o, i
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            I(),
                            P.appContext.setAuthProvider(n),
                            (r = (function () {
                              var e = (0, a.Z)(
                                l().mark(function e(n, r) {
                                  var a, i, c, u, s, p, d
                                  return l().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (null != n) {
                                              e.next = 3
                                              break
                                            }
                                            return _(!1), e.abrupt("return")
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
                                              s.login((0, w.$6)(r))
                                            )
                                          case 10:
                                            if (
                                              ((p = e.sent),
                                              !(
                                                (null !== (a = p.err) &&
                                                  void 0 !== a &&
                                                  a.user_notfound) ||
                                                (null !== (i = p.err) &&
                                                  void 0 !== i &&
                                                  i.usermodel_notfound) ||
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
                                              o(
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
                                              o(
                                                r,
                                                "You don't have permission to login to the connected user account"
                                              ),
                                              e.abrupt("return")
                                            )
                                          case 19:
                                            return (
                                              (d = p.ok[0]),
                                              (e.next = 22),
                                              P.updateForNewSignupLogin(d)
                                            )
                                          case 22:
                                            _(!1), t(n), (e.next = 29)
                                            break
                                          case 26:
                                            ;(e.prev = 26),
                                              (e.t0 = e.catch(4)),
                                              y.default.error(e.t0)
                                          case 29:
                                            return (
                                              (e.prev = 29),
                                              R && _(!1),
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
                            (o = (function () {
                              var e = (0, a.Z)(
                                l().mark(function e(t, n) {
                                  var r
                                  return l().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (0, f.showToast)(
                                              U,
                                              "Login",
                                              n,
                                              "warning"
                                            ),
                                            (r = (0, k.makeLogout)(t)),
                                            (e.next = 4),
                                            r()
                                          )
                                        case 4:
                                          _(!1), x().done()
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
                            (i = (0, b.Z)(r, n)),
                            n == g.Ho.Plug &&
                              (0, f.showToast)(
                                U,
                                "Login with Plug",
                                "Please make sure your have unlocked your Plug Wallet.",
                                "info"
                              ),
                            _(!0),
                            (e.next = 9),
                            i()
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
              Z.o,
              (0, r.Z)(
                {
                  onClick: S,
                  isLoading: R,
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
            u.createElement(E.y, { isOpen: h, onClose: I, selectAuth: W }),
            R &&
              u.createElement(
                d.zx,
                (0, r.Z)(
                  {
                    w: "110px",
                    h: "38px",
                    color: "blue_1",
                    variant: "link",
                    textAlign: "center",
                    onClick: function () {
                      _(!1)
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
        a = n(45987),
        o = n(67294),
        i = n(51815),
        c = n(11972),
        l = ["children"]
      function u(e) {
        var t = e.children,
          n = (0, a.Z)(e, l)
        return o.createElement(
          i.zx,
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
          o.createElement(c.xv, { noOfLines: 0 }, t)
        )
      }
    },
    58094: function (e, t, n) {
      n.d(t, {
        f: function () {
          return f
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(59513),
        c = n(15658),
        l = n(42273),
        u = n(11163),
        s = n(17525),
        p = ["signup"],
        d = ["logout", "triggerAuthUpdate"],
        m = function (e) {
          var t = e.signup,
            n = (0, a.Z)(e, p)
          return o.createElement(l.Z, (0, r.Z)({ onClick: t }, n), "Sign Up")
        },
        f = function (e) {
          var t = e.logout,
            n = e.triggerAuthUpdate,
            l = (0, a.Z)(e, d),
            p = (0, u.useRouter)(),
            f = { base: "169px", md: "110px" },
            h = "38px",
            x = "20px",
            g = "14px"
          return o.createElement(
            o.Fragment,
            null,
            null != t &&
              o.createElement(
                i.O,
                (0, r.Z)(
                  {
                    leftIcon: o.createElement(c.R0, {
                      boxSize: "22px",
                      color: "black"
                    }),
                    fontSize: { base: 0, "2xl": "13px" },
                    onClick: t
                  },
                  l
                ),
                "Logout"
              ),
            null == t &&
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  m,
                  (0, r.Z)(
                    {
                      signup: function () {
                        p.push("/signup", "/signup.html")
                      },
                      w: f,
                      h: h,
                      mr: x,
                      fontSize: g
                    },
                    l
                  )
                ),
                o.createElement(
                  s.T,
                  (0, r.Z)(
                    { handleAuthenticated: n, w: f, h: h, mr: x, fontSize: g },
                    l
                  )
                )
              )
          )
        }
    },
    70389: function (e, t, n) {
      n.d(t, {
        X: function () {
          return c
        }
      })
      var r = n(67294),
        a = n(11972),
        o = n(25927),
        i = n(29950),
        c = function (e) {
          var t = e.portfolio,
            n = e.thumbnailImageSrc,
            c = e.skillsString
          return r.createElement(
            a.M5,
            {
              borderRadius: "19px",
              w: "full",
              h: "38px",
              backgroundColor: "black_transparent",
              backdropFilter: "blur(4px)",
              position: "absolute",
              bottom: "0px"
            },
            r.createElement(
              i.$,
              { label: t.tagline },
              r.createElement(o.qE, {
                w: "38px",
                h: "38px",
                name: t.creatorName,
                src: n
              })
            ),
            r.createElement(
              i.$,
              { label: t.creatorName },
              r.createElement(
                a.xv,
                {
                  pl: "6px",
                  pr: "3px",
                  fontSize: "13px",
                  fontWeight: "semibold",
                  color: "white",
                  maxW: "144px",
                  isTruncated: !0
                },
                t.creatorName
              )
            ),
            r.createElement(a.LZ, null),
            r.createElement(
              i.$,
              { label: c },
              r.createElement(
                a.xv,
                {
                  fontSize: "11px",
                  fontWeight: "normal",
                  color: "white",
                  isTruncated: !0,
                  pr: "6px",
                  maxW: "144px"
                },
                c
              )
            )
          )
        }
    },
    92689: function (e, t, n) {
      n.d(t, {
        c: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(11972),
        o = n(29950),
        i = function (e) {
          var t = e.creatorTypesString
          return r.createElement(
            a.M5,
            {
              borderRadius: "19px",
              maxW: "190px",
              h: "27px",
              ml: "10px",
              backgroundColor: "black_transparent",
              backdropFilter: "blur(4px)",
              position: "absolute",
              top: "10px"
            },
            r.createElement(
              o.$,
              { label: t },
              r.createElement(
                a.xv,
                {
                  fontSize: "11px",
                  fontWeight: "normal",
                  color: "white",
                  isTruncated: !0,
                  p: "8px",
                  maxW: "164px"
                },
                t
              )
            )
          )
        }
    },
    74476: function (e, t, n) {
      n.a(
        e,
        async function (e, r) {
          try {
            n.d(t, {
              r: function () {
                return k
              }
            })
            var a = n(86854),
              o = n(15861),
              i = n(87757),
              c = n.n(i),
              l = n(67294),
              u = n(36005),
              s = n(74865),
              p = n.n(s),
              d = n(11972),
              m = n(51815),
              f = n(26323),
              h = n(66985),
              x = n(87784),
              g = n(31681),
              v = n(33224),
              b = e([f])
            f = (b.then ? (await b)() : b)[0]
            var E = (await Promise.resolve().then(n.bind(n, 24686)))
              .makePortfolioActor
            function w(e, t, n, r, a, o) {
              return Z.apply(this, arguments)
            }
            function Z() {
              return (Z = (0, o.Z)(
                c().mark(function e(t, n, r, a, o, i) {
                  var l, u, s, d, m
                  return c().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              "" !=
                              (l = null != o ? o.trim().toLowerCase() : "")
                            ) {
                              e.next = 3
                              break
                            }
                            return e.abrupt("return")
                          case 3:
                            return (
                              t(!0),
                              n(!1),
                              p().start(),
                              (e.prev = 6),
                              (e.next = 9),
                              E()
                            )
                          case 9:
                            return (
                              (u = e.sent),
                              (e.next = 12),
                              u.searchPortfolios(i, g.sD.PageSize, l)
                            )
                          case 12:
                            ;(s = e.sent),
                              (d = (0, x.T)(s)),
                              0 == i ? r(d) : ((m = a.concat(d)), r(m)),
                              n(0 == d.length || d.length < g.sD.PageSize),
                              (e.next = 21)
                            break
                          case 18:
                            ;(e.prev = 18),
                              (e.t0 = e.catch(6)),
                              h.default.error(e.t0)
                          case 21:
                            return (
                              (e.prev = 21), t(!1), p().done(), e.finish(21)
                            )
                          case 25:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[6, 18, 21, 25]]
                  )
                })
              )).apply(this, arguments)
            }
            var y = (0, u.Ds)(w, 1500),
              k = function (e) {
                var t = e.openPortfolio,
                  n = e.selectedCreatorType,
                  r = e.selectedSkill,
                  i = e.pageNum,
                  u = e.setPageNum,
                  s = e.keyword,
                  b = e.refreshIncrement,
                  k = (0, l.useState)([]),
                  w = (0, a.Z)(k, 2),
                  Z = w[0],
                  C = w[1],
                  S = (0, l.useState)(!0),
                  I = (0, a.Z)(S, 2),
                  z = I[0],
                  A = I[1],
                  R = (0, l.useState)(!1),
                  _ = (0, a.Z)(R, 2),
                  U = _[0],
                  P = _[1]
                function W() {
                  return (W = (0, o.Z)(
                    c().mark(function e() {
                      var t, a, o, l
                      return c().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  A(!0),
                                  P(!1),
                                  p().start(),
                                  (e.prev = 3),
                                  0 == i && C([]),
                                  (e.next = 7),
                                  E()
                                )
                              case 7:
                                return (
                                  (t = e.sent),
                                  (e.next = 10),
                                  t.queryBy(
                                    i,
                                    g.sD.PageSize,
                                    n ? [n] : [],
                                    r ? [r] : []
                                  )
                                )
                              case 10:
                                ;(a = e.sent),
                                  (o = (0, x.T)(a)),
                                  0 == i ? C(o) : ((l = Z.concat(o)), C(l)),
                                  P(0 == o.length || o.length < g.sD.PageSize),
                                  (e.next = 19)
                                break
                              case 16:
                                ;(e.prev = 16),
                                  (e.t0 = e.catch(3)),
                                  h.default.error(e.t0)
                              case 19:
                                return (
                                  (e.prev = 19), A(!1), p().done(), e.finish(19)
                                )
                              case 23:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[3, 16, 19, 23]]
                      )
                    })
                  )).apply(this, arguments)
                }
                ;(0, l.useEffect)(
                  function () {
                    null != s && "" != s
                      ? y(A, P, C, Z, s, i)
                      : (function () {
                          W.apply(this, arguments)
                        })()
                  },
                  [n, r, i, s, b]
                )
                return l.createElement(
                  d.xu,
                  { h: "100%", backgroundColor: "gray_light3" },
                  z && l.createElement(v.j, null),
                  l.createElement(
                    d.MI,
                    {
                      minChildWidth: {
                        base: "320px",
                        sm: "320px",
                        md: "348px"
                      },
                      spacing: { base: "20px", sm: "20px" },
                      backgroundColor: "gray_light3",
                      width: "100%",
                      h: "100%",
                      mt: { base: "2px", md: "8px" },
                      pt: { base: "10px", md: "18px" },
                      pb: { base: U ? "100px" : "20px", md: "38px" }
                    },
                    Z.map(function (e) {
                      return l.createElement(f.L, {
                        key: e.id,
                        portfolio: e,
                        openPortfolio: t
                      })
                    }),
                    0 == Z.length &&
                      !z &&
                      l.createElement(
                        d.M5,
                        { p: "12px", color: "black" },
                        l.createElement(
                          d.xu,
                          { align: "center" },
                          l.createElement(
                            d.xv,
                            null,
                            "Looks like we don't have creators for this category. \ud83d\ude05"
                          ),
                          l.createElement(
                            d.xv,
                            null,
                            "Join us \ud83d\udce3 to become a part of the new amazing creators community. \ud83d\udd7a \ud83d\udc83\ud83c\udffb"
                          )
                        )
                      )
                  ),
                  Z.length > 0 &&
                    !U &&
                    l.createElement(
                      d.M5,
                      { mt: "12px", pb: { base: "140px", md: "38px" } },
                      l.createElement(
                        m.zx,
                        {
                          w: "240px",
                          color: "purple",
                          borderColor: "purple",
                          variant: "outline",
                          onClick: function () {
                            u(i + 1)
                          }
                        },
                        "Load More"
                      )
                    )
                )
              }
            r()
          } catch (w) {
            r(w)
          }
        },
        1
      )
    },
    71883: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            W: function () {
              return d
            }
          })
          var a = n(87462),
            o = n(45987),
            i = n(67294),
            c = n(11972),
            l = n(49162),
            u = n(76989),
            s = e([u])
          u = (s.then ? (await s)() : s)[0]
          var p = ["imageId"],
            d = function (e) {
              var t = e.imageId,
                n = (0, o.Z)(e, p),
                r = (0, u.RC)(t)
              return i.createElement(
                c.oM,
                { maxW: "349px", ratio: 349 / 297 },
                i.createElement(
                  l.Z,
                  (0, a.Z)(
                    {
                      boxShadow: "sm",
                      borderRadius: "19px",
                      src: r,
                      alt: "Portfolio Featured Image",
                      fallbackElement: i.createElement(c.xu, {
                        bg: "white",
                        borderRadius: "19px"
                      })
                    },
                    n
                  )
                )
              )
            }
          r()
        } catch (m) {
          r(m)
        }
      })
    },
    26323: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            L: function () {
              return m
            }
          })
          var a = n(67294),
            o = n(11972),
            i = n(71883),
            c = n(76989),
            l = n(92689),
            u = n(70389),
            s = n(16830),
            p = e([i, c])
          ;[i, c] = p.then ? (await p)() : p
          var d = function (e) {
              var t = e.children,
                n = e.gotoPortfolio,
                r = e.featuredImageSrc
              return a.createElement(
                o.M5,
                null,
                a.createElement(
                  o.xu,
                  {
                    role: "group",
                    p: { base: "0px", sm: "12px" },
                    maxW: { base: "320px", sm: "320px", md: "348px" },
                    w: "full",
                    bg: "gray_light3",
                    borderRadius: "19px",
                    pos: "relative",
                    zIndex: 1,
                    onClick: n,
                    _hover: { cursor: "pointer" }
                  },
                  a.createElement(
                    o.xu,
                    {
                      pos: "relative",
                      borderRadius: "19px",
                      _after: {
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 2,
                        left: 0,
                        backgroundImage: r ? "url(".concat(r, ")") : "",
                        filter: "blur(13px)",
                        zIndex: -1
                      },
                      _groupHover: { _after: { filter: "blur(23px)" } }
                    },
                    t
                  )
                )
              )
            },
            m = function (e) {
              var t = e.portfolio,
                n = e.openPortfolio,
                r = (0, c.RC)(t.thumbImageId),
                o = function () {
                  return t.images.length > 0
                    ? t.images[0].imageId
                    : t.thumbImageId
                },
                p = (0, c.RC)(o())
              return a.createElement(
                d,
                {
                  featuredImageSrc: p,
                  gotoPortfolio: function () {
                    n(t)
                  }
                },
                a.createElement(i.W, { imageId: o() }),
                a.createElement(u.X, {
                  portfolio: t,
                  thumbnailImageSrc: r,
                  skillsString: (function () {
                    var e
                    return (
                      (null === (e = t.creatorTypes) || void 0 === e
                        ? void 0
                        : e
                            .map(function (e) {
                              return (0, s.IO)(e.skills, e.name)
                            })
                            .flat()) || []
                    ).join(" / ")
                  })()
                }),
                a.createElement(l.c, {
                  creatorTypesString: (function () {
                    var e,
                      n =
                        (null === (e = t.creatorTypes) || void 0 === e
                          ? void 0
                          : e.map(function (e) {
                              return e.name
                            })) || []
                    return (0, s.qk)(n).join(" / ")
                  })()
                })
              )
            }
          r()
        } catch (f) {
          r(f)
        }
      })
    },
    83876: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            g: function () {
              return w
            }
          })
          var a = n(87462),
            o = n(86854),
            i = n(45987),
            c = n(67294),
            l = n(9008),
            u = n.n(l),
            s = n(88523),
            p = n(62639),
            d = n(11972),
            m = n(51815),
            f = n(64737),
            h = n(91204),
            x = n(74476),
            g = n(16746),
            v = n(96217),
            b = n(80585),
            E = n(60155),
            y = e([x, g, v])
          ;[x, g, v] = y.then ? (await y)() : y
          var k = ["keyword", "opacity", "setOpacity", "gotoRoot", "identity"],
            w = function (e) {
              var t = e.keyword,
                n = e.opacity,
                r = e.setOpacity,
                l = e.gotoRoot,
                y = e.identity,
                w = (0, i.Z)(e, k),
                Z = (0, c.useState)(0),
                C = (0, o.Z)(Z, 2),
                S = C[0],
                I = C[1],
                z = (0, s.qY)(),
                A = z.isOpen,
                R = z.onOpen,
                _ = z.onClose,
                U = (0, c.useState)(null),
                P = (0, o.Z)(U, 2),
                W = P[0],
                L = P[1]
              return c.createElement(
                c.Fragment,
                null,
                c.createElement(
                  u(),
                  null,
                  c.createElement(
                    "title",
                    null,
                    "Browse Creators - Content Fly"
                  )
                ),
                c.createElement(
                  p.mQ,
                  { isLazy: !0, variant: "unstyled" },
                  c.createElement(
                    d.kC,
                    { h: { base: "41px", md: "81px" } },
                    c.createElement(m.hU, {
                      opacity: n,
                      icon: c.createElement(f.JO, {
                        as: E.$Ku,
                        color: "purple_3",
                        fontSize: { base: "26px", md: "30px" }
                      }),
                      variant: "unstyled",
                      top: { base: "0px", md: "24px" },
                      left: { base: "2px", md: "12px" },
                      w: { base: "20px", md: "50px" },
                      onClick: l
                    }),
                    c.createElement(
                      p.td,
                      {
                        pt: "10px",
                        pl: { md: "45px", lg: "80px" },
                        opacity: n
                      },
                      c.createElement(b.e, null, "Search Creators")
                    ),
                    c.createElement(d.LZ, null),
                    c.createElement(
                      v.d,
                      (0, a.Z)({ identity: y, opacity: n }, w)
                    )
                  ),
                  c.createElement(d.iz, {
                    h: "1px",
                    color: "gray_light",
                    opacity: n,
                    display: { base: "none", md: "flex" }
                  }),
                  c.createElement(
                    p.nP,
                    null,
                    c.createElement(
                      p.x4,
                      { px: "0px" },
                      c.createElement(
                        d.xu,
                        { opacity: n },
                        c.createElement(x.r, {
                          openPortfolio: function (e) {
                            L(e),
                              r(0),
                              window.history.replaceState(
                                null,
                                "".concat(
                                  e.creatorName,
                                  "'s Portolio - Content Fly"
                                ),
                                "/p.html?id=".concat(e.id)
                              ),
                              R()
                          },
                          pageNum: S,
                          setPageNum: I,
                          keyword: t
                        })
                      ),
                      A &&
                        W &&
                        c.createElement(
                          h.Mi,
                          {
                            direction: "right",
                            in: A,
                            style: { zIndex: 10, overflow: "scroll" }
                          },
                          c.createElement(g.PortfolioViewerContainer, {
                            identity: y,
                            model: W,
                            goBack: function () {
                              r(1),
                                window.history.replaceState(
                                  null,
                                  "Browse Creators - Content Fly",
                                  "/creators.html"
                                ),
                                _()
                            },
                            pt: "50px"
                          })
                        )
                    )
                  )
                )
              )
            }
          r()
        } catch (Z) {
          r(Z)
        }
      })
    },
    13130: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            Z: function () {
              return v
            }
          })
          n(15861)
          var a = n(86854),
            o = n(45987),
            i = (n(87757), n(67294)),
            c = n(11972),
            l = n(74213),
            u = n(83876),
            s = n(24832),
            p = n(12294),
            d = n(28400),
            m = n(49646),
            f = n(98400),
            h = n(23256),
            x = (n(30647), n(66985), n(31681), e([u, s, p, d]))
          ;[u, s, p, d] = x.then ? (await x)() : x
          var g = [
            "activeLink",
            "opacity",
            "setOpacity",
            "pointerEvents",
            "hideBottomBar",
            "hideSideBar",
            "logout",
            "triggerAuthUpdate",
            "identity",
            "isHideLogo"
          ]
          function v(e) {
            var t = e.activeLink,
              n = e.opacity,
              r = e.setOpacity,
              x = e.pointerEvents,
              v = e.hideBottomBar,
              b = e.hideSideBar,
              E = e.logout,
              y = e.triggerAuthUpdate,
              k = e.identity,
              w = e.isHideLogo,
              Z = (0, o.Z)(e, g),
              C = (0, i.useState)(""),
              S = (0, a.Z)(C, 2),
              I = S[0],
              z = S[1]
            ;(0, f.oR)(h.Z)
            return i.createElement(
              c.kC,
              { h: "100vh", flexDirection: "column" },
              !w && i.createElement(l.t, { opacity: n }, "alpha"),
              i.createElement(s.s, {
                activeLink: t,
                opacity: n,
                pointerEvents: x,
                logout: E,
                keyword: I,
                setKeyword: z,
                identity: k,
                triggerAuthUpdate: y,
                isHideLogo: w
              }),
              i.createElement(
                c.kC,
                { flex: "1", overflow: "hidden", flexDirection: "row" },
                !b &&
                  i.createElement(d.Z, {
                    display: { base: "none", md: "flex" },
                    activeLink: t,
                    opacity: n,
                    pointerEvents: x,
                    logout: E,
                    keyword: I,
                    setKeyword: z,
                    identity: k,
                    triggerAuthUpdate: y
                  }),
                "" == I &&
                  i.createElement(
                    c.kC,
                    { flexDirection: "column", flex: "1", overflow: "scroll" },
                    Z.children
                  ),
                "" != I &&
                  i.createElement(
                    c.kC,
                    { flexDirection: "column", flex: "1", overflow: "scroll" },
                    i.createElement(u.g, {
                      keyword: I,
                      setOpacity: r,
                      opacity: n,
                      gotoRoot: function () {
                        z("")
                      },
                      triggerAuthUpdate: y,
                      logout: E
                    })
                  )
              ),
              i.createElement(p.Z, {
                hideBottomBar: v,
                opacity: n,
                activeLink: t
              }),
              i.createElement(m.Z, { triggerAuthUpdate: y })
            )
          }
          r()
        } catch (v) {
          r(v)
        }
      })
    },
    72483: function (e, t, n) {
      n.d(t, {
        T: function () {
          return i
        }
      })
      var r = n(87462),
        a = n(67294),
        o = n(49162),
        i = function (e) {
          return a.createElement(
            o.Z,
            (0, r.Z)(
              {
                src: "/logo-horizontal-".concat("light", ".png"),
                alt: "Content Fly logo"
              },
              e
            )
          )
        }
    },
    46829: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return d
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(11972),
        c = n(64737),
        l = n(41664),
        u = n.n(l),
        s = n(49162),
        p = ["icon", "imageSrc", "isActive", "href"],
        d = function (e) {
          var t = e.icon,
            n = e.imageSrc,
            l = e.isActive,
            d = e.href,
            m = (0, a.Z)(e, p),
            f = null !== d && void 0 !== d ? d : "",
            h = "/" == f ? "" : "".concat(f, ".html")
          return o.createElement(
            u(),
            { href: f, as: h, passHref: !0 },
            o.createElement(
              i.rU,
              (0, r.Z)(
                {
                  display: "block",
                  borderRadius: "md",
                  transition: "all 0.3s",
                  userSelect: "none",
                  "aria-current": l ? "page" : void 0
                },
                m
              ),
              o.createElement(
                i.M5,
                {
                  w: "45px",
                  h: "45px",
                  borderRadius: "4px",
                  background: "white",
                  boxShadow: "md"
                },
                t &&
                  o.createElement(c.JO, {
                    as: t,
                    boxSize: "20px",
                    color: l ? "purple" : "mobile_menu_gray",
                    _hover: { color: "purple" }
                  }),
                n &&
                  o.createElement(s.Z, {
                    width: "45px",
                    height: "45px",
                    borderRadius: "4px",
                    src: n,
                    alt: "Profile Photo"
                  })
              )
            )
          )
        }
    },
    24832: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            s: function () {
              return h
            }
          })
          var a = n(67294),
            o = n(11972),
            i = n(51815),
            c = n(25527),
            l = n(53854),
            u = n(72483),
            s = n(28400),
            p = n(10608),
            d = n(72137),
            m = n(65928),
            f = e([s, d])
          ;[s, d] = f.then ? (await f)() : f
          var h = function (e) {
            var t = e.activeLink,
              n = e.opacity,
              r = e.pointerEvents,
              f = e.logout,
              h = e.keyword,
              x = e.setKeyword,
              g = e.identity,
              v = e.triggerAuthUpdate,
              b = e.isHideLogo,
              E = (0, p.E)(),
              y = E.isOpen,
              k = E.onClose,
              w = E.onOpen
            return a.createElement(
              o.kC,
              {
                align: "center",
                justify: "center",
                pt: b ? "0px" : "10px",
                pb: "10px",
                backgroundColor: "white",
                display: { base: "flex", md: "none" }
              },
              !b &&
                a.createElement(
                  m.D,
                  { page: "/" },
                  a.createElement(u.T, {
                    w: { base: "150px", md: "180px" },
                    opacity: n
                  })
                ),
              null != f &&
                a.createElement(d.Z, {
                  display: { base: "block", md: "none" },
                  position: "absolute",
                  right: "52px",
                  top: b ? "16px" : "2px",
                  identity: g
                }),
              a.createElement(i.hU, {
                onClick: w,
                variant: "unstyled",
                cursor: "pointer",
                "aria-label": "Menu",
                opacity: n,
                position: "absolute",
                right: "0px",
                top: b ? "14px" : "0px",
                icon: a.createElement(l.otZ, {
                  fontSize: "40px",
                  color: "#7F2CC6"
                })
              }),
              a.createElement(
                c.dy,
                {
                  size: "xs",
                  placement: "left",
                  isOpen: y,
                  blockScrollOnMount: !1,
                  onClose: k,
                  autoFocus: !1
                },
                a.createElement(c.P1, null),
                a.createElement(
                  c.sc,
                  {
                    bg: "white",
                    shadow: "none",
                    position: "relative",
                    maxW: "64"
                  },
                  a.createElement(s.Z, {
                    width: "full",
                    height: "full",
                    border: "0",
                    opacity: n,
                    pointerEvents: r,
                    logout: f,
                    activeLink: t,
                    keyword: h,
                    setKeyword: x,
                    identity: g,
                    triggerAuthUpdate: v
                  }),
                  a.createElement(c.cC, {
                    bg: "purple",
                    _hover: { bg: "purple_2" },
                    _active: { bg: "purple_3" },
                    rounded: "0",
                    position: "absolute",
                    color: "white",
                    right: "-8",
                    top: "0"
                  })
                )
              )
            )
          }
          r()
        } catch (x) {
          r(x)
        }
      })
    },
    12294: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          var a = n(67294),
            o = n(11972),
            i = n(46829),
            c = n(15658),
            l = n(76989),
            u = n(50828),
            s = n(98400),
            p = n(23256),
            d = n(31681),
            m = n(8193),
            f = e([l])
          l = (f.then ? (await f)() : f)[0]
          ;(t.Z = (0, u.Pi)(function (e) {
            var t = e.activeLink,
              n = e.hideBottomBar,
              r = e.opacity,
              u = n ? "none" : "flex",
              f = (0, s.oR)(p.Z).user,
              h = d.Az.Home,
              x = d.Az.BrowseCreators,
              g = d.Az.AllJobs,
              v = d.Az.MyJobs,
              b = d.Az.UserProfile,
              E = (0, l.RL)(f.profileImageId)
            return a.createElement(
              o.Ug,
              {
                overflow: "visible",
                position: "fixed",
                bottom: "0px",
                width: "100%",
                opacity: r,
                background: "gradient.purple.2",
                h: "68px",
                spacing: "24px",
                align: "center",
                justifyContent: "space-around",
                zIndex: 2,
                display: { base: u, md: "none" }
              },
              a.createElement(i.Y, {
                icon: m.iqr,
                href: "/",
                isActive: t == h
              }),
              a.createElement(i.Y, {
                icon: c.Gc,
                href: "/creators",
                isActive: t == x
              }),
              a.createElement(i.Y, {
                icon: c.sm,
                href: "/alljobs",
                isActive: t == g
              }),
              a.createElement(i.Y, {
                icon: c.Do,
                href: "/myjobs",
                isActive: t == v
              }),
              null != E &&
                a.createElement(i.Y, {
                  imageSrc: E,
                  href: "/profile",
                  isActive: t == b
                })
            )
          })),
            r()
        } catch (h) {
          r(h)
        }
      })
    },
    23003: function (e, t, n) {
      n.d(t, {
        O: function () {
          return d
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(11972),
        i = n(64737),
        c = n(67294),
        l = n(41664),
        u = n.n(l),
        s = ["icon", "isActive", "label", "href"],
        p = "white",
        d = function (e) {
          var t = e.icon,
            n = e.isActive,
            l = e.label,
            d = e.href,
            m = (0, a.Z)(e, s),
            f = null !== d && void 0 !== d ? d : "",
            h = "/" == f ? "" : "".concat(f, ".html")
          return c.createElement(
            u(),
            { href: f, as: h, passHref: !0 },
            c.createElement(
              o.rU,
              (0, r.Z)(
                {
                  display: "block",
                  py: "2",
                  px: "0",
                  borderRadius: "md",
                  transition: "all 0.3s",
                  fontWeight: "medium",
                  fontSize: "13px",
                  userSelect: "none",
                  "aria-current": n ? "page" : void 0,
                  color: "black",
                  _hover: { fontWeight: "semibold" },
                  _activeLink: { fontWeight: "semibold" }
                },
                m
              ),
              c.createElement(
                o.Ug,
                { spacing: "7px" },
                c.createElement(
                  o.M5,
                  {
                    w: "27px",
                    h: "27px",
                    borderRadius: "3px",
                    background: n ? "gradient.purple.1" : p
                  },
                  c.createElement(i.JO, {
                    as: t,
                    boxSize: "13px",
                    color: n ? p : "purple"
                  })
                ),
                c.createElement(o.xv, { as: "span" }, l)
              )
            )
          )
        }
    },
    74213: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i
        }
      })
      var r = n(87462),
        a = n(67294),
        o = n(11972),
        i = function (e) {
          return a.createElement(
            o.xu,
            (0, r.Z)(
              {
                height: "38px",
                background: "purple_light",
                opacity: "0.75",
                width: "180px",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: "medium",
                lineHeight: "49px",
                color: "#FFF",
                transform: "rotate(-45deg)",
                position: "absolute",
                top: "-5px",
                left: "-76px"
              },
              e
            ),
            e.children
          )
        }
    },
    67197: function (e, t, n) {
      n.d(t, {
        U: function () {
          return p
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(84597),
        c = n(51815),
        l = n(59876),
        u = n(63750),
        s = ["keyword", "setKeyword"],
        p = function (e) {
          var t = e.keyword,
            n = e.setKeyword,
            p = (0, a.Z)(e, s)
          return o.createElement(
            i.BZ,
            (0, r.Z)({ size: "md", maxWidth: "170px" }, p),
            o.createElement(
              i.Z8,
              { pointerEvents: "none" },
              o.createElement(u.dVI, { opacity: 0.5 })
            ),
            o.createElement(i.II, {
              rounded: "md",
              placeholder: "Search",
              fontSize: "13px",
              fontWeight: "medium",
              bg: "white",
              value: t,
              onChange: function (e) {
                var t = e.target.value
                n(t)
              },
              _placeholder: { opacity: 1, color: "black" }
            }),
            o.createElement(
              i.xH,
              { width: "2.2rem" },
              o.createElement(c.hU, {
                h: "1.75rem",
                size: "sm",
                onClick: function () {
                  n("")
                },
                variant: "unstyled",
                icon: o.createElement(l.Db, null)
              })
            )
          )
        }
    },
    28400: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          var a = n(45987),
            o = n(87462),
            i = n(67294),
            c = n(51815),
            l = n(11972),
            u = n(11163),
            s = n(72483),
            p = n(15658),
            d = n(50828),
            m = n(98400),
            f = n(23256),
            h = n(23003),
            x = n(67197),
            g = n(29060),
            v = n(58094),
            b = n(31681),
            E = n(70216),
            y = n(8193),
            k = e([g])
          g = (k.then ? (await k)() : k)[0]
          var w = [
              "activeLink",
              "logout",
              "triggerAuthUpdate",
              "keyword",
              "setKeyword",
              "identity"
            ],
            Z = function (e) {
              return i.createElement(
                c.zx,
                (0, o.Z)(
                  {
                    variant: "outline",
                    colorScheme: "purple",
                    fontWeight: "medium",
                    fontSize: "13px",
                    color: "black",
                    w: "169px",
                    h: "37px",
                    borderRadius: "7px",
                    borderColor: "purple",
                    iconSpacing: "6px"
                  },
                  e
                ),
                e.children
              )
            }
          ;(t.Z = (0, d.Pi)(function (e) {
            var t = e.activeLink,
              n = e.logout,
              r = e.triggerAuthUpdate,
              c = e.keyword,
              d = e.setKeyword,
              k = e.identity,
              C = (0, a.Z)(e, w),
              S = (0, u.useRouter)(),
              I = (0, m.oR)(f.Z).user,
              z = b.Az.Home,
              A = b.Az.BrowseCreators,
              R = b.Az.AllJobs,
              _ = b.Az.MyJobs
            return i.createElement(
              l.kC,
              (0, o.Z)(
                {
                  backgroundImage: "sidebar-background.png",
                  backgroundSize: "cover",
                  direction: "column",
                  borderRightWidth: "0px"
                },
                C
              ),
              i.createElement(
                l.kC,
                {
                  direction: "column",
                  flex: "1",
                  pt: "7",
                  pb: "4",
                  overflowY: "auto",
                  px: "41px"
                },
                i.createElement(
                  l.xu,
                  { px: "0", pt: "4" },
                  i.createElement(
                    E.Z,
                    { href: "https://contentfly.app" },
                    i.createElement(s.T, { h: "7" })
                  )
                ),
                i.createElement(
                  l.xu,
                  { mb: "2", pt: "29px", pb: "13px" },
                  i.createElement(x.U, { keyword: c, setKeyword: d })
                ),
                i.createElement(
                  l.Kq,
                  {
                    spacing: "6",
                    as: "nav",
                    "aria-label": "Sidebar Navigation"
                  },
                  i.createElement(
                    l.Kq,
                    { spacing: "1" },
                    i.createElement(h.O, {
                      isActive: t == z,
                      label: "Home",
                      href: "/",
                      icon: y.iqr
                    }),
                    i.createElement(h.O, {
                      isActive: t == A,
                      label: "Browse Creators",
                      href: "/creators",
                      icon: p.Gc
                    }),
                    i.createElement(h.O, {
                      isActive: t == R,
                      label: "Browse Jobs",
                      href: "/alljobs",
                      icon: p.sm
                    }),
                    i.createElement(h.O, {
                      isActive: t == _,
                      label: "My Jobs",
                      href: "/myjobs",
                      icon: p.Do
                    })
                  ),
                  i.createElement(l.iz, {
                    backgroundColor: "purple_light",
                    position: "relative",
                    h: "1px"
                  })
                ),
                i.createElement(l.LZ, null),
                i.createElement(
                  l.Kq,
                  {
                    spacing: { base: "16px", md: "32px" },
                    pb: { base: "8px", md: "32px" }
                  },
                  i.createElement(
                    Z,
                    {
                      leftIcon: i.createElement(p.hS, { color: "purple" }),
                      onClick: function () {
                        S.push("/helpcenter", "/helpcenter.html")
                      }
                    },
                    "Help Center"
                  ),
                  i.createElement(
                    v.f,
                    {
                      display: { base: "flex", md: "none" },
                      _hover: { fontWeight: "" },
                      logout: n,
                      triggerAuthUpdate: r
                    },
                    "Logout"
                  )
                )
              ),
              k &&
                i.createElement(g.Z, {
                  display: { base: "none", md: "flex" },
                  name: I.fullName(),
                  imageId: I.profileImageId,
                  username: I.username ? "@" + I.username : ""
                })
            )
          })),
            r()
        } catch (C) {
          r(C)
        }
      })
    },
    96217: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            d: function () {
              return d
            }
          })
          var a = n(87462),
            o = n(45987),
            i = n(67294),
            c = n(11972),
            l = n(58094),
            u = n(72137),
            s = e([u])
          u = (s.then ? (await s)() : s)[0]
          var p = ["logout", "triggerAuthUpdate", "opacity", "identity"],
            d = function (e) {
              var t = e.logout,
                n = e.triggerAuthUpdate,
                r = e.opacity,
                s = e.identity,
                d = (0, o.Z)(e, p)
              return i.createElement(
                c.M5,
                (0, a.Z)(
                  {
                    mr: { base: "8px", md: "0px" },
                    mt: { base: "-10px", md: null == t ? "4px" : "0px" },
                    opacity: r
                  },
                  d
                ),
                null != t &&
                  i.createElement(u.Z, {
                    display: { base: "none", md: "block" },
                    identity: s,
                    mt: "0px"
                  }),
                i.createElement(
                  l.f,
                  {
                    logout: t,
                    triggerAuthUpdate: n,
                    display: { base: "none", sm: "none", md: "flex" }
                  },
                  "Logout"
                )
              )
            }
          r()
        } catch (m) {
          r(m)
        }
      })
    },
    29060: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          var a = n(67294),
            o = n(11972),
            i = n(25927),
            c = n(64737),
            l = n(41664),
            u = n.n(l),
            s = n(89583),
            p = n(76989),
            d = e([p])
          p = (d.then ? (await d)() : d)[0]
          ;(t.Z = function (e) {
            var t = e.display,
              n = e.name,
              r = e.imageId,
              l = e.username,
              d = (0, p.RL)(r)
            return a.createElement(
              o.fG,
              null,
              a.createElement(
                o.M5,
                {
                  h: "83px",
                  flexShrink: 0,
                  backgroundSize: "cover",
                  backgroundImage: "userprofile-background.png",
                  display: t
                },
                a.createElement(
                  o.Ug,
                  null,
                  a.createElement(i.qE, {
                    w: "52px",
                    name: n,
                    src: d,
                    left: "-10px"
                  }),
                  a.createElement(
                    o.kC,
                    { direction: "column" },
                    a.createElement(
                      u(),
                      { href: "/profile", as: "/profile.html", passHref: !0 },
                      a.createElement(
                        o.AB,
                        null,
                        a.createElement(
                          o.xv,
                          {
                            fontSize: "13px",
                            fontWeight: "semibold",
                            color: "white"
                          },
                          n,
                          "" != n &&
                            a.createElement(c.JO, {
                              as: s.Dli,
                              w: "6px",
                              color: "white",
                              ml: "5px",
                              mb: "-2px"
                            })
                        ),
                        a.createElement(
                          o.xv,
                          {
                            fontSize: "11px",
                            fontWeight: "light",
                            color: "white"
                          },
                          l
                        )
                      )
                    )
                  )
                )
              )
            )
          }),
            r()
        } catch (m) {
          r(m)
        }
      })
    },
    10608: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i
        }
      })
      var r = n(67294),
        a = n(88523),
        o = n(20608),
        i = function () {
          var e = (0, a.qY)(),
            t = e.isOpen,
            n = e.onClose,
            i = e.onOpen,
            c = (0, o.Sx)({ base: !0, lg: !1 })
          return (
            r.useEffect(
              function () {
                0 == c && n()
              },
              [c, n]
            ),
            { isOpen: t, onClose: n, onOpen: i }
          )
        }
    },
    9464: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            z: function () {
              return x
            }
          })
          var a = n(67294),
            o = n(11972),
            i = n(20608),
            c = n(51815),
            l = n(84436),
            u = n(66274),
            s = n(98400),
            p = n(23256),
            d = n(11163),
            m = n(76989),
            f = n(31681),
            h = e([m])
          m = (h.then ? (await h)() : h)[0]
          var x = function (e) {
            var t = e.notify,
              n = (0, s.oR)(p.Z),
              r = n.appContext,
              h = n.user.id,
              x = (0, d.useRouter)(),
              g = function () {
                r.markRead(h, t.id())
              }
            return a.createElement(
              o.kC,
              {
                direction: "row-reverse",
                position: "absolute",
                top: "5px",
                right: { base: "4px", md: "7px" },
                borderRadius: "lg",
                backgroundColor: "purple_background",
                zIndex: "10000",
                width: { base: "calc(100vw - 8px)", sm: "md" }
              },
              a.createElement(
                o.xu,
                {
                  width: { base: "full", sm: "md" },
                  boxShadow: "dark-lg",
                  borderRadius: "lg"
                },
                a.createElement(
                  o.Ug,
                  { divider: a.createElement(o.cX, null), spacing: "0" },
                  a.createElement(
                    o.Ug,
                    { spacing: "4", p: "4", flex: "1" },
                    (0, i.Sx)({ base: !1, sm: !0 }) &&
                      a.createElement(l.M, {
                        thumbImageId: t.fromUserThumbnailId(),
                        isRead: !0,
                        name: t.fromUserCallname(),
                        useImageObject: (function (e) {
                          var t = e.fromUserRoleInTarget()
                          return null == t || t == f.EJ.UserRole.buyer
                            ? m.RL
                            : m.RC
                        })(t)
                      }),
                    a.createElement(
                      o.xu,
                      null,
                      a.createElement(
                        o.xv,
                        { fontWeight: "medium", fontSize: "sm" },
                        t.fromUserCallname()
                      ),
                      a.createElement(u.X, null, t.message())
                    )
                  ),
                  a.createElement(
                    o.gC,
                    {
                      minW: "24",
                      divider: a.createElement(o.cX, null),
                      spacing: "3"
                    },
                    a.createElement(
                      c.zx,
                      {
                        variant: "link",
                        fontSize: "16px",
                        color: "purple_2",
                        onClick: function () {
                          g()
                          var e = t.targetURL(),
                            n = e.url,
                            r = e.alias
                          n && r && x.push(n, r)
                        },
                        pt: "10px"
                      },
                      "Open"
                    ),
                    a.createElement(
                      c.zx,
                      {
                        variant: "link",
                        fontSize: "15px",
                        color: "black",
                        onClick: function () {
                          g()
                        },
                        pb: "10px"
                      },
                      "Close"
                    )
                  )
                )
              )
            )
          }
          r()
        } catch (g) {
          r(g)
        }
      })
    },
    84436: function (e, t, n) {
      n.d(t, {
        M: function () {
          return o
        }
      })
      var r = n(67294),
        a = n(25927),
        o = function (e) {
          var t = e.thumbImageId,
            n = e.isRead,
            o = e.name,
            i = (0, e.useImageObject)(t)
          return r.createElement(
            a.qE,
            { src: i, boxSize: "10", name: o },
            !n &&
              r.createElement(a.MX, {
                borderColor: "papayawhip",
                bg: "red_1",
                boxSize: "1em"
              })
          )
        }
    },
    72137: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          var a = n(45987),
            o = n(67294),
            i = n(50828),
            c = n(88523),
            l = n(11972),
            u = n(51815),
            s = n(91204),
            p = n(15658),
            d = n(59513),
            m = n(33224),
            f = n(56761),
            h = n(31681),
            x = n(98400),
            g = n(23256),
            v = n(89069),
            b = n(9464),
            E = e([b])
          b = (E.then ? (await E)() : E)[0]
          var y = ["identity"],
            k = (0, o.lazy)(function () {
              return Promise.all([n.e(1141), n.e(5280), n.e(3475)]).then(
                n.bind(n, 13475)
              )
            })
          ;(t.Z = (0, i.Pi)(function (e) {
            var t,
              n = e.identity,
              r = (0, a.Z)(e, y),
              i = (0, c.qY)(),
              E = i.isOpen,
              w = i.onOpen,
              Z = i.onClose,
              C = (0, x.oR)(g.Z),
              S = C.appContext,
              I = C.user.id,
              z = (0, f.z)(
                1,
                h.dY.NewNotificationCheckInterval
              ).pagedNotifications,
              A =
                null === z ||
                void 0 === z ||
                null === (t = z.flat()) ||
                void 0 === t
                  ? void 0
                  : t[0],
              R = null != A && !A.isRead(S),
              _ = S.hasUnread(I),
              U = S.emailNotificationState,
              P = (0, v.v)(n, U),
              W = function () {
                w()
              }
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(
                l.xu,
                r,
                o.createElement(
                  d.O,
                  {
                    display: { base: "none", md: "inline-flex" },
                    mr: "4px",
                    fontSize: { base: 0, xl: "13px", "2xl": "13px" },
                    iconSpacing: { base: 0, md: "14px" },
                    leftIcon: o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(p.J$, {
                        color: P ? "transparent" : "orange_1",
                        position: "relative",
                        top: "0px",
                        right: "-28px",
                        boxSize: "4"
                      }),
                      o.createElement(p.J$, {
                        color: _ ? "red" : "transparent",
                        position: "relative",
                        top: "0px",
                        right: "-30px",
                        boxSize: 4
                      }),
                      o.createElement(p.sh, { boxSize: "26px", color: "black" })
                    ),
                    onClick: W
                  },
                  "Notifications"
                ),
                o.createElement(
                  l.Ug,
                  { display: { base: "flex", md: "none" }, onClick: W },
                  o.createElement(p.J$, {
                    color: P ? "transparent" : "orange_1",
                    position: "relative",
                    top: "-4px",
                    right: "-52px",
                    boxSize: 4,
                    zIndex: "10",
                    _hover: { cursor: "pointer" }
                  }),
                  o.createElement(p.J$, {
                    color: _ ? "red" : "transparent",
                    position: "relative",
                    top: "-4px",
                    right: "-44px",
                    boxSize: 4,
                    zIndex: "10",
                    _hover: { cursor: "pointer" }
                  }),
                  o.createElement(u.hU, {
                    variant: "ghost",
                    icon: o.createElement(p.sh, {
                      boxSize: "26px",
                      color: "black"
                    })
                  })
                )
              ),
              E &&
                o.createElement(
                  o.Suspense,
                  { fallback: o.createElement(m.j, null) },
                  o.createElement(k, { isOpen: E, onClose: Z, identity: n })
                ),
              R &&
                o.createElement(
                  s.Mi,
                  {
                    direction: "right",
                    in: R,
                    style: { zIndex: 10, overflow: "scroll" }
                  },
                  o.createElement(b.z, { notify: A })
                )
            )
          })),
            r()
        } catch (w) {
          r(w)
        }
      })
    },
    89069: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m
        }
      })
      var r = n(15861),
        a = n(86854),
        o = n(87757),
        i = n.n(o),
        c = n(67294),
        l = n(98400),
        u = n(23256),
        s = n(81677),
        p = n(24686),
        d = n(66985),
        m = function (e, t) {
          var n = (0, l.oR)(u.Z).appContext,
            o = s.Tr.NonVerified,
            m = s.Tr.Verified,
            f = s.Tr.Unknown,
            h = (0, c.useState)(t == m),
            x = (0, a.Z)(h, 2),
            g = x[0],
            v = x[1]
          return (
            (0, c.useEffect)(
              function () {
                var a = (function () {
                  var t = (0, r.Z)(
                    i().mark(function t() {
                      var r, a, c
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (t.next = 3),
                                  (0, p.makeUserProfileActor)(e)
                                )
                              case 3:
                                return (
                                  (r = t.sent),
                                  (t.next = 6),
                                  r.isEmailVerified(n.candidAuthProvider())
                                )
                              case 6:
                                if (!(a = t.sent).ok) {
                                  t.next = 13
                                  break
                                }
                                ;(c = a.ok.isEmailVerified),
                                  v(c),
                                  n.updateEmailNotificationState(c ? m : o),
                                  (t.next = 16)
                                break
                              case 13:
                                if (!a.err) {
                                  t.next = 16
                                  break
                                }
                                throw (d.default.error(a.err), new Error(a.err))
                              case 16:
                                t.next = 21
                                break
                              case 18:
                                ;(t.prev = 18),
                                  (t.t0 = t.catch(0)),
                                  d.default.error(t.t0)
                              case 21:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[0, 18]]
                      )
                    })
                  )
                  return function () {
                    return t.apply(this, arguments)
                  }
                })()
                t == f ? a() : v(t == m)
              },
              [t]
            ),
            g
          )
        }
    },
    56761: function (e, t, n) {
      n.d(t, {
        z: function () {
          return Z
        }
      })
      var r = n(15861),
        a = n(86854),
        o = n(87757),
        i = n.n(o),
        c = n(67294),
        l = n(44593),
        u = n(11163),
        s = n(98400),
        p = n(23256),
        d = n(31681),
        m = n(24686),
        f = n(43144),
        h = n(15671),
        x = n(4942),
        g = n(63372),
        v = n.n(g),
        b = n(30381),
        E = n.n(b),
        y = n(5508),
        k = (0, f.Z)(function e(t) {
          var n = this
          ;(0, h.Z)(this, e),
            (0, x.Z)(this, "id", function () {
              return n.candidModel.id
            }),
            (0, x.Z)(this, "fromUserCallname", function () {
              return (0, y._b)(n.candidModel.fromUserCallname)
            }),
            (0, x.Z)(this, "fromUserId", function () {
              return (0, y._b)(n.candidModel.fromUserId)
            }),
            (0, x.Z)(this, "fromUserThumbnailId", function () {
              return (0, y._b)(n.candidModel.fromUserThumbnailId)
            }),
            (0, x.Z)(this, "recipientUserId", function () {
              return n.candidModel.recipientUserId
            }),
            (0, x.Z)(this, "message", function () {
              var e = n.topic()
              if (null == e) return ""
              switch (e) {
                case "newChatMessage":
                  return n.candidModel.message
                case "inviteCreatorToJob":
                  var t,
                    r =
                      null === (t = n.target()) || void 0 === t ? void 0 : t.job
                  return null == r || null == r.name
                    ? ""
                    : 'I would like to invite you to pitch on my job "'.concat(
                        r.name,
                        '".'
                      )
                case "jobAwarded":
                  var a,
                    o =
                      null === (a = n.target()) || void 0 === a ? void 0 : a.job
                  if (null == o || null == o.name) return ""
                  var i = n.fromUserCallname()
                  return "Congratulations! "
                    .concat(
                      i,
                      " has selected you as their creator to undertake the job "
                    )
                    .concat(o.name, ".")
                case "jobFirstDue":
                  var c,
                    l =
                      null === (c = n.target()) || void 0 === c ? void 0 : c.job
                  if (null == l || null == l.name) return ""
                  var u = n.fromUserCallname()
                  return "Your job "
                    .concat(
                      l.name,
                      " is due for completion in 2 days. Please submit your deliverable file for "
                    )
                    .concat(u, " to review.")
                case "jobPendingApproval":
                  var s,
                    p =
                      null === (s = n.target()) || void 0 === s ? void 0 : s.job
                  if (null == p || null == p.name) return ""
                  var d = n.fromUserCallname()
                  return "Deliverable file from "
                    .concat(d, " in job ")
                    .concat(p.name, " is ready for your review.")
                case "jobApproved":
                  var m,
                    f =
                      null === (m = n.target()) || void 0 === m ? void 0 : m.job
                  if (null == f || null == f.name) return ""
                  var h = n.fromUserCallname()
                  return "Congratulations! "
                    .concat(
                      h,
                      " has approved your deliverable file on the job: "
                    )
                    .concat(f.name, ".")
                case "jobChangesRequested":
                  var x,
                    g =
                      null === (x = n.target()) || void 0 === x ? void 0 : x.job
                  if (null == g || null == g.name) return ""
                  var v = n.fromUserCallname()
                  return ""
                    .concat(
                      v,
                      " has requested changes to your deliverable in job "
                    )
                    .concat(g.name, ".")
                default:
                  return ""
              }
            }),
            (0, x.Z)(this, "topic", function () {
              var e = Object.keys(n.candidModel.topic)
              return null == e || 0 == e.length ? null : e[0]
            }),
            (0, x.Z)(this, "target", function () {
              var e
              return null !== (e = n.candidModel.target) && void 0 !== e
                ? e
                : null
            }),
            (0, x.Z)(this, "jobUrlAndAlias", function (e, t, r) {
              var a = n.target().job.id
              if (null != a) {
                var o = "id=".concat(a)
                return (
                  null != t && (o += "&tab=".concat(t)),
                  null != r && (o += "&chatuserid=".concat(r)),
                  {
                    url: "/".concat(e, "?").concat(o),
                    alias: "/".concat(e, ".html?").concat(o)
                  }
                )
              }
              return {}
            }),
            (0, x.Z)(this, "targetURL", function () {
              switch (n.topic()) {
                case "newChatMessage":
                  return n.jobUrlAndAlias("myjobs", d.IJ.Chat, n.fromUserId())
                case "jobAwarded":
                case "jobFirstDue":
                case "jobPendingApproval":
                case "jobApproved":
                  return n.jobUrlAndAlias("myjobs", d.IJ.Handover)
                case "jobChangesRequested":
                  return n.jobUrlAndAlias("myjobs", d.IJ.Chat)
                case "inviteCreatorToJob":
                  return n.jobUrlAndAlias("alljobs", d.IJ.Brief)
                default:
                  return {}
              }
            }),
            (0, x.Z)(this, "fromUserRoleInTarget", function () {
              switch (n.topic()) {
                case "jobAwarded":
                case "jobFirstDue":
                case "jobPendingApproval":
                case "jobApproved":
                case "jobChangesRequested":
                case "newChatMessage":
                  var e = n.target().job.fromUserRole
                  if (null == e) return null
                  var t = (0, y._b)(e)
                  return null == t ? null : (0, y.wI)(t)
                default:
                  return null
              }
            }),
            (0, x.Z)(this, "isCurrentlyActive", function (e, t, r) {
              return (
                "newChatMessage" === n.topic() &&
                n.target().job.id == t &&
                n.fromUserId() == r
              )
            }),
            (0, x.Z)(this, "createdAtHumanText", function () {
              var e = n.createdAt()
              return v()(e)
            }),
            (0, x.Z)(this, "createdAt", function () {
              var e = Number(n.candidModel.createdAt / 1000000n)
              return E().utc(e).local().toDate()
            }),
            (0, x.Z)(this, "isRead", function (e) {
              var t = e.getNotification(n.recipientUserId(), n.id()),
                r = e.lastNotificationReadDate
              return (
                (null === t || void 0 === t ? void 0 : t.isRead) ||
                n.createdAt() <= r
              )
            }),
            (0, x.Z)(this, "markRead", function (e) {
              e.markRead(n.recipientUserId(), n.id())
            }),
            (this.candidModel = t)
        }),
        w = n(66985),
        Z = function (e, t) {
          var n,
            o,
            f = (0, c.useState)(!1),
            h = (0, a.Z)(f, 2),
            x = h[0],
            g = h[1],
            v = (0, s.oR)(p.Z),
            b = v.user,
            E = v.appContext,
            y = (0, u.useRouter)(),
            Z = d.dY.FetcherKeySeparator,
            C = (function () {
              var t = (0, r.Z)(
                i().mark(function t(n) {
                  var r, a, o, c, l, u, s, p, d
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (3 == (r = n.split(Z)).length && !b.isGuest()) {
                              t.next = 3
                              break
                            }
                            return t.abrupt("return", [])
                          case 3:
                            return (
                              (a = Number(r[2])),
                              (t.prev = 4),
                              g(!0),
                              (t.next = 8),
                              (0, m.makeNotificationActor)()
                            )
                          case 8:
                            return (
                              (o = t.sent),
                              (t.next = 11),
                              o.loadMyNotifications(b.id, a, e)
                            )
                          case 11:
                            return (
                              (c = t.sent),
                              (l = c.map(function (e) {
                                return new k(e)
                              })),
                              (u = y.pathname),
                              (s = y.query),
                              (p = s.id),
                              (d = s.chatuserid),
                              E.markNotificationsIfNotSet(b.id, l, u, p, d),
                              t.abrupt("return", l)
                            )
                          case 19:
                            return (
                              (t.prev = 19),
                              (t.t0 = t.catch(4)),
                              w.default.error(t.t0),
                              t.abrupt("return", [])
                            )
                          case 23:
                            return (t.prev = 23), g(!1), t.finish(23)
                          case 26:
                          case "end":
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[4, 19, 23, 26]]
                  )
                })
              )
              return function (e) {
                return t.apply(this, arguments)
              }
            })(),
            S = { refreshInterval: t, errorRetryCount: 3 },
            I = (0, l.ZP)(
              function (t) {
                return "notifications".concat(Z).concat(e).concat(Z).concat(t)
              },
              C,
              S
            ),
            z = I.data,
            A = I.error,
            R = I.mutate,
            _ = I.size,
            U = I.setSize
          return {
            pagedNotifications: z,
            isLoading: x || (!A && !z),
            isReachingEnd:
              0 ===
                (null === z ||
                void 0 === z ||
                null === (n = z[0]) ||
                void 0 === n
                  ? void 0
                  : n.length) ||
              (z &&
                (null === (o = z[z.length - 1]) || void 0 === o
                  ? void 0
                  : o.length) < e),
            mutate: R,
            size: _,
            setSize: U,
            error: A
          }
        }
    },
    13869: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CardContent: function () {
            return i
          }
        })
      var r = n(87462),
        a = n(11972),
        o = n(67294),
        i = function (e) {
          return o.createElement(
            a.xu,
            (0, r.Z)(
              { textAlign: { base: "center", sm: "center" }, pt: "2" },
              e
            )
          )
        }
    },
    3465: function (e, t, n) {
      n.d(t, {
        r: function () {
          return l
        }
      })
      var r = n(45987),
        a = n(67294),
        o = n(11972),
        i = n(16830),
        c = ["creatorTypes"],
        l = function (e) {
          var t = e.creatorTypes,
            n = (0, r.Z)(e, c)
          return a.createElement(
            o.xu,
            n,
            t.map(function (e) {
              var t = e.name,
                n = i.zM[t],
                r = (0, i.IO)(e.skills, t).join(", ")
              return a.createElement(
                o.xu,
                { key: t },
                a.createElement(
                  o.xv,
                  {
                    as: "span",
                    color: "purple_3",
                    fontSize: "15px",
                    fontWeight: "semibold"
                  },
                  n
                ),
                a.createElement(
                  o.xv,
                  {
                    as: "span",
                    color: "purple_3",
                    fontSize: "15px",
                    fontWeight: "normal"
                  },
                  " ",
                  "- ",
                  r
                )
              )
            })
          )
        }
    },
    3459: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            X: function () {
              return u
            }
          })
          var a = n(67294),
            o = n(11972),
            i = n(76989),
            c = n(49162),
            l = e([i])
          i = (l.then ? (await l)() : l)[0]
          var u = function (e) {
            var t = e.tagline,
              n = e.bio,
              r = e.featuredImageId,
              l = (0, i.RC)(r)
            return a.createElement(
              o.kC,
              {
                w: "100%",
                direction: "row",
                wrap: "wrap-reverse",
                mb: "50px",
                pt: "25px"
              },
              a.createElement(
                o.xu,
                { width: { base: "100%", md: "50%", lg: "50%" } },
                a.createElement(
                  o.Kq,
                  { direction: "row", h: "full" },
                  a.createElement(
                    o.Kq,
                    { direction: "column" },
                    a.createElement(
                      o.xv,
                      {
                        mt: "16px",
                        mb: "16px",
                        fontWeight: "medium",
                        fontSize: "14px",
                        color: "black"
                      },
                      t
                    ),
                    a.createElement(
                      o.X6,
                      {
                        fontWeight: "semibold",
                        fontSize: "18px",
                        color: "black_2",
                        mb: "5px"
                      },
                      "Biography"
                    ),
                    a.createElement(
                      o.xv,
                      {
                        as: "div",
                        fontWeight: "medium",
                        fontSize: "13px",
                        color: "gray_light2",
                        whiteSpace: "pre-line"
                      },
                      n
                    )
                  ),
                  a.createElement(o.xu, {
                    w: { base: "0px", lg: "1px" },
                    h: "110%",
                    backgroundColor: "gray_light"
                  })
                )
              ),
              l &&
                a.createElement(
                  o.M5,
                  { h: "300px", width: { base: "100%", md: "50%", lg: "50%" } },
                  a.createElement(c.Z, {
                    boxShadow: "xl",
                    borderRadius: "lg",
                    borderWidth: "1px",
                    src: l,
                    alt: "Featured Image",
                    width: { base: "100%", sm: "100%", md: "90%" },
                    height: { base: "100%", sm: "100%", md: "90%" },
                    maxW: { base: "unset", md: "450px" },
                    mt: "6px",
                    mb: "6px"
                  })
                )
            )
          }
          r()
        } catch (s) {
          r(s)
        }
      })
    },
    6750: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            r: function () {
              return u
            }
          })
          var a = n(86854),
            o = n(67294),
            i = n(11972),
            c = n(54806),
            l = e([c])
          c = (l.then ? (await l)() : l)[0]
          var u = function (e) {
            var t = e.images,
              n = (0, o.useState)(!1),
              r = (0, a.Z)(n, 2),
              l = r[0],
              u = r[1]
            return o.createElement(
              i.MI,
              {
                minChildWidth: { base: "138px", sm: "180px", md: "230px" },
                spacing: { base: "10px", sm: "20px" },
                width: "100%",
                h: "100%",
                my: { base: "25px", md: "30px" }
              },
              t.map(function (e) {
                return o.createElement(c.L, {
                  key: e.imageId,
                  imageItem: e,
                  isFullScreen: l,
                  setFullScreen: u
                })
              })
            )
          }
          r()
        } catch (s) {
          r(s)
        }
      })
    },
    28908: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            W: function () {
              return p
            }
          })
          var a = n(87462),
            o = n(45987),
            i = n(67294),
            c = n(49162),
            l = n(76989),
            u = e([l])
          l = (u.then ? (await u)() : u)[0]
          var s = ["imageId"],
            p = function (e) {
              var t = e.imageId,
                n = (0, o.Z)(e, s),
                r = (0, l.RC)(t)
              return i.createElement(
                c.Z,
                (0, a.Z)(
                  {
                    boxShadow: "sm",
                    borderRadius: "sm",
                    borderWidth: "1px",
                    width: "100%",
                    minHeight: { base: "150px", md: "180px" },
                    src: r,
                    alt: "Gallery Image"
                  },
                  n
                )
              )
            }
          r()
        } catch (d) {
          r(d)
        }
      })
    },
    54806: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            L: function () {
              return m
            }
          })
          var a = n(67294),
            o = n(5152),
            i = n.n(o),
            c = n(88523),
            l = n(11972),
            u = n(28908),
            s = n(76989),
            p = e([u, s])
          ;[u, s] = p.then ? (await p)() : p
          var d = i()(function () {
              return n
                .e(2980)
                .then(n.bind(n, 62980))
                .then(function (e) {
                  return e.ZoomImageModal
                })
            }),
            m = function (e) {
              var t = e.imageItem,
                n = e.isFullScreen,
                r = e.setFullScreen,
                o = (0, s.RC)(t.imageId),
                i = (0, c.qY)(),
                p = i.isOpen,
                m = i.onOpen,
                f = i.onClose
              return a.createElement(
                l.M5,
                null,
                a.createElement(
                  l.xu,
                  {
                    role: "group",
                    p: { base: "0px", sm: "12px" },
                    maxW: { base: "200px", sm: "200px", md: "260px" },
                    w: "full",
                    bg: "white",
                    boxShadow: "sm",
                    rounded: "sm",
                    pos: "relative",
                    zIndex: 1,
                    onClick: m,
                    _hover: { cursor: "pointer" }
                  },
                  a.createElement(
                    l.xu,
                    {
                      rounded: "sm",
                      pos: "relative",
                      _after: {
                        transition: "all .3s ease",
                        content: '""',
                        w: "full",
                        h: "full",
                        pos: "absolute",
                        top: 2,
                        left: 0,
                        backgroundImage: o ? "url(".concat(o, ")") : "",
                        filter: "blur(13px)",
                        zIndex: -1
                      },
                      _groupHover: { _after: { filter: "blur(23px)" } }
                    },
                    a.createElement(u.W, { imageId: t.imageId })
                  ),
                  a.createElement(
                    l.Kq,
                    { pt: "18px", pb: "10px", px: "10px", align: "center" },
                    a.createElement(
                      l.X6,
                      {
                        color: "purple",
                        fontWeight: "medium",
                        fontSize: "15px"
                      },
                      t.title
                    )
                  )
                ),
                p &&
                  a.createElement(d, {
                    isOpen: p,
                    onClose: f,
                    imageItem: t,
                    isFullScreen: n,
                    setFullScreen: r,
                    ImageComponent: u.W
                  })
              )
            }
          r()
        } catch (f) {
          r(f)
        }
      })
    },
    7835: function (e, t, n) {
      n.d(t, {
        l: function () {
          return l
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(67294),
        i = n(11972),
        c = ["hashtags"],
        l = function (e) {
          var t = e.hashtags,
            n = (0, a.Z)(e, c),
            l = t
              .map(function (e) {
                return "#".concat(e)
              })
              .join(" ")
          return o.createElement(
            i.xv,
            (0, r.Z)({ color: "gray_light2", fontSize: "14px" }, n),
            l
          )
        }
    },
    67721: function (e, t, n) {
      n.d(t, {
        N: function () {
          return u
        }
      })
      var r = n(87462),
        a = n(45987),
        o = n(11972),
        i = n(25927),
        c = n(67294),
        l = ["avatarProps", "children"],
        u = function (e) {
          var t = e.avatarProps,
            n = e.children,
            u = (0, a.Z)(e, l)
          return c.createElement(
            o.kC,
            (0, r.Z)(
              {
                position: "relative",
                direction: "column",
                align: { base: "center", sm: "center" },
                maxW: "2xl",
                mx: "auto",
                bg: "purple_background",
                shadow: "sm",
                borderRadius: "20px",
                px: { base: "6", md: "8" },
                mb: "50px"
              },
              u
            ),
            c.createElement(
              i.qE,
              (0, r.Z)(
                {
                  mt: "-10",
                  borderWidth: "6px",
                  borderColor: "white",
                  size: "2xl"
                },
                t
              )
            ),
            n
          )
        }
    },
    16746: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.r(t),
            n.d(t, {
              PortfolioViewerContainer: function () {
                return q
              }
            })
          var a = n(15861),
            o = n(86854),
            i = n(87462),
            c = n(45987),
            l = n(43144),
            u = n(15671),
            s = n(60136),
            p = n(58227),
            d = n(61120),
            m = n(16512),
            f = n(87757),
            h = n.n(f),
            x = n(67294),
            g = n(51815),
            v = n(88523),
            b = n(45607),
            E = n(11972),
            y = n(64737),
            k = n(25527),
            w = n(67721),
            Z = n(13869),
            C = n(3465),
            S = n(7835),
            I = n(3459),
            z = n(6750),
            A = n(42273),
            R = n(76989),
            _ = n(59876),
            U = n(60155),
            P = n(24686),
            W = n(23256),
            L = n(98400),
            M = n(66897),
            O = n(5508),
            j = n(31681),
            T = n(66985),
            B = e([I, z, R])
          ;[I, z, R] = B.then ? (await B)() : B
          var F = ["children"],
            N = ["model", "goBack", "identity"]
          function H(e) {
            var t = Y()
            return function () {
              var n,
                r = (0, d.Z)(e)
              if (t) {
                var a = (0, d.Z)(this).constructor
                n = Reflect.construct(r, arguments, a)
              } else n = r.apply(this, arguments)
              return (0, p.Z)(this, n)
            }
          }
          function Y() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ("function" === typeof Proxy) return !0
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              )
            } catch (e) {
              return !1
            }
          }
          var J = (function (e) {
              ;(0, s.Z)(n, e)
              var t = H(n)
              function n(e, r) {
                var a
                return (
                  (0, u.Z)(this, n),
                  ((a = t.call(this, e)).name = "InvitationError"),
                  (a.details = r),
                  a
                )
              }
              return (0, l.Z)(n)
            })((0, m.Z)(Error)),
            D = function (e) {
              var t = e.children,
                n = (0, c.Z)(e, F)
              return x.createElement(
                g.zx,
                (0, i.Z)(
                  {
                    variant: "ghost",
                    minW: "280px",
                    fontWeight: "normal",
                    _hover: {
                      background: "gradient.purple.3",
                      backgroundSize: "cover"
                    }
                  },
                  n
                ),
                t
              )
            },
            q = function (e) {
              var t = e.model,
                n = e.goBack,
                r = e.identity,
                l = (0, c.Z)(e, N),
                u = (0, x.useState)(!1),
                s = (0, o.Z)(u, 2),
                p = s[0],
                d = s[1],
                m = (0, v.qY)(),
                f = m.isOpen,
                B = m.onOpen,
                F = m.onClose,
                q = (0, x.useState)([]),
                H = (0, o.Z)(q, 2),
                Y = H[0],
                K = H[1],
                $ = (0, L.oR)(W.Z),
                X = $.appContext.authProvider,
                G = $.user,
                V = G.id == t.createdBy,
                Q = (0, R.RC)(t.thumbImageId),
                ee = t.images.length > 0 ? t.images[0].imageId : null,
                te = (0, b.pm)(),
                ne = (function () {
                  var e = (0, a.Z)(
                    h().mark(function e() {
                      var t, n
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), d(!0), (e.next = 4), oe()
                              case 4:
                                if (0 != (t = e.sent).length) {
                                  e.next = 9
                                  break
                                }
                                ;(0, M.showToast)(
                                  te,
                                  "Invite to My Job",
                                  "No jobs are found created by you. If you want to invite the creator. create a job first.",
                                  "warning"
                                ),
                                  (e.next = 16)
                                break
                              case 9:
                                if (1 != t.length) {
                                  e.next = 15
                                  break
                                }
                                return (n = t[0]), (e.next = 13), re(n.id)
                              case 13:
                                e.next = 16
                                break
                              case 15:
                                t.length > 1 && (K(t), B())
                              case 16:
                                e.next = 21
                                break
                              case 18:
                                ;(e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (0, M.showStandardErrorMesg)(te)
                              case 21:
                                return (e.prev = 21), d(!1), e.finish(21)
                              case 24:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 18, 21, 24]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
                re = (function () {
                  var e = (0, a.Z)(
                    h().mark(function e(n) {
                      var a, o, i
                      return h().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  d(!0),
                                  (e.next = 4),
                                  (0, P.makeJobActor)(r, X)
                                )
                              case 4:
                                return (
                                  (a = e.sent),
                                  (e.next = 7),
                                  a.inviteCreator(n, t.createdBy, (0, O.$6)(X))
                                )
                              case 7:
                                if (!(o = e.sent).ok) {
                                  e.next = 12
                                  break
                                }
                                ;(0, M.showToast)(
                                  te,
                                  "Invite to My Job",
                                  "Your invitation has been sent to the creator successfully. \ud83d\ude0e",
                                  "success"
                                ),
                                  (e.next = 14)
                                break
                              case 12:
                                if (!o.err) {
                                  e.next = 14
                                  break
                                }
                                throw new J("Submit invitation error: ", o.err)
                              case 14:
                                e.next = 19
                                break
                              case 16:
                                ;(e.prev = 16),
                                  (e.t0 = e.catch(0)),
                                  null !== (i = e.t0.details) &&
                                  void 0 !== i &&
                                  i.duplicated_notifymode
                                    ? (0, M.showToast)(
                                        te,
                                        "Invite to My Job",
                                        "You have sent an invite to the creator already.",
                                        "warning"
                                      )
                                    : (T.default.error(e.t0),
                                      (0, M.showStandardErrorMesg)(te))
                              case 19:
                                return (e.prev = 19), d(!1), e.finish(19)
                              case 22:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 16, 19, 22]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
                ae = (function () {
                  var e = (0, a.Z)(
                    h().mark(function e(t) {
                      return h().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return F(), (e.next = 3), re(t)
                            case 3:
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
                oe = (function () {
                  var e = (0, a.Z)(
                    h().mark(function e() {
                      var t, n
                      return h().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), (0, P.makeJobActor)(r, X)
                            case 2:
                              return (
                                (t = e.sent),
                                (e.next = 5),
                                t.queryAllJobsBy(
                                  0,
                                  j.EJ.PageSize,
                                  [],
                                  [],
                                  j.EJ.SortOptions.createdAt.candid,
                                  j.EJ.ExpiredNumDays,
                                  [],
                                  [Number(G.id)]
                                )
                              )
                            case 5:
                              return (n = e.sent), e.abrupt("return", n)
                            case 7:
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
              return x.createElement(
                E.xu,
                (0, i.Z)(
                  {
                    as: "section",
                    pt: "100px",
                    pb: "40px",
                    position: "relative"
                  },
                  l
                ),
                n &&
                  x.createElement(g.zx, {
                    variant: "link",
                    onClick: n,
                    fontWeight: "semibold",
                    fontSize: { base: "17px", md: "25px" },
                    color: "black",
                    mt: "8px",
                    ml: "12px",
                    mb: "10px",
                    leftIcon: x.createElement(y.JO, {
                      as: U.$Ku,
                      color: "purple_3",
                      fontSize: { base: "26px", md: "30px" }
                    })
                  }),
                x.createElement(
                  w.N,
                  {
                    maxW: { base: "98%", sm: "90%" },
                    avatarProps: { src: Q, name: t.creatorName }
                  },
                  x.createElement(
                    Z.CardContent,
                    null,
                    x.createElement(
                      E.xu,
                      {
                        target: "_blank",
                        position: "absolute",
                        top: "-61px",
                        right: "4px"
                      },
                      null != r &&
                        !V &&
                        x.createElement(
                          A.Z,
                          {
                            w: { base: "110px", md: "135px" },
                            h: { base: "40px", md: "49px" },
                            fontWeight: { base: "medium", md: "semibold" },
                            fontSize: { base: "12px", md: "13px" },
                            onClick: ne,
                            isLoading: p
                          },
                          "Invite to My Job"
                        ),
                      x.createElement(
                        E.rU,
                        { href: "/p.html?id=".concat(t.id), isExternal: !0 },
                        x.createElement(
                          g.zx,
                          {
                            display: { base: "none", md: "unset" },
                            ml: "20px",
                            variant: "ghost",
                            color: "purple"
                          },
                          x.createElement(_.h0, { fontSize: "22px" })
                        )
                      )
                    ),
                    x.createElement(
                      E.X6,
                      {
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "black_2"
                      },
                      t.creatorName
                    ),
                    x.createElement(C.r, {
                      creatorTypes: t.creatorTypes,
                      py: "10px"
                    }),
                    x.createElement(S.l, { hashtags: t.hashtags, pb: "8px" })
                  ),
                  x.createElement(E.iz, {
                    h: "1px",
                    color: "gray_light",
                    w: "105%"
                  }),
                  x.createElement(I.X, {
                    tagline: t.tagline,
                    bio: t.bio,
                    featuredImageId: ee
                  }),
                  x.createElement(E.iz, {
                    h: "1px",
                    color: "gray_light",
                    w: "105%"
                  }),
                  x.createElement(z.r, { images: t.images })
                ),
                x.createElement(
                  k.u_,
                  { isOpen: f, onClose: F },
                  x.createElement(k.ZA, null),
                  x.createElement(
                    k.hz,
                    null,
                    x.createElement(
                      k.xB,
                      { color: "purple" },
                      "Choose a job to send invite"
                    ),
                    x.createElement(k.ol, null),
                    x.createElement(
                      k.fe,
                      null,
                      x.createElement(
                        E.gC,
                        null,
                        Y.map(function (e) {
                          return x.createElement(
                            D,
                            {
                              key: e.id,
                              onClick: function () {
                                return ae(e.id)
                              }
                            },
                            e.jobName
                          )
                        })
                      )
                    )
                  )
                )
              )
            }
          r()
        } catch (H) {
          r(H)
        }
      })
    },
    76989: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            RC: function () {
              return f
            },
            RL: function () {
              return m
            },
            iK: function () {
              return x
            },
            m3: function () {
              return h
            }
          })
          var a = n(15861),
            o = n(86854),
            i = n(87757),
            c = n.n(i),
            l = n(67294),
            u = n(82399),
            s = (n(24686), n(98400)),
            p = n(23256),
            d = (n(66985), e([u]))
          u = (d.then ? (await d)() : d)[0]
          var m = function (e) {
              var t = (0, l.useState)(""),
                n = (0, o.Z)(t, 2),
                r = n[0],
                i = n[1],
                d = (0, l.useState)(""),
                m = (0, o.Z)(d, 2),
                f = m[0],
                h = m[1],
                x = (0, s.oR)(p.Z).appContext
              return (
                (0, l.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        c().mark(function t() {
                          var n
                          return c().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != f) {
                                    t.next = 4
                                    break
                                  }
                                  return i(null), t.abrupt("return")
                                case 4:
                                  return i(null), (t.next = 7), (0, u.cm)(e, x)
                                case 7:
                                  ;(n = t.sent), i(n), h(e), (t.next = 13)
                                  break
                                case 12:
                                  i(null)
                                case 13:
                                case "end":
                                  return t.stop()
                              }
                          }, t)
                        })
                      )).apply(this, arguments)
                    }
                    !(function () {
                      t.apply(this, arguments)
                    })()
                  },
                  [e]
                ),
                r
              )
            },
            f = function (e) {
              var t = (0, l.useState)(null),
                n = (0, o.Z)(t, 2),
                r = n[0],
                i = n[1],
                d = (0, l.useState)(""),
                m = (0, o.Z)(d, 2),
                f = m[0],
                h = m[1],
                x = (0, s.oR)(p.Z).appContext
              return (
                (0, l.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        c().mark(function t() {
                          var n
                          return c().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != f) {
                                    t.next = 4
                                    break
                                  }
                                  return i(null), t.abrupt("return")
                                case 4:
                                  return i(null), (t.next = 7), (0, u.rn)(e, x)
                                case 7:
                                  ;(n = t.sent), i(n), h(e), (t.next = 13)
                                  break
                                case 12:
                                  i(null)
                                case 13:
                                case "end":
                                  return t.stop()
                              }
                          }, t)
                        })
                      )).apply(this, arguments)
                    }
                    !(function () {
                      t.apply(this, arguments)
                    })()
                  },
                  [e]
                ),
                r
              )
            },
            h = function (e) {
              var t = (0, l.useState)(null),
                n = (0, o.Z)(t, 2),
                r = n[0],
                i = n[1],
                d = (0, l.useState)(""),
                m = (0, o.Z)(d, 2),
                f = m[0],
                h = m[1],
                x = (0, s.oR)(p.Z).appContext
              return (
                (0, l.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        c().mark(function t() {
                          var n
                          return c().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != f) {
                                    t.next = 4
                                    break
                                  }
                                  return i(null), t.abrupt("return")
                                case 4:
                                  return i(null), (t.next = 7), (0, u.b1)(e, x)
                                case 7:
                                  ;(n = t.sent), i(n), h(e), (t.next = 13)
                                  break
                                case 12:
                                  i(null)
                                case 13:
                                case "end":
                                  return t.stop()
                              }
                          }, t)
                        })
                      )).apply(this, arguments)
                    }
                    !(function () {
                      t.apply(this, arguments)
                    })()
                  },
                  [e]
                ),
                r
              )
            },
            x = function (e) {
              var t = (0, l.useState)(null),
                n = (0, o.Z)(t, 2),
                r = n[0],
                i = n[1],
                d = (0, l.useState)(""),
                m = (0, o.Z)(d, 2),
                f = m[0],
                h = m[1],
                x = (0, s.oR)(p.Z).appContext
              return (
                (0, l.useEffect)(
                  function () {
                    var t = (function () {
                      var t = (0, a.Z)(
                        c().mark(function t() {
                          var n
                          return c().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != f) {
                                    t.next = 4
                                    break
                                  }
                                  return i(null), t.abrupt("return")
                                case 4:
                                  return i(null), (t.next = 7), (0, u.SF)(e, x)
                                case 7:
                                  ;(n = t.sent), i(n), h(e), (t.next = 13)
                                  break
                                case 12:
                                  i(null)
                                case 13:
                                case "end":
                                  return t.stop()
                              }
                          }, t)
                        })
                      )
                      return function () {
                        return t.apply(this, arguments)
                      }
                    })()
                    t()
                  },
                  [e]
                ),
                r
              )
            }
          r()
        } catch (g) {
          r(g)
        }
      })
    },
    16830: function (e, t, n) {
      n.d(t, {
        $z: function () {
          return o
        },
        BH: function () {
          return s
        },
        IO: function () {
          return m
        },
        Kc: function () {
          return p
        },
        YI: function () {
          return c
        },
        f1: function () {
          return d
        },
        pG: function () {
          return i
        },
        qk: function () {
          return l
        },
        tI: function () {
          return h
        },
        vG: function () {
          return u
        },
        zM: function () {
          return a
        }
      })
      var r = n(41451),
        a = {
          audioengineer: "Audio Engineer",
          copywriter: "Copywriter",
          designer: "Designer",
          developer: "Developer",
          photographer: "Photographer",
          videographer: "Videographer"
        },
        o = function () {
          return Object.keys(a).map(function (e) {
            return { value: e, label: a[e] }
          })
        },
        i = { value: null, label: "All Creators" },
        c = function () {
          var e = Object.keys(a).map(function (e) {
            return { value: e, label: a[e] }
          })
          return e.unshift(i), e
        },
        l = function (e) {
          return e.map(function (e) {
            return a[e]
          })
        },
        u = {
          designer: {
            uiux: "UI/UX",
            mobile: "Mobile",
            web: "Web",
            "3d": "3D",
            graphic: "Graphic Design",
            animation: "Animation",
            illustration: "Illustration",
            logo: "Logo",
            branding: "Branding",
            product: "Product"
          },
          copywriter: {
            webcontent: "Web Content",
            technical: "Technical",
            marketing: "Marketing",
            seo: "SEO",
            creative: "Creative/Brand",
            socialMedia: "Social Media"
          },
          videographer: {
            editing: "Editing",
            motion: "Motion",
            brand: "Brand Awareness",
            tutorial: "Tutorial",
            product: "Product",
            event: "Event",
            drone: "Drone",
            testimonial: "Testimonial"
          },
          audioengineer: {
            podcast: "Podcast",
            ad: "Advertisement",
            music: "Music",
            soundEffect: "Sound Effect",
            audiobook: "Audiobook"
          },
          photographer: {
            editing: "Editing",
            product: "Product",
            ad: "Advertising",
            event: "Event",
            nature: "Nature",
            city: "City",
            portrait: "Portrait",
            abtract: "Abstract",
            fashion: "Fashion",
            sports: "Sports",
            food: "Food",
            architectural: "Architectural"
          },
          developer: {
            android: "Android",
            backend: "Backend",
            blockchain: "Blockchain",
            ecommerce: "e-Commerce",
            fullstack: "Fullstack",
            ios: "iOS",
            web: "Web",
            web3: "Web3"
          }
        },
        s = function (e) {
          var t = u[e]
          return t
            ? Object.keys(t).map(function (e) {
                return { value: e, label: t[e] }
              })
            : []
        },
        p = null,
        d = function (e) {
          var t = u[e]
          if (!t) return []
          var n = Object.keys(t).map(function (e) {
            return { value: e, label: t[e] }
          })
          return n.unshift({ value: p, label: "All ".concat(a[e], "s") }), n
        },
        m = function (e, t) {
          var n = u[t]
          return e.map(function (e) {
            return n[e]
          })
        },
        f = {
          designer: ["Figma", "Sketch", "Photoshop", "Minimal", "Retro"],
          copywriter: ["Medium", "Scientific", "Nutrition", "Health", "Ads"],
          videographer: [
            "Vlogs",
            "AdobePremiere",
            "FinalCutPro",
            "SpecialEffects",
            "Wedding"
          ],
          audioengineer: [
            "VoiceOver",
            "FLStudio",
            "AdobeAudition",
            "LogicProX",
            "Translation",
            "Singing"
          ],
          photographer: [
            "Sony",
            "Cannon",
            "Travel",
            "Model",
            "Photoshop",
            "Luminar",
            "LightRoom"
          ],
          developer: [
            "Motoko",
            "Rust",
            "React",
            "Java",
            "JavaScript",
            "Swift",
            "Solidity",
            "Python"
          ]
        },
        h = function (e) {
          var t = e.flatMap(function (e) {
            return f[e]
          })
          return (0, r.Z)(new Set(t))
        }
    },
    82399: function (e, t, n) {
      n.a(
        e,
        async function (e, r) {
          try {
            n.d(t, {
              SF: function () {
                return x
              },
              b1: function () {
                return h
              },
              cm: function () {
                return m
              },
              rn: function () {
                return f
              }
            })
            var a = n(15861),
              o = n(87757),
              i = n.n(o),
              c = n(31681),
              l = await Promise.resolve().then(n.bind(n, 24686)),
              u = l.makeUserProfileActor,
              s = l.makePortfolioActor,
              p = l.makeJobActor,
              d = l.makeChatActor,
              m = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g(
                                t,
                                u,
                                n.userProfileImageStoreCanisterIdList,
                                n.setUserProfileImageStoreCanisterIdList
                              )
                            )
                          case 2:
                            return e.abrupt("return", e.sent)
                          case 3:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              f = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g(
                                t,
                                s,
                                n.portfolioImageStoreCanisterIdList,
                                n.setPortfolioImageStoreCanisterIdList
                              )
                            )
                          case 2:
                            return e.abrupt("return", e.sent)
                          case 3:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              h = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g(
                                t,
                                p,
                                n.jobImageStoreCanisterIdList,
                                n.setJobImageStoreCanisterIdList
                              )
                            )
                          case 2:
                            return e.abrupt("return", e.sent)
                          case 3:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              x = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              g(
                                t,
                                d,
                                n.chatImageStoreCanisterIdList,
                                n.setChatImageStoreCanisterIdList
                              )
                            )
                          case 2:
                            return e.abrupt("return", e.sent)
                          case 3:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              g = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n, r, a) {
                    var o, c, l, u, s, p, d, m, f
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((o = v(t)),
                              (c = r || []),
                              (l = o.remote),
                              null != (u = c[l]))
                            ) {
                              e.next = 13
                              break
                            }
                            return (e.next = 7), n()
                          case 7:
                            return (
                              (s = e.sent),
                              (e.next = 10),
                              s.getImageBucketsCanisterIdList()
                            )
                          case 10:
                            ;(p = e.sent), a(p), (u = p[l])
                          case 13:
                            if (
                              ((d = window.location),
                              (m = d.protocol),
                              (f = d.hostname),
                              !(-1 != f.indexOf("localhost")))
                            ) {
                              e.next = 17
                              break
                            }
                            return e.abrupt(
                              "return",
                              ""
                                .concat(m, "//localhost:8000/image?id=")
                                .concat(t, "&canisterId=")
                                .concat(u)
                            )
                          case 17:
                            return e.abrupt(
                              "return",
                              ""
                                .concat(m, "//")
                                .concat(u, ".raw.ic0.app/image?id=")
                                .concat(t)
                            )
                          case 18:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, n, r, a) {
                  return e.apply(this, arguments)
                }
              })(),
              v = function (e) {
                var t = e.split(c.ZB.IdSeparator)
                return t.length == c.ZB.RemoteImageTokensSize
                  ? { remote: t[0] }
                  : { local: t[0] }
              }
            r()
          } catch (b) {
            r(b)
          }
        },
        1
      )
    },
    87784: function (e, t, n) {
      n.d(t, {
        N: function () {
          return o
        },
        T: function () {
          return a
        }
      })
      var r = n(41451),
        a = function (e) {
          for (var t = e.length - 1; t > 0; t--) {
            var n = Math.floor(Math.random() * (t + 1)),
              r = e[t]
            ;(e[t] = e[n]), (e[n] = r)
          }
          return e
        },
        o = function (e, t) {
          return (0, r.Z)(
            new Map(
              e.map(function (e) {
                return [t(e), e]
              })
            ).values()
          )
        }
    },
    66897: function (e, t, n) {
      n.r(t),
        n.d(t, {
          showLongToast: function () {
            return o
          },
          showMediumToast: function () {
            return a
          },
          showStandardErrorMesg: function () {
            return i
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
        o = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 4e4,
            isClosable: !0
          })
        },
        i = function (e) {
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
