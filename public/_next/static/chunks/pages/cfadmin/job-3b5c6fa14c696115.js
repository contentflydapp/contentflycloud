;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8989],
  {
    70355: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(15861),
              l = n(86854),
              c = n(87757),
              i = n.n(c),
              u = n(67294),
              o = n(9008),
              s = n.n(o),
              m = n(49697),
              f = n(95641),
              d = n(99171),
              p = n(11972),
              h = n(27386),
              g = n(51815),
              v = n(29601),
              E = n(97221),
              b = n(77329),
              y = n(76989),
              x = n(92906),
              k = n(66985),
              S = n(67994),
              I = n(31681),
              F = e([y])
            function A(e, t) {
              var n =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = z(e)) ||
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
                c = !0,
                i = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (c = e.done), e
                },
                e: function (e) {
                  ;(i = !0), (l = e)
                },
                f: function () {
                  try {
                    c || null == n.return || n.return()
                  } finally {
                    if (i) throw l
                  }
                }
              }
            }
            function z(e, t) {
              if (e) {
                if ("string" === typeof e) return C(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? C(e, t)
                    : void 0
                )
              }
            }
            function C(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            y = (F.then ? (await F)() : F)[0]
            var w = (await Promise.resolve().then(n.bind(n, 24686)))
              .makeJobActor
            function L(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, u.useState)(null),
                c = (0, l.Z)(r, 2),
                o = c[0],
                x = c[1],
                F = (0, u.useState)(!1),
                z = (0, l.Z)(F, 2),
                C = z[0],
                L = z[1],
                _ = (0, u.useState)(null),
                Z = (0, l.Z)(_, 2),
                B = Z[0],
                O = Z[1],
                J = (0, u.useState)(!1),
                j = (0, l.Z)(J, 2),
                M = j[0],
                N = j[1]
              function U() {
                return (U = (0, a.Z)(
                  i().mark(function e() {
                    var n, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                L(!0),
                                (e.next = 4),
                                w(t, I.Ho.InternetIdentity)
                              )
                            case 4:
                              return (n = e.sent), (e.next = 7), n.size()
                            case 7:
                              ;(r = e.sent), x(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11),
                                (e.t0 = e.catch(0)),
                                k.default.error(e.t0)
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
              function X() {
                return (X = (0, a.Z)(
                  i().mark(function e() {
                    var n, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                N(!0),
                                (e.next = 4),
                                w(t, I.Ho.InternetIdentity)
                              )
                            case 4:
                              return (
                                (n = e.sent), (e.next = 7), n.sizeOfUserJobs()
                              )
                            case 7:
                              ;(r = e.sent), O(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11),
                                (e.t0 = e.catch(0)),
                                k.default.error(e.t0)
                            case 14:
                              return (e.prev = 14), N(!1), e.finish(14)
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
              return u.createElement(
                m.W,
                { height: "100vh" },
                u.createElement(
                  f.o,
                  null,
                  u.createElement(
                    s(),
                    null,
                    u.createElement("title", null, "Content Fly")
                  ),
                  u.createElement(
                    p.M5,
                    null,
                    u.createElement(
                      p.gC,
                      {
                        spacing: 4,
                        align: "stretch",
                        pb: "20px",
                        textAlign: "center"
                      },
                      u.createElement(d.t, null, "Content Fly Job Admin"),
                      u.createElement(p.xv, null, "You have logged in!"),
                      u.createElement(
                        h.UQ,
                        { allowMultiple: !0 },
                        u.createElement(
                          h.Qd,
                          null,
                          u.createElement(
                            "h2",
                            null,
                            u.createElement(
                              h.KF,
                              null,
                              u.createElement(
                                p.xu,
                                { flex: "1", textAlign: "left" },
                                u.createElement(p.X6, { size: "md" }, "Job")
                              ),
                              u.createElement(h.XE, null)
                            )
                          ),
                          u.createElement(
                            h.Hk,
                            { pb: 4 },
                            u.createElement(
                              p.gC,
                              {
                                spacing: 4,
                                align: "stretch",
                                pb: "20px",
                                textAlign: "center"
                              },
                              u.createElement(
                                g.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return U.apply(this, arguments)
                                  },
                                  isLoading: C
                                },
                                "Get No. of Jobs"
                              ),
                              null != o &&
                                u.createElement(p.xv, null, "Total: ", o),
                              u.createElement(
                                g.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return X.apply(this, arguments)
                                  },
                                  isLoading: M
                                },
                                "Get User Jobs Trie Size"
                              ),
                              null != B && u.createElement(p.xv, null, B)
                            )
                          )
                        ),
                        u.createElement(b.L, { makeActor: w, identity: t }),
                        u.createElement(v.I, { makeActor: w, identity: t }),
                        u.createElement(E.g, { makeActor: w, identity: t }),
                        u.createElement(S.F, {
                          title: "Migrate Preferred Styled Images",
                          makeActor: w,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalImageStore",
                          loadObjectIdListFunc: "getAllLocalImageIds",
                          loadMainDataFunc: "getAllJobs",
                          migrateFunc: "migrateJobPreferredStyledImages",
                          tranformFunc: function (e, t) {
                            return e.flatMap(function (e) {
                              var n,
                                r = [],
                                a = 0,
                                l = A(e.preferredStyledImages)
                              try {
                                for (l.s(); !(n = l.n()).done; ) {
                                  var c = n.value
                                  t.includes(c.imageId) &&
                                    r.push([e.id, c.imageId, a]),
                                    (a += 1)
                                }
                              } catch (i) {
                                l.e(i)
                              } finally {
                                l.f()
                              }
                              return r
                            })
                          },
                          useImageObject: y.m3,
                          isImageStore: !0
                        }),
                        u.createElement(S.F, {
                          title: "Migrate Additonal Docs",
                          makeActor: w,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalFileStore",
                          loadObjectIdListFunc: "getAllLocalFileIds",
                          loadMainDataFunc: "getAllJobs",
                          migrateFunc: "migrateJobAdditionalDocs",
                          tranformFunc: function (e, t) {
                            return e.flatMap(function (e) {
                              var n,
                                r = [],
                                a = 0,
                                l = A(e.additionalDocs)
                              try {
                                for (l.s(); !(n = l.n()).done; ) {
                                  var c = n.value
                                  t.includes(c.fileId) &&
                                    r.push([e.id, c.fileId, a]),
                                    (a += 1)
                                }
                              } catch (i) {
                                l.e(i)
                              } finally {
                                l.f()
                              }
                              return r
                            })
                          },
                          useImageObject: y.m3,
                          isImageStore: !1
                        })
                      ),
                      u.createElement(
                        g.zx,
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
          } catch (A) {
            r(A)
          }
        },
        1
      )
    },
    97221: function (e, t, n) {
      "use strict"
      n.d(t, {
        g: function () {
          return h
        }
      })
      var r = n(15861),
        a = n(86854),
        l = n(87757),
        c = n.n(l),
        i = n(67294),
        u = n(27386),
        o = n(11972),
        s = n(51815),
        m = n(84597),
        f = n(19483),
        d = n(31681),
        p = n(66985),
        h = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, i.useState)(null),
            h = (0, a.Z)(l, 2),
            g = h[0],
            v = h[1],
            E = (0, i.useState)(null),
            b = (0, a.Z)(E, 2),
            y = b[0],
            x = b[1],
            k = (0, i.useState)(""),
            S = (0, a.Z)(k, 2),
            I = S[0],
            F = S[1],
            w = (0, i.useState)(!1),
            A = (0, a.Z)(w, 2),
            z = A[0],
            C = A[1],
            L = (0, i.useState)(!1),
            _ = (0, a.Z)(L, 2),
            Z = _[0],
            B = _[1],
            O = (0, i.useState)(!1),
            J = (0, a.Z)(O, 2),
            j = J[0],
            M = J[1]
          function N() {
            return (N = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), C(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent),
                            (e.next = 7),
                            r.getFileBucketsSpaceUsed()
                          )
                        case 7:
                          ;(a = e.sent), v(a), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), C(!1), e.finish(14)
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
            return X.apply(this, arguments)
          }
          function X() {
            return (X = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), B(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent), (e.next = 7), r.getCurrentFileBucket()
                          )
                        case 7:
                          ;(a = e.sent), x(Number(a)), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), B(!1), e.finish(14)
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
          function D() {
            return (D = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), "" != I)) {
                            e.next = 3
                            break
                          }
                          return e.abrupt("return")
                        case 3:
                          return M(!0), (e.next = 6), t(n)
                        case 6:
                          return (
                            (r = e.sent),
                            (a = BigInt(I)),
                            (e.next = 10),
                            r.changeCurrentFileBucket(a)
                          )
                        case 10:
                          U(), (e.next = 16)
                          break
                        case 13:
                          ;(e.prev = 13),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
                        case 16:
                          return (e.prev = 16), M(!1), e.finish(16)
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
          return i.createElement(
            u.Qd,
            null,
            i.createElement(
              "h2",
              null,
              i.createElement(
                u.KF,
                null,
                i.createElement(
                  o.xu,
                  { flex: "1", textAlign: "left" },
                  i.createElement(o.X6, { size: "md" }, "File Buckets")
                ),
                i.createElement(u.XE, null)
              )
            ),
            i.createElement(
              u.Hk,
              { pb: 4 },
              i.createElement(
                o.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                i.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return N.apply(this, arguments)
                    },
                    isLoading: z
                  },
                  "Get File Buckets Usage"
                ),
                g &&
                  i.createElement(f.g, {
                    usedSpaceArray: g,
                    title: "File Buckets",
                    maxStorageLimitBytes: d.Ly.FileBucketMaxStorageLimit
                  }),
                i.createElement(
                  s.zx,
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
                null != y &&
                  i.createElement(o.xv, null, "Current File Bucket: ", y),
                "New File Bucket",
                i.createElement(
                  o.xu,
                  { py: "6px" },
                  i.createElement(m.II, {
                    placeholder: "Enter Bucket number",
                    w: "200px",
                    onChange: function (e) {
                      F(e.target.value)
                    },
                    value: I
                  })
                ),
                i.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return D.apply(this, arguments)
                    },
                    isLoading: j
                  },
                  "Change File Bucket"
                )
              )
            )
          )
        }
    },
    31901: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/job",
        function () {
          return n(70355)
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
        return (t = 31901), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
