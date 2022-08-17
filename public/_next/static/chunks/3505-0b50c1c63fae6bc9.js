"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3505],
  {
    67994: function (e, t, n) {
      n.d(t, {
        F: function () {
          return v
        }
      })
      var r = n(41451),
        a = n(15861),
        u = n(86854),
        c = n(87757),
        i = n.n(c),
        o = n(67294),
        s = n(27386),
        l = n(11972),
        f = n(51815),
        p = n(66985),
        m = n(49162)
      function h(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ("string" === typeof e) return x(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              "Object" === n && e.constructor && (n = e.constructor.name)
              if ("Map" === n || "Set" === n) return Array.from(e)
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return x(e, t)
            })(e)) ||
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
        var u,
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
            ;(i = !0), (u = e)
          },
          f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (i) throw u
            }
          }
        }
      }
      function x(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var v = function (e) {
        var t = e.title,
          n = e.makeActor,
          c = e.loadObjectIdListFunc,
          x = e.loadMainDataFunc,
          v = e.loadLocalObjectStoreSize,
          d = e.migrateFunc,
          b = e.tranformFunc,
          k = e.useImageObject,
          g = e.identity,
          y = e.isImageStore,
          S = (0, o.useState)(null),
          Z = (0, u.Z)(S, 2),
          w = Z[0],
          I = Z[1],
          E = (0, o.useState)(null),
          C = (0, u.Z)(E, 2),
          L = C[0],
          A = C[1],
          z = (0, o.useState)(null),
          B = (0, u.Z)(z, 2),
          j = B[0],
          _ = B[1],
          F = (0, o.useState)(!1),
          O = (0, u.Z)(F, 2),
          R = O[0],
          M = O[1],
          P = (0, o.useState)(!1),
          N = (0, u.Z)(P, 2),
          T = N[0],
          U = N[1],
          X = (0, o.useState)(!1),
          G = (0, u.Z)(X, 2),
          K = G[0],
          H = G[1],
          J = (0, o.useState)(!1),
          Q = (0, u.Z)(J, 2),
          D = Q[0],
          $ = Q[1],
          q = (0, o.useState)(null),
          V = (0, u.Z)(q, 2),
          W = V[0],
          Y = V[1],
          ee = (0, o.useState)(null),
          te = (0, u.Z)(ee, 2),
          ne = te[0],
          re = te[1],
          ae = k(L)
        function ue() {
          return (ue = (0, a.Z)(
            i().mark(function e() {
              var t, r
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), H(!0), (e.next = 4), n(g)
                      case 4:
                        return (t = e.sent), (e.next = 7), t[v]()
                      case 7:
                        ;(r = e.sent), re(Number(r)), (e.next = 14)
                        break
                      case 11:
                        ;(e.prev = 11),
                          (e.t0 = e.catch(0)),
                          p.default.error(e.t0)
                      case 14:
                        return (e.prev = 14), H(!1), e.finish(14)
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
        function ce() {
          return (ce = (0, a.Z)(
            i().mark(function e() {
              var t, r, a, u
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), U(!0), (e.next = 4), n(g)
                      case 4:
                        return (t = e.sent), (e.next = 7), t[c]()
                      case 7:
                        return (r = e.sent), (e.next = 10), t[x]()
                      case 10:
                        ;(a = e.sent), (u = b(a, r)), Y(u), (e.next = 18)
                        break
                      case 15:
                        ;(e.prev = 15),
                          (e.t0 = e.catch(0)),
                          p.default.error(e.t0)
                      case 18:
                        return (e.prev = 18), U(!1), e.finish(18)
                      case 21:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 15, 18, 21]]
              )
            })
          )).apply(this, arguments)
        }
        function ie() {
          return (ie = (0, a.Z)(
            i().mark(function e() {
              var t, a, u, c, o, s, l, f
              return i().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), M(!0), (e.next = 4), n(g)
                      case 4:
                        ;(t = e.sent), (a = 0), (u = h(W)), (e.prev = 7), u.s()
                      case 9:
                        if ((c = u.n()).done) {
                          e.next = 28
                          break
                        }
                        if (((o = c.value), !D)) {
                          e.next = 13
                          break
                        }
                        return e.abrupt("break", 28)
                      case 13:
                        return (e.next = 15), t[d].apply(t, (0, r.Z)(o))
                      case 15:
                        if (!(s = e.sent).ok) {
                          e.next = 23
                          break
                        }
                        ;(l = s.ok),
                          (f = Array.isArray(o) ? o.join() : o),
                          I(
                            "Index "
                              .concat(a, ": Migrated inputModel=")
                              .concat(f, ", newObjectId=")
                              .concat(l)
                          ),
                          y ? A(l) : _(l),
                          (e.next = 25)
                        break
                      case 23:
                        return I(s.err), e.abrupt("break", 28)
                      case 25:
                        a += 1
                      case 26:
                        e.next = 9
                        break
                      case 28:
                        e.next = 33
                        break
                      case 30:
                        ;(e.prev = 30), (e.t0 = e.catch(7)), u.e(e.t0)
                      case 33:
                        return (e.prev = 33), u.f(), e.finish(33)
                      case 36:
                        e.next = 41
                        break
                      case 38:
                        ;(e.prev = 38),
                          (e.t1 = e.catch(0)),
                          p.default.error(e.t1)
                      case 41:
                        return (e.prev = 41), M(!1), e.finish(41)
                      case 44:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                null,
                [
                  [0, 38, 41, 44],
                  [7, 30, 33, 36]
                ]
              )
            })
          )).apply(this, arguments)
        }
        return o.createElement(
          s.Qd,
          null,
          o.createElement(
            "h2",
            null,
            o.createElement(
              s.KF,
              null,
              o.createElement(
                l.xu,
                { flex: "1", textAlign: "left" },
                o.createElement(l.X6, { size: "md" }, t)
              ),
              o.createElement(s.XE, null)
            )
          ),
          o.createElement(
            s.Hk,
            { pb: 4 },
            o.createElement(
              l.gC,
              { spacing: 4, align: "stretch", pb: "20px", textAlign: "center" },
              o.createElement(
                f.zx,
                {
                  h: "3rem",
                  size: "md",
                  colorScheme: "blue_1",
                  variant: "outline",
                  onClick: function () {
                    return ue.apply(this, arguments)
                  },
                  isLoading: K
                },
                "Get Local Object Store Size"
              ),
              null != ne && o.createElement(l.xv, null, "Total: ", ne),
              o.createElement(
                f.zx,
                {
                  h: "3rem",
                  size: "md",
                  colorScheme: "blue_1",
                  variant: "outline",
                  onClick: function () {
                    return ce.apply(this, arguments)
                  },
                  isLoading: T
                },
                "Prepare Migration List"
              ),
              null != W && o.createElement(l.xv, null, "Total: ", W.length),
              o.createElement(
                f.zx,
                {
                  h: "3rem",
                  size: "md",
                  colorScheme: "blue_1",
                  variant: "outline",
                  onClick: function () {
                    return ie.apply(this, arguments)
                  },
                  isLoading: R
                },
                "Start Migrating"
              ),
              null != w && o.createElement(l.xv, null, w),
              y && o.createElement(m.Z, { src: ae }),
              !y && o.createElement(l.xv, null, j),
              o.createElement(
                f.zx,
                {
                  h: "3rem",
                  size: "md",
                  colorScheme: "blue_1",
                  variant: "outline",
                  onClick: function () {
                    $(!D)
                  }
                },
                o.createElement(l.xv, null, D ? "Resume" : "Stop")
              )
            )
          )
        )
      }
    },
    29601: function (e, t, n) {
      n.d(t, {
        I: function () {
          return x
        }
      })
      var r = n(15861),
        a = n(86854),
        u = n(87757),
        c = n.n(u),
        i = n(67294),
        o = n(27386),
        s = n(11972),
        l = n(51815),
        f = n(84597),
        p = n(19483),
        m = n(31681),
        h = n(66985),
        x = function (e) {
          var t = e.makeActor,
            n = e.identity,
            u = (0, i.useState)(null),
            x = (0, a.Z)(u, 2),
            v = x[0],
            d = x[1],
            b = (0, i.useState)(null),
            k = (0, a.Z)(b, 2),
            g = k[0],
            y = k[1],
            S = (0, i.useState)(""),
            Z = (0, a.Z)(S, 2),
            w = Z[0],
            I = Z[1],
            E = (0, i.useState)(!1),
            C = (0, a.Z)(E, 2),
            L = C[0],
            A = C[1],
            z = (0, i.useState)(!1),
            B = (0, a.Z)(z, 2),
            j = B[0],
            _ = B[1],
            F = (0, i.useState)(!1),
            O = (0, a.Z)(F, 2),
            R = O[0],
            M = O[1]
          function P() {
            return (P = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), A(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent),
                            (e.next = 7),
                            r.getImageBucketsSpaceUsed()
                          )
                        case 7:
                          ;(a = e.sent), d(a), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), A(!1), e.finish(14)
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
          function N() {
            return T.apply(this, arguments)
          }
          function T() {
            return (T = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), _(!0), (e.next = 4), t(n)
                        case 4:
                          return (
                            (r = e.sent),
                            (e.next = 7),
                            r.getCurrentImageBucket()
                          )
                        case 7:
                          ;(a = e.sent), y(Number(a)), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
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
          function U() {
            return (U = (0, r.Z)(
              c().mark(function e() {
                var r, a
                return c().wrap(
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
                          return M(!0), (e.next = 6), t(n)
                        case 6:
                          return (
                            (r = e.sent),
                            (a = BigInt(w)),
                            (e.next = 10),
                            r.changeCurrentImageBucket(a)
                          )
                        case 10:
                          N(), (e.next = 16)
                          break
                        case 13:
                          ;(e.prev = 13),
                            (e.t0 = e.catch(0)),
                            h.default.error(e.t0)
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
            o.Qd,
            null,
            i.createElement(
              "h2",
              null,
              i.createElement(
                o.KF,
                null,
                i.createElement(
                  s.xu,
                  { flex: "1", textAlign: "left" },
                  i.createElement(s.X6, { size: "md" }, "Image Buckets")
                ),
                i.createElement(o.XE, null)
              )
            ),
            i.createElement(
              o.Hk,
              { pb: 4 },
              i.createElement(
                s.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                i.createElement(
                  l.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return P.apply(this, arguments)
                    },
                    isLoading: L
                  },
                  "Get Image Buckets Usage"
                ),
                v &&
                  i.createElement(p.g, {
                    usedSpaceArray: v,
                    title: "Image Buckets",
                    maxStorageLimitBytes: m.Ly.ImageBucketMaxStorageLimit
                  }),
                i.createElement(
                  l.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: N,
                    isLoading: j
                  },
                  "Get Current Image Bucket"
                ),
                null != g &&
                  i.createElement(s.xv, null, "Current Image Bucket: ", g),
                "New Image Bucket",
                i.createElement(
                  s.xu,
                  { py: "6px" },
                  i.createElement(f.II, {
                    placeholder: "Enter Bucket number",
                    w: "200px",
                    onChange: function (e) {
                      I(e.target.value)
                    },
                    value: w
                  })
                ),
                i.createElement(
                  l.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return U.apply(this, arguments)
                    },
                    isLoading: R
                  },
                  "Change Image Bucket"
                )
              )
            )
          )
        }
    },
    76989: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            RC: function () {
              return h
            },
            RL: function () {
              return m
            },
            iK: function () {
              return v
            },
            m3: function () {
              return x
            }
          })
          var a = n(15861),
            u = n(86854),
            c = n(87757),
            i = n.n(c),
            o = n(67294),
            s = n(82399),
            l = (n(24686), n(98400)),
            f = n(23256),
            p = (n(66985), e([s]))
          s = (p.then ? (await p)() : p)[0]
          var m = function (e) {
              var t = (0, o.useState)(""),
                n = (0, u.Z)(t, 2),
                r = n[0],
                c = n[1],
                p = (0, o.useState)(""),
                m = (0, u.Z)(p, 2),
                h = m[0],
                x = m[1],
                v = (0, l.oR)(f.Z).appContext
              return (
                (0, o.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        i().mark(function t() {
                          var n
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != h) {
                                    t.next = 4
                                    break
                                  }
                                  return c(null), t.abrupt("return")
                                case 4:
                                  return c(null), (t.next = 7), (0, s.cm)(e, v)
                                case 7:
                                  ;(n = t.sent), c(n), x(e), (t.next = 13)
                                  break
                                case 12:
                                  c(null)
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
              var t = (0, o.useState)(null),
                n = (0, u.Z)(t, 2),
                r = n[0],
                c = n[1],
                p = (0, o.useState)(""),
                m = (0, u.Z)(p, 2),
                h = m[0],
                x = m[1],
                v = (0, l.oR)(f.Z).appContext
              return (
                (0, o.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        i().mark(function t() {
                          var n
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != h) {
                                    t.next = 4
                                    break
                                  }
                                  return c(null), t.abrupt("return")
                                case 4:
                                  return c(null), (t.next = 7), (0, s.rn)(e, v)
                                case 7:
                                  ;(n = t.sent), c(n), x(e), (t.next = 13)
                                  break
                                case 12:
                                  c(null)
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
              var t = (0, o.useState)(null),
                n = (0, u.Z)(t, 2),
                r = n[0],
                c = n[1],
                p = (0, o.useState)(""),
                m = (0, u.Z)(p, 2),
                h = m[0],
                x = m[1],
                v = (0, l.oR)(f.Z).appContext
              return (
                (0, o.useEffect)(
                  function () {
                    function t() {
                      return (t = (0, a.Z)(
                        i().mark(function t() {
                          var n
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != h) {
                                    t.next = 4
                                    break
                                  }
                                  return c(null), t.abrupt("return")
                                case 4:
                                  return c(null), (t.next = 7), (0, s.b1)(e, v)
                                case 7:
                                  ;(n = t.sent), c(n), x(e), (t.next = 13)
                                  break
                                case 12:
                                  c(null)
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
            v = function (e) {
              var t = (0, o.useState)(null),
                n = (0, u.Z)(t, 2),
                r = n[0],
                c = n[1],
                p = (0, o.useState)(""),
                m = (0, u.Z)(p, 2),
                h = m[0],
                x = m[1],
                v = (0, l.oR)(f.Z).appContext
              return (
                (0, o.useEffect)(
                  function () {
                    var t = (function () {
                      var t = (0, a.Z)(
                        i().mark(function t() {
                          var n
                          return i().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e || "" == e) {
                                    t.next = 12
                                    break
                                  }
                                  if (e != h) {
                                    t.next = 4
                                    break
                                  }
                                  return c(null), t.abrupt("return")
                                case 4:
                                  return c(null), (t.next = 7), (0, s.SF)(e, v)
                                case 7:
                                  ;(n = t.sent), c(n), x(e), (t.next = 13)
                                  break
                                case 12:
                                  c(null)
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
        } catch (d) {
          r(d)
        }
      })
    },
    82399: function (e, t, n) {
      n.a(
        e,
        async function (e, r) {
          try {
            n.d(t, {
              SF: function () {
                return v
              },
              b1: function () {
                return x
              },
              cm: function () {
                return m
              },
              rn: function () {
                return h
              }
            })
            var a = n(15861),
              u = n(87757),
              c = n.n(u),
              i = n(31681),
              o = await Promise.resolve().then(n.bind(n, 24686)),
              s = o.makeUserProfileActor,
              l = o.makePortfolioActor,
              f = o.makeJobActor,
              p = o.makeChatActor,
              m = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t, n) {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d(
                                t,
                                s,
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
              h = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t, n) {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d(
                                t,
                                l,
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
              x = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t, n) {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d(
                                t,
                                f,
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
              v = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t, n) {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              d(
                                t,
                                p,
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
              d = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t, n, r, a) {
                    var u, i, o, s, l, f, p, m, h
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((u = b(t)),
                              (i = r || []),
                              (o = u.remote),
                              null != (s = i[o]))
                            ) {
                              e.next = 13
                              break
                            }
                            return (e.next = 7), n()
                          case 7:
                            return (
                              (l = e.sent),
                              (e.next = 10),
                              l.getImageBucketsCanisterIdList()
                            )
                          case 10:
                            ;(f = e.sent), a(f), (s = f[o])
                          case 13:
                            if (
                              ((p = window.location),
                              (m = p.protocol),
                              (h = p.hostname),
                              !(-1 != h.indexOf("localhost")))
                            ) {
                              e.next = 17
                              break
                            }
                            return e.abrupt(
                              "return",
                              ""
                                .concat(m, "//localhost:8000/image?id=")
                                .concat(t, "&canisterId=")
                                .concat(s)
                            )
                          case 17:
                            return e.abrupt(
                              "return",
                              ""
                                .concat(m, "//")
                                .concat(s, ".raw.ic0.app/image?id=")
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
              b = function (e) {
                var t = e.split(i.ZB.IdSeparator)
                return t.length == i.ZB.RemoteImageTokensSize
                  ? { remote: t[0] }
                  : { local: t[0] }
              }
            r()
          } catch (k) {
            r(k)
          }
        },
        1
      )
    },
    41451: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u
        }
      })
      var r = n(30907)
      var a = n(40181)
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, r.Z)(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          (0, a.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
    }
  }
])
