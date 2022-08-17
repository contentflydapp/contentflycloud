;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8336],
  {
    85821: function (e, t, n) {
      "use strict"
      n.a(
        e,
        async function (e, r) {
          try {
            n.r(t)
            var a = n(15861),
              l = n(86854),
              u = n(87757),
              c = n.n(u),
              o = n(67294),
              i = n(9008),
              s = n.n(i),
              d = n(11972),
              m = n(27386),
              p = n(51815),
              f = n(49697),
              h = n(95641),
              x = n(99171),
              v = n(77329),
              E = n(1576),
              b = n(92906),
              g = n(66985),
              y = n(23256),
              k = n(98400),
              Z = n(56972),
              w = (await Promise.resolve().then(n.bind(n, 24686)))
                .makeJobDisputeActor
            function e(e) {
              var t = e.identity,
                n = e.logout,
                r = (0, o.useState)([]),
                u = (0, l.Z)(r, 2),
                i = u[0],
                b = u[1],
                S = (0, k.oR)(y.Z).appContext.authProvider
              function C() {
                return A.apply(this, arguments)
              }
              function A() {
                return (A = (0, a.Z)(
                  c().mark(function e() {
                    var n, r
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), w(t, S)
                            case 3:
                              return (
                                (n = e.sent), (e.next = 6), n.loadJobDisputes()
                              )
                            case 6:
                              ;(r = e.sent), b(r), (e.next = 13)
                              break
                            case 10:
                              ;(e.prev = 10),
                                (e.t0 = e.catch(0)),
                                g.default.error(e.t0)
                            case 13:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 10]]
                    )
                  })
                )).apply(this, arguments)
              }
              return (
                (0, o.useEffect)(
                  function () {
                    C()
                  },
                  [1]
                ),
                o.createElement(
                  f.W,
                  { height: "100vh" },
                  o.createElement(
                    h.o,
                    null,
                    o.createElement(
                      s(),
                      null,
                      o.createElement("title", null, "Content Fly")
                    ),
                    o.createElement(
                      d.M5,
                      null,
                      o.createElement(
                        d.gC,
                        {
                          spacing: 4,
                          align: "stretch",
                          pb: "20px",
                          textAlign: "center"
                        },
                        o.createElement(
                          x.t,
                          null,
                          "Content Fly Job Disputes Admin"
                        ),
                        o.createElement(
                          m.UQ,
                          { allowMultiple: !0 },
                          o.createElement(
                            m.Qd,
                            null,
                            o.createElement(
                              "h2",
                              null,
                              o.createElement(
                                m.KF,
                                null,
                                o.createElement(
                                  d.xu,
                                  { flex: "1", textAlign: "left" },
                                  o.createElement(
                                    d.X6,
                                    { size: "md" },
                                    "Job Disputes"
                                  )
                                ),
                                o.createElement(m.XE, null)
                              )
                            ),
                            o.createElement(
                              m.Hk,
                              { pb: 4 },
                              o.createElement(Z.S, {
                                jobDisputeArray: i,
                                identity: t,
                                reload: C
                              })
                            )
                          ),
                          o.createElement(v.L, { makeActor: w, identity: t }),
                          o.createElement(E.y, { makeActor: w, identity: t })
                        ),
                        o.createElement(
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
              )
            }
            ;(t.default = (0, b.J3)(e)), r()
          } catch (S) {
            r(S)
          }
        },
        1
      )
    },
    99171: function (e, t, n) {
      "use strict"
      n.d(t, {
        t: function () {
          return u
        }
      })
      var r = n(87462),
        a = n(67294),
        l = n(11972),
        u = function (e) {
          return a.createElement(
            l.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            a.createElement(
              l.X6,
              (0, r.Z)(
                {
                  size: "lg",
                  bgGradient: "linear(to-l, #7928CA, #FF0080)",
                  bgClip: "text"
                },
                e
              ),
              e.children
            )
          )
        }
    },
    95641: function (e, t, n) {
      "use strict"
      n.d(t, {
        o: function () {
          return u
        }
      })
      var r = n(87462),
        a = n(67294),
        l = n(11972),
        u = function (e) {
          return a.createElement(
            l.Kq,
            (0, r.Z)(
              {
                spacing: "1.5rem",
                width: "100%",
                maxWidth: "48rem",
                pt: "4rem",
                px: "1rem"
              },
              e
            )
          )
        }
    },
    2243: function (e, t, n) {
      "use strict"
      n.d(t, {
        u: function () {
          return l
        }
      })
      var r = n(67294),
        a = n(66956),
        l = function () {
          return r.createElement(a.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    77329: function (e, t, n) {
      "use strict"
      n.d(t, {
        L: function () {
          return p
        }
      })
      var r = n(15861),
        a = n(86854),
        l = n(87757),
        u = n.n(l),
        c = n(67294),
        o = n(27386),
        i = n(11972),
        s = n(51815),
        d = n(31681),
        m = n(66985),
        p = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, c.useState)(null),
            p = (0, a.Z)(l, 2),
            f = p[0],
            h = p[1],
            x = (0, c.useState)(!1),
            v = (0, a.Z)(x, 2),
            E = v[0],
            b = v[1]
          function g() {
            return (g = (0, r.Z)(
              u().mark(function e() {
                var r, a, l
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), b(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getActorBalance()
                        case 7:
                          ;(a = e.sent),
                            (l = Number(a) / d.Ly.OneTC),
                            h(l),
                            (e.next = 15)
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e.catch(0)),
                            m.default.error(e.t0)
                        case 15:
                          return (e.prev = 15), b(!1), e.finish(15)
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
            o.Qd,
            null,
            c.createElement(
              "h2",
              null,
              c.createElement(
                o.KF,
                null,
                c.createElement(
                  i.xu,
                  { flex: "1", textAlign: "left" },
                  c.createElement(i.X6, { size: "md" }, "General")
                ),
                c.createElement(o.XE, null)
              )
            ),
            c.createElement(
              o.Hk,
              { pb: 4 },
              c.createElement(
                i.gC,
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
                      return g.apply(this, arguments)
                    },
                    isLoading: E
                  },
                  "Get Cycles Balance"
                ),
                null != f && c.createElement(i.xv, null, f, " TC")
              )
            )
          )
        }
    },
    56972: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return T
        }
      })
      var r = n(86854),
        a = n(67294),
        l = n(88523),
        u = n(3962),
        c = n(11972),
        o = n(18224),
        i = n(15861),
        s = n(87462),
        d = n(45987),
        m = n(87757),
        p = n.n(m),
        f = n(37770),
        h = n(45607),
        x = n(25527),
        v = n(51815),
        E = n(42273),
        b = ["bgColor", "children"],
        g = function (e) {
          var t = e.bgColor,
            n = e.children,
            r = (0, d.Z)(e, b),
            l = (0, f.xL)(r),
            u = l.getInputProps,
            o = l.getCheckboxProps,
            i = u(),
            m = o()
          return a.createElement(
            c.xu,
            { as: "label" },
            a.createElement("input", i),
            a.createElement(
              c.xu,
              (0, s.Z)({}, m, {
                cursor: "pointer",
                borderWidth: "1px",
                borderRadius: "md",
                boxShadow: "md",
                _checked: { bg: t, color: "white", borderColor: t },
                _focus: { boxShadow: "outline" },
                px: 5,
                py: 3
              }),
              n
            )
          )
        },
        y = n(66897),
        k = n(31681),
        Z = n(24686),
        w = n(23256),
        S = n(98400),
        C = n(5508),
        A = n(66985),
        z = ["children"],
        _ = ["children"],
        I = function (e) {
          var t = e.children,
            n = (0, d.Z)(e, z)
          return a.createElement(
            c.Kq,
            (0, s.Z)(
              { direction: "row", spacing: "20px", justify: "flex-start" },
              n
            ),
            t
          )
        },
        M = function (e) {
          var t = e.children,
            n = (0, d.Z)(e, _)
          return a.createElement(
            c.Ct,
            (0, s.Z)({ size: "sm", py: "3px", px: "6px" }, n),
            t
          )
        },
        P = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            l = e.disputeObject,
            u = e.identity,
            o = e.reload,
            d = (0, a.useRef)(null),
            m = l.state() == k.h0.Pending,
            b = Object.keys(k._A),
            z = (0, a.useState)(b[0]),
            _ = (0, r.Z)(z, 2),
            P = _[0],
            T = _[1],
            D = (0, a.useState)(!1),
            O = (0, r.Z)(D, 2),
            X = O[0],
            L = O[1],
            B = (0, S.oR)(w.Z).appContext.authProvider,
            F = (0, f.ar)({ name: "voting", defaultValue: b[0], onChange: T }),
            H = F.getRootProps,
            j = F.getRadioProps,
            J = H(),
            R = (0, h.pm)(),
            W = (function () {
              var e = (0, i.Z)(
                p().mark(function e() {
                  var t, r, a
                  return p().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0), null != (t = l.proposalFirstId()))
                            ) {
                              e.next = 4
                              break
                            }
                            return e.abrupt("return")
                          case 4:
                            return (
                              L(!0), (e.next = 7), (0, Z.makeJobDaoActor)(u, B)
                            )
                          case 7:
                            return (
                              (r = e.sent),
                              (e.next = 10),
                              r.vote({ proposal_id: t, vote: (0, C.G8)(P) })
                            )
                          case 10:
                            if (null == (a = e.sent).err) {
                              e.next = 13
                              break
                            }
                            throw new Error(a.err)
                          case 13:
                            return (e.next = 15), o()
                          case 15:
                            n(),
                              (0, y.showToast)(
                                R,
                                "Voting",
                                "We have successfully submitted your vote.",
                                "success"
                              ),
                              (e.next = 23)
                            break
                          case 19:
                            ;(e.prev = 19),
                              (e.t0 = e.catch(0)),
                              A.default.error(e.t0),
                              (0, y.showToast)(
                                R,
                                "Voting",
                                "We have a problem submitting your request. ".concat(
                                  e.t0,
                                  ". Please check console error log."
                                ),
                                "error"
                              )
                          case 23:
                            return (e.prev = 23), L(!1), e.finish(23)
                          case 26:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 19, 23, 26]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return a.createElement(
            x.u_,
            {
              isOpen: t,
              initialFocusRef: d,
              size: "full",
              closeOnOverlayClick: !1,
              onClose: n
            },
            a.createElement(x.ZA, null),
            a.createElement(
              x.hz,
              {
                color: "black_2",
                maxW: { base: "98%", md: "800px", lg: "1000px" },
                mt: "20px",
                mb: "260px",
                px: { base: "0px", md: "20px" }
              },
              a.createElement(
                x.xB,
                {
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "24px",
                  mt: "14px"
                },
                "Job Dispute (",
                l.id(),
                ")"
              ),
              a.createElement(x.ol, null),
              a.createElement(
                x.fe,
                null,
                a.createElement(
                  c.Kq,
                  { spacing: "5", divider: a.createElement(c.cX, null) },
                  a.createElement(
                    I,
                    null,
                    a.createElement(c.X6, { size: "md" }, "State"),
                    a.createElement(
                      M,
                      { colorScheme: l.colorOfState() },
                      l.state()
                    )
                  ),
                  l.hasValidOutcome() &&
                    a.createElement(
                      I,
                      null,
                      a.createElement(c.X6, { size: "md" }, "Jury Deliberated"),
                      a.createElement(
                        c.xv,
                        null,
                        "Creator rewarded",
                        " ",
                        a.createElement(
                          M,
                          { colorScheme: "teal" },
                          100 * l.outcomeCreatorAllocation(),
                          "%"
                        )
                      ),
                      a.createElement(
                        c.xv,
                        null,
                        "Buyer refunded",
                        " ",
                        a.createElement(
                          M,
                          { colorScheme: "blue" },
                          100 * l.outcomeBuyerAllocation(),
                          "%"
                        )
                      ),
                      a.createElement(c.xv, null, "at"),
                      a.createElement(
                        M,
                        { colorScheme: "orange" },
                        l.deliberatedAtHuman()
                      )
                    ),
                  m &&
                    a.createElement(
                      c.Kq,
                      { spacing: "5" },
                      a.createElement(c.X6, { size: "md" }, "Deliberate"),
                      a.createElement(
                        c.Ug,
                        J,
                        b.map(function (e) {
                          var t = j({ value: e })
                          return a.createElement(
                            g,
                            (0, s.Z)({ key: e }, t, { bgColor: "purple_3" }),
                            k._A[e]
                          )
                        })
                      )
                    ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(c.X6, { size: "md" }, "Date"),
                    a.createElement(c.xv, null, l.createdAtHuman())
                  ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(c.X6, { size: "md" }, "Job"),
                    a.createElement(c.xv, null, "(", l.jobId(), ")")
                  ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(c.X6, { size: "md" }, "Disputed By"),
                    a.createElement(c.xv, null, "(", l.createdBy(), ")")
                  ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(
                      c.X6,
                      { size: "md" },
                      "Buyer Story (",
                      l.buyerId(),
                      ")"
                    ),
                    a.createElement(c.xv, null, l.buyerStory())
                  ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(
                      c.X6,
                      { size: "md" },
                      "Creator Story (",
                      l.creatorId(),
                      ")"
                    ),
                    a.createElement(c.xv, null, l.creatorStory())
                  ),
                  a.createElement(
                    I,
                    null,
                    a.createElement(c.X6, { size: "md" }, "Job DAO Proposal"),
                    a.createElement(
                      c.xv,
                      null,
                      "(",
                      String(l.proposalIdList()),
                      ")"
                    )
                  )
                )
              ),
              a.createElement(
                x.mz,
                { mt: "20px" },
                a.createElement(
                  v.zx,
                  {
                    onClick: n,
                    w: m ? "50%" : "100%",
                    h: "60px",
                    mb: "9px",
                    ref: d
                  },
                  "Done"
                ),
                m &&
                  a.createElement(
                    E.Z,
                    {
                      ml: 3,
                      w: "50%",
                      type: "submit",
                      isDisabled: !m,
                      onClick: W,
                      isLoading: X
                    },
                    "Vote"
                  )
              )
            )
          )
        },
        T = function (e) {
          var t = e.jobDisputeArray,
            n = e.identity,
            i = e.reload,
            s = (0, l.qY)(),
            d = s.isOpen,
            m = s.onOpen,
            p = s.onClose,
            f = (0, a.useState)(null),
            h = (0, r.Z)(f, 2),
            x = h[0],
            v = h[1]
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              u.xJ,
              null,
              a.createElement(
                u.iA,
                { colorScheme: "teal", w: "1000px" },
                a.createElement(
                  u.hr,
                  null,
                  a.createElement(
                    u.Tr,
                    null,
                    a.createElement(u.Th, { isNumeric: !0 }, "ID"),
                    a.createElement(u.Th, null, "State"),
                    a.createElement(u.Th, null, "Date"),
                    a.createElement(u.Th, null, "Job"),
                    a.createElement(u.Th, null, "Disputed By"),
                    a.createElement(u.Th, null, "Buyer ID"),
                    a.createElement(u.Th, null, "Creator ID")
                  )
                ),
                a.createElement(
                  u.p3,
                  null,
                  t.map(function (e, t) {
                    var n = new o.y(e),
                      r = n.state()
                    return a.createElement(
                      u.Tr,
                      {
                        key: t,
                        onClick: function () {
                          return (function (e) {
                            v(e), m()
                          })(n)
                        },
                        _hover: { cursor: "pointer" }
                      },
                      a.createElement(u.Td, null, e.id),
                      a.createElement(
                        u.Td,
                        null,
                        a.createElement(
                          c.Ct,
                          {
                            size: "sm",
                            colorScheme: n.colorOfState(),
                            px: "6px",
                            py: "3px"
                          },
                          r
                        )
                      ),
                      a.createElement(u.Td, null, n.createdAtHuman()),
                      a.createElement(u.Td, null, e.jobId),
                      a.createElement(u.Td, null, e.createdBy),
                      a.createElement(u.Td, null, e.buyerId),
                      a.createElement(u.Td, null, e.creatorId)
                    )
                  })
                )
              )
            ),
            null != x &&
              a.createElement(P, {
                isOpen: d,
                onClose: p,
                disputeObject: x,
                identity: n,
                reload: i
              })
          )
        }
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
        u = n.n(l),
        c = n(67294),
        o = n(27386),
        i = n(11972),
        s = n(51815),
        d = n(66985),
        m = function (e) {
          var t = e.makeActor,
            n = e.identity,
            l = (0, c.useState)(null),
            m = (0, a.Z)(l, 2),
            p = m[0],
            f = m[1],
            h = (0, c.useState)(null),
            x = (0, a.Z)(h, 2),
            v = x[0],
            E = x[1],
            b = (0, c.useState)(!1),
            g = (0, a.Z)(b, 2),
            y = g[0],
            k = g[1],
            Z = (0, c.useState)(!1),
            w = (0, a.Z)(Z, 2),
            S = w[0],
            C = w[1]
          function A() {
            return (A = (0, r.Z)(
              u().mark(function e() {
                var r, a
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), k(!0), (e.next = 4), t(n)
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
                            d.default.error(e.t0)
                        case 14:
                          return (e.prev = 14), k(!1), e.finish(14)
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
          function z() {
            return (z = (0, r.Z)(
              u().mark(function e() {
                var r, a
                return u().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), C(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getManager()
                        case 7:
                          ;(a = e.sent), f(a.toString()), (e.next = 14)
                          break
                        case 11:
                          ;(e.prev = 11),
                            (e.t0 = e.catch(0)),
                            d.default.error(e.t0)
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
          return c.createElement(
            o.Qd,
            null,
            c.createElement(
              "h2",
              null,
              c.createElement(
                o.KF,
                null,
                c.createElement(
                  i.xu,
                  { flex: "1", textAlign: "left" },
                  c.createElement(i.X6, { size: "md" }, "Manager")
                ),
                c.createElement(o.XE, null)
              )
            ),
            c.createElement(
              o.Hk,
              { pb: 4 },
              c.createElement(
                i.gC,
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
                    isLoading: y
                  },
                  "Who am I?"
                ),
                null != v && c.createElement(i.xv, null, "Principal Id: ", v),
                c.createElement(
                  s.zx,
                  {
                    h: "3rem",
                    size: "md",
                    colorScheme: "blue_1",
                    variant: "outline",
                    onClick: function () {
                      return z.apply(this, arguments)
                    },
                    isLoading: S
                  },
                  "Get Manager"
                ),
                null != p && c.createElement(i.xv, null, "Manager Id: ", p)
              )
            )
          )
        }
    },
    30647: function (e, t, n) {
      "use strict"
      n.d(t, {
        S: function () {
          return i
        }
      })
      var r = n(15861),
        a = n(87757),
        l = n.n(a),
        u = n(64380),
        c = n(22169),
        o = n(31681),
        i = (function () {
          var e = (0, r.Z)(
            l().mark(function e(t, n) {
              var r, a, i, s
              return l().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = o.Ho.InternetIdentity),
                        (a = o.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === a ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, u.l)()
                    case 6:
                      return (i = e.sent), e.abrupt("return", i)
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
      "use strict"
      n.d(t, {
        J3: function () {
          return C
        },
        bv: function () {
          return S
        },
        vV: function () {
          return A
        },
        v_: function () {
          return z
        }
      })
      var r = n(87462),
        a = n(15861),
        l = n(86854),
        u = n(87757),
        c = n.n(u),
        o = n(67294),
        i = n(5152),
        s = n.n(i),
        d = n(11163),
        m = n(30647),
        p = n(11972),
        f = n(49697),
        h = n(49162),
        x = n(2243),
        v = function () {
          return o.createElement(
            f.W,
            { h: "120vh" },
            o.createElement(
              p.xu,
              { mt: "120px", mb: "30px" },
              o.createElement(h.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            o.createElement(x.u, null)
          )
        },
        E = n(98400),
        b = n(23256),
        g = n(66985),
        y = n(24686),
        k = s()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        Z = s()(function () {
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
        w = s()(function () {
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
        S = function (e, t) {
          return function (n) {
            return _(e, null !== t && void 0 !== t ? t : w, null, !1)(n)
          }
        },
        C = function (e) {
          return function (t) {
            return _(
              e,
              k,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        A = function (e) {
          return function (t) {
            return _(e, Z, null, !1)(t)
          }
        },
        z = function (e) {
          return function (t) {
            return _(e, Z, null, !0)(t)
          }
        },
        _ = function (e, t, u, i) {
          return function (s) {
            var p = (0, o.useState)(null),
              f = (0, l.Z)(p, 2),
              h = f[0],
              x = f[1],
              k = (0, o.useState)(!0),
              w = (0, l.Z)(k, 2),
              S = w[0],
              C = w[1],
              A = (0, o.useState)(""),
              z = (0, l.Z)(A, 2),
              _ = z[0],
              I = z[1],
              M = (0, o.useState)(1),
              P = (0, l.Z)(M, 2),
              T = P[0],
              D = P[1],
              O = (0, d.useRouter)(),
              X = (0, E.oR)(b.Z),
              L = X.appContext.authProvider,
              B = X.appContext.candidAuthProvider(),
              F = null !== t && void 0 !== t ? t : Z
            ;(0, o.useEffect)(
              function () {
                function e() {
                  return (e = (0, a.Z)(
                    c().mark(function e() {
                      var t
                      return c().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  C(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, m.S)(X.appContext.authProvider, {
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
                                if (!W(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!X.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), H(t)
                              case 13:
                                J(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), Y()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  g.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), C(!1), e.finish(23)
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
              [T]
            )
            var H = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t) {
                    var n, r, a, l
                    return c().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, y.makeUserProfileActor)(t, L)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(B)
                            case 6:
                              if (
                                ((a = e.sent),
                                !(
                                  (null === (n = a.ok) || void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (l = a.ok[0]),
                                (e.next = 11),
                                X.updateForNewSignupLogin(l)
                              )
                            case 11:
                              e.next = 16
                              break
                            case 13:
                              ;(e.prev = 13),
                                (e.t0 = e.catch(0)),
                                g.default.error(e.t0)
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
              j = function () {
                D(T + 1)
              },
              J = (function () {
                var e = (0, a.Z)(
                  c().mark(function e(t) {
                    var r, a
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((x(t), null == t)) {
                              e.next = 8
                              break
                            }
                            return (
                              (e.next = 4), n.e(7130).then(n.bind(n, 47130))
                            )
                          case 4:
                            ;(r = e.sent),
                              (a = r.Usergeek).setPrincipal(t.getPrincipal()),
                              a.trackSession()
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
            function R() {
              return (
                (R = (0, a.Z)(
                  c().mark(function e(t) {
                    return c().wrap(function (e) {
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
                            W(e.sent)
                              ? J(t)
                              : I(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                R.apply(this, arguments)
              )
            }
            function W(e) {
              if (null == u) return !0
              var t = u.split(",").map(function (e) {
                return e.trim()
              })
              return "" == u.trim() || t.includes(e.toString())
            }
            var Y = (function () {
                var e = (0, a.Z)(
                  c().mark(function e() {
                    var t
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, y.makeLogout)(L)), (e.next = 3), t()
                          case 3:
                            J(null), X.reset(), (0, y.clearCache)()
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
              G = (function () {
                var e = (0, a.Z)(
                  c().mark(function e() {
                    return c().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Y()
                          case 2:
                            O.push("/")
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
              ? o.createElement(
                  e,
                  (0, r.Z)({ identity: h, logout: G, triggerAuthUpdate: j }, s)
                )
              : S
              ? o.createElement(v, null)
              : i
              ? o.createElement(e, (0, r.Z)({}, s, { triggerAuthUpdate: j }))
              : o.createElement(F, {
                  handleAuthenticated: function (e) {
                    return R.apply(this, arguments)
                  },
                  warningMesg: _
                })
          }
        }
    },
    42273: function (e, t, n) {
      "use strict"
      n.d(t, {
        Z: function () {
          return i
        }
      })
      var r = n(87462),
        a = n(45987),
        l = n(67294),
        u = n(51815),
        c = n(11972),
        o = ["children"]
      function i(e) {
        var t = e.children,
          n = (0, a.Z)(e, o)
        return l.createElement(
          u.zx,
          (0, r.Z)(
            {
              color: "white",
              variant: "solid",
              background: "gradient.purple.2",
              _hover: {
                bgGradient: "linear(to-l, #b85bf1, #fc4f86)",
                boxShadow: "xl"
              },
              _active: { bgGradient: "linear(to-l, #9a5bf1, #fc4f92)" },
              _focus: { bgGradient: "linear(to-l, #620FAE, #FA1B69)" },
              loadingText: "Submitting",
              fontSize: "16px",
              fontWeight: "semibold",
              borderRadius: "7px",
              mb: "9px",
              h: "60px"
            },
            n
          ),
          l.createElement(c.xv, { noOfLines: 0 }, t)
        )
      }
    },
    18224: function (e, t, n) {
      "use strict"
      n.d(t, {
        y: function () {
          return d
        }
      })
      var r = n(43144),
        a = n(15671),
        l = n(4942),
        u = n(30381),
        c = n.n(u),
        o = n(31681),
        i = n(67839),
        s = n(5508),
        d = (0, r.Z)(function e(t) {
          var n = this
          ;(0, a.Z)(this, e),
            (0, l.Z)(this, "id", function () {
              return n.candidModel.id
            }),
            (0, l.Z)(this, "jobId", function () {
              return n.candidModel.jobId
            }),
            (0, l.Z)(this, "buyerId", function () {
              return n.candidModel.buyerId
            }),
            (0, l.Z)(this, "creatorId", function () {
              return n.candidModel.creatorId
            }),
            (0, l.Z)(this, "buyerStory", function () {
              return n.candidModel.buyerStory
            }),
            (0, l.Z)(this, "creatorStory", function () {
              return n.candidModel.creatorStory
            }),
            (0, l.Z)(this, "proposalIdList", function () {
              return null == n.candidModel.proposalIdList
                ? null
                : (0, s._b)(n.candidModel.proposalIdList)
            }),
            (0, l.Z)(this, "proposalFirstId", function () {
              var e = n.proposalIdList()
              return null == e ? null : e[0]
            }),
            (0, l.Z)(this, "createdBy", function () {
              return n.candidModel.createdBy
            }),
            (0, l.Z)(this, "model", function () {
              return n.candidModel
            }),
            (0, l.Z)(this, "state", function () {
              return (0, s.wI)(n.candidModel.state)
            }),
            (0, l.Z)(this, "colorOfState", function () {
              switch (n.state()) {
                case o.h0.Resolved:
                  return "green"
                case o.h0.Pending:
                  return "red"
                default:
                  return "yellow"
              }
            }),
            (0, l.Z)(this, "createdAtHuman", function () {
              var e = (0, s.ju)(n.candidModel.createdAt)
              return c()(e).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, l.Z)(this, "deliberatedAtHuman", function () {
              var e = n.outcome()
              if (null == e) return null
              var t = (0, s.ju)(e.deliberatedAt)
              return c()(t).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, l.Z)(this, "hasValidOutcome", function () {
              return null != n.outcome()
            }),
            (0, l.Z)(this, "outcome", function () {
              return n.state() != o.h0.Resolved
                ? null
                : n.candidModel.state[o.h0.Resolved]
            }),
            (0, l.Z)(this, "outcomeBuyerAllocation", function () {
              var e = n.outcome()
              if (null == e) return null
              var t = e.buyerAllocation
              return (0, i.$)(t)
            }),
            (0, l.Z)(this, "outcomeCreatorAllocation", function () {
              var e = n.outcome()
              if (null == e) return null
              var t = e.creatorAllocation
              return (0, i.$)(t)
            }),
            (0, l.Z)(this, "outcomeBuyerAllocatedTokens", function (e) {
              var t = n.outcomeBuyerAllocation()
              return null == t ? null : t * e
            }),
            (0, l.Z)(this, "outcomeCreatorAllocatedTokens", function (e) {
              var t = n.outcomeCreatorAllocation()
              return null == t ? null : t * e
            }),
            (this.candidModel = t)
        })
    },
    67839: function (e, t, n) {
      "use strict"
      n.d(t, {
        $: function () {
          return a
        }
      })
      var r = 1e6,
        a = function (e) {
          return Number(e) / r
        }
    },
    66897: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          showLongToast: function () {
            return l
          },
          showMediumToast: function () {
            return a
          },
          showStandardErrorMesg: function () {
            return u
          },
          showToast: function () {
            return r
          }
        })
      var r = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 9e3,
            isClosable: !0
          })
        },
        a = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 2e4,
            isClosable: !0
          })
        },
        l = function (e, t, n, r) {
          e({
            title: t,
            description: n,
            status: r,
            duration: 4e4,
            isClosable: !0
          })
        },
        u = function (e) {
          r(
            e,
            "\ud83e\udd16 We have a problem.",
            "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
            "error"
          )
        }
    },
    53390: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/cfadmin/dispute",
        function () {
          return n(85821)
        }
      ])
    }
  },
  function (e) {
    e.O(
      0,
      [
        2328, 8760, 5297, 253, 5607, 5527, 7386, 5468, 7770, 2144, 2888, 9774,
        179
      ],
      function () {
        return (t = 53390), e((e.s = t))
        var t
      }
    )
    var t = e.O()
    _N_E = t
  }
])
