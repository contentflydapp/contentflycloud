"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [485, 6451],
  {
    42289: function (e, r, t) {
      t.d(r, {
        D: function () {
          return o
        }
      })
      var n = t(87462),
        a = t(67294),
        i = t(11972),
        o = function (e) {
          return a.createElement(
            i.X6,
            (0, n.Z)(
              {
                pt: "12px",
                pb: "27px",
                textAlign: { base: "center", md: "unset" },
                color: "black",
                fontSize: "32px",
                fontWeight: "semibold"
              },
              e
            ),
            e.children
          )
        }
    },
    77506: function (e, r, t) {
      t.d(r, {
        f: function () {
          return o
        }
      })
      var n = t(87462),
        a = t(67294),
        i = t(33932),
        o = function (e) {
          return a.createElement(
            i.y,
            (0, n.Z)(
              {
                pb: { md: "10px", lg: "20px" },
                w: { base: "340px", md: "300px", "2xl": "340px" }
              },
              e
            ),
            e.children
          )
        }
    },
    75841: function (e, r, t) {
      t.d(r, {
        h: function () {
          return u
        }
      })
      var n = t(87462),
        a = t(67294),
        i = t(91822),
        o = t(15658),
        u = function (e) {
          return a.createElement(
            i.Z,
            (0, n.Z)(
              {
                id: "country",
                title: "Country",
                placeholder: "\u2b07 Select",
                isRequired: !0,
                pb: { md: "10px", lg: "20px" },
                w: { base: "340px", md: "300px", "2xl": "340px" },
                icon: a.createElement(o.YI, { color: "gray_light2" })
              },
              e
            ),
            e.children
          )
        }
    },
    33932: function (e, r, t) {
      t.d(r, {
        y: function () {
          return s
        }
      })
      var n = t(87462),
        a = t(45987),
        i = t(67294),
        o = t(73733),
        u = t(84597),
        l = t(25996),
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
        s = (0, i.forwardRef)(function (e, r) {
          var t = e.id,
            s = e.type,
            m = e.field,
            p = e.rightIcon,
            d = e.placeholder,
            f = e.errorMesg,
            h = e.isRequired,
            x = e.isInvalid,
            g = e.variant,
            b = e.inputFontWeight,
            v = e.inputFontColor,
            y = e.inputFontSize,
            E = (0, a.Z)(e, c)
          return i.createElement(
            o.NI,
            (0, n.Z)(
              {
                isRequired: h,
                isInvalid: x,
                w: { base: "300px", md: "324px", lg: "364px", xl: "394px" }
              },
              E
            ),
            i.createElement(
              o.lX,
              {
                htmlFor: t,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              e.children
            ),
            i.createElement(
              u.BZ,
              null,
              i.createElement(
                u.II,
                (0, n.Z)(
                  {
                    id: t,
                    placeholder: d,
                    variant: g,
                    fontWeight: b,
                    fontSize: y,
                    color: v,
                    ref: r
                  },
                  m,
                  {
                    focusBorderColor: "purple",
                    h: { base: "40px", md: "40px", lg: "50px" },
                    type: s,
                    onKeyPress: function (e) {
                      ;(0, l.r)(e) && e.preventDefault()
                    }
                  }
                )
              ),
              p && i.createElement(u.xH, { children: p })
            ),
            i.createElement(o.J1, null, f)
          )
        })
      s.displayName = "FormInput"
    },
    91822: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return c
        }
      })
      var n = t(87462),
        a = t(45987),
        i = t(67294),
        o = t(73733),
        u = t(24834),
        l = [
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
        var r = e.id,
          t = e.field,
          c = e.title,
          s = e.placeholder,
          m = e.icon,
          p = e.errorMesg,
          d = e.isRequired,
          f = e.isInvalid,
          h = (0, a.Z)(e, l)
        return i.createElement(
          o.NI,
          (0, n.Z)({ isRequired: d, isInvalid: f }, h),
          i.createElement(
            o.lX,
            {
              htmlFor: r,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            c
          ),
          i.createElement(
            u.Z,
            (0, n.Z)({ id: r }, t, { placeholder: s, icon: m }),
            e.children
          ),
          i.createElement(o.J1, null, p)
        )
      }
    },
    24834: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return l
        }
      })
      var n = t(87462),
        a = t(45987),
        i = t(67294),
        o = t(62304),
        u = ["icon"]
      function l(e) {
        var r = e.icon,
          t = (0, a.Z)(e, u)
        return i.createElement(
          o.Ph,
          (0, n.Z)(
            {
              rootProps: { style: { marginTop: "8px" } },
              size: "md",
              h: { base: "40px", md: "40px", lg: "50px" },
              iconColor: "gray_light2",
              iconSize: "14px",
              icon: r,
              _active: { color: "purple", borderColor: "purple" },
              _focus: { color: "purple", borderColor: "purple" }
            },
            t
          ),
          e.children
        )
      }
    },
    50696: function (e, r, t) {
      t.d(r, {
        x: function () {
          return l
        }
      })
      var n = t(87462),
        a = t(45987),
        i = t(67294),
        o = t(51815),
        u = ["onClick", "children"],
        l = function (e) {
          var r = e.onClick,
            t = e.children,
            l = (0, a.Z)(e, u)
          return i.createElement(
            o.zx,
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
    65299: function (e, r, t) {
      t.d(r, {
        N: function () {
          return Z
        }
      })
      var n = t(41451),
        a = t(15861),
        i = t(86854),
        o = t(87757),
        u = t.n(o),
        l = t(67294),
        c = t(45607),
        s = t(25527),
        m = t(11972),
        p = t(55280),
        d = t(51815),
        f = t(50696),
        h = t(24686),
        x = t(98400),
        g = t(23256),
        b = t(66985),
        v = t(66897),
        y = t(82175),
        E = t(42340),
        w = t(33932),
        k = t(15658),
        q = t(81677).Tr.Verified,
        T = {
          0: "We will send you a 6 digits code for verification.",
          1: "We have sent you a 6 digits code. Please check your email.",
          2: {
            Enable:
              "Well done! Email Notifications are now enabled. \u2705 \ud83d\udc4f",
            Update: "All done! Your email is now updated. \u2705 \ud83d\udc4f"
          },
          3: "\ud83e\udd14 The verification code is not matched or it has expired. Please check your email."
        },
        S = { 0: "Enter your email", 1: "Enter the 6 digits code" },
        _ = { 0: "Send me the Code", 1: "Verify" },
        Z = function (e) {
          var r = e.isOpen,
            t = e.onClose,
            o = e.identity,
            Z = e.isUpdateEmail,
            N = void 0 !== Z && Z,
            I = (0, l.useState)(0),
            P = (0, i.Z)(I, 2),
            C = P[0],
            R = P[1],
            L = (0, x.oR)(g.Z),
            U = L.appContext,
            A = L.user,
            W = (0, l.useState)(!1),
            z = (0, i.Z)(W, 2),
            O = z[0],
            F = z[1],
            M = (0, l.useState)(""),
            B = (0, i.Z)(M, 2),
            D = B[0],
            V = B[1],
            j = 6 != D.length,
            K = (0, c.pm)(),
            H = (0, l.useRef)(),
            J = N ? "Update Email Address" : "Enable Email Notification",
            $ = (function () {
              var e = (0, a.Z)(
                u().mark(function e(r, t) {
                  return u().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Q(r, t)
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
            G = function () {
              R(0), V(""), t()
            },
            Y = (function () {
              var e = (0, a.Z)(
                u().mark(function e() {
                  var r, t, n, a, i
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              F(!0),
                              (e.next = 4),
                              (0, h.makeUserProfileActor)(o, U.authProvider)
                            )
                          case 4:
                            return (
                              (r = e.sent),
                              (e.next = 7),
                              r.verifyEmail(D, U.candidAuthProvider())
                            )
                          case 7:
                            ;(t = e.sent).ok
                              ? ((a = t.ok),
                                U.updateEmailNotificationState(q),
                                (null === (n = a.email) || void 0 === n
                                  ? void 0
                                  : n.length) > 0 && A.updateEmail(a.email[0]),
                                (i = N ? T[2].Update : T[2].Enable),
                                (0, v.showToast)(K, J, i, "success"),
                                G())
                              : t.err && (0, v.showToast)(K, J, T[3], "error"),
                              (e.next = 15)
                            break
                          case 11:
                            ;(e.prev = 11),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, v.showStandardErrorMesg)(K)
                          case 15:
                            return (e.prev = 15), F(!1), e.finish(15)
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
            Q = (function () {
              var e = (0, a.Z)(
                u().mark(function e(r, t) {
                  var n, a
                  return u().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              t.setSubmitting(!0),
                              (e.next = 4),
                              (0, h.makeUserProfileActor)(o, U.authProvider)
                            )
                          case 4:
                            return (
                              (n = e.sent),
                              (e.next = 7),
                              n.requestVerifyEmail(
                                r.email,
                                U.candidAuthProvider()
                              )
                            )
                          case 7:
                            if (!(a = e.sent).ok) {
                              e.next = 13
                              break
                            }
                            R(C + 1),
                              (0, v.showToast)(K, J, T[1], "info"),
                              (e.next = 15)
                            break
                          case 13:
                            if (!a.err) {
                              e.next = 15
                              break
                            }
                            throw new Error(a.err)
                          case 15:
                            e.next = 21
                            break
                          case 17:
                            ;(e.prev = 17),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, v.showStandardErrorMesg)(K)
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
            X = function (e) {
              V(e)
            }
          return l.createElement(
            s.u_,
            { isOpen: r, onClose: G, initialFocusRef: H },
            l.createElement(s.ZA, null),
            l.createElement(
              s.hz,
              null,
              l.createElement(
                y.J9,
                {
                  initialValues: (function (e) {
                    switch (e) {
                      case 0:
                        return { email: "" }
                      case 1:
                        return { emailToken: "" }
                    }
                  })(C),
                  validationSchema: E.Ux,
                  onSubmit: $,
                  enableReinitialize: !0
                },
                function (e) {
                  return l.createElement(
                    y.l0,
                    { style: { width: "100%" } },
                    l.createElement(s.xB, { color: "orange_1" }, J),
                    l.createElement(s.ol, null),
                    l.createElement(
                      s.fe,
                      { pb: 12 },
                      l.createElement(m.xv, { color: "black", pb: 6 }, T[C]),
                      0 == C &&
                        l.createElement(y.gN, { name: "email" }, function (e) {
                          var r = e.field,
                            t = e.form
                          return l.createElement(
                            w.y,
                            {
                              id: "email",
                              type: "email",
                              field: r,
                              base: { base: "300px", md: "394px" },
                              isInvalid: t.errors.email && t.touched.email,
                              errorMesg: t.errors.email,
                              isRequired: !0,
                              placeholder: S[C],
                              pb: "24px",
                              ref: H,
                              rightIcon: l.createElement(k.LQ, {
                                color: "gray_light2",
                                mt: { base: "0px", lg: "8px" }
                              })
                            },
                            "Email"
                          )
                        }),
                      1 == C &&
                        l.createElement(
                          m.Ug,
                          { justify: "center" },
                          l.createElement(
                            p.ET,
                            {
                              mask: !0,
                              size: "md",
                              autoFocus: !0,
                              type: "number",
                              focusBorderColor: "purple",
                              value: D,
                              onChange: X
                            },
                            (0, n.Z)(Array(6).keys()).map(function (e) {
                              return l.createElement(p.xj, {
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
                      0 == C &&
                        l.createElement(
                          f.x,
                          {
                            type: "submit",
                            fontWeight: "bold",
                            mr: "18px",
                            minW: "180px",
                            isLoading: e.isSubmitting
                          },
                          _[C]
                        ),
                      1 == C &&
                        l.createElement(
                          f.x,
                          {
                            onClick: Y,
                            fontWeight: "bold",
                            mr: "18px",
                            minW: "180px",
                            isLoading: O,
                            isDisabled: j
                          },
                          _[C]
                        ),
                      l.createElement(d.zx, { onClick: G }, "Cancel")
                    )
                  )
                }
              )
            )
          )
        }
    },
    82658: function (e, r, t) {
      t.d(r, {
        y: function () {
          return u
        }
      })
      var n = t(67294),
        a = t(11972),
        i = t(15658),
        o = t(50696),
        u = function (e) {
          var r = e.openVerifyEmailPopup
          return n.createElement(
            a.Kq,
            {
              spacing: "20px",
              px: "20px",
              color: "black",
              alignItems: { base: "center", md: "normal" },
              width: { base: "100%", md: "unset" }
            },
            n.createElement(
              a.Ug,
              null,
              n.createElement(i.J$, { color: "orange_1", boxSize: "4" }),
              n.createElement(
                a.xv,
                { fontSize: "20px", fontWeight: "medium" },
                "Email notifications are not enabled"
              )
            ),
            n.createElement(
              a.xu,
              {
                textAlign: { base: "center", md: "unset" },
                mb: "20px",
                h: "70px",
                w: { base: "340px", md: "460px" }
              },
              n.createElement(
                a.xv,
                { fontWeight: "normal", mb: "20px" },
                "Want to receive email updates from jobs that you are involved with? (pitches, chat messages etc!)"
              ),
              n.createElement(
                o.x,
                { onClick: r },
                "Yes, I want to receive email notifications"
              )
            )
          )
        }
    },
    88072: function (e, r, t) {
      t.d(r, {
        U: function () {
          return S
        }
      })
      var n = t(15861),
        a = t(87757),
        i = t.n(a),
        o = t(67294),
        u = t(99575),
        l = t(78042),
        c = t(63949)
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r]
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }),
          s.apply(this, arguments)
        )
      }
      var m = ["spacing", "children"],
        p = (0, l.Gp)(function (e, r) {
          var t = (0, l.jC)("Switch", e),
            n = (0, l.Lr)(e),
            a = n.spacing,
            i = void 0 === a ? "0.5rem" : a,
            p = n.children,
            d = (function (e, r) {
              if (null == e) return {}
              var t,
                n,
                a = {},
                i = Object.keys(e)
              for (n = 0; n < i.length; n++)
                (t = i[n]), r.indexOf(t) >= 0 || (a[t] = e[t])
              return a
            })(n, m),
            f = (0, u.O)(d),
            h = f.state,
            x = f.getInputProps,
            g = f.getCheckboxProps,
            b = f.getRootProps,
            v = f.getLabelProps,
            y = o.useMemo(
              function () {
                return s(
                  {
                    display: "inline-block",
                    position: "relative",
                    verticalAlign: "middle",
                    lineHeight: 0
                  },
                  t.container
                )
              },
              [t.container]
            ),
            E = o.useMemo(
              function () {
                return s(
                  {
                    display: "inline-flex",
                    flexShrink: 0,
                    justifyContent: "flex-start",
                    boxSizing: "content-box",
                    cursor: "pointer"
                  },
                  t.track
                )
              },
              [t.track]
            ),
            w = o.useMemo(
              function () {
                return s({ userSelect: "none", marginStart: i }, t.label)
              },
              [i, t.label]
            )
          return o.createElement(
            l.m$.label,
            s({}, b(), {
              className: (0, c.cx)("chakra-switch", e.className),
              __css: y
            }),
            o.createElement(
              "input",
              s({ className: "chakra-switch__input" }, x({}, r))
            ),
            o.createElement(
              l.m$.span,
              s({}, g(), { className: "chakra-switch__track", __css: E }),
              o.createElement(l.m$.span, {
                __css: t.thumb,
                className: "chakra-switch__thumb",
                "data-checked": (0, c.PB)(h.isChecked),
                "data-hover": (0, c.PB)(h.isHovered)
              })
            ),
            p &&
              o.createElement(
                l.m$.span,
                s({ className: "chakra-switch__label" }, v(), { __css: w }),
                p
              )
          )
        })
      c.Ts && (p.displayName = "Switch")
      var d = t(45607),
        f = t(11972),
        h = t(73733),
        x = t(84597),
        g = t(15658),
        b = t(42273),
        v = t(23256),
        y = t(98400),
        E = t(81677),
        w = t(24686),
        k = t(5508),
        q = t(66985),
        T = t(66897),
        S = function (e) {
          var r = e.identity,
            t = e.openVerifyEmailPopup,
            a = (0, d.pm)(),
            u = (0, y.oR)(v.Z),
            l = u.user,
            c = u.appContext,
            s = c.authProvider,
            m = c.emailNotificationState == E.Tr.Verified,
            S = function () {
              c.updateEmailNotificationState(
                m ? E.Tr.NonVerified : E.Tr.Verified
              )
            },
            _ = (function () {
              var e = (0, n.Z)(
                i().mark(function e() {
                  var t, n
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              S(),
                              (e.next = 4),
                              (0, w.makeUserProfileActor)(r, s)
                            )
                          case 4:
                            return (
                              (t = e.sent),
                              (e.next = 7),
                              t.turnOffVerifyEmail((0, k.$6)(s))
                            )
                          case 7:
                            if (!(n = e.sent).err) {
                              e.next = 11
                              break
                            }
                            throw (S(), new Error(n.err))
                          case 11:
                            e.next = 17
                            break
                          case 13:
                            ;(e.prev = 13),
                              (e.t0 = e.catch(0)),
                              q.default.error(e.t0),
                              (0, T.showToast)(
                                a,
                                "Email Notifications",
                                "We have a problem trying to turn off email notifcations. \ud83d\ude2d Please try again later.",
                                "error"
                              )
                          case 17:
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
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return o.createElement(
            f.Kq,
            {
              spacing: "30px",
              px: "20px",
              color: "black",
              alignItems: { base: "center", md: "normal" },
              width: { base: "100%", md: "unset" }
            },
            o.createElement(
              f.Ug,
              {
                bgColor: "purple_background",
                w: "340px",
                h: "60px",
                px: "18px"
              },
              o.createElement(
                f.xv,
                { fontWeight: "medium", fontSize: "13px", color: "black_2" },
                "Turn notifications on/off"
              ),
              o.createElement(f.LZ, null),
              o.createElement(p, {
                id: "notificationsSwitch",
                colorScheme: "green_scheme",
                isChecked: m,
                onChange: _
              })
            ),
            o.createElement(
              f.Ug,
              null,
              o.createElement(g.J$, { color: "green_2", boxSize: "4" }),
              o.createElement(
                f.xv,
                { fontSize: "20px", fontWeight: "medium" },
                "Email notifications are enabled"
              )
            ),
            o.createElement(
              h.NI,
              { w: "340px" },
              o.createElement(h.lX, { htmlFor: "email" }, "Email Address"),
              o.createElement(x.II, {
                id: "email",
                type: "email",
                value: l.email,
                isDisabled: !0
              }),
              o.createElement(h.Q6, null)
            ),
            o.createElement(
              f.xu,
              {
                textAlign: { base: "center", md: "unset" },
                mb: "20px",
                mt: { base: "18px", md: "0px" },
                h: "70px"
              },
              o.createElement(
                b.Z,
                {
                  w: "340px",
                  mb: "100px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  onClick: t
                },
                "Update Email Address"
              )
            )
          )
        }
    },
    60485: function (e, r, t) {
      t.a(
        e,
        async function (e, n) {
          try {
            t.r(r)
            var a = t(87462),
              i = t(15861),
              o = t(86854),
              u = t(87757),
              l = t.n(u),
              c = t(67294),
              s = t(5152),
              m = t.n(s),
              p = t(82175),
              d = t(45607),
              f = t(88523),
              h = t(11972),
              x = t(15040),
              g = t(25927),
              b = t(59876),
              v = t(32512),
              y = t(15658),
              E = t(42273),
              w = t(77506),
              k = t(75841),
              q = t(42289),
              T = t(88072),
              S = t(4349),
              _ = t(42340),
              Z = t(50828),
              N = t(98400),
              I = t(23256),
              P = t(66985),
              C = t(76451),
              R = t(66897),
              L = t(76989),
              U = t(5508),
              A = t(9008),
              W = t.n(A),
              z = t(81677),
              O = t(82658),
              F = t(65299),
              M = t(31681),
              B = e([L])
            L = (B.then ? (await B)() : B)[0]
            var D = m()(function () {
                return t.e(7643).then(t.bind(t, 27643))
              }),
              V = (await t.e(5985).then(t.bind(t, 5985))).actorRunner,
              j = (await Promise.resolve().then(t.bind(t, 24686)))
                .makeUserProfileActor
            function K(e) {
              var r = e.identity,
                t = (0, d.pm)(),
                n = (0, N.oR)(I.Z),
                u = n.user,
                s = n.appContext,
                m = s.authProvider,
                Z = (0, f.qY)(),
                A = Z.isOpen,
                B = Z.onOpen,
                K = Z.onClose,
                H = s.emailNotificationState == z.Tr.Verified,
                J = (0, c.useState)(null),
                $ = (0, o.Z)(J, 2),
                G = $[0],
                Y = $[1],
                Q = (0, L.RL)(u.profileImageId),
                X = (0, v.uI)({
                  maxFiles: 1,
                  accept: M.Et.DefaultImageType,
                  onDrop: (function () {
                    var e = (0, i.Z)(
                      l().mark(function e(r) {
                        var n, a
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(r.length > 0)) {
                                    e.next = 15
                                    break
                                  }
                                  return (
                                    (e.prev = 1),
                                    (n = r[0]),
                                    (e.next = 5),
                                    (0, C.resizeImage)(n)
                                  )
                                case 5:
                                  return (
                                    (a = e.sent),
                                    Y(URL.createObjectURL(a)),
                                    (e.next = 9),
                                    oe(a)
                                  )
                                case 9:
                                  e.next = 15
                                  break
                                case 11:
                                  ;(e.prev = 11),
                                    (e.t0 = e.catch(1)),
                                    P.default.error(e.t0),
                                    (0, R.showToast)(
                                      t,
                                      "Profile Picture",
                                      "We have a problem processing your image. Please choose a new one.",
                                      "warning"
                                    )
                                case 15:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[1, 11]]
                        )
                      })
                    )
                    return function (r) {
                      return e.apply(this, arguments)
                    }
                  })()
                }),
                ee = X.getRootProps,
                re = X.getInputProps
              ;(0, c.useEffect)(
                function () {
                  return function () {
                    URL.revokeObjectURL(G)
                  }
                },
                [G]
              )
              var te = (0, c.useMemo)(function () {
                  return S.O
                }, []),
                ne = S.H.map(function (e) {
                  return c.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.label
                  )
                }),
                ae = te.map(function (e) {
                  return c.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.label
                  )
                }),
                ie = (function () {
                  var e = (0, i.Z)(
                    l().mark(function e(r, t) {
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), le(r, t)
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
                oe = (function () {
                  var e = (0, i.Z)(
                    l().mark(function e(a) {
                      var o
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = { appStore: n, showErrorMesg: ue }),
                                (e.next = 3),
                                V(
                                  o,
                                  (0, i.Z)(
                                    l().mark(function e() {
                                      var n, i, o, c
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (0, R.showToast)(
                                                  t,
                                                  "Profile image",
                                                  "We are processing your new profile image. \ud83d\udc68\u200d\ud83d\udcbb",
                                                  "info"
                                                ),
                                                (e.next = 3),
                                                (0,
                                                C.fileToCanisterBinaryStoreFormat)(
                                                  a
                                                )
                                              )
                                            case 3:
                                              return (
                                                (n = e.sent),
                                                (e.next = 6),
                                                j(r, m)
                                              )
                                            case 6:
                                              return (
                                                (i = e.sent),
                                                (e.next = 9),
                                                i.updateProfileImage(
                                                  u.id,
                                                  u.profileImageId,
                                                  n,
                                                  (0, U.$6)(m)
                                                )
                                              )
                                            case 9:
                                              ;(o = e.sent).ok
                                                ? ((0, R.showToast)(
                                                    t,
                                                    "Profile image updated",
                                                    "Awesome! \ud83c\udf89 You've a new look.",
                                                    "success"
                                                  ),
                                                  (c = o.ok),
                                                  u.updateProfileImageId(c))
                                                : (P.default.error(o.err), ue())
                                            case 11:
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
                  return function (r) {
                    return e.apply(this, arguments)
                  }
                })(),
                ue = function () {
                  ;(0, R.showToast)(
                    t,
                    "\ud83e\udd16 We have a problem",
                    "Something is not working. \ud83d\ude2d Please try again later or contact us support@contentfly.app for help. \ud83d\udc68\u200d\ud83d\udcbb",
                    "error"
                  )
                },
                le = (function () {
                  var e = (0, i.Z)(
                    l().mark(function e(a, o) {
                      var c, s, p, d, f, h, x
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (c = a.username),
                                (s = a.firstName),
                                (p = a.lastName),
                                (d = a.brand),
                                (f = a.website),
                                (h = a.country),
                                (x = {
                                  appStore: n,
                                  showErrorMesg: ue,
                                  finalClosure: function () {
                                    o.setSubmitting(!1)
                                  }
                                }),
                                (e.next = 4),
                                V(
                                  x,
                                  (0, i.Z)(
                                    l().mark(function e() {
                                      var n, a, i
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = {
                                                  username: c,
                                                  profileImageId:
                                                    u.profileImageId,
                                                  portfolioId: u.hasPortfolio()
                                                    ? [u.portfolioId]
                                                    : [],
                                                  firstName: s,
                                                  lastName: p,
                                                  brand: d,
                                                  website: f,
                                                  country: h
                                                }),
                                                (e.next = 3),
                                                j(r, m)
                                              )
                                            case 3:
                                              return (
                                                (a = e.sent),
                                                (e.next = 6),
                                                a.updateUser(
                                                  u.id,
                                                  n,
                                                  (0, U.$6)(m)
                                                )
                                              )
                                            case 6:
                                              ;(i = e.sent).ok
                                                ? (u.updateWithUserUpdateVO(n),
                                                  (0, R.showToast)(
                                                    t,
                                                    "Account updated",
                                                    "Awesome! \ud83c\udf89\ud83e\udd73 We've updated the account for you.",
                                                    "success"
                                                  ))
                                                : i.err.duplicated_username
                                                ? (0, R.showToast)(
                                                    t,
                                                    "\ud83d\ude05 Almost there...",
                                                    "The username ".concat(
                                                      c,
                                                      " is already taken. Please pick another one."
                                                    ),
                                                    "warning"
                                                  )
                                                : (P.default.error(i.err), ue())
                                            case 8:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (r, t) {
                    return e.apply(this, arguments)
                  }
                })()
              return c.createElement(
                p.J9,
                {
                  initialValues: {
                    username: u.username,
                    firstName: u.firstName,
                    lastName: u.lastName,
                    brand: u.brand,
                    website: u.website,
                    country: u.country
                  },
                  validationSchema: _.Gl,
                  onSubmit: ie
                },
                function (e) {
                  return c.createElement(
                    p.l0,
                    { style: { width: "100%" } },
                    c.createElement(
                      W(),
                      null,
                      c.createElement(
                        "title",
                        null,
                        "Account Profile - Content Fly"
                      )
                    ),
                    c.createElement(
                      h.xu,
                      { pl: { base: "16px", md: "30px", lg: "62px" } },
                      c.createElement(q.D, null, "Profile"),
                      c.createElement(
                        h.kC,
                        { wrap: "wrap-reverse", pl: "0px", py: "4px" },
                        c.createElement(
                          h.kC,
                          {
                            wrap: "wrap",
                            py: "4px",
                            width: { base: "100%", lg: "unset" }
                          },
                          c.createElement(
                            h.Kq,
                            {
                              spacing: "12px",
                              px: "20px",
                              alignItems: { base: "center", md: "normal" },
                              width: { base: "100%", md: "unset" }
                            },
                            c.createElement(
                              p.gN,
                              { name: "username" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  w.f,
                                  {
                                    id: "username",
                                    field: r,
                                    isInvalid:
                                      t.errors.username && t.touched.username,
                                    errorMesg: t.errors.username,
                                    isRequired: !0,
                                    rightIcon: c.createElement(y.ew, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Username"
                                )
                              }
                            ),
                            c.createElement(
                              p.gN,
                              { name: "firstName" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  w.f,
                                  {
                                    id: "firstName",
                                    field: r,
                                    isInvalid:
                                      t.errors.firstName && t.touched.firstName,
                                    errorMesg: t.errors.firstName,
                                    isRequired: !0
                                  },
                                  "First name"
                                )
                              }
                            ),
                            c.createElement(
                              p.gN,
                              { name: "lastName" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  w.f,
                                  {
                                    id: "lastName",
                                    field: r,
                                    isInvalid:
                                      t.errors.lastName && t.touched.lastName,
                                    errorMesg: t.errors.lastName,
                                    isRequired: !0
                                  },
                                  "Last name"
                                )
                              }
                            )
                          ),
                          c.createElement(
                            h.Kq,
                            {
                              spacing: "12px",
                              px: "20px",
                              alignItems: { base: "center", lg: "normal" },
                              width: { base: "100%", md: "unset" }
                            },
                            c.createElement(
                              p.gN,
                              { name: "brand" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  w.f,
                                  {
                                    id: "brand",
                                    field: r,
                                    isInvalid:
                                      t.errors.brand && t.touched.brand,
                                    errorMesg: t.errors.brand,
                                    isRequired: !0,
                                    rightIcon: c.createElement(y.Vr, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Brand / Business Name",
                                  c.createElement(
                                    x.u,
                                    {
                                      label:
                                        "If you are content creator, enter your business name known to others. If you are brand, enter your brand name.",
                                      fontSize: "sm",
                                      bg: "gray.300",
                                      color: "black"
                                    },
                                    c.createElement(b.hQ, {
                                      mx: "6px",
                                      w: "18px",
                                      h: "18px",
                                      bottom: "3px",
                                      position: "relative",
                                      color: "purple"
                                    })
                                  )
                                )
                              }
                            ),
                            c.createElement(
                              p.gN,
                              { name: "website" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  w.f,
                                  {
                                    id: "website",
                                    field: r,
                                    isInvalid:
                                      t.errors.website && t.touched.website,
                                    errorMesg: t.errors.website,
                                    isRequired: !0,
                                    rightIcon: c.createElement(y.cU, {
                                      color: "gray_light2",
                                      mt: { base: "0px", lg: "8px" }
                                    })
                                  },
                                  "Website URL"
                                )
                              }
                            ),
                            c.createElement(
                              p.gN,
                              { name: "country" },
                              function (e) {
                                var r = e.field,
                                  t = e.form
                                return c.createElement(
                                  k.h,
                                  {
                                    field: r,
                                    isInvalid:
                                      t.errors.country && t.touched.country,
                                    errorMesg: t.errors.country
                                  },
                                  ne,
                                  ae
                                )
                              }
                            )
                          )
                        ),
                        c.createElement(
                          h.Kq,
                          {
                            px: "20px",
                            alignItems: "center",
                            width: { base: "100%", md: "unset" }
                          },
                          c.createElement(
                            h.Kq,
                            (0, a.Z)(
                              { spacing: 4 },
                              ee({ className: "dropzone" }),
                              { alignItems: "center" }
                            ),
                            c.createElement(
                              g.qE,
                              {
                                showBorder: !0,
                                borderColor: "purple_light2",
                                w: "100px",
                                h: "100px",
                                icon: c.createElement(y.xm, { w: "32px" }),
                                src: null !== G && void 0 !== G ? G : Q,
                                _hover: { cursor: "pointer" }
                              },
                              c.createElement(
                                x.u,
                                {
                                  label:
                                    "Click to select a file or drag and drop a file to the thumbnail",
                                  fontSize: "md",
                                  bg: "gray.300",
                                  color: "black"
                                },
                                c.createElement(b.hQ, {
                                  right: "-20px",
                                  w: "18px",
                                  h: "18px",
                                  bottom: "0px",
                                  position: "absolute",
                                  color: "purple"
                                })
                              )
                            ),
                            c.createElement("input", re()),
                            c.createElement(
                              h.xv,
                              {
                                pb: "12px",
                                color: "purple",
                                fontSize: "16px",
                                _hover: { cursor: "pointer" }
                              },
                              "Upload Profile Picture",
                              " "
                            )
                          )
                        )
                      ),
                      c.createElement(
                        h.xu,
                        {
                          textAlign: { base: "center", md: "unset" },
                          px: "20px",
                          mb: "20px",
                          mt: { base: "18px", md: "0px" },
                          h: "70px"
                        },
                        c.createElement(
                          E.Z,
                          {
                            w: { base: "340px", md: "300px", "2xl": "340px" },
                            mb: "100px",
                            fontWeight: "bold",
                            fontSize: "16px",
                            isLoading: e.isSubmitting,
                            type: "submit"
                          },
                          "Update Account"
                        )
                      ),
                      c.createElement(D, null)
                    ),
                    c.createElement(h.iz, null),
                    c.createElement(
                      h.xu,
                      {
                        pl: { base: "16px", md: "30px", lg: "62px" },
                        pt: "20px",
                        pb: { base: "200px", md: "60px" }
                      },
                      c.createElement(
                        q.D,
                        null,
                        H ? "Notifications" : "Get Notified!"
                      ),
                      c.createElement(
                        h.kC,
                        {
                          wrap: "wrap",
                          py: "4px",
                          width: { base: "100%", lg: "unset" }
                        },
                        H &&
                          c.createElement(T.U, {
                            identity: r,
                            openVerifyEmailPopup: B
                          }),
                        !H &&
                          c.createElement(O.y, {
                            identity: r,
                            openVerifyEmailPopup: B
                          })
                      )
                    ),
                    c.createElement(F.N, {
                      isOpen: A,
                      onClose: K,
                      identity: r,
                      isUpdateEmail: H
                    })
                  )
                }
              )
            }
            ;(r.default = (0, Z.Pi)(K)), n()
          } catch (K) {
            n(K)
          }
        },
        1
      )
    },
    4349: function (e, r, t) {
      t.d(r, {
        H: function () {
          return a
        },
        O: function () {
          return i
        }
      })
      var n = t(72635),
        a = [
          { value: "US", label: "United States" },
          { value: "AU", label: "Australia" },
          { value: "UK", label: "United Kingdom" },
          { value: "NG", label: "Nigeria" },
          { value: "VN", label: "Viet Nam" },
          { value: "IN", label: "India" },
          { value: "CN", label: "China" },
          { value: "ID", label: "Indonesia" },
          { value: "HK", label: "Hong Kong" },
          { value: "JP", label: "Japan" },
          { value: "TW", label: "Taiwan" },
          { value: "SG", label: "Singapore" },
          { value: "NL", label: "Netherlands" }
        ],
        i = t.n(n)()().getData()
    },
    42340: function (e, r, t) {
      t.d(r, {
        B9: function () {
          return p
        },
        G_: function () {
          return h
        },
        Gl: function () {
          return i
        },
        HQ: function () {
          return l
        },
        IY: function () {
          return a
        },
        P4: function () {
          return y
        },
        PH: function () {
          return v
        },
        Pn: function () {
          return m
        },
        QZ: function () {
          return c
        },
        UD: function () {
          return u
        },
        Ux: function () {
          return b
        },
        _9: function () {
          return f
        },
        dp: function () {
          return o
        },
        eH: function () {
          return s
        },
        xb: function () {
          return g
        }
      })
      var n = t(74231),
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
          country: (0, n.Z_)().required("Country is required"),
          terms: (0, n.O7)().required(
            "Please agree to the Terms of use to proceed."
          )
        }),
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
        s = (0, n.Ry)().shape({
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
        p = (0, n.Ry)().shape({
          futurePlan: (0, n.Z_)().max(300, "Too Long!")
        }),
        d = "Please check all the boxes before approving.",
        f = (0, n.Ry)().shape({
          receiveFinal: (0, n.O7)().required(d),
          copyright: (0, n.O7)().required(d),
          payment: (0, n.O7)().required(d)
        }),
        h = (0, n.Ry)().shape({ changes: (0, n.Z_)().max(500, "Too Long!") }),
        x = "Please check all the boxes before requesting approval.",
        g = (0, n.Ry)().shape({
          copyright: (0, n.O7)().required(x),
          authentic: (0, n.O7)().required(x),
          payment: (0, n.O7)().required(x)
        }),
        b = (0, n.Ry)().shape({
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
    76451: function (e, r, t) {
      t.r(r),
        t.d(r, {
          arrayBufferToImgSrc: function () {
            return l
          },
          convertBase64ToCanisterFileStoreFormat: function () {
            return d
          },
          fileToCanisterBinaryStoreFormat: function () {
            return m
          },
          resizeImage: function () {
            return f
          }
        })
      var n = t(15861),
        a = t(87757),
        i = t.n(a),
        o = t(98005),
        u = t.n(o)
      function l(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "jpeg",
          t = new Uint8Array(e),
          n = new Blob([t], { type: "image/".concat(r) }),
          a = URL.createObjectURL(n)
        return a
      }
      function c(e) {
        return s.apply(this, arguments)
      }
      function s() {
        return (s = (0, n.Z)(
          i().mark(function e(r) {
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        var n = new FileReader()
                        ;(n.onload = function () {
                          e(n.result)
                        }),
                          (n.onerror = t),
                          n.readAsArrayBuffer(r)
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
      function m(e) {
        return p.apply(this, arguments)
      }
      function p() {
        return (p = (0, n.Z)(
          i().mark(function e(r) {
            var t
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), c(r)
                  case 2:
                    return (
                      (t = e.sent),
                      e.abrupt("return", Array.from(new Uint8Array(t)))
                    )
                  case 4:
                  case "end":
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function d(e) {
        for (var r = atob(e), t = new Array(r.length), n = 0; n < r.length; n++)
          t[n] = r.charCodeAt(n)
        return Array.from(new Uint8Array(t))
      }
      var f = (function () {
        var e = (0, n.Z)(
          i().mark(function e(r, t) {
            return i().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        new (u())(r, {
                          quality: 0.8,
                          maxWidth: t || 768,
                          mimeType: "image/jpeg",
                          success: function (r) {
                            e(r)
                          },
                          error: function (r) {
                            e(r)
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
        return function (r, t) {
          return e.apply(this, arguments)
        }
      })()
    },
    25996: function (e, r, t) {
      t.d(r, {
        X: function () {
          return a
        },
        r: function () {
          return n
        }
      })
      var n = function (e) {
          return i(13)(e)
        },
        a = function (e) {
          return i(32)(e)
        },
        i = function (e) {
          return function (r) {
            return r.charCode === e || r.keyCode === e
          }
        }
    }
  }
])
