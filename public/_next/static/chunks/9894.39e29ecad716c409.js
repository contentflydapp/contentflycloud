"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9894],
  {
    89894: function (e, t, r) {
      var n = r(95318),
        a = n(r(34575)),
        o = n(r(93913)),
        u = n(r(2205)),
        i = n(r(78585)),
        l = n(r(29754))
      function c(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = (0, l.default)(e)
          if (t) {
            var a = (0, l.default)(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return (0, i.default)(this, r)
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var f = s(r(67294)),
        d = s(r(16505))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var p = {
        400: "Bad Request",
        404: "This page could not be found",
        405: "Method Not Allowed",
        500: "Internal Server Error"
      }
      function h(e) {
        var t = e.res,
          r = e.err
        return {
          statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404
        }
      }
      var y = (function (e) {
        ;(0, u.default)(r, e)
        var t = c(r)
        function r() {
          return (0, a.default)(this, r), t.apply(this, arguments)
        }
        return (
          (0, o.default)(r, [
            {
              key: "render",
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    p[e] ||
                    "An unexpected error has occurred"
                return f.default.createElement(
                  "div",
                  { style: v.error },
                  f.default.createElement(
                    d.default,
                    null,
                    f.default.createElement(
                      "title",
                      null,
                      e
                        ? "".concat(e, ": ").concat(t)
                        : "Application error: a client-side exception has occurred"
                    )
                  ),
                  f.default.createElement(
                    "div",
                    null,
                    f.default.createElement("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n                @media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }"
                      }
                    }),
                    e
                      ? f.default.createElement(
                          "h1",
                          { className: "next-error-h1", style: v.h1 },
                          e
                        )
                      : null,
                    f.default.createElement(
                      "div",
                      { style: v.desc },
                      f.default.createElement(
                        "h2",
                        { style: v.h2 },
                        this.props.title || e
                          ? t
                          : f.default.createElement(
                              f.default.Fragment,
                              null,
                              "Application error: a client-side exception has occurred (see the browser console for more information)"
                            ),
                        "."
                      )
                    )
                  )
                )
              }
            }
          ]),
          r
        )
      })(f.default.Component)
      ;(t.default = y),
        (y.displayName = "ErrorPage"),
        (y.getInitialProps = h),
        (y.origGetInitialProps = h)
      var v = {
        error: {
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        desc: {
          display: "inline-block",
          textAlign: "left",
          lineHeight: "49px",
          height: "49px",
          verticalAlign: "middle"
        },
        h1: {
          display: "inline-block",
          margin: 0,
          marginRight: "20px",
          padding: "10px 23px 10px 0",
          fontSize: "24px",
          fontWeight: 500,
          verticalAlign: "top"
        },
        h2: {
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "inherit",
          margin: 0,
          padding: 0
        }
      }
    },
    17285: function (e, t, r) {
      var n
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AmpStateContext = void 0)
      var a = (
        (n = r(67294)) && n.__esModule ? n : { default: n }
      ).default.createContext({})
      t.AmpStateContext = a
    },
    49546: function (e, t, r) {
      var n = r(95318)(r(50008))
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(o.default.useContext(u.AmpStateContext))
        })
      var a,
        o = (a = r(67294)) && a.__esModule ? a : { default: a },
        u = r(17285)
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          a = void 0 !== n && n,
          o = e.hasQuery,
          u = void 0 !== o && o
        return r || (a && u)
      }
      ;("function" === typeof t.default ||
        ("object" === (0, n.default)(t.default) && null !== t.default)) &&
        (Object.assign(t.default, t), (e.exports = t.default))
    },
    16505: function (e, t, r) {
      var n = r(95318),
        a = n(r(50008)),
        o = n(r(59713))
      function u(e, t) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultHead = p),
        (t.default = void 0)
      var i,
        l = (function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {}
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r])
              }
          return (t.default = e), t
        })(r(67294)),
        c = (i = r(70148)) && i.__esModule ? i : { default: i },
        f = r(17285),
        d = r(60523),
        s = r(49546)
      r(67206)
      function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [l.default.createElement("meta", { charSet: "utf-8" })]
        return (
          e ||
            t.push(
              l.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
              })
            ),
          t
        )
      }
      function h(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t)
              },
              [])
            )
          : e.concat(t)
      }
      var y = ["name", "httpEquiv", "charSet", "itemProp"]
      function v(e, t) {
        return e
          .reduce(function (e, t) {
            var r = l.default.Children.toArray(t.props.children)
            return e.concat(r)
          }, [])
          .reduce(h, [])
          .reverse()
          .concat(p(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {}
              return function (a) {
                var o = !0,
                  u = !1
                if (
                  a.key &&
                  "number" !== typeof a.key &&
                  a.key.indexOf("$") > 0
                ) {
                  u = !0
                  var i = a.key.slice(a.key.indexOf("$") + 1)
                  e.has(i) ? (o = !1) : e.add(i)
                }
                switch (a.type) {
                  case "title":
                  case "base":
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case "meta":
                    for (var l = 0, c = y.length; l < c; l++) {
                      var f = y[l]
                      if (a.props.hasOwnProperty(f))
                        if ("charSet" === f) r.has(f) ? (o = !1) : r.add(f)
                        else {
                          var d = a.props[f],
                            s = n[f] || new Set()
                          ;("name" === f && u) || !s.has(d)
                            ? (s.add(d), (n[f] = s))
                            : (o = !1)
                        }
                    }
                }
                return o
              }
            })()
          )
          .reverse()
          .map(function (e, r) {
            var n = e.key || r
            if (
              !t.inAmpMode &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
              ].some(function (t) {
                return e.props.href.startsWith(t)
              })
            ) {
              var a = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? u(Object(r), !0).forEach(function (t) {
                        ;(0, o.default)(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : u(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        )
                      })
                }
                return e
              })({}, e.props || {})
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, a)
              )
            }
            return l.default.cloneElement(e, { key: n })
          })
      }
      var m = function (e) {
        var t = e.children,
          r = l.useContext(f.AmpStateContext),
          n = l.useContext(d.HeadManagerContext)
        return l.default.createElement(
          c.default,
          {
            reduceComponentsToState: v,
            headManager: n,
            inAmpMode: s.isInAmpMode(r)
          },
          t
        )
      }
      ;(t.default = m),
        ("function" === typeof t.default ||
          ("object" === (0, a.default)(t.default) && null !== t.default)) &&
          (Object.assign(t.default, t), (e.exports = t.default))
    },
    70148: function (e, t, r) {
      var n = r(95318),
        a = n(r(319)),
        o = n(r(34575)),
        u = n(r(93913)),
        i = (n(r(81506)), n(r(2205))),
        l = n(r(78585)),
        c = n(r(29754))
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ("function" === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var r,
            n = (0, c.default)(e)
          if (t) {
            var a = (0, c.default)(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return (0, l.default)(this, r)
        }
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0)
      var d = (function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, r)
                  : {}
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r])
            }
        return (t.default = e), t
      })(r(67294))
      var s = (function (e) {
        ;(0, i.default)(r, e)
        var t = f(r)
        function r(e) {
          var n
          return (
            (0, o.default)(this, r),
            ((n = t.call(this, e)).emitChange = function () {
              n._hasHeadManager &&
                n.props.headManager.updateHead(
                  n.props.reduceComponentsToState(
                    (0, a.default)(n.props.headManager.mountedInstances),
                    n.props
                  )
                )
            }),
            (n._hasHeadManager =
              n.props.headManager && n.props.headManager.mountedInstances),
            n
          )
        }
        return (
          (0, u.default)(r, [
            {
              key: "componentDidMount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.add(this),
                  this.emitChange()
              }
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.emitChange()
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.delete(this),
                  this.emitChange()
              }
            },
            {
              key: "render",
              value: function () {
                return null
              }
            }
          ]),
          r
        )
      })(d.Component)
      t.default = s
    }
  }
])
