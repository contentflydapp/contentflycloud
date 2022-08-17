;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4153, 6451],
  {
    80006: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.r(t)
          var i = r(87462),
            a = r(15861),
            o = r(86854),
            u = r(87757),
            s = r.n(u),
            c = r(67294),
            l = r(9008),
            d = r.n(l),
            p = r(11163),
            m = r(74865),
            f = r.n(m),
            h = r(62639),
            g = r(11972),
            b = r(51815),
            x = r(64737),
            v = r(13130),
            y = r(96217),
            w = r(80585),
            S = r(92906),
            E = r(60155),
            k = r(31681),
            T = r(3698),
            Z = r(24686),
            q = r(66985),
            I = r(98400),
            C = r(23256),
            P = e([v, y, T])
          function _(e) {
            var t = (0, p.useRouter)(),
              r = (0, I.oR)(C.Z),
              n = (0, c.useState)(1),
              u = (0, o.Z)(n, 2),
              l = u[0],
              m = u[1],
              S = r.appContext
            ;(0, c.useEffect)(
              function () {
                function e() {
                  return (e = (0, a.Z)(
                    s().mark(function e() {
                      var n, i, a, o
                      return s().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (f().start(),
                                  (e.prev = 1),
                                  null == t.query.id)
                                ) {
                                  e.next = 14
                                  break
                                }
                                if (t.query.id == r.editingJob.id) {
                                  e.next = 12
                                  break
                                }
                                return (
                                  (n = Number(t.query.id)),
                                  (e.next = 7),
                                  (0, Z.makeJobActor)()
                                )
                              case 7:
                                return (i = e.sent), (e.next = 10), i.loadJob(n)
                              case 10:
                                ;(a = e.sent).length > 0 &&
                                  ((o = a[0]),
                                  r.editingJob.updateFromJobModel(o))
                              case 12:
                                e.next = 15
                                break
                              case 14:
                                r.editingJob.reset()
                              case 15:
                                e.next = 20
                                break
                              case 17:
                                ;(e.prev = 17),
                                  (e.t0 = e.catch(1)),
                                  q.default.error(e.t0)
                              case 20:
                                return (e.prev = 20), f().done(), e.finish(20)
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
                !(function () {
                  e.apply(this, arguments)
                })()
              },
              [t.query.id]
            )
            return c.createElement(
              v.Z,
              (0, i.Z)(
                { activeLink: k.Az.MyJobs, opacity: l, setOpacity: m },
                e
              ),
              c.createElement(
                d(),
                null,
                c.createElement("title", null, "New Job - Content Fly")
              ),
              c.createElement(
                h.mQ,
                { isLazy: !0, variant: "unstyled", h: "100%" },
                c.createElement(
                  g.kC,
                  { h: { base: "41px", md: "81px" } },
                  c.createElement(b.hU, {
                    icon: c.createElement(x.JO, {
                      as: E.$Ku,
                      color: "purple_3",
                      fontSize: { base: "26px", md: "30px" }
                    }),
                    variant: "unstyled",
                    top: { base: "0px", md: "24px" },
                    left: { base: "2px", md: "12px" },
                    w: { base: "20px", md: "50px" },
                    onClick: function () {
                      var e = S.rootPageId
                      t.push("/".concat(e), "/".concat(e, ".html"))
                    }
                  }),
                  c.createElement(
                    h.td,
                    { pt: "10px", pl: { md: "45px", lg: "80px" } },
                    c.createElement(w.e, null, "New Job")
                  ),
                  c.createElement(g.LZ, null),
                  c.createElement(y.d, e)
                ),
                c.createElement(g.iz, {
                  h: "1px",
                  color: "gray_light",
                  display: { base: "none", md: "flex" }
                }),
                c.createElement(
                  h.nP,
                  { h: "100%", bgColor: "gray_light3" },
                  c.createElement(
                    h.x4,
                    {
                      px: { base: "0px", md: "unset" },
                      bgColor: "gray_light3"
                    },
                    c.createElement(T.u, { identity: e.identity })
                  )
                )
              )
            )
          }
          ;([v, y, T] = P.then ? (await P)() : P),
            (t.default = (0, S.vV)(_)),
            n()
        } catch (_) {
          n(_)
        }
      })
    },
    2243: function (e, t, r) {
      "use strict"
      r.d(t, {
        u: function () {
          return a
        }
      })
      var n = r(67294),
        i = r(66956),
        a = function () {
          return n.createElement(i.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    30647: function (e, t, r) {
      "use strict"
      r.d(t, {
        S: function () {
          return c
        }
      })
      var n = r(15861),
        i = r(87757),
        a = r.n(i),
        o = r(64380),
        u = r(22169),
        s = r(31681),
        c = (function () {
          var e = (0, n.Z)(
            a().mark(function e(t, r) {
              var n, i, c, l
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(n = s.Ho.InternetIdentity),
                        (i = s.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === n ? 4 : e.t0 === i ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, o.l)()
                    case 6:
                      return (c = e.sent), e.abrupt("return", c)
                    case 8:
                      return (e.next = 10), (0, u.gX)(r || {})
                    case 10:
                      return (l = e.sent), e.abrupt("return", l)
                    case 12:
                      return e.abrupt("return", null)
                    case 13:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, r) {
            return e.apply(this, arguments)
          }
        })()
    },
    92906: function (e, t, r) {
      "use strict"
      r.d(t, {
        J3: function () {
          return Z
        },
        bv: function () {
          return T
        },
        vV: function () {
          return q
        },
        v_: function () {
          return I
        }
      })
      var n = r(87462),
        i = r(15861),
        a = r(86854),
        o = r(87757),
        u = r.n(o),
        s = r(67294),
        c = r(5152),
        l = r.n(c),
        d = r(11163),
        p = r(30647),
        m = r(11972),
        f = r(49697),
        h = r(49162),
        g = r(2243),
        b = function () {
          return s.createElement(
            f.W,
            { h: "120vh" },
            s.createElement(
              m.xu,
              { mt: "120px", mb: "30px" },
              s.createElement(h.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            s.createElement(g.u, null)
          )
        },
        x = r(98400),
        v = r(23256),
        y = r(66985),
        w = r(24686),
        S = l()(function () {
          return Promise.all([
            r.e(5297),
            r.e(6804),
            r.e(5607),
            r.e(5658),
            r.e(9213)
          ]).then(r.bind(r, 89213))
        }),
        E = l()(function () {
          return Promise.all([
            r.e(5297),
            r.e(6804),
            r.e(5607),
            r.e(5527),
            r.e(9876),
            r.e(5658),
            r.e(7906)
          ]).then(r.bind(r, 7906))
        }),
        k = l()(function () {
          return Promise.all([
            r.e(5445),
            r.e(2013),
            r.e(260),
            r.e(4617),
            r.e(6556),
            r.e(5297),
            r.e(6804),
            r.e(4597),
            r.e(5607),
            r.e(5527),
            r.e(9876),
            r.e(828),
            r.e(9748),
            r.e(5658),
            r.e(3130),
            r.e(8265)
          ]).then(r.bind(r, 78265))
        }),
        T = function (e, t) {
          return function (r) {
            return C(e, null !== t && void 0 !== t ? t : k, null, !1)(r)
          }
        },
        Z = function (e) {
          return function (t) {
            return C(
              e,
              S,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        q = function (e) {
          return function (t) {
            return C(e, E, null, !1)(t)
          }
        },
        I = function (e) {
          return function (t) {
            return C(e, E, null, !0)(t)
          }
        },
        C = function (e, t, o, c) {
          return function (l) {
            var m = (0, s.useState)(null),
              f = (0, a.Z)(m, 2),
              h = f[0],
              g = f[1],
              S = (0, s.useState)(!0),
              k = (0, a.Z)(S, 2),
              T = k[0],
              Z = k[1],
              q = (0, s.useState)(""),
              I = (0, a.Z)(q, 2),
              C = I[0],
              P = I[1],
              _ = (0, s.useState)(1),
              R = (0, a.Z)(_, 2),
              W = R[0],
              N = R[1],
              z = (0, d.useRouter)(),
              F = (0, x.oR)(v.Z),
              M = F.appContext.authProvider,
              A = F.appContext.candidAuthProvider(),
              B = null !== t && void 0 !== t ? t : E
            ;(0, s.useEffect)(
              function () {
                function e() {
                  return (e = (0, i.Z)(
                    u().mark(function e() {
                      var t
                      return u().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  Z(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, p.S)(F.appContext.authProvider, {
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
                                if (!O(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!F.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), D(t)
                              case 13:
                                J(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), U()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  y.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), Z(!1), e.finish(23)
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
              [W]
            )
            var D = (function () {
                var e = (0, i.Z)(
                  u().mark(function e(t) {
                    var r, n, i, a
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, w.makeUserProfileActor)(t, M)
                              )
                            case 3:
                              return (n = e.sent), (e.next = 6), n.login(A)
                            case 6:
                              if (
                                ((i = e.sent),
                                !(
                                  (null === (r = i.ok) || void 0 === r
                                    ? void 0
                                    : r.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (a = i.ok[0]),
                                (e.next = 11),
                                F.updateForNewSignupLogin(a)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                y.default.error(e.t0)
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
              L = function () {
                N(W + 1)
              },
              J = (function () {
                var e = (0, i.Z)(
                  u().mark(function e(t) {
                    var n, i
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((g(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), r.e(7130).then(r.bind(r, 47130))
                            )
                          case 4:
                            ;(n = e.sent),
                              (i = n.Usergeek).setPrincipal(t.getPrincipal()),
                              i.trackSession()
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
            function j() {
              return (
                (j = (0, i.Z)(
                  u().mark(function e(t) {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return J(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            O(e.sent)
                              ? J(t)
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
                j.apply(this, arguments)
              )
            }
            function O(e) {
              if (null == o) return !0
              var t = o.split(",").map(function (e) {
                return e.trim()
              })
              return "" == o.trim() || t.includes(e.toString())
            }
            var U = (function () {
                var e = (0, i.Z)(
                  u().mark(function e() {
                    var t
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, w.makeLogout)(M)), (e.next = 3), t()
                          case 3:
                            J(null), F.reset(), (0, w.clearCache)()
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
              V = (function () {
                var e = (0, i.Z)(
                  u().mark(function e() {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), U()
                          case 2:
                            z.push("/")
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
            return null != h
              ? s.createElement(
                  e,
                  (0, n.Z)({ identity: h, logout: V, triggerAuthUpdate: L }, l)
                )
              : T
              ? s.createElement(b, null)
              : c
              ? s.createElement(e, (0, n.Z)({}, l, { triggerAuthUpdate: L }))
              : s.createElement(B, {
                  handleAuthenticated: function (e) {
                    return j.apply(this, arguments)
                  },
                  warningMesg: C
                })
          }
        }
    },
    92619: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return c
        }
      })
      var n = r(87462),
        i = r(45987),
        a = r(67294),
        o = r(73733),
        u = r(99575),
        s = [
          "id",
          "field",
          "errorMesg",
          "isChecked",
          "isRequired",
          "isInvalid",
          "w",
          "children"
        ]
      function c(e) {
        var t = e.id,
          r = e.field,
          c = e.errorMesg,
          l = e.isChecked,
          d = e.isRequired,
          p = e.isInvalid,
          m = e.w,
          f = e.children,
          h = (0, i.Z)(e, s)
        return a.createElement(
          o.NI,
          { isRequired: d, isInvalid: p, w: m },
          a.createElement(
            o.lX,
            (0, n.Z)(
              {
                htmlFor: t,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              h,
              { px: "22px" }
            ),
            a.createElement(
              u.XZ,
              (0, n.Z)({ id: t }, r, {
                defaultIsChecked: l,
                isRequired: d,
                isInvalid: p,
                size: "lg",
                spacing: "1rem",
                iconColor: "purple",
                colorScheme: "white"
              }),
              f
            )
          ),
          a.createElement(o.J1, null, c)
        )
      }
    },
    33932: function (e, t, r) {
      "use strict"
      r.d(t, {
        y: function () {
          return l
        }
      })
      var n = r(87462),
        i = r(45987),
        a = r(67294),
        o = r(73733),
        u = r(84597),
        s = r(25996),
        c = [
          "id",
          "type",
          "field",
          "rightIcon",
          "placeholder",
          "errorMesg",
          "isRequired",
          "isInvalid",
          "variant",
          "inputFontWeight",
          "inputFontColor",
          "inputFontSize"
        ],
        l = (0, a.forwardRef)(function (e, t) {
          var r = e.id,
            l = e.type,
            d = e.field,
            p = e.rightIcon,
            m = e.placeholder,
            f = e.errorMesg,
            h = e.isRequired,
            g = e.isInvalid,
            b = e.variant,
            x = e.inputFontWeight,
            v = e.inputFontColor,
            y = e.inputFontSize,
            w = (0, i.Z)(e, c)
          return a.createElement(
            o.NI,
            (0, n.Z)(
              {
                isRequired: h,
                isInvalid: g,
                w: { base: "300px", md: "324px", lg: "364px", xl: "394px" }
              },
              w
            ),
            a.createElement(
              o.lX,
              {
                htmlFor: r,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              e.children
            ),
            a.createElement(
              u.BZ,
              null,
              a.createElement(
                u.II,
                (0, n.Z)(
                  {
                    id: r,
                    placeholder: m,
                    variant: b,
                    fontWeight: x,
                    fontSize: y,
                    color: v,
                    ref: t
                  },
                  d,
                  {
                    focusBorderColor: "purple",
                    h: { base: "40px", md: "40px", lg: "50px" },
                    type: l,
                    onKeyPress: function (e) {
                      ;(0, s.r)(e) && e.preventDefault()
                    }
                  }
                )
              ),
              p && a.createElement(u.xH, { children: p })
            ),
            a.createElement(o.J1, null, f)
          )
        })
      l.displayName = "FormInput"
    },
    91822: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return c
        }
      })
      var n = r(87462),
        i = r(45987),
        a = r(67294),
        o = r(73733),
        u = r(24834),
        s = [
          "id",
          "field",
          "title",
          "placeholder",
          "icon",
          "errorMesg",
          "isRequired",
          "isInvalid"
        ]
      function c(e) {
        var t = e.id,
          r = e.field,
          c = e.title,
          l = e.placeholder,
          d = e.icon,
          p = e.errorMesg,
          m = e.isRequired,
          f = e.isInvalid,
          h = (0, i.Z)(e, s)
        return a.createElement(
          o.NI,
          (0, n.Z)({ isRequired: m, isInvalid: f }, h),
          a.createElement(
            o.lX,
            {
              htmlFor: t,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            c
          ),
          a.createElement(
            u.Z,
            (0, n.Z)({ id: t }, r, { placeholder: l, icon: d }),
            e.children
          ),
          a.createElement(o.J1, null, p)
        )
      }
    },
    81967: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return l
        }
      })
      var n = r(87462),
        i = r(45987),
        a = r(67294),
        o = r(73733),
        u = r(84597),
        s = r(43523),
        c = [
          "id",
          "field",
          "textSize",
          "numRows",
          "textAreaHeight",
          "placeholder",
          "rightIcon",
          "errorMesg",
          "isRequired",
          "isInvalid",
          "variant",
          "inputFontColor"
        ]
      function l(e) {
        var t = e.id,
          r = e.field,
          l = e.textSize,
          d = e.numRows,
          p = e.textAreaHeight,
          m = e.placeholder,
          f = e.rightIcon,
          h = e.errorMesg,
          g = e.isRequired,
          b = e.isInvalid,
          x = e.variant,
          v = e.inputFontColor,
          y = (0, i.Z)(e, c),
          w = l || "sm",
          S = d || 12
        return a.createElement(
          o.NI,
          (0, n.Z)(
            {
              isRequired: g,
              isInvalid: b,
              w: { base: "340px", md: "300px", "2xl": "380px" }
            },
            y
          ),
          a.createElement(
            o.lX,
            {
              htmlFor: t,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            e.children
          ),
          a.createElement(
            u.BZ,
            null,
            a.createElement(
              s.g,
              (0, n.Z)(
                {
                  id: t,
                  placeholder: m,
                  focusBorderColor: "purple",
                  color: v,
                  resize: "vertical",
                  rows: S,
                  h: p,
                  variant: x,
                  size: w
                },
                r
              )
            ),
            f && a.createElement(u.xH, { children: f })
          ),
          a.createElement(o.J1, null, h)
        )
      }
    },
    24834: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return s
        }
      })
      var n = r(87462),
        i = r(45987),
        a = r(67294),
        o = r(62304),
        u = ["icon"]
      function s(e) {
        var t = e.icon,
          r = (0, i.Z)(e, u)
        return a.createElement(
          o.Ph,
          (0, n.Z)(
            {
              rootProps: { style: { marginTop: "8px" } },
              size: "md",
              h: { base: "40px", md: "40px", lg: "50px" },
              iconColor: "gray_light2",
              iconSize: "14px",
              icon: t,
              _active: { color: "purple", borderColor: "purple" },
              _focus: { color: "purple", borderColor: "purple" }
            },
            r
          ),
          e.children
        )
      }
    },
    61911: function (e, t, r) {
      "use strict"
      var n = r(67294),
        i = r(45607),
        a = r(11972),
        o = r(82175),
        u = r(33932),
        s = r(81967),
        c = r(42340),
        l = r(50828),
        d = r(98400),
        p = r(23256),
        m = r(60013),
        f = r(66897),
        h = r(66985)
      t.Z = (0, l.Pi)(function (e) {
        var t = e.setTabIndex,
          r = e.myIndex,
          l = (0, d.oR)(p.Z).editingJob,
          g = (0, i.pm)()
        return n.createElement(
          o.J9,
          {
            initialValues: {
              jobName: l.jobName,
              aboutBrand: l.aboutBrand,
              industry: l.industry,
              targetAudience: l.targetAudience
            },
            validationSchema: c.HQ,
            onSubmit: function (e, n) {
              try {
                var i = e.jobName,
                  a = e.aboutBrand,
                  o = e.industry,
                  u = e.targetAudience
                l.updateStep1(i, a, o, u), t(r + 1)
              } catch (s) {
                h.default.error(s),
                  (0, f.showToast)(
                    g,
                    "Create Job",
                    "We have a problem processing the step. Please try again later.",
                    "error"
                  )
              } finally {
                n.setSubmitting(!1)
              }
            },
            enableReinitialize: !0
          },
          function (e) {
            var t = e.isSubmitting
            return n.createElement(
              o.l0,
              { style: { width: "100%" } },
              n.createElement(
                a.gC,
                {
                  bgColor: "white",
                  borderRadius: "14px",
                  maxW: "700px",
                  spacing: { base: "24px", md: "30px" },
                  py: "24px"
                },
                n.createElement(
                  a.X6,
                  { fontSize: "24px", color: "black_2", fontWeight: "bold" },
                  "About"
                ),
                n.createElement(o.gN, { name: "jobName" }, function (e) {
                  var t = e.field,
                    r = e.form
                  return n.createElement(
                    u.y,
                    {
                      id: "jobName",
                      field: t,
                      inputFontSize: { base: "sm", md: "md" },
                      placeholder:
                        "e.g. Content Fly\u2019s New Landing Page Design",
                      w: { base: "95%", md: "80%" },
                      isInvalid: r.errors.jobName && r.touched.jobName,
                      errorMesg: r.errors.jobName,
                      isRequired: !0
                    },
                    "What is the name of your job? - Make it stand out, easy to understand and concise."
                  )
                }),
                n.createElement(o.gN, { name: "aboutBrand" }, function (e) {
                  var t = e.field,
                    r = e.form
                  return n.createElement(
                    s.Z,
                    {
                      id: "aboutBrand",
                      placeholder:
                        "e.g. We are building a new Dapp on the Internet Computer",
                      w: { base: "95%", md: "80%" },
                      textAreaHeight: { base: "140px", md: "160px" },
                      field: t,
                      isInvalid: r.errors.aboutBrand && r.touched.aboutBrand,
                      errorMesg: r.errors.aboutBrand,
                      isRequired: !0
                    },
                    "Tell us a bit about your brand"
                  )
                }),
                n.createElement(o.gN, { name: "industry" }, function (e) {
                  var t = e.field,
                    r = e.form
                  return n.createElement(
                    u.y,
                    {
                      id: "jobName",
                      field: t,
                      inputFontSize: { base: "sm", md: "md" },
                      placeholder: "e.g. Software",
                      w: { base: "95%", md: "80%" },
                      isInvalid: r.errors.jobName && r.touched.jobName,
                      errorMesg: r.errors.jobName,
                      isRequired: !0
                    },
                    "What is your brand's industry?"
                  )
                }),
                n.createElement(o.gN, { name: "targetAudience" }, function (e) {
                  var t = e.field,
                    r = e.form
                  return n.createElement(
                    u.y,
                    {
                      id: "targetAudience",
                      field: t,
                      inputFontSize: { base: "sm", md: "md" },
                      placeholder:
                        "e.g. Blockchain enthusiast creators and brands",
                      w: { base: "95%", md: "80%" },
                      isInvalid:
                        r.errors.targetAudience && r.touched.targetAudience,
                      errorMesg: r.errors.targetAudience,
                      isRequired: !0
                    },
                    "What is the target audience for the job's deliverable?"
                  )
                })
              ),
              n.createElement(m.z, { isSubmitting: t })
            )
          }
        )
      })
    },
    60013: function (e, t, r) {
      "use strict"
      r.d(t, {
        z: function () {
          return u
        }
      })
      var n = r(67294),
        i = r(11972),
        a = r(51815),
        o = r(42273),
        u = function (e) {
          var t = e.goPrevious,
            r = e.isSubmitting,
            u = e.isSave,
            s = e.nextButtonName || "Next"
          return n.createElement(
            i.Ug,
            {
              maxW: "700px",
              py: "12px",
              mb: { base: "74px", md: "44px" },
              pl: "12px",
              pt: "20px"
            },
            t &&
              n.createElement(
                a.zx,
                {
                  fontSize: "18px",
                  fontWeight: "medium",
                  minW: "120px",
                  onClick: t,
                  variant: "unstyled",
                  bg: "gradient.purple.5",
                  bgClip: "text",
                  _hover: { bg: "gradient.purple.2", bgClip: "text" }
                },
                "Previous"
              ),
            n.createElement(i.LZ, null),
            !u &&
              n.createElement(
                a.zx,
                {
                  type: "submit",
                  fontSize: "18px",
                  fontWeight: "medium",
                  minW: "120px",
                  variant: "unstyled",
                  bg: "gradient.purple.5",
                  bgClip: "text",
                  _hover: { bg: "gradient.purple.2", bgClip: "text" },
                  loadingText: "Submitting",
                  isLoading: r
                },
                s
              ),
            u &&
              n.createElement(
                o.Z,
                { isLoading: r, type: "submit", h: "50px", minW: "120px" },
                s
              )
          )
        }
    },
    3698: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            u: function () {
              return b
            }
          })
          var i = r(41451),
            a = r(86854),
            o = r(67294),
            u = r(11972),
            s = r(62639),
            c = r(76478),
            l = r(61911),
            d = r(45435),
            p = r(70670),
            m = r(51193),
            f = r(66647),
            h = e([m, f])
          ;[m, f] = h.then ? (await h)() : h
          var g = [l.Z, d.Z, m.Z, p.Z, f.Z],
            b = function (e) {
              var t = e.identity,
                r = (0, o.useState)(0),
                n = (0, a.Z)(r, 2),
                l = n[0],
                d = n[1]
              return o.createElement(
                u.M5,
                {
                  bgColor: "gray_light3",
                  pt: { base: "12px", md: "18px" },
                  mx: "0px",
                  px: "0px",
                  w: "100%"
                },
                o.createElement(
                  s.mQ,
                  {
                    isLazy: !0,
                    variant: "unstyled",
                    align: "center",
                    w: "100%",
                    index: l,
                    onChange: function (e) {
                      return d(e)
                    }
                  },
                  o.createElement(
                    u.X6,
                    {
                      fontSize: "18px",
                      fontWeight: "medium",
                      color: "black_2"
                    },
                    "Step ",
                    l + 1,
                    " of ",
                    5
                  ),
                  o.createElement(
                    s.td,
                    { pt: "10px", pointerEvents: "none" },
                    (0, i.Z)(Array(5)).map(function (e, t) {
                      return o.createElement(c.a, { key: t })
                    })
                  ),
                  o.createElement(
                    s.nP,
                    { w: "100%", mt: "12px" },
                    g.map(function (e, r) {
                      return o.createElement(
                        s.x4,
                        { key: r },
                        o.createElement(e, {
                          setTabIndex: d,
                          myIndex: r,
                          identity: t
                        })
                      )
                    })
                  )
                )
              )
            }
          n()
        } catch (x) {
          n(x)
        }
      })
    },
    70670: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return W
        }
      })
      var n,
        i = r(67294),
        a = r(45607),
        o = r(11972),
        u = r(82175),
        s = r(33932),
        c = r(87462),
        l = r(30168),
        d = r(45987),
        p = r(88523),
        m = r(73733),
        f = r(56223),
        h = r(84597),
        g = r(41229),
        b = (r(17785), r(70917)),
        x = r(71381),
        v = r(60081),
        y = r(15658),
        w = [
          "id",
          "field",
          "title",
          "errorMesg",
          "isRequired",
          "isInvalid",
          "setFieldValue",
          "dateValue"
        ]
      function S(e) {
        var t = e.id,
          r = e.field,
          a = e.title,
          o = e.errorMesg,
          u = e.isRequired,
          s = e.isInvalid,
          S = e.setFieldValue,
          E = e.dateValue,
          k = (0, d.Z)(e, w),
          T = {
            defaultSelected: E,
            fromYear: E.getFullYear(),
            toYear: E.getFullYear() + 1,
            format: "PP",
            required: u
          },
          Z = (0, g.Gl)(T),
          q = (0, p.qY)(),
          I = q.onOpen,
          C = q.onClose,
          P = q.isOpen,
          _ = (0, x.Z)(r.value) ? (0, v.Z)(r.value, T.format) : ""
        return i.createElement(
          m.NI,
          (0, c.Z)({ isRequired: u, isInvalid: s }, k, {
            css: (0, b.iv)(
              n ||
                (n = (0, l.Z)([
                  "\n        --rdp-cell-size: 2rem;\n        --rdp-accent-color: #c28de9;\n        --rdp-background-color: #c28de9;\n        --rdp-outline: 2px solid #a469d5;\n      "
                ]))
            )
          }),
          i.createElement(
            m.lX,
            {
              htmlFor: t,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            a
          ),
          i.createElement(
            f.J2,
            { isOpen: P, onOpen: I, onClose: C },
            i.createElement(
              f.xo,
              null,
              i.createElement(
                h.BZ,
                null,
                i.createElement(
                  h.II,
                  (0, c.Z)({}, Z.fieldProps, {
                    placeholder: _,
                    _hover: { cursor: "pointer" }
                  })
                ),
                i.createElement(h.xH, {
                  children: i.createElement(y.Qu, {
                    color: "purple",
                    _hover: { cursor: "pointer" }
                  })
                })
              )
            ),
            i.createElement(
              f.yk,
              null,
              i.createElement(
                g._W,
                (0, c.Z)({}, Z.dayPickerProps, {
                  mode: "single",
                  styles: {
                    caption_label: { fontSize: "17px", color: "#a469d5" }
                  },
                  onSelect: function (e) {
                    C(), S(t, e)
                  }
                })
              )
            )
          ),
          i.createElement(m.J1, null, o)
        )
      }
      var E = r(92619),
        k = r(42340),
        T = r(50828),
        Z = r(98400),
        q = r(23256),
        I = r(60013),
        C = r(59876),
        P = r(70216),
        _ = r(66985),
        R = r(66897),
        W = (0, T.Pi)(function (e) {
          var t = e.setTabIndex,
            r = e.myIndex,
            n = (0, Z.oR)(q.Z).editingJob,
            c = (0, a.pm)(),
            l = function () {
              t(r - 1)
            }
          return i.createElement(
            u.J9,
            {
              initialValues: {
                deliverableMedia: n.deliverableMedia,
                dueDate: n.dueDate,
                copyright: n.copyright,
                nextStep: r + 1
              },
              validationSchema: k.eH,
              onSubmit: function (e, r) {
                !(function (e, r) {
                  try {
                    var i = e.deliverableMedia,
                      a = e.dueDate,
                      o = e.copyright,
                      u = e.nextStep
                    n.updateStep4(i, a, o), t(u)
                  } catch (s) {
                    _.default.error(s),
                      (0, R.showToast)(
                        c,
                        "Create Job",
                        "We have a problem processing the step. Please try again later.",
                        "error"
                      )
                  } finally {
                    r(!1)
                  }
                })(e, r.setSubmitting)
              },
              enableReinitialize: !0
            },
            function (e) {
              var t = e.isSubmitting,
                r = e.setFieldValue
              return i.createElement(
                u.l0,
                { style: { width: "100%" } },
                i.createElement(
                  o.gC,
                  {
                    bgColor: "white",
                    borderRadius: "14px",
                    maxW: "700px",
                    spacing: { base: "24px", md: "30px" },
                    py: "24px"
                  },
                  i.createElement(
                    o.X6,
                    { fontSize: "24px", color: "black_2", fontWeight: "bold" },
                    "Delivery"
                  ),
                  i.createElement(
                    u.gN,
                    { name: "deliverableMedia" },
                    function (e) {
                      var t = e.field,
                        r = e.form
                      return i.createElement(
                        s.y,
                        {
                          id: "deliverableMedia",
                          field: t,
                          inputFontSize: { base: "sm", md: "md" },
                          placeholder: "e.g. PNG, AI, PSD, SVG, FIG",
                          w: { base: "95%", md: "80%" },
                          isInvalid:
                            r.errors.deliverableMedia &&
                            r.touched.deliverableMedia,
                          errorMesg: r.errors.deliverableMedia,
                          isRequired: !0
                        },
                        "Deliverables Media Format / How to Deliver?"
                      )
                    }
                  ),
                  i.createElement(u.gN, { name: "dueDate" }, function (e) {
                    var t = e.field,
                      n = e.meta
                    return i.createElement(S, {
                      id: "dueDate",
                      field: t,
                      dateValue: n.initialValue,
                      setFieldValue: r,
                      title: "When do you need the deliverable?",
                      w: { base: "95%", md: "80%" },
                      isInvalid: n.error,
                      errorMesg: n.error,
                      isRequired: !0
                    })
                  }),
                  i.createElement(
                    u.gN,
                    { name: "copyright", type: "checkbox" },
                    function (e) {
                      var t = e.field,
                        r = e.form,
                        n = e.meta
                      return i.createElement(
                        E.Z,
                        {
                          id: "copyright",
                          field: t,
                          isChecked: n.initialValue,
                          isInvalid: r.errors.copyright && r.touched.copyright,
                          errorMesg: r.errors.copyright,
                          isRequired: !0,
                          w: { base: "95%", md: "80%" }
                        },
                        i.createElement(
                          o.xv,
                          { fontWeight: "medium", fontSize: "13px" },
                          "Agree to",
                          " ",
                          i.createElement(
                            P.Z,
                            {
                              href: "copyright.html",
                              bg: "gradient.purple.5",
                              bgClip: "text",
                              _hover: {
                                bg: "gradient.purple.2",
                                bgClip: "text"
                              }
                            },
                            "Copyright Statement",
                            i.createElement(C.h0, {
                              ml: "6px",
                              mb: "2px",
                              color: "purple"
                            })
                          )
                        )
                      )
                    }
                  )
                ),
                i.createElement(I.z, { goPrevious: l, isSubmitting: t })
              )
            }
          )
        })
    },
    76478: function (e, t, r) {
      "use strict"
      r.d(t, {
        a: function () {
          return a
        }
      })
      var n = r(67294),
        i = r(62639),
        a = function (e) {
          var t = e.children
          return n.createElement(
            i.OK,
            {
              color: "black",
              w: "60px",
              mx: "6px",
              h: "4px",
              fontSize: { md: "16px", lg: "20px" },
              fontWeight: "medium",
              borderBottom: "4px solid currentColor",
              borderBottomColor: "gray_light",
              borderRadius: "1px",
              _selected: {
                borderBottom: "4px solid currentColor",
                borderBottomColor: "purple_2"
              },
              _hover: {
                borderBottom: "4px solid currentColor",
                borderBottomColor: "purple_2"
              },
              _active: {
                borderBottom: "4px solid currentColor",
                borderBottomColor: "purple_2"
              }
            },
            t
          )
        }
    },
    66647: function (e, t, r) {
      "use strict"
      r.a(
        e,
        async function (e, n) {
          try {
            var i = r(15861),
              a = r(86854),
              o = r(87757),
              u = r.n(o),
              s = r(67294),
              c = r(5152),
              l = r.n(c),
              d = r(11163),
              p = r(45607),
              m = r(11972),
              f = r(82175),
              h = r(33932),
              g = r(42340),
              b = r(36130),
              x = r(50828),
              v = r(98400),
              y = r(23256),
              w = r(66985),
              S = r(31681),
              E = r(66897),
              k = r(48954),
              T = r(5508),
              Z = r(29462),
              q = r(30381),
              I = r.n(q)
            function e(e, t) {
              var r =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!r) {
                if (
                  Array.isArray(e) ||
                  (r = W(e)) ||
                  (t && e && "number" === typeof e.length)
                ) {
                  r && (e = r)
                  var n = 0,
                    i = function () {}
                  return {
                    s: i,
                    n: function () {
                      return n >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[n++] }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: i
                  }
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                )
              }
              var a,
                o = !0,
                u = !1
              return {
                s: function () {
                  r = r.call(e)
                },
                n: function () {
                  var e = r.next()
                  return (o = e.done), e
                },
                e: function (e) {
                  ;(u = !0), (a = e)
                },
                f: function () {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (u) throw a
                  }
                }
              }
            }
            function W(e, t) {
              if (e) {
                if ("string" === typeof e) return N(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? N(e, t)
                    : void 0
                )
              }
            }
            function N(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
              return n
            }
            var C = (await Promise.resolve().then(r.bind(r, 24686)))
                .makeJobActor,
              P = (await r.e(5985).then(r.bind(r, 5985))).actorRunner,
              _ = l()(function () {
                return r.e(7643).then(r.bind(r, 27643))
              }),
              R = { base: "95%", md: "80%" }
            ;(t.Z = (0, x.Pi)(function (t) {
              var r = t.setTabIndex,
                n = t.myIndex,
                o = t.identity,
                c = (0, v.oR)(y.Z),
                l = c.editingJob,
                x = c.appContext.authProvider,
                q = (0, d.useRouter)(),
                W = (0, s.useState)(l.additionalDocs),
                N = (0, a.Z)(W, 2),
                z = N[0],
                F = N[1],
                M = (0, p.pm)(),
                A = function (e, t) {
                  var r = e.futurePlan,
                    n = t.deliverableMedia,
                    i = t.dueDate,
                    a = I()(i).utc().toDate()
                  return {
                    deliverableMedia: n,
                    dueDate: (0, T.ep)(a),
                    futurePlan: r
                  }
                },
                B = function (e, t) {
                  try {
                    var r = e.futurePlan
                    l.updateStep5(r)
                  } catch (n) {
                    w.default.error(n),
                      (0, E.showToast)(
                        M,
                        "Create Job",
                        "We have a problem processing the step. Please try again later.",
                        "error"
                      )
                  } finally {
                    t(!1)
                  }
                },
                D = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r) {
                      var n
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {
                                  appStore: c,
                                  showErrorMesg: function () {
                                    ;(0, E.showStandardErrorMesg)(M)
                                  },
                                  finalClosure: function () {
                                    r.setSubmitting(!1)
                                  }
                                }),
                                (e.next = 3),
                                P(
                                  n,
                                  (0, i.Z)(
                                    u().mark(function e() {
                                      var r, n, i, a, s, c
                                      return u().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (r = A(t, l)),
                                                (e.next = 3),
                                                C(o, x)
                                              )
                                            case 3:
                                              return (
                                                (n = e.sent),
                                                (i = t.newStatus),
                                                (a = (0, T.G8)(i)),
                                                (e.next = 8),
                                                n.updateJobPart2(
                                                  l.id,
                                                  r,
                                                  a,
                                                  (0, T.$6)(x)
                                                )
                                              )
                                            case 8:
                                              if (!(s = e.sent).ok) {
                                                e.next = 27
                                                break
                                              }
                                              return (
                                                (e.next = 12),
                                                J(n, l.id, z, l.additionalDocs)
                                              )
                                            case 12:
                                              ;(c = e.sent),
                                                l.saveAdditionalDocs(c),
                                                (e.t0 = i),
                                                (e.next =
                                                  e.t0 === k.By.active
                                                    ? 17
                                                    : e.t0 === k.By.draft
                                                    ? 19
                                                    : 21)
                                              break
                                            case 17:
                                              return (
                                                (0, E.showToast)(
                                                  M,
                                                  "Job published",
                                                  "Congratulations! \ud83c\udf89 You job is now published successfully to our marketplace. \ud83d\ude03 \ud83d\udc83\ud83c\udffb \ud83d\udd7a",
                                                  "success"
                                                ),
                                                e.abrupt("break", 23)
                                              )
                                            case 19:
                                              return (
                                                (0, E.showToast)(
                                                  M,
                                                  "Draft saved",
                                                  "Your draft is now saved successfully. \ud83d\ude0e You can find this draft in My Jobs.",
                                                  "success"
                                                ),
                                                e.abrupt("break", 23)
                                              )
                                            case 21:
                                              return (
                                                (0, E.showToast)(
                                                  M,
                                                  "Job saved",
                                                  "Your job is updated successfully. \ud83d\ude0e",
                                                  "success"
                                                ),
                                                e.abrupt("break", 23)
                                              )
                                            case 23:
                                              l.reset(), L(), (e.next = 28)
                                              break
                                            case 27:
                                              throw new Error(s)
                                            case 28:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                L = function () {
                  q.push("/myjobs", "/myjobs.html")
                },
                J = (function () {
                  var t = (0, i.Z)(
                    u().mark(function t(r, n, i, a) {
                      var o, s, c, l, d, p, m, f, h, g, b, v
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((o = []),
                                  (s = a.map(function (e) {
                                    return e.id
                                  })),
                                  (c = i.map(function (e) {
                                    return e.id
                                  })),
                                  !(
                                    (l = s.filter(function (e) {
                                      return !c.includes(e)
                                    })).length > 0
                                  ))
                                ) {
                                  t.next = 11
                                  break
                                }
                                return (
                                  (0, E.showToast)(
                                    M,
                                    "Processing files",
                                    "Deleting old files ...",
                                    "success"
                                  ),
                                  (t.next = 8),
                                  r.removeAdditionalDocs(n, l, (0, T.$6)(x))
                                )
                              case 8:
                                if ((d = t.sent).ok) {
                                  t.next = 11
                                  break
                                }
                                throw new Error(d)
                              case 11:
                                ;(p = e(i)), (t.prev = 12), p.s()
                              case 14:
                                if ((m = p.n()).done) {
                                  t.next = 34
                                  break
                                }
                                if ((f = m.value).id != k.Rf) {
                                  t.next = 31
                                  break
                                }
                                return (
                                  (h = f.fileArray),
                                  (g = {
                                    fileId: f.id,
                                    name: f.name,
                                    mimeType: f.mimeType
                                  }),
                                  (0, E.showToast)(
                                    M,
                                    "Processing files",
                                    "Your new file ".concat(
                                      f.name,
                                      " is being processed..."
                                    ),
                                    "success"
                                  ),
                                  (t.next = 22),
                                  r.addAdditionalDoc(n, h, g, (0, T.$6)(x))
                                )
                              case 22:
                                if (!(b = t.sent).ok) {
                                  t.next = 28
                                  break
                                }
                                ;(v = b.ok),
                                  o.push({
                                    id: v,
                                    fileArray: h,
                                    name: f.name,
                                    mimeType: f.mimeType
                                  }),
                                  (t.next = 29)
                                break
                              case 28:
                                throw new Error(b)
                              case 29:
                                t.next = 32
                                break
                              case 31:
                                o.push(f)
                              case 32:
                                t.next = 14
                                break
                              case 34:
                                t.next = 39
                                break
                              case 36:
                                ;(t.prev = 36), (t.t0 = t.catch(12)), p.e(t.t0)
                              case 39:
                                return (t.prev = 39), p.f(), t.finish(39)
                              case 42:
                                return t.abrupt("return", o)
                              case 43:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[12, 36, 39, 42]]
                      )
                    })
                  )
                  return function (e, r, n, i) {
                    return t.apply(this, arguments)
                  }
                })(),
                j = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return r.setSubmitting(!0), (e.next = 3), D(t, r)
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                O = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, i) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((B(t, i.setSubmitting), !(t.nextStep == n))) {
                                e.next = 7
                                break
                              }
                              return (e.next = 5), j(t, i)
                            case 5:
                              e.next = 8
                              break
                            case 7:
                              r(t.nextStep)
                            case 8:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                U = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r, n) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return r("newStatus", n), (e.next = 3), t()
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r, n) {
                    return e.apply(this, arguments)
                  }
                })(),
                V = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return r("nextStep", n - 1), (e.next = 3), t()
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })()
              return s.createElement(
                f.J9,
                {
                  initialValues: {
                    futurePlan: l.futurePlan,
                    nextStep: n,
                    newStatus: k.By.active
                  },
                  validationSchema: g.B9,
                  onSubmit: O,
                  enableReinitialize: !0
                },
                function (e) {
                  var t = e.isSubmitting,
                    r = e.submitForm,
                    n = e.setFieldValue
                  return s.createElement(
                    f.l0,
                    { style: { width: "100%" } },
                    s.createElement(
                      m.gC,
                      {
                        bgColor: "white",
                        borderRadius: "14px",
                        maxW: "700px",
                        spacing: { base: "24px", md: "30px" },
                        py: "24px"
                      },
                      s.createElement(
                        m.X6,
                        {
                          fontSize: "24px",
                          color: "black_2",
                          fontWeight: "bold"
                        },
                        "Any Other Things"
                      ),
                      s.createElement(
                        f.gN,
                        { name: "futurePlan" },
                        function (e) {
                          var t = e.field,
                            r = e.form
                          return s.createElement(
                            h.y,
                            {
                              id: "futurePlan",
                              field: t,
                              inputFontSize: { base: "sm", md: "md" },
                              placeholder: "e.g. designing job",
                              w: R,
                              isInvalid:
                                r.errors.futurePlan && r.touched.futurePlan,
                              errorMesg: r.errors.futurePlan
                            },
                            s.createElement(
                              m.xv,
                              {
                                fontSize: "14px",
                                fontWeight: "medium",
                                color: "black_2"
                              },
                              "Future job plan - Will you have any upcoming jobs? (Optional)"
                            )
                          )
                        }
                      ),
                      s.createElement(b.U, {
                        title: "Upload additional docs?",
                        subTitle:
                          "Is there any other things you would like creators to know? e.g. Supplementary requirements PDF / Word Doc. (Optional)",
                        addButtonName: "Add Doc",
                        standardWidth: R,
                        files: z,
                        setFiles: F,
                        maxNumFiles: S.R2.MaxTotalAdditionalDocs,
                        maxFileSize: S.R2.MaxFileSizeBytes
                      })
                    ),
                    s.createElement(Z.v, {
                      goPrevious: function () {
                        return V(r, n)
                      },
                      isSubmitting: t,
                      submitDraft: l.isDraft()
                        ? function () {
                            return U(r, n, k.By.draft)
                          }
                        : null,
                      submitPublish: function () {
                        return U(
                          r,
                          n,
                          l.isExistingNonDraft() ? l.status : k.By.active
                        )
                      }
                    }),
                    s.createElement(_, null)
                  )
                }
              )
            })),
              n()
          } catch (W) {
            n(W)
          }
        },
        1
      )
    },
    45435: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return P
        }
      })
      var n = r(67294),
        i = r(45607),
        a = r(11972),
        o = r(82175),
        u = r(81967),
        s = r(91822),
        c = r(42340),
        l = r(50828),
        d = r(98400),
        p = r(23256),
        m = r(16830),
        f = r(60013),
        h = r(66985),
        g = r(66897),
        b = r(87462),
        x = r(86854),
        v = r(45987),
        y = r(67379),
        w = r(80011),
        S = r(73733),
        E = r(84597),
        k = r(29950),
        T = [
          "id",
          "field",
          "errorMesg",
          "isRequired",
          "isInvalid",
          "inputFontWeight",
          "inputFontColor",
          "inputFontSize",
          "min",
          "max",
          "token",
          "TokenIcon",
          "setFieldValue"
        ],
        Z = (0, n.forwardRef)(function (e, t) {
          var r = e.id,
            i = e.field,
            a = e.errorMesg,
            o = e.isRequired,
            u = e.isInvalid,
            s = e.inputFontWeight,
            c = e.inputFontColor,
            l = e.inputFontSize,
            d = e.min,
            p = e.max,
            m = e.token,
            f = e.TokenIcon,
            h = e.setFieldValue,
            g = (0, v.Z)(e, T),
            Z = (0, n.useState)(!1),
            q = (0, x.Z)(Z, 2),
            I = q[0],
            C = q[1],
            P = function (e) {
              h(r, e)
            }
          return n.createElement(
            S.NI,
            (0, b.Z)(
              {
                isRequired: o,
                isInvalid: u,
                w: { base: "300px", md: "324px", lg: "364px", xl: "394px" }
              },
              g
            ),
            n.createElement(
              S.lX,
              {
                htmlFor: r,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              e.children
            ),
            n.createElement(
              E.BZ,
              null,
              n.createElement(
                y.Y2,
                {
                  id: r,
                  ref: t,
                  value: i.value,
                  onChange: P,
                  size: "md",
                  defaultValue: 1,
                  min: d,
                  max: p,
                  precision: 3,
                  step: 1,
                  focusBorderColor: "purple",
                  mr: "1.5rem"
                },
                n.createElement(y.zu, {
                  inputMode: "numeric",
                  maxW: "150px",
                  fontWeight: s,
                  fontSize: l,
                  color: c
                }),
                n.createElement(
                  y.Fi,
                  null,
                  n.createElement(y.WQ, null),
                  n.createElement(y.Y_, null)
                )
              ),
              n.createElement(
                w.iR,
                {
                  min: d,
                  max: p,
                  focusThumbOnChange: !1,
                  value: i.value,
                  onChange: P,
                  onMouseEnter: function () {
                    return C(!0)
                  },
                  onMouseLeave: function () {
                    return C(!1)
                  }
                },
                n.createElement(
                  w.Uj,
                  { bg: "purple_light" },
                  n.createElement(w.Ms, { bg: "purple" })
                ),
                n.createElement(
                  k.$,
                  {
                    hasArrow: !0,
                    bg: "purple",
                    color: "white",
                    placement: "top",
                    isOpen: I,
                    label: "".concat(i.value, " ").concat(m),
                    p: "8px"
                  },
                  n.createElement(
                    w.gs,
                    { boxSize: 9 },
                    n.createElement(f, { h: "30px", w: "41px", mr: "0px" })
                  )
                )
              )
            ),
            n.createElement(S.J1, null, a)
          )
        })
      Z.displayName = "FormNumberInput"
      var q = r(31681),
        I = r(15658),
        C = (0, m.$z)().map(function (e) {
          return n.createElement(
            "option",
            { key: e.value, value: e.value },
            e.label
          )
        }),
        P = (0, l.Pi)(function (e) {
          var t = e.setTabIndex,
            r = e.myIndex,
            l = (0, d.oR)(p.Z).editingJob,
            b = (0, i.pm)(),
            x = function () {
              t(r - 1)
            }
          return n.createElement(
            o.J9,
            {
              initialValues: {
                whatWeNeed: l.whatWeNeed,
                budget: l.budget,
                creatorType: l.creatorType,
                skill: l.skill,
                nextStep: r + 1
              },
              validationSchema: c.QZ,
              onSubmit: function (e, r) {
                !(function (e, r) {
                  try {
                    var n = e.whatWeNeed,
                      i = e.budget,
                      a = e.creatorType,
                      o = e.skill,
                      u = e.nextStep
                    l.updateStep2(n, Number(i), a, o), t(u)
                  } catch (s) {
                    h.default.error(s),
                      (0, g.showToast)(
                        b,
                        "Create Job",
                        "We have a problem processing the step. Please try again later.",
                        "error"
                      )
                  } finally {
                    r(!1)
                  }
                })(e, r.setSubmitting)
              },
              enableReinitialize: !0
            },
            function (e) {
              var t = e.values,
                r = e.isSubmitting,
                i = e.setFieldValue
              return n.createElement(
                o.l0,
                { style: { width: "100%" } },
                n.createElement(
                  a.gC,
                  {
                    bgColor: "white",
                    borderRadius: "14px",
                    maxW: "700px",
                    spacing: { base: "24px", md: "30px" },
                    py: "24px"
                  },
                  n.createElement(
                    a.X6,
                    { fontSize: "24px", color: "black_2", fontWeight: "bold" },
                    "Requirements & Budget"
                  ),
                  n.createElement(o.gN, { name: "whatWeNeed" }, function (e) {
                    var t = e.field,
                      r = e.form
                    return n.createElement(
                      u.Z,
                      {
                        id: "whatWeNeed",
                        placeholder:
                          "e.g. We need 5 screens designed in desktop and mobile friendly format",
                        w: { base: "95%", md: "80%" },
                        textAreaHeight: { base: "140px", md: "200px" },
                        field: t,
                        isInvalid: r.errors.whatWeNeed && r.touched.whatWeNeed,
                        errorMesg: r.errors.whatWeNeed,
                        isRequired: !0
                      },
                      "What do you need from content creator? This is where you put your summary of requirements here. You can upload additional documents e.g. pdf in step 5 to supplement your requirements."
                    )
                  }),
                  n.createElement(o.gN, { name: "budget" }, function (e) {
                    var t = e.field,
                      r = e.form
                    return n.createElement(
                      Z,
                      {
                        id: "budget",
                        field: t,
                        min: q.R2.BudgetMinNumTokens,
                        max: q.R2.BudgetMaxNumTokens,
                        inputFontSize: { base: "sm", md: "md" },
                        w: { base: "95%", md: "80%" },
                        isInvalid: r.errors.budget && r.touched.budget,
                        errorMesg: r.errors.budget,
                        setFieldValue: i,
                        token: "ICP",
                        TokenIcon: I.cD,
                        isRequired: !0
                      },
                      "Job Budget (ICP Token)"
                    )
                  }),
                  n.createElement(o.gN, { name: "creatorType" }, function (e) {
                    var t = e.field,
                      r = e.form
                    return n.createElement(
                      s.Z,
                      {
                        id: "creatorType",
                        title: "Creator Type",
                        placeholder: "\u2b07 Select a creator type",
                        isRequired: !0,
                        w: { base: "95%", md: "80%" },
                        field: t,
                        isInvalid:
                          r.errors.creatorType && r.touched.creatorType,
                        errorMesg: r.errors.creatorType
                      },
                      C
                    )
                  }),
                  n.createElement(o.gN, { name: "skill" }, function (e) {
                    var r,
                      i = e.field,
                      a = e.form
                    return n.createElement(
                      s.Z,
                      {
                        id: "skill",
                        title: "Main Creator Skill",
                        placeholder:
                          "\u2b07 Select the main skill you are after",
                        isRequired: !0,
                        w: { base: "95%", md: "80%" },
                        field: i,
                        isInvalid: a.errors.skill && a.touched.skill,
                        errorMesg: a.errors.skill
                      },
                      ((r = t.creatorType),
                      (0, m.BH)(r).map(function (e) {
                        return n.createElement(
                          "option",
                          { key: e.value, value: e.value },
                          e.label
                        )
                      }))
                    )
                  })
                ),
                n.createElement(f.z, { goPrevious: x, isSubmitting: r })
              )
            }
          )
        })
    },
    51193: function (e, t, r) {
      "use strict"
      r.a(
        e,
        async function (e, n) {
          try {
            var i = r(15861),
              a = r(86854),
              o = r(87757),
              u = r.n(o),
              s = r(67294),
              c = r(5152),
              l = r.n(c),
              d = r(45607),
              p = r(11972),
              m = r(82175),
              f = r(33932),
              h = r(42340),
              g = r(50828),
              b = r(98400),
              x = r(23256),
              v = r(60013),
              y = r(48954),
              w = r(5508),
              S = r(76451),
              E = r(31681),
              k = r(36130),
              T = r(66985),
              Z = r(66897),
              q = r(73580)
            function e(e, t) {
              var r =
                ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"]
              if (!r) {
                if (
                  Array.isArray(e) ||
                  (r = R(e)) ||
                  (t && e && "number" === typeof e.length)
                ) {
                  r && (e = r)
                  var n = 0,
                    i = function () {}
                  return {
                    s: i,
                    n: function () {
                      return n >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[n++] }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: i
                  }
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                )
              }
              var a,
                o = !0,
                u = !1
              return {
                s: function () {
                  r = r.call(e)
                },
                n: function () {
                  var e = r.next()
                  return (o = e.done), e
                },
                e: function (e) {
                  ;(u = !0), (a = e)
                },
                f: function () {
                  try {
                    o || null == r.return || r.return()
                  } finally {
                    if (u) throw a
                  }
                }
              }
            }
            function R(e, t) {
              if (e) {
                if ("string" === typeof e) return W(e, t)
                var r = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? W(e, t)
                    : void 0
                )
              }
            }
            function W(e, t) {
              ;(null == t || t > e.length) && (t = e.length)
              for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
              return n
            }
            var I = (await Promise.resolve().then(r.bind(r, 24686)))
                .makeJobActor,
              C = (await r.e(5985).then(r.bind(r, 5985))).actorRunner,
              P = l()(function () {
                return r.e(7643).then(r.bind(r, 27643))
              }),
              _ = { base: "95%", md: "80%" }
            ;(t.Z = (0, g.Pi)(function (t) {
              var r = t.setTabIndex,
                n = t.myIndex,
                o = t.identity,
                c = (0, b.oR)(x.Z),
                l = c.editingJob,
                g = c.user,
                R = c.appContext.authProvider,
                W = (0, s.useState)(l.preferredStyleImages),
                N = (0, a.Z)(W, 2),
                z = N[0],
                F = N[1],
                M = (0, d.pm)(),
                A = function (e, t) {
                  try {
                    var r = e.preferredStyleDesc,
                      n = e.preferredTools,
                      i = e.preferredStyledWebsite
                    l.updateStep3(r, n, i)
                  } catch (a) {
                    T.default.error(a),
                      (0, Z.showToast)(
                        M,
                        "Create Job",
                        "We have a problem processing the step. Please try again later.",
                        "error"
                      )
                  } finally {
                    t(!1)
                  }
                },
                B = function (e, t, r) {
                  var n = e.preferredStyleDesc,
                    i = e.preferredTools,
                    a = e.preferredStyledWebsite,
                    o = t.jobName,
                    u = t.aboutBrand,
                    s = t.industry,
                    c = t.targetAudience,
                    l = t.whatWeNeed,
                    d = t.budget,
                    p = t.creatorType,
                    m = t.skill,
                    f = (0, q.L)(d)
                  return {
                    createdBy: r.id,
                    createdAt: (0, w.ep)(new Date()),
                    status: (0, w.G8)(y.By.draft),
                    jobName: o,
                    aboutBrand: u,
                    industry: s,
                    targetAudience: c,
                    whatWeNeed: l,
                    budget: (0, w.go)(f),
                    creatorType: p,
                    skill: m,
                    preferredStyleDesc: n,
                    preferredStyledWebsite: a,
                    preferredTools: i
                  }
                },
                D = function () {
                  return l.isDraft() ? "Job draft saved" : "Job saved"
                },
                L = function () {
                  return l.isDraft()
                    ? "Your draft is now saved successfully. \ud83d\ude0e Complete the rest of the steps to finish creating the job. You can also find this draft in My Jobs."
                    : "Your job is now saved successfully. \ud83d\ude0e Complete the rest of the steps to finish editing."
                },
                J = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, n) {
                      var a
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = {
                                  appStore: c,
                                  showErrorMesg: function () {
                                    ;(0, Z.showStandardErrorMesg)(M)
                                  },
                                  finalClosure: function () {
                                    n.setSubmitting(!1)
                                  }
                                }),
                                (e.next = 3),
                                C(
                                  a,
                                  (0, i.Z)(
                                    u().mark(function e() {
                                      var n, i, a, s, c
                                      return u().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (e.next = 2), I(o, R)
                                            case 2:
                                              return (
                                                (n = e.sent),
                                                (i = B(t, l, g)),
                                                (e.next = 6),
                                                n.createJobPart1(
                                                  i,
                                                  (0, w.$6)(R)
                                                )
                                              )
                                            case 6:
                                              if (!(a = e.sent).ok) {
                                                e.next = 18
                                                break
                                              }
                                              return (
                                                (s = a.ok),
                                                l.updateJobId(s.id),
                                                (e.next = 12),
                                                O(
                                                  n,
                                                  s.id,
                                                  z,
                                                  l.preferredStyleImages
                                                )
                                              )
                                            case 12:
                                              ;(c = e.sent),
                                                l.savePreferredStyleImages(c),
                                                (0, Z.showToast)(
                                                  M,
                                                  D(),
                                                  L(),
                                                  "success"
                                                ),
                                                r(t.nextStep),
                                                (e.next = 19)
                                              break
                                            case 18:
                                              throw new Error(a)
                                            case 19:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                j = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, n) {
                      var a
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = {
                                  appStore: c,
                                  showErrorMesg: function () {
                                    ;(0, Z.showStandardErrorMesg)(M)
                                  },
                                  finalClosure: function () {
                                    n.setSubmitting(!1)
                                  }
                                }),
                                (e.next = 3),
                                C(
                                  a,
                                  (0, i.Z)(
                                    u().mark(function e() {
                                      var n, i, a, s, c
                                      return u().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = B(t, l, g)),
                                                (e.next = 3),
                                                I(o, R)
                                              )
                                            case 3:
                                              return (
                                                (i = e.sent),
                                                (e.next = 6),
                                                i.updateJobPart1(
                                                  l.id,
                                                  n,
                                                  (0, w.$6)(R)
                                                )
                                              )
                                            case 6:
                                              if (!(a = e.sent).ok) {
                                                e.next = 17
                                                break
                                              }
                                              return (
                                                (s = a.ok),
                                                (e.next = 11),
                                                O(
                                                  i,
                                                  s.id,
                                                  z,
                                                  l.preferredStyleImages
                                                )
                                              )
                                            case 11:
                                              ;(c = e.sent),
                                                l.savePreferredStyleImages(c),
                                                (0, Z.showToast)(
                                                  M,
                                                  D(),
                                                  L(),
                                                  "success"
                                                ),
                                                r(t.nextStep),
                                                (e.next = 19)
                                              break
                                            case 17:
                                              throw (
                                                (T.default.error(a),
                                                new Error(a))
                                              )
                                            case 19:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                O = (function () {
                  var t = (0, i.Z)(
                    u().mark(function t(r, n, i, a) {
                      var o, s, c, l, d, p, m, f, h, g, b, x
                      return u().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((o = []),
                                  (s = a.map(function (e) {
                                    return e.id
                                  })),
                                  (c = i.map(function (e) {
                                    return e.id
                                  })),
                                  !(
                                    (l = s.filter(function (e) {
                                      return !c.includes(e)
                                    })).length > 0
                                  ))
                                ) {
                                  t.next = 11
                                  break
                                }
                                return (
                                  (0, Z.showToast)(
                                    M,
                                    "Processing images",
                                    "Deleting old images ...",
                                    "success"
                                  ),
                                  (t.next = 8),
                                  r.removePreferredStyleImages(
                                    n,
                                    l,
                                    (0, w.$6)(R)
                                  )
                                )
                              case 8:
                                if ((d = t.sent).ok) {
                                  t.next = 11
                                  break
                                }
                                throw new Error(d)
                              case 11:
                                ;(p = e(i)), (t.prev = 12), p.s()
                              case 14:
                                if ((m = p.n()).done) {
                                  t.next = 34
                                  break
                                }
                                if ((f = m.value).id != y.ec) {
                                  t.next = 31
                                  break
                                }
                                return (
                                  (h = f.fileArray),
                                  (g = {
                                    imageId: f.id,
                                    name: f.name,
                                    mimeType: f.mimeType
                                  }),
                                  (0, Z.showToast)(
                                    M,
                                    "Processing images",
                                    "Your new image ".concat(
                                      f.name,
                                      " is being processed..."
                                    ),
                                    "success"
                                  ),
                                  (t.next = 22),
                                  r.addPreferredStyledImage(
                                    n,
                                    h,
                                    g,
                                    (0, w.$6)(R)
                                  )
                                )
                              case 22:
                                if (!(b = t.sent).ok) {
                                  t.next = 28
                                  break
                                }
                                ;(x = b.ok),
                                  o.push({
                                    id: x,
                                    fileArray: h,
                                    name: f.name,
                                    mimeType: f.mimeType
                                  }),
                                  (t.next = 29)
                                break
                              case 28:
                                throw new Error(b)
                              case 29:
                                t.next = 32
                                break
                              case 31:
                                o.push(f)
                              case 32:
                                t.next = 14
                                break
                              case 34:
                                t.next = 39
                                break
                              case 36:
                                ;(t.prev = 36), (t.t0 = t.catch(12)), p.e(t.t0)
                              case 39:
                                return (t.prev = 39), p.f(), t.finish(39)
                              case 42:
                                return t.abrupt("return", o)
                              case 43:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[12, 36, 39, 42]]
                      )
                    })
                  )
                  return function (e, r, n, i) {
                    return t.apply(this, arguments)
                  }
                })(),
                U = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r) {
                      var n
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.setSubmitting(!0),
                                (n = l.isNew() ? J : j),
                                (e.next = 4),
                                n(t, r)
                              )
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                V = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, i) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((A(t, i.setSubmitting), !(t.nextStep > n))) {
                                e.next = 7
                                break
                              }
                              return (e.next = 5), U(t, i)
                            case 5:
                              e.next = 8
                              break
                            case 7:
                              r(t.nextStep)
                            case 8:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                Y = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t, r) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return r("nextStep", n - 1), (e.next = 3), t()
                            case 3:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r) {
                    return e.apply(this, arguments)
                  }
                })(),
                H = (function () {
                  var e = (0, i.Z)(
                    u().mark(function e(t) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                (0, S.resizeImage)(t, E.R2.ImageMaxWidth)
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })()
              return s.createElement(
                m.J9,
                {
                  initialValues: {
                    preferredStyleDesc: l.preferredStyleDesc,
                    preferredTools: l.preferredTools,
                    preferredStyledWebsite: l.preferredStyledWebsite,
                    nextStep: n + 1
                  },
                  validationSchema: h.Pn,
                  onSubmit: V,
                  enableReinitialize: !0
                },
                function (e) {
                  var t = e.submitForm,
                    r = e.setFieldValue,
                    n = e.isSubmitting
                  return s.createElement(
                    m.l0,
                    { style: { width: "100%" } },
                    s.createElement(
                      p.gC,
                      {
                        bgColor: "white",
                        borderRadius: "14px",
                        maxW: "700px",
                        spacing: { base: "24px", md: "30px" },
                        py: "24px"
                      },
                      s.createElement(
                        p.X6,
                        {
                          fontSize: "24px",
                          color: "black_2",
                          fontWeight: "bold"
                        },
                        "Style"
                      ),
                      s.createElement(
                        m.gN,
                        { name: "preferredStyleDesc" },
                        function (e) {
                          var t = e.field,
                            r = e.form
                          return s.createElement(
                            f.y,
                            {
                              id: "preferredStyleDesc",
                              field: t,
                              inputFontSize: { base: "sm", md: "md" },
                              placeholder:
                                "e.g. formal / fun / retro / scientific etc.",
                              w: _,
                              isInvalid:
                                r.errors.preferredStyleDesc &&
                                r.touched.preferredStyleDesc,
                              errorMesg: r.errors.preferredStyleDesc
                            },
                            "Preferred Style (Optional)"
                          )
                        }
                      ),
                      s.createElement(
                        m.gN,
                        { name: "preferredTools" },
                        function (e) {
                          var t = e.field,
                            r = e.form
                          return s.createElement(
                            f.y,
                            {
                              id: "preferredTools",
                              field: t,
                              inputFontSize: { base: "sm", md: "md" },
                              placeholder:
                                "eg. Figma / Photoshop / Word / Final Cut Pro ",
                              w: _,
                              isInvalid:
                                r.errors.preferredTools &&
                                r.touched.preferredTools,
                              errorMesg: r.errors.preferredTools
                            },
                            "Preferred Tools / Framework (Optional)"
                          )
                        }
                      ),
                      s.createElement(
                        m.gN,
                        { name: "preferredStyledWebsite" },
                        function (e) {
                          var t = e.field,
                            r = e.form
                          return s.createElement(
                            f.y,
                            {
                              id: "preferredStyledWebsite",
                              field: t,
                              inputFontSize: { base: "sm", md: "md" },
                              placeholder: "eg. www.something.com",
                              w: _,
                              isInvalid:
                                r.errors.preferredStyledWebsite &&
                                r.touched.preferredStyledWebsite,
                              errorMesg: r.errors.preferredStyledWebsite
                            },
                            "Website Inspiration (Optional)"
                          )
                        }
                      ),
                      s.createElement(k.U, {
                        title: "Inspiration Images",
                        subTitle:
                          "Do you have any images that can inspire creators? (Optional)",
                        addButtonName: "Add Image",
                        standardWidth: _,
                        files: z,
                        setFiles: F,
                        processFileFunc: H,
                        maxNumFiles: E.R2.MaxTotalPreferredStyledImages,
                        acceptMimeType: E.Et.DefaultImageType
                      })
                    ),
                    s.createElement(P, null),
                    s.createElement(v.z, {
                      nextButtonName: "Save & Next",
                      goPrevious: function () {
                        return Y(t, r)
                      },
                      isSubmitting: n,
                      isSave: !0
                    })
                  )
                }
              )
            })),
              n()
          } catch (R) {
            n(R)
          }
        },
        1
      )
    },
    36130: function (e, t, r) {
      "use strict"
      r.d(t, {
        U: function () {
          return w
        }
      })
      var n = r(87462),
        i = r(41451),
        a = r(15861),
        o = r(87757),
        u = r.n(o),
        s = r(67294),
        c = r(45607),
        l = r(11972),
        d = r(51815),
        p = r(15658),
        m = r(81872),
        f = r(29950),
        h = r(32512),
        g = r(66897),
        b = r(76451),
        x = r(31681),
        v = r(48954),
        y = r(66985),
        w = function (e) {
          var t = e.title,
            r = e.subTitle,
            o = e.addButtonName,
            w = e.standardWidth,
            S = e.files,
            E = e.setFiles,
            k = e.maxNumFiles,
            T = e.acceptMimeType,
            Z = e.maxFileSize,
            q = e.processFileFunc,
            I = (0, c.pm)(),
            C = (0, h.uI)({
              maxFiles: 1,
              accept: T || x.Et.AnyFileType,
              onDrop: (function () {
                var e = (0, a.Z)(
                  u().mark(function e(r) {
                    var n, a, o, s, c
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(r.length > 0)) {
                                e.next = 27
                                break
                              }
                              if (((e.prev = 1), !(S.length >= k))) {
                                e.next = 5
                                break
                              }
                              return (
                                (0, g.showToast)(
                                  I,
                                  t,
                                  "You have reached the max total limit of ".concat(
                                    k,
                                    " files"
                                  ),
                                  "warning"
                                ),
                                e.abrupt("return")
                              )
                            case 5:
                              if (
                                ((n = Z || x.R2.MaxFileSizeBytes),
                                (a = r[0]),
                                !((o = a).size > n))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (0, g.showToast)(
                                  I,
                                  t,
                                  "The file "
                                    .concat(
                                      o.name,
                                      " exceeds the max file size of "
                                    )
                                    .concat(
                                      n,
                                      " bytes. Please select another one."
                                    ),
                                  "warning"
                                ),
                                e.abrupt("return")
                              )
                            case 11:
                              if (!q) {
                                e.next = 15
                                break
                              }
                              return (e.next = 14), q(a)
                            case 14:
                              o = e.sent
                            case 15:
                              return (
                                (e.next = 17),
                                (0, b.fileToCanisterBinaryStoreFormat)(o)
                              )
                            case 17:
                              ;(s = e.sent),
                                (c = (0, i.Z)(S)).push({
                                  id: v.Rf,
                                  fileArray: s,
                                  name: o.name,
                                  mimeType: o.type
                                }),
                                E(c),
                                (e.next = 27)
                              break
                            case 23:
                              ;(e.prev = 23),
                                (e.t0 = e.catch(1)),
                                y.default.error(e.t0),
                                (0, g.showToast)(
                                  I,
                                  t,
                                  "We have a problem processing your file. Please choose a new one.",
                                  "warning"
                                )
                            case 27:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[1, 23]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()
            }),
            P = C.getRootProps,
            _ = C.getInputProps
          return s.createElement(
            l.xu,
            { w: w },
            s.createElement(
              l.Ug,
              { pb: "12px" },
              s.createElement(
                l.xu,
                { textAlign: "left" },
                s.createElement(
                  l.xv,
                  { fontSize: "14px", fontWeight: "medium", color: "black_2" },
                  t
                ),
                s.createElement(
                  l.xv,
                  { fontSize: "13px", fontWeight: "medium", color: "black_2" },
                  r
                )
              ),
              s.createElement(l.LZ, null),
              s.createElement(
                d.zx,
                (0, n.Z)(
                  {
                    variant: "unstyled",
                    background: "gradient.purple.1",
                    color: "white",
                    minW: "106px",
                    h: "36px",
                    fontSize: "13px",
                    fontWeight: "medium",
                    rightIcon: s.createElement(p.pO, {
                      position: "relative",
                      top: "1px",
                      w: "12px"
                    }),
                    _hover: { background: "gradient.purple.2" }
                  },
                  P({ className: "dropzone" })
                ),
                o
              )
            ),
            0 == S.length &&
              s.createElement(
                l.M5,
                (0, n.Z)(
                  {
                    minH: "200px",
                    borderRadius: "6px",
                    borderColor: "gray_light5",
                    borderWidth: "1px",
                    cursor: "pointer"
                  },
                  P({ className: "dropzone" })
                ),
                s.createElement(
                  d.zx,
                  {
                    variant: "unstyled",
                    position: "relative",
                    color: "gray_light4",
                    fontWeight: "normal"
                  },
                  "Drag and drop file here or click to select"
                ),
                s.createElement("input", _())
              ),
            S.length > 0 &&
              s.createElement(
                l.MI,
                {
                  minH: "200px",
                  minChildWidth: "107px",
                  spacing: { base: "6px", sm: "8px" },
                  borderRadius: "6px",
                  borderColor: "gray_light5",
                  borderWidth: "1px"
                },
                s.createElement("input", _()),
                S.map(function (e, t) {
                  return s.createElement(
                    l.xu,
                    { key: t, px: "15px", py: "13px" },
                    s.createElement(
                      f.$,
                      { label: e.name },
                      s.createElement(
                        l.bK,
                        {
                          size: "97px",
                          bgColor: "gray_light3",
                          borderRadius: "4px"
                        },
                        s.createElement(d.hU, {
                          top: "-34px",
                          right: "-58px",
                          variant: "unstyled",
                          position: "relative",
                          icon: s.createElement(p.Tw, {
                            w: "10px",
                            color: "gray_light2"
                          }),
                          onClick: function () {
                            return (function (e) {
                              var t = (0, i.Z)(S)
                              t.splice(e, 1), E(t)
                            })(t)
                          }
                        }),
                        s.createElement(
                          l.xu,
                          { position: "relative", left: "-19px" },
                          s.createElement(m.NFo, { size: "50px" })
                        )
                      )
                    ),
                    s.createElement(
                      f.$,
                      { label: e.name },
                      s.createElement(
                        l.xv,
                        {
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "gray_light2",
                          textAlign: "center",
                          pt: "7px",
                          maxW: "200px",
                          w: "100%",
                          noOfLines: 3
                        },
                        e.name
                      )
                    )
                  )
                })
              )
          )
        }
    },
    29462: function (e, t, r) {
      "use strict"
      r.d(t, {
        v: function () {
          return f
        }
      })
      var n = r(87462),
        i = r(15861),
        a = r(86854),
        o = r(45987),
        u = r(87757),
        s = r.n(u),
        c = r(67294),
        l = r(11972),
        d = r(51815),
        p = r(42273),
        m = ["isSubmitting", "goPrevious", "submitDraft", "submitPublish"],
        f = function (e) {
          var t = e.isSubmitting,
            r = e.goPrevious,
            u = e.submitDraft,
            f = e.submitPublish,
            h = (0, o.Z)(e, m),
            g = (0, c.useState)(!1),
            b = (0, a.Z)(g, 2),
            x = b[0],
            v = b[1],
            y = (function () {
              var e = (0, i.Z)(
                s().mark(function e(t) {
                  return s().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((v(t), !t)) {
                            e.next = 6
                            break
                          }
                          return (e.next = 4), u()
                        case 4:
                          e.next = 8
                          break
                        case 6:
                          return (e.next = 8), f()
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
          return c.createElement(
            l.Ug,
            (0, n.Z)(
              {
                maxW: "700px",
                py: "12px",
                mb: { base: "64px", md: "44px" },
                pl: "12px",
                pt: "20px",
                spacing: "30px"
              },
              h
            ),
            r &&
              c.createElement(
                d.zx,
                {
                  fontSize: "18px",
                  fontWeight: "medium",
                  onClick: r,
                  variant: "unstyled",
                  bg: "gradient.purple.5",
                  bgClip: "text",
                  _hover: { bg: "gradient.purple.2", bgClip: "text" }
                },
                "Previous"
              ),
            c.createElement(l.LZ, null),
            u &&
              c.createElement(
                p.Z,
                {
                  isLoading: t && x,
                  onClick: function () {
                    y(!0)
                  },
                  w: "136px",
                  h: "50px"
                },
                "Save Draft"
              ),
            c.createElement(
              p.Z,
              {
                isLoading: t && !x,
                onClick: function () {
                  y(!1)
                },
                w: "136px",
                h: "50px"
              },
              "Publish"
            )
          )
        }
    },
    42340: function (e, t, r) {
      "use strict"
      r.d(t, {
        B9: function () {
          return p
        },
        G_: function () {
          return h
        },
        Gl: function () {
          return a
        },
        HQ: function () {
          return s
        },
        IY: function () {
          return i
        },
        P4: function () {
          return y
        },
        PH: function () {
          return v
        },
        Pn: function () {
          return d
        },
        QZ: function () {
          return c
        },
        UD: function () {
          return u
        },
        Ux: function () {
          return x
        },
        _9: function () {
          return f
        },
        dp: function () {
          return o
        },
        eH: function () {
          return l
        },
        xb: function () {
          return b
        }
      })
      var n = r(74231),
        i = (0, n.Ry)().shape({
          username: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(26, "Too Long!")
            .required("Username is required"),
          firstName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("First name is required"),
          lastName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Last name is required"),
          brand: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Brand / Business Name is required"),
          website: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .min(5, "Too Short!")
            .max(200, "Too Long!")
            .required("Website is required"),
          country: (0, n.Z_)().required("Country is required"),
          terms: (0, n.O7)().required(
            "Please agree to the Terms of use to proceed."
          )
        }),
        a = (0, n.Ry)().shape({
          username: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(26, "Too Long!")
            .required("Username is required"),
          firstName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("First name is required"),
          lastName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Last name is required"),
          brand: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(30, "Too Long!")
            .required("Brand / Business Name is required"),
          website: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .min(5, "Too Short!")
            .max(200, "Too Long!")
            .required("Website is required"),
          country: (0, n.Z_)().required("Country is required")
        }),
        o = (0, n.Ry)().shape({
          creatorName: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Creator Name is required"),
          tagline: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Tagline is required"),
          bio: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Biography is required")
        }),
        u = (0, n.Ry)().shape({
          title: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Title is required"),
          description: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Description is required")
        }),
        s = (0, n.Ry)().shape({
          jobName: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(60, "Too Long!")
            .required("Job Name is required"),
          aboutBrand: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(1e3, "Too Long!")
            .required("About your brand is required"),
          industry: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Industry is required"),
          targetAudience: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Target audience is required")
        }),
        c = (0, n.Ry)().shape({
          whatWeNeed: (0, n.Z_)()
            .min(5, "Too Short!")
            .max(3e3, "Too Long!")
            .required("Enter your requirements"),
          creatorType: (0, n.Z_)()
            .min(1, "Too Short!")
            .max(100, "Too Long!")
            .required("Creator Type is required"),
          skill: (0, n.Z_)()
            .min(1, "Too Short!")
            .max(100, "Too Long!")
            .required("Skill is required")
        }),
        l = (0, n.Ry)().shape({
          deliverableMedia: (0, n.Z_)()
            .min(2, "Too Short!")
            .max(200, "Too Long!")
            .required("Deliverable Media is required"),
          dueDate: (0, n.hT)()
            .min(new Date(), "Must be in the future!")
            .required("Due Date is required"),
          copyright: (0, n.O7)().required(
            "Please agree to the Copyright Statement to proceed."
          )
        }),
        d = (0, n.Ry)().shape({
          preferredStyleDesc: (0, n.Z_)().max(300, "Too Long!"),
          preferredTools: (0, n.Z_)().max(300, "Too Long!"),
          preferredStyledWebsite: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .max(300, "Too Long!")
        }),
        p = (0, n.Ry)().shape({
          futurePlan: (0, n.Z_)().max(300, "Too Long!")
        }),
        m = "Please check all the boxes before approving.",
        f = (0, n.Ry)().shape({
          receiveFinal: (0, n.O7)().required(m),
          copyright: (0, n.O7)().required(m),
          payment: (0, n.O7)().required(m)
        }),
        h = (0, n.Ry)().shape({ changes: (0, n.Z_)().max(500, "Too Long!") }),
        g = "Please check all the boxes before requesting approval.",
        b = (0, n.Ry)().shape({
          copyright: (0, n.O7)().required(g),
          authentic: (0, n.O7)().required(g),
          payment: (0, n.O7)().required(g)
        }),
        x = (0, n.Ry)().shape({
          email: (0, n.Z_)()
            .email("Invalid email")
            .required("Email is required")
        }),
        v = (0, n.Ry)().shape({
          reason: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Reason is required"),
          terms: (0, n.O7)().required("Please tick the acknowledgement.")
        }),
        y = (0, n.Ry)().shape({
          story: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Your story is required")
        })
    },
    76451: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          arrayBufferToImgSrc: function () {
            return s
          },
          convertBase64ToCanisterFileStoreFormat: function () {
            return m
          },
          fileToCanisterBinaryStoreFormat: function () {
            return d
          },
          resizeImage: function () {
            return f
          }
        })
      var n = r(15861),
        i = r(87757),
        a = r.n(i),
        o = r(98005),
        u = r.n(o)
      function s(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "jpeg",
          r = new Uint8Array(e),
          n = new Blob([r], { type: "image/".concat(t) }),
          i = URL.createObjectURL(n)
        return i
      }
      function c(e) {
        return l.apply(this, arguments)
      }
      function l() {
        return (l = (0, n.Z)(
          a().mark(function e(t) {
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, r) {
                        var n = new FileReader()
                        ;(n.onload = function () {
                          e(n.result)
                        }),
                          (n.onerror = r),
                          n.readAsArrayBuffer(t)
                      })
                    )
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function d(e) {
        return p.apply(this, arguments)
      }
      function p() {
        return (p = (0, n.Z)(
          a().mark(function e(t) {
            var r
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), c(t)
                  case 2:
                    return (
                      (r = e.sent),
                      e.abrupt("return", Array.from(new Uint8Array(r)))
                    )
                  case 4:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function m(e) {
        for (var t = atob(e), r = new Array(t.length), n = 0; n < t.length; n++)
          r[n] = t.charCodeAt(n)
        return Array.from(new Uint8Array(r))
      }
      var f = (function () {
        var e = (0, n.Z)(
          a().mark(function e(t, r) {
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        new (u())(t, {
                          quality: 0.8,
                          maxWidth: r || 768,
                          mimeType: "image/jpeg",
                          success: function (t) {
                            e(t)
                          },
                          error: function (t) {
                            e(t)
                          }
                        })
                      })
                    )
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )
        return function (t, r) {
          return e.apply(this, arguments)
        }
      })()
    },
    25996: function (e, t, r) {
      "use strict"
      r.d(t, {
        X: function () {
          return i
        },
        r: function () {
          return n
        }
      })
      var n = function (e) {
          return a(13)(e)
        },
        i = function (e) {
          return a(32)(e)
        },
        a = function (e) {
          return function (t) {
            return t.charCode === e || t.keyCode === e
          }
        }
    },
    38166: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/createjob",
        function () {
          return r(80006)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [
        5445, 2013, 260, 4617, 6556, 994, 2328, 8760, 5297, 253, 6804, 4597,
        5607, 5527, 9876, 828, 9748, 1141, 2512, 8005, 9575, 6223, 4813, 5122,
        2144, 5658, 3130, 2888, 9774, 179
      ],
      function () {
        return (t = 38166), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
