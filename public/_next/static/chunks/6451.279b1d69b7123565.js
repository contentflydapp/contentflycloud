"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6451],
  {
    76451: function (r, n, e) {
      e.r(n),
        e.d(n, {
          arrayBufferToImgSrc: function () {
            return c
          },
          convertBase64ToCanisterFileStoreFormat: function () {
            return w
          },
          fileToCanisterBinaryStoreFormat: function () {
            return p
          },
          resizeImage: function () {
            return y
          }
        })
      var t = e(15861),
        u = e(87757),
        a = e.n(u),
        o = e(98005),
        i = e.n(o)
      function c(r) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "jpeg",
          e = new Uint8Array(r),
          t = new Blob([e], { type: "image/".concat(n) }),
          u = URL.createObjectURL(t)
        return u
      }
      function s(r) {
        return f.apply(this, arguments)
      }
      function f() {
        return (f = (0, t.Z)(
          a().mark(function r(n) {
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return r.abrupt(
                      "return",
                      new Promise(function (r, e) {
                        var t = new FileReader()
                        ;(t.onload = function () {
                          r(t.result)
                        }),
                          (t.onerror = e),
                          t.readAsArrayBuffer(n)
                      })
                    )
                  case 1:
                  case "end":
                    return r.stop()
                }
            }, r)
          })
        )).apply(this, arguments)
      }
      function p(r) {
        return l.apply(this, arguments)
      }
      function l() {
        return (l = (0, t.Z)(
          a().mark(function r(n) {
            var e
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (r.next = 2), s(n)
                  case 2:
                    return (
                      (e = r.sent),
                      r.abrupt("return", Array.from(new Uint8Array(e)))
                    )
                  case 4:
                  case "end":
                    return r.stop()
                }
            }, r)
          })
        )).apply(this, arguments)
      }
      function w(r) {
        for (var n = atob(r), e = new Array(n.length), t = 0; t < n.length; t++)
          e[t] = n.charCodeAt(t)
        return Array.from(new Uint8Array(e))
      }
      var y = (function () {
        var r = (0, t.Z)(
          a().mark(function r(n, e) {
            return a().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return r.abrupt(
                      "return",
                      new Promise(function (r) {
                        new (i())(n, {
                          quality: 0.8,
                          maxWidth: e || 768,
                          mimeType: "image/jpeg",
                          success: function (n) {
                            r(n)
                          },
                          error: function (n) {
                            r(n)
                          }
                        })
                      })
                    )
                  case 1:
                  case "end":
                    return r.stop()
                }
            }, r)
          })
        )
        return function (n, e) {
          return r.apply(this, arguments)
        }
      })()
    }
  }
])
