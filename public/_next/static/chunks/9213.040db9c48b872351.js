"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9213],
  {
    91632: function (e, t, n) {
      n.d(t, {
        $: function () {
          return s
        }
      })
      var r = n(87462),
        i = n(67294),
        a = n(11972),
        o = n(51815),
        l = n(49697),
        c = n(49162),
        u = n(15658),
        s = function (e) {
          return i.createElement(
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
            i.createElement(
              a.gC,
              null,
              i.createElement(
                a.M5,
                null,
                i.createElement(
                  a.rU,
                  { href: "https://contentfly.app" },
                  i.createElement(c.Z, {
                    width: "100px",
                    src: "/logo-vertical-".concat("light", ".png"),
                    alt: "Content Fly logo"
                  })
                )
              )
            ),
            i.createElement(
              a.Ug,
              { pt: 6, px: 1, fontSize: { base: "12px", md: "14px" } },
              i.createElement(
                a.rU,
                { href: "mailto://hello@contentfly.app" },
                "hello@contentfly.app"
              ),
              i.createElement(
                a.rU,
                { href: "https://twitter.com/ContentFlyApp", isExternal: !0 },
                "Twitter"
              ),
              i.createElement(
                a.rU,
                {
                  href: "https://medium.com/contentfly-app-blog",
                  isExternal: !0
                },
                "Medium"
              ),
              i.createElement(
                a.rU,
                { href: "https://discord.gg/uuDzQxdmmY", isExternal: !0 },
                "Discord"
              ),
              i.createElement(
                a.rU,
                { href: "/terms.html", isExternal: !0 },
                "Terms"
              )
            ),
            i.createElement(o.hU, {
              icon: i.createElement(u.kD, { w: "278px", h: "34px" }),
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
          return o
        }
      })
      var r = n(87462),
        i = n(67294),
        a = n(11972),
        o = function (e) {
          return i.createElement(
            a.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            i.createElement(
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
      n.d(t, {
        o: function () {
          return o
        }
      })
      var r = n(87462),
        i = n(67294),
        a = n(11972),
        o = function (e) {
          return i.createElement(
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
    89213: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return v
          }
        })
      var r = n(15861),
        i = n(86854),
        a = n(87757),
        o = n.n(a),
        l = n(67294),
        c = n(9008),
        u = n.n(c),
        s = n(49697),
        p = n(95641),
        f = n(99171),
        m = n(45607),
        d = n(11972),
        h = n(64380),
        g = n(42273),
        E = n(91632),
        x = n(66897),
        b = n(31681),
        w = n(66985)
      function v(e) {
        var t = e.handleAuthenticated,
          n = e.warningMesg,
          a = (0, l.useState)(!1),
          c = (0, i.Z)(a, 2),
          v = c[0],
          C = c[1],
          y = (0, m.pm)()
        ;(0, l.useEffect)(
          function () {
            function e() {
              return (e = (0, r.Z)(
                o().mark(function e() {
                  return o().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          "" != n && (0, x.showToast)(y, "Login", n, "warning")
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
        var k = (0, h.w)(t, b.Ho.InternetIdentity),
          Z = (function () {
            var e = (0, r.Z)(
              o().mark(function e() {
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), C(!0), (e.next = 4), k()
                        case 4:
                          e.next = 9
                          break
                        case 6:
                          ;(e.prev = 6),
                            (e.t0 = e.catch(0)),
                            w.default.error(e.t0)
                        case 9:
                          return (e.prev = 9), C(!1), e.finish(9)
                        case 12:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 6, 9, 12]]
                )
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
        return l.createElement(
          s.W,
          { height: "100vh" },
          l.createElement(
            p.o,
            null,
            l.createElement(
              u(),
              null,
              l.createElement("title", null, "Content Fly")
            ),
            l.createElement(f.t, null, "Content Fly"),
            l.createElement(
              d.gC,
              {
                divider: l.createElement(d.cX, { borderColor: "gray.200" }),
                spacing: 4,
                align: "stretch"
              },
              l.createElement(
                d.M5,
                null,
                l.createElement(
                  d.gC,
                  { spacing: 4 },
                  l.createElement(
                    g.Z,
                    {
                      isLoading: v,
                      onClick: Z,
                      w: { base: "300px", md: "394px" }
                    },
                    "Login with Internet Identity"
                  )
                )
              )
            ),
            l.createElement(E.$, null)
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
        i = n(45987),
        a = n(67294),
        o = n(51815),
        l = n(11972),
        c = ["children"]
      function u(e) {
        var t = e.children,
          n = (0, i.Z)(e, c)
        return a.createElement(
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
          a.createElement(l.xv, { noOfLines: 0 }, t)
        )
      }
    },
    66897: function (e, t, n) {
      n.r(t),
        n.d(t, {
          showLongToast: function () {
            return a
          },
          showMediumToast: function () {
            return i
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
        i = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 2e4,
            isClosable: !0
          })
        },
        a = function (e, t, n, r) {
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
    }
  }
])
