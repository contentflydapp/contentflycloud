;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [908, 2980, 5985, 6451],
  {
    44518: function (e, t, r) {
      "use strict"
      r.d(t, {
        D: function () {
          return h
        }
      })
      var n = r(87462),
        a = r(15861),
        o = r(45987),
        i = r(87757),
        l = r.n(i),
        c = r(67294),
        u = r(11972),
        s = r(51815),
        p = r(29950),
        d = r(81872),
        m = r(98400),
        f = r(23256),
        b = ["fileId", "fileName", "mimeType", "loadFileFunc"],
        h = function (e) {
          var t = e.fileId,
            r = e.fileName,
            i = e.mimeType,
            h = e.loadFileFunc,
            x = (0, o.Z)(e, b),
            g = (0, m.oR)(f.Z).appContext,
            v = (function () {
              var e = (0, a.Z)(
                l().mark(function e() {
                  var n, a
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null != t) {
                            e.next = 2
                            break
                          }
                          return e.abrupt("return")
                        case 2:
                          return (e.next = 4), h(t, i, g)
                        case 4:
                          ;(n = e.sent),
                            ((a = document.createElement("a")).href = n),
                            (a.download = r),
                            a.click()
                        case 9:
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
          return c.createElement(
            u.xu,
            (0, n.Z)({ px: "15px", py: "13px" }, x),
            c.createElement(
              p.$,
              { label: r },
              c.createElement(
                u.Ug,
                null,
                c.createElement(u.LZ, null),
                c.createElement(
                  u.bK,
                  {
                    size: { base: "77px", md: "97px" },
                    bgColor: "gray_light3",
                    borderRadius: "4px",
                    cursor: "pointer",
                    onClick: v
                  },
                  c.createElement(s.hU, {
                    variant: "unstyled",
                    icon: c.createElement(d.NFo, { size: "50px" }),
                    mb: "10px"
                  })
                ),
                c.createElement(u.LZ, null)
              )
            ),
            c.createElement(
              p.$,
              { label: r },
              c.createElement(
                u.xv,
                {
                  fontSize: "14px",
                  fontWeight: "normal",
                  color: "gray_light2",
                  pt: "7px",
                  px: "2px",
                  noOfLines: 3,
                  textAlign: "center"
                },
                r
              )
            )
          )
        }
    },
    62980: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          ZoomImageModal: function () {
            return s
          }
        })
      var n = r(67294),
        a = r(25527),
        o = r(11972),
        i = r(51815),
        l = r(59876),
        c = r(63750),
        u = r(8193),
        s = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            s = e.imageItem,
            p = e.isFullScreen,
            d = e.setFullScreen,
            m = e.ImageComponent
          return n.createElement(
            a.u_,
            { isOpen: t, onClose: r, size: p ? "full" : "xl" },
            n.createElement(a.ZA, null),
            n.createElement(
              a.hz,
              null,
              n.createElement(
                o.kC,
                { alignItems: "center", justifyContent: "center" },
                n.createElement(
                  o.xu,
                  {
                    bg: "white",
                    borderRadius: p ? "0px" : "12px",
                    w: p ? "full" : "unset",
                    h: p ? "full" : "unset"
                  },
                  n.createElement(i.hU, {
                    variant: "outline",
                    fontSize: "20px",
                    size: "md",
                    icon: p
                      ? n.createElement(u.sz8, null)
                      : n.createElement(c.RS4, null),
                    onClick: function () {
                      return d(!p)
                    },
                    position: "absolute",
                    right: "48px"
                  }),
                  n.createElement(i.hU, {
                    variant: "outline",
                    fontSize: "20px",
                    size: "md",
                    icon: n.createElement(l.Tw, null),
                    onClick: r,
                    position: "absolute",
                    right: "0px"
                  }),
                  n.createElement(m, {
                    imageId: s.imageId,
                    h: p ? "unset" : "400px",
                    borderRadius: p ? "" : "6px 6px 0px 0px"
                  }),
                  ((!p && s.title) || s.description) &&
                    n.createElement(
                      o.xu,
                      { p: "6" },
                      s.title &&
                        n.createElement(
                          o.xu,
                          {
                            fontSize: "2xl",
                            fontWeight: "semibold",
                            lineHeight: "tight"
                          },
                          s.title
                        ),
                      s.description &&
                        n.createElement(
                          o.xv,
                          {
                            fontSize: "14px",
                            lineHeight: "tight",
                            whiteSpace: "pre-line"
                          },
                          s.description
                        )
                    )
                )
              )
            )
          )
        }
    },
    52672: function (e, t, r) {
      "use strict"
      r.d(t, {
        P: function () {
          return i
        }
      })
      var n = r(27386),
        a = r(11972),
        o = r(67294),
        i = function (e) {
          var t = e.children
          return o.createElement(
            n.Hk,
            { pt: 3, pb: 6 },
            o.createElement(
              a.xu,
              { color: "black", fontSize: "15px", lineHeight: "164.84%" },
              t
            )
          )
        }
    },
    43677: function (e, t, r) {
      "use strict"
      r.d(t, {
        E: function () {
          return i
        }
      })
      var n = r(67294),
        a = r(27386),
        o = r(11972),
        i = function (e) {
          var t = e.children
          return n.createElement(
            "h2",
            null,
            n.createElement(
              a.KF,
              { _hover: { bg: "purple_light2", color: "white" } },
              n.createElement(
                o.X6,
                {
                  fontWeight: "medium",
                  fontSize: { base: "16px", lg: "18px" },
                  color: "black_2",
                  flex: "1",
                  textAlign: "left"
                },
                t
              ),
              n.createElement(a.XE, { color: "purple" })
            )
          )
        }
    },
    92619: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return u
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(73733),
        l = r(99575),
        c = [
          "id",
          "field",
          "errorMesg",
          "isChecked",
          "isRequired",
          "isInvalid",
          "w",
          "children"
        ]
      function u(e) {
        var t = e.id,
          r = e.field,
          u = e.errorMesg,
          s = e.isChecked,
          p = e.isRequired,
          d = e.isInvalid,
          m = e.w,
          f = e.children,
          b = (0, a.Z)(e, c)
        return o.createElement(
          i.NI,
          { isRequired: p, isInvalid: d, w: m },
          o.createElement(
            i.lX,
            (0, n.Z)(
              {
                htmlFor: t,
                fontSize: "13px",
                fontWeight: "medium",
                color: "black_2"
              },
              b,
              { px: "22px" }
            ),
            o.createElement(
              l.XZ,
              (0, n.Z)({ id: t }, r, {
                defaultIsChecked: s,
                isRequired: p,
                isInvalid: d,
                size: "lg",
                spacing: "1rem",
                iconColor: "purple",
                colorScheme: "white"
              }),
              f
            )
          ),
          o.createElement(i.J1, null, u)
        )
      }
    },
    81967: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return s
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(73733),
        l = r(84597),
        c = r(43523),
        u = [
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
      function s(e) {
        var t = e.id,
          r = e.field,
          s = e.textSize,
          p = e.numRows,
          d = e.textAreaHeight,
          m = e.placeholder,
          f = e.rightIcon,
          b = e.errorMesg,
          h = e.isRequired,
          x = e.isInvalid,
          g = e.variant,
          v = e.inputFontColor,
          y = (0, a.Z)(e, u),
          w = s || "sm",
          E = p || 12
        return o.createElement(
          i.NI,
          (0, n.Z)(
            {
              isRequired: h,
              isInvalid: x,
              w: { base: "340px", md: "300px", "2xl": "380px" }
            },
            y
          ),
          o.createElement(
            i.lX,
            {
              htmlFor: t,
              fontSize: "13px",
              fontWeight: "medium",
              color: "black_2"
            },
            e.children
          ),
          o.createElement(
            l.BZ,
            null,
            o.createElement(
              c.g,
              (0, n.Z)(
                {
                  id: t,
                  placeholder: m,
                  focusBorderColor: "purple",
                  color: v,
                  resize: "vertical",
                  rows: E,
                  h: d,
                  variant: g,
                  size: w
                },
                r
              )
            ),
            f && o.createElement(l.xH, { children: f })
          ),
          o.createElement(i.J1, null, b)
        )
      }
    },
    31619: function (e, t, r) {
      "use strict"
      r.d(t, {
        d: function () {
          return P
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(88523),
        l = r(50715),
        c = r(51815),
        u = r(86893),
        s = r(15861),
        p = r(87757),
        d = r.n(p),
        m = r(45607),
        f = r(25527),
        b = r(11972),
        h = r(42273),
        x = r(82175),
        g = r(81967),
        v = r(92619),
        y = r(42340),
        w = r(66985),
        E = r(98400),
        C = r(23256),
        k = r(89324),
        T = r(34076),
        S = r(33224),
        I = r(24686),
        F = r(66897),
        j = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            n = e.jobFlowObject,
            a = e.identity,
            i = e.mutateJobDispute,
            l = (0, o.useRef)(null),
            u = (0, E.oR)(C.Z),
            p = u.user.id,
            j = (0, m.pm)(),
            Z =
              "I acknowledge that submitting a dispute will end this job and the value of refund I receive will be determined by the DAO dispute jury.",
            P = {
              lumpsum:
                "I acknowledge that submitting a dispute will end this job and may result in receiving reduced or zero job payment.",
              beam: "I acknowledge that submitting a dispute will end this job and may result in receiving reduced job payment."
            },
            J = (0, k.Q)(
              null === n || void 0 === n ? void 0 : n.id(),
              a,
              0
            ).escrowContract,
            O = null == J ? null : new T.u(J),
            z = ""
          null != O &&
            (z = n.isBuyer(p) ? Z : O.isBeamPayment() ? P.beam : P.lumpsum)
          var R = (function () {
              var e = (0, s.Z)(
                d().mark(function e(t, o) {
                  var l, c
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, I.makeJobDisputeActor)(
                              a,
                              u.appContext.authProvider
                            )
                          )
                        case 2:
                          return (
                            (l = e.sent),
                            (e.next = 5),
                            l.disputeJob(
                              n.id(),
                              n.jobId(),
                              t.reason,
                              u.appContext.candidAuthProvider()
                            )
                          )
                        case 5:
                          ;(c = e.sent),
                            o.setSubmitting(!1),
                            c.ok
                              ? (i(),
                                (0, F.showToast)(
                                  j,
                                  "Job Dispute",
                                  "The job dispute request has been submitted successfully.",
                                  "success"
                                ),
                                r())
                              : (w.default.error(c.err),
                                (0, F.showToast)(
                                  j,
                                  "Job Dispute",
                                  "We have a problem submitting your request. Please try again later.",
                                  "error"
                                ))
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
            A = null == O
          return o.createElement(
            f.u_,
            {
              isOpen: t,
              initialFocusRef: l,
              size: "full",
              closeOnOverlayClick: !1,
              onClose: r
            },
            o.createElement(f.ZA, null),
            o.createElement(
              f.hz,
              {
                color: "black_2",
                maxW: { base: "98%", md: "800px", lg: "1000px" },
                mt: "20px",
                mb: "100px",
                px: { base: "0px", md: "20px" }
              },
              A && o.createElement(S.j, null),
              !A &&
                o.createElement(
                  x.J9,
                  {
                    validationSchema: y.PH,
                    initialValues: { reason: "", terms: !1 },
                    onSubmit: R,
                    enableReinitialize: !0
                  },
                  function (e) {
                    var t = e.isSubmitting
                    return o.createElement(
                      x.l0,
                      { style: { width: "100%" } },
                      o.createElement(
                        f.xB,
                        {
                          textAlign: "center",
                          fontWeight: "bold",
                          fontSize: "24px",
                          mt: "14px"
                        },
                        "Job Dispute"
                      ),
                      o.createElement(f.ol, null),
                      o.createElement(
                        f.fe,
                        null,
                        o.createElement(
                          b.gC,
                          { align: "center" },
                          o.createElement(
                            b.xv,
                            {
                              fontWeight: "medium",
                              fontSize: "16px",
                              textDecoration: "underline",
                              mb: "30px",
                              align: "center"
                            },
                            "Please provide the following information for the DAO dispute jury"
                          ),
                          o.createElement(
                            x.gN,
                            { name: "reason" },
                            function (e) {
                              var t = e.field,
                                r = e.form
                              return o.createElement(
                                g.Z,
                                {
                                  id: "reason",
                                  placeholder: "Explain your reason here...",
                                  w: { base: "95%", md: "95%" },
                                  textAreaHeight: {
                                    base: "400px",
                                    md: "400px"
                                  },
                                  field: t,
                                  isInvalid:
                                    r.errors.reason && r.touched.reason,
                                  errorMesg: r.errors.reason,
                                  isRequired: !0
                                },
                                "What is your reason for disputing this job?"
                              )
                            }
                          ),
                          o.createElement(
                            x.gN,
                            { name: "terms", type: "checkbox" },
                            function (e) {
                              var t = e.field,
                                r = e.form,
                                n = e.meta
                              return o.createElement(
                                v.Z,
                                {
                                  id: "terms",
                                  field: t,
                                  isChecked: n.initialValue,
                                  isInvalid: r.errors.terms && r.touched.terms,
                                  errorMesg: r.errors.terms,
                                  isRequired: !0,
                                  w: { base: "100%", md: "80%" },
                                  pt: "30px"
                                },
                                o.createElement(
                                  b.xv,
                                  {
                                    fontWeight: "medium",
                                    fontSize: { base: "13px", md: "15px" }
                                  },
                                  z
                                )
                              )
                            }
                          )
                        )
                      ),
                      o.createElement(
                        f.mz,
                        null,
                        o.createElement(
                          c.zx,
                          {
                            onClick: r,
                            w: "50%",
                            h: "60px",
                            mb: "9px",
                            ref: l
                          },
                          "Cancel"
                        ),
                        o.createElement(
                          h.Z,
                          { ml: 3, w: "50%", isLoading: t, type: "submit" },
                          "Submit"
                        )
                      )
                    )
                  }
                )
            )
          )
        },
        Z = ["jobFlowObject", "identity", "mutateJobDispute"],
        P = function (e) {
          var t = e.jobFlowObject,
            r = e.identity,
            s = e.mutateJobDispute,
            p = (0, a.Z)(e, Z),
            d = (0, i.qY)(),
            m = d.isOpen,
            f = d.onOpen,
            b = d.onClose
          return null == t || t.hasDispute()
            ? o.createElement(o.Fragment, null)
            : o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  l.v2,
                  null,
                  o.createElement(
                    l.j2,
                    (0, n.Z)(
                      {
                        as: c.hU,
                        "aria-label": "More Options",
                        icon: o.createElement(u.K9M, { size: "24px" }),
                        color: "black_gray",
                        variant: "ghost",
                        size: "md"
                      },
                      p
                    )
                  ),
                  o.createElement(
                    l.qy,
                    null,
                    o.createElement(
                      l.sN,
                      {
                        color: "black_2",
                        fontWeight: "medium",
                        size: "15px",
                        onClick: f
                      },
                      "Dispute Job"
                    )
                  )
                ),
                o.createElement(j, {
                  isOpen: m,
                  onClose: b,
                  jobFlowObject: t,
                  identity: r,
                  mutateJobDispute: s
                })
              )
        }
    },
    5256: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            V: function () {
              return S
            }
          })
          var a = r(15861),
            o = r(86854),
            i = r(87757),
            l = r.n(i),
            c = r(67294),
            u = r(88523),
            s = r(45607),
            p = r(66897),
            d = r(15658),
            m = r(42273),
            f = r(98400),
            b = r(23256),
            h = r(24686),
            x = r(88145),
            g = r(17075),
            v = r(22169),
            y = r(47245),
            w = r(66985),
            E = r(18489),
            C = r(31681),
            k = r(5508),
            T = e([E])
          E = (T.then ? (await T)() : T)[0]
          var S = function (e) {
            var t = e.jobObject,
              r = e.selectedUserId,
              n = e.creatorPortfolio,
              i = e.identity,
              T = e.setCandidJobFlowState,
              S = e.triggerReloadJobFlow,
              I = (0, c.useState)(!1),
              F = (0, o.Z)(I, 2),
              j = F[0],
              Z = F[1],
              P = (0, u.qY)(),
              J = P.isOpen,
              O = P.onOpen,
              z = P.onClose,
              R = C.CS.PaymentType,
              A = R.LumpSum,
              M = R.Beam,
              D = (0, s.pm)(),
              N = (0, f.oR)(b.Z),
              _ = (0, c.useState)(
                (function (e) {
                  switch (e) {
                    case A:
                      return 0
                    case M:
                      return 1
                  }
                })(M)
              ),
              W = (0, o.Z)(_, 2),
              q = W[0],
              B = W[1],
              U = function (e) {
                switch (e) {
                  case 0:
                    return A
                  case 1:
                    return M
                }
              },
              L = (function () {
                var e = (0, a.Z)(
                  l().mark(function e() {
                    var n, a, o, c, u, s, d, m, f, b, E, I, F
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0), Z(!0), (e.next = 4), (0, v.Um)()
                              )
                            case 4:
                              if (
                                e.sent &&
                                null !=
                                  (null === (n = window.ic) ||
                                  void 0 === n ||
                                  null === (a = n.plug) ||
                                  void 0 === a
                                    ? void 0
                                    : a.accountId)
                              ) {
                                e.next = 12
                                break
                              }
                              return (
                                (e.next = 8),
                                (0, v.Gq)({
                                  showToast: p.showToast,
                                  toast: D,
                                  title: "Award Job"
                                })
                              )
                            case 8:
                              if (e.sent) {
                                e.next = 12
                                break
                              }
                              return Z(!1), e.abrupt("return")
                            case 12:
                              return (
                                (o = (0, y.t)(g.R.fromText(x.v4))),
                                (e.next = 15),
                                (0, h.makeJobActor)(
                                  i,
                                  N.appContext.authProvider
                                )
                              )
                            case 15:
                              return (
                                (c = e.sent),
                                (e.next = 18),
                                c.createNewJobFlow(
                                  t.id(),
                                  r,
                                  N.appContext.candidAuthProvider()
                                )
                              )
                            case 18:
                              if (!(u = e.sent).ok) {
                                e.next = 48
                                break
                              }
                              return (
                                (s = u.ok),
                                (d = s.id),
                                (m = Number(t.budgetE8s())),
                                (f = {
                                  to: o,
                                  amount: m,
                                  opts: {
                                    fee: Number(C.CS.ICP.fee),
                                    memo: Number(d)
                                  }
                                }),
                                (0, p.showToast)(
                                  D,
                                  "Award Job",
                                  "Step 1/3 - Requesting transfer of ".concat(
                                    t.budget(),
                                    " ICP from Plug Wallet to Escrow Smart Contract."
                                  ),
                                  "info"
                                ),
                                (e.next = 27),
                                window.ic.plug.requestTransfer(f)
                              )
                            case 27:
                              return (
                                (u = e.sent),
                                (b = u.height),
                                (0, p.showMediumToast)(
                                  D,
                                  "Award Job",
                                  "Step 2/3 - We are creating a Escrow Contract now. This step can take up to 30 secs. \ud83e\uddd1\u200d\ud83d\udcbb",
                                  "info"
                                ),
                                (E = U(q)),
                                (e.next = 33),
                                c.postEscrowPayment(
                                  d,
                                  m,
                                  b,
                                  (0, k.G8)(E),
                                  N.appContext.candidAuthProvider()
                                )
                              )
                            case 33:
                              if (!(u = e.sent).ok) {
                                e.next = 48
                                break
                              }
                              ;(I = u.ok),
                                T(I),
                                S(s),
                                (F = ""),
                                (e.t0 = E),
                                (e.next =
                                  e.t0 === M ? 42 : e.t0 === A ? 44 : 46)
                              break
                            case 42:
                              return (
                                (F =
                                  "The deposited payment is now kept as escrow in the smart contract and will be streamed to the creator using Beam. Switch to the Payment tab to view the Beam streaming."),
                                e.abrupt("break", 46)
                              )
                            case 44:
                              return (
                                (F =
                                  "The deposited payment is now kept as escrow in the smart contract until the job is completed."),
                                e.abrupt("break", 46)
                              )
                            case 46:
                              return (
                                (0, p.showMediumToast)(
                                  D,
                                  "Award Job",
                                  "Step 3/3 - \ud83d\udc4d  Well done! You have successfully awarded the job to the creator. " +
                                    F,
                                  "success"
                                ),
                                e.abrupt("return")
                              )
                            case 48:
                              throw (w.default.error(u.err), new Error(u.err))
                            case 52:
                              ;(e.prev = 52),
                                (e.t1 = e.catch(0)),
                                w.default.error(e.t1),
                                (0, p.showToast)(
                                  D,
                                  "Awarding Job",
                                  "We have a problem submitting your request. Please try again later. If you believe you have deposited the payment, please contact us at support@contentfly.app. We would be able glad to help.",
                                  "error"
                                )
                            case 56:
                              return (e.prev = 56), Z(!1), e.finish(56)
                            case 59:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 52, 56, 59]]
                    )
                  })
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                m.Z,
                {
                  fontSize: {
                    base: "12px",
                    md: "12px",
                    lg: "13px",
                    xl: "16px"
                  },
                  fontWeight: "medium",
                  isLoading: j,
                  onClick: O
                },
                "Award Job to ",
                null === n || void 0 === n ? void 0 : n.creatorName,
                c.createElement(d.sm, { ml: "8px", mb: "4px" })
              ),
              c.createElement(E.Z, {
                isOpen: J,
                onClose: z,
                submit: L,
                jobObject: t,
                creatorPortfolio: n,
                setTabIndex: B
              })
            )
          }
          n()
        } catch (I) {
          n(I)
        }
      })
    },
    18489: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Z: function () {
              return g
            }
          })
          var a = r(67294),
            o = r(25527),
            i = r(25927),
            l = r(11972),
            c = r(56223),
            u = r(46386),
            s = r(2700),
            p = r(51815),
            d = r(15658),
            m = r(42273),
            f = r(59876),
            b = r(499),
            h = r(76989),
            x = e([h])
          h = (x.then ? (await x)() : x)[0]
          var g = function (e) {
            var t = e.isOpen,
              r = e.onClose,
              n = e.submit,
              x = e.jobObject,
              g = e.creatorPortfolio,
              v = e.setTabIndex,
              y = (0, a.useRef)(),
              w = (0, h.RC)(
                null === g || void 0 === g ? void 0 : g.thumbImageId
              )
            return a.createElement(
              o.aR,
              { isOpen: t, leastDestructiveRef: y, size: "lg", closeOnEsc: !1 },
              a.createElement(
                o.dh,
                null,
                a.createElement(
                  o._T,
                  { align: "center" },
                  a.createElement(
                    o.fY,
                    {
                      fontSize: "lg",
                      fontWeight: "semibold",
                      color: "black_2",
                      pt: "40px",
                      pb: "10px"
                    },
                    "Awarding Job To:",
                    " ",
                    a.createElement(i.qE, {
                      w: "38px",
                      h: "38px",
                      ml: "18px",
                      mr: "8px",
                      bottom: "6px",
                      name: null === g || void 0 === g ? void 0 : g.creatorName,
                      src: w
                    }),
                    a.createElement(
                      l.xv,
                      {
                        as: "span",
                        bg: "gradient.purple.5",
                        bgClip: "text",
                        textTransform: "capitalize"
                      },
                      null === g || void 0 === g ? void 0 : g.creatorName
                    )
                  ),
                  a.createElement(
                    o.iP,
                    null,
                    a.createElement(
                      l.gC,
                      { spacing: "18px" },
                      a.createElement(
                        l.xv,
                        { color: "black", fontSize: "16px" },
                        "To award this job, you must transfer the agreed job payment to the smart contract to be stored in escrow."
                      ),
                      a.createElement(
                        c.J2,
                        { trigger: "hover" },
                        a.createElement(
                          l.xv,
                          { color: "black" },
                          a.createElement(
                            c.xo,
                            null,
                            a.createElement(f.hQ, {
                              w: "18px",
                              h: "18px",
                              position: "relative",
                              mr: "8px"
                            })
                          ),
                          "What if I have a problem with the creator?"
                        ),
                        a.createElement(
                          c.yk,
                          { w: "400px" },
                          a.createElement(c.QH, null),
                          a.createElement(c.us, null),
                          a.createElement(
                            c.b,
                            {
                              color: "black",
                              pt: "28px",
                              pb: "18px",
                              px: "18px"
                            },
                            "If you are not happy with the creator\u2019s work you can submit a dispute. The Content Fly DAO Dispute Jury will then deliberate and determine how much each party shall receive of the job payment. The Jury will take into account how much work has been done by the creator and the quality of work among other things."
                          )
                        )
                      ),
                      a.createElement(
                        l.gC,
                        { spacing: "18px", pt: "36px" },
                        a.createElement(
                          l.X6,
                          {
                            color: "black_2",
                            fontSize: "18px",
                            fontWeight: "medium"
                          },
                          "Select Payment Type"
                        ),
                        a.createElement(b.f, { setTabIndex: v })
                      ),
                      a.createElement(
                        u.kN,
                        { align: "center", pt: "6px" },
                        a.createElement(
                          u.dw,
                          {
                            py: "6px",
                            color: "black_2",
                            fontSize: "18px",
                            fontWeight: "medium"
                          },
                          "Total"
                        ),
                        a.createElement(
                          u.Jf,
                          {
                            py: "6px",
                            pos: "relative",
                            left: "20px",
                            fontWeight: "semibold",
                            fontSize: "24px",
                            color: "black_3"
                          },
                          x.budget(),
                          a.createElement(
                            s.Vp,
                            {
                              size: "lg",
                              bg: "white",
                              borderColor: "black_3",
                              borderWidth: "1px",
                              borderRadius: "full",
                              mx: "12px"
                            },
                            a.createElement(d.cD, {
                              h: "30x",
                              w: "41px",
                              color: "black_3"
                            }),
                            " ICP"
                          )
                        ),
                        a.createElement(
                          u.vh,
                          { color: "black_gray", fontSize: "16px" },
                          "A standard IC transfer fee ",
                          x.transferFee(),
                          " ICP is applied."
                        )
                      )
                    )
                  ),
                  a.createElement(
                    o.xo,
                    { mt: "18px" },
                    a.createElement(
                      p.zx,
                      { ref: y, onClick: r, w: "50%", h: "60px", mb: "9px" },
                      "Cancel"
                    ),
                    a.createElement(
                      m.Z,
                      {
                        onClick: function () {
                          r(), n()
                        },
                        ml: 3,
                        w: "50%"
                      },
                      "Deposit"
                    )
                  )
                )
              )
            )
          }
          n()
        } catch (v) {
          n(v)
        }
      })
    },
    499: function (e, t, r) {
      "use strict"
      r.d(t, {
        f: function () {
          return f
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(62639),
        l = r(11972),
        c = r(70216),
        u = r(15658),
        s = ["children"],
        p = ["children"],
        d = function (e) {
          var t = e.children,
            r = (0, a.Z)(e, s)
          return o.createElement(
            i.OK,
            (0, n.Z)(
              {
                w: "90%",
                h: "47px",
                mx: "13px",
                fontSize: "16px",
                color: "black",
                backgroundColor: "white",
                fontWeight: "semibold",
                borderRadius: "24px",
                borderWidth: "1px",
                borderColor: "gray_light",
                _selected: { color: "white", bg: "black_3" }
              },
              r
            ),
            t
          )
        },
        m = function (e) {
          var t = e.children,
            r = (0, a.Z)(e, p)
          return o.createElement(
            i.x4,
            (0, n.Z)({ minH: "98px", py: "0px", color: "black_gray" }, r),
            t
          )
        },
        f = function (e) {
          var t = e.setTabIndex
          return o.createElement(
            i.mQ,
            {
              variant: "unstyled",
              align: "center",
              size: "md",
              defaultIndex: 1,
              onChange: function (e) {
                return t(e)
              },
              isLazy: !0
            },
            o.createElement(
              i.td,
              { mb: "12px" },
              o.createElement(d, null, "Lump Sum"),
              o.createElement(
                d,
                null,
                "Beam",
                o.createElement(u.sN, {
                  ml: "8px",
                  fontSize: "22px",
                  mb: "6px"
                })
              )
            ),
            o.createElement(
              i.nP,
              null,
              o.createElement(
                m,
                null,
                o.createElement(
                  l.xv,
                  null,
                  "Once the job is complete, the payment will be released to the Creator."
                )
              ),
              o.createElement(
                m,
                null,
                o.createElement(
                  l.xv,
                  null,
                  "Creator receives a constant stream of payment until the due date. We suggest only using this payment type with creators you have worked with before."
                ),
                o.createElement(
                  c.Z,
                  {
                    href: "https://medium.com/contentfly-app-blog/beam-payment-protocol-enabling-real-time-income-for-creators-a15e46240134"
                  },
                  "Learn More"
                )
              )
            )
          )
        }
    },
    86527: function (e, t, r) {
      "use strict"
      r.d(t, {
        i: function () {
          return o
        }
      })
      var n = r(67294),
        a = r(11972),
        o = function () {
          return n.createElement(
            a.M5,
            {
              bgColor: "black_transparent_2",
              pos: "fixed",
              zIndex: "1300",
              w: { base: "100vw", md: "calc(100vw - 252px)" },
              h: "100vh",
              align: "center",
              color: "white"
            },
            n.createElement(
              a.gC,
              {
                spacing: "40px",
                px: { base: "12px", md: "40px", lg: "100px" },
                pb: "300px"
              },
              n.createElement(a.X6, { size: "2xl" }, "This job is in dispute"),
              n.createElement(
                a.X6,
                { size: "lg" },
                "The Content Fly DAO Dispute Jury will deliberate and determine how much each party shall receive of the job payment."
              )
            )
          )
        }
    },
    89903: function (e, t, r) {
      "use strict"
      r.d(t, {
        u: function () {
          return p
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(61413),
        i = r(18224),
        l = r(33224),
        c = r(1764),
        u = r(98400),
        s = r(23256),
        p = function (e) {
          var t = e.buyerName,
            r = e.creatorPortfolios,
            p = e.jobFlowObject,
            d = e.identity,
            m = e.jobDispute,
            f = e.job,
            b = new i.y(m),
            h = new c.z(f),
            x = (0, u.oR)(s.Z),
            g = Number(x.user.id),
            v = null === h || void 0 === h ? void 0 : h.budget(),
            y = null === b || void 0 === b ? void 0 : b.outcome(),
            w =
              null === b || void 0 === b
                ? void 0
                : b.outcomeBuyerAllocatedTokens(v),
            E =
              null === b || void 0 === b
                ? void 0
                : b.outcomeCreatorAllocatedTokens(v),
            C =
              null === b || void 0 === b ? void 0 : b.outcomeBuyerAllocation(),
            k =
              null === b || void 0 === b
                ? void 0
                : b.outcomeCreatorAllocation(),
            T = (0, o.w)({
              creatorPortfolios: r,
              creatorId: null === p || void 0 === p ? void 0 : p.creatorId(),
              identity: d
            }),
            S =
              g == Number(null === m || void 0 === m ? void 0 : m.buyerId)
                ? "You"
                : t,
            I =
              g == Number(null === m || void 0 === m ? void 0 : m.creatorId)
                ? "You"
                : null === T || void 0 === T
                ? void 0
                : T.creatorName
          return n.createElement(
            a.M5,
            {
              bgColor: "black_transparent_2",
              pos: "fixed",
              zIndex: "1300",
              w: { base: "100vw", md: "calc(100vw - 252px)" },
              h: "100vh",
              align: "center",
              color: "white"
            },
            null == y && n.createElement(l.j, null),
            null != y &&
              n.createElement(
                a.gC,
                {
                  spacing: "40px",
                  px: { base: "12px", md: "40px", lg: "100px" },
                  pb: "300px"
                },
                n.createElement(
                  a.X6,
                  { size: "2xl" },
                  "Dispute decision reached"
                ),
                n.createElement(
                  a.X6,
                  { size: "lg" },
                  "After deliberation, The Content Fly DAO Dispute jury has come to the following decision:"
                ),
                n.createElement(
                  a.X6,
                  { size: "lg" },
                  S,
                  " will be refunded ",
                  100 * C,
                  "% of the job payment (",
                  w,
                  "\xa0ICP)"
                ),
                n.createElement(
                  a.X6,
                  { size: "lg" },
                  I,
                  " will be rewarded ",
                  100 * k,
                  "% of the job payment (",
                  E,
                  "\xa0ICP)"
                )
              )
          )
        }
    },
    70815: function (e, t, r) {
      "use strict"
      r.d(t, {
        z: function () {
          return F
        }
      })
      var n = r(67294),
        a = r(88523),
        o = r(11972),
        i = r(98400),
        l = r(23256),
        c = r(61413),
        u = r(42273),
        s = r(4942),
        p = r(15861),
        d = r(87757),
        m = r.n(d),
        f = r(45607),
        b = r(25527),
        h = r(51815),
        x = r(82175),
        g = r(81967),
        v = r(42340),
        y = r(66985),
        w = r(24686),
        E = r(66897),
        C = r(5508),
        k = r(31681)
      function T(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                ;(0, s.Z)(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                )
              })
        }
        return e
      }
      var I = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            a = e.job,
            s = e.jobFlowObject,
            d = e.identity,
            T = e.creatorPortfolios,
            I = e.jobDispute,
            F = e.mutateJobDispute,
            j = (0, n.useRef)(null),
            Z = (0, i.oR)(l.Z),
            P = Z.user.id,
            J = (0, f.pm)(),
            O = (0, c.w)({
              creatorPortfolios: T,
              creatorId: s.creatorId(),
              identity: d
            }),
            z = s.isBuyer(P)
              ? null === O || void 0 === O
                ? void 0
                : O.creatorName
              : a.brand,
            R = (function () {
              var e = (0, p.Z)(
                m().mark(function e(t, n) {
                  var a, o
                  return m().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, w.makeJobDisputeActor)(
                              d,
                              Z.appContext.authProvider
                            )
                          )
                        case 2:
                          return (
                            (a = e.sent),
                            (e.next = 5),
                            a.submitMyStory(
                              I.id,
                              t.story,
                              Z.appContext.candidAuthProvider()
                            )
                          )
                        case 5:
                          ;(o = e.sent),
                            n.setSubmitting(!1),
                            o.ok
                              ? (F(
                                  S(
                                    S({}, I),
                                    {},
                                    { state: (0, C.G8)(k.h0.Pending) }
                                  )
                                ),
                                (0, E.showToast)(
                                  J,
                                  "Job Dispute",
                                  "Your story for the job dispute has been submitted successfully.",
                                  "success"
                                ),
                                r())
                              : (y.default.error(o.err),
                                (0, E.showToast)(
                                  J,
                                  "Job Dispute",
                                  "We have a problem submitting your story. Please try again later.",
                                  "error"
                                ))
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
            })()
          return n.createElement(
            b.u_,
            {
              isOpen: t,
              initialFocusRef: j,
              size: "full",
              closeOnOverlayClick: !1,
              onClose: r
            },
            n.createElement(b.ZA, null),
            n.createElement(
              b.hz,
              {
                color: "black_2",
                maxW: { base: "98%", md: "800px", lg: "1000px" },
                mt: "20px",
                mb: "260px",
                px: { base: "0px", md: "20px" }
              },
              n.createElement(
                x.J9,
                {
                  validationSchema: v.P4,
                  initialValues: { story: "" },
                  onSubmit: R,
                  enableReinitialize: !0
                },
                function (e) {
                  var t = e.isSubmitting
                  return n.createElement(
                    x.l0,
                    { style: { width: "100%" } },
                    n.createElement(
                      b.xB,
                      {
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "24px",
                        mt: "14px"
                      },
                      "Job In Dispute By ",
                      z
                    ),
                    n.createElement(b.ol, null),
                    n.createElement(
                      b.fe,
                      null,
                      n.createElement(
                        o.gC,
                        { align: "center" },
                        n.createElement(
                          o.xv,
                          {
                            fontWeight: "medium",
                            fontSize: "16px",
                            textDecoration: "underline",
                            mb: "30px",
                            align: "center"
                          },
                          "Please provide the following information for the DAO dispute jury"
                        ),
                        n.createElement(x.gN, { name: "story" }, function (e) {
                          var t = e.field,
                            r = e.form
                          return n.createElement(
                            g.Z,
                            {
                              id: "story",
                              placeholder: "Explain here...",
                              w: { base: "95%", md: "95%" },
                              textAreaHeight: { base: "400px", md: "400px" },
                              field: t,
                              isInvalid: r.errors.story && r.touched.story,
                              errorMesg: r.errors.story,
                              isRequired: !0
                            },
                            "What is your side of the story?"
                          )
                        })
                      )
                    ),
                    n.createElement(
                      b.mz,
                      { mt: "20px" },
                      n.createElement(
                        h.zx,
                        { onClick: r, w: "50%", h: "60px", mb: "9px", ref: j },
                        "Cancel"
                      ),
                      n.createElement(
                        u.Z,
                        { ml: 3, w: "50%", isLoading: t, type: "submit" },
                        "Submit"
                      )
                    )
                  )
                }
              )
            )
          )
        },
        F = function (e) {
          var t = e.jobFlowObject,
            r = e.job,
            s = e.creatorPortfolios,
            p = e.identity,
            d = e.jobDispute,
            m = e.mutateJobDispute,
            f = (0, a.qY)(),
            b = f.isOpen,
            h = f.onOpen,
            x = f.onClose,
            g = (0, i.oR)(l.Z).user.id,
            v = (0, c.w)({
              creatorPortfolios: s,
              creatorId: null === t || void 0 === t ? void 0 : t.creatorId(),
              identity: p
            }),
            y =
              null !== t && void 0 !== t && t.isBuyer(g)
                ? null === v || void 0 === v
                  ? void 0
                  : v.creatorName
                : r.brand,
            w = t.isInDisputeByMe(g),
            E = w
              ? "This job is in dispute, ".concat(
                  y,
                  " has 48 hours to Submit their side of the story"
                )
              : "This job is in dispute by ".concat(
                  y,
                  " - You have 48 hours to Submit\n        your side of the story"
                )
          return null == t
            ? n.createElement(n.Fragment, null)
            : n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  o.M5,
                  {
                    bgColor: "dark_black",
                    pos: "absolute",
                    bottom: "0px",
                    color: "white",
                    px: "24px",
                    w: { base: "100vw", md: "calc(100vw - 252px)" },
                    h: "134px",
                    zIndex: "100"
                  },
                  n.createElement(o.X6, { size: "md" }, E),
                  !w &&
                    n.createElement(
                      u.Z,
                      {
                        ml: "40px",
                        mt: "8px",
                        px: "40px",
                        h: "40px",
                        size: "15px",
                        fontWeight: "medium",
                        onClick: h
                      },
                      "Submit Now"
                    )
                ),
                n.createElement(I, {
                  isOpen: b,
                  onClose: x,
                  jobFlowObject: t,
                  identity: p,
                  creatorPortfolios: s,
                  job: r,
                  jobDispute: d,
                  mutateJobDispute: m
                })
              )
        }
    },
    60447: function (e, t, r) {
      "use strict"
      r.d(t, {
        P: function () {
          return j
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(88523),
        u = r(45607),
        s = r(42273),
        p = r(66897),
        d = r(5508),
        m = r(24686),
        f = r(47245),
        b = r(22169),
        h = r(66985),
        x = r(23256),
        g = r(98400),
        v = r(25527),
        y = r(11972),
        w = r(46386),
        E = r(2700),
        C = r(51815),
        k = r(15658),
        T = r(31681),
        S = r(73580),
        I = r(70216),
        F = function (e) {
          var t = e.isOpen,
            r = e.onClose,
            n = e.submit,
            a = e.numClaimableTokens,
            o = (0, l.useRef)(),
            i = (0, S._)(T.CS.ICP.fee)
          return l.createElement(
            v.aR,
            { isOpen: t, leastDestructiveRef: o, size: "lg", closeOnEsc: !1 },
            l.createElement(
              v.dh,
              null,
              l.createElement(
                v._T,
                { align: "center" },
                l.createElement(
                  v.fY,
                  {
                    fontSize: "lg",
                    fontWeight: "semibold",
                    color: "black_2",
                    pt: "40px",
                    pb: "10px"
                  },
                  "Claiming Funds"
                ),
                l.createElement(
                  v.iP,
                  null,
                  l.createElement(
                    y.gC,
                    { spacing: "18px" },
                    l.createElement(
                      y.xv,
                      { color: "black", fontSize: "16px" },
                      "You will need \xa0",
                      l.createElement(
                        I.Z,
                        {
                          href: "https://plugwallet.ooo/",
                          textDecoration: "none"
                        },
                        l.createElement(k.gk, { h: "40px", mr: "10px" }),
                        "Plug Wallet"
                      ),
                      " ",
                      "to claim funds."
                    ),
                    l.createElement(
                      w.kN,
                      { align: "center", pt: "6px" },
                      l.createElement(
                        w.dw,
                        {
                          py: "6px",
                          color: "black_2",
                          fontSize: "18px",
                          fontWeight: "medium"
                        },
                        "Available to Claim"
                      ),
                      l.createElement(
                        w.Jf,
                        {
                          py: "6px",
                          pos: "relative",
                          left: "20px",
                          fontWeight: "semibold",
                          fontSize: "24px",
                          color: "black_3"
                        },
                        a,
                        l.createElement(
                          E.Vp,
                          {
                            size: "lg",
                            bg: "white",
                            borderColor: "black_3",
                            borderWidth: "1px",
                            borderRadius: "full",
                            mx: "12px"
                          },
                          l.createElement(k.cD, {
                            h: "30x",
                            w: "41px",
                            color: "black_3"
                          }),
                          " ICP"
                        )
                      ),
                      l.createElement(
                        w.vh,
                        { color: "black_gray", fontSize: "16px" },
                        "A standard IC transfer fee ",
                        i,
                        " ICP is applied."
                      )
                    )
                  )
                ),
                l.createElement(
                  v.xo,
                  { mt: "18px" },
                  l.createElement(
                    C.zx,
                    { ref: o, onClick: r, w: "50%", h: "60px", mb: "9px" },
                    "Cancel"
                  ),
                  l.createElement(
                    s.Z,
                    {
                      onClick: function () {
                        r(), n()
                      },
                      ml: 3,
                      w: "50%"
                    },
                    "Claim"
                  )
                )
              )
            )
          )
        },
        j = function (e) {
          var t = e.jobFlowObject,
            r = e.identity,
            o = e.numClaimableTokens,
            v = e.isDisabled,
            y = e.claimFuncGenerator,
            w = (0, l.useState)(!1),
            E = (0, a.Z)(w, 2),
            C = E[0],
            k = E[1],
            T = (0, c.qY)(),
            S = T.isOpen,
            I = T.onOpen,
            j = T.onClose,
            Z = (0, g.oR)(x.Z).appContext.authProvider,
            P = (0, u.pm)(),
            J = (function () {
              var e = (0, n.Z)(
                i().mark(function e() {
                  var n, a, o, l, c, u, s, x, g, v
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return (
                              (0, p.showToast)(
                                P,
                                "Claim Funds",
                                "We are loading the data. Please try again later.",
                                "warning"
                              ),
                              e.abrupt("return")
                            )
                          case 3:
                            return k(!0), (e.next = 6), (0, b.Um)()
                          case 6:
                            if (
                              e.sent &&
                              null !=
                                (null === (n = window.ic) ||
                                void 0 === n ||
                                null === (a = n.plug) ||
                                void 0 === a
                                  ? void 0
                                  : a.accountId)
                            ) {
                              e.next = 14
                              break
                            }
                            return (
                              (e.next = 10),
                              (0, b.Gq)({
                                showToast: p.showToast,
                                toast: P,
                                title: "Claim Funds"
                              })
                            )
                          case 10:
                            if (e.sent) {
                              e.next = 14
                              break
                            }
                            return k(!1), e.abrupt("return")
                          case 14:
                            if (
                              null !=
                              (c =
                                null === (o = window.ic) ||
                                void 0 === o ||
                                null === (l = o.plug) ||
                                void 0 === l
                                  ? void 0
                                  : l.accountId)
                            ) {
                              e.next = 19
                              break
                            }
                            return (
                              (0, p.showToast)(
                                P,
                                "Claim Funds",
                                "We have problem getting your Plug Account ID. Please install or unlock your Wallet first. If you switched to a new Plug Account or just installed Plug, reload this page.",
                                "warning"
                              ),
                              k(!1),
                              e.abrupt("return")
                            )
                          case 19:
                            return (
                              (e.prev = 19),
                              (u = (0, f.h)(c)),
                              (s = t.id()),
                              (e.next = 24),
                              (0, m.makeEscrowPaymentActor)(r, Z)
                            )
                          case 24:
                            return (
                              (x = e.sent),
                              (g = y(x)),
                              (e.next = 28),
                              g(s, (0, d.G8)("icp"), u)
                            )
                          case 28:
                            if (!(v = e.sent).ok) {
                              e.next = 33
                              break
                            }
                            ;(0, p.showToast)(
                              P,
                              "Claim Funds",
                              "\ud83e\udd29 \ud83d\udcb0 Awesome! You have succcessfully claimed the funds to your wallet.",
                              "success"
                            ),
                              (e.next = 34)
                            break
                          case 33:
                            throw new Error(h.default.flattenCandidError(v.err))
                          case 34:
                            e.next = 40
                            break
                          case 36:
                            ;(e.prev = 36),
                              (e.t0 = e.catch(19)),
                              h.default.error(e.t0),
                              (0, p.showToast)(
                                P,
                                "Claim Funds",
                                "We have a problem processing your claiming funds request. Please try again later. If you need support, please contact us at support@contentfly.app. We would be able glad to help.",
                                "error"
                              )
                          case 40:
                            return (e.prev = 40), k(!1), e.finish(40)
                          case 43:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[19, 36, 40, 43]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              s.Z,
              { h: "54px", onClick: I, isLoading: C, isDisabled: v },
              "Claim Funds"
            ),
            l.createElement(F, {
              isOpen: S,
              onClose: j,
              submit: J,
              numClaimableTokens: o
            })
          )
        }
    },
    90084: function (e, t, r) {
      "use strict"
      r.d(t, {
        e: function () {
          return T
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(80988),
        i = r(1764),
        l = r(89324),
        c = r(86854),
        u = r(56223),
        s = r(59876),
        p = r(15658),
        d = r(70216),
        m = r(67930),
        f = r(18268),
        b = r(73580),
        h = r(64835),
        x = r(30381),
        g = r.n(x),
        v = r(60447),
        y = function (e) {
          var t = e.jobObject,
            r = e.escrowContract,
            o = e.jobFlowObject,
            i = e.identity,
            l = (0, n.useState)(0),
            x = (0, c.Z)(l, 2),
            y = x[0],
            w = x[1],
            E = (0, n.useState)(0),
            C = (0, c.Z)(E, 2),
            k = C[0],
            T = C[1],
            S = (0, n.useState)(0),
            I = (0, c.Z)(S, 2),
            F = I[0],
            j = I[1],
            Z = (0, n.useState)(0),
            P = (0, c.Z)(Z, 2),
            J = P[0],
            O = P[1],
            z = (0, n.useState)(0),
            R = (0, c.Z)(z, 2),
            A = R[0],
            M = R[1],
            D = (0, n.useState)(0),
            N = (0, c.Z)(D, 2),
            _ = N[0],
            W = N[1],
            q = g()(t.dueDateInJSDate()).format("Do MMM yyyy"),
            B = (0, n.useState)(0),
            U = (0, c.Z)(B, 2),
            L = U[0],
            H = U[1],
            Y = t.numHrsToDueDate(L),
            V = (0, h.O)(y / Y, 8),
            $ = F + J,
            Q = 0 === y ? 0 : A / y,
            X = 0 === y ? 0 : $ / y
          ;(0, n.useEffect)(
            function () {
              null != r &&
                (w((0, b._)(r.initialDeposit)),
                T((0, b._)(r.escrowAmount)),
                j((0, b._)(r.creatorClaimed)),
                O((0, b._)(r.creatorClaimable)),
                M((0, b._)(r.buyerClaimed)),
                W((0, b._)(r.buyerClaimable)),
                H(Number(r.createdAt / 1000000n)))
            },
            [null === r || void 0 === r ? void 0 : r.updatedAt]
          )
          return n.createElement(
            a.gC,
            {
              pt: "30px",
              pb: "140px",
              mb: "0px",
              w: "100%",
              bgColor: "black_gray2",
              h: "calc(100vh)",
              spacing: "26px"
            },
            n.createElement(
              a.gC,
              null,
              n.createElement(
                a.Ug,
                { left: "-16px", pos: "relative" },
                n.createElement(
                  u.J2,
                  { trigger: "hover" },
                  n.createElement(
                    a.xv,
                    { color: "black" },
                    n.createElement(
                      u.xo,
                      null,
                      n.createElement(s.hQ, {
                        w: "18px",
                        h: "18px",
                        position: "relative",
                        mr: "8px",
                        color: "black"
                      })
                    )
                  ),
                  n.createElement(
                    u.yk,
                    { w: "400px" },
                    n.createElement(u.QH, null),
                    n.createElement(u.us, null),
                    n.createElement(
                      u.b,
                      { color: "black", pt: "28px", pb: "18px", px: "18px" },
                      "Creator receives a constant stream of payment until the due date. We suggest only using this payment type with creators you have worked with before."
                    )
                  )
                ),
                n.createElement(
                  a.X6,
                  {
                    bgColor: "black_3",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "semibold",
                    borderRadius: "24px",
                    w: "201px",
                    h: "47px",
                    align: "center",
                    pt: "13px"
                  },
                  "Beam Payment",
                  n.createElement(p.sN, {
                    ml: "8px",
                    fontSize: "22px",
                    mb: "6px"
                  })
                )
              ),
              n.createElement(
                d.Z,
                {
                  href: "https://medium.com/contentfly-app-blog/beam-payment-protocol-enabling-real-time-income-for-creators-a15e46240134",
                  fontWeight: "medium",
                  fontSize: { base: "12px", md: "16px" }
                },
                "Learn More"
              )
            ),
            null != r &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  a.Ug,
                  { pt: "28px", spacing: "8px" },
                  n.createElement(m.x, {
                    tokenAmount: k,
                    totalTokens: y,
                    title: "Escrow"
                  }),
                  n.createElement(f._, {
                    value: 100 * X,
                    tooltipDesc: "Beamed"
                  }),
                  n.createElement(m.x, {
                    tokenAmount: $,
                    totalTokens: y,
                    title: "Creator"
                  })
                ),
                n.createElement(
                  a.xv,
                  {
                    fontSize: { base: "12px", md: "14px" },
                    px: "10px",
                    color: "black_gray",
                    pb: "28px"
                  },
                  "The beam rate is ",
                  V,
                  " ICP per hour and the beam will end on ",
                  q,
                  " at 11:59PM (Job Due Date)"
                ),
                (_ > 0 || A > 0) &&
                  n.createElement(
                    a.xu,
                    {
                      w: "362px",
                      h: "185px",
                      borderRadius: "25px",
                      bgColor: "black_2",
                      boxShadow: "2xl"
                    },
                    n.createElement(
                      a.Ug,
                      { h: "full" },
                      n.createElement(
                        a.xu,
                        {
                          h: "full",
                          borderRadius: "23px",
                          maxW: "50%",
                          w: "50%",
                          background: (function () {
                            var e = 100 * (1 - Q)
                            return "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF "
                              .concat(e, "%, #B67BE4 ")
                              .concat(e, "%, #B67BE4 100%)")
                          })()
                        },
                        n.createElement(
                          a.gC,
                          {
                            h: "full",
                            color: "black_3",
                            align: "center",
                            pt: "26px",
                            spacing: "0px"
                          },
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "normal",
                              align: "center",
                              lineHeight: "24px"
                            },
                            "Amount Claimed"
                          ),
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "medium",
                              pt: "12px"
                            },
                            (0, h.O)(A, 6),
                            " ICP"
                          ),
                          n.createElement(
                            a.xv,
                            { fontSize: "14px", fontWeight: "light" },
                            "/",
                            (0, h.O)(y, 6),
                            " ICP Total"
                          )
                        )
                      ),
                      n.createElement(
                        a.gC,
                        { m: "0px", align: "center" },
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "16px",
                            fontWeight: "normal",
                            color: "white",
                            align: "center",
                            px: "15px",
                            lineHeight: "18px"
                          },
                          "Available to Claim"
                        ),
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "22px",
                            fontWeight: "medium",
                            color: "white"
                          },
                          (0, h.O)(_, 6),
                          " ICP"
                        ),
                        n.createElement(v.P, {
                          jobFlowObject: o,
                          identity: i,
                          numClaimableTokens: _,
                          isDisabled: 0 == _,
                          claimFuncGenerator: function (e) {
                            return e.buyerClaim
                          }
                        })
                      )
                    )
                  )
              )
          )
        },
        w = r(33224),
        E = r(34076),
        C = function (e) {
          var t = e.escrowContract,
            r = e.jobFlowObject,
            o = e.identity,
            i = (0, n.useState)(0),
            l = (0, c.Z)(i, 2),
            p = l[0],
            d = l[1],
            x = (0, n.useState)(0),
            g = (0, c.Z)(x, 2),
            y = g[0],
            w = g[1],
            E = (0, n.useState)(0),
            C = (0, c.Z)(E, 2),
            k = C[0],
            T = C[1],
            S = (0, n.useState)(0),
            I = (0, c.Z)(S, 2),
            F = I[0],
            j = I[1],
            Z = (0, n.useState)(0),
            P = (0, c.Z)(Z, 2),
            J = P[0],
            O = P[1],
            z = 0 === p ? 0 : k / p,
            R = 0 === p ? 0 : F / p
          ;(0, n.useEffect)(
            function () {
              null != t &&
                (d((0, b._)(t.initialDeposit)),
                w((0, b._)(t.escrowAmount + t.creatorClaimable)),
                T((0, b._)(t.creatorClaimed)),
                O((0, b._)(t.buyerClaimable)),
                j((0, b._)(t.buyerClaimed)))
            },
            [null === t || void 0 === t ? void 0 : t.updatedAt]
          )
          return n.createElement(
            a.gC,
            {
              pt: "30px",
              pb: "140px",
              mb: "0px",
              w: "100%",
              bgColor: "black_gray2",
              h: "calc(100vh)",
              spacing: "26px"
            },
            n.createElement(
              a.gC,
              null,
              n.createElement(
                a.Ug,
                { left: "-16px", pos: "relative" },
                n.createElement(
                  u.J2,
                  { trigger: "hover" },
                  n.createElement(
                    a.xv,
                    { color: "black" },
                    n.createElement(
                      u.xo,
                      null,
                      n.createElement(s.hQ, {
                        w: "18px",
                        h: "18px",
                        position: "relative",
                        mr: "8px",
                        color: "black"
                      })
                    )
                  ),
                  n.createElement(
                    u.yk,
                    { w: "400px" },
                    n.createElement(u.QH, null),
                    n.createElement(u.us, null),
                    n.createElement(
                      u.b,
                      { color: "black", pt: "28px", pb: "18px", px: "18px" },
                      "Once the job is complete, the payment will be released to the Creator."
                    )
                  )
                ),
                n.createElement(
                  a.X6,
                  {
                    bgColor: "black_3",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "semibold",
                    borderRadius: "24px",
                    px: "16px",
                    h: "47px",
                    align: "center",
                    pt: "13px"
                  },
                  "Lump Sum Payment"
                )
              )
            ),
            null != t &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  a.Ug,
                  { pt: "28px", spacing: "8px" },
                  n.createElement(m.x, {
                    tokenAmount: y,
                    totalTokens: p,
                    title: "Escrow"
                  }),
                  n.createElement(f._, {
                    value: 100 * z,
                    tooltipDesc: "Claimed"
                  }),
                  n.createElement(m.x, {
                    tokenAmount: k,
                    totalTokens: p,
                    title: "Creator"
                  })
                ),
                n.createElement(
                  a.xv,
                  {
                    fontSize: { base: "12px", md: "14px" },
                    px: "10px",
                    color: "black_gray",
                    pb: "28px"
                  },
                  "Once you approve the job deliverables on the \u201cHandover\u201d page, the Creator can claim the job payment."
                ),
                (J > 0 || F > 0) &&
                  n.createElement(
                    a.xu,
                    {
                      w: "362px",
                      h: "185px",
                      borderRadius: "25px",
                      bgColor: "black_2",
                      boxShadow: "2xl"
                    },
                    n.createElement(
                      a.Ug,
                      { h: "full" },
                      n.createElement(
                        a.xu,
                        {
                          h: "full",
                          borderRadius: "23px",
                          maxW: "50%",
                          w: "50%",
                          background: (function () {
                            var e = 100 * (1 - R)
                            return "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF "
                              .concat(e, "%, #B67BE4 ")
                              .concat(e, "%, #B67BE4 100%)")
                          })()
                        },
                        n.createElement(
                          a.gC,
                          {
                            h: "full",
                            color: "black_3",
                            align: "center",
                            pt: "26px",
                            spacing: "0px"
                          },
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "normal",
                              align: "center",
                              lineHeight: "24px"
                            },
                            "Amount Claimed"
                          ),
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "medium",
                              pt: "12px"
                            },
                            (0, h.O)(F, 6),
                            " ICP"
                          ),
                          n.createElement(
                            a.xv,
                            { fontSize: "14px", fontWeight: "light" },
                            "/",
                            (0, h.O)(p, 6),
                            " ICP Total"
                          )
                        )
                      ),
                      n.createElement(
                        a.gC,
                        { m: "0px", align: "center" },
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "16px",
                            fontWeight: "normal",
                            color: "white",
                            align: "center",
                            px: "15px",
                            lineHeight: "18px"
                          },
                          "Available to Claim"
                        ),
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "22px",
                            fontWeight: "medium",
                            color: "white"
                          },
                          (0, h.O)(J, 6),
                          " ICP"
                        ),
                        n.createElement(v.P, {
                          jobFlowObject: r,
                          identity: o,
                          numClaimableTokens: J,
                          isDisabled: 0 == J,
                          claimFuncGenerator: function (e) {
                            return e.buyerClaim
                          }
                        })
                      )
                    )
                  )
              )
          )
        },
        k = r(31619),
        T = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            c = e.switchToTab,
            u = e.identity,
            s = e.mutateJobDispute,
            p = new i.z(t),
            d = (0, l.Q)(null === r || void 0 === r ? void 0 : r.id(), u),
            m = d.escrowContract,
            f = d.isLoading,
            b = null == m ? null : new E.u(m),
            h = null === b || void 0 === b ? void 0 : b.isBeamPayment(),
            x = null === b || void 0 === b ? void 0 : b.isLumpSumPayment()
          return n.createElement(
            a.gC,
            {
              align: "center",
              px: "0px",
              pt: { base: "28px", md: "20px" },
              pb: "0px",
              spacing: "20px",
              h: "calc(100vh)"
            },
            n.createElement(
              a.Ug,
              null,
              n.createElement(o.Z, {
                width: { base: "100%", md: "560px" },
                px: "20px",
                job: t,
                jobFlowObject: r,
                switchToTab: c
              }),
              n.createElement(k.d, {
                position: "absolute",
                right: "20px",
                jobFlowObject: r,
                identity: u,
                mutateJobDispute: s
              })
            ),
            (null == p || (null == m && f)) && n.createElement(w.j, null),
            null != p &&
              h &&
              n.createElement(y, {
                jobObject: p,
                escrowContract: m,
                jobFlowObject: r,
                identity: u
              }),
            null != p &&
              x &&
              n.createElement(C, {
                escrowContract: m,
                jobFlowObject: r,
                identity: u
              })
          )
        }
    },
    36561: function (e, t, r) {
      "use strict"
      r.d(t, {
        D: function () {
          return T
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(80988),
        i = r(1764),
        l = r(89324),
        c = r(86854),
        u = r(70216),
        s = r(15658),
        p = r(59876),
        d = r(67930),
        m = r(18268),
        f = r(60447),
        b = r(56223),
        h = r(30381),
        x = r.n(h),
        g = r(73580),
        v = r(64835),
        y = function (e) {
          var t = e.jobObject,
            r = e.jobFlowObject,
            o = e.identity,
            i = e.escrowContract,
            l = (0, n.useState)(0),
            h = (0, c.Z)(l, 2),
            y = h[0],
            w = h[1],
            E = (0, n.useState)(0),
            C = (0, c.Z)(E, 2),
            k = C[0],
            T = C[1],
            S = (0, n.useState)(0),
            I = (0, c.Z)(S, 2),
            F = I[0],
            j = I[1],
            Z = (0, n.useState)(0),
            P = (0, c.Z)(Z, 2),
            J = P[0],
            O = P[1],
            z = (0, n.useState)(0),
            R = (0, c.Z)(z, 2),
            A = R[0],
            M = R[1],
            D = 0 === y ? 0 : F / y,
            N = F + J,
            _ = 0 === y ? 0 : N / y,
            W = x()(t.dueDateInJSDate()).format("Do MMM yyyy h:mm:ss a"),
            q = t.numHrsToDueDate(A),
            B = (0, v.O)(y / q, 8)
          return (
            (0, n.useEffect)(
              function () {
                null != i &&
                  (w((0, g._)(i.initialDeposit)),
                  T((0, g._)(i.escrowAmount)),
                  j((0, g._)(i.creatorClaimed)),
                  O((0, g._)(i.creatorClaimable)),
                  M(Number(i.createdAt / 1000000n)))
              },
              [null === i || void 0 === i ? void 0 : i.updatedAt]
            ),
            n.createElement(
              a.gC,
              {
                pt: "30px",
                pb: "140px",
                mb: "0px",
                w: "100%",
                bgColor: "black_gray2",
                h: "100%",
                spacing: "26px"
              },
              n.createElement(
                a.gC,
                null,
                n.createElement(
                  a.Ug,
                  { left: "-16px", pos: "relative" },
                  n.createElement(
                    b.J2,
                    { trigger: "hover" },
                    n.createElement(
                      a.xv,
                      { color: "black" },
                      n.createElement(
                        b.xo,
                        null,
                        n.createElement(p.hQ, {
                          w: "18px",
                          h: "18px",
                          position: "relative",
                          mr: "8px",
                          color: "black"
                        })
                      )
                    ),
                    n.createElement(
                      b.yk,
                      { w: "400px" },
                      n.createElement(b.QH, null),
                      n.createElement(b.us, null),
                      n.createElement(
                        b.b,
                        { color: "black", pt: "28px", pb: "18px", px: "18px" },
                        "Creator receives a constant stream of payment until the due date. We suggest only using this payment type with creators you have worked with before."
                      )
                    )
                  ),
                  n.createElement(
                    a.X6,
                    {
                      bgColor: "black_3",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "semibold",
                      borderRadius: "24px",
                      w: "201px",
                      h: "47px",
                      align: "center",
                      pt: "13px"
                    },
                    "Beam Payment",
                    n.createElement(s.sN, {
                      ml: "8px",
                      fontSize: "22px",
                      mb: "6px"
                    })
                  )
                ),
                n.createElement(
                  u.Z,
                  {
                    href: "https://medium.com/contentfly-app-blog/beam-payment-protocol-enabling-real-time-income-for-creators-a15e46240134",
                    fontWeight: "medium",
                    fontSize: { base: "12px", md: "16px" }
                  },
                  "Learn More"
                )
              ),
              null != i &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    a.Ug,
                    { pt: "28px", spacing: "8px" },
                    n.createElement(d.x, {
                      tokenAmount: "0",
                      totalTokens: y,
                      title: "Buyer"
                    }),
                    n.createElement(m._, { value: "100", tooltipDesc: "Paid" }),
                    n.createElement(d.x, {
                      tokenAmount: k,
                      totalTokens: y,
                      title: "Escrow"
                    }),
                    n.createElement(m._, {
                      value: 100 * _,
                      tooltipDesc: "Beamed"
                    }),
                    n.createElement(d.x, {
                      tokenAmount: N,
                      totalTokens: y,
                      title: "You"
                    })
                  ),
                  n.createElement(
                    a.xv,
                    {
                      fontSize: { base: "12px", md: "14px" },
                      px: "10px",
                      color: "black_gray",
                      pb: "28px"
                    },
                    "The beam rate is ",
                    B,
                    " ICP per hour and the beam will end on ",
                    W,
                    " (Job Due Date)"
                  ),
                  n.createElement(
                    a.xu,
                    {
                      w: "362px",
                      h: "185px",
                      borderRadius: "25px",
                      bgColor: "black_2",
                      boxShadow: "2xl"
                    },
                    n.createElement(
                      a.Ug,
                      { h: "full" },
                      n.createElement(
                        a.xu,
                        {
                          h: "full",
                          borderRadius: "23px",
                          maxW: "50%",
                          w: "50%",
                          background: (function () {
                            var e = 100 * (1 - D)
                            return "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF "
                              .concat(e, "%, #B67BE4 ")
                              .concat(e, "%, #B67BE4 100%)")
                          })()
                        },
                        n.createElement(
                          a.gC,
                          {
                            h: "full",
                            color: "black_3",
                            align: "center",
                            pt: "26px",
                            spacing: "0px"
                          },
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "normal",
                              align: "center",
                              lineHeight: "24px"
                            },
                            "Amount Claimed"
                          ),
                          n.createElement(
                            a.xv,
                            {
                              fontSize: "22px",
                              fontWeight: "medium",
                              pt: "12px"
                            },
                            (0, v.O)(F, 6),
                            " ICP"
                          ),
                          n.createElement(
                            a.xv,
                            { fontSize: "14px", fontWeight: "light" },
                            "/",
                            (0, v.O)(y, 6),
                            " ICP Total"
                          )
                        )
                      ),
                      n.createElement(
                        a.gC,
                        { m: "0px", align: "center" },
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "16px",
                            fontWeight: "normal",
                            color: "white",
                            align: "center",
                            px: "15px",
                            lineHeight: "18px"
                          },
                          "Available to Claim"
                        ),
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "22px",
                            fontWeight: "medium",
                            color: "white"
                          },
                          (0, v.O)(J, 6),
                          " ICP"
                        ),
                        n.createElement(f.P, {
                          jobFlowObject: r,
                          identity: o,
                          numClaimableTokens: J,
                          isDisabled: 0 == J,
                          claimFuncGenerator: function (e) {
                            return e.creatorClaim
                          }
                        })
                      )
                    )
                  )
                )
            )
          )
        },
        w = r(33224),
        E = r(34076),
        C = function (e) {
          var t = e.jobFlowObject,
            r = e.identity,
            o = e.escrowContract,
            i = (0, n.useState)(0),
            l = (0, c.Z)(i, 2),
            u = l[0],
            s = l[1],
            h = (0, n.useState)(0),
            x = (0, c.Z)(h, 2),
            y = x[0],
            w = x[1],
            E = (0, n.useState)(0),
            C = (0, c.Z)(E, 2),
            k = C[0],
            T = C[1],
            S = (0, n.useState)(0),
            I = (0, c.Z)(S, 2),
            F = I[0],
            j = I[1],
            Z = 0 === u ? 0 : k / u
          return (
            (0, n.useEffect)(
              function () {
                null != o &&
                  (s((0, g._)(o.initialDeposit)),
                  w((0, g._)(o.escrowAmount + o.creatorClaimable)),
                  T((0, g._)(o.creatorClaimed)),
                  j((0, g._)(o.creatorClaimable)))
              },
              [null === o || void 0 === o ? void 0 : o.updatedAt]
            ),
            n.createElement(
              a.gC,
              {
                pt: "30px",
                pb: "140px",
                mb: "0px",
                w: "100%",
                bgColor: "black_gray2",
                h: "100%",
                spacing: "26px"
              },
              n.createElement(
                a.gC,
                null,
                n.createElement(
                  a.Ug,
                  { left: "-16px", pos: "relative" },
                  n.createElement(
                    b.J2,
                    { trigger: "hover" },
                    n.createElement(
                      a.xv,
                      { color: "black" },
                      n.createElement(
                        b.xo,
                        null,
                        n.createElement(p.hQ, {
                          w: "18px",
                          h: "18px",
                          position: "relative",
                          mr: "8px",
                          color: "black"
                        })
                      )
                    ),
                    n.createElement(
                      b.yk,
                      { w: "400px" },
                      n.createElement(b.QH, null),
                      n.createElement(b.us, null),
                      n.createElement(
                        b.b,
                        { color: "black", pt: "28px", pb: "18px", px: "18px" },
                        "Once the job is complete, the payment will be released to the Creator."
                      )
                    )
                  ),
                  n.createElement(
                    a.X6,
                    {
                      bgColor: "black_3",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "semibold",
                      borderRadius: "24px",
                      px: "16px",
                      w: "201px",
                      h: "47px",
                      align: "center",
                      pt: "13px"
                    },
                    "Lump Sum Payment"
                  )
                )
              ),
              null != o &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    a.Ug,
                    { pt: "28px", spacing: "8px" },
                    n.createElement(d.x, {
                      tokenAmount: "0",
                      totalTokens: u,
                      title: "Buyer"
                    }),
                    n.createElement(m._, { value: "100", tooltipDesc: "Paid" }),
                    n.createElement(d.x, {
                      tokenAmount: y,
                      totalTokens: u,
                      title: "Escrow"
                    }),
                    n.createElement(m._, {
                      value: 100 * Z,
                      tooltipDesc: "Claimed"
                    }),
                    n.createElement(d.x, {
                      tokenAmount: k,
                      totalTokens: u,
                      title: "You"
                    })
                  ),
                  n.createElement(
                    a.xv,
                    {
                      fontSize: { base: "12px", md: "14px" },
                      px: "10px",
                      color: "black_gray",
                      pb: "28px"
                    },
                    "You can claim the job payment, once the Buyer approves your job deliverable on the \u201cHandover\u201d page."
                  ),
                  n.createElement(
                    a.xu,
                    {
                      w: "182px",
                      h: "185px",
                      borderRadius: "25px",
                      bgColor: "black_2",
                      boxShadow: "2xl"
                    },
                    n.createElement(
                      a.M5,
                      { h: "100%" },
                      n.createElement(
                        a.gC,
                        null,
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "16px",
                            fontWeight: "normal",
                            color: "white",
                            lineHeight: "18px"
                          },
                          "Available to Claim"
                        ),
                        n.createElement(
                          a.xv,
                          {
                            fontSize: "22px",
                            fontWeight: "medium",
                            color: "white"
                          },
                          (0, v.O)(F, 6),
                          " ICP"
                        ),
                        n.createElement(f.P, {
                          jobFlowObject: t,
                          identity: r,
                          numClaimableTokens: F,
                          isDisabled: 0 == F,
                          claimFuncGenerator: function (e) {
                            return e.creatorClaim
                          }
                        })
                      )
                    )
                  )
                )
            )
          )
        },
        k = r(31619),
        T = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            c = e.switchToTab,
            u = e.identity,
            s = e.mutateJobDispute,
            p = new i.z(t),
            d = (0, l.Q)(null === r || void 0 === r ? void 0 : r.id(), u),
            m = d.escrowContract,
            f = d.isLoading,
            b = null == m ? null : new E.u(m),
            h = null === b || void 0 === b ? void 0 : b.isBeamPayment(),
            x = null === b || void 0 === b ? void 0 : b.isLumpSumPayment()
          return n.createElement(
            a.gC,
            {
              align: "center",
              px: "0px",
              pt: { base: "28px", md: "20px" },
              pb: "0px",
              spacing: "20px",
              h: "100%"
            },
            n.createElement(
              a.Ug,
              null,
              n.createElement(o.Z, {
                width: { base: "100%", md: "560px" },
                px: "20px",
                job: t,
                jobFlowObject: r,
                switchToTab: c
              }),
              n.createElement(k.d, {
                position: "absolute",
                right: "20px",
                jobFlowObject: r,
                identity: u,
                mutateJobDispute: s
              })
            ),
            (null == p || (null == m && f)) && n.createElement(w.j, null),
            null != p &&
              h &&
              n.createElement(y, {
                jobObject: p,
                jobFlowObject: r,
                identity: u,
                escrowContract: m
              }),
            null != p &&
              x &&
              n.createElement(C, {
                jobFlowObject: r,
                identity: u,
                escrowContract: m
              })
          )
        }
    },
    18268: function (e, t, r) {
      "use strict"
      r.d(t, {
        _: function () {
          return u
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(80011),
        l = r(64835),
        c = ["value", "tooltipDesc"],
        u = function (e) {
          var t = e.value,
            r = e.tooltipDesc,
            u = (0, a.Z)(e, c),
            s = (0, l.O)(t, 2)
          return o.createElement(
            i.iR,
            (0, n.Z)(
              {
                size: "lg",
                w: { base: "70px", md: "190px" },
                min: 0,
                max: 100,
                value: s
              },
              u,
              { isReadOnly: !0, cursor: "auto" }
            ),
            o.createElement(
              i.jz,
              {
                value: "50",
                textAlign: "center",
                fontSize: "12px",
                color: "black_3",
                mt: "16px",
                ml: "-50px",
                w: "100px"
              },
              s,
              "% ",
              r
            ),
            o.createElement(
              i.Uj,
              { bg: "black_gray", h: "15px", borderRadius: "15px" },
              o.createElement(i.Ms, {
                bg: "gradient.purple.8",
                borderRadius: "15px"
              })
            )
          )
        }
    },
    67930: function (e, t, r) {
      "use strict"
      r.d(t, {
        x: function () {
          return u
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(11972),
        l = r(64835),
        c = ["tokenAmount", "totalTokens", "title"],
        u = function (e) {
          var t = e.tokenAmount,
            r = e.totalTokens,
            u = e.title,
            s = (0, a.Z)(e, c),
            p = (0, l.O)(t, 6),
            d = (0, l.O)(r, 6)
          return o.createElement(
            i.gC,
            { color: "black_3" },
            o.createElement(
              i.xu,
              (0, n.Z)(
                {
                  w: { base: "76px", md: "170px" },
                  h: { base: "76px", md: "170px" },
                  borderRadius: { base: "12px", md: "25px" },
                  bgColor: "white",
                  boxShadow: "md",
                  align: "center",
                  px: "4px"
                },
                s
              ),
              o.createElement(
                i.M5,
                {
                  fontSize: { base: "14px", md: "22px" },
                  fontWeight: "medium",
                  h: "100%"
                },
                o.createElement(
                  i.gC,
                  null,
                  o.createElement(
                    i.xv,
                    {
                      fontSize: { base: "14px", md: "22px" },
                      fontWeight: "medium",
                      h: "100%"
                    },
                    p,
                    " ICP"
                  ),
                  o.createElement(
                    i.xv,
                    {
                      fontSize: { base: "9px", md: "14px" },
                      fontWeight: "light"
                    },
                    "/",
                    d,
                    " ICP Total"
                  )
                )
              )
            ),
            o.createElement(i.xv, { fontSize: { base: "12px", md: "16px" } }, u)
          )
        }
    },
    89324: function (e, t, r) {
      "use strict"
      r.d(t, {
        Q: function () {
          return f
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(8100),
        u = r(98400),
        s = r(23256),
        p = r(24686),
        d = r(31681),
        m = r(66985),
        f = function (e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            o = (0, l.useState)(!1),
            f = (0, a.Z)(o, 2),
            b = f[0],
            h = f[1],
            x = null != e && null != t,
            g = (0, u.oR)(s.Z),
            v = g.appContext.authProvider,
            y = (function () {
              var e = (0, n.Z)(
                i().mark(function e(r, n) {
                  var a, o, l
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != r && null != n) {
                              e.next = 2
                              break
                            }
                            return e.abrupt("return", null)
                          case 2:
                            return (
                              (e.prev = 2),
                              h(!0),
                              (e.next = 6),
                              (0, p.makeEscrowPaymentActor)(t, v)
                            )
                          case 6:
                            return (a = e.sent), (e.next = 9), a.loadEscrow(n)
                          case 9:
                            if (!(o = e.sent).ok) {
                              e.next = 13
                              break
                            }
                            return (l = o.ok), e.abrupt("return", l)
                          case 13:
                            throw new Error(m.default.flattenCandidError(o.err))
                          case 16:
                            ;(e.prev = 16),
                              (e.t0 = e.catch(2)),
                              m.default.error(e.t0)
                          case 19:
                            return (e.prev = 19), h(!1), e.finish(19)
                          case 22:
                            return e.abrupt("return", null)
                          case 23:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 16, 19, 22]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })(),
            w = { refreshInterval: 1e3 * r, errorRetryCount: 3 },
            E = (0, c.ZP)(x ? [d.xT.Escrow, e] : null, y, w),
            C = E.data,
            k = E.error,
            T = E.mutate
          return { escrowContract: C, isLoading: b, mutate: T, error: k }
        }
    },
    61413: function (e, t, r) {
      "use strict"
      r.d(t, {
        w: function () {
          return d
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(98400),
        u = r(23256),
        s = r(66985),
        p = r(24686),
        d = function (e) {
          var t = e.creatorPortfolios,
            r = e.creatorId,
            o = e.identity,
            d = (0, l.useState)(null),
            m = (0, a.Z)(d, 2),
            f = m[0],
            b = m[1],
            h = (0, c.oR)(u.Z)
          return (
            (0, l.useEffect)(
              function () {
                var e = (function () {
                    var e = (0, n.Z)(
                      i().mark(function e() {
                        var n
                        return i().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(n = t.find(function (e) {
                                    return (e.userId = r)
                                  }))
                                ) {
                                  e.next = 5
                                  break
                                }
                                b({
                                  userId: r,
                                  creatorName: n.portfolio.creatorName,
                                  portfolioId: n.portfolio.id
                                }),
                                  (e.next = 7)
                                break
                              case 5:
                                return (e.next = 7), a()
                              case 7:
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
                  a = (function () {
                    var e = (0, n.Z)(
                      i().mark(function e() {
                        var t, n, a
                        return i().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), null != r)) {
                                    e.next = 3
                                    break
                                  }
                                  return e.abrupt("return")
                                case 3:
                                  return (
                                    (e.next = 5),
                                    (0, p.makePortfolioActor)(
                                      o,
                                      h.appContext.authProvider
                                    )
                                  )
                                case 5:
                                  return (
                                    (t = e.sent),
                                    (e.next = 8),
                                    t.queryCreatorNameBasic(r)
                                  )
                                case 8:
                                  ;(n = e.sent).length > 0
                                    ? ((a = n[0]), b(a))
                                    : b(null),
                                    (e.next = 16)
                                  break
                                case 12:
                                  ;(e.prev = 12),
                                    (e.t0 = e.catch(0)),
                                    b(null),
                                    s.default.error(e.t0)
                                case 16:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 12]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                null != t && null != r && e()
              },
              [r, t]
            ),
            f
          )
        }
    },
    64975: function (e, t, r) {
      "use strict"
      r.d(t, {
        x: function () {
          return f
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(8100),
        u = r(98400),
        s = r(23256),
        p = r(24686),
        d = r(66985),
        m = r(31681),
        f = function (e, t) {
          var r = (0, l.useState)(!1),
            o = (0, a.Z)(r, 2),
            f = o[0],
            b = o[1],
            h = (0, l.useState)(!1),
            x = (0, a.Z)(h, 2),
            g = x[0],
            v = x[1],
            y = null != e && null != t,
            w = (0, u.oR)(s.Z),
            E = (function () {
              var e = (0, n.Z)(
                i().mark(function e(r, n) {
                  var a, o
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != r && null != n) {
                              e.next = 2
                              break
                            }
                            return e.abrupt("return", null)
                          case 2:
                            return (
                              (e.prev = 2),
                              b(!0),
                              (e.next = 6),
                              (0, p.makeJobDisputeActor)(
                                t,
                                w.appContext.authProvider
                              )
                            )
                          case 6:
                            return (
                              (a = e.sent),
                              (e.next = 9),
                              a.loadJobDisputeByJobFlowId(n.id)
                            )
                          case 9:
                            if (!(o = e.sent).ok) {
                              e.next = 12
                              break
                            }
                            return e.abrupt("return", o.ok)
                          case 12:
                            e.next = 17
                            break
                          case 14:
                            ;(e.prev = 14),
                              (e.t0 = e.catch(2)),
                              d.default.error(e.t0)
                          case 17:
                            return (e.prev = 17), b(!1), v(!0), e.finish(17)
                          case 21:
                            return e.abrupt("return", null)
                          case 22:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 14, 17, 21]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })(),
            C = (0, c.ZP)(y ? [m.xT.JobDispute, e] : null, E, {
              refreshInterval: 15e3,
              errorRetryCount: 3
            }),
            k = C.data,
            T = C.error
          return {
            jobDispute: k,
            isLoading: f,
            hasDisputeInit: g,
            mutate: C.mutate,
            error: T
          }
        }
    },
    31592: function (e, t, r) {
      "use strict"
      r.d(t, {
        M: function () {
          return f
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(8100),
        u = r(98400),
        s = r(23256),
        p = r(24686),
        d = r(66985),
        m = r(31681),
        f = function (e, t) {
          var r = (0, l.useState)(!1),
            o = (0, a.Z)(r, 2),
            f = o[0],
            b = o[1],
            h = (0, l.useState)(!1),
            x = (0, a.Z)(h, 2),
            g = x[0],
            v = x[1],
            y = null != e && null != t,
            w = (0, u.oR)(s.Z),
            E = w.user,
            C = (function () {
              var e = (0, n.Z)(
                i().mark(function e(r, n) {
                  var a, o
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != r && null != n) {
                              e.next = 2
                              break
                            }
                            return e.abrupt("return", null)
                          case 2:
                            return (
                              (e.prev = 2),
                              b(!0),
                              (e.next = 6),
                              (0, p.makeJobActor)(t, w.appContext.authProvider)
                            )
                          case 6:
                            return (
                              (a = e.sent),
                              (e.next = 9),
                              a.getMyJobFlowByJobId(E.id, n)
                            )
                          case 9:
                            if (!(o = e.sent).ok) {
                              e.next = 12
                              break
                            }
                            return e.abrupt("return", o.ok)
                          case 12:
                            e.next = 17
                            break
                          case 14:
                            ;(e.prev = 14),
                              (e.t0 = e.catch(2)),
                              d.default.error(e.t0)
                          case 17:
                            return (e.prev = 17), b(!1), v(!0), e.finish(17)
                          case 21:
                            return e.abrupt("return", null)
                          case 22:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 14, 17, 21]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })(),
            k = (0, c.ZP)(y ? [m.xT.JobFlow, e] : null, C, {
              refreshInterval: 7e3,
              errorRetryCount: 3
            }),
            T = k.data,
            S = k.error
          return {
            jobFlow: T,
            isLoading: f,
            hasJobFlowInit: g,
            mutate: k.mutate,
            error: S
          }
        }
    },
    79460: function (e, t, r) {
      "use strict"
      r.d(t, {
        B: function () {
          return i
        }
      })
      var n = r(67294),
        a = r(51815),
        o = r(15658),
        i = function (e) {
          var t = e.display,
            r = e.addRemoveMyJob,
            i = e.isProcessingJob,
            l = e.mx,
            c = e.isInMyJobs,
            u = e.children,
            s = null !== l && void 0 !== l ? l : "18px"
          return n.createElement(
            a.zx,
            {
              fontSize: { base: "13px", md: "15px" },
              fontWeight: "medium",
              bg: "gray_light7",
              color: "black",
              rightIcon: n.createElement(o.h_, {
                color: c ? "gray" : "purple_3"
              }),
              mx: s,
              display: t,
              onClick: r,
              isLoading: i
            },
            u
          )
        }
    },
    89515: function (e, t, r) {
      "use strict"
      r.d(t, {
        V: function () {
          return o
        }
      })
      var n = r(67294),
        a = r(11972),
        o = function (e) {
          var t = e.children
          return n.createElement(
            a.xv,
            {
              fontWeight: "normal",
              fontSize: "15px",
              color: "black",
              lineHeight: "164.84%",
              pb: "28px"
            },
            t
          )
        }
    },
    83434: function (e, t, r) {
      "use strict"
      r.d(t, {
        H: function () {
          return o
        }
      })
      var n = r(67294),
        a = r(11972),
        o = function (e) {
          var t = e.children
          return n.createElement(
            a.X6,
            { fontWeight: "bold", fontSize: "18px", color: "black_2" },
            t
          )
        }
    },
    2195: function (e, t, r) {
      "use strict"
      r.d(t, {
        _: function () {
          return l
        }
      })
      var n = r(67294),
        a = r(11163),
        o = r(25527),
        i = r(51815),
        l = function (e) {
          var t = e.title,
            r = e.description,
            l = e.isOpen,
            c = e.onClose,
            u = (0, a.useRouter)()
          return n.createElement(
            o.aR,
            { isOpen: l, onClose: c },
            n.createElement(
              o.dh,
              null,
              n.createElement(
                o._T,
                null,
                n.createElement(
                  o.fY,
                  { fontSize: "lg", fontWeight: "bold", color: "black" },
                  t
                ),
                n.createElement(o.iP, { color: "black" }, r),
                n.createElement(
                  o.xo,
                  null,
                  n.createElement(
                    i.zx,
                    {
                      color: "purple",
                      variant: "outline",
                      borderColor: "purple_3",
                      borderWidth: "1px",
                      _hover: { bg: "purple_light", color: "purple" },
                      onClick: function () {
                        u.push("/profile?tab=1", "/profile.html?tab=1")
                      },
                      mx: "12px"
                    },
                    "Create Portfolio"
                  ),
                  n.createElement(
                    i.zx,
                    { onClick: c, color: "black_2", mx: "12px" },
                    "Cancel"
                  )
                )
              )
            )
          )
        }
    },
    18883: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            G: function () {
              return s
            }
          })
          var a = r(86854),
            o = r(67294),
            i = r(88523),
            l = r(62980),
            c = r(96771),
            u = e([c])
          c = (u.then ? (await u)() : u)[0]
          var s = function (e) {
            var t = e.imageId,
              r = e.imageName,
              n = (0, i.qY)(),
              u = n.isOpen,
              s = n.onOpen,
              p = n.onClose,
              d = (0, o.useState)(!1),
              m = (0, a.Z)(d, 2),
              f = m[0],
              b = m[1]
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(c.o, {
                imageId: t,
                imageName: r,
                onClick: s,
                cursor: "pointer",
                w: "127px",
                h: "127px"
              }),
              u &&
                o.createElement(l.ZoomImageModal, {
                  isOpen: u,
                  onClose: p,
                  imageItem: { imageId: t },
                  isFullScreen: f,
                  setFullScreen: b,
                  ImageComponent: c.o
                })
            )
          }
          n()
        } catch (p) {
          n(p)
        }
      })
    },
    96771: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            o: function () {
              return p
            }
          })
          var a = r(87462),
            o = r(45987),
            i = r(67294),
            l = r(49162),
            c = r(76989),
            u = e([c])
          c = (u.then ? (await u)() : u)[0]
          var s = ["imageId", "imageName", "onClick", "cursor"],
            p = function (e) {
              var t = e.imageId,
                r = e.imageName,
                n = e.onClick,
                u = e.cursor,
                p = (0, o.Z)(e, s),
                d = (0, c.m3)(t)
              return i.createElement(
                l.Z,
                (0, a.Z)(
                  {
                    boxShadow: "lg",
                    borderRadius: "7px",
                    width: "100%",
                    cursor: u,
                    src: d,
                    alt: r,
                    onClick: n,
                    _hover: { boxShadow: "2xl" }
                  },
                  p
                )
              )
            }
          n()
        } catch (d) {
          n(d)
        }
      })
    },
    49439: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            x: function () {
              return c
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(7249),
            l = e([i])
          i = (l.then ? (await l)() : l)[0]
          var c = function (e) {
            var t = e.job,
              r = e.setHideBottomBar,
              n = e.otherUserId,
              l = e.identity,
              c = e.messagesLength
            return (
              (0, a.useEffect)(
                function () {
                  r(!0)
                },
                [1]
              ),
              a.createElement(
                o.xu,
                { py: "12px" },
                a.createElement(i.U, {
                  job: t,
                  otherUserId: n,
                  identity: l,
                  messagesLength: c,
                  showHeading: !1,
                  containerpy: "20px"
                })
              )
            )
          }
          n()
        } catch (u) {
          n(u)
        }
      })
    },
    80988: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return T
        }
      })
      var n = r(87462),
        a = r(86854),
        o = r(45987),
        i = r(67294),
        l = r(11972),
        c = r(56223),
        u = r(50828),
        s = r(64737),
        p = r(53854),
        d = ["isCompleted", "isActive"],
        m = function (e) {
          var t = e.isCompleted,
            r = e.isActive,
            a = (0, o.Z)(e, d)
          return i.createElement(
            l.Cd,
            (0, n.Z)(
              {
                size: "8",
                bg: t ? "blue_5" : "inherit",
                borderWidth: t ? "0" : "2px",
                borderColor: r ? "blue_5" : "inherit"
              },
              a
            ),
            t
              ? i.createElement(s.JO, {
                  as: p.dZ6,
                  color: "white",
                  boxSize: "5"
                })
              : i.createElement(l.Cd, {
                  bg: r ? "blue_5" : "border",
                  size: "3"
                })
          )
        },
        f = [
          "isActive",
          "isCompleted",
          "isLastStep",
          "isFirstStep",
          "title",
          "switchToTab"
        ],
        b = function (e) {
          var t = e.isActive,
            r = e.isCompleted,
            a = e.isLastStep,
            u = e.isFirstStep,
            s = e.title,
            p = e.switchToTab,
            d = (0, o.Z)(e, f)
          return i.createElement(
            c.xo,
            null,
            i.createElement(
              l.Kq,
              (0, n.Z)(
                {
                  spacing: "4",
                  direction: { base: "column", md: "column" },
                  flex: "1",
                  onClick: p
                },
                d
              ),
              i.createElement(
                l.Kq,
                {
                  spacing: "0",
                  align: "center",
                  direction: { base: "row", md: "row" }
                },
                i.createElement(l.iz, {
                  display: "initial",
                  orientation: "horizontal",
                  borderWidth: "1px",
                  borderColor: u ? "transparent" : r || t ? "blue_5" : "inherit"
                }),
                i.createElement(m, { isActive: t, isCompleted: r }),
                i.createElement(l.iz, {
                  orientation: "horizontal",
                  borderWidth: "1px",
                  borderColor: a ? "transparent" : r ? "blue_5" : "inherit"
                })
              ),
              i.createElement(
                l.Kq,
                { spacing: "0.5", pb: "0", align: "center" },
                i.createElement(
                  l.xv,
                  {
                    color: "black",
                    fontWeight: "medium",
                    fontSize: { base: "12px", lg: "15px" },
                    align: "center"
                  },
                  s
                )
              )
            )
          )
        },
        h = r(48954),
        x = r(36005),
        g = function (e) {
          var t = e.title,
            r = e.descArray,
            n = e.creatorType
          return i.createElement(
            c.yk,
            {
              border: "0px",
              borderRadius: "8px",
              w: { base: "360px", md: "100%" }
            },
            i.createElement(c.QH, null),
            i.createElement(c.us, null),
            i.createElement(
              c.b,
              {
                fontSize: "14px",
                fontWeight: "normal",
                color: "black",
                py: "22px",
                shadow: "2xl",
                border: "0",
                borderRadius: "8px",
                w: "100%"
              },
              i.createElement(
                l.gC,
                { spacing: "16px" },
                i.createElement(
                  l.X6,
                  {
                    align: "center",
                    fontSize: "15px",
                    fontWeight: "semibold",
                    color: "black_2"
                  },
                  x.ZP.template(t)({ creatorType: n })
                ),
                i.createElement(
                  l.QI,
                  { spacing: "12px", px: { base: "16px", md: "26px" } },
                  null === r || void 0 === r
                    ? void 0
                    : r.map(function (e, t) {
                        return i.createElement(
                          l.HC,
                          { key: t },
                          x.ZP.template(e)({ creatorType: n })
                        )
                      })
                )
              )
            )
          )
        },
        v = r(98400),
        y = r(23256),
        w = r(16830),
        E = r(31681),
        C = function (e, t, r, n, o, l, c) {
          var u = E.Op.CreatorSelected,
            s = E.Op.ApprovalRequested,
            p = E.Op.ChangesRequested,
            d = E.Op.Completed,
            m = E.Op.Disputed,
            f = e.createdBy == r.id,
            b = (0, i.useState)(0),
            h = (0, a.Z)(b, 2),
            x = h[0],
            g = h[1]
          return (
            (0, i.useEffect)(
              function () {
                null != t
                  ? (function (e) {
                      switch (e) {
                        case u:
                        case p:
                          g(3)
                          break
                        case s:
                          g(4)
                          break
                        case d:
                          g(5)
                          break
                        case m:
                          g(3)
                      }
                    })(t.state())
                  : g(f ? (c ? 2 : l ? 1 : 0) : o ? 2 : n ? 1 : 0)
              },
              [t, n, o, l, c]
            ),
            x
          )
        },
        k = ["job", "jobFlowObject", "switchToTab"],
        T = (0, u.Pi)(function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            u = e.switchToTab,
            s = (0, o.Z)(e, k),
            p = (0, v.oR)(y.Z),
            d = p.user,
            m = p.jobFlowTracker,
            f = t.createdBy == d.id,
            x = f ? h.VL : h.fB,
            T = t.id,
            S = m.isJobReviewed(T),
            I = m.isJobPitched(T),
            F = m.isJobShared(T),
            j = m.isJobReceivedPitch(T),
            Z = C(t, r, d, S, I, F, j),
            P = (function (e) {
              var t = e.maxStep,
                r = e.initialStep,
                n = void 0 === r ? 0 : r,
                o = (0, i.useState)(n),
                l = (0, a.Z)(o, 2),
                c = l[0],
                u = l[1],
                s = (0, i.useMemo)(
                  function () {
                    return c + 1 <= t
                  },
                  [c, t]
                ),
                p = (0, i.useMemo)(
                  function () {
                    return c - 1 >= 0
                  },
                  [c]
                ),
                d = (0, i.useCallback)(
                  function (e) {
                    var r = e instanceof Function ? e(c) : e
                    if (!(r >= 0 && r <= t)) throw new Error("Step not valid")
                    u(r)
                  },
                  [t, c]
                ),
                m = (0, i.useCallback)(
                  function () {
                    s &&
                      u(function (e) {
                        return e + 1
                      })
                  },
                  [s]
                ),
                f = (0, i.useCallback)(
                  function () {
                    p &&
                      u(function (e) {
                        return e - 1
                      })
                  },
                  [p]
                ),
                b = (0, i.useCallback)(function () {
                  u(0)
                }, [])
              return [
                c,
                {
                  goToNextStep: m,
                  goToPrevStep: f,
                  canGoToNextStep: s,
                  canGoToPrevStep: p,
                  setStep: d,
                  reset: b
                }
              ]
            })({ maxStep: x.length, initialStep: 0 }),
            J = (0, a.Z)(P, 2),
            O = J[0],
            z = J[1].setStep
          ;(0, i.useEffect)(
            function () {
              z(Z)
            },
            [Z]
          )
          var R = w.zM[t.creatorType],
            A = {
              0: E.IJ.Brief,
              1: E.IJ.Chat,
              2: E.IJ.Chat,
              3: E.IJ.Handover,
              4: E.IJ.Handover
            },
            M = function (e, t, r) {
              D(e, t, r) && u(A[e])
            },
            D = function (e, t, r) {
              return 2 === e && !f ? r : t || r
            },
            N = function (e, t, r) {
              return D(e, t, r) ? "pointer" : "auto"
            }
          return i.createElement(
            l.xu,
            (0, n.Z)({ bg: "white", minW: { base: "260px", md: "400px" } }, s),
            i.createElement(
              l.W2,
              { py: "4", px: "0" },
              i.createElement(
                l.Kq,
                { spacing: "0", direction: "row" },
                x.map(function (e, t) {
                  var r,
                    n,
                    a = O === t,
                    o = O > t
                  return i.createElement(
                    c.J2,
                    { trigger: "hover", key: t },
                    i.createElement(b, {
                      cursor: N(t, a, o),
                      title: e.title,
                      isActive: a,
                      isCompleted: o,
                      isFirstStep: 0 === t,
                      isLastStep: x.length === t + 1,
                      switchToTab: function () {
                        M(t, a, o)
                      }
                    }),
                    i.createElement(g, {
                      title:
                        null === (r = e.details) || void 0 === r
                          ? void 0
                          : r.longTitle,
                      descArray:
                        null === (n = e.details) || void 0 === n
                          ? void 0
                          : n.description,
                      creatorType: R
                    })
                  )
                })
              )
            )
          )
        })
    },
    908: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.r(t),
            r.d(t, {
              JobViewerContainer: function () {
                return K
              }
            })
          var a = r(15861),
            o = r(4942),
            i = r(86854),
            l = r(87462),
            c = r(45987),
            u = r(87757),
            s = r.n(u),
            p = r(67294),
            d = r(9008),
            m = r.n(d),
            f = r(11163),
            b = r(62639),
            h = r(88523),
            x = r(45607),
            g = r(20608),
            v = r(11972),
            y = r(51815),
            w = r(64737),
            E = r(96217),
            C = r(80585),
            k = r(2195),
            T = r(96984),
            S = r(55262),
            I = r(49439),
            F = r(60155),
            j = r(48954),
            Z = r(98400),
            P = r(23256),
            J = r(24686),
            O = r(66985),
            z = r(66897),
            R = r(5508),
            A = r(19938),
            M = r(74402),
            D = r(36561),
            N = r(82458),
            _ = r(53774),
            W = r(31592),
            q = r(29950),
            B = r(31681),
            U = r(90084),
            L = r(70815),
            H = r(86527),
            Y = r(89903),
            V = r(64975),
            $ = r(18224),
            Q = e([E, T, S, I])
          ;[E, T, S, I] = Q.then ? (await Q)() : Q
          var X = ["children"]
          function ee(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e)
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
          }
          function te(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? ee(Object(r), !0).forEach(function (t) {
                    ;(0, o.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : ee(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          }
          var G = function (e) {
              var t = e.children,
                r = (0, c.Z)(e, X)
              return p.createElement(
                b.x4,
                (0, l.Z)({ px: { base: "0px", md: "unset" }, pt: "0px" }, r),
                t
              )
            },
            K = function (e) {
              var t = e.job,
                r = e.gotoRoot,
                n = e.identity,
                o = e.logout,
                l = e.triggerAuthUpdate,
                c = e.setHideBottomBar,
                u = (0, p.useRef)(null),
                d = (0, f.useRouter)(),
                Q = (0, p.useState)(d.query.tab || 0),
                X = (0, i.Z)(Q, 2),
                K = X[0],
                ee = X[1],
                re = (0, p.useState)(!1),
                ne = (0, i.Z)(re, 2),
                ae = ne[0],
                oe = ne[1],
                ie = (0, p.useState)(null),
                le = (0, i.Z)(ie, 2),
                ce = le[0],
                ue = le[1],
                se = (0, p.useState)(0),
                pe = (0, i.Z)(se, 2),
                de = pe[0],
                me = pe[1],
                fe = (0, W.M)(t.id, n),
                be = fe.jobFlow,
                he = fe.hasJobFlowInit,
                xe = fe.mutate,
                ge = (0, p.useState)(null),
                ve = (0, i.Z)(ge, 2),
                ye = ve[0],
                we = ve[1],
                Ee = function (e) {
                  xe(te(te({}, be), {}, { state: e }), !1)
                },
                Ce = function (e) {
                  null != e ? xe(e, !1) : xe()
                },
                ke = (0, p.useState)([]),
                Te = (0, i.Z)(ke, 2),
                Se = Te[0],
                Ie = Te[1],
                Fe = (0, _.I)(Se).creatorPortfolios,
                je = (0, p.useState)(null),
                Ze = (0, i.Z)(je, 2),
                Pe = Ze[0],
                Je = Ze[1],
                Oe = (0, h.qY)(),
                ze = Oe.isOpen,
                Re = Oe.onOpen,
                Ae = Oe.onClose,
                Me = (0, h.qY)(),
                De = Me.isOpen,
                Ne = Me.onOpen,
                _e = Me.onClose,
                We = (0, Z.oR)(P.Z),
                qe = We.user,
                Be = We.appContext,
                Ue = Be.authProvider,
                Le = We.jobFlowTracker,
                He = (0, x.pm)()
              ;(0, p.useEffect)(
                function () {
                  var e = d.query.tab
                  null != e
                    ? (ee(parseInt(e)),
                      e == B.IJ.Brief && Le.addReviewedJob(t, qe.id))
                    : (ee(B.IJ.Brief), Le.addReviewedJob(t, qe.id))
                },
                [d.query.tab]
              ),
                (0, p.useEffect)(
                  function () {
                    if (null != ce) {
                      var e = d.pathname,
                        t = d.query.id,
                        r = d.query.tab,
                        n = "id="
                          .concat(t, "&tab=")
                          .concat(r, "&chatuserid=")
                          .concat(ce),
                        a = d.query.orgid
                      null != a && (n += "&orgid=".concat(a)),
                        d.push(
                          "".concat(e, "?").concat(n),
                          "".concat(e, ".html?").concat(n),
                          { shallow: !0 }
                        )
                    }
                  },
                  [ce]
                )
              var Ye = t.createdBy == qe.id,
                Ve =
                  (null === be || void 0 === be ? void 0 : be.creatorId) ==
                  qe.id,
                $e = null != be,
                Qe = Ye ? A.f : Ve ? M.d : null,
                Xe = $e ? (Ye ? U.e : Ve ? D.D : null) : null,
                Ge = null != be ? new N.c(be) : null,
                Ke = function (e) {
                  var r = Be.rootPageId,
                    n = "id=".concat(t.id, "&tab=").concat(e)
                  null != ce && (n += "&chatuserid=".concat(ce))
                  var a = d.query.orgid
                  null != a && (n += "&orgid=".concat(a)),
                    d.push(
                      "".concat(r, "?").concat(n),
                      "".concat(r, ".html?").concat(n),
                      { shallow: !0 }
                    )
                }
              ;(0, p.useEffect)(
                function () {
                  var e
                  null === u ||
                    void 0 === u ||
                    null === (e = u.current) ||
                    void 0 === e ||
                    e.scrollIntoView()
                },
                [u]
              )
              var et = (function () {
                  var e = (0, a.Z)(
                    s().mark(function e() {
                      var r
                      return s().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = Be.isJobInMyJobs(t.id) ? rt : tt),
                                (e.next = 3),
                                r()
                              )
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
                })(),
                tt = (function () {
                  var e = (0, a.Z)(
                    s().mark(function e() {
                      var r
                      return s().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (qe.hasPortfolio()) {
                                  e.next = 3
                                  break
                                }
                                return Re(), e.abrupt("return")
                              case 3:
                                return (
                                  (e.prev = 3),
                                  oe(!0),
                                  (e.next = 7),
                                  (0, J.makeJobActor)(n, Ue)
                                )
                              case 7:
                                return (
                                  (r = e.sent),
                                  (e.next = 10),
                                  r.addToMyJobs(qe.id, t.id, (0, R.$6)(Ue))
                                )
                              case 10:
                                e.sent.ok
                                  ? ((0, z.showToast)(
                                      He,
                                      "My Jobs",
                                      "We have successfully saved the job to My Jobs. \ud83d\ude0e",
                                      "success"
                                    ),
                                    Be.addJobToMyJobs(t.id))
                                  : (0, z.showStandardErrorMesg)(He),
                                  (e.next = 18)
                                break
                              case 14:
                                ;(e.prev = 14),
                                  (e.t0 = e.catch(3)),
                                  O.default.error(e.t0),
                                  (0, z.showStandardErrorMesg)(He)
                              case 18:
                                return (e.prev = 18), oe(!1), e.finish(18)
                              case 21:
                              case "end":
                                return e.stop()
                            }
                        },
                        e,
                        null,
                        [[3, 14, 18, 21]]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
                rt = (function () {
                  var e = (0, a.Z)(
                    s().mark(function e() {
                      var r
                      return s().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  oe(!0),
                                  (e.next = 4),
                                  (0, J.makeJobActor)(n, Ue)
                                )
                              case 4:
                                return (
                                  (r = e.sent),
                                  (e.next = 7),
                                  r.removeFromMyJobs(qe.id, t.id, (0, R.$6)(Ue))
                                )
                              case 7:
                                e.sent.ok
                                  ? ((0, z.showToast)(
                                      He,
                                      "My Jobs",
                                      "This job has been removed from My Jobs.",
                                      "success"
                                    ),
                                    Be.removeJobFromJobs(t.id))
                                  : (0, z.showStandardErrorMesg)(He),
                                  (e.next = 15)
                                break
                              case 11:
                                ;(e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  O.default.error(e.t0),
                                  (0, z.showStandardErrorMesg)(He)
                              case 15:
                                return (e.prev = 15), oe(!1), e.finish(15)
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
                nt = (function () {
                  var e = (0, a.Z)(
                    s().mark(function e(r) {
                      var a, o, i
                      return s().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  oe(!0),
                                  (e.next = 4),
                                  (0, J.makeJobActor)(n, Ue)
                                )
                              case 4:
                                return (
                                  (a = e.sent),
                                  (e.next = 7),
                                  a.changeJobStatus(
                                    t.id,
                                    (0, R.G8)(r),
                                    (0, R.$6)(Ue)
                                  )
                                )
                              case 7:
                                ;(o = e.sent).ok
                                  ? ((0, z.showToast)(
                                      He,
                                      "Job Status Change",
                                      "We have successfully changed the job status to  ".concat(
                                        (0, j.rn)(r).name,
                                        " \ud83d\udc4d\ud83c\udffc  "
                                      ),
                                      "success"
                                    ),
                                    (i = o.ok),
                                    (t.status = i))
                                  : (0, z.showStandardErrorMesg)(He),
                                  (e.next = 15)
                                break
                              case 11:
                                ;(e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  O.default.error(e.t0),
                                  (0, z.showStandardErrorMesg)(He)
                              case 15:
                                return (e.prev = 15), oe(!1), e.finish(15)
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
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
                at = (0, g.Sx)({ base: "Brief", xl: "Job Brief" }),
                ot = (0, g.Sx)({ base: "Workspace" }),
                it = (0, g.Sx)({ base: "Media", xl: "Shared Media" }),
                lt = (0, V.x)(be, n),
                ct = lt.jobDispute,
                ut = lt.mutate,
                st = null != ct ? new $.y(ct) : null,
                pt = null === st || void 0 === st ? void 0 : st.state(),
                dt =
                  (null === Ge || void 0 === Ge ? void 0 : Ge.isInDispute()) &&
                  pt == B.h0.Started,
                mt = pt == B.h0.Pending,
                ft = pt == B.h0.Resolved,
                bt = K == B.IJ.Brief || K == B.IJ.Handover
              return p.createElement(
                v.xu,
                { ref: u, overflowY: "auto" },
                p.createElement(
                  m(),
                  null,
                  p.createElement("title", null, t.jobName, " - Content Fly")
                ),
                p.createElement(
                  b.mQ,
                  {
                    isLazy: !0,
                    variant: "unstyled",
                    h: "100%",
                    onChange: Ke,
                    defaultIndex: K,
                    index: K
                  },
                  p.createElement(
                    v.kC,
                    { h: { base: "81px", md: "81px" } },
                    p.createElement(
                      v.Kq,
                      {
                        direction: { base: "column", md: "row" },
                        width: "100%",
                        spacing: "0px"
                      },
                      p.createElement(
                        v.Ug,
                        null,
                        p.createElement(y.hU, {
                          icon: p.createElement(w.JO, {
                            as: F.$Ku,
                            color: "purple_3",
                            fontSize: { base: "26px", md: "30px" }
                          }),
                          variant: "unstyled",
                          top: { base: "3px", md: "3px" },
                          left: { base: "2px", md: "12px" },
                          w: { base: "20px", md: "50px" },
                          onClick: r
                        }),
                        p.createElement(
                          q.$,
                          { label: t.jobName },
                          p.createElement(
                            v.X6,
                            {
                              fontSize: {
                                base: "20px",
                                md: "24px",
                                lg: "24px"
                              },
                              fontWeight: "semibold",
                              bg: "gradient.purple.5",
                              bgClip: "text",
                              textTransform: "capitalize",
                              pt: "0px",
                              pl: "10px",
                              isTruncated: !0,
                              cursor: "pointer",
                              onClick: r,
                              w: "100%",
                              maxW: {
                                base: "100%",
                                md: "160px",
                                lg: "240px",
                                xl: "350px",
                                "2xl": "420px"
                              }
                            },
                            t.jobName
                          )
                        )
                      ),
                      p.createElement(
                        v.Kq,
                        { direction: "row", width: "100%" },
                        p.createElement(
                          b.td,
                          {
                            pt: "10px",
                            pl: { md: "12px", lg: "20px", xl: "36px" }
                          },
                          p.createElement(C.e, null, at),
                          p.createElement(C.e, null, ot),
                          p.createElement(
                            C.e,
                            { display: { base: "flex", md: "none" } },
                            it
                          ),
                          null != Qe && p.createElement(C.e, null, "Handover"),
                          null != Xe && p.createElement(C.e, null, "Payment")
                        ),
                        p.createElement(v.LZ, {
                          display: { base: "flex", md: "none" }
                        }),
                        p.createElement(v.LZ, {
                          display: { base: "none", md: "flex", lg: "flex" }
                        }),
                        p.createElement(E.d, {
                          logout: o,
                          identity: n,
                          triggerAuthUpdate: l
                        })
                      )
                    )
                  ),
                  p.createElement(v.iz, {
                    h: "1px",
                    color: "gray_light",
                    display: { base: "none", md: "flex" }
                  }),
                  mt && p.createElement(H.i, null),
                  ft &&
                    bt &&
                    p.createElement(Y.u, {
                      buyerName: t.brand,
                      creatorPortfolios: Fe,
                      jobFlowObject: Ge,
                      identity: n,
                      jobDispute: ct,
                      job: t
                    }),
                  p.createElement(
                    b.nP,
                    { pt: "0px" },
                    p.createElement(
                      G,
                      { bgColor: "white" },
                      p.createElement(T.G, {
                        job: t,
                        jobFlowObject: Ge,
                        editJob: function () {
                          We.editingJob.updateFromJobModel(t),
                            d.push(
                              "/createjob?id=".concat(t.id),
                              "/createjob.html?id=".concat(t.id)
                            )
                        },
                        addRemoveMyJob: et,
                        switchToChatTab: function () {
                          Ye || qe.hasPortfolio() ? Ke(B.IJ.Chat) : Ne()
                        },
                        switchToTab: Ke,
                        isProcessingJob: ae,
                        changeStatus: nt,
                        setHideBottomBar: c
                      })
                    ),
                    p.createElement(
                      G,
                      { h: "100%", pb: "0" },
                      p.createElement(S.y, {
                        job: t,
                        addRemoveMyJob: et,
                        isProcessingJob: ae,
                        identity: n,
                        setHideBottomBar: c,
                        otherUserId: ce,
                        setOtherUserId: ue,
                        messagesLength: de,
                        setMessagesLength: me,
                        creatorPortfolios: Fe,
                        setCreatorUserIdArray: Ie,
                        switchToTab: Ke,
                        jobFlowObject: Ge,
                        hasJobFlowInit: he,
                        triggerReloadJobFlow: Ce,
                        setCandidJobFlowState: Ee,
                        mutateJobDispute: ut
                      })
                    ),
                    p.createElement(
                      G,
                      null,
                      p.createElement(I.x, {
                        job: t,
                        setHideBottomBar: c,
                        otherUserId: ce,
                        identity: n,
                        messagesLength: de,
                        showHeading: !1
                      })
                    ),
                    null != Qe &&
                      p.createElement(
                        G,
                        null,
                        p.createElement(Qe, {
                          identity: n,
                          job: t,
                          jobFlowObject: Ge,
                          hasJobFlowInit: he,
                          creatorPortfolios: Fe,
                          creatorUserIdArray: Se,
                          setCreatorUserIdArray: Ie,
                          setCandidJobFlowState: Ee,
                          setJobFlowClamState: function (e) {
                            xe(te(te({}, be), e), !1)
                          },
                          selectedUserId: Pe,
                          setSelectedUserId: Je,
                          triggerReloadJobFlow: Ce,
                          jobFlowCreatorBasic: ye,
                          setJobFlowCreatorBasic: we,
                          switchToTab: Ke,
                          mutateJobDispute: ut
                        })
                      ),
                    null != Xe &&
                      p.createElement(
                        G,
                        { w: "100%", h: "100%" },
                        p.createElement(Xe, {
                          job: t,
                          jobFlowObject: Ge,
                          switchToTab: Ke,
                          identity: n,
                          mutateJobDispute: ut
                        })
                      )
                  )
                ),
                p.createElement(k._, {
                  isOpen: ze,
                  onClose: Ae,
                  title: "Add to My Jobs",
                  description:
                    "A creator portfolio is needed in order to save job."
                }),
                p.createElement(k._, {
                  isOpen: De,
                  onClose: _e,
                  title: "Workspace",
                  description:
                    "A creator portfolio is needed in order to pitch."
                }),
                dt &&
                  p.createElement(L.z, {
                    creatorPortfolios: Fe,
                    job: t,
                    jobFlowObject: Ge,
                    identity: n,
                    jobDispute: ct,
                    mutateJobDispute: ut
                  })
              )
            }
          n()
        } catch (ee) {
          n(ee)
        }
      })
    },
    86812: function (e, t, r) {
      "use strict"
      r.d(t, {
        I: function () {
          return l
        }
      })
      var n = r(45987),
        a = r(67294),
        o = r(11972),
        i = ["title", "content", "pt", "children"],
        l = function (e) {
          var t = e.title,
            r = e.content,
            l = e.pt,
            c = e.children,
            u = (0, n.Z)(e, i)
          return a.createElement(
            a.Fragment,
            null,
            r &&
              a.createElement(
                o.X6,
                {
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: "black_2",
                  pb: "24px",
                  pt: l,
                  others: u
                },
                t,
                a.createElement(
                  o.xv,
                  {
                    fontSize: "15px",
                    fontWeight: "light",
                    as: "span",
                    px: "4px"
                  },
                  r
                ),
                c
              )
          )
        }
    },
    61071: function (e, t, r) {
      "use strict"
      r.d(t, {
        D: function () {
          return g
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(86854),
        i = r(50715),
        l = r(51815),
        c = r(15658),
        u = r(23681),
        s = r(48954),
        p = function (e) {
          var t = e.display,
            r = e.isDraft,
            p = e.status,
            d = e.changeStatus,
            m = e.isProcessingJob,
            f = p == s.By.started
          return n.createElement(
            a.Ug,
            { bg: "white", display: t },
            !f &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(a.LZ, null),
                n.createElement(
                  a.xu,
                  null,
                  !r &&
                    n.createElement(
                      i.v2,
                      null,
                      n.createElement(
                        i.j2,
                        {
                          as: l.zx,
                          isLoading: m,
                          bg: "gray_light7",
                          color: "black",
                          fontSize: { base: "13px", md: "15px" },
                          fontWeight: "medium",
                          rightIcon: n.createElement(c.G6, { fontSize: "7px" })
                        },
                        "Status: ",
                        (0, s.rn)(p).name
                      ),
                      n.createElement(
                        i.qy,
                        null,
                        Object.entries(s.By).map(function (e) {
                          var t = (0, o.Z)(e, 2),
                            r = t[0],
                            a = t[1]
                          return (
                            r != p &&
                            (0, s.rn)(a).selection &&
                            n.createElement(
                              u.O,
                              {
                                key: r,
                                onClick: function () {
                                  return d(r)
                                }
                              },
                              "Change to ",
                              (0, s.rn)(a).name
                            )
                          )
                        })
                      )
                    ),
                  r &&
                    n.createElement(
                      l.zx,
                      {
                        isDisabled: !0,
                        color: "black",
                        fontSize: { base: "13px", md: "15px" },
                        fontWeight: "medium"
                      },
                      "Job Status: ",
                      (0, s.rn)(p).name
                    )
                )
              )
          )
        },
        d = function (e) {
          var t = e.display,
            r = e.editJob,
            a = e.children
          return n.createElement(
            l.zx,
            {
              fontSize: { base: "13px", md: "15px" },
              fontWeight: "medium",
              bg: "gray_light7",
              color: "black",
              rightIcon: n.createElement(c.dY, { color: "purple_3" }),
              display: t,
              onClick: r
            },
            a
          )
        },
        m = function (e) {
          var t = e.display,
            r = e.children,
            a = e.switchToChatTab
          return n.createElement(
            l.zx,
            {
              display: t,
              fontSize: { base: "13px", md: "15px" },
              fontWeight: "medium",
              color: "purple",
              variant: "outline",
              borderColor: "purple_3",
              borderWidth: "1px",
              rightIcon: n.createElement(c.kB, { color: "purple_3" }),
              _hover: { bg: "purple_light", color: "purple" },
              onClick: a
            },
            r
          )
        },
        f = r(79460),
        b = r(23256),
        h = r(98400),
        x = r(1764),
        g = function (e) {
          var t = e.display,
            r = e.editJob,
            o = e.addRemoveMyJob,
            i = e.switchToChatTab,
            l = e.jobModel,
            c = e.changeStatus,
            u = e.isProcessingJob,
            g = e.py,
            v = (0, h.oR)(b.Z),
            y = v.user,
            w = v.appContext,
            E = v.jobFlowTracker,
            C = new x.z(l),
            k = w.isJobInMyJobs(C.id()),
            T = C.isCreatedBy(y.id),
            S = function () {
              return C.status()
            }
          return n.createElement(
            a.M5,
            { py: g, px: "12px" },
            T &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  d,
                  { display: t, editJob: r },
                  "Edit Job Brief"
                ),
                n.createElement(p, {
                  display: t,
                  isDraft: C.isDraft(),
                  status: S(),
                  changeStatus: c,
                  isProcessingJob: u
                })
              ),
            (function () {
              var e = S() == s.By.started,
                t = E.isJobPitched(C.id())
              return !(e || t || T)
            })() &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  m,
                  { display: t, switchToChatTab: i },
                  "Pitch Your Idea"
                ),
                n.createElement(
                  f.B,
                  {
                    display: t,
                    addRemoveMyJob: o,
                    isProcessingJob: u,
                    isInMyJobs: k
                  },
                  k ? "Unsave" : "Save"
                )
              )
          )
        }
    },
    96984: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            G: function () {
              return p
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(20608),
            l = r(26533),
            c = r(81734),
            u = r(6278),
            s = e([c, u])
          ;[c, u] = s.then ? (await s)() : s
          var p = function (e) {
            var t = e.job,
              r = e.jobFlowObject,
              n = e.editJob,
              s = e.addRemoveMyJob,
              p = e.switchToChatTab,
              d = e.switchToTab,
              m = e.isProcessingJob,
              f = e.changeStatus,
              b = e.setHideBottomBar
            return (
              (0, a.useEffect)(function () {
                b(!1)
              }),
              a.createElement(
                o.gC,
                {
                  align: "left",
                  px: { base: "12px", md: "35px" },
                  py: { base: "20px", md: "20px" }
                },
                a.createElement(l.z, {
                  job: t,
                  editJob: n,
                  addRemoveMyJob: s,
                  switchToChatTab: p,
                  switchToTab: d,
                  isProcessingJob: m,
                  changeStatus: f,
                  jobFlowObject: r
                }),
                a.createElement(o.iz, null),
                a.createElement(
                  o.Ug,
                  { align: "start" },
                  a.createElement(u.a, {
                    job: t,
                    editJob: n,
                    addRemoveMyJob: s,
                    switchToChatTab: p,
                    isProcessingJob: m,
                    changeStatus: f
                  }),
                  a.createElement(o.iz, {
                    orientation: "vertical",
                    h: "800px",
                    display: { base: "none", md: "block" }
                  }),
                  a.createElement(
                    i.di,
                    { above: "md" },
                    a.createElement(c.l, { job: t })
                  )
                )
              )
            )
          }
          n()
        } catch (d) {
          n(d)
        }
      })
    },
    26533: function (e, t, r) {
      "use strict"
      r.d(t, {
        z: function () {
          return u
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(61071),
        i = r(80988),
        l = r(58648),
        c = r(16830),
        u = function (e) {
          var t = e.job,
            r = e.editJob,
            u = e.addRemoveMyJob,
            s = e.switchToChatTab,
            p = e.switchToTab,
            d = e.isProcessingJob,
            m = e.changeStatus,
            f = e.jobFlowObject,
            b = c.zM[t.creatorType]
          return n.createElement(
            a.xu,
            null,
            n.createElement(
              a.Ug,
              null,
              n.createElement(i.Z, {
                width: { base: "100%", md: "560px" },
                px: "12px",
                job: t,
                jobFlowObject: f,
                switchToTab: p
              }),
              n.createElement(a.LZ, null),
              n.createElement(o.D, {
                editJob: r,
                addRemoveMyJob: u,
                switchToChatTab: s,
                isProcessingJob: d,
                changeStatus: m,
                jobModel: t,
                display: { base: "none", md: "block" }
              }),
              n.createElement(l.O, {
                creatorType: b,
                jobModel: t,
                display: { base: "none", md: "block" }
              })
            )
          )
        }
    },
    6278: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            a: function () {
              return y
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(20608),
            l = r(59876),
            c = r(81734),
            u = r(61071),
            s = r(83434),
            p = r(89515),
            d = r(70216),
            m = r(18883),
            f = r(44518),
            b = r(91349),
            h = r(58648),
            x = r(16830),
            g = r(60953),
            v = e([c, m, b])
          ;[c, m, b] = v.then ? (await v)() : v
          var y = function (e) {
            var t = e.job,
              r = e.editJob,
              n = e.addRemoveMyJob,
              v = e.switchToChatTab,
              y = e.isProcessingJob,
              w = e.changeStatus,
              E = x.zM[t.creatorType]
            return a.createElement(
              o.gC,
              {
                w: { base: "full", md: "75%" },
                align: "left",
                spacing: "10px",
                pr: { base: "unset", md: "12px" },
                pb: { base: "100px", md: "0px" }
              },
              a.createElement(
                i.c,
                { above: "md" },
                a.createElement(c.l, { job: t })
              ),
              a.createElement(o.iz, {
                display: { base: "block", md: "none" },
                py: "12px"
              }),
              a.createElement(u.D, {
                display: { base: "block", md: "none" },
                editJob: r,
                addRemoveMyJob: n,
                switchToChatTab: v,
                isProcessingJob: y,
                changeStatus: w,
                jobModel: t
              }),
              a.createElement(
                o.M5,
                null,
                a.createElement(h.O, {
                  creatorType: E,
                  jobModel: t,
                  display: { base: "block", md: "none" },
                  py: { base: "20px", md: "0px" }
                })
              ),
              a.createElement(s.H, null, "What we need"),
              a.createElement(p.V, null, t.whatWeNeed),
              a.createElement(s.H, null, "About"),
              a.createElement(p.V, null, t.aboutBrand),
              a.createElement(s.H, null, "Industry"),
              a.createElement(p.V, null, t.industry),
              "" != t.futurePlan &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(s.H, null, "Future Job Plan"),
                  a.createElement(p.V, null, t.futurePlan)
                ),
              (t.preferredStyledImages.length > 0 ||
                "" != t.preferredStyledWebsite) &&
                a.createElement(s.H, null, "Inspirations"),
              t.preferredStyledImages.length > 0 &&
                a.createElement(
                  o.MI,
                  {
                    minH: "140px",
                    minChildWidth: "107px",
                    spacing: { base: "6px", sm: "8px" },
                    align: "center"
                  },
                  t.preferredStyledImages.map(function (e) {
                    return a.createElement(m.G, {
                      key: e.imageId,
                      imageId: e.imageId,
                      imageName: e.name
                    })
                  })
                ),
              "" != t.preferredStyledWebsite &&
                a.createElement(
                  o.xu,
                  { pb: "12px" },
                  a.createElement(
                    d.Z,
                    {
                      href: (0, g.c)(t.preferredStyledWebsite),
                      bg: "gradient.purple.5",
                      bgClip: "text",
                      _hover: { bg: "gradient.purple.2", bgClip: "text" }
                    },
                    t.preferredStyledWebsite,
                    a.createElement(l.h0, {
                      ml: "6px",
                      mb: "2px",
                      color: "purple"
                    })
                  )
                ),
              t.additionalDocs.length > 0 &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(s.H, null, "Documents"),
                  a.createElement(
                    o.MI,
                    {
                      minH: "200px",
                      minChildWidth: "107px",
                      spacing: { base: "6px", sm: "8px" },
                      align: "center"
                    },
                    t.additionalDocs.map(function (e) {
                      return a.createElement(f.D, {
                        key: e.fileId,
                        fileId: e.fileId,
                        fileName: e.name,
                        loadFileFunc: b.J
                      })
                    })
                  )
                )
            )
          }
          n()
        } catch (w) {
          n(w)
        }
      })
    },
    81734: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            l: function () {
              return g
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(25927),
            l = r(2700),
            c = r(16830),
            u = r(76989),
            s = r(1764),
            p = r(70216),
            d = r(59876),
            m = r(86812),
            f = r(30381),
            b = r.n(f),
            h = r(15658),
            x = e([u])
          u = (x.then ? (await x)() : x)[0]
          var g = function (e) {
            var t,
              r = e.job,
              n = new s.z(r),
              f = (0, u.RL)(r.profileImageId),
              x = c.zM[r.creatorType],
              g =
                null === (t = c.vG[r.creatorType]) || void 0 === t
                  ? void 0
                  : t[r.skill],
              v = b()(n.dueDateInJSDate()).format("Do MMM yyyy")
            return a.createElement(
              o.gC,
              {
                w: { base: "100%", md: "300px", lg: "400px" },
                minW: "260px",
                h: "100%",
                align: "left",
                p: { base: "unset", sm: "unset", md: "20px", lg: "30px" }
              },
              a.createElement(
                o.Ug,
                { mb: "30px" },
                a.createElement(i.qE, {
                  w: "64px",
                  h: "64px",
                  name: r.brand,
                  src: f,
                  mr: "10px"
                }),
                a.createElement(
                  o.xv,
                  {
                    fontWeight: "bold",
                    fontSize: "15px",
                    bg: "gradient.purple.5",
                    bgClip: "text"
                  },
                  r.brand
                )
              ),
              a.createElement(m.I, { title: "Requiring:", content: x }),
              a.createElement(m.I, { title: "Skills:", content: g }),
              a.createElement(m.I, {
                title: "Target Audience:",
                content: r.targetAudience
              }),
              a.createElement(m.I, { title: "Due Date:", content: v }),
              a.createElement(
                o.Ug,
                { spacing: "8px", color: "black_2" },
                a.createElement(
                  o.X6,
                  { fontWeight: "bold", fontSize: "15px" },
                  "Budget:"
                ),
                a.createElement(
                  o.xv,
                  { fontSize: "18px", fontWeight: "medium" },
                  n.budget()
                ),
                a.createElement(
                  l.Vp,
                  {
                    size: "lg",
                    bg: "white",
                    borderColor: "black_3",
                    borderWidth: "1px",
                    borderRadius: "full"
                  },
                  a.createElement(h.cD, {
                    h: "30x",
                    w: "41px",
                    color: "black_3"
                  }),
                  " ICP"
                )
              ),
              a.createElement(o.iz, null),
              a.createElement(m.I, {
                title: "Deliverable Format:",
                content: r.deliverableMedia,
                pt: "24px"
              }),
              a.createElement(m.I, {
                title: "Preferred Tools:",
                content: r.preferredTools
              }),
              a.createElement(
                p.Z,
                {
                  display: "block",
                  href: "copyright.html",
                  bg: "gradient.purple.5",
                  bgClip: "text",
                  _hover: { bg: "gradient.purple.2", bgClip: "text" },
                  pb: "6px"
                },
                "Copyright Statement",
                a.createElement(d.h0, { ml: "6px", mb: "2px", color: "purple" })
              )
            )
          }
          n()
        } catch (v) {
          n(v)
        }
      })
    },
    58648: function (e, t, r) {
      "use strict"
      r.d(t, {
        O: function () {
          return x
        }
      })
      var n = r(87462),
        a = r(15861),
        o = r(45987),
        i = r(87757),
        l = r.n(i),
        c = r(67294),
        u = r(88523),
        s = r(11972),
        p = r(42273),
        d = r(1764),
        m = r(98400),
        f = r(23256),
        b = r(53918),
        h = ["creatorType", "jobModel"],
        x = function (e) {
          var t = e.creatorType,
            r = e.jobModel,
            i = (0, o.Z)(e, h),
            x = (0, u.qY)(),
            g = x.isOpen,
            v = x.onOpen,
            y = x.onClose,
            w = (0, m.oR)(f.Z),
            E = w.user,
            C = w.jobFlowTracker,
            k = new d.z(r).isCreatedBy(E.id),
            T = window.location.href,
            S = "".concat(r.jobName, " - Content Fly"),
            I = 'I would like to share the job "'.concat(
              r.jobName,
              '" posted on Content Fly to you.'
            ),
            F = (function () {
              var e = (0, a.Z)(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!navigator || !navigator.share) {
                            e.next = 5
                            break
                          }
                          return (e.next = 3), Z()
                        case 3:
                          e.next = 6
                          break
                        case 5:
                          j()
                        case 6:
                          C.addSharedJob(r, E.id)
                        case 7:
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
            j = function () {
              v()
            },
            Z = (function () {
              var e = (0, a.Z)(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), navigator.share({ text: S, url: T })
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
            })()
          return c.createElement(
            s.xu,
            (0, n.Z)(
              {
                w: { base: "100%", md: "inherit" },
                maxW: { base: "480px", md: "inherit" }
              },
              i
            ),
            c.createElement(
              s.X6,
              {
                color: "black_3",
                align: "center",
                size: "sm",
                fontWeight: "normal",
                pb: "10px"
              },
              k
                ? "Share to find a ".concat(t, " in your community")
                : "Know an awesome ".concat(t, " for this job? ")
            ),
            c.createElement(
              s.M5,
              {
                bgColor: "black_3",
                py: "16px",
                borderRadius: "7px",
                verticalAlign: "center"
              },
              c.createElement(
                p.Z,
                {
                  h: "40px",
                  w: { base: "128px", lg: "140px", xl: "180px" },
                  m: "0px",
                  size: "lg",
                  fontWeight: { base: "semibold", xl: "bold" },
                  mx: { base: "10px", xl: "16px" },
                  onClick: F
                },
                "Share Job"
              )
            ),
            c.createElement(b.C, {
              url: T,
              title: S,
              body: I,
              isOpen: g,
              onClose: y
            })
          )
        }
    },
    77992: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            i: function () {
              return m
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(2700),
            l = r(15658),
            c = r(1764),
            u = r(30381),
            s = r.n(u),
            p = r(5256),
            d = e([p])
          p = (d.then ? (await d)() : d)[0]
          var m = function (e) {
            var t = e.job,
              r = e.creatorPortfolio,
              n = e.hasJobFlowInit,
              u = e.jobFlowObject,
              d = e.triggerReloadJobFlow,
              m = e.setCandidJobFlowState,
              f = e.identity,
              b = e.selectedUserId,
              h = new c.z(t),
              x = s()(h.dueDateInJSDate()).format("Do MMM yyyy")
            return a.createElement(
              o.gC,
              {
                h: "260px",
                overflowY: "auto",
                align: "left",
                spacing: "23px",
                color: "black_2"
              },
              a.createElement(
                o.xu,
                null,
                a.createElement(
                  o.X6,
                  { fontWeight: "bold", fontSize: "15px", pb: "8px" },
                  "Due Date:"
                ),
                a.createElement(o.xv, { fontSize: "25px" }, x)
              ),
              a.createElement(
                o.xu,
                null,
                a.createElement(
                  o.X6,
                  { fontWeight: "bold", fontSize: "15px", pb: "8px" },
                  "Budget:"
                ),
                a.createElement(
                  o.Ug,
                  { spacing: "2px" },
                  a.createElement(
                    o.xv,
                    { fontSize: "25px", pr: "14px" },
                    h.budget()
                  ),
                  a.createElement(
                    i.Vp,
                    {
                      size: "lg",
                      bg: "white",
                      borderColor: "black_3",
                      borderWidth: "1px",
                      borderRadius: "full",
                      mx: "12px"
                    },
                    a.createElement(l.cD, {
                      h: "30x",
                      w: "41px",
                      color: "black_3"
                    }),
                    " ICP"
                  )
                )
              ),
              n &&
                null == u &&
                a.createElement(p.V, {
                  jobObject: h,
                  selectedUserId: b,
                  creatorPortfolio: r,
                  identity: f,
                  setCandidJobFlowState: m,
                  triggerReloadJobFlow: d
                })
            )
          }
          n()
        } catch (f) {
          n(f)
        }
      })
    },
    17348: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Y: function () {
              return g
            }
          })
          var a = r(86854),
            o = r(67294),
            i = r(11972),
            l = r(50715),
            c = r(51815),
            u = r(25927),
            s = r(59876),
            p = r(76989),
            d = r(44982),
            m = r(43650),
            f = r(70216),
            b = r(80988),
            h = r(31619),
            x = e([p, m])
          ;[p, m] = x.then ? (await x)() : x
          var g = function (e) {
            var t = e.job,
              r = e.creatorPortfolios,
              n = e.selectedUserId,
              x = e.setSelectedUserId,
              g = e.addRemoveMyJob,
              v = e.isProcessingJob,
              y = e.jobFlowObject,
              w = e.switchToTab,
              E = e.identity,
              C = e.mutateJobDispute,
              k = (0, o.useState)(null),
              T = (0, a.Z)(k, 2),
              S = T[0],
              I = T[1],
              F = (0, p.RC)(
                null === S || void 0 === S ? void 0 : S.thumbImageId
              ),
              j = r.filter(function (e) {
                return e.userId != n
              })
            return (
              (0, o.useEffect)(
                function () {
                  var e = r.find(function (e) {
                    return e.userId == n
                  })
                  I(null === e || void 0 === e ? void 0 : e.portfolio)
                },
                [r, n]
              ),
              o.createElement(
                i.xu,
                { px: { base: "8px", md: "35px" }, pb: "6px", pt: "14px" },
                o.createElement(
                  i.Ug,
                  { pb: "10px" },
                  o.createElement(
                    i.kC,
                    {
                      wrap: { base: "wrap-reverse", md: "nowrap" },
                      pl: "0px",
                      pr: { base: "0px", md: "4px" },
                      align: "center"
                    },
                    o.createElement(
                      i.xu,
                      null,
                      o.createElement(
                        l.v2,
                        null,
                        o.createElement(
                          l.j2,
                          {
                            as: c.zx,
                            variant: "outline",
                            rightIcon: o.createElement(s.v4, null),
                            h: { base: "46px", md: "58px" }
                          },
                          o.createElement(
                            i.Ug,
                            null,
                            o.createElement(u.qE, {
                              w: "38px",
                              h: "38px",
                              name:
                                null === S || void 0 === S
                                  ? void 0
                                  : S.creatorName,
                              src: F
                            }),
                            o.createElement(
                              i.xv,
                              {
                                fontSize: {
                                  base: "16px",
                                  md: "18px",
                                  lg: "18px"
                                },
                                fontWeight: "medium",
                                bg: "gradient.purple.5",
                                bgClip: "text",
                                textTransform: "capitalize",
                                noOfLines: 1,
                                mr: { base: "6px", md: "12px" }
                              },
                              null === S || void 0 === S
                                ? void 0
                                : S.creatorName
                            )
                          )
                        ),
                        j.length > 0 &&
                          o.createElement(
                            l.qy,
                            null,
                            j.map(function (e, t) {
                              return o.createElement(m.X, {
                                key: t,
                                userId: e.userId,
                                portfolio: e.portfolio,
                                setSelectedUserId: x
                              })
                            })
                          )
                      )
                    ),
                    o.createElement(
                      f.Z,
                      {
                        href: "/p.html?id=".concat(
                          null === S || void 0 === S ? void 0 : S.id
                        ),
                        textDecoration: "none",
                        _hover: {
                          textDecoration: "underline",
                          textDecorationColor: "purple_3"
                        }
                      },
                      o.createElement(s.h0, {
                        color: "purple",
                        fontSize: "22px",
                        ml: "6px"
                      })
                    ),
                    o.createElement(b.Z, {
                      width: { base: "100%", md: "560px" },
                      px: { base: "0px", md: "20px", lg: "40px" },
                      job: t,
                      jobFlowObject: y,
                      switchToTab: w
                    }),
                    o.createElement(h.d, {
                      position: "absolute",
                      right: "20px",
                      jobFlowObject: y,
                      identity: E,
                      mutateJobDispute: C
                    })
                  ),
                  o.createElement(i.LZ, null),
                  o.createElement(d.x, {
                    job: t,
                    addRemoveMyJob: g,
                    isProcessingJob: v
                  })
                )
              )
            )
          }
          n()
        } catch (v) {
          n(v)
        }
      })
    },
    52014: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            Q: function () {
              return d
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(25927),
            l = r(44982),
            c = r(76989),
            u = r(80988),
            s = r(31619),
            p = e([c])
          c = (p.then ? (await p)() : p)[0]
          var d = function (e) {
            var t = e.job,
              r = e.addRemoveMyJob,
              n = e.isProcessingJob,
              p = e.jobFlowObject,
              d = e.switchToTab,
              m = e.identity,
              f = e.mutateJobDispute,
              b = (0, c.RL)(t.profileImageId)
            return a.createElement(
              o.xu,
              { px: { base: "8px", md: "35px" }, pb: "6px", pt: "14px" },
              a.createElement(
                o.Ug,
                { pb: "10px" },
                a.createElement(
                  o.kC,
                  {
                    wrap: { base: "wrap-reverse", md: "nowrap" },
                    pl: "0px",
                    pr: { base: "0px", md: "4px" },
                    align: "center"
                  },
                  a.createElement(
                    o.xv,
                    {
                      fontSize: "20px",
                      fontWeight: "bold",
                      bg: "gradient.purple.5",
                      bgClip: "text",
                      textTransform: "capitalize",
                      noOfLines: 3,
                      mr: "0px",
                      maxW: "200px"
                    },
                    t.brand
                  ),
                  a.createElement(i.qE, {
                    w: { base: "50px", md: "64px" },
                    h: { base: "50px", md: "64px" },
                    name: t.brand,
                    src: b
                  }),
                  a.createElement(u.Z, {
                    width: { base: "100%", md: "560px" },
                    px: { base: "0px", md: "20px", lg: "40px" },
                    job: t,
                    jobFlowObject: p,
                    switchToTab: d
                  }),
                  a.createElement(
                    o.Ug,
                    { position: "absolute", right: "20px" },
                    a.createElement(l.x, {
                      job: t,
                      addRemoveMyJob: r,
                      isProcessingJob: n
                    }),
                    a.createElement(s.d, {
                      jobFlowObject: p,
                      identity: m,
                      mutateJobDispute: f
                    })
                  )
                )
              )
            )
          }
          n()
        } catch (m) {
          n(m)
        }
      })
    },
    34016: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            T: function () {
              return J
            }
          })
          var a = r(15861),
            o = r(86854),
            i = r(87757),
            l = r.n(i),
            c = r(67294),
            u = r(5152),
            s = r.n(u),
            p = r(30381),
            d = r.n(p),
            m = r(45607),
            f = r(11972),
            b = r(84597),
            h = r(42273),
            x = r(98438),
            g = r(15658),
            v = r(24686),
            y = r(5985),
            w = r(66985),
            E = r(65839),
            C = r(98400),
            k = r(23256),
            T = r(5508),
            S = r(66897),
            I = r(31681),
            F = r(76451),
            j = e([y])
          y = (j.then ? (await j)() : j)[0]
          var Z = s()(function () {
              return r.e(7643).then(r.bind(r, 27643))
            }),
            P = null,
            J = function (e) {
              var t = e.job,
                r = e.identity,
                n = e.otherUserId,
                i = e.addMessage,
                u = e.setSendStatus,
                s = (0, c.useState)(""),
                p = (0, o.Z)(s, 2),
                j = p[0],
                J = p[1],
                O = (0, C.oR)(k.Z),
                z = O.user,
                R = O.appContext.authProvider,
                A = (0, m.pm)(),
                M = function () {
                  return "" == j.trim()
                },
                D = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t) {
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((t.preventDefault(), M())) {
                                e.next = 4
                                break
                              }
                              return (e.next = 4), N()
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
                N = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e() {
                      var r, a, o, c, s, p
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              r = (0, T.ep)(d()().utc().toDate())
                              try {
                                J(""),
                                  (a = { text: j.trim() }),
                                  i({ userId: z.id, message: a, sentAtUTC: r }),
                                  (o = new E.m(t.id, t.createdBy, z.id)),
                                  (c = o.chatRoomId(n)),
                                  (s = P && r ? r - P : 0),
                                  (p =
                                    P && r
                                      ? s > I.$t.NewMessageSendNanoSecsInterval
                                        ? 0
                                        : I.$t.StandarwdWaitMilliSecs
                                      : 0),
                                  (P = r),
                                  0 == p
                                    ? _(c, z.id, r, a)
                                    : setTimeout(function () {
                                        _(c, z.id, r, a)
                                      }, p)
                              } catch (l) {
                                w.default.error(l),
                                  u(
                                    r,
                                    "Undeliverd \ud83d\ude2d - Try again later"
                                  )
                              }
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
                _ = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t, n, o, i) {
                      var c
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (c = {
                                  appStore: O,
                                  showErrorMesg: function () {
                                    ;(0, S.showStandardErrorMesg)(A)
                                  },
                                  errorClosure: function () {
                                    u(
                                      o,
                                      "Undeliverd \ud83d\ude2d - Try again later"
                                    )
                                  }
                                }),
                                (e.next = 3),
                                (0, y.actorRunner)(
                                  c,
                                  (0, a.Z)(
                                    l().mark(function e() {
                                      var a, c
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                (0, v.makeChatActor)(r, R)
                                              )
                                            case 2:
                                              return (
                                                (a = e.sent),
                                                (e.next = 5),
                                                a.addNewMessage(
                                                  t,
                                                  n,
                                                  o,
                                                  i,
                                                  (0, T.$6)(R)
                                                )
                                              )
                                            case 5:
                                              if (!(c = e.sent).ok) {
                                                e.next = 10
                                                break
                                              }
                                              u(o, "Sent \ud83d\udc4d"),
                                                (e.next = 11)
                                              break
                                            case 10:
                                              throw new Error(c.err)
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
                  return function (t, r, n, a) {
                    return e.apply(this, arguments)
                  }
                })(),
                W = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t) {
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                (0, F.resizeImage)(t, I.$t.ImageMaxWidth)
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
                })(),
                q = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t, r, n, a) {
                      var o
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = (0, T.ep)(d()().utc().toDate())),
                                i({
                                  userId: z.id,
                                  message: { imageView: t },
                                  sentAtUTC: o
                                }),
                                (e.next = 4),
                                U(o, r, n, a, !0)
                              )
                            case 4:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r, n, a) {
                    return e.apply(this, arguments)
                  }
                })(),
                B = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(t, r, n) {
                      var a
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = (0, T.ep)(d()().utc().toDate())),
                                i({
                                  userId: z.id,
                                  message: {
                                    file: { fileName: n, mimeType: r }
                                  },
                                  sentAtUTC: a
                                }),
                                (e.next = 4),
                                U(a, t, r, n, !1)
                              )
                            case 4:
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
                U = (function () {
                  var e = (0, a.Z)(
                    l().mark(function e(o, i, c, s, p) {
                      var d, m, f, b
                      return l().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (d = new E.m(t.id, t.createdBy, z.id)),
                                (m = d.chatRoomId(n)),
                                (e.next = 4),
                                (0, F.fileToCanisterBinaryStoreFormat)(i)
                              )
                            case 4:
                              return (
                                (f = e.sent),
                                (b = {
                                  appStore: O,
                                  showErrorMesg: function () {
                                    ;(0, S.showStandardErrorMesg)(A)
                                  },
                                  errorClosure: function () {
                                    u(
                                      o,
                                      "Undeliverd \ud83d\ude2d - Try again later"
                                    )
                                  }
                                }),
                                (e.next = 8),
                                (0, y.actorRunner)(
                                  b,
                                  (0, a.Z)(
                                    l().mark(function e() {
                                      var t, n
                                      return l().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                (0, v.makeChatActor)(r, R)
                                              )
                                            case 2:
                                              if (
                                                ((t = e.sent), (n = null), !p)
                                              ) {
                                                e.next = 10
                                                break
                                              }
                                              return (
                                                (e.next = 7),
                                                t.addNewImage(
                                                  m,
                                                  z.id,
                                                  o,
                                                  f,
                                                  (0, T.$6)(R)
                                                )
                                              )
                                            case 7:
                                              ;(n = e.sent), (e.next = 13)
                                              break
                                            case 10:
                                              return (
                                                (e.next = 12),
                                                t.addNewFile(
                                                  m,
                                                  z.id,
                                                  o,
                                                  f,
                                                  c,
                                                  s,
                                                  (0, T.$6)(R)
                                                )
                                              )
                                            case 12:
                                              n = e.sent
                                            case 13:
                                              if (!n.ok) {
                                                e.next = 17
                                                break
                                              }
                                              u(o, "Sent \ud83d\udc4d"),
                                                (e.next = 18)
                                              break
                                            case 17:
                                              throw new Error(n.err)
                                            case 18:
                                            case "end":
                                              return e.stop()
                                          }
                                      }, e)
                                    })
                                  )
                                )
                              )
                            case 8:
                            case "end":
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function (t, r, n, a, o) {
                    return e.apply(this, arguments)
                  }
                })()
              return c.createElement(
                f.xu,
                {
                  px: "20px",
                  py: "12px",
                  w: { base: "full", md: "calc(75vw - 240px)" }
                },
                c.createElement(
                  "form",
                  { onSubmit: D },
                  c.createElement(
                    b.BZ,
                    { size: "md" },
                    c.createElement(b.II, {
                      placeholder: "Type here / Enter to send",
                      borderRadius: "6px",
                      h: { base: "45px", md: "65px" },
                      w: { base: "calc(100vw)", md: "full" },
                      bg: "white",
                      color: "black",
                      value: j,
                      onChange: function (e) {
                        var t = e.target.value
                        J(t)
                      },
                      pr: "106px"
                    }),
                    c.createElement(
                      b.xH,
                      {
                        top: { base: "3px", md: "14px" },
                        color: "gray_light2",
                        w: "100px"
                      },
                      !M() &&
                        c.createElement(
                          h.Z,
                          {
                            w: "88px",
                            h: { base: "34px", md: "40px" },
                            mr: "6px",
                            mb: "2px",
                            onClick: N
                          },
                          "Send"
                        ),
                      M() &&
                        c.createElement(
                          c.Fragment,
                          null,
                          c.createElement(x.$, {
                            title: "Send Image",
                            icon: c.createElement(g.c2, null),
                            acceptMimeType: I.Et.DefaultImageType,
                            maxSize: I.$t.MaxImageSize,
                            processImageFunc: W,
                            sendNow: q
                          }),
                          c.createElement(x.$, {
                            title: "Send File",
                            icon: c.createElement(g.ju, null),
                            maxSize: I.$t.MaxFileSize,
                            sendNow: B
                          })
                        )
                    )
                  ),
                  c.createElement(Z, null)
                )
              )
            }
          n()
        } catch (O) {
          n(O)
        }
      })
    },
    56838: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            o: function () {
              return k
            }
          })
          var a = r(4942),
            o = r(41451),
            i = r(86854),
            l = r(67294),
            c = r(11972),
            u = r(5664),
            s = r(34016),
            p = r(76989),
            d = r(23256),
            m = r(98400),
            f = r(65839),
            b = r(66985),
            h = r(87140),
            x = r(87784),
            g = r(85236),
            v = r(31681),
            y = r(1095),
            w = r(75030),
            E = r(97705),
            C = e([u, s, p, w])
          function T(e, t) {
            var r = Object.keys(e)
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e)
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
          }
          function S(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? T(Object(r), !0).forEach(function (t) {
                    ;(0, a.Z)(e, t, r[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : T(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    )
                  })
            }
            return e
          }
          ;[u, s, p, w] = C.then ? (await C)() : C
          var k = function (e) {
            var t,
              r,
              n = e.job,
              a = e.identity,
              C = e.selectedUserId,
              k = e.creatorPortfolios,
              T = e.setMessagesLength,
              I = (0, m.oR)(d.Z),
              F = I.user,
              j = (0, E.h)(F.portfolioId),
              Z = I.jobFlowTracker,
              P = (0, l.useRef)(null),
              J = (0, l.useRef)(null),
              O = new f.m(n.id, n.createdBy, F.id).chatRoomId(C),
              z = (0, l.useState)({}),
              R = (0, i.Z)(z, 2),
              A = R[0],
              M = R[1],
              D = (0, l.useState)([]),
              N = (0, i.Z)(D, 2),
              _ = N[0],
              W = N[1],
              q = (0, l.useRef)(0),
              B = (0, l.useState)(!1),
              U = (0, i.Z)(B, 2),
              L = U[0],
              H = U[1],
              Y = (0, l.useState)(!0),
              V = (0, i.Z)(Y, 2),
              $ = V[0],
              Q = V[1],
              X = n.createdBy == F.id,
              G = (0, y.i)()
            ;(0, l.useLayoutEffect)(function () {}, [G])
            var K = (X ? p.RL : p.RC)(
                X
                  ? F.profileImageId
                  : null === j || void 0 === j
                  ? void 0
                  : j.thumbImageId
              ),
              ee = (X ? w.k : p.RL)(X ? C : n.profileImageId, k),
              te = (0, g.R)(O, F.id, a),
              re = te.chatMessages,
              ne = te.size,
              ae = te.setSize,
              oe = te.isLoading,
              ie = te.isReachingEnd,
              le = te.error
            le && b.default.error(le)
            var ce = function () {
                var e
                null === P ||
                  void 0 === P ||
                  null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollIntoView()
              },
              ue = A[O],
              se = null != ue ? ue[ue.length - 1] : null
            ;(0, l.useEffect)(
              function () {
                var e = (function (e, t) {
                  if (null == e) return []
                  try {
                    var r = e.flat(),
                      n = (t || []).concat(r),
                      a = (0, x.N)(n, function (e) {
                        return null === e || void 0 === e ? void 0 : e.sentAtUTC
                      }).sort(function (e, t) {
                        return null !== e &&
                          void 0 !== e &&
                          e.sentAtUTC &&
                          null !== t &&
                          void 0 !== t &&
                          t.sentAtUTC
                          ? Number(
                              (null === e || void 0 === e
                                ? void 0
                                : e.sentAtUTC) / 1000000n
                            ) -
                              Number(
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.sentAtUTC) / 1000000n
                              )
                          : 0
                      })
                    return (
                      $ &&
                        (setTimeout(function () {
                          ce()
                        }, 200),
                        Q(!1)),
                      a.map(function (e) {
                        var t = new h.a(e)
                        return {
                          createdAt: t.createdATInLocalJSDate(),
                          sentAt: t.sentATInLocalJSDate(),
                          createdBy: e.createdBy,
                          name: "",
                          message: e.message,
                          sendStatus: e.sendStatus || null
                        }
                      })
                    )
                  } catch (le) {
                    return b.default.error(le), null
                  }
                })(re, A[O])
                null != e && W((0, o.Z)(e))
              },
              [
                re,
                null === ue || void 0 === ue ? void 0 : ue.length,
                null === se || void 0 === se ? void 0 : se.sendStatus
              ]
            )
            var pe =
              _.length > 0
                ? null === (t = _[_.length - 1]) ||
                  void 0 === t ||
                  null === (r = t.sentAt) ||
                  void 0 === r
                  ? void 0
                  : r.getTime()
                : null
            ;(0, l.useEffect)(
              function () {
                var e
                null === P ||
                  void 0 === P ||
                  null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollIntoView()
              },
              [pe]
            ),
              (0, l.useEffect)(
                function () {
                  setTimeout(function () {
                    T(_.length)
                  }, 15e3),
                    de()
                },
                [_.length]
              ),
              (0, l.useEffect)(
                function () {
                  setTimeout(function () {
                    ce()
                  }, 1e3)
                },
                [C]
              )
            var de = function () {
              X
                ? (null === _ || void 0 === _
                    ? void 0
                    : _.find(function (e) {
                        return e.createdBy != F.id
                      })) && Z.addReceivedPitchJob(n, F.id)
                : (null === _ || void 0 === _
                    ? void 0
                    : _.find(function (e) {
                        return e.createdBy == F.id
                      })) && Z.addPitchedJob(n, F.id)
            }
            return l.createElement(
              c.xu,
              { w: { base: "full", md: "75%" }, pt: "24px", bg: "gray_light3" },
              l.createElement(
                c.gC,
                {
                  align: "start",
                  spacing: { base: "15px", md: "30px" },
                  h: { base: "calc(100vh - 430px)", md: "calc(100vh - 354px)" },
                  pr: { base: "unset", md: "12px" },
                  overflowY: "auto",
                  onScroll: function (e) {
                    var t = e.target.scrollTop
                    q.current < t && L ? H(!1) : q.current > t && !L && H(!0),
                      (q.current = t),
                      t <= 10 &&
                        !oe &&
                        !ie &&
                        (ae(ne + 1),
                        (function () {
                          var e
                          null === J ||
                            void 0 === J ||
                            null === (e = J.current) ||
                            void 0 === e ||
                            e.scrollIntoView()
                        })())
                  }
                },
                _.map(function (e, t) {
                  return l.createElement(u.Z, {
                    key: t,
                    message: e,
                    myAvatorImageSrc: K,
                    otherAvatorImageSrc: ee,
                    isLast: t == _.length - 1,
                    ref: t == v.$t.PageSize - 1 ? J : null
                  })
                }),
                l.createElement("div", { ref: P }),
                l.createElement(c.xv, { display: "none" }, G.height)
              ),
              l.createElement(s.T, {
                identity: a,
                job: n,
                otherUserId: C,
                setSendStatus: function (e, t) {
                  var r = A[O] || []
                  r = r.map(function (r) {
                    return (
                      (r.sendStatus =
                        (null === r || void 0 === r ? void 0 : r.sentAtUTC) == e
                          ? t
                          : null === r || void 0 === r
                          ? void 0
                          : r.sendStatus),
                      r
                    )
                  })
                  var n = A
                  ;(n[O] = r), M(S({}, n))
                },
                addMessage: function (e) {
                  if (null != e) {
                    var t = {
                        createdAtUTC: e.sentAtUTC,
                        sentAtUTC: e.sentAtUTC,
                        createdBy: e.userId,
                        message: e.message,
                        sendStatus: "Sending \ud83e\uddd1\u200d\ud83d\udcbb"
                      },
                      r = A[O] || []
                    r.push(t)
                    var n = A
                    ;(n[O] = r),
                      M(S({}, n)),
                      setTimeout(function () {
                        ce()
                      }, 200)
                  }
                }
              })
            )
          }
          n()
        } catch (T) {
          n(T)
        }
      })
    },
    7249: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            U: function () {
              return C
            }
          })
          var a = r(87462),
            o = r(15861),
            i = r(86854),
            l = r(45987),
            c = r(87757),
            u = r.n(c),
            s = r(67294),
            p = r(11972),
            d = r(86651),
            m = r(44518),
            f = r(91349),
            b = r(65839),
            h = r(98400),
            x = r(23256),
            g = r(24686),
            v = r(66985),
            y = r(5508),
            w = e([d, f])
          ;[d, f] = w.then ? (await w)() : w
          var E = [
              "job",
              "otherUserId",
              "identity",
              "messagesLength",
              "showHeading",
              "containerpy"
            ],
            C = function (e) {
              var t = e.job,
                r = e.otherUserId,
                n = e.identity,
                c = e.messagesLength,
                w = e.showHeading,
                C = e.containerpy,
                k = (0, l.Z)(e, E),
                T = (0, s.useState)([]),
                S = (0, i.Z)(T, 2),
                I = S[0],
                F = S[1],
                j = (0, h.oR)(x.Z),
                Z = j.user,
                P = j.appContext.authProvider
              return (
                (0, s.useEffect)(
                  function () {
                    function e() {
                      return (e = (0, o.Z)(
                        u().mark(function e() {
                          var a, o, i, l
                          return u().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (((e.prev = 0), null != r)) {
                                      e.next = 4
                                      break
                                    }
                                    return F([]), e.abrupt("return")
                                  case 4:
                                    return (
                                      (a = new b.m(t.id, t.createdBy, Z.id)),
                                      (o = a.chatRoomId(r)),
                                      (e.next = 8),
                                      (0, g.makeChatActor)(n, P)
                                    )
                                  case 8:
                                    return (
                                      (i = e.sent),
                                      (e.next = 11),
                                      i.loadChatMedias(o, Z.id, (0, y.$6)(P))
                                    )
                                  case 11:
                                    null != (l = e.sent).ok
                                      ? F(l.ok)
                                      : l.err && v.default.error(l.err),
                                      (e.next = 18)
                                    break
                                  case 15:
                                    ;(e.prev = 15),
                                      (e.t0 = e.catch(0)),
                                      v.default.error(e.t0)
                                  case 18:
                                  case "end":
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 15]]
                          )
                        })
                      )).apply(this, arguments)
                    }
                    !(function () {
                      e.apply(this, arguments)
                    })()
                  },
                  [r, c]
                ),
                s.createElement(
                  p.xu,
                  { w: "100%", py: C },
                  s.createElement(
                    p.X6,
                    {
                      fontWeight: "bold",
                      fontSize: "15px",
                      pb: "20px",
                      display: w ? "block" : "none"
                    },
                    "Shared Media"
                  ),
                  (null == r || 0 == I.length) &&
                    s.createElement(
                      p.M5,
                      { color: "black_2" },
                      "No media shared yet"
                    ),
                  I.length > 0 &&
                    s.createElement(
                      p.MI,
                      (0, a.Z)(
                        {
                          columns: 2,
                          spacing: "20px",
                          alignItems: "start",
                          alignContent: "flex-start",
                          h: "100%",
                          overflowY: "auto"
                        },
                        k
                      ),
                      I.map(function (e, t) {
                        var r = e.message
                        return null != r.image
                          ? s.createElement(
                              p.M5,
                              { key: t },
                              s.createElement(d.M, {
                                imageId: r.image,
                                height: "130px",
                                width: "130px"
                              })
                            )
                          : null != r.file
                          ? s.createElement(m.D, {
                              key: t,
                              fileId: r.file.fileId,
                              fileName: r.file.fileName,
                              mimeType: r.file.mimeType,
                              loadFileFunc: f.E,
                              px: "0px",
                              py: "0px"
                            })
                          : void 0
                      })
                    )
                )
              )
            }
          n()
        } catch (k) {
          n(k)
        }
      })
    },
    54187: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            N: function () {
              return s
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(91863),
            l = r(77992),
            c = r(7249),
            u = e([l, c])
          ;[l, c] = u.then ? (await u)() : u
          var s = function (e) {
            var t = e.job,
              r = e.identity,
              n = e.display,
              u = e.isJobCreatedByMe,
              s = e.creatorPortfolios,
              p = e.otherUserId,
              d = e.messagesLength,
              m = e.hasJobFlowInit,
              f = e.jobFlowObject,
              b = e.triggerReloadJobFlow,
              h = e.setCandidJobFlowState,
              x =
                null === s || void 0 === s
                  ? void 0
                  : s.find(function (e) {
                      return e.userId == p
                    })
            return a.createElement(
              o.gC,
              {
                w: { base: "100%", md: "280px", lg: "380px" },
                minW: "240px",
                h: "100%",
                display: n,
                spacing: "24px",
                p: { base: "unset", sm: "unset", md: "20px", lg: "20px" }
              },
              u &&
                a.createElement(l.i, {
                  job: t,
                  creatorPortfolio:
                    null === x || void 0 === x ? void 0 : x.portfolio,
                  hasJobFlowInit: m,
                  jobFlowObject: f,
                  triggerReloadJobFlow: b,
                  setCandidJobFlowState: h,
                  identity: r,
                  selectedUserId: p
                }),
              !u && a.createElement(i.x, { job: t }),
              a.createElement(o.iz, null),
              a.createElement(c.U, {
                job: t,
                otherUserId: p,
                identity: r,
                messagesLength: d,
                h: "calc(100vh - 322px - 300px)",
                containerpy: "0px",
                showHeading: !0
              })
            )
          }
          n()
        } catch (p) {
          n(p)
        }
      })
    },
    98438: function (e, t, r) {
      "use strict"
      r.d(t, {
        $: function () {
          return C
        }
      })
      var n = r(87462),
        a = r(15861),
        o = r(86854),
        i = r(87757),
        l = r.n(i),
        c = r(67294),
        u = r(88523),
        s = r(45607),
        p = r(51815),
        d = r(32512),
        m = r(66897),
        f = r(25527),
        b = r(11972),
        h = r(64737),
        x = r(42273),
        g = r(81872),
        v = r(49162),
        y = function (e) {
          var t = e.fileMeta,
            r = e.isOpen,
            n = e.onClose,
            o = e.sendNow,
            i = (function () {
              var e = (0, a.Z)(
                l().mark(function e() {
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n(), !t.imageView)) {
                            e.next = 6
                            break
                          }
                          return (
                            (e.next = 4),
                            o(t.imageView, t.file, t.mimeType, t.name)
                          )
                        case 4:
                          e.next = 8
                          break
                        case 6:
                          return (e.next = 8), o(t.file, t.mimeType, t.name)
                        case 8:
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
          return c.createElement(
            f.u_,
            {
              autoFocus: !1,
              isOpen: r,
              isCentered: !0,
              motionPreset: "scale",
              closeOnOverlayClick: !1,
              closeOnEsc: !1
            },
            c.createElement(f.ZA, null),
            c.createElement(
              f.hz,
              { bg: "white" },
              c.createElement(
                f.fe,
                { pb: "6px" },
                c.createElement(
                  b.M5,
                  { mt: "6px", mb: "18px" },
                  t.imageView &&
                    c.createElement(v.Z, {
                      boxShadow: "xl",
                      borderRadius: "lg",
                      borderWidth: "1px",
                      src: t.imageView,
                      alt: "Chat Upload Image",
                      height: "300px",
                      width: "100%"
                    }),
                  !t.imageView &&
                    c.createElement(h.JO, { as: g.NFo, w: "140px", h: "140px" })
                ),
                c.createElement(
                  b.xv,
                  { size: "sm", textAlign: "center" },
                  t.name
                )
              ),
              c.createElement(
                f.mz,
                null,
                c.createElement(
                  b.Kq,
                  { direction: "row", width: "100%" },
                  c.createElement(
                    x.Z,
                    {
                      onClick: i,
                      type: "submit",
                      mb: "0px",
                      w: "60%",
                      h: "60px"
                    },
                    "Send Now"
                  ),
                  c.createElement(b.LZ, null),
                  c.createElement(
                    p.zx,
                    { onClick: n, w: "40%", h: "60px" },
                    "Cancel"
                  )
                )
              )
            )
          )
        },
        w = r(66985),
        E = r(31681),
        C = function (e) {
          var t = e.title,
            r = e.acceptMimeType,
            i = e.icon,
            f = e.processImageFunc,
            b = e.maxSize,
            h = e.sendNow,
            x = (0, c.useState)({}),
            g = (0, o.Z)(x, 2),
            v = g[0],
            C = g[1],
            k = (0, u.qY)(),
            T = k.isOpen,
            S = k.onOpen,
            I = k.onClose,
            F = (0, s.pm)(),
            j = (0, d.uI)({
              maxFiles: 1,
              accept: r || E.Et.AnyFileType,
              onDrop: (function () {
                var e = (0, a.Z)(
                  l().mark(function e(r) {
                    var n, a, o
                    return l().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(r.length > 0)) {
                                e.next = 21
                                break
                              }
                              if (
                                ((e.prev = 1), (n = r[0]), !((a = n).size > b))
                              ) {
                                e.next = 7
                                break
                              }
                              return (
                                (0, m.showToast)(
                                  F,
                                  t,
                                  "The file "
                                    .concat(
                                      a.name,
                                      " exceeds the max file size of "
                                    )
                                    .concat(
                                      b,
                                      " bytes. Please select another one."
                                    ),
                                  "warning"
                                ),
                                e.abrupt("return")
                              )
                            case 7:
                              if (((o = null), !f)) {
                                e.next = 13
                                break
                              }
                              return (e.next = 11), f(n)
                            case 11:
                              ;(a = e.sent), (o = URL.createObjectURL(a))
                            case 13:
                              C({
                                file: a,
                                imageView: o,
                                name: a.name,
                                mimeType: a.type
                              }),
                                S(),
                                (e.next = 21)
                              break
                            case 17:
                              ;(e.prev = 17),
                                (e.t0 = e.catch(1)),
                                w.default.error(e.t0),
                                (0, m.showToast)(
                                  F,
                                  t,
                                  "We have a problem processing your file. Please choose a new one.",
                                  "warning"
                                )
                            case 21:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[1, 17]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()
            }),
            Z = j.getRootProps,
            P = j.getInputProps
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              p.zx,
              (0, n.Z)(
                {
                  w: "26px",
                  variant: "unstyled",
                  mx: "1px",
                  _hover: { backgroundColor: "gray_light3" }
                },
                Z({ className: "dropzone" })
              ),
              i,
              c.createElement("input", P())
            ),
            c.createElement(y, {
              fileMeta: v,
              isOpen: T,
              onClose: I,
              sendNow: h
            })
          )
        }
    },
    43650: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            X: function () {
              return s
            }
          })
          var a = r(67294),
            o = r(50715),
            i = r(25927),
            l = r(11972),
            c = r(76989),
            u = e([c])
          c = (u.then ? (await u)() : u)[0]
          var s = function (e) {
            var t = e.userId,
              r = e.portfolio,
              n = e.setSelectedUserId,
              u = (0, c.RC)(
                null === r || void 0 === r ? void 0 : r.thumbImageId
              )
            return a.createElement(
              o.sN,
              {
                minH: "40px",
                onClick: function () {
                  return n(t)
                }
              },
              a.createElement(i.qE, {
                w: "38px",
                h: "38px",
                name: null === r || void 0 === r ? void 0 : r.creatorName,
                src: u,
                mr: "12px"
              }),
              a.createElement(
                l.xv,
                { color: "black", fontSize: "16px" },
                null === r || void 0 === r ? void 0 : r.creatorName
              )
            )
          }
          n()
        } catch (p) {
          n(p)
        }
      })
    },
    91863: function (e, t, r) {
      "use strict"
      r.d(t, {
        x: function () {
          return s
        }
      })
      var n = r(67294),
        a = r(30381),
        o = r.n(a),
        i = r(11972),
        l = r(16830),
        c = r(1764),
        u = r(86812),
        s = function (e) {
          var t,
            r = e.job,
            a = new c.z(r),
            s = l.zM[r.creatorType],
            p =
              null === (t = l.vG[r.creatorType]) || void 0 === t
                ? void 0
                : t[r.skill],
            d = o()(a.dueDateInJSDate()).format("Do MMM yyyy")
          return n.createElement(
            i.xu,
            { h: "260px", overflowY: "auto" },
            n.createElement(u.I, { title: "Requiring:", content: s }),
            n.createElement(u.I, { title: "Skills:", content: p }),
            n.createElement(u.I, {
              title: "Target Audience:",
              content: r.targetAudience
            }),
            n.createElement(u.I, { title: "Due Date:", content: d }),
            n.createElement(u.I, {
              title: "Deliverable Format:",
              content: r.deliverableMedia
            }),
            n.createElement(u.I, {
              title: "Preferred Tools:",
              content: r.preferredTools
            })
          )
        }
    },
    44982: function (e, t, r) {
      "use strict"
      r.d(t, {
        x: function () {
          return u
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(79460),
        i = r(23256),
        l = r(98400),
        c = r(1764),
        u = function (e) {
          var t = e.job,
            r = e.addRemoveMyJob,
            u = e.isProcessingJob,
            s = (0, l.oR)(i.Z),
            p = s.user,
            d = s.appContext,
            m = new c.z(t),
            f = d.isJobInMyJobs(m.id())
          return n.createElement(
            a.M5,
            null,
            !m.isCreatedBy(p.id) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  o.B,
                  {
                    addRemoveMyJob: r,
                    isProcessingJob: u,
                    isInMyJobs: f,
                    mx: { base: "6px", md: "18px" },
                    display: { base: "none", md: "flex" }
                  },
                  f ? "Unsave" : "Save"
                )
              )
          )
        }
    },
    55262: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            y: function () {
              return C
            }
          })
          var a = r(15861),
            o = r(86854),
            i = r(87757),
            l = r.n(i),
            c = r(67294),
            u = r(88523),
            s = r(11972),
            p = r(97917),
            d = r(52014),
            m = r(17348),
            f = r(56838),
            b = r(54187),
            h = r(2195),
            x = r(24686),
            g = r(23256),
            v = r(98400),
            y = r(66985),
            w = r(11163),
            E = e([d, m, f, b])
          ;[d, m, f, b] = E.then ? (await E)() : E
          var C = function (e) {
            var t = e.job,
              r = e.addRemoveMyJob,
              n = e.isProcessingJob,
              i = e.identity,
              E = e.setHideBottomBar,
              C = e.otherUserId,
              k = e.setOtherUserId,
              T = e.messagesLength,
              S = e.setMessagesLength,
              I = e.setCreatorUserIdArray,
              F = e.creatorPortfolios,
              j = e.switchToTab,
              Z = e.jobFlowObject,
              P = e.hasJobFlowInit,
              J = e.triggerReloadJobFlow,
              O = e.setCandidJobFlowState,
              z = e.mutateJobDispute,
              R = (0, c.useState)(null),
              A = (0, o.Z)(R, 2),
              M = A[0],
              D = A[1],
              N = (0, u.qY)(),
              _ = N.isOpen,
              W = N.onOpen,
              q = N.onClose,
              B = (0, v.oR)(g.Z),
              U = B.user,
              L = t.createdBy == U.id,
              H = !L && !U.hasPortfolio(),
              Y = (0, w.useRouter)()
            return (
              (0, c.useEffect)(
                function () {
                  function e() {
                    return (e = (0, a.Z)(
                      l().mark(function e() {
                        var r, n, a, o, c, u
                        return l().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), !(F.length > 0))) {
                                    e.next = 8
                                    break
                                  }
                                  if (null != C) {
                                    e.next = 8
                                    break
                                  }
                                  if (
                                    ((r = Y.query.chatuserid),
                                    (n = F.map(function (e) {
                                      return e.userId
                                    })),
                                    null == r || !n.includes(r))
                                  ) {
                                    e.next = 8
                                    break
                                  }
                                  return k(r), e.abrupt("return")
                                case 8:
                                  return (
                                    (e.next = 10),
                                    (0, x.makeJobActor)(
                                      i,
                                      B.appContext.authProvider
                                    )
                                  )
                                case 10:
                                  return (
                                    (a = e.sent),
                                    (e.next = 13),
                                    a.loadJobCreators(t.id, U.id)
                                  )
                                case 13:
                                  ;(o = e.sent).ok
                                    ? ((c = o.ok),
                                      I(c),
                                      c.length > 0
                                        ? null !=
                                            (u = Number(Y.query.chatuserid)) &&
                                          c.includes(u)
                                          ? k(u)
                                          : (k(c[0]),
                                            y.default.warn(
                                              "Couldn't find the expected userId=".concat(
                                                u,
                                                " in creatorUserIds"
                                              )
                                            ))
                                        : D(
                                            "Waiting for Creators to initiate chat..."
                                          ))
                                    : y.default.error(o.err),
                                    (e.next = 20)
                                  break
                                case 17:
                                  ;(e.prev = 17),
                                    (e.t0 = e.catch(0)),
                                    y.default.error(e.t0)
                                case 20:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 17]]
                        )
                      })
                    )).apply(this, arguments)
                  }
                  L
                    ? (function () {
                        e.apply(this, arguments)
                      })()
                    : (k(t.createdBy), H && W()),
                    E(!0)
                },
                [1, Y.query.chatuserid, t.id]
              ),
              c.createElement(
                s.gC,
                { align: "left", spacing: "0px", h: "100%" },
                null != C &&
                  L &&
                  c.createElement(m.Y, {
                    job: t,
                    creatorPortfolios: F,
                    selectedUserId: C,
                    setSelectedUserId: k,
                    addRemoveMyJob: r,
                    isProcessingJob: n,
                    jobFlowObject: Z,
                    switchToTab: j,
                    identity: i,
                    mutateJobDispute: z
                  }),
                !L &&
                  c.createElement(d.Q, {
                    job: t,
                    addRemoveMyJob: r,
                    isProcessingJob: n,
                    jobFlowObject: Z,
                    switchToTab: j,
                    identity: i,
                    mutateJobDispute: z
                  }),
                c.createElement(s.iz, null),
                c.createElement(
                  s.Ug,
                  { align: "start", spacing: "0px", h: "100%" },
                  null != C &&
                    !H &&
                    c.createElement(
                      c.Fragment,
                      null,
                      c.createElement(f.o, {
                        job: t,
                        identity: i,
                        creatorPortfolios: F,
                        selectedUserId: C,
                        setMessagesLength: S
                      }),
                      c.createElement(b.N, {
                        job: t,
                        identity: i,
                        isJobCreatedByMe: L,
                        display: { base: "none", md: "block" },
                        creatorPortfolios: F,
                        otherUserId: C,
                        messagesLength: T,
                        hasJobFlowInit: P,
                        jobFlowObject: Z,
                        triggerReloadJobFlow: J,
                        setCandidJobFlowState: O
                      })
                    ),
                  null == C &&
                    !M &&
                    c.createElement(p.N2, {
                      mt: "4",
                      noOfLines: 4,
                      spacing: "4",
                      w: "100%",
                      px: "20px"
                    })
                ),
                M &&
                  c.createElement(
                    s.M5,
                    {
                      color: "black",
                      fontSize: "lg",
                      py: "36px",
                      fontWeight: "medium"
                    },
                    M
                  ),
                c.createElement(h._, {
                  isOpen: _,
                  onClose: q,
                  title: "Workspace",
                  description:
                    "A creator portfolio is needed in order to pitch."
                })
              )
            )
          }
          n()
        } catch (k) {
          n(k)
        }
      })
    },
    71103: function (e, t, r) {
      "use strict"
      r.d(t, {
        k: function () {
          return i
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(25927),
        i = function (e) {
          var t = e.name,
            r = e.imageSrc
          return n.createElement(
            a.gC,
            null,
            n.createElement(a.LZ, null),
            n.createElement(o.qE, {
              w: { base: "38px", md: "54px" },
              h: { base: "38px", md: "54px" },
              name: t,
              src: r
            })
          )
        }
    },
    5664: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          var a = r(67294),
            o = r(11972),
            i = r(2799),
            l = r(71103),
            c = r(98400),
            u = r(23256),
            s = r(71414),
            p = e([i])
          i = (p.then ? (await p)() : p)[0]
          var d = (0, a.forwardRef)(function (e, t) {
            var r = e.myAvatorImageSrc,
              n = e.otherAvatorImageSrc,
              p = e.message,
              d = e.isLast,
              m = (0, c.oR)(u.Z).user,
              f = p.createdBy == m.id
            return a.createElement(
              o.kC,
              {
                pl: "18px",
                pr: "6px",
                direction: f ? "row-reverse" : "row",
                w: "100%",
                ref: t
              },
              a.createElement(l.k, { name: p.name, imageSrc: f ? r : n }),
              a.createElement(
                o.kC,
                { pl: "6px", direction: "column" },
                a.createElement(s.i, { message: p, isMe: f }),
                a.createElement(i.m, { content: p.message, isMe: f }),
                a.createElement(
                  o.xv,
                  {
                    w: "full",
                    textAlign: "right",
                    display: f ? "block" : "none",
                    fontSize: "13px",
                    fontWeight: "medium",
                    color: "gray_light2",
                    pr: "12px",
                    pt: "2px"
                  },
                  p.sendStatus ? p.sendStatus : d ? "Sent \ud83d\udc4d" : ""
                )
              )
            )
          })
          ;(d.displayName = "MessageContainer"), (t.Z = d), n()
        } catch (m) {
          n(m)
        }
      })
    },
    2799: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            m: function () {
              return s
            }
          })
          var a = r(67294),
            o = r(11972),
            i = r(86651),
            l = r(44518),
            c = r(91349),
            u = e([i, c])
          ;[i, c] = u.then ? (await u)() : u
          var s = function (e) {
            var t = e.content,
              r = e.isMe,
              n = "19px"
            return a.createElement(
              o.xu,
              {
                bg: r && null != t.text ? "gradient.purple.6" : "white",
                p: "14px",
                mr: r ? "12px" : "0px",
                ml: r ? "px" : "12px",
                mt: "2px",
                borderRadius: n,
                borderBottomLeftRadius: r ? n : "0px",
                borderBottomRightRadius: r ? "0px" : n
              },
              t.text &&
                a.createElement(
                  o.xv,
                  {
                    fontWeight: "medium",
                    fontSize: "14px",
                    color: r ? "white" : "black"
                  },
                  t.text
                ),
              (t.image || t.imageView) &&
                a.createElement(i.M, {
                  imageId: t.image,
                  imageView: t.imageView
                }),
              t.file &&
                a.createElement(l.D, {
                  fileId: t.file.fileId,
                  fileName: t.file.fileName,
                  mimeType: t.file.mimeType,
                  loadFileFunc: c.E
                })
            )
          }
          n()
        } catch (p) {
          n(p)
        }
      })
    },
    93935: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            T: function () {
              return p
            }
          })
          var a = r(87462),
            o = r(45987),
            i = r(67294),
            l = r(49162),
            c = r(76989),
            u = e([c])
          c = (u.then ? (await u)() : u)[0]
          var s = ["imageId", "imageView", "onClick", "cursor"],
            p = function (e) {
              var t = e.imageId,
                r = e.imageView,
                n = e.onClick,
                u = e.cursor,
                p = (0, o.Z)(e, s),
                d = (0, c.iK)(t)
              return i.createElement(
                l.Z,
                (0, a.Z)(
                  {
                    borderWidth: "1px",
                    alt: "Chat Upload Image",
                    height: "200px",
                    boxShadow: "lg",
                    borderRadius: "7px",
                    width: "100%",
                    cursor: null != t ? u : "auto",
                    src: r || d,
                    onClick: null != t ? n : function () {},
                    _hover: { boxShadow: "2xl" }
                  },
                  p
                )
              )
            }
          n()
        } catch (d) {
          n(d)
        }
      })
    },
    86651: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            M: function () {
              return m
            }
          })
          var a = r(87462),
            o = r(86854),
            i = r(45987),
            l = r(67294),
            c = r(88523),
            u = r(93935),
            s = r(62980),
            p = e([u])
          u = (p.then ? (await p)() : p)[0]
          var d = ["imageId", "imageView"],
            m = function (e) {
              var t = e.imageId,
                r = e.imageView,
                n = (0, i.Z)(e, d),
                p = (0, c.qY)(),
                m = p.isOpen,
                f = p.onOpen,
                b = p.onClose,
                h = (0, l.useState)(!1),
                x = (0, o.Z)(h, 2),
                g = x[0],
                v = x[1]
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  u.T,
                  (0, a.Z)(
                    {
                      imageId: t,
                      imageView: r,
                      onClick: f,
                      cursor: "pointer",
                      height: "200px",
                      width: "100%"
                    },
                    n
                  )
                ),
                m &&
                  null != t &&
                  l.createElement(s.ZoomImageModal, {
                    isOpen: m,
                    onClose: b,
                    imageItem: { imageId: t },
                    isFullScreen: g,
                    setFullScreen: v,
                    ImageComponent: u.T
                  })
              )
            }
          n()
        } catch (f) {
          n(f)
        }
      })
    },
    71414: function (e, t, r) {
      "use strict"
      r.d(t, {
        i: function () {
          return s
        }
      })
      var n = r(67294),
        a = r(11972),
        o = r(31681),
        i = r(30381),
        l = r.n(i),
        c = r(51085),
        u = r(30882),
        s = function (e) {
          var t = e.message,
            r = e.isMe,
            i = t.sentAt,
            s = function () {
              return l()(i).format(o.$t.TimeFormat)
            }
          return n.createElement(
            a.xv,
            {
              w: "full",
              textAlign: r ? "left" : "right",
              fontSize: "13px",
              fontWeight: "medium",
              color: "gray_light2"
            },
            (0, c.Z)(i)
              ? "Today ".concat(s())
              : (0, u.Z)(i)
              ? "Yesterday ".concat(s())
              : l()(i).format(o.$t.DatetimeFormat)
          )
        }
    },
    85236: function (e, t, r) {
      "use strict"
      r.d(t, {
        R: function () {
          return h
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(44593),
        u = r(66985),
        s = r(24686),
        p = r(31681),
        d = r(98400),
        m = r(23256),
        f = r(5508),
        b = p.$t.FetcherKeySeparator,
        h = function (e, t, r) {
          var o,
            h,
            x = (0, l.useState)(!1),
            g = (0, a.Z)(x, 2),
            v = g[0],
            y = g[1],
            w = (0, d.oR)(m.Z).appContext.authProvider,
            E = (function () {
              var e = (0, n.Z)(
                i().mark(function e(t) {
                  var n, a, o, l, c, d
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              3 ==
                              (n = t.split(p.$t.FetcherKeySeparator)).length
                            ) {
                              e.next = 3
                              break
                            }
                            return e.abrupt("return", null)
                          case 3:
                            return (
                              (a = n[0]),
                              (o = Number(n[1])),
                              (l = Number(n[2])),
                              (e.prev = 6),
                              y(!0),
                              (e.next = 10),
                              (0, s.makeChatActor)(r, w)
                            )
                          case 10:
                            return (
                              (c = e.sent),
                              (e.next = 13),
                              c.loadChatRoom(
                                a,
                                o,
                                p.$t.PageSize,
                                l,
                                (0, f.$6)(w)
                              )
                            )
                          case 13:
                            if (!(d = e.sent).ok) {
                              e.next = 18
                              break
                            }
                            return e.abrupt("return", d.ok)
                          case 18:
                            if (!d.err.permission_denied) {
                              e.next = 31
                              break
                            }
                            return (
                              (e.next = 21), c.enterChatRoom(a, l, (0, f.$6)(w))
                            )
                          case 21:
                            if (!(d = e.sent).ok) {
                              e.next = 30
                              break
                            }
                            return (
                              (e.next = 25),
                              c.loadChatRoom(
                                a,
                                o,
                                p.$t.PageSize,
                                l,
                                (0, f.$6)(w)
                              )
                            )
                          case 25:
                            if (!(d = e.sent).ok) {
                              e.next = 28
                              break
                            }
                            return e.abrupt("return", d.ok)
                          case 28:
                            e.next = 31
                            break
                          case 30:
                          case 31:
                            throw new Error(d.err)
                          case 34:
                            ;(e.prev = 34),
                              (e.t0 = e.catch(6)),
                              u.default.error(e.t0)
                          case 37:
                            return (e.prev = 37), y(!1), e.finish(37)
                          case 40:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[6, 34, 37, 40]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            C = (0, c.ZP)(
              function (r) {
                return e + b + r + b + t
              },
              E,
              { refreshInterval: 1e4, errorRetryCount: 3 }
            ),
            k = C.data,
            T = C.error,
            S = C.mutate,
            I = C.size,
            F = C.setSize
          return {
            chatMessages: k,
            isLoading: v || (!T && !k),
            isReachingEnd:
              0 ===
                (null === k ||
                void 0 === k ||
                null === (o = k[0]) ||
                void 0 === o
                  ? void 0
                  : o.length) ||
              (k &&
                (null === (h = k[k.length - 1]) || void 0 === h
                  ? void 0
                  : h.length) < p.$t.PageSize),
            mutate: S,
            size: I,
            setSize: F,
            error: T
          }
        }
    },
    75030: function (e, t, r) {
      "use strict"
      r.a(e, async function (e, n) {
        try {
          r.d(t, {
            k: function () {
              return i
            }
          })
          r(67294)
          var a = r(76989),
            o = e([a])
          a = (o.then ? (await o)() : o)[0]
          var i = function (e, t) {
            var r =
                null === t || void 0 === t
                  ? void 0
                  : t.find(function (t) {
                      return t.userId == e
                    }),
              n = null === r || void 0 === r ? void 0 : r.portfolio
            return (0, a.RC)(
              null === n || void 0 === n ? void 0 : n.thumbImageId
            )
          }
          n()
        } catch (l) {
          n(l)
        }
      })
    },
    53774: function (e, t, r) {
      "use strict"
      r.d(t, {
        I: function () {
          return m
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(8100),
        u = r(31681),
        s = r(24686),
        p = r(66985),
        d = "useCreatorPortfolios/",
        m = function (e) {
          var t = (0, l.useState)(!1),
            r = (0, a.Z)(t, 2),
            o = r[0],
            m = r[1],
            f = (function () {
              var e = (0, n.Z)(
                i().mark(function e(t) {
                  var r, n, a, o, l, c, f, h
                  return i().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              null != (r = t.substring(d.length)) &&
                              "" != r.trim()
                            ) {
                              e.next = 3
                              break
                            }
                            return e.abrupt("return", [])
                          case 3:
                            if (
                              null !=
                                (n = r
                                  .split(u.RL.FetcherKeySeparator)
                                  .map(function (e) {
                                    return Number(e)
                                  })) &&
                              0 != n.length
                            ) {
                              e.next = 6
                              break
                            }
                            return e.abrupt("return", [])
                          case 6:
                            return (
                              (e.prev = 6),
                              m(!0),
                              (e.next = 10),
                              (0, s.makeUserProfileActor)()
                            )
                          case 10:
                            return (
                              (a = e.sent),
                              (e.next = 13),
                              a.queryCreatorBasicByUserIds(n)
                            )
                          case 13:
                            if (!(o = e.sent)) {
                              e.next = 23
                              break
                            }
                            return (
                              (l = (l = o.map(function (e) {
                                return e.portfolioId.length > 0
                                  ? {
                                      userId: e.userId,
                                      portfolioId: e.portfolioId[0]
                                    }
                                  : { userId: e.userId }
                              })).filter(function (e) {
                                return null != e.portfolioId
                              })),
                              (e.next = 19),
                              b(l)
                            )
                          case 19:
                            return (
                              (c = e.sent),
                              (f = l.map(function (e) {
                                var t = c[e.portfolioId]
                                return { userId: e.userId, portfolio: t }
                              })),
                              (h = f.filter(function (e) {
                                return null != e.portfolio
                              })),
                              e.abrupt("return", h)
                            )
                          case 23:
                            return e.abrupt("return", [])
                          case 26:
                            return (
                              (e.prev = 26),
                              (e.t0 = e.catch(6)),
                              p.default.error(e.t0),
                              e.abrupt("return", [])
                            )
                          case 30:
                            return (e.prev = 30), m(!1), e.finish(30)
                          case 33:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[6, 26, 30, 33]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          function b(e) {
            return h.apply(this, arguments)
          }
          function h() {
            return (h = (0, n.Z)(
              i().mark(function e(t) {
                var r, n, a, o
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (r = t.map(function (e) {
                              return e.portfolioId
                            })),
                            (e.next = 4),
                            (0, s.makePortfolioActor)()
                          )
                        case 4:
                          return (
                            (n = e.sent), (e.next = 7), n.loadMultiPortfolio(r)
                          )
                        case 7:
                          if (!(a = e.sent)) {
                            e.next = 12
                            break
                          }
                          return (
                            (o = a.reduce(function (e, t) {
                              return (e[t.id] = t), e
                            }, {})),
                            e.abrupt("return", o)
                          )
                        case 12:
                          return e.abrupt("return", {})
                        case 15:
                          throw (
                            ((e.prev = 15),
                            (e.t0 = e.catch(0)),
                            p.default.error(e.t0),
                            e.t0)
                          )
                        case 19:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                )
              })
            )).apply(this, arguments)
          }
          var x = (0, c.ZP)(d + e.join(u.RL.FetcherKeySeparator), f, {
              refreshInterval: 12e4,
              errorRetryCount: 3
            }),
            g = x.data,
            v = x.error
          return {
            creatorPortfolios: g || [],
            isLoading: o || (!v && !g),
            mutate: x.mutate,
            error: v
          }
        }
    },
    20792: function (e, t, r) {
      "use strict"
      r.d(t, {
        E: function () {
          return c
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(11972),
        l = ["children"],
        c = function (e) {
          var t = e.children,
            r = (0, a.Z)(e, l)
          return o.createElement(
            i.X6,
            (0, n.Z)(
              {
                fontWeight: "bold",
                fontSize: "18px",
                bg: "gradient.purple.7",
                bgClip: "text",
                _hover: { bg: "gradient.purple.2", bgClip: "text" }
              },
              r
            ),
            t
          )
        }
    },
    67328: function (e, t, r) {
      "use strict"
      r.d(t, {
        J: function () {
          return c
        }
      })
      var n = r(87462),
        a = r(45987),
        o = r(67294),
        i = r(27386),
        l = ["children"],
        c = function (e) {
          var t = e.children,
            r = (0, a.Z)(e, l)
          return o.createElement(
            i.Qd,
            (0, n.Z)({ borderTopWidth: "0px", pb: "12px" }, r),
            t
          )
        }
    },
    19938: function (e, t, r) {
      "use strict"
      r.d(t, {
        f: function () {
          return le
        }
      })
      var n = r(86854),
        a = r(67294),
        o = r(11972),
        i = r(27386),
        l = r(52672),
        c = r(43677),
        u = r(67328),
        s = r(15861),
        p = r(87757),
        d = r.n(p),
        m = r(20792),
        f = r(2243),
        b = r(66985),
        h = r(24686),
        x = r(98400),
        g = r(23256),
        v = r(31681),
        y = v.Op.ChangesRequested,
        w = function (e) {
          var t = e.identity,
            r = e.jobFlowObject,
            i = e.jobFlowState,
            l = e.creatorPortfolios,
            c = e.jobFlowCreatorBasic,
            u = e.setJobFlowCreatorBasic,
            p = (0, a.useState)(null),
            v = (0, n.Z)(p, 2),
            w = v[0],
            E = v[1],
            C = (0, x.oR)(g.Z)
          return (
            (0, a.useEffect)(
              function () {
                var e = (function () {
                    var e = (0, s.Z)(
                      d().mark(function e() {
                        var t
                        return d().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(t = l.find(function (e) {
                                    return (e.userId =
                                      null === r || void 0 === r
                                        ? void 0
                                        : r.creatorId())
                                  }))
                                ) {
                                  e.next = 5
                                  break
                                }
                                E(t.portfolio.creatorName), (e.next = 7)
                                break
                              case 5:
                                return (e.next = 7), n()
                              case 7:
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
                  n = (function () {
                    var e = (0, s.Z)(
                      d().mark(function e() {
                        var n, a, o
                        return d().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (((e.prev = 0), !c)) {
                                    e.next = 4
                                    break
                                  }
                                  return E(c.creatorName), e.abrupt("return")
                                case 4:
                                  if (
                                    null !=
                                    (null === r || void 0 === r
                                      ? void 0
                                      : r.creatorId())
                                  ) {
                                    e.next = 6
                                    break
                                  }
                                  return e.abrupt("return")
                                case 6:
                                  return (
                                    (e.next = 8),
                                    (0, h.makePortfolioActor)(
                                      t,
                                      C.appContext.authProvider
                                    )
                                  )
                                case 8:
                                  return (
                                    (n = e.sent),
                                    (e.next = 11),
                                    n.queryCreatorNameBasic(
                                      null === r || void 0 === r
                                        ? void 0
                                        : r.creatorId()
                                    )
                                  )
                                case 11:
                                  ;(a = e.sent).length > 0
                                    ? ((o = a[0]), u(o), E(o.creatorName))
                                    : E(null),
                                    (e.next = 19)
                                  break
                                case 15:
                                  ;(e.prev = 15),
                                    (e.t0 = e.catch(0)),
                                    E(null),
                                    b.default.error(e.t0)
                                case 19:
                                case "end":
                                  return e.stop()
                              }
                          },
                          e,
                          null,
                          [[0, 15]]
                        )
                      })
                    )
                    return function () {
                      return e.apply(this, arguments)
                    }
                  })()
                e()
              },
              [null === r || void 0 === r ? void 0 : r.creatorId(), l]
            ),
            a.createElement(
              o.gC,
              { textAlign: "center", spacing: "26px" },
              null == w && a.createElement(f.u, null),
              null != w &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    m.E,
                    null,
                    "Awaiting ".concat(
                      w,
                      i == y
                        ? "'s amendment for the changes you requested"
                        : "'s Request for Approval"
                    )
                  ),
                  a.createElement(
                    o.xv,
                    { fontSize: "15px", color: "black" },
                    "This job is still in progress."
                  )
                )
            )
          )
        },
        E = r(45607),
        C = r(42273),
        k = r(66897),
        T = r(22169),
        S = r(76451),
        I = r(18200),
        F = r(17075),
        j = function (e) {
          var t = e.jobFlowObject,
            i = e.setJobFlowClamState,
            l = e.identity,
            c = (0, a.useState)(!1),
            u = (0, n.Z)(c, 2),
            p = u[0],
            f = u[1],
            y = (0, a.useState)(!1),
            w = (0, n.Z)(y, 2),
            j = w[0],
            Z = w[1],
            P = null === t || void 0 === t ? void 0 : t.buyerClaimedPoJCNFT(),
            J = null === t || void 0 === t ? void 0 : t.buyerClaimedOwnNFT(),
            O = (0, E.pm)(),
            z = (0, x.oR)(g.Z).appContext,
            R = z.authProvider,
            A = (function () {
              var e = (0, s.Z)(
                d().mark(function e() {
                  var r, n, a, o, c, u, s, p, m, x, g, v
                  return d().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), f(!0), (e.next = 4), (0, T.Um)()
                            )
                          case 4:
                            if (
                              e.sent &&
                              null !=
                                (null === (r = window.ic) ||
                                void 0 === r ||
                                null === (n = r.plug) ||
                                void 0 === n
                                  ? void 0
                                  : n.principalId)
                            ) {
                              e.next = 11
                              break
                            }
                            return (
                              (e.next = 8),
                              (0, T.Gq)({
                                showToast: k.showToast,
                                toast: O,
                                title: "Claim PoJC NFT"
                              })
                            )
                          case 8:
                            if (e.sent) {
                              e.next = 11
                              break
                            }
                            return e.abrupt("return")
                          case 11:
                            if (
                              null !=
                              (c =
                                null === (a = window.ic) ||
                                void 0 === a ||
                                null === (o = a.plug) ||
                                void 0 === o
                                  ? void 0
                                  : o.principalId)
                            ) {
                              e.next = 15
                              break
                            }
                            return (
                              (0, k.showToast)(
                                O,
                                "Claim PoJC NFT",
                                "We have problem getting your Plug Principal. Please install or unlock your Wallet first. If you switched to a new Plug Account or just installed Plug, reload this page.",
                                "warning"
                              ),
                              e.abrupt("return")
                            )
                          case 15:
                            return (
                              (u = F.R.fromText(c)),
                              (e.next = 18),
                              (0, h.makeJobActor)(l, R)
                            )
                          case 18:
                            return (
                              (s = e.sent),
                              (0, k.showToast)(
                                O,
                                "Claim PoJC NFT",
                                "\ud83e\uddd1\u200d\ud83d\udcbb We are minting PoJC NFT to your Wallet. Please make sure your have unlocked your Wallet.",
                                "info"
                              ),
                              (e.next = 22),
                              M()
                            )
                          case 22:
                            return (
                              (p = e.sent),
                              (m = p.webURI),
                              (x = p.hash),
                              (e.next = 27),
                              s.claimBuyerPOJCNFT(
                                t.jobId(),
                                m,
                                x,
                                u,
                                z.candidAuthProvider()
                              )
                            )
                          case 27:
                            if (!(g = e.sent).ok) {
                              e.next = 34
                              break
                            }
                            ;(0, k.showToast)(
                              O,
                              "Claim PoJC NFT",
                              "\ud83d\udc4d You have successfully minted PoJC NFT. \ud83c\udf81 \ud83e\udd73 Please check your Wallet now. You may have to refresh the wallet for the NFT to show up.",
                              "success"
                            ),
                              (v = g.ok),
                              i({ buyerClaimedPoJCNFT: v }),
                              (e.next = 36)
                            break
                          case 34:
                            throw (b.default.error(g.err), new Error(g.err))
                          case 36:
                            e.next = 42
                            break
                          case 38:
                            ;(e.prev = 38),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, k.showToast)(
                                O,
                                "Claim PoJC NFT",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 42:
                            return (e.prev = 42), f(!1), e.finish(42)
                          case 45:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 38, 42, 45]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            M = (function () {
              var e = (0, s.Z)(
                d().mark(function e() {
                  var n, a, o, i, c, u, s, p, m
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = (0, I.d)()),
                            (e.next = 3),
                            r(28228)("./pojc-graphic".concat(n))
                          )
                        case 3:
                          return (
                            (a = e.sent),
                            (o = a.Base64),
                            (i = a.MimeType),
                            (c = (0, S.convertBase64ToCanisterFileStoreFormat)(
                              o
                            )),
                            (e.next = 9),
                            (0, h.makeNFTFileManagerActor)(l, R)
                          )
                        case 9:
                          return (
                            (u = e.sent),
                            (e.next = 12),
                            u.put(c, i, v.hu.PoJC, t.id())
                          )
                        case 12:
                          if (!((s = e.sent).length < 2)) {
                            e.next = 15
                            break
                          }
                          throw new Error(
                            "Expect NFTFileManager.put to return array with size 2"
                          )
                        case 15:
                          return (
                            (p = s[0]),
                            (m = s[1]),
                            e.abrupt("return", { webURI: p, hash: m })
                          )
                        case 18:
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
            D = (function () {
              var e = (0, s.Z)(
                d().mark(function e() {
                  var r, n, a, o, c, u, s, p, m, f, x
                  return d().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), Z(!0), (e.next = 4), (0, T.Um)()
                            )
                          case 4:
                            if (
                              e.sent &&
                              null !=
                                (null === (r = window.ic) ||
                                void 0 === r ||
                                null === (n = r.plug) ||
                                void 0 === n
                                  ? void 0
                                  : n.principalId)
                            ) {
                              e.next = 11
                              break
                            }
                            return (
                              (e.next = 8),
                              (0, T.Gq)({
                                showToast: k.showToast,
                                toast: O,
                                title: "Claim Deliverable Ownership NFT"
                              })
                            )
                          case 8:
                            if (e.sent) {
                              e.next = 11
                              break
                            }
                            return e.abrupt("return")
                          case 11:
                            if (
                              null !=
                              (c =
                                null === (a = window.ic) ||
                                void 0 === a ||
                                null === (o = a.plug) ||
                                void 0 === o
                                  ? void 0
                                  : o.principalId)
                            ) {
                              e.next = 15
                              break
                            }
                            return (
                              (0, k.showToast)(
                                O,
                                "Claim Deliverable Ownership NFT",
                                "We have problem getting your Plug Principal. Please install or unlock your Wallet first. If you switched to a new Plug Account or just installed Plug, reload this page.",
                                "warning"
                              ),
                              e.abrupt("return")
                            )
                          case 15:
                            if (
                              ((u = F.R.fromText(c)),
                              null != (s = t.deliverableFile()))
                            ) {
                              e.next = 20
                              break
                            }
                            return (
                              (0, k.showStandardErrorMesg)(O),
                              e.abrupt("return")
                            )
                          case 20:
                            if (
                              ((0, k.showToast)(
                                O,
                                "Claim Deliverable Ownership NFT",
                                "\ud83e\uddd1\u200d\ud83d\udcbb We are minting Deliverable Ownership NFT to your Wallet. Please make sure your have unlocked your Wallet.",
                                "info"
                              ),
                              !t.isDeliverableFileImageType())
                            ) {
                              e.next = 25
                              break
                            }
                            ;(p = { webURI: s.webURI, mimeType: s.mimeType }),
                              (e.next = 28)
                            break
                          case 25:
                            return (e.next = 27), N()
                          case 27:
                            p = e.sent
                          case 28:
                            return (e.next = 30), (0, h.makeJobActor)(l, R)
                          case 30:
                            return (
                              (m = e.sent),
                              (e.next = 33),
                              m.claimBuyerOwnNFT(
                                t.jobId(),
                                p,
                                s,
                                u,
                                z.candidAuthProvider()
                              )
                            )
                          case 33:
                            if (!(f = e.sent).ok) {
                              e.next = 40
                              break
                            }
                            ;(0, k.showToast)(
                              O,
                              "Claim Deliverable Ownership NFT",
                              "\ud83d\udc4d You have successfully minted Deliverable Ownership NFT. \ud83c\udf81 \ud83e\udd73 Please check your Wallet now.",
                              "success"
                            ),
                              (x = f.ok),
                              i({ buyerClaimedOwnNFT: x }),
                              (e.next = 42)
                            break
                          case 40:
                            throw (b.default.error(f.err), new Error(f.err))
                          case 42:
                            e.next = 48
                            break
                          case 44:
                            ;(e.prev = 44),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, k.showToast)(
                                O,
                                "Claim Deliverable Ownership NFT",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 48:
                            return (e.prev = 48), Z(!1), e.finish(48)
                          case 51:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 44, 48, 51]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            N = (function () {
              var e = (0, s.Z)(
                d().mark(function e() {
                  var n, a, o, i, c, u, s
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r.e(4080).then(r.bind(r, 14080))
                        case 2:
                          return (
                            (n = e.sent),
                            (a = n.Base64),
                            (o = n.MimeType),
                            (i = (0, S.convertBase64ToCanisterFileStoreFormat)(
                              a
                            )),
                            (e.next = 8),
                            (0, h.makeNFTFileManagerActor)(l, R)
                          )
                        case 8:
                          return (
                            (c = e.sent),
                            (e.next = 11),
                            c.put(i, o, v.hu.DO, t.id())
                          )
                        case 11:
                          if (!((u = e.sent).length < 2)) {
                            e.next = 14
                            break
                          }
                          throw new Error(
                            "Expect NFTFileManager.put to return array with size 2"
                          )
                        case 14:
                          return (
                            (s = u[0]),
                            e.abrupt("return", { webURI: s, mimeType: o })
                          )
                        case 16:
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
          return a.createElement(
            o.gC,
            { textAlign: "center", spacing: "26px" },
            a.createElement(m.E, null, "Job Completed!"),
            a.createElement(
              o.xv,
              { fontSize: "15px", color: "black" },
              "The job has been completed, claim your PoJC & DO NFT now!"
            ),
            a.createElement(
              C.Z,
              {
                w: "260px",
                h: "46px",
                onClick: A,
                isLoading: p,
                isDisabled: P
              },
              P ? "PoJC NFT Claimed" : "Claim your PoJC NFT"
            ),
            a.createElement(
              C.Z,
              {
                w: "260px",
                h: "46px",
                isLoading: j,
                isDisabled: J || !P,
                onClick: D
              },
              J ? "DO NFT Claimed" : "Claim your DO NFT"
            )
          )
        },
        Z = function () {
          return a.createElement(
            o.gC,
            { textAlign: "center", spacing: "26px" },
            a.createElement(m.E, null, "Job Completed!"),
            a.createElement(
              o.xv,
              { fontSize: "15px", color: "black" },
              "\ud83e\udd73 \u2b50\ufe0f Congratulations! You have claimed your NFTs successfully!"
            ),
            a.createElement(
              C.Z,
              { w: "260px", h: "46px", isDisabled: !0 },
              "NFTs Claimed"
            )
          )
        },
        P = r(33224),
        J = r(80988),
        O = r(87462),
        z = r(45987),
        R = r(62639),
        A = r(51815),
        M = r(70216),
        D = r(82175),
        N = r(42340),
        _ = r(92619),
        W = r(59876),
        q = function (e) {
          var t = e.jobFlowObject,
            r = e.identity,
            n = e.setCandidJobFlowState,
            i = e.creatorName,
            l = (0, x.oR)(g.Z),
            c = (0, E.pm)(),
            u = t.deliverableFile(),
            p = (function () {
              var e = (0, s.Z)(
                d().mark(function e(a, o) {
                  var i, u, s
                  return d().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, h.makeJobActor)(r, l.appContext.authProvider)
                            )
                          case 3:
                            return (
                              (i = e.sent),
                              (e.next = 6),
                              i.progressJobFlow(
                                t.id(),
                                l.appContext.candidAuthProvider()
                              )
                            )
                          case 6:
                            if (!(u = e.sent).ok) {
                              e.next = 13
                              break
                            }
                            ;(s = u.ok),
                              n(s),
                              (0, k.showToast)(
                                c,
                                "Approve Creator",
                                "\ud83d\udc4d Awesome! You have successfully approved the creator's deliverable.",
                                "success"
                              ),
                              (e.next = 14)
                            break
                          case 13:
                            throw new Error(u.err)
                          case 14:
                            e.next = 20
                            break
                          case 16:
                            ;(e.prev = 16),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, k.showToast)(
                                c,
                                "Approve Creator",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 20:
                            return (
                              (e.prev = 20), o.setSubmitting(!1), e.finish(20)
                            )
                          case 23:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 16, 20, 23]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })()
          return a.createElement(
            a.Fragment,
            null,
            null == i && a.createElement(f.u, null),
            null != i &&
              null != u &&
              a.createElement(
                D.J9,
                {
                  initialValues: {
                    receiveFinal: !1,
                    copyright: !1,
                    payment: !1
                  },
                  validationSchema: N._9,
                  onSubmit: p,
                  enableReinitialize: !0
                },
                function (e) {
                  var t = e.isSubmitting
                  return a.createElement(
                    D.l0,
                    { style: { width: "100%" } },
                    a.createElement(
                      o.gC,
                      { textAlign: "center", spacing: "26px" },
                      a.createElement(
                        o.QI,
                        {
                          fontSize: "17px",
                          color: "black_2",
                          fontWeight: "normal",
                          maxW: "700px",
                          align: "left",
                          spacing: "12px"
                        },
                        a.createElement(
                          o.HC,
                          null,
                          "By clicking Approve Deliverables button below you are accepting the deliverable file from ",
                          i,
                          "."
                        ),
                        a.createElement(
                          o.HC,
                          null,
                          "If you are not entirely happy with the final deliverable file, click the Request Changes tab above and specify what you would like changed."
                        ),
                        a.createElement(
                          o.HC,
                          null,
                          "Once you approve the deliverable, you can claim your Proof of Job Completion & Deliverable Owenship NFTs."
                        )
                      ),
                      a.createElement(o.xv, {
                        fontSize: "15px",
                        color: "black",
                        maxW: "700px"
                      }),
                      a.createElement(
                        o.gC,
                        {
                          spacing: "8px",
                          align: "center",
                          pl: { base: "0px", md: "50px" }
                        },
                        a.createElement(
                          D.gN,
                          { name: "receiveFinal", type: "checkbox" },
                          function (e) {
                            var t = e.field,
                              r = e.form,
                              n = e.meta
                            return a.createElement(
                              _.Z,
                              {
                                id: "receiveFinal",
                                field: t,
                                isChecked: n.initialValue,
                                isInvalid:
                                  r.errors.receiveFinal &&
                                  r.touched.receiveFinal,
                                errorMesg: r.errors.receiveFinal,
                                isRequired: !0
                              },
                              a.createElement(
                                o.xv,
                                {
                                  fontSize: "15px",
                                  color: "black_2",
                                  fontWeight: "medium"
                                },
                                "I have received the final deliverable"
                              )
                            )
                          }
                        ),
                        a.createElement(
                          D.gN,
                          { name: "copyright", type: "checkbox" },
                          function (e) {
                            var t = e.field,
                              r = e.form,
                              n = e.meta
                            return a.createElement(
                              _.Z,
                              {
                                id: "copyright",
                                field: t,
                                isChecked: n.initialValue,
                                isInvalid:
                                  r.errors.copyright && r.touched.copyright,
                                errorMesg: r.errors.copyright,
                                isRequired: !0
                              },
                              a.createElement(
                                o.xv,
                                {
                                  fontSize: "15px",
                                  color: "black_2",
                                  fontWeight: "medium"
                                },
                                "I agree to the",
                                " ",
                                a.createElement(
                                  M.Z,
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
                                  a.createElement(W.h0, {
                                    ml: "6px",
                                    mb: "2px",
                                    color: "purple"
                                  })
                                )
                              )
                            )
                          }
                        ),
                        a.createElement(
                          D.gN,
                          { name: "payment", type: "checkbox" },
                          function (e) {
                            var t = e.field,
                              r = e.form,
                              n = e.meta
                            return a.createElement(
                              _.Z,
                              {
                                id: "payment",
                                field: t,
                                isChecked: n.initialValue,
                                isInvalid:
                                  r.errors.payment && r.touched.payment,
                                errorMesg: r.errors.payment,
                                isRequired: !0
                              },
                              a.createElement(
                                o.xv,
                                {
                                  fontSize: "15px",
                                  color: "black_2",
                                  fontWeight: "medium"
                                },
                                "I have sent payment to the creator"
                              )
                            )
                          }
                        )
                      ),
                      a.createElement(
                        C.Z,
                        { w: "300px", h: "46px", type: "submit", isLoading: t },
                        "Submit Approval of Deliverables"
                      )
                    )
                  )
                }
              )
          )
        },
        B = r(81967),
        U = r(30381),
        L = r.n(U),
        H = r(5508),
        Y = r(65839),
        V = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            n = e.identity,
            i = e.setCandidJobFlowState,
            l = e.creatorName,
            c = (0, x.oR)(g.Z),
            u = c.user,
            p = c.appContext.authProvider,
            m = (0, E.pm)(),
            v = (function () {
              var e = (0, s.Z)(
                d().mark(function e(t, a) {
                  var o, l, u
                  return d().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), y(t.changes)
                          case 3:
                            return (
                              (e.next = 5),
                              (0, h.makeJobActor)(n, c.appContext.authProvider)
                            )
                          case 5:
                            return (
                              (o = e.sent),
                              (e.next = 8),
                              o.progressJobFlowExceptional(
                                r.id(),
                                c.appContext.candidAuthProvider()
                              )
                            )
                          case 8:
                            if (!(l = e.sent).ok) {
                              e.next = 15
                              break
                            }
                            ;(u = l.ok),
                              i(u),
                              (0, k.showToast)(
                                m,
                                "Request for Changes",
                                "We have submitted your request successfully.",
                                "success"
                              ),
                              (e.next = 16)
                            break
                          case 15:
                            throw new Error(l.err)
                          case 16:
                            e.next = 22
                            break
                          case 18:
                            ;(e.prev = 18),
                              (e.t0 = e.catch(0)),
                              b.default.error(e.t0),
                              (0, k.showToast)(
                                m,
                                "Request for Changes",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 22:
                            return (
                              (e.prev = 22), a.setSubmitting(!1), e.finish(22)
                            )
                          case 25:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 18, 22, 25]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })(),
            y = (function () {
              var e = (0, s.Z)(
                d().mark(function e(a) {
                  var o, i, l, c, s, m, f
                  return d().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (o = (0, H.ep)(L()().utc().toDate())),
                              (e.prev = 1),
                              (i = {
                                text: "[Request for Changes] " + a.trim()
                              }),
                              (l = r.creatorId()),
                              (c = new Y.m(t.id, t.createdBy, u.id)),
                              (s = c.chatRoomId(l)),
                              (e.next = 8),
                              (0, h.makeChatActor)(n, p)
                            )
                          case 8:
                            return (
                              (m = e.sent),
                              (e.next = 11),
                              m.addNewMessage(s, u.id, o, i, (0, H.$6)(p))
                            )
                          case 11:
                            if ((f = e.sent).ok) {
                              e.next = 15
                              break
                            }
                            throw (b.default.error(f.err), new Error(f.err))
                          case 15:
                            e.next = 21
                            break
                          case 17:
                            throw (
                              ((e.prev = 17),
                              (e.t0 = e.catch(1)),
                              b.default.error(e.t0),
                              e.t0)
                            )
                          case 21:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[1, 17]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })()
          return a.createElement(
            a.Fragment,
            null,
            null == l && a.createElement(f.u, null),
            null != l &&
              a.createElement(
                D.J9,
                {
                  initialValues: { changes: "" },
                  validationSchema: N.G_,
                  onSubmit: v,
                  enableReinitialize: !0
                },
                function (e) {
                  var t = e.isSubmitting
                  return a.createElement(
                    D.l0,
                    { style: { width: "100%" } },
                    a.createElement(
                      o.gC,
                      { textAlign: "center", spacing: "26px" },
                      a.createElement(
                        o.QI,
                        {
                          fontSize: "17px",
                          color: "black_2",
                          fontWeight: "normal",
                          maxW: "700px",
                          align: "left",
                          spacing: "12px"
                        },
                        a.createElement(
                          o.HC,
                          null,
                          "Enter a message below to specify the changes you wish to be made to the Deliverable File."
                        ),
                        a.createElement(
                          o.HC,
                          null,
                          "For extra messages, images or files, send them directly in Workspace."
                        ),
                        a.createElement(
                          o.HC,
                          null,
                          "After you have submitted your request, ",
                          l,
                          " can upload a new deliverable file for review."
                        )
                      ),
                      a.createElement(D.gN, { name: "changes" }, function (e) {
                        var t = e.field,
                          r = e.form
                        return a.createElement(B.Z, {
                          id: "changes",
                          placeholder:
                            "Enter a short summary of changes to be sent as a chat message...",
                          w: "100%",
                          maxW: "700px",
                          textAreaHeight: "225px",
                          field: t,
                          isInvalid:
                            r.errors.aboutBrand && r.touched.aboutBrand,
                          errorMesg: r.errors.aboutBrand
                        })
                      }),
                      a.createElement(
                        C.Z,
                        { w: "260px", h: "46px", type: "submit", isLoading: t },
                        "Request for Changes"
                      )
                    )
                  )
                }
              )
          )
        },
        $ = r(81872),
        Q = r(29950),
        X = ["webURI"],
        G = function (e) {
          var t = e.webURI,
            r = (0, z.Z)(e, X),
            n = (function () {
              var e = (0, s.Z)(
                d().mark(function e() {
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          window.open(t, "_blank")
                        case 1:
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
          return a.createElement(
            o.xu,
            (0, O.Z)({ px: "15px", py: "13px" }, r),
            a.createElement(
              Q.$,
              { label: "Click to open in new tab" },
              a.createElement(
                o.Ug,
                null,
                a.createElement(o.LZ, null),
                a.createElement(
                  o.bK,
                  {
                    size: { base: "77px", md: "97px" },
                    bgColor: "gray_light3",
                    borderRadius: "4px",
                    cursor: "pointer",
                    onClick: n
                  },
                  a.createElement(A.hU, {
                    variant: "unstyled",
                    icon: a.createElement($.NFo, { size: "50px" }),
                    mb: "10px"
                  })
                ),
                a.createElement(o.LZ, null)
              )
            )
          )
        },
        K = ["children"],
        ee = function (e) {
          var t = e.children,
            r = (0, z.Z)(e, K)
          return a.createElement(
            R.OK,
            (0, O.Z)(
              {
                w: { base: "200px", md: "252px" },
                h: "47px",
                mx: "13px",
                fontSize: { base: "16px", md: "18px" },
                color: "black",
                backgroundColor: "white",
                fontWeight: "semibold",
                borderRadius: "24px",
                borderWidth: "1px",
                borderColor: "gray_light",
                _selected: { color: "white", bg: "gradient.purple.6" }
              },
              r
            ),
            t
          )
        },
        te = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            i = e.identity,
            l = e.setCandidJobFlowState,
            c = (0, x.oR)(g.Z),
            u = (0, a.useState)(null),
            p = (0, n.Z)(u, 2),
            f = p[0],
            v = p[1],
            y = r.deliverableFile()
          ;(0, a.useEffect)(
            function () {
              function e() {
                return (e = (0, s.Z)(
                  d().mark(function e() {
                    var t, n, a
                    return d().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, h.makePortfolioActor)(
                                  i,
                                  c.appContext.authProvider
                                )
                              )
                            case 3:
                              return (
                                (t = e.sent),
                                (e.next = 6),
                                t.queryCreatorNameBasic(r.creatorId())
                              )
                            case 6:
                              ;(n = e.sent).length > 0
                                ? ((a = n[0]), v(a.creatorName))
                                : v(null),
                                (e.next = 14)
                              break
                            case 10:
                              ;(e.prev = 10),
                                (e.t0 = e.catch(0)),
                                v(null),
                                b.default.error(e.t0)
                            case 14:
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
              !(function () {
                e.apply(this, arguments)
              })()
            },
            [1]
          )
          var w = (function () {
            var e = (0, s.Z)(
              d().mark(function e() {
                return d().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        window.open(y.webURI, "_blank")
                      case 1:
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
          return a.createElement(
            R.mQ,
            {
              variant: "unstyled",
              align: "center",
              size: "md",
              defaultIndex: 1,
              isLazy: !0
            },
            null != y &&
              a.createElement(
                o.gC,
                { textAlign: "center", spacing: "26px", my: "26px" },
                a.createElement(
                  m.E,
                  null,
                  "Review the Deliverable File from ",
                  f
                ),
                a.createElement(
                  o.xu,
                  null,
                  a.createElement(
                    A.zx,
                    {
                      variant: "link",
                      fontSize: "15px",
                      color: "black_2",
                      fontWeight: "medium",
                      textDecoration: "underline",
                      onClick: w
                    },
                    "Open Deliverable File"
                  ),
                  a.createElement(G, { webURI: y.webURI })
                )
              ),
            a.createElement(
              R.td,
              { mb: "12px" },
              a.createElement(ee, null, "Request Changes"),
              a.createElement(ee, null, "Approve")
            ),
            a.createElement(
              R.nP,
              null,
              a.createElement(
                R.x4,
                null,
                a.createElement(V, {
                  job: t,
                  jobFlowObject: r,
                  identity: i,
                  setCandidJobFlowState: l,
                  creatorName: f
                })
              ),
              a.createElement(
                R.x4,
                null,
                a.createElement(q, {
                  jobFlowObject: r,
                  identity: i,
                  setCandidJobFlowState: l,
                  creatorName: f
                })
              )
            )
          )
        },
        re = r(31619),
        ne = v.Op.CreatorSelected,
        ae = v.Op.ApprovalRequested,
        oe = v.Op.ChangesRequested,
        ie = v.Op.Completed,
        le = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            s = e.identity,
            p = e.hasJobFlowInit,
            d = e.creatorPortfolios,
            m = e.setCandidJobFlowState,
            f = e.setJobFlowClamState,
            b = e.jobFlowCreatorBasic,
            h = e.setJobFlowCreatorBasic,
            x = e.switchToTab,
            g = e.mutateJobDispute,
            v = null === r || void 0 === r ? void 0 : r.state(),
            y = (0, a.useState)(null),
            E = (0, n.Z)(y, 2),
            C = E[0],
            k = E[1]
          return a.createElement(
            o.gC,
            {
              align: "center",
              px: { base: "30px", md: "26px" },
              pt: { base: "28px", md: "20px" },
              pb: { base: "120px", md: "30px" },
              spacing: "20px"
            },
            a.createElement(
              o.Ug,
              null,
              a.createElement(J.Z, {
                width: { base: "100%", md: "560px" },
                px: "20px",
                job: t,
                jobFlowObject: r,
                switchToTab: x
              }),
              a.createElement(re.d, {
                position: "absolute",
                right: "20px",
                jobFlowObject: r,
                identity: s,
                mutateJobDispute: g
              })
            ),
            a.createElement(
              o.xu,
              {
                pt: "30px",
                pb: "30px",
                w: { base: "100%", lg: "75%" },
                maxW: "1000px"
              },
              !p && a.createElement(P.j, null),
              (v == ne || v == oe) &&
                a.createElement(w, {
                  identity: s,
                  jobFlowObject: r,
                  jobFlowState: v,
                  creatorPortfolios: d,
                  jobFlowCreatorBasic: b,
                  setJobFlowCreatorBasic: h
                }),
              v == ae &&
                null != r &&
                a.createElement(te, {
                  job: t,
                  jobFlowObject: r,
                  identity: s,
                  setCandidJobFlowState: m
                }),
              v == ie &&
                null != r &&
                !r.hasBrandClaimedAllNFT() &&
                a.createElement(j, {
                  jobFlowObject: r,
                  setJobFlowClamState: f,
                  identity: s
                }),
              v == ie &&
                null != r &&
                r.hasBrandClaimedAllNFT() &&
                a.createElement(Z, null),
              a.createElement(o.iz, { my: "14px", mt: "64px" }),
              a.createElement(
                i.UQ,
                { allowToggle: !0, index: C, onChange: k, pb: "32px" },
                a.createElement(
                  u.J,
                  null,
                  a.createElement(c.E, null, "How to complete this job?"),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      { pb: "12px" },
                      "In order to complete this job, you must finish the following steps:"
                    ),
                    a.createElement(
                      o.QI,
                      { spacing: "8px" },
                      a.createElement(
                        o.HC,
                        null,
                        "Award the job to the creator that has submitted the most impressive pitch."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "Work with the creator on their concept to finalize the job\u2019s deliverable."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "Arrange the job payment between yourself and the creator,",
                        a.createElement("br", null),
                        a.createElement(
                          o.xv,
                          { fontWeight: "light", fontStyle: "italic" },
                          "(as we have not yet implemented the self custody escrow payment smart contract, you will need to do this in the workspace)."
                        )
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "The creator will submit a deliverable file for you to review. If you are happy with the file approve it, if not, request changes."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "Once you have approved the deliverable file and sent payment to the creator, the job will be complete."
                      )
                    )
                  )
                ),
                a.createElement(
                  u.J,
                  null,
                  a.createElement(
                    c.E,
                    null,
                    "How to claim your Proof of Job Completion (PoJC) and Deliverable Ownership (DO) NFTs?"
                  ),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      null,
                      "After selecting the creator that submitted the deliverable, the creator will request approval of the deliverable from you. At the bottom of this page you can formally approve the deliverable. Once approving the deliverable, you can claim your PoJC and Deliverable Owership NFTs."
                    )
                  )
                ),
                a.createElement(
                  u.J,
                  null,
                  a.createElement(c.E, null, "What are the PoJC and DO NFTs?"),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      { pb: "12px" },
                      "Essentially the PoJC NFT is proof that the job has been completed and that you have paid the content creator for the deliverable."
                    ),
                    a.createElement(
                      o.QI,
                      { spacing: "8px" },
                      a.createElement(
                        o.HC,
                        null,
                        "Once a job is completed, both the buyer and creator can claim their NFTs that contain traceable data to the job brief, deliverable, involved parties, drafts, chats etc. which are all stored in the Canister smart contract on-chain."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "The NFTs are unique and represent the experience and process both parties have gone through."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "When the PoJC and Deliverable Ownership NFTs are claimed, they are sent to your Plug Wallet."
                      )
                    ),
                    a.createElement(
                      o.xv,
                      { pt: "12px" },
                      "The DO NFT is a typical NFT. It proves that you have sole ownership of the job's final content deliverable which is linked via on-chain Canister NFT storage. If the DO NFT token is transferred to a new wallet, the ownership of the content deliverable is transferred to the new owner of that wallet."
                    )
                  )
                )
              )
            )
          )
        }
    },
    74402: function (e, t, r) {
      "use strict"
      r.d(t, {
        d: function () {
          return Y
        }
      })
      var n = r(86854),
        a = r(67294),
        o = r(11972),
        i = r(27386),
        l = r(52672),
        c = r(43677),
        u = r(67328),
        s = r(87462),
        p = r(15861),
        d = r(87757),
        m = r.n(d),
        f = r(45607),
        b = r(51815),
        h = r(20792),
        x = r(42273),
        g = r(70216),
        v = r(66897),
        y = r(59876),
        w = r(32512),
        E = r(82175),
        C = r(42340),
        k = r(92619),
        T = r(66985),
        S = r(98400),
        I = r(23256),
        F = r(24686),
        j = r(31681),
        Z = r(29950),
        P = r(81872),
        J = r(76451),
        O = function (e) {
          var t = e.jobFlow,
            r = e.identity,
            i = e.setCandidJobFlowState,
            l = (0, a.useState)(null),
            c = (0, n.Z)(l, 2),
            u = c[0],
            d = c[1],
            O = (0, S.oR)(I.Z),
            z = O.appContext.authProvider,
            R = (0, f.pm)(),
            A = "Job Completion",
            M = (function () {
              var e = (0, p.Z)(
                m().mark(function e(n, a) {
                  var o, l, c, s, p, d, f
                  return m().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), null != u)) {
                              e.next = 4
                              break
                            }
                            return (
                              (0, v.showToast)(
                                R,
                                "Request Approval",
                                "Please select a file for the final deliverable",
                                "warning"
                              ),
                              e.abrupt("return")
                            )
                          case 4:
                            return (e.next = 6), D()
                          case 6:
                            return (
                              (o = e.sent),
                              (l = o.webURI),
                              (c = o.hash),
                              (s = {
                                mimeType: u.mimeType,
                                webURI: l,
                                hash: c
                              }),
                              (e.next = 12),
                              (0, F.makeJobActor)(r, z)
                            )
                          case 12:
                            return (
                              (p = e.sent),
                              (e.next = 15),
                              p.submitDeliverable(
                                t.id,
                                s,
                                O.appContext.candidAuthProvider()
                              )
                            )
                          case 15:
                            if (!(d = e.sent).ok) {
                              e.next = 22
                              break
                            }
                            ;(f = d.ok),
                              i(f),
                              (0, v.showToast)(
                                R,
                                "Request Approval",
                                "\ud83d\udc4d \u2b50\ufe0f Fantastic! You have successfully sent the request for approval.",
                                "success"
                              ),
                              (e.next = 23)
                            break
                          case 22:
                            throw new Error(d.err)
                          case 23:
                            e.next = 29
                            break
                          case 25:
                            ;(e.prev = 25),
                              (e.t0 = e.catch(0)),
                              T.default.error(e.t0),
                              (0, v.showToast)(
                                R,
                                "Request Approval",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 29:
                            return (
                              (e.prev = 29), a.setSubmitting(!1), e.finish(29)
                            )
                          case 32:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 25, 29, 32]]
                  )
                })
              )
              return function (t, r) {
                return e.apply(this, arguments)
              }
            })(),
            D = (function () {
              var e = (0, p.Z)(
                m().mark(function e() {
                  var n, a, o, i
                  return m().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), (0, F.makeNFTFileManagerActor)(r, z)
                          )
                        case 2:
                          return (
                            (n = e.sent),
                            (e.next = 5),
                            n.put(u.fileArray, u.mimeType, j.hu.DO, t.id)
                          )
                        case 5:
                          if (!((a = e.sent).length < 2)) {
                            e.next = 8
                            break
                          }
                          throw new Error(
                            "Expect NFTFileManager.put to return array with size 2"
                          )
                        case 8:
                          return (
                            (o = a[0]),
                            (i = a[1]),
                            e.abrupt("return", { webURI: o, hash: i })
                          )
                        case 11:
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
            N = (0, w.uI)({
              maxFiles: 1,
              accept: j.Et.AnyFileType,
              onDrop: (function () {
                var e = (0, p.Z)(
                  m().mark(function e(t) {
                    var r, n, a, o, i
                    return m().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(t.length > 0)) {
                                e.next = 19
                                break
                              }
                              if (
                                ((e.prev = 1),
                                (r = j.pR.MaxFileSizeBytes),
                                (n = t[0]),
                                !((a = n).size > r))
                              ) {
                                e.next = 8
                                break
                              }
                              return (
                                (0, v.showToast)(
                                  R,
                                  A,
                                  "The file "
                                    .concat(
                                      a.name,
                                      " exceeds the max file size of "
                                    )
                                    .concat(
                                      r,
                                      " bytes. Please select another one."
                                    ),
                                  "warning"
                                ),
                                e.abrupt("return")
                              )
                            case 8:
                              return (
                                (e.next = 10),
                                (0, J.fileToCanisterBinaryStoreFormat)(a)
                              )
                            case 10:
                              ;(o = e.sent),
                                (i = {
                                  fileArray: o,
                                  name: a.name,
                                  mimeType: a.type
                                }),
                                d(i),
                                (e.next = 19)
                              break
                            case 15:
                              ;(e.prev = 15),
                                (e.t0 = e.catch(1)),
                                T.default.error(e.t0),
                                (0, v.showToast)(
                                  R,
                                  A,
                                  "We have a problem processing your file. Please choose a new one.",
                                  "warning"
                                )
                            case 19:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[1, 15]]
                    )
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()
            }),
            _ = N.getRootProps,
            W = N.getInputProps,
            q = function () {
              d(null)
            }
          return a.createElement(
            E.J9,
            {
              initialValues: { copyright: !1, payment: !1 },
              validationSchema: C.xb,
              onSubmit: M,
              enableReinitialize: !0
            },
            function (e) {
              var t = e.isSubmitting
              return a.createElement(
                E.l0,
                { style: { width: "100%" } },
                a.createElement(
                  o.gC,
                  { textAlign: "center", spacing: "26px" },
                  a.createElement(h.E, null, "Complete Job Now"),
                  a.createElement(
                    o.xu,
                    null,
                    a.createElement(
                      b.zx,
                      (0, s.Z)(
                        {
                          variant: "link",
                          fontSize: "15px",
                          color: "black_2",
                          fontWeight: "medium",
                          textDecoration: "underline",
                          mb: "8px"
                        },
                        _({ className: "dropzone" })
                      ),
                      "Upload final deliverable"
                    ),
                    null == u &&
                      a.createElement(
                        o.M5,
                        (0, s.Z)(
                          {
                            minH: "100px",
                            borderRadius: "6px",
                            borderColor: "gray_light5",
                            borderWidth: "1px",
                            cursor: "pointer",
                            px: "12px"
                          },
                          _({ className: "dropzone" })
                        ),
                        a.createElement(
                          b.zx,
                          {
                            variant: "unstyled",
                            position: "relative",
                            color: "gray_light4",
                            fontWeight: "normal"
                          },
                          "Drag and drop file here or click to select"
                        ),
                        a.createElement("input", W())
                      ),
                    null != u &&
                      a.createElement(
                        o.MI,
                        {
                          minChildWidth: "107px",
                          spacing: { base: "6px", sm: "8px" },
                          borderRadius: "6px",
                          borderColor: "gray_light5",
                          borderWidth: "1px"
                        },
                        a.createElement("input", W()),
                        a.createElement(
                          o.xu,
                          { px: "15px", py: "13px", align: "center" },
                          a.createElement(
                            o.bK,
                            {
                              size: "97px",
                              bgColor: "gray_light3",
                              borderRadius: "4px"
                            },
                            a.createElement(b.hU, {
                              top: "-34px",
                              right: "-58px",
                              variant: "unstyled",
                              position: "relative",
                              icon: a.createElement(y.Tw, {
                                w: "10px",
                                color: "gray_light2"
                              }),
                              onClick: q
                            }),
                            a.createElement(
                              o.xu,
                              { position: "relative", left: "-19px" },
                              a.createElement(P.NFo, { size: "50px" })
                            )
                          ),
                          a.createElement(
                            Z.$,
                            { label: u.name },
                            a.createElement(
                              o.xv,
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
                              u.name
                            )
                          )
                        )
                      )
                  ),
                  a.createElement(
                    o.gC,
                    {
                      spacing: "8px",
                      align: "center",
                      pl: { base: "0px", md: "50px" }
                    },
                    a.createElement(
                      E.gN,
                      { name: "copyright", type: "checkbox" },
                      function (e) {
                        var t = e.field,
                          r = e.form,
                          n = e.meta
                        return a.createElement(
                          k.Z,
                          {
                            id: "copyright",
                            field: t,
                            isChecked: n.initialValue,
                            isInvalid:
                              r.errors.copyright && r.touched.copyright,
                            errorMesg: r.errors.copyright,
                            isRequired: !0
                          },
                          a.createElement(
                            o.xv,
                            {
                              fontSize: "15px",
                              color: "black_2",
                              fontWeight: "medium"
                            },
                            "I agree to the",
                            " ",
                            a.createElement(
                              g.Z,
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
                              a.createElement(y.h0, {
                                ml: "6px",
                                mb: "2px",
                                color: "purple"
                              })
                            )
                          )
                        )
                      }
                    ),
                    a.createElement(
                      E.gN,
                      { name: "authentic", type: "checkbox" },
                      function (e) {
                        var t = e.field,
                          r = e.form,
                          n = e.meta
                        return a.createElement(
                          k.Z,
                          {
                            id: "authentic",
                            field: t,
                            isChecked: n.initialValue,
                            isInvalid:
                              r.errors.authentic && r.touched.authentic,
                            errorMesg: r.errors.authentic,
                            isRequired: !0
                          },
                          a.createElement(
                            o.xv,
                            {
                              fontSize: "15px",
                              color: "black_2",
                              fontWeight: "medium"
                            },
                            "I confirm the deliverable is authentic and created by me"
                          )
                        )
                      }
                    ),
                    a.createElement(
                      E.gN,
                      { name: "payment", type: "checkbox" },
                      function (e) {
                        var t = e.field,
                          r = e.form,
                          n = e.meta
                        return a.createElement(
                          k.Z,
                          {
                            id: "payment",
                            field: t,
                            isChecked: n.initialValue,
                            isInvalid: r.errors.payment && r.touched.payment,
                            errorMesg: r.errors.payment,
                            isRequired: !0
                          },
                          a.createElement(
                            o.xv,
                            {
                              fontSize: "15px",
                              color: "black_2",
                              fontWeight: "medium"
                            },
                            "I have received payment from the buyer"
                          )
                        )
                      }
                    )
                  ),
                  a.createElement(
                    x.Z,
                    { w: "260px", h: "46px", type: "submit", isLoading: t },
                    "Request for Approval"
                  )
                )
              )
            }
          )
        },
        z = function () {
          return a.createElement(
            o.gC,
            { textAlign: "center", spacing: "26px" },
            a.createElement(h.E, null, "Request for Approval Sent"),
            a.createElement(
              o.xv,
              { fontSize: "15px", color: "black" },
              "Once the content buyer approves the deliverable, you can claim your PoJC NFT."
            ),
            a.createElement(
              x.Z,
              { w: "260px", h: "46px", isDisabled: !0 },
              "Claim your PoJC NFT"
            )
          )
        },
        R = r(22169),
        A = r(18200),
        M = r(17075),
        D = function (e) {
          var t = e.jobFlow,
            i = e.setJobFlowClamState,
            l = e.identity,
            c = (0, a.useState)(!1),
            u = (0, n.Z)(c, 2),
            s = u[0],
            d = u[1],
            b = (0, f.pm)(),
            g = (0, S.oR)(I.Z).appContext,
            y = g.authProvider,
            w = (function () {
              var e = (0, p.Z)(
                m().mark(function e() {
                  var r, n, a, o, c, u, s, p, f, h, x, w
                  return m().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), d(!0), (e.next = 4), (0, R.Um)()
                            )
                          case 4:
                            if (
                              e.sent &&
                              null !=
                                (null === (r = window.ic) ||
                                void 0 === r ||
                                null === (n = r.plug) ||
                                void 0 === n
                                  ? void 0
                                  : n.principalId)
                            ) {
                              e.next = 11
                              break
                            }
                            return (
                              (e.next = 8),
                              (0, R.Gq)({
                                showToast: v.showToast,
                                toast: b,
                                title: "Claim PoJC NFT"
                              })
                            )
                          case 8:
                            if (e.sent) {
                              e.next = 11
                              break
                            }
                            return e.abrupt("return")
                          case 11:
                            if (
                              null !=
                              (c =
                                null === (a = window.ic) ||
                                void 0 === a ||
                                null === (o = a.plug) ||
                                void 0 === o
                                  ? void 0
                                  : o.principalId)
                            ) {
                              e.next = 15
                              break
                            }
                            return (
                              (0, v.showToast)(
                                b,
                                "Claim PoJC NFT",
                                "We have problem getting your Plug Principal. Please install or unlock your Wallet first. If you switched to a new Plug Account or just installed Plug, reload this page.",
                                "warning"
                              ),
                              e.abrupt("return")
                            )
                          case 15:
                            return (
                              (u = M.R.fromText(c)),
                              (e.next = 18),
                              (0, F.makeJobActor)(l, y)
                            )
                          case 18:
                            return (
                              (s = e.sent),
                              (0, v.showToast)(
                                b,
                                "Claim PoJC NFT",
                                "\ud83e\uddd1\u200d\ud83d\udcbb We are minting PoJC NFT to your Wallet. Please make sure your have unlocked your Wallet.",
                                "info"
                              ),
                              (e.next = 22),
                              E()
                            )
                          case 22:
                            return (
                              (p = e.sent),
                              (f = p.webURI),
                              (h = p.hash),
                              (e.next = 27),
                              s.claimCreatorPOJCNFT(
                                t.jobId,
                                f,
                                h,
                                u,
                                g.candidAuthProvider()
                              )
                            )
                          case 27:
                            if (!(x = e.sent).ok) {
                              e.next = 34
                              break
                            }
                            ;(0, v.showToast)(
                              b,
                              "Claim PoJC NFT",
                              "\ud83d\udc4d You have successfully minted PoJC NFT. \ud83c\udf81 \ud83e\udd73 Please check your Wallet now. You may have to refresh the wallet for the NFT to show up.",
                              "success"
                            ),
                              (w = x.ok),
                              i({ creatorClaimedPoJCNFT: w }),
                              (e.next = 36)
                            break
                          case 34:
                            throw (T.default.error(x.err), new Error(x.err))
                          case 36:
                            e.next = 42
                            break
                          case 38:
                            ;(e.prev = 38),
                              (e.t0 = e.catch(0)),
                              T.default.error(e.t0),
                              (0, v.showToast)(
                                b,
                                "Claim PoJC NFT",
                                "We have a problem submitting your request. Please try again later.",
                                "error"
                              )
                          case 42:
                            return (e.prev = 42), d(!1), e.finish(42)
                          case 45:
                          case "end":
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 38, 42, 45]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            E = (function () {
              var e = (0, p.Z)(
                m().mark(function e() {
                  var n, a, o, i, c, u, s, p, d
                  return m().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = (0, A.d)()),
                            (e.next = 3),
                            r(28228)("./pojc-graphic".concat(n))
                          )
                        case 3:
                          return (
                            (a = e.sent),
                            (o = a.Base64),
                            (i = a.MimeType),
                            (c = (0, J.convertBase64ToCanisterFileStoreFormat)(
                              o
                            )),
                            (e.next = 9),
                            (0, F.makeNFTFileManagerActor)(l, y)
                          )
                        case 9:
                          return (
                            (u = e.sent),
                            (e.next = 12),
                            u.put(c, i, j.hu.PoJC, t.id)
                          )
                        case 12:
                          if (!((s = e.sent).length < 2)) {
                            e.next = 15
                            break
                          }
                          throw new Error(
                            "Expect NFTFileManager.put to return array with size 2"
                          )
                        case 15:
                          return (
                            (p = s[0]),
                            (d = s[1]),
                            e.abrupt("return", { webURI: p, hash: d })
                          )
                        case 18:
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
          return a.createElement(
            o.gC,
            { textAlign: "center", spacing: "26px" },
            a.createElement(h.E, null, "Job Completed!"),
            a.createElement(
              o.xv,
              { fontSize: "15px", color: "black" },
              "The content buyer has approved your deliverable, claim your PoJC NFT now!"
            ),
            a.createElement(
              x.Z,
              { w: "260px", h: "46px", onClick: w, isLoading: s },
              "Claim your PoJC NFT"
            )
          )
        },
        N = function () {
          return a.createElement(
            o.gC,
            { textAlign: "center", spacing: "26px" },
            a.createElement(h.E, null, "Job Completed!"),
            a.createElement(
              o.xv,
              { fontSize: "15px", color: "black" },
              "\ud83e\udd73 \u2b50\ufe0f Congratulations! You have claimed your NFT successfully!"
            ),
            a.createElement(
              x.Z,
              { w: "260px", h: "46px", isDisabled: !0 },
              "PoJC NFT Claimed"
            )
          )
        },
        _ = r(33224),
        W = r(80988),
        q = r(31619),
        B = j.Op.CreatorSelected,
        U = j.Op.ApprovalRequested,
        L = j.Op.ChangesRequested,
        H = j.Op.Completed,
        Y = function (e) {
          var t = e.job,
            r = e.jobFlowObject,
            s = e.identity,
            p = e.hasJobFlowInit,
            d = e.setCandidJobFlowState,
            m = e.setJobFlowClamState,
            f = e.switchToTab,
            b = e.mutateJobDispute,
            h = null === r || void 0 === r ? void 0 : r.state(),
            x = (0, a.useState)(null),
            g = (0, n.Z)(x, 2),
            v = g[0],
            y = g[1]
          return a.createElement(
            o.gC,
            {
              align: "center",
              px: { base: "30px", md: "26px" },
              pt: { base: "28px", md: "20px" },
              pb: { base: "120px", md: "30px" },
              spacing: "20px"
            },
            a.createElement(
              o.Ug,
              null,
              a.createElement(W.Z, {
                width: { base: "100%", md: "560px" },
                px: "20px",
                job: t,
                jobFlowObject: r,
                switchToTab: f
              }),
              a.createElement(q.d, {
                position: "absolute",
                right: "20px",
                jobFlowObject: r,
                identity: s,
                mutateJobDispute: b
              })
            ),
            a.createElement(
              o.xu,
              {
                pt: "30px",
                pb: "30px",
                w: { base: "100%", lg: "75%" },
                maxW: "1000px"
              },
              !p && a.createElement(_.j, null),
              (h == B || h == L) &&
                null != r &&
                a.createElement(O, {
                  jobFlow: r.model(),
                  identity: s,
                  setCandidJobFlowState: d
                }),
              h == U && a.createElement(z, null),
              h == H &&
                null != r &&
                !r.hasCreatorClaimedNFT() &&
                a.createElement(D, {
                  jobFlow: r.model(),
                  setJobFlowClamState: m,
                  identity: s
                }),
              h == H &&
                null != r &&
                r.hasCreatorClaimedNFT() &&
                a.createElement(N, null),
              a.createElement(o.iz, { my: "14px", mt: "64px" }),
              a.createElement(
                i.UQ,
                { allowToggle: !0, index: v, onChange: y, pb: "32px" },
                a.createElement(
                  u.J,
                  null,
                  a.createElement(c.E, null, "How to complete this job?"),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      { pb: "12px" },
                      "In order to complete this job, you must finish the following steps:"
                    ),
                    a.createElement(
                      o.QI,
                      { spacing: "8px" },
                      a.createElement(
                        o.HC,
                        null,
                        "Arrange the job payment between the buyer and yourself, ",
                        a.createElement("br", null),
                        a.createElement(
                          o.xv,
                          { fontWeight: "light", fontStyle: "italic" },
                          "(as we have not yet implemented the self custody escrow payment smart contract, you will need to do this in the workspace)."
                        )
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "Submit the agreed final deliverable file at the bottom of this page for approval (once you have received payment from the buyer)."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        a.createElement(
                          o.xv,
                          null,
                          "When the buyer approves the deliverable file, the job is complete. If the buyer requests changes, make the changes and resubmit the deliverable file."
                        )
                      )
                    )
                  )
                ),
                a.createElement(
                  u.J,
                  null,
                  a.createElement(
                    c.E,
                    null,
                    "How to claim your Proof of Job Completion (PoJC) NFT?"
                  ),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      null,
                      "Once you submit the request for approval at the bottom of this page, the buyer will be prompted to approve the completion of the job. Following approval from the buyer, you can claim your PoJC NFT."
                    )
                  )
                ),
                a.createElement(
                  u.J,
                  null,
                  a.createElement(c.E, null, "What is the PoJC NFT?"),
                  a.createElement(
                    l.P,
                    null,
                    a.createElement(
                      o.xv,
                      { pb: "12px" },
                      "Esentially the PoJC NFT is proof that you have completed this job and that you are the authentic creator of the content."
                    ),
                    a.createElement(
                      o.QI,
                      { spacing: "8px" },
                      a.createElement(
                        o.HC,
                        null,
                        "Once a job is completed, both the buyer and creator can claim their NFTs that contain traceable data to the job brief, deliverable, involved parties, drafts, chats etc. which are all stored in the Canister smart contract on-chain."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "The NFTs are unique and represent the experience and process both parties have gone through."
                      ),
                      a.createElement(
                        o.HC,
                        null,
                        "When the PoJC NFT is claimed it is sent to your Plug Wallet."
                      )
                    )
                  )
                )
              )
            )
          )
        }
    },
    97705: function (e, t, r) {
      "use strict"
      r.d(t, {
        h: function () {
          return d
        }
      })
      var n = r(15861),
        a = r(86854),
        o = r(87757),
        i = r.n(o),
        l = r(67294),
        c = r(98400),
        u = r(23256),
        s = r(24686),
        p = r(66985),
        d = function (e) {
          var t = (0, l.useState)(null),
            r = (0, a.Z)(t, 2),
            o = r[0],
            d = r[1],
            m = (0, l.useState)(null),
            f = (0, a.Z)(m, 2),
            b = f[0],
            h = f[1],
            x = (0, c.oR)(u.Z)
          return (
            (0, l.useEffect)(
              function () {
                function t() {
                  return (t = (0, n.Z)(
                    i().mark(function t() {
                      var r, n, a, l
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (null === e) {
                                  t.next = 22
                                  break
                                }
                                if (o !== e) {
                                  t.next = 3
                                  break
                                }
                                return t.abrupt("return")
                              case 3:
                                if (
                                  (null === (r = x.portfolio) || void 0 === r
                                    ? void 0
                                    : r.id) !== e
                                ) {
                                  t.next = 7
                                  break
                                }
                                return h(x.portfolio), d(e), t.abrupt("return")
                              case 7:
                                return (
                                  (t.prev = 7),
                                  (t.next = 10),
                                  (0, s.makePortfolioActor)()
                                )
                              case 10:
                                return (
                                  (n = t.sent),
                                  (t.next = 13),
                                  n.loadPortfolio(Number(e))
                                )
                              case 13:
                                ;(a = t.sent).length > 0 &&
                                  ((l = a[0]),
                                  h(l),
                                  d(e),
                                  x.portfolio.upateWithPortfolioModel(l)),
                                  (t.next = 20)
                                break
                              case 17:
                                ;(t.prev = 17),
                                  (t.t0 = t.catch(7)),
                                  p.default.error(t.t0)
                              case 20:
                                t.next = 23
                                break
                              case 22:
                                p.default.info("portfolioId is null or empty")
                              case 23:
                              case "end":
                                return t.stop()
                            }
                        },
                        t,
                        null,
                        [[7, 17]]
                      )
                    })
                  )).apply(this, arguments)
                }
                !(function () {
                  t.apply(this, arguments)
                })()
              },
              [e]
            ),
            b
          )
        }
    },
    87140: function (e, t, r) {
      "use strict"
      r.d(t, {
        a: function () {
          return c
        }
      })
      var n = r(43144),
        a = r(15671),
        o = r(4942),
        i = r(30381),
        l = r.n(i),
        c = (0, n.Z)(function e(t) {
          var r = this
          ;(0, a.Z)(this, e),
            (0, o.Z)(this, "createdATInLocalJSDate", function () {
              var e = Number(r.canisterModel.createdAtUTC / 1000000n)
              return l().utc(e).local().toDate()
            }),
            (0, o.Z)(this, "sentATInLocalJSDate", function () {
              var e = Number(r.canisterModel.sentAtUTC / 1000000n)
              return l().utc(e).local().toDate()
            }),
            (this.canisterModel = t)
        })
    },
    65839: function (e, t, r) {
      "use strict"
      r.d(t, {
        m: function () {
          return i
        }
      })
      var n = r(43144),
        a = r(15671),
        o = r(4942),
        i = (0, n.Z)(function e(t, r, n) {
          var i = this
          ;(0, a.Z)(this, e),
            (0, o.Z)(this, "chatRoomId", function (e) {
              var t = i.creatorId(e)
              return ""
                .concat(i.jobId, "-")
                .concat(i.jobPosterId, "-")
                .concat(t)
            }),
            (0, o.Z)(this, "creatorId", function (e) {
              return i.myUserId == i.jobPosterId ? e : i.myUserId
            }),
            (this.jobId = t),
            (this.jobPosterId = r),
            (this.myUserId = n)
        })
    },
    34076: function (e, t, r) {
      "use strict"
      r.d(t, {
        u: function () {
          return p
        }
      })
      var n = r(43144),
        a = r(15671),
        o = r(4942),
        i = r(30381),
        l = r.n(i),
        c = r(31681),
        u = r(67839),
        s = r(5508),
        p = (0, n.Z)(function e(t) {
          var r = this
          ;(0, a.Z)(this, e),
            (0, o.Z)(this, "id", function () {
              return r.candidModel.id
            }),
            (0, o.Z)(this, "createdAtHuman", function () {
              var e = (0, s.ju)(r.candidModel.createdAt)
              return l()(e).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, o.Z)(this, "paymentType", function () {
              var e = r.candidModel.paymentType
              return (0, s.wI)(e)
            }),
            (0, o.Z)(this, "colorOfPaymentType", function () {
              var e = r.paymentType(),
                t = c.CS.PaymentType,
                n = t.LumpSum,
                a = t.Beam
              switch (e) {
                case n:
                  return "yellow"
                case a:
                  return "green"
              }
            }),
            (0, o.Z)(this, "isBeamPayment", function () {
              return r.paymentType() == c.CS.PaymentType.Beam
            }),
            (0, o.Z)(this, "isLumpSumPayment", function () {
              return r.paymentType() == c.CS.PaymentType.LumpSum
            }),
            (0, o.Z)(this, "tokenType", function () {
              return (0, s.wI)(r.candidModel.tokenType)
            }),
            (0, o.Z)(this, "initialDeposit", function () {
              var e = r.candidModel.initialDeposit
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "escrowAmount", function () {
              var e = r.candidModel.escrowAmount
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "creatorClaimable", function () {
              var e = r.candidModel.creatorClaimable
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "creatorClaimed", function () {
              var e = r.candidModel.creatorClaimed
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "buyerClaimable", function () {
              var e = r.candidModel.buyerClaimable
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "buyerClaimed", function () {
              var e = r.candidModel.buyerClaimed
              return (0, u.$)(e)
            }),
            (0, o.Z)(this, "totalOwnedByCanister", function () {
              return (
                r.escrowAmount() + r.creatorClaimable() + r.buyerClaimable()
              )
            }),
            (this.candidModel = t)
        })
    },
    18224: function (e, t, r) {
      "use strict"
      r.d(t, {
        y: function () {
          return p
        }
      })
      var n = r(43144),
        a = r(15671),
        o = r(4942),
        i = r(30381),
        l = r.n(i),
        c = r(31681),
        u = r(67839),
        s = r(5508),
        p = (0, n.Z)(function e(t) {
          var r = this
          ;(0, a.Z)(this, e),
            (0, o.Z)(this, "id", function () {
              return r.candidModel.id
            }),
            (0, o.Z)(this, "jobId", function () {
              return r.candidModel.jobId
            }),
            (0, o.Z)(this, "buyerId", function () {
              return r.candidModel.buyerId
            }),
            (0, o.Z)(this, "creatorId", function () {
              return r.candidModel.creatorId
            }),
            (0, o.Z)(this, "buyerStory", function () {
              return r.candidModel.buyerStory
            }),
            (0, o.Z)(this, "creatorStory", function () {
              return r.candidModel.creatorStory
            }),
            (0, o.Z)(this, "proposalIdList", function () {
              return null == r.candidModel.proposalIdList
                ? null
                : (0, s._b)(r.candidModel.proposalIdList)
            }),
            (0, o.Z)(this, "proposalFirstId", function () {
              var e = r.proposalIdList()
              return null == e ? null : e[0]
            }),
            (0, o.Z)(this, "createdBy", function () {
              return r.candidModel.createdBy
            }),
            (0, o.Z)(this, "model", function () {
              return r.candidModel
            }),
            (0, o.Z)(this, "state", function () {
              return (0, s.wI)(r.candidModel.state)
            }),
            (0, o.Z)(this, "colorOfState", function () {
              switch (r.state()) {
                case c.h0.Resolved:
                  return "green"
                case c.h0.Pending:
                  return "red"
                default:
                  return "yellow"
              }
            }),
            (0, o.Z)(this, "createdAtHuman", function () {
              var e = (0, s.ju)(r.candidModel.createdAt)
              return l()(e).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, o.Z)(this, "deliberatedAtHuman", function () {
              var e = r.outcome()
              if (null == e) return null
              var t = (0, s.ju)(e.deliberatedAt)
              return l()(t).format("Do MMM YYYY HH:mm:ss")
            }),
            (0, o.Z)(this, "hasValidOutcome", function () {
              return null != r.outcome()
            }),
            (0, o.Z)(this, "outcome", function () {
              return r.state() != c.h0.Resolved
                ? null
                : r.candidModel.state[c.h0.Resolved]
            }),
            (0, o.Z)(this, "outcomeBuyerAllocation", function () {
              var e = r.outcome()
              if (null == e) return null
              var t = e.buyerAllocation
              return (0, u.$)(t)
            }),
            (0, o.Z)(this, "outcomeCreatorAllocation", function () {
              var e = r.outcome()
              if (null == e) return null
              var t = e.creatorAllocation
              return (0, u.$)(t)
            }),
            (0, o.Z)(this, "outcomeBuyerAllocatedTokens", function (e) {
              var t = r.outcomeBuyerAllocation()
              return null == t ? null : t * e
            }),
            (0, o.Z)(this, "outcomeCreatorAllocatedTokens", function (e) {
              var t = r.outcomeCreatorAllocation()
              return null == t ? null : t * e
            }),
            (this.candidModel = t)
        })
    },
    82458: function (e, t, r) {
      "use strict"
      r.d(t, {
        c: function () {
          return s
        }
      })
      var n = r(43144),
        a = r(15671),
        o = r(4942),
        i = r(5508),
        l = r(48954),
        c = r(31681),
        u = l.VX.claimed,
        s = (0, n.Z)(function e(t) {
          var r = this
          ;(0, a.Z)(this, e),
            (0, o.Z)(this, "id", function () {
              return r.candidModel.id
            }),
            (0, o.Z)(this, "jobId", function () {
              return r.candidModel.jobId
            }),
            (0, o.Z)(this, "creatorId", function () {
              return r.candidModel.creatorId
            }),
            (0, o.Z)(this, "buyerId", function () {
              return r.candidModel.createdBy
            }),
            (0, o.Z)(this, "isCreator", function (e) {
              return r.candidModel.creatorId == e
            }),
            (0, o.Z)(this, "isBuyer", function (e) {
              return r.candidModel.createdBy == e
            }),
            (0, o.Z)(this, "model", function () {
              return r.candidModel
            }),
            (0, o.Z)(this, "deliverableFile", function () {
              var e = r.candidModel.deliverableFile
              return e.length > 0 ? e[0] : null
            }),
            (0, o.Z)(this, "state", function () {
              return (0, i.DH)(r.candidModel.state)
            }),
            (0, o.Z)(this, "isInDispute", function () {
              return r.state() == c.Op.Disputed
            }),
            (0, o.Z)(this, "hasDispute", function () {
              var e = r.state()
              return e == c.Op.Disputed || e == c.Op.DisputeResolved
            }),
            (0, o.Z)(this, "isInDisputeByMe", function (e) {
              var t = c.Op.Disputed
              return r.state() == t && r.candidModel.state[t] == e
            }),
            (0, o.Z)(this, "isDeliverableFileImageType", function () {
              if (null == r.deliverableFile()) return !1
              var e = r.deliverableFile().mimeType
              return c.pR.ImageTypeList.includes(e)
            }),
            (0, o.Z)(this, "buyerClaimedPoJCNFT", function () {
              return r.candidModel.buyerClaimedPoJCNFT.hasOwnProperty(u)
            }),
            (0, o.Z)(this, "buyerClaimedOwnNFT", function () {
              return r.candidModel.buyerClaimedOwnNFT.hasOwnProperty(u)
            }),
            (0, o.Z)(this, "hasBrandClaimedAllNFT", function () {
              return r.buyerClaimedPoJCNFT() && r.buyerClaimedOwnNFT()
            }),
            (0, o.Z)(this, "hasCreatorClaimedNFT", function () {
              return r.candidModel.creatorClaimedPoJCNFT.hasOwnProperty(u)
            }),
            (this.candidModel = t)
        })
    },
    18200: function (e, t, r) {
      "use strict"
      r.d(t, {
        d: function () {
          return o
        }
      })
      var n = r(87784),
        a = Array.from(Array(5).keys()),
        o = function () {
          return (0, n.T)(a)[0]
        }
    },
    42340: function (e, t, r) {
      "use strict"
      r.d(t, {
        B9: function () {
          return d
        },
        G_: function () {
          return b
        },
        Gl: function () {
          return o
        },
        HQ: function () {
          return c
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
          return p
        },
        QZ: function () {
          return u
        },
        UD: function () {
          return l
        },
        Ux: function () {
          return g
        },
        _9: function () {
          return f
        },
        dp: function () {
          return i
        },
        eH: function () {
          return s
        },
        xb: function () {
          return x
        }
      })
      var n = r(74231),
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
        i = (0, n.Ry)().shape({
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
        l = (0, n.Ry)().shape({
          title: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(100, "Too Long!")
            .required("Title is required"),
          description: (0, n.Z_)()
            .min(3, "Too Short!")
            .max(2e3, "Too Long!")
            .required("Description is required")
        }),
        c = (0, n.Ry)().shape({
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
        u = (0, n.Ry)().shape({
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
        p = (0, n.Ry)().shape({
          preferredStyleDesc: (0, n.Z_)().max(300, "Too Long!"),
          preferredTools: (0, n.Z_)().max(300, "Too Long!"),
          preferredStyledWebsite: (0, n.Z_)()
            .url("Invalid website - Requires valid domain and (http or https).")
            .max(300, "Too Long!")
        }),
        d = (0, n.Ry)().shape({
          futurePlan: (0, n.Z_)().max(300, "Too Long!")
        }),
        m = "Please check all the boxes before approving.",
        f = (0, n.Ry)().shape({
          receiveFinal: (0, n.O7)().required(m),
          copyright: (0, n.O7)().required(m),
          payment: (0, n.O7)().required(m)
        }),
        b = (0, n.Ry)().shape({ changes: (0, n.Z_)().max(500, "Too Long!") }),
        h = "Please check all the boxes before requesting approval.",
        x = (0, n.Ry)().shape({
          copyright: (0, n.O7)().required(h),
          authentic: (0, n.O7)().required(h),
          payment: (0, n.O7)().required(h)
        }),
        g = (0, n.Ry)().shape({
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
    5985: function (e, t, r) {
      "use strict"
      r.a(
        e,
        async function (e, n) {
          try {
            r.r(t),
              r.d(t, {
                actorRunner: function () {
                  return c
                }
              })
            var a = r(15861),
              o = r(87757),
              i = r.n(o),
              l = (await Promise.resolve().then(r.bind(r, 66985))).default,
              c = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, n) {
                    var a, o, c, u, s, p
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = t.appStore),
                                (o = t.showErrorMesg),
                                (c = t.finalClosure),
                                (u = t.errorClosure),
                                (e.prev = 1),
                                !n)
                              ) {
                                e.next = 5
                                break
                              }
                              return (e.next = 5), n()
                            case 5:
                              e.next = 15
                              break
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(1)),
                                (e.next = 11),
                                Promise.resolve().then(r.bind(r, 24686))
                              )
                            case 11:
                              ;(s = e.sent),
                                (p = s.SessionExpiredError),
                                e.t0 instanceof p
                                  ? a && a.setSessionExpired(!0)
                                  : (l.error(e.t0), o && o()),
                                u && u()
                            case 15:
                              return (e.prev = 15), c && c(), e.finish(15)
                            case 18:
                            case "end":
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[1, 7, 15, 18]]
                    )
                  })
                )
                return function (t, r) {
                  return e.apply(this, arguments)
                }
              })()
            n()
          } catch (u) {
            n(u)
          }
        },
        1
      )
    },
    91349: function (e, t, r) {
      "use strict"
      r.a(
        e,
        async function (e, n) {
          try {
            r.d(t, {
              E: function () {
                return f
              },
              J: function () {
                return m
              }
            })
            var a = r(15861),
              o = r(87757),
              i = r.n(o),
              l = r(12617),
              c = r(31681),
              u = await Promise.resolve().then(r.bind(r, 24686)),
              s = u.makeJobActor,
              p = u.makeChatActor,
              d = u.makeFileBucketActor,
              m = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, r, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              b(
                                t,
                                r,
                                s,
                                n.jobFileStoreCanisterIdList,
                                n.setJobFileStoreCanisterIdList,
                                n.authProvider
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
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })(),
              f = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, r, n) {
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              b(
                                t,
                                r,
                                p,
                                n.chatFileStoreCanisterIdList,
                                n.setChatFileStoreCanisterIdList,
                                n.authProvider
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
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })(),
              b = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, r, n, a, o, l) {
                    var c, u, s, p, m, f, b, g, v
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((c = function () {}), !(u = h(t)).remote)) {
                              e.next = 22
                              break
                            }
                            if (
                              ((s = a || []),
                              (p = u.remote),
                              null != (m = s[p]))
                            ) {
                              e.next = 15
                              break
                            }
                            return (e.next = 9), n(null, l)
                          case 9:
                            return (
                              (f = e.sent),
                              (e.next = 12),
                              f.getFileBucketsCanisterIdList()
                            )
                          case 12:
                            ;(b = e.sent), o(b), (m = b[p])
                          case 15:
                            if (null == m) {
                              e.next = 20
                              break
                            }
                            return (e.next = 18), d(m, l)
                          case 18:
                            ;(g = e.sent), (c = g.getFileById)
                          case 20:
                            e.next = 26
                            break
                          case 22:
                            return (e.next = 24), n(null, l)
                          case 24:
                            ;(v = e.sent), (c = v.getFileById)
                          case 26:
                            return (e.next = 28), x(c, t, r)
                          case 28:
                            return e.abrupt("return", e.sent)
                          case 29:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, r, n, a, o, i) {
                  return e.apply(this, arguments)
                }
              })(),
              h = function (e) {
                var t = e.split(c.Db.IdSeparator)
                return t.length == c.Db.RemoteFileTokensSize
                  ? { remote: t[0] }
                  : { local: t[0] }
              },
              x = (function () {
                var e = (0, a.Z)(
                  i().mark(function e(t, r, n) {
                    var a, o
                    return i().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t(r)
                          case 2:
                            if (0 != (a = e.sent).length) {
                              e.next = 5
                              break
                            }
                            return e.abrupt("return", null)
                          case 5:
                            return (
                              (o = a[0]), e.abrupt("return", (0, l.v)(o, n))
                            )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t, r, n) {
                  return e.apply(this, arguments)
                }
              })()
            n()
          } catch (g) {
            n(g)
          }
        },
        1
      )
    },
    47245: function (e, t, r) {
      "use strict"
      r.d(t, {
        h: function () {
          return u
        },
        t: function () {
          return c
        }
      })
      var n = r(41451),
        a = r(72023),
        o = r(48764),
        i = r(88263),
        l = r(48764).Buffer,
        c = function (e, t) {
          var r,
            l =
              ((r = "\naccount-id"),
              Array.from(r).map(function (e) {
                return e.charCodeAt(0)
              })),
            c = a.sha224.create()
          c.update(
            [].concat(
              (0, n.Z)(l),
              (0, n.Z)(e.toUint8Array()),
              (0, n.Z)(null !== t && void 0 !== t ? t : Array(32).fill(0))
            )
          )
          var u = new Uint8Array(c.array()),
            s = (function (e) {
              var t = new ArrayBuffer(4)
              return (
                new DataView(t).setUint32(0, i.ZP.crc32(o.Buffer.from(e)), !1),
                o.Buffer.from(t)
              )
            })(u)
          return (function (e) {
            return e.reduce(function (e, t) {
              return e + t.toString(16).padStart(2, "0")
            }, "")
          })(new Uint8Array([].concat((0, n.Z)(s), (0, n.Z)(u))))
        },
        u = function (e) {
          return Uint8Array.from(l.from(e, "hex"))
        }
    },
    67839: function (e, t, r) {
      "use strict"
      r.d(t, {
        $: function () {
          return a
        }
      })
      var n = 1e6,
        a = function (e) {
          return Number(e) / n
        }
    },
    12617: function (e, t, r) {
      "use strict"
      function n(e, t) {
        var r = new Uint8Array(e),
          n = new Blob([r], { type: t })
        return URL.createObjectURL(n)
      }
      r.d(t, {
        v: function () {
          return n
        }
      })
    },
    76451: function (e, t, r) {
      "use strict"
      r.r(t),
        r.d(t, {
          arrayBufferToImgSrc: function () {
            return c
          },
          convertBase64ToCanisterFileStoreFormat: function () {
            return m
          },
          fileToCanisterBinaryStoreFormat: function () {
            return p
          },
          resizeImage: function () {
            return f
          }
        })
      var n = r(15861),
        a = r(87757),
        o = r.n(a),
        i = r(98005),
        l = r.n(i)
      function c(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "jpeg",
          r = new Uint8Array(e),
          n = new Blob([r], { type: "image/".concat(t) }),
          a = URL.createObjectURL(n)
        return a
      }
      function u(e) {
        return s.apply(this, arguments)
      }
      function s() {
        return (s = (0, n.Z)(
          o().mark(function e(t) {
            return o().wrap(function (e) {
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
      function p(e) {
        return d.apply(this, arguments)
      }
      function d() {
        return (d = (0, n.Z)(
          o().mark(function e(t) {
            var r
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), u(t)
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
          o().mark(function e(t, r) {
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        new (l())(t, {
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
    64835: function (e, t, r) {
      "use strict"
      r.d(t, {
        O: function () {
          return n
        }
      })
      var n = function (e, t) {
        var r = new RegExp("^-?\\d+(?:\\.\\d{0,".concat(t, "})?"), "gi")
        return e.toString().match(r)[0]
      }
    },
    28228: function (e, t, r) {
      var n = {
        "./pojc-graphic0": [6549, 6549],
        "./pojc-graphic0.js": [6549, 6549],
        "./pojc-graphic1": [94974, 4974],
        "./pojc-graphic1.js": [94974, 4974],
        "./pojc-graphic2": [76538, 6538],
        "./pojc-graphic2.js": [76538, 6538],
        "./pojc-graphic3": [65354, 5354],
        "./pojc-graphic3.js": [65354, 5354],
        "./pojc-graphic4": [83588, 3588],
        "./pojc-graphic4.js": [83588, 3588]
      }
      function a(e) {
        if (!r.o(n, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = "MODULE_NOT_FOUND"), t)
          })
        var t = n[e],
          a = t[0]
        return r.e(t[1]).then(function () {
          return r(a)
        })
      }
      ;(a.keys = function () {
        return Object.keys(n)
      }),
        (a.id = 28228),
        (e.exports = a)
    }
  }
])
