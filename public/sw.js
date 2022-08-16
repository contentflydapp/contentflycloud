/*! For license information please see sw.js.LICENSE.txt */
;(() => {
  var __webpack_modules__ = {
      360: (A, t) => {
        !(function () {
          "use strict"
          for (
            var A =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              e = new Uint8Array(256),
              r = 0;
            r < A.length;
            r++
          )
            e[A.charCodeAt(r)] = r
          t.J = function (A) {
            var t,
              r,
              n,
              i,
              a,
              s = 0.75 * A.length,
              o = A.length,
              B = 0
            "=" === A[A.length - 1] && (s--, "=" === A[A.length - 2] && s--)
            var g = new ArrayBuffer(s),
              I = new Uint8Array(g)
            for (t = 0; t < o; t += 4)
              (r = e[A.charCodeAt(t)]),
                (n = e[A.charCodeAt(t + 1)]),
                (i = e[A.charCodeAt(t + 2)]),
                (a = e[A.charCodeAt(t + 3)]),
                (I[B++] = (r << 2) | (n >> 4)),
                (I[B++] = ((15 & n) << 4) | (i >> 2)),
                (I[B++] = ((3 & i) << 6) | (63 & a))
            return g
          }
        })()
      },
      808: (A, t) => {
        "use strict"
        ;(t.P8 = void 0),
          (t.P8 = class {
            constructor(A, t = (null == A ? void 0 : A.byteLength) || 0) {
              ;(this._buffer = A || new ArrayBuffer(0)),
                (this._view = new Uint8Array(this._buffer, 0, t))
            }
            get buffer() {
              return this._view.slice()
            }
            get byteLength() {
              return this._view.byteLength
            }
            read(A) {
              const t = this._view.subarray(0, A)
              return (this._view = this._view.subarray(A)), t.slice().buffer
            }
            readUint8() {
              const A = this._view[0]
              return (this._view = this._view.subarray(1)), A
            }
            write(A) {
              const t = new Uint8Array(A),
                e = this._view.byteLength
              this._view.byteOffset + this._view.byteLength + t.byteLength >=
              this._buffer.byteLength
                ? this.alloc(t.byteLength)
                : (this._view = new Uint8Array(
                    this._buffer,
                    this._view.byteOffset,
                    this._view.byteLength + t.byteLength
                  )),
                this._view.set(t, e)
            }
            get end() {
              return 0 === this._view.byteLength
            }
            alloc(A) {
              const t = new ArrayBuffer(
                  (1.2 * (this._buffer.byteLength + A)) | 0
                ),
                e = new Uint8Array(t, 0, this._view.byteLength + A)
              e.set(this._view), (this._buffer = t), (this._view = e)
            }
          })
      },
      742: (A, t) => {
        "use strict"
        ;(t.byteLength = function (A) {
          var t = o(A),
            e = t[0],
            r = t[1]
          return (3 * (e + r)) / 4 - r
        }),
          (t.toByteArray = function (A) {
            var t,
              e,
              i = o(A),
              a = i[0],
              s = i[1],
              B = new n(
                (function (A, t, e) {
                  return (3 * (t + e)) / 4 - e
                })(0, a, s)
              ),
              g = 0,
              I = s > 0 ? a - 4 : a
            for (e = 0; e < I; e += 4)
              (t =
                (r[A.charCodeAt(e)] << 18) |
                (r[A.charCodeAt(e + 1)] << 12) |
                (r[A.charCodeAt(e + 2)] << 6) |
                r[A.charCodeAt(e + 3)]),
                (B[g++] = (t >> 16) & 255),
                (B[g++] = (t >> 8) & 255),
                (B[g++] = 255 & t)
            return (
              2 === s &&
                ((t =
                  (r[A.charCodeAt(e)] << 2) | (r[A.charCodeAt(e + 1)] >> 4)),
                (B[g++] = 255 & t)),
              1 === s &&
                ((t =
                  (r[A.charCodeAt(e)] << 10) |
                  (r[A.charCodeAt(e + 1)] << 4) |
                  (r[A.charCodeAt(e + 2)] >> 2)),
                (B[g++] = (t >> 8) & 255),
                (B[g++] = 255 & t)),
              B
            )
          }),
          (t.fromByteArray = function (A) {
            for (
              var t,
                r = A.length,
                n = r % 3,
                i = [],
                a = 16383,
                s = 0,
                o = r - n;
              s < o;
              s += a
            )
              i.push(B(A, s, s + a > o ? o : s + a))
            return (
              1 === n
                ? ((t = A[r - 1]), i.push(e[t >> 2] + e[(t << 4) & 63] + "=="))
                : 2 === n &&
                  ((t = (A[r - 2] << 8) + A[r - 1]),
                  i.push(
                    e[t >> 10] + e[(t >> 4) & 63] + e[(t << 2) & 63] + "="
                  )),
              i.join("")
            )
          })
        for (
          var e = [],
            r = [],
            n = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            i =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0,
            s = i.length;
          a < s;
          ++a
        )
          (e[a] = i[a]), (r[i.charCodeAt(a)] = a)
        function o(A) {
          var t = A.length
          if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4")
          var e = A.indexOf("=")
          return -1 === e && (e = t), [e, e === t ? 0 : 4 - (e % 4)]
        }
        function B(A, t, r) {
          for (var n, i, a = [], s = t; s < r; s += 3)
            (n =
              ((A[s] << 16) & 16711680) +
              ((A[s + 1] << 8) & 65280) +
              (255 & A[s + 2])),
              a.push(
                e[((i = n) >> 18) & 63] +
                  e[(i >> 12) & 63] +
                  e[(i >> 6) & 63] +
                  e[63 & i]
              )
          return a.join("")
        }
        ;(r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63)
      },
      431: function (A, t, e) {
        var r
        !(function (n) {
          "use strict"
          var i,
            a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            s = Math.ceil,
            o = Math.floor,
            B = "[BigNumber Error] ",
            g = B + "Number primitive has more than 15 significant digits: ",
            I = 1e14,
            h = 14,
            E = 9007199254740991,
            Q = [
              1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
              1e13
            ],
            c = 1e7,
            u = 1e9
          function C(A) {
            var t = 0 | A
            return A > 0 || A === t ? t : t - 1
          }
          function l(A) {
            for (var t, e, r = 1, n = A.length, i = A[0] + ""; r < n; ) {
              for (t = A[r++] + "", e = h - t.length; e--; t = "0" + t);
              i += t
            }
            for (n = i.length; 48 === i.charCodeAt(--n); );
            return i.slice(0, n + 1 || 1)
          }
          function f(A, t) {
            var e,
              r,
              n = A.c,
              i = t.c,
              a = A.s,
              s = t.s,
              o = A.e,
              B = t.e
            if (!a || !s) return null
            if (((e = n && !n[0]), (r = i && !i[0]), e || r))
              return e ? (r ? 0 : -s) : a
            if (a != s) return a
            if (((e = a < 0), (r = o == B), !n || !i))
              return r ? 0 : !n ^ e ? 1 : -1
            if (!r) return (o > B) ^ e ? 1 : -1
            for (s = (o = n.length) < (B = i.length) ? o : B, a = 0; a < s; a++)
              if (n[a] != i[a]) return (n[a] > i[a]) ^ e ? 1 : -1
            return o == B ? 0 : (o > B) ^ e ? 1 : -1
          }
          function w(A, t, e, r) {
            if (A < t || A > e || A !== o(A))
              throw Error(
                B +
                  (r || "Argument") +
                  ("number" == typeof A
                    ? A < t || A > e
                      ? " out of range: "
                      : " not an integer: "
                    : " not a primitive number: ") +
                  String(A)
              )
          }
          function d(A) {
            var t = A.c.length - 1
            return C(A.e / h) == t && A.c[t] % 2 != 0
          }
          function p(A, t) {
            return (
              (A.length > 1 ? A.charAt(0) + "." + A.slice(1) : A) +
              (t < 0 ? "e" : "e+") +
              t
            )
          }
          function y(A, t, e) {
            var r, n
            if (t < 0) {
              for (n = e + "."; ++t; n += e);
              A = n + A
            } else if (++t > (r = A.length)) {
              for (n = e, t -= r; --t; n += e);
              A += n
            } else t < r && (A = A.slice(0, t) + "." + A.slice(t))
            return A
          }
          ;(i = (function A(t) {
            var e,
              r,
              n,
              i,
              G,
              k,
              _,
              m,
              b,
              q,
              S = (Z.prototype = {
                constructor: Z,
                toString: null,
                valueOf: null
              }),
              D = new Z(1),
              F = 20,
              H = 4,
              N = -7,
              R = 21,
              U = -1e7,
              v = 1e7,
              M = !1,
              Y = 1,
              J = 0,
              T = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: " ",
                suffix: ""
              },
              L = "0123456789abcdefghijklmnopqrstuvwxyz",
              x = !0
            function Z(A, t) {
              var e,
                i,
                s,
                B,
                I,
                Q,
                c,
                u,
                C = this
              if (!(C instanceof Z)) return new Z(A, t)
              if (null == t) {
                if (A && !0 === A._isBigNumber)
                  return (
                    (C.s = A.s),
                    void (!A.c || A.e > v
                      ? (C.c = C.e = null)
                      : A.e < U
                      ? (C.c = [(C.e = 0)])
                      : ((C.e = A.e), (C.c = A.c.slice())))
                  )
                if ((Q = "number" == typeof A) && 0 * A == 0) {
                  if (((C.s = 1 / A < 0 ? ((A = -A), -1) : 1), A === ~~A)) {
                    for (B = 0, I = A; I >= 10; I /= 10, B++);
                    return void (B > v
                      ? (C.c = C.e = null)
                      : ((C.e = B), (C.c = [A])))
                  }
                  u = String(A)
                } else {
                  if (!a.test((u = String(A)))) return n(C, u, Q)
                  C.s = 45 == u.charCodeAt(0) ? ((u = u.slice(1)), -1) : 1
                }
                ;(B = u.indexOf(".")) > -1 && (u = u.replace(".", "")),
                  (I = u.search(/e/i)) > 0
                    ? (B < 0 && (B = I),
                      (B += +u.slice(I + 1)),
                      (u = u.substring(0, I)))
                    : B < 0 && (B = u.length)
              } else {
                if ((w(t, 2, L.length, "Base"), 10 == t && x))
                  return V((C = new Z(A)), F + C.e + 1, H)
                if (((u = String(A)), (Q = "number" == typeof A))) {
                  if (0 * A != 0) return n(C, u, Q, t)
                  if (
                    ((C.s = 1 / A < 0 ? ((u = u.slice(1)), -1) : 1),
                    Z.DEBUG && u.replace(/^0\.0*|\./, "").length > 15)
                  )
                    throw Error(g + A)
                } else C.s = 45 === u.charCodeAt(0) ? ((u = u.slice(1)), -1) : 1
                for (e = L.slice(0, t), B = I = 0, c = u.length; I < c; I++)
                  if (e.indexOf((i = u.charAt(I))) < 0) {
                    if ("." == i) {
                      if (I > B) {
                        B = c
                        continue
                      }
                    } else if (
                      !s &&
                      ((u == u.toUpperCase() && (u = u.toLowerCase())) ||
                        (u == u.toLowerCase() && (u = u.toUpperCase())))
                    ) {
                      ;(s = !0), (I = -1), (B = 0)
                      continue
                    }
                    return n(C, String(A), Q, t)
                  }
                ;(Q = !1),
                  (B = (u = r(u, t, 10, C.s)).indexOf(".")) > -1
                    ? (u = u.replace(".", ""))
                    : (B = u.length)
              }
              for (I = 0; 48 === u.charCodeAt(I); I++);
              for (c = u.length; 48 === u.charCodeAt(--c); );
              if ((u = u.slice(I, ++c))) {
                if (((c -= I), Q && Z.DEBUG && c > 15 && (A > E || A !== o(A))))
                  throw Error(g + C.s * A)
                if ((B = B - I - 1) > v) C.c = C.e = null
                else if (B < U) C.c = [(C.e = 0)]
                else {
                  if (
                    ((C.e = B),
                    (C.c = []),
                    (I = (B + 1) % h),
                    B < 0 && (I += h),
                    I < c)
                  ) {
                    for (I && C.c.push(+u.slice(0, I)), c -= h; I < c; )
                      C.c.push(+u.slice(I, (I += h)))
                    I = h - (u = u.slice(I)).length
                  } else I -= c
                  for (; I--; u += "0");
                  C.c.push(+u)
                }
              } else C.c = [(C.e = 0)]
            }
            function O(A, t, e, r) {
              var n, i, a, s, o
              if ((null == e ? (e = H) : w(e, 0, 8), !A.c)) return A.toString()
              if (((n = A.c[0]), (a = A.e), null == t))
                (o = l(A.c)),
                  (o =
                    1 == r || (2 == r && (a <= N || a >= R))
                      ? p(o, a)
                      : y(o, a, "0"))
              else if (
                ((i = (A = V(new Z(A), t, e)).e),
                (s = (o = l(A.c)).length),
                1 == r || (2 == r && (t <= i || i <= N)))
              ) {
                for (; s < t; o += "0", s++);
                o = p(o, i)
              } else if (((t -= a), (o = y(o, i, "0")), i + 1 > s)) {
                if (--t > 0) for (o += "."; t--; o += "0");
              } else if ((t += i - s) > 0)
                for (i + 1 == s && (o += "."); t--; o += "0");
              return A.s < 0 && n ? "-" + o : o
            }
            function j(A, t) {
              for (var e, r = 1, n = new Z(A[0]); r < A.length; r++) {
                if (!(e = new Z(A[r])).s) {
                  n = e
                  break
                }
                t.call(n, e) && (n = e)
              }
              return n
            }
            function K(A, t, e) {
              for (var r = 1, n = t.length; !t[--n]; t.pop());
              for (n = t[0]; n >= 10; n /= 10, r++);
              return (
                (e = r + e * h - 1) > v
                  ? (A.c = A.e = null)
                  : e < U
                  ? (A.c = [(A.e = 0)])
                  : ((A.e = e), (A.c = t)),
                A
              )
            }
            function V(A, t, e, r) {
              var n,
                i,
                a,
                B,
                g,
                E,
                c,
                u = A.c,
                C = Q
              if (u) {
                A: {
                  for (n = 1, B = u[0]; B >= 10; B /= 10, n++);
                  if ((i = t - n) < 0)
                    (i += h),
                      (a = t),
                      (c = ((g = u[(E = 0)]) / C[n - a - 1]) % 10 | 0)
                  else if ((E = s((i + 1) / h)) >= u.length) {
                    if (!r) break A
                    for (; u.length <= E; u.push(0));
                    ;(g = c = 0), (n = 1), (a = (i %= h) - h + 1)
                  } else {
                    for (g = B = u[E], n = 1; B >= 10; B /= 10, n++);
                    c =
                      (a = (i %= h) - h + n) < 0
                        ? 0
                        : (g / C[n - a - 1]) % 10 | 0
                  }
                  if (
                    ((r =
                      r ||
                      t < 0 ||
                      null != u[E + 1] ||
                      (a < 0 ? g : g % C[n - a - 1])),
                    (r =
                      e < 4
                        ? (c || r) && (0 == e || e == (A.s < 0 ? 3 : 2))
                        : c > 5 ||
                          (5 == c &&
                            (4 == e ||
                              r ||
                              (6 == e &&
                                (i > 0
                                  ? a > 0
                                    ? g / C[n - a]
                                    : 0
                                  : u[E - 1]) %
                                  10 &
                                  1) ||
                              e == (A.s < 0 ? 8 : 7)))),
                    t < 1 || !u[0])
                  )
                    return (
                      (u.length = 0),
                      r
                        ? ((t -= A.e + 1),
                          (u[0] = C[(h - (t % h)) % h]),
                          (A.e = -t || 0))
                        : (u[0] = A.e = 0),
                      A
                    )
                  if (
                    (0 == i
                      ? ((u.length = E), (B = 1), E--)
                      : ((u.length = E + 1),
                        (B = C[h - i]),
                        (u[E] = a > 0 ? o((g / C[n - a]) % C[a]) * B : 0)),
                    r)
                  )
                    for (;;) {
                      if (0 == E) {
                        for (i = 1, a = u[0]; a >= 10; a /= 10, i++);
                        for (a = u[0] += B, B = 1; a >= 10; a /= 10, B++);
                        i != B && (A.e++, u[0] == I && (u[0] = 1))
                        break
                      }
                      if (((u[E] += B), u[E] != I)) break
                      ;(u[E--] = 0), (B = 1)
                    }
                  for (i = u.length; 0 === u[--i]; u.pop());
                }
                A.e > v ? (A.c = A.e = null) : A.e < U && (A.c = [(A.e = 0)])
              }
              return A
            }
            function P(A) {
              var t,
                e = A.e
              return null === e
                ? A.toString()
                : ((t = l(A.c)),
                  (t = e <= N || e >= R ? p(t, e) : y(t, e, "0")),
                  A.s < 0 ? "-" + t : t)
            }
            return (
              (Z.clone = A),
              (Z.ROUND_UP = 0),
              (Z.ROUND_DOWN = 1),
              (Z.ROUND_CEIL = 2),
              (Z.ROUND_FLOOR = 3),
              (Z.ROUND_HALF_UP = 4),
              (Z.ROUND_HALF_DOWN = 5),
              (Z.ROUND_HALF_EVEN = 6),
              (Z.ROUND_HALF_CEIL = 7),
              (Z.ROUND_HALF_FLOOR = 8),
              (Z.EUCLID = 9),
              (Z.config = Z.set =
                function (A) {
                  var t, e
                  if (null != A) {
                    if ("object" != typeof A)
                      throw Error(B + "Object expected: " + A)
                    if (
                      (A.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                        (w((e = A[t]), 0, u, t), (F = e)),
                      A.hasOwnProperty((t = "ROUNDING_MODE")) &&
                        (w((e = A[t]), 0, 8, t), (H = e)),
                      A.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                        ((e = A[t]) && e.pop
                          ? (w(e[0], -u, 0, t),
                            w(e[1], 0, u, t),
                            (N = e[0]),
                            (R = e[1]))
                          : (w(e, -u, u, t), (N = -(R = e < 0 ? -e : e)))),
                      A.hasOwnProperty((t = "RANGE")))
                    )
                      if ((e = A[t]) && e.pop)
                        w(e[0], -u, -1, t),
                          w(e[1], 1, u, t),
                          (U = e[0]),
                          (v = e[1])
                      else {
                        if ((w(e, -u, u, t), !e))
                          throw Error(B + t + " cannot be zero: " + e)
                        U = -(v = e < 0 ? -e : e)
                      }
                    if (A.hasOwnProperty((t = "CRYPTO"))) {
                      if ((e = A[t]) !== !!e)
                        throw Error(B + t + " not true or false: " + e)
                      if (e) {
                        if (
                          "undefined" == typeof crypto ||
                          !crypto ||
                          (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                          throw ((M = !e), Error(B + "crypto unavailable"))
                        M = e
                      } else M = e
                    }
                    if (
                      (A.hasOwnProperty((t = "MODULO_MODE")) &&
                        (w((e = A[t]), 0, 9, t), (Y = e)),
                      A.hasOwnProperty((t = "POW_PRECISION")) &&
                        (w((e = A[t]), 0, u, t), (J = e)),
                      A.hasOwnProperty((t = "FORMAT")))
                    ) {
                      if ("object" != typeof (e = A[t]))
                        throw Error(B + t + " not an object: " + e)
                      T = e
                    }
                    if (A.hasOwnProperty((t = "ALPHABET"))) {
                      if (
                        "string" != typeof (e = A[t]) ||
                        /^.?$|[+\-.\s]|(.).*\1/.test(e)
                      )
                        throw Error(B + t + " invalid: " + e)
                      ;(x = "0123456789" == e.slice(0, 10)), (L = e)
                    }
                  }
                  return {
                    DECIMAL_PLACES: F,
                    ROUNDING_MODE: H,
                    EXPONENTIAL_AT: [N, R],
                    RANGE: [U, v],
                    CRYPTO: M,
                    MODULO_MODE: Y,
                    POW_PRECISION: J,
                    FORMAT: T,
                    ALPHABET: L
                  }
                }),
              (Z.isBigNumber = function (A) {
                if (!A || !0 !== A._isBigNumber) return !1
                if (!Z.DEBUG) return !0
                var t,
                  e,
                  r = A.c,
                  n = A.e,
                  i = A.s
                A: if ("[object Array]" == {}.toString.call(r)) {
                  if (
                    (1 === i || -1 === i) &&
                    n >= -u &&
                    n <= u &&
                    n === o(n)
                  ) {
                    if (0 === r[0]) {
                      if (0 === n && 1 === r.length) return !0
                      break A
                    }
                    if (
                      ((t = (n + 1) % h) < 1 && (t += h),
                      String(r[0]).length == t)
                    ) {
                      for (t = 0; t < r.length; t++)
                        if ((e = r[t]) < 0 || e >= I || e !== o(e)) break A
                      if (0 !== e) return !0
                    }
                  }
                } else if (
                  null === r &&
                  null === n &&
                  (null === i || 1 === i || -1 === i)
                )
                  return !0
                throw Error(B + "Invalid BigNumber: " + A)
              }),
              (Z.maximum = Z.max =
                function () {
                  return j(arguments, S.lt)
                }),
              (Z.minimum = Z.min =
                function () {
                  return j(arguments, S.gt)
                }),
              (Z.random =
                ((i = 9007199254740992),
                (G =
                  (Math.random() * i) & 2097151
                    ? function () {
                        return o(Math.random() * i)
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        )
                      }),
                function (A) {
                  var t,
                    e,
                    r,
                    n,
                    i,
                    a = 0,
                    g = [],
                    I = new Z(D)
                  if ((null == A ? (A = F) : w(A, 0, u), (n = s(A / h)), M))
                    if (crypto.getRandomValues) {
                      for (
                        t = crypto.getRandomValues(new Uint32Array((n *= 2)));
                        a < n;

                      )
                        (i = 131072 * t[a] + (t[a + 1] >>> 11)) >= 9e15
                          ? ((e = crypto.getRandomValues(new Uint32Array(2))),
                            (t[a] = e[0]),
                            (t[a + 1] = e[1]))
                          : (g.push(i % 1e14), (a += 2))
                      a = n / 2
                    } else {
                      if (!crypto.randomBytes)
                        throw ((M = !1), Error(B + "crypto unavailable"))
                      for (t = crypto.randomBytes((n *= 7)); a < n; )
                        (i =
                          281474976710656 * (31 & t[a]) +
                          1099511627776 * t[a + 1] +
                          4294967296 * t[a + 2] +
                          16777216 * t[a + 3] +
                          (t[a + 4] << 16) +
                          (t[a + 5] << 8) +
                          t[a + 6]) >= 9e15
                          ? crypto.randomBytes(7).copy(t, a)
                          : (g.push(i % 1e14), (a += 7))
                      a = n / 7
                    }
                  if (!M)
                    for (; a < n; ) (i = G()) < 9e15 && (g[a++] = i % 1e14)
                  for (
                    n = g[--a],
                      A %= h,
                      n && A && ((i = Q[h - A]), (g[a] = o(n / i) * i));
                    0 === g[a];
                    g.pop(), a--
                  );
                  if (a < 0) g = [(r = 0)]
                  else {
                    for (r = -1; 0 === g[0]; g.splice(0, 1), r -= h);
                    for (a = 1, i = g[0]; i >= 10; i /= 10, a++);
                    a < h && (r -= h - a)
                  }
                  return (I.e = r), (I.c = g), I
                })),
              (Z.sum = function () {
                for (var A = 1, t = arguments, e = new Z(t[0]); A < t.length; )
                  e = e.plus(t[A++])
                return e
              }),
              (r = (function () {
                var A = "0123456789"
                function t(A, t, e, r) {
                  for (var n, i, a = [0], s = 0, o = A.length; s < o; ) {
                    for (i = a.length; i--; a[i] *= t);
                    for (
                      a[0] += r.indexOf(A.charAt(s++)), n = 0;
                      n < a.length;
                      n++
                    )
                      a[n] > e - 1 &&
                        (null == a[n + 1] && (a[n + 1] = 0),
                        (a[n + 1] += (a[n] / e) | 0),
                        (a[n] %= e))
                  }
                  return a.reverse()
                }
                return function (r, n, i, a, s) {
                  var o,
                    B,
                    g,
                    I,
                    h,
                    E,
                    Q,
                    c,
                    u = r.indexOf("."),
                    C = F,
                    f = H
                  for (
                    u >= 0 &&
                      ((I = J),
                      (J = 0),
                      (r = r.replace(".", "")),
                      (E = (c = new Z(n)).pow(r.length - u)),
                      (J = I),
                      (c.c = t(y(l(E.c), E.e, "0"), 10, i, A)),
                      (c.e = c.c.length)),
                      g = I =
                        (Q = t(r, n, i, s ? ((o = L), A) : ((o = A), L)))
                          .length;
                    0 == Q[--I];
                    Q.pop()
                  );
                  if (!Q[0]) return o.charAt(0)
                  if (
                    (u < 0
                      ? --g
                      : ((E.c = Q),
                        (E.e = g),
                        (E.s = a),
                        (Q = (E = e(E, c, C, f, i)).c),
                        (h = E.r),
                        (g = E.e)),
                    (u = Q[(B = g + C + 1)]),
                    (I = i / 2),
                    (h = h || B < 0 || null != Q[B + 1]),
                    (h =
                      f < 4
                        ? (null != u || h) && (0 == f || f == (E.s < 0 ? 3 : 2))
                        : u > I ||
                          (u == I &&
                            (4 == f ||
                              h ||
                              (6 == f && 1 & Q[B - 1]) ||
                              f == (E.s < 0 ? 8 : 7)))),
                    B < 1 || !Q[0])
                  )
                    r = h ? y(o.charAt(1), -C, o.charAt(0)) : o.charAt(0)
                  else {
                    if (((Q.length = B), h))
                      for (--i; ++Q[--B] > i; )
                        (Q[B] = 0), B || (++g, (Q = [1].concat(Q)))
                    for (I = Q.length; !Q[--I]; );
                    for (u = 0, r = ""; u <= I; r += o.charAt(Q[u++]));
                    r = y(r, g, o.charAt(0))
                  }
                  return r
                }
              })()),
              (e = (function () {
                function A(A, t, e) {
                  var r,
                    n,
                    i,
                    a,
                    s = 0,
                    o = A.length,
                    B = t % c,
                    g = (t / c) | 0
                  for (A = A.slice(); o--; )
                    (s =
                      (((n =
                        B * (i = A[o] % c) +
                        ((r = g * i + (a = (A[o] / c) | 0) * B) % c) * c +
                        s) /
                        e) |
                        0) +
                      ((r / c) | 0) +
                      g * a),
                      (A[o] = n % e)
                  return s && (A = [s].concat(A)), A
                }
                function t(A, t, e, r) {
                  var n, i
                  if (e != r) i = e > r ? 1 : -1
                  else
                    for (n = i = 0; n < e; n++)
                      if (A[n] != t[n]) {
                        i = A[n] > t[n] ? 1 : -1
                        break
                      }
                  return i
                }
                function e(A, t, e, r) {
                  for (var n = 0; e--; )
                    (A[e] -= n),
                      (n = A[e] < t[e] ? 1 : 0),
                      (A[e] = n * r + A[e] - t[e])
                  for (; !A[0] && A.length > 1; A.splice(0, 1));
                }
                return function (r, n, i, a, s) {
                  var B,
                    g,
                    E,
                    Q,
                    c,
                    u,
                    l,
                    f,
                    w,
                    d,
                    p,
                    y,
                    G,
                    k,
                    _,
                    m,
                    b,
                    q = r.s == n.s ? 1 : -1,
                    S = r.c,
                    D = n.c
                  if (!(S && S[0] && D && D[0]))
                    return new Z(
                      r.s && n.s && (S ? !D || S[0] != D[0] : D)
                        ? (S && 0 == S[0]) || !D
                          ? 0 * q
                          : q / 0
                        : NaN
                    )
                  for (
                    w = (f = new Z(q)).c = [],
                      q = i + (g = r.e - n.e) + 1,
                      s ||
                        ((s = I),
                        (g = C(r.e / h) - C(n.e / h)),
                        (q = (q / h) | 0)),
                      E = 0;
                    D[E] == (S[E] || 0);
                    E++
                  );
                  if ((D[E] > (S[E] || 0) && g--, q < 0)) w.push(1), (Q = !0)
                  else {
                    for (
                      k = S.length,
                        m = D.length,
                        E = 0,
                        q += 2,
                        (c = o(s / (D[0] + 1))) > 1 &&
                          ((D = A(D, c, s)),
                          (S = A(S, c, s)),
                          (m = D.length),
                          (k = S.length)),
                        G = m,
                        p = (d = S.slice(0, m)).length;
                      p < m;
                      d[p++] = 0
                    );
                    ;(b = D.slice()),
                      (b = [0].concat(b)),
                      (_ = D[0]),
                      D[1] >= s / 2 && _++
                    do {
                      if (((c = 0), (B = t(D, d, m, p)) < 0)) {
                        if (
                          ((y = d[0]),
                          m != p && (y = y * s + (d[1] || 0)),
                          (c = o(y / _)) > 1)
                        )
                          for (
                            c >= s && (c = s - 1),
                              l = (u = A(D, c, s)).length,
                              p = d.length;
                            1 == t(u, d, l, p);

                          )
                            c--,
                              e(u, m < l ? b : D, l, s),
                              (l = u.length),
                              (B = 1)
                        else 0 == c && (B = c = 1), (l = (u = D.slice()).length)
                        if (
                          (l < p && (u = [0].concat(u)),
                          e(d, u, p, s),
                          (p = d.length),
                          -1 == B)
                        )
                          for (; t(D, d, m, p) < 1; )
                            c++, e(d, m < p ? b : D, p, s), (p = d.length)
                      } else 0 === B && (c++, (d = [0]))
                      ;(w[E++] = c),
                        d[0] ? (d[p++] = S[G] || 0) : ((d = [S[G]]), (p = 1))
                    } while ((G++ < k || null != d[0]) && q--)
                    ;(Q = null != d[0]), w[0] || w.splice(0, 1)
                  }
                  if (s == I) {
                    for (E = 1, q = w[0]; q >= 10; q /= 10, E++);
                    V(f, i + (f.e = E + g * h - 1) + 1, a, Q)
                  } else (f.e = g), (f.r = +Q)
                  return f
                }
              })()),
              (k = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
              (_ = /^([^.]+)\.$/),
              (m = /^\.([^.]+)$/),
              (b = /^-?(Infinity|NaN)$/),
              (q = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
              (n = function (A, t, e, r) {
                var n,
                  i = e ? t : t.replace(q, "")
                if (b.test(i)) A.s = isNaN(i) ? null : i < 0 ? -1 : 1
                else {
                  if (
                    !e &&
                    ((i = i.replace(k, function (A, t, e) {
                      return (
                        (n =
                          "x" == (e = e.toLowerCase()) ? 16 : "b" == e ? 2 : 8),
                        r && r != n ? A : t
                      )
                    })),
                    r && ((n = r), (i = i.replace(_, "$1").replace(m, "0.$1"))),
                    t != i)
                  )
                    return new Z(i, n)
                  if (Z.DEBUG)
                    throw Error(
                      B + "Not a" + (r ? " base " + r : "") + " number: " + t
                    )
                  A.s = null
                }
                A.c = A.e = null
              }),
              (S.absoluteValue = S.abs =
                function () {
                  var A = new Z(this)
                  return A.s < 0 && (A.s = 1), A
                }),
              (S.comparedTo = function (A, t) {
                return f(this, new Z(A, t))
              }),
              (S.decimalPlaces = S.dp =
                function (A, t) {
                  var e,
                    r,
                    n,
                    i = this
                  if (null != A)
                    return (
                      w(A, 0, u),
                      null == t ? (t = H) : w(t, 0, 8),
                      V(new Z(i), A + i.e + 1, t)
                    )
                  if (!(e = i.c)) return null
                  if (
                    ((r = ((n = e.length - 1) - C(this.e / h)) * h), (n = e[n]))
                  )
                    for (; n % 10 == 0; n /= 10, r--);
                  return r < 0 && (r = 0), r
                }),
              (S.dividedBy = S.div =
                function (A, t) {
                  return e(this, new Z(A, t), F, H)
                }),
              (S.dividedToIntegerBy = S.idiv =
                function (A, t) {
                  return e(this, new Z(A, t), 0, 1)
                }),
              (S.exponentiatedBy = S.pow =
                function (A, t) {
                  var e,
                    r,
                    n,
                    i,
                    a,
                    g,
                    I,
                    E,
                    Q = this
                  if ((A = new Z(A)).c && !A.isInteger())
                    throw Error(B + "Exponent not an integer: " + P(A))
                  if (
                    (null != t && (t = new Z(t)),
                    (a = A.e > 14),
                    !Q.c ||
                      !Q.c[0] ||
                      (1 == Q.c[0] && !Q.e && 1 == Q.c.length) ||
                      !A.c ||
                      !A.c[0])
                  )
                    return (
                      (E = new Z(Math.pow(+P(Q), a ? 2 - d(A) : +P(A)))),
                      t ? E.mod(t) : E
                    )
                  if (((g = A.s < 0), t)) {
                    if (t.c ? !t.c[0] : !t.s) return new Z(NaN)
                    ;(r = !g && Q.isInteger() && t.isInteger()) &&
                      (Q = Q.mod(t))
                  } else {
                    if (
                      A.e > 9 &&
                      (Q.e > 0 ||
                        Q.e < -1 ||
                        (0 == Q.e
                          ? Q.c[0] > 1 || (a && Q.c[1] >= 24e7)
                          : Q.c[0] < 8e13 || (a && Q.c[0] <= 9999975e7)))
                    )
                      return (
                        (i = Q.s < 0 && d(A) ? -0 : 0),
                        Q.e > -1 && (i = 1 / i),
                        new Z(g ? 1 / i : i)
                      )
                    J && (i = s(J / h + 2))
                  }
                  for (
                    a
                      ? ((e = new Z(0.5)), g && (A.s = 1), (I = d(A)))
                      : (I = (n = Math.abs(+P(A))) % 2),
                      E = new Z(D);
                    ;

                  ) {
                    if (I) {
                      if (!(E = E.times(Q)).c) break
                      i
                        ? E.c.length > i && (E.c.length = i)
                        : r && (E = E.mod(t))
                    }
                    if (n) {
                      if (0 === (n = o(n / 2))) break
                      I = n % 2
                    } else if ((V((A = A.times(e)), A.e + 1, 1), A.e > 14))
                      I = d(A)
                    else {
                      if (0 == (n = +P(A))) break
                      I = n % 2
                    }
                    ;(Q = Q.times(Q)),
                      i
                        ? Q.c && Q.c.length > i && (Q.c.length = i)
                        : r && (Q = Q.mod(t))
                  }
                  return r
                    ? E
                    : (g && (E = D.div(E)),
                      t ? E.mod(t) : i ? V(E, J, H, void 0) : E)
                }),
              (S.integerValue = function (A) {
                var t = new Z(this)
                return null == A ? (A = H) : w(A, 0, 8), V(t, t.e + 1, A)
              }),
              (S.isEqualTo = S.eq =
                function (A, t) {
                  return 0 === f(this, new Z(A, t))
                }),
              (S.isFinite = function () {
                return !!this.c
              }),
              (S.isGreaterThan = S.gt =
                function (A, t) {
                  return f(this, new Z(A, t)) > 0
                }),
              (S.isGreaterThanOrEqualTo = S.gte =
                function (A, t) {
                  return 1 === (t = f(this, new Z(A, t))) || 0 === t
                }),
              (S.isInteger = function () {
                return !!this.c && C(this.e / h) > this.c.length - 2
              }),
              (S.isLessThan = S.lt =
                function (A, t) {
                  return f(this, new Z(A, t)) < 0
                }),
              (S.isLessThanOrEqualTo = S.lte =
                function (A, t) {
                  return -1 === (t = f(this, new Z(A, t))) || 0 === t
                }),
              (S.isNaN = function () {
                return !this.s
              }),
              (S.isNegative = function () {
                return this.s < 0
              }),
              (S.isPositive = function () {
                return this.s > 0
              }),
              (S.isZero = function () {
                return !!this.c && 0 == this.c[0]
              }),
              (S.minus = function (A, t) {
                var e,
                  r,
                  n,
                  i,
                  a = this,
                  s = a.s
                if (((t = (A = new Z(A, t)).s), !s || !t)) return new Z(NaN)
                if (s != t) return (A.s = -t), a.plus(A)
                var o = a.e / h,
                  B = A.e / h,
                  g = a.c,
                  E = A.c
                if (!o || !B) {
                  if (!g || !E) return g ? ((A.s = -t), A) : new Z(E ? a : NaN)
                  if (!g[0] || !E[0])
                    return E[0]
                      ? ((A.s = -t), A)
                      : new Z(g[0] ? a : 3 == H ? -0 : 0)
                }
                if (((o = C(o)), (B = C(B)), (g = g.slice()), (s = o - B))) {
                  for (
                    (i = s < 0) ? ((s = -s), (n = g)) : ((B = o), (n = E)),
                      n.reverse(),
                      t = s;
                    t--;
                    n.push(0)
                  );
                  n.reverse()
                } else
                  for (
                    r = (i = (s = g.length) < (t = E.length)) ? s : t,
                      s = t = 0;
                    t < r;
                    t++
                  )
                    if (g[t] != E[t]) {
                      i = g[t] < E[t]
                      break
                    }
                if (
                  (i && ((n = g), (g = E), (E = n), (A.s = -A.s)),
                  (t = (r = E.length) - (e = g.length)) > 0)
                )
                  for (; t--; g[e++] = 0);
                for (t = I - 1; r > s; ) {
                  if (g[--r] < E[r]) {
                    for (e = r; e && !g[--e]; g[e] = t);
                    --g[e], (g[r] += I)
                  }
                  g[r] -= E[r]
                }
                for (; 0 == g[0]; g.splice(0, 1), --B);
                return g[0]
                  ? K(A, g, B)
                  : ((A.s = 3 == H ? -1 : 1), (A.c = [(A.e = 0)]), A)
              }),
              (S.modulo = S.mod =
                function (A, t) {
                  var r,
                    n,
                    i = this
                  return (
                    (A = new Z(A, t)),
                    !i.c || !A.s || (A.c && !A.c[0])
                      ? new Z(NaN)
                      : !A.c || (i.c && !i.c[0])
                      ? new Z(i)
                      : (9 == Y
                          ? ((n = A.s),
                            (A.s = 1),
                            (r = e(i, A, 0, 3)),
                            (A.s = n),
                            (r.s *= n))
                          : (r = e(i, A, 0, Y)),
                        (A = i.minus(r.times(A))).c[0] || 1 != Y || (A.s = i.s),
                        A)
                  )
                }),
              (S.multipliedBy = S.times =
                function (A, t) {
                  var e,
                    r,
                    n,
                    i,
                    a,
                    s,
                    o,
                    B,
                    g,
                    E,
                    Q,
                    u,
                    l,
                    f,
                    w,
                    d = this,
                    p = d.c,
                    y = (A = new Z(A, t)).c
                  if (!(p && y && p[0] && y[0]))
                    return (
                      !d.s || !A.s || (p && !p[0] && !y) || (y && !y[0] && !p)
                        ? (A.c = A.e = A.s = null)
                        : ((A.s *= d.s),
                          p && y
                            ? ((A.c = [0]), (A.e = 0))
                            : (A.c = A.e = null)),
                      A
                    )
                  for (
                    r = C(d.e / h) + C(A.e / h),
                      A.s *= d.s,
                      (o = p.length) < (E = y.length) &&
                        ((l = p), (p = y), (y = l), (n = o), (o = E), (E = n)),
                      n = o + E,
                      l = [];
                    n--;
                    l.push(0)
                  );
                  for (f = I, w = c, n = E; --n >= 0; ) {
                    for (
                      e = 0, Q = y[n] % w, u = (y[n] / w) | 0, i = n + (a = o);
                      i > n;

                    )
                      (e =
                        (((B =
                          Q * (B = p[--a] % w) +
                          ((s = u * B + (g = (p[a] / w) | 0) * Q) % w) * w +
                          l[i] +
                          e) /
                          f) |
                          0) +
                        ((s / w) | 0) +
                        u * g),
                        (l[i--] = B % f)
                    l[i] = e
                  }
                  return e ? ++r : l.splice(0, 1), K(A, l, r)
                }),
              (S.negated = function () {
                var A = new Z(this)
                return (A.s = -A.s || null), A
              }),
              (S.plus = function (A, t) {
                var e,
                  r = this,
                  n = r.s
                if (((t = (A = new Z(A, t)).s), !n || !t)) return new Z(NaN)
                if (n != t) return (A.s = -t), r.minus(A)
                var i = r.e / h,
                  a = A.e / h,
                  s = r.c,
                  o = A.c
                if (!i || !a) {
                  if (!s || !o) return new Z(n / 0)
                  if (!s[0] || !o[0]) return o[0] ? A : new Z(s[0] ? r : 0 * n)
                }
                if (((i = C(i)), (a = C(a)), (s = s.slice()), (n = i - a))) {
                  for (
                    n > 0 ? ((a = i), (e = o)) : ((n = -n), (e = s)),
                      e.reverse();
                    n--;
                    e.push(0)
                  );
                  e.reverse()
                }
                for (
                  (n = s.length) - (t = o.length) < 0 &&
                    ((e = o), (o = s), (s = e), (t = n)),
                    n = 0;
                  t;

                )
                  (n = ((s[--t] = s[t] + o[t] + n) / I) | 0),
                    (s[t] = I === s[t] ? 0 : s[t] % I)
                return n && ((s = [n].concat(s)), ++a), K(A, s, a)
              }),
              (S.precision = S.sd =
                function (A, t) {
                  var e,
                    r,
                    n,
                    i = this
                  if (null != A && A !== !!A)
                    return (
                      w(A, 1, u),
                      null == t ? (t = H) : w(t, 0, 8),
                      V(new Z(i), A, t)
                    )
                  if (!(e = i.c)) return null
                  if (((r = (n = e.length - 1) * h + 1), (n = e[n]))) {
                    for (; n % 10 == 0; n /= 10, r--);
                    for (n = e[0]; n >= 10; n /= 10, r++);
                  }
                  return A && i.e + 1 > r && (r = i.e + 1), r
                }),
              (S.shiftedBy = function (A) {
                return w(A, -9007199254740991, E), this.times("1e" + A)
              }),
              (S.squareRoot = S.sqrt =
                function () {
                  var A,
                    t,
                    r,
                    n,
                    i,
                    a = this,
                    s = a.c,
                    o = a.s,
                    B = a.e,
                    g = F + 4,
                    I = new Z("0.5")
                  if (1 !== o || !s || !s[0])
                    return new Z(
                      !o || (o < 0 && (!s || s[0])) ? NaN : s ? a : 1 / 0
                    )
                  if (
                    (0 == (o = Math.sqrt(+P(a))) || o == 1 / 0
                      ? (((t = l(s)).length + B) % 2 == 0 && (t += "0"),
                        (o = Math.sqrt(+t)),
                        (B = C((B + 1) / 2) - (B < 0 || B % 2)),
                        (r = new Z(
                          (t =
                            o == 1 / 0
                              ? "5e" + B
                              : (t = o.toExponential()).slice(
                                  0,
                                  t.indexOf("e") + 1
                                ) + B)
                        )))
                      : (r = new Z(o + "")),
                    r.c[0])
                  )
                    for ((o = (B = r.e) + g) < 3 && (o = 0); ; )
                      if (
                        ((i = r),
                        (r = I.times(i.plus(e(a, i, g, 1)))),
                        l(i.c).slice(0, o) === (t = l(r.c)).slice(0, o))
                      ) {
                        if (
                          (r.e < B && --o,
                          "9999" != (t = t.slice(o - 3, o + 1)) &&
                            (n || "4999" != t))
                        ) {
                          ;(+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (V(r, r.e + F + 2, 1), (A = !r.times(r).eq(a)))
                          break
                        }
                        if (!n && (V(i, i.e + F + 2, 0), i.times(i).eq(a))) {
                          r = i
                          break
                        }
                        ;(g += 4), (o += 4), (n = 1)
                      }
                  return V(r, r.e + F + 1, H, A)
                }),
              (S.toExponential = function (A, t) {
                return null != A && (w(A, 0, u), A++), O(this, A, t, 1)
              }),
              (S.toFixed = function (A, t) {
                return (
                  null != A && (w(A, 0, u), (A = A + this.e + 1)), O(this, A, t)
                )
              }),
              (S.toFormat = function (A, t, e) {
                var r,
                  n = this
                if (null == e)
                  null != A && t && "object" == typeof t
                    ? ((e = t), (t = null))
                    : A && "object" == typeof A
                    ? ((e = A), (A = t = null))
                    : (e = T)
                else if ("object" != typeof e)
                  throw Error(B + "Argument not an object: " + e)
                if (((r = n.toFixed(A, t)), n.c)) {
                  var i,
                    a = r.split("."),
                    s = +e.groupSize,
                    o = +e.secondaryGroupSize,
                    g = e.groupSeparator || "",
                    I = a[0],
                    h = a[1],
                    E = n.s < 0,
                    Q = E ? I.slice(1) : I,
                    c = Q.length
                  if (
                    (o && ((i = s), (s = o), (o = i), (c -= i)), s > 0 && c > 0)
                  ) {
                    for (i = c % s || s, I = Q.substr(0, i); i < c; i += s)
                      I += g + Q.substr(i, s)
                    o > 0 && (I += g + Q.slice(i)), E && (I = "-" + I)
                  }
                  r = h
                    ? I +
                      (e.decimalSeparator || "") +
                      ((o = +e.fractionGroupSize)
                        ? h.replace(
                            new RegExp("\\d{" + o + "}\\B", "g"),
                            "$&" + (e.fractionGroupSeparator || "")
                          )
                        : h)
                    : I
                }
                return (e.prefix || "") + r + (e.suffix || "")
              }),
              (S.toFraction = function (A) {
                var t,
                  r,
                  n,
                  i,
                  a,
                  s,
                  o,
                  g,
                  I,
                  E,
                  c,
                  u,
                  C = this,
                  f = C.c
                if (
                  null != A &&
                  ((!(o = new Z(A)).isInteger() && (o.c || 1 !== o.s)) ||
                    o.lt(D))
                )
                  throw Error(
                    B +
                      "Argument " +
                      (o.isInteger() ? "out of range: " : "not an integer: ") +
                      P(o)
                  )
                if (!f) return new Z(C)
                for (
                  t = new Z(D),
                    I = r = new Z(D),
                    n = g = new Z(D),
                    u = l(f),
                    a = t.e = u.length - C.e - 1,
                    t.c[0] = Q[(s = a % h) < 0 ? h + s : s],
                    A = !A || o.comparedTo(t) > 0 ? (a > 0 ? t : I) : o,
                    s = v,
                    v = 1 / 0,
                    o = new Z(u),
                    g.c[0] = 0;
                  (E = e(o, t, 0, 1)),
                    1 != (i = r.plus(E.times(n))).comparedTo(A);

                )
                  (r = n),
                    (n = i),
                    (I = g.plus(E.times((i = I)))),
                    (g = i),
                    (t = o.minus(E.times((i = t)))),
                    (o = i)
                return (
                  (i = e(A.minus(r), n, 0, 1)),
                  (g = g.plus(i.times(I))),
                  (r = r.plus(i.times(n))),
                  (g.s = I.s = C.s),
                  (c =
                    e(I, n, (a *= 2), H)
                      .minus(C)
                      .abs()
                      .comparedTo(e(g, r, a, H).minus(C).abs()) < 1
                      ? [I, n]
                      : [g, r]),
                  (v = s),
                  c
                )
              }),
              (S.toNumber = function () {
                return +P(this)
              }),
              (S.toPrecision = function (A, t) {
                return null != A && w(A, 1, u), O(this, A, t, 2)
              }),
              (S.toString = function (A) {
                var t,
                  e = this,
                  n = e.s,
                  i = e.e
                return (
                  null === i
                    ? n
                      ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                      : (t = "NaN")
                    : (null == A
                        ? (t =
                            i <= N || i >= R ? p(l(e.c), i) : y(l(e.c), i, "0"))
                        : 10 === A && x
                        ? (t = y(
                            l((e = V(new Z(e), F + i + 1, H)).c),
                            e.e,
                            "0"
                          ))
                        : (w(A, 2, L.length, "Base"),
                          (t = r(y(l(e.c), i, "0"), 10, A, n, !0))),
                      n < 0 && e.c[0] && (t = "-" + t)),
                  t
                )
              }),
              (S.valueOf = S.toJSON =
                function () {
                  return P(this)
                }),
              (S._isBigNumber = !0),
              null != t && Z.set(t),
              Z
            )
          })()),
            (i.default = i.BigNumber = i),
            void 0 ===
              (r = function () {
                return i
              }.call(t, e, t, A)) || (A.exports = r)
        })()
      },
      478: (A, t, e) => {
        "use strict"
        const r = e(431).BigNumber
        ;(t.MT = {
          POS_INT: 0,
          NEG_INT: 1,
          BYTE_STRING: 2,
          UTF8_STRING: 3,
          ARRAY: 4,
          MAP: 5,
          TAG: 6,
          SIMPLE_FLOAT: 7
        }),
          (t.TAG = {
            DATE_STRING: 0,
            DATE_EPOCH: 1,
            POS_BIGINT: 2,
            NEG_BIGINT: 3,
            DECIMAL_FRAC: 4,
            BIGFLOAT: 5,
            BASE64URL_EXPECTED: 21,
            BASE64_EXPECTED: 22,
            BASE16_EXPECTED: 23,
            CBOR: 24,
            URI: 32,
            BASE64URL: 33,
            BASE64: 34,
            REGEXP: 35,
            MIME: 36
          }),
          (t.NUMBYTES = {
            ZERO: 0,
            ONE: 24,
            TWO: 25,
            FOUR: 26,
            EIGHT: 27,
            INDEFINITE: 31
          }),
          (t.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 }),
          (t.SYMS = {
            NULL: Symbol("null"),
            UNDEFINED: Symbol("undef"),
            PARENT: Symbol("parent"),
            BREAK: Symbol("break"),
            STREAM: Symbol("stream")
          }),
          (t.SHIFT32 = Math.pow(2, 32)),
          (t.SHIFT16 = Math.pow(2, 16)),
          (t.MAX_SAFE_HIGH = 2097151),
          (t.NEG_ONE = new r(-1)),
          (t.TEN = new r(10)),
          (t.TWO = new r(2)),
          (t.PARENT = {
            ARRAY: 0,
            OBJECT: 1,
            MAP: 2,
            TAG: 3,
            BYTE_STRING: 4,
            UTF8_STRING: 5
          })
      },
      520: A => {
        A.exports = function (A, t, e) {
          "use asm"
          var r = new A.Uint8Array(e)
          var n = t.pushInt
          var i = t.pushInt32
          var a = t.pushInt32Neg
          var s = t.pushInt64
          var o = t.pushInt64Neg
          var B = t.pushFloat
          var g = t.pushFloatSingle
          var I = t.pushFloatDouble
          var h = t.pushTrue
          var E = t.pushFalse
          var Q = t.pushUndefined
          var c = t.pushNull
          var u = t.pushInfinity
          var C = t.pushInfinityNeg
          var l = t.pushNaN
          var f = t.pushNaNNeg
          var w = t.pushArrayStart
          var d = t.pushArrayStartFixed
          var p = t.pushArrayStartFixed32
          var y = t.pushArrayStartFixed64
          var G = t.pushObjectStart
          var k = t.pushObjectStartFixed
          var _ = t.pushObjectStartFixed32
          var m = t.pushObjectStartFixed64
          var b = t.pushByteString
          var q = t.pushByteStringStart
          var S = t.pushUtf8String
          var D = t.pushUtf8StringStart
          var F = t.pushSimpleUnassigned
          var H = t.pushTagStart
          var N = t.pushTagStart4
          var R = t.pushTagStart8
          var U = t.pushTagUnassigned
          var v = t.pushBreak
          var M = A.Math.pow
          var Y = 0
          var J = 0
          var T = 0
          function L(A) {
            A = A | 0
            Y = 0
            J = A
            while ((Y | 0) < (J | 0)) {
              T = WA[r[Y] & 255](r[Y] | 0) | 0
              if ((T | 0) > 0) {
                break
              }
            }
            return T | 0
          }
          function x(A) {
            A = A | 0
            if ((((Y | 0) + (A | 0)) | 0) < (J | 0)) {
              return 0
            }
            return 1
          }
          function Z(A) {
            A = A | 0
            return (r[A | 0] << 8) | r[(A + 1) | 0] | 0
          }
          function O(A) {
            A = A | 0
            return (
              (r[A | 0] << 24) |
              (r[(A + 1) | 0] << 16) |
              (r[(A + 2) | 0] << 8) |
              r[(A + 3) | 0] |
              0
            )
          }
          function j(A) {
            A = A | 0
            n(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function K(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            n(r[(Y + 1) | 0] | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function V(A) {
            A = A | 0
            if (x(2) | 0) {
              return 1
            }
            n(Z((Y + 1) | 0) | 0)
            Y = (Y + 3) | 0
            return 0
          }
          function P(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            i(Z((Y + 1) | 0) | 0, Z((Y + 3) | 0) | 0)
            Y = (Y + 5) | 0
            return 0
          }
          function W(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            s(
              Z((Y + 1) | 0) | 0,
              Z((Y + 3) | 0) | 0,
              Z((Y + 5) | 0) | 0,
              Z((Y + 7) | 0) | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function z(A) {
            A = A | 0
            n((-1 - ((A - 32) | 0)) | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function X(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            n((-1 - (r[(Y + 1) | 0] | 0)) | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function $(A) {
            A = A | 0
            var t = 0
            if (x(2) | 0) {
              return 1
            }
            t = Z((Y + 1) | 0) | 0
            n((-1 - (t | 0)) | 0)
            Y = (Y + 3) | 0
            return 0
          }
          function AA(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            a(Z((Y + 1) | 0) | 0, Z((Y + 3) | 0) | 0)
            Y = (Y + 5) | 0
            return 0
          }
          function tA(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            o(
              Z((Y + 1) | 0) | 0,
              Z((Y + 3) | 0) | 0,
              Z((Y + 5) | 0) | 0,
              Z((Y + 7) | 0) | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function eA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            r = (A - 64) | 0
            if (x(r | 0) | 0) {
              return 1
            }
            t = (Y + 1) | 0
            e = (((Y + 1) | 0) + (r | 0)) | 0
            b(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function rA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var n = 0
            if (x(1) | 0) {
              return 1
            }
            n = r[(Y + 1) | 0] | 0
            t = (Y + 2) | 0
            e = (((Y + 2) | 0) + (n | 0)) | 0
            if (x((n + 1) | 0) | 0) {
              return 1
            }
            b(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function nA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            if (x(2) | 0) {
              return 1
            }
            r = Z((Y + 1) | 0) | 0
            t = (Y + 3) | 0
            e = (((Y + 3) | 0) + (r | 0)) | 0
            if (x((r + 2) | 0) | 0) {
              return 1
            }
            b(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function iA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            if (x(4) | 0) {
              return 1
            }
            r = O((Y + 1) | 0) | 0
            t = (Y + 5) | 0
            e = (((Y + 5) | 0) + (r | 0)) | 0
            if (x((r + 4) | 0) | 0) {
              return 1
            }
            b(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function aA(A) {
            A = A | 0
            return 1
          }
          function sA(A) {
            A = A | 0
            q()
            Y = (Y + 1) | 0
            return 0
          }
          function oA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            r = (A - 96) | 0
            if (x(r | 0) | 0) {
              return 1
            }
            t = (Y + 1) | 0
            e = (((Y + 1) | 0) + (r | 0)) | 0
            S(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function BA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var n = 0
            if (x(1) | 0) {
              return 1
            }
            n = r[(Y + 1) | 0] | 0
            t = (Y + 2) | 0
            e = (((Y + 2) | 0) + (n | 0)) | 0
            if (x((n + 1) | 0) | 0) {
              return 1
            }
            S(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function gA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            if (x(2) | 0) {
              return 1
            }
            r = Z((Y + 1) | 0) | 0
            t = (Y + 3) | 0
            e = (((Y + 3) | 0) + (r | 0)) | 0
            if (x((r + 2) | 0) | 0) {
              return 1
            }
            S(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function IA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var r = 0
            if (x(4) | 0) {
              return 1
            }
            r = O((Y + 1) | 0) | 0
            t = (Y + 5) | 0
            e = (((Y + 5) | 0) + (r | 0)) | 0
            if (x((r + 4) | 0) | 0) {
              return 1
            }
            S(t | 0, e | 0)
            Y = e | 0
            return 0
          }
          function hA(A) {
            A = A | 0
            return 1
          }
          function EA(A) {
            A = A | 0
            D()
            Y = (Y + 1) | 0
            return 0
          }
          function QA(A) {
            A = A | 0
            d((A - 128) | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function cA(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            d(r[(Y + 1) | 0] | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function uA(A) {
            A = A | 0
            if (x(2) | 0) {
              return 1
            }
            d(Z((Y + 1) | 0) | 0)
            Y = (Y + 3) | 0
            return 0
          }
          function CA(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            p(Z((Y + 1) | 0) | 0, Z((Y + 3) | 0) | 0)
            Y = (Y + 5) | 0
            return 0
          }
          function lA(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            y(
              Z((Y + 1) | 0) | 0,
              Z((Y + 3) | 0) | 0,
              Z((Y + 5) | 0) | 0,
              Z((Y + 7) | 0) | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function fA(A) {
            A = A | 0
            w()
            Y = (Y + 1) | 0
            return 0
          }
          function wA(A) {
            A = A | 0
            var t = 0
            t = (A - 160) | 0
            if (x(t | 0) | 0) {
              return 1
            }
            k(t | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function dA(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            k(r[(Y + 1) | 0] | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function pA(A) {
            A = A | 0
            if (x(2) | 0) {
              return 1
            }
            k(Z((Y + 1) | 0) | 0)
            Y = (Y + 3) | 0
            return 0
          }
          function yA(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            _(Z((Y + 1) | 0) | 0, Z((Y + 3) | 0) | 0)
            Y = (Y + 5) | 0
            return 0
          }
          function GA(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            m(
              Z((Y + 1) | 0) | 0,
              Z((Y + 3) | 0) | 0,
              Z((Y + 5) | 0) | 0,
              Z((Y + 7) | 0) | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function kA(A) {
            A = A | 0
            G()
            Y = (Y + 1) | 0
            return 0
          }
          function _A(A) {
            A = A | 0
            H((A - 192) | 0 | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function mA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function bA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function qA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function SA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function DA(A) {
            A = A | 0
            H((A - 192) | 0 | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function FA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function HA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function NA(A) {
            A | 0
            H(A | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function RA(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            H(r[(Y + 1) | 0] | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function UA(A) {
            A = A | 0
            if (x(2) | 0) {
              return 1
            }
            H(Z((Y + 1) | 0) | 0)
            Y = (Y + 3) | 0
            return 0
          }
          function vA(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            N(Z((Y + 1) | 0) | 0, Z((Y + 3) | 0) | 0)
            Y = (Y + 5) | 0
            return 0
          }
          function MA(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            R(
              Z((Y + 1) | 0) | 0,
              Z((Y + 3) | 0) | 0,
              Z((Y + 5) | 0) | 0,
              Z((Y + 7) | 0) | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function YA(A) {
            A = A | 0
            F(((A | 0) - 224) | 0)
            Y = (Y + 1) | 0
            return 0
          }
          function JA(A) {
            A = A | 0
            E()
            Y = (Y + 1) | 0
            return 0
          }
          function TA(A) {
            A = A | 0
            h()
            Y = (Y + 1) | 0
            return 0
          }
          function LA(A) {
            A = A | 0
            c()
            Y = (Y + 1) | 0
            return 0
          }
          function xA(A) {
            A = A | 0
            Q()
            Y = (Y + 1) | 0
            return 0
          }
          function ZA(A) {
            A = A | 0
            if (x(1) | 0) {
              return 1
            }
            F(r[(Y + 1) | 0] | 0)
            Y = (Y + 2) | 0
            return 0
          }
          function OA(A) {
            A = A | 0
            var t = 0
            var e = 0
            var n = 1.0
            var i = 0.0
            var a = 0.0
            var s = 0.0
            if (x(2) | 0) {
              return 1
            }
            t = r[(Y + 1) | 0] | 0
            e = r[(Y + 2) | 0] | 0
            if ((t | 0) & 0x80) {
              n = -1.0
            }
            i = +(((t | 0) & 0x7c) >> 2)
            a = +((((t | 0) & 0x03) << 8) | e)
            if (+i == 0.0) {
              B(+(+n * +5.9604644775390625e-8 * +a))
            } else if (+i == 31.0) {
              if (+n == 1.0) {
                if (+a > 0.0) {
                  l()
                } else {
                  u()
                }
              } else {
                if (+a > 0.0) {
                  f()
                } else {
                  C()
                }
              }
            } else {
              B(+(+n * M(+2, +(+i - 25.0)) * +(1024.0 + a)))
            }
            Y = (Y + 3) | 0
            return 0
          }
          function jA(A) {
            A = A | 0
            if (x(4) | 0) {
              return 1
            }
            g(
              r[(Y + 1) | 0] | 0,
              r[(Y + 2) | 0] | 0,
              r[(Y + 3) | 0] | 0,
              r[(Y + 4) | 0] | 0
            )
            Y = (Y + 5) | 0
            return 0
          }
          function KA(A) {
            A = A | 0
            if (x(8) | 0) {
              return 1
            }
            I(
              r[(Y + 1) | 0] | 0,
              r[(Y + 2) | 0] | 0,
              r[(Y + 3) | 0] | 0,
              r[(Y + 4) | 0] | 0,
              r[(Y + 5) | 0] | 0,
              r[(Y + 6) | 0] | 0,
              r[(Y + 7) | 0] | 0,
              r[(Y + 8) | 0] | 0
            )
            Y = (Y + 9) | 0
            return 0
          }
          function VA(A) {
            A = A | 0
            return 1
          }
          function PA(A) {
            A = A | 0
            v()
            Y = (Y + 1) | 0
            return 0
          }
          var WA = [
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            j,
            K,
            V,
            P,
            W,
            VA,
            VA,
            VA,
            VA,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            z,
            X,
            $,
            AA,
            tA,
            VA,
            VA,
            VA,
            VA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            eA,
            rA,
            nA,
            iA,
            aA,
            VA,
            VA,
            VA,
            sA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            oA,
            BA,
            gA,
            IA,
            hA,
            VA,
            VA,
            VA,
            EA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            QA,
            cA,
            uA,
            CA,
            lA,
            VA,
            VA,
            VA,
            fA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            wA,
            dA,
            pA,
            yA,
            GA,
            VA,
            VA,
            VA,
            kA,
            _A,
            _A,
            _A,
            _A,
            _A,
            _A,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            DA,
            RA,
            UA,
            vA,
            MA,
            VA,
            VA,
            VA,
            VA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            YA,
            JA,
            TA,
            LA,
            xA,
            ZA,
            OA,
            jA,
            KA,
            VA,
            VA,
            VA,
            PA
          ]
          return { parse: L }
        }
      },
      988: (A, t, e) => {
        "use strict"
        const { Buffer: r } = e(764),
          n = e(645),
          i = e(431).BigNumber,
          a = e(520),
          s = e(516),
          o = e(478),
          B = e(649),
          g = e(794),
          { URL: I } = e(745)
        class h {
          constructor(A) {
            !(A = A || {}).size || A.size < 65536
              ? (A.size = 65536)
              : (A.size = s.nextPowerOf2(A.size)),
              (this._heap = new ArrayBuffer(A.size)),
              (this._heap8 = new Uint8Array(this._heap)),
              (this._buffer = r.from(this._heap)),
              this._reset(),
              (this._knownTags = Object.assign(
                {
                  0: A => new Date(A),
                  1: A => new Date(1e3 * A),
                  2: A => s.arrayBufferToBignumber(A),
                  3: A => o.NEG_ONE.minus(s.arrayBufferToBignumber(A)),
                  4: A => o.TEN.pow(A[0]).times(A[1]),
                  5: A => o.TWO.pow(A[0]).times(A[1]),
                  32: A => new I(A),
                  35: A => new RegExp(A)
                },
                A.tags
              )),
              (this.parser = a(
                e.g,
                {
                  log: console.log.bind(console),
                  pushInt: this.pushInt.bind(this),
                  pushInt32: this.pushInt32.bind(this),
                  pushInt32Neg: this.pushInt32Neg.bind(this),
                  pushInt64: this.pushInt64.bind(this),
                  pushInt64Neg: this.pushInt64Neg.bind(this),
                  pushFloat: this.pushFloat.bind(this),
                  pushFloatSingle: this.pushFloatSingle.bind(this),
                  pushFloatDouble: this.pushFloatDouble.bind(this),
                  pushTrue: this.pushTrue.bind(this),
                  pushFalse: this.pushFalse.bind(this),
                  pushUndefined: this.pushUndefined.bind(this),
                  pushNull: this.pushNull.bind(this),
                  pushInfinity: this.pushInfinity.bind(this),
                  pushInfinityNeg: this.pushInfinityNeg.bind(this),
                  pushNaN: this.pushNaN.bind(this),
                  pushNaNNeg: this.pushNaNNeg.bind(this),
                  pushArrayStart: this.pushArrayStart.bind(this),
                  pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
                  pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
                  pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
                  pushObjectStart: this.pushObjectStart.bind(this),
                  pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
                  pushObjectStartFixed32:
                    this.pushObjectStartFixed32.bind(this),
                  pushObjectStartFixed64:
                    this.pushObjectStartFixed64.bind(this),
                  pushByteString: this.pushByteString.bind(this),
                  pushByteStringStart: this.pushByteStringStart.bind(this),
                  pushUtf8String: this.pushUtf8String.bind(this),
                  pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
                  pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
                  pushTagUnassigned: this.pushTagUnassigned.bind(this),
                  pushTagStart: this.pushTagStart.bind(this),
                  pushTagStart4: this.pushTagStart4.bind(this),
                  pushTagStart8: this.pushTagStart8.bind(this),
                  pushBreak: this.pushBreak.bind(this)
                },
                this._heap
              ))
          }
          get _depth() {
            return this._parents.length
          }
          get _currentParent() {
            return this._parents[this._depth - 1]
          }
          get _ref() {
            return this._currentParent.ref
          }
          _closeParent() {
            var A = this._parents.pop()
            if (A.length > 0) throw new Error(`Missing ${A.length} elements`)
            switch (A.type) {
              case o.PARENT.TAG:
                this._push(this.createTag(A.ref[0], A.ref[1]))
                break
              case o.PARENT.BYTE_STRING:
                this._push(this.createByteString(A.ref, A.length))
                break
              case o.PARENT.UTF8_STRING:
                this._push(this.createUtf8String(A.ref, A.length))
                break
              case o.PARENT.MAP:
                if (A.values % 2 > 0)
                  throw new Error("Odd number of elements in the map")
                this._push(this.createMap(A.ref, A.length))
                break
              case o.PARENT.OBJECT:
                if (A.values % 2 > 0)
                  throw new Error("Odd number of elements in the map")
                this._push(this.createObject(A.ref, A.length))
                break
              case o.PARENT.ARRAY:
                this._push(this.createArray(A.ref, A.length))
            }
            this._currentParent &&
              this._currentParent.type === o.PARENT.TAG &&
              this._dec()
          }
          _dec() {
            const A = this._currentParent
            A.length < 0 || (A.length--, 0 === A.length && this._closeParent())
          }
          _push(A, t) {
            const e = this._currentParent
            switch ((e.values++, e.type)) {
              case o.PARENT.ARRAY:
              case o.PARENT.BYTE_STRING:
              case o.PARENT.UTF8_STRING:
                e.length > -1
                  ? (this._ref[this._ref.length - e.length] = A)
                  : this._ref.push(A),
                  this._dec()
                break
              case o.PARENT.OBJECT:
                null != e.tmpKey
                  ? ((this._ref[e.tmpKey] = A), (e.tmpKey = null), this._dec())
                  : ((e.tmpKey = A),
                    "string" != typeof e.tmpKey &&
                      ((e.type = o.PARENT.MAP), (e.ref = s.buildMap(e.ref))))
                break
              case o.PARENT.MAP:
                null != e.tmpKey
                  ? (this._ref.set(e.tmpKey, A), (e.tmpKey = null), this._dec())
                  : (e.tmpKey = A)
                break
              case o.PARENT.TAG:
                this._ref.push(A), t || this._dec()
                break
              default:
                throw new Error("Unknown parent type")
            }
          }
          _createParent(A, t, e) {
            this._parents[this._depth] = {
              type: t,
              length: e,
              ref: A,
              values: 0,
              tmpKey: null
            }
          }
          _reset() {
            ;(this._res = []),
              (this._parents = [
                {
                  type: o.PARENT.ARRAY,
                  length: -1,
                  ref: this._res,
                  values: 0,
                  tmpKey: null
                }
              ])
          }
          createTag(A, t) {
            const e = this._knownTags[A]
            return e ? e(t) : new g(A, t)
          }
          createMap(A, t) {
            return A
          }
          createObject(A, t) {
            return A
          }
          createArray(A, t) {
            return A
          }
          createByteString(A, t) {
            return r.concat(A)
          }
          createByteStringFromHeap(A, t) {
            return A === t ? r.alloc(0) : r.from(this._heap.slice(A, t))
          }
          createInt(A) {
            return A
          }
          createInt32(A, t) {
            return s.buildInt32(A, t)
          }
          createInt64(A, t, e, r) {
            return s.buildInt64(A, t, e, r)
          }
          createFloat(A) {
            return A
          }
          createFloatSingle(A, t, e, r) {
            return n.read([A, t, e, r], 0, !1, 23, 4)
          }
          createFloatDouble(A, t, e, r, i, a, s, o) {
            return n.read([A, t, e, r, i, a, s, o], 0, !1, 52, 8)
          }
          createInt32Neg(A, t) {
            return -1 - s.buildInt32(A, t)
          }
          createInt64Neg(A, t, e, r) {
            const n = s.buildInt32(A, t),
              a = s.buildInt32(e, r)
            return n > o.MAX_SAFE_HIGH
              ? o.NEG_ONE.minus(new i(n).times(o.SHIFT32).plus(a))
              : -1 - (n * o.SHIFT32 + a)
          }
          createTrue() {
            return !0
          }
          createFalse() {
            return !1
          }
          createNull() {
            return null
          }
          createUndefined() {}
          createInfinity() {
            return 1 / 0
          }
          createInfinityNeg() {
            return -1 / 0
          }
          createNaN() {
            return NaN
          }
          createNaNNeg() {
            return NaN
          }
          createUtf8String(A, t) {
            return A.join("")
          }
          createUtf8StringFromHeap(A, t) {
            return A === t ? "" : this._buffer.toString("utf8", A, t)
          }
          createSimpleUnassigned(A) {
            return new B(A)
          }
          pushInt(A) {
            this._push(this.createInt(A))
          }
          pushInt32(A, t) {
            this._push(this.createInt32(A, t))
          }
          pushInt64(A, t, e, r) {
            this._push(this.createInt64(A, t, e, r))
          }
          pushFloat(A) {
            this._push(this.createFloat(A))
          }
          pushFloatSingle(A, t, e, r) {
            this._push(this.createFloatSingle(A, t, e, r))
          }
          pushFloatDouble(A, t, e, r, n, i, a, s) {
            this._push(this.createFloatDouble(A, t, e, r, n, i, a, s))
          }
          pushInt32Neg(A, t) {
            this._push(this.createInt32Neg(A, t))
          }
          pushInt64Neg(A, t, e, r) {
            this._push(this.createInt64Neg(A, t, e, r))
          }
          pushTrue() {
            this._push(this.createTrue())
          }
          pushFalse() {
            this._push(this.createFalse())
          }
          pushNull() {
            this._push(this.createNull())
          }
          pushUndefined() {
            this._push(this.createUndefined())
          }
          pushInfinity() {
            this._push(this.createInfinity())
          }
          pushInfinityNeg() {
            this._push(this.createInfinityNeg())
          }
          pushNaN() {
            this._push(this.createNaN())
          }
          pushNaNNeg() {
            this._push(this.createNaNNeg())
          }
          pushArrayStart() {
            this._createParent([], o.PARENT.ARRAY, -1)
          }
          pushArrayStartFixed(A) {
            this._createArrayStartFixed(A)
          }
          pushArrayStartFixed32(A, t) {
            const e = s.buildInt32(A, t)
            this._createArrayStartFixed(e)
          }
          pushArrayStartFixed64(A, t, e, r) {
            const n = s.buildInt64(A, t, e, r)
            this._createArrayStartFixed(n)
          }
          pushObjectStart() {
            this._createObjectStartFixed(-1)
          }
          pushObjectStartFixed(A) {
            this._createObjectStartFixed(A)
          }
          pushObjectStartFixed32(A, t) {
            const e = s.buildInt32(A, t)
            this._createObjectStartFixed(e)
          }
          pushObjectStartFixed64(A, t, e, r) {
            const n = s.buildInt64(A, t, e, r)
            this._createObjectStartFixed(n)
          }
          pushByteStringStart() {
            this._parents[this._depth] = {
              type: o.PARENT.BYTE_STRING,
              length: -1,
              ref: [],
              values: 0,
              tmpKey: null
            }
          }
          pushByteString(A, t) {
            this._push(this.createByteStringFromHeap(A, t))
          }
          pushUtf8StringStart() {
            this._parents[this._depth] = {
              type: o.PARENT.UTF8_STRING,
              length: -1,
              ref: [],
              values: 0,
              tmpKey: null
            }
          }
          pushUtf8String(A, t) {
            this._push(this.createUtf8StringFromHeap(A, t))
          }
          pushSimpleUnassigned(A) {
            this._push(this.createSimpleUnassigned(A))
          }
          pushTagStart(A) {
            this._parents[this._depth] = {
              type: o.PARENT.TAG,
              length: 1,
              ref: [A]
            }
          }
          pushTagStart4(A, t) {
            this.pushTagStart(s.buildInt32(A, t))
          }
          pushTagStart8(A, t, e, r) {
            this.pushTagStart(s.buildInt64(A, t, e, r))
          }
          pushTagUnassigned(A) {
            this._push(this.createTag(A))
          }
          pushBreak() {
            if (this._currentParent.length > -1)
              throw new Error("Unexpected break")
            this._closeParent()
          }
          _createObjectStartFixed(A) {
            0 !== A
              ? this._createParent({}, o.PARENT.OBJECT, A)
              : this._push(this.createObject({}))
          }
          _createArrayStartFixed(A) {
            0 !== A
              ? this._createParent(new Array(A), o.PARENT.ARRAY, A)
              : this._push(this.createArray([]))
          }
          _decode(A) {
            if (0 === A.byteLength) throw new Error("Input too short")
            this._reset(), this._heap8.set(A)
            const t = this.parser.parse(A.byteLength)
            if (this._depth > 1) {
              for (; 0 === this._currentParent.length; ) this._closeParent()
              if (this._depth > 1) throw new Error("Undeterminated nesting")
            }
            if (t > 0) throw new Error("Failed to parse")
            if (0 === this._res.length) throw new Error("No valid result")
          }
          decodeFirst(A) {
            return this._decode(A), this._res[0]
          }
          decodeAll(A) {
            return this._decode(A), this._res
          }
          static decode(A, t) {
            return (
              "string" == typeof A && (A = r.from(A, t || "hex")),
              new h({ size: A.length }).decodeFirst(A)
            )
          }
          static decodeAll(A, t) {
            return (
              "string" == typeof A && (A = r.from(A, t || "hex")),
              new h({ size: A.length }).decodeAll(A)
            )
          }
        }
        ;(h.decodeFirst = h.decode), (A.exports = h)
      },
      817: (A, t, e) => {
        "use strict"
        const { Buffer: r } = e(764),
          n = e(988),
          i = e(516)
        class a extends n {
          createTag(A, t) {
            return `${A}(${t})`
          }
          createInt(A) {
            return super.createInt(A).toString()
          }
          createInt32(A, t) {
            return super.createInt32(A, t).toString()
          }
          createInt64(A, t, e, r) {
            return super.createInt64(A, t, e, r).toString()
          }
          createInt32Neg(A, t) {
            return super.createInt32Neg(A, t).toString()
          }
          createInt64Neg(A, t, e, r) {
            return super.createInt64Neg(A, t, e, r).toString()
          }
          createTrue() {
            return "true"
          }
          createFalse() {
            return "false"
          }
          createFloat(A) {
            const t = super.createFloat(A)
            return i.isNegativeZero(A) ? "-0_1" : `${t}_1`
          }
          createFloatSingle(A, t, e, r) {
            return `${super.createFloatSingle(A, t, e, r)}_2`
          }
          createFloatDouble(A, t, e, r, n, i, a, s) {
            return `${super.createFloatDouble(A, t, e, r, n, i, a, s)}_3`
          }
          createByteString(A, t) {
            const e = A.join(", ")
            return -1 === t ? `(_ ${e})` : `h'${e}`
          }
          createByteStringFromHeap(A, t) {
            return `h'${r
              .from(super.createByteStringFromHeap(A, t))
              .toString("hex")}'`
          }
          createInfinity() {
            return "Infinity_1"
          }
          createInfinityNeg() {
            return "-Infinity_1"
          }
          createNaN() {
            return "NaN_1"
          }
          createNaNNeg() {
            return "-NaN_1"
          }
          createNull() {
            return "null"
          }
          createUndefined() {
            return "undefined"
          }
          createSimpleUnassigned(A) {
            return `simple(${A})`
          }
          createArray(A, t) {
            const e = super.createArray(A, t)
            return -1 === t ? `[_ ${e.join(", ")}]` : `[${e.join(", ")}]`
          }
          createMap(A, t) {
            const e = super.createMap(A),
              r = Array.from(e.keys()).reduce(s(e), "")
            return -1 === t ? `{_ ${r}}` : `{${r}}`
          }
          createObject(A, t) {
            const e = super.createObject(A),
              r = Object.keys(e).reduce(s(e), "")
            return -1 === t ? `{_ ${r}}` : `{${r}}`
          }
          createUtf8String(A, t) {
            const e = A.join(", ")
            return -1 === t ? `(_ ${e})` : `"${e}"`
          }
          createUtf8StringFromHeap(A, t) {
            return `"${r
              .from(super.createUtf8StringFromHeap(A, t))
              .toString("utf8")}"`
          }
          static diagnose(A, t) {
            return (
              "string" == typeof A && (A = r.from(A, t || "hex")),
              new a().decodeFirst(A)
            )
          }
        }
        function s(A) {
          return (t, e) => (t ? `${t}, ${e}: ${A[e]}` : `${e}: ${A[e]}`)
        }
        A.exports = a
      },
      199: (A, t, e) => {
        "use strict"
        const { Buffer: r } = e(764),
          { URL: n } = e(745),
          i = e(431).BigNumber,
          a = e(516),
          s = e(478),
          o = s.MT,
          B = s.NUMBYTES,
          g = s.SHIFT32,
          I = s.SYMS,
          h = s.TAG,
          E = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.TWO,
          Q = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.FOUR,
          c = (s.MT.SIMPLE_FLOAT << 5) | s.NUMBYTES.EIGHT,
          u = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.TRUE,
          C = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.FALSE,
          l = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.UNDEFINED,
          f = (s.MT.SIMPLE_FLOAT << 5) | s.SIMPLE.NULL,
          w = new i("0x20000000000000"),
          d = r.from("f97e00", "hex"),
          p = r.from("f9fc00", "hex"),
          y = r.from("f97c00", "hex")
        class G {
          constructor(A) {
            ;(A = A || {}),
              (this.streaming = "function" == typeof A.stream),
              (this.onData = A.stream),
              (this.semanticTypes = [
                [n, this._pushUrl],
                [i, this._pushBigNumber]
              ])
            const t = A.genTypes || [],
              e = t.length
            for (let A = 0; A < e; A++) this.addSemanticType(t[A][0], t[A][1])
            this._reset()
          }
          addSemanticType(A, t) {
            const e = this.semanticTypes.length
            for (let r = 0; r < e; r++)
              if (this.semanticTypes[r][0] === A) {
                const A = this.semanticTypes[r][1]
                return (this.semanticTypes[r][1] = t), A
              }
            return this.semanticTypes.push([A, t]), null
          }
          push(A) {
            return (
              !A ||
              ((this.result[this.offset] = A),
              (this.resultMethod[this.offset] = 0),
              (this.resultLength[this.offset] = A.length),
              this.offset++,
              this.streaming && this.onData(this.finalize()),
              !0)
            )
          }
          pushWrite(A, t, e) {
            return (
              (this.result[this.offset] = A),
              (this.resultMethod[this.offset] = t),
              (this.resultLength[this.offset] = e),
              this.offset++,
              this.streaming && this.onData(this.finalize()),
              !0
            )
          }
          _pushUInt8(A) {
            return this.pushWrite(A, 1, 1)
          }
          _pushUInt16BE(A) {
            return this.pushWrite(A, 2, 2)
          }
          _pushUInt32BE(A) {
            return this.pushWrite(A, 3, 4)
          }
          _pushDoubleBE(A) {
            return this.pushWrite(A, 4, 8)
          }
          _pushNaN() {
            return this.push(d)
          }
          _pushInfinity(A) {
            const t = A < 0 ? p : y
            return this.push(t)
          }
          _pushFloat(A) {
            const t = r.allocUnsafe(2)
            if (a.writeHalf(t, A) && a.parseHalf(t) === A)
              return this._pushUInt8(E) && this.push(t)
            const e = r.allocUnsafe(4)
            return (
              e.writeFloatBE(A, 0),
              e.readFloatBE(0) === A
                ? this._pushUInt8(Q) && this.push(e)
                : this._pushUInt8(c) && this._pushDoubleBE(A)
            )
          }
          _pushInt(A, t, e) {
            const r = t << 5
            return A < 24
              ? this._pushUInt8(r | A)
              : A <= 255
              ? this._pushUInt8(r | B.ONE) && this._pushUInt8(A)
              : A <= 65535
              ? this._pushUInt8(r | B.TWO) && this._pushUInt16BE(A)
              : A <= 4294967295
              ? this._pushUInt8(r | B.FOUR) && this._pushUInt32BE(A)
              : A <= Number.MAX_SAFE_INTEGER
              ? this._pushUInt8(r | B.EIGHT) &&
                this._pushUInt32BE(Math.floor(A / g)) &&
                this._pushUInt32BE(A % g)
              : t === o.NEG_INT
              ? this._pushFloat(e)
              : this._pushFloat(A)
          }
          _pushIntNum(A) {
            return A < 0
              ? this._pushInt(-A - 1, o.NEG_INT, A)
              : this._pushInt(A, o.POS_INT)
          }
          _pushNumber(A) {
            switch (!1) {
              case A == A:
                return this._pushNaN(A)
              case isFinite(A):
                return this._pushInfinity(A)
              case A % 1 != 0:
                return this._pushIntNum(A)
              default:
                return this._pushFloat(A)
            }
          }
          _pushString(A) {
            const t = r.byteLength(A, "utf8")
            return this._pushInt(t, o.UTF8_STRING) && this.pushWrite(A, 5, t)
          }
          _pushBoolean(A) {
            return this._pushUInt8(A ? u : C)
          }
          _pushUndefined(A) {
            return this._pushUInt8(l)
          }
          _pushArray(A, t) {
            const e = t.length
            if (!A._pushInt(e, o.ARRAY)) return !1
            for (let r = 0; r < e; r++) if (!A.pushAny(t[r])) return !1
            return !0
          }
          _pushTag(A) {
            return this._pushInt(A, o.TAG)
          }
          _pushDate(A, t) {
            return A._pushTag(h.DATE_EPOCH) && A.pushAny(Math.round(t / 1e3))
          }
          _pushBuffer(A, t) {
            return A._pushInt(t.length, o.BYTE_STRING) && A.push(t)
          }
          _pushNoFilter(A, t) {
            return A._pushBuffer(A, t.slice())
          }
          _pushRegexp(A, t) {
            return A._pushTag(h.REGEXP) && A.pushAny(t.source)
          }
          _pushSet(A, t) {
            if (!A._pushInt(t.size, o.ARRAY)) return !1
            for (const e of t) if (!A.pushAny(e)) return !1
            return !0
          }
          _pushUrl(A, t) {
            return A._pushTag(h.URI) && A.pushAny(t.format())
          }
          _pushBigint(A) {
            let t = h.POS_BIGINT
            A.isNegative() && ((A = A.negated().minus(1)), (t = h.NEG_BIGINT))
            let e = A.toString(16)
            e.length % 2 && (e = "0" + e)
            const n = r.from(e, "hex")
            return this._pushTag(t) && this._pushBuffer(this, n)
          }
          _pushBigNumber(A, t) {
            if (t.isNaN()) return A._pushNaN()
            if (!t.isFinite())
              return A._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0)
            if (t.isInteger()) return A._pushBigint(t)
            if (!A._pushTag(h.DECIMAL_FRAC) || !A._pushInt(2, o.ARRAY))
              return !1
            const e = t.decimalPlaces(),
              r = t.multipliedBy(new i(10).pow(e))
            return (
              !!A._pushIntNum(-e) &&
              (r.abs().isLessThan(w)
                ? A._pushIntNum(r.toNumber())
                : A._pushBigint(r))
            )
          }
          _pushMap(A, t) {
            return (
              !!A._pushInt(t.size, o.MAP) &&
              this._pushRawMap(t.size, Array.from(t))
            )
          }
          _pushObject(A) {
            if (!A) return this._pushUInt8(f)
            for (var t = this.semanticTypes.length, e = 0; e < t; e++)
              if (A instanceof this.semanticTypes[e][0])
                return this.semanticTypes[e][1].call(A, this, A)
            var r = A.encodeCBOR
            if ("function" == typeof r) return r.call(A, this)
            var n = Object.keys(A),
              i = n.length
            return (
              !!this._pushInt(i, o.MAP) &&
              this._pushRawMap(
                i,
                n.map(t => [t, A[t]])
              )
            )
          }
          _pushRawMap(A, t) {
            t = t
              .map(function (A) {
                return (A[0] = G.encode(A[0])), A
              })
              .sort(a.keySorter)
            for (var e = 0; e < A; e++) {
              if (!this.push(t[e][0])) return !1
              if (!this.pushAny(t[e][1])) return !1
            }
            return !0
          }
          write(A) {
            return this.pushAny(A)
          }
          pushAny(A) {
            var t = (function (A) {
              return {}.toString.call(A).slice(8, -1)
            })(A)
            switch (t) {
              case "Number":
                return this._pushNumber(A)
              case "String":
                return this._pushString(A)
              case "Boolean":
                return this._pushBoolean(A)
              case "Object":
                return this._pushObject(A)
              case "Array":
                return this._pushArray(this, A)
              case "Uint8Array":
                return this._pushBuffer(this, r.isBuffer(A) ? A : r.from(A))
              case "Null":
                return this._pushUInt8(f)
              case "Undefined":
                return this._pushUndefined(A)
              case "Map":
                return this._pushMap(this, A)
              case "Set":
                return this._pushSet(this, A)
              case "URL":
                return this._pushUrl(this, A)
              case "BigNumber":
                return this._pushBigNumber(this, A)
              case "Date":
                return this._pushDate(this, A)
              case "RegExp":
                return this._pushRegexp(this, A)
              case "Symbol":
                switch (A) {
                  case I.NULL:
                    return this._pushObject(null)
                  case I.UNDEFINED:
                    return this._pushUndefined(void 0)
                  default:
                    throw new Error("Unknown symbol: " + A.toString())
                }
              default:
                throw new Error(
                  "Unknown type: " + typeof A + ", " + (A ? A.toString() : "")
                )
            }
          }
          finalize() {
            if (0 === this.offset) return null
            for (
              var A = this.result,
                t = this.resultLength,
                e = this.resultMethod,
                n = this.offset,
                i = 0,
                a = 0;
              a < n;
              a++
            )
              i += t[a]
            var s = r.allocUnsafe(i),
              o = 0,
              B = 0
            for (a = 0; a < n; a++) {
              switch (((B = t[a]), e[a])) {
                case 0:
                  A[a].copy(s, o)
                  break
                case 1:
                  s.writeUInt8(A[a], o, !0)
                  break
                case 2:
                  s.writeUInt16BE(A[a], o, !0)
                  break
                case 3:
                  s.writeUInt32BE(A[a], o, !0)
                  break
                case 4:
                  s.writeDoubleBE(A[a], o, !0)
                  break
                case 5:
                  s.write(A[a], o, B, "utf8")
                  break
                default:
                  throw new Error("unkown method")
              }
              o += B
            }
            var g = s
            return this._reset(), g
          }
          _reset() {
            ;(this.result = []),
              (this.resultMethod = []),
              (this.resultLength = []),
              (this.offset = 0)
          }
          static encode(A) {
            const t = new G()
            if (!t.pushAny(A)) throw new Error("Failed to encode input")
            return t.finalize()
          }
        }
        A.exports = G
      },
      756: (A, t, e) => {
        "use strict"
        ;(t.Diagnose = e(817)),
          (t.Decoder = e(988)),
          (t.Encoder = e(199)),
          e(649),
          (t.Tagged = e(794)),
          t.Decoder.decodeAll,
          t.Decoder.decodeFirst,
          t.Diagnose.diagnose,
          t.Encoder.encode,
          t.Decoder.decode,
          t.Decoder.decodeAll,
          t.Encoder.encode
      },
      649: (A, t, e) => {
        "use strict"
        const r = e(478),
          n = r.MT,
          i = r.SIMPLE,
          a = r.SYMS
        class s {
          constructor(A) {
            if ("number" != typeof A)
              throw new Error("Invalid Simple type: " + typeof A)
            if (A < 0 || A > 255 || (0 | A) !== A)
              throw new Error("value must be a small positive integer: " + A)
            this.value = A
          }
          toString() {
            return "simple(" + this.value + ")"
          }
          inspect() {
            return "simple(" + this.value + ")"
          }
          encodeCBOR(A) {
            return A._pushInt(this.value, n.SIMPLE_FLOAT)
          }
          static isSimple(A) {
            return A instanceof s
          }
          static decode(A, t) {
            switch ((null == t && (t = !0), A)) {
              case i.FALSE:
                return !1
              case i.TRUE:
                return !0
              case i.NULL:
                return t ? null : a.NULL
              case i.UNDEFINED:
                return t ? void 0 : a.UNDEFINED
              case -1:
                if (!t) throw new Error("Invalid BREAK")
                return a.BREAK
              default:
                return new s(A)
            }
          }
        }
        A.exports = s
      },
      794: A => {
        "use strict"
        class t {
          constructor(A, t, e) {
            if (
              ((this.tag = A),
              (this.value = t),
              (this.err = e),
              "number" != typeof this.tag)
            )
              throw new Error("Invalid tag type (" + typeof this.tag + ")")
            if (this.tag < 0 || (0 | this.tag) !== this.tag)
              throw new Error("Tag must be a positive integer: " + this.tag)
          }
          toString() {
            return `${this.tag}(${JSON.stringify(this.value)})`
          }
          encodeCBOR(A) {
            return A._pushTag(this.tag), A.pushAny(this.value)
          }
          convert(A) {
            var e, r
            if (
              "function" != typeof (r = null != A ? A[this.tag] : void 0) &&
              "function" != typeof (r = t["_tag" + this.tag])
            )
              return this
            try {
              return r.call(t, this.value)
            } catch (A) {
              return (e = A), (this.err = e), this
            }
          }
        }
        A.exports = t
      },
      516: (A, t, e) => {
        "use strict"
        const { Buffer: r } = e(764),
          n = e(431).BigNumber,
          i = e(478),
          a = i.SHIFT32,
          s = i.SHIFT16
        ;(t.parseHalf = function (A) {
          var t, e, r
          return (
            (r = 128 & A[0] ? -1 : 1),
            (t = (124 & A[0]) >> 2),
            (e = ((3 & A[0]) << 8) | A[1]),
            t
              ? 31 === t
                ? r * (e ? NaN : Infinity)
                : r * Math.pow(2, t - 25) * (1024 + e)
              : 5.960464477539063e-8 * r * e
          )
        }),
          (t.arrayBufferToBignumber = function (A) {
            const t = A.byteLength
            let e = ""
            for (let n = 0; n < t; n++)
              e += (r = A[n]) < 16 ? "0" + r.toString(16) : r.toString(16)
            var r
            return new n(e, 16)
          }),
          (t.buildMap = A => {
            const t = new Map(),
              e = Object.keys(A),
              r = e.length
            for (let n = 0; n < r; n++) t.set(e[n], A[e[n]])
            return t
          }),
          (t.buildInt32 = (A, t) => A * s + t),
          (t.buildInt64 = (A, e, r, i) => {
            const s = t.buildInt32(A, e),
              o = t.buildInt32(r, i)
            return s > 2097151 ? new n(s).times(a).plus(o) : s * a + o
          }),
          (t.writeHalf = function (A, t) {
            const e = r.allocUnsafe(4)
            e.writeFloatBE(t, 0)
            const n = e.readUInt32BE(0)
            if (0 != (8191 & n)) return !1
            var i = (n >> 16) & 32768
            const a = (n >> 23) & 255,
              s = 8388607 & n
            if (a >= 113 && a <= 142) i += ((a - 112) << 10) + (s >> 13)
            else {
              if (!(a >= 103 && a < 113)) return !1
              if (s & ((1 << (126 - a)) - 1)) return !1
              i += (s + 8388608) >> (126 - a)
            }
            return A.writeUInt16BE(i, 0), !0
          }),
          (t.keySorter = function (A, t) {
            var e = A[0].byteLength,
              r = t[0].byteLength
            return e > r ? 1 : r > e ? -1 : A[0].compare(t[0])
          }),
          (t.isNegativeZero = A => 0 === A && 1 / A < 0),
          (t.nextPowerOf2 = A => {
            let t = 0
            if (A && !(A & (A - 1))) return A
            for (; 0 !== A; ) (A >>= 1), (t += 1)
            return 1 << t
          })
      },
      764: (A, t, e) => {
        "use strict"
        var r = e(742),
          n = e(645),
          i =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null
        ;(t.Buffer = o),
          (t.SlowBuffer = function (A) {
            return +A != A && (A = 0), o.alloc(+A)
          }),
          (t.INSPECT_MAX_BYTES = 50)
        var a = 2147483647
        function s(A) {
          if (A > a)
            throw new RangeError(
              'The value "' + A + '" is invalid for option "size"'
            )
          var t = new Uint8Array(A)
          return Object.setPrototypeOf(t, o.prototype), t
        }
        function o(A, t, e) {
          if ("number" == typeof A) {
            if ("string" == typeof t)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              )
            return I(A)
          }
          return B(A, t, e)
        }
        function B(A, t, e) {
          if ("string" == typeof A)
            return (function (A, t) {
              if (
                (("string" == typeof t && "" !== t) || (t = "utf8"),
                !o.isEncoding(t))
              )
                throw new TypeError("Unknown encoding: " + t)
              var e = 0 | c(A, t),
                r = s(e),
                n = r.write(A, t)
              return n !== e && (r = r.slice(0, n)), r
            })(A, t)
          if (ArrayBuffer.isView(A))
            return (function (A) {
              if (T(A, Uint8Array)) {
                var t = new Uint8Array(A)
                return E(t.buffer, t.byteOffset, t.byteLength)
              }
              return h(A)
            })(A)
          if (null == A)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof A
            )
          if (T(A, ArrayBuffer) || (A && T(A.buffer, ArrayBuffer)))
            return E(A, t, e)
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (T(A, SharedArrayBuffer) || (A && T(A.buffer, SharedArrayBuffer)))
          )
            return E(A, t, e)
          if ("number" == typeof A)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            )
          var r = A.valueOf && A.valueOf()
          if (null != r && r !== A) return o.from(r, t, e)
          var n = (function (A) {
            if (o.isBuffer(A)) {
              var t = 0 | Q(A.length),
                e = s(t)
              return 0 === e.length || A.copy(e, 0, 0, t), e
            }
            return void 0 !== A.length
              ? "number" != typeof A.length || L(A.length)
                ? s(0)
                : h(A)
              : "Buffer" === A.type && Array.isArray(A.data)
              ? h(A.data)
              : void 0
          })(A)
          if (n) return n
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof A[Symbol.toPrimitive]
          )
            return o.from(A[Symbol.toPrimitive]("string"), t, e)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof A
          )
        }
        function g(A) {
          if ("number" != typeof A)
            throw new TypeError('"size" argument must be of type number')
          if (A < 0)
            throw new RangeError(
              'The value "' + A + '" is invalid for option "size"'
            )
        }
        function I(A) {
          return g(A), s(A < 0 ? 0 : 0 | Q(A))
        }
        function h(A) {
          for (
            var t = A.length < 0 ? 0 : 0 | Q(A.length), e = s(t), r = 0;
            r < t;
            r += 1
          )
            e[r] = 255 & A[r]
          return e
        }
        function E(A, t, e) {
          if (t < 0 || A.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds')
          if (A.byteLength < t + (e || 0))
            throw new RangeError('"length" is outside of buffer bounds')
          var r
          return (
            (r =
              void 0 === t && void 0 === e
                ? new Uint8Array(A)
                : void 0 === e
                ? new Uint8Array(A, t)
                : new Uint8Array(A, t, e)),
            Object.setPrototypeOf(r, o.prototype),
            r
          )
        }
        function Q(A) {
          if (A >= a)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a.toString(16) +
                " bytes"
            )
          return 0 | A
        }
        function c(A, t) {
          if (o.isBuffer(A)) return A.length
          if (ArrayBuffer.isView(A) || T(A, ArrayBuffer)) return A.byteLength
          if ("string" != typeof A)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof A
            )
          var e = A.length,
            r = arguments.length > 2 && !0 === arguments[2]
          if (!r && 0 === e) return 0
          for (var n = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return e
              case "utf8":
              case "utf-8":
                return M(A).length
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * e
              case "hex":
                return e >>> 1
              case "base64":
                return Y(A).length
              default:
                if (n) return r ? -1 : M(A).length
                ;(t = ("" + t).toLowerCase()), (n = !0)
            }
        }
        function u(A, t, e) {
          var r = !1
          if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ""
          if (((void 0 === e || e > this.length) && (e = this.length), e <= 0))
            return ""
          if ((e >>>= 0) <= (t >>>= 0)) return ""
          for (A || (A = "utf8"); ; )
            switch (A) {
              case "hex":
                return S(this, t, e)
              case "utf8":
              case "utf-8":
                return _(this, t, e)
              case "ascii":
                return b(this, t, e)
              case "latin1":
              case "binary":
                return q(this, t, e)
              case "base64":
                return k(this, t, e)
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return D(this, t, e)
              default:
                if (r) throw new TypeError("Unknown encoding: " + A)
                ;(A = (A + "").toLowerCase()), (r = !0)
            }
        }
        function C(A, t, e) {
          var r = A[t]
          ;(A[t] = A[e]), (A[e] = r)
        }
        function l(A, t, e, r, n) {
          if (0 === A.length) return -1
          if (
            ("string" == typeof e
              ? ((r = e), (e = 0))
              : e > 2147483647
              ? (e = 2147483647)
              : e < -2147483648 && (e = -2147483648),
            L((e = +e)) && (e = n ? 0 : A.length - 1),
            e < 0 && (e = A.length + e),
            e >= A.length)
          ) {
            if (n) return -1
            e = A.length - 1
          } else if (e < 0) {
            if (!n) return -1
            e = 0
          }
          if (("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)))
            return 0 === t.length ? -1 : f(A, t, e, r, n)
          if ("number" == typeof t)
            return (
              (t &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? n
                  ? Uint8Array.prototype.indexOf.call(A, t, e)
                  : Uint8Array.prototype.lastIndexOf.call(A, t, e)
                : f(A, [t], e, r, n)
            )
          throw new TypeError("val must be string, number or Buffer")
        }
        function f(A, t, e, r, n) {
          var i,
            a = 1,
            s = A.length,
            o = t.length
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (A.length < 2 || t.length < 2) return -1
            ;(a = 2), (s /= 2), (o /= 2), (e /= 2)
          }
          function B(A, t) {
            return 1 === a ? A[t] : A.readUInt16BE(t * a)
          }
          if (n) {
            var g = -1
            for (i = e; i < s; i++)
              if (B(A, i) === B(t, -1 === g ? 0 : i - g)) {
                if ((-1 === g && (g = i), i - g + 1 === o)) return g * a
              } else -1 !== g && (i -= i - g), (g = -1)
          } else
            for (e + o > s && (e = s - o), i = e; i >= 0; i--) {
              for (var I = !0, h = 0; h < o; h++)
                if (B(A, i + h) !== B(t, h)) {
                  I = !1
                  break
                }
              if (I) return i
            }
          return -1
        }
        function w(A, t, e, r) {
          e = Number(e) || 0
          var n = A.length - e
          r ? (r = Number(r)) > n && (r = n) : (r = n)
          var i = t.length
          r > i / 2 && (r = i / 2)
          for (var a = 0; a < r; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16)
            if (L(s)) return a
            A[e + a] = s
          }
          return a
        }
        function d(A, t, e, r) {
          return J(M(t, A.length - e), A, e, r)
        }
        function p(A, t, e, r) {
          return J(
            (function (A) {
              for (var t = [], e = 0; e < A.length; ++e)
                t.push(255 & A.charCodeAt(e))
              return t
            })(t),
            A,
            e,
            r
          )
        }
        function y(A, t, e, r) {
          return J(Y(t), A, e, r)
        }
        function G(A, t, e, r) {
          return J(
            (function (A, t) {
              for (
                var e, r, n, i = [], a = 0;
                a < A.length && !((t -= 2) < 0);
                ++a
              )
                (r = (e = A.charCodeAt(a)) >> 8),
                  (n = e % 256),
                  i.push(n),
                  i.push(r)
              return i
            })(t, A.length - e),
            A,
            e,
            r
          )
        }
        function k(A, t, e) {
          return 0 === t && e === A.length
            ? r.fromByteArray(A)
            : r.fromByteArray(A.slice(t, e))
        }
        function _(A, t, e) {
          e = Math.min(A.length, e)
          for (var r = [], n = t; n < e; ) {
            var i,
              a,
              s,
              o,
              B = A[n],
              g = null,
              I = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1
            if (n + I <= e)
              switch (I) {
                case 1:
                  B < 128 && (g = B)
                  break
                case 2:
                  128 == (192 & (i = A[n + 1])) &&
                    (o = ((31 & B) << 6) | (63 & i)) > 127 &&
                    (g = o)
                  break
                case 3:
                  ;(i = A[n + 1]),
                    (a = A[n + 2]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      (o = ((15 & B) << 12) | ((63 & i) << 6) | (63 & a)) >
                        2047 &&
                      (o < 55296 || o > 57343) &&
                      (g = o)
                  break
                case 4:
                  ;(i = A[n + 1]),
                    (a = A[n + 2]),
                    (s = A[n + 3]),
                    128 == (192 & i) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      (o =
                        ((15 & B) << 18) |
                        ((63 & i) << 12) |
                        ((63 & a) << 6) |
                        (63 & s)) > 65535 &&
                      o < 1114112 &&
                      (g = o)
              }
            null === g
              ? ((g = 65533), (I = 1))
              : g > 65535 &&
                ((g -= 65536),
                r.push(((g >>> 10) & 1023) | 55296),
                (g = 56320 | (1023 & g))),
              r.push(g),
              (n += I)
          }
          return (function (A) {
            var t = A.length
            if (t <= m) return String.fromCharCode.apply(String, A)
            for (var e = "", r = 0; r < t; )
              e += String.fromCharCode.apply(String, A.slice(r, (r += m)))
            return e
          })(r)
        }
        ;(t.kMaxLength = a),
          (o.TYPED_ARRAY_SUPPORT = (function () {
            try {
              var A = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42
                  }
                }
              return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(A, t),
                42 === A.foo()
              )
            } catch (A) {
              return !1
            }
          })()),
          o.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(o.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (o.isBuffer(this)) return this.buffer
            }
          }),
          Object.defineProperty(o.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (o.isBuffer(this)) return this.byteOffset
            }
          }),
          (o.poolSize = 8192),
          (o.from = function (A, t, e) {
            return B(A, t, e)
          }),
          Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(o, Uint8Array),
          (o.alloc = function (A, t, e) {
            return (function (A, t, e) {
              return (
                g(A),
                A <= 0
                  ? s(A)
                  : void 0 !== t
                  ? "string" == typeof e
                    ? s(A).fill(t, e)
                    : s(A).fill(t)
                  : s(A)
              )
            })(A, t, e)
          }),
          (o.allocUnsafe = function (A) {
            return I(A)
          }),
          (o.allocUnsafeSlow = function (A) {
            return I(A)
          }),
          (o.isBuffer = function (A) {
            return null != A && !0 === A._isBuffer && A !== o.prototype
          }),
          (o.compare = function (A, t) {
            if (
              (T(A, Uint8Array) && (A = o.from(A, A.offset, A.byteLength)),
              T(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
              !o.isBuffer(A) || !o.isBuffer(t))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              )
            if (A === t) return 0
            for (
              var e = A.length, r = t.length, n = 0, i = Math.min(e, r);
              n < i;
              ++n
            )
              if (A[n] !== t[n]) {
                ;(e = A[n]), (r = t[n])
                break
              }
            return e < r ? -1 : r < e ? 1 : 0
          }),
          (o.isEncoding = function (A) {
            switch (String(A).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0
              default:
                return !1
            }
          }),
          (o.concat = function (A, t) {
            if (!Array.isArray(A))
              throw new TypeError('"list" argument must be an Array of Buffers')
            if (0 === A.length) return o.alloc(0)
            var e
            if (void 0 === t)
              for (t = 0, e = 0; e < A.length; ++e) t += A[e].length
            var r = o.allocUnsafe(t),
              n = 0
            for (e = 0; e < A.length; ++e) {
              var i = A[e]
              if (T(i, Uint8Array))
                n + i.length > r.length
                  ? o.from(i).copy(r, n)
                  : Uint8Array.prototype.set.call(r, i, n)
              else {
                if (!o.isBuffer(i))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  )
                i.copy(r, n)
              }
              n += i.length
            }
            return r
          }),
          (o.byteLength = c),
          (o.prototype._isBuffer = !0),
          (o.prototype.swap16 = function () {
            var A = this.length
            if (A % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits")
            for (var t = 0; t < A; t += 2) C(this, t, t + 1)
            return this
          }),
          (o.prototype.swap32 = function () {
            var A = this.length
            if (A % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits")
            for (var t = 0; t < A; t += 4)
              C(this, t, t + 3), C(this, t + 1, t + 2)
            return this
          }),
          (o.prototype.swap64 = function () {
            var A = this.length
            if (A % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits")
            for (var t = 0; t < A; t += 8)
              C(this, t, t + 7),
                C(this, t + 1, t + 6),
                C(this, t + 2, t + 5),
                C(this, t + 3, t + 4)
            return this
          }),
          (o.prototype.toString = function () {
            var A = this.length
            return 0 === A
              ? ""
              : 0 === arguments.length
              ? _(this, 0, A)
              : u.apply(this, arguments)
          }),
          (o.prototype.toLocaleString = o.prototype.toString),
          (o.prototype.equals = function (A) {
            if (!o.isBuffer(A)) throw new TypeError("Argument must be a Buffer")
            return this === A || 0 === o.compare(this, A)
          }),
          (o.prototype.inspect = function () {
            var A = "",
              e = t.INSPECT_MAX_BYTES
            return (
              (A = this.toString("hex", 0, e)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > e && (A += " ... "),
              "<Buffer " + A + ">"
            )
          }),
          i && (o.prototype[i] = o.prototype.inspect),
          (o.prototype.compare = function (A, t, e, r, n) {
            if (
              (T(A, Uint8Array) && (A = o.from(A, A.offset, A.byteLength)),
              !o.isBuffer(A))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof A
              )
            if (
              (void 0 === t && (t = 0),
              void 0 === e && (e = A ? A.length : 0),
              void 0 === r && (r = 0),
              void 0 === n && (n = this.length),
              t < 0 || e > A.length || r < 0 || n > this.length)
            )
              throw new RangeError("out of range index")
            if (r >= n && t >= e) return 0
            if (r >= n) return -1
            if (t >= e) return 1
            if (this === A) return 0
            for (
              var i = (n >>>= 0) - (r >>>= 0),
                a = (e >>>= 0) - (t >>>= 0),
                s = Math.min(i, a),
                B = this.slice(r, n),
                g = A.slice(t, e),
                I = 0;
              I < s;
              ++I
            )
              if (B[I] !== g[I]) {
                ;(i = B[I]), (a = g[I])
                break
              }
            return i < a ? -1 : a < i ? 1 : 0
          }),
          (o.prototype.includes = function (A, t, e) {
            return -1 !== this.indexOf(A, t, e)
          }),
          (o.prototype.indexOf = function (A, t, e) {
            return l(this, A, t, e, !0)
          }),
          (o.prototype.lastIndexOf = function (A, t, e) {
            return l(this, A, t, e, !1)
          }),
          (o.prototype.write = function (A, t, e, r) {
            if (void 0 === t) (r = "utf8"), (e = this.length), (t = 0)
            else if (void 0 === e && "string" == typeof t)
              (r = t), (e = this.length), (t = 0)
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                )
              ;(t >>>= 0),
                isFinite(e)
                  ? ((e >>>= 0), void 0 === r && (r = "utf8"))
                  : ((r = e), (e = void 0))
            }
            var n = this.length - t
            if (
              ((void 0 === e || e > n) && (e = n),
              (A.length > 0 && (e < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds")
            r || (r = "utf8")
            for (var i = !1; ; )
              switch (r) {
                case "hex":
                  return w(this, A, t, e)
                case "utf8":
                case "utf-8":
                  return d(this, A, t, e)
                case "ascii":
                case "latin1":
                case "binary":
                  return p(this, A, t, e)
                case "base64":
                  return y(this, A, t, e)
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return G(this, A, t, e)
                default:
                  if (i) throw new TypeError("Unknown encoding: " + r)
                  ;(r = ("" + r).toLowerCase()), (i = !0)
              }
          }),
          (o.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            }
          })
        var m = 4096
        function b(A, t, e) {
          var r = ""
          e = Math.min(A.length, e)
          for (var n = t; n < e; ++n) r += String.fromCharCode(127 & A[n])
          return r
        }
        function q(A, t, e) {
          var r = ""
          e = Math.min(A.length, e)
          for (var n = t; n < e; ++n) r += String.fromCharCode(A[n])
          return r
        }
        function S(A, t, e) {
          var r = A.length
          ;(!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r)
          for (var n = "", i = t; i < e; ++i) n += x[A[i]]
          return n
        }
        function D(A, t, e) {
          for (var r = A.slice(t, e), n = "", i = 0; i < r.length - 1; i += 2)
            n += String.fromCharCode(r[i] + 256 * r[i + 1])
          return n
        }
        function F(A, t, e) {
          if (A % 1 != 0 || A < 0) throw new RangeError("offset is not uint")
          if (A + t > e)
            throw new RangeError("Trying to access beyond buffer length")
        }
        function H(A, t, e, r, n, i) {
          if (!o.isBuffer(A))
            throw new TypeError('"buffer" argument must be a Buffer instance')
          if (t > n || t < i)
            throw new RangeError('"value" argument is out of bounds')
          if (e + r > A.length) throw new RangeError("Index out of range")
        }
        function N(A, t, e, r, n, i) {
          if (e + r > A.length) throw new RangeError("Index out of range")
          if (e < 0) throw new RangeError("Index out of range")
        }
        function R(A, t, e, r, i) {
          return (
            (t = +t),
            (e >>>= 0),
            i || N(A, 0, e, 4),
            n.write(A, t, e, r, 23, 4),
            e + 4
          )
        }
        function U(A, t, e, r, i) {
          return (
            (t = +t),
            (e >>>= 0),
            i || N(A, 0, e, 8),
            n.write(A, t, e, r, 52, 8),
            e + 8
          )
        }
        ;(o.prototype.slice = function (A, t) {
          var e = this.length
          ;(A = ~~A) < 0 ? (A += e) < 0 && (A = 0) : A > e && (A = e),
            (t = void 0 === t ? e : ~~t) < 0
              ? (t += e) < 0 && (t = 0)
              : t > e && (t = e),
            t < A && (t = A)
          var r = this.subarray(A, t)
          return Object.setPrototypeOf(r, o.prototype), r
        }),
          (o.prototype.readUintLE = o.prototype.readUIntLE =
            function (A, t, e) {
              ;(A >>>= 0), (t >>>= 0), e || F(A, t, this.length)
              for (var r = this[A], n = 1, i = 0; ++i < t && (n *= 256); )
                r += this[A + i] * n
              return r
            }),
          (o.prototype.readUintBE = o.prototype.readUIntBE =
            function (A, t, e) {
              ;(A >>>= 0), (t >>>= 0), e || F(A, t, this.length)
              for (var r = this[A + --t], n = 1; t > 0 && (n *= 256); )
                r += this[A + --t] * n
              return r
            }),
          (o.prototype.readUint8 = o.prototype.readUInt8 =
            function (A, t) {
              return (A >>>= 0), t || F(A, 1, this.length), this[A]
            }),
          (o.prototype.readUint16LE = o.prototype.readUInt16LE =
            function (A, t) {
              return (
                (A >>>= 0),
                t || F(A, 2, this.length),
                this[A] | (this[A + 1] << 8)
              )
            }),
          (o.prototype.readUint16BE = o.prototype.readUInt16BE =
            function (A, t) {
              return (
                (A >>>= 0),
                t || F(A, 2, this.length),
                (this[A] << 8) | this[A + 1]
              )
            }),
          (o.prototype.readUint32LE = o.prototype.readUInt32LE =
            function (A, t) {
              return (
                (A >>>= 0),
                t || F(A, 4, this.length),
                (this[A] | (this[A + 1] << 8) | (this[A + 2] << 16)) +
                  16777216 * this[A + 3]
              )
            }),
          (o.prototype.readUint32BE = o.prototype.readUInt32BE =
            function (A, t) {
              return (
                (A >>>= 0),
                t || F(A, 4, this.length),
                16777216 * this[A] +
                  ((this[A + 1] << 16) | (this[A + 2] << 8) | this[A + 3])
              )
            }),
          (o.prototype.readIntLE = function (A, t, e) {
            ;(A >>>= 0), (t >>>= 0), e || F(A, t, this.length)
            for (var r = this[A], n = 1, i = 0; ++i < t && (n *= 256); )
              r += this[A + i] * n
            return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r
          }),
          (o.prototype.readIntBE = function (A, t, e) {
            ;(A >>>= 0), (t >>>= 0), e || F(A, t, this.length)
            for (var r = t, n = 1, i = this[A + --r]; r > 0 && (n *= 256); )
              i += this[A + --r] * n
            return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i
          }),
          (o.prototype.readInt8 = function (A, t) {
            return (
              (A >>>= 0),
              t || F(A, 1, this.length),
              128 & this[A] ? -1 * (255 - this[A] + 1) : this[A]
            )
          }),
          (o.prototype.readInt16LE = function (A, t) {
            ;(A >>>= 0), t || F(A, 2, this.length)
            var e = this[A] | (this[A + 1] << 8)
            return 32768 & e ? 4294901760 | e : e
          }),
          (o.prototype.readInt16BE = function (A, t) {
            ;(A >>>= 0), t || F(A, 2, this.length)
            var e = this[A + 1] | (this[A] << 8)
            return 32768 & e ? 4294901760 | e : e
          }),
          (o.prototype.readInt32LE = function (A, t) {
            return (
              (A >>>= 0),
              t || F(A, 4, this.length),
              this[A] |
                (this[A + 1] << 8) |
                (this[A + 2] << 16) |
                (this[A + 3] << 24)
            )
          }),
          (o.prototype.readInt32BE = function (A, t) {
            return (
              (A >>>= 0),
              t || F(A, 4, this.length),
              (this[A] << 24) |
                (this[A + 1] << 16) |
                (this[A + 2] << 8) |
                this[A + 3]
            )
          }),
          (o.prototype.readFloatLE = function (A, t) {
            return (
              (A >>>= 0), t || F(A, 4, this.length), n.read(this, A, !0, 23, 4)
            )
          }),
          (o.prototype.readFloatBE = function (A, t) {
            return (
              (A >>>= 0), t || F(A, 4, this.length), n.read(this, A, !1, 23, 4)
            )
          }),
          (o.prototype.readDoubleLE = function (A, t) {
            return (
              (A >>>= 0), t || F(A, 8, this.length), n.read(this, A, !0, 52, 8)
            )
          }),
          (o.prototype.readDoubleBE = function (A, t) {
            return (
              (A >>>= 0), t || F(A, 8, this.length), n.read(this, A, !1, 52, 8)
            )
          }),
          (o.prototype.writeUintLE = o.prototype.writeUIntLE =
            function (A, t, e, r) {
              ;(A = +A),
                (t >>>= 0),
                (e >>>= 0),
                r || H(this, A, t, e, Math.pow(2, 8 * e) - 1, 0)
              var n = 1,
                i = 0
              for (this[t] = 255 & A; ++i < e && (n *= 256); )
                this[t + i] = (A / n) & 255
              return t + e
            }),
          (o.prototype.writeUintBE = o.prototype.writeUIntBE =
            function (A, t, e, r) {
              ;(A = +A),
                (t >>>= 0),
                (e >>>= 0),
                r || H(this, A, t, e, Math.pow(2, 8 * e) - 1, 0)
              var n = e - 1,
                i = 1
              for (this[t + n] = 255 & A; --n >= 0 && (i *= 256); )
                this[t + n] = (A / i) & 255
              return t + e
            }),
          (o.prototype.writeUint8 = o.prototype.writeUInt8 =
            function (A, t, e) {
              return (
                (A = +A),
                (t >>>= 0),
                e || H(this, A, t, 1, 255, 0),
                (this[t] = 255 & A),
                t + 1
              )
            }),
          (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
            function (A, t, e) {
              return (
                (A = +A),
                (t >>>= 0),
                e || H(this, A, t, 2, 65535, 0),
                (this[t] = 255 & A),
                (this[t + 1] = A >>> 8),
                t + 2
              )
            }),
          (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
            function (A, t, e) {
              return (
                (A = +A),
                (t >>>= 0),
                e || H(this, A, t, 2, 65535, 0),
                (this[t] = A >>> 8),
                (this[t + 1] = 255 & A),
                t + 2
              )
            }),
          (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
            function (A, t, e) {
              return (
                (A = +A),
                (t >>>= 0),
                e || H(this, A, t, 4, 4294967295, 0),
                (this[t + 3] = A >>> 24),
                (this[t + 2] = A >>> 16),
                (this[t + 1] = A >>> 8),
                (this[t] = 255 & A),
                t + 4
              )
            }),
          (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
            function (A, t, e) {
              return (
                (A = +A),
                (t >>>= 0),
                e || H(this, A, t, 4, 4294967295, 0),
                (this[t] = A >>> 24),
                (this[t + 1] = A >>> 16),
                (this[t + 2] = A >>> 8),
                (this[t + 3] = 255 & A),
                t + 4
              )
            }),
          (o.prototype.writeIntLE = function (A, t, e, r) {
            if (((A = +A), (t >>>= 0), !r)) {
              var n = Math.pow(2, 8 * e - 1)
              H(this, A, t, e, n - 1, -n)
            }
            var i = 0,
              a = 1,
              s = 0
            for (this[t] = 255 & A; ++i < e && (a *= 256); )
              A < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
                (this[t + i] = (((A / a) >> 0) - s) & 255)
            return t + e
          }),
          (o.prototype.writeIntBE = function (A, t, e, r) {
            if (((A = +A), (t >>>= 0), !r)) {
              var n = Math.pow(2, 8 * e - 1)
              H(this, A, t, e, n - 1, -n)
            }
            var i = e - 1,
              a = 1,
              s = 0
            for (this[t + i] = 255 & A; --i >= 0 && (a *= 256); )
              A < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
                (this[t + i] = (((A / a) >> 0) - s) & 255)
            return t + e
          }),
          (o.prototype.writeInt8 = function (A, t, e) {
            return (
              (A = +A),
              (t >>>= 0),
              e || H(this, A, t, 1, 127, -128),
              A < 0 && (A = 255 + A + 1),
              (this[t] = 255 & A),
              t + 1
            )
          }),
          (o.prototype.writeInt16LE = function (A, t, e) {
            return (
              (A = +A),
              (t >>>= 0),
              e || H(this, A, t, 2, 32767, -32768),
              (this[t] = 255 & A),
              (this[t + 1] = A >>> 8),
              t + 2
            )
          }),
          (o.prototype.writeInt16BE = function (A, t, e) {
            return (
              (A = +A),
              (t >>>= 0),
              e || H(this, A, t, 2, 32767, -32768),
              (this[t] = A >>> 8),
              (this[t + 1] = 255 & A),
              t + 2
            )
          }),
          (o.prototype.writeInt32LE = function (A, t, e) {
            return (
              (A = +A),
              (t >>>= 0),
              e || H(this, A, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & A),
              (this[t + 1] = A >>> 8),
              (this[t + 2] = A >>> 16),
              (this[t + 3] = A >>> 24),
              t + 4
            )
          }),
          (o.prototype.writeInt32BE = function (A, t, e) {
            return (
              (A = +A),
              (t >>>= 0),
              e || H(this, A, t, 4, 2147483647, -2147483648),
              A < 0 && (A = 4294967295 + A + 1),
              (this[t] = A >>> 24),
              (this[t + 1] = A >>> 16),
              (this[t + 2] = A >>> 8),
              (this[t + 3] = 255 & A),
              t + 4
            )
          }),
          (o.prototype.writeFloatLE = function (A, t, e) {
            return R(this, A, t, !0, e)
          }),
          (o.prototype.writeFloatBE = function (A, t, e) {
            return R(this, A, t, !1, e)
          }),
          (o.prototype.writeDoubleLE = function (A, t, e) {
            return U(this, A, t, !0, e)
          }),
          (o.prototype.writeDoubleBE = function (A, t, e) {
            return U(this, A, t, !1, e)
          }),
          (o.prototype.copy = function (A, t, e, r) {
            if (!o.isBuffer(A))
              throw new TypeError("argument should be a Buffer")
            if (
              (e || (e = 0),
              r || 0 === r || (r = this.length),
              t >= A.length && (t = A.length),
              t || (t = 0),
              r > 0 && r < e && (r = e),
              r === e)
            )
              return 0
            if (0 === A.length || 0 === this.length) return 0
            if (t < 0) throw new RangeError("targetStart out of bounds")
            if (e < 0 || e >= this.length)
              throw new RangeError("Index out of range")
            if (r < 0) throw new RangeError("sourceEnd out of bounds")
            r > this.length && (r = this.length),
              A.length - t < r - e && (r = A.length - t + e)
            var n = r - e
            return (
              this === A && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, e, r)
                : Uint8Array.prototype.set.call(A, this.subarray(e, r), t),
              n
            )
          }),
          (o.prototype.fill = function (A, t, e, r) {
            if ("string" == typeof A) {
              if (
                ("string" == typeof t
                  ? ((r = t), (t = 0), (e = this.length))
                  : "string" == typeof e && ((r = e), (e = this.length)),
                void 0 !== r && "string" != typeof r)
              )
                throw new TypeError("encoding must be a string")
              if ("string" == typeof r && !o.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r)
              if (1 === A.length) {
                var n = A.charCodeAt(0)
                ;(("utf8" === r && n < 128) || "latin1" === r) && (A = n)
              }
            } else
              "number" == typeof A
                ? (A &= 255)
                : "boolean" == typeof A && (A = Number(A))
            if (t < 0 || this.length < t || this.length < e)
              throw new RangeError("Out of range index")
            if (e <= t) return this
            var i
            if (
              ((t >>>= 0),
              (e = void 0 === e ? this.length : e >>> 0),
              A || (A = 0),
              "number" == typeof A)
            )
              for (i = t; i < e; ++i) this[i] = A
            else {
              var a = o.isBuffer(A) ? A : o.from(A, r),
                s = a.length
              if (0 === s)
                throw new TypeError(
                  'The value "' + A + '" is invalid for argument "value"'
                )
              for (i = 0; i < e - t; ++i) this[i + t] = a[i % s]
            }
            return this
          })
        var v = /[^+/0-9A-Za-z-_]/g
        function M(A, t) {
          var e
          t = t || 1 / 0
          for (var r = A.length, n = null, i = [], a = 0; a < r; ++a) {
            if ((e = A.charCodeAt(a)) > 55295 && e < 57344) {
              if (!n) {
                if (e > 56319) {
                  ;(t -= 3) > -1 && i.push(239, 191, 189)
                  continue
                }
                if (a + 1 === r) {
                  ;(t -= 3) > -1 && i.push(239, 191, 189)
                  continue
                }
                n = e
                continue
              }
              if (e < 56320) {
                ;(t -= 3) > -1 && i.push(239, 191, 189), (n = e)
                continue
              }
              e = 65536 + (((n - 55296) << 10) | (e - 56320))
            } else n && (t -= 3) > -1 && i.push(239, 191, 189)
            if (((n = null), e < 128)) {
              if ((t -= 1) < 0) break
              i.push(e)
            } else if (e < 2048) {
              if ((t -= 2) < 0) break
              i.push((e >> 6) | 192, (63 & e) | 128)
            } else if (e < 65536) {
              if ((t -= 3) < 0) break
              i.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128)
            } else {
              if (!(e < 1114112)) throw new Error("Invalid code point")
              if ((t -= 4) < 0) break
              i.push(
                (e >> 18) | 240,
                ((e >> 12) & 63) | 128,
                ((e >> 6) & 63) | 128,
                (63 & e) | 128
              )
            }
          }
          return i
        }
        function Y(A) {
          return r.toByteArray(
            (function (A) {
              if ((A = (A = A.split("=")[0]).trim().replace(v, "")).length < 2)
                return ""
              for (; A.length % 4 != 0; ) A += "="
              return A
            })(A)
          )
        }
        function J(A, t, e, r) {
          for (var n = 0; n < r && !(n + e >= t.length || n >= A.length); ++n)
            t[n + e] = A[n]
          return n
        }
        function T(A, t) {
          return (
            A instanceof t ||
            (null != A &&
              null != A.constructor &&
              null != A.constructor.name &&
              A.constructor.name === t.name)
          )
        }
        function L(A) {
          return A != A
        }
        var x = (function () {
          for (
            var A = "0123456789abcdef", t = new Array(256), e = 0;
            e < 16;
            ++e
          )
            for (var r = 16 * e, n = 0; n < 16; ++n) t[r + n] = A[e] + A[n]
          return t
        })()
      },
      645: (A, t) => {
        ;(t.read = function (A, t, e, r, n) {
          var i,
            a,
            s = 8 * n - r - 1,
            o = (1 << s) - 1,
            B = o >> 1,
            g = -7,
            I = e ? n - 1 : 0,
            h = e ? -1 : 1,
            E = A[t + I]
          for (
            I += h, i = E & ((1 << -g) - 1), E >>= -g, g += s;
            g > 0;
            i = 256 * i + A[t + I], I += h, g -= 8
          );
          for (
            a = i & ((1 << -g) - 1), i >>= -g, g += r;
            g > 0;
            a = 256 * a + A[t + I], I += h, g -= 8
          );
          if (0 === i) i = 1 - B
          else {
            if (i === o) return a ? NaN : (1 / 0) * (E ? -1 : 1)
            ;(a += Math.pow(2, r)), (i -= B)
          }
          return (E ? -1 : 1) * a * Math.pow(2, i - r)
        }),
          (t.write = function (A, t, e, r, n, i) {
            var a,
              s,
              o,
              B = 8 * i - n - 1,
              g = (1 << B) - 1,
              I = g >> 1,
              h = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              E = r ? 0 : i - 1,
              Q = r ? 1 : -1,
              c = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((s = isNaN(t) ? 1 : 0), (a = g))
                  : ((a = Math.floor(Math.log(t) / Math.LN2)),
                    t * (o = Math.pow(2, -a)) < 1 && (a--, (o *= 2)),
                    (t += a + I >= 1 ? h / o : h * Math.pow(2, 1 - I)) * o >=
                      2 && (a++, (o /= 2)),
                    a + I >= g
                      ? ((s = 0), (a = g))
                      : a + I >= 1
                      ? ((s = (t * o - 1) * Math.pow(2, n)), (a += I))
                      : ((s = t * Math.pow(2, I - 1) * Math.pow(2, n)),
                        (a = 0)));
              n >= 8;
              A[e + E] = 255 & s, E += Q, s /= 256, n -= 8
            );
            for (
              a = (a << n) | s, B += n;
              B > 0;
              A[e + E] = 255 & a, E += Q, a /= 256, B -= 8
            );
            A[e + E - Q] |= 128 * c
          })
      },
      745: (A, t, e) => {
        "use strict"
        const {
            URLWithLegacySupport: r,
            format: n,
            URLSearchParams: i,
            defaultBase: a
          } = e(49),
          s = e(939)
        A.exports = {
          URL: r,
          URLSearchParams: i,
          format: n,
          relative: s,
          defaultBase: a
        }
      },
      939: (A, t, e) => {
        "use strict"
        const { URLWithLegacySupport: r, format: n } = e(49)
        A.exports = (A, t = {}, e = {}, i) => {
          let a,
            s = t.protocol ? t.protocol.replace(":", "") : "http"
          s = (e[s] || i || s) + ":"
          try {
            a = new r(A)
          } catch (A) {
            a = {}
          }
          const o = Object.assign({}, t, {
            protocol: s || a.protocol,
            host: t.host || a.host
          })
          return new r(A, n(o)).toString()
        }
      },
      49: A => {
        "use strict"
        const t = self.location
            ? self.location.protocol + "//" + self.location.host
            : "",
          e = self.URL
        A.exports = {
          URLWithLegacySupport: class {
            constructor(A = "", r = t) {
              ;(this.super = new e(A, r)),
                (this.path = this.pathname + this.search),
                (this.auth =
                  this.username && this.password
                    ? this.username + ":" + this.password
                    : null),
                (this.query =
                  this.search && this.search.startsWith("?")
                    ? this.search.slice(1)
                    : null)
            }
            get hash() {
              return this.super.hash
            }
            get host() {
              return this.super.host
            }
            get hostname() {
              return this.super.hostname
            }
            get href() {
              return this.super.href
            }
            get origin() {
              return this.super.origin
            }
            get password() {
              return this.super.password
            }
            get pathname() {
              return this.super.pathname
            }
            get port() {
              return this.super.port
            }
            get protocol() {
              return this.super.protocol
            }
            get search() {
              return this.super.search
            }
            get searchParams() {
              return this.super.searchParams
            }
            get username() {
              return this.super.username
            }
            set hash(A) {
              this.super.hash = A
            }
            set host(A) {
              this.super.host = A
            }
            set hostname(A) {
              this.super.hostname = A
            }
            set href(A) {
              this.super.href = A
            }
            set origin(A) {
              this.super.origin = A
            }
            set password(A) {
              this.super.password = A
            }
            set pathname(A) {
              this.super.pathname = A
            }
            set port(A) {
              this.super.port = A
            }
            set protocol(A) {
              this.super.protocol = A
            }
            set search(A) {
              this.super.search = A
            }
            set searchParams(A) {
              this.super.searchParams = A
            }
            set username(A) {
              this.super.username = A
            }
            createObjectURL(A) {
              return this.super.createObjectURL(A)
            }
            revokeObjectURL(A) {
              this.super.revokeObjectURL(A)
            }
            toJSON() {
              return this.super.toJSON()
            }
            toString() {
              return this.super.toString()
            }
            format() {
              return this.toString()
            }
          },
          URLSearchParams: self.URLSearchParams,
          defaultBase: t,
          format: function (A) {
            if ("string" == typeof A) return new e(A).toString()
            if (!(A instanceof e)) {
              const t =
                  A.username && A.password
                    ? `${A.username}:${A.password}@`
                    : "",
                e = A.auth ? A.auth + "@" : "",
                r = A.port ? ":" + A.port : "",
                n = A.protocol ? A.protocol + "//" : "",
                i = A.host || "",
                a = A.hostname || "",
                s = A.search || (A.query ? "?" + A.query : ""),
                o = A.hash || "",
                B = A.pathname || ""
              return `${n}${t || e}${i || a + r}${A.path || B + s}${o}`
            }
          }
        }
      },
      23: (module, exports, __webpack_require__) => {
        var process = __webpack_require__(155),
          __WEBPACK_AMD_DEFINE_RESULT__
        ;(function () {
          "use strict"
          var ERROR = "input is invalid type",
            WINDOW = "object" == typeof window,
            root = WINDOW ? window : {}
          root.JS_SHA256_NO_WINDOW && (WINDOW = !1)
          var WEB_WORKER = !WINDOW && "object" == typeof self,
            NODE_JS =
              !root.JS_SHA256_NO_NODE_JS &&
              "object" == typeof process &&
              process.versions &&
              process.versions.node
          NODE_JS ? (root = __webpack_require__.g) : WEB_WORKER && (root = self)
          var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
            AMD = __webpack_require__.amdO,
            ARRAY_BUFFER =
              !root.JS_SHA256_NO_ARRAY_BUFFER &&
              "undefined" != typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [-2147483648, 8388608, 32768, 128],
            SHIFT = [24, 16, 8, 0],
            K = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298
            ],
            OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
            blocks = []
          ;(!root.JS_SHA256_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (A) {
              return "[object Array]" === Object.prototype.toString.call(A)
            }),
            !ARRAY_BUFFER ||
              (!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (A) {
                return (
                  "object" == typeof A &&
                  A.buffer &&
                  A.buffer.constructor === ArrayBuffer
                )
              })
          var createOutputMethod = function (A, t) {
              return function (e) {
                return new Sha256(t, !0).update(e)[A]()
              }
            },
            createMethod = function (A) {
              var t = createOutputMethod("hex", A)
              NODE_JS && (t = nodeWrap(t, A)),
                (t.create = function () {
                  return new Sha256(A)
                }),
                (t.update = function (A) {
                  return t.create().update(A)
                })
              for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                var r = OUTPUT_TYPES[e]
                t[r] = createOutputMethod(r, A)
              }
              return t
            },
            nodeWrap = function (method, is224) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                algorithm = is224 ? "sha224" : "sha256",
                nodeMethod = function (A) {
                  if ("string" == typeof A)
                    return crypto
                      .createHash(algorithm)
                      .update(A, "utf8")
                      .digest("hex")
                  if (null == A) throw new Error(ERROR)
                  return (
                    A.constructor === ArrayBuffer && (A = new Uint8Array(A)),
                    Array.isArray(A) ||
                    ArrayBuffer.isView(A) ||
                    A.constructor === Buffer
                      ? crypto
                          .createHash(algorithm)
                          .update(new Buffer(A))
                          .digest("hex")
                      : method(A)
                  )
                }
              return nodeMethod
            },
            createHmacOutputMethod = function (A, t) {
              return function (e, r) {
                return new HmacSha256(e, t, !0).update(r)[A]()
              }
            },
            createHmacMethod = function (A) {
              var t = createHmacOutputMethod("hex", A)
              ;(t.create = function (t) {
                return new HmacSha256(t, A)
              }),
                (t.update = function (A, e) {
                  return t.create(A).update(e)
                })
              for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                var r = OUTPUT_TYPES[e]
                t[r] = createHmacOutputMethod(r, A)
              }
              return t
            }
          function Sha256(A, t) {
            t
              ? ((blocks[0] =
                  blocks[16] =
                  blocks[1] =
                  blocks[2] =
                  blocks[3] =
                  blocks[4] =
                  blocks[5] =
                  blocks[6] =
                  blocks[7] =
                  blocks[8] =
                  blocks[9] =
                  blocks[10] =
                  blocks[11] =
                  blocks[12] =
                  blocks[13] =
                  blocks[14] =
                  blocks[15] =
                    0),
                (this.blocks = blocks))
              : (this.blocks = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]),
              A
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = A)
          }
          function HmacSha256(A, t, e) {
            var r,
              n = typeof A
            if ("string" === n) {
              var i,
                a = [],
                s = A.length,
                o = 0
              for (r = 0; r < s; ++r)
                (i = A.charCodeAt(r)) < 128
                  ? (a[o++] = i)
                  : i < 2048
                  ? ((a[o++] = 192 | (i >> 6)), (a[o++] = 128 | (63 & i)))
                  : i < 55296 || i >= 57344
                  ? ((a[o++] = 224 | (i >> 12)),
                    (a[o++] = 128 | ((i >> 6) & 63)),
                    (a[o++] = 128 | (63 & i)))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & A.charCodeAt(++r)))),
                    (a[o++] = 240 | (i >> 18)),
                    (a[o++] = 128 | ((i >> 12) & 63)),
                    (a[o++] = 128 | ((i >> 6) & 63)),
                    (a[o++] = 128 | (63 & i)))
              A = a
            } else {
              if ("object" !== n) throw new Error(ERROR)
              if (null === A) throw new Error(ERROR)
              if (ARRAY_BUFFER && A.constructor === ArrayBuffer)
                A = new Uint8Array(A)
              else if (
                !(Array.isArray(A) || (ARRAY_BUFFER && ArrayBuffer.isView(A)))
              )
                throw new Error(ERROR)
            }
            A.length > 64 && (A = new Sha256(t, !0).update(A).array())
            var B = [],
              g = []
            for (r = 0; r < 64; ++r) {
              var I = A[r] || 0
              ;(B[r] = 92 ^ I), (g[r] = 54 ^ I)
            }
            Sha256.call(this, t, e),
              this.update(g),
              (this.oKeyPad = B),
              (this.inner = !0),
              (this.sharedMemory = e)
          }
          ;(Sha256.prototype.update = function (A) {
            if (!this.finalized) {
              var t,
                e = typeof A
              if ("string" !== e) {
                if ("object" !== e) throw new Error(ERROR)
                if (null === A) throw new Error(ERROR)
                if (ARRAY_BUFFER && A.constructor === ArrayBuffer)
                  A = new Uint8Array(A)
                else if (
                  !(Array.isArray(A) || (ARRAY_BUFFER && ArrayBuffer.isView(A)))
                )
                  throw new Error(ERROR)
                t = !0
              }
              for (var r, n, i = 0, a = A.length, s = this.blocks; i < a; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (s[0] = this.block),
                    (s[16] =
                      s[1] =
                      s[2] =
                      s[3] =
                      s[4] =
                      s[5] =
                      s[6] =
                      s[7] =
                      s[8] =
                      s[9] =
                      s[10] =
                      s[11] =
                      s[12] =
                      s[13] =
                      s[14] =
                      s[15] =
                        0)),
                  t)
                )
                  for (n = this.start; i < a && n < 64; ++i)
                    s[n >> 2] |= A[i] << SHIFT[3 & n++]
                else
                  for (n = this.start; i < a && n < 64; ++i)
                    (r = A.charCodeAt(i)) < 128
                      ? (s[n >> 2] |= r << SHIFT[3 & n++])
                      : r < 2048
                      ? ((s[n >> 2] |= (192 | (r >> 6)) << SHIFT[3 & n++]),
                        (s[n >> 2] |= (128 | (63 & r)) << SHIFT[3 & n++]))
                      : r < 55296 || r >= 57344
                      ? ((s[n >> 2] |= (224 | (r >> 12)) << SHIFT[3 & n++]),
                        (s[n >> 2] |=
                          (128 | ((r >> 6) & 63)) << SHIFT[3 & n++]),
                        (s[n >> 2] |= (128 | (63 & r)) << SHIFT[3 & n++]))
                      : ((r =
                          65536 +
                          (((1023 & r) << 10) | (1023 & A.charCodeAt(++i)))),
                        (s[n >> 2] |= (240 | (r >> 18)) << SHIFT[3 & n++]),
                        (s[n >> 2] |=
                          (128 | ((r >> 12) & 63)) << SHIFT[3 & n++]),
                        (s[n >> 2] |=
                          (128 | ((r >> 6) & 63)) << SHIFT[3 & n++]),
                        (s[n >> 2] |= (128 | (63 & r)) << SHIFT[3 & n++]))
                ;(this.lastByteIndex = n),
                  (this.bytes += n - this.start),
                  n >= 64
                    ? ((this.block = s[16]),
                      (this.start = n - 64),
                      this.hash(),
                      (this.hashed = !0))
                    : (this.start = n)
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              )
            }
          }),
            (Sha256.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0
                var A = this.blocks,
                  t = this.lastByteIndex
                ;(A[16] = this.block),
                  (A[t >> 2] |= EXTRA[3 & t]),
                  (this.block = A[16]),
                  t >= 56 &&
                    (this.hashed || this.hash(),
                    (A[0] = this.block),
                    (A[16] =
                      A[1] =
                      A[2] =
                      A[3] =
                      A[4] =
                      A[5] =
                      A[6] =
                      A[7] =
                      A[8] =
                      A[9] =
                      A[10] =
                      A[11] =
                      A[12] =
                      A[13] =
                      A[14] =
                      A[15] =
                        0)),
                  (A[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (A[15] = this.bytes << 3),
                  this.hash()
              }
            }),
            (Sha256.prototype.hash = function () {
              var A,
                t,
                e,
                r,
                n,
                i,
                a,
                s,
                o,
                B = this.h0,
                g = this.h1,
                I = this.h2,
                h = this.h3,
                E = this.h4,
                Q = this.h5,
                c = this.h6,
                u = this.h7,
                C = this.blocks
              for (A = 16; A < 64; ++A)
                (t =
                  (((n = C[A - 15]) >>> 7) | (n << 25)) ^
                  ((n >>> 18) | (n << 14)) ^
                  (n >>> 3)),
                  (e =
                    (((n = C[A - 2]) >>> 17) | (n << 15)) ^
                    ((n >>> 19) | (n << 13)) ^
                    (n >>> 10)),
                  (C[A] = (C[A - 16] + t + C[A - 7] + e) << 0)
              for (o = g & I, A = 0; A < 64; A += 4)
                this.first
                  ? (this.is224
                      ? ((i = 300032),
                        (u = ((n = C[0] - 1413257819) - 150054599) << 0),
                        (h = (n + 24177077) << 0))
                      : ((i = 704751109),
                        (u = ((n = C[0] - 210244248) - 1521486534) << 0),
                        (h = (n + 143694565) << 0)),
                    (this.first = !1))
                  : ((t =
                      ((B >>> 2) | (B << 30)) ^
                      ((B >>> 13) | (B << 19)) ^
                      ((B >>> 22) | (B << 10))),
                    (r = (i = B & g) ^ (B & I) ^ o),
                    (u =
                      (h +
                        (n =
                          u +
                          (e =
                            ((E >>> 6) | (E << 26)) ^
                            ((E >>> 11) | (E << 21)) ^
                            ((E >>> 25) | (E << 7))) +
                          ((E & Q) ^ (~E & c)) +
                          K[A] +
                          C[A])) <<
                      0),
                    (h = (n + (t + r)) << 0)),
                  (t =
                    ((h >>> 2) | (h << 30)) ^
                    ((h >>> 13) | (h << 19)) ^
                    ((h >>> 22) | (h << 10))),
                  (r = (a = h & B) ^ (h & g) ^ i),
                  (c =
                    (I +
                      (n =
                        c +
                        (e =
                          ((u >>> 6) | (u << 26)) ^
                          ((u >>> 11) | (u << 21)) ^
                          ((u >>> 25) | (u << 7))) +
                        ((u & E) ^ (~u & Q)) +
                        K[A + 1] +
                        C[A + 1])) <<
                    0),
                  (t =
                    (((I = (n + (t + r)) << 0) >>> 2) | (I << 30)) ^
                    ((I >>> 13) | (I << 19)) ^
                    ((I >>> 22) | (I << 10))),
                  (r = (s = I & h) ^ (I & B) ^ a),
                  (Q =
                    (g +
                      (n =
                        Q +
                        (e =
                          ((c >>> 6) | (c << 26)) ^
                          ((c >>> 11) | (c << 21)) ^
                          ((c >>> 25) | (c << 7))) +
                        ((c & u) ^ (~c & E)) +
                        K[A + 2] +
                        C[A + 2])) <<
                    0),
                  (t =
                    (((g = (n + (t + r)) << 0) >>> 2) | (g << 30)) ^
                    ((g >>> 13) | (g << 19)) ^
                    ((g >>> 22) | (g << 10))),
                  (r = (o = g & I) ^ (g & h) ^ s),
                  (E =
                    (B +
                      (n =
                        E +
                        (e =
                          ((Q >>> 6) | (Q << 26)) ^
                          ((Q >>> 11) | (Q << 21)) ^
                          ((Q >>> 25) | (Q << 7))) +
                        ((Q & c) ^ (~Q & u)) +
                        K[A + 3] +
                        C[A + 3])) <<
                    0),
                  (B = (n + (t + r)) << 0)
              ;(this.h0 = (this.h0 + B) << 0),
                (this.h1 = (this.h1 + g) << 0),
                (this.h2 = (this.h2 + I) << 0),
                (this.h3 = (this.h3 + h) << 0),
                (this.h4 = (this.h4 + E) << 0),
                (this.h5 = (this.h5 + Q) << 0),
                (this.h6 = (this.h6 + c) << 0),
                (this.h7 = (this.h7 + u) << 0)
            }),
            (Sha256.prototype.hex = function () {
              this.finalize()
              var A = this.h0,
                t = this.h1,
                e = this.h2,
                r = this.h3,
                n = this.h4,
                i = this.h5,
                a = this.h6,
                s = this.h7,
                o =
                  HEX_CHARS[(A >> 28) & 15] +
                  HEX_CHARS[(A >> 24) & 15] +
                  HEX_CHARS[(A >> 20) & 15] +
                  HEX_CHARS[(A >> 16) & 15] +
                  HEX_CHARS[(A >> 12) & 15] +
                  HEX_CHARS[(A >> 8) & 15] +
                  HEX_CHARS[(A >> 4) & 15] +
                  HEX_CHARS[15 & A] +
                  HEX_CHARS[(t >> 28) & 15] +
                  HEX_CHARS[(t >> 24) & 15] +
                  HEX_CHARS[(t >> 20) & 15] +
                  HEX_CHARS[(t >> 16) & 15] +
                  HEX_CHARS[(t >> 12) & 15] +
                  HEX_CHARS[(t >> 8) & 15] +
                  HEX_CHARS[(t >> 4) & 15] +
                  HEX_CHARS[15 & t] +
                  HEX_CHARS[(e >> 28) & 15] +
                  HEX_CHARS[(e >> 24) & 15] +
                  HEX_CHARS[(e >> 20) & 15] +
                  HEX_CHARS[(e >> 16) & 15] +
                  HEX_CHARS[(e >> 12) & 15] +
                  HEX_CHARS[(e >> 8) & 15] +
                  HEX_CHARS[(e >> 4) & 15] +
                  HEX_CHARS[15 & e] +
                  HEX_CHARS[(r >> 28) & 15] +
                  HEX_CHARS[(r >> 24) & 15] +
                  HEX_CHARS[(r >> 20) & 15] +
                  HEX_CHARS[(r >> 16) & 15] +
                  HEX_CHARS[(r >> 12) & 15] +
                  HEX_CHARS[(r >> 8) & 15] +
                  HEX_CHARS[(r >> 4) & 15] +
                  HEX_CHARS[15 & r] +
                  HEX_CHARS[(n >> 28) & 15] +
                  HEX_CHARS[(n >> 24) & 15] +
                  HEX_CHARS[(n >> 20) & 15] +
                  HEX_CHARS[(n >> 16) & 15] +
                  HEX_CHARS[(n >> 12) & 15] +
                  HEX_CHARS[(n >> 8) & 15] +
                  HEX_CHARS[(n >> 4) & 15] +
                  HEX_CHARS[15 & n] +
                  HEX_CHARS[(i >> 28) & 15] +
                  HEX_CHARS[(i >> 24) & 15] +
                  HEX_CHARS[(i >> 20) & 15] +
                  HEX_CHARS[(i >> 16) & 15] +
                  HEX_CHARS[(i >> 12) & 15] +
                  HEX_CHARS[(i >> 8) & 15] +
                  HEX_CHARS[(i >> 4) & 15] +
                  HEX_CHARS[15 & i] +
                  HEX_CHARS[(a >> 28) & 15] +
                  HEX_CHARS[(a >> 24) & 15] +
                  HEX_CHARS[(a >> 20) & 15] +
                  HEX_CHARS[(a >> 16) & 15] +
                  HEX_CHARS[(a >> 12) & 15] +
                  HEX_CHARS[(a >> 8) & 15] +
                  HEX_CHARS[(a >> 4) & 15] +
                  HEX_CHARS[15 & a]
              return (
                this.is224 ||
                  (o +=
                    HEX_CHARS[(s >> 28) & 15] +
                    HEX_CHARS[(s >> 24) & 15] +
                    HEX_CHARS[(s >> 20) & 15] +
                    HEX_CHARS[(s >> 16) & 15] +
                    HEX_CHARS[(s >> 12) & 15] +
                    HEX_CHARS[(s >> 8) & 15] +
                    HEX_CHARS[(s >> 4) & 15] +
                    HEX_CHARS[15 & s]),
                o
              )
            }),
            (Sha256.prototype.toString = Sha256.prototype.hex),
            (Sha256.prototype.digest = function () {
              this.finalize()
              var A = this.h0,
                t = this.h1,
                e = this.h2,
                r = this.h3,
                n = this.h4,
                i = this.h5,
                a = this.h6,
                s = this.h7,
                o = [
                  (A >> 24) & 255,
                  (A >> 16) & 255,
                  (A >> 8) & 255,
                  255 & A,
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  (r >> 24) & 255,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  (n >> 24) & 255,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  (i >> 24) & 255,
                  (i >> 16) & 255,
                  (i >> 8) & 255,
                  255 & i,
                  (a >> 24) & 255,
                  (a >> 16) & 255,
                  (a >> 8) & 255,
                  255 & a
                ]
              return (
                this.is224 ||
                  o.push(
                    (s >> 24) & 255,
                    (s >> 16) & 255,
                    (s >> 8) & 255,
                    255 & s
                  ),
                o
              )
            }),
            (Sha256.prototype.array = Sha256.prototype.digest),
            (Sha256.prototype.arrayBuffer = function () {
              this.finalize()
              var A = new ArrayBuffer(this.is224 ? 28 : 32),
                t = new DataView(A)
              return (
                t.setUint32(0, this.h0),
                t.setUint32(4, this.h1),
                t.setUint32(8, this.h2),
                t.setUint32(12, this.h3),
                t.setUint32(16, this.h4),
                t.setUint32(20, this.h5),
                t.setUint32(24, this.h6),
                this.is224 || t.setUint32(28, this.h7),
                A
              )
            }),
            (HmacSha256.prototype = new Sha256()),
            (HmacSha256.prototype.finalize = function () {
              if ((Sha256.prototype.finalize.call(this), this.inner)) {
                this.inner = !1
                var A = this.array()
                Sha256.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(A),
                  Sha256.prototype.finalize.call(this)
              }
            })
          var exports = createMethod()
          ;(exports.sha256 = exports),
            (exports.sha224 = createMethod(!0)),
            (exports.sha256.hmac = createHmacMethod()),
            (exports.sha224.hmac = createHmacMethod(!0)),
            COMMON_JS
              ? (module.exports = exports)
              : ((root.sha256 = exports.sha256),
                (root.sha224 = exports.sha224),
                AMD &&
                  ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return exports
                  }.call(exports, __webpack_require__, exports, module)),
                  void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                    (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
        })()
      },
      155: A => {
        var t,
          e,
          r = (A.exports = {})
        function n() {
          throw new Error("setTimeout has not been defined")
        }
        function i() {
          throw new Error("clearTimeout has not been defined")
        }
        function a(A) {
          if (t === setTimeout) return setTimeout(A, 0)
          if ((t === n || !t) && setTimeout)
            return (t = setTimeout), setTimeout(A, 0)
          try {
            return t(A, 0)
          } catch (e) {
            try {
              return t.call(null, A, 0)
            } catch (e) {
              return t.call(this, A, 0)
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : n
          } catch (A) {
            t = n
          }
          try {
            e = "function" == typeof clearTimeout ? clearTimeout : i
          } catch (A) {
            e = i
          }
        })()
        var s,
          o = [],
          B = !1,
          g = -1
        function I() {
          B &&
            s &&
            ((B = !1), s.length ? (o = s.concat(o)) : (g = -1), o.length && h())
        }
        function h() {
          if (!B) {
            var A = a(I)
            B = !0
            for (var t = o.length; t; ) {
              for (s = o, o = []; ++g < t; ) s && s[g].run()
              ;(g = -1), (t = o.length)
            }
            ;(s = null),
              (B = !1),
              (function (A) {
                if (e === clearTimeout) return clearTimeout(A)
                if ((e === i || !e) && clearTimeout)
                  return (e = clearTimeout), clearTimeout(A)
                try {
                  e(A)
                } catch (t) {
                  try {
                    return e.call(null, A)
                  } catch (t) {
                    return e.call(this, A)
                  }
                }
              })(A)
          }
        }
        function E(A, t) {
          ;(this.fun = A), (this.array = t)
        }
        function Q() {}
        ;(r.nextTick = function (A) {
          var t = new Array(arguments.length - 1)
          if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++) t[e - 1] = arguments[e]
          o.push(new E(A, t)), 1 !== o.length || B || a(h)
        }),
          (E.prototype.run = function () {
            this.fun.apply(null, this.array)
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = Q),
          (r.addListener = Q),
          (r.once = Q),
          (r.off = Q),
          (r.removeListener = Q),
          (r.removeAllListeners = Q),
          (r.emit = Q),
          (r.prependListener = Q),
          (r.prependOnceListener = Q),
          (r.listeners = function (A) {
            return []
          }),
          (r.binding = function (A) {
            throw new Error("process.binding is not supported")
          }),
          (r.cwd = function () {
            return "/"
          }),
          (r.chdir = function (A) {
            throw new Error("process.chdir is not supported")
          }),
          (r.umask = function () {
            return 0
          })
      },
      419: function (A, t, e) {
        "use strict"
        var r =
          (this && this.__importStar) ||
          function (A) {
            if (A && A.__esModule) return A
            var t = {}
            if (null != A)
              for (var e in A) Object.hasOwnProperty.call(A, e) && (t[e] = A[e])
            return (t.default = A), t
          }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (A) {
            for (var e in A) t.hasOwnProperty(e) || (t[e] = A[e])
          })(e(925))
        const n = r(e(996))
        t.value = n
      },
      925: function (A, t, e) {
        "use strict"
        var r =
          (this && this.__importStar) ||
          function (A) {
            if (A && A.__esModule) return A
            var t = {}
            if (null != A)
              for (var e in A) Object.hasOwnProperty.call(A, e) && (t[e] = A[e])
            return (t.default = A), t
          }
        Object.defineProperty(t, "__esModule", { value: !0 })
        const n = r(e(996)),
          i = [
            ArrayBuffer,
            Uint8Array,
            Uint16Array,
            Uint32Array,
            Int8Array,
            Int16Array,
            Int32Array,
            Float32Array,
            Float64Array
          ]
        class a {
          constructor(A, t = !1) {
            ;(this._serializer = A),
              (this._stable = t),
              (this.name = "jsonDefault"),
              (this.priority = -100)
          }
          match(A) {
            return (
              -1 !=
              ["undefined", "boolean", "number", "string", "object"].indexOf(
                typeof A
              )
            )
          }
          encode(A) {
            switch (typeof A) {
              case "undefined":
                return n.undefined_()
              case "boolean":
                return n.bool(A)
              case "number":
                return Math.floor(A) === A ? n.number(A) : n.doubleFloat(A)
              case "string":
                return n.string(A)
              case "object":
                if (null === A) return n.null_()
                if (Array.isArray(A))
                  return n.array(A.map(A => this._serializer.serializeValue(A)))
                if (i.find(t => A instanceof t)) return n.bytes(A.buffer)
                if (-1 !== Object.getOwnPropertyNames(A).indexOf("toJSON"))
                  return this.encode(A.toJSON())
                if (A instanceof Map) {
                  const t = new Map()
                  for (const [e, r] of A.entries())
                    t.set(e, this._serializer.serializeValue(r))
                  return n.map(t, this._stable)
                }
                {
                  const t = new Map()
                  for (const [e, r] of Object.entries(A))
                    t.set(e, this._serializer.serializeValue(r))
                  return n.map(t, this._stable)
                }
              default:
                throw new Error("Invalid value.")
            }
          }
        }
        t.JsonDefaultCborEncoder = a
        class s {
          constructor() {
            ;(this.name = "cborEncoder"), (this.priority = -90)
          }
          match(A) {
            return "object" == typeof A && "function" == typeof A.toCBOR
          }
          encode(A) {
            return A.toCBOR()
          }
        }
        t.ToCborEncoder = s
        class o {
          constructor() {
            this._encoders = new Set()
          }
          static withDefaultEncoders(A = !1) {
            const t = new this()
            return t.addEncoder(new a(t, A)), t.addEncoder(new s()), t
          }
          removeEncoder(A) {
            for (const t of this._encoders.values())
              t.name == A && this._encoders.delete(t)
          }
          addEncoder(A) {
            this._encoders.add(A)
          }
          getEncoderFor(A) {
            let t = null
            for (const e of this._encoders)
              (!t || e.priority > t.priority) && e.match(A) && (t = e)
            if (null === t)
              throw new Error("Could not find an encoder for value.")
            return t
          }
          serializeValue(A) {
            return this.getEncoderFor(A).encode(A)
          }
          serialize(A) {
            return this.serializeValue(A)
          }
        }
        ;(t.CborSerializer = o),
          (t.SelfDescribeCborSerializer = class extends o {
            serialize(A) {
              return n.raw(
                new Uint8Array([
                  ...new Uint8Array([217, 217, 247]),
                  ...new Uint8Array(super.serializeValue(A))
                ])
              )
            }
          })
      },
      996: (A, t) => {
        "use strict"
        function e(A, ...t) {
          const e = new Uint8Array(
            A.byteLength + t.reduce((A, t) => A + t.byteLength, 0)
          )
          e.set(new Uint8Array(A), 0)
          let r = A.byteLength
          for (const A of t) e.set(new Uint8Array(A), r), (r += A.byteLength)
          return e.buffer
        }
        function r(A, t, e) {
          const r = 2 ** (t - 24)
          e = (e = e.replace(/[^0-9a-fA-F]/g, ""))
            .slice(2 * -r)
            .padStart(2 * r, "0")
          const n = [(A << 5) + t].concat(
            e.match(/../g).map(A => parseInt(A, 16))
          )
          return new Uint8Array(n).buffer
        }
        function n(A, t) {
          return t < 24
            ? new Uint8Array([(A << 5) + t]).buffer
            : r(
                A,
                t <= 255 ? 24 : t <= 65535 ? 25 : t <= 4294967295 ? 26 : 27,
                t.toString(16)
              )
        }
        function i(A) {
          const t = []
          for (let e = 0; e < A.length; e++) {
            let r = A.charCodeAt(e)
            r < 128
              ? t.push(r)
              : r < 2048
              ? t.push(192 | (r >> 6), 128 | (63 & r))
              : r < 55296 || r >= 57344
              ? t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
              : (e++,
                (r = ((1023 & r) << 10) | (1023 & A.charCodeAt(e))),
                t.push(
                  240 | (r >> 18),
                  128 | ((r >> 12) & 63),
                  128 | ((r >> 6) & 63),
                  128 | (63 & r)
                ))
          }
          return e(new Uint8Array(n(3, A.length)), new Uint8Array(t))
        }
        function a(A) {
          return new Uint8Array(A).buffer
        }
        function s(A) {
          if (isNaN(A)) throw new RangeError("Invalid number.")
          return (
            (A = Math.min(Math.max(0, A), 23)), new Uint8Array([0 + A]).buffer
          )
        }
        function o(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            0,
            24,
            (A = (A = Math.min(Math.max(0, A), 255)).toString(16))
          )
        }
        function B(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            0,
            25,
            (A = (A = Math.min(Math.max(0, A), 65535)).toString(16))
          )
        }
        function g(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            0,
            26,
            (A = (A = Math.min(Math.max(0, A), 4294967295)).toString(16))
          )
        }
        function I(A, t) {
          if ("string" == typeof A && 16 == t) {
            if (A.match(/[^0-9a-fA-F]/)) throw new RangeError("Invalid number.")
            return r(0, 27, A)
          }
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            0,
            27,
            (A = (A = Math.min(Math.max(0, A), 9007199254740992)).toString(16))
          )
        }
        function h(A) {
          if (isNaN(A)) throw new RangeError("Invalid number.")
          return 0 === A
            ? s(0)
            : ((A = Math.min(Math.max(0, -A), 24) - 1),
              new Uint8Array([32 + A]).buffer)
        }
        function E(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            1,
            24,
            (A = (A = Math.min(Math.max(0, -A - 1), 255)).toString(16))
          )
        }
        function Q(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            1,
            25,
            (A = (A = Math.min(Math.max(0, -A - 1), 65535)).toString(16))
          )
        }
        function c(A, t) {
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            1,
            26,
            (A = (A = Math.min(Math.max(0, -A - 1), 4294967295)).toString(16))
          )
        }
        function u(A, t) {
          if ("string" == typeof A && 16 == t) {
            if (
              (A = A.startsWith("-") ? A.slice(1) : "0").match(
                /[^0-9a-fA-F]/
              ) ||
              A.length > 16
            )
              throw new RangeError("Invalid number.")
            let t = !1,
              e = A.split("").reduceRight((A, e) => {
                if (t) return e + A
                let r = parseInt(e, 16) - 1
                return r >= 0 ? ((t = !0), r.toString(16) + A) : "f" + A
              }, "")
            return t ? r(1, 27, e) : I(0)
          }
          if (((A = parseInt("" + A, t)), isNaN(A)))
            throw new RangeError("Invalid number.")
          return r(
            1,
            27,
            (A = (A = Math.min(Math.max(0, -A - 1), 9007199254740992)).toString(
              16
            ))
          )
        }
        function C() {
          return a(new Uint8Array([245]))
        }
        function l() {
          return a(new Uint8Array([244]))
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.tagged = function (A, t) {
            if (14277111 == A) return e(new Uint8Array([217, 217, 247]), t)
            if (A < 24) return e(new Uint8Array([192 + A]), t)
            {
              const t =
                  A <= 255 ? 24 : A <= 65535 ? 25 : A <= 4294967295 ? 26 : 27,
                e = 2 ** (t - 24),
                r = A.toString(16)
                  .slice(2 * -e)
                  .padStart(2 * e, "0"),
                n = [192 + t].concat(r.match(/../g).map(A => parseInt(A, 16)))
              return new Uint8Array(n).buffer
            }
          }),
          (t.raw = a),
          (t.uSmall = s),
          (t.u8 = o),
          (t.u16 = B),
          (t.u32 = g),
          (t.u64 = I),
          (t.iSmall = h),
          (t.i8 = E),
          (t.i16 = Q),
          (t.i32 = c),
          (t.i64 = u),
          (t.number = function (A) {
            return A >= 0
              ? A < 24
                ? s(A)
                : A <= 255
                ? o(A)
                : A <= 65535
                ? B(A)
                : A <= 4294967295
                ? g(A)
                : I(A)
              : A >= -24
              ? h(A)
              : A >= -255
              ? E(A)
              : A >= -65535
              ? Q(A)
              : A >= -4294967295
              ? c(A)
              : u(A)
          }),
          (t.bytes = function (A) {
            return e(n(2, A.byteLength), A)
          }),
          (t.string = function (A) {
            return i(A)
          }),
          (t.array = function (A) {
            return e(n(4, A.length), ...A)
          }),
          (t.map = function (A, t = !1) {
            A instanceof Map || (A = new Map(Object.entries(A)))
            let r = Array.from(A.entries())
            return (
              t && (r = r.sort(([A], [t]) => A.localeCompare(t))),
              e(n(5, A.size), ...r.map(([A, t]) => e(i(A), t)))
            )
          }),
          (t.singleFloat = function (A) {
            const t = new Float32Array([A])
            return e(new Uint8Array([250]), new Uint8Array(t.buffer))
          }),
          (t.doubleFloat = function (A) {
            const t = new Float64Array([A])
            return e(new Uint8Array([251]), new Uint8Array(t.buffer))
          }),
          (t.bool = function (A) {
            return A ? C() : l()
          }),
          (t.true_ = C),
          (t.false_ = l),
          (t.null_ = function () {
            return a(new Uint8Array([246]))
          }),
          (t.undefined_ = function () {
            return a(new Uint8Array([247]))
          })
      }
    },
    __webpack_module_cache__ = {}
  function __webpack_require__(A) {
    var t = __webpack_module_cache__[A]
    if (void 0 !== t) return t.exports
    var e = (__webpack_module_cache__[A] = { exports: {} })
    return (
      __webpack_modules__[A].call(e.exports, e, e.exports, __webpack_require__),
      e.exports
    )
  }
  ;(__webpack_require__.amdO = {}),
    (__webpack_require__.d = (A, t) => {
      for (var e in t)
        __webpack_require__.o(t, e) &&
          !__webpack_require__.o(A, e) &&
          Object.defineProperty(A, e, { enumerable: !0, get: t[e] })
    }),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis
      try {
        return this || new Function("return this")()
      } catch (A) {
        if ("object" == typeof window) return window
      }
    })()),
    (__webpack_require__.o = (A, t) =>
      Object.prototype.hasOwnProperty.call(A, t)),
    (__webpack_require__.r = A => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(A, "__esModule", { value: !0 })
    })
  var __webpack_exports__ = {}
  ;(() => {
    "use strict"
    var A = {}
    __webpack_require__.r(A),
      __webpack_require__.d(A, {
        Bool: () => tA,
        BoolClass: () => S,
        ConstructType: () => m,
        Empty: () => X,
        EmptyClass: () => b,
        FixedIntClass: () => v,
        FixedNatClass: () => M,
        Float32: () => aA,
        Float64: () => sA,
        FloatClass: () => U,
        Func: () => yA,
        FuncClass: () => K,
        Int: () => nA,
        Int16: () => BA,
        Int32: () => gA,
        Int64: () => IA,
        Int8: () => oA,
        IntClass: () => N,
        Nat: () => iA,
        Nat16: () => EA,
        Nat32: () => QA,
        Nat64: () => cA,
        Nat8: () => hA,
        NatClass: () => R,
        Null: () => eA,
        NullClass: () => D,
        Opt: () => fA,
        OptClass: () => J,
        PrimitiveType: () => _,
        Principal: () => uA,
        PrincipalClass: () => j,
        Rec: () => pA,
        RecClass: () => Z,
        Record: () => wA,
        RecordClass: () => T,
        Reserved: () => $,
        ReservedClass: () => F,
        Service: () => GA,
        ServiceClass: () => V,
        Text: () => rA,
        TextClass: () => H,
        Tuple: () => CA,
        TupleClass: () => L,
        Type: () => k,
        Unknown: () => AA,
        UnknownClass: () => q,
        Variant: () => dA,
        VariantClass: () => x,
        Vec: () => lA,
        VecClass: () => Y,
        Visitor: () => G,
        decode: () => z,
        encode: () => W
      })
    var t,
      e = __webpack_require__(764)
    !(function (A) {
      ;(A[(A.SysFatal = 1)] = "SysFatal"),
        (A[(A.SysTransient = 2)] = "SysTransient"),
        (A[(A.DestinationInvalid = 3)] = "DestinationInvalid"),
        (A[(A.CanisterReject = 4)] = "CanisterReject"),
        (A[(A.CanisterError = 5)] = "CanisterError")
    })(t || (t = {}))
    const r = "abcdefghijklmnopqrstuvwxyz234567",
      n = Object.create(null)
    for (let A = 0; A < r.length; A++) n[r[A]] = A
    ;(n[0] = n.o), (n[1] = n.i)
    const i = new Uint32Array([
      0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685,
      2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995,
      2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
      2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
      1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
      2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
      1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
      2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
      1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
      3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
      1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772,
      4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
      251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719,
      3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
      453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
      4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
      984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733,
      3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
      855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
      3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
      702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
      3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945,
      2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430,
      2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
      2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
      1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
      2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
      1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
      2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135,
      1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
      3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
      1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
      3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
      83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
      3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
      534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
      4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
      376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105,
      3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
      936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
      3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449,
      601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
      3272380065, 1510334235, 755167117
    ])
    var a = __webpack_require__(23)
    class s {
      constructor(A) {
        ;(this._arr = A), (this._isPrincipal = !0)
      }
      static anonymous() {
        return new this(new Uint8Array([4]))
      }
      static selfAuthenticating(A) {
        const t = (function (A) {
          const t = a.sha224.create()
          return t.update(A), new Uint8Array(t.array())
        })(A)
        return new this(new Uint8Array([...t, 2]))
      }
      static from(A) {
        if ("string" == typeof A) return s.fromText(A)
        if ("object" == typeof A && null !== A && !0 === A._isPrincipal)
          return new s(A._arr)
        throw new Error(
          `Impossible to convert ${JSON.stringify(A)} to Principal.`
        )
      }
      static fromHex(A) {
        return new this(
          new Uint8Array(
            (null !== (t = A.match(/.{1,2}/g)) && void 0 !== t ? t : []).map(
              A => parseInt(A, 16)
            )
          )
        )
        var t
      }
      static fromText(A) {
        let t = (function (A) {
          let t = 0,
            e = 0
          const r = new Uint8Array(((4 * A.length) / 3) | 0)
          let i = 0
          function a(A) {
            let a = n[A.toLowerCase()]
            if (void 0 === a)
              throw new Error(`Invalid character: ${JSON.stringify(A)}`)
            ;(a <<= 3),
              (e |= a >>> t),
              (t += 5),
              t >= 8 &&
                ((r[i++] = e), (t -= 8), (e = t > 0 ? (a << (5 - t)) & 255 : 0))
          }
          for (const t of A) a(t)
          return r.slice(0, i)
        })(A.toLowerCase().replace(/-/g, ""))
        t = t.slice(4, t.length)
        const e = new this(t)
        if (e.toText() !== A)
          throw new Error(
            `Principal "${e.toText()}" does not have a valid checksum (original value "${A}" may not be a valid Principal ID).`
          )
        return e
      }
      static fromUint8Array(A) {
        return new this(A)
      }
      isAnonymous() {
        return 1 === this._arr.byteLength && 4 === this._arr[0]
      }
      toUint8Array() {
        return this._arr
      }
      toHex() {
        return ((A = this._arr),
        A.reduce(
          (A, t) => A + t.toString(16).padStart(2, "0"),
          ""
        )).toUpperCase()
        var A
      }
      toText() {
        const A = new ArrayBuffer(4)
        new DataView(A).setUint32(
          0,
          (function (A) {
            const t = new Uint8Array(A)
            let e = -1
            for (let A = 0; A < t.length; A++) {
              const r = t[A]
              e = i[255 & (r ^ e)] ^ (e >>> 8)
            }
            return (-1 ^ e) >>> 0
          })(this._arr)
        )
        const t = new Uint8Array(A),
          e = Uint8Array.from(this._arr),
          n = (function (A) {
            let t = 0,
              e = 0,
              n = ""
            for (let a = 0; a < A.length; )
              a +=
                ((i = A[a]),
                t < 0 ? (e |= i >> -t) : (e = (i << t) & 248),
                t > 3
                  ? ((t -= 8), 1)
                  : (t < 4 && ((n += r[e >> 3]), (t += 5)), 0))
            var i
            return n + (t < 0 ? r[e >> 3] : "")
          })(new Uint8Array([...t, ...e])),
          a = n.match(/.{1,5}/g)
        if (!a) throw new Error()
        return a.join("-")
      }
      toString() {
        return this.toText()
      }
    }
    class o extends Error {
      constructor(A) {
        super(A), (this.message = A), Object.setPrototypeOf(this, o.prototype)
      }
    }
    function B(...A) {
      const t = new Uint8Array(A.reduce((A, t) => A + t.byteLength, 0))
      let e = 0
      for (const r of A) t.set(new Uint8Array(r), e), (e += r.byteLength)
      return t
    }
    class g {
      constructor(A, t = (null == A ? void 0 : A.byteLength) || 0) {
        ;(this._buffer = A || new ArrayBuffer(0)),
          (this._view = new Uint8Array(this._buffer, 0, t))
      }
      get buffer() {
        return this._view.slice()
      }
      get byteLength() {
        return this._view.byteLength
      }
      read(A) {
        const t = this._view.subarray(0, A)
        return (this._view = this._view.subarray(A)), t.slice().buffer
      }
      readUint8() {
        const A = this._view[0]
        return (this._view = this._view.subarray(1)), A
      }
      write(A) {
        const t = new Uint8Array(A),
          e = this._view.byteLength
        this._view.byteOffset + this._view.byteLength + t.byteLength >=
        this._buffer.byteLength
          ? this.alloc(t.byteLength)
          : (this._view = new Uint8Array(
              this._buffer,
              this._view.byteOffset,
              this._view.byteLength + t.byteLength
            )),
          this._view.set(t, e)
      }
      get end() {
        return 0 === this._view.byteLength
      }
      alloc(A) {
        const t = new ArrayBuffer((1.2 * (this._buffer.byteLength + A)) | 0),
          e = new Uint8Array(t, 0, this._view.byteLength + A)
        e.set(this._view), (this._buffer = t), (this._view = e)
      }
    }
    function I(A) {
      if (/^_\d+_$/.test(A) || /^_0x[0-9a-fA-F]+_$/.test(A)) {
        const t = +A.slice(1, -1)
        if (Number.isSafeInteger(t) && t >= 0 && t < 2 ** 32) return t
      }
      return (function (A) {
        const t = new TextEncoder().encode(A)
        let e = 0
        for (const A of t) e = (223 * e + A) % 2 ** 32
        return e
      })(A)
    }
    function h() {
      throw new Error("unexpected end of buffer")
    }
    function E(A, t) {
      return A.byteLength < t && h(), A.read(t)
    }
    function Q(A) {
      const t = A.readUint8()
      return void 0 === t && h(), t
    }
    function c(A) {
      if (("number" == typeof A && (A = BigInt(A)), A < BigInt(0)))
        throw new Error("Cannot leb encode negative values.")
      const t = (A === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(A)))) + 1,
        e = new g(new ArrayBuffer(t), 0)
      for (;;) {
        const t = Number(A & BigInt(127))
        if ((A /= BigInt(128)) === BigInt(0)) {
          e.write(new Uint8Array([t]))
          break
        }
        e.write(new Uint8Array([128 | t]))
      }
      return e.buffer
    }
    function u(A) {
      let t,
        e = BigInt(1),
        r = BigInt(0)
      do {
        ;(t = Q(A)), (r += BigInt(127 & t).valueOf() * e), (e *= BigInt(128))
      } while (t >= 128)
      return r
    }
    function C(A) {
      "number" == typeof A && (A = BigInt(A))
      const t = A < BigInt(0)
      t && (A = -A - BigInt(1))
      const e = (A === BigInt(0) ? 0 : Math.ceil(Math.log2(Number(A)))) + 1,
        r = new g(new ArrayBuffer(e), 0)
      for (;;) {
        const e = n(A)
        if (
          ((A /= BigInt(128)),
          (t && A === BigInt(0) && 0 != (64 & e)) ||
            (!t && A === BigInt(0) && 0 == (64 & e)))
        ) {
          r.write(new Uint8Array([e]))
          break
        }
        r.write(new Uint8Array([128 | e]))
      }
      function n(A) {
        const e = A % BigInt(128)
        return Number(t ? BigInt(128) - e - BigInt(1) : e)
      }
      return r.buffer
    }
    function l(A) {
      const t = new Uint8Array(A.buffer)
      let e = 0
      for (; e < t.byteLength; e++)
        if (t[e] < 128) {
          if (0 == (64 & t[e])) return u(A)
          break
        }
      const r = new Uint8Array(E(A, e + 1))
      let n = BigInt(0)
      for (let A = r.byteLength - 1; A >= 0; A--)
        n = n * BigInt(128) + BigInt(128 - (127 & r[A]) - 1)
      return -n - BigInt(1)
    }
    function f(A, t) {
      A = BigInt(A)
      const e = new g(new ArrayBuffer(Math.min(1, t)), 0)
      let r = 0,
        n = BigInt(256),
        i = BigInt(0),
        a = Number(A % n)
      for (e.write(new Uint8Array([a])); ++r < t; )
        A < 0 && i === BigInt(0) && 0 !== a && (i = BigInt(1)),
          (a = Number((A / n - i) % BigInt(256))),
          e.write(new Uint8Array([a])),
          (n *= BigInt(256))
      return e.buffer
    }
    function w(A, t) {
      let e = BigInt(Q(A)),
        r = BigInt(1),
        n = 0
      for (; ++n < t; ) (r *= BigInt(256)), (e += r * BigInt(Q(A)))
      return e
    }
    const d = "DIDL"
    function p(A, t, e) {
      return A.map((A, r) => e(A, t[r]))
    }
    class y {
      constructor() {
        ;(this._typs = []), (this._idx = new Map())
      }
      has(A) {
        return this._idx.has(A.name)
      }
      add(A, t) {
        const e = this._typs.length
        this._idx.set(A.name, e), this._typs.push(t)
      }
      merge(A, t) {
        const e = this._idx.get(A.name),
          r = this._idx.get(t)
        if (void 0 === e) throw new Error("Missing type index for " + A)
        if (void 0 === r) throw new Error("Missing type index for " + t)
        ;(this._typs[e] = this._typs[r]),
          this._typs.splice(r, 1),
          this._idx.delete(t)
      }
      encode() {
        const A = c(this._typs.length),
          t = B(...this._typs)
        return B(A, t)
      }
      indexOf(A) {
        if (!this._idx.has(A)) throw new Error("Missing type index for " + A)
        return C(this._idx.get(A) || 0)
      }
    }
    class G {
      visitType(A, t) {
        throw new Error("Not implemented")
      }
      visitPrimitive(A, t) {
        return this.visitType(A, t)
      }
      visitEmpty(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitBool(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitNull(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitReserved(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitText(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitNumber(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitInt(A, t) {
        return this.visitNumber(A, t)
      }
      visitNat(A, t) {
        return this.visitNumber(A, t)
      }
      visitFloat(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitFixedInt(A, t) {
        return this.visitNumber(A, t)
      }
      visitFixedNat(A, t) {
        return this.visitNumber(A, t)
      }
      visitPrincipal(A, t) {
        return this.visitPrimitive(A, t)
      }
      visitConstruct(A, t) {
        return this.visitType(A, t)
      }
      visitVec(A, t, e) {
        return this.visitConstruct(A, e)
      }
      visitOpt(A, t, e) {
        return this.visitConstruct(A, e)
      }
      visitRecord(A, t, e) {
        return this.visitConstruct(A, e)
      }
      visitTuple(A, t, e) {
        const r = t.map((A, t) => [`_${t}_`, A])
        return this.visitRecord(A, r, e)
      }
      visitVariant(A, t, e) {
        return this.visitConstruct(A, e)
      }
      visitRec(A, t, e) {
        return this.visitConstruct(t, e)
      }
      visitFunc(A, t) {
        return this.visitConstruct(A, t)
      }
      visitService(A, t) {
        return this.visitConstruct(A, t)
      }
    }
    class k {
      display() {
        return this.name
      }
      valueToString(A) {
        return P(A)
      }
      buildTypeTable(A) {
        A.has(this) || this._buildTypeTableImpl(A)
      }
    }
    class _ extends k {
      checkType(A) {
        if (this.name !== A.name)
          throw new Error(
            `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
          )
        return A
      }
      _buildTypeTableImpl(A) {}
    }
    class m extends k {
      checkType(A) {
        if (A instanceof Z) {
          const t = A.getType()
          if (void 0 === t)
            throw new Error("type mismatch with uninitialized type")
          return t
        }
        throw new Error(
          `type mismatch: type on the wire ${A.name}, expect type ${this.name}`
        )
      }
      encodeType(A) {
        return A.indexOf(this.name)
      }
    }
    class b extends _ {
      accept(A, t) {
        return A.visitEmpty(this, t)
      }
      covariant(A) {
        return !1
      }
      encodeValue() {
        throw new Error("Empty cannot appear as a function argument")
      }
      valueToString() {
        throw new Error("Empty cannot appear as a value")
      }
      encodeType() {
        return C(-17)
      }
      decodeValue() {
        throw new Error("Empty cannot appear as an output")
      }
      get name() {
        return "empty"
      }
    }
    class q extends k {
      checkType(A) {
        throw new Error("Method not implemented for unknown.")
      }
      accept(A, t) {
        throw A.visitType(this, t)
      }
      covariant(A) {
        return !1
      }
      encodeValue() {
        throw new Error("Unknown cannot appear as a function argument")
      }
      valueToString() {
        throw new Error("Unknown cannot appear as a value")
      }
      encodeType() {
        throw new Error("Unknown cannot be serialized")
      }
      decodeValue(A, t) {
        let e,
          r = t.decodeValue(A, t)
        return (
          Object(r) !== r && (r = Object(r)),
          (e = t instanceof Z ? () => t.getType() : () => t),
          Object.defineProperty(r, "type", {
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0
          }),
          r
        )
      }
      _buildTypeTableImpl() {
        throw new Error("Unknown cannot be serialized")
      }
      get name() {
        return "Unknown"
      }
    }
    class S extends _ {
      accept(A, t) {
        return A.visitBool(this, t)
      }
      covariant(A) {
        return "boolean" == typeof A
      }
      encodeValue(A) {
        return new Uint8Array([A ? 1 : 0])
      }
      encodeType() {
        return C(-2)
      }
      decodeValue(A, t) {
        switch ((this.checkType(t), Q(A))) {
          case 0:
            return !1
          case 1:
            return !0
          default:
            throw new Error("Boolean value out of range")
        }
      }
      get name() {
        return "bool"
      }
    }
    class D extends _ {
      accept(A, t) {
        return A.visitNull(this, t)
      }
      covariant(A) {
        return null === A
      }
      encodeValue() {
        return new ArrayBuffer(0)
      }
      encodeType() {
        return C(-1)
      }
      decodeValue(A, t) {
        return this.checkType(t), null
      }
      get name() {
        return "null"
      }
    }
    class F extends _ {
      accept(A, t) {
        return A.visitReserved(this, t)
      }
      covariant(A) {
        return !0
      }
      encodeValue() {
        return new ArrayBuffer(0)
      }
      encodeType() {
        return C(-16)
      }
      decodeValue(A, t) {
        return t.name !== this.name && t.decodeValue(A, t), null
      }
      get name() {
        return "reserved"
      }
    }
    class H extends _ {
      accept(A, t) {
        return A.visitText(this, t)
      }
      covariant(A) {
        return "string" == typeof A
      }
      encodeValue(A) {
        const t = new TextEncoder().encode(A)
        return B(c(t.byteLength), t)
      }
      encodeType() {
        return C(-15)
      }
      decodeValue(A, t) {
        this.checkType(t)
        const e = u(A),
          r = E(A, Number(e))
        return new TextDecoder("utf8", { fatal: !0 }).decode(r)
      }
      get name() {
        return "text"
      }
      valueToString(A) {
        return '"' + A + '"'
      }
    }
    class N extends _ {
      accept(A, t) {
        return A.visitInt(this, t)
      }
      covariant(A) {
        return "bigint" == typeof A || Number.isInteger(A)
      }
      encodeValue(A) {
        return C(A)
      }
      encodeType() {
        return C(-4)
      }
      decodeValue(A, t) {
        return this.checkType(t), l(A)
      }
      get name() {
        return "int"
      }
      valueToString(A) {
        return A.toString()
      }
    }
    class R extends _ {
      accept(A, t) {
        return A.visitNat(this, t)
      }
      covariant(A) {
        return (
          ("bigint" == typeof A && A >= BigInt(0)) ||
          (Number.isInteger(A) && A >= 0)
        )
      }
      encodeValue(A) {
        return c(A)
      }
      encodeType() {
        return C(-3)
      }
      decodeValue(A, t) {
        return this.checkType(t), u(A)
      }
      get name() {
        return "nat"
      }
      valueToString(A) {
        return A.toString()
      }
    }
    class U extends _ {
      constructor(A) {
        if ((super(), (this._bits = A), 32 !== A && 64 !== A))
          throw new Error("not a valid float type")
      }
      accept(A, t) {
        return A.visitFloat(this, t)
      }
      covariant(A) {
        return "number" == typeof A || A instanceof Number
      }
      encodeValue(A) {
        const t = new ArrayBuffer(this._bits / 8),
          e = new DataView(t)
        return (
          32 === this._bits ? e.setFloat32(0, A, !0) : e.setFloat64(0, A, !0), t
        )
      }
      encodeType() {
        return C(32 === this._bits ? -13 : -14)
      }
      decodeValue(A, t) {
        this.checkType(t)
        const e = E(A, this._bits / 8),
          r = new DataView(e)
        return 32 === this._bits ? r.getFloat32(0, !0) : r.getFloat64(0, !0)
      }
      get name() {
        return "float" + this._bits
      }
      valueToString(A) {
        return A.toString()
      }
    }
    class v extends _ {
      constructor(A) {
        super(), (this._bits = A)
      }
      accept(A, t) {
        return A.visitFixedInt(this, t)
      }
      covariant(A) {
        const t = BigInt(2) ** BigInt(this._bits - 1) * BigInt(-1),
          e = BigInt(2) ** BigInt(this._bits - 1) - BigInt(1)
        if ("bigint" == typeof A) return A >= t && A <= e
        if (Number.isInteger(A)) {
          const r = BigInt(A)
          return r >= t && r <= e
        }
        return !1
      }
      encodeValue(A) {
        return f(A, this._bits / 8)
      }
      encodeType() {
        return C(-9 - (Math.log2(this._bits) - 3))
      }
      decodeValue(A, t) {
        this.checkType(t)
        const e = (function (A, t) {
          let e = w(A, t)
          const r = BigInt(2) ** (BigInt(8) * BigInt(t - 1) + BigInt(7))
          return e >= r && (e -= r * BigInt(2)), e
        })(A, this._bits / 8)
        return this._bits <= 32 ? Number(e) : e
      }
      get name() {
        return `int${this._bits}`
      }
      valueToString(A) {
        return A.toString()
      }
    }
    class M extends _ {
      constructor(A) {
        super(), (this.bits = A)
      }
      accept(A, t) {
        return A.visitFixedNat(this, t)
      }
      covariant(A) {
        const t = BigInt(2) ** BigInt(this.bits)
        return "bigint" == typeof A && A >= BigInt(0)
          ? A < t
          : !!(Number.isInteger(A) && A >= 0) && BigInt(A) < t
      }
      encodeValue(A) {
        return (function (A, t) {
          if (BigInt(A) < BigInt(0))
            throw new Error("Cannot write negative values.")
          return f(A, t)
        })(A, this.bits / 8)
      }
      encodeType() {
        return C(-5 - (Math.log2(this.bits) - 3))
      }
      decodeValue(A, t) {
        this.checkType(t)
        const e = w(A, this.bits / 8)
        return this.bits <= 32 ? Number(e) : e
      }
      get name() {
        return `nat${this.bits}`
      }
      valueToString(A) {
        return A.toString()
      }
    }
    class Y extends m {
      constructor(A) {
        super(),
          (this._type = A),
          (this._blobOptimization = !1),
          A instanceof M && 8 === A.bits && (this._blobOptimization = !0)
      }
      accept(A, t) {
        return A.visitVec(this, this._type, t)
      }
      covariant(A) {
        return Array.isArray(A) && A.every(A => this._type.covariant(A))
      }
      encodeValue(A) {
        const t = c(A.length)
        if (this._blobOptimization) return B(t, new Uint8Array(A))
        const e = new g(new ArrayBuffer(t.byteLength + A.length), 0)
        e.write(t)
        for (const t of A) {
          const A = this._type.encodeValue(t)
          e.write(new Uint8Array(A))
        }
        return e.buffer
      }
      _buildTypeTableImpl(A) {
        this._type.buildTypeTable(A)
        const t = C(-19),
          e = this._type.encodeType(A)
        A.add(this, B(t, e))
      }
      decodeValue(A, t) {
        const e = this.checkType(t)
        if (!(e instanceof Y)) throw new Error("Not a vector type")
        const r = Number(u(A))
        if (this._blobOptimization) return [...new Uint8Array(A.read(r))]
        const n = []
        for (let t = 0; t < r; t++) n.push(this._type.decodeValue(A, e._type))
        return n
      }
      get name() {
        return `vec ${this._type.name}`
      }
      display() {
        return `vec ${this._type.display()}`
      }
      valueToString(A) {
        return (
          "vec {" + A.map(A => this._type.valueToString(A)).join("; ") + "}"
        )
      }
    }
    class J extends m {
      constructor(A) {
        super(), (this._type = A)
      }
      accept(A, t) {
        return A.visitOpt(this, this._type, t)
      }
      covariant(A) {
        return (
          Array.isArray(A) &&
          (0 === A.length || (1 === A.length && this._type.covariant(A[0])))
        )
      }
      encodeValue(A) {
        return 0 === A.length
          ? new Uint8Array([0])
          : B(new Uint8Array([1]), this._type.encodeValue(A[0]))
      }
      _buildTypeTableImpl(A) {
        this._type.buildTypeTable(A)
        const t = C(-18),
          e = this._type.encodeType(A)
        A.add(this, B(t, e))
      }
      decodeValue(A, t) {
        const e = this.checkType(t)
        if (!(e instanceof J)) throw new Error("Not an option type")
        switch (Q(A)) {
          case 0:
            return []
          case 1:
            return [this._type.decodeValue(A, e._type)]
          default:
            throw new Error("Not an option value")
        }
      }
      get name() {
        return `opt ${this._type.name}`
      }
      display() {
        return `opt ${this._type.display()}`
      }
      valueToString(A) {
        return 0 === A.length ? "null" : `opt ${this._type.valueToString(A[0])}`
      }
    }
    class T extends m {
      constructor(A = {}) {
        super(),
          (this._fields = Object.entries(A).sort((A, t) => I(A[0]) - I(t[0])))
      }
      accept(A, t) {
        return A.visitRecord(this, this._fields, t)
      }
      tryAsTuple() {
        const A = []
        for (let t = 0; t < this._fields.length; t++) {
          const [e, r] = this._fields[t]
          if (e !== `_${t}_`) return null
          A.push(r)
        }
        return A
      }
      covariant(A) {
        return (
          "object" == typeof A &&
          this._fields.every(([t, e]) => {
            if (!A.hasOwnProperty(t))
              throw new Error(`Record is missing key "${t}".`)
            return e.covariant(A[t])
          })
        )
      }
      encodeValue(A) {
        const t = this._fields.map(([t]) => A[t])
        return B(...p(this._fields, t, ([, A], t) => A.encodeValue(t)))
      }
      _buildTypeTableImpl(A) {
        this._fields.forEach(([t, e]) => e.buildTypeTable(A))
        const t = C(-20),
          e = c(this._fields.length),
          r = this._fields.map(([t, e]) => B(c(I(t)), e.encodeType(A)))
        A.add(this, B(t, e, B(...r)))
      }
      decodeValue(A, t) {
        const e = this.checkType(t)
        if (!(e instanceof T)) throw new Error("Not a record type")
        const r = {}
        let n = 0,
          i = 0
        for (; i < e._fields.length; ) {
          const [t, a] = e._fields[i]
          if (n >= this._fields.length) {
            a.decodeValue(A, a), i++
            continue
          }
          const [s, o] = this._fields[n]
          if (I(this._fields[n][0]) === I(t))
            (r[s] = o.decodeValue(A, a)), n++, i++
          else {
            if (o instanceof J || o instanceof F) {
              ;(r[s] = []), n++
              continue
            }
            a.decodeValue(A, a), i++
          }
        }
        for (const [A, t] of this._fields.slice(n)) {
          if (!(t instanceof J || t instanceof F))
            throw new Error("Cannot find required field " + A)
          r[A] = []
        }
        return r
      }
      get name() {
        return `record {${this._fields
          .map(([A, t]) => A + ":" + t.name)
          .join("; ")}}`
      }
      display() {
        return `record {${this._fields
          .map(([A, t]) => A + ":" + t.display())
          .join("; ")}}`
      }
      valueToString(A) {
        const t = this._fields.map(([t]) => A[t])
        return `record {${p(
          this._fields,
          t,
          ([A, t], e) => A + "=" + t.valueToString(e)
        ).join("; ")}}`
      }
    }
    class L extends T {
      constructor(A) {
        const t = {}
        A.forEach((A, e) => (t["_" + e + "_"] = A)),
          super(t),
          (this._components = A)
      }
      accept(A, t) {
        return A.visitTuple(this, this._components, t)
      }
      covariant(A) {
        return (
          Array.isArray(A) &&
          A.length >= this._fields.length &&
          this._components.every((t, e) => t.covariant(A[e]))
        )
      }
      encodeValue(A) {
        return B(...p(this._components, A, (A, t) => A.encodeValue(t)))
      }
      decodeValue(A, t) {
        const e = this.checkType(t)
        if (!(e instanceof L)) throw new Error("not a tuple type")
        if (e._components.length < this._components.length)
          throw new Error("tuple mismatch")
        const r = []
        for (const [t, n] of e._components.entries())
          t >= this._components.length
            ? n.decodeValue(A, n)
            : r.push(this._components[t].decodeValue(A, n))
        return r
      }
      display() {
        return `record {${this._components.map(A => A.display()).join("; ")}}`
      }
      valueToString(A) {
        return `record {${p(this._components, A, (A, t) =>
          A.valueToString(t)
        ).join("; ")}}`
      }
    }
    class x extends m {
      constructor(A = {}) {
        super(),
          (this._fields = Object.entries(A).sort((A, t) => I(A[0]) - I(t[0])))
      }
      accept(A, t) {
        return A.visitVariant(this, this._fields, t)
      }
      covariant(A) {
        return (
          "object" == typeof A &&
          1 === Object.entries(A).length &&
          this._fields.every(
            ([t, e]) => !A.hasOwnProperty(t) || e.covariant(A[t])
          )
        )
      }
      encodeValue(A) {
        for (let t = 0; t < this._fields.length; t++) {
          const [e, r] = this._fields[t]
          if (A.hasOwnProperty(e)) return B(c(t), r.encodeValue(A[e]))
        }
        throw Error("Variant has no data: " + A)
      }
      _buildTypeTableImpl(A) {
        this._fields.forEach(([, t]) => {
          t.buildTypeTable(A)
        })
        const t = C(-21),
          e = c(this._fields.length),
          r = this._fields.map(([t, e]) => B(c(I(t)), e.encodeType(A)))
        A.add(this, B(t, e, ...r))
      }
      decodeValue(A, t) {
        const e = this.checkType(t)
        if (!(e instanceof x)) throw new Error("Not a variant type")
        const r = Number(u(A))
        if (r >= e._fields.length) throw Error("Invalid variant index: " + r)
        const [n, i] = e._fields[r]
        for (const [t, e] of this._fields)
          if (I(n) === I(t)) return { [t]: e.decodeValue(A, i) }
        throw new Error("Cannot find field hash " + n)
      }
      get name() {
        return `variant {${this._fields
          .map(([A, t]) => A + ":" + t.name)
          .join("; ")}}`
      }
      display() {
        return `variant {${this._fields
          .map(([A, t]) => A + ("null" === t.name ? "" : `:${t.display()}`))
          .join("; ")}}`
      }
      valueToString(A) {
        for (const [t, e] of this._fields)
          if (A.hasOwnProperty(t)) {
            const r = e.valueToString(A[t])
            return "null" === r ? `variant {${t}}` : `variant {${t}=${r}}`
          }
        throw new Error("Variant has no data: " + A)
      }
    }
    class Z extends m {
      constructor() {
        super(...arguments), (this._id = Z._counter++), (this._type = void 0)
      }
      accept(A, t) {
        if (!this._type) throw Error("Recursive type uninitialized.")
        return A.visitRec(this, this._type, t)
      }
      fill(A) {
        this._type = A
      }
      getType() {
        return this._type
      }
      covariant(A) {
        return !!this._type && this._type.covariant(A)
      }
      encodeValue(A) {
        if (!this._type) throw Error("Recursive type uninitialized.")
        return this._type.encodeValue(A)
      }
      _buildTypeTableImpl(A) {
        if (!this._type) throw Error("Recursive type uninitialized.")
        A.add(this, new Uint8Array([])),
          this._type.buildTypeTable(A),
          A.merge(this, this._type.name)
      }
      decodeValue(A, t) {
        if (!this._type) throw Error("Recursive type uninitialized.")
        return this._type.decodeValue(A, t)
      }
      get name() {
        return `rec_${this._id}`
      }
      display() {
        if (!this._type) throw Error("Recursive type uninitialized.")
        return `μ${this.name}.${this._type.name}`
      }
      valueToString(A) {
        if (!this._type) throw Error("Recursive type uninitialized.")
        return this._type.valueToString(A)
      }
    }
    function O(A) {
      if (1 !== Q(A)) throw new Error("Cannot decode principal")
      const t = Number(u(A))
      return s.fromUint8Array(new Uint8Array(E(A, t)))
    }
    Z._counter = 0
    class j extends _ {
      accept(A, t) {
        return A.visitPrincipal(this, t)
      }
      covariant(A) {
        return A && A._isPrincipal
      }
      encodeValue(A) {
        const t = A.toUint8Array(),
          e = c(t.byteLength)
        return B(new Uint8Array([1]), e, t)
      }
      encodeType() {
        return C(-24)
      }
      decodeValue(A, t) {
        return this.checkType(t), O(A)
      }
      get name() {
        return "principal"
      }
      valueToString(A) {
        return `${this.name} "${A.toText()}"`
      }
    }
    class K extends m {
      constructor(A, t, e = []) {
        super(),
          (this.argTypes = A),
          (this.retTypes = t),
          (this.annotations = e)
      }
      static argsToString(A, t) {
        if (A.length !== t.length) throw new Error("arity mismatch")
        return "(" + A.map((A, e) => A.valueToString(t[e])).join(", ") + ")"
      }
      accept(A, t) {
        return A.visitFunc(this, t)
      }
      covariant(A) {
        return (
          Array.isArray(A) &&
          2 === A.length &&
          A[0] &&
          A[0]._isPrincipal &&
          "string" == typeof A[1]
        )
      }
      encodeValue([A, t]) {
        const e = A.toUint8Array(),
          r = c(e.byteLength),
          n = B(new Uint8Array([1]), r, e),
          i = new TextEncoder().encode(t),
          a = c(i.byteLength)
        return B(new Uint8Array([1]), n, a, i)
      }
      _buildTypeTableImpl(A) {
        this.argTypes.forEach(t => t.buildTypeTable(A)),
          this.retTypes.forEach(t => t.buildTypeTable(A))
        const t = C(-22),
          e = c(this.argTypes.length),
          r = B(...this.argTypes.map(t => t.encodeType(A))),
          n = c(this.retTypes.length),
          i = B(...this.retTypes.map(t => t.encodeType(A))),
          a = c(this.annotations.length),
          s = B(...this.annotations.map(A => this.encodeAnnotation(A)))
        A.add(this, B(t, e, r, n, i, a, s))
      }
      decodeValue(A) {
        if (1 !== Q(A)) throw new Error("Cannot decode function reference")
        const t = O(A),
          e = E(A, Number(u(A)))
        return [t, new TextDecoder("utf8", { fatal: !0 }).decode(e)]
      }
      get name() {
        return `(${this.argTypes
          .map(A => A.name)
          .join(", ")}) -> (${this.retTypes.map(A => A.name).join(", ")})${
          " " + this.annotations.join(" ")
        }`
      }
      valueToString([A, t]) {
        return `func "${A.toText()}".${t}`
      }
      display() {
        return `(${this.argTypes
          .map(A => A.display())
          .join(", ")}) → (${this.retTypes.map(A => A.display()).join(", ")})${
          " " + this.annotations.join(" ")
        }`
      }
      encodeAnnotation(A) {
        if ("query" === A) return new Uint8Array([1])
        if ("oneway" === A) return new Uint8Array([2])
        throw new Error("Illegal function annotation")
      }
    }
    class V extends m {
      constructor(A) {
        super(),
          (this._fields = Object.entries(A).sort((A, t) => I(A[0]) - I(t[0])))
      }
      accept(A, t) {
        return A.visitService(this, t)
      }
      covariant(A) {
        return A && A._isPrincipal
      }
      encodeValue(A) {
        const t = A.toUint8Array(),
          e = c(t.length)
        return B(new Uint8Array([1]), e, t)
      }
      _buildTypeTableImpl(A) {
        this._fields.forEach(([t, e]) => e.buildTypeTable(A))
        const t = C(-23),
          e = c(this._fields.length),
          r = this._fields.map(([t, e]) => {
            const r = new TextEncoder().encode(t)
            return B(c(r.length), r, e.encodeType(A))
          })
        A.add(this, B(t, e, ...r))
      }
      decodeValue(A) {
        return O(A)
      }
      get name() {
        return `service {${this._fields
          .map(([A, t]) => A + ":" + t.name)
          .join("; ")}}`
      }
      valueToString(A) {
        return `service "${A.toText()}"`
      }
    }
    function P(A) {
      return JSON.stringify(A, (A, t) =>
        "bigint" == typeof t ? `BigInt(${t})` : t
      )
    }
    function W(A, t) {
      if (t.length < A.length) throw Error("Wrong number of message arguments")
      const e = new y()
      A.forEach(A => A.buildTypeTable(e))
      const r = new TextEncoder().encode(d),
        n = e.encode(),
        i = c(t.length),
        a = B(...A.map(A => A.encodeType(e))),
        s = B(
          ...p(A, t, (A, t) => {
            if (!A.covariant(t))
              throw new Error(`Invalid ${A.display()} argument: ${P(t)}`)
            return A.encodeValue(t)
          })
        )
      return B(r, n, i, a, s)
    }
    function z(A, t) {
      const e = new g(t)
      if (t.byteLength < d.length)
        throw new Error("Message length smaller than magic number")
      const r = E(e, d.length),
        n = new TextDecoder().decode(r)
      if (n !== d) throw new Error("Wrong magic number: " + JSON.stringify(n))
      const [i, a] = (function (A) {
        const t = [],
          e = Number(u(A))
        for (let r = 0; r < e; r++) {
          const e = Number(l(A))
          switch (e) {
            case -18:
            case -19: {
              const r = Number(l(A))
              t.push([e, r])
              break
            }
            case -20:
            case -21: {
              const r = []
              let n,
                i = Number(u(A))
              for (; i--; ) {
                const t = Number(u(A))
                if (t >= Math.pow(2, 32))
                  throw new Error("field id out of 32-bit range")
                if ("number" == typeof n && n >= t)
                  throw new Error("field id collision or not sorted")
                n = t
                const e = Number(l(A))
                r.push([t, e])
              }
              t.push([e, r])
              break
            }
            case -22: {
              const r = []
              let n = Number(u(A))
              for (; n--; ) r.push(Number(l(A)))
              const i = []
              let a = Number(u(A))
              for (; a--; ) i.push(Number(l(A)))
              const s = []
              let o = Number(u(A))
              for (; o--; )
                switch (Number(u(A))) {
                  case 1:
                    s.push("query")
                    break
                  case 2:
                    s.push("oneway")
                    break
                  default:
                    throw new Error("unknown annotation")
                }
              t.push([e, [r, i, s]])
              break
            }
            case -23: {
              let r = Number(u(A))
              const n = []
              for (; r--; ) {
                const t = Number(u(A)),
                  e = new TextDecoder().decode(E(A, t)),
                  r = l(A)
                n.push([e, r])
              }
              t.push([e, n])
              break
            }
            default:
              throw new Error("Illegal op_code: " + e)
          }
        }
        const r = [],
          n = Number(u(A))
        for (let t = 0; t < n; t++) r.push(Number(l(A)))
        return [t, r]
      })(e)
      if (a.length < A.length) throw new Error("Wrong number of return values")
      const s = i.map(A => pA())
      function o(A) {
        if (A < -24) throw new Error("future value not supported")
        if (A < 0)
          switch (A) {
            case -1:
              return eA
            case -2:
              return tA
            case -3:
              return iA
            case -4:
              return nA
            case -5:
              return hA
            case -6:
              return EA
            case -7:
              return QA
            case -8:
              return cA
            case -9:
              return oA
            case -10:
              return BA
            case -11:
              return gA
            case -12:
              return IA
            case -13:
              return aA
            case -14:
              return sA
            case -15:
              return rA
            case -16:
              return $
            case -17:
              return X
            case -24:
              return uA
            default:
              throw new Error("Illegal op_code: " + A)
          }
        if (A >= i.length) throw new Error("type index out of range")
        return s[A]
      }
      i.forEach((A, t) => {
        const e = (function (A) {
          switch (A[0]) {
            case -19:
              return lA(o(A[1]))
            case -18:
              return fA(o(A[1]))
            case -20: {
              const t = {}
              for (const [e, r] of A[1]) t[`_${e}_`] = o(r)
              const e = wA(t),
                r = e.tryAsTuple()
              return Array.isArray(r) ? CA(...r) : e
            }
            case -21: {
              const t = {}
              for (const [e, r] of A[1]) t[`_${e}_`] = o(r)
              return dA(t)
            }
            case -22: {
              const [t, e, r] = A[1]
              return yA(
                t.map(A => o(A)),
                e.map(A => o(A)),
                r
              )
            }
            case -23: {
              const t = {},
                e = A[1]
              for (const [A, r] of e) {
                let e = o(r)
                if ((e instanceof Z && (e = e.getType()), !(e instanceof K)))
                  throw new Error(
                    "Illegal service definition: services can only contain functions"
                  )
                t[A] = e
              }
              return GA(t)
            }
            default:
              throw new Error("Illegal op_code: " + A[0])
          }
        })(A)
        s[t].fill(e)
      })
      const B = a.map(A => o(A)),
        I = A.map((A, t) => A.decodeValue(e, B[t]))
      for (let t = A.length; t < B.length; t++) B[t].decodeValue(e, B[t])
      if (e.byteLength > 0) throw new Error("decode: Left-over bytes")
      return I
    }
    const X = new b(),
      $ = new F(),
      AA = new q(),
      tA = new S(),
      eA = new D(),
      rA = new H(),
      nA = new N(),
      iA = new R(),
      aA = new U(32),
      sA = new U(64),
      oA = new v(8),
      BA = new v(16),
      gA = new v(32),
      IA = new v(64),
      hA = new M(8),
      EA = new M(16),
      QA = new M(32),
      cA = new M(64),
      uA = new j()
    function CA(...A) {
      return new L(A)
    }
    function lA(A) {
      return new Y(A)
    }
    function fA(A) {
      return new J(A)
    }
    function wA(A) {
      return new T(A)
    }
    function dA(A) {
      return new x(A)
    }
    function pA() {
      return new Z()
    }
    function yA(A, t, e = []) {
      return new K(A, t, e)
    }
    function GA(A) {
      return new V(A)
    }
    var kA = __webpack_require__(756)
    function _A(...A) {
      const t = new Uint8Array(A.reduce((A, t) => A + t.byteLength, 0))
      let e = 0
      for (const r of A) t.set(new Uint8Array(r), e), (e += r.byteLength)
      return t.buffer
    }
    function mA(A) {
      return [...new Uint8Array(A)]
        .map(A => A.toString(16).padStart(2, "0"))
        .join("")
    }
    const bA = new RegExp(/^([0-9A-F]{2})*$/i)
    function qA(A) {
      if (!bA.test(A)) throw new Error("Invalid hexadecimal string.")
      const t = [...A]
        .reduce(
          (A, t, e) => ((A[(e / 2) | 0] = (A[(e / 2) | 0] || "") + t), A),
          []
        )
        .map(A => Number.parseInt(A, 16))
      return new Uint8Array(t).buffer
    }
    function SA(A) {
      return a.sha256.create().update(new Uint8Array(A)).arrayBuffer()
    }
    function DA(A) {
      if (A instanceof kA.Tagged) return DA(A.value)
      if ("string" == typeof A) return FA(A)
      if ("number" == typeof A) return SA(c(A))
      if (A instanceof ArrayBuffer || ArrayBuffer.isView(A)) return SA(A)
      if (Array.isArray(A)) return SA(_A(...A.map(DA)))
      if (A && "object" == typeof A && A._isPrincipal)
        return SA(A.toUint8Array())
      if ("object" == typeof A && null !== A && "function" == typeof A.toHash)
        return DA(A.toHash())
      if ("bigint" == typeof A) return SA(c(A))
      throw Object.assign(
        new Error(`Attempt to hash a value of unsupported type: ${A}`),
        { value: A }
      )
    }
    const FA = A => SA(new TextEncoder().encode(A))
    function HA(A) {
      const t = Object.entries(A)
        .filter(([, A]) => void 0 !== A)
        .map(([A, t]) => [FA(A), DA(t)])
        .sort(([A], [t]) =>
          (function (A, t) {
            if (A.byteLength !== t.byteLength)
              return A.byteLength - t.byteLength
            const e = new Uint8Array(A),
              r = new Uint8Array(t)
            for (let A = 0; A < e.length; A++)
              if (e[A] !== r[A]) return e[A] - r[A]
            return 0
          })(A, t)
        )
      return SA(_A(...t.map(A => _A(...A))))
    }
    new TextEncoder().encode("\nic-request")
    class NA {
      getPrincipal() {
        return s.anonymous()
      }
      async transformRequest(A) {
        return Object.assign(Object.assign({}, A), {
          body: { content: A.body }
        })
      }
    }
    var RA = __webpack_require__(419)
    const UA = RA.SelfDescribeCborSerializer.withDefaultEncoders(!0)
    var vA, MA
    function YA(A) {
      return UA.serialize(A)
    }
    function JA(A) {
      const t = A.byteLength
      let e = BigInt(0)
      for (let r = 0; r < t; r++) e = e * BigInt(256) + BigInt(A[r])
      return e
    }
    UA.addEncoder(
      new (class {
        get name() {
          return "Principal"
        }
        get priority() {
          return 0
        }
        match(A) {
          return A && !0 === A._isPrincipal
        }
        encode(A) {
          return RA.value.bytes(A.toUint8Array())
        }
      })()
    ),
      UA.addEncoder(
        new (class {
          get name() {
            return "Buffer"
          }
          get priority() {
            return 1
          }
          match(A) {
            return A instanceof ArrayBuffer || ArrayBuffer.isView(A)
          }
          encode(A) {
            return RA.value.bytes(new Uint8Array(A))
          }
        })()
      ),
      UA.addEncoder(
        new (class {
          get name() {
            return "BigInt"
          }
          get priority() {
            return 1
          }
          match(A) {
            return "bigint" == typeof A
          }
          encode(A) {
            return A > BigInt(0)
              ? RA.value.tagged(2, RA.value.bytes(qA(A.toString(16))))
              : RA.value.tagged(
                  3,
                  RA.value.bytes(qA((BigInt("-1") * A).toString(16)))
                )
          }
        })()
      ),
      (function (A) {
        ;(A[(A.Uint64LittleEndian = 71)] = "Uint64LittleEndian"),
          (A[(A.Semantic = 55799)] = "Semantic")
      })(vA || (vA = {}))
    class TA extends kA.Decoder {
      createByteString(A) {
        return _A(...A)
      }
      createByteStringFromHeap(A, t) {
        return A === t
          ? new ArrayBuffer(0)
          : new Uint8Array(this._heap.slice(A, t))
      }
    }
    function LA(A) {
      const t = new Uint8Array(A)
      return new TA({
        size: t.byteLength,
        tags: { 2: A => JA(A), 3: A => -JA(A), [vA.Semantic]: A => A }
      }).decodeFirst(t)
    }
    function xA() {
      const A = new ArrayBuffer(16),
        t = new DataView(A),
        e = BigInt(+Date.now()),
        r = Math.floor(4294967295 * Math.random()),
        n = Math.floor(4294967295 * Math.random())
      return t.setBigUint64(0, e), t.setUint32(8, r), t.setUint32(12, n), A
    }
    !(function (A) {
      A.Call = "call"
    })(MA || (MA = {}))
    const ZA = BigInt(1e6),
      OA = BigInt(6e4)
    class jA {
      constructor(A) {
        this._value = (BigInt(Date.now()) + BigInt(A) - OA) * ZA
      }
      toCBOR() {
        return RA.value.u64(this._value.toString(16), 16)
      }
      toHash() {
        return c(this._value)
      }
    }
    var KA
    !(function (A) {
      ;(A.Received = "received"),
        (A.Processing = "processing"),
        (A.Replied = "replied"),
        (A.Rejected = "rejected"),
        (A.Unknown = "unknown"),
        (A.Done = "done")
    })(KA || (KA = {}))
    const VA = 3e5
    class PA extends o {
      constructor(A) {
        super(A), (this.message = A)
      }
    }
    class WA extends o {
      constructor(A) {
        super(A), (this.message = A)
      }
    }
    class zA {
      constructor(A = {}) {
        if (
          ((this.rootKey = qA(
            "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae"
          )),
          (this._pipeline = []),
          (this._rootKeyFetched = !1),
          A.source)
        ) {
          if (!(A.source instanceof zA))
            throw new Error("An Agent's source can only be another HttpAgent")
          ;(this._pipeline = [...A.source._pipeline]),
            (this._identity = A.source._identity),
            (this._fetch = A.source._fetch),
            (this._host = A.source._host),
            (this._credentials = A.source._credentials)
        } else
          this._fetch =
            A.fetch ||
            (function () {
              let A
              if ("undefined" != typeof window) {
                if (!window.fetch)
                  throw new PA(
                    "Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present."
                  )
                A = window.fetch.bind(window)
              } else if (void 0 !== __webpack_require__.g) {
                if (!__webpack_require__.g.fetch)
                  throw new PA(
                    "Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available."
                  )
                A = __webpack_require__.g.fetch.bind(__webpack_require__.g)
              } else
                "undefined" != typeof self &&
                  self.fetch &&
                  (A = self.fetch.bind(self))
              if (A) return A
              throw new PA(
                "Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."
              )
            })() ||
            fetch.bind(__webpack_require__.g)
        if (void 0 !== A.host)
          A.host.match(/^[a-z]+:/) || "undefined" == typeof window
            ? (this._host = new URL(A.host))
            : (this._host = new URL(window.location.protocol + "//" + A.host))
        else if (void 0 !== A.source) this._host = A.source._host
        else {
          const A = "undefined" != typeof window ? window.location : void 0
          if (!A) throw new Error("Must specify a host to connect to.")
          this._host = new URL(A + "")
        }
        if (
          (this._host.hostname.endsWith(".ic0.app") &&
            (this._host.hostname = "ic0.app"),
          A.credentials)
        ) {
          const { name: t, password: e } = A.credentials
          this._credentials = `${t}${e ? ":" + e : ""}`
        }
        ;(this._identity = Promise.resolve(A.identity || new NA())),
          A.disableNonce ||
            this.addTransform(
              (function (A = xA) {
                return async t => {
                  "call" === t.endpoint && (t.body.nonce = A())
                }
              })(xA)
            )
      }
      addTransform(A, t = A.priority || 0) {
        const e = this._pipeline.findIndex(A => (A.priority || 0) < t)
        this._pipeline.splice(
          e >= 0 ? e : this._pipeline.length,
          0,
          Object.assign(A, { priority: t })
        )
      }
      async getPrincipal() {
        if (!this._identity)
          throw new WA(
            "This identity has expired due this application's security policy. Please refresh your authentication."
          )
        return (await this._identity).getPrincipal()
      }
      async call(A, t, e) {
        const r = await (void 0 !== e ? await e : await this._identity)
        if (!r)
          throw new WA(
            "This identity has expired due this application's security policy. Please refresh your authentication."
          )
        const n = s.from(A),
          i = t.effectiveCanisterId ? s.from(t.effectiveCanisterId) : n,
          a = r.getPrincipal() || s.anonymous(),
          o = {
            request_type: MA.Call,
            canister_id: n,
            method_name: t.methodName,
            arg: t.arg,
            sender: a,
            ingress_expiry: new jA(VA)
          }
        let B = await this._transform({
          request: {
            body: null,
            method: "POST",
            headers: Object.assign(
              { "Content-Type": "application/cbor" },
              this._credentials
                ? { Authorization: "Basic " + btoa(this._credentials) }
                : {}
            )
          },
          endpoint: "call",
          body: o
        })
        B = await r.transformRequest(B)
        const g = YA(B.body),
          [I, h] = await Promise.all([
            this._fetch(
              "" + new URL(`/api/v2/canister/${i.toText()}/call`, this._host),
              Object.assign(Object.assign({}, B.request), { body: g })
            ),
            HA(o)
          ])
        if (!I.ok)
          throw new Error(
            `Server returned an error:\n  Code: ${I.status} (${
              I.statusText
            })\n  Body: ${await I.text()}\n`
          )
        return {
          requestId: h,
          response: { ok: I.ok, status: I.status, statusText: I.statusText }
        }
      }
      async query(A, t, e) {
        const r = await (void 0 !== e ? await e : await this._identity)
        if (!r)
          throw new WA(
            "This identity has expired due this application's security policy. Please refresh your authentication."
          )
        const n = "string" == typeof A ? s.fromText(A) : A,
          i = (null == r ? void 0 : r.getPrincipal()) || s.anonymous(),
          a = {
            request_type: "query",
            canister_id: n,
            method_name: t.methodName,
            arg: t.arg,
            sender: i,
            ingress_expiry: new jA(VA)
          }
        let o = await this._transform({
          request: {
            method: "POST",
            headers: Object.assign(
              { "Content-Type": "application/cbor" },
              this._credentials
                ? { Authorization: "Basic " + btoa(this._credentials) }
                : {}
            )
          },
          endpoint: "read",
          body: a
        })
        o = await (null == r ? void 0 : r.transformRequest(o))
        const B = YA(o.body),
          g = await this._fetch(
            "" + new URL(`/api/v2/canister/${n.toText()}/query`, this._host),
            Object.assign(Object.assign({}, o.request), { body: B })
          )
        if (!g.ok)
          throw new Error(
            `Server returned an error:\n  Code: ${g.status} (${
              g.statusText
            })\n  Body: ${await g.text()}\n`
          )
        return LA(await g.arrayBuffer())
      }
      async readState(A, t, e) {
        const r = "string" == typeof A ? s.fromText(A) : A,
          n = await (void 0 !== e ? await e : await this._identity)
        if (!n)
          throw new WA(
            "This identity has expired due this application's security policy. Please refresh your authentication."
          )
        const i = (null == n ? void 0 : n.getPrincipal()) || s.anonymous()
        let a = await this._transform({
          request: {
            method: "POST",
            headers: Object.assign(
              { "Content-Type": "application/cbor" },
              this._credentials
                ? { Authorization: "Basic " + btoa(this._credentials) }
                : {}
            )
          },
          endpoint: "read_state",
          body: {
            request_type: "read_state",
            paths: t.paths,
            sender: i,
            ingress_expiry: new jA(VA)
          }
        })
        a = await (null == n ? void 0 : n.transformRequest(a))
        const o = YA(a.body),
          B = await this._fetch(
            "" + new URL(`/api/v2/canister/${r}/read_state`, this._host),
            Object.assign(Object.assign({}, a.request), { body: o })
          )
        if (!B.ok)
          throw new Error(
            `Server returned an error:\n  Code: ${B.status} (${
              B.statusText
            })\n  Body: ${await B.text()}\n`
          )
        return LA(await B.arrayBuffer())
      }
      async status() {
        const A = this._credentials
            ? { Authorization: "Basic " + btoa(this._credentials) }
            : {},
          t = await this._fetch("" + new URL("/api/v2/status", this._host), {
            headers: A
          })
        if (!t.ok)
          throw new Error(
            `Server returned an error:\n  Code: ${t.status} (${
              t.statusText
            })\n  Body: ${await t.text()}\n`
          )
        return LA(await t.arrayBuffer())
      }
      async fetchRootKey() {
        return (
          this._rootKeyFetched ||
            ((this.rootKey = (await this.status()).root_key),
            (this._rootKeyFetched = !0)),
          this.rootKey
        )
      }
      invalidateIdentity() {
        this._identity = null
      }
      replaceIdentity(A) {
        this._identity = Promise.resolve(A)
      }
      _transform(A) {
        let t = Promise.resolve(A)
        for (const A of this._pipeline) t = t.then(t => A(t).then(A => A || t))
        return t
      }
    }
    var XA
    function $A() {
      const A =
        "undefined" == typeof window
          ? void 0 === __webpack_require__.g
            ? "undefined" == typeof self
              ? void 0
              : self.ic.agent
            : __webpack_require__.g.ic.agent
          : window.ic.agent
      if (!A) throw new Error("No Agent could be found.")
      return A
    }
    !(function (A) {
      ;(A.Error = "err"),
        (A.GetPrincipal = "gp"),
        (A.GetPrincipalResponse = "gpr"),
        (A.Query = "q"),
        (A.QueryResponse = "qr"),
        (A.Call = "c"),
        (A.CallResponse = "cr"),
        (A.ReadState = "rs"),
        (A.ReadStateResponse = "rsr"),
        (A.Status = "s"),
        (A.StatusResponse = "sr")
    })(XA || (XA = {}))
    const At = ({ IDL: A }) => {
      const t = A.Principal,
        e = A.Record({
          controllers: A.Vec(A.Principal),
          freezing_threshold: A.Nat,
          memory_allocation: A.Nat,
          compute_allocation: A.Nat
        }),
        r = A.Record({
          controllers: A.Opt(A.Vec(A.Principal)),
          freezing_threshold: A.Opt(A.Nat),
          memory_allocation: A.Opt(A.Nat),
          compute_allocation: A.Opt(A.Nat)
        }),
        n = A.Vec(A.Nat8)
      return A.Service({
        canister_status: A.Func(
          [A.Record({ canister_id: t })],
          [
            A.Record({
              status: A.Variant({
                stopped: A.Null,
                stopping: A.Null,
                running: A.Null
              }),
              memory_size: A.Nat,
              cycles: A.Nat,
              settings: e,
              module_hash: A.Opt(A.Vec(A.Nat8))
            })
          ],
          []
        ),
        create_canister: A.Func(
          [A.Record({ settings: A.Opt(r) })],
          [A.Record({ canister_id: t })],
          []
        ),
        delete_canister: A.Func([A.Record({ canister_id: t })], [], []),
        deposit_cycles: A.Func([A.Record({ canister_id: t })], [], []),
        install_code: A.Func(
          [
            A.Record({
              arg: A.Vec(A.Nat8),
              wasm_module: n,
              mode: A.Variant({
                reinstall: A.Null,
                upgrade: A.Null,
                install: A.Null
              }),
              canister_id: t
            })
          ],
          [],
          []
        ),
        provisional_create_canister_with_cycles: A.Func(
          [A.Record({ settings: A.Opt(r), amount: A.Opt(A.Nat) })],
          [A.Record({ canister_id: t })],
          []
        ),
        provisional_top_up_canister: A.Func(
          [A.Record({ canister_id: t, amount: A.Nat })],
          [],
          []
        ),
        raw_rand: A.Func([], [A.Vec(A.Nat8)], []),
        start_canister: A.Func([A.Record({ canister_id: t })], [], []),
        stop_canister: A.Func([A.Record({ canister_id: t })], [], []),
        uninstall_code: A.Func([A.Record({ canister_id: t })], [], []),
        update_settings: A.Func(
          [A.Record({ canister_id: A.Principal, settings: r })],
          [],
          []
        )
      })
    }
    function tt(A) {
      function t(A, t, e) {
        const r = t[0]
        let n = s.fromHex("")
        return (
          r &&
            "object" == typeof r &&
            r.canister_id &&
            (n = s.from(r.canister_id)),
          { effectiveCanisterId: n }
        )
      }
      return kt.createActor(
        At,
        Object.assign(
          Object.assign(Object.assign({}, A), { canisterId: s.fromHex("") }),
          { callTransform: t, queryTransform: t }
        )
      )
    }
    var et = __webpack_require__(360)
    let rt
    const nt =
        "\n    AGFzbQEAAAABXg9gAn9/AGABfwBgA39/fwBgAn9/AX9gAX8Bf2ADf39/AX9gBH9/f38AYAV/f39/fwBgBn9/f39/fwF/\n    YAAAYAZ/f39/f38AYAV/fn5+fgBgAAF/YAF/AX5gAn9/AX4DvAG6AQgEAAEAAAABAgEDAAAMAAACAQEKAQAHBgEAAQEA\n    AgcCAgABAgAGAAgOBAEBBAAAAQALAQkAAwMAAQQBAAICAAIBAQEBAQEGAQACAQEEAAECAQEABQMBAQMEAwQCAwAAAAEA\n    AAAAAAEFAQEAAAACAQIAAQMAAQAGBAACAgMEAAAAAAAGAAQABAQEBAAAAwIAAgACAAEBAAAAAQEBAAEAAAAAAgAAAQAB\n    AQEBAQEBAQEBAQIBAAAAAQ0AAQQFAXABBQUFAwEAEQYJAX8BQYCAwAALBzYEBm1lbW9yeQIACGJsc19pbml0AA0KYmxz\n    X3ZlcmlmeQAnEV9fd2JpbmRnZW5fbWFsbG9jAHwJDQEAQQELBLgBCrkBtwEKiO8CugGXVQIQfwV+IwBB4OEAayIGJABB\n    KxABIgkEQCAJQfSgwABBKxBnIQwDQCAHQStHBEAgByAMaiIJQV9BfyAJLQAAIglBn39qQf8BcUEaSRsgCXE6AAAgB0EB\n    aiEHDAELC0EAIQcgBkGoA2pBOBByGiAGQQE2AuADIAZB6ANqQTgQciEPIAZBoARqQQE2AgAgBkGoBmpBoKfAABBfIAZB\n    qAZqECkhCSAGQbgVakGAAhByGiAGQdjbAGpBgAEQchogBkGbI2pBgQIQciENIAZBsAxqQcAAEHIaIAZByM8AakHAABBy\n    GiAGQdDVAGpBwAAQchogBkEAOgCaIyAGIAlB/wBqIhBBA3ZBAWoiCkEBdCILOgCZIyAGIApBB3Y6AJgjIAtBf2pBBXYi\n    CEEBaiERA0AgB0ErRwRAIAcgDWogByAMai0AADoAACAHQQFqIQcMAQsLIAZBKzoAxiMgBkEgaiAGQZgjakEvQdinwAAQ\n    ggEgBkGwDGpBwAAgAiADIAYoAiAgBigCJBATQQAhDUEAIAtrIRIgBkGZI2ohE0EBIQNBACEJA0ACQCANIAMgEUtyRQRA\n    IAMgCEshDSADIAMgCE1qIQJBACEHA0AgB0EgRgRAIAYgAzoAmCNBACEHA0AgB0ErRwRAIAcgE2ogByAMai0AADoAACAH\n    QQFqIQcMAQsLIAZBKzoAxCMgBkEYaiAGQZgjakEtQeinwAAQggFBACEHIAZByM8AakEAIAZB0NUAakEgIAYoAhggBigC\n    HBATIAkgEmohAyAJIAlBgAIgCUGAAksbIg5rIRQgBkG4FWogCWohFQJAA0AgB0EgRg0FIAcgFGpFDQEgByAVaiAGQcjP\n    AGogB2otAAA6AAAgAyAHQQFqIgdqDQALIAIhAyALIQkMBQsgDkGAAkH4p8AAEDwABSAGQcjPAGogB2oiDiAOLQAAIAZB\n    sAxqIAdqLQAAcyIOOgAAIAZB0NUAaiAHaiAOOgAAIAdBAWohBwwBCwALAAsgEEGACEkhDUEAIQNBACEJA0ACQCAJQQJH\n    BEAgCUEBaiELIAZBuBVqIANqIQJBACEHAkADQCAHIApGBEAgDQRAIAZByM8AakHwABByGiAGQdjbAGohCCAKIQcDQCAH\n    BEAgBkHIzwBqQQgQLiAGIAYpA8hPIAgxAAB8NwPITyAHQX9qIQcgCEEBaiEIDAELCyAGQcjPAGoQRSAGQdDVAGogBkGo\n    BmoQMCAGQZgjakHwABByGiAGQcjPAGogBkHQ1QBqEDZBAEgNBUEAIQIDQCAGQdDVAGpBARAuIAJBAWohAiAGQcjPAGog\n    BkHQ1QBqEDZBf0oNAAsDQCACQQFIDQZBACEHA0AgB0HoAEYEQCAGIAYpA7hWQgGHNwO4VkEAIQcDQCAHQfAARwRAIAZB\n    mCNqIAdqIAZByM8AaiAHaikDADcDACAHQQhqIQcMAQsLIAZBmCNqIAZB0NUAahBkIAZBmCNqEEUgBikDgCRCP4chF0EA\n    IQcDQCAHQfAARwRAIAZByM8AaiAHaiIIIAZBmCNqIAdqKQMAIhYgCCkDAIUgF4MgFoU3AwAgB0EIaiEHDAELCyACQX9q\n    IQIMAgUgBkHQ1QBqIAdqIgggCEEIaikDAEI5hkKAgICAgICAgAKDIAgpAwBCAYeENwMAIAdBCGohBwwBCwALAAsACyAK\n    QYABQaChwAAQPQALIAMgB2oiCEH/AU0EQCAHQYABRg0CIAZB2NsAaiAHaiACIAdqLQAAOgAAIAdBAWohBwwBCwsgCEGA\n    AkGwocAAEDwAC0GAAUGAAUHAocAAEDwACyAGQShqIAZBqANqEAIgBkG4EmogDxACIAZBKGogBkG4EmoQDCAGQegBakHo\n    g8AAEF8CQAJAIAZB6AFqEFoNACAGQShqEIQBDQAgBkGIPWoQS0EAIQcgBkGIwwBqQTgQchogBkG4IWpBOBByGiAGQYjA\n    AGoQSyAGQcjEAGoQSyAGQcjJAGoQSyAGQcjMAGoQSyAGQagGahBLIAZBsAxqEEsgBkHIzwBqEEsgBkHQ1QBqEEsgBkHY\n    2wBqEEsgBkG4FWoQSyAGQZgjaiAGQcjJAGpBwAEQZxogBkHYJGogBkHIzABqQcABEGcaIAZBmCZqIAZBqAZqQcABEGca\n    IAZB2CdqIAZBsAxqQcABEGcaIAZBmClqIAZByM8AakHAARBnGiAGQdgqaiAGQdDVAGpBwAEQZxogBkGYLGogBkHY2wBq\n    QcABEGcaIAZB2C1qIAZBuBVqQcABEGcaIAZBuBVqQecAEHIaIAZBiMAAaiAGQShqEH8gBkGIwABqEBggBkGYI2ogBkEo\n    ahB/A0AgB0HACkYEQCAGQbghaiAGQegBahBrIAYpA7ghIRcgBkG4IWpBARCdASAGQbghahBEIAYpA7ghIRYgBkGIwwBq\n    IAZBuCFqEGsgBkGIwwBqQQEQnQEgBkGIwwBqEEQgBkG4IWogBkGIwwBqIBdCAoGnEE8gBkGIwABqIAZBKGogFkICgacQ\n    bSAGQcjEAGogBkGIwABqEH8gBkG4IWoQKUEDaiIJQQJ2IgdBAWohAkEAIQgCQAJAAkADQAJAIAZBuCFqQQUQjAEhAyAC\n    IAhGBEAgCUGYA0kNASACQecAQbCEwAAQPAALIAhB5wBGDQIgBkG4FWogCGogA0FwaiIDOgAAIAZBuCFqIANBGHRBGHUQ\n    ngEgBkG4IWoQRCAGQbghakEEEDsgCEEBaiEIDAELCyAGQbgVaiACaiADOgAAIANBGHRBGHVBf2oiA0EBdiECIANBD0sN\n    ASAGQYg9aiAGQZgjaiACQcABbGoQfwNAIAdBf0YEQCAGQYg9aiAGQcjEAGoQcyAGQZgjaiAGQYg9akHAARBnGgwICyAH\n    QeYASw0DIAZBiMAAaiAGQZgjaiAGQbgVaiAHaiwAABAfIAdBf2ohByAGQYg9ahAYIAZBiD1qEBggBkGIPWoQGCAGQYg9\n    ahAYIAZBiD1qIAZBiMAAahAMDAALAAtB5wBB5wBBoITAABA8AAsgAkEIQcCEwAAQPAALIAdB5wBB0ITAABA8AAUgBkHI\n    xABqIAZBmCNqIAdqIgIQfyACQcABaiICIAZByMQAahB/IAIgBkGIwABqEAwgB0HAAWohBwwBCwALAAsgBkGYI2oQSwsgB\n    kEoaiAGQZgjahB/IAZBKGoQRyAMEAlBACEHIAZBqAZqQTAQchogBkGwDGpBoKfAABBfAkACQAJAAkACQANAAkAgB0EwRg\n    RAIAYgBi0AqAZBH3E6AKgGIAZByM8AaiAGQagGahBdIAENAUEAQQBB8ILAABA8AAsgASAHRg0CIAZBqAZqIAdqIAAgB2o\n    tAAA6AAAgB0EBaiEHDAELC0EAIQcCQCAALAAAIgJBAE4EQCAAQTBqIQAgAUEwIAFBMEsbQVBqIQIDQCAHQTBGBEAgBkHY\n    2wBqIAZBqAZqEF0gBkHoAWoQSyAGQegBaiAGQcjPAGoQtAEgBkGoAmoiACAGQdjbAGoQtAEgBkHoAmoQaSAGQegBahBEI\n    AZBuBVqIAZB6AFqEE0gBkGYI2ogABCFASAGQZgjahADIAZBmCNqIAZBuBVqEFkNAyAGQegBahCUAQwDCyACIAdGDQQgBk\n    GoBmogB2ogACAHai0AADoAACAHQQFqIQcMAAsACyAGQZgjahBLIAZB0NUAakE4EHIaIAZBATYCiFYgBkGYI2ogBkHIzwB\n    qELQBIAZBmCNqEEQgBkGYJGoQaSAGQdjbAGogBkGYI2oQTQJAIAZB2NsAaiAGQdDVAGoQXEEBRwRAIAZBmCNqEJQBDAEL\n    IAZBuBVqIAZB2NsAaiAGQdDVAGoQIyAGQbgVahBYBEAgBkG4FWoQQSAGQbgVahBECyAGQdgjaiAGQbgVahClAQsgAkEgc\n    UEFdiAGQdgjahBMQQFGRwRAIAZBmCNqEKYBCyAGQegBaiAGQZgjakHAARBnGgsgBkHQPGpB8IHAABBfIAZB6AFqEIQBRQ\n    0CDAMLIAEgAUHggsAAEDwACyAHQTBqIAFBgIPAABA8AAsgBkGoA2oQSyAGQagDaiAGQegBahB/IAZBuBJqEEsgBkG4Emo\n    gBkHoAWoQfyAGQbgSahBHIAZByMcAakHwgcAAEF8gBkGYI2pBqILAABBfIAZBiMMAaiAGQZgjahCLAUEAIQAgBkG4IWpB\n    OBByGiAGQfAhakE4EHIhCSAGQdjbAGpB8IHAABBfIAZBuBVqQYCAwAAQXyAGQZgjakE4EHIaIAZBkCNqIQsgBkGwFWohC\n    gJAAkADQCAAQQdGDQIgAEEBaiEBIAZBuBVqIABBA3RqIQxCACEXQQAhAwNAIANBf2ohByAKIANBA3RqIQIgCyAAIANqQQ\n    N0aiEIA0AgB0EGRgRAIAEhAAwDCyAIQQhqIQggAkEIaiECIAAgB0EBaiIHakEGSw0ACyAAQQZNBEAgB0EGSw0DIAdBAWo\n    hAyAGQQhqIAIpAwAiFiAWQj+HIAwpAwAiFiAWQj+HEDEgCCAGKQMIIhkgF3wiFiAIKQMAIhp8IhhC//////////8DgzcD\n    ACAYIBZUrSAWIBlUrSAGQRBqKQMAIBdCP4d8fCAaQj+HfHxCBoYgGEI6iIQhFwwBCwsLIABBB0G0ncAAEDwACyAHQQdBx\n    J3AABA8AAsgBkG4IWogBkHQPGoQayAGQbghaiAGQZgjahAkIAkgBkHQPGoQayAJIAZBmCNqEBwgCSAGQdjbAGoQYyAGQb\n    gSaiAGQYjDAGoQSCAGQbghahApIQAgBkGIyABqIAZBuCFqIAZByMcAahCNASAGQYjIAGoQKSAASQRAIAZBuCFqIAZBiMg\n    AahBrIAZBqANqEKYBCyAJECkhACAGQYjIAGogCSAGQcjHAGoQjQEgBkGIyABqECkgAEkEQCAJIAZBiMgAahBrIAZBuBJq\n    EKYBCyAGQbghahBEIAkQREEAIQcgBkHIyABqQTgQchogBkGIyQBqQTgQchogBkGYO2pBOBByGiAGQYg9ahBLIAZBiMAAa\n    hBLIAZByMQAahBLIAZByMkAahBLIAZByMwAahBLIAZBqAZqEEsgBkGwDGoQSyAGQcjPAGoQSyAGQdDVAGoQSyAGQdjbAG\n    oQSyAGQbgVahBLIAZBmCNqIAZByMkAakHAARBnGiAGQdgkaiAGQcjMAGpBwAEQZyEAIAZBmCZqIAZBqAZqQcABEGchASA\n    GQdgnaiAGQbAMakHAARBnIQsgBkGYKWogBkHIzwBqQcABEGchCiAGQdgqaiAGQdDVAGpBwAEQZyECIAZBmCxqIAZB2NsA\n    akHAARBnIQMgBkHYLWogBkG4FWpBwAEQZyEIIAZBuBVqQcwBEHIaIAZByMgAaiAGQbghahBrIAZBiMkAaiAJEGsgACAGQ\n    agDahB/IAAgBkG4EmoQcyABIAZBqANqEH8gASAGQbgSahAMIAZBiD1qIAZBuBJqEH8gBkGIPWoQGCAGQcjEAGogABB/IA\n    ZBmCNqIAZByMQAahB/IAZBmCNqIAZBiD1qEHMgBkHIxABqIAEQfyALIAZByMQAahB/IAsgBkGIPWoQDCAGQYjAAGogBkG\n    oA2oQfyAGQYjAAGoQGCAGQcjEAGogABB/IAIgBkHIxABqEH8gAiAGQYjAAGoQDCAGQcjEAGogARB/IAMgBkHIxABqEH8g\n    AyAGQYjAAGoQDCAGQcjEAGogAhB/IAogBkHIxABqEH8gCiAGQYg9ahBzIAZByMQAaiADEH8gCCAGQcjEAGoQfyAIIAZBi\n    D1qEAwgBikDyEghFyAGQcjIAGpBARCdASAGQcjIAGoQRCAGKQPISCEWIAZBmDtqIAZByMgAahBrIAZBmDtqQQEQnQEgBk\n    GYO2oQRCAGQcjIAGogBkGYO2ogF0ICgacQTyAGQYjAAGogBkGoA2ogFkICgacQbSAGQcjEAGogBkGIwABqEH8gBikDiEk\n    hFyAGQYjJAGpBARCdASAGQYjJAGoQRCAGKQOISSEWIAZBmDtqIAZBiMkAahBrIAZBmDtqQQEQnQEgBkGYO2oQRCAGQYjJ\n    AGogBkGYO2ogF0ICgacQTyAGQYg9aiAGQbgSaiAWQgKBpxBtIAZByMQAaiAGQYg9ahAMIAZBmDtqIAZByMgAahBrIAZBm\n    DtqIAZBiMkAahBhIAZBmDtqEEQgBkGYO2oQKUEBaiICQQF2IghBAWohAAJAAkACQAJAA0ACQCAGQcjIAGpBAxCMASEBIA\n    AgB0YEQCAGQYjJAGpBAxCMASEDIAJBlgNJDQEgAEHMAUG0g8AAEDwACyAGQcjIAGogAUF8aiIBEJ4BIAZByMgAahBEIAZ\n    ByMgAakECEDsgBkGIyQBqIAZBiMkAakEDEIwBQXxqIgMQngEgBkGIyQBqEEQgBkGIyQBqQQIQOyAHQcwBRg0CIAZBuBVq\n    IAdqIAMgAUECdGo6AAAgB0EBaiEHDAELCyAGQbgVaiAAaiADIAFBAnRqIgA6AAAgAEEYdEEYdUF/aiIBQQF2IQAgAUEPS\n    w0BIAZBiD1qIAZBmCNqIABBwAFsahB/A0AgCEF/Rg0EIAhBywFLDQMgBkGIwABqIAZBmCNqIAZBuBVqIAhqLAAAEB8gCE\n    F/aiEIIAZBiD1qEBggBkGIPWoQGCAGQYg9aiAGQYjAAGoQDAwACwALQcwBQcwBQaSDwAAQPAALIABBCEHEg8AAEDwACyA\n    IQcwBQdSDwAAQPAALIAZBiD1qIAZByMQAahBzIAZBqANqIAZBiD1qQcABEGcaQX8hByAGQagDahCEAUUNASAGQegBahCm\n    AUEAIQcgBkHIzwBqQeAAEHIaIAUEQANAIAdB4ABGBEAgBiAGLQDIT0EfcToAyE8gBkHQ1QBqIAZByM8AahAhAkACQAJAI\n    AQsAAAiA0F/SgRAIARB4ABqIQAgBUHgACAFQeAASxtBoH9qIQFBACEHA0AgB0HgAEYEQCAGQZgjaiAGQcjPAGoQISAGQa\n    gDaiAGQdDVAGogBkGYI2oQPwwDCyABIAdGDQMgBkHIzwBqIAdqIAAgB2otAAA6AAAgB0EBaiEHDAALAAsgBkGYI2oQKiA\n    GQYjAAGpBOBByGiAGQQE2AsBAIAZBmCNqIAZB0NUAahCQASAGQZgkaiIBELABIAZBmCVqELABIAZBmCNqEKgBIAZB2NsA\n    aiAGQZgjahAmIAZBuBVqIAZB2NsAahBeIAZBuBVqEKYBIAZBuBVqIAZB2NsAahAPIAZBsAxqIAZBuBVqQcAAEGcaAkAgB\n    kGwDGogBkGIwABqEFxBAUcEQCAGQZgjahCYAQwBCyAGQdjbAGoQhwFFBEAgBkHIxABqIAZBmNwAaiIAEIUBIAZByMkAai\n    AGQdjbAGoQhQEgBkHIzABqIAZB2NsAahCFASAGQagGakE4EHIaIAZBATYC4AYgBkGwDGpBOBByGiAGQQE2AugMIAZByMQ\n    AahADIAZByMkAahADIAZByMQAaiAGQcjJAGoQeCAGQcjEAGoQRCAGQbgVaiAGQcjEAGogBkGIwABqECMgBkHIyQBqIAZB\n    uBVqEKUBIAZByMQAaiAGQcjJAGoQpQEgBkHIyQBqIAZB2NsAahClASAGQcjJAGogBkHIxABqEHggBkHIyQBqEEQgBkHIy\n    QBqEEIgBkHIxABqIAAQpQEgBkHIxABqEEIgBkHIyQBqIAZBsAxqEFwhAiAGQcjMAGogBkGwDGoQpQEgBkHIzABqEEEgBk\n    HIzABqEEQgBkGoBmogBkHIyQBqEKUBIAZBqAZqEEEgBkGoBmoQRCAGQcjJAGogBkGoBmpBASACayICEHkgBkGwDGogBkH\n    IzABqIAIQeSAGQbgVaiAGQcjJAGogBkGwDGoQIyAGQdjbAGogBkG4FWoQpQEgBkHIzABqIAZByMkAahClASAGQcjMAGog\n    BkGwDGoQNCAGQcjMAGogBkHY2wBqEEggACAGQcjMAGoQpQEgACAGQcjEAGoQSCAGQagGaiAGQdjbAGoQpQEgBkHY2wBqI\n    AAgAhB5IAAgBkGoBmogAhB5IAZB2NsAahCJASEAIAZBuBVqIAZB2NsAahBeIAZBuBVqEDogBkG4FWoQqAEgBkHY2wBqIA\n    ZBuBVqIAAQjwELIAZB2NsAahCJAQRAIAZB2NsAahA6CyAGQdjbAGoQqwEgASAGQdjbAGoQkAELQQAhAgJAIAEQhwENACA\n    GQdgkahBMIgINACABEEwhAgsgA0EgcUEFdiACQQFGRwRAIAZBmCNqEJwBCyAGQagDaiAGQZgjakGAAxBnGgsgBkHIyABq\n    QfCBwAAQXyAGQagDahCIAQ0FIAZBuBJqECogBkG4FWoQKiAGQdDVAGoQKiAGQdjbAGoQKiAGQZgjahAqIAZBuBhqIAZB0\n    NUAakGAAxBnIQ0gBkG4G2ogBkHY2wBqQYADEGchCSAGQbgeaiAGQZgjakGAAxBnIQAgBkHY2wBqQbiAwAAQXyAGQZgjak\n    HwgMAAEF8gBkGIwwBqIAZB2NsAaiAGQZgjahBJIAZBiMkAakHwgcAAEF9BACEHIAZBuCFqQTgQchogBkHwIWpBqAEQciE\n    DIAZBsAxqQfCBwAAQXyAGQcjPAGpBgIDAABBfIAZB4CJqIQEgBkGoImohDyAGQdDVAGogBkHIyABqEF8DQCAHQagBRg0C\n    IAZBuCFqIAdqIgIgBkHQ1QBqEGsgAiAGQcjPAGoQJCAHQThqIQcgBkHQ1QBqIAZByM8AahAcDAALAAsgB0HgAGogBUGwp\n    MAAEDwACyABIAZB0NUAahBrQQAhByAGQdjbAGpBOBByGiAGQZgjaiADIAZBsAxqEI0BIAZB2NsAaiAGQZgjahBrIAMgBk\n    HY2wBqEGsgBkGYI2ogASAGQbAMahCNASAGQdjbAGogBkGYI2oQayABIAZB2NsAahBrIAZBiD1qECogBkGIwwBqEEAgBkG\n    IwwBqEKgBIAZBmDtqQTgQchogBkG4FWogBkGoA2oQfgNAIAdBgAlGBEACQCAGQbgVaiECQQAhBwNAIAdB4AFHBEAgBkG4\n    IWogB2oiBBApIQUgBkGYI2ogBCAGQYjJAGoQjQEgBkGYO2ogBkGYI2oQayAGQZg7ahApIAVJBEAgBCAGQZg7ahBrIAIQn\n    AELIAQQRCAHQThqIQcgAkGAA2ohAgwBCwsgBkHIxABqECogBkGIwABqECogBkGYI2oQKiAGQcjJAGoQKiAGQcjMAGoQKi\n    AGQagGahAqIAZBsAxqECogBkHIzwBqECogBkHQ1QBqECogBkHY2wBqECogBkGYJmogBkHIyQBqQYADEGchAiAGQZgpaiA\n    GQcjMAGpBgAMQZyEEIAZBmCxqIAZBqAZqQYADEGchBSAGQZgvaiAGQbAMakGAAxBnIQsgBkGYMmogBkHIzwBqQYADEGch\n    CiAGQZg1aiAGQdDVAGpBgAMQZyEIIAZBmDhqIAZB2NsAakGAAxBnIQxBACEHIAZBqAZqQTgQchogBkGwDGogBkG4IWoQX\n    yAGQcjPAGogAxBfIAZB0NUAaiAPEF8gBkHY2wBqIAEQXyAGQegMaiAGQcjPAGpBOBBnGiAGQaANaiAGQdDVAGpBOBBnGi\n    AGQdgNaiAGQdjbAGpBOBBnGiAGQdDVAGpBlwMQchogBkHY2wBqQZcDEHIaA0AgB0HgAUYEQAJAIAZBmCNqIAZBuBVqEH4\n    gBkHIxABqIAZBmCNqEH4gAiAGQcjEAGoQfiACIA0QCyAEIAZByMQAahB+IAQgCRALIAZByMQAaiACEH4gBSAGQcjEAGoQ\n    fiAFIAkQCyAGQcjEAGogBkGYI2oQfiALIAZByMQAahB+IAsgABALIAZByMQAaiACEH4gCiAGQcjEAGoQfiAKIAAQCyAGQ\n    cjEAGogBBB+IAggBkHIxABqEH4gCCAAEAsgBkHIxABqIAUQfiAMIAZByMQAahB+IAwgABALIAZBsAxqQQEgBikDsAxCAo\n    GnayIFEJ0BIAZBsAxqEEQgBkGoBmoQdEEAIQAgBkGwDGohAgJAAkACQAJAA38gAEEERgR/IAZBqAZqECkiA0GXA08NAiA\n    DQQFqIQkgBkHY2wBqIANqQQE6AAAgBkHY2wBqIQggAwVBACEHA0AgB0E4RwRAIAZBqAZqIAdqIgEgASkDACACIAdqKQMA\n    hDcDACAHQQhqIQcMAQsLIAJBOGohAiAAQQFqIQAMAQsLIQcDQCAHBEAgBkGwDGpBARA7IAggBikDsAxCAoGnQQF0QX9qO\n    gAAIAdBf2ohByAIQQFqIQgMAQsLQQAhBwNAIAcgCUYEQCAGQYjAAGogBkGYI2ogBkHQ1QBqIANqLQAAQRl0QRh1QQFyEC\n    AgA0F/aiEHA0AgB0F/Rg0GIAZBiMAAahAUIAdBlgNLDQUgBkHIxABqIAZBmCNqIAZB2NsAaiAHai0AACAGQdDVAGogB2o\n    tAABBAXRqQRh0QRh1ECAgB0F/aiEHIAZBiMAAaiAGQcjEAGoQCwwACwALIAdBlwNGDQIgB0EBaiEBQQAhACAGQdDVAGog\n    B2oiC0EAOgAAIAZB2NsAaiAHai0AACEKQQEhAkE4IQcDQCAHQeABRgRAIAEhBwwCBSAGQbAMaiAHaiIEKQMAIRcgBEEBE\n    DsgBCAKIBdCAoGnbCIIQRh0QRl1EJ4BIAQQRCALIAAgAiAIbGoiADoAACAHQThqIQcgAkEBdCECDAELAAsACwALIANBlw\n    NBkKXAABA8AAtBlwNBlwNBoKXAABA8AAsgB0GXA0GwpcAAEDwACyAGQcjEAGogBkGIwABqEH4gBkHIzwBqECogBkHIzwB\n    qIAZBuBVqEH4gBkHIzwBqEJwBIAZByMQAaiAGQcjPAGoQCyAGQYjAAGogBkHIxABqIAUQbyAGQbgSaiAGQYjAAGoQfkF/\n    IQcgBkG4EmoQiAFFDQogBkG4EmoQOCAGQbgVakG4gMAAEF8gBkGYI2pB8IDAABBfIAZBmDtqIAZBuBVqIAZBmCNqEEkgB\n    kGYPGpBOBByGiAGQdA8akE4EHIaIAZBiD1qECogBkHoAWoQhAFFBEAgBkEoahCEAQ0BIAZBiMAAahAqIAZBiMAAaiAGQb\n    gSahB+IAZBiMAAahBKIAZBiMMAahBLIAZBiMMAaiAGQegBahB/IAZBiMMAahBHIAZByMQAahAqIAZByMQAaiAGQagDahB\n    +IAZByMQAahBKIAZBuCFqEEsgBkG4IWogBkEoahB/IAZBuCFqEEcgBkGYI2ogBkGIwwBqEIUBIAZByMcAaiAGQZgjahCF\n    ASAGQZgjaiAGQcjDAGoQhQEgBkGIyABqIAZBmCNqEIUBIAZBmCNqIAZBuCFqEIUBIAZByMgAaiAGQZgjahCFASAGQZgja\n    iAGQfghahCFASAGQYjJAGogBkGYI2oQhQEgBkHIyQBqECogBkHIzABqECogBkHQ1QBqEGAgBkHIyQBqIAZBiMAAahB+IA\n    ZByMwAaiAGQcjEAGoQfiAGQbAMahAqIAZBsAxqIAZBiMAAahB+IAZBsAxqEJwBIAZByM8AahAqIAZByM8AaiAGQcjEAGo\n    QfiAGQcjPAGoQnAEgBkHQPGogBkGYPGoQVEF/aiEHA0AgB0EBTQRAIAZB0NUAahCTASAGQagGaiAGQdDVAGpBiAYQZxoM\n    BgsgBkHQ1QBqEBsgBkHY2wBqIAZByMkAaiAGQcjHAGogBkGIyABqEBcgBkG4FWogBkHIzABqIAZByMgAaiAGQYjJAGoQF\n    yAGQdjbAGogBkG4FWoQBiAGQdDVAGogBkHY2wBqEAQCQAJAIAZB0DxqIAdBf2oiBxBXIAZBmDxqIAcQV2tBAWoOAwECAA\n    ILIAZB2NsAaiAGQcjJAGogBkGIwABqIAZByMcAaiAGQYjIAGoQFiAGQZgjaiAGQcjMAGogBkHIxABqIAZByMgAaiAGQYj\n    JAGoQFiAGQdjbAGogBkGYI2oQBiAGQdDVAGogBkHY2wBqEAQMAQsgBkHY2wBqIAZByMkAaiAGQbAMaiAGQcjHAGogBkGI\n    yABqEBYgBkGYI2ogBkHIzABqIAZByM8AaiAGQcjIAGogBkGIyQBqEBYgBkHY2wBqIAZBmCNqEAYgBkHQ1QBqIAZB2NsAa\n    hAEDAALAAsgBkGoBmogBkGoA2ogBkEoahAQDAMLBSAGQbAMaiAHahBEIAdBOGohBwwBCwsgBkGoBmogBkG4EmogBkHoAW\n    oQEAsFIAZBiD1qIAZBuBVqIAdqIgIQfiACQYADaiIEIAZBiD1qEH4gBkGYI2ogBkGIwwBqEF4gBkGYI2oQMiAEEKYBIAJ\n    BgARqIgUQpgEgAkGABWoiAhCmASACEKsBIAQgBkGYI2oQDyAFIAZBmCNqEA8gBSAGQYjDAGoQDyAHQYADaiEHDAELCyAG\n    QbgVakG4gMAAEF8gBkGYI2pB8IDAABBfIAZByMQAaiAGQbgVaiAGQZgjahBJIAZBiMAAakGAgMAAEF8gBkGwDGogBkGoB\n    moQaiAGQcjPAGogBkGwDGoQaiAGQdDVAGogBkHIzwBqEI4BIAZB2NsAaiAGQcjRAGoiARCOASAGQbgVaiAGQcjPAGoQjg\n    EgBkGYI2oQLyAGQcjPAGoQmQEgBkHQ1QBqECIgBkHY2wBqIAZByNMAaiIAEBkgBkHY2wBqEGYgBkHQ1QBqIAZB2NsAahC\n    BASAGQdDVAGoQrAEgBkHY2wBqIAAQkgEgBkHY2wBqECIgBkHY2wBqEGYgBkG4FWogARAZIAZB2NsAaiAGQbgVahCBASAG\n    QdjbAGoQrAEgBkG4FWogARCSASAGQbgVahAiIAZBmCNqIAZByM8AahCSASAGQZgjaiAAEBkgBkG4FWogBkGYI2oQgQEgB\n    kG4FWoQrAEgBkGYI2ogARCSASAGQZgjaiAGQbgVahAZIAZBmCNqEGYgBkHIzwBqIAZB0NUAahAZIAZBmCNqIAZByM8Aah\n    CWASAAIAZB2NsAahAZIAAQZiAGQZgjaiAAEJYBIAZBmCNqEKwBIAZByMkAaiAGQZgjahBeIAZByMwAaiAGQZgkaiICEF4\n    gBkHIyQBqEDIgBkHIzABqEDIgBkHIzABqEFUgBkHIzABqEKgBIAZByMkAaiAGQcjMAGoQfSAGQcjJAGoQQCAGQZgjaiAG\n    QcjJAGoQDyAGQcjJAGoQOiAGQcjJAGoQqAEgAiAGQcjJAGoQDyAGQcjPAGogBkHQ1QBqEJIBIAZByM8AaiAGQZgjahAZI\n    AEgBkHY2wBqEJIBIAEgBkGYI2oQGSAAIAZBuBVqEJIBIAAgBkGYI2oQGSAGQQU2AshVIAZBsAxqEJMBIAZBsAxqIAZByM\n    8AahAOIAZByM8AaiAGQbAMahBsIAZBsAxqIAZByMQAahA3IAZBsAxqIAZByMQAahA3IAZBsAxqIAZByM8AahAOIAZB0NU\n    AaiAGQbAMahBqIAZB0NUAahAaIAZB0NUAaiAGQbAMahAOIAZBmCNqIAZBsAxqIAZBiMAAahAdIAZB2NsAaiAGQZgjahBq\n    IAZB2NsAahCTASAGQbgVaiAGQbAMahBqIAZBuBVqEJMBIAZBsAxqIAZB2NsAahBsIAZBsAxqIAZBuBVqEA4gBkGYI2ogB\n    kGwDGogBkGIwABqEB0gBkHY2wBqIAZBmCNqEGwgBkHY2wBqEJMBIAZBuBVqIAZBsAxqEGwgBkG4FWoQkwEgBkGwDGogBk\n    HY2wBqEGwgBkGwDGogBkG4FWoQDiAGQZgjaiAGQbAMaiAGQYjAAGoQHSAGQdjbAGogBkGYI2oQbCAGQdjbAGoQkwEgBkG\n    4FWogBkGwDGoQbCAGQbgVaiAGQcjEAGoQNyAGQbAMaiAGQdjbAGoQbCAGQbAMaiAGQbgVahAOIAZBmCNqIAZBsAxqIAZB\n    iMAAahAdIAZB2NsAaiAGQZgjahBsIAZBmCNqIAZB2NsAaiAGQYjAAGoQHSAGQdjbAGogBkGYI2oQbCAGQbgVaiAGQbAMa\n    hBsIAZBuBVqIAZByMQAahA3IAZBuBVqIAZByMQAahA3IAZB2NsAaiAGQbgVahAOIAZBuBVqIAZBsAxqEGwgBkG4FWoQkw\n    EgBkGwDGogBkHY2wBqEGwgBkGwDGogBkG4FWoQDiAGQbAMaiAGQdDVAGoQDiAGQbAMahCaASAGQagGaiAGQbAMakGIBhB\n    nGiAGQZgjahBuIAZBqAZqIAZBmCNqEHtFDQMgBkGoB2ogAhB7RQ0DIAZBqAhqEIYBRQ0DQQAhByAGQagKahCGAUUNAwwE\n    CyAFIAdHBEAgBkHIzwBqIAdqIAQgB2otAAA6AAAgB0EBaiEHDAELCyAFIAVBoKTAABA8AAtBAEEAQZCkwAAQPAALQX8hB\n    wsgBkHg4QBqJAAgBw8LQQAhByAGQbAMakE4EHIaA0AgB0E4RwRAIAZBsAxqIAdqIAZByM8AaiAHaikDADcDACAHQQhqIQ\n    cMAQsLIAZBmCNqIAZBsAxqEIsBIAZBqANqIAlBBnRqIAZBmCNqQcAAEGcaIAMgCmohAyALIQkMAAsACyAHIAlqIQkgAiE\n    DDAALAAtBK0EBQaS5wQAoAgAiAEEBIAAbEQAAAAvBKgIIfwF+AkACQAJAAkAgAEH1AU8EQCAAQc3/e08NAiAAQQtqIgBB\n    eHEhBkHYtcEAKAIAIgdFDQFBHyEIQQAgBmshBQJAAkAgBkH///8HTQRAIAZBBiAAQQh2ZyIAa0EfcXZBAXEgAEEBdGtBP\n    mohCAsgCEECdEHkt8EAaigCACIABEAgBkEAQRkgCEEBdmtBH3EgCEEfRht0IQMDQAJAIABBBGooAgBBeHEiBCAGSQ0AIA\n    QgBmsiBCAFTw0AIAAhAiAEIgUNAEEAIQUMAwsgAEEUaigCACIEIAEgBCAAIANBHXZBBHFqQRBqKAIAIgBHGyABIAQbIQE\n    gA0EBdCEDIAANAAsgAQRAIAEhAAwCCyACDQILQQAhAkECIAhBH3F0IgBBACAAa3IgB3EiAEUNAyAAQQAgAGtxaEECdEHk\n    t8EAaigCACIARQ0DCwNAIAAgAiAAQQRqKAIAQXhxIgEgBk8gASAGayIDIAVJcSIEGyECIAMgBSAEGyEFIAAoAhAiAQR/I\n    AEFIABBFGooAgALIgANAAsgAkUNAgtB5LjBACgCACIAIAZPQQAgBSAAIAZrTxsNASACKAIYIQcCQAJAIAIgAigCDCIBRg\n    RAIAJBFEEQIAJBFGoiAygCACIBG2ooAgAiAA0BQQAhAQwCCyACKAIIIgAgATYCDCABIAA2AggMAQsgAyACQRBqIAEbIQM\n    DQCADIQQgACIBQRRqIgMoAgAiAEUEQCABQRBqIQMgASgCECEACyAADQALIARBADYCAAsCQCAHRQ0AAkAgAiACKAIcQQJ0\n    QeS3wQBqIgAoAgBHBEAgB0EQQRQgBygCECACRhtqIAE2AgAgAUUNAgwBCyAAIAE2AgAgAQ0AQdi1wQBB2LXBACgCAEF+I\n    AIoAhx3cTYCAAwBCyABIAc2AhggAigCECIABEAgASAANgIQIAAgATYCGAsgAkEUaigCACIARQ0AIAFBFGogADYCACAAIA\n    E2AhgLAkAgBUEQTwRAIAIgBkEDcjYCBCACIAZqIgcgBUEBcjYCBCAFIAdqIAU2AgAgBUGAAk8EQEEfIQAgB0IANwIQIAV\n    B////B00EQCAFQQYgBUEIdmciAGtBH3F2QQFxIABBAXRrQT5qIQALIAcgADYCHCAAQQJ0QeS3wQBqIQQCQAJAAkACQEHY\n    tcEAKAIAIgNBASAAQR9xdCIBcQRAIAQoAgAiA0EEaigCAEF4cSAFRw0BIAMhAAwCC0HYtcEAIAEgA3I2AgAgBCAHNgIAI\n    AcgBDYCGAwDCyAFQQBBGSAAQQF2a0EfcSAAQR9GG3QhAQNAIAMgAUEddkEEcWpBEGoiBCgCACIARQ0CIAFBAXQhASAAIQ\n    MgAEEEaigCAEF4cSAFRw0ACwsgACgCCCIBIAc2AgwgACAHNgIIIAdBADYCGCAHIAA2AgwgByABNgIIDAQLIAQgBzYCACA\n    HIAM2AhgLIAcgBzYCDCAHIAc2AggMAgsgBUEDdiIBQQN0Qdy1wQBqIQACf0HUtcEAKAIAIgNBASABdCIBcQRAIAAoAggM\n    AQtB1LXBACABIANyNgIAIAALIQUgACAHNgIIIAUgBzYCDCAHIAA2AgwgByAFNgIIDAELIAIgBSAGaiIAQQNyNgIEIAAgA\n    moiACAAKAIEQQFyNgIECyACQQhqDwsCQAJAQdS1wQAoAgAiB0EQIABBC2pBeHEgAEELSRsiBkEDdiIBdiICQQNxRQRAIA\n    ZB5LjBACgCAE0NAyACDQFB2LXBACgCACIARQ0DIABBACAAa3FoQQJ0QeS3wQBqKAIAIgFBBGooAgBBeHEgBmshBSABIQM\n    DQCABKAIQIgBFBEAgAUEUaigCACIARQ0ECyAAQQRqKAIAQXhxIAZrIgIgBSACIAVJIgIbIQUgACADIAIbIQMgACEBDAAL\n    AAsCQCACQX9zQQFxIAFqIgVBA3QiAEHktcEAaigCACIDQQhqIgIoAgAiASAAQdy1wQBqIgBHBEAgASAANgIMIAAgATYCC\n    AwBC0HUtcEAIAdBfiAFd3E2AgALIAMgBUEDdCIAQQNyNgIEIAAgA2oiACAAKAIEQQFyNgIEIAIPCwJAQQIgAXQiAEEAIA\n    BrciACIAF0cSIAQQAgAGtxaCIBQQN0IgBB5LXBAGooAgAiA0EIaiIEKAIAIgIgAEHctcEAaiIARwRAIAIgADYCDCAAIAI\n    2AggMAQtB1LXBACAHQX4gAXdxNgIACyADIAZBA3I2AgQgAyAGaiIFIAFBA3QiACAGayIHQQFyNgIEIAAgA2ogBzYCAEHk\n    uMEAKAIAIgAEQCAAQQN2IgJBA3RB3LXBAGohAEHsuMEAKAIAIQgCf0HUtcEAKAIAIgFBASACQR9xdCICcQRAIAAoAggMA\n    QtB1LXBACABIAJyNgIAIAALIQMgACAINgIIIAMgCDYCDCAIIAA2AgwgCCADNgIIC0HsuMEAIAU2AgBB5LjBACAHNgIAIA\n    QPCyADKAIYIQcCQAJAIAMgAygCDCIBRgRAIANBFEEQIANBFGoiASgCACICG2ooAgAiAA0BQQAhAQwCCyADKAIIIgAgATY\n    CDCABIAA2AggMAQsgASADQRBqIAIbIQIDQCACIQQgACIBQRRqIgIoAgAiAEUEQCABQRBqIQIgASgCECEACyAADQALIARB\n    ADYCAAsgB0UNAyADIAMoAhxBAnRB5LfBAGoiACgCAEcEQCAHQRBBFCAHKAIQIANGG2ogATYCACABRQ0EDAMLIAAgATYCA\n    CABDQJB2LXBAEHYtcEAKAIAQX4gAygCHHdxNgIADAMLAkACQAJAAkACQEHkuMEAKAIAIgEgBkkEQEHouMEAKAIAIgAgBk\n    sNA0EAIQUgBkGvgARqIgJBEHZAACIAQX9GDQYgAEEQdCIDRQ0GQfS4wQAgAkGAgHxxIgVB9LjBACgCAGoiAjYCAEH4uME\n    AQfi4wQAoAgAiACACIAAgAksbNgIAQfC4wQAoAgAiBEUNAUH8uMEAIQADQCAAKAIAIgEgACgCBCICaiADRg0DIAAoAggi\n    AA0ACwwEC0HsuMEAKAIAIQMCfyABIAZrIgJBD00EQEHsuMEAQQA2AgBB5LjBAEEANgIAIAMgAUEDcjYCBCABIANqIgJBB\n    GohACACKAIEQQFyDAELQeS4wQAgAjYCAEHsuMEAIAMgBmoiADYCACAAIAJBAXI2AgQgASADaiACNgIAIANBBGohACAGQQ\n    NyCyEGIAAgBjYCACADQQhqDwtBkLnBACgCACIAQQAgACADTRtFBEBBkLnBACADNgIAC0GUucEAQf8fNgIAQYC5wQAgBTY\n    CAEH8uMEAIAM2AgBB6LXBAEHctcEANgIAQfC1wQBB5LXBADYCAEHktcEAQdy1wQA2AgBB+LXBAEHstcEANgIAQey1wQBB\n    5LXBADYCAEGAtsEAQfS1wQA2AgBB9LXBAEHstcEANgIAQYi2wQBB/LXBADYCAEH8tcEAQfS1wQA2AgBBkLbBAEGEtsEAN\n    gIAQYS2wQBB/LXBADYCAEGYtsEAQYy2wQA2AgBBjLbBAEGEtsEANgIAQaC2wQBBlLbBADYCAEGUtsEAQYy2wQA2AgBBiL\n    nBAEEANgIAQai2wQBBnLbBADYCAEGctsEAQZS2wQA2AgBBpLbBAEGctsEANgIAQbC2wQBBpLbBADYCAEGstsEAQaS2wQA\n    2AgBBuLbBAEGstsEANgIAQbS2wQBBrLbBADYCAEHAtsEAQbS2wQA2AgBBvLbBAEG0tsEANgIAQci2wQBBvLbBADYCAEHE\n    tsEAQby2wQA2AgBB0LbBAEHEtsEANgIAQcy2wQBBxLbBADYCAEHYtsEAQcy2wQA2AgBB1LbBAEHMtsEANgIAQeC2wQBB1\n    LbBADYCAEHctsEAQdS2wQA2AgBB6LbBAEHctsEANgIAQfC2wQBB5LbBADYCAEHktsEAQdy2wQA2AgBB+LbBAEHstsEANg\n    IAQey2wQBB5LbBADYCAEGAt8EAQfS2wQA2AgBB9LbBAEHstsEANgIAQYi3wQBB/LbBADYCAEH8tsEAQfS2wQA2AgBBkLf\n    BAEGEt8EANgIAQYS3wQBB/LbBADYCAEGYt8EAQYy3wQA2AgBBjLfBAEGEt8EANgIAQaC3wQBBlLfBADYCAEGUt8EAQYy3\n    wQA2AgBBqLfBAEGct8EANgIAQZy3wQBBlLfBADYCAEGwt8EAQaS3wQA2AgBBpLfBAEGct8EANgIAQbi3wQBBrLfBADYCA\n    EGst8EAQaS3wQA2AgBBwLfBAEG0t8EANgIAQbS3wQBBrLfBADYCAEHIt8EAQby3wQA2AgBBvLfBAEG0t8EANgIAQdC3wQ\n    BBxLfBADYCAEHEt8EAQby3wQA2AgBB2LfBAEHMt8EANgIAQcy3wQBBxLfBADYCAEHgt8EAQdS3wQA2AgBB1LfBAEHMt8E\n    ANgIAQfC4wQAgAzYCAEHct8EAQdS3wQA2AgBB6LjBACAFQVhqIgA2AgAgAyAAQQFyNgIEIAAgA2pBKDYCBEGMucEAQYCA\n    gAE2AgAMAwsgAEEMaigCACADIARNciABIARLcg0BIAAgAiAFajYCBEHwuMEAQfC4wQAoAgAiA0EPakF4cSIBQXhqNgIAQ\n    ei4wQBB6LjBACgCACAFaiICIAMgAWtqQQhqIgA2AgAgAUF8aiAAQQFyNgIAIAIgA2pBKDYCBEGMucEAQYCAgAE2AgAMAg\n    tB6LjBACAAIAZrIgI2AgBB8LjBAEHwuMEAKAIAIgEgBmoiADYCACAAIAJBAXI2AgQgASAGQQNyNgIEIAFBCGohBQwCC0G\n    QucEAQZC5wQAoAgAiACADIAAgA0kbNgIAIAMgBWohAUH8uMEAIQACQANAIAEgACgCAEcEQCAAKAIIIgANAQwCCwsgAEEM\n    aigCAA0AIAAgAzYCACAAIAAoAgQgBWo2AgQgAyAGQQNyNgIEIAMgBmohBCABIANrIAZrIQYCQAJAIAFB8LjBACgCAEcEQ\n    EHsuMEAKAIAIAFGDQEgAUEEaigCACIAQQNxQQFGBEAgASAAQXhxIgAQFSAAIAZqIQYgACABaiEBCyABIAEoAgRBfnE2Ag\n    QgBCAGQQFyNgIEIAQgBmogBjYCACAGQYACTwRAQR8hBSAEQgA3AhAgBkH///8HTQRAIAZBBiAGQQh2ZyIAa0EfcXZBAXE\n    gAEEBdGtBPmohBQsgBCAFNgIcIAVBAnRB5LfBAGohAQJAAkACQAJAQdi1wQAoAgAiAkEBIAVBH3F0IgBxBEAgASgCACIC\n    QQRqKAIAQXhxIAZHDQEgAiEFDAILQdi1wQAgACACcjYCACABIAQ2AgAgBCABNgIYDAMLIAZBAEEZIAVBAXZrQR9xIAVBH\n    0YbdCEBA0AgAiABQR12QQRxakEQaiIAKAIAIgVFDQIgAUEBdCEBIAUiAkEEaigCAEF4cSAGRw0ACwsgBSgCCCIAIAQ2Ag\n    wgBSAENgIIIARBADYCGCAEIAU2AgwgBCAANgIIDAULIAAgBDYCACAEIAI2AhgLIAQgBDYCDCAEIAQ2AggMAwsgBkEDdiI\n    CQQN0Qdy1wQBqIQACf0HUtcEAKAIAIgFBASACdCICcQRAIAAoAggMAQtB1LXBACABIAJyNgIAIAALIQUgACAENgIIIAUg\n    BDYCDCAEIAA2AgwgBCAFNgIIDAILQfC4wQAgBDYCAEHouMEAQei4wQAoAgAgBmoiADYCACAEIABBAXI2AgQMAQtB7LjBA\n    CAENgIAQeS4wQBB5LjBACgCACAGaiIANgIAIAQgAEEBcjYCBCAAIARqIAA2AgALIANBCGoPC0H8uMEAIQADQAJAIAAoAg\n    AiAiAETQRAIAIgACgCBGoiAiAESw0BCyAAKAIIIQAMAQsLQfC4wQAgAzYCAEHouMEAIAVBWGoiADYCACADIABBAXI2AgQ\n    gACADakEoNgIEQYy5wQBBgICAATYCACAEIAJBYGpBeHFBeGoiACAAIARBEGpJGyIBQRs2AgRB/LjBACkCACEJIAFBEGpB\n    hLnBACkCADcCACABIAk3AghBgLnBACAFNgIAQfy4wQAgAzYCAEGEucEAIAFBCGo2AgBBiLnBAEEANgIAIAFBHGohAANAI\n    ABBBzYCACACIABBBGoiAEsNAAsgASAERg0AIAEgASgCBEF+cTYCBCAEIAEgBGsiBUEBcjYCBCABIAU2AgAgBUGAAk8EQE\n    EfIQAgBEIANwIQIAVB////B00EQCAFQQYgBUEIdmciAGtBH3F2QQFxIABBAXRrQT5qIQALIARBHGogADYCACAAQQJ0QeS\n    3wQBqIQMCQAJAAkACQEHYtcEAKAIAIgFBASAAQR9xdCICcQRAIAMoAgAiAkEEaigCAEF4cSAFRw0BIAIhAAwCC0HYtcEA\n    IAEgAnI2AgAgAyAENgIAIARBGGogAzYCAAwDCyAFQQBBGSAAQQF2a0EfcSAAQR9GG3QhAQNAIAIgAUEddkEEcWpBEGoiA\n    ygCACIARQ0CIAFBAXQhASAAIQIgAEEEaigCAEF4cSAFRw0ACwsgACgCCCICIAQ2AgwgACAENgIIIARBGGpBADYCACAEIA\n    A2AgwgBCACNgIIDAMLIAMgBDYCACAEQRhqIAI2AgALIAQgBDYCDCAEIAQ2AggMAQsgBUEDdiICQQN0Qdy1wQBqIQACf0H\n    UtcEAKAIAIgFBASACdCICcQRAIAAoAggMAQtB1LXBACABIAJyNgIAIAALIQEgACAENgIIIAEgBDYCDCAEIAA2AgwgBCAB\n    NgIIC0EAIQVB6LjBACgCACIAIAZNDQBB6LjBACAAIAZrIgI2AgBB8LjBAEHwuMEAKAIAIgEgBmoiADYCACAAIAJBAXI2A\n    gQgASAGQQNyNgIEIAFBCGoPCyAFDwsgASAHNgIYIAMoAhAiAARAIAEgADYCECAAIAE2AhgLIANBFGooAgAiAEUNACABQR\n    RqIAA2AgAgACABNgIYCwJAIAVBEE8EQCADIAZBA3I2AgQgAyAGaiIEIAVBAXI2AgQgBCAFaiAFNgIAQeS4wQAoAgAiAAR\n    AIABBA3YiAkEDdEHctcEAaiEAQey4wQAoAgAhBwJ/QdS1wQAoAgAiAUEBIAJBH3F0IgJxBEAgACgCCAwBC0HUtcEAIAEg\n    AnI2AgAgAAshAiAAIAc2AgggAiAHNgIMIAcgADYCDCAHIAI2AggLQey4wQAgBDYCAEHkuMEAIAU2AgAMAQsgAyAFIAZqI\n    gBBA3I2AgQgACADaiIAIAAoAgRBAXI2AgQLIANBCGoLtA8BA38jAEGAC2siAiQAIAJBCGoQSyACQcgBakE4EHIaIAJBAT\n    YCgAIgAkGIAmpBOBByGiACQQE2AsACIAJByAJqQTgQchogAkEBNgKAAyACQYgDakE4EHIaIAJBATYCwAMgAkHIA2pBOBB\n    yGiACQQE2AoAEIAJBiARqQQEQigEgAkHIBGpBOBByGiACQQE2AoAFIAJBiAVqQTgQchogAkEBNgLABSACQcgFaiABEIUB\n    IAJBiAZqQTgQchogAkEBNgLABiACQcgGakE4EHIaIAJBATYCgAcgAkGIB2pBOBByGiACQQE2AsAHIAJByAdqQTgQchogA\n    kEBNgKACCACQcgFahBYIQMgAkHICWpB4ITAABBfIAJBiApqIAJByAlqEIsBIAJByAFqIAJBiApqEKUBIAJByAlqQZiFwA\n    AQXyACQYgKaiACQcgJahCLASACQYgCaiACQYgKahClASACQcgFahADIAJByAVqQQsQUiACQYgGaiACQcgFahClASACQYg\n    GaiACQYgEahB4IAJBiAZqEEQgAkGIBmogAkHIBWoQSCACQYgFaiACQcgBahClASACQYgFaiACQYgGahBIIAJBiAZqIAJB\n    iARqEHggAkGIBmoQRCACQYgGaiACQYgCahBIIAJBiAZqEEEgAkGIBmoQRCACQYgDaiACQYgGahClASACQcgDaiACQcgFa\n    hClASACQcgDaiACQYgDahBIIAJByAdqIAJBiANqEKUBIAJByAdqEAMgAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgGai\n    ACQcgBahClASACQYgGaiACQcgGahBIIAJByAdqIAJBiAZqEHggAkHIB2oQRCACQcgHaiACQYgDahBIIAJByAZqIAJBiAV\n    qEEggAkGIBmogAkGIAmoQpQEgAkGIBmogAkHIBmoQSCACQcgHaiACQYgGahB4IAJByAdqEEQgAkGIBmogAkHIB2oQpQEg\n    AkGIBmogAkGIBWoQSCACQYgGaiACQYgHahBcIQQgAkGIBWogAkGIBmoQpQEgAkGIBWogAkGIB2oQNCACQYgFaiACQcgHa\n    hBIIAJBiANqIAJBiAVqEEggAkHIA2ogAkGIBWoQSCACQcgFaiABEEggAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgFai\n    ACQcgGahClASACQYgFaiACQcgFahBIIAJByAVqIAJBiAZqEKUBIAJByAVqQQsQUiACQcgJakHQhcAAEF8gAkGICmogAkH\n    ICWoQiwEgAkHIAmogAkGICmoQpQEgAkHIAmogAkGIB2oQSCACQYgDaiACQcgDakEBIARrIgEQeSACQcgGaiACQYgFaiAB\n    EHkgAkGIBmogAkHIBWogARB5IAJBiAdqIAJByAJqIAEQeSACQYgKaiACQYgGaiACQYgHahAjIAJByARqIAJBiApqEKUBI\n    AJByARqIAJByAZqEEggAkHIBGoQWCEBIAJBiAZqIAJByARqEKUBIAJBiAZqEEEgAkGIBmoQRCACQcgEaiACQYgGaiABIA\n    NzEHkgAkGICmpBiIbAABBfIAJBiAhqIAJBiApqEIsBQTghAQNAIAFBoAVGRQRAIAJBiAhqIAJBiANqEEggAkHICWogAUG\n    IhsAAahBfIAFBOGohASACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQYgIaiACQYgGahB4IAJBiAhqEEQMAQsL\n    IAJByAhqIAJBiANqEIUBIAJByAlqQaiLwAAQXyACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQcgIaiACQYgGa\n    hB4IAJByAhqEERBACEBA0AgAUH4A0ZFBEAgAkHICGogAkGIA2oQSCACQcgJaiABQeCLwABqEF8gAUE4aiEBIAJBiApqIA\n    JByAlqEIsBIAJBiAZqIAJBiApqEKUBIAJByAhqIAJBiAZqEHggAkHICGoQRAwBCwsgAkGICmpB2I/AABBfIAJBiAlqIAJ\n    BiApqEIsBQQAhAQNAIAFByAZGBEACQCACQcgJaiACQYgDahCFASACQcgKakHYlsAAEF8gAkGICmogAkHICmoQiwEgAkGI\n    BmogAkGICmoQpQEgAkHICWogAkGIBmoQeCACQcgJahBEQQAhAQNAIAFBkAZGDQEgAkHICWogAkGIA2oQSCACQcgKaiABQ\n    ZCXwABqEF8gAUE4aiEBIAJBiApqIAJByApqEIsBIAJBiAZqIAJBiApqEKUBIAJByAlqIAJBiAZqEHggAkHICWoQRAwACw\n    ALBSACQYgJaiACQYgDahBIIAJByAlqIAFBkJDAAGoQXyABQThqIQEgAkGICmogAkHICWoQiwEgAkGIBmogAkGICmoQpQE\n    gAkGICWogAkGIBmoQeCACQYgJahBEDAELCyACQYgJaiACQcgEahBIIAJBiAZqIAJBiAhqEKUBIAJBiAZqIAJByAlqEEgg\n    AkEIaiACQYgGahClASACQYgGaiACQYgJahClASACQYgGaiACQcgIahBIIAJByABqIAJBiAZqEKUBIAJBiAZqIAJByAhqE\n    KUBIAJBiAZqIAJByAlqEEggAkGIAWogAkGIBmoQpQEgACACQQhqQcABEGcaIAJBgAtqJAALzQ0CE38IfiMAQYADayIBJA\n    AgADQCOCIUIBR+QoCAgBBaBEAgABASCyABQeABakHoABByGiABQcgBaiAAKQMAIhggGEI/hyIZIBggGRAxIAEgASkDyAE\n    iFEL//////////wODNwPYASABQdABaikDACIXQgaGIBRCOoiEIRUgF0I6iCEaIABBCGoiCyEFIAAhBkEBIQcDQCAHQQZP\n    BEAgAEEYaiEMIABBKGohCyAAQRBqIQcgACkDMCEYQQQhBkEAIQkgAUGgAWohDUEDIQpBAiEIQQchBQJAAkADQCAFQQpLD\n    QIgBiAIIAYgCEsbIQ4gBiAKIAYgCksbQQN0QWhqIQ8gAUGYAWogBUEDdCIQIABqQVBqKQMAIhQgFEI/hyAYIBhCP4ciGR\n    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\n    OBByGiACQQE2AvgMIAJBgA1qQTgQchogAkG4DWpBATYCACACQYAIakE4EHIaIAJBATYCuAggAkHACGpBOBByGiACQfgIa\n    kEBNgIAIAJBgApqIABBgANqIgMQXiACQYAIaiACQYAKahCQASACQYAKaiABQYADaiIFEF4gAkGACGogAkGACmoQDyACQc\n    AMahCpASAERQRAIAJBgApqIAMQXiACQcAMaiACQYAKahCQASACQYAKaiABQYACahBeIAJBwAxqIAJBgApqEA8LIAAoAoA\n    GQQRHBEAgAkGACmogAEGAAmoQXiACQcAMaiACQYAKahCQASACQYAKaiAFEF4gAkHADGogAkGACmoQDwsgAkGABGogAkHA\n    DGogAkGACGoQoQEgAkGABGoQZgsgAkGACGogABCOASACQYAKaiABEI4BIAJBgAhqIABBgAJqIgQQlgEgAkGACGoQrAEgA\n    kGACmogAUGAAmoiBRCWASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAQQkgEgAkGACG\n    ogAEGABGoiAxCWASACQYAIahCsASACQYAKaiAFEJIBIAJBgApqIAFBgARqIgUQlgEgAkGACmoQrAEgAkGABmogAkGACGo\n    QkgEgAkGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAI\n    ahCWASAEIAJBgAJqEJIBIAQgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQ\n    YAIaiADEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBRCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIA\n    JBgAhqEJYBIAJBgAhqIAMQkgEgAkGACGogBRAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgAyACQYAEahCSASADIAJBgAp\n    qEJYBIAJBgAZqIAJBgApqEJYBIAJBgAhqEGYgBCACQYAIahCWAQwDCyAAIAEQBgwECyACQcAMaiABQYAFahBeIAJBgAxq\n    IAJBwAxqQcAAEGcaIAJBgAZqIAJBgAxqEKMBCyACQYAGahBmIAJBgAhqIAIQkgEgAkGACGoQKyACQYACaiACQYAIahCWA\n    SAFIAJBgAJqEJIBIAJBgARqIAJBgAhqEJIBIAJBgAhqIAAQkgEgAkGACGogAxCWASACQYAIahCsASACQYAKaiABEJIBIA\n    JBgApqIAFBgARqEJYBIAJBgApqEKwBIAJBgAhqIAJBgApqEBkgAkGABGogAkGACGoQlgEgAkGACGogAxCSAQJAIARBAkc\n    EQCACQcAMaiABQYAFahBeIAJBgAhqIAJBwAxqEKIBDAELIAJBwAxqIAFBgAVqEF4gAkGADGogAkHADGpBwAAQZxogAkGA\n    CGogAkGADGoQowELIAJBgAhqEGYgAkGACmogAkGACGoQkgEgAkGACmoQKyADIAJBgARqEJIBIAMgAkGACmoQlgEgAkGAB\n    mogAkGACmoQlgEgAkGACGoQZiAFIAJBgAhqEJYBCyACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIABBBT\n    YCgAYgABCZAQwBCyAAIAEQbAsgAkHADWokAAuaCQIPfwt+IwBBwAJrIgIkACACQeAAakGgp8AAEF8gAEE4EHIhDCACQZg\n    BakHwABByGiACQZACakEwEHIaIAwQdCACIAEpAwAiFEL9//P/z///+QF+Qv//////////A4MiETcDiAIgAkHQAGogEUIA\n    IAIpA2AiGCAYQj+HIhoQMSAUIAIpA1AiEXwiFiARVK0gAkHYAGopAwAgFEI/h3x8IhRCOocgASkDCCIRQj+HfCARIBRCB\n    oYgFkI6iIQiEXwiEiARVK18IRNBASEDAkADQAJAIANBB0YEQCACQZACaiEJIAJB6ABqIQpBByEEIAJB4ABqIQ0gAkGIAm\n    ohDkEGIQ8MAQsgA0EBdiIAQQFqIQUgCiAAayEGIAkgAEEDdCIHayEAIAdBCGohCCACQUBrIANBA3QiBCACQeAAamopAwA\n    iFiAWQj+HIhQgAikDiAIiESARQj+HEDEgAkHIAGopAwAgEiAVfCIRIBJUrSATIBd8fHwgESACKQNAfCITIBFUrXwhEiAD\n    QQFqIQcDQCADIAVNBEAgAkGIAmogBGogE0L9//P/z///+QF+Qv//////////A4MiETcDACACQTBqIBFCACAYIBoQMSACQ\n    SBqIBFCACAWIBQQMSACQZgBaiADQQR0aiIAIAJBKGopAwAiGzcDCCAAIAIpAyAiGTcDACACKQMwIhEgE3wiFiARVK0gAk\n    E4aikDACASfHwiFEI6hyABIAdBA3RqKQMAIhFCP4d8IBEgFEIGhiAWQjqIhCIRfCISIBFUrXwhEyAVIBl8IhUgGVStIBc\n    gG3x8IRcgCUEIaiEJIApBAWohCiAHIQMMAwsgBkEGSw0DIAJBEGogAkHgAGogCGopAwAgAkHgAGogAGopAwB9IhEgEUI/\n    hyACQYgCaiAAaikDACACQYgCaiAIaikDAH0iESARQj+HEDEgAikDECIRIBN8IhMgEVStIAJBGGopAwAgEnx8IRIgBUEBa\n    iEFIABBeGohACAGQX9qIQYgCEEIaiEIDAALAAsLA0ACQCAEQQ1HBEAgDyAEQQF2IgBrIQUgDiAAQQN0IgtrIRAgDSALay\n    EIIBMgF3wgEiAVfCITIBJUrXwhEiAEQQFqIQdBMCEAIAkhBiAKIQMDQCAAIAtGDQIgBUEGTQRAIAIgAyALaikDACAAIAh\n    qKQMAfSIRIBFCP4cgACAQaikDACAGIAtqKQMAfSIRIBFCP4cQMSACKQMAIhEgE3wiEyARVK0gAkEIaikDACASfHwhEiAF\n    QX9qIQUgBkEIaiEGIANBCGohAyAAQXhqIQAMAQsLIAVBB0HknsAAEDwACyAMIBJC//////////8DgzcDMCACQcACaiQAD\n    wsgBEEDdCAMakFIaiATQv//////////A4M3AwAgEkI6hyABIAdBA3RqKQMAIhFCP4d8IBEgEkIGhiATQjqIhCIRfCISIB\n    FUrXwhEyAXIARBBHQgAmpBOGoiAEEIaikDAH0gFSAAKQMAIhFUrX0hFyAOQQhqIQ4gDUEIaiENIA9BAWohDyAVIBF9IRU\n    gByEEDAALAAsgBkEHQdSewAAQPAAL+QkBBH8jAEGACWsiAiQAIAJBgAhqIAAQXiACIAJBgAhqEF4gAkGACGogAEGAAWoi\n    BBBeIAJBgAFqIAJBgAhqEF4gAkGACGogARBeIAIgAkGACGoQDyACQYAIaiABQYABaiIFEF4gAkGAAWogAkGACGoQDyAAK\n    AKABiEDAkACQCABKAKABkECRwRAIANBAkYNASACQYAIaiAAQYAFahBeIAJBgAJqIAJBgAhqEF4gAkGACGogAUGABWoQXi\n    ACQYACaiACQYAIahAPDAILIANBAkYEQCACQYAIaiAAQYAFahBeIAJBgAdqIAJBgAhqQcAAEGcaIAJBgAZqIAJBgAdqEIU\n    BIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGABmogAkGAB2oQSCACQYAIakE4EHIaIAJBATYCuAggAkHA\n    CGpBOBByIAJB+AhqQQE2AgAgAkGACGogAkGABmoQpQEQsgEgAkGAAmogAkGACGpBgAEQZxoMAgsgAkGACGogAEGABWoQX\n    iACQYACaiACQYAIahBeIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAEMAQsgAkGACG\n    ogAUGABWoQXiACQYACaiACQYAIahBeIAJBgAhqIABBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAE\n    LIAJBgAhqIAAQXiACQYADaiACQYAIahBeIAJBgAhqIAEQXiACQYAEaiACQYAIahBeIAJBgAhqIAQQXiACQYADaiACQYAI\n    ahCVASACQYADahCoASACQYAIaiAFEF4gAkGABGogAkGACGoQlQEgAkGABGoQqAEgAkGABWogAkGAA2oQXiACQYAFaiACQ\n    YAEahAPIAJBgAZqIAIQXiACQYAGaiACQYABahCVASACQYAGahA6IAJBgAVqIAJBgAZqEJUBIAJBgAhqIAAQXiACQYADai\n    ACQYAIahCQASACQYAIaiAAQYAFaiIDEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogARBeIAJBgARqIAJBgAh\n    qEJABIAJBgAhqIAFBgAVqIgEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAHaiACQYADahBeIAJBgAdqIAJBgARq\n    EA8gAkGABmogAhCQASACQYAGaiACQYACahCVASACQYAGahA6IAJBgAdqIAJBgAZqEJUBIAJBgAhqIAQQXiACQYADaiACQ\n    YAIahCQASACQYAIaiADEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogBRBeIAJBgARqIAJBgAhqEJABIAJBgA\n    hqIAEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAIaiACQYADahBeIAJBgAhqIAJBgARqEA8gAkGABmogAkGAAWo\n    QkAEgAkGABmogAkGAAmoQlQEgAkGABmoQOiACQYAIaiACQYAGahCVASACQYABahBVIAIgAkGAAWoQlQEgACACIAJBgAVq\n    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\n    GogAkGABWoQfSACQYAEahCoASACQYAFaiAAEJABIAJBgAVqIAQQlQEgAkGABWoQqAEgAkGABmogARBeIAJBgAZqIAYQlQ\n    EgAkGABmoQqAEgAkGABWogAkGABmoQDyACQYAGaiACEJABIAJBgAZqIAJBgAJqEJUBIAJBgAZqIAJBgAVqELUBIAJBgAZ\n    qEKgBIAJBgAVqIAIQkAEgAkGABWogAhCVASACIAJBgAVqEJUBIAIQqAEgAkGAAmpBDBCfASACQYACahBVIAJBgAJqEKgB\n    IAJBgAdqIAJBgAFqEF4gAkGAB2ogAkGAAmoQlQEgAkGAB2oQqAEgAkGAAWogAkGAAmoQfSACQYABahCoASACQYAGakEME\n    J8BIAJBgAZqEFUgAkGABmoQqAEgAkGABWogAkGABmoQkAEgAkGABWogAkGABGoQDyACQYACaiACQYADahCQASACQYACai\n    ACQYABahAPIAJBgAVqIAJBgAJqELUBIAJBgAZqIAIQDyACQYABaiACQYAHahAPIAJBgAZqIAJBgAFqEJUBIAIgAkGAA2o\n    QDyACQYAHaiACQYAEahAPIAJBgAdqIAIQlQEgACACQYAFahCQASAAEKgBIAMgAkGABmoQkAEgAxCoASAEIAJBgAdqEJAB\n    IAQQqAEgAkGACGokAAv2BQEFfyMAQYAEayICJAAgAiAAEIUBIAIgARBIIAJBQGsgAEFAayIDEIUBIAJBQGsgAUFAayIFE\n    EggAkGAAWogAEGAAWoiBBCFASACQYABaiABQYABaiIGEEggAkHAAWogABCFASACQcABaiADEHggAkHAAWoQRCACQYACai\n    ABEIUBIAJBgAJqIAUQeCACQYACahBEIAJBwAFqIAJBgAJqEEggAkGAAmogAhClASACQYACaiACQUBrEHggAkHAAWogAkG\n    AAmoQgAEgAkHAAWoQRCACQYACaiADEKUBIAJBgAJqIAQQeCACQYACahBEIAJBwAJqIAUQhQEgAkHAAmogBhB4IAJBwAJq\n    EEQgAkGAAmogAkHAAmoQSCACQcACaiACQUBrEKUBIAJBwAJqIAJBgAFqEHggAkGAAmogAkHAAmoQgAEgAkGAAmoQRCACQ\n    cACaiAAEKUBIAJBwAJqIAQQeCACQcACahBEIAJBgANqIAEQhQEgAkGAA2ogBhB4IAJBgANqEEQgAkHAAmogAkGAA2oQSC\n    ACQYADaiACEKUBIAJBgANqIAJBgAFqEHggAkGAA2ogAkHAAmoQswEgAkGAA2oQRCACQcACaiACEKUBIAJBwAJqIAIQeCA\n    CIAJBwAJqEHggAhBEIAJBgAFqQQwQUiACQcADaiACQUBrEIUBIAJBwANqIAJBgAFqEHggAkHAA2oQRCACQUBrIAJBgAFq\n    EIABIAJBQGsQRCACQYADakEMEFIgAkHAAmogAkGAA2oQpQEgAkHAAmogAkGAAmoQSCACQYABaiACQcABahClASACQYABa\n    iACQUBrEEggAkHAAmogAkGAAWoQswEgAkGAA2ogAhBIIAJBQGsgAkHAA2oQSCACQYADaiACQUBrEHggAiACQcABahBIIA\n    JBwANqIAJBgAJqEEggAkHAA2ogAhB4IAAgAkHAAmoQpQEgABBEIAMgAkGAA2oQpQEgAxBEIAQgAkHAA2oQpQEgBBBEIAJ\n    BgARqJAALxQUBBH8jAEHwEmsiACQAIAAQOEF/IQEgABCIAUUEQCAAQYADakE4EHIaIABBuANqQTgQchogAEG4A2ogAEGA\n    A2oQVCAAQfAKakG4gMAAEF8gAEHwDWpB8IDAABBfIABB8ANqIABB8ApqIABB8A1qEEkgAEHwBGpBOBByGiAAQQE2AqgFI\n    ABBsAVqQTgQchogAEHoBWpBATYCACAAQfAFakE4EHIaIABBATYCqAYgAEGwBmpBOBByGiAAQegGakEBNgIAIABB8AZqQT\n    gQchogAEEBNgKoByAAQbAHakE4EHIaIABB6AdqQQE2AgBBf2ohAyAAQfAHahAqIABB8AdqIAAQfiAAQfAKahAqIABB8Ap\n    qIABB8AdqEH4gAEHwDWoQKiAAQfANaiAAQfAHahB+IABB8A1qEJwBAkACQAJAA0AgAiEBIANBAkkNAyAAQfAKaiAAQfAE\n    aiAAQfAFaiAAQfAGahAlIAFBxABNBEAgAEHwEGogAEHwBGogAEHwBWogAEHwBmoQRiABQQh0QdCrwABqIABB8BBqEJIBI\n    AFBAWohAgJAAkAgAEG4A2ogA0F/aiIDEFcgAEGAA2ogAxBXa0EBag4DAQMAAwsgAEHwCmogAEHwB2ogAEHwBGogAEHwBW\n    ogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYgAkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQI\n    MAgsgAEHwCmogAEHwDWogAEHwBGogAEHwBWogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYg\n    AkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQIMAQsLIAFBxQBBvIHAABA8AAtBxQBBxQBBzIHAABA8AAtBxQBBxQBB3IHAA\n    BA8AAtBACEBCyAAQfASaiQAIAEL8gQBBH8jAEGADGsiAiQAIAIgABCOASACQYACahAvIAJBgARqIABBgAJqIgMQjgEgAk\n    GABmoQLyACQYAIaiAAEI4BIAJBgApqIAEQjgEgAiABEBkgAkGABGogAUGAAmoiBBAZIAJBgAhqIAMQlgEgAkGACmogBBC\n    WASACQYAIahCsASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAMQkgEgAkGACGogAEGA\n    BGoiBRCWASACQYAKaiAEEJIBIAJBgApqIAFBgARqIgQQlgEgAkGACGoQrAEgAkGACmoQrAEgAkGABmogAkGACGoQkgEgA\n    kGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAIahCWAS\n    ADIAJBgAJqEJIBIAMgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQYAIaiA\n    FEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBBCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIAJBgAhq\n    EJYBIAJBgAhqIAUQkgEgAkGACGogBBAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgBSACQYAEahCSASAFIAJBgApqEJYBI\n    AJBgAZqIAJBgApqEJYBIAJBgAhqEGYgAyACQYAIahCWASACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIA\n    BBBTYCgAYgABCZASACQYAMaiQAC68EAQV/IwBBkAZrIgIkACAAQUBrIQQCQCABQfgAaigCACABKAI4aqwgAEH4AGooAgA\n    iAyAAKAI4IgVqrH5CgICAEFMNACAFQQJOBH8gABASIAAoAngFIAMLQQJIDQAgBBASCyACQaCnwAAQX0EAIQMgAkE4akHw\n    ABByGiABQUBrIQUDQCADQThGBEAgAkHwAGohBkEAIQMDQCADQThGRQRAIAMgBmogAiADaikDADcDACADQQhqIQMMAQsLI\n    AJBqAFqIAAQXyACQeABaiABEF8gAkGYAmogACABEAggAkGIA2ogBCAFEAggAkGoAWogBBBhIAJBqAFqEEQgAkHgAWogBR\n    BhIAJB4AFqEEQgAkH4A2ogAkGoAWogAkHgAWoQCEEAIQMgAkHoBGpB8AAQchoDQCADQfAARkUEQCACQegEaiADaiACQZg\n    CaiADaikDADcDACADQQhqIQMMAQsLIAJB6ARqIAJBiANqEGVBACEDA0AgA0HwAEZFBEAgAkGIA2ogA2oiASACQThqIANq\n    KQMAIAEpAwB9NwMAIANBCGohAwwBCwsgAkGYAmogAkGIA2oQZSACQZgCahBFIAJB+ANqIAJB6ARqEGQgAkH4A2oQRSACQ\n    dgFaiACQZgCahAFIAAgAkHYBWoQayAAQQM2AjggAkHYBWogAkH4A2oQBSAEIAJB2AVqEGsgAEECNgJ4IAJBkAZqJAAFIA\n    JBOGogA2pCADcDACADQQhqIQMMAQsLC5QEAQF/IwBB0CJrIgMkACADQcAWakG4gMAAEF8gA0HIHGpB8IDAABBfIANBCGo\n    gA0HAFmogA0HIHGoQSSADQYgBakE4EHIaIANBwAFqQTgQchogA0H4AWoQKgJAIAIQhAFFBEAgA0H4BGoQKiADQfgEaiAB\n    EH4gA0H4BGoQSiADQfgHahBLIANB+AdqIAIQfyADQfgHahBHIANByBxqIANB+AdqEIUBIANBuAlqIANByBxqEIUBIANBy\n    BxqIANBuAhqEIUBIANB+AlqIANByBxqEIUBIANBuApqECogA0G4DWoQYCADQbgKaiADQfgEahB+IANBwBNqECogA0HAE2\n    ogA0H4BGoQfiADQcATahCcASADQcABaiADQYgBahBUQX9qIQIDQCACQQFNBEAgA0G4DWoQkwEgACADQbgNakGIBhBnGgw\n    DBSADQbgNahAbIANBwBZqIANBuApqIANBuAlqIANB+AlqEBcCQAJAAkAgA0HAAWogAkF/aiICEFcgA0GIAWogAhBXa0EB\n    ag4DAQIAAgsgA0HIHGogA0G4CmogA0H4BGogA0G4CWogA0H4CWoQFiADQcAWaiADQcgcahAGDAELIANByBxqIANBuApqI\n    ANBwBNqIANBuAlqIANB+AlqEBYgA0HAFmogA0HIHGoQBgsgA0G4DWogA0HAFmoQBAwBCwALAAsgABBgCyADQdAiaiQAC8\n    MDARV/A0AgAUHAAUYEQAJAIABBKGohCyAAQRRqKAIAIgwhCCAAQRBqKAIAIg0hAyAAQQxqKAIAIg4hAiAAKAIIIg8hASA\n    AQRhqKAIAIhAhCiAAQRxqKAIAIhEhBCAAQSBqKAIAIhIhByAAQSRqKAIAIhMhBgNAIAchCSAEIQcgCiEEIAVBgAJGDQEg\n    AiADcSEUIAIgA3MhFSAFIAtqKAIAIAVB9J7AAGooAgAgBEEadyAEQRV3cyAEQQd3cyAGaiAJIARBf3NxIAQgB3FyampqI\n    gYgCGohCiAFQQRqIQUgAyEIIAIhAyABIQIgAUEedyABQRN3cyABQQp3cyAUIAEgFXFzaiAGaiEBIAkhBgwACwALBSAAIA\n    FqIgNB6ABqIANBzABqKAIAIANBKGooAgAgA0EsaigCACICQRl3IAJBDndzIAJBA3ZzIANB4ABqKAIAIgJBD3cgAkENd3M\n    gAkEKdnNqamo2AgAgAUEEaiEBDAELCyAAIAYgE2o2AiQgACAJIBJqNgIgIAAgByARajYCHCAAIAQgEGo2AhggACAIIAxq\n    NgIUIAAgAyANajYCECAAIAIgDmo2AgwgACABIA9qNgIIC9YDAgZ/An4jAEHwAGsiASQAIAFBoKfAABBfIAFBOGogARBfI\n    AAQRAJAAkACQCABAn8gACgCOCICQRBMBEAgAkF/ahA5DAELIAEpAzAiCEIBfCIHIAhUDQEgACkDMCIIQoCAgICAgICAgH\n    9RQQAgB0J/URsNAiABQThqIAggB3+nECghByABIAEpA2ggB0I6hnw3A2ggACABQThqEGIgABBEQQILIgMQLSAAQQhqIQQ\n    DQCADRQ0DIAEgASkDCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgASAAKQMAIAd9IgdC//////////8DgzcDOEEA\n    IQIDQCAHQjqHIQcgAkEoRkUEQCABIAJqIgVBCGoiBiAFQRBqKQMAQjmGQoCAgICAgICAAoMgBikDAEIBh4QiCDcDACABI\n    AJqQUBrIAIgBGopAwAgCH0gB3wiB0L//////////wODNwMAIAJBCGohAgwBCwsgASABKQMwQgGHIgg3AzAgASAAKQMwIA\n    h9IAd8Igc3A2ggACABQThqIAdCP4enQQFqEE8gA0F/aiEDDAALAAtBoKLAAEEZQbyiwAAQWwALQdCiwABBH0G8osAAEFs\n    ACyAAQQE2AjggAUHwAGokAAuhAwEBfyMAQZADayIGJAAgBkEIakHAABByGiAGQcgAakGoAhByGiAGQcgAahBDA0AgAQRA\n    IAZByABqQQAQPiABQX9qIQEMAQUCQCACBEAgBkHIAGogAiADEHoLIAQEQCAGQcgAaiAEIAUQegsgBkGIA2pCADcDACAGQ\n    YADakIANwMAIAZB+AJqQgA3AwAgBkIANwPwAiAGKAJIIQEgBigCTCECIAZByABqQYABED4DQCAGKAJIQf8DcUHAA0ZFBE\n    AgBkHIAGpBABA+DAELCyAGQawBaiABNgIAIAZBqAFqIAI2AgAgBkHIAGoQEUEAIQJBACEBA0AgAUEgRkUEQCAGQfACaiA\n    BaiABQXxxIAZqQdAAaigCACACQX9zQRhxdjoAACACQQhqIQIgAUEBaiEBDAELCyAGQcgAahBDQQAhAQNAIAFBIEZFBEAg\n    BkEIaiABaiAGQfACaiABai0AADoAACABQQFqIQEMAQsLQQAhAQNAIAFBIEYNASAAIAFqIAZBCGogAWotAAA6AAAgAUEBa\n    iEBDAALAAsLCyAGQZADaiQAC6EDAQN/IwBBgAZrIgEkACABIABBgAFqIgMQXiABQYABaiADEF4gAUGAAWoQMiABQYACai\n    ABEF4gAUGAAmogAEGAAmoiAhAPIAFBgANqIAIQXiABQYADahAyIAIgAUGAAWoQkAEgAiABQYABahCVASACEKgBIAIQpwE\n    gAhCnASACEKgBIAFBgANqQQwQnwEgAUGAA2oQVSABQYADahCoASABQYAEaiABQYADahBeIAFBgARqIAIQDyABQYAFaiAB\n    QYABahBeIAFBgAVqIAFBgANqEJUBIAFBgAVqEKgBIAIgAUGAAmoQDyABQYACaiABQYADahCQASABQYACaiABQYADahCVA\n    SABQYADaiABQYACahCVASABQYADahCoASABQYABaiABQYADahB9IAFBgAFqEKgBIAFBgAVqIAFBgAFqEA8gAUGABWogAU\n    GABGoQlQEgAUGAAmogABCQASABQYACaiABEA8gACABQYABahCQASAAEKgBIAAgAUGAAmoQDyAAEKcBIAAQqAEgAyABQYA\n    FahCQASADEKgBIAFBgAZqJAALhQMBBH8CQAJAIAFBgAJPBEAgAEEYaigCACEEAkACQCAAIAAoAgwiAkYEQCAAQRRBECAA\n    QRRqIgIoAgAiAxtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIAIgAEEQaiADGyEDA0AgAyEFIAEiA\n    kEUaiIDKAIAIgFFBEAgAkEQaiEDIAIoAhAhAQsgAQ0ACyAFQQA2AgALIARFDQIgACAAQRxqKAIAQQJ0QeS3wQBqIgEoAg\n    BHBEAgBEEQQRQgBCgCECAARhtqIAI2AgAgAkUNAwwCCyABIAI2AgAgAg0BQdi1wQBB2LXBACgCAEF+IAAoAhx3cTYCAA8\n    LIABBDGooAgAiAiAAQQhqKAIAIgBHBEAgACACNgIMIAIgADYCCA8LQdS1wQBB1LXBACgCAEF+IAFBA3Z3cTYCAAwBCyAC\n    IAQ2AhggACgCECIBBEAgAiABNgIQIAEgAjYCGAsgAEEUaigCACIARQ0AIAJBFGogADYCACAAIAI2AhgLC7MCAQF/IwBBg\n    AtrIgUkACAFEC8gBUGAAmoQLyAFQYAEahAvIAVBgAZqQTgQchogBUEBNgK4BiAFQcAGakE4EHIaIAVB+AZqQQE2AgAgBU\n    GAB2pBOBByGiAFQQE2ArgHIAVBwAdqQTgQchogBUH4B2pBATYCACAFQYAIakE4EHIaIAVBATYCuAggBUHACGpBOBByGiA\n    FQfgIakEBNgIAIAEgAiAFQYAGaiAFQYAHaiAFQYAIahAeIAVBgAhqIAMQoAEgBUGABmogBBCgASAFQYAJaiAFQYAGaiAF\n    QYAHahCRASAFIAVBgAlqEJIBIAVBgAlqIAVBgAhqEJsBIAVBgARqIAVBgAlqEJIBIAVBgARqEGYgACAFIAVBgAJqIAVBg\n    ARqEHYgAEEDNgKABiAFQYALaiQAC7ECAQF/IwBBgAtrIgQkACAEEC8gBEGAAmoQLyAEQYAEahAvIARBgAZqQTgQchogBE\n    EBNgK4BiAEQcAGakE4EHIaIARB+AZqQQE2AgAgBEGAB2pBOBByGiAEQQE2ArgHIARBwAdqQTgQchogBEH4B2pBATYCACA\n    EQYAIakE4EHIaIARBATYCuAggBEHACGpBOBByGiAEQfgIakEBNgIAIAEgBEGABmogBEGAB2ogBEGACGoQJSAEQYAIaiAC\n    EKABIARBgAZqIAMQoAEgBEGACWogBEGABmogBEGAB2oQkQEgBCAEQYAJahCSASAEQYAJaiAEQYAIahCbASAEQYAEaiAEQ\n    YAJahCSASAEQYAEahBmIAAgBCAEQYACaiAEQYAEahB2IABBAzYCgAYgBEGAC2okAAvJAgEDfyMAQcACayIBJAAgASAAQU\n    BrIgMQhQEgARADIAFBQGsgAxCFASABQUBrIABBgAFqIgIQSCABQYABaiACEIUBIAFBgAFqEAMgAiABEKUBIAIgARB4IAI\n    QRCACEE4gAhBOIAIQRCABQYABakEMEFIgAUHAAWogAUGAAWoQhQEgAUHAAWogAhBIIAFBgAJqIAEQhQEgAUGAAmogAUGA\n    AWoQeCABQYACahBEIAIgAUFAaxBIIAFBQGsgAUGAAWoQpQEgAUFAayABQYABahB4IAFBgAFqIAFBQGsQeCABIAFBgAFqE\n    IABIAEQRCABQYACaiABEEggAUGAAmogAUHAAWoQeCABQUBrIAAQpQEgAUFAayADEEggACABEKUBIAAQRCAAIAFBQGsQSC\n    AAEE4gABBEIAMgAUGAAmoQpQEgAxBEIAFBwAJqJAALrQIBA38jAEGABGsiAiQAIAIgABBeIAJBgAFqIABBgAFqIgMQXiA\n    CQYACakE4EHIaIAJBATYCuAIgAkHAAmpBOBByGiACQfgCakEBNgIAIAJBgANqIAMQXiACIAEQDyACQYABaiABQYABaiIE\n    EA8gAkGAAmogBBCQASACQYACaiABEJUBIAJBgANqIAAQlQEgAkGAAmoQqAEgAkGAA2oQqAEgAkGAA2ogAkGAAmoQDyACQ\n    YACaiACEJABIAJBgAJqEDogAkGAA2ogAkGAAmoQlQEgAkGAA2oQqAEgAkGAAmogAkGAAWoQkAEgAkGAAmoQOiADIAJBgA\n    NqEJABIAMgAkGAAmoQlQEgAkGAAWoQVSAAIAJBgAFqEJABIAAgAhCVASAAEKwBIAJBgARqJAALvQIBA38jAEGACGsiASQ\n    AIAEgABCOASABQYACaiAAQYAEaiICEI4BIAFBgARqIABBgAJqIgMQjgEgAUGABmoQLyAAECIgAUGABmogABCSASABQYAG\n    aiAAEJYBIAAgAUGABmoQlgEgABCsASABELYBIAEQrwEgACABEJYBIAFBgAJqECIgAUGAAmoQZiABQYAGaiABQYACahCSA\n    SABQYAGaiABQYACahCWASABQYACaiABQYAGahCWASABQYACahCsASABQYAEahAiIAFBgAZqIAFBgARqEJIBIAFBgAZqIA\n    FBgARqEJYBIAFBgARqIAFBgAZqEJYBIAFBgARqEKwBIAMQrgEgAxCvASACELYBIAIQrwEgAyABQYACahCWASACIAFBgAR\n    qEJYBIABBBTYCgAYgABCaASABQYAIaiQAC7ICAQN/IwBBgAhrIgEkACAAKAKABkEBRwRAIAEgABCOASABQYACaiAAQYAC\n    aiIDEI4BIAFBgARqIABBgARqIgIQjgEgAUGABmogABCOASABECIgAUGAAmogAhAZIAFBgAJqEK8BIAFBgAJqEKwBIAFBg\n    ARqECIgAUGABmogAxAZIAFBgAZqEK8BIAIgABCWASACIAMQlgEgAhCsASACECIgACABEJIBIAEgAUGAAmoQlgEgARCsAS\n    ABIAFBgARqEJYBIAEgAUGABmoQlgEgARCsASABECsgAUGAAmoQZiABQYAEahBmIAAgAUGAAmoQlgEgAyABQYAEahCSASA\n    DIAFBgAZqEJYBIAIgARCWASAAQQRBBSAAKAKABkF+cUECRhs2AoAGIAAQmQELIAFBgAhqJAALigIBAn8jAEHgAWsiAiQA\n    IAAQRCACQQhqQTAQchogAkIBNwMAIAJBOGogABBfIAJB8ABqIAEQXyACQagBakE4EHIaIAAQdANAIAJBOGogAkHwAGoQN\n    UF/TARAA0ACQCADQQBMDQAgAkHwAGpBARA7IAJBARA7IAJBqAFqIAJBOGoQayACQagBaiACQfAAahBiIAJBqAFqEEQgAk\n    E4aiACQagBaiACKQPYAUI/h6dBAWoiARBPIAJBqAFqIAAQayACQagBaiACEGEgAkGoAWoQRCAAIAJBqAFqIAEQTyADQX9\n    qIQMMAQsLBSACQQEQLSACQfAAakEBEC0gA0EBaiEDDAELCyACQeABaiQAC54CAQF/IwBBgA1rIgMkACADIAEQaiADEJkB\n    IANBiAZqIAIQXyADQYgGahBEIANBwAZqIANBiAZqEF8gA0HABmpBAxAoGiADQcAGahBEIANB+AZqIAMQagJAIANBwAZqE\n    FpFBEAgA0HABmoQKUF/aiECA0AgAkEBTQRAIANB+AZqEJoBDAMLIANB+AZqEBoCQAJAIANBwAZqIAJBf2oiAhBXIANBiA\n    ZqIAIQV2tBAWoOAwECAAILIANB+AZqIAMQDgwBCyADEJMBIANB+AZqIAMQDiADEJMBDAALAAsgA0H4BmoQsAEgA0H4B2o\n    QqQEgA0H4CGoQrQEgA0H4CmoQrQEgA0EBNgL4DAsgACADQfgGakGIBhBnGiADQYANaiQAC5ACAQJ/IwBBgAJrIgUkACAF\n    QYABaiAAEF4gAiAFQYABahCQASAFQYABaiAAQYABahBeIAQgBUGAAWoQkAEgBUGAAWogAEGAAmoiBhBeIAUgBUGAAWoQX\n    iAFQYABaiAGEF4gAyAFQYABahCQASAFQYABaiABQYABaiIGEF4gBSAFQYABahAPIAVBgAFqIAEQXiADIAVBgAFqEA8gAi\n    ADEH0gAhCoASAEIAUQfSAEEKgBIAUgAhCQASACEFUgAhCoASAFQYABaiAGEF4gBSAFQYABahAPIAMgBBCQASAFQYABaiA\n    BEF4gAyAFQYABahAPIAMgBRB9IAMQqAEgBBA6IAQQqAEgACABEAsgBUGAAmokAAvkAQECfyMAQcABayIDJAAgAxBLIAAg\n    ASACQR91IgQgAnMgBEF/c2pBAm0iAkF/akEfdhBtIAAgAUHAAWogAkEBc0F/akEfdhBtIAAgAUGAA2ogAkECc0F/akEfd\n    hBtIAAgAUHABGogAkEDc0F/akEfdhBtIAAgAUGABmogAkEEc0F/akEfdhBtIAAgAUHAB2ogAkEFc0F/akEfdhBtIAAgAU\n    GACWogAkEGc0F/akEfdhBtIAAgAUHACmogAkEHc0F/akEfdhBtIAMgABB/IAMQpgEgACADIARBAXEQbSADQcABaiQAC+Q\n    BAQJ/IwBBgANrIgMkACADECogACABIAJBH3UiBCACcyAEQX9zakECbSICQX9qQR92EG8gACABQYADaiACQQFzQX9qQR92\n    EG8gACABQYAGaiACQQJzQX9qQR92EG8gACABQYAJaiACQQNzQX9qQR92EG8gACABQYAMaiACQQRzQX9qQR92EG8gACABQ\n    YAPaiACQQVzQX9qQR92EG8gACABQYASaiACQQZzQX9qQR92EG8gACABQYAVaiACQQdzQX9qQR92EG8gAyAAEH4gAxCcAS\n    AAIAMgBEEBcRBvIANBgANqJAALvAEBAn8jAEGwAWsiAiQAIAJBMBByIQIDQCADQTBGBEACQCABQTBqIQEgAkEwaiACEHV\n    BACEDA0AgA0EwRg0BIAIgA2ogASADai0AADoAACADQQFqIQMMAAsACwUgAiADaiABIANqLQAAOgAAIANBAWohAwwBCwsg\n    AkHwAGogAhB1IABBOBByIgBBATYCOCAAQUBrQTgQciAAQfgAakEBNgIAIAAgAkHwAGoQpQEgAkEwahClASACQbABaiQAC\n    9QBAQJ/IwBBgANrIgEkACABIAAQXiABQYABaiAAQYABaiICEF4gAUGAAmogABBeIAFBgAJqIAIQDyABIAIQlQEgAUGAAW\n    oQVSABQYABaiAAEJUBIAEQqAEgAUGAAWoQqAEgACABEJABIAAgAUGAAWoQDyABQYABaiABQYACahCQASABQYABahBVIAF\n    BgAFqIAFBgAJqEJUBIAFBgAFqEKgBIAFBgAFqEDogACABQYABahCVASABQYACahCnASACIAFBgAJqEJABIAAQrAEgAUGA\n    A2okAAvEAQEBfyMAQYADayIDJAAgA0EIaiABEIUBAkAgAkUEQCADQQhqEAcMAQsgA0EIaiACEKUBCyADQcgAakHYo8AAE\n    F8gA0GAAWogA0HIAGoQiwEgA0HAAWogA0EIahCFASADQcABahADIANBwAFqIAEQSCAAIAEQhQEgACADQQhqEEggA0GAAm\n    ogA0HAAWoQhQEgABBYIQEgA0HAAmogABCFASADQcACahBBIANBwAJqEEQgACADQcACaiABEHkgA0GAA2okAAufAQEBfyM\n    AQfAAayICJAAgAiABEF9BACEBIAJBOGpBOBByGiAAEEQCQCAAIAIQNUEASA0AA0AgAkEBEC0gAUEBaiEBIAAgAhA1QX9K\n    DQALA0AgAUEATA0BIAJBARA7IAJBOGogABBrIAJBOGogAhBiIAJBOGoQRCAAIAJBOGogAikDaEI/h6dBAWoQTyABQX9qI\n    QEMAAsACyACQfAAaiQAC7IBAQF/IwBBgAJrIgQkACAEQYABaiAAEF4gAyAEQYABahCQASAEQYABaiAAQYABahBeIAQgBE\n    GAAWoQXiAEQYABaiAAQYACahBeIAIgBEGAAWoQkAEgASAEEJABIAEgAhAPIAMQMiAEEDIgAhAyIAEQpwEgARA6IAEQqAE\n    gARBVIAEQqAEgAkEMEJ8BIANBAxCfASACEFUgAhCoASACIAQQfSACEKgBIAAQFCAEQYACaiQAC58BAQJ/IwBBgAJrIgIk\n    ACAAIAEQXiAAEDIgAkGIAWpB2KTAABBfIAJBCGpBOBByGiACQQE2AkAgAkHIAGpBOBByIAJBgAFqQQE2AgAgAkHAAWogA\n    kGIAWoQiwEgAkEIaiACQcABahClARCyASACQQhqEKgBIAJBCGoQVSACQQhqEKgBIAAgARAPIAAgAkEIahCVASAAEKsBIA\n    JBgAJqJAALowEBAX8jAEEwayIGJAAgBkEQaiAAIAEQsQEgBiAGKAIUIgA2AhwgBiAGKAIQIgE2AhggBkEIaiACIAMQsQE\n    gBiAGKAIMIgI2AiQgBiAGKAIIIgM2AiAgBiAEIAUQsQEgBiAGKAIEIgQ2AiwgBiAGKAIAIgU2AiggASAAIAMgAiAFIAQQ\n    ACAGQShqEKQBIAZBIGoQpAEgBkEYahCkASAGQTBqJAALiAECA38DfiMAQRBrIgIkAAN+IANBOEYEfiACQRBqJAAgBgUgA\n    iAAIANqIgQpAwAiBSAFQj+HIAGsIgUgBUI/hxAxIAQgAikDACIHIAZ8IgVC//////////8DgzcDACAFIAdUrSACQQhqKQ\n    MAIAZCP4d8fEIGhiAFQjqIhCEGIANBCGohAwwBCwsLhAECA38BfiMAQUBqIgEkACABQQhqIAAQXyABQQhqEEQgAUE4aiE\n    CQQYhA0HcAiEAAn8DQEEAIANBAEgNARogAikDACIEUARAIAJBeGohAiAAQUZqIQAgA0F/aiEDDAELCwN/IARQBH8gAAUg\n    AEEBaiEAIARCAn8hBAwBCwsLIAFBQGskAAuHAQEBfyMAQcABayIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAa\n    kEBNgIAIAEQUCABQYgBakE4EHIaIABBgAFqIAFBgAEQZxogAEGAAmpBOBByGiAAQbgCakEBNgIAIABBvAJqIAFBhAFqQT\n    wQZxogAEH4AmpBATYCACABQcABaiQAC48BAQJ/IwBBgAJrIgEkACAAEKwBIAEgABBeIAFBgAFqQTgQchogAUEBNgK4ASA\n    BQcABakE4EHIaIAFB+AFqQQE2AgAgASAAQYABaiICEJUBIAEQOiABQYABaiABEJABIAFBgAFqIAIQlQEgAiABEJABIAIg\n    ABCVASAAIAFBgAFqEJABIAAQrAEgAUGAAmokAAt9AgF/An4jAEGAAWsiASQAIAFBCGogABCFASABQQhqEBIgAUHIAGogA\n    UEIahCDAUEIIQADQCAAQThGRQRAIAFByABqIABqKQMAIAKEIQIgAEEIaiEADAELCyABKQNIIQMgAUGAAWokACACQn98IA\n    NCAYVCf3yDQjqIp0EBcQuJAQIBfwJ+IAAgACkDMCABQT9xrSIDhiAAKQMoQTogAWtBP3GtIgSHhDcDMCAAQShqIQFBBiE\n    CA0AgAkEBTQRAIAAgACkDACADhkL//////////wODNwMABSABIAEpAwAgA4ZC//////////8DgyABQXhqIgEpAwAgBIeE\n    NwMAIAJBf2ohAgwBCwsLiQECAX8CfiAAIAApA2BBOiABQTpwIgFrrSIEhyAAKQNoIAGtIgOGhDcDaCAAQeAAaiEBQQ0hA\n    gNAIAJBAU0EQCAAIAApAwAgA4ZC//////////8DgzcDAAUgASABKQMAIAOGQv//////////A4MgAUF4aiIBKQMAIASHhD\n    cDACACQX9qIQIMAQsLC3EBAX8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAakEBNgIAIAFBCGpBOBB\n    yGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAEG8AWogAUEEakE8EGcaIABB+AFqQQE2AgAgAUFAayQAC4EBAgF/AX4gAEHw\n    ABByIQADQCACQThGBEACQCAAIAEpAzAiA0I6hzcDOCAAIANC//////////8DgzcDMCAAQUBrIQBBACECA0AgAkEwRg0BI\n    AAgAmpCADcDACACQQhqIQIMAAsACwUgACACaiABIAJqKQMANwMAIAJBCGohAgwBCwsLdQECfiAAIANCIIgiBSABQiCIIg\n    Z+IAIgA358IAEgBH58IANC/////w+DIgIgAUL/////D4MiAX4iA0IgiCACIAZ+fCICQiCIfCABIAV+IAJC/////w+DfCI\n    BQiCIfDcDCCAAIANC/////w+DIAFCIIaENwMAC3YBAn8jAEHAAWsiASQAIAEgABCFASABQUBrIAAQhQEgAUGAAWogAEFA\n    ayICEIUBIAEgAhB4IAFBQGsgABB4IAFBQGsQRCACIAFBQGsQSCABQYABahBBIAAgAUGAAWoQeCABEEQgABBEIAAgARBII\n    AFBwAFqJAALkwEBAn9B0LXBAEHQtcEAKAIAQQFqNgIAAkACQEGYucEAKAIAQQFGBEBBnLnBAEGcucEAKAIAQQFqIgA2Ag\n    AgAEECSw0CQaC5wQAoAgAiAUF/Sg0BDAILQZi5wQBCgYCAgBA3AwBBoLnBACgCACIAQQBIDQFBoLnBACAANgIAAAtBoLn\n    BACABNgIAIABBAUsNAAALAAtnAQJ/IwBBQGoiAiQAIAAQRCACIAAQhQECQCABRQRAIAAQBwwBCyAAIAEQpQELQQAhAQNA\n    IAFBAUsgA3JFBEAgABADIAFBAEchAyABIAFFaiEBDAELCyAAIAIQSCAAEBIgAkFAayQAC18CAX8EfkIBIQNBMCECA38gA\n    kF4RgR/IARCAYYgA3ynQX9qBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBeGohAiAFIAaFQn98QjqHIA\n    ODIQMMAQsLC2ACAX8EfkIBIQNB6AAhAgN/IAJBeEYEfyAEQgGGIAN8p0F/agUgASACaikDACIFIAAgAmopAwAiBn1COoc\n    gA4MgBIQhBCACQXhqIQIgBSAGhUJ/fEI6hyADgyEDDAELCwt3AQN/IwBBgAJrIgIkACACIAEQXiACQYABaiABEF4gAhAy\n    IAJBgAFqIAIQDyAAIAJBgAFqEJcBIABBgAJqIgMgAkGAAWoQlwEgAEGABGoiBCACQYABahCXASADIAEQogEgBCACEKIBI\n    ABBBTYCgAYgAkGAAmokAAt6AQF/IwBB4ANrIgEkACABQYABakHApcAAEF8gAUG4AWpB+KXAABBfIAEgAUGAAWogAUG4AW\n    oQSSABQfACakGwpsAAEF8gAUGoA2pB6KbAABBfIAFB8AFqIAFB8AJqIAFBqANqEEkgACABIAFB8AFqED8gAUHgA2okAAt\n    nACAAQQF2IAByIgBBAnYgAHIiAEEEdiAAciIAQQh2IAByIgBBEHYgAHIiACAAQQF2QdWq1aoFcWsiAEECdkGz5syZA3Eg\n    AEGz5syZA3FqIgBBBHYgAGpBj568+ABxQYGChAhsQRh2C2cBAn8jAEGAAWsiASQAIAEgABCFASABQUBrQTgQchogAUEBN\n    gJ4IAEgAEFAayICEHggARBBIAFBQGsgARClASABQUBrIAIQeCACIAEQpQEgAiAAEHggACABQUBrEKUBIAFBgAFqJAALaA\n    IBfwJ+IAFBP3GtIQNBOiABa0E/ca0hBEEAIQEDQCABQTBGBEAgACAAKQMwIAOHNwMwBSAAIAFqIgIgAkEIaikDACAEhkL\n    //////////wODIAIpAwAgA4eENwMAIAFBCGohAQwBCwsLbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYC\n    ACADQSxqQQI2AgAgA0ICNwIMIANBlKjAADYCCCADQQI2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACE\n    HAAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakECNgIAIANCAjcCDCADQbCqwAA2AgggA0\n    ECNgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBwAAtlAQJ/IAAgACgCACICQQhqIgM2AgAgACACQQN\n    2QTxxakEoaiICIAFB/wFxIAIoAgBBCHRyNgIAAkACQCADRQRAIABBADYCACAAIAAoAgRBAWo2AgQMAQsgA0H/A3ENAQsg\n    ABARCwtnAQF/IwBBgAJrIgMkACAAECogACABEJABIABBgAFqIgEgAhCQASAAQYACahCwASAAEKgBIAMgABAmIANBgAFqI\n    AEQXiADQYABahAyIANBgAFqIAMQe0UEQCAAEJgBCyADQYACaiQAC18BAn8jAEGAAWsiASQAIAAQqAEgASAAEIUBIAFBQG\n    sgAEFAayICEIUBIAEQAyABQUBrEAMgASABQUBrEHggAUEAEDQgACABEEggARBBIAEQRCACIAEQSCABQYABaiQAC10BAn8\n    jAEFAaiIBJAAgAUEIakGgp8AAEF8gAUEIaiAAKAI4QX9qEDkiAhAtIAAgAUEIahBjIABBASACQQFqQR9xdCICNgI4IAJB\n    gICAEE4EQCAAEBILIAFBQGskAAtfAgF/AX4jAEHwAGsiASQAIAFBoKfAABBfIAApAwAhAiABQThqIAAQXyAAQQEQOyABQ\n    ThqIAEQYSABQThqEEQgAUE4akEBEDsgACABQThqIAJCAoGnEE8gAUHwAGokAAt7AQJ/IABBKGohAgNAIAFBgAJGBEAgAE\n    LnzKfQ1tDrs7t/NwIIIABCADcCACAAQSBqQquzj/yRo7Pw2wA3AgAgAEEYakL/pLmIxZHagpt/NwIAIABBEGpC8ua746O\n    n/aelfzcCAAUgASACakEANgIAIAFBBGohAQwBCwsLaQICfwF+IAAgACkDACIDQv//////////A4M3AwBBCCEBA0AgA0I6\n    hyEDIAFBMEYEQCAAIAApAzAgA3w3AzAFIAAgAWoiAiACKQMAIAN8IgNC//////////8DgzcDACABQQhqIQEMAQsLC2oCA\n    n8BfiAAIAApAwAiA0L//////////wODNwMAQQghAQNAIANCOochAyABQegARgRAIAAgACkDaCADfDcDaAUgACABaiICIA\n    IpAwAgA3wiA0L//////////wODNwMAIAFBCGohAQwBCwsLWQEBfyMAQYADayIEJAAgBCADEF4gBBBAIARBgAFqIAEQXiA\n    EQYACaiACEF4gBEGAAWogBBAPIARBgAJqIAQQDyAAIARBgAFqIARBgAJqEJEBIARBgANqJAALWQECfyMAQUBqIgEkAAJA\n    IAAQhAENACABQQEQigEgAEGAAWoiAiABEFkNACACQQAQNCAAIAIQSCAAEBIgAEFAayIAIAIQSCAAEBIgAiABEKUBCyABQ\n    UBrJAALVwEBfyMAQbABayICJAAgATQCOCAANAI4fkKAgIAQWQRAIAAQEgsgAkEIaiAAIAEQCCACQfgAaiACQQhqEAUgAC\n    ACQfgAahBrIABBAjYCOCACQbABaiQAC08BAn8jAEFAaiIDJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgA\n    gAyABEIsBIAAgAxClASADIAIQiwEgAxClASADQUBrJAALWQECfyMAQYABayIBJAACQCAAEIgBDQAgARBQIABBgAJqIgIg\n    ARB7DQAgAhBAIAAgAhAPIAAQqwEgAEGAAWoiACACEA8gABCrASACIAEQkAELIAFBgAFqJAALSwEBfyMAQUBqIgEkACAAQ\n    TgQciIAQQE2AjggAUEBEIoBIABBQGsgAUHAABBnGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAUFAayQAC0sBAn8jAEHwAG\n    siASQAIAAQd0UEQCABQaCnwAAQXyABQThqIAAQgwEgASABQThqEGIgARBEIAFBOGogARA1IQILIAFB8ABqJAAgAgtPAQF\n    /IwBBgAFrIgIkACAAIAEQhQEgABADIAJByABqQdikwAAQXyACQQhqIAJByABqEIsBIAAgARBIIAAgAkEIahB4IAAQEiAC\n    QYABaiQAC0kBAn8DQCABQThGRQRAIAAgAWoiAiACKQMAQgGGNwMAIAFBCGohAQwBCwsgACAAKAI4QQF0IgE2AjggAUGAg\n    IAQTgRAIAAQEgsLQgIBfwJ+QQAgAmusIQQDQCADQThHBEAgACADaiICIAIpAwAiBSABIANqKQMAhSAEgyAFhTcDACADQQ\n    hqIQMMAQsLC0YBAn8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgAgAUEBEIoBIAAgARClARC\n    yASABQUBrJAALTgEBfyMAQYAEayIBJAAgABAvIAEQLyABQYACahAvIABBgAJqIAFBgAIQZxogAEGABGogAUGAAmpBgAIQ\n    ZxogAEEANgKABiABQYAEaiQAC0sBAX8jAEFAaiICJAACQCAAKAI4IAFsQYCAgBBOBEAgAiABEIoBIAAgAhBIDAELIAAgA\n    RAoGiAAIAAoAjggAWw2AjgLIAJBQGskAAtKAAJ/IAFBgIDEAEcEQEEBIAAoAhggASAAQRxqKAIAKAIQEQMADQEaCyACRQ\n    RAQQAPCyAAKAIYIAJBACAAQRxqKAIAKAIMEQUACwtCAQF/IwBBQGoiAiQAIAJBCGpBgIDAABBfIAEgAkEIahBrIAEQRCA\n    AIAEQayAAQQMQKBogABBEIAAQKSACQUBrJAALSQECfyMAQcABayIBJAAgASAAEF4gAUGAAWogABCFASAAIABBQGsiAhCl\n    ASAAEEEgAiABQYABahClASAAIAEQlQEgAUHAAWokAAtIAQF/IwBB4AFrIgEkACABQeihwAAQXyABQThqIAAgARAIIAFBq\n    AFqIAFBOGoQBSAAIAFBqAFqEGsgAEECNgI4IAFB4AFqJAALPgEBfyABQTpuIQIgAUGVA00EQCAAIAJBA3RqKQMAQgEgAU\n    H//wNxQTpwrYaDQgBVDwsgAkEHQdSdwAAQPAALQAIBfwF+IwBBgAFrIgEkACABQQhqIAAQhQEgAUEIahASIAFByABqIAF\n    BCGoQgwEgASkDSCABQYABaiQAQgKBpws8AQF/IwBBgAFrIgIkACACIAAQhQEgAkFAayABEIUBIAIQEiACQUBrEBIgAiAC\n    QUBrEDUgAkGAAWokAEULPAIBfwF+A38gAUE4RgR/IAJCf3xCgICAgICAgIAEg0I6iKcFIAAgAWopAwAgAoQhAiABQQhqI\n    QEMAQsLC0cBAX8jAEEgayIDJAAgA0EUakEANgIAIANB9KrAADYCECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2Ag\n    AgAyACEHAACzkBAX8jAEFAaiICJAAgAiAAEIUBIAIQByABBEAgASACEKUBCyACEAMgAiAAEEggAhAsIAJBQGskAAs6AQF\n    /IABBOBByIQADQCACQTBGRQRAIABBCBAtIAAgACkDACABIAJqMQAAfDcDACACQQFqIQIMAQsLCzQBAX8gAEE4EHIiAEEB\n    NgI4IABBQGtBOBByIABB+ABqQQE2AgAgACABEKUBIAFBQGsQpQELMAEBfyAAQTgQciEAA0AgAkE4RwRAIAAgAmogASACa\n    ikDADcDACACQQhqIQIMAQsLCz8BAX8jAEGAAmsiASQAIAAQUSABEG4gACABEJIBIABBgAJqEK0BIABBgARqEK0BIABBAT\n    YCgAYgAUGAAmokAAswAQJ/A0AgAkE4RwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLMAECfwNAIAJ\n    BOEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLCzABAn8DQCACQThHBEAgACACaiIDIAEgAmopAwAg\n    AykDAH03AwAgAkEIaiECDAELCwsxAQJ/A0AgAkHwAEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLC\n    zEBAn8DQCACQfAARwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLOQECfyMAQYABayIBJAAgASAAQY\n    ABaiICEF4gAiAAEJABIAEQVSAAIAEQkAEgABCsASABQYABaiQACzMBAX8gAgRAIAAhAwNAIAMgAS0AADoAACABQQFqIQE\n    gA0EBaiEDIAJBf2oiAg0ACwsgAAtIAQN/IwBBEGsiASQAIAAoAgwhAyAAKAIIIgJFBEBB9KrAAEErQaCrwAAQWwALIAEg\n    AzYCCCABIAA2AgQgASACNgIAIAEQcQALMgEBfyAAQgE3AwBBCCEBA0AgAUE4RkUEQCAAIAFqQgA3AwAgAUEIaiEBDAELC\n    yAAEFYLNwAgABBRIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahCSASAAIAEoAoAGNgKABgsoAQF/A0AgAk\n    E4RwRAIAAgAmogASACaikDADcDACACQQhqIQIMAQsLCzMAIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahC\n    SASAAIAEoAoAGNgKABgsoACAAIAEgAhB5IABBQGsgAUFAayACEHkgAEGAAWogAUGAAWogAhB5Cy4BAX8jAEGAAWsiASQA\n    IAAQLyABEFAgACABEJABIABBgAFqEKkBIAFBgAFqJAALLQAgACABIAIQjwEgAEGAAWogAUGAAWogAhCPASAAQYACaiABQ\n    YACaiACEI8BCzQBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQaSowAA2AgQgAkH0qsAANgIAIAIQaAALPgEBfyMAQR\n    BrIgEkACABQQhqIABBCGooAgA2AgAgASAAKQIANwMAIAEoAgAiAEEUaigCABogACgCBBoQMwALKQEBfyABBEAgACECA0A\n    gAkEAOgAAIAJBAWohAiABQX9qIgENAAsLIAALKwEBfyMAQcABayICJAAgAhBLIAIgARB/IAIQpgEgACACEAwgAkHAAWok\n    AAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCycBAX8jAEFAaiICJAAgAkEIaiABEF0gACACQQhqEIsBI\n    AJBQGskAAsrACAAEFEgACABEJIBIABBgAJqIAIQkgEgAEGABGogAxCSASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEI\n    UBIAEQEiABEFogAUFAayQACykAIAAgARBhIAAgACgCOCABKAI4aiIBNgI4IAFBgICAEE4EQCAAEBILCyUAIAAgASACEE8\n    gAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLIwADQCACBEAgACABLQAAED4gAkF/aiECIAFBAWohAQwBCwsLIgACQCAA\n    IAEQWUUNACAAQUBrIAFBQGsQWUUNAEEBDwtBAAskAAJAIABBfE0EQCAARQRAQQQhAAwCCyAAEAEiAA0BCwALIAALJwEBf\n    yMAQYABayICJAAgAiABEF4gAhA6IAAgAhCVASACQYABaiQACycAIAAgARCQASAAQYABaiABQYABahCQASAAQYACaiABQY\n    ACahCQAQslACAAIAEQpQEgAEFAayABQUBrEKUBIABBgAFqIAFBgAFqEKUBCyUBAX8jAEFAaiICJAAgAiABEIUBIAIQQSA\n    AIAIQeCACQUBrJAALKAEBfyMAQYACayICJAAgAiABEI4BIAIQKyAAIAIQlgEgAkGAAmokAAsjAEGEAiACSQRAIAJBhAIg\n    AxA9AAsgACACNgIEIAAgATYCAAsiAQF/IwBB8ABrIgIkACACIAEQMCAAIAIQBSACQfAAaiQACxwAAkAgABB3RQ0AIABBg\n    AFqEHdFDQBBAQ8LQQALHwAgAEE4EHIiAEEBNgI4IAAgARBrIAAgASgCODYCOAseAAJAIAAQhwFFDQAgAEGAAWoQhwFFDQ\n    BBAQ8LQQALGwACQCAAEHdFDQAgAEFAaxB3RQ0AQQEPC0EACx4AAkAgABCHAUUNACAAQYACahCHAUUNAEEBDwtBAAsaAQF\n    /IAAQWCIBIABBQGsQWCABcyAAEHdxcwsaACAAQTgQciIAQQE2AjggACABEJ0BIAAQVgsZACAAQTgQciIAQQE2AjggACAB\n    EGsgABBWCxcAIAAQRCAAKAIAQX8gAUEfcXRBf3NxCxoAIAAgARBfIAAgAhAkIAAgAhBjIAAgAhAkCxwAIAAQLyAAIAEQk\n    AEgAEGAAWogAUGAAWoQkAELGAAgACABIAIQeSAAQUBrIAFBQGsgAhB5CxYAIAAgARClASAAQUBrIAFBQGsQpQELGAAgAB\n    AvIAAgARCQASAAQYABaiACEJABCxgAIAAgARCQASAAQYABaiABQYABahCQAQsZACAAEK4BIABBgAJqELYBIABBgARqEK4\n    BCxcAIAAQsgEgAEFAaxBpIABBgAFqELIBCxQAIAAgARB4IABBQGsgAUFAaxB4CxgAIAAgARCVASAAQYABaiABQYABahCV\n    AQsYACAAEKYBIABBgAFqIgAQpgEgACABEA8LGQAgABCpASAAQYABahCwASAAQYACahCpAQsZACAAEKwBIABBgAJqEKwBI\n    ABBgARqEKwBCxkAIAAQqgEgAEGAAmoQqgEgAEGABGoQqgELFgAgABAvIAAgARCQASAAQYABahCpAQsWACAAQYABaiIAEK\n    gBIAAQOiAAEKgBCxQAIAAQRCAAIAApAwAgAax8NwMACxQAIAAQRCAAIAApAwAgAax9NwMACxEAIAAgARBSIABBQGsgARB\n    SCxEAIAAgARBIIABBQGsgARBICxQAIAAgARCQASAAQYABaiACEJABCxIAIAAgARAPIABBgAFqIAEQDwsUACAAIAEQoAEg\n    AEGAAWogARCgAQsRACAAKAIEBEAgACgCABAJCwsSACAAIAEQayAAIAEoAjg2AjgLDwAgAEFAayIAEEEgABBECw0AIAAQT\n    iAAQUBrEE4LDQAgABBEIABBQGsQRAsPACAAELIBIABBQGsQsgELEAAgABCrASAAQYABahCrAQsNACAAEBIgAEFAaxASCx\n    AAIAAQqAEgAEGAAWoQqAELEAAgABCpASAAQYABahCpAQsPACAAQYABahA6IAAQrAELEAAgABCnASAAQYABahCnAQsOACA\n    AEGkgAEFAaxCyAQsQACAAIAI2AgQgACABNgIACw0AIAAQdCAAQQE2AjgLDAAgABBBIAAgARB4CwwAIAAgARBrIAAQVgsN\n    ACAAEDogACABEJUBCwsAIAAQOiAAEKwBCwwAQunQotvMouq7RgsDAAELAwABCwv+PZoCAEGCgMAACwcBAAAAAQI0AEG4g\n    MAAC9sBuF8jku11BwFjT+D5WE+pA2dPnKtLeD0Akew9ffXy9AMD1g8fDSwgAK1vjPCZwa4A8DtNkAEAAADzStxtEor3AI\n    uwH1tTsFYDgvLFYx+X7AAysL/NHtseAkehVLifHyMCQHo6ogw4sQGz4sMPAAAAAHNyYy9ibHMxMjM4MS9wYWlyLnJzqAA\n    QABQAAAAHAQAACQAAAKgAEAAUAAAADAEAAA0AAACoABAAFAAAABEBAAANAAAAAAAAAAEAAAD///8Dv/+W/78AaQM7VYAd\n    moCAAefMIPV1pkwBp+1zAEGogsAACyz+//7///8BAosAgILYBPYB4Y1oiW++kwLOdqvfPagdAMZpulHOdt8Dy1nGFwBB4\n    ILAAAuRAZABEAATAAAA0AEAABgAAACQARAAEwAAANQBAAARAAAAkAEQABMAAADWAQAAHAAAAHNyYy9ibHMxMjM4MS9lY3\n    AucnMAkAEQABMAAAAZBQAADQAAAJABEAATAAAAGwUAAAkAAACQARAAEwAAABwFAAARAAAAkAEQABMAAAAfBQAAHAAAAAA\n    AAAABAAEAAAABAjQAQaCEwAALuSCQARAAEwAAAGcEAAARAAAAkAEQABMAAABsBAAADQAAAJABEAATAAAAbgQAABUAAACQ\n    ARAAEwAAAHAEAAAgAAAAHUxYLQgo9ADXXz44aOPbAInJGoj9roEBomOjmrkPTgGY6rCCSW3JAoBOWs9QOu4AimlEAQAAA\n    ADgKxeO6UjMAXSpOluMVsgAolXvNe/8FADngsIBPcnDA8EWIDvuPnUAusRiAAwgWgDRCCkuAQAAALgh6L1iEMUA3/4Vlz\n    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\n    GZYzb76G2KA7ycH+3PFk8AK2qmngEAAABhdHRlbXB0IHRvIGRpdmlkZSBieSB6ZXJvAAAAbxEQABIAAAB8AQAAFAAAAAA\n    AAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93c3JjL2JsczEyMzgxL2ZwLnJzAAAAbxEQABIAAAASAgAADQAA\n    AG8REAASAAAAHgIAACYAAABvERAAEgAAAB4CAAAjAAAAbxEQABIAAAAkAgAAFwAAAG8REAASAAAAJAIAABQAAAAAAAAAq\n    qr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAABAEhAAFAAAABUBAAATAA\n    AAQBIQABQAAAAeAQAAGAAAAEASEAAUAAAAJAEAABwAAABzcmMvYmxzMTIzODEvZWNwMi5ycwAAAAAEAEGQpcAAC7wGQBI\n    QABQAAADmAgAACQAAAEASEAAUAAAA7gIAAA0AAABAEhAAFAAAAP4CAAAhAAAAuL0hwchWgAD1+24BqskAA7pwFz2uR7YA\n    RNEK7ADpUwN65MZREMUtA0kBgkmkwiMALyuqJAAAAAB+KwRdBX2sAflVF+WERDwDNJME9ce9GwJp12rYgmRCA9BrWWVPJ\n    4gA6DRrH9hnnAAFtgI+AQAAAAEouAiGVJMBeKIo6w5zsgIjyRINFpWmAQq1nU73MqoCm/2tGjUu2gJxczJjhFufAHdSXc\n    4AAAAAvnlf8F8HqQJqaAc710nDAfOzmulytSoB0pm8jp0W+gEoPsuZi8IrAKw0qwwzzakDAkpsYAAAAACrqv/////+Ae7\n    //1Ss//8C6kFiD2sPKgHDnP1KFM4TAkt3ZNesS0MC7enGkqb5XwKjHhGgAQAAAAgUEAALAAAAjwEAAA8AAAAIFBAACwAA\n    AKcBAAATAAAACBQQAAsAAACqAQAADQAAAHNyYy9obWFjLnJzADQUEAAgAAAAVBQQABIAAAADAAAAAAAAAAEAAAAEAAAAa\n    W5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAwMDAxMDIwMzA0MDUwNjA3MDgwOT\n    EwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ\n    0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5\n    ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQAAQBUQABAAAABQFRAAIgAAAHJhbmdlIGVuZCBpb\n    mRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIG\n    EgYE5vbmVgIHZhbHVlALAVEAAcAAAA7gEAAB4AAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzAEGIrMAACwEBAEH\n    IrMAACwEBAEGIrcAACwEBAEHIrcAACwEBAEGIrsAACwEBAEHIrsAACwEBAEGIr8AACwEBAEHIr8AACwEBAEGIsMAACwEB\n    AEHIsMAACwEBAEGIscAACwEBAEHIscAACwEBAEGIssAACwEBAEHIssAACwEBAEGIs8AACwEBAEHIs8AACwEBAEGItMAAC\n    wEBAEHItMAACwEBAEGItcAACwEBAEHItcAACwEBAEGItsAACwEBAEHItsAACwEBAEGIt8AACwEBAEHIt8AACwEBAEGIuM\n    AACwEBAEHIuMAACwEBAEGIucAACwEBAEHIucAACwEBAEGIusAACwEBAEHIusAACwEBAEGIu8AACwEBAEHIu8AACwEBAEG\n    IvMAACwEBAEHIvMAACwEBAEGIvcAACwEBAEHIvcAACwEBAEGIvsAACwEBAEHIvsAACwEBAEGIv8AACwEBAEHIv8AACwEB\n    AEGIwMAACwEBAEHIwMAACwEBAEGIwcAACwEBAEHIwcAACwEBAEGIwsAACwEBAEHIwsAACwEBAEGIw8AACwEBAEHIw8AAC\n    wEBAEGIxMAACwEBAEHIxMAACwEBAEGIxcAACwEBAEHIxcAACwEBAEGIxsAACwEBAEHIxsAACwEBAEGIx8AACwEBAEHIx8\n    AACwEBAEGIyMAACwEBAEHIyMAACwEBAEGIycAACwEBAEHIycAACwEBAEGIysAACwEBAEHIysAACwEBAEGIy8AACwEBAEH\n    Iy8AACwEBAEGIzMAACwEBAEHIzMAACwEBAEGIzcAACwEBAEHIzcAACwEBAEGIzsAACwEBAEHIzsAACwEBAEGIz8AACwEB\n    AEHIz8AACwEBAEGI0MAACwEBAEHI0MAACwEBAEGI0cAACwEBAEHI0cAACwEBAEGI0sAACwEBAEHI0sAACwEBAEGI08AAC\n    wEBAEHI08AACwEBAEGI1MAACwEBAEHI1MAACwEBAEGI1cAACwEBAEHI1cAACwEBAEGI1sAACwEBAEHI1sAACwEBAEGI18\n    AACwEBAEHI18AACwEBAEGI2MAACwEBAEHI2MAACwEBAEGI2cAACwEBAEHI2cAACwEBAEGI2sAACwEBAEHI2sAACwEBAEG\n    I28AACwEBAEHI28AACwEBAEGI3MAACwEBAEHI3MAACwEBAEGI3cAACwEBAEHI3cAACwEBAEGI3sAACwEBAEHI3sAACwEB\n    AEGI38AACwEBAEHI38AACwEBAEGI4MAACwEBAEHI4MAACwEBAEGI4cAACwEBAEHI4cAACwEBAEGI4sAACwEBAEHI4sAAC\n    wEBAEGI48AACwEBAEHI48AACwEBAEGI5MAACwEBAEHI5MAACwEBAEGI5cAACwEBAEHI5cAACwEBAEGI5sAACwEBAEHI5s\n    AACwEBAEGI58AACwEBAEHI58AACwEBAEGI6MAACwEBAEHI6MAACwEBAEGI6cAACwEBAEHI6cAACwEBAEGI6sAACwEBAEH\n    I6sAACwEBAEGI68AACwEBAEHI68AACwEBAEGI7MAACwEBAEHI7MAACwEBAEGI7cAACwEBAEHI7cAACwEBAEGI7sAACwEB\n    AEHI7sAACwEBAEGI78AACwEBAEHI78AACwEBAEGI8MAACwEBAEHI8MAACwEBAEGI8cAACwEBAEHI8cAACwEBAEGI8sAAC\n    wEBAEHI8sAACwEBAEGI88AACwEBAEHI88AACwEBAEGI9MAACwEBAEHI9MAACwEBAEGI9cAACwEBAEHI9cAACwEBAEGI9s\n    AACwEBAEHI9sAACwEBAEGI98AACwEBAEHI98AACwEBAEGI+MAACwEBAEHI+MAACwEBAEGI+cAACwEBAEHI+cAACwEBAEG\n    I+sAACwEBAEHI+sAACwEBAEGI+8AACwEBAEHI+8AACwEBAEGI/MAACwEBAEHI/MAACwEBAEGI/cAACwEBAEHI/cAACwEB\n    AEGI/sAACwEBAEHI/sAACwEBAEGI/8AACwEBAEHI/8AACwEBAEGIgMEACwEBAEHIgMEACwEBAEGIgcEACwEBAEHIgcEAC\n    wEBAEGIgsEACwEBAEHIgsEACwEBAEGIg8EACwEBAEHIg8EACwEBAEGIhMEACwEBAEHIhMEACwEBAEGIhcEACwEBAEHIhc\n    EACwEBAEGIhsEACwEBAEHIhsEACwEBAEGIh8EACwEBAEHIh8EACwEBAEGIiMEACwEBAEHIiMEACwEBAEGIicEACwEBAEH\n    IicEACwEBAEGIisEACwEBAEHIisEACwEBAEGIi8EACwEBAEHIi8EACwEBAEGIjMEACwEBAEHIjMEACwEBAEGIjcEACwEB\n    AEHIjcEACwEBAEGIjsEACwEBAEHIjsEACwEBAEGIj8EACwEBAEHIj8EACwEBAEGIkMEACwEBAEHIkMEACwEBAEGIkcEAC\n    wEBAEHIkcEACwEBAEGIksEACwEBAEHIksEACwEBAEGIk8EACwEBAEHIk8EACwEBAEGIlMEACwEBAEHIlMEACwEBAEGIlc\n    EACwEBAEHIlcEACwEBAEGIlsEACwEBAEHIlsEACwEBAEGIl8EACwEBAEHIl8EACwEBAEGImMEACwEBAEHImMEACwEBAEG\n    ImcEACwEBAEHImcEACwEBAEGImsEACwEBAEHImsEACwEBAEGIm8EACwEBAEHIm8EACwEBAEGInMEACwEBAEHInMEACwEB\n    AEGIncEACwEBAEHIncEACwEBAEGInsEACwEBAEHInsEACwEBAEGIn8EACwEBAEHIn8EACwEBAEGIoMEACwEBAEHIoMEAC\n    wEBAEGIocEACwEBAEHIocEACwEBAEGIosEACwEBAEHIosEACwEBAEGIo8EACwEBAEHIo8EACwEBAEGIpMEACwEBAEHIpM\n    EACwEBAEGIpcEACwEBAEHIpcEACwEBAEGIpsEACwEBAEHIpsEACwEBAEGIp8EACwEBAEHIp8EACwEBAEGIqMEACwEBAEH\n    IqMEACwEBAEGIqcEACwEBAEHIqcEACwEBAEGIqsEACwEBAEHIqsEACwEBAEGIq8EACwEBAEHIq8EACwEBAEGIrMEACwEB\n    AEHIrMEACwEBAEGIrcEACwEBAEHIrcEACwEBAEGIrsEACwEBAEHIrsEACwEBAEGIr8EACwEBAEHIr8EACwEBAEGIsMEAC\n    wEBAEHIsMEACwEBAEGIscEACwEBAEHIscEACwEBAEGIssEACwEBAEHIssEACwEBAEGIs8EACwEBAEHIs8EACwEBAEGItM\n    EACwEBAEHItMEACwEBAEGItcEACwEBAEHItcEACwEBAHsJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2V\n    kLWJ5AwVydXN0Yx0xLjQ5LjAgKGUxODg0YThlMyAyMDIwLTEyLTI5KQZ3YWxydXMGMC4xOC4wDHdhc20tYmluZGdlbhIw\n    LjIuNzAgKGI2MzU1YzI3MCk=\n".replace(
          /[^0-9a-zA-Z/+]/g,
          ""
        ),
      it = et.J(nt)
    let at = null
    function st(A, t) {
      const e = t(1 * A.length)
      return (
        ((null !== at && at.buffer === rt.memory.buffer) ||
          (at = new Uint8Array(rt.memory.buffer)),
        at).set(A, e / 1),
        [e, A.length]
      )
    }
    const ot = async function A() {
      const { instance: t, module: e } = await (async function (A, t) {
        if ("function" == typeof Response && A instanceof Response) {
          const e = await A.arrayBuffer()
          return await WebAssembly.instantiate(e, t)
        }
        {
          const e = await WebAssembly.instantiate(A, t)
          return e instanceof WebAssembly.Instance
            ? { instance: e, module: A }
            : e
        }
      })(it, {})
      return (rt = t.exports), (A.__wbindgen_wasm_module = e), rt
    }
    let Bt
    async function gt(A, t, e) {
      if (!Bt) {
        if ((await ot(), 0 !== rt.bls_init()))
          throw new Error("Cannot initialize BLS")
        Bt = (A, t, e) =>
          0 ===
          (function (A, t, e) {
            const [r, n] = st(A, rt.__wbindgen_malloc),
              [i, a] = st(t, rt.__wbindgen_malloc),
              [s, o] = st(e, rt.__wbindgen_malloc)
            return rt.bls_verify(r, n, i, a, s, o)
          })(t, e, A)
      }
      return Bt(A, t, e)
    }
    class It extends o {
      constructor() {
        super("Cannot lookup unverified certificate. Call 'verify()' first.")
      }
    }
    function ht(A, t) {
      if (A.byteLength !== t.byteLength) return !1
      const e = new Uint8Array(A),
        r = new Uint8Array(t)
      for (let A = 0; A < e.length; A++) if (e[A] !== r[A]) return !1
      return !0
    }
    class Et {
      constructor(A, t = $A()) {
        ;(this._agent = t),
          (this.verified = !1),
          (this._rootKey = null),
          (this.cert = LA(new Uint8Array(A.certificate)))
      }
      lookup(A) {
        return this.checkState(), Ct(A, this.cert.tree)
      }
      async verify() {
        const A = await ct(this.cert.tree),
          t = await this._checkDelegation(this.cert.delegation),
          e = this.cert.signature,
          r = (function (A) {
            const t = Qt.byteLength + 96
            if (A.byteLength !== t)
              throw new TypeError(
                `BLS DER-encoded public key must be ${t} bytes long`
              )
            const e = A.slice(0, Qt.byteLength)
            if (!ht(e, Qt))
              throw new TypeError(
                `BLS DER-encoded public key is invalid. Expect the following prefix: ${Qt}, but get ${e}`
              )
            return A.slice(Qt.byteLength)
          })(t),
          n = _A(ut("ic-state-root"), A),
          i = await gt(new Uint8Array(r), new Uint8Array(e), new Uint8Array(n))
        return (this.verified = i), i
      }
      checkState() {
        if (!this.verified) throw new It()
      }
      async _checkDelegation(A) {
        if (!A) {
          if (!this._rootKey) {
            if (this._agent.rootKey)
              return (this._rootKey = this._agent.rootKey), this._rootKey
            throw new Error(
              "Agent does not have a rootKey. Do you need to call 'fetchRootKey'?"
            )
          }
          return this._rootKey
        }
        const t = new Et(A, this._agent)
        if (!(await t.verify()))
          throw new Error("fail to verify delegation certificate")
        const e = t.lookup(["subnet", A.subnet_id, "public_key"])
        if (!e)
          throw new Error(
            `Could not find subnet key for subnet 0x${mA(A.subnet_id)}`
          )
        return e
      }
    }
    const Qt = qA(
      "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"
    )
    async function ct(A) {
      switch (A[0]) {
        case 0:
          return SA(ut("ic-hashtree-empty"))
        case 4:
          return A[1]
        case 3:
          return SA(_A(ut("ic-hashtree-leaf"), A[1]))
        case 2:
          return SA(_A(ut("ic-hashtree-labeled"), A[1], await ct(A[2])))
        case 1:
          return SA(_A(ut("ic-hashtree-fork"), await ct(A[1]), await ct(A[2])))
        default:
          throw new Error("unreachable")
      }
    }
    function ut(A) {
      return _A(new Uint8Array([A.length]), new TextEncoder().encode(A))
    }
    function Ct(A, t) {
      if (0 === A.length)
        return 3 === t[0] ? new Uint8Array(t[1]).buffer : void 0
      const e = (function (A, t) {
        if (0 !== t.length)
          for (const e of t) if (2 === e[0] && ht(A, e[1])) return e[2]
      })("string" == typeof A[0] ? new TextEncoder().encode(A[0]) : A[0], lt(t))
      return e ? Ct(A.slice(1), e) : void 0
    }
    function lt(A) {
      switch (A[0]) {
        case 0:
          return []
        case 1:
          return lt(A[1]).concat(lt(A[2]))
        default:
          return [A]
      }
    }
    async function ft(A, t, e, r) {
      const n = [new TextEncoder().encode("request_status"), e],
        i = await A.readState(t, { paths: [n] }),
        a = new Et(i, A)
      if (!(await a.verify())) throw new Error("Fail to verify certificate")
      const s = a.lookup([...n, new TextEncoder().encode("status")])
      let o
      switch (
        ((o = void 0 === s ? KA.Unknown : new TextDecoder().decode(s)), o)
      ) {
        case KA.Replied:
          return a.lookup([...n, "reply"])
        case KA.Received:
        case KA.Unknown:
        case KA.Processing:
          return await r(t, e, o), ft(A, t, e, r)
        case KA.Rejected: {
          const A = new Uint8Array(a.lookup([...n, "reject_code"]))[0],
            t = new TextDecoder().decode(a.lookup([...n, "reject_message"]))
          throw new Error(
            `Call was rejected:\n  Request ID: ${mA(
              e
            )}\n  Reject code: ${A}\n  Reject text: ${t}\n`
          )
        }
        case KA.Done:
          throw new Error(
            `Call was marked as done but we never saw the reply:\n  Request ID: ${mA(
              e
            )}\n`
          )
      }
      throw new Error("unreachable")
    }
    class wt extends o {
      constructor(A, t, e, r) {
        super(
          [
            "Call failed:",
            `  Canister: ${A.toText()}`,
            `  Method: ${t} (${e})`,
            ...Object.getOwnPropertyNames(r).map(
              A => `  "${A}": ${JSON.stringify(r[A])}`
            )
          ].join("\n")
        ),
          (this.canisterId = A),
          (this.methodName = t),
          (this.type = e),
          (this.props = r)
      }
    }
    class dt extends wt {
      constructor(A, e, r) {
        var n
        super(A, e, "query", {
          Status: r.status,
          Code:
            null !== (n = t[r.reject_code]) && void 0 !== n
              ? n
              : `Unknown Code "${r.reject_code}"`,
          Message: r.reject_message
        }),
          (this.result = r)
      }
    }
    class pt extends wt {
      constructor(A, t, e, r) {
        super(A, t, "update", {
          "Request ID": mA(e),
          "HTTP status code": r.status.toString(),
          "HTTP status text": r.statusText
        }),
          (this.requestId = e),
          (this.response = r)
      }
    }
    var yt
    !(function (A) {
      ;(A.Install = "install"),
        (A.Reinstall = "reinstall"),
        (A.Upgrade = "upgrade")
    })(yt || (yt = {}))
    const Gt = Symbol.for("ic-agent-metadata")
    class kt {
      constructor(A) {
        this[Gt] = Object.freeze(A)
      }
      static agentOf(A) {
        return A[Gt].config.agent
      }
      static interfaceOf(A) {
        return A[Gt].service
      }
      static canisterIdOf(A) {
        return s.from(A[Gt].config.canisterId)
      }
      static async install(A, t) {
        const e = void 0 === A.mode ? yt.Install : A.mode,
          r = A.arg ? [...new Uint8Array(A.arg)] : [],
          n = [...new Uint8Array(A.module)],
          i =
            "string" == typeof t.canisterId
              ? s.fromText(t.canisterId)
              : t.canisterId
        await tt(t).install_code({
          mode: { [e]: null },
          arg: r,
          wasm_module: n,
          canister_id: i
        })
      }
      static async createCanister(A) {
        const { canister_id: t } = await tt(
          A || {}
        ).provisional_create_canister_with_cycles({ amount: [], settings: [] })
        return t
      }
      static async createAndInstallCanister(A, t, e) {
        const r = await this.createCanister(e)
        return (
          await this.install(
            Object.assign({}, t),
            Object.assign(Object.assign({}, e), { canisterId: r })
          ),
          this.createActor(
            A,
            Object.assign(Object.assign({}, e), { canisterId: r })
          )
        )
      }
      static createActorClass(t) {
        const e = t({ IDL: A })
        return class extends kt {
          constructor(A) {
            const t =
              "string" == typeof A.canisterId
                ? s.fromText(A.canisterId)
                : A.canisterId
            super({
              config: Object.assign(Object.assign(Object.assign({}, mt), A), {
                canisterId: t
              }),
              service: e
            })
            for (const [A, t] of e._fields) this[A] = bt(this, A, t)
          }
        }
      }
      static createActor(A, t) {
        return new (this.createActorClass(A))(t)
      }
    }
    function _t(A, t) {
      const r = z(A, e.Buffer.from(t))
      switch (r.length) {
        case 0:
          return
        case 1:
          return r[0]
        default:
          return r
      }
    }
    const mt = {
      pollingStrategyFactory: function () {
        return (function (...A) {
          return async (t, e, r) => {
            for (const n of A) await n(t, e, r)
          }
        })(
          ((A = (function () {
            let A = !0
            return async () => !!A && ((A = !1), !0)
          })()),
          1e3,
          async (t, e, r) => {
            if (await A(t, e, r)) return new Promise(A => setTimeout(A, 1e3))
          }),
          (function (A, t) {
            let e = 1e3
            return () =>
              new Promise(A =>
                setTimeout(() => {
                  ;(e *= 1.2), A()
                }, e)
              )
          })(),
          (function (A) {
            const t = Date.now() + A
            return async (A, e, r) => {
              if (Date.now() > t)
                throw new Error(
                  `Request timed out after 300000 msec:\n  Request ID: ${mA(
                    e
                  )}\n  Request status: ${r}\n`
                )
            }
          })(3e5)
        )
        var A
      }
    }
    function bt(A, t, e) {
      let r
      r = e.annotations.includes("query")
        ? async (r, ...n) => {
            var i, a
            const o =
                (r = Object.assign(
                  Object.assign({}, r),
                  null === (a = (i = A[Gt].config).queryTransform) ||
                    void 0 === a
                    ? void 0
                    : a.call(
                        i,
                        t,
                        n,
                        Object.assign(Object.assign({}, A[Gt].config), r)
                      )
                )).agent ||
                A[Gt].config.agent ||
                $A(),
              B = s.from(r.canisterId || A[Gt].config.canisterId),
              g = W(e.argTypes, n),
              I = await o.query(B, { methodName: t, arg: g })
            switch (I.status) {
              case "rejected":
                throw new dt(B, t, I)
              case "replied":
                return _t(e.retTypes, I.reply.arg)
            }
          }
        : async (r, ...n) => {
            var i, a
            const o =
                (r = Object.assign(
                  Object.assign({}, r),
                  null === (a = (i = A[Gt].config).callTransform) ||
                    void 0 === a
                    ? void 0
                    : a.call(
                        i,
                        t,
                        n,
                        Object.assign(Object.assign({}, A[Gt].config), r)
                      )
                )).agent ||
                A[Gt].config.agent ||
                $A(),
              {
                canisterId: B,
                effectiveCanisterId: g,
                pollingStrategyFactory: I
              } = Object.assign(
                Object.assign(Object.assign({}, mt), A[Gt].config),
                r
              ),
              h = s.from(B),
              E = void 0 !== g ? s.from(g) : h,
              Q = W(e.argTypes, n),
              { requestId: c, response: u } = await o.call(h, {
                methodName: t,
                arg: Q,
                effectiveCanisterId: E
              })
            if (!u.ok) throw new pt(h, t, c, u)
            const C = I(),
              l = await ft(o, E, c, C)
            if (void 0 !== l) return _t(e.retTypes, l)
            if (0 !== e.retTypes.length)
              throw new Error(
                `Call was returned undefined, but type [${e.retTypes.join(
                  ","
                )}].`
              )
          }
      const n = (...A) => r({}, ...A)
      return (
        (n.withOptions =
          A =>
          (...t) =>
            r(A, ...t)),
        n
      )
    }
    var qt = __webpack_require__(808)
    const St = 3e5
    async function Dt(A, t, e, r, n, i, a = !1) {
      const s = new Et({ certificate: new Uint8Array(r) }, i)
      if ((a && (await i.fetchRootKey()), !(await s.verify()))) return !1
      if (
        !(function (A) {
          const t = u(new qt.P8(A.lookup(["time"]))),
            e = Number(t / BigInt(1e6)),
            r = Date.now()
          return e - St > r
            ? (console.error(
                `Invalid certificate: time ${e} is too far in the future (current time: ${r})`
              ),
              !1)
            : !(e + St < r) ||
                (console.error(
                  `Invalid certificate: time ${e} is too far in the past (current time: ${r})`
                ),
                !1)
        })(s)
      )
        return !1
      const o = LA(new Uint8Array(n)),
        B = await ct(o),
        g = s.lookup(["canister", A.toUint8Array(), "certified_data"])
      if (!g)
        throw new Error(
          "Could not find certified data for this canister in the certificate."
        )
      if (!Ft(g, B))
        return console.error("Witness != Tree passed in ic-certification"), !1
      const I = await crypto.subtle.digest("SHA-256", e)
      let h = Ct(["http_assets", t], o)
      return (
        h || (h = Ct(["http_assets", "/index.html"], o)),
        h
          ? !!h && Ft(I, h)
          : (console.error(
              `Invalid Tree in the header. Does not contain path ${JSON.stringify(
                t
              )}`
            ),
            !1)
      )
    }
    function Ft(A, t) {
      if (A.byteLength !== t.byteLength) return !1
      const e = new Uint8Array(A),
        r = new Uint8Array(t)
      for (let A = 0; A < e.length; A++) if (e[A] != r[A]) return !1
      return !0
    }
    for (
      var Ht =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Nt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
        Rt = 0;
      Rt < Ht.length;
      Rt++
    )
      Nt[Ht.charCodeAt(Rt)] = Rt
    var Ut = function (A) {
      var t,
        e,
        r,
        n,
        i,
        a = 0.75 * A.length,
        s = A.length,
        o = 0
      "=" === A[A.length - 1] && (a--, "=" === A[A.length - 2] && a--)
      var B = new ArrayBuffer(a),
        g = new Uint8Array(B)
      for (t = 0; t < s; t += 4)
        (e = Nt[A.charCodeAt(t)]),
          (r = Nt[A.charCodeAt(t + 1)]),
          (n = Nt[A.charCodeAt(t + 2)]),
          (i = Nt[A.charCodeAt(t + 3)]),
          (g[o++] = (e << 2) | (r >> 4)),
          (g[o++] = ((15 & r) << 4) | (n >> 2)),
          (g[o++] = ((3 & n) << 6) | (63 & i))
      return B
    }
    function vt(A) {
      let t = A.length
      for (; --t >= 0; ) A[t] = 0
    }
    const Mt = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0
      ]),
      Yt = new Uint8Array([
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13
      ]),
      Jt = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7
      ]),
      Tt = new Uint8Array([
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
      ]),
      Lt = new Array(576)
    vt(Lt)
    const xt = new Array(60)
    vt(xt)
    const Zt = new Array(512)
    vt(Zt)
    const Ot = new Array(256)
    vt(Ot)
    const jt = new Array(29)
    vt(jt)
    const Kt = new Array(30)
    function Vt(A, t, e, r, n) {
      ;(this.static_tree = A),
        (this.extra_bits = t),
        (this.extra_base = e),
        (this.elems = r),
        (this.max_length = n),
        (this.has_stree = A && A.length)
    }
    let Pt, Wt, zt
    function Xt(A, t) {
      ;(this.dyn_tree = A), (this.max_code = 0), (this.stat_desc = t)
    }
    vt(Kt)
    const $t = A => (A < 256 ? Zt[A] : Zt[256 + (A >>> 7)]),
      Ae = (A, t) => {
        ;(A.pending_buf[A.pending++] = 255 & t),
          (A.pending_buf[A.pending++] = (t >>> 8) & 255)
      },
      te = (A, t, e) => {
        A.bi_valid > 16 - e
          ? ((A.bi_buf |= (t << A.bi_valid) & 65535),
            Ae(A, A.bi_buf),
            (A.bi_buf = t >> (16 - A.bi_valid)),
            (A.bi_valid += e - 16))
          : ((A.bi_buf |= (t << A.bi_valid) & 65535), (A.bi_valid += e))
      },
      ee = (A, t, e) => {
        te(A, e[2 * t], e[2 * t + 1])
      },
      re = (A, t) => {
        let e = 0
        do {
          ;(e |= 1 & A), (A >>>= 1), (e <<= 1)
        } while (--t > 0)
        return e >>> 1
      },
      ne = (A, t, e) => {
        const r = new Array(16)
        let n,
          i,
          a = 0
        for (n = 1; n <= 15; n++) r[n] = a = (a + e[n - 1]) << 1
        for (i = 0; i <= t; i++) {
          let t = A[2 * i + 1]
          0 !== t && (A[2 * i] = re(r[t]++, t))
        }
      },
      ie = A => {
        let t
        for (t = 0; t < 286; t++) A.dyn_ltree[2 * t] = 0
        for (t = 0; t < 30; t++) A.dyn_dtree[2 * t] = 0
        for (t = 0; t < 19; t++) A.bl_tree[2 * t] = 0
        ;(A.dyn_ltree[512] = 1),
          (A.opt_len = A.static_len = 0),
          (A.last_lit = A.matches = 0)
      },
      ae = A => {
        A.bi_valid > 8
          ? Ae(A, A.bi_buf)
          : A.bi_valid > 0 && (A.pending_buf[A.pending++] = A.bi_buf),
          (A.bi_buf = 0),
          (A.bi_valid = 0)
      },
      se = (A, t, e, r) => {
        const n = 2 * t,
          i = 2 * e
        return A[n] < A[i] || (A[n] === A[i] && r[t] <= r[e])
      },
      oe = (A, t, e) => {
        const r = A.heap[e]
        let n = e << 1
        for (
          ;
          n <= A.heap_len &&
          (n < A.heap_len && se(t, A.heap[n + 1], A.heap[n], A.depth) && n++,
          !se(t, r, A.heap[n], A.depth));

        )
          (A.heap[e] = A.heap[n]), (e = n), (n <<= 1)
        A.heap[e] = r
      },
      Be = (A, t, e) => {
        let r,
          n,
          i,
          a,
          s = 0
        if (0 !== A.last_lit)
          do {
            ;(r =
              (A.pending_buf[A.d_buf + 2 * s] << 8) |
              A.pending_buf[A.d_buf + 2 * s + 1]),
              (n = A.pending_buf[A.l_buf + s]),
              s++,
              0 === r
                ? ee(A, n, t)
                : ((i = Ot[n]),
                  ee(A, i + 256 + 1, t),
                  (a = Mt[i]),
                  0 !== a && ((n -= jt[i]), te(A, n, a)),
                  r--,
                  (i = $t(r)),
                  ee(A, i, e),
                  (a = Yt[i]),
                  0 !== a && ((r -= Kt[i]), te(A, r, a)))
          } while (s < A.last_lit)
        ee(A, 256, t)
      },
      ge = (A, t) => {
        const e = t.dyn_tree,
          r = t.stat_desc.static_tree,
          n = t.stat_desc.has_stree,
          i = t.stat_desc.elems
        let a,
          s,
          o,
          B = -1
        for (A.heap_len = 0, A.heap_max = 573, a = 0; a < i; a++)
          0 !== e[2 * a]
            ? ((A.heap[++A.heap_len] = B = a), (A.depth[a] = 0))
            : (e[2 * a + 1] = 0)
        for (; A.heap_len < 2; )
          (o = A.heap[++A.heap_len] = B < 2 ? ++B : 0),
            (e[2 * o] = 1),
            (A.depth[o] = 0),
            A.opt_len--,
            n && (A.static_len -= r[2 * o + 1])
        for (t.max_code = B, a = A.heap_len >> 1; a >= 1; a--) oe(A, e, a)
        o = i
        do {
          ;(a = A.heap[1]),
            (A.heap[1] = A.heap[A.heap_len--]),
            oe(A, e, 1),
            (s = A.heap[1]),
            (A.heap[--A.heap_max] = a),
            (A.heap[--A.heap_max] = s),
            (e[2 * o] = e[2 * a] + e[2 * s]),
            (A.depth[o] =
              (A.depth[a] >= A.depth[s] ? A.depth[a] : A.depth[s]) + 1),
            (e[2 * a + 1] = e[2 * s + 1] = o),
            (A.heap[1] = o++),
            oe(A, e, 1)
        } while (A.heap_len >= 2)
        ;(A.heap[--A.heap_max] = A.heap[1]),
          ((A, t) => {
            const e = t.dyn_tree,
              r = t.max_code,
              n = t.stat_desc.static_tree,
              i = t.stat_desc.has_stree,
              a = t.stat_desc.extra_bits,
              s = t.stat_desc.extra_base,
              o = t.stat_desc.max_length
            let B,
              g,
              I,
              h,
              E,
              Q,
              c = 0
            for (h = 0; h <= 15; h++) A.bl_count[h] = 0
            for (
              e[2 * A.heap[A.heap_max] + 1] = 0, B = A.heap_max + 1;
              B < 573;
              B++
            )
              (g = A.heap[B]),
                (h = e[2 * e[2 * g + 1] + 1] + 1),
                h > o && ((h = o), c++),
                (e[2 * g + 1] = h),
                g > r ||
                  (A.bl_count[h]++,
                  (E = 0),
                  g >= s && (E = a[g - s]),
                  (Q = e[2 * g]),
                  (A.opt_len += Q * (h + E)),
                  i && (A.static_len += Q * (n[2 * g + 1] + E)))
            if (0 !== c) {
              do {
                for (h = o - 1; 0 === A.bl_count[h]; ) h--
                A.bl_count[h]--,
                  (A.bl_count[h + 1] += 2),
                  A.bl_count[o]--,
                  (c -= 2)
              } while (c > 0)
              for (h = o; 0 !== h; h--)
                for (g = A.bl_count[h]; 0 !== g; )
                  (I = A.heap[--B]),
                    I > r ||
                      (e[2 * I + 1] !== h &&
                        ((A.opt_len += (h - e[2 * I + 1]) * e[2 * I]),
                        (e[2 * I + 1] = h)),
                      g--)
            }
          })(A, t),
          ne(e, B, A.bl_count)
      },
      Ie = (A, t, e) => {
        let r,
          n,
          i = -1,
          a = t[1],
          s = 0,
          o = 7,
          B = 4
        for (
          0 === a && ((o = 138), (B = 3)), t[2 * (e + 1) + 1] = 65535, r = 0;
          r <= e;
          r++
        )
          (n = a),
            (a = t[2 * (r + 1) + 1]),
            (++s < o && n === a) ||
              (s < B
                ? (A.bl_tree[2 * n] += s)
                : 0 !== n
                ? (n !== i && A.bl_tree[2 * n]++, A.bl_tree[32]++)
                : s <= 10
                ? A.bl_tree[34]++
                : A.bl_tree[36]++,
              (s = 0),
              (i = n),
              0 === a
                ? ((o = 138), (B = 3))
                : n === a
                ? ((o = 6), (B = 3))
                : ((o = 7), (B = 4)))
      },
      he = (A, t, e) => {
        let r,
          n,
          i = -1,
          a = t[1],
          s = 0,
          o = 7,
          B = 4
        for (0 === a && ((o = 138), (B = 3)), r = 0; r <= e; r++)
          if (((n = a), (a = t[2 * (r + 1) + 1]), !(++s < o && n === a))) {
            if (s < B)
              do {
                ee(A, n, A.bl_tree)
              } while (0 != --s)
            else
              0 !== n
                ? (n !== i && (ee(A, n, A.bl_tree), s--),
                  ee(A, 16, A.bl_tree),
                  te(A, s - 3, 2))
                : s <= 10
                ? (ee(A, 17, A.bl_tree), te(A, s - 3, 3))
                : (ee(A, 18, A.bl_tree), te(A, s - 11, 7))
            ;(s = 0),
              (i = n),
              0 === a
                ? ((o = 138), (B = 3))
                : n === a
                ? ((o = 6), (B = 3))
                : ((o = 7), (B = 4))
          }
      }
    let Ee = !1
    const Qe = (A, t, e, r) => {
      te(A, 0 + (r ? 1 : 0), 3),
        ((A, t, e, r) => {
          ae(A),
            Ae(A, e),
            Ae(A, ~e),
            A.pending_buf.set(A.window.subarray(t, t + e), A.pending),
            (A.pending += e)
        })(A, t, e)
    }
    var ce = {
        _tr_init: A => {
          Ee ||
            ((() => {
              let A, t, e, r, n
              const i = new Array(16)
              for (e = 0, r = 0; r < 28; r++)
                for (jt[r] = e, A = 0; A < 1 << Mt[r]; A++) Ot[e++] = r
              for (Ot[e - 1] = r, n = 0, r = 0; r < 16; r++)
                for (Kt[r] = n, A = 0; A < 1 << Yt[r]; A++) Zt[n++] = r
              for (n >>= 7; r < 30; r++)
                for (Kt[r] = n << 7, A = 0; A < 1 << (Yt[r] - 7); A++)
                  Zt[256 + n++] = r
              for (t = 0; t <= 15; t++) i[t] = 0
              for (A = 0; A <= 143; ) (Lt[2 * A + 1] = 8), A++, i[8]++
              for (; A <= 255; ) (Lt[2 * A + 1] = 9), A++, i[9]++
              for (; A <= 279; ) (Lt[2 * A + 1] = 7), A++, i[7]++
              for (; A <= 287; ) (Lt[2 * A + 1] = 8), A++, i[8]++
              for (ne(Lt, 287, i), A = 0; A < 30; A++)
                (xt[2 * A + 1] = 5), (xt[2 * A] = re(A, 5))
              ;(Pt = new Vt(Lt, Mt, 257, 286, 15)),
                (Wt = new Vt(xt, Yt, 0, 30, 15)),
                (zt = new Vt(new Array(0), Jt, 0, 19, 7))
            })(),
            (Ee = !0)),
            (A.l_desc = new Xt(A.dyn_ltree, Pt)),
            (A.d_desc = new Xt(A.dyn_dtree, Wt)),
            (A.bl_desc = new Xt(A.bl_tree, zt)),
            (A.bi_buf = 0),
            (A.bi_valid = 0),
            ie(A)
        },
        _tr_stored_block: Qe,
        _tr_flush_block: (A, t, e, r) => {
          let n,
            i,
            a = 0
          A.level > 0
            ? (2 === A.strm.data_type &&
                (A.strm.data_type = (A => {
                  let t,
                    e = 4093624447
                  for (t = 0; t <= 31; t++, e >>>= 1)
                    if (1 & e && 0 !== A.dyn_ltree[2 * t]) return 0
                  if (
                    0 !== A.dyn_ltree[18] ||
                    0 !== A.dyn_ltree[20] ||
                    0 !== A.dyn_ltree[26]
                  )
                    return 1
                  for (t = 32; t < 256; t++)
                    if (0 !== A.dyn_ltree[2 * t]) return 1
                  return 0
                })(A)),
              ge(A, A.l_desc),
              ge(A, A.d_desc),
              (a = (A => {
                let t
                for (
                  Ie(A, A.dyn_ltree, A.l_desc.max_code),
                    Ie(A, A.dyn_dtree, A.d_desc.max_code),
                    ge(A, A.bl_desc),
                    t = 18;
                  t >= 3 && 0 === A.bl_tree[2 * Tt[t] + 1];
                  t--
                );
                return (A.opt_len += 3 * (t + 1) + 5 + 5 + 4), t
              })(A)),
              (n = (A.opt_len + 3 + 7) >>> 3),
              (i = (A.static_len + 3 + 7) >>> 3),
              i <= n && (n = i))
            : (n = i = e + 5),
            e + 4 <= n && -1 !== t
              ? Qe(A, t, e, r)
              : 4 === A.strategy || i === n
              ? (te(A, 2 + (r ? 1 : 0), 3), Be(A, Lt, xt))
              : (te(A, 4 + (r ? 1 : 0), 3),
                ((A, t, e, r) => {
                  let n
                  for (
                    te(A, t - 257, 5), te(A, e - 1, 5), te(A, r - 4, 4), n = 0;
                    n < r;
                    n++
                  )
                    te(A, A.bl_tree[2 * Tt[n] + 1], 3)
                  he(A, A.dyn_ltree, t - 1), he(A, A.dyn_dtree, e - 1)
                })(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, a + 1),
                Be(A, A.dyn_ltree, A.dyn_dtree)),
            ie(A),
            r && ae(A)
        },
        _tr_tally: (A, t, e) => (
          (A.pending_buf[A.d_buf + 2 * A.last_lit] = (t >>> 8) & 255),
          (A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & t),
          (A.pending_buf[A.l_buf + A.last_lit] = 255 & e),
          A.last_lit++,
          0 === t
            ? A.dyn_ltree[2 * e]++
            : (A.matches++,
              t--,
              A.dyn_ltree[2 * (Ot[e] + 256 + 1)]++,
              A.dyn_dtree[2 * $t(t)]++),
          A.last_lit === A.lit_bufsize - 1
        ),
        _tr_align: A => {
          te(A, 2, 3),
            ee(A, 256, Lt),
            (A => {
              16 === A.bi_valid
                ? (Ae(A, A.bi_buf), (A.bi_buf = 0), (A.bi_valid = 0))
                : A.bi_valid >= 8 &&
                  ((A.pending_buf[A.pending++] = 255 & A.bi_buf),
                  (A.bi_buf >>= 8),
                  (A.bi_valid -= 8))
            })(A)
        }
      },
      ue = (A, t, e, r) => {
        let n = (65535 & A) | 0,
          i = ((A >>> 16) & 65535) | 0,
          a = 0
        for (; 0 !== e; ) {
          ;(a = e > 2e3 ? 2e3 : e), (e -= a)
          do {
            ;(n = (n + t[r++]) | 0), (i = (i + n) | 0)
          } while (--a)
          ;(n %= 65521), (i %= 65521)
        }
        return n | (i << 16) | 0
      }
    const Ce = new Uint32Array(
      (() => {
        let A,
          t = []
        for (var e = 0; e < 256; e++) {
          A = e
          for (var r = 0; r < 8; r++)
            A = 1 & A ? 3988292384 ^ (A >>> 1) : A >>> 1
          t[e] = A
        }
        return t
      })()
    )
    var le = (A, t, e, r) => {
        const n = Ce,
          i = r + e
        A ^= -1
        for (let e = r; e < i; e++) A = (A >>> 8) ^ n[255 & (A ^ t[e])]
        return -1 ^ A
      },
      fe = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      },
      we = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      }
    const {
        _tr_init: de,
        _tr_stored_block: pe,
        _tr_flush_block: ye,
        _tr_tally: Ge,
        _tr_align: ke
      } = ce,
      {
        Z_NO_FLUSH: _e,
        Z_PARTIAL_FLUSH: me,
        Z_FULL_FLUSH: be,
        Z_FINISH: qe,
        Z_BLOCK: Se,
        Z_OK: De,
        Z_STREAM_END: Fe,
        Z_STREAM_ERROR: He,
        Z_DATA_ERROR: Ne,
        Z_BUF_ERROR: Re,
        Z_DEFAULT_COMPRESSION: Ue,
        Z_FILTERED: ve,
        Z_HUFFMAN_ONLY: Me,
        Z_RLE: Ye,
        Z_FIXED: Je,
        Z_DEFAULT_STRATEGY: Te,
        Z_UNKNOWN: Le,
        Z_DEFLATED: xe
      } = we,
      Ze = 258,
      Oe = 262,
      je = 103,
      Ke = 113,
      Ve = 666,
      Pe = (A, t) => ((A.msg = fe[t]), t),
      We = A => (A << 1) - (A > 4 ? 9 : 0),
      ze = A => {
        let t = A.length
        for (; --t >= 0; ) A[t] = 0
      }
    let Xe = (A, t, e) => ((t << A.hash_shift) ^ e) & A.hash_mask
    const $e = A => {
        const t = A.state
        let e = t.pending
        e > A.avail_out && (e = A.avail_out),
          0 !== e &&
            (A.output.set(
              t.pending_buf.subarray(t.pending_out, t.pending_out + e),
              A.next_out
            ),
            (A.next_out += e),
            (t.pending_out += e),
            (A.total_out += e),
            (A.avail_out -= e),
            (t.pending -= e),
            0 === t.pending && (t.pending_out = 0))
      },
      Ar = (A, t) => {
        ye(
          A,
          A.block_start >= 0 ? A.block_start : -1,
          A.strstart - A.block_start,
          t
        ),
          (A.block_start = A.strstart),
          $e(A.strm)
      },
      tr = (A, t) => {
        A.pending_buf[A.pending++] = t
      },
      er = (A, t) => {
        ;(A.pending_buf[A.pending++] = (t >>> 8) & 255),
          (A.pending_buf[A.pending++] = 255 & t)
      },
      rr = (A, t, e, r) => {
        let n = A.avail_in
        return (
          n > r && (n = r),
          0 === n
            ? 0
            : ((A.avail_in -= n),
              t.set(A.input.subarray(A.next_in, A.next_in + n), e),
              1 === A.state.wrap
                ? (A.adler = ue(A.adler, t, n, e))
                : 2 === A.state.wrap && (A.adler = le(A.adler, t, n, e)),
              (A.next_in += n),
              (A.total_in += n),
              n)
        )
      },
      nr = (A, t) => {
        let e,
          r,
          n = A.max_chain_length,
          i = A.strstart,
          a = A.prev_length,
          s = A.nice_match
        const o = A.strstart > A.w_size - Oe ? A.strstart - (A.w_size - Oe) : 0,
          B = A.window,
          g = A.w_mask,
          I = A.prev,
          h = A.strstart + Ze
        let E = B[i + a - 1],
          Q = B[i + a]
        A.prev_length >= A.good_match && (n >>= 2),
          s > A.lookahead && (s = A.lookahead)
        do {
          if (
            ((e = t),
            B[e + a] === Q &&
              B[e + a - 1] === E &&
              B[e] === B[i] &&
              B[++e] === B[i + 1])
          ) {
            ;(i += 2), e++
            do {} while (
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              B[++i] === B[++e] &&
              i < h
            )
            if (((r = Ze - (h - i)), (i = h - Ze), r > a)) {
              if (((A.match_start = t), (a = r), r >= s)) break
              ;(E = B[i + a - 1]), (Q = B[i + a])
            }
          }
        } while ((t = I[t & g]) > o && 0 != --n)
        return a <= A.lookahead ? a : A.lookahead
      },
      ir = A => {
        const t = A.w_size
        let e, r, n, i, a
        do {
          if (
            ((i = A.window_size - A.lookahead - A.strstart),
            A.strstart >= t + (t - Oe))
          ) {
            A.window.set(A.window.subarray(t, t + t), 0),
              (A.match_start -= t),
              (A.strstart -= t),
              (A.block_start -= t),
              (r = A.hash_size),
              (e = r)
            do {
              ;(n = A.head[--e]), (A.head[e] = n >= t ? n - t : 0)
            } while (--r)
            ;(r = t), (e = r)
            do {
              ;(n = A.prev[--e]), (A.prev[e] = n >= t ? n - t : 0)
            } while (--r)
            i += t
          }
          if (0 === A.strm.avail_in) break
          if (
            ((r = rr(A.strm, A.window, A.strstart + A.lookahead, i)),
            (A.lookahead += r),
            A.lookahead + A.insert >= 3)
          )
            for (
              a = A.strstart - A.insert,
                A.ins_h = A.window[a],
                A.ins_h = Xe(A, A.ins_h, A.window[a + 1]);
              A.insert &&
              ((A.ins_h = Xe(A, A.ins_h, A.window[a + 3 - 1])),
              (A.prev[a & A.w_mask] = A.head[A.ins_h]),
              (A.head[A.ins_h] = a),
              a++,
              A.insert--,
              !(A.lookahead + A.insert < 3));

            );
        } while (A.lookahead < Oe && 0 !== A.strm.avail_in)
      },
      ar = (A, t) => {
        let e, r
        for (;;) {
          if (A.lookahead < Oe) {
            if ((ir(A), A.lookahead < Oe && t === _e)) return 1
            if (0 === A.lookahead) break
          }
          if (
            ((e = 0),
            A.lookahead >= 3 &&
              ((A.ins_h = Xe(A, A.ins_h, A.window[A.strstart + 3 - 1])),
              (e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h]),
              (A.head[A.ins_h] = A.strstart)),
            0 !== e &&
              A.strstart - e <= A.w_size - Oe &&
              (A.match_length = nr(A, e)),
            A.match_length >= 3)
          )
            if (
              ((r = Ge(A, A.strstart - A.match_start, A.match_length - 3)),
              (A.lookahead -= A.match_length),
              A.match_length <= A.max_lazy_match && A.lookahead >= 3)
            ) {
              A.match_length--
              do {
                A.strstart++,
                  (A.ins_h = Xe(A, A.ins_h, A.window[A.strstart + 3 - 1])),
                  (e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h]),
                  (A.head[A.ins_h] = A.strstart)
              } while (0 != --A.match_length)
              A.strstart++
            } else
              (A.strstart += A.match_length),
                (A.match_length = 0),
                (A.ins_h = A.window[A.strstart]),
                (A.ins_h = Xe(A, A.ins_h, A.window[A.strstart + 1]))
          else (r = Ge(A, 0, A.window[A.strstart])), A.lookahead--, A.strstart++
          if (r && (Ar(A, !1), 0 === A.strm.avail_out)) return 1
        }
        return (
          (A.insert = A.strstart < 2 ? A.strstart : 2),
          t === qe
            ? (Ar(A, !0), 0 === A.strm.avail_out ? 3 : 4)
            : A.last_lit && (Ar(A, !1), 0 === A.strm.avail_out)
            ? 1
            : 2
        )
      },
      sr = (A, t) => {
        let e, r, n
        for (;;) {
          if (A.lookahead < Oe) {
            if ((ir(A), A.lookahead < Oe && t === _e)) return 1
            if (0 === A.lookahead) break
          }
          if (
            ((e = 0),
            A.lookahead >= 3 &&
              ((A.ins_h = Xe(A, A.ins_h, A.window[A.strstart + 3 - 1])),
              (e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h]),
              (A.head[A.ins_h] = A.strstart)),
            (A.prev_length = A.match_length),
            (A.prev_match = A.match_start),
            (A.match_length = 2),
            0 !== e &&
              A.prev_length < A.max_lazy_match &&
              A.strstart - e <= A.w_size - Oe &&
              ((A.match_length = nr(A, e)),
              A.match_length <= 5 &&
                (A.strategy === ve ||
                  (3 === A.match_length &&
                    A.strstart - A.match_start > 4096)) &&
                (A.match_length = 2)),
            A.prev_length >= 3 && A.match_length <= A.prev_length)
          ) {
            ;(n = A.strstart + A.lookahead - 3),
              (r = Ge(A, A.strstart - 1 - A.prev_match, A.prev_length - 3)),
              (A.lookahead -= A.prev_length - 1),
              (A.prev_length -= 2)
            do {
              ++A.strstart <= n &&
                ((A.ins_h = Xe(A, A.ins_h, A.window[A.strstart + 3 - 1])),
                (e = A.prev[A.strstart & A.w_mask] = A.head[A.ins_h]),
                (A.head[A.ins_h] = A.strstart))
            } while (0 != --A.prev_length)
            if (
              ((A.match_available = 0),
              (A.match_length = 2),
              A.strstart++,
              r && (Ar(A, !1), 0 === A.strm.avail_out))
            )
              return 1
          } else if (A.match_available) {
            if (
              ((r = Ge(A, 0, A.window[A.strstart - 1])),
              r && Ar(A, !1),
              A.strstart++,
              A.lookahead--,
              0 === A.strm.avail_out)
            )
              return 1
          } else (A.match_available = 1), A.strstart++, A.lookahead--
        }
        return (
          A.match_available &&
            ((r = Ge(A, 0, A.window[A.strstart - 1])), (A.match_available = 0)),
          (A.insert = A.strstart < 2 ? A.strstart : 2),
          t === qe
            ? (Ar(A, !0), 0 === A.strm.avail_out ? 3 : 4)
            : A.last_lit && (Ar(A, !1), 0 === A.strm.avail_out)
            ? 1
            : 2
        )
      }
    function or(A, t, e, r, n) {
      ;(this.good_length = A),
        (this.max_lazy = t),
        (this.nice_length = e),
        (this.max_chain = r),
        (this.func = n)
    }
    const Br = [
      new or(0, 0, 0, 0, (A, t) => {
        let e = 65535
        for (e > A.pending_buf_size - 5 && (e = A.pending_buf_size - 5); ; ) {
          if (A.lookahead <= 1) {
            if ((ir(A), 0 === A.lookahead && t === _e)) return 1
            if (0 === A.lookahead) break
          }
          ;(A.strstart += A.lookahead), (A.lookahead = 0)
          const r = A.block_start + e
          if (
            (0 === A.strstart || A.strstart >= r) &&
            ((A.lookahead = A.strstart - r),
            (A.strstart = r),
            Ar(A, !1),
            0 === A.strm.avail_out)
          )
            return 1
          if (
            A.strstart - A.block_start >= A.w_size - Oe &&
            (Ar(A, !1), 0 === A.strm.avail_out)
          )
            return 1
        }
        return (
          (A.insert = 0),
          t === qe
            ? (Ar(A, !0), 0 === A.strm.avail_out ? 3 : 4)
            : (A.strstart > A.block_start && (Ar(A, !1), A.strm.avail_out), 1)
        )
      }),
      new or(4, 4, 8, 4, ar),
      new or(4, 5, 16, 8, ar),
      new or(4, 6, 32, 32, ar),
      new or(4, 4, 16, 16, sr),
      new or(8, 16, 32, 32, sr),
      new or(8, 16, 128, 128, sr),
      new or(8, 32, 128, 256, sr),
      new or(32, 128, 258, 1024, sr),
      new or(32, 258, 258, 4096, sr)
    ]
    function gr() {
      ;(this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = xe),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new Uint16Array(1146)),
        (this.dyn_dtree = new Uint16Array(122)),
        (this.bl_tree = new Uint16Array(78)),
        ze(this.dyn_ltree),
        ze(this.dyn_dtree),
        ze(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new Uint16Array(16)),
        (this.heap = new Uint16Array(573)),
        ze(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new Uint16Array(573)),
        ze(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0)
    }
    const Ir = A => {
        if (!A || !A.state) return Pe(A, He)
        ;(A.total_in = A.total_out = 0), (A.data_type = Le)
        const t = A.state
        return (
          (t.pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = t.wrap ? 42 : Ke),
          (A.adler = 2 === t.wrap ? 0 : 1),
          (t.last_flush = _e),
          de(t),
          De
        )
      },
      hr = A => {
        const t = Ir(A)
        var e
        return (
          t === De &&
            (((e = A.state).window_size = 2 * e.w_size),
            ze(e.head),
            (e.max_lazy_match = Br[e.level].max_lazy),
            (e.good_match = Br[e.level].good_length),
            (e.nice_match = Br[e.level].nice_length),
            (e.max_chain_length = Br[e.level].max_chain),
            (e.strstart = 0),
            (e.block_start = 0),
            (e.lookahead = 0),
            (e.insert = 0),
            (e.match_length = e.prev_length = 2),
            (e.match_available = 0),
            (e.ins_h = 0)),
          t
        )
      },
      Er = (A, t, e, r, n, i) => {
        if (!A) return He
        let a = 1
        if (
          (t === Ue && (t = 6),
          r < 0 ? ((a = 0), (r = -r)) : r > 15 && ((a = 2), (r -= 16)),
          n < 1 ||
            n > 9 ||
            e !== xe ||
            r < 8 ||
            r > 15 ||
            t < 0 ||
            t > 9 ||
            i < 0 ||
            i > Je)
        )
          return Pe(A, He)
        8 === r && (r = 9)
        const s = new gr()
        return (
          (A.state = s),
          (s.strm = A),
          (s.wrap = a),
          (s.gzhead = null),
          (s.w_bits = r),
          (s.w_size = 1 << s.w_bits),
          (s.w_mask = s.w_size - 1),
          (s.hash_bits = n + 7),
          (s.hash_size = 1 << s.hash_bits),
          (s.hash_mask = s.hash_size - 1),
          (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
          (s.window = new Uint8Array(2 * s.w_size)),
          (s.head = new Uint16Array(s.hash_size)),
          (s.prev = new Uint16Array(s.w_size)),
          (s.lit_bufsize = 1 << (n + 6)),
          (s.pending_buf_size = 4 * s.lit_bufsize),
          (s.pending_buf = new Uint8Array(s.pending_buf_size)),
          (s.d_buf = 1 * s.lit_bufsize),
          (s.l_buf = 3 * s.lit_bufsize),
          (s.level = t),
          (s.strategy = i),
          (s.method = e),
          hr(A)
        )
      }
    var Qr = Er,
      cr = (A, t) =>
        A && A.state
          ? 2 !== A.state.wrap
            ? He
            : ((A.state.gzhead = t), De)
          : He,
      ur = (A, t) => {
        let e, r
        if (!A || !A.state || t > Se || t < 0) return A ? Pe(A, He) : He
        const n = A.state
        if (
          !A.output ||
          (!A.input && 0 !== A.avail_in) ||
          (n.status === Ve && t !== qe)
        )
          return Pe(A, 0 === A.avail_out ? Re : He)
        n.strm = A
        const i = n.last_flush
        if (((n.last_flush = t), 42 === n.status))
          if (2 === n.wrap)
            (A.adler = 0),
              tr(n, 31),
              tr(n, 139),
              tr(n, 8),
              n.gzhead
                ? (tr(
                    n,
                    (n.gzhead.text ? 1 : 0) +
                      (n.gzhead.hcrc ? 2 : 0) +
                      (n.gzhead.extra ? 4 : 0) +
                      (n.gzhead.name ? 8 : 0) +
                      (n.gzhead.comment ? 16 : 0)
                  ),
                  tr(n, 255 & n.gzhead.time),
                  tr(n, (n.gzhead.time >> 8) & 255),
                  tr(n, (n.gzhead.time >> 16) & 255),
                  tr(n, (n.gzhead.time >> 24) & 255),
                  tr(
                    n,
                    9 === n.level ? 2 : n.strategy >= Me || n.level < 2 ? 4 : 0
                  ),
                  tr(n, 255 & n.gzhead.os),
                  n.gzhead.extra &&
                    n.gzhead.extra.length &&
                    (tr(n, 255 & n.gzhead.extra.length),
                    tr(n, (n.gzhead.extra.length >> 8) & 255)),
                  n.gzhead.hcrc &&
                    (A.adler = le(A.adler, n.pending_buf, n.pending, 0)),
                  (n.gzindex = 0),
                  (n.status = 69))
                : (tr(n, 0),
                  tr(n, 0),
                  tr(n, 0),
                  tr(n, 0),
                  tr(n, 0),
                  tr(
                    n,
                    9 === n.level ? 2 : n.strategy >= Me || n.level < 2 ? 4 : 0
                  ),
                  tr(n, 3),
                  (n.status = Ke))
          else {
            let t = (xe + ((n.w_bits - 8) << 4)) << 8,
              e = -1
            ;(e =
              n.strategy >= Me || n.level < 2
                ? 0
                : n.level < 6
                ? 1
                : 6 === n.level
                ? 2
                : 3),
              (t |= e << 6),
              0 !== n.strstart && (t |= 32),
              (t += 31 - (t % 31)),
              (n.status = Ke),
              er(n, t),
              0 !== n.strstart &&
                (er(n, A.adler >>> 16), er(n, 65535 & A.adler)),
              (A.adler = 1)
          }
        if (69 === n.status)
          if (n.gzhead.extra) {
            for (
              e = n.pending;
              n.gzindex < (65535 & n.gzhead.extra.length) &&
              (n.pending !== n.pending_buf_size ||
                (n.gzhead.hcrc &&
                  n.pending > e &&
                  (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
                $e(A),
                (e = n.pending),
                n.pending !== n.pending_buf_size));

            )
              tr(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++
            n.gzhead.hcrc &&
              n.pending > e &&
              (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
              n.gzindex === n.gzhead.extra.length &&
                ((n.gzindex = 0), (n.status = 73))
          } else n.status = 73
        if (73 === n.status)
          if (n.gzhead.name) {
            e = n.pending
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > e &&
                  (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
                $e(A),
                (e = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                r = 1
                break
              }
              ;(r =
                n.gzindex < n.gzhead.name.length
                  ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                  : 0),
                tr(n, r)
            } while (0 !== r)
            n.gzhead.hcrc &&
              n.pending > e &&
              (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
              0 === r && ((n.gzindex = 0), (n.status = 91))
          } else n.status = 91
        if (91 === n.status)
          if (n.gzhead.comment) {
            e = n.pending
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > e &&
                  (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
                $e(A),
                (e = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                r = 1
                break
              }
              ;(r =
                n.gzindex < n.gzhead.comment.length
                  ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                  : 0),
                tr(n, r)
            } while (0 !== r)
            n.gzhead.hcrc &&
              n.pending > e &&
              (A.adler = le(A.adler, n.pending_buf, n.pending - e, e)),
              0 === r && (n.status = je)
          } else n.status = je
        if (
          (n.status === je &&
            (n.gzhead.hcrc
              ? (n.pending + 2 > n.pending_buf_size && $e(A),
                n.pending + 2 <= n.pending_buf_size &&
                  (tr(n, 255 & A.adler),
                  tr(n, (A.adler >> 8) & 255),
                  (A.adler = 0),
                  (n.status = Ke)))
              : (n.status = Ke)),
          0 !== n.pending)
        ) {
          if (($e(A), 0 === A.avail_out)) return (n.last_flush = -1), De
        } else if (0 === A.avail_in && We(t) <= We(i) && t !== qe)
          return Pe(A, Re)
        if (n.status === Ve && 0 !== A.avail_in) return Pe(A, Re)
        if (
          0 !== A.avail_in ||
          0 !== n.lookahead ||
          (t !== _e && n.status !== Ve)
        ) {
          let e =
            n.strategy === Me
              ? ((A, t) => {
                  let e
                  for (;;) {
                    if (0 === A.lookahead && (ir(A), 0 === A.lookahead)) {
                      if (t === _e) return 1
                      break
                    }
                    if (
                      ((A.match_length = 0),
                      (e = Ge(A, 0, A.window[A.strstart])),
                      A.lookahead--,
                      A.strstart++,
                      e && (Ar(A, !1), 0 === A.strm.avail_out))
                    )
                      return 1
                  }
                  return (
                    (A.insert = 0),
                    t === qe
                      ? (Ar(A, !0), 0 === A.strm.avail_out ? 3 : 4)
                      : A.last_lit && (Ar(A, !1), 0 === A.strm.avail_out)
                      ? 1
                      : 2
                  )
                })(n, t)
              : n.strategy === Ye
              ? ((A, t) => {
                  let e, r, n, i
                  const a = A.window
                  for (;;) {
                    if (A.lookahead <= Ze) {
                      if ((ir(A), A.lookahead <= Ze && t === _e)) return 1
                      if (0 === A.lookahead) break
                    }
                    if (
                      ((A.match_length = 0),
                      A.lookahead >= 3 &&
                        A.strstart > 0 &&
                        ((n = A.strstart - 1),
                        (r = a[n]),
                        r === a[++n] && r === a[++n] && r === a[++n]))
                    ) {
                      i = A.strstart + Ze
                      do {} while (
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        r === a[++n] &&
                        n < i
                      )
                      ;(A.match_length = Ze - (i - n)),
                        A.match_length > A.lookahead &&
                          (A.match_length = A.lookahead)
                    }
                    if (
                      (A.match_length >= 3
                        ? ((e = Ge(A, 1, A.match_length - 3)),
                          (A.lookahead -= A.match_length),
                          (A.strstart += A.match_length),
                          (A.match_length = 0))
                        : ((e = Ge(A, 0, A.window[A.strstart])),
                          A.lookahead--,
                          A.strstart++),
                      e && (Ar(A, !1), 0 === A.strm.avail_out))
                    )
                      return 1
                  }
                  return (
                    (A.insert = 0),
                    t === qe
                      ? (Ar(A, !0), 0 === A.strm.avail_out ? 3 : 4)
                      : A.last_lit && (Ar(A, !1), 0 === A.strm.avail_out)
                      ? 1
                      : 2
                  )
                })(n, t)
              : Br[n.level].func(n, t)
          if (((3 !== e && 4 !== e) || (n.status = Ve), 1 === e || 3 === e))
            return 0 === A.avail_out && (n.last_flush = -1), De
          if (
            2 === e &&
            (t === me
              ? ke(n)
              : t !== Se &&
                (pe(n, 0, 0, !1),
                t === be &&
                  (ze(n.head),
                  0 === n.lookahead &&
                    ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
            $e(A),
            0 === A.avail_out)
          )
            return (n.last_flush = -1), De
        }
        return t !== qe
          ? De
          : n.wrap <= 0
          ? Fe
          : (2 === n.wrap
              ? (tr(n, 255 & A.adler),
                tr(n, (A.adler >> 8) & 255),
                tr(n, (A.adler >> 16) & 255),
                tr(n, (A.adler >> 24) & 255),
                tr(n, 255 & A.total_in),
                tr(n, (A.total_in >> 8) & 255),
                tr(n, (A.total_in >> 16) & 255),
                tr(n, (A.total_in >> 24) & 255))
              : (er(n, A.adler >>> 16), er(n, 65535 & A.adler)),
            $e(A),
            n.wrap > 0 && (n.wrap = -n.wrap),
            0 !== n.pending ? De : Fe)
      },
      Cr = A => {
        if (!A || !A.state) return He
        const t = A.state.status
        return 42 !== t &&
          69 !== t &&
          73 !== t &&
          91 !== t &&
          t !== je &&
          t !== Ke &&
          t !== Ve
          ? Pe(A, He)
          : ((A.state = null), t === Ke ? Pe(A, Ne) : De)
      },
      lr = (A, t) => {
        let e = t.length
        if (!A || !A.state) return He
        const r = A.state,
          n = r.wrap
        if (2 === n || (1 === n && 42 !== r.status) || r.lookahead) return He
        if (
          (1 === n && (A.adler = ue(A.adler, t, e, 0)),
          (r.wrap = 0),
          e >= r.w_size)
        ) {
          0 === n &&
            (ze(r.head), (r.strstart = 0), (r.block_start = 0), (r.insert = 0))
          let A = new Uint8Array(r.w_size)
          A.set(t.subarray(e - r.w_size, e), 0), (t = A), (e = r.w_size)
        }
        const i = A.avail_in,
          a = A.next_in,
          s = A.input
        for (
          A.avail_in = e, A.next_in = 0, A.input = t, ir(r);
          r.lookahead >= 3;

        ) {
          let A = r.strstart,
            t = r.lookahead - 2
          do {
            ;(r.ins_h = Xe(r, r.ins_h, r.window[A + 3 - 1])),
              (r.prev[A & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = A),
              A++
          } while (--t)
          ;(r.strstart = A), (r.lookahead = 2), ir(r)
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = 2),
          (r.match_available = 0),
          (A.next_in = a),
          (A.input = s),
          (A.avail_in = i),
          (r.wrap = n),
          De
        )
      }
    const fr = (A, t) => Object.prototype.hasOwnProperty.call(A, t)
    var wr = function (A) {
        const t = Array.prototype.slice.call(arguments, 1)
        for (; t.length; ) {
          const e = t.shift()
          if (e) {
            if ("object" != typeof e)
              throw new TypeError(e + "must be non-object")
            for (const t in e) fr(e, t) && (A[t] = e[t])
          }
        }
        return A
      },
      dr = A => {
        let t = 0
        for (let e = 0, r = A.length; e < r; e++) t += A[e].length
        const e = new Uint8Array(t)
        for (let t = 0, r = 0, n = A.length; t < n; t++) {
          let n = A[t]
          e.set(n, r), (r += n.length)
        }
        return e
      }
    let pr = !0
    try {
      String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (A) {
      pr = !1
    }
    const yr = new Uint8Array(256)
    for (let A = 0; A < 256; A++)
      yr[A] =
        A >= 252
          ? 6
          : A >= 248
          ? 5
          : A >= 240
          ? 4
          : A >= 224
          ? 3
          : A >= 192
          ? 2
          : 1
    yr[254] = yr[254] = 1
    var Gr = A => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
          return new TextEncoder().encode(A)
        let t,
          e,
          r,
          n,
          i,
          a = A.length,
          s = 0
        for (n = 0; n < a; n++)
          (e = A.charCodeAt(n)),
            55296 == (64512 & e) &&
              n + 1 < a &&
              ((r = A.charCodeAt(n + 1)),
              56320 == (64512 & r) &&
                ((e = 65536 + ((e - 55296) << 10) + (r - 56320)), n++)),
            (s += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4)
        for (t = new Uint8Array(s), i = 0, n = 0; i < s; n++)
          (e = A.charCodeAt(n)),
            55296 == (64512 & e) &&
              n + 1 < a &&
              ((r = A.charCodeAt(n + 1)),
              56320 == (64512 & r) &&
                ((e = 65536 + ((e - 55296) << 10) + (r - 56320)), n++)),
            e < 128
              ? (t[i++] = e)
              : e < 2048
              ? ((t[i++] = 192 | (e >>> 6)), (t[i++] = 128 | (63 & e)))
              : e < 65536
              ? ((t[i++] = 224 | (e >>> 12)),
                (t[i++] = 128 | ((e >>> 6) & 63)),
                (t[i++] = 128 | (63 & e)))
              : ((t[i++] = 240 | (e >>> 18)),
                (t[i++] = 128 | ((e >>> 12) & 63)),
                (t[i++] = 128 | ((e >>> 6) & 63)),
                (t[i++] = 128 | (63 & e)))
        return t
      },
      kr = (A, t) => {
        const e = t || A.length
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
          return new TextDecoder().decode(A.subarray(0, t))
        let r, n
        const i = new Array(2 * e)
        for (n = 0, r = 0; r < e; ) {
          let t = A[r++]
          if (t < 128) {
            i[n++] = t
            continue
          }
          let a = yr[t]
          if (a > 4) (i[n++] = 65533), (r += a - 1)
          else {
            for (t &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && r < e; )
              (t = (t << 6) | (63 & A[r++])), a--
            a > 1
              ? (i[n++] = 65533)
              : t < 65536
              ? (i[n++] = t)
              : ((t -= 65536),
                (i[n++] = 55296 | ((t >> 10) & 1023)),
                (i[n++] = 56320 | (1023 & t)))
          }
        }
        return ((A, t) => {
          if (t < 65534 && A.subarray && pr)
            return String.fromCharCode.apply(
              null,
              A.length === t ? A : A.subarray(0, t)
            )
          let e = ""
          for (let r = 0; r < t; r++) e += String.fromCharCode(A[r])
          return e
        })(i, n)
      },
      _r = (A, t) => {
        ;(t = t || A.length) > A.length && (t = A.length)
        let e = t - 1
        for (; e >= 0 && 128 == (192 & A[e]); ) e--
        return e < 0 || 0 === e ? t : e + yr[A[e]] > t ? e : t
      },
      mr = function () {
        ;(this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0)
      }
    const br = Object.prototype.toString,
      {
        Z_NO_FLUSH: qr,
        Z_SYNC_FLUSH: Sr,
        Z_FULL_FLUSH: Dr,
        Z_FINISH: Fr,
        Z_OK: Hr,
        Z_STREAM_END: Nr,
        Z_DEFAULT_COMPRESSION: Rr,
        Z_DEFAULT_STRATEGY: Ur,
        Z_DEFLATED: vr
      } = we
    function Mr(A) {
      this.options = wr(
        {
          level: Rr,
          method: vr,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Ur
        },
        A || {}
      )
      let t = this.options
      t.raw && t.windowBits > 0
        ? (t.windowBits = -t.windowBits)
        : t.gzip &&
          t.windowBits > 0 &&
          t.windowBits < 16 &&
          (t.windowBits += 16),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new mr()),
        (this.strm.avail_out = 0)
      let e = Qr(
        this.strm,
        t.level,
        t.method,
        t.windowBits,
        t.memLevel,
        t.strategy
      )
      if (e !== Hr) throw new Error(fe[e])
      if ((t.header && cr(this.strm, t.header), t.dictionary)) {
        let A
        if (
          ((A =
            "string" == typeof t.dictionary
              ? Gr(t.dictionary)
              : "[object ArrayBuffer]" === br.call(t.dictionary)
              ? new Uint8Array(t.dictionary)
              : t.dictionary),
          (e = lr(this.strm, A)),
          e !== Hr)
        )
          throw new Error(fe[e])
        this._dict_set = !0
      }
    }
    function Yr(A, t) {
      const e = new Mr(t)
      if ((e.push(A, !0), e.err)) throw e.msg || fe[e.err]
      return e.result
    }
    ;(Mr.prototype.push = function (A, t) {
      const e = this.strm,
        r = this.options.chunkSize
      let n, i
      if (this.ended) return !1
      for (
        i = t === ~~t ? t : !0 === t ? Fr : qr,
          "string" == typeof A
            ? (e.input = Gr(A))
            : "[object ArrayBuffer]" === br.call(A)
            ? (e.input = new Uint8Array(A))
            : (e.input = A),
          e.next_in = 0,
          e.avail_in = e.input.length;
        ;

      )
        if (
          (0 === e.avail_out &&
            ((e.output = new Uint8Array(r)),
            (e.next_out = 0),
            (e.avail_out = r)),
          (i === Sr || i === Dr) && e.avail_out <= 6)
        )
          this.onData(e.output.subarray(0, e.next_out)), (e.avail_out = 0)
        else {
          if (((n = ur(e, i)), n === Nr))
            return (
              e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)),
              (n = Cr(this.strm)),
              this.onEnd(n),
              (this.ended = !0),
              n === Hr
            )
          if (0 !== e.avail_out) {
            if (i > 0 && e.next_out > 0)
              this.onData(e.output.subarray(0, e.next_out)), (e.avail_out = 0)
            else if (0 === e.avail_in) break
          } else this.onData(e.output)
        }
      return !0
    }),
      (Mr.prototype.onData = function (A) {
        this.chunks.push(A)
      }),
      (Mr.prototype.onEnd = function (A) {
        A === Hr && (this.result = dr(this.chunks)),
          (this.chunks = []),
          (this.err = A),
          (this.msg = this.strm.msg)
      })
    var Jr = {
        Deflate: Mr,
        deflate: Yr,
        deflateRaw: function (A, t) {
          return ((t = t || {}).raw = !0), Yr(A, t)
        },
        gzip: function (A, t) {
          return ((t = t || {}).gzip = !0), Yr(A, t)
        },
        constants: we
      },
      Tr = function (A, t) {
        let e,
          r,
          n,
          i,
          a,
          s,
          o,
          B,
          g,
          I,
          h,
          E,
          Q,
          c,
          u,
          C,
          l,
          f,
          w,
          d,
          p,
          y,
          G,
          k
        const _ = A.state
        ;(e = A.next_in),
          (G = A.input),
          (r = e + (A.avail_in - 5)),
          (n = A.next_out),
          (k = A.output),
          (i = n - (t - A.avail_out)),
          (a = n + (A.avail_out - 257)),
          (s = _.dmax),
          (o = _.wsize),
          (B = _.whave),
          (g = _.wnext),
          (I = _.window),
          (h = _.hold),
          (E = _.bits),
          (Q = _.lencode),
          (c = _.distcode),
          (u = (1 << _.lenbits) - 1),
          (C = (1 << _.distbits) - 1)
        A: do {
          E < 15 &&
            ((h += G[e++] << E), (E += 8), (h += G[e++] << E), (E += 8)),
            (l = Q[h & u])
          t: for (;;) {
            if (
              ((f = l >>> 24),
              (h >>>= f),
              (E -= f),
              (f = (l >>> 16) & 255),
              0 === f)
            )
              k[n++] = 65535 & l
            else {
              if (!(16 & f)) {
                if (0 == (64 & f)) {
                  l = Q[(65535 & l) + (h & ((1 << f) - 1))]
                  continue t
                }
                if (32 & f) {
                  _.mode = 12
                  break A
                }
                ;(A.msg = "invalid literal/length code"), (_.mode = 30)
                break A
              }
              ;(w = 65535 & l),
                (f &= 15),
                f &&
                  (E < f && ((h += G[e++] << E), (E += 8)),
                  (w += h & ((1 << f) - 1)),
                  (h >>>= f),
                  (E -= f)),
                E < 15 &&
                  ((h += G[e++] << E), (E += 8), (h += G[e++] << E), (E += 8)),
                (l = c[h & C])
              e: for (;;) {
                if (
                  ((f = l >>> 24),
                  (h >>>= f),
                  (E -= f),
                  (f = (l >>> 16) & 255),
                  !(16 & f))
                ) {
                  if (0 == (64 & f)) {
                    l = c[(65535 & l) + (h & ((1 << f) - 1))]
                    continue e
                  }
                  ;(A.msg = "invalid distance code"), (_.mode = 30)
                  break A
                }
                if (
                  ((d = 65535 & l),
                  (f &= 15),
                  E < f &&
                    ((h += G[e++] << E),
                    (E += 8),
                    E < f && ((h += G[e++] << E), (E += 8))),
                  (d += h & ((1 << f) - 1)),
                  d > s)
                ) {
                  ;(A.msg = "invalid distance too far back"), (_.mode = 30)
                  break A
                }
                if (((h >>>= f), (E -= f), (f = n - i), d > f)) {
                  if (((f = d - f), f > B && _.sane)) {
                    ;(A.msg = "invalid distance too far back"), (_.mode = 30)
                    break A
                  }
                  if (((p = 0), (y = I), 0 === g)) {
                    if (((p += o - f), f < w)) {
                      w -= f
                      do {
                        k[n++] = I[p++]
                      } while (--f)
                      ;(p = n - d), (y = k)
                    }
                  } else if (g < f) {
                    if (((p += o + g - f), (f -= g), f < w)) {
                      w -= f
                      do {
                        k[n++] = I[p++]
                      } while (--f)
                      if (((p = 0), g < w)) {
                        ;(f = g), (w -= f)
                        do {
                          k[n++] = I[p++]
                        } while (--f)
                        ;(p = n - d), (y = k)
                      }
                    }
                  } else if (((p += g - f), f < w)) {
                    w -= f
                    do {
                      k[n++] = I[p++]
                    } while (--f)
                    ;(p = n - d), (y = k)
                  }
                  for (; w > 2; )
                    (k[n++] = y[p++]),
                      (k[n++] = y[p++]),
                      (k[n++] = y[p++]),
                      (w -= 3)
                  w && ((k[n++] = y[p++]), w > 1 && (k[n++] = y[p++]))
                } else {
                  p = n - d
                  do {
                    ;(k[n++] = k[p++]),
                      (k[n++] = k[p++]),
                      (k[n++] = k[p++]),
                      (w -= 3)
                  } while (w > 2)
                  w && ((k[n++] = k[p++]), w > 1 && (k[n++] = k[p++]))
                }
                break
              }
            }
            break
          }
        } while (e < r && n < a)
        ;(w = E >> 3),
          (e -= w),
          (E -= w << 3),
          (h &= (1 << E) - 1),
          (A.next_in = e),
          (A.next_out = n),
          (A.avail_in = e < r ? r - e + 5 : 5 - (e - r)),
          (A.avail_out = n < a ? a - n + 257 : 257 - (n - a)),
          (_.hold = h),
          (_.bits = E)
      }
    const Lr = new Uint16Array([
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
      ]),
      xr = new Uint8Array([
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
      ]),
      Zr = new Uint16Array([
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0
      ]),
      Or = new Uint8Array([
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64
      ])
    var jr = (A, t, e, r, n, i, a, s) => {
      const o = s.bits
      let B,
        g,
        I,
        h,
        E,
        Q,
        c = 0,
        u = 0,
        C = 0,
        l = 0,
        f = 0,
        w = 0,
        d = 0,
        p = 0,
        y = 0,
        G = 0,
        k = null,
        _ = 0
      const m = new Uint16Array(16),
        b = new Uint16Array(16)
      let q,
        S,
        D,
        F = null,
        H = 0
      for (c = 0; c <= 15; c++) m[c] = 0
      for (u = 0; u < r; u++) m[t[e + u]]++
      for (f = o, l = 15; l >= 1 && 0 === m[l]; l--);
      if ((f > l && (f = l), 0 === l))
        return (n[i++] = 20971520), (n[i++] = 20971520), (s.bits = 1), 0
      for (C = 1; C < l && 0 === m[C]; C++);
      for (f < C && (f = C), p = 1, c = 1; c <= 15; c++)
        if (((p <<= 1), (p -= m[c]), p < 0)) return -1
      if (p > 0 && (0 === A || 1 !== l)) return -1
      for (b[1] = 0, c = 1; c < 15; c++) b[c + 1] = b[c] + m[c]
      for (u = 0; u < r; u++) 0 !== t[e + u] && (a[b[t[e + u]]++] = u)
      if (
        (0 === A
          ? ((k = F = a), (Q = 19))
          : 1 === A
          ? ((k = Lr), (_ -= 257), (F = xr), (H -= 257), (Q = 256))
          : ((k = Zr), (F = Or), (Q = -1)),
        (G = 0),
        (u = 0),
        (c = C),
        (E = i),
        (w = f),
        (d = 0),
        (I = -1),
        (y = 1 << f),
        (h = y - 1),
        (1 === A && y > 852) || (2 === A && y > 592))
      )
        return 1
      for (;;) {
        ;(q = c - d),
          a[u] < Q
            ? ((S = 0), (D = a[u]))
            : a[u] > Q
            ? ((S = F[H + a[u]]), (D = k[_ + a[u]]))
            : ((S = 96), (D = 0)),
          (B = 1 << (c - d)),
          (g = 1 << w),
          (C = g)
        do {
          ;(g -= B), (n[E + (G >> d) + g] = (q << 24) | (S << 16) | D | 0)
        } while (0 !== g)
        for (B = 1 << (c - 1); G & B; ) B >>= 1
        if ((0 !== B ? ((G &= B - 1), (G += B)) : (G = 0), u++, 0 == --m[c])) {
          if (c === l) break
          c = t[e + a[u]]
        }
        if (c > f && (G & h) !== I) {
          for (
            0 === d && (d = f), E += C, w = c - d, p = 1 << w;
            w + d < l && ((p -= m[w + d]), !(p <= 0));

          )
            w++, (p <<= 1)
          if (((y += 1 << w), (1 === A && y > 852) || (2 === A && y > 592)))
            return 1
          ;(I = G & h), (n[I] = (f << 24) | (w << 16) | (E - i) | 0)
        }
      }
      return (
        0 !== G && (n[E + G] = ((c - d) << 24) | (64 << 16) | 0),
        (s.bits = f),
        0
      )
    }
    const {
        Z_FINISH: Kr,
        Z_BLOCK: Vr,
        Z_TREES: Pr,
        Z_OK: Wr,
        Z_STREAM_END: zr,
        Z_NEED_DICT: Xr,
        Z_STREAM_ERROR: $r,
        Z_DATA_ERROR: An,
        Z_MEM_ERROR: tn,
        Z_BUF_ERROR: en,
        Z_DEFLATED: rn
      } = we,
      nn = 12,
      an = 30,
      sn = A =>
        ((A >>> 24) & 255) +
        ((A >>> 8) & 65280) +
        ((65280 & A) << 8) +
        ((255 & A) << 24)
    function on() {
      ;(this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new Uint16Array(320)),
        (this.work = new Uint16Array(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0)
    }
    const Bn = A => {
        if (!A || !A.state) return $r
        const t = A.state
        return (
          (A.total_in = A.total_out = t.total = 0),
          (A.msg = ""),
          t.wrap && (A.adler = 1 & t.wrap),
          (t.mode = 1),
          (t.last = 0),
          (t.havedict = 0),
          (t.dmax = 32768),
          (t.head = null),
          (t.hold = 0),
          (t.bits = 0),
          (t.lencode = t.lendyn = new Int32Array(852)),
          (t.distcode = t.distdyn = new Int32Array(592)),
          (t.sane = 1),
          (t.back = -1),
          Wr
        )
      },
      gn = A => {
        if (!A || !A.state) return $r
        const t = A.state
        return (t.wsize = 0), (t.whave = 0), (t.wnext = 0), Bn(A)
      },
      In = (A, t) => {
        let e
        if (!A || !A.state) return $r
        const r = A.state
        return (
          t < 0
            ? ((e = 0), (t = -t))
            : ((e = 1 + (t >> 4)), t < 48 && (t &= 15)),
          t && (t < 8 || t > 15)
            ? $r
            : (null !== r.window && r.wbits !== t && (r.window = null),
              (r.wrap = e),
              (r.wbits = t),
              gn(A))
        )
      },
      hn = (A, t) => {
        if (!A) return $r
        const e = new on()
        ;(A.state = e), (e.window = null)
        const r = In(A, t)
        return r !== Wr && (A.state = null), r
      }
    let En,
      Qn,
      cn = !0
    const un = A => {
        if (cn) {
          ;(En = new Int32Array(512)), (Qn = new Int32Array(32))
          let t = 0
          for (; t < 144; ) A.lens[t++] = 8
          for (; t < 256; ) A.lens[t++] = 9
          for (; t < 280; ) A.lens[t++] = 7
          for (; t < 288; ) A.lens[t++] = 8
          for (
            jr(1, A.lens, 0, 288, En, 0, A.work, { bits: 9 }), t = 0;
            t < 32;

          )
            A.lens[t++] = 5
          jr(2, A.lens, 0, 32, Qn, 0, A.work, { bits: 5 }), (cn = !1)
        }
        ;(A.lencode = En), (A.lenbits = 9), (A.distcode = Qn), (A.distbits = 5)
      },
      Cn = (A, t, e, r) => {
        let n
        const i = A.state
        return (
          null === i.window &&
            ((i.wsize = 1 << i.wbits),
            (i.wnext = 0),
            (i.whave = 0),
            (i.window = new Uint8Array(i.wsize))),
          r >= i.wsize
            ? (i.window.set(t.subarray(e - i.wsize, e), 0),
              (i.wnext = 0),
              (i.whave = i.wsize))
            : ((n = i.wsize - i.wnext),
              n > r && (n = r),
              i.window.set(t.subarray(e - r, e - r + n), i.wnext),
              (r -= n)
                ? (i.window.set(t.subarray(e - r, e), 0),
                  (i.wnext = r),
                  (i.whave = i.wsize))
                : ((i.wnext += n),
                  i.wnext === i.wsize && (i.wnext = 0),
                  i.whave < i.wsize && (i.whave += n))),
          0
        )
      }
    var ln = gn,
      fn = hn,
      wn = (A, t) => {
        let e,
          r,
          n,
          i,
          a,
          s,
          o,
          B,
          g,
          I,
          h,
          E,
          Q,
          c,
          u,
          C,
          l,
          f,
          w,
          d,
          p,
          y,
          G = 0
        const k = new Uint8Array(4)
        let _, m
        const b = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
        ])
        if (!A || !A.state || !A.output || (!A.input && 0 !== A.avail_in))
          return $r
        ;(e = A.state),
          e.mode === nn && (e.mode = 13),
          (a = A.next_out),
          (n = A.output),
          (o = A.avail_out),
          (i = A.next_in),
          (r = A.input),
          (s = A.avail_in),
          (B = e.hold),
          (g = e.bits),
          (I = s),
          (h = o),
          (y = Wr)
        A: for (;;)
          switch (e.mode) {
            case 1:
              if (0 === e.wrap) {
                e.mode = 13
                break
              }
              for (; g < 16; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if (2 & e.wrap && 35615 === B) {
                ;(e.check = 0),
                  (k[0] = 255 & B),
                  (k[1] = (B >>> 8) & 255),
                  (e.check = le(e.check, k, 2, 0)),
                  (B = 0),
                  (g = 0),
                  (e.mode = 2)
                break
              }
              if (
                ((e.flags = 0),
                e.head && (e.head.done = !1),
                !(1 & e.wrap) || (((255 & B) << 8) + (B >> 8)) % 31)
              ) {
                ;(A.msg = "incorrect header check"), (e.mode = an)
                break
              }
              if ((15 & B) !== rn) {
                ;(A.msg = "unknown compression method"), (e.mode = an)
                break
              }
              if (((B >>>= 4), (g -= 4), (p = 8 + (15 & B)), 0 === e.wbits))
                e.wbits = p
              else if (p > e.wbits) {
                ;(A.msg = "invalid window size"), (e.mode = an)
                break
              }
              ;(e.dmax = 1 << e.wbits),
                (A.adler = e.check = 1),
                (e.mode = 512 & B ? 10 : nn),
                (B = 0),
                (g = 0)
              break
            case 2:
              for (; g < 16; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if (((e.flags = B), (255 & e.flags) !== rn)) {
                ;(A.msg = "unknown compression method"), (e.mode = an)
                break
              }
              if (57344 & e.flags) {
                ;(A.msg = "unknown header flags set"), (e.mode = an)
                break
              }
              e.head && (e.head.text = (B >> 8) & 1),
                512 & e.flags &&
                  ((k[0] = 255 & B),
                  (k[1] = (B >>> 8) & 255),
                  (e.check = le(e.check, k, 2, 0))),
                (B = 0),
                (g = 0),
                (e.mode = 3)
            case 3:
              for (; g < 32; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              e.head && (e.head.time = B),
                512 & e.flags &&
                  ((k[0] = 255 & B),
                  (k[1] = (B >>> 8) & 255),
                  (k[2] = (B >>> 16) & 255),
                  (k[3] = (B >>> 24) & 255),
                  (e.check = le(e.check, k, 4, 0))),
                (B = 0),
                (g = 0),
                (e.mode = 4)
            case 4:
              for (; g < 16; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              e.head && ((e.head.xflags = 255 & B), (e.head.os = B >> 8)),
                512 & e.flags &&
                  ((k[0] = 255 & B),
                  (k[1] = (B >>> 8) & 255),
                  (e.check = le(e.check, k, 2, 0))),
                (B = 0),
                (g = 0),
                (e.mode = 5)
            case 5:
              if (1024 & e.flags) {
                for (; g < 16; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(e.length = B),
                  e.head && (e.head.extra_len = B),
                  512 & e.flags &&
                    ((k[0] = 255 & B),
                    (k[1] = (B >>> 8) & 255),
                    (e.check = le(e.check, k, 2, 0))),
                  (B = 0),
                  (g = 0)
              } else e.head && (e.head.extra = null)
              e.mode = 6
            case 6:
              if (
                1024 & e.flags &&
                ((E = e.length),
                E > s && (E = s),
                E &&
                  (e.head &&
                    ((p = e.head.extra_len - e.length),
                    e.head.extra ||
                      (e.head.extra = new Uint8Array(e.head.extra_len)),
                    e.head.extra.set(r.subarray(i, i + E), p)),
                  512 & e.flags && (e.check = le(e.check, r, E, i)),
                  (s -= E),
                  (i += E),
                  (e.length -= E)),
                e.length)
              )
                break A
              ;(e.length = 0), (e.mode = 7)
            case 7:
              if (2048 & e.flags) {
                if (0 === s) break A
                E = 0
                do {
                  ;(p = r[i + E++]),
                    e.head &&
                      p &&
                      e.length < 65536 &&
                      (e.head.name += String.fromCharCode(p))
                } while (p && E < s)
                if (
                  (512 & e.flags && (e.check = le(e.check, r, E, i)),
                  (s -= E),
                  (i += E),
                  p)
                )
                  break A
              } else e.head && (e.head.name = null)
              ;(e.length = 0), (e.mode = 8)
            case 8:
              if (4096 & e.flags) {
                if (0 === s) break A
                E = 0
                do {
                  ;(p = r[i + E++]),
                    e.head &&
                      p &&
                      e.length < 65536 &&
                      (e.head.comment += String.fromCharCode(p))
                } while (p && E < s)
                if (
                  (512 & e.flags && (e.check = le(e.check, r, E, i)),
                  (s -= E),
                  (i += E),
                  p)
                )
                  break A
              } else e.head && (e.head.comment = null)
              e.mode = 9
            case 9:
              if (512 & e.flags) {
                for (; g < 16; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                if (B !== (65535 & e.check)) {
                  ;(A.msg = "header crc mismatch"), (e.mode = an)
                  break
                }
                ;(B = 0), (g = 0)
              }
              e.head &&
                ((e.head.hcrc = (e.flags >> 9) & 1), (e.head.done = !0)),
                (A.adler = e.check = 0),
                (e.mode = nn)
              break
            case 10:
              for (; g < 32; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              ;(A.adler = e.check = sn(B)), (B = 0), (g = 0), (e.mode = 11)
            case 11:
              if (0 === e.havedict)
                return (
                  (A.next_out = a),
                  (A.avail_out = o),
                  (A.next_in = i),
                  (A.avail_in = s),
                  (e.hold = B),
                  (e.bits = g),
                  Xr
                )
              ;(A.adler = e.check = 1), (e.mode = nn)
            case nn:
              if (t === Vr || t === Pr) break A
            case 13:
              if (e.last) {
                ;(B >>>= 7 & g), (g -= 7 & g), (e.mode = 27)
                break
              }
              for (; g < 3; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              switch (((e.last = 1 & B), (B >>>= 1), (g -= 1), 3 & B)) {
                case 0:
                  e.mode = 14
                  break
                case 1:
                  if ((un(e), (e.mode = 20), t === Pr)) {
                    ;(B >>>= 2), (g -= 2)
                    break A
                  }
                  break
                case 2:
                  e.mode = 17
                  break
                case 3:
                  ;(A.msg = "invalid block type"), (e.mode = an)
              }
              ;(B >>>= 2), (g -= 2)
              break
            case 14:
              for (B >>>= 7 & g, g -= 7 & g; g < 32; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if ((65535 & B) != ((B >>> 16) ^ 65535)) {
                ;(A.msg = "invalid stored block lengths"), (e.mode = an)
                break
              }
              if (
                ((e.length = 65535 & B),
                (B = 0),
                (g = 0),
                (e.mode = 15),
                t === Pr)
              )
                break A
            case 15:
              e.mode = 16
            case 16:
              if (((E = e.length), E)) {
                if ((E > s && (E = s), E > o && (E = o), 0 === E)) break A
                n.set(r.subarray(i, i + E), a),
                  (s -= E),
                  (i += E),
                  (o -= E),
                  (a += E),
                  (e.length -= E)
                break
              }
              e.mode = nn
              break
            case 17:
              for (; g < 14; ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if (
                ((e.nlen = 257 + (31 & B)),
                (B >>>= 5),
                (g -= 5),
                (e.ndist = 1 + (31 & B)),
                (B >>>= 5),
                (g -= 5),
                (e.ncode = 4 + (15 & B)),
                (B >>>= 4),
                (g -= 4),
                e.nlen > 286 || e.ndist > 30)
              ) {
                ;(A.msg = "too many length or distance symbols"), (e.mode = an)
                break
              }
              ;(e.have = 0), (e.mode = 18)
            case 18:
              for (; e.have < e.ncode; ) {
                for (; g < 3; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(e.lens[b[e.have++]] = 7 & B), (B >>>= 3), (g -= 3)
              }
              for (; e.have < 19; ) e.lens[b[e.have++]] = 0
              if (
                ((e.lencode = e.lendyn),
                (e.lenbits = 7),
                (_ = { bits: e.lenbits }),
                (y = jr(0, e.lens, 0, 19, e.lencode, 0, e.work, _)),
                (e.lenbits = _.bits),
                y)
              ) {
                ;(A.msg = "invalid code lengths set"), (e.mode = an)
                break
              }
              ;(e.have = 0), (e.mode = 19)
            case 19:
              for (; e.have < e.nlen + e.ndist; ) {
                for (
                  ;
                  (G = e.lencode[B & ((1 << e.lenbits) - 1)]),
                    (u = G >>> 24),
                    (C = (G >>> 16) & 255),
                    (l = 65535 & G),
                    !(u <= g);

                ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                if (l < 16) (B >>>= u), (g -= u), (e.lens[e.have++] = l)
                else {
                  if (16 === l) {
                    for (m = u + 2; g < m; ) {
                      if (0 === s) break A
                      s--, (B += r[i++] << g), (g += 8)
                    }
                    if (((B >>>= u), (g -= u), 0 === e.have)) {
                      ;(A.msg = "invalid bit length repeat"), (e.mode = an)
                      break
                    }
                    ;(p = e.lens[e.have - 1]),
                      (E = 3 + (3 & B)),
                      (B >>>= 2),
                      (g -= 2)
                  } else if (17 === l) {
                    for (m = u + 3; g < m; ) {
                      if (0 === s) break A
                      s--, (B += r[i++] << g), (g += 8)
                    }
                    ;(B >>>= u),
                      (g -= u),
                      (p = 0),
                      (E = 3 + (7 & B)),
                      (B >>>= 3),
                      (g -= 3)
                  } else {
                    for (m = u + 7; g < m; ) {
                      if (0 === s) break A
                      s--, (B += r[i++] << g), (g += 8)
                    }
                    ;(B >>>= u),
                      (g -= u),
                      (p = 0),
                      (E = 11 + (127 & B)),
                      (B >>>= 7),
                      (g -= 7)
                  }
                  if (e.have + E > e.nlen + e.ndist) {
                    ;(A.msg = "invalid bit length repeat"), (e.mode = an)
                    break
                  }
                  for (; E--; ) e.lens[e.have++] = p
                }
              }
              if (e.mode === an) break
              if (0 === e.lens[256]) {
                ;(A.msg = "invalid code -- missing end-of-block"), (e.mode = an)
                break
              }
              if (
                ((e.lenbits = 9),
                (_ = { bits: e.lenbits }),
                (y = jr(1, e.lens, 0, e.nlen, e.lencode, 0, e.work, _)),
                (e.lenbits = _.bits),
                y)
              ) {
                ;(A.msg = "invalid literal/lengths set"), (e.mode = an)
                break
              }
              if (
                ((e.distbits = 6),
                (e.distcode = e.distdyn),
                (_ = { bits: e.distbits }),
                (y = jr(2, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, _)),
                (e.distbits = _.bits),
                y)
              ) {
                ;(A.msg = "invalid distances set"), (e.mode = an)
                break
              }
              if (((e.mode = 20), t === Pr)) break A
            case 20:
              e.mode = 21
            case 21:
              if (s >= 6 && o >= 258) {
                ;(A.next_out = a),
                  (A.avail_out = o),
                  (A.next_in = i),
                  (A.avail_in = s),
                  (e.hold = B),
                  (e.bits = g),
                  Tr(A, h),
                  (a = A.next_out),
                  (n = A.output),
                  (o = A.avail_out),
                  (i = A.next_in),
                  (r = A.input),
                  (s = A.avail_in),
                  (B = e.hold),
                  (g = e.bits),
                  e.mode === nn && (e.back = -1)
                break
              }
              for (
                e.back = 0;
                (G = e.lencode[B & ((1 << e.lenbits) - 1)]),
                  (u = G >>> 24),
                  (C = (G >>> 16) & 255),
                  (l = 65535 & G),
                  !(u <= g);

              ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if (C && 0 == (240 & C)) {
                for (
                  f = u, w = C, d = l;
                  (G = e.lencode[d + ((B & ((1 << (f + w)) - 1)) >> f)]),
                    (u = G >>> 24),
                    (C = (G >>> 16) & 255),
                    (l = 65535 & G),
                    !(f + u <= g);

                ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(B >>>= f), (g -= f), (e.back += f)
              }
              if (
                ((B >>>= u), (g -= u), (e.back += u), (e.length = l), 0 === C)
              ) {
                e.mode = 26
                break
              }
              if (32 & C) {
                ;(e.back = -1), (e.mode = nn)
                break
              }
              if (64 & C) {
                ;(A.msg = "invalid literal/length code"), (e.mode = an)
                break
              }
              ;(e.extra = 15 & C), (e.mode = 22)
            case 22:
              if (e.extra) {
                for (m = e.extra; g < m; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(e.length += B & ((1 << e.extra) - 1)),
                  (B >>>= e.extra),
                  (g -= e.extra),
                  (e.back += e.extra)
              }
              ;(e.was = e.length), (e.mode = 23)
            case 23:
              for (
                ;
                (G = e.distcode[B & ((1 << e.distbits) - 1)]),
                  (u = G >>> 24),
                  (C = (G >>> 16) & 255),
                  (l = 65535 & G),
                  !(u <= g);

              ) {
                if (0 === s) break A
                s--, (B += r[i++] << g), (g += 8)
              }
              if (0 == (240 & C)) {
                for (
                  f = u, w = C, d = l;
                  (G = e.distcode[d + ((B & ((1 << (f + w)) - 1)) >> f)]),
                    (u = G >>> 24),
                    (C = (G >>> 16) & 255),
                    (l = 65535 & G),
                    !(f + u <= g);

                ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(B >>>= f), (g -= f), (e.back += f)
              }
              if (((B >>>= u), (g -= u), (e.back += u), 64 & C)) {
                ;(A.msg = "invalid distance code"), (e.mode = an)
                break
              }
              ;(e.offset = l), (e.extra = 15 & C), (e.mode = 24)
            case 24:
              if (e.extra) {
                for (m = e.extra; g < m; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                ;(e.offset += B & ((1 << e.extra) - 1)),
                  (B >>>= e.extra),
                  (g -= e.extra),
                  (e.back += e.extra)
              }
              if (e.offset > e.dmax) {
                ;(A.msg = "invalid distance too far back"), (e.mode = an)
                break
              }
              e.mode = 25
            case 25:
              if (0 === o) break A
              if (((E = h - o), e.offset > E)) {
                if (((E = e.offset - E), E > e.whave && e.sane)) {
                  ;(A.msg = "invalid distance too far back"), (e.mode = an)
                  break
                }
                E > e.wnext
                  ? ((E -= e.wnext), (Q = e.wsize - E))
                  : (Q = e.wnext - E),
                  E > e.length && (E = e.length),
                  (c = e.window)
              } else (c = n), (Q = a - e.offset), (E = e.length)
              E > o && (E = o), (o -= E), (e.length -= E)
              do {
                n[a++] = c[Q++]
              } while (--E)
              0 === e.length && (e.mode = 21)
              break
            case 26:
              if (0 === o) break A
              ;(n[a++] = e.length), o--, (e.mode = 21)
              break
            case 27:
              if (e.wrap) {
                for (; g < 32; ) {
                  if (0 === s) break A
                  s--, (B |= r[i++] << g), (g += 8)
                }
                if (
                  ((h -= o),
                  (A.total_out += h),
                  (e.total += h),
                  h &&
                    (A.adler = e.check =
                      e.flags
                        ? le(e.check, n, h, a - h)
                        : ue(e.check, n, h, a - h)),
                  (h = o),
                  (e.flags ? B : sn(B)) !== e.check)
                ) {
                  ;(A.msg = "incorrect data check"), (e.mode = an)
                  break
                }
                ;(B = 0), (g = 0)
              }
              e.mode = 28
            case 28:
              if (e.wrap && e.flags) {
                for (; g < 32; ) {
                  if (0 === s) break A
                  s--, (B += r[i++] << g), (g += 8)
                }
                if (B !== (4294967295 & e.total)) {
                  ;(A.msg = "incorrect length check"), (e.mode = an)
                  break
                }
                ;(B = 0), (g = 0)
              }
              e.mode = 29
            case 29:
              y = zr
              break A
            case an:
              y = An
              break A
            case 31:
              return tn
            default:
              return $r
          }
        return (
          (A.next_out = a),
          (A.avail_out = o),
          (A.next_in = i),
          (A.avail_in = s),
          (e.hold = B),
          (e.bits = g),
          (e.wsize ||
            (h !== A.avail_out && e.mode < an && (e.mode < 27 || t !== Kr))) &&
            Cn(A, A.output, A.next_out, h - A.avail_out),
          (I -= A.avail_in),
          (h -= A.avail_out),
          (A.total_in += I),
          (A.total_out += h),
          (e.total += h),
          e.wrap &&
            h &&
            (A.adler = e.check =
              e.flags
                ? le(e.check, n, h, A.next_out - h)
                : ue(e.check, n, h, A.next_out - h)),
          (A.data_type =
            e.bits +
            (e.last ? 64 : 0) +
            (e.mode === nn ? 128 : 0) +
            (20 === e.mode || 15 === e.mode ? 256 : 0)),
          ((0 === I && 0 === h) || t === Kr) && y === Wr && (y = en),
          y
        )
      },
      dn = A => {
        if (!A || !A.state) return $r
        let t = A.state
        return t.window && (t.window = null), (A.state = null), Wr
      },
      pn = (A, t) => {
        if (!A || !A.state) return $r
        const e = A.state
        return 0 == (2 & e.wrap) ? $r : ((e.head = t), (t.done = !1), Wr)
      },
      yn = (A, t) => {
        const e = t.length
        let r, n, i
        return A && A.state
          ? ((r = A.state),
            0 !== r.wrap && 11 !== r.mode
              ? $r
              : 11 === r.mode && ((n = 1), (n = ue(n, t, e, 0)), n !== r.check)
              ? An
              : ((i = Cn(A, t, e, e)),
                i ? ((r.mode = 31), tn) : ((r.havedict = 1), Wr)))
          : $r
      },
      Gn = function () {
        ;(this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1)
      }
    const kn = Object.prototype.toString,
      {
        Z_NO_FLUSH: _n,
        Z_FINISH: mn,
        Z_OK: bn,
        Z_STREAM_END: qn,
        Z_NEED_DICT: Sn,
        Z_STREAM_ERROR: Dn,
        Z_DATA_ERROR: Fn,
        Z_MEM_ERROR: Hn
      } = we
    function Nn(A) {
      this.options = wr({ chunkSize: 65536, windowBits: 15, to: "" }, A || {})
      const t = this.options
      t.raw &&
        t.windowBits >= 0 &&
        t.windowBits < 16 &&
        ((t.windowBits = -t.windowBits),
        0 === t.windowBits && (t.windowBits = -15)),
        !(t.windowBits >= 0 && t.windowBits < 16) ||
          (A && A.windowBits) ||
          (t.windowBits += 32),
        t.windowBits > 15 &&
          t.windowBits < 48 &&
          0 == (15 & t.windowBits) &&
          (t.windowBits |= 15),
        (this.err = 0),
        (this.msg = ""),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new mr()),
        (this.strm.avail_out = 0)
      let e = fn(this.strm, t.windowBits)
      if (e !== bn) throw new Error(fe[e])
      if (
        ((this.header = new Gn()),
        pn(this.strm, this.header),
        t.dictionary &&
          ("string" == typeof t.dictionary
            ? (t.dictionary = Gr(t.dictionary))
            : "[object ArrayBuffer]" === kn.call(t.dictionary) &&
              (t.dictionary = new Uint8Array(t.dictionary)),
          t.raw && ((e = yn(this.strm, t.dictionary)), e !== bn)))
      )
        throw new Error(fe[e])
    }
    function Rn(A, t) {
      const e = new Nn(t)
      if ((e.push(A), e.err)) throw e.msg || fe[e.err]
      return e.result
    }
    ;(Nn.prototype.push = function (A, t) {
      const e = this.strm,
        r = this.options.chunkSize,
        n = this.options.dictionary
      let i, a, s
      if (this.ended) return !1
      for (
        a = t === ~~t ? t : !0 === t ? mn : _n,
          "[object ArrayBuffer]" === kn.call(A)
            ? (e.input = new Uint8Array(A))
            : (e.input = A),
          e.next_in = 0,
          e.avail_in = e.input.length;
        ;

      ) {
        for (
          0 === e.avail_out &&
            ((e.output = new Uint8Array(r)),
            (e.next_out = 0),
            (e.avail_out = r)),
            i = wn(e, a),
            i === Sn &&
              n &&
              ((i = yn(e, n)),
              i === bn ? (i = wn(e, a)) : i === Fn && (i = Sn));
          e.avail_in > 0 && i === qn && e.state.wrap > 0 && 0 !== A[e.next_in];

        )
          ln(e), (i = wn(e, a))
        switch (i) {
          case Dn:
          case Fn:
          case Sn:
          case Hn:
            return this.onEnd(i), (this.ended = !0), !1
        }
        if (((s = e.avail_out), e.next_out && (0 === e.avail_out || i === qn)))
          if ("string" === this.options.to) {
            let A = _r(e.output, e.next_out),
              t = e.next_out - A,
              n = kr(e.output, A)
            ;(e.next_out = t),
              (e.avail_out = r - t),
              t && e.output.set(e.output.subarray(A, A + t), 0),
              this.onData(n)
          } else
            this.onData(
              e.output.length === e.next_out
                ? e.output
                : e.output.subarray(0, e.next_out)
            )
        if (i !== bn || 0 !== s) {
          if (i === qn)
            return (i = dn(this.strm)), this.onEnd(i), (this.ended = !0), !0
          if (0 === e.avail_in) break
        }
      }
      return !0
    }),
      (Nn.prototype.onData = function (A) {
        this.chunks.push(A)
      }),
      (Nn.prototype.onEnd = function (A) {
        A === bn &&
          ("string" === this.options.to
            ? (this.result = this.chunks.join(""))
            : (this.result = dr(this.chunks))),
          (this.chunks = []),
          (this.err = A),
          (this.msg = this.strm.msg)
      })
    var Un = {
      Inflate: Nn,
      inflate: Rn,
      inflateRaw: function (A, t) {
        return ((t = t || {}).raw = !0), Rn(A, t)
      },
      ungzip: Rn,
      constants: we
    }
    const { Deflate: vn, deflate: Mn, deflateRaw: Yn, gzip: Jn } = Jr,
      { Inflate: Tn, inflate: Ln, inflateRaw: xn, ungzip: Zn } = Un
    var On = Ln,
      jn = Zn
    const Kn = AA,
      Vn = wA({ token: fA(Kn), body: lA(hA) }),
      Pn = ({ IDL: A }) => {
        const t = A.Tuple(A.Text, A.Text),
          e = A.Record({
            url: A.Text,
            method: A.Text,
            body: A.Vec(A.Nat8),
            headers: A.Vec(t)
          }),
          r = A.Variant({
            Callback: A.Record({
              token: Kn,
              callback: A.Func([Kn], [A.Opt(Vn)], ["query"])
            })
          }),
          n = A.Record({
            body: A.Vec(A.Nat8),
            headers: A.Vec(t),
            streaming_strategy: A.Opt(r),
            status_code: A.Nat16,
            upgrade: A.Opt(A.Bool)
          })
        return A.Service({
          http_request: A.Func([e], [n], ["query"]),
          http_request_update: A.Func([e], [n])
        })
      }
    function Wn(A, t, e, r) {
      const n = W(
        [A.type()],
        ["function" == typeof A.valueOf ? A.valueOf() : A]
      )
      return t.query(e, { methodName: r, arg: n })
    }
    const zn = {
        "identity.ic0.app": ["rdmx6-jaaaa-aaaaa-aaadq-cai", "ic0.app"],
        "nns.ic0.app": ["qoctq-giaaa-aaaaa-aaaea-cai", "ic0.app"],
        "dscvr.one": ["h5aet-waaaa-aaaab-qaamq-cai", "ic0.app"],
        "personhood.ic0.app": ["g3wsl-eqaaa-aaaan-aaaaa-cai", "ic0.app"],
        "dev.contentfly.app": ["ypu2m-miaaa-aaaah-qamoq-cai", "ic0.app"],
        "contentflydev.web.app": ["ypu2m-miaaa-aaaah-qamoq-cai", "ic0.app"],
        "prod.contentfly.app": ["grwwk-gaaaa-aaaah-aapma-cai", "ic0.app"],
        "contentflyprod.web.app": ["grwwk-gaaaa-aaaah-aapma-cai", "ic0.app"]
      },
      Xn = ["1", "true"].includes(!1),
      $n = new URL(self.location.toString()),
      [, Ai] = ti($n.hostname) || [null, $n.hostname]
    function ti(A) {
      const t = zn[A]
      if (t) return [s.fromText(t[0]), t[1]]
      const e = A.split(".").reverse(),
        r = []
      for (const A of e)
        try {
          return [s.fromText(A), r.reverse().join(".")]
        } catch (t) {
          r.push(A)
        }
      return null
    }
    function ei(A) {
      const t = ti(A)
      return t && Ai === t[1] ? t[0] : null
    }
    function ri(A, t) {
      try {
        const e = new URL(A)
        return (
          ei(e.hostname) ||
          (function (A, t) {
            if (!t) return null
            const e = A.get("canisterId")
            if (e)
              try {
                return s.fromText(e)
              } catch (A) {}
            return null
          })(e.searchParams, t)
        )
      } catch (A) {
        return null
      }
    }
    async function ni(A) {
      const t = new URL(A.url)
      if (t.pathname.startsWith("/api/")) {
        const t = await fetch(A),
          e = new Headers(t.headers)
        return (
          e.set("X-Content-Type-Options", "nosniff"),
          e.set("Content-Type", "application/cbor"),
          new Response(t.body, {
            status: t.status,
            statusText: t.statusText,
            headers: e
          })
        )
      }
      if (t.pathname.startsWith("/_/"))
        return new Response(null, { status: 404 })
      const e = (function (A, t) {
        return (
          (t && ri(A.referrer, t)) ||
          (function (A, t) {
            const e = A.get("host")
            if (e) {
              const A = ei(e.replace(/:\d+$/, ""))
              if (A) return A
            }
            if (t) {
              const e = A.get("referer")
              if (e) {
                const A = ri(e, t)
                if (A) return A
              }
            }
            return null
          })(A.headers, t) ||
          ri(A.url, t)
        )
      })(A, "localhost" === Ai)
      if (e)
        try {
          const r = ti(t.hostname),
            [n, i] = await (async function (A, t, e) {
              const r = new URL(A),
                n = new zA({ host: r.toString() })
              return (
                e && (await n.fetchRootKey()),
                [n, kt.createActor(Pn, { agent: n, canisterId: t })]
              )
            })(r ? t.protocol + "//" + r[1] : t.origin, e, Xn),
            a = []
          A.headers.forEach((A, t) => a.push([t, A])),
            A.headers.has("Accept-Encoding") ||
              a.push(["Accept-Encoding", "gzip, deflate, identity"])
          const s = {
            method: A.method,
            url: t.pathname + t.search,
            headers: a,
            body: [...new Uint8Array(await A.arrayBuffer())]
          }
          let o = !1,
            B = await i.http_request(s)
          1 === B.upgrade.length &&
            B.upgrade[0] &&
            ((B = await i.http_request_update(s)), (o = !0))
          const g = new Headers()
          let I,
            h,
            E = ""
          for (const [A, t] of B.headers) {
            switch (A.trim().toLowerCase()) {
              case "ic-certificate":
                {
                  const A = t.split(/,/)
                  for (const t of A) {
                    const [, A, e] = [...t.match(/^(.*)=:(.*):$/)].map(A =>
                        A.trim()
                      ),
                      r = Ut(e)
                    "certificate" === A ? (I = r) : "tree" === A && (h = r)
                  }
                }
                continue
              case "content-encoding":
                E = t.trim()
            }
            g.append(A, t)
          }
          let Q = B.body
          0 !== B.streaming_strategy.length &&
            (Q = Q.concat(
              await (async function (A, t, e) {
                let r = [],
                  n = [e.Callback.token]
                const [, i] = e.Callback.callback
                let a = 1
                for (; 0 !== n.length; ) {
                  if (a > 1e3)
                    throw new Error("Exceeded streaming callback limit")
                  const e = await Wn(n[0], A, t, i)
                  switch (e.status) {
                    case "replied": {
                      const A = z([Vn], e.reply.arg)[0]
                      if (
                        "object" != typeof (s = A) ||
                        null === s ||
                        !("body" in s) ||
                        !("token" in s)
                      )
                        throw new Error("Unexpected callback response: " + A)
                      ;(r = r.concat(A.body)), (n = A.token)
                      break
                    }
                    case "rejected":
                      throw new Error("Streaming callback error: " + e)
                  }
                  a += 1
                }
                var s
                return r
              })(n, e, B.streaming_strategy[0])
            ))
          const c = new Uint8Array(Q),
            u = (function (A, t) {
              switch (t) {
                case "identity":
                case "":
                  return A
                case "gzip":
                  return jn(A)
                case "deflate":
                  return On(A)
                default:
                  throw new Error(`Unsupported encoding: "${t}"`)
              }
            })(c, E)
          let C = o
          return (
            !o &&
              I &&
              h &&
              ((C = await Dt(e, t.pathname, c.buffer, I, h, n, Xn)),
              C || (C = await Dt(e, t.pathname, u.buffer, I, h, n, Xn))),
            C
              ? new Response(u.buffer, { status: B.status_code, headers: g })
              : (console.error("BODY DOES NOT PASS VERIFICATION"),
                new Response("Body does not pass verification", {
                  status: 500
                }))
          )
        } catch (A) {
          return (
            console.error("Failed to fetch response:", A),
            new Response(`Failed to fetch response: ${String(A)}`, {
              status: 500
            })
          )
        }
      return !t.hostname.endsWith(Ai) || t.hostname.endsWith(`raw.${Ai}`)
        ? (console.log("Direct call ..."), await fetch(A))
        : (console.error(
            `URL ${JSON.stringify(
              t.toString()
            )} did not resolve to a canister ID.`
          ),
          new Response("Could not find the canister ID.", { status: 404 }))
    }
    self.addEventListener("install", () => {
      self.skipWaiting()
    }),
      self.addEventListener("activate", async () => {
        await self.clients.claim(),
          (await self.clients.matchAll()).forEach(A => A.navigate(A.url))
      }),
      self.addEventListener("fetch", A => {
        try {
          const t = ni(A.request)
          A.respondWith(t)
        } catch (t) {
          const e = String(t)
          return (
            console.error(e), A.respondWith(new Response(e, { status: 501 }))
          )
        }
      })
  })()
})()
//# sourceMappingURL=sw.js.map