;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8890],
  {
    73535: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.r(t)
          var a = n(15861),
            o = n(86854),
            c = n(87757),
            l = n.n(c),
            u = n(67294),
            i = n(11163),
            s = n(74865),
            p = n.n(s),
            d = n(13130),
            f = n(92906),
            m = n(31681),
            b = n(98400),
            y = n(23256),
            x = n(24686),
            h = n(66985),
            v = n(33224),
            g = n(89314),
            E = n(48954),
            w = n(37119),
            S = n(93308),
            k = e([d, w, S])
          function A(e, t) {
            var n =
              ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = U(e)) ||
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
            var o,
              c = !0,
              l = !1
            return {
              s: function () {
                n = n.call(e)
              },
              n: function () {
                var e = n.next()
                return (c = e.done), e
              },
              e: function (e) {
                ;(l = !0), (o = e)
              },
              f: function () {
                try {
                  c || null == n.return || n.return()
                } finally {
                  if (l) throw o
                }
              }
            }
          }
          function U(e, t) {
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
          ;[d, w, S] = k.then ? (await k)() : k
          var J = (0, u.lazy)(function () {
            return Promise.all([
              n.e(994),
              n.e(7386),
              n.e(1141),
              n.e(2512),
              n.e(8005),
              n.e(9575),
              n.e(6223),
              n.e(4813),
              n.e(990),
              n.e(908),
              n.e(953)
            ])
              .then(n.bind(n, 908))
              .then(function (e) {
                return { default: e.JobViewerContainer }
              })
          })
          function I(e) {
            var t = e.identity,
              n = e.logout,
              r = e.triggerAuthUpdate,
              c = (0, i.useRouter)(),
              s = null != c.query.id,
              f = (0, u.useState)(s),
              k = (0, o.Z)(f, 2),
              U = k[0],
              C = k[1],
              I = (0, u.useState)(null),
              T = (0, o.Z)(I, 2),
              Z = T[0],
              z = T[1],
              O = (0, u.useState)(!0),
              _ = (0, o.Z)(O, 2),
              j = _[0],
              B = _[1],
              V = (0, u.useState)(1),
              W = (0, o.Z)(V, 2),
              M = W[0],
              P = W[1],
              R = (0, b.oR)(y.Z),
              L = R.appContext,
              N = R.user.id,
              q = (0, u.useState)(null),
              X = (0, o.Z)(q, 2),
              F = X[0],
              G = X[1],
              D = (0, u.useState)(null),
              H = (0, o.Z)(D, 2),
              $ = H[0],
              Y = H[1],
              Q = (0, u.useState)(E.Og.value),
              K = (0, o.Z)(Q, 2),
              ee = K[0],
              te = K[1],
              ne = (0, u.useState)(E.M0.value),
              re = (0, o.Z)(ne, 2),
              ae = re[0],
              oe = re[1],
              ce = R.user.userType(),
              le = (0, u.useState)(ce),
              ue = (0, o.Z)(le, 2),
              ie = ue[0],
              se = ue[1],
              pe = m.EJ.UserRole,
              de = pe.buyer,
              fe = pe.creator,
              me = ie == de,
              be = ie == fe,
              ye = c.query.id
            function xe(e) {
              return he.apply(this, arguments)
            }
            function he() {
              return (
                (he = (0, a.Z)(
                  l().mark(function e(t) {
                    var n, r
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), (0, x.makeUserProfileActor)()
                          case 2:
                            return (
                              (n = e.sent),
                              (e.next = 5),
                              n.queryBrandBasicByUserIds([t])
                            )
                          case 5:
                            return (r = e.sent), e.abrupt("return", r)
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                he.apply(this, arguments)
              )
            }
            function ve() {
              return (
                (ve = (0, a.Z)(
                  l().mark(function e(t) {
                    var n, r, a, o, c, u
                    return l().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), xe(t)
                          case 2:
                            ;(n = e.sent), (r = A(n))
                            try {
                              for (r.s(); !(a = r.n()).done; )
                                (o = a.value),
                                  (c = o.brand),
                                  (u = o.profileImageId),
                                  G(c),
                                  Y(u)
                            } catch (l) {
                              r.e(l)
                            } finally {
                              r.f()
                            }
                          case 5:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                ve.apply(this, arguments)
              )
            }
            function ge(e) {
              return Ee.apply(this, arguments)
            }
            function Ee() {
              return (Ee = (0, a.Z)(
                l().mark(function e(t) {
                  var n, r, a
                  return l().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((p().start(), (e.prev = 1), null == t)) {
                              e.next = 14
                              break
                            }
                            return (e.next = 5), (0, x.makeJobActor)()
                          case 5:
                            return (
                              (n = e.sent), (e.next = 8), n.loadJob(Number(t))
                            )
                          case 8:
                            if (!((r = e.sent).length > 0)) {
                              e.next = 14
                              break
                            }
                            return (
                              ((a = r[0]).brand = F),
                              (a.profileImageId = $),
                              e.abrupt("return", a)
                            )
                          case 14:
                            return e.abrupt("return", null)
                          case 17:
                            ;(e.prev = 17),
                              (e.t0 = e.catch(1)),
                              h.default.error(e.t0)
                          case 20:
                            return (e.prev = 20), p().done(), e.finish(20)
                          case 23:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 17, 20, 23]]
                  )
                })
              )).apply(this, arguments)
            }
            ;(0, u.useEffect)(
              function () {
                C(s), B(!0), s || z(null)
              },
              [window.location.search]
            ),
              (0, u.useEffect)(
                function () {
                  null != N &&
                    me &&
                    (function (e) {
                      ve.apply(this, arguments)
                    })(N)
                },
                [N, ie]
              ),
              (0, u.useEffect)(
                function () {
                  var e = Z
                  null != e &&
                    me &&
                    ((e.brand = F), (e.profileImageId = $), z(e))
                },
                [F, $]
              ),
              (0, u.useEffect)(
                function () {
                  function e() {
                    return (e = (0, a.Z)(
                      l().mark(function e() {
                        var t, n, r, a, o, c
                        return l().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), ge(ye)
                              case 2:
                                if (null == (t = e.sent)) {
                                  e.next = 13
                                  break
                                }
                                if (((n = t), !be)) {
                                  e.next = 12
                                  break
                                }
                                return (e.next = 8), xe(n.createdBy)
                              case 8:
                                ;(r = e.sent).length > 0 &&
                                  ((a = r[0]),
                                  (o = a.brand),
                                  (c = a.profileImageId),
                                  (n.brand = o),
                                  (n.profileImageId = c),
                                  z(n)),
                                  (e.next = 13)
                                break
                              case 12:
                                me &&
                                  ((n.brand = F), (n.profileImageId = $), z(n))
                              case 13:
                              case "end":
                                return e.stop()
                            }
                        }, e)
                      })
                    )).apply(this, arguments)
                  }
                  L.setRootPageId(m.gw.MyJobs),
                    null != ye &&
                      (function () {
                        e.apply(this, arguments)
                      })()
                },
                [ye]
              )
            var we = function (e) {
              z(e), C(!0)
              var t = "id=".concat(e.id)
              ;(0, g.c)(c, "myjobs", t)
            }
            return u.createElement(
              d.Z,
              {
                activeLink: m.Az.MyJobs,
                hideSideBar: null == n,
                hideBottomBar: j,
                opacity: M,
                setOpacity: P,
                identity: t,
                logout: n,
                triggerAuthUpdate: r,
                isHideLogo: !0
              },
              !U &&
                null != F &&
                null != $ &&
                me &&
                u.createElement(w.q, {
                  identity: t,
                  openJob: we,
                  logout: n,
                  triggerAuthUpdate: r,
                  opacity: null == Z ? 1 : 0,
                  display: null == Z ? "block" : "none",
                  brandName: F,
                  brandProfileImageId: $,
                  brandUserId: N,
                  selectedJobStatus: ee,
                  setSelectedJobStatus: te,
                  selectedJobType: ae,
                  setSelectedJobType: oe,
                  setViewAsUserType: se,
                  viewAsUserType: ie
                }),
              !U &&
                be &&
                u.createElement(S.P, {
                  identity: t,
                  openJob: we,
                  logout: n,
                  triggerAuthUpdate: r,
                  opacity: null == Z ? 1 : 0,
                  display: null == Z ? "block" : "none",
                  selectedJobStatus: ee,
                  setSelectedJobStatus: te,
                  selectedJobType: ae,
                  setSelectedJobType: oe,
                  setViewAsUserType: se,
                  viewAsUserType: ie
                }),
              null != Z &&
                u.createElement(
                  u.Suspense,
                  { fallback: u.createElement(v.j, null) },
                  u.createElement(J, {
                    job: Z,
                    gotoRoot: function () {
                      z(null), C(!1), (0, g.c)(c, "myjobs")
                    },
                    identity: t,
                    logout: n,
                    triggerAuthUpdate: r,
                    setHideBottomBar: B
                  })
                )
            )
          }
          ;(t.default = (0, f.vV)(I)), r()
        } catch (A) {
          r(A)
        }
      })
    },
    17735: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.d(t, {
              M: function () {
                return C
              }
            })
            var a = n(15861),
              o = n(86854),
              c = n(87757),
              l = n.n(c),
              u = n(67294),
              i = n(45607),
              s = n(11972),
              p = n(51815),
              d = n(34332),
              f = n(39720),
              m = n(48954),
              b = n(31681),
              y = n(66985),
              x = n(66897),
              h = n(33224),
              v = n(5508),
              g = n(38725),
              E = n(8984),
              w = n(35494),
              S = n(31603),
              k = n(98400),
              J = n(23256),
              A = e([d])
            function I(e, t) {
              var n =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = T(e)) ||
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
              var o,
                c = !0,
                l = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (c = e.done), e
                },
                e: function (e) {
                  ;(l = !0), (o = e)
                },
                f: function () {
                  try {
                    c || null == n.return || n.return()
                  } finally {
                    if (l) throw o
                  }
                }
              }
            }
            function T(e, t) {
              if (e) {
                if ("string" === typeof e) return Z(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Z(e, t)
                    : void 0
                )
              }
            }
            function Z(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            d = (A.then ? (await A)() : A)[0]
            var U = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeJobActor,
              C = function (e) {
                var t = e.identity,
                  n = e.openJob,
                  r = e.brandName,
                  c = e.brandProfileImageId,
                  A = e.brandUserId,
                  C = e.selectedJobStatus,
                  T = e.setSelectedJobStatus,
                  Z = e.selectedJobType,
                  z = e.setSelectedJobType,
                  O = e.viewAsUserType,
                  _ = e.setViewAsUserType,
                  j = (0, k.oR)(J.Z).appContext.candidAuthProvider(),
                  B = (0, u.useState)(b.EJ.DefaultSortOption),
                  V = (0, o.Z)(B, 2),
                  W = V[0],
                  M = V[1],
                  P = (0, u.useState)(!1),
                  R = (0, o.Z)(P, 2),
                  L = R[0],
                  N = R[1],
                  q = (0, u.useState)(!1),
                  X = (0, o.Z)(q, 2),
                  F = X[0],
                  G = X[1],
                  D = (0, u.useState)(0),
                  H = (0, o.Z)(D, 2),
                  $ = H[0],
                  Y = H[1],
                  Q = (0, u.useState)([]),
                  K = (0, o.Z)(Q, 2),
                  ee = K[0],
                  te = K[1],
                  ne = (0, u.useState)(0),
                  re = (0, o.Z)(ne, 2),
                  ae = re[0],
                  oe = re[1],
                  ce = {},
                  le = (0, i.pm)(),
                  ue = function (e) {
                    var t = m.ts.draft,
                      n = m.ts.started,
                      r = m.By.started
                    switch (e) {
                      case m.Og.value:
                        return []
                      case n:
                        return (0, v.go)((0, v.G8)(r))
                      case t:
                        return (0, v.go)((0, v.G8)(t))
                      default:
                        return []
                    }
                  }
                function ie() {
                  return (ie = (0, a.Z)(
                    l().mark(function e() {
                      var t, n, r, a, o, c, u
                      return l().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (N(!0),
                                  G(!1),
                                  (e.prev = 2),
                                  0 == $ && te([]),
                                  (t = m.ts.started),
                                  (n = m.ts.completed),
                                  ![t, n].includes(C))
                                ) {
                                  e.next = 8
                                  break
                                }
                                return (e.next = 8), pe()
                              case 8:
                                return (
                                  (r = b.EJ.SortOptions[W].candid),
                                  (a = ue(C)),
                                  (e.next = 12),
                                  U()
                                )
                              case 12:
                                return (
                                  (o = e.sent),
                                  (e.next = 15),
                                  o.queryAllJobsBy(
                                    $,
                                    b.EJ.PageSize,
                                    [],
                                    [],
                                    r,
                                    b.EJ.ExpiredNumDays,
                                    a,
                                    [Number(A)]
                                  )
                                )
                              case 15:
                                ;(c = e.sent),
                                  G(0 == c.length || c.length < b.EJ.PageSize),
                                  c.length > 0
                                    ? ((c = se(c)),
                                      0 == $
                                        ? te(c)
                                        : ((u = ee.concat(c)), te(u)))
                                    : 0 == $ && te(c),
                                  (e.next = 24)
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(2)),
                                  y.default.error(e.t0),
                                  (0, x.showStandardErrorMesg)(le)
                              case 24:
                                return (e.prev = 24), N(!1), e.finish(24)
                              case 27:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[2, 20, 24, 27]]
                      )
                    })
                  )).apply(this, arguments)
                }
                var se = function (e) {
                  var t = e,
                    n = m.ts.started,
                    a = m.ts.completed,
                    o = b.Op.Completed,
                    l = b.Op.DisputeResolved,
                    u = function (e) {
                      return [o, l].includes(e)
                    }
                  switch (C) {
                    case n:
                      t = t.filter(function (e) {
                        var t = ce[e.id]
                        return null != t && !u(t)
                      })
                      break
                    case a:
                      t = t.filter(function (e) {
                        var t = ce[e.id]
                        return u(t)
                      })
                  }
                  return (t = t.map(function (e) {
                    return (e.brand = r), (e.profileImageId = c), e
                  }))
                }
                ;(0, u.useEffect)(
                  function () {
                    Z == m.O4.contest
                      ? te([])
                      : (function () {
                          ie.apply(this, arguments)
                        })()
                  },
                  [$, W, ae, Z, C]
                )
                var pe = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e() {
                      var t, n, r, a, o, c, u
                      return l().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), U()
                              case 3:
                                return (
                                  (t = e.sent),
                                  (e.next = 6),
                                  t.findMyJobFlowBasic(A, j)
                                )
                              case 6:
                                if (!(n = e.sent).ok) {
                                  e.next = 13
                                  break
                                }
                                ;(r = n.ok), (a = I(r))
                                try {
                                  for (a.s(); !(o = a.n()).done; )
                                    (c = o.value),
                                      (u = Number(c.jobId)),
                                      (ce[u] = (0, v.wI)(c.state))
                                } catch (l) {
                                  a.e(l)
                                } finally {
                                  a.f()
                                }
                                e.next = 15
                                break
                              case 13:
                                if (!n.err) {
                                  e.next = 15
                                  break
                                }
                                throw new Error(n.err)
                              case 15:
                                e.next = 21
                                break
                              case 17:
                                ;(e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  y.default.error(e.t0),
                                  (0, x.showStandardErrorMesg)(le)
                              case 21:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                return u.createElement(
                  s.xu,
                  { bgColor: "gray_light3", mt: { base: "16px", md: "0px" } },
                  u.createElement(
                    s.Ug,
                    {
                      bgColor: "white",
                      pb: "10px",
                      px: { base: "6px", md: "24px" }
                    },
                    u.createElement(w.X, {
                      selectedJobStatus: C,
                      onChangeJobStatus: function (e) {
                        T(e), Y(0)
                      }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(E.C, {
                      setViewAsUserType: _,
                      viewAsUserType: O,
                      display: { base: "flex", md: "none" }
                    })
                  ),
                  u.createElement(
                    s.Ug,
                    {
                      bgColor: "white",
                      pb: "10px",
                      px: { base: "6px", md: "24px" }
                    },
                    u.createElement(S.G, {
                      selectedJobType: Z,
                      onChangeJobType: function (e) {
                        z(e), Y(0)
                      }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(E.C, {
                      setViewAsUserType: _,
                      viewAsUserType: O,
                      display: { base: "none", md: "flex" }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(g.t, {
                      onClick: function () {
                        oe(ae + 1)
                      },
                      display: { base: "none", md: "flex" }
                    }),
                    u.createElement(f.M, { sortBy: W, setSortBy: M })
                  ),
                  L && u.createElement(h.j, null),
                  !L &&
                    0 == ee.length &&
                    u.createElement(
                      s.gC,
                      {
                        spacing: "36px",
                        pt: "30px",
                        px: "18px",
                        bg: "gray_light3"
                      },
                      u.createElement(
                        s.X6,
                        { size: "lg", textAlign: "center", color: "black" },
                        "No jobs here\u2026"
                      )
                    ),
                  u.createElement(d.W, {
                    px: { base: "10px", md: "20px" },
                    jobs: ee,
                    identity: t,
                    openJob: n,
                    isHideBrandInfo: !0
                  }),
                  ee.length > 0 &&
                    !F &&
                    u.createElement(
                      s.M5,
                      { mt: "30px", pb: { base: "40px", md: "12px" } },
                      u.createElement(
                        p.zx,
                        {
                          w: "240px",
                          color: "purple",
                          borderColor: "purple",
                          variant: "outline",
                          onClick: function () {
                            Y($ + 1)
                          }
                        },
                        "Load More"
                      )
                    )
                )
              }
            r()
          } catch (I) {
            r(I)
          }
        },
        1
      )
    },
    88827: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.d(t, {
              e: function () {
                return I
              }
            })
            var a = n(15861),
              o = n(86854),
              c = n(87757),
              l = n.n(c),
              u = n(67294),
              i = n(45607),
              s = n(11972),
              p = n(51815),
              d = n(34332),
              f = n(39720),
              m = n(48954),
              b = n(31681),
              y = n(66985),
              x = n(66897),
              h = n(33224),
              v = n(5508),
              g = n(38725),
              E = n(8984),
              w = n(31603),
              S = n(98400),
              k = n(23256),
              J = n(24686),
              A = n(82465),
              U = e([d])
            function T(e, t) {
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
              var o,
                c = !0,
                l = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (c = e.done), e
                },
                e: function (e) {
                  ;(l = !0), (o = e)
                },
                f: function () {
                  try {
                    c || null == n.return || n.return()
                  } finally {
                    if (l) throw o
                  }
                }
              }
            }
            function Z(e, t) {
              if (e) {
                if ("string" === typeof e) return z(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? z(e, t)
                    : void 0
                )
              }
            }
            function z(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
              return r
            }
            d = (U.then ? (await U)() : U)[0]
            var C = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeJobActor,
              I = function (e) {
                var t = e.identity,
                  n = e.openJob,
                  r = e.selectedJobStatus,
                  c = e.setSelectedJobStatus,
                  U = e.selectedJobType,
                  I = e.setSelectedJobType,
                  Z = e.viewAsUserType,
                  z = e.setViewAsUserType,
                  O = (0, S.oR)(k.Z),
                  _ = O.user.id,
                  j = O.appContext.candidAuthProvider(),
                  B = (0, u.useState)(b.EJ.DefaultSortOption),
                  V = (0, o.Z)(B, 2),
                  W = V[0],
                  M = V[1],
                  P = (0, u.useState)(!1),
                  R = (0, o.Z)(P, 2),
                  L = R[0],
                  N = R[1],
                  q = (0, u.useState)(!1),
                  X = (0, o.Z)(q, 2),
                  F = X[0],
                  G = X[1],
                  D = (0, u.useState)(0),
                  H = (0, o.Z)(D, 2),
                  $ = H[0],
                  Y = H[1],
                  Q = (0, u.useState)([]),
                  K = (0, o.Z)(Q, 2),
                  ee = K[0],
                  te = K[1],
                  ne = (0, u.useState)(0),
                  re = (0, o.Z)(ne, 2),
                  ae = re[0],
                  oe = re[1],
                  ce = {},
                  le = (0, i.pm)()
                function ue() {
                  return (ue = (0, a.Z)(
                    l().mark(function e() {
                      var t, n, a, o, c, u, i
                      return l().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (N(!0),
                                  G(!1),
                                  (e.prev = 2),
                                  0 == $ && te([]),
                                  (t = m.FW.started),
                                  (n = m.FW.completed),
                                  (a = m.FW.saved),
                                  ![t, n, a].includes(r))
                                ) {
                                  e.next = 8
                                  break
                                }
                                return (e.next = 8), de()
                              case 8:
                                return (
                                  (o = b.EJ.SortOptions[W].candid),
                                  (e.next = 11),
                                  C()
                                )
                              case 11:
                                return (
                                  (c = e.sent),
                                  (e.next = 14),
                                  c.queryMyCreatorJobs(
                                    $,
                                    b.EJ.PageSize,
                                    o,
                                    Number(_)
                                  )
                                )
                              case 14:
                                if (
                                  ((u = e.sent),
                                  G(0 == u.length || u.length < b.EJ.PageSize),
                                  !(u.length > 0))
                                ) {
                                  e.next = 23
                                  break
                                }
                                return (e.next = 19), ie(u)
                              case 19:
                                ;(u = e.sent),
                                  0 == $ ? te(u) : ((i = ee.concat(u)), te(i)),
                                  (e.next = 24)
                                break
                              case 23:
                                0 == $ && te(u)
                              case 24:
                                e.next = 30
                                break
                              case 26:
                                ;(e.prev = 26),
                                  (e.t0 = e.catch(2)),
                                  y.default.error(e.t0),
                                  (0, x.showStandardErrorMesg)(le)
                              case 30:
                                return (e.prev = 30), N(!1), e.finish(30)
                              case 33:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[2, 26, 30, 33]]
                      )
                    })
                  )).apply(this, arguments)
                }
                var ie = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t) {
                      var n, a, o, c, u, i, s, p, d, f, y, x, h, v, g
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              ;(n = t),
                                (a = m.FW.started),
                                (o = m.FW.completed),
                                (c = m.FW.saved),
                                (u = b.Op.Completed),
                                (i = b.Op.DisputeResolved),
                                (s = function (e) {
                                  return [u, i].includes(e)
                                }),
                                (e.t0 = r),
                                (e.next =
                                  e.t0 === a
                                    ? 7
                                    : e.t0 === o
                                    ? 9
                                    : e.t0 === c
                                    ? 11
                                    : 13)
                              break
                            case 7:
                              return (
                                (n = n.filter(function (e) {
                                  var t = ce[e.id]
                                  return null != t && !s(t)
                                })),
                                e.abrupt("break", 13)
                              )
                            case 9:
                              return (
                                (n = n.filter(function (e) {
                                  var t = ce[e.id]
                                  return s(t)
                                })),
                                e.abrupt("break", 13)
                              )
                            case 11:
                              return (
                                (n = n.filter(function (e) {
                                  return null == ce[e.id]
                                })),
                                e.abrupt("break", 13)
                              )
                            case 13:
                              return (
                                (p = n.map(function (e) {
                                  return e.createdBy
                                })),
                                (e.next = 16),
                                se(p)
                              )
                            case 16:
                              ;(d = e.sent), (f = {}), (y = T(d))
                              try {
                                for (y.s(); !(x = y.n()).done; )
                                  (h = x.value),
                                    (v = h.brand),
                                    (g = h.profileImageId),
                                    (f[h.userId] = {
                                      brand: v,
                                      profileImageId: g
                                    })
                              } catch (l) {
                                y.e(l)
                              } finally {
                                y.f()
                              }
                              return (
                                (n = n.map(function (e) {
                                  var t = f[e.createdBy]
                                  return (
                                    (e.brand = t.brand),
                                    (e.profileImageId = t.profileImageId),
                                    e
                                  )
                                })),
                                e.abrupt("return", n)
                              )
                            case 22:
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
                function se(e) {
                  return pe.apply(this, arguments)
                }
                function pe() {
                  return (pe = (0, a.Z)(
                    l().mark(function e(t) {
                      var n, r
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), (0, J.makeUserProfileActor)()
                            case 2:
                              return (
                                (n = e.sent),
                                (e.next = 5),
                                n.queryBrandBasicByUserIds(t)
                              )
                            case 5:
                              return (r = e.sent), e.abrupt("return", r)
                            case 7:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )).apply(this, arguments)
                }
                ;(0, u.useEffect)(
                  function () {
                    U == m.O4.contest
                      ? te([])
                      : (function () {
                          ue.apply(this, arguments)
                        })()
                  },
                  [$, W, ae, U, r]
                )
                var de = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e() {
                      var t, n, r, a, o, c, u
                      return l().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.prev = 0), (e.next = 3), C()
                              case 3:
                                return (
                                  (t = e.sent),
                                  (e.next = 6),
                                  t.findMyJobFlowBasic(_, j)
                                )
                              case 6:
                                if (!(n = e.sent).ok) {
                                  e.next = 13
                                  break
                                }
                                ;(r = n.ok), (a = T(r))
                                try {
                                  for (a.s(); !(o = a.n()).done; )
                                    (c = o.value),
                                      (u = Number(c.jobId)),
                                      (ce[u] = (0, v.wI)(c.state))
                                } catch (l) {
                                  a.e(l)
                                } finally {
                                  a.f()
                                }
                                e.next = 15
                                break
                              case 13:
                                if (!n.err) {
                                  e.next = 15
                                  break
                                }
                                throw new Error(n.err)
                              case 15:
                                e.next = 21
                                break
                              case 17:
                                ;(e.prev = 17),
                                  (e.t0 = e.catch(0)),
                                  y.default.error(e.t0),
                                  (0, x.showStandardErrorMesg)(le)
                              case 21:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[0, 17]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()
                return u.createElement(
                  s.xu,
                  { bgColor: "gray_light3", mt: { base: "16px", md: "0px" } },
                  u.createElement(
                    s.Ug,
                    {
                      bgColor: "white",
                      pb: "10px",
                      px: { base: "6px", md: "24px" }
                    },
                    u.createElement(A.V, {
                      selectedJobStatus: r,
                      onChangeJobStatus: function (e) {
                        c(e), Y(0)
                      }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(E.C, {
                      setViewAsUserType: z,
                      viewAsUserType: Z,
                      display: { base: "flex", md: "none" }
                    })
                  ),
                  u.createElement(
                    s.Ug,
                    {
                      bgColor: "white",
                      pb: "10px",
                      px: { base: "6px", md: "24px" }
                    },
                    u.createElement(w.G, {
                      selectedJobType: U,
                      onChangeJobType: function (e) {
                        I(e), Y(0)
                      }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(E.C, {
                      setViewAsUserType: z,
                      viewAsUserType: Z,
                      display: { base: "none", md: "flex" }
                    }),
                    u.createElement(s.LZ, null),
                    u.createElement(g.t, {
                      onClick: function () {
                        oe(ae + 1)
                      },
                      display: { base: "none", md: "flex" }
                    }),
                    u.createElement(f.M, { sortBy: W, setSortBy: M })
                  ),
                  L && u.createElement(h.j, null),
                  !L &&
                    0 == ee.length &&
                    u.createElement(
                      s.gC,
                      {
                        spacing: "36px",
                        pt: "30px",
                        px: "18px",
                        bg: "gray_light3"
                      },
                      u.createElement(
                        s.X6,
                        { size: "lg", textAlign: "center", color: "black" },
                        "No jobs here\u2026"
                      )
                    ),
                  u.createElement(d.W, {
                    px: { base: "10px", md: "20px" },
                    jobs: ee,
                    identity: t,
                    openJob: n,
                    isHideBrandInfo: !1
                  }),
                  ee.length > 0 &&
                    !F &&
                    u.createElement(
                      s.M5,
                      { mt: "30px", pb: { base: "40px", md: "12px" } },
                      u.createElement(
                        p.zx,
                        {
                          w: "240px",
                          color: "purple",
                          borderColor: "purple",
                          variant: "outline",
                          onClick: function () {
                            Y($ + 1)
                          }
                        },
                        "Load More"
                      )
                    )
                )
              }
            r()
          } catch (T) {
            r(T)
          }
        },
        1
      )
    },
    37119: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            q: function () {
              return A
            }
          })
          var a = n(15861),
            o = n(87757),
            c = n.n(o),
            l = n(67294),
            u = n(9008),
            i = n.n(u),
            s = n(88523),
            p = n(20608),
            d = n(11972),
            f = n(25927),
            m = n(98400),
            b = n(11163),
            y = n(31681),
            x = n(23256),
            h = n(76989),
            v = n(42273),
            g = n(15658),
            E = n(96217),
            w = n(59876),
            S = n(53918),
            k = n(17735),
            J = e([h, E, k])
          ;[h, E, k] = J.then ? (await J)() : J
          var A = function (e) {
            var t = e.identity,
              n = e.openJob,
              r = e.logout,
              o = e.triggerAuthUpdate,
              u = e.opacity,
              J = e.display,
              A = e.brandName,
              U = e.brandProfileImageId,
              C = e.brandUserId,
              I = e.selectedJobStatus,
              T = e.selectedJobType,
              Z = e.setSelectedJobStatus,
              z = e.setSelectedJobType,
              O = e.viewAsUserType,
              _ = e.setViewAsUserType,
              j = (0, h.RL)(U),
              B = (0, s.qY)(),
              V = B.isOpen,
              W = B.onOpen,
              M = B.onClose,
              P = ""
                .concat(window.location.origin, "/org.html?orgid=")
                .concat(C),
              R = "".concat(A, " Jobs"),
              L = "I would like to share ".concat(R, " page to you."),
              N = (0, m.oR)(x.Z).appContext,
              q = (0, b.useRouter)(),
              X = (function () {
                var e = (0, a.Z)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!navigator || !navigator.share) {
                              e.next = 5
                              break
                            }
                            return (e.next = 3), G()
                          case 3:
                            e.next = 6
                            break
                          case 5:
                            F()
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
              })(),
              F = function () {
                W()
              },
              G = (function () {
                var e = (0, a.Z)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), navigator.share({ text: R, url: P })
                            )
                          case 2:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })(),
              D = (0, p.Sx)({ base: "", lg: "Share" }),
              H = A,
              $ = "".concat(A, " Jobs")
            return l.createElement(
              d.xu,
              { opacity: u, display: J, h: "100%" },
              l.createElement(i(), null, l.createElement("title", null, $)),
              l.createElement(
                d.kC,
                { h: { base: "41px", md: "81px" } },
                l.createElement(
                  d.Ug,
                  {
                    pt: { base: "10px", md: "8px" },
                    spacing: "6px",
                    color: "black_2",
                    pl: { base: "12px", md: "45px" }
                  },
                  l.createElement(f.qE, {
                    w: "34px",
                    h: "34px",
                    name: A,
                    src: j,
                    mr: "8px",
                    bg: "transparent"
                  }),
                  l.createElement(
                    d.X6,
                    {
                      fontSize: { base: "18px", md: "24px" },
                      fontWeight: "bold"
                    },
                    H
                  ),
                  l.createElement(
                    d.X6,
                    {
                      fontSize: { base: "18px", md: "24px" },
                      fontWeight: "normal"
                    },
                    "Jobs"
                  ),
                  l.createElement(
                    d.xu,
                    { px: "24px", pt: "18px" },
                    l.createElement(
                      v.Z,
                      {
                        w: { base: "168px", md: "118px" },
                        h: { base: "49px", md: "37px" },
                        fontSize: { base: "16px", md: "13px" },
                        fontWeight: "medium",
                        borderRadius: "51px",
                        onClick: function () {
                          var e = "createjob"
                          N.setRootPageId(y.gw.MyJobs),
                            q.push("/".concat(e), "/".concat(e, ".html"))
                        },
                        leftIcon: l.createElement(g.sm, {
                          fontSize: "16px",
                          mb: "2px"
                        }),
                        pos: { base: "fixed", md: "inherit" },
                        bottom: { base: "12px", md: "unset" },
                        right: { base: "12px", md: "unset" },
                        zIndex: { base: 1e4, md: "inherit" }
                      },
                      "New Job"
                    )
                  )
                ),
                l.createElement(d.LZ, {
                  display: { base: "none", md: "flex", lg: "flex" }
                }),
                l.createElement(
                  v.Z,
                  {
                    rightIcon: l.createElement(w.xP, {
                      fontSize: "10px",
                      color: "purple"
                    }),
                    h: "38px",
                    mt: { base: "0px", md: "30px" },
                    mr: "20px",
                    variant: "outline",
                    bgGradient: "gradient.purple.7",
                    bgClip: "text",
                    borderColor: "purple_2",
                    fontSize: "15px",
                    fontWeight: "medium",
                    onClick: X,
                    iconSpacing: { base: "0px", md: "0px", lg: "6px" },
                    display: { base: "none", md: "flex" }
                  },
                  D
                ),
                l.createElement(E.d, {
                  logout: r,
                  identity: t,
                  triggerAuthUpdate: o,
                  mt: null == r ? "26px" : "18px"
                })
              ),
              l.createElement(
                d.xu,
                { h: "100%", bgColor: "gray_light3", pt: "0px" },
                l.createElement(k.M, {
                  identity: t,
                  openJob: n,
                  brandName: A,
                  brandProfileImageId: U,
                  brandUserId: C,
                  selectedJobStatus: I,
                  setSelectedJobStatus: Z,
                  selectedJobType: T,
                  setSelectedJobType: z,
                  viewAsUserType: O,
                  setViewAsUserType: _
                })
              ),
              l.createElement(S.C, {
                url: P,
                title: R,
                body: L,
                isOpen: V,
                onClose: M
              })
            )
          }
          r()
        } catch (U) {
          r(U)
        }
      })
    },
    93308: function (e, t, n) {
      "use strict"
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            P: function () {
              return p
            }
          })
          var a = n(67294),
            o = n(9008),
            c = n.n(o),
            l = n(11972),
            u = n(96217),
            i = n(88827),
            s = e([u, i])
          ;[u, i] = s.then ? (await s)() : s
          var p = function (e) {
            var t = e.identity,
              n = e.openJob,
              r = e.logout,
              o = e.triggerAuthUpdate,
              s = e.opacity,
              p = e.display,
              d = e.selectedJobStatus,
              f = e.selectedJobType,
              m = e.setSelectedJobStatus,
              b = e.setSelectedJobType,
              y = e.viewAsUserType,
              x = e.setViewAsUserType,
              h = "My Creator Jobs"
            return a.createElement(
              l.xu,
              { opacity: s, display: p, h: "100%" },
              a.createElement(c(), null, a.createElement("title", null, h)),
              a.createElement(
                l.kC,
                { h: { base: "41px", md: "81px" } },
                a.createElement(
                  l.Ug,
                  {
                    pt: { base: "10px", md: "8px" },
                    spacing: "6px",
                    color: "black_2",
                    pl: { base: "12px", md: "45px" }
                  },
                  a.createElement(
                    l.X6,
                    {
                      fontSize: { base: "18px", md: "24px" },
                      fontWeight: "bold"
                    },
                    h
                  )
                ),
                a.createElement(l.LZ, {
                  display: { base: "none", md: "flex", lg: "flex" }
                }),
                a.createElement(u.d, {
                  logout: r,
                  identity: t,
                  triggerAuthUpdate: o,
                  mt: null == r ? "26px" : "18px"
                })
              ),
              a.createElement(
                l.xu,
                { h: "100%", bgColor: "gray_light3", pt: "0px" },
                a.createElement(i.e, {
                  identity: t,
                  openJob: n,
                  selectedJobStatus: d,
                  setSelectedJobStatus: m,
                  selectedJobType: f,
                  setSelectedJobType: b,
                  viewAsUserType: y,
                  setViewAsUserType: x
                })
              )
            )
          }
          r()
        } catch (d) {
          r(d)
        }
      })
    },
    8984: function (e, t, n) {
      "use strict"
      n.d(t, {
        C: function () {
          return f
        }
      })
      var r = n(86854),
        a = n(45987),
        o = n(67294),
        c = n(31681),
        l = n(11972),
        u = n(50715),
        i = n(51815),
        s = n(15658),
        p = n(23681),
        d = ["viewAsUserType", "setViewAsUserType"],
        f = function (e) {
          var t = e.viewAsUserType,
            n = e.setViewAsUserType,
            f = (0, a.Z)(e, d)
          return o.createElement(
            l.Ug,
            f,
            o.createElement(
              l.xv,
              { fontSize: "13px", fontWeight: "semibold" },
              "View As:"
            ),
            o.createElement(
              u.v2,
              null,
              o.createElement(
                u.j2,
                {
                  as: i.zx,
                  fontSize: "13px",
                  fontWeight: "medium",
                  variant: "outline",
                  colorScheme: "black_2",
                  w: { base: "100px", md: "100px" },
                  rightIcon: o.createElement(s.G6, { fontSize: "7px" })
                },
                (0, c._V)(c.EJ.UserRole[t])
              ),
              o.createElement(
                u.qy,
                { zIndex: 1e4 },
                Object.entries(c.EJ.UserRole).map(function (e) {
                  var a = (0, r.Z)(e, 2),
                    l = a[0],
                    u = a[1]
                  return (
                    l != t &&
                    o.createElement(
                      p.O,
                      {
                        key: l,
                        onClick: function () {
                          return n(l)
                        }
                      },
                      (0, c._V)(u)
                    )
                  )
                })
              )
            )
          )
        }
    },
    35494: function (e, t, n) {
      "use strict"
      n.d(t, {
        X: function () {
          return s
        }
      })
      var r = n(86854),
        a = n(67294),
        o = n(11972),
        c = n(1095),
        l = n(47971),
        u = n(59201),
        i = n(48954),
        s = function (e) {
          var t = e.selectedJobStatus,
            n = e.onChangeJobStatus,
            s = (0, a.useRef)(),
            p = (0, a.useRef)(),
            d = (0, a.useState)(!1),
            f = (0, r.Z)(d, 2),
            m = f[0],
            b = f[1],
            y = (0, c.i)()
          ;(0, a.useLayoutEffect)(
            function () {
              var e
              b((e = s.current).clientWidth < e.scrollWidth)
            },
            [y]
          )
          return a.createElement(
            o.Ug,
            {
              pl: { base: "6px", md: "24px" },
              pt: "6px",
              pb: "6px",
              pr: "6px",
              spacing: "17px",
              overflow: "scroll",
              ref: s
            },
            (0, i.gs)().map(function (e) {
              return a.createElement(
                u.L,
                {
                  key: e.value,
                  isActive: t == e.value,
                  onClick: function () {
                    return n(e.value)
                  },
                  minW: "80px"
                },
                e.label
              )
            }),
            a.createElement(o.xu, { ref: p }),
            m &&
              a.createElement(l.w, {
                onClick: function () {
                  var e
                  null === p ||
                    void 0 === p ||
                    null === (e = p.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest"
                    })
                }
              })
          )
        }
    },
    82465: function (e, t, n) {
      "use strict"
      n.d(t, {
        V: function () {
          return s
        }
      })
      var r = n(86854),
        a = n(67294),
        o = n(11972),
        c = n(1095),
        l = n(47971),
        u = n(59201),
        i = n(48954),
        s = function (e) {
          var t = e.selectedJobStatus,
            n = e.onChangeJobStatus,
            s = (0, a.useRef)(),
            p = (0, a.useRef)(),
            d = (0, a.useState)(!1),
            f = (0, r.Z)(d, 2),
            m = f[0],
            b = f[1],
            y = (0, c.i)()
          ;(0, a.useLayoutEffect)(
            function () {
              var e
              b((e = s.current).clientWidth < e.scrollWidth)
            },
            [y]
          )
          return a.createElement(
            o.Ug,
            {
              pl: { base: "6px", md: "24px" },
              pt: "6px",
              pb: "6px",
              pr: "6px",
              spacing: "17px",
              overflow: "scroll",
              ref: s
            },
            (0, i.lp)().map(function (e) {
              return a.createElement(
                u.L,
                {
                  key: e.value,
                  isActive: t == e.value,
                  onClick: function () {
                    return n(e.value)
                  },
                  minW: "80px"
                },
                e.label
              )
            }),
            a.createElement(o.xu, { ref: p }),
            m &&
              a.createElement(l.w, {
                onClick: function () {
                  var e
                  null === p ||
                    void 0 === p ||
                    null === (e = p.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest"
                    })
                }
              })
          )
        }
    },
    31603: function (e, t, n) {
      "use strict"
      n.d(t, {
        G: function () {
          return s
        }
      })
      var r = n(86854),
        a = n(67294),
        o = n(11972),
        c = n(1095),
        l = n(47971),
        u = n(59201),
        i = n(48954),
        s = function (e) {
          var t = e.selectedJobType,
            n = e.onChangeJobType,
            s = (0, a.useRef)(),
            p = (0, a.useRef)(),
            d = (0, a.useState)(!1),
            f = (0, r.Z)(d, 2),
            m = f[0],
            b = f[1],
            y = (0, c.i)()
          ;(0, a.useLayoutEffect)(
            function () {
              var e
              b((e = s.current).clientWidth < e.scrollWidth)
            },
            [y]
          )
          return a.createElement(
            o.Ug,
            {
              pl: { base: "6px", md: "24px" },
              pt: "6px",
              pb: "16px",
              pr: "6px",
              spacing: "17px",
              overflow: "scroll",
              ref: s
            },
            (0, i.cf)().map(function (e) {
              return a.createElement(
                u.L,
                {
                  key: e.value,
                  isActive: t == e.value,
                  onClick: function () {
                    return n(e.value)
                  },
                  minW: "70px"
                },
                e.label
              )
            }),
            a.createElement(o.xu, { ref: p }),
            m &&
              a.createElement(l.w, {
                onClick: function () {
                  var e
                  null === p ||
                    void 0 === p ||
                    null === (e = p.current) ||
                    void 0 === e ||
                    e.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest"
                    })
                }
              })
          )
        }
    },
    53918: function (e, t, n) {
      "use strict"
      n.d(t, {
        C: function () {
          return s
        }
      })
      var r = n(67294),
        a = n(21818),
        o = n(89583),
        c = n(88523),
        l = n(25527),
        u = n(11972),
        i = n(51815),
        s = function (e) {
          var t = e.url,
            n = e.title,
            s = e.body,
            p = void 0 === s ? "" : s,
            d = e.isOpen,
            f = e.onClose,
            m = (0, c.VP)(t),
            b = m.hasCopied,
            y = m.onCopy,
            x = 56
          return r.createElement(
            l.u_,
            { isOpen: d, onClose: f },
            r.createElement(l.ZA, null),
            r.createElement(
              l.hz,
              { bgColor: "black_3" },
              r.createElement(
                l.xB,
                { color: "white" },
                r.createElement(u.X6, { size: "md" }, "Share Job")
              ),
              r.createElement(l.ol, { color: "white" }),
              r.createElement(
                l.fe,
                { color: "white" },
                r.createElement(
                  u.Ug,
                  { align: "center" },
                  r.createElement(
                    u.xv,
                    { fontSize: "12px", isTruncated: !0 },
                    t
                  ),
                  r.createElement(u.LZ, null),
                  r.createElement(
                    i.zx,
                    {
                      onClick: y,
                      leftIcon: r.createElement(o.Dup, null),
                      variant: "outline",
                      colorScheme: "green_scheme",
                      size: "sm",
                      minW: "90px"
                    },
                    b ? "Copied" : "Copy"
                  )
                ),
                r.createElement(
                  u.Eq,
                  { py: "16px", spacing: "12px" },
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.cG,
                      { url: t, subject: n, body: p },
                      r.createElement(a.LQ, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.B,
                      { url: t, title: n },
                      r.createElement(a.Zm, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.tq,
                      { url: t, title: n },
                      r.createElement(a.YG, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.N0,
                      { url: t, title: n, separator: ":: " },
                      r.createElement(a.ud, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.m$,
                      { url: t, title: n },
                      r.createElement(a.bd, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.Zh,
                      { url: t },
                      r.createElement(a.v2, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.Dk,
                      { url: t, quote: n, hashtag: "#contentflyapp" },
                      r.createElement(a.Vq, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.Ni,
                      {
                        url: t,
                        title: n,
                        summary: p,
                        source: "Content Fly App"
                      },
                      r.createElement(a.zb, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.iR,
                      { url: t, title: n },
                      r.createElement(a.MP, { size: x, round: !0 })
                    )
                  ),
                  r.createElement(
                    u.Uc,
                    null,
                    r.createElement(
                      a.r2,
                      { url: t },
                      r.createElement(a.pA, { size: x, round: !0 })
                    )
                  )
                )
              )
            )
          )
        }
    },
    89314: function (e, t, n) {
      "use strict"
      n.d(t, {
        c: function () {
          return r
        }
      })
      var r = function (e, t, n) {
        null == n
          ? e.push("/".concat(t), "/".concat(t, ".html"), { shallow: !0 })
          : e.push(
              "/".concat(t, "?").concat(n),
              "/".concat(t, ".html?").concat(n),
              { shallow: !0 }
            )
      }
    },
    24989: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/myjobs",
        function () {
          return n(73535)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [
        5445, 2013, 260, 4617, 6556, 2328, 8760, 5297, 253, 6804, 4597, 5607,
        5527, 9876, 828, 9748, 7107, 1818, 2144, 5658, 3130, 3382, 2888, 9774,
        179
      ],
      function () {
        return (t = 24989), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
