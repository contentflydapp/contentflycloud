;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5773],
  {
    27095: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(15861),
              l = n(86854),
              i = n(87757),
              o = n.n(i),
              c = n(67294),
              u = n(9008),
              s = n.n(u),
              m = n(49697),
              f = n(95641),
              p = n(99171),
              h = n(11972),
              d = n(27386),
              v = n(51815),
              g = n(84597),
              x = n(92906),
              E = n(29601),
              y = n(77329),
              S = n(1576),
              b = n(67994),
              k = n(76989),
              z = n(98400),
              w = n(23256),
              I = e([k])
            function Z(e, t) {
              var n =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = C(e)) ||
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
                o = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (i = e.done), e
                },
                e: function (e) {
                  ;(o = !0), (l = e)
                },
                f: function () {
                  try {
                    i || null == n.return || n.return()
                  } finally {
                    if (o) throw l
                  }
                }
              }
            }
            function C(e, t) {
              if (e) {
                if ("string" === typeof e) return _(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? _(e, t)
                    : void 0
                )
              }
            }
            function _(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            k = (I.then ? (await I)() : I)[0]
            var A = (await Promise.resolve().then(n.bind(n, 66985))).default,
              P = (await Promise.resolve().then(n.bind(n, 24686)))
                .makePortfolioActor
            function L(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, c.useState)(null),
                i = (0, l.Z)(r, 2),
                u = i[0],
                x = i[1],
                I = (0, c.useState)(!1),
                C = (0, l.Z)(I, 2),
                _ = C[0],
                L = C[1],
                M = (0, c.useState)(null),
                F = (0, l.Z)(M, 2),
                O = F[0],
                j = F[1],
                T = (0, c.useState)(!1),
                V = (0, l.Z)(T, 2),
                N = V[0],
                X = V[1],
                G = (0, c.useState)(null),
                U = (0, l.Z)(G, 2),
                D = U[0],
                Q = U[1],
                R = (0, c.useState)(!1),
                H = (0, l.Z)(R, 2),
                K = H[0],
                W = H[1],
                J = (0, c.useState)(!1),
                Y = (0, l.Z)(J, 2),
                $ = Y[0],
                q = Y[1],
                B = (0, c.useState)(null),
                ee = (0, l.Z)(B, 2),
                te = ee[0],
                ne = ee[1],
                re = (0, c.useState)(!1),
                ae = (0, l.Z)(re, 2),
                le = ae[0],
                ie = ae[1],
                oe = (0, c.useState)(null),
                ce = (0, l.Z)(oe, 2),
                ue = ce[0],
                se = ce[1],
                me = (0, c.useState)(""),
                fe = (0, l.Z)(me, 2),
                pe = fe[0],
                he = fe[1],
                de = (0, z.oR)(w.Z).appContext.authProvider
              function ve() {
                return (ve = (0, a.Z)(
                  o().mark(function e() {
                    var n, r
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), L(!0), (e.next = 4), P(t, de)
                            case 4:
                              return (n = e.sent), (e.next = 7), n.sizeV3()
                            case 7:
                              ;(r = e.sent), x(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
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
              function ge() {
                return (ge = (0, a.Z)(
                  o().mark(function e() {
                    var n, r
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), X(!0), (e.next = 4), P(t, de)
                            case 4:
                              return (n = e.sent), (e.next = 7), n.sizeV2()
                            case 7:
                              ;(r = e.sent), j(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 14:
                              return (e.prev = 14), X(!1), e.finish(14)
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
              function xe() {
                return (xe = (0, a.Z)(
                  o().mark(function e() {
                    var n, r
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), W(!0), (e.next = 4), P(t, de)
                            case 4:
                              return (
                                (n = e.sent),
                                (e.next = 7),
                                n.sizeOfUserPortfolioTrie()
                              )
                            case 7:
                              ;(r = e.sent), Q(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 14:
                              return (e.prev = 14), W(!1), e.finish(14)
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
              function Ee() {
                return (Ee = (0, a.Z)(
                  o().mark(function e() {
                    var n, r
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), q(!0), (e.next = 4), P(t, de)
                            case 4:
                              return (
                                (n = e.sent),
                                (e.next = 7),
                                n.migrateV2PortfoliosToV3()
                              )
                            case 7:
                              ;(r = e.sent).ok ? ne(r.ok) : ne(r.err),
                                (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 14:
                              return (e.prev = 14), q(!1), e.finish(14)
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
              function ye() {
                return (ye = (0, a.Z)(
                  o().mark(function e() {
                    var n, r
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), ie(!0), (e.next = 4), P(t, de)
                              )
                            case 4:
                              return (
                                (n = e.sent),
                                (r = Number(pe)),
                                (e.next = 8),
                                n.updatePortfolioModeration(r, {
                                  unlisted: null
                                })
                              )
                            case 8:
                              e.sent.ok ? se("success") : se("error"),
                                (e.next = 15)
                              break
                            case 12:
                              ;(e.prev = 12), (e.t0 = e.catch(0)), A.error(e.t0)
                            case 15:
                              return (e.prev = 15), ie(!1), e.finish(15)
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
              return c.createElement(
                m.W,
                { height: "100vh" },
                c.createElement(
                  f.o,
                  null,
                  c.createElement(
                    s(),
                    null,
                    c.createElement("title", null, "Content Fly")
                  ),
                  c.createElement(
                    h.M5,
                    null,
                    c.createElement(
                      h.gC,
                      {
                        spacing: 4,
                        align: "stretch",
                        pb: "20px",
                        textAlign: "center"
                      },
                      c.createElement(p.t, null, "Content Fly Portfolio Admin"),
                      c.createElement(h.xv, null, "You have logged in!"),
                      c.createElement(
                        d.UQ,
                        { allowMultiple: !0 },
                        c.createElement(
                          d.Qd,
                          null,
                          c.createElement(
                            "h2",
                            null,
                            c.createElement(
                              d.KF,
                              null,
                              c.createElement(
                                h.xu,
                                { flex: "1", textAlign: "left" },
                                c.createElement(
                                  h.X6,
                                  { size: "md" },
                                  "Portfolio"
                                )
                              ),
                              c.createElement(d.XE, null)
                            )
                          ),
                          c.createElement(
                            d.Hk,
                            { pb: 4 },
                            c.createElement(
                              h.gC,
                              {
                                spacing: 4,
                                align: "stretch",
                                pb: "20px",
                                textAlign: "center"
                              },
                              c.createElement(
                                v.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return ve.apply(this, arguments)
                                  },
                                  isLoading: _
                                },
                                "Get Portfolio size V3"
                              ),
                              null != u &&
                                c.createElement(h.xv, null, "Size: ", u),
                              c.createElement(
                                v.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return ge.apply(this, arguments)
                                  },
                                  isLoading: N
                                },
                                "Get Portfolio size V2"
                              ),
                              null != O &&
                                c.createElement(h.xv, null, "Size: ", O),
                              c.createElement(
                                v.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return Ee.apply(this, arguments)
                                  },
                                  isLoading: $
                                },
                                "Migrate Portfolios to V3"
                              ),
                              null != te && c.createElement(h.xv, null, te),
                              "Portfolio Moderation",
                              c.createElement(
                                h.xu,
                                { py: "6px" },
                                c.createElement(g.II, {
                                  placeholder: "Enter portfolio ID",
                                  w: "200px",
                                  onChange: function (e) {
                                    he(e.target.value)
                                  },
                                  value: pe
                                })
                              ),
                              c.createElement(
                                v.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return ye.apply(this, arguments)
                                  },
                                  isLoading: le
                                },
                                "Change Portfolio Moderation"
                              ),
                              null != ue && c.createElement(h.xv, null, ue),
                              c.createElement(
                                v.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return xe.apply(this, arguments)
                                  },
                                  isLoading: K
                                },
                                "Get User Portfolio Trie Size"
                              ),
                              null != D &&
                                c.createElement(h.xv, null, "Size: ", D)
                            )
                          )
                        ),
                        c.createElement(y.L, { makeActor: P, identity: t }),
                        c.createElement(S.y, { makeActor: P, identity: t }),
                        c.createElement(E.I, { makeActor: P, identity: t }),
                        c.createElement(b.F, {
                          title: "Migrate Thumbnail Image",
                          makeActor: P,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalImageStore",
                          loadObjectIdListFunc: "getAllLocalImageIds",
                          loadMainDataFunc: "getAllPortfolios",
                          migrateFunc: "migrateThumbImage",
                          tranformFunc: function (e, t) {
                            return e
                              .filter(function (e) {
                                return t.includes(e.thumbImageId)
                              })
                              .map(function (e) {
                                return [e.id]
                              })
                          },
                          useImageObject: k.RC,
                          isImageStore: !0
                        }),
                        c.createElement(b.F, {
                          title: "Migrate Portfolio Images",
                          makeActor: P,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalImageStore",
                          loadObjectIdListFunc: "getAllLocalImageIds",
                          loadMainDataFunc: "getAllPortfolios",
                          migrateFunc: "migratePortfolioImage",
                          tranformFunc: function (e, t) {
                            return e.flatMap(function (e) {
                              var n,
                                r = [],
                                a = 0,
                                l = Z(e.images)
                              try {
                                for (l.s(); !(n = l.n()).done; ) {
                                  var i = n.value
                                  t.includes(i.imageId) &&
                                    r.push([e.id, i.imageId, a]),
                                    (a += 1)
                                }
                              } catch (o) {
                                l.e(o)
                              } finally {
                                l.f()
                              }
                              return r
                            })
                          },
                          useImageObject: k.RC,
                          isImageStore: !0
                        })
                      ),
                      c.createElement(
                        v.zx,
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
            ;(t.default = (0, x.J3)(L)), r()
          } catch (Z) {
            r(Z)
          }
        },
        1
      )
    },
    1576: function (e, t, n) {
      "use strict"
      n.d(t, {
        y: function () {
          return f
        }
      })
      var r = n(15861),
        a = n(86854),
        l = n(87757),
        i = n.n(l),
        o = n(67294),
        c = n(27386),
        u = n(11972),
        s = n(51815),
        m = n(66985),
        f = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, o.useState)(null),
            f = (0, a.Z)(l, 2),
            p = f[0],
            h = f[1],
            d = (0, o.useState)(null),
            v = (0, a.Z)(d, 2),
            g = v[0],
            x = v[1],
            E = (0, o.useState)(!1),
            y = (0, a.Z)(E, 2),
            S = y[0],
            b = y[1],
            k = (0, o.useState)(!1),
            z = (0, a.Z)(k, 2),
            w = z[0],
            I = z[1]
          function A() {
            return (A = (0, r.Z)(
              i().mark(function e() {
                var r, a
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), b(!0), (e.next = 4), t(n)
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
                          return (e.prev = 14), b(!1), e.finish(14)
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
          function P() {
            return (P = (0, r.Z)(
              i().mark(function e() {
                var r, a
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), I(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getManager()
                        case 7:
                          ;(a = e.sent), h(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            m.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), I(!1), e.finish(14)
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
          return o.createElement(
            c.Qd,
            null,
            o.createElement(
              "h2",
              null,
              o.createElement(
                c.KF,
                null,
                o.createElement(
                  u.xu,
                  { flex: "1", textAlign: "left" },
                  o.createElement(u.X6, { size: "md" }, "Manager")
                ),
                o.createElement(c.XE, null)
              )
            ),
            o.createElement(
              c.Hk,
              { pb: 4 },
              o.createElement(
                u.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                o.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return A.apply(this, arguments)
                    },
                    isLoading: S
                  },
                  "Who am I?"
                ),
                null != g && o.createElement(u.xv, null, "Principal Id: ", g),
                o.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return P.apply(this, arguments)
                    },
                    isLoading: w
                  },
                  "Get Manager"
                ),
                null != p && o.createElement(u.xv, null, "Manager Id: ", p)
              )
            )
          )
        }
    },
    22407: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/portfolio",
        function () {
          return n(27095)
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
        return (t = 22407), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
