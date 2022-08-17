"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [953],
  {
    60953: function (t, n, e) {
      e.d(n, {
        $: function () {
          return r
        },
        c: function () {
          return u
        }
      })
      var r = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : t.length,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 3,
            u = ""
          return (
            (u += t.substring(0, n)),
            (u += ".".repeat(r)),
            (u += t.substring(t.length - e, t.length))
          )
        },
        u = function (t) {
          return null == t
            ? ""
            : t.startsWith("https://") || t.startsWith("http://")
            ? t
            : "https://".concat(t)
        }
    }
  }
])
