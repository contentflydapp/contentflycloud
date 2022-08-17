"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3674],
  {
    46386: function (t, n, e) {
      e.d(n, {
        Jf: function () {
          return f
        },
        dw: function () {
          return c
        },
        kN: function () {
          return x
        },
        vh: function () {
          return d
        }
      })
      var i = e(64737),
        a = e(78042),
        r = e(63949),
        o = (e(19113), e(67294))
      function s(t, n) {
        if (null == t) return {}
        var e,
          i,
          a = {},
          r = Object.keys(t)
        for (i = 0; i < r.length; i++)
          (e = r[i]), n.indexOf(e) >= 0 || (a[e] = t[e])
        return a
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n]
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              }
              return t
            }),
          l.apply(this, arguments)
        )
      }
      var u = ["className", "children"],
        c = (0, a.Gp)(function (t, n) {
          var e = (0, a.yK)()
          return o.createElement(
            a.m$.dt,
            l({ ref: n }, t, {
              className: (0, r.cx)("chakra-stat__label", t.className),
              __css: e.label
            })
          )
        })
      r.Ts && (c.displayName = "StatLabel")
      var d = (0, a.Gp)(function (t, n) {
        var e = (0, a.yK)()
        return o.createElement(
          a.m$.dd,
          l({ ref: n }, t, {
            className: (0, r.cx)("chakra-stat__help-text", t.className),
            __css: e.helpText
          })
        )
      })
      r.Ts && (d.displayName = "StatHelpText")
      var f = (0, a.Gp)(function (t, n) {
        var e = (0, a.yK)()
        return o.createElement(
          a.m$.dd,
          l({ ref: n }, t, {
            className: (0, r.cx)("chakra-stat__number", t.className),
            __css: l({}, e.number, {
              fontFeatureSettings: "pnum",
              fontVariantNumeric: "proportional-nums"
            })
          })
        )
      })
      r.Ts && (f.displayName = "StatNumber")
      var m = function (t) {
        return o.createElement(
          i.JO,
          l({ color: "red.400" }, t),
          o.createElement("path", {
            fill: "currentColor",
            d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
          })
        )
      }
      r.Ts && (m.displayName = "StatDownArrow")
      var v = function (t) {
        return o.createElement(
          i.JO,
          l({ color: "green.400" }, t),
          o.createElement("path", {
            fill: "currentColor",
            d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
          })
        )
      }
      r.Ts && (v.displayName = "StatUpArrow")
      r.Ts
      var x = (0, a.Gp)(function (t, n) {
        var e = (0, a.jC)("Stat", t),
          i = l({ position: "relative", flex: "1 1 0%" }, e.container),
          c = (0, a.Lr)(t),
          d = c.className,
          f = c.children,
          m = s(c, u)
        return o.createElement(
          a.Fo,
          { value: e },
          o.createElement(
            a.m$.div,
            l({ ref: n }, m, {
              className: (0, r.cx)("chakra-stat", d),
              __css: i
            }),
            o.createElement("dl", null, f)
          )
        )
      })
      r.Ts && (x.displayName = "Stat")
      var y = (0, a.Gp)(function (t, n) {
        return o.createElement(
          a.m$.div,
          l({}, t, {
            ref: n,
            role: "group",
            className: (0, r.cx)("chakra-stat__group", t.className),
            __css: {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "flex-start"
            }
          })
        )
      })
      r.Ts && (y.displayName = "StatGroup")
    },
    91204: function (t, n, e) {
      e.d(n, {
        Mi: function () {
          return F
        },
        Qh: function () {
          return T
        },
        UO: function () {
          return _
        },
        Xc: function () {
          return I
        },
        uf: function () {
          return w
        }
      })
      var i = e(63949),
        a = e(38554),
        r = e.n(a),
        o = e(21190),
        s = e(94930),
        l = e(67294)
      function u(t, n) {
        if (null == t) return {}
        var e,
          i,
          a = {},
          r = Object.keys(t)
        for (i = 0; i < r.length; i++)
          (e = r[i]), n.indexOf(e) >= 0 || (a[e] = t[e])
        return a
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n]
                for (var i in e)
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
              }
              return t
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
        v = {
          position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "-100%" }
        },
        x = {
          position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
          enter: { x: 0, y: 0 },
          exit: { x: 0, y: "100%" }
        }
      function y(t) {
        var n
        switch (null != (n = null == t ? void 0 : t.direction) ? n : "right") {
          case "right":
          default:
            return m
          case "left":
            return f
          case "bottom":
            return x
          case "top":
            return v
        }
      }
      var p = {
          enter: { duration: 0.2, ease: d.easeOut },
          exit: { duration: 0.1, ease: d.easeIn }
        },
        E = function (t, n) {
          return c({}, t, {
            delay: (0, i.hj)(n) ? n : null == n ? void 0 : n.enter
          })
        },
        h = function (t, n) {
          return c({}, t, {
            delay: (0, i.hj)(n) ? n : null == n ? void 0 : n.exit
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
        N = {
          exit: {
            height: { duration: 0.2, ease: d.ease },
            opacity: { duration: 0.3, ease: d.ease }
          },
          enter: {
            height: { duration: 0.3, ease: d.ease },
            opacity: { duration: 0.4, ease: d.ease }
          }
        },
        O = {
          exit: function (t) {
            var n,
              e,
              i = t.animateOpacity,
              a = t.startingHeight,
              r = t.transition,
              o = t.transitionEnd,
              s = t.delay
            return c(
              {},
              i && {
                opacity:
                  ((e = a), null != e && parseInt(e.toString(), 10) > 0 ? 1 : 0)
              },
              {
                height: a,
                transitionEnd: null == o ? void 0 : o.exit,
                transition:
                  null != (n = null == r ? void 0 : r.exit) ? n : h(N.exit, s)
              }
            )
          },
          enter: function (t) {
            var n,
              e = t.animateOpacity,
              i = t.endingHeight,
              a = t.transition,
              r = t.transitionEnd,
              o = t.delay
            return c({}, e && { opacity: 1 }, {
              height: i,
              transitionEnd: null == r ? void 0 : r.enter,
              transition:
                null != (n = null == a ? void 0 : a.enter) ? n : E(N.enter, o)
            })
          }
        },
        _ = l.forwardRef(function (t, n) {
          var e = t.in,
            a = t.unmountOnExit,
            d = t.animateOpacity,
            f = void 0 === d || d,
            m = t.startingHeight,
            v = void 0 === m ? 0 : m,
            x = t.endingHeight,
            y = void 0 === x ? "auto" : x,
            p = t.style,
            E = t.className,
            h = t.transition,
            N = t.transitionEnd,
            _ = u(t, g),
            b = l.useState(!1),
            w = b[0],
            k = b[1]
          l.useEffect(function () {
            var t = setTimeout(function () {
              k(!0)
            })
            return function () {
              return clearTimeout(t)
            }
          }, []),
            (0, i.ZK)({
              condition: Boolean(v > 0 && a),
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
            })
          var S = parseFloat(v.toString()) > 0,
            T = {
              startingHeight: v,
              endingHeight: y,
              animateOpacity: f,
              transition: w ? h : { enter: { duration: 0 } },
              transitionEnd: r()(N, {
                exit: a ? void 0 : { display: S ? "block" : "none" }
              })
            },
            j = !a || e,
            C = e || a ? "enter" : "exit"
          return l.createElement(
            o.M,
            { initial: !1, custom: T },
            j &&
              l.createElement(
                s.E.div,
                c({ ref: n }, _, {
                  className: (0, i.cx)("chakra-collapse", E),
                  style: c({ overflow: "hidden", display: "block" }, p),
                  custom: T,
                  variants: O,
                  initial: !!a && "exit",
                  animate: C,
                  exit: "exit"
                })
              )
          )
        })
      i.Ts && (_.displayName = "Collapse")
      var b = [
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        w = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            enter: function (t) {
              var n,
                e = void 0 === t ? {} : t,
                i = e.transition,
                a = e.transitionEnd,
                r = e.delay
              return {
                opacity: 1,
                transition:
                  null != (n = null == i ? void 0 : i.enter)
                    ? n
                    : E(p.enter, r),
                transitionEnd: null == a ? void 0 : a.enter
              }
            },
            exit: function (t) {
              var n,
                e = void 0 === t ? {} : t,
                i = e.transition,
                a = e.transitionEnd,
                r = e.delay
              return {
                opacity: 0,
                transition:
                  null != (n = null == i ? void 0 : i.exit) ? n : h(p.exit, r),
                transitionEnd: null == a ? void 0 : a.exit
              }
            }
          }
        },
        k = l.forwardRef(function (t, n) {
          var e = t.unmountOnExit,
            a = t.in,
            r = t.className,
            d = t.transition,
            f = t.transitionEnd,
            m = t.delay,
            v = u(t, b),
            x = a || e ? "enter" : "exit",
            y = !e || (a && e),
            p = { transition: d, transitionEnd: f, delay: m }
          return l.createElement(
            o.M,
            { custom: p },
            y &&
              l.createElement(
                s.E.div,
                c(
                  { ref: n, className: (0, i.cx)("chakra-fade", r), custom: p },
                  w,
                  { animate: x },
                  v
                )
              )
          )
        })
      i.Ts && (k.displayName = "Fade")
      var S = [
          "unmountOnExit",
          "in",
          "reverse",
          "initialScale",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        T = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            exit: function (t) {
              var n,
                e = t.reverse,
                i = t.initialScale,
                a = t.transition,
                r = t.transitionEnd,
                o = t.delay
              return c(
                { opacity: 0 },
                e
                  ? { scale: i, transitionEnd: null == r ? void 0 : r.exit }
                  : {
                      transitionEnd: c(
                        { scale: i },
                        null == r ? void 0 : r.exit
                      )
                    },
                {
                  transition:
                    null != (n = null == a ? void 0 : a.exit) ? n : h(p.exit, o)
                }
              )
            },
            enter: function (t) {
              var n,
                e = t.transitionEnd,
                i = t.transition,
                a = t.delay
              return {
                opacity: 1,
                scale: 1,
                transition:
                  null != (n = null == i ? void 0 : i.enter)
                    ? n
                    : E(p.enter, a),
                transitionEnd: null == e ? void 0 : e.enter
              }
            }
          }
        },
        j = l.forwardRef(function (t, n) {
          var e = t.unmountOnExit,
            a = t.in,
            r = t.reverse,
            d = void 0 === r || r,
            f = t.initialScale,
            m = void 0 === f ? 0.95 : f,
            v = t.className,
            x = t.transition,
            y = t.transitionEnd,
            p = t.delay,
            E = u(t, S),
            h = !e || (a && e),
            g = a || e ? "enter" : "exit",
            N = {
              initialScale: m,
              reverse: d,
              transition: x,
              transitionEnd: y,
              delay: p
            }
          return l.createElement(
            o.M,
            { custom: N },
            h &&
              l.createElement(
                s.E.div,
                c(
                  { ref: n, className: (0, i.cx)("chakra-offset-slide", v) },
                  T,
                  { animate: g, custom: N },
                  E
                )
              )
          )
        })
      i.Ts && (j.displayName = "ScaleFade")
      var C = [
          "direction",
          "style",
          "unmountOnExit",
          "in",
          "className",
          "transition",
          "transitionEnd",
          "delay"
        ],
        H = {
          exit: { duration: 0.15, ease: d.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 }
        },
        M = {
          exit: function (t) {
            var n,
              e = t.direction,
              i = t.transition,
              a = t.transitionEnd,
              r = t.delay
            return c({}, y({ direction: e }).exit, {
              transition:
                null != (n = null == i ? void 0 : i.exit) ? n : h(H.exit, r),
              transitionEnd: null == a ? void 0 : a.exit
            })
          },
          enter: function (t) {
            var n,
              e = t.direction,
              i = t.transitionEnd,
              a = t.transition,
              r = t.delay
            return c({}, y({ direction: e }).enter, {
              transition:
                null != (n = null == a ? void 0 : a.enter) ? n : E(H.enter, r),
              transitionEnd: null == i ? void 0 : i.enter
            })
          }
        },
        F = l.forwardRef(function (t, n) {
          var e = t.direction,
            a = void 0 === e ? "right" : e,
            r = t.style,
            d = t.unmountOnExit,
            f = t.in,
            m = t.className,
            v = t.transition,
            x = t.transitionEnd,
            p = t.delay,
            E = u(t, C),
            h = y({ direction: a }),
            g = Object.assign({ position: "fixed" }, h.position, r),
            N = !d || (f && d),
            O = f || d ? "enter" : "exit",
            _ = { transitionEnd: x, transition: v, direction: a, delay: p }
          return l.createElement(
            o.M,
            { custom: _ },
            N &&
              l.createElement(
                s.E.div,
                c({}, E, {
                  ref: n,
                  initial: "exit",
                  className: (0, i.cx)("chakra-slide", m),
                  animate: O,
                  exit: "exit",
                  custom: _,
                  variants: M,
                  style: g
                })
              )
          )
        })
      i.Ts && (F.displayName = "Slide")
      var G = [
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
        I = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: {
            initial: function (t) {
              var n,
                e = t.offsetX,
                i = t.offsetY,
                a = t.transition,
                r = t.transitionEnd,
                o = t.delay
              return {
                opacity: 0,
                x: e,
                y: i,
                transition:
                  null != (n = null == a ? void 0 : a.exit) ? n : h(p.exit, o),
                transitionEnd: null == r ? void 0 : r.exit
              }
            },
            enter: function (t) {
              var n,
                e = t.transition,
                i = t.transitionEnd,
                a = t.delay
              return {
                opacity: 1,
                x: 0,
                y: 0,
                transition:
                  null != (n = null == e ? void 0 : e.enter)
                    ? n
                    : E(p.enter, a),
                transitionEnd: null == i ? void 0 : i.enter
              }
            },
            exit: function (t) {
              var n,
                e = t.offsetY,
                i = t.offsetX,
                a = t.transition,
                r = t.transitionEnd,
                o = t.reverse,
                s = t.delay,
                l = { x: i, y: e }
              return c(
                {
                  opacity: 0,
                  transition:
                    null != (n = null == a ? void 0 : a.exit) ? n : h(p.exit, s)
                },
                o
                  ? c({}, l, { transitionEnd: null == r ? void 0 : r.exit })
                  : { transitionEnd: c({}, l, null == r ? void 0 : r.exit) }
              )
            }
          }
        },
        X = l.forwardRef(function (t, n) {
          var e = t.unmountOnExit,
            a = t.in,
            r = t.reverse,
            d = void 0 === r || r,
            f = t.className,
            m = t.offsetX,
            v = void 0 === m ? 0 : m,
            x = t.offsetY,
            y = void 0 === x ? 8 : x,
            p = t.transition,
            E = t.transitionEnd,
            h = t.delay,
            g = u(t, G),
            N = !e || (a && e),
            O = a || e ? "enter" : "exit",
            _ = {
              offsetX: v,
              offsetY: y,
              reverse: d,
              transition: p,
              transitionEnd: E,
              delay: h
            }
          return l.createElement(
            o.M,
            { custom: _ },
            N &&
              l.createElement(
                s.E.div,
                c(
                  {
                    ref: n,
                    className: (0, i.cx)("chakra-offset-slide", f),
                    custom: _
                  },
                  I,
                  { animate: O },
                  g
                )
              )
          )
        })
      i.Ts && (X.displayName = "SlideFade")
    }
  }
])
