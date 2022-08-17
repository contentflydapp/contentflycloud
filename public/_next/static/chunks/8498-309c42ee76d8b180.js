"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8498],
  {
    91204: function (e, t, n) {
      n.d(t, {
        Mi: function () {
          return F
        },
        Qh: function () {
          return C
        },
        UO: function () {
          return w
        },
        Xc: function () {
          return M
        },
        uf: function () {
          return S
        }
      })
      var r = n(63949),
        i = n(38554),
        a = n.n(i),
        o = n(21190),
        u = n(94930),
        l = n(67294)
      function s(e, t) {
        if (null == e) return {}
        var n,
          r,
          i = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
        return i
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }),
          c.apply(this, arguments)
        )
      }
      var d = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1]
        },
        f = {
          position: { left: 0, top: 0, bottom: 0, width: "100%" },
          enter: { x: 0, y: 0 },
          exit: { x: "-100%", y: 0 }
        },
        m = {
          position: { right: 0, top: 0, bottom: 0, width: "100%" },
          enter: { x: 0, y: 0 },
          exit: { x: "100%", y: 0 }
        },
        p = {
          position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "-100%" }
        },
        v = {
          position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "100%" }
        }
      function x(e) {
        var t
        switch (null != (t = null == e ? void 0 : e.direction) ? t : "right") {
          case "right":
          default:
            return m
          case "left":
            return f
          case "bottom":
            return v
          case "top":
            return p
        }
      }
      var h = {
          enter: { duration: 0.2, ease: d.easeOut },
          exit: { duration: 0.1, ease: d.easeIn }
        },
        E = function (e, t) {
          return c({}, e, {
            delay: (0, r.hj)(t) ? t : null == t ? void 0 : t.enter
          })
        },
        y = function (e, t) {
          return c({}, e, {
            delay: (0, r.hj)(t) ? t : null == t ? void 0 : t.exit
          })
        },
        g = [
          "in",
          "unmountOnExit",
          "animateOpacity",
          "startingHeight",
          "endingHeight",
          "style",
          "className",
          "transition",
          "transitionEnd"
        ],
        b = {
          exit: {
            height: { duration: 0.2, ease: d.ease },
            opacity: { duration: 0.3, ease: d.ease }
          },
          enter: {
            height: { duration: 0.3, ease: d.ease },
            opacity: { duration: 0.4, ease: d.ease }
          }
        },
        k = {
          exit: function (e) {
            var t,
              n,
              r = e.animateOpacity,
              i = e.startingHeight,
              a = e.transition,
              o = e.transitionEnd,
              u = e.delay
            return c(
              {},
              r && {
                opacity:
                  ((n = i), null != n && parseInt(n.toString(), 10) > 0 ? 1 : 0)
              },
              {
                height: i,
                transitionEnd: null == o ? void 0 : o.exit,
                transition:
                  null != (t = null == a ? void 0 : a.exit) ? t : y(b.exit, u)
              }
            )
          },
          enter: function (e) {
            var t,
              n = e.animateOpacity,
              r = e.endingHeight,
              i = e.transition,
              a = e.transitionEnd,
              o = e.delay
            return c({}, n && { opacity: 1 }, {
              height: r,
              transitionEnd: null == a ? void 0 : a.enter,
              transition:
                null != (t = null == i ? void 0 : i.enter) ? t : E(b.enter, o)
            })
          }
        },
        w = l.forwardRef(function (e, t) {
          var n = e.in,
            i = e.unmountOnExit,
            d = e.animateOpacity,
            f = void 0 === d || d,
            m = e.startingHeight,
            p = void 0 === m ? 0 : m,
            v = e.endingHeight,
            x = void 0 === v ? "auto" : v,
            h = e.style,
            E = e.className,
            y = e.transition,
            b = e.transitionEnd,
            w = s(e, g),
            O = l.useState(!1),
            S = O[0],
            N = O[1]
          l.useEffect(function () {
            var e = setTimeout(function () {
              N(!0)
            })
            return function () {
              return clearTimeout(e)
            }
          }, []),
            (0, r.ZK)({
              condition: Boolean(p > 0 && i),
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
            })
          var Z = parseFloat(p.toString()) > 0,
            C = {
              startingHeight: p,
              endingHeight: x,
              animateOpacity: f,
              transition: S ? y : { enter: { duration: 0 } },
              transitionEnd: a()(b, {
                exit: i ? void 0 : { display: Z ? "block" : "none" }
              })
            },
            T = !i || n,
            A = n || i ? "enter" : "exit"
          return l.createElement(
            o.M,
            { initial: !1, custom: C },
            T &&
              l.createElement(
                u.E.div,
                c({ ref: t }, w, {
                  className: (0, r.cx)("chakra-collapse", E),
                  style: c({ overflow: "hidden", display: "block" }, h),
                  custom: C,
                  variants: k,
                  initial: !!i && "exit",
                  animate: A,
                  exit: "exit"
                })
              )
          )
        })
      r.Ts && (w.displayName = "Collapse")
      var O = [
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        S = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            enter: function (e) {
              var t,
                n = void 0 === e ? {} : e,
                r = n.transition,
                i = n.transitionEnd,
                a = n.delay
              return {
                opacity: 1,
                transition:
                  null != (t = null == r ? void 0 : r.enter)
                    ? t
                    : E(h.enter, a),
                transitionEnd: null == i ? void 0 : i.enter
              }
            },
            exit: function (e) {
              var t,
                n = void 0 === e ? {} : e,
                r = n.transition,
                i = n.transitionEnd,
                a = n.delay
              return {
                opacity: 0,
                transition:
                  null != (t = null == r ? void 0 : r.exit) ? t : y(h.exit, a),
                transitionEnd: null == i ? void 0 : i.exit
              }
            }
          }
        },
        N = l.forwardRef(function (e, t) {
          var n = e.unmountOnExit,
            i = e.in,
            a = e.className,
            d = e.transition,
            f = e.transitionEnd,
            m = e.delay,
            p = s(e, O),
            v = i || n ? "enter" : "exit",
            x = !n || (i && n),
            h = { transition: d, transitionEnd: f, delay: m }
          return l.createElement(
            o.M,
            { custom: h },
            x &&
              l.createElement(
                u.E.div,
                c(
                  { ref: t, className: (0, r.cx)("chakra-fade", a), custom: h },
                  S,
                  { animate: v },
                  p
                )
              )
          )
        })
      r.Ts && (N.displayName = "Fade")
      var Z = [
          "unmountOnExit",
          "in",
          "reverse",
          "initialScale",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        C = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            exit: function (e) {
              var t,
                n = e.reverse,
                r = e.initialScale,
                i = e.transition,
                a = e.transitionEnd,
                o = e.delay
              return c(
                { opacity: 0 },
                n
                  ? { scale: r, transitionEnd: null == a ? void 0 : a.exit }
                  : {
                      transitionEnd: c(
                        { scale: r },
                        null == a ? void 0 : a.exit
                      )
                    },
                {
                  transition:
                    null != (t = null == i ? void 0 : i.exit) ? t : y(h.exit, o)
                }
              )
            },
            enter: function (e) {
              var t,
                n = e.transitionEnd,
                r = e.transition,
                i = e.delay
              return {
                opacity: 1,
                scale: 1,
                transition:
                  null != (t = null == r ? void 0 : r.enter)
                    ? t
                    : E(h.enter, i),
                transitionEnd: null == n ? void 0 : n.enter
              }
            }
          }
        },
        T = l.forwardRef(function (e, t) {
          var n = e.unmountOnExit,
            i = e.in,
            a = e.reverse,
            d = void 0 === a || a,
            f = e.initialScale,
            m = void 0 === f ? 0.95 : f,
            p = e.className,
            v = e.transition,
            x = e.transitionEnd,
            h = e.delay,
            E = s(e, Z),
            y = !n || (i && n),
            g = i || n ? "enter" : "exit",
            b = {
              initialScale: m,
              reverse: d,
              transition: v,
              transitionEnd: x,
              delay: h
            }
          return l.createElement(
            o.M,
            { custom: b },
            y &&
              l.createElement(
                u.E.div,
                c(
                  { ref: t, className: (0, r.cx)("chakra-offset-slide", p) },
                  C,
                  { animate: g, custom: b },
                  E
                )
              )
          )
        })
      r.Ts && (T.displayName = "ScaleFade")
      var A = [
          "direction",
          "style",
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        P = {
          exit: { duration: 0.15, ease: d.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 }
        },
        H = {
          exit: function (e) {
            var t,
              n = e.direction,
              r = e.transition,
              i = e.transitionEnd,
              a = e.delay
            return c({}, x({ direction: n }).exit, {
              transition:
                null != (t = null == r ? void 0 : r.exit) ? t : y(P.exit, a),
              transitionEnd: null == i ? void 0 : i.exit
            })
          },
          enter: function (e) {
            var t,
              n = e.direction,
              r = e.transitionEnd,
              i = e.transition,
              a = e.delay
            return c({}, x({ direction: n }).enter, {
              transition:
                null != (t = null == i ? void 0 : i.enter) ? t : E(P.enter, a),
              transitionEnd: null == r ? void 0 : r.enter
            })
          }
        },
        F = l.forwardRef(function (e, t) {
          var n = e.direction,
            i = void 0 === n ? "right" : n,
            a = e.style,
            d = e.unmountOnExit,
            f = e.in,
            m = e.className,
            p = e.transition,
            v = e.transitionEnd,
            h = e.delay,
            E = s(e, A),
            y = x({ direction: i }),
            g = Object.assign({ position: "fixed" }, y.position, a),
            b = !d || (f && d),
            k = f || d ? "enter" : "exit",
            w = { transitionEnd: v, transition: p, direction: i, delay: h }
          return l.createElement(
            o.M,
            { custom: w },
            b &&
              l.createElement(
                u.E.div,
                c({}, E, {
                  ref: t,
                  initial: "exit",
                  className: (0, r.cx)("chakra-slide", m),
                  animate: k,
                  exit: "exit",
                  custom: w,
                  variants: H,
                  style: g
                })
              )
          )
        })
      r.Ts && (F.displayName = "Slide")
      var X = [
          "unmountOnExit",
          "in",
          "reverse",
          "className",
          "offsetX",
          "offsetY",
          "transition",
          "transitionEnd",
          "delay"
        ],
        M = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: {
            initial: function (e) {
              var t,
                n = e.offsetX,
                r = e.offsetY,
                i = e.transition,
                a = e.transitionEnd,
                o = e.delay
              return {
                opacity: 0,
                x: n,
                y: r,
                transition:
                  null != (t = null == i ? void 0 : i.exit) ? t : y(h.exit, o),
                transitionEnd: null == a ? void 0 : a.exit
              }
            },
            enter: function (e) {
              var t,
                n = e.transition,
                r = e.transitionEnd,
                i = e.delay
              return {
                opacity: 1,
                x: 0,
                y: 0,
                transition:
                  null != (t = null == n ? void 0 : n.enter)
                    ? t
                    : E(h.enter, i),
                transitionEnd: null == r ? void 0 : r.enter
              }
            },
            exit: function (e) {
              var t,
                n = e.offsetY,
                r = e.offsetX,
                i = e.transition,
                a = e.transitionEnd,
                o = e.reverse,
                u = e.delay,
                l = { x: r, y: n }
              return c(
                {
                  opacity: 0,
                  transition:
                    null != (t = null == i ? void 0 : i.exit) ? t : y(h.exit, u)
                },
                o
                  ? c({}, l, { transitionEnd: null == a ? void 0 : a.exit })
                  : { transitionEnd: c({}, l, null == a ? void 0 : a.exit) }
              )
            }
          }
        },
        I = l.forwardRef(function (e, t) {
          var n = e.unmountOnExit,
            i = e.in,
            a = e.reverse,
            d = void 0 === a || a,
            f = e.className,
            m = e.offsetX,
            p = void 0 === m ? 0 : m,
            v = e.offsetY,
            x = void 0 === v ? 8 : v,
            h = e.transition,
            E = e.transitionEnd,
            y = e.delay,
            g = s(e, X),
            b = !n || (i && n),
            k = i || n ? "enter" : "exit",
            w = {
              offsetX: p,
              offsetY: x,
              reverse: d,
              transition: h,
              transitionEnd: E,
              delay: y
            }
          return l.createElement(
            o.M,
            { custom: w },
            b &&
              l.createElement(
                u.E.div,
                c(
                  {
                    ref: t,
                    className: (0, r.cx)("chakra-offset-slide", f),
                    custom: w
                  },
                  M,
                  { animate: k },
                  g
                )
              )
          )
        })
      r.Ts && (I.displayName = "SlideFade")
    },
    99171: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o
        }
      })
      var r = n(87462),
        i = n(67294),
        a = n(11972),
        o = function (e) {
          return i.createElement(
            a.kC,
            { justifyContent: "center", alignItems: "center", height: "40px" },
            i.createElement(
              a.X6,
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
      n.d(t, {
        o: function () {
          return o
        }
      })
      var r = n(87462),
        i = n(67294),
        a = n(11972),
        o = function (e) {
          return i.createElement(
            a.Kq,
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
      n.d(t, {
        u: function () {
          return a
        }
      })
      var r = n(67294),
        i = n(66956),
        a = function () {
          return r.createElement(i.$, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "purple_light",
            color: "purple",
            size: "xl"
          })
        }
    },
    19483: function (e, t, n) {
      n.d(t, {
        g: function () {
          return o
        }
      })
      var r = n(67294),
        i = n(11972),
        a = n(3962),
        o = function (e) {
          var t = e.title,
            n = e.maxStorageLimitBytes,
            o = e.usedSpaceArray
          return r.createElement(
            i.xu,
            null,
            r.createElement(i.X6, { size: "md" }, t),
            r.createElement(
              a.iA,
              { variant: "striped", colorScheme: "blue" },
              r.createElement(
                a.Rn,
                null,
                "Max Storage Limit: ",
                n / 1073741824,
                "Gb"
              ),
              r.createElement(
                a.hr,
                null,
                r.createElement(
                  a.Tr,
                  null,
                  r.createElement(a.Th, null, "Store ID"),
                  r.createElement(a.Th, { isNumeric: !0 }, "Space used (Mb)"),
                  r.createElement(a.Th, null, "%")
                )
              ),
              r.createElement(
                a.p3,
                null,
                o.map(function (e, t) {
                  var i = Number(e),
                    o = (i / 1048576).toFixed(2),
                    u = ((i / n) * 100).toFixed()
                  return r.createElement(
                    a.Tr,
                    { key: t },
                    r.createElement(a.Td, null, t),
                    r.createElement(a.Td, null, o, "Mb"),
                    r.createElement(a.Td, null, u, "%")
                  )
                })
              )
            )
          )
        }
    },
    77329: function (e, t, n) {
      n.d(t, {
        L: function () {
          return m
        }
      })
      var r = n(15861),
        i = n(86854),
        a = n(87757),
        o = n.n(a),
        u = n(67294),
        l = n(27386),
        s = n(11972),
        c = n(51815),
        d = n(31681),
        f = n(66985),
        m = function (e) {
          var t = e.makeActor,
            n = e.identity,
            a = (0, u.useState)(null),
            m = (0, i.Z)(a, 2),
            p = m[0],
            v = m[1],
            x = (0, u.useState)(!1),
            h = (0, i.Z)(x, 2),
            E = h[0],
            y = h[1]
          function g() {
            return (g = (0, r.Z)(
              o().mark(function e() {
                var r, i, a
                return o().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), y(!0), (e.next = 4), t(n)
                        case 4:
                          return (r = e.sent), (e.next = 7), r.getActorBalance()
                        case 7:
                          ;(i = e.sent),
                            (a = Number(i) / d.Ly.OneTC),
                            v(a),
                            (e.next = 15)
                          break
                        case 12:
                          ;(e.prev = 12),
                            (e.t0 = e.catch(0)),
                            f.default.error(e.t0)
                        case 15:
                          return (e.prev = 15), y(!1), e.finish(15)
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
          return u.createElement(
            l.Qd,
            null,
            u.createElement(
              "h2",
              null,
              u.createElement(
                l.KF,
                null,
                u.createElement(
                  s.xu,
                  { flex: "1", textAlign: "left" },
                  u.createElement(s.X6, { size: "md" }, "General")
                ),
                u.createElement(l.XE, null)
              )
            ),
            u.createElement(
              l.Hk,
              { pb: 4 },
              u.createElement(
                s.gC,
                {
                  spacing: 4,
                  align: "stretch",
                  pb: "20px",
                  textAlign: "center"
                },
                u.createElement(
                  c.zx,
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
                null != p && u.createElement(s.xv, null, p, " TC")
              )
            )
          )
        }
    },
    30647: function (e, t, n) {
      n.d(t, {
        S: function () {
          return s
        }
      })
      var r = n(15861),
        i = n(87757),
        a = n.n(i),
        o = n(64380),
        u = n(22169),
        l = n(31681),
        s = (function () {
          var e = (0, r.Z)(
            a().mark(function e(t, n) {
              var r, i, s, c
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(r = l.Ho.InternetIdentity),
                        (i = l.Ho.Plug),
                        (e.t0 = t),
                        (e.next = e.t0 === r ? 4 : e.t0 === i ? 8 : 12)
                      break
                    case 4:
                      return (e.next = 6), (0, o.l)()
                    case 6:
                      return (s = e.sent), e.abrupt("return", s)
                    case 8:
                      return (e.next = 10), (0, u.gX)(n || {})
                    case 10:
                      return (c = e.sent), e.abrupt("return", c)
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
          return N
        },
        bv: function () {
          return S
        },
        vV: function () {
          return Z
        },
        v_: function () {
          return C
        }
      })
      var r = n(87462),
        i = n(15861),
        a = n(86854),
        o = n(87757),
        u = n.n(o),
        l = n(67294),
        s = n(5152),
        c = n.n(s),
        d = n(11163),
        f = n(30647),
        m = n(11972),
        p = n(49697),
        v = n(49162),
        x = n(2243),
        h = function () {
          return l.createElement(
            p.W,
            { h: "120vh" },
            l.createElement(
              m.xu,
              { mt: "120px", mb: "30px" },
              l.createElement(v.Z, {
                width: "300px",
                src: "/logo-horizontal-light.png",
                alt: "Content Fly logo"
              })
            ),
            l.createElement(x.u, null)
          )
        },
        E = n(98400),
        y = n(23256),
        g = n(66985),
        b = n(24686),
        k = c()(function () {
          return Promise.all([
            n.e(5297),
            n.e(6804),
            n.e(5607),
            n.e(5658),
            n.e(9213)
          ]).then(n.bind(n, 89213))
        }),
        w = c()(function () {
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
        O = c()(function () {
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
            return T(e, null !== t && void 0 !== t ? t : O, null, !1)(n)
          }
        },
        N = function (e) {
          return function (t) {
            return T(
              e,
              k,
              "uvaa7-rsf6v-tltrs-totun-6gyme-b47mg-du643-ke37g-3fsqd-fpbrf-xae",
              !1
            )(t)
          }
        },
        Z = function (e) {
          return function (t) {
            return T(e, w, null, !1)(t)
          }
        },
        C = function (e) {
          return function (t) {
            return T(e, w, null, !0)(t)
          }
        },
        T = function (e, t, o, s) {
          return function (c) {
            var m = (0, l.useState)(null),
              p = (0, a.Z)(m, 2),
              v = p[0],
              x = p[1],
              k = (0, l.useState)(!0),
              O = (0, a.Z)(k, 2),
              S = O[0],
              N = O[1],
              Z = (0, l.useState)(""),
              C = (0, a.Z)(Z, 2),
              T = C[0],
              A = C[1],
              P = (0, l.useState)(1),
              H = (0, a.Z)(P, 2),
              F = H[0],
              X = H[1],
              M = (0, d.useRouter)(),
              I = (0, E.oR)(y.Z),
              R = I.appContext.authProvider,
              j = I.appContext.candidAuthProvider(),
              z = null !== t && void 0 !== t ? t : w
            ;(0, l.useEffect)(
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
                                  N(!0),
                                  (e.prev = 1),
                                  (e.next = 4),
                                  (0, f.S)(I.appContext.authProvider, {
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
                                if (!U(e.sent)) {
                                  e.next = 14
                                  break
                                }
                                if (!I.user.isGuest()) {
                                  e.next = 13
                                  break
                                }
                                return (e.next = 13), L(t)
                              case 13:
                                _(t)
                              case 14:
                                e.next = 18
                                break
                              case 16:
                                return (e.next = 18), B()
                              case 18:
                                e.next = 23
                                break
                              case 20:
                                ;(e.prev = 20),
                                  (e.t0 = e.catch(1)),
                                  g.default.error(e.t0)
                              case 23:
                                return (e.prev = 23), N(!1), e.finish(23)
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
              [F]
            )
            var L = (function () {
                var e = (0, i.Z)(
                  u().mark(function e(t) {
                    var n, r, i, a
                    return u().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                (0, b.makeUserProfileActor)(t, R)
                              )
                            case 3:
                              return (r = e.sent), (e.next = 6), r.login(j)
                            case 6:
                              if (
                                ((i = e.sent),
                                !(
                                  (null === (n = i.ok) || void 0 === n
                                    ? void 0
                                    : n.length) > 0
                                ))
                              ) {
                                e.next = 11
                                break
                              }
                              return (
                                (a = i.ok[0]),
                                (e.next = 11),
                                I.updateForNewSignupLogin(a)
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
              Y = function () {
                X(F + 1)
              },
              _ = (function () {
                var e = (0, i.Z)(
                  u().mark(function e(t) {
                    var r, i
                    return u().wrap(function (e) {
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
                              (i = r.Usergeek).setPrincipal(t.getPrincipal()),
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
            function G() {
              return (
                (G = (0, i.Z)(
                  u().mark(function e(t) {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null != t) {
                              e.next = 3
                              break
                            }
                            return _(t), e.abrupt("return")
                          case 3:
                            return (e.next = 5), t.getPrincipal()
                          case 5:
                            U(e.sent)
                              ? _(t)
                              : A(
                                  "You don't have permission to access this page."
                                )
                          case 7:
                          case "end":
                            return e.stop()
                        }
                    }, e)
                  })
                )),
                G.apply(this, arguments)
              )
            }
            function U(e) {
              if (null == o) return !0
              var t = o.split(",").map(function (e) {
                return e.trim()
              })
              return "" == o.trim() || t.includes(e.toString())
            }
            var B = (function () {
                var e = (0, i.Z)(
                  u().mark(function e() {
                    var t
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (t = (0, b.makeLogout)(R)), (e.next = 3), t()
                          case 3:
                            _(null), I.reset(), (0, b.clearCache)()
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
              W = (function () {
                var e = (0, i.Z)(
                  u().mark(function e() {
                    return u().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), B()
                          case 2:
                            M.push("/")
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
            return null != v
              ? l.createElement(
                  e,
                  (0, r.Z)({ identity: v, logout: W, triggerAuthUpdate: Y }, c)
                )
              : S
              ? l.createElement(h, null)
              : s
              ? l.createElement(e, (0, r.Z)({}, c, { triggerAuthUpdate: Y }))
              : l.createElement(z, {
                  handleAuthenticated: function (e) {
                    return G.apply(this, arguments)
                  },
                  warningMesg: T
                })
          }
        }
    }
  }
])
