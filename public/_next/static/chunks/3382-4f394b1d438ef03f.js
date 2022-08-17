"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3382],
  {
    23681: function (e, t, n) {
      n.d(t, {
        O: function () {
          return i
        }
      })
      var r = n(67294),
        o = n(50715),
        i = function (e) {
          var t = e.onClick,
            n = e.children
          return r.createElement(
            o.sN,
            {
              color: "black",
              fontSize: "13px",
              fontWeight: "medium",
              onClick: t
            },
            n
          )
        }
    },
    2243: function (e, t, n) {
      n.d(t, {
        u: function () {
          return i
        }
      })
      var r = n(67294),
        o = n(66956),
        i = function () {
          return r.createElement(o.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    30647: function (e, t, n) {
      n.d(t, {
        S: function () {
          return l
        }
      })
      var r = n(15861),
        o = n(87757),
        i = n.n(o),
        a = n(64380),
        c = n(22169),
        u = n(31681),
        l = (function () {
          var e = (0, r.Z)(
            i().mark(function e(t, n) {
              var r, o, l, s
              return i().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = u.Ho.InternetIdentity),
                        (o = u.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === o ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, a.l)()
                    case 6:
                      return (l = e.sent), e.abrupt("return", l)
                    case 8:
                      return (e.next = 10), (0, c.gX)(n || {})
                    case 10:
                      return (s = e.sent), e.abrupt("return", s)
                    case 12:
                      return e.abrupt("return", null)
                    case 13:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })()
    },
    92906: function (e, t, n) {
      n.d(t, {
        J3: function () {
          return z
        },
        bv: function () {
          return y
        },
        vV: function () {
          return _
        },
        v_: function () {
          return Z
        }
      })
      var r = n(87462),
        o = n(15861),
        i = n(86854),
        a = n(87757),
        c = n.n(a),
        u = n(67294),
        l = n(5152),
        s = n.n(l),
        f = n(11163),
        p = n(30647),
        d = n(11972),
        h = n(49697),
        m = n(49162),
        g = n(2243),
        x = function () {
          return u.createElement(
            h.W,
            { h: "120vh" },
            u.createElement(
              d.xu,
              { mt: "120px", mb: "30px" },
              u.createElement(m.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            u.createElement(g.u, null)
          )
        },
        b = n(98400),
        v = n(23256),
        E = n(66985),
        w = n(24686),
        k = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        S = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5527),
            n.e(9876),
            n.e(5658),
            n.e(7906)
          ]).then(n.bind(n, 7906))
        }),
        C = s()(function () {
          return Promise.all([
            n.e(5445),
            n.e(2013),
            n.e(260),
            n.e(4617),
            n.e(6556),
            n.e(5297),
            n.e(6804),
            n.e(4597),
            n.e(5607),
            n.e(5527),
            n.e(9876),
            n.e(828),
            n.e(9748),
            n.e(5658),
            n.e(3130),
            n.e(8265)
          ]).then(n.bind(n, 78265))
        }),
        y = function (e, t) {
          return function (n) {
            return W(e, null !== t && void 0 !== t ? t : C, null, !1)(n)
          }
        },
        z = function (e) {
          return function (t) {
            return W(
              e,
              k,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        _ = function (e) {
          return function (t) {
            return W(e, S, null, !1)(t)
          }
        },
        Z = function (e) {
          return function (t) {
            return W(e, S, null, !0)(t)
          }
        },
        W = function (e, t, a, l) {
          return function (s) {
            var d = (0, u.useState)(null),
              h = (0, i.Z)(d, 2),
              m = h[0],
              g = h[1],
              k = (0, u.useState)(!0),
              C = (0, i.Z)(k, 2),
              y = C[0],
              z = C[1],
              _ = (0, u.useState)(""),
              Z = (0, i.Z)(_, 2),
              W = Z[0],
              P = Z[1],
              A = (0, u.useState)(1),
              I = (0, i.Z)(A, 2),
              J = I[0],
              j = I[1],
              L = (0, f.useRouter)(),
              H = (0, b.oR)(v.Z),
              B = H.appContext.authProvider,
              M = H.appContext.candidAuthProvider(),
              O = null !== t && void 0 !== t ? t : S
            ;(0, u.useEffect)(
              function () {
                function e() {
                  return (e = (0, o.Z)(
                    c().mark(function e() {
                      var t
                      return c().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  z(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(H.appContext.authProvider, {
                                    isCreateAgent: !0
                                  })
                                )
                              case 4:
                                if (null == (t = e.sent)) {
                                  e.next = 16
                                  break
                                }
                                return (e.next = 8), t.getPrincipal()
                              case 8:
                                if (!G(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!H.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), R(t)
                              case 13:
                                D(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), q()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  E.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), z(!1), e.finish(23)
                              case 26:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[1, 20, 23, 26]]
                      )
                    })
                  )).apply(this, arguments)
                }
                !(function () {
                  e.apply(this, arguments)
                })()
              },
              [J]
            )
            var R = (function () {
                var e = (0, o.Z)(
                  c().mark(function e(t) {
                    var n, r, o, i
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, B)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(M)
                            case 6:
                              if (
                                ((o = e.sent),
                                !(
                                  (null === (n = o.ok) || void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (i = o.ok[0]),
                                (e.next = 11),
                                H.updateForNewSignupLogin(i)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                E.default.error(e.t0)
                            case 16:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              U = function () {
                j(J + 1)
              },
              D = (function () {
                var e = (0, o.Z)(
                  c().mark(function e(t) {
                    var r, o
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((g(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), n.e(7130).then(n.bind(n, 47130))
                            )
                          case 4:
                            ;(r = e.sent),
                              (o = r.Usergeek).setPrincipal(t.getPrincipal()),
                              o.trackSession()
                          case 8:
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
            function N() {
              return (
                (N = (0, o.Z)(
                  c().mark(function e(t) {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return D(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            G(e.sent)
                              ? D(t)
                              : P(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                N.apply(this, arguments)
              )
            }
            function G(e) {
              if (null == a) return !0
              var t = a.split(",").map(function (e) {
                return e.trim()
              })
              return "" == a.trim() || t.includes(e.toString())
            }
            var q = (function () {
                var e = (0, o.Z)(
                  c().mark(function e() {
                    var t
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(B)), (e.next = 3), t()
                          case 3:
                            D(null), H.reset(), (0, w.clearCache)()
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
              T = (function () {
                var e = (0, o.Z)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), q()
                          case 2:
                            L.push("/")
                          case 3:
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
            return null != m
              ? u.createElement(
                  e,
                  (0, r.Z)({ identity: m, logout: T, triggerAuthUpdate: U }, s)
                )
              : y
              ? u.createElement(x, null)
              : l
              ? u.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: U }))
              : u.createElement(O, {
                  handleAuthenticated: function (e) {
                    return N.apply(this, arguments)
                  },
                  warningMesg: W
                })
          }
        }
    },
    38725: function (e, t, n) {
      n.d(t, {
        t: function () {
          return c
        }
      })
      var r = n(87462),
        o = n(67294),
        i = n(51815),
        a = n(15658),
        c = function (e) {
          return o.createElement(
            i.hU,
            (0, r.Z)(
              {
                "aria-label": "Refresh",
                icon: o.createElement(a.Du, null),
                color: "black_2",
                bgColor: "gray_light6"
              },
              e
            )
          )
        }
    },
    47971: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a
        }
      })
      var r = n(67294),
        o = n(64737),
        i = n(63750),
        a = function (e) {
          var t = e.onClick
          return r.createElement(o.JO, {
            as: i.Igg,
            boxSize: "1.4rem",
            color: "purple",
            position: "sticky",
            right: "0px",
            opacity: "0.5",
            onClick: t,
            _hover: { cursor: "pointer" }
          })
        }
    },
    59201: function (e, t, n) {
      n.d(t, {
        L: function () {
          return u
        }
      })
      var r = n(87462),
        o = n(45987),
        i = n(67294),
        a = n(51815),
        c = ["isActive", "onClick", "children", "themeColor"],
        u = function (e) {
          var t = e.isActive,
            n = e.onClick,
            u = e.children,
            l = e.themeColor,
            s = (0, o.Z)(e, c),
            f = null !== l && void 0 !== l ? l : "purple_2"
          return i.createElement(
            a.zx,
            (0, r.Z)(
              {
                background: t ? f : "white",
                color: t ? "white" : "gray_light2",
                variant: t ? "solid" : "outline",
                _hover: {
                  bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                  boxShadow: "lg",
                  color: "white",
                  borderColor: t ? "unset" : "white"
                },
                fontWeight: "medium",
                fontSize: "13px",
                h: "29px",
                borderRadius: "29px",
                borderColor: t ? "unset" : "gray_light2",
                onClick: n
              },
              s
            ),
            u
          )
        }
    },
    64673: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            t: function () {
              return v
            }
          })
          var o = n(67294),
            i = n(11972),
            a = n(25927),
            c = n(97917),
            u = n(51815),
            l = n(64737),
            s = n(2700),
            f = n(76989),
            p = n(74213),
            d = n(29950),
            h = n(16830),
            m = n(15658),
            g = n(1764),
            x = e([f])
          f = (x.then ? (await x)() : x)[0]
          var b = function (e) {
              var t = e.children,
                n = e.gotoJob,
                r = e.job,
                a = new g.z(r)
              return o.createElement(
                i.Ug,
                {
                  p: { base: "16px", md: "20px" },
                  maxW: { base: "unset", sm: "unset", md: "500px" },
                  w: "full",
                  bg: a.isHidden() ? "gray_light" : "white",
                  overflow: "hidden",
                  borderRadius: "20px",
                  pos: "relative",
                  zIndex: 1,
                  onClick: n,
                  _hover: { cursor: "pointer", boxShadow: "xl" },
                  align: "top",
                  boxShadow: "lg"
                },
                t
              )
            },
            v = function (e) {
              var t,
                n = e.job,
                r = e.openJob,
                x = e.onChangeCreatorAndSkill,
                v = e.isHideBrandInfo,
                E = (0, f.RL)(n.profileImageId),
                w = new g.z(n),
                k = h.zM[n.creatorType],
                S =
                  null === (t = h.vG[n.creatorType]) || void 0 === t
                    ? void 0
                    : t[n.skill],
                C = null != x
              return o.createElement(
                b,
                {
                  gotoJob: function () {
                    r(n)
                  },
                  job: n
                },
                n &&
                  w.isDraft() &&
                  o.createElement(
                    p.t,
                    {
                      opacity: "1.0",
                      height: { base: "30px", md: "32px" },
                      fontSize: { base: "12px", md: "13px" },
                      fontWeight: "light"
                    },
                    "draft"
                  ),
                o.createElement(
                  i.gC,
                  { w: "70%", align: "left" },
                  o.createElement(
                    i.X6,
                    {
                      fontSize: "18px",
                      fontWeight: "bold",
                      bg: "gradient.purple.5",
                      bgClip: "text",
                      pb: "4px"
                    },
                    n.jobName
                  ),
                  o.createElement(
                    i.xv,
                    {
                      noOfLines: 7,
                      fontSize: "12px",
                      fontWeight: "light",
                      mb: "30px",
                      color: "black_2"
                    },
                    n.whatWeNeed
                  ),
                  o.createElement(i.LZ, null),
                  !v &&
                    o.createElement(
                      i.Ug,
                      null,
                      o.createElement(a.qE, {
                        w: { base: "54px", md: "64px" },
                        h: { base: "54px", md: "64px" },
                        name: n.brand,
                        src: E
                      }),
                      o.createElement(
                        i.gC,
                        { align: "left" },
                        o.createElement(
                          c.N2,
                          { isLoaded: n.brand },
                          o.createElement(
                            i.X6,
                            {
                              fontSize: { base: "14px", md: "18px" },
                              fontWeight: "medium",
                              color: "black_2",
                              minW: "180px"
                            },
                            n.brand
                          )
                        ),
                        o.createElement(
                          i.xv,
                          {
                            color: "gray_light2",
                            fontWeight: "medium",
                            fontSize: "12px"
                          },
                          n.industry
                        )
                      )
                    )
                ),
                o.createElement(i.iz, { orientation: "vertical" }),
                o.createElement(
                  i.gC,
                  { w: "29%", align: "center" },
                  o.createElement(m.qu, { fontSize: "37px" }),
                  o.createElement(
                    i.M5,
                    { fontSize: "13px", fontWeight: "bold", color: "black_2" },
                    "1 to 1 Job"
                  ),
                  o.createElement(
                    i.M5,
                    { mt: "6px" },
                    o.createElement(
                      d.$,
                      { label: "Show all ".concat(k, " jobs"), isDisabled: !C },
                      o.createElement(
                        u.zx,
                        {
                          variant: "unstyled",
                          borderRadius: "5px",
                          bg: "gradient.purple.5",
                          _hover: C
                            ? {
                                bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                                boxShadow: "lg",
                                color: "white",
                                borderColor: "white"
                              }
                            : {},
                          color: "white",
                          fontSize: "13px",
                          fontWeight: "medium",
                          p: "7px",
                          minW: "90px",
                          textAlign: "center",
                          onClick: function (e) {
                            C && (e.stopPropagation(), x(n.creatorType))
                          }
                        },
                        k
                      )
                    )
                  ),
                  o.createElement(
                    i.M5,
                    {
                      color: w.isDateHighlighted() ? "red_1" : "black_2",
                      fontWeight: "semibold",
                      fontSize: "12px"
                    },
                    o.createElement(l.JO, { as: m.T3 }),
                    o.createElement(i.xv, { ml: "5px" }, w.timeLeft())
                  ),
                  o.createElement(
                    i.M5,
                    { fontWeight: "semibold", fontSize: "12px" },
                    o.createElement(m.cD, {
                      h: "38x",
                      w: "28px",
                      color: "black_3"
                    }),
                    w.budget(),
                    " ICP"
                  ),
                  o.createElement(i.LZ, null),
                  o.createElement(
                    i.gC,
                    { align: "center", color: "black_2", spacing: "1px" },
                    o.createElement(
                      i.X6,
                      { fontSize: "11px", fontWeight: "bold" },
                      "Skills required:"
                    ),
                    o.createElement(
                      d.$,
                      { label: "Show all ".concat(S, " jobs"), isDisabled: !C },
                      o.createElement(
                        u.zx,
                        {
                          variant: "unstyled",
                          color: "white",
                          onClick: function (e) {
                            C &&
                              (e.stopPropagation(), x(n.creatorType, n.skill))
                          }
                        },
                        o.createElement(
                          s.Vp,
                          {
                            borderRadius: "5px",
                            bgColor: "gray_light6",
                            _hover: C
                              ? {
                                  bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                                  boxShadow: "lg",
                                  color: "white",
                                  borderColor: "white"
                                }
                              : {},
                            fontWeight: "medium",
                            p: "6px",
                            fontSize: "11px"
                          },
                          S
                        )
                      )
                    )
                  )
                )
              )
            }
          r()
        } catch (E) {
          r(E)
        }
      })
    },
    34332: function (e, t, n) {
      n.a(e, async function (e, r) {
        try {
          n.d(t, {
            W: function () {
              return p
            }
          })
          var o = n(87462),
            i = n(45987),
            a = n(67294),
            c = n(11972),
            u = n(64673),
            l = n(1764),
            s = e([u])
          u = (s.then ? (await s)() : s)[0]
          var f = [
              "jobs",
              "openJob",
              "filter",
              "onChangeCreatorAndSkill",
              "isHideBrandInfo"
            ],
            p = function (e) {
              var t = e.jobs,
                n = e.openJob,
                r = e.filter,
                s = e.onChangeCreatorAndSkill,
                p = e.isHideBrandInfo,
                d = (0, i.Z)(e, f)
              return a.createElement(
                c.xu,
                { h: "100%", backgroundColor: "gray_light3" },
                a.createElement(
                  c.MI,
                  (0, o.Z)(
                    {
                      minChildWidth: {
                        base: "320px",
                        sm: "400px",
                        md: "460px"
                      },
                      spacing: { base: "16px", sm: "26px" },
                      backgroundColor: "gray_light3",
                      width: "100%",
                      h: "100%",
                      pt: "27px",
                      pb: "27px"
                    },
                    d
                  ),
                  (r
                    ? t.filter(function (e) {
                        switch (r) {
                          case "all":
                            return e
                          case "active":
                            var t = new l.z(e)
                            return t.isActive() || t.isDraft() || t.isStarted()
                        }
                      })
                    : t
                  ).map(function (e, t) {
                    return a.createElement(u.t, {
                      key: t,
                      job: e,
                      openJob: n,
                      onChangeCreatorAndSkill: s,
                      isHideBrandInfo: p
                    })
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
    39720: function (e, t, n) {
      n.d(t, {
        M: function () {
          return d
        }
      })
      var r = n(86854),
        o = n(45987),
        i = n(67294),
        a = n(31681),
        c = n(11972),
        u = n(50715),
        l = n(51815),
        s = n(15658),
        f = n(23681),
        p = ["sortBy", "setSortBy"],
        d = function (e) {
          var t,
            n = e.sortBy,
            d = e.setSortBy,
            h = (0, o.Z)(e, p)
          return i.createElement(
            c.Ug,
            h,
            i.createElement(
              c.xv,
              { fontSize: "13px", fontWeight: "medium" },
              "Sort:",
              " "
            ),
            i.createElement(
              u.v2,
              null,
              i.createElement(
                u.j2,
                {
                  as: l.zx,
                  bg: "gray_light6",
                  color: "black",
                  fontSize: "13px",
                  fontWeight: "medium",
                  w: { base: "100px", md: "120px" },
                  rightIcon: i.createElement(s.G6, { fontSize: "7px" })
                },
                null === (t = a.EJ.SortOptions[n]) || void 0 === t
                  ? void 0
                  : t.name
              ),
              i.createElement(
                u.qy,
                { zIndex: 1e4 },
                Object.entries(a.EJ.SortOptions).map(function (e) {
                  var t = (0, r.Z)(e, 2),
                    o = t[0],
                    a = t[1]
                  return (
                    o != n &&
                    i.createElement(
                      f.O,
                      {
                        key: o,
                        onClick: function () {
                          return d(o)
                        }
                      },
                      a.name
                    )
                  )
                })
              )
            )
          )
        }
    },
    1095: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i
        }
      })
      var r = n(86854),
        o = n(67294)
      function i() {
        var e = (0, o.useState)({ width: void 0, height: void 0 }),
          t = (0, r.Z)(e, 2),
          n = t[0],
          i = t[1]
        return (
          (0, o.useEffect)(function () {
            function e() {
              i({ width: window.innerWidth, height: window.innerHeight })
            }
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e)
              }
            )
          }, []),
          n
        )
      }
    }
  }
])
