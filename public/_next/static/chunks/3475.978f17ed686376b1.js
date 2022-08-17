"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3475],
  {
    33932: function (e, r, t) {
      t.d(r, {
        y: function () {
          return c
        }
      })
      var n = t(87462),
        i = t(45987),
        o = t(67294),
        a = t(73733),
        u = t(84597),
        l = t(25996),
        s = [
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
        c = (0, o.forwardRef)(function (e, r) {
          var t = e.id,
            c = e.type,
            m = e.field,
            d = e.rightIcon,
            p = e.placeholder,
            h = e.errorMesg,
            f = e.isRequired,
            g = e.isInvalid,
            x = e.variant,
            v = e.inputFontWeight,
            E = e.inputFontColor,
            b = e.inputFontSize,
            q = (0, i.Z)(e, s)
          return o.createElement(
            a.NI,
            (0, n.Z)(
              {
                isRequired: f,
                isInvalid: g,
                w: { base: "300px", md: "324px", lg: "364px", xl: "394px" }
              },
              q
            ),
            o.createElement(
              a.lX,
              {
                htmlFor: t,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              e.children
            ),
            o.createElement(
              u.BZ,
              null,
              o.createElement(
                u.II,
                (0, n.Z)(
                  {
                    id: t,
                    placeholder: p,
                    variant: x,
                    fontWeight: v,
                    fontSize: b,
                    color: E,
                    ref: r
                  },
                  m,
                  {
                    focusBorderColor: "purple",
                    h: { base: "40px", md: "40px", lg: "50px" },
                    type: c,
                    onKeyPress: function (e) {
                      ;(0, l.r)(e) && e.preventDefault()
                    }
                  }
                )
              ),
              d && o.createElement(u.xH, { children: d })
            ),
            o.createElement(a.J1, null, h)
          )
        })
      c.displayName = "FormInput"
    },
    50696: function (e, r, t) {
      t.d(r, {
        x: function () {
          return l
        }
      })
      var n = t(87462),
        i = t(45987),
        o = t(67294),
        a = t(51815),
        u = ["onClick", "children"],
        l = function (e) {
          var r = e.onClick,
            t = e.children,
            l = (0, i.Z)(e, u)
          return o.createElement(
            a.zx,
            (0, n.Z)(
              {
                variant: "solid",
                background: "orange_1",
                fontWeight: "medium",
                h: "44px",
                color: "white",
                _hover: { backgroundColor: "orange_2" },
                onClick: r
              },
              l
            ),
            t
          )
        }
    },
    13475: function (e, r, t) {
      t.a(e, async function (e, n) {
        try {
          t.r(r)
          var i = t(41451),
            o = t(67294),
            a = t(20608),
            u = t(88523),
            l = t(25527),
            s = t(11972),
            c = t(51815),
            m = t(33224),
            d = t(84436),
            p = t(56761),
            h = t(11163),
            f = t(98400),
            g = t(23256),
            x = t(50828),
            v = t(31681),
            E = t(66274),
            b = t(15658),
            q = t(89069),
            y = t(65299),
            T = t(50696),
            S = t(76989),
            k = e([S])
          S = (k.then ? (await k)() : k)[0]
          ;(r.default = (0, x.Pi)(function (e) {
            var r,
              t = e.isOpen,
              n = e.onClose,
              x = e.identity,
              k = (0, a.Sx)({ base: "top", md: "right" }),
              _ = (0, a.Sx)({ base: "full", md: "sm" }),
              Z = (0, a.Sx)({ base: !0, md: !1 }),
              R = (0, u.qY)(),
              C = R.isOpen,
              L = R.onOpen,
              w = R.onClose,
              N = (0, h.useRouter)(),
              I = (0, f.oR)(g.Z),
              W = I.appContext,
              z = I.user.id,
              P = v.dY.PageSize,
              U = v.dY.RefreshDataInterval,
              O = W.emailNotificationState,
              A = (0, q.v)(x, O),
              M = (0, p.z)(P, U),
              F = M.pagedNotifications,
              B = M.size,
              D = M.setSize,
              j = M.isLoading,
              X = M.isReachingEnd,
              Y = F ? (r = []).concat.apply(r, (0, i.Z)(F.flat())) : [],
              H = function (e) {
                var r = e.fromUserRoleInTarget()
                return null == r || r == v.EJ.UserRole.buyer ? S.RL : S.RC
              }
            return o.createElement(
              l.dy,
              { isOpen: t, placement: k, onClose: n, size: _ },
              o.createElement(l.P1, null),
              o.createElement(
                l.sc,
                { pt: "22px" },
                o.createElement(l.cC, null),
                o.createElement(
                  l.OX,
                  { color: "purple_2", mx: "12px", py: "6px" },
                  o.createElement(
                    s.Ug,
                    null,
                    o.createElement(
                      s.X6,
                      { fontSize: "26px" },
                      "Notifications"
                    ),
                    o.createElement(s.LZ, null),
                    0 != (null === Y || void 0 === Y ? void 0 : Y.length) &&
                      o.createElement(
                        c.zx,
                        {
                          variant: "link",
                          color: "purple_2",
                          fontSize: "sm",
                          fontWeight: "medium",
                          onClick: function () {
                            var e =
                              null === Y || void 0 === Y
                                ? void 0
                                : Y.map(function (e) {
                                    return e.id()
                                  })
                            W.markArrayRead(z, e),
                              W.markLastNotificationReadCurrent(z)
                          },
                          pt: "32px"
                        },
                        "Mark All Read"
                      )
                  )
                ),
                o.createElement(
                  l.Ng,
                  { color: "black" },
                  o.createElement(
                    s.M5,
                    { mx: "auto", pb: "2" },
                    o.createElement(
                      s.xu,
                      null,
                      o.createElement(
                        s.Kq,
                        { divider: o.createElement(s.cX, null), spacing: "3" },
                        j &&
                          0 ==
                            (null === Y || void 0 === Y ? void 0 : Y.length) &&
                          o.createElement(m.j, null),
                        !A &&
                          o.createElement(
                            s.gC,
                            {
                              fontSize: "sm",
                              p: "4",
                              spacing: "4",
                              minW: "sm"
                            },
                            o.createElement(
                              s.Ug,
                              { spacing: "18px" },
                              o.createElement(b.J$, {
                                color: "orange_1",
                                boxSize: "24px"
                              }),
                              o.createElement(
                                s.X6,
                                {
                                  fontWeight: "medium",
                                  fontSize: { base: "16px", md: "18px" }
                                },
                                "Email notifications are not enabled"
                              )
                            ),
                            o.createElement(
                              s.xv,
                              { fontWeight: "normal" },
                              "Want to receive email updates from jobs that you are involved with? (pitches, chat messages etc!)"
                            ),
                            o.createElement(
                              T.x,
                              { onClick: L },
                              "Yes, I want to receive email notifications"
                            )
                          ),
                        null === Y || void 0 === Y
                          ? void 0
                          : Y.map(function (e) {
                              return o.createElement(
                                s.Kq,
                                {
                                  key: e.id(),
                                  fontSize: "sm",
                                  p: "4",
                                  spacing: "4",
                                  minW: "sm",
                                  _hover: {
                                    bg: "purple_light2",
                                    borderRadius: "lg",
                                    cursor: "pointer"
                                  },
                                  color: e.isRead(W) ? "black_gray" : "black",
                                  onClick: function () {
                                    return (function (e) {
                                      W.markRead(z, e.id())
                                      var r = e.targetURL(),
                                        t = r.url,
                                        i = r.alias
                                      t && i && N.push(t, i), Z && n()
                                    })(e)
                                  }
                                },
                                o.createElement(
                                  s.Kq,
                                  {
                                    direction: "row",
                                    justify: "space-between",
                                    spacing: "4"
                                  },
                                  o.createElement(
                                    s.Ug,
                                    { spacing: "3" },
                                    o.createElement(d.M, {
                                      thumbImageId: e.fromUserThumbnailId(),
                                      isRead: e.isRead(W),
                                      name: e.fromUserCallname(),
                                      useImageObject: H(e)
                                    }),
                                    o.createElement(
                                      s.xu,
                                      null,
                                      o.createElement(
                                        s.xv,
                                        {
                                          fontWeight: "medium",
                                          color: e.isRead(W)
                                            ? "black_gray"
                                            : "black_2"
                                        },
                                        e.fromUserCallname()
                                      )
                                    )
                                  ),
                                  o.createElement(
                                    s.xu,
                                    { textAlign: "right" },
                                    o.createElement(
                                      s.xv,
                                      null,
                                      e.createdAtHumanText()
                                    )
                                  )
                                ),
                                o.createElement(E.X, null, e.message())
                              )
                            }),
                        !X &&
                          !j &&
                          o.createElement(
                            s.M5,
                            { mt: "12px", pb: { base: "140px", md: "38px" } },
                            o.createElement(
                              c.zx,
                              {
                                w: "240px",
                                color: "purple",
                                borderColor: "purple",
                                variant: "outline",
                                onClick: function () {
                                  D(B + 1)
                                }
                              },
                              "Load More"
                            )
                          )
                      )
                    )
                  ),
                  o.createElement(y.N, { isOpen: C, onClose: w, identity: x })
                )
              )
            )
          })),
            n()
        } catch (_) {
          n(_)
        }
      })
    },
    65299: function (e, r, t) {
      t.d(r, {
        N: function () {
          return R
        }
      })
      var n = t(41451),
        i = t(15861),
        o = t(86854),
        a = t(87757),
        u = t.n(a),
        l = t(67294),
        s = t(45607),
        c = t(25527),
        m = t(11972),
        d = t(55280),
        p = t(51815),
        h = t(50696),
        f = t(24686),
        g = t(98400),
        x = t(23256),
        v = t(66985),
        E = t(66897),
        b = t(82175),
        q = t(42340),
        y = t(33932),
        T = t(15658),
        S = t(81677).Tr.Verified,
        k = {
          0: "We will send you a 6 digits code for verification.",
          1: "We have sent you a 6 digits code. Please check your email.",
          2: {
            Enable:
              "Well done! Email Notifications are now enabled. \u2705 \ud83d\udc4f",
            Update: "All done! Your email is now updated. \u2705 \ud83d\udc4f"
          },
          3: "\ud83e\udd14 The verification code is not matched or it has expired. Please check your email."
        },
        _ = { 0: "Enter your email", 1: "Enter the 6 digits code" },
        Z = { 0: "Send me the Code", 1: "Verify" },
        R = function (e) {
          var r = e.isOpen,
            t = e.onClose,
            a = e.identity,
            R = e.isUpdateEmail,
            C = void 0 !== R && R,
            L = (0, l.useState)(0),
            w = (0, o.Z)(L, 2),
            N = w[0],
            I = w[1],
            W = (0, g.oR)(x.Z),
            z = W.appContext,
            P = W.user,
            U = (0, l.useState)(!1),
            O = (0, o.Z)(U, 2),
            A = O[0],
            M = O[1],
            F = (0, l.useState)(""),
            B = (0, o.Z)(F, 2),
            D = B[0],
            j = B[1],
            X = 6 != D.length,
            Y = (0, s.pm)(),
            H = (0, l.useRef)(),
            J = C ? "Update Email Address" : "Enable Email Notification",
            K = (function () {
              var e = (0, i.Z)(
                u().mark(function e(r, t) {
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), G(r, t)
                        case 2:
                        case "end":
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function (r, t) {
                return e.apply(this, arguments)
              }
            })(),
            V = function () {
              I(0), j(""), t()
            },
            Q = (function () {
              var e = (0, i.Z)(
                u().mark(function e() {
                  var r, t, n, i, o
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              M(!0),
                              (e.next = 4),
                              (0, f.makeUserProfileActor)(a, z.authProvider)
                            )
                          case 4:
                            return (
                              (r = e.sent),
                              (e.next = 7),
                              r.verifyEmail(D, z.candidAuthProvider())
                            )
                          case 7:
                            ;(t = e.sent).ok
                              ? ((i = t.ok),
                                z.updateEmailNotificationState(S),
                                (null === (n = i.email) || void 0 === n
                                  ? void 0
                                  : n.length) > 0 && P.updateEmail(i.email[0]),
                                (o = C ? k[2].Update : k[2].Enable),
                                (0, E.showToast)(Y, J, o, "success"),
                                V())
                              : t.err && (0, E.showToast)(Y, J, k[3], "error"),
                              (e.next = 15)
                            break
                          case 11:
                            ;(e.prev = 11),
                              (e.t0 = e.catch(0)),
                              v.default.error(e.t0),
                              (0, E.showStandardErrorMesg)(Y)
                          case 15:
                            return (e.prev = 15), M(!1), e.finish(15)
                          case 18:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 11, 15, 18]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            G = (function () {
              var e = (0, i.Z)(
                u().mark(function e(r, t) {
                  var n, i
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              t.setSubmitting(!0),
                              (e.next = 4),
                              (0, f.makeUserProfileActor)(a, z.authProvider)
                            )
                          case 4:
                            return (
                              (n = e.sent),
                              (e.next = 7),
                              n.requestVerifyEmail(
                                r.email,
                                z.candidAuthProvider()
                              )
                            )
                          case 7:
                            if (!(i = e.sent).ok) {
                              e.next = 13
                              break
                            }
                            I(N + 1),
                              (0, E.showToast)(Y, J, k[1], "info"),
                              (e.next = 15)
                            break
                          case 13:
                            if (!i.err) {
                              e.next = 15
                              break
                            }
                            throw new Error(i.err)
                          case 15:
                            e.next = 21
                            break
                          case 17:
                            ;(e.prev = 17),
                              (e.t0 = e.catch(0)),
                              v.default.error(e.t0),
                              (0, E.showStandardErrorMesg)(Y)
                          case 21:
                            return (
                              (e.prev = 21), t.setSubmitting(!1), e.finish(21)
                            )
                          case 24:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 17, 21, 24]]
                  )
                })
              )
              return function (r, t) {
                return e.apply(this, arguments)
              }
            })(),
            $ = function (e) {
              j(e)
            }
          return l.createElement(
            c.u_,
            { isOpen: r, onClose: V, initialFocusRef: H },
            l.createElement(c.ZA, null),
            l.createElement(
              c.hz,
              null,
              l.createElement(
                b.J9,
                {
                  initialValues: (function (e) {
                    switch (e) {
                      case 0:
                        return { email: "" }
                      case 1:
                        return { emailToken: "" }
                    }
                  })(N),
                  validationSchema: q.Ux,
                  onSubmit: K,
                  enableReinitialize: !0
                },
                function (e) {
                  return l.createElement(
                    b.l0,
                    { style: { width: "100%" } },
                    l.createElement(c.xB, { color: "orange_1" }, J),
                    l.createElement(c.ol, null),
                    l.createElement(
                      c.fe,
                      { pb: 12 },
                      l.createElement(m.xv, { color: "black", pb: 6 }, k[N]),
                      0 == N &&
                        l.createElement(b.gN, { name: "email" }, function (e) {
                          var r = e.field,
                            t = e.form
                          return l.createElement(
                            y.y,
                            {
                              id: "email",
                              type: "email",
                              field: r,
                              base: { base: "300px", md: "394px" },
                              isInvalid: t.errors.email && t.touched.email,
                              errorMesg: t.errors.email,
                              isRequired: !0,
                              placeholder: _[N],
                              pb: "24px",
                              ref: H,
                              rightIcon: l.createElement(T.LQ, {
                                color: "gray_light2",
                                mt: { base: "0px", lg: "8px" }
                              })
                            },
                            "Email"
                          )
                        }),
                      1 == N &&
                        l.createElement(
                          m.Ug,
                          { justify: "center" },
                          l.createElement(
                            d.ET,
                            {
                              mask: !0,
                              size: "md",
                              autoFocus: !0,
                              type: "number",
                              focusBorderColor: "purple",
                              value: D,
                              onChange: $
                            },
                            (0, n.Z)(Array(6).keys()).map(function (e) {
                              return l.createElement(d.xj, {
                                id: "emailToken".concat(e),
                                key: e
                              })
                            })
                          )
                        )
                    ),
                    l.createElement(
                      m.M5,
                      { pb: 6 },
                      0 == N &&
                        l.createElement(
                          h.x,
                          {
                            type: "submit",
                            fontWeight: "bold",
                            mr: "18px",
                            minW: "180px",
                            isLoading: e.isSubmitting
                          },
                          Z[N]
                        ),
                      1 == N &&
                        l.createElement(
                          h.x,
                          {
                            onClick: Q,
                            fontWeight: "bold",
                            mr: "18px",
                            minW: "180px",
                            isLoading: A,
                            isDisabled: X
                          },
                          Z[N]
                        ),
                      l.createElement(p.zx, { onClick: V }, "Cancel")
                    )
                  )
                }
              )
            )
          )
        }
    },
    42340: function (e, r, t) {
      t.d(r, {
        B9: function () {
          return d
        },
        G_: function () {
          return f
        },
        Gl: function () {
          return o
        },
        HQ: function () {
          return l
        },
        IY: function () {
          return i
        },
        P4: function () {
          return b
        },
        PH: function () {
          return E
        },
        Pn: function () {
          return m
        },
        QZ: function () {
          return s
        },
        UD: function () {
          return u
        },
        Ux: function () {
          return v
        },
        _9: function () {
          return h
        },
        dp: function () {
          return a
        },
        eH: function () {
          return c
        },
        xb: function () {
          return x
        }
      })
      var n = t(74231),
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
        o = (0, n.Ry)().shape({
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
        a = (0, n.Ry)().shape({
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
        l = (0, n.Ry)().shape({
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
        s = (0, n.Ry)().shape({
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
        c = (0, n.Ry)().shape({
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
        m = (0, n.Ry)().shape({
          preferredStyleDesc: (0, n.Z_)().max(300, "Too Long!"),
          preferredTools: (0, n.Z_)().max(300, "Too Long!"),
          preferredStyledWebsite: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .max(300, "Too Long!")
        }),
        d = (0, n.Ry)().shape({
          futurePlan: (0, n.Z_)().max(300, "Too Long!")
        }),
        p = "Please check all the boxes before approving.",
        h = (0, n.Ry)().shape({
          receiveFinal: (0, n.O7)().required(p),
          copyright: (0, n.O7)().required(p),
          payment: (0, n.O7)().required(p)
        }),
        f = (0, n.Ry)().shape({ changes: (0, n.Z_)().max(500, "Too Long!") }),
        g = "Please check all the boxes before requesting approval.",
        x = (0, n.Ry)().shape({
          copyright: (0, n.O7)().required(g),
          authentic: (0, n.O7)().required(g),
          payment: (0, n.O7)().required(g)
        }),
        v = (0, n.Ry)().shape({
          email: (0, n.Z_)()
            .email("Invalid email")
            .required("Email is required")
        }),
        E = (0, n.Ry)().shape({
          reason: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Reason is required"),
          terms: (0, n.O7)().required("Please tick the acknowledgement.")
        }),
        b = (0, n.Ry)().shape({
          story: (0, n.Z_)()
            .min(10, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Your story is required")
        })
    },
    25996: function (e, r, t) {
      t.d(r, {
        X: function () {
          return i
        },
        r: function () {
          return n
        }
      })
      var n = function (e) {
          return o(13)(e)
        },
        i = function (e) {
          return o(32)(e)
        },
        o = function (e) {
          return function (r) {
            return r.charCode === e || r.keyCode === e
          }
        }
    }
  }
])
