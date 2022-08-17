"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8265],
  {
    78265: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(15861),
            l = n(86854),
            c = n(87462),
            o = n(45987),
            i = n(87757),
            m = n.n(i),
            s = n(67294),
            p = n(9008),
            u = n.n(p),
            x = n(11972),
            d = n(42273),
            b = n(92906),
            g = n(13130),
            E = n(11163),
            f = n(96217),
            h = n(31681),
            v = e([g, f])
          ;[g, f] = v.then ? (await v)() : v
          var w = ["children"],
            k = ["children"],
            y = function (e) {
              var t = e.children,
                n = (0, o.Z)(e, w)
              return s.createElement(
                x.X6,
                (0, c.Z)(
                  {
                    fontSize: { base: "22px", md: "26px", lg: "28px" },
                    fontWeight: "bold",
                    color: "black_2",
                    textAlign: "center",
                    minW: { base: "22px", md: "26px", lg: "28px" },
                    pt: "28px"
                  },
                  n
                ),
                t
              )
            },
            C = function (e) {
              var t = e.children,
                n = (0, o.Z)(e, k)
              return s.createElement(
                x.xu,
                (0, c.Z)(
                  {
                    color: "black",
                    textAlign: "center",
                    fontSize: { base: "md", md: "lg" },
                    minH: { base: "100px", md: "100px", lg: "130px" }
                  },
                  n
                ),
                t
              )
            }
          function Z(e) {
            var t = (0, s.useState)(1),
              r = (0, l.Z)(t, 2),
              o = r[0],
              i = r[1],
              p = (0, E.useRouter)(),
              b = (function () {
                var e = (0, a.Z)(
                  m().mark(function e() {
                    var t
                    return m().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              p.push("/createjob", "/createjob.html"),
                              (e.next = 3),
                              n.e(7130).then(n.bind(n, 47130))
                            )
                          case 3:
                            ;(t = e.sent),
                              t.Usergeek.trackEvent(
                                "Index Page - New Job Clicked"
                              )
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
              })()
            return s.createElement(
              g.Z,
              (0, c.Z)(
                {
                  opacity: o,
                  setOpacity: i,
                  activeLink: h.Az.Home,
                  hideBottomBar: null == e.logout
                },
                e
              ),
              s.createElement(
                u(),
                null,
                s.createElement("title", null, "Home - Content Fly")
              ),
              s.createElement(
                x.xu,
                { pos: "absolute", right: "12px", top: "10px" },
                s.createElement(f.d, e)
              ),
              s.createElement(
                x.Kq,
                {
                  direction: { base: "column", md: "column", lg: "row" },
                  spacing: "12px",
                  divider: s.createElement(x.cX, { borderColor: "gray.200" }),
                  pt: { base: "8", md: "100px", lg: "160px" },
                  px: { base: "6", md: "6", lg: "10" },
                  alignContent: "center"
                },
                s.createElement(
                  x.gC,
                  {
                    spacing: { base: "4", md: "6" },
                    align: "center",
                    pb: "18px"
                  },
                  s.createElement(y, null, "Need Content Created?"),
                  s.createElement(
                    C,
                    null,
                    s.createElement(
                      x.xv,
                      null,
                      "Micro Job Management tool with trustless payment & dispute resolution*."
                    ),
                    s.createElement(
                      x.xv,
                      { pt: "14px" },
                      "Earn rewards for community involvement*."
                    )
                  ),
                  s.createElement(
                    x.Kq,
                    {
                      spacing: "3",
                      direction: { base: "column", sm: "row" },
                      justify: "center"
                    },
                    s.createElement(
                      d.Z,
                      { w: { base: "160px", md: "180px" }, onClick: b },
                      "New Job"
                    )
                  )
                ),
                s.createElement(
                  x.gC,
                  { spacing: { base: "4", md: "5" }, align: "center" },
                  s.createElement(y, null, "Are you a Content Creator?"),
                  s.createElement(
                    C,
                    null,
                    s.createElement(
                      x.xv,
                      null,
                      "Create pitches for jobs that match your skills."
                    ),
                    s.createElement(
                      x.xv,
                      { pt: "14px" },
                      "Always get paid for completed jobs & earn rewards for community involvement*."
                    )
                  ),
                  s.createElement(
                    x.Kq,
                    {
                      spacing: "3",
                      direction: { base: "column", sm: "row" },
                      justify: "center"
                    },
                    s.createElement(
                      d.Z,
                      {
                        w: { base: "160px", md: "180px" },
                        onClick: function () {
                          p.push("/alljobs", "/alljobs.html")
                        }
                      },
                      "View Jobs"
                    )
                  )
                )
              ),
              s.createElement(
                x.xu,
                {
                  pos: "absolute",
                  bottom: { base: "10px", md: "20px" },
                  py: "20px",
                  w: "full",
                  pr: { base: "0px", md: "300px" }
                },
                s.createElement(
                  x.xu,
                  {
                    color: "black",
                    textAlign: { base: "center", md: "right" },
                    px: "12px",
                    fontSize: { base: "sm", md: "md" }
                  },
                  "* Coming Soon"
                ),
                s.createElement(
                  x.M5,
                  null,
                  s.createElement(
                    x.xv,
                    {
                      color: "black",
                      sx: { wordSpacing: "3px" },
                      fontSize: { base: "sm", md: "lg" }
                    },
                    "Dev | Design | Text | Photo | Video | Audio"
                  )
                )
              )
            )
          }
          ;(t.default = (0, b.v_)(Z)), r()
        } catch (Z) {
          r(Z)
        }
      })
    }
  }
])
