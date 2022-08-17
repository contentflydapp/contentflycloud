;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2512],
  {
    58363: function (e, n) {
      "use strict"
      n.Z = function (e, n) {
        if (e && n) {
          var t = Array.isArray(n) ? n : n.split(","),
            r = e.name || "",
            o = (e.type || "").toLowerCase(),
            i = o.replace(/\/.*$/, "")
          return t.some(function (e) {
            var n = e.trim().toLowerCase()
            return "." === n.charAt(0)
              ? r.toLowerCase().endsWith(n)
              : n.endsWith("/*")
              ? i === n.replace(/\/.*$/, "")
              : o === n
          })
        }
        return !0
      }
    },
    92703: function (e, n, t) {
      "use strict"
      var r = t(50414)
      function o() {}
      function i() {}
      ;(i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, n, t, o, i, a) {
            if (a !== r) {
              var c = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              )
              throw ((c.name = "Invariant Violation"), c)
            }
          }
          function n() {
            return e
          }
          e.isRequired = e
          var t = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: o
          }
          return (t.PropTypes = t), t
        })
    },
    45697: function (e, n, t) {
      e.exports = t(92703)()
    },
    50414: function (e) {
      "use strict"
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    32512: function (e, n, t) {
      "use strict"
      t.d(n, {
        uI: function () {
          return me
        }
      })
      var r = t(67294),
        o = t(45697),
        i = t.n(o),
        a = t(70655),
        c = new Map([
          ["aac", "audio/aac"],
          ["abw", "application/x-abiword"],
          ["arc", "application/x-freearc"],
          ["avif", "image/avif"],
          ["avi", "video/x-msvideo"],
          ["azw", "application/vnd.amazon.ebook"],
          ["bin", "application/octet-stream"],
          ["bmp", "image/bmp"],
          ["bz", "application/x-bzip"],
          ["bz2", "application/x-bzip2"],
          ["cda", "application/x-cdf"],
          ["csh", "application/x-csh"],
          ["css", "text/css"],
          ["csv", "text/csv"],
          ["doc", "application/msword"],
          [
            "docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ],
          ["eot", "application/vnd.ms-fontobject"],
          ["epub", "application/epub+zip"],
          ["gz", "application/gzip"],
          ["gif", "image/gif"],
          ["heic", "image/heic"],
          ["heif", "image/heif"],
          ["htm", "text/html"],
          ["html", "text/html"],
          ["ico", "image/vnd.microsoft.icon"],
          ["ics", "text/calendar"],
          ["jar", "application/java-archive"],
          ["jpeg", "image/jpeg"],
          ["jpg", "image/jpeg"],
          ["js", "text/javascript"],
          ["json", "application/json"],
          ["jsonld", "application/ld+json"],
          ["mid", "audio/midi"],
          ["midi", "audio/midi"],
          ["mjs", "text/javascript"],
          ["mp3", "audio/mpeg"],
          ["mp4", "video/mp4"],
          ["mpeg", "video/mpeg"],
          ["mpkg", "application/vnd.apple.installer+xml"],
          ["odp", "application/vnd.oasis.opendocument.presentation"],
          ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
          ["odt", "application/vnd.oasis.opendocument.text"],
          ["oga", "audio/ogg"],
          ["ogv", "video/ogg"],
          ["ogx", "application/ogg"],
          ["opus", "audio/opus"],
          ["otf", "font/otf"],
          ["png", "image/png"],
          ["pdf", "application/pdf"],
          ["php", "application/x-httpd-php"],
          ["ppt", "application/vnd.ms-powerpoint"],
          [
            "pptx",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
          ],
          ["rar", "application/vnd.rar"],
          ["rtf", "application/rtf"],
          ["sh", "application/x-sh"],
          ["svg", "image/svg+xml"],
          ["swf", "application/x-shockwave-flash"],
          ["tar", "application/x-tar"],
          ["tif", "image/tiff"],
          ["tiff", "image/tiff"],
          ["ts", "video/mp2t"],
          ["ttf", "font/ttf"],
          ["txt", "text/plain"],
          ["vsd", "application/vnd.visio"],
          ["wav", "audio/wav"],
          ["weba", "audio/webm"],
          ["webm", "video/webm"],
          ["webp", "image/webp"],
          ["woff", "font/woff"],
          ["woff2", "font/woff2"],
          ["xhtml", "application/xhtml+xml"],
          ["xls", "application/vnd.ms-excel"],
          [
            "xlsx",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          ],
          ["xml", "application/xml"],
          ["xul", "application/vnd.mozilla.xul+xml"],
          ["zip", "application/zip"],
          ["7z", "application/x-7z-compressed"],
          ["mkv", "video/x-matroska"],
          ["mov", "video/quicktime"],
          ["msg", "application/vnd.ms-outlook"]
        ])
      function u(e, n) {
        var t = (function (e) {
          var n = e.name
          if (n && -1 !== n.lastIndexOf(".") && !e.type) {
            var t = n.split(".").pop().toLowerCase(),
              r = c.get(t)
            r &&
              Object.defineProperty(e, "type", {
                value: r,
                writable: !1,
                configurable: !1,
                enumerable: !0
              })
          }
          return e
        })(e)
        if ("string" !== typeof t.path) {
          var r = e.webkitRelativePath
          Object.defineProperty(t, "path", {
            value:
              "string" === typeof n
                ? n
                : "string" === typeof r && r.length > 0
                ? r
                : e.name,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return t
      }
      var l = [".DS_Store", "Thumbs.db"]
      function s(e) {
        return "object" === typeof e && null !== e
      }
      function f(e) {
        return v(e.target.files).map(function (e) {
          return u(e)
        })
      }
      function p(e) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return [
                  4,
                  Promise.all(
                    e.map(function (e) {
                      return e.getFile()
                    })
                  )
                ]
              case 1:
                return [
                  2,
                  n.sent().map(function (e) {
                    return u(e)
                  })
                ]
            }
          })
        })
      }
      function d(e, n) {
        return (0, a.mG)(this, void 0, void 0, function () {
          var t
          return (0, a.Jh)(this, function (r) {
            switch (r.label) {
              case 0:
                return e.items
                  ? ((t = v(e.items).filter(function (e) {
                      return "file" === e.kind
                    })),
                    "drop" !== n ? [2, t] : [4, Promise.all(t.map(g))])
                  : [3, 2]
              case 1:
                return [2, m(y(r.sent()))]
              case 2:
                return [
                  2,
                  m(
                    v(e.files).map(function (e) {
                      return u(e)
                    })
                  )
                ]
            }
          })
        })
      }
      function m(e) {
        return e.filter(function (e) {
          return -1 === l.indexOf(e.name)
        })
      }
      function v(e) {
        if (null === e) return []
        for (var n = [], t = 0; t < e.length; t++) {
          var r = e[t]
          n.push(r)
        }
        return n
      }
      function g(e) {
        if ("function" !== typeof e.webkitGetAsEntry) return b(e)
        var n = e.webkitGetAsEntry()
        return n && n.isDirectory ? w(n) : b(e)
      }
      function y(e) {
        return e.reduce(function (e, n) {
          return (0,
          a.ev)((0, a.ev)([], (0, a.CR)(e), !1), (0, a.CR)(Array.isArray(n) ? y(n) : [n]), !1)
        }, [])
      }
      function b(e) {
        var n = e.getAsFile()
        if (!n) return Promise.reject("".concat(e, " is not a File"))
        var t = u(n)
        return Promise.resolve(t)
      }
      function h(e) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (n) {
            return [2, e.isDirectory ? w(e) : D(e)]
          })
        })
      }
      function w(e) {
        var n = e.createReader()
        return new Promise(function (e, t) {
          var r = []
          !(function o() {
            var i = this
            n.readEntries(
              function (n) {
                return (0, a.mG)(i, void 0, void 0, function () {
                  var i, c, u
                  return (0, a.Jh)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (n.length) return [3, 5]
                        a.label = 1
                      case 1:
                        return a.trys.push([1, 3, , 4]), [4, Promise.all(r)]
                      case 2:
                        return (i = a.sent()), e(i), [3, 4]
                      case 3:
                        return (c = a.sent()), t(c), [3, 4]
                      case 4:
                        return [3, 6]
                      case 5:
                        ;(u = Promise.all(n.map(h))),
                          r.push(u),
                          o(),
                          (a.label = 6)
                      case 6:
                        return [2]
                    }
                  })
                })
              },
              function (e) {
                t(e)
              }
            )
          })()
        })
      }
      function D(e) {
        return (0, a.mG)(this, void 0, void 0, function () {
          return (0, a.Jh)(this, function (n) {
            return [
              2,
              new Promise(function (n, t) {
                e.file(
                  function (t) {
                    var r = u(t, e.fullPath)
                    n(r)
                  },
                  function (e) {
                    t(e)
                  }
                )
              })
            ]
          })
        })
      }
      var x = t(58363)
      function O(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return E(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          j(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function A(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"]
            if (null == t) return
            var r,
              o,
              i = [],
              a = !0,
              c = !1
            try {
              for (
                t = t.call(e);
                !(a = (r = t.next()).done) &&
                (i.push(r.value), !n || i.length !== n);
                a = !0
              );
            } catch (u) {
              ;(c = !0), (o = u)
            } finally {
              try {
                a || null == t.return || t.return()
              } finally {
                if (c) throw o
              }
            }
            return i
          })(e, n) ||
          j(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function j(e, n) {
        if (e) {
          if ("string" === typeof e) return E(e, n)
          var t = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? E(e, n)
              : void 0
          )
        }
      }
      function E(e, n) {
        ;(null == n || n > e.length) && (n = e.length)
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t]
        return r
      }
      var F = "file-invalid-type",
        k = "file-too-large",
        C = "file-too-small",
        S = "too-many-files",
        P = function (e) {
          e = Array.isArray(e) && 1 === e.length ? e[0] : e
          var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e
          return { code: F, message: "File type must be ".concat(n) }
        },
        R = function (e) {
          return {
            code: k,
            message: "File is larger than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes")
          }
        },
        z = function (e) {
          return {
            code: C,
            message: "File is smaller than "
              .concat(e, " ")
              .concat(1 === e ? "byte" : "bytes")
          }
        },
        T = { code: S, message: "Too many files" }
      function I(e, n) {
        var t = "application/x-moz-file" === e.type || (0, x.Z)(e, n)
        return [t, t ? null : P(n)]
      }
      function _(e, n, t) {
        if (M(e.size))
          if (M(n) && M(t)) {
            if (e.size > t) return [!1, R(t)]
            if (e.size < n) return [!1, z(n)]
          } else {
            if (M(n) && e.size < n) return [!1, z(n)]
            if (M(t) && e.size > t) return [!1, R(t)]
          }
        return [!0, null]
      }
      function M(e) {
        return void 0 !== e && null !== e
      }
      function L(e) {
        var n = e.files,
          t = e.accept,
          r = e.minSize,
          o = e.maxSize,
          i = e.multiple,
          a = e.maxFiles,
          c = e.validator
        return (
          !((!i && n.length > 1) || (i && a >= 1 && n.length > a)) &&
          n.every(function (e) {
            var n = A(I(e, t), 1)[0],
              i = A(_(e, r, o), 1)[0],
              a = c ? c(e) : null
            return n && i && !a
          })
        )
      }
      function B(e) {
        return "function" === typeof e.isPropagationStopped
          ? e.isPropagationStopped()
          : "undefined" !== typeof e.cancelBubble && e.cancelBubble
      }
      function K(e) {
        return e.dataTransfer
          ? Array.prototype.some.call(e.dataTransfer.types, function (e) {
              return "Files" === e || "application/x-moz-file" === e
            })
          : !!e.target && !!e.target.files
      }
      function G(e) {
        e.preventDefault()
      }
      function U(e) {
        return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
      }
      function W(e) {
        return -1 !== e.indexOf("Edge/")
      }
      function J() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : window.navigator.userAgent
        return U(e) || W(e)
      }
      function N() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
          n[t] = arguments[t]
        return function (e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            r[o - 1] = arguments[o]
          return n.some(function (n) {
            return !B(e) && n && n.apply(void 0, [e].concat(r)), B(e)
          })
        }
      }
      function $() {
        return "showOpenFilePicker" in window
      }
      function H(e) {
        return M(e)
          ? Object.entries(e)
              .filter(function (e) {
                var n = A(e, 2),
                  t = n[0],
                  r = n[1],
                  o = !0
                return (
                  V(t) ||
                    (console.warn(
                      'Skipped "'.concat(
                        t,
                        '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.'
                      )
                    ),
                    (o = !1)),
                  (Array.isArray(r) && r.every(Q)) ||
                    (console.warn(
                      'Skipped "'.concat(
                        t,
                        '" because an invalid file extension was provided.'
                      )
                    ),
                    (o = !1)),
                  o
                )
              })
              .map(function (e) {
                var n,
                  t,
                  r,
                  o = A(e, 2),
                  i = o[0],
                  a = o[1]
                return {
                  accept:
                    ((n = {}),
                    (t = i),
                    (r = a),
                    t in n
                      ? Object.defineProperty(n, t, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (n[t] = r),
                    n)
                }
              })
          : e
      }
      function q(e) {
        if (M(e))
          return Object.entries(e)
            .reduce(function (e, n) {
              var t = A(n, 2),
                r = t[0],
                o = t[1]
              return [].concat(O(e), [r], O(o))
            }, [])
            .filter(function (e) {
              return V(e) || Q(e)
            })
            .join(",")
      }
      function Y(e) {
        return (
          e instanceof DOMException &&
          ("AbortError" === e.name || e.code === e.ABORT_ERR)
        )
      }
      function Z(e) {
        return (
          e instanceof DOMException &&
          ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
        )
      }
      function V(e) {
        return (
          "audio/*" === e ||
          "video/*" === e ||
          "image/*" === e ||
          "text/*" === e ||
          /\w+\/[-+.\w]+/g.test(e)
        )
      }
      function Q(e) {
        return /^.*\.[\w]+$/.test(e)
      }
      var X = ["children"],
        ee = ["open"],
        ne = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop"
        ],
        te = ["refKey", "onChange", "onClick"]
      function re(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ae(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          ie(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function oe(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"]
            if (null == t) return
            var r,
              o,
              i = [],
              a = !0,
              c = !1
            try {
              for (
                t = t.call(e);
                !(a = (r = t.next()).done) &&
                (i.push(r.value), !n || i.length !== n);
                a = !0
              );
            } catch (u) {
              ;(c = !0), (o = u)
            } finally {
              try {
                a || null == t.return || t.return()
              } finally {
                if (c) throw o
              }
            }
            return i
          })(e, n) ||
          ie(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function ie(e, n) {
        if (e) {
          if ("string" === typeof e) return ae(e, n)
          var t = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(e)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? ae(e, n)
              : void 0
          )
        }
      }
      function ae(e, n) {
        ;(null == n || n > e.length) && (n = e.length)
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t]
        return r
      }
      function ce(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function ue(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? ce(Object(t), !0).forEach(function (n) {
                le(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ce(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                )
              })
        }
        return e
      }
      function le(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[n] = t),
          e
        )
      }
      function se(e, n) {
        if (null == e) return {}
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {}
            var t,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t])
            return o
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]))
        }
        return o
      }
      var fe = (0, r.forwardRef)(function (e, n) {
        var t = e.children,
          o = me(se(e, X)),
          i = o.open,
          a = se(o, ee)
        return (
          (0, r.useImperativeHandle)(
            n,
            function () {
              return { open: i }
            },
            [i]
          ),
          r.createElement(r.Fragment, null, t(ue(ue({}, a), {}, { open: i })))
        )
      })
      fe.displayName = "Dropzone"
      var pe = {
        disabled: !1,
        getFilesFromEvent: function (e) {
          return (0, a.mG)(this, void 0, void 0, function () {
            return (0, a.Jh)(this, function (n) {
              return s(e) && s(e.dataTransfer)
                ? [2, d(e.dataTransfer, e.type)]
                : (function (e) {
                    return s(e) && s(e.target)
                  })(e)
                ? [2, f(e)]
                : Array.isArray(e) &&
                  e.every(function (e) {
                    return "getFile" in e && "function" === typeof e.getFile
                  })
                ? [2, p(e)]
                : [2, []]
            })
          })
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
        autoFocus: !1
      }
      ;(fe.defaultProps = pe),
        (fe.propTypes = {
          children: i().func,
          accept: i().objectOf(i().arrayOf(i().string)),
          multiple: i().bool,
          preventDropOnDocument: i().bool,
          noClick: i().bool,
          noKeyboard: i().bool,
          noDrag: i().bool,
          noDragEventsBubbling: i().bool,
          minSize: i().number,
          maxSize: i().number,
          maxFiles: i().number,
          disabled: i().bool,
          getFilesFromEvent: i().func,
          onFileDialogCancel: i().func,
          onFileDialogOpen: i().func,
          useFsAccessApi: i().bool,
          autoFocus: i().bool,
          onDragEnter: i().func,
          onDragLeave: i().func,
          onDragOver: i().func,
          onDrop: i().func,
          onDropAccepted: i().func,
          onDropRejected: i().func,
          onError: i().func,
          validator: i().func
        })
      var de = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        acceptedFiles: [],
        fileRejections: []
      }
      function me() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = ue(ue({}, pe), e),
          t = n.accept,
          o = n.disabled,
          i = n.getFilesFromEvent,
          a = n.maxSize,
          c = n.minSize,
          u = n.multiple,
          l = n.maxFiles,
          s = n.onDragEnter,
          f = n.onDragLeave,
          p = n.onDragOver,
          d = n.onDrop,
          m = n.onDropAccepted,
          v = n.onDropRejected,
          g = n.onFileDialogCancel,
          y = n.onFileDialogOpen,
          b = n.useFsAccessApi,
          h = n.autoFocus,
          w = n.preventDropOnDocument,
          D = n.noClick,
          x = n.noKeyboard,
          O = n.noDrag,
          A = n.noDragEventsBubbling,
          j = n.onError,
          E = n.validator,
          F = (0, r.useMemo)(
            function () {
              return q(t)
            },
            [t]
          ),
          k = (0, r.useMemo)(
            function () {
              return H(t)
            },
            [t]
          ),
          C = (0, r.useMemo)(
            function () {
              return "function" === typeof y ? y : ge
            },
            [y]
          ),
          S = (0, r.useMemo)(
            function () {
              return "function" === typeof g ? g : ge
            },
            [g]
          ),
          P = (0, r.useRef)(null),
          R = (0, r.useRef)(null),
          z = (0, r.useReducer)(ve, de),
          M = oe(z, 2),
          U = M[0],
          W = M[1],
          V = U.isFocused,
          Q = U.isFileDialogActive,
          X = (0, r.useRef)(
            "undefined" !== typeof window && window.isSecureContext && b && $()
          ),
          ee = function () {
            !X.current &&
              Q &&
              setTimeout(function () {
                R.current &&
                  (R.current.files.length || (W({ type: "closeDialog" }), S()))
              }, 300)
          }
        ;(0, r.useEffect)(
          function () {
            return (
              window.addEventListener("focus", ee, !1),
              function () {
                window.removeEventListener("focus", ee, !1)
              }
            )
          },
          [R, Q, S, X]
        )
        var ie = (0, r.useRef)([]),
          ae = function (e) {
            ;(P.current && P.current.contains(e.target)) ||
              (e.preventDefault(), (ie.current = []))
          }
        ;(0, r.useEffect)(
          function () {
            return (
              w &&
                (document.addEventListener("dragover", G, !1),
                document.addEventListener("drop", ae, !1)),
              function () {
                w &&
                  (document.removeEventListener("dragover", G),
                  document.removeEventListener("drop", ae))
              }
            )
          },
          [P, w]
        ),
          (0, r.useEffect)(
            function () {
              return !o && h && P.current && P.current.focus(), function () {}
            },
            [P, h, o]
          )
        var ce = (0, r.useCallback)(
            function (e) {
              j ? j(e) : console.error(e)
            },
            [j]
          ),
          fe = (0, r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                ke(e),
                (ie.current = [].concat(re(ie.current), [e.target])),
                K(e) &&
                  Promise.resolve(i(e))
                    .then(function (n) {
                      if (!B(e) || A) {
                        var t = n.length,
                          r =
                            t > 0 &&
                            L({
                              files: n,
                              accept: F,
                              minSize: c,
                              maxSize: a,
                              multiple: u,
                              maxFiles: l,
                              validator: E
                            })
                        W({
                          isDragAccept: r,
                          isDragReject: t > 0 && !r,
                          isDragActive: !0,
                          type: "setDraggedFiles"
                        }),
                          s && s(e)
                      }
                    })
                    .catch(function (e) {
                      return ce(e)
                    })
            },
            [i, s, ce, A, F, c, a, u, l, E]
          ),
          me = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), ke(e)
              var n = K(e)
              if (n && e.dataTransfer)
                try {
                  e.dataTransfer.dropEffect = "copy"
                } catch (t) {}
              return n && p && p(e), !1
            },
            [p, A]
          ),
          ye = (0, r.useCallback)(
            function (e) {
              e.preventDefault(), e.persist(), ke(e)
              var n = ie.current.filter(function (e) {
                  return P.current && P.current.contains(e)
                }),
                t = n.indexOf(e.target)
              ;-1 !== t && n.splice(t, 1),
                (ie.current = n),
                n.length > 0 ||
                  (W({
                    type: "setDraggedFiles",
                    isDragActive: !1,
                    isDragAccept: !1,
                    isDragReject: !1
                  }),
                  K(e) && f && f(e))
            },
            [P, f, A]
          ),
          be = (0, r.useCallback)(
            function (e, n) {
              var t = [],
                r = []
              e.forEach(function (e) {
                var n = oe(I(e, F), 2),
                  o = n[0],
                  i = n[1],
                  u = oe(_(e, c, a), 2),
                  l = u[0],
                  s = u[1],
                  f = E ? E(e) : null
                if (o && l && !f) t.push(e)
                else {
                  var p = [i, s]
                  f && (p = p.concat(f)),
                    r.push({
                      file: e,
                      errors: p.filter(function (e) {
                        return e
                      })
                    })
                }
              }),
                ((!u && t.length > 1) || (u && l >= 1 && t.length > l)) &&
                  (t.forEach(function (e) {
                    r.push({ file: e, errors: [T] })
                  }),
                  t.splice(0)),
                W({ acceptedFiles: t, fileRejections: r, type: "setFiles" }),
                d && d(t, r, n),
                r.length > 0 && v && v(r, n),
                t.length > 0 && m && m(t, n)
            },
            [W, u, F, c, a, l, d, m, v, E]
          ),
          he = (0, r.useCallback)(
            function (e) {
              e.preventDefault(),
                e.persist(),
                ke(e),
                (ie.current = []),
                K(e) &&
                  Promise.resolve(i(e))
                    .then(function (n) {
                      ;(B(e) && !A) || be(n, e)
                    })
                    .catch(function (e) {
                      return ce(e)
                    }),
                W({ type: "reset" })
            },
            [i, be, ce, A]
          ),
          we = (0, r.useCallback)(
            function () {
              if (X.current) {
                W({ type: "openDialog" }), C()
                var e = { multiple: u, types: k }
                window
                  .showOpenFilePicker(e)
                  .then(function (e) {
                    return i(e)
                  })
                  .then(function (e) {
                    be(e, null), W({ type: "closeDialog" })
                  })
                  .catch(function (e) {
                    Y(e)
                      ? (S(e), W({ type: "closeDialog" }))
                      : Z(e)
                      ? ((X.current = !1),
                        R.current
                          ? ((R.current.value = null), R.current.click())
                          : ce(
                              new Error(
                                "Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."
                              )
                            ))
                      : ce(e)
                  })
              } else
                R.current &&
                  (W({ type: "openDialog" }),
                  C(),
                  (R.current.value = null),
                  R.current.click())
            },
            [W, C, S, b, be, ce, k, u]
          ),
          De = (0, r.useCallback)(
            function (e) {
              P.current &&
                P.current.isEqualNode(e.target) &&
                ((" " !== e.key &&
                  "Enter" !== e.key &&
                  32 !== e.keyCode &&
                  13 !== e.keyCode) ||
                  (e.preventDefault(), we()))
            },
            [P, we]
          ),
          xe = (0, r.useCallback)(function () {
            W({ type: "focus" })
          }, []),
          Oe = (0, r.useCallback)(function () {
            W({ type: "blur" })
          }, []),
          Ae = (0, r.useCallback)(
            function () {
              D || (J() ? setTimeout(we, 0) : we())
            },
            [D, we]
          ),
          je = function (e) {
            return o ? null : e
          },
          Ee = function (e) {
            return x ? null : je(e)
          },
          Fe = function (e) {
            return O ? null : je(e)
          },
          ke = function (e) {
            A && e.stopPropagation()
          },
          Ce = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.refKey,
                  t = void 0 === n ? "ref" : n,
                  r = e.role,
                  i = e.onKeyDown,
                  a = e.onFocus,
                  c = e.onBlur,
                  u = e.onClick,
                  l = e.onDragEnter,
                  s = e.onDragOver,
                  f = e.onDragLeave,
                  p = e.onDrop,
                  d = se(e, ne)
                return ue(
                  ue(
                    le(
                      {
                        onKeyDown: Ee(N(i, De)),
                        onFocus: Ee(N(a, xe)),
                        onBlur: Ee(N(c, Oe)),
                        onClick: je(N(u, Ae)),
                        onDragEnter: Fe(N(l, fe)),
                        onDragOver: Fe(N(s, me)),
                        onDragLeave: Fe(N(f, ye)),
                        onDrop: Fe(N(p, he)),
                        role:
                          "string" === typeof r && "" !== r ? r : "presentation"
                      },
                      t,
                      P
                    ),
                    o || x ? {} : { tabIndex: 0 }
                  ),
                  d
                )
              }
            },
            [P, De, xe, Oe, Ae, fe, me, ye, he, x, O, o]
          ),
          Se = (0, r.useCallback)(function (e) {
            e.stopPropagation()
          }, []),
          Pe = (0, r.useMemo)(
            function () {
              return function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = e.refKey,
                  t = void 0 === n ? "ref" : n,
                  r = e.onChange,
                  o = e.onClick,
                  i = se(e, te),
                  a = le(
                    {
                      accept: F,
                      multiple: u,
                      type: "file",
                      style: { display: "none" },
                      onChange: je(N(r, he)),
                      onClick: je(N(o, Se)),
                      tabIndex: -1
                    },
                    t,
                    R
                  )
                return ue(ue({}, a), i)
              }
            },
            [R, t, u, he, o]
          )
        return ue(
          ue({}, U),
          {},
          {
            isFocused: V && !o,
            getRootProps: Ce,
            getInputProps: Pe,
            rootRef: P,
            inputRef: R,
            open: je(we)
          }
        )
      }
      function ve(e, n) {
        switch (n.type) {
          case "focus":
            return ue(ue({}, e), {}, { isFocused: !0 })
          case "blur":
            return ue(ue({}, e), {}, { isFocused: !1 })
          case "openDialog":
            return ue(ue({}, de), {}, { isFileDialogActive: !0 })
          case "closeDialog":
            return ue(ue({}, e), {}, { isFileDialogActive: !1 })
          case "setDraggedFiles":
            return ue(
              ue({}, e),
              {},
              {
                isDragActive: n.isDragActive,
                isDragAccept: n.isDragAccept,
                isDragReject: n.isDragReject
              }
            )
          case "setFiles":
            return ue(
              ue({}, e),
              {},
              {
                acceptedFiles: n.acceptedFiles,
                fileRejections: n.fileRejections
              }
            )
          case "reset":
            return ue({}, de)
          default:
            return e
        }
      }
      function ge() {}
    }
  }
])
