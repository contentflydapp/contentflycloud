;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8291],
  {
    46934: function (e, t, n) {
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
              m = n(11972),
              f = n(27386),
              h = n(51815),
              p = n(49697),
              g = n(95641),
              d = n(99171),
              v = n(29601),
              E = n(97221),
              x = n(77329),
              y = n(76989),
              k = n(92906),
              b = n(67994),
              S = n(98400),
              C = n(23256),
              F = e([y])
            function I(e, t) {
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
                if ("string" === typeof e) return L(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? L(e, t)
                    : void 0
                )
              }
            }
            function L(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            y = (F.then ? (await F)() : F)[0]
            var w = (await Promise.resolve().then(n.bind(n, 66985))).default,
              A = (await Promise.resolve().then(n.bind(n, 24686))).makeChatActor
            function _(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, u.useState)(null),
                c = (0, l.Z)(r, 2),
                o = c[0],
                k = c[1],
                F = (0, u.useState)(!1),
                z = (0, l.Z)(F, 2),
                L = z[0],
                _ = z[1],
                M = (0, S.oR)(C.Z).appContext.authProvider
              function B() {
                return (B = (0, a.Z)(
                  i().mark(function e() {
                    var n, r
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), _(!0), (e.next = 4), A(t, M)
                            case 4:
                              return (n = e.sent), (e.next = 7), n.size()
                            case 7:
                              ;(r = e.sent), k(r.toString()), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), w.error(e.t0)
                            case 14:
                              return (e.prev = 14), _(!1), e.finish(14)
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
                p.W,
                { height: "100vh" },
                u.createElement(
                  g.o,
                  null,
                  u.createElement(
                    s(),
                    null,
                    u.createElement("title", null, "Content Fly")
                  ),
                  u.createElement(
                    m.M5,
                    null,
                    u.createElement(
                      m.gC,
                      {
                        spacing: 4,
                        align: "stretch",
                        pb: "20px",
                        textAlign: "center"
                      },
                      u.createElement(d.t, null, "Content Fly Chat Admin"),
                      u.createElement(m.xv, null, "You have logged in!"),
                      u.createElement(
                        f.UQ,
                        { allowMultiple: !0 },
                        u.createElement(
                          f.Qd,
                          null,
                          u.createElement(
                            "h2",
                            null,
                            u.createElement(
                              f.KF,
                              null,
                              u.createElement(
                                m.xu,
                                { flex: "1", textAlign: "left" },
                                u.createElement(m.X6, { size: "md" }, "Chat")
                              ),
                              u.createElement(f.XE, null)
                            )
                          ),
                          u.createElement(
                            f.Hk,
                            { pb: 4 },
                            u.createElement(
                              m.gC,
                              {
                                spacing: 4,
                                align: "stretch",
                                pb: "20px",
                                textAlign: "center"
                              },
                              u.createElement(
                                h.zx,
                                {
                                  h: "3rem",
                                  size: "md",
                                  colorScheme: "blue_1",
                                  variant: "outline",
                                  onClick: function () {
                                    return B.apply(this, arguments)
                                  },
                                  isLoading: L
                                },
                                "Get No. of Chat Rooms"
                              ),
                              null != o &&
                                u.createElement(m.xv, null, "Total: ", o)
                            )
                          )
                        ),
                        u.createElement(x.L, { makeActor: A, identity: t }),
                        u.createElement(v.I, { makeActor: A, identity: t }),
                        u.createElement(E.g, { makeActor: A, identity: t }),
                        u.createElement(b.F, {
                          title: "Migrate Image Chat Messages",
                          makeActor: A,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalImageStore",
                          loadObjectIdListFunc: "getAllLocalImageIds",
                          loadMainDataFunc: "getAllChats",
                          migrateFunc: "migrateImageChatMessage",
                          tranformFunc: function (e, t) {
                            return e.flatMap(function (e) {
                              var n,
                                r = [],
                                a = 0,
                                l = I(e.chatMessages)
                              try {
                                for (l.s(); !(n = l.n()).done; ) {
                                  var c = n.value.message
                                  if (c.image) {
                                    var i = c.image
                                    t.includes(i) &&
                                      r.push([e.chatRoomId, i, a])
                                  }
                                  a += 1
                                }
                              } catch (u) {
                                l.e(u)
                              } finally {
                                l.f()
                              }
                              return r
                            })
                          },
                          useImageObject: y.iK,
                          isImageStore: !0
                        }),
                        u.createElement(b.F, {
                          title: "Migrate File Chat Messages",
                          makeActor: A,
                          identity: t,
                          loadLocalObjectStoreSize: "sizeOfLocalFileStore",
                          loadObjectIdListFunc: "getAllLocalFileIds",
                          loadMainDataFunc: "getAllChats",
                          migrateFunc: "migrateFileChatMessage",
                          tranformFunc: function (e, t) {
                            return e.flatMap(function (e) {
                              var n,
                                r = [],
                                a = 0,
                                l = I(e.chatMessages)
                              try {
                                for (l.s(); !(n = l.n()).done; ) {
                                  var c = n.value.message
                                  if (c.file) {
                                    var i = c.file.fileId
                                    t.includes(i) &&
                                      r.push([e.chatRoomId, i, a])
                                  }
                                  a += 1
                                }
                              } catch (u) {
                                l.e(u)
                              } finally {
                                l.f()
                              }
                              return r
                            })
                          },
                          useImageObject: y.iK,
                          isImageStore: !1
                        })
                      ),
                      u.createElement(
                        h.zx,
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
            ;(t.default = (0, k.J3)(_)), r()
          } catch (I) {
            r(I)
          }
        },
        1
      )
    },
    97221: function (e, t, n) {
      "use strict"
      n.d(t, {
        g: function () {
          return g
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
        h = n(31681),
        p = n(66985),
        g = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, i.useState)(null),
            g = (0, a.Z)(l, 2),
            d = g[0],
            v = g[1],
            E = (0, i.useState)(null),
            x = (0, a.Z)(E, 2),
            y = x[0],
            k = x[1],
            b = (0, i.useState)(""),
            S = (0, a.Z)(b, 2),
            C = S[0],
            F = S[1],
            w = (0, i.useState)(!1),
            A = (0, a.Z)(w, 2),
            I = A[0],
            z = A[1],
            L = (0, i.useState)(!1),
            _ = (0, a.Z)(L, 2),
            M = _[0],
            B = _[1],
            Z = (0, i.useState)(!1),
            O = (0, a.Z)(Z, 2),
            j = O[0],
            N = O[1]
          function X() {
            return (X = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
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
                          ;(a = e.sent), v(a), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
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
          function P() {
            return K.apply(this, arguments)
          }
          function K() {
            return (K = (0, r.Z)(
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
                          ;(a = e.sent), k(Number(a)), (e.next = 14)
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
          function R() {
            return (R = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), "" != C)) {
                            e.next = 3
                            break
                          }
                          return e.abrupt("return")
                        case 3:
                          return N(!0), (e.next = 6), t(n)
                        case 6:
                          return (
                            (r = e.sent),
                            (a = BigInt(C)),
                            (e.next = 10),
                            r.changeCurrentFileBucket(a)
                          )
                        case 10:
                          P(), (e.next = 16)
                          break
                        case 13:
                          ;(e.prev = 13),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0)
                        case 16:
                          return (e.prev = 16), N(!1), e.finish(16)
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
                      return X.apply(this, arguments)
                    },
                    isLoading: I
                  },
                  "Get File Buckets Usage"
                ),
                d &&
                  i.createElement(f.g, {
                    usedSpaceArray: d,
                    title: "File Buckets",
                    maxStorageLimitBytes: h.Ly.FileBucketMaxStorageLimit
                  }),
                i.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: P,
                    isLoading: M
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
                    value: C
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
                      return R.apply(this, arguments)
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
    43022: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/chat",
        function () {
          return n(46934)
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
        return (t = 43022), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
