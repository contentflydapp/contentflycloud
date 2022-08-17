;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6340],
  {
    53693: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(15861),
              l = n(86854),
              i = n(87757),
              c = n.n(i),
              u = n(67294),
              o = n(9008),
              s = n.n(o),
              f = n(11972),
              m = n(27386),
              p = n(51815),
              d = n(49697),
              h = n(95641),
              v = n(99171),
              g = n(29601),
              E = n(77329),
              x = n(1576),
              y = n(67994),
              b = n(76989),
              w = n(92906),
              S = n(22114),
              k = n(98400),
              I = n(23256),
              z = e([b])
            function C(e, t) {
              var n =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = Z(e)) ||
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
              var l,
                i = !0,
                c = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (i = e.done), e
                },
                e: function (e) {
                  ;(c = !0), (l = e)
                },
                f: function () {
                  try {
                    i || null == n.return || n.return()
                  } finally {
                    if (c) throw l
                  }
                }
              }
            }
            function Z(e, t) {
              if (e) {
                if ("string" === typeof e) return P(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? P(e, t)
                    : void 0
                )
              }
            }
            function P(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            b = (z.then ? (await z)() : z)[0]
            var A = (await Promise.resolve().then(n.bind(n, 66985))).default,
              _ = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeUserProfileActor
            function L(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, u.useState)(null),
                i = (0, l.Z)(r, 2),
                o = i[0],
                w = i[1],
                z = (0, u.useState)(null),
                Z = (0, l.Z)(z, 2),
                P = Z[0],
                L = Z[1],
                U = (0, u.useState)(!1),
                N = (0, l.Z)(U, 2),
                F = N[0],
                M = N[1],
                O = (0, u.useState)(null),
                j = (0, l.Z)(O, 2),
                X = j[0],
                G = j[1],
                R = (0, u.useState)(!1),
                D = (0, l.Z)(R, 2),
                Q = D[0],
                T = D[1],
                H = (0, u.useState)(!1),
                K = (0, l.Z)(H, 2),
                V = K[0],
                W = K[1],
                B = (0, k.oR)(I.Z).appContext.authProvider
              function J() {
                return (J = (0, a.Z)(
                  c().mark(function e() {
                    var n, r
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), M(!0), (e.next = 4), _(t, B)
                            case 4:
                              return (n = e.sent), (e.next = 7), n.size()
                            case 7:
                              ;(r = e.sent), L(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 14:
                              return (e.prev = 14), M(!1), e.finish(14)
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
              function Y() {
                return (Y = (0, a.Z)(
                  c().mark(function e() {
                    var n, r
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), T(!0), (e.next = 4), _(t, B)
                            case 4:
                              return (n = e.sent), (e.next = 7), n.sizeV1()
                            case 7:
                              ;(r = e.sent), G(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
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
              function $() {
                return ($ = (0, a.Z)(
                  c().mark(function e(n) {
                    var r, a
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                w(null),
                                W(!0),
                                (e.next = 5),
                                _(t, B)
                              )
                            case 5:
                              return (r = e.sent), (e.next = 8), r.getAllUsers()
                            case 8:
                              ;(a = e.sent), q(n, a), (e.next = 15)
                              break
                            case 12:
                              ;(e.prev = 12), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 15:
                              return (e.prev = 15), W(!1), e.finish(15)
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
              function q(e, t) {
                e.preventDefault()
                var n = []
                n.push([
                  "userId",
                  "owner",
                  "username",
                  "identityId",
                  "portfolioId",
                  "profileImageId",
                  "firstName",
                  "lastName",
                  "email",
                  "country",
                  "brand",
                  "website"
                ])
                var r,
                  a = C(t)
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var l = r.value
                    n.push([
                      l.userId,
                      l.owner,
                      l.username,
                      l.identityId,
                      l.portfolioId,
                      l.profileImageId,
                      l.firstName,
                      l.lastName,
                      l.email,
                      l.country,
                      l.brand,
                      l.website
                    ])
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
                var i = (0, S.u)(n),
                  c = new Blob([i]),
                  u = URL.createObjectURL(c)
                w(u)
              }
              return u.createElement(
                d.W,
                { height: "100vh" },
                u.createElement(
                  h.o,
                  null,
                  u.createElement(
                    s(),
                    null,
                    u.createElement("title", null, "Content Fly")
                  ),
                  u.createElement(
                    f.M5,
                    null,
                    u.createElement(
                      f.gC,
                      {
                        spacing: 4,
                        align: "stretch",
                        pb: "20px",
                        textAlign: "center"
                      },
                      u.createElement(
                        v.t,
                        null,
                        "Content Fly User Profile Admin"
                      ),
                      u.createElement(f.xv, null, "You have logged in!"),
                      u.createElement(
                        m.UQ,
                        { allowMultiple: !0 },
                        u.createElement(
                          m.Qd,
                          null,
                          u.createElement(
                            "h2",
                            null,
                            u.createElement(
                              m.KF,
                              null,
                              u.createElement(
                                f.xu,
                                { flex: "1", textAlign: "left" },
                                u.createElement(
                                  f.X6,
                                  { size: "md" },
                                  "User Profile"
                                )
                              ),
                              u.createElement(m.XE, null)
                            )
                          ),
                          u.createElement(
                            m.Hk,
                            { pb: 4 },
                            u.createElement(
                              f.gC,
                              {
                                spacing: 4,
                                align: "stretch",
                                pb: "20px",
                                textAlign: "center"
                              },
                              u.createElement(
                                p.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return J.apply(this, arguments)
                                  },
                                  isLoading: F
                                },
                                "Get User Profile size"
                              ),
                              null != P &&
                                u.createElement(f.xv, null, "Size: ", P),
                              u.createElement(
                                p.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return Y.apply(this, arguments)
                                  },
                                  isLoading: Q
                                },
                                "Get User Profile V1 size"
                              ),
                              null != X &&
                                u.createElement(f.xv, null, "Size: ", X),
                              u.createElement(
                                p.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function (e) {
                                    return $.apply(this, arguments)
                                  },
                                  isLoading: V
                                },
                                "Get Users Profiles"
                              ),
                              null != o &&
                                u.createElement(
                                  f.rU,
                                  {
                                    download: "userprofiles-list.csv",
                                    href: o
                                  },
                                  "Download Now"
                                )
                            )
                          )
                        ),
                        u.createElement(E.L, { makeActor: _, identity: t }),
                        u.createElement(x.y, { makeActor: _, identity: t }),
                        u.createElement(g.I, { makeActor: _, identity: t }),
                        u.createElement(y.F, {
                          title: "Migrate Profile Image",
                          makeActor: _,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalImageStore",
                          loadObjectIdListFunc: "getAllLocalImageIds",
                          loadMainDataFunc: "getAllUsers",
                          migrateFunc: "migrateProfileImage",
                          tranformFunc: function (e, t) {
                            return e
                              .filter(function (e) {
                                return t.includes(e.profileImageId)
                              })
                              .map(function (e) {
                                return [e.userId]
                              })
                          },
                          useImageObject: b.RL,
                          isImageStore: !0
                        })
                      ),
                      u.createElement(
                        p.zx,
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
            ;(t.default = (0, w.J3)(L)), r()
          } catch (C) {
            r(C)
          }
        },
        1
      )
    },
    1576: function (e, t, n) {
      "use strict"
      n.d(t, {
        y: function () {
          return m
        }
      })
      var r = n(15861),
        a = n(86854),
        l = n(87757),
        i = n.n(l),
        c = n(67294),
        u = n(27386),
        o = n(11972),
        s = n(51815),
        f = n(66985),
        m = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, c.useState)(null),
            m = (0, a.Z)(l, 2),
            p = m[0],
            d = m[1],
            h = (0, c.useState)(null),
            v = (0, a.Z)(h, 2),
            g = v[0],
            E = v[1],
            x = (0, c.useState)(!1),
            y = (0, a.Z)(x, 2),
            b = y[0],
            w = y[1],
            S = (0, c.useState)(!1),
            k = (0, a.Z)(S, 2),
            I = k[0],
            z = k[1]
          function A() {
            return (A = (0, r.Z)(
              i().mark(function e() {
                var r, a
                return i().wrap(
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
                          ;(a = e.sent), E(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            f.default.error(e.t0)
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
          function _() {
            return (_ = (0, r.Z)(
              i().mark(function e() {
                var r, a
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), z(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getManager()
                        case 7:
                          ;(a = e.sent), d(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            f.default.error(e.t0)
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
          return c.createElement(
            u.Qd,
            null,
            c.createElement(
              "h2",
              null,
              c.createElement(
                u.KF,
                null,
                c.createElement(
                  o.xu,
                  { flex: "1", textAlign: "left" },
                  c.createElement(o.X6, { size: "md" }, "Manager")
                ),
                c.createElement(u.XE, null)
              )
            ),
            c.createElement(
              u.Hk,
              { pb: 4 },
              c.createElement(
                o.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                c.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return A.apply(this, arguments)
                    },
                    isLoading: b
                  },
                  "Who am I?"
                ),
                null != g && c.createElement(o.xv, null, "Principal Id: ", g),
                c.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return _.apply(this, arguments)
                    },
                    isLoading: I
                  },
                  "Get Manager"
                ),
                null != p && c.createElement(o.xv, null, "Manager Id: ", p)
              )
            )
          )
        }
    },
    22114: function (e, t, n) {
      "use strict"
      function r(e) {
        var t = ""
        return (
          e.forEach(function (e) {
            e.forEach(function (e, n) {
              var r = (null === e ? "" : e.toString()).replace(/"/g, '""')
              r.search(/("|,|\n)/g) >= 0 && (r = '"' + r + '"'),
                n > 0 && (t += ","),
                (t += r)
            }),
              (t += "\n")
          }),
          t
        )
      }
      n.d(t, {
        u: function () {
          return r
        }
      })
    },
    68983: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/userprofile",
        function () {
          return n(53693)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [
        2328, 8760, 5297, 253, 4597, 7386, 5468, 2144, 8498, 3505, 2888, 9774,
        179
      ],
      function () {
        return (t = 68983), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
