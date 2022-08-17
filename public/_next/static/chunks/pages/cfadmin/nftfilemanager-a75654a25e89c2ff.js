;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [291],
  {
    75026: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(67294),
              c = n(9008),
              l = n.n(c),
              u = n(11972),
              i = n(27386),
              s = n(51815),
              o = n(49697),
              m = n(95641),
              p = n(99171),
              f = n(97221),
              h = n(77329),
              E = n(92906),
              g = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeNFTFileManagerActor
            function e(e) {
              var t = e.identity,
                n = e.logout
              return a.createElement(
                o.W,
                { height: "100vh" },
                a.createElement(
                  m.o,
                  null,
                  a.createElement(
                    l(),
                    null,
                    a.createElement("title", null, "Content Fly")
                  ),
                  a.createElement(
                    u.M5,
                    null,
                    a.createElement(
                      u.gC,
                      {
                        spacing: 4,
                        align: "stretch",
                        pb: "20px",
                        textAlign: "center"
                      },
                      a.createElement(
                        p.t,
                        null,
                        "Content Fly NFT File Manager Admin"
                      ),
                      a.createElement(u.xv, null, "You have logged in!"),
                      a.createElement(
                        i.UQ,
                        { allowMultiple: !0 },
                        a.createElement(h.L, { makeActor: g, identity: t }),
                        a.createElement(f.g, { makeActor: g, identity: t })
                      ),
                      a.createElement(
                        s.zx,
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
            }
            ;(t.default = (0, E.J3)(e)), r()
          } catch (k) {
            r(k)
          }
        },
        1
      )
    },
    97221: function (e, t, n) {
      "use strict"
      n.d(t, {
        g: function () {
          return E
        }
      })
      var r = n(15861),
        a = n(86854),
        c = n(87757),
        l = n.n(c),
        u = n(67294),
        i = n(27386),
        s = n(11972),
        o = n(51815),
        m = n(84597),
        p = n(19483),
        f = n(31681),
        h = n(66985),
        E = function (e) {
          var t = e.makeActor,
            n = e.identity,
            c = (0, u.useState)(null),
            E = (0, a.Z)(c, 2),
            g = E[0],
            k = E[1],
            v = (0, u.useState)(null),
            x = (0, a.Z)(v, 2),
            d = x[0],
            y = x[1],
            F = (0, u.useState)(""),
            b = (0, a.Z)(F, 2),
            w = b[0],
            C = b[1],
            _ = (0, u.useState)(!1),
            B = (0, a.Z)(_, 2),
            S = B[0],
            z = B[1],
            A = (0, u.useState)(!1),
            N = (0, a.Z)(A, 2),
            Z = N[0],
            L = N[1],
            M = (0, u.useState)(!1),
            T = (0, a.Z)(M, 2),
            X = T[0],
            I = T[1]
          function P() {
            return (P = (0, r.Z)(
              l().mark(function e() {
                var r, a
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), z(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent),
                            (e.next = 7),
                            r.getFileBucketsSpaceUsed()
                          )
                        case 7:
                          ;(a = e.sent), k(a), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), z(!1), e.finish(14)
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
          function U() {
            return G.apply(this, arguments)
          }
          function G() {
            return (G = (0, r.Z)(
              l().mark(function e() {
                var r, a
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), L(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent), (e.next = 7), r.getCurrentFileBucket()
                          )
                        case 7:
                          ;(a = e.sent), y(Number(a)), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), L(!1), e.finish(14)
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
          function O() {
            return (O = (0, r.Z)(
              l().mark(function e() {
                var r, a
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), "" != w)) {
                            e.next = 3
                            break
                          }
                          return e.abrupt("return")
                        case 3:
                          return I(!0), (e.next = 6), t(n)
                        case 6:
                          return (
                            (r = e.sent),
                            (a = BigInt(w)),
                            (e.next = 10),
                            r.changeCurrentFileBucket(a)
                          )
                        case 10:
                          U(), (e.next = 16)
                          break
                        case 13:
                          ;(e.prev = 13),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
                        case 16:
                          return (e.prev = 16), I(!1), e.finish(16)
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
          return u.createElement(
            i.Qd,
            null,
            u.createElement(
              "h2",
              null,
              u.createElement(
                i.KF,
                null,
                u.createElement(
                  s.xu,
                  { flex: "1", textAlign: "left" },
                  u.createElement(s.X6, { size: "md" }, "File Buckets")
                ),
                u.createElement(i.XE, null)
              )
            ),
            u.createElement(
              i.Hk,
              { pb: 4 },
              u.createElement(
                s.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                u.createElement(
                  o.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return P.apply(this, arguments)
                    },
                    isLoading: S
                  },
                  "Get File Buckets Usage"
                ),
                g &&
                  u.createElement(p.g, {
                    usedSpaceArray: g,
                    title: "File Buckets",
                    maxStorageLimitBytes: f.Ly.FileBucketMaxStorageLimit
                  }),
                u.createElement(
                  o.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: U,
                    isLoading: Z
                  },
                  "Get Current File Bucket"
                ),
                null != d &&
                  u.createElement(s.xv, null, "Current File Bucket: ", d),
                "New File Bucket",
                u.createElement(
                  s.xu,
                  { py: "6px" },
                  u.createElement(m.II, {
                    placeholder: "Enter Bucket number",
                    w: "200px",
                    onChange: function (e) {
                      C(e.target.value)
                    },
                    value: w
                  })
                ),
                u.createElement(
                  o.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return O.apply(this, arguments)
                    },
                    isLoading: X
                  },
                  "Change File Bucket"
                )
              )
            )
          )
        }
    },
    50301: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/nftfilemanager",
        function () {
          return n(75026)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [2328, 8760, 5297, 253, 4597, 7386, 5468, 2144, 8498, 2888, 9774, 179],
      function () {
        return (t = 50301), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
