;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [253],
  {
    90129: function (e, t, r) {
      "use strict"
      r.d(t, {
        LY: function () {
          return V
        }
      })
      var i = r(68760),
        n = r(50780)
      function f(e) {
        var t
        return new Uint8Array(
          (null !== (t = e.match(/.{1,2}/g)) && void 0 !== t ? t : []).map(e =>
            parseInt(e, 16)
          )
        ).buffer
      }
      function a(e) {
        return new Uint8Array(e).reduce(
          (e, t) => e + t.toString(16).padStart(2, "0"),
          ""
        )
      }
      const o = e => {
          if (e <= 127) return 1
          if (e <= 255) return 2
          if (e <= 65535) return 3
          if (e <= 16777215) return 4
          throw new Error("Length too long (> 4 bytes)")
        },
        d = (e, t, r) => {
          if (r <= 127) return (e[t] = r), 1
          if (r <= 255) return (e[t] = 129), (e[t + 1] = r), 2
          if (r <= 65535)
            return (e[t] = 130), (e[t + 1] = r >> 8), (e[t + 2] = r), 3
          if (r <= 16777215)
            return (
              (e[t] = 131),
              (e[t + 1] = r >> 16),
              (e[t + 2] = r >> 8),
              (e[t + 3] = r),
              4
            )
          throw new Error("Length too long (> 4 bytes)")
        },
        s = (e, t) => {
          if (e[t] < 128) return 1
          if (128 === e[t]) throw new Error("Invalid length 0")
          if (129 === e[t]) return 2
          if (130 === e[t]) return 3
          if (131 === e[t]) return 4
          throw new Error("Length too long (> 4 bytes)")
        },
        c =
          (Uint8Array.from([48, 12, 6, 10, 43, 6, 1, 4, 1, 131, 184, 67, 1, 1]),
          Uint8Array.from([48, 5, 6, 3, 43, 101, 112]))
      Uint8Array.from([
        48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 10
      ])
      const h = (e, t) => {
        let r = 0
        const i = (e, t) => {
            if (n[r++] !== e) throw new Error("Expected: " + t)
          },
          n = new Uint8Array(e)
        if (
          (i(48, "sequence"),
          (r += s(n, r)),
          !((e, t) => {
            if (e.byteLength !== t.byteLength) return !1
            const r = new Uint8Array(e),
              i = new Uint8Array(t)
            for (let n = 0; n < r.length; n++) if (r[n] !== i[n]) return !1
            return !0
          })(n.slice(r, r + t.byteLength), t))
        )
          throw new Error("Not the expected OID.")
        ;(r += t.byteLength), i(3, "bit string")
        const f =
          ((e, t) => {
            const r = s(e, t)
            if (1 === r) return e[t]
            if (2 === r) return e[t + 1]
            if (3 === r) return (e[t + 1] << 8) + e[t + 2]
            if (4 === r) return (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3]
            throw new Error("Length too long (> 4 bytes)")
          })(n, r) - 1
        ;(r += s(n, r)), i(0, "0 padding")
        const a = n.slice(r)
        if (f !== a.length)
          throw new Error(
            `DER payload mismatch: Expected length ${f} actual length ${a.length}`
          )
        return a
      }
      class u {
        constructor(e) {
          ;(this.rawKey = e), (this.derKey = u.derEncode(e))
        }
        static from(e) {
          return this.fromDer(e.toDer())
        }
        static fromRaw(e) {
          return new u(e)
        }
        static fromDer(e) {
          return new u(this.derDecode(e))
        }
        static derEncode(e) {
          return (function (e, t) {
            const r = 2 + o(e.byteLength + 1),
              i = t.byteLength + r + e.byteLength
            let n = 0
            const f = new Uint8Array(1 + o(i) + i)
            return (
              (f[n++] = 48),
              (n += d(f, n, i)),
              f.set(t, n),
              (n += t.byteLength),
              (f[n++] = 3),
              (n += d(f, n, e.byteLength + 1)),
              (f[n++] = 0),
              f.set(new Uint8Array(e), n),
              f
            )
          })(e, c).buffer
        }
        static derDecode(e) {
          const t = h(e, c)
          if (t.length !== this.RAW_KEY_LENGTH)
            throw new Error(
              "An Ed25519 public key must be exactly 32bytes long"
            )
          return t
        }
        toDer() {
          return this.derKey
        }
        toRaw() {
          return this.rawKey
        }
      }
      u.RAW_KEY_LENGTH = 32
      class b extends i.SignIdentity {
        constructor(e, t) {
          super(), (this._privateKey = t), (this._publicKey = u.from(e))
        }
        static generate(e) {
          if (e && 32 !== e.length)
            throw new Error("Ed25519 Seed needs to be 32 bytes long.")
          const { publicKey: t, secretKey: r } =
            void 0 === e ? n.sign.keyPair() : n.sign.keyPair.fromSeed(e)
          return new this(u.fromRaw(t), r)
        }
        static fromParsedJson(e) {
          const [t, r] = e
          return new b(u.fromDer(f(t)), f(r))
        }
        static fromJSON(e) {
          const t = JSON.parse(e)
          if (Array.isArray(t)) {
            if ("string" === typeof t[0] && "string" === typeof t[1])
              return this.fromParsedJson([t[0], t[1]])
            throw new Error(
              "Deserialization error: JSON must have at least 2 items."
            )
          }
          throw new Error(
            `Deserialization error: Invalid JSON type for string: ${JSON.stringify(
              e
            )}`
          )
        }
        static fromKeyPair(e, t) {
          return new b(u.fromRaw(e), t)
        }
        static fromSecretKey(e) {
          const t = n.sign.keyPair.fromSecretKey(new Uint8Array(e))
          return b.fromKeyPair(t.publicKey, t.secretKey)
        }
        toJSON() {
          return [a(this._publicKey.toDer()), a(this._privateKey)]
        }
        getKeyPair() {
          return { secretKey: this._privateKey, publicKey: this._publicKey }
        }
        getPublicKey() {
          return this._publicKey
        }
        async sign(e) {
          const t = new Uint8Array(e)
          return n.sign.detached(t, new Uint8Array(this._privateKey)).buffer
        }
      }
      Error
      r(17221), r(72023)
      var l = r(17075),
        p = r(88419),
        m = function (e, t) {
          var r = {}
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (r[i] = e[i])
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                (r[i[n]] = e[i[n]])
          }
          return r
        }
      const y = new TextEncoder().encode("\x1aic-request-auth-delegation"),
        v = new TextEncoder().encode("\nic-request")
      function g(e) {
        if ("string" !== typeof e || e.length < 64)
          throw new Error("Invalid public key.")
        return f(e)
      }
      class w {
        constructor(e, t, r) {
          ;(this.pubkey = e), (this.expiration = t), (this.targets = r)
        }
        toCBOR() {
          return p.value.map(
            Object.assign(
              {
                pubkey: p.value.bytes(this.pubkey),
                expiration: p.value.u64(this.expiration.toString(16), 16)
              },
              this.targets && {
                targets: p.value.array(
                  this.targets.map(e => p.value.bytes(e.toUint8Array()))
                )
              }
            )
          )
        }
        toJSON() {
          return Object.assign(
            {
              expiration: this.expiration.toString(16),
              pubkey: a(this.pubkey)
            },
            this.targets && { targets: this.targets.map(e => e.toHex()) }
          )
        }
      }
      class M {
        constructor(e, t) {
          ;(this.delegations = e), (this.publicKey = t)
        }
        static async create(e, t, r = new Date(Date.now() + 9e5), n = {}) {
          var f, a
          const o = await (async function (e, t, r, n) {
            const f = new w(t.toDer(), BigInt(+r) * BigInt(1e6), n),
              a = new Uint8Array([
                ...y,
                ...new Uint8Array((0, i.requestIdOf)(f))
              ])
            return { delegation: f, signature: await e.sign(a) }
          })(e, t, r, n.targets)
          return new M(
            [
              ...((null === (f = n.previous) || void 0 === f
                ? void 0
                : f.delegations) || []),
              o
            ],
            (null === (a = n.previous) || void 0 === a
              ? void 0
              : a.publicKey) || e.getPublicKey().toDer()
          )
        }
        static fromJSON(e) {
          const { publicKey: t, delegations: r } =
            "string" === typeof e ? JSON.parse(e) : e
          if (!Array.isArray(r)) throw new Error("Invalid delegations.")
          return new this(
            r.map(e => {
              const { delegation: t, signature: r } = e,
                { pubkey: i, expiration: n, targets: f } = t
              if (void 0 !== f && !Array.isArray(f))
                throw new Error("Invalid targets.")
              return {
                delegation: new w(
                  g(i),
                  BigInt(`0x${n}`),
                  f &&
                    f.map(e => {
                      if ("string" !== typeof e)
                        throw new Error("Invalid target.")
                      return l.R.fromHex(e)
                    })
                ),
                signature: g(r)
              }
            }),
            g(t)
          )
        }
        static fromDelegations(e, t) {
          return new this(e, t)
        }
        toJSON() {
          return {
            delegations: this.delegations.map(e => {
              const { delegation: t, signature: r } = e,
                { targets: i } = t
              return {
                delegation: Object.assign(
                  {
                    expiration: t.expiration.toString(16),
                    pubkey: a(t.pubkey)
                  },
                  i && { targets: i.map(e => e.toHex()) }
                ),
                signature: a(r)
              }
            }),
            publicKey: a(this.publicKey)
          }
        }
      }
      class _ extends i.SignIdentity {
        constructor(e, t) {
          super(), (this._inner = e), (this._delegation = t)
        }
        static fromDelegation(e, t) {
          return new this(e, t)
        }
        getDelegation() {
          return this._delegation
        }
        getPublicKey() {
          return { toDer: () => this._delegation.publicKey }
        }
        sign(e) {
          return this._inner.sign(e)
        }
        async transformRequest(e) {
          const { body: t } = e,
            r = m(e, ["body"]),
            n = await (0, i.requestIdOf)(t)
          return Object.assign(Object.assign({}, r), {
            body: {
              content: t,
              sender_sig: await this.sign(
                new Uint8Array([...v, ...new Uint8Array(n)])
              ),
              sender_delegation: this._delegation.delegations,
              sender_pubkey: this._delegation.publicKey
            }
          })
        }
      }
      var A
      r(77756)
      !(function (e) {
        e[(e.ECDSA_WITH_SHA256 = -7)] = "ECDSA_WITH_SHA256"
      })(A || (A = {}))
      const S = ["mousedown", "mousemove", "keydown", "touchstart", "wheel"]
      let x, I
      const E = new WeakMap(),
        k = new WeakMap(),
        z = new WeakMap(),
        R = new WeakMap(),
        P = new WeakMap()
      let q = {
        get(e, t, r) {
          if (e instanceof IDBTransaction) {
            if ("done" === t) return k.get(e)
            if ("objectStoreNames" === t) return e.objectStoreNames || z.get(e)
            if ("store" === t)
              return r.objectStoreNames[1]
                ? void 0
                : r.objectStore(r.objectStoreNames[0])
          }
          return B(e[t])
        },
        set: (e, t, r) => ((e[t] = r), !0),
        has: (e, t) =>
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e
      }
      function L(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              I ||
              (I = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey
              ])
            ).includes(e)
            ? function (...t) {
                return e.apply(O(this), t), B(E.get(this))
              }
            : function (...t) {
                return B(e.apply(O(this), t))
              }
          : function (t, ...r) {
              const i = e.call(O(this), t, ...r)
              return z.set(i, t.sort ? t.sort() : [t]), B(i)
            }
      }
      function N(e) {
        return "function" === typeof e
          ? L(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (k.has(e)) return
                const t = new Promise((t, r) => {
                  const i = () => {
                      e.removeEventListener("complete", n),
                        e.removeEventListener("error", f),
                        e.removeEventListener("abort", f)
                    },
                    n = () => {
                      t(), i()
                    },
                    f = () => {
                      r(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        i()
                    }
                  e.addEventListener("complete", n),
                    e.addEventListener("error", f),
                    e.addEventListener("abort", f)
                })
                k.set(e, t)
              })(e),
            (t = e),
            (
              x ||
              (x = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction
              ])
            ).some(e => t instanceof e)
              ? new Proxy(e, q)
              : e)
        var t
      }
      function B(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            const t = new Promise((t, r) => {
              const i = () => {
                  e.removeEventListener("success", n),
                    e.removeEventListener("error", f)
                },
                n = () => {
                  t(B(e.result)), i()
                },
                f = () => {
                  r(e.error), i()
                }
              e.addEventListener("success", n), e.addEventListener("error", f)
            })
            return (
              t
                .then(t => {
                  t instanceof IDBCursor && E.set(t, e)
                })
                .catch(() => {}),
              P.set(t, e),
              t
            )
          })(e)
        if (R.has(e)) return R.get(e)
        const t = N(e)
        return t !== e && (R.set(e, t), P.set(t, e)), t
      }
      const O = e => P.get(e)
      const K = ["get", "getKey", "getAll", "getAllKeys", "count"],
        T = ["put", "add", "delete", "clear"],
        U = new Map()
      function j(e, t) {
        if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
          return
        if (U.get(t)) return U.get(t)
        const r = t.replace(/FromIndex$/, ""),
          i = t !== r,
          n = T.includes(r)
        if (
          !(r in (i ? IDBIndex : IDBObjectStore).prototype) ||
          (!n && !K.includes(r))
        )
          return
        const f = async function (e, ...t) {
          const f = this.transaction(e, n ? "readwrite" : "readonly")
          let a = f.store
          return (
            i && (a = a.index(t.shift())),
            (await Promise.all([a[r](...t), n && f.done]))[0]
          )
        }
        return U.set(t, f), f
      }
      q = (e => ({
        ...e,
        get: (t, r, i) => j(t, r) || e.get(t, r, i),
        has: (t, r) => !!j(t, r) || e.has(t, r)
      }))(q)
      const D = "auth-client-db",
        C = "ic-keyval",
        Z = async (e = D, t = C, r) => (
          localStorage &&
            localStorage.getItem(H) &&
            (localStorage.removeItem(H), localStorage.removeItem(J)),
          await (function (
            e,
            t,
            { blocked: r, upgrade: i, blocking: n, terminated: f } = {}
          ) {
            const a = indexedDB.open(e, t),
              o = B(a)
            return (
              i &&
                a.addEventListener("upgradeneeded", e => {
                  i(B(a.result), e.oldVersion, e.newVersion, B(a.transaction))
                }),
              r && a.addEventListener("blocked", () => r()),
              o
                .then(e => {
                  f && e.addEventListener("close", () => f()),
                    n && e.addEventListener("versionchange", () => n())
                })
                .catch(() => {}),
              o
            )
          })(e, r, {
            upgrade: e => {
              e.objectStoreNames,
                e.objectStoreNames.contains(t) && e.clear(t),
                e.createObjectStore(t)
            }
          })
        )
      class F {
        constructor(e, t) {
          ;(this._db = e), (this._storeName = t)
        }
        static async create(e) {
          const {
              dbName: t = D,
              storeName: r = C,
              version: i = 1
            } = null !== e && void 0 !== e ? e : {},
            n = await Z(t, r, i)
          return new F(n, r)
        }
        async set(e, t) {
          return await (async function (e, t, r, i) {
            return await e.put(t, i, r)
          })(this._db, this._storeName, e, t)
        }
        async get(e) {
          var t
          return null !==
            (t = await (async function (e, t, r) {
              return await e.get(t, r)
            })(this._db, this._storeName, e)) && void 0 !== t
            ? t
            : null
        }
        async remove(e) {
          return await (async function (e, t, r) {
            return await e.delete(t, r)
          })(this._db, this._storeName, e)
        }
      }
      const J = "identity",
        H = "delegation"
      class W {
        constructor(e = "ic-", t) {
          ;(this.prefix = e), (this._localStorage = t)
        }
        get(e) {
          return Promise.resolve(
            this._getLocalStorage().getItem(this.prefix + e)
          )
        }
        set(e, t) {
          return (
            this._getLocalStorage().setItem(this.prefix + e, t),
            Promise.resolve()
          )
        }
        remove(e) {
          return (
            this._getLocalStorage().removeItem(this.prefix + e),
            Promise.resolve()
          )
        }
        _getLocalStorage() {
          if (this._localStorage) return this._localStorage
          const e =
            "undefined" === typeof window
              ? "undefined" === typeof r.g
                ? "undefined" === typeof self
                  ? void 0
                  : self.localStorage
                : r.g.localStorage
              : window.localStorage
          if (!e) throw new Error("Could not find local storage.")
          return e
        }
      }
      class Y {
        get _db() {
          return new Promise(e => {
            this.initializedDb && e(this.initializedDb),
              F.create({ version: 1 }).then(t => {
                ;(this.initializedDb = t), e(t)
              })
          })
        }
        async get(e) {
          const t = await this._db
          return await t.get(e)
        }
        async set(e, t) {
          const r = await this._db
          await r.set(e, t)
        }
        async remove(e) {
          const t = await this._db
          await t.remove(e)
        }
      }
      class V {
        constructor(e, t, r, i, n, f, a, o) {
          var d
          ;(this._identity = e),
            (this._key = t),
            (this._chain = r),
            (this._storage = i),
            (this.idleManager = n),
            (this._createOptions = f),
            (this._idpWindow = a),
            (this._eventHandler = o)
          const s = this.logout.bind(this),
            c = null === f || void 0 === f ? void 0 : f.idleOptions
          ;(null === c || void 0 === c ? void 0 : c.onIdle) ||
            (null === c || void 0 === c
              ? void 0
              : c.disableDefaultIdleCallback) ||
            null === (d = this.idleManager) ||
            void 0 === d ||
            d.registerCallback(() => {
              s(), location.reload()
            })
        }
        static async create(e = {}) {
          var t, r
          const n = null !== (t = e.storage) && void 0 !== t ? t : new Y()
          let f = null
          if (e.identity) f = e.identity
          else {
            let e = await n.get(J)
            if (!e)
              try {
                const t = new W(),
                  r = await t.get(H),
                  i = await t.get(J)
                r &&
                  i &&
                  (console.log(
                    "Discovered an identity stored in localstorage. Migrating to IndexedDB"
                  ),
                  await n.set(H, r),
                  await n.set(J, i),
                  (e = r),
                  await t.remove(H),
                  await t.remove(J))
              } catch (s) {
                console.error(
                  "error while attempting to recover localstorage: " + s
                )
              }
            if (e)
              try {
                f = b.fromJSON(e)
              } catch (c) {}
          }
          let a = new i.AnonymousIdentity(),
            o = null
          if (f)
            try {
              const t = await n.get(H)
              e.identity
                ? (a = e.identity)
                : t &&
                  ((o = M.fromJSON(t)),
                  !(function (e, t) {
                    for (const { delegation: n } of e.delegations)
                      if (
                        +new Date(Number(n.expiration / BigInt(1e6))) <=
                        +Date.now()
                      )
                        return !1
                    const r = [],
                      i = null === t || void 0 === t ? void 0 : t.scope
                    i &&
                      (Array.isArray(i)
                        ? r.push(
                            ...i.map(e =>
                              "string" === typeof e ? l.R.fromText(e) : e
                            )
                          )
                        : r.push("string" === typeof i ? l.R.fromText(i) : i))
                    for (const n of r) {
                      const t = n.toText()
                      for (const { delegation: r } of e.delegations) {
                        if (void 0 === r.targets) continue
                        let e = !0
                        for (const i of r.targets)
                          if (i.toText() === t) {
                            e = !1
                            break
                          }
                        if (e) return !1
                      }
                    }
                    return !0
                  })(o)
                    ? (await X(n), (f = null))
                    : (a = _.fromDelegation(f, o)))
            } catch (c) {
              console.error(c), await X(n), (f = null)
            }
          const d = (
            null === (r = e.idleOptions) || void 0 === r
              ? void 0
              : r.disableIdle
          )
            ? void 0
            : class {
                constructor(e = {}) {
                  var t
                  ;(this.callbacks = []),
                    (this.idleTimeout = 6e5),
                    (this.timeoutID = void 0)
                  const { onIdle: r, idleTimeout: i = 6e5 } = e || {}
                  ;(this.callbacks = r ? [r] : []), (this.idleTimeout = i)
                  const n = this._resetTimer.bind(this)
                  window.addEventListener("load", n, !0),
                    S.forEach(function (e) {
                      document.addEventListener(e, n, !0)
                    })
                  const f = (e, t) => {
                    let r
                    return (...i) => {
                      const n = this
                      clearTimeout(r),
                        (r = window.setTimeout(function () {
                          ;(r = void 0), e.apply(n, i)
                        }, t))
                    }
                  }
                  if (null === e || void 0 === e ? void 0 : e.captureScroll) {
                    const r = f(
                      n,
                      null !==
                        (t =
                          null === e || void 0 === e
                            ? void 0
                            : e.scrollDebounce) && void 0 !== t
                        ? t
                        : 100
                    )
                    window.addEventListener("scroll", r, !0)
                  }
                  n()
                }
                static create(e = {}) {
                  return new this(e)
                }
                registerCallback(e) {
                  this.callbacks.push(e)
                }
                exit() {
                  clearTimeout(this.timeoutID),
                    window.removeEventListener("load", this._resetTimer, !0)
                  const e = this._resetTimer.bind(this)
                  S.forEach(function (t) {
                    document.removeEventListener(t, e, !0)
                  }),
                    this.callbacks.forEach(e => e())
                }
                _resetTimer() {
                  const e = this.exit.bind(this)
                  window.clearTimeout(this.timeoutID),
                    (this.timeoutID = window.setTimeout(e, this.idleTimeout))
                }
              }.create(e.idleOptions)
          return new this(a, f, o, n, d, e)
        }
        _handleSuccess(e, t) {
          var r
          const i = e.delegations.map(e => ({
              delegation: new w(
                e.delegation.pubkey,
                e.delegation.expiration,
                e.delegation.targets
              ),
              signature: e.signature.buffer
            })),
            n = M.fromDelegations(i, e.userPublicKey.buffer),
            f = this._key
          f &&
            ((this._chain = n),
            (this._identity = _.fromDelegation(f, this._chain)),
            null === (r = this._idpWindow) || void 0 === r || r.close(),
            null === t || void 0 === t || t(),
            this._removeEventListener(),
            delete this._idpWindow)
        }
        getIdentity() {
          return this._identity
        }
        async isAuthenticated() {
          return (
            !this.getIdentity().getPrincipal().isAnonymous() &&
            null !== this._chain
          )
        }
        async login(e) {
          var t, r, i, n
          let f = this._key
          f ||
            ((f = b.generate()),
            (this._key = f),
            await this._storage.set(J, JSON.stringify(f)))
          const a = BigInt(8) * BigInt(36e11),
            o = new URL(
              (null ===
                (t =
                  null === e || void 0 === e ? void 0 : e.identityProvider) ||
              void 0 === t
                ? void 0
                : t.toString()) || "https://identity.ic0.app"
            )
          ;(o.hash = "#authorize"),
            null === (r = this._idpWindow) || void 0 === r || r.close(),
            this._removeEventListener(),
            (this._eventHandler = this._getEventHandler(
              o,
              Object.assign(
                {
                  maxTimeToLive:
                    null !==
                      (i =
                        null === e || void 0 === e
                          ? void 0
                          : e.maxTimeToLive) && void 0 !== i
                      ? i
                      : a
                },
                e
              )
            )),
            window.addEventListener("message", this._eventHandler),
            (this._idpWindow =
              null !==
                (n = window.open(
                  o.toString(),
                  "idpWindow",
                  null === e || void 0 === e ? void 0 : e.windowOpenerFeatures
                )) && void 0 !== n
                ? n
                : void 0)
          const d = () => {
            this._idpWindow &&
              (this._idpWindow.closed
                ? this._handleFailure(
                    "UserInterrupt",
                    null === e || void 0 === e ? void 0 : e.onError
                  )
                : setTimeout(d, 500))
          }
          d()
        }
        _getEventHandler(e, t) {
          return async r => {
            var i, n, f
            if (r.origin !== e.origin)
              return void console.warn(
                `WARNING: expected origin '${e.origin}', got '${r.origin}' (ignoring)`
              )
            const a = r.data
            switch (a.kind) {
              case "authorize-ready": {
                const r = {
                  kind: "authorize-client",
                  sessionPublicKey: new Uint8Array(
                    null === (i = this._key) || void 0 === i
                      ? void 0
                      : i.getPublicKey().toDer()
                  ),
                  maxTimeToLive:
                    null === t || void 0 === t ? void 0 : t.maxTimeToLive,
                  derivationOrigin:
                    null ===
                      (n =
                        null === t || void 0 === t
                          ? void 0
                          : t.derivationOrigin) || void 0 === n
                      ? void 0
                      : n.toString()
                }
                null === (f = this._idpWindow) ||
                  void 0 === f ||
                  f.postMessage(r, e.origin)
                break
              }
              case "authorize-client-success":
                try {
                  this._handleSuccess(
                    a,
                    null === t || void 0 === t ? void 0 : t.onSuccess
                  ),
                    this._chain &&
                      (await this._storage.set(
                        H,
                        JSON.stringify(this._chain.toJSON())
                      ))
                } catch (o) {
                  this._handleFailure(
                    o.message,
                    null === t || void 0 === t ? void 0 : t.onError
                  )
                }
                break
              case "authorize-client-failure":
                this._handleFailure(
                  a.text,
                  null === t || void 0 === t ? void 0 : t.onError
                )
            }
          }
        }
        _handleFailure(e, t) {
          var r
          null === (r = this._idpWindow) || void 0 === r || r.close(),
            null === t || void 0 === t || t(e),
            this._removeEventListener(),
            delete this._idpWindow
        }
        _removeEventListener() {
          this._eventHandler &&
            window.removeEventListener("message", this._eventHandler),
            (this._eventHandler = void 0)
        }
        async logout(e = {}) {
          if (
            (X(this._storage),
            (this._identity = new i.AnonymousIdentity()),
            (this._key = null),
            (this._chain = null),
            e.returnTo)
          )
            try {
              window.history.pushState({}, "", e.returnTo)
            } catch (t) {
              window.location.href = e.returnTo
            }
        }
      }
      async function X(e) {
        await e.remove(J), await e.remove(H), await e.remove("iv")
      }
    },
    13550: function (e, t, r) {
      !(function (e, t) {
        "use strict"
        function i(e, t) {
          if (!e) throw new Error(t || "Assertion failed")
        }
        function n(e, t) {
          e.super_ = t
          var r = function () {}
          ;(r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e)
        }
        function f(e, t, r) {
          if (f.isBN(e)) return e
          ;(this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
              this._init(e || 0, t || 10, r || "be"))
        }
        var a
        "object" === typeof e ? (e.exports = f) : (t.BN = f),
          (f.BN = f),
          (f.wordSize = 26)
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(46601).Buffer
        } catch (x) {}
        function o(e, t) {
          var r = e.charCodeAt(t)
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15
        }
        function d(e, t, r) {
          var i = o(e, r)
          return r - 1 >= t && (i |= o(e, r - 1) << 4), i
        }
        function s(e, t, r, i) {
          for (var n = 0, f = Math.min(e.length, r), a = t; a < f; a++) {
            var o = e.charCodeAt(a) - 48
            ;(n *= i), (n += o >= 49 ? o - 49 + 10 : o >= 17 ? o - 17 + 10 : o)
          }
          return n
        }
        ;(f.isBN = function (e) {
          return (
            e instanceof f ||
            (null !== e &&
              "object" === typeof e &&
              e.constructor.wordSize === f.wordSize &&
              Array.isArray(e.words))
          )
        }),
          (f.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t
          }),
          (f.min = function (e, t) {
            return e.cmp(t) < 0 ? e : t
          }),
          (f.prototype._init = function (e, t, r) {
            if ("number" === typeof e) return this._initNumber(e, t, r)
            if ("object" === typeof e) return this._initArray(e, t, r)
            "hex" === t && (t = 16), i(t === (0 | t) && t >= 2 && t <= 36)
            var n = 0
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < e.length &&
                (16 === t
                  ? this._parseHex(e, n, r)
                  : (this._parseBase(e, t, n),
                    "le" === r && this._initArray(this.toArray(), t, r)))
          }),
          (f.prototype._initNumber = function (e, t, r) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), t, r)
          }),
          (f.prototype._initArray = function (e, t, r) {
            if ((i("number" === typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this
            ;(this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length))
            for (var n = 0; n < this.length; n++) this.words[n] = 0
            var f,
              a,
              o = 0
            if ("be" === r)
              for (n = e.length - 1, f = 0; n >= 0; n -= 3)
                (a = e[n] | (e[n - 1] << 8) | (e[n - 2] << 16)),
                  (this.words[f] |= (a << o) & 67108863),
                  (this.words[f + 1] = (a >>> (26 - o)) & 67108863),
                  (o += 24) >= 26 && ((o -= 26), f++)
            else if ("le" === r)
              for (n = 0, f = 0; n < e.length; n += 3)
                (a = e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)),
                  (this.words[f] |= (a << o) & 67108863),
                  (this.words[f + 1] = (a >>> (26 - o)) & 67108863),
                  (o += 24) >= 26 && ((o -= 26), f++)
            return this.strip()
          }),
          (f.prototype._parseHex = function (e, t, r) {
            ;(this.length = Math.ceil((e.length - t) / 6)),
              (this.words = new Array(this.length))
            for (var i = 0; i < this.length; i++) this.words[i] = 0
            var n,
              f = 0,
              a = 0
            if ("be" === r)
              for (i = e.length - 1; i >= t; i -= 2)
                (n = d(e, t, i) << f),
                  (this.words[a] |= 67108863 & n),
                  f >= 18
                    ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (f += 8)
            else
              for (
                i = (e.length - t) % 2 === 0 ? t + 1 : t;
                i < e.length;
                i += 2
              )
                (n = d(e, t, i) << f),
                  (this.words[a] |= 67108863 & n),
                  f >= 18
                    ? ((f -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (f += 8)
            this.strip()
          }),
          (f.prototype._parseBase = function (e, t, r) {
            ;(this.words = [0]), (this.length = 1)
            for (var i = 0, n = 1; n <= 67108863; n *= t) i++
            i--, (n = (n / t) | 0)
            for (
              var f = e.length - r,
                a = f % i,
                o = Math.min(f, f - a) + r,
                d = 0,
                c = r;
              c < o;
              c += i
            )
              (d = s(e, c, c + i, t)),
                this.imuln(n),
                this.words[0] + d < 67108864
                  ? (this.words[0] += d)
                  : this._iaddn(d)
            if (0 !== a) {
              var h = 1
              for (d = s(e, c, e.length, t), c = 0; c < a; c++) h *= t
              this.imuln(h),
                this.words[0] + d < 67108864
                  ? (this.words[0] += d)
                  : this._iaddn(d)
            }
            this.strip()
          }),
          (f.prototype.copy = function (e) {
            e.words = new Array(this.length)
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t]
            ;(e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red)
          }),
          (f.prototype.clone = function () {
            var e = new f(null)
            return this.copy(e), e
          }),
          (f.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0
            return this
          }),
          (f.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--
            return this._normSign()
          }),
          (f.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            )
          }),
          (f.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
          })
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000"
          ],
          h = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5
          ],
          u = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176
          ]
        function b(e, t, r) {
          r.negative = t.negative ^ e.negative
          var i = (e.length + t.length) | 0
          ;(r.length = i), (i = (i - 1) | 0)
          var n = 0 | e.words[0],
            f = 0 | t.words[0],
            a = n * f,
            o = 67108863 & a,
            d = (a / 67108864) | 0
          r.words[0] = o
          for (var s = 1; s < i; s++) {
            for (
              var c = d >>> 26,
                h = 67108863 & d,
                u = Math.min(s, t.length - 1),
                b = Math.max(0, s - e.length + 1);
              b <= u;
              b++
            ) {
              var l = (s - b) | 0
              ;(c +=
                ((a = (n = 0 | e.words[l]) * (f = 0 | t.words[b]) + h) /
                  67108864) |
                0),
                (h = 67108863 & a)
            }
            ;(r.words[s] = 0 | h), (d = 0 | c)
          }
          return 0 !== d ? (r.words[s] = 0 | d) : r.length--, r.strip()
        }
        ;(f.prototype.toString = function (e, t) {
          var r
          if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
            r = ""
            for (var n = 0, f = 0, a = 0; a < this.length; a++) {
              var o = this.words[a],
                d = (16777215 & ((o << n) | f)).toString(16)
              ;(r =
                0 !== (f = (o >>> (24 - n)) & 16777215) || a !== this.length - 1
                  ? c[6 - d.length] + d + r
                  : d + r),
                (n += 2) >= 26 && ((n -= 26), a--)
            }
            for (0 !== f && (r = f.toString(16) + r); r.length % t !== 0; )
              r = "0" + r
            return 0 !== this.negative && (r = "-" + r), r
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var s = h[e],
              b = u[e]
            r = ""
            var l = this.clone()
            for (l.negative = 0; !l.isZero(); ) {
              var p = l.modn(b).toString(e)
              r = (l = l.idivn(b)).isZero() ? p + r : c[s - p.length] + p + r
            }
            for (this.isZero() && (r = "0" + r); r.length % t !== 0; )
              r = "0" + r
            return 0 !== this.negative && (r = "-" + r), r
          }
          i(!1, "Base should be between 2 and 36")
        }),
          (f.prototype.toNumber = function () {
            var e = this.words[0]
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            )
          }),
          (f.prototype.toJSON = function () {
            return this.toString(16)
          }),
          (f.prototype.toBuffer = function (e, t) {
            return i("undefined" !== typeof a), this.toArrayLike(a, e, t)
          }),
          (f.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t)
          }),
          (f.prototype.toArrayLike = function (e, t, r) {
            var n = this.byteLength(),
              f = r || Math.max(1, n)
            i(n <= f, "byte array longer than desired length"),
              i(f > 0, "Requested array length <= 0"),
              this.strip()
            var a,
              o,
              d = "le" === t,
              s = new e(f),
              c = this.clone()
            if (d) {
              for (o = 0; !c.isZero(); o++)
                (a = c.andln(255)), c.iushrn(8), (s[o] = a)
              for (; o < f; o++) s[o] = 0
            } else {
              for (o = 0; o < f - n; o++) s[o] = 0
              for (o = 0; !c.isZero(); o++)
                (a = c.andln(255)), c.iushrn(8), (s[f - o - 1] = a)
            }
            return s
          }),
          Math.clz32
            ? (f.prototype._countBits = function (e) {
                return 32 - Math.clz32(e)
              })
            : (f.prototype._countBits = function (e) {
                var t = e,
                  r = 0
                return (
                  t >= 4096 && ((r += 13), (t >>>= 13)),
                  t >= 64 && ((r += 7), (t >>>= 7)),
                  t >= 8 && ((r += 4), (t >>>= 4)),
                  t >= 2 && ((r += 2), (t >>>= 2)),
                  r + t
                )
              }),
          (f.prototype._zeroBits = function (e) {
            if (0 === e) return 26
            var t = e,
              r = 0
            return (
              0 === (8191 & t) && ((r += 13), (t >>>= 13)),
              0 === (127 & t) && ((r += 7), (t >>>= 7)),
              0 === (15 & t) && ((r += 4), (t >>>= 4)),
              0 === (3 & t) && ((r += 2), (t >>>= 2)),
              0 === (1 & t) && r++,
              r
            )
          }),
          (f.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              t = this._countBits(e)
            return 26 * (this.length - 1) + t
          }),
          (f.prototype.zeroBits = function () {
            if (this.isZero()) return 0
            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t])
              if (((e += r), 26 !== r)) break
            }
            return e
          }),
          (f.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8)
          }),
          (f.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone()
          }),
          (f.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone()
          }),
          (f.prototype.isNeg = function () {
            return 0 !== this.negative
          }),
          (f.prototype.neg = function () {
            return this.clone().ineg()
          }),
          (f.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this
          }),
          (f.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t]
            return this.strip()
          }),
          (f.prototype.ior = function (e) {
            return i(0 === (this.negative | e.negative)), this.iuor(e)
          }),
          (f.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this)
          }),
          (f.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this)
          }),
          (f.prototype.iuand = function (e) {
            var t
            t = this.length > e.length ? e : this
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] & e.words[r]
            return (this.length = t.length), this.strip()
          }),
          (f.prototype.iand = function (e) {
            return i(0 === (this.negative | e.negative)), this.iuand(e)
          }),
          (f.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this)
          }),
          (f.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this)
          }),
          (f.prototype.iuxor = function (e) {
            var t, r
            this.length > e.length
              ? ((t = this), (r = e))
              : ((t = e), (r = this))
            for (var i = 0; i < r.length; i++)
              this.words[i] = t.words[i] ^ r.words[i]
            if (this !== t) for (; i < t.length; i++) this.words[i] = t.words[i]
            return (this.length = t.length), this.strip()
          }),
          (f.prototype.ixor = function (e) {
            return i(0 === (this.negative | e.negative)), this.iuxor(e)
          }),
          (f.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this)
          }),
          (f.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this)
          }),
          (f.prototype.inotn = function (e) {
            i("number" === typeof e && e >= 0)
            var t = 0 | Math.ceil(e / 26),
              r = e % 26
            this._expand(t), r > 0 && t--
            for (var n = 0; n < t; n++)
              this.words[n] = 67108863 & ~this.words[n]
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this.strip()
            )
          }),
          (f.prototype.notn = function (e) {
            return this.clone().inotn(e)
          }),
          (f.prototype.setn = function (e, t) {
            i("number" === typeof e && e >= 0)
            var r = (e / 26) | 0,
              n = e % 26
            return (
              this._expand(r + 1),
              (this.words[r] = t
                ? this.words[r] | (1 << n)
                : this.words[r] & ~(1 << n)),
              this.strip()
            )
          }),
          (f.prototype.iadd = function (e) {
            var t, r, i
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              )
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              )
            this.length > e.length
              ? ((r = this), (i = e))
              : ((r = e), (i = this))
            for (var n = 0, f = 0; f < i.length; f++)
              (t = (0 | r.words[f]) + (0 | i.words[f]) + n),
                (this.words[f] = 67108863 & t),
                (n = t >>> 26)
            for (; 0 !== n && f < r.length; f++)
              (t = (0 | r.words[f]) + n),
                (this.words[f] = 67108863 & t),
                (n = t >>> 26)
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++
            else if (r !== this)
              for (; f < r.length; f++) this.words[f] = r.words[f]
            return this
          }),
          (f.prototype.add = function (e) {
            var t
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this)
          }),
          (f.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0
              var t = this.iadd(e)
              return (e.negative = 1), t._normSign()
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              )
            var r,
              i,
              n = this.cmp(e)
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              )
            n > 0 ? ((r = this), (i = e)) : ((r = e), (i = this))
            for (var f = 0, a = 0; a < i.length; a++)
              (f = (t = (0 | r.words[a]) - (0 | i.words[a]) + f) >> 26),
                (this.words[a] = 67108863 & t)
            for (; 0 !== f && a < r.length; a++)
              (f = (t = (0 | r.words[a]) + f) >> 26),
                (this.words[a] = 67108863 & t)
            if (0 === f && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a]
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this.strip()
            )
          }),
          (f.prototype.sub = function (e) {
            return this.clone().isub(e)
          })
        var l = function (e, t, r) {
          var i,
            n,
            f,
            a = e.words,
            o = t.words,
            d = r.words,
            s = 0,
            c = 0 | a[0],
            h = 8191 & c,
            u = c >>> 13,
            b = 0 | a[1],
            l = 8191 & b,
            p = b >>> 13,
            m = 0 | a[2],
            y = 8191 & m,
            v = m >>> 13,
            g = 0 | a[3],
            w = 8191 & g,
            M = g >>> 13,
            _ = 0 | a[4],
            A = 8191 & _,
            S = _ >>> 13,
            x = 0 | a[5],
            I = 8191 & x,
            E = x >>> 13,
            k = 0 | a[6],
            z = 8191 & k,
            R = k >>> 13,
            P = 0 | a[7],
            q = 8191 & P,
            L = P >>> 13,
            N = 0 | a[8],
            B = 8191 & N,
            O = N >>> 13,
            K = 0 | a[9],
            T = 8191 & K,
            U = K >>> 13,
            j = 0 | o[0],
            D = 8191 & j,
            C = j >>> 13,
            Z = 0 | o[1],
            F = 8191 & Z,
            J = Z >>> 13,
            H = 0 | o[2],
            W = 8191 & H,
            Y = H >>> 13,
            V = 0 | o[3],
            X = 8191 & V,
            $ = V >>> 13,
            G = 0 | o[4],
            Q = 8191 & G,
            ee = G >>> 13,
            te = 0 | o[5],
            re = 8191 & te,
            ie = te >>> 13,
            ne = 0 | o[6],
            fe = 8191 & ne,
            ae = ne >>> 13,
            oe = 0 | o[7],
            de = 8191 & oe,
            se = oe >>> 13,
            ce = 0 | o[8],
            he = 8191 & ce,
            ue = ce >>> 13,
            be = 0 | o[9],
            le = 8191 & be,
            pe = be >>> 13
          ;(r.negative = e.negative ^ t.negative), (r.length = 19)
          var me =
            (((s + (i = Math.imul(h, D))) | 0) +
              ((8191 & (n = ((n = Math.imul(h, C)) + Math.imul(u, D)) | 0)) <<
                13)) |
            0
          ;(s = ((((f = Math.imul(u, C)) + (n >>> 13)) | 0) + (me >>> 26)) | 0),
            (me &= 67108863),
            (i = Math.imul(l, D)),
            (n = ((n = Math.imul(l, C)) + Math.imul(p, D)) | 0),
            (f = Math.imul(p, C))
          var ye =
            (((s + (i = (i + Math.imul(h, F)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, J)) | 0) + Math.imul(u, F)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, J)) | 0) + (n >>> 13)) | 0) +
              (ye >>> 26)) |
            0),
            (ye &= 67108863),
            (i = Math.imul(y, D)),
            (n = ((n = Math.imul(y, C)) + Math.imul(v, D)) | 0),
            (f = Math.imul(v, C)),
            (i = (i + Math.imul(l, F)) | 0),
            (n = ((n = (n + Math.imul(l, J)) | 0) + Math.imul(p, F)) | 0),
            (f = (f + Math.imul(p, J)) | 0)
          var ve =
            (((s + (i = (i + Math.imul(h, W)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, Y)) | 0) + Math.imul(u, W)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, Y)) | 0) + (n >>> 13)) | 0) +
              (ve >>> 26)) |
            0),
            (ve &= 67108863),
            (i = Math.imul(w, D)),
            (n = ((n = Math.imul(w, C)) + Math.imul(M, D)) | 0),
            (f = Math.imul(M, C)),
            (i = (i + Math.imul(y, F)) | 0),
            (n = ((n = (n + Math.imul(y, J)) | 0) + Math.imul(v, F)) | 0),
            (f = (f + Math.imul(v, J)) | 0),
            (i = (i + Math.imul(l, W)) | 0),
            (n = ((n = (n + Math.imul(l, Y)) | 0) + Math.imul(p, W)) | 0),
            (f = (f + Math.imul(p, Y)) | 0)
          var ge =
            (((s + (i = (i + Math.imul(h, X)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, $)) | 0) + Math.imul(u, X)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, $)) | 0) + (n >>> 13)) | 0) +
              (ge >>> 26)) |
            0),
            (ge &= 67108863),
            (i = Math.imul(A, D)),
            (n = ((n = Math.imul(A, C)) + Math.imul(S, D)) | 0),
            (f = Math.imul(S, C)),
            (i = (i + Math.imul(w, F)) | 0),
            (n = ((n = (n + Math.imul(w, J)) | 0) + Math.imul(M, F)) | 0),
            (f = (f + Math.imul(M, J)) | 0),
            (i = (i + Math.imul(y, W)) | 0),
            (n = ((n = (n + Math.imul(y, Y)) | 0) + Math.imul(v, W)) | 0),
            (f = (f + Math.imul(v, Y)) | 0),
            (i = (i + Math.imul(l, X)) | 0),
            (n = ((n = (n + Math.imul(l, $)) | 0) + Math.imul(p, X)) | 0),
            (f = (f + Math.imul(p, $)) | 0)
          var we =
            (((s + (i = (i + Math.imul(h, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, ee)) | 0) + Math.imul(u, Q)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, ee)) | 0) + (n >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (i = Math.imul(I, D)),
            (n = ((n = Math.imul(I, C)) + Math.imul(E, D)) | 0),
            (f = Math.imul(E, C)),
            (i = (i + Math.imul(A, F)) | 0),
            (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(S, F)) | 0),
            (f = (f + Math.imul(S, J)) | 0),
            (i = (i + Math.imul(w, W)) | 0),
            (n = ((n = (n + Math.imul(w, Y)) | 0) + Math.imul(M, W)) | 0),
            (f = (f + Math.imul(M, Y)) | 0),
            (i = (i + Math.imul(y, X)) | 0),
            (n = ((n = (n + Math.imul(y, $)) | 0) + Math.imul(v, X)) | 0),
            (f = (f + Math.imul(v, $)) | 0),
            (i = (i + Math.imul(l, Q)) | 0),
            (n = ((n = (n + Math.imul(l, ee)) | 0) + Math.imul(p, Q)) | 0),
            (f = (f + Math.imul(p, ee)) | 0)
          var Me =
            (((s + (i = (i + Math.imul(h, re)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, ie)) | 0) + Math.imul(u, re)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, ie)) | 0) + (n >>> 13)) | 0) +
              (Me >>> 26)) |
            0),
            (Me &= 67108863),
            (i = Math.imul(z, D)),
            (n = ((n = Math.imul(z, C)) + Math.imul(R, D)) | 0),
            (f = Math.imul(R, C)),
            (i = (i + Math.imul(I, F)) | 0),
            (n = ((n = (n + Math.imul(I, J)) | 0) + Math.imul(E, F)) | 0),
            (f = (f + Math.imul(E, J)) | 0),
            (i = (i + Math.imul(A, W)) | 0),
            (n = ((n = (n + Math.imul(A, Y)) | 0) + Math.imul(S, W)) | 0),
            (f = (f + Math.imul(S, Y)) | 0),
            (i = (i + Math.imul(w, X)) | 0),
            (n = ((n = (n + Math.imul(w, $)) | 0) + Math.imul(M, X)) | 0),
            (f = (f + Math.imul(M, $)) | 0),
            (i = (i + Math.imul(y, Q)) | 0),
            (n = ((n = (n + Math.imul(y, ee)) | 0) + Math.imul(v, Q)) | 0),
            (f = (f + Math.imul(v, ee)) | 0),
            (i = (i + Math.imul(l, re)) | 0),
            (n = ((n = (n + Math.imul(l, ie)) | 0) + Math.imul(p, re)) | 0),
            (f = (f + Math.imul(p, ie)) | 0)
          var _e =
            (((s + (i = (i + Math.imul(h, fe)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, ae)) | 0) + Math.imul(u, fe)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, ae)) | 0) + (n >>> 13)) | 0) +
              (_e >>> 26)) |
            0),
            (_e &= 67108863),
            (i = Math.imul(q, D)),
            (n = ((n = Math.imul(q, C)) + Math.imul(L, D)) | 0),
            (f = Math.imul(L, C)),
            (i = (i + Math.imul(z, F)) | 0),
            (n = ((n = (n + Math.imul(z, J)) | 0) + Math.imul(R, F)) | 0),
            (f = (f + Math.imul(R, J)) | 0),
            (i = (i + Math.imul(I, W)) | 0),
            (n = ((n = (n + Math.imul(I, Y)) | 0) + Math.imul(E, W)) | 0),
            (f = (f + Math.imul(E, Y)) | 0),
            (i = (i + Math.imul(A, X)) | 0),
            (n = ((n = (n + Math.imul(A, $)) | 0) + Math.imul(S, X)) | 0),
            (f = (f + Math.imul(S, $)) | 0),
            (i = (i + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, ee)) | 0) + Math.imul(M, Q)) | 0),
            (f = (f + Math.imul(M, ee)) | 0),
            (i = (i + Math.imul(y, re)) | 0),
            (n = ((n = (n + Math.imul(y, ie)) | 0) + Math.imul(v, re)) | 0),
            (f = (f + Math.imul(v, ie)) | 0),
            (i = (i + Math.imul(l, fe)) | 0),
            (n = ((n = (n + Math.imul(l, ae)) | 0) + Math.imul(p, fe)) | 0),
            (f = (f + Math.imul(p, ae)) | 0)
          var Ae =
            (((s + (i = (i + Math.imul(h, de)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, se)) | 0) + Math.imul(u, de)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, se)) | 0) + (n >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (i = Math.imul(B, D)),
            (n = ((n = Math.imul(B, C)) + Math.imul(O, D)) | 0),
            (f = Math.imul(O, C)),
            (i = (i + Math.imul(q, F)) | 0),
            (n = ((n = (n + Math.imul(q, J)) | 0) + Math.imul(L, F)) | 0),
            (f = (f + Math.imul(L, J)) | 0),
            (i = (i + Math.imul(z, W)) | 0),
            (n = ((n = (n + Math.imul(z, Y)) | 0) + Math.imul(R, W)) | 0),
            (f = (f + Math.imul(R, Y)) | 0),
            (i = (i + Math.imul(I, X)) | 0),
            (n = ((n = (n + Math.imul(I, $)) | 0) + Math.imul(E, X)) | 0),
            (f = (f + Math.imul(E, $)) | 0),
            (i = (i + Math.imul(A, Q)) | 0),
            (n = ((n = (n + Math.imul(A, ee)) | 0) + Math.imul(S, Q)) | 0),
            (f = (f + Math.imul(S, ee)) | 0),
            (i = (i + Math.imul(w, re)) | 0),
            (n = ((n = (n + Math.imul(w, ie)) | 0) + Math.imul(M, re)) | 0),
            (f = (f + Math.imul(M, ie)) | 0),
            (i = (i + Math.imul(y, fe)) | 0),
            (n = ((n = (n + Math.imul(y, ae)) | 0) + Math.imul(v, fe)) | 0),
            (f = (f + Math.imul(v, ae)) | 0),
            (i = (i + Math.imul(l, de)) | 0),
            (n = ((n = (n + Math.imul(l, se)) | 0) + Math.imul(p, de)) | 0),
            (f = (f + Math.imul(p, se)) | 0)
          var Se =
            (((s + (i = (i + Math.imul(h, he)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, ue)) | 0) + Math.imul(u, he)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, ue)) | 0) + (n >>> 13)) | 0) +
              (Se >>> 26)) |
            0),
            (Se &= 67108863),
            (i = Math.imul(T, D)),
            (n = ((n = Math.imul(T, C)) + Math.imul(U, D)) | 0),
            (f = Math.imul(U, C)),
            (i = (i + Math.imul(B, F)) | 0),
            (n = ((n = (n + Math.imul(B, J)) | 0) + Math.imul(O, F)) | 0),
            (f = (f + Math.imul(O, J)) | 0),
            (i = (i + Math.imul(q, W)) | 0),
            (n = ((n = (n + Math.imul(q, Y)) | 0) + Math.imul(L, W)) | 0),
            (f = (f + Math.imul(L, Y)) | 0),
            (i = (i + Math.imul(z, X)) | 0),
            (n = ((n = (n + Math.imul(z, $)) | 0) + Math.imul(R, X)) | 0),
            (f = (f + Math.imul(R, $)) | 0),
            (i = (i + Math.imul(I, Q)) | 0),
            (n = ((n = (n + Math.imul(I, ee)) | 0) + Math.imul(E, Q)) | 0),
            (f = (f + Math.imul(E, ee)) | 0),
            (i = (i + Math.imul(A, re)) | 0),
            (n = ((n = (n + Math.imul(A, ie)) | 0) + Math.imul(S, re)) | 0),
            (f = (f + Math.imul(S, ie)) | 0),
            (i = (i + Math.imul(w, fe)) | 0),
            (n = ((n = (n + Math.imul(w, ae)) | 0) + Math.imul(M, fe)) | 0),
            (f = (f + Math.imul(M, ae)) | 0),
            (i = (i + Math.imul(y, de)) | 0),
            (n = ((n = (n + Math.imul(y, se)) | 0) + Math.imul(v, de)) | 0),
            (f = (f + Math.imul(v, se)) | 0),
            (i = (i + Math.imul(l, he)) | 0),
            (n = ((n = (n + Math.imul(l, ue)) | 0) + Math.imul(p, he)) | 0),
            (f = (f + Math.imul(p, ue)) | 0)
          var xe =
            (((s + (i = (i + Math.imul(h, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(h, pe)) | 0) + Math.imul(u, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(u, pe)) | 0) + (n >>> 13)) | 0) +
              (xe >>> 26)) |
            0),
            (xe &= 67108863),
            (i = Math.imul(T, F)),
            (n = ((n = Math.imul(T, J)) + Math.imul(U, F)) | 0),
            (f = Math.imul(U, J)),
            (i = (i + Math.imul(B, W)) | 0),
            (n = ((n = (n + Math.imul(B, Y)) | 0) + Math.imul(O, W)) | 0),
            (f = (f + Math.imul(O, Y)) | 0),
            (i = (i + Math.imul(q, X)) | 0),
            (n = ((n = (n + Math.imul(q, $)) | 0) + Math.imul(L, X)) | 0),
            (f = (f + Math.imul(L, $)) | 0),
            (i = (i + Math.imul(z, Q)) | 0),
            (n = ((n = (n + Math.imul(z, ee)) | 0) + Math.imul(R, Q)) | 0),
            (f = (f + Math.imul(R, ee)) | 0),
            (i = (i + Math.imul(I, re)) | 0),
            (n = ((n = (n + Math.imul(I, ie)) | 0) + Math.imul(E, re)) | 0),
            (f = (f + Math.imul(E, ie)) | 0),
            (i = (i + Math.imul(A, fe)) | 0),
            (n = ((n = (n + Math.imul(A, ae)) | 0) + Math.imul(S, fe)) | 0),
            (f = (f + Math.imul(S, ae)) | 0),
            (i = (i + Math.imul(w, de)) | 0),
            (n = ((n = (n + Math.imul(w, se)) | 0) + Math.imul(M, de)) | 0),
            (f = (f + Math.imul(M, se)) | 0),
            (i = (i + Math.imul(y, he)) | 0),
            (n = ((n = (n + Math.imul(y, ue)) | 0) + Math.imul(v, he)) | 0),
            (f = (f + Math.imul(v, ue)) | 0)
          var Ie =
            (((s + (i = (i + Math.imul(l, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, pe)) | 0) + Math.imul(p, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(p, pe)) | 0) + (n >>> 13)) | 0) +
              (Ie >>> 26)) |
            0),
            (Ie &= 67108863),
            (i = Math.imul(T, W)),
            (n = ((n = Math.imul(T, Y)) + Math.imul(U, W)) | 0),
            (f = Math.imul(U, Y)),
            (i = (i + Math.imul(B, X)) | 0),
            (n = ((n = (n + Math.imul(B, $)) | 0) + Math.imul(O, X)) | 0),
            (f = (f + Math.imul(O, $)) | 0),
            (i = (i + Math.imul(q, Q)) | 0),
            (n = ((n = (n + Math.imul(q, ee)) | 0) + Math.imul(L, Q)) | 0),
            (f = (f + Math.imul(L, ee)) | 0),
            (i = (i + Math.imul(z, re)) | 0),
            (n = ((n = (n + Math.imul(z, ie)) | 0) + Math.imul(R, re)) | 0),
            (f = (f + Math.imul(R, ie)) | 0),
            (i = (i + Math.imul(I, fe)) | 0),
            (n = ((n = (n + Math.imul(I, ae)) | 0) + Math.imul(E, fe)) | 0),
            (f = (f + Math.imul(E, ae)) | 0),
            (i = (i + Math.imul(A, de)) | 0),
            (n = ((n = (n + Math.imul(A, se)) | 0) + Math.imul(S, de)) | 0),
            (f = (f + Math.imul(S, se)) | 0),
            (i = (i + Math.imul(w, he)) | 0),
            (n = ((n = (n + Math.imul(w, ue)) | 0) + Math.imul(M, he)) | 0),
            (f = (f + Math.imul(M, ue)) | 0)
          var Ee =
            (((s + (i = (i + Math.imul(y, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(y, pe)) | 0) + Math.imul(v, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(v, pe)) | 0) + (n >>> 13)) | 0) +
              (Ee >>> 26)) |
            0),
            (Ee &= 67108863),
            (i = Math.imul(T, X)),
            (n = ((n = Math.imul(T, $)) + Math.imul(U, X)) | 0),
            (f = Math.imul(U, $)),
            (i = (i + Math.imul(B, Q)) | 0),
            (n = ((n = (n + Math.imul(B, ee)) | 0) + Math.imul(O, Q)) | 0),
            (f = (f + Math.imul(O, ee)) | 0),
            (i = (i + Math.imul(q, re)) | 0),
            (n = ((n = (n + Math.imul(q, ie)) | 0) + Math.imul(L, re)) | 0),
            (f = (f + Math.imul(L, ie)) | 0),
            (i = (i + Math.imul(z, fe)) | 0),
            (n = ((n = (n + Math.imul(z, ae)) | 0) + Math.imul(R, fe)) | 0),
            (f = (f + Math.imul(R, ae)) | 0),
            (i = (i + Math.imul(I, de)) | 0),
            (n = ((n = (n + Math.imul(I, se)) | 0) + Math.imul(E, de)) | 0),
            (f = (f + Math.imul(E, se)) | 0),
            (i = (i + Math.imul(A, he)) | 0),
            (n = ((n = (n + Math.imul(A, ue)) | 0) + Math.imul(S, he)) | 0),
            (f = (f + Math.imul(S, ue)) | 0)
          var ke =
            (((s + (i = (i + Math.imul(w, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, pe)) | 0) + Math.imul(M, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(M, pe)) | 0) + (n >>> 13)) | 0) +
              (ke >>> 26)) |
            0),
            (ke &= 67108863),
            (i = Math.imul(T, Q)),
            (n = ((n = Math.imul(T, ee)) + Math.imul(U, Q)) | 0),
            (f = Math.imul(U, ee)),
            (i = (i + Math.imul(B, re)) | 0),
            (n = ((n = (n + Math.imul(B, ie)) | 0) + Math.imul(O, re)) | 0),
            (f = (f + Math.imul(O, ie)) | 0),
            (i = (i + Math.imul(q, fe)) | 0),
            (n = ((n = (n + Math.imul(q, ae)) | 0) + Math.imul(L, fe)) | 0),
            (f = (f + Math.imul(L, ae)) | 0),
            (i = (i + Math.imul(z, de)) | 0),
            (n = ((n = (n + Math.imul(z, se)) | 0) + Math.imul(R, de)) | 0),
            (f = (f + Math.imul(R, se)) | 0),
            (i = (i + Math.imul(I, he)) | 0),
            (n = ((n = (n + Math.imul(I, ue)) | 0) + Math.imul(E, he)) | 0),
            (f = (f + Math.imul(E, ue)) | 0)
          var ze =
            (((s + (i = (i + Math.imul(A, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, pe)) | 0) + Math.imul(S, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(S, pe)) | 0) + (n >>> 13)) | 0) +
              (ze >>> 26)) |
            0),
            (ze &= 67108863),
            (i = Math.imul(T, re)),
            (n = ((n = Math.imul(T, ie)) + Math.imul(U, re)) | 0),
            (f = Math.imul(U, ie)),
            (i = (i + Math.imul(B, fe)) | 0),
            (n = ((n = (n + Math.imul(B, ae)) | 0) + Math.imul(O, fe)) | 0),
            (f = (f + Math.imul(O, ae)) | 0),
            (i = (i + Math.imul(q, de)) | 0),
            (n = ((n = (n + Math.imul(q, se)) | 0) + Math.imul(L, de)) | 0),
            (f = (f + Math.imul(L, se)) | 0),
            (i = (i + Math.imul(z, he)) | 0),
            (n = ((n = (n + Math.imul(z, ue)) | 0) + Math.imul(R, he)) | 0),
            (f = (f + Math.imul(R, ue)) | 0)
          var Re =
            (((s + (i = (i + Math.imul(I, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(I, pe)) | 0) + Math.imul(E, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(E, pe)) | 0) + (n >>> 13)) | 0) +
              (Re >>> 26)) |
            0),
            (Re &= 67108863),
            (i = Math.imul(T, fe)),
            (n = ((n = Math.imul(T, ae)) + Math.imul(U, fe)) | 0),
            (f = Math.imul(U, ae)),
            (i = (i + Math.imul(B, de)) | 0),
            (n = ((n = (n + Math.imul(B, se)) | 0) + Math.imul(O, de)) | 0),
            (f = (f + Math.imul(O, se)) | 0),
            (i = (i + Math.imul(q, he)) | 0),
            (n = ((n = (n + Math.imul(q, ue)) | 0) + Math.imul(L, he)) | 0),
            (f = (f + Math.imul(L, ue)) | 0)
          var Pe =
            (((s + (i = (i + Math.imul(z, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(z, pe)) | 0) + Math.imul(R, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(R, pe)) | 0) + (n >>> 13)) | 0) +
              (Pe >>> 26)) |
            0),
            (Pe &= 67108863),
            (i = Math.imul(T, de)),
            (n = ((n = Math.imul(T, se)) + Math.imul(U, de)) | 0),
            (f = Math.imul(U, se)),
            (i = (i + Math.imul(B, he)) | 0),
            (n = ((n = (n + Math.imul(B, ue)) | 0) + Math.imul(O, he)) | 0),
            (f = (f + Math.imul(O, ue)) | 0)
          var qe =
            (((s + (i = (i + Math.imul(q, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(q, pe)) | 0) + Math.imul(L, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(L, pe)) | 0) + (n >>> 13)) | 0) +
              (qe >>> 26)) |
            0),
            (qe &= 67108863),
            (i = Math.imul(T, he)),
            (n = ((n = Math.imul(T, ue)) + Math.imul(U, he)) | 0),
            (f = Math.imul(U, ue))
          var Le =
            (((s + (i = (i + Math.imul(B, le)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, pe)) | 0) + Math.imul(O, le)) | 0)) <<
                13)) |
            0
          ;(s =
            ((((f = (f + Math.imul(O, pe)) | 0) + (n >>> 13)) | 0) +
              (Le >>> 26)) |
            0),
            (Le &= 67108863)
          var Ne =
            (((s + (i = Math.imul(T, le))) | 0) +
              ((8191 & (n = ((n = Math.imul(T, pe)) + Math.imul(U, le)) | 0)) <<
                13)) |
            0
          return (
            (s =
              ((((f = Math.imul(U, pe)) + (n >>> 13)) | 0) + (Ne >>> 26)) | 0),
            (Ne &= 67108863),
            (d[0] = me),
            (d[1] = ye),
            (d[2] = ve),
            (d[3] = ge),
            (d[4] = we),
            (d[5] = Me),
            (d[6] = _e),
            (d[7] = Ae),
            (d[8] = Se),
            (d[9] = xe),
            (d[10] = Ie),
            (d[11] = Ee),
            (d[12] = ke),
            (d[13] = ze),
            (d[14] = Re),
            (d[15] = Pe),
            (d[16] = qe),
            (d[17] = Le),
            (d[18] = Ne),
            0 !== s && ((d[19] = s), r.length++),
            r
          )
        }
        function p(e, t, r) {
          return new m().mulp(e, t, r)
        }
        function m(e, t) {
          ;(this.x = e), (this.y = t)
        }
        Math.imul || (l = b),
          (f.prototype.mulTo = function (e, t) {
            var r,
              i = this.length + e.length
            return (
              (r =
                10 === this.length && 10 === e.length
                  ? l(this, e, t)
                  : i < 63
                  ? b(this, e, t)
                  : i < 1024
                  ? (function (e, t, r) {
                      ;(r.negative = t.negative ^ e.negative),
                        (r.length = e.length + t.length)
                      for (var i = 0, n = 0, f = 0; f < r.length - 1; f++) {
                        var a = n
                        n = 0
                        for (
                          var o = 67108863 & i,
                            d = Math.min(f, t.length - 1),
                            s = Math.max(0, f - e.length + 1);
                          s <= d;
                          s++
                        ) {
                          var c = f - s,
                            h = (0 | e.words[c]) * (0 | t.words[s]),
                            u = 67108863 & h
                          ;(o = 67108863 & (u = (u + o) | 0)),
                            (n +=
                              (a =
                                ((a = (a + ((h / 67108864) | 0)) | 0) +
                                  (u >>> 26)) |
                                0) >>> 26),
                            (a &= 67108863)
                        }
                        ;(r.words[f] = o), (i = a), (a = n)
                      }
                      return 0 !== i ? (r.words[f] = i) : r.length--, r.strip()
                    })(this, e, t)
                  : p(this, e, t)),
              r
            )
          }),
          (m.prototype.makeRBT = function (e) {
            for (
              var t = new Array(e), r = f.prototype._countBits(e) - 1, i = 0;
              i < e;
              i++
            )
              t[i] = this.revBin(i, r, e)
            return t
          }),
          (m.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e
            for (var i = 0, n = 0; n < t; n++)
              (i |= (1 & e) << (t - n - 1)), (e >>= 1)
            return i
          }),
          (m.prototype.permute = function (e, t, r, i, n, f) {
            for (var a = 0; a < f; a++) (i[a] = t[e[a]]), (n[a] = r[e[a]])
          }),
          (m.prototype.transform = function (e, t, r, i, n, f) {
            this.permute(f, e, t, r, i, n)
            for (var a = 1; a < n; a <<= 1)
              for (
                var o = a << 1,
                  d = Math.cos((2 * Math.PI) / o),
                  s = Math.sin((2 * Math.PI) / o),
                  c = 0;
                c < n;
                c += o
              )
                for (var h = d, u = s, b = 0; b < a; b++) {
                  var l = r[c + b],
                    p = i[c + b],
                    m = r[c + b + a],
                    y = i[c + b + a],
                    v = h * m - u * y
                  ;(y = h * y + u * m),
                    (m = v),
                    (r[c + b] = l + m),
                    (i[c + b] = p + y),
                    (r[c + b + a] = l - m),
                    (i[c + b + a] = p - y),
                    b !== o &&
                      ((v = d * h - s * u), (u = d * u + s * h), (h = v))
                }
          }),
          (m.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
              i = 1 & r,
              n = 0
            for (r = (r / 2) | 0; r; r >>>= 1) n++
            return 1 << (n + 1 + i)
          }),
          (m.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1))
              for (var i = 0; i < r / 2; i++) {
                var n = e[i]
                ;(e[i] = e[r - i - 1]),
                  (e[r - i - 1] = n),
                  (n = t[i]),
                  (t[i] = -t[r - i - 1]),
                  (t[r - i - 1] = -n)
              }
          }),
          (m.prototype.normalize13b = function (e, t) {
            for (var r = 0, i = 0; i < t / 2; i++) {
              var n =
                8192 * Math.round(e[2 * i + 1] / t) +
                Math.round(e[2 * i] / t) +
                r
              ;(e[i] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0)
            }
            return e
          }),
          (m.prototype.convert13b = function (e, t, r, n) {
            for (var f = 0, a = 0; a < t; a++)
              (f += 0 | e[a]),
                (r[2 * a] = 8191 & f),
                (f >>>= 13),
                (r[2 * a + 1] = 8191 & f),
                (f >>>= 13)
            for (a = 2 * t; a < n; ++a) r[a] = 0
            i(0 === f), i(0 === (-8192 & f))
          }),
          (m.prototype.stub = function (e) {
            for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0
            return t
          }),
          (m.prototype.mulp = function (e, t, r) {
            var i = 2 * this.guessLen13b(e.length, t.length),
              n = this.makeRBT(i),
              f = this.stub(i),
              a = new Array(i),
              o = new Array(i),
              d = new Array(i),
              s = new Array(i),
              c = new Array(i),
              h = new Array(i),
              u = r.words
            ;(u.length = i),
              this.convert13b(e.words, e.length, a, i),
              this.convert13b(t.words, t.length, s, i),
              this.transform(a, f, o, d, i, n),
              this.transform(s, f, c, h, i, n)
            for (var b = 0; b < i; b++) {
              var l = o[b] * c[b] - d[b] * h[b]
              ;(d[b] = o[b] * h[b] + d[b] * c[b]), (o[b] = l)
            }
            return (
              this.conjugate(o, d, i),
              this.transform(o, d, u, f, i, n),
              this.conjugate(u, f, i),
              this.normalize13b(u, i),
              (r.negative = e.negative ^ t.negative),
              (r.length = e.length + t.length),
              r.strip()
            )
          }),
          (f.prototype.mul = function (e) {
            var t = new f(null)
            return (
              (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
            )
          }),
          (f.prototype.mulf = function (e) {
            var t = new f(null)
            return (t.words = new Array(this.length + e.length)), p(this, e, t)
          }),
          (f.prototype.imul = function (e) {
            return this.clone().mulTo(e, this)
          }),
          (f.prototype.imuln = function (e) {
            i("number" === typeof e), i(e < 67108864)
            for (var t = 0, r = 0; r < this.length; r++) {
              var n = (0 | this.words[r]) * e,
                f = (67108863 & n) + (67108863 & t)
              ;(t >>= 26),
                (t += (n / 67108864) | 0),
                (t += f >>> 26),
                (this.words[r] = 67108863 & f)
            }
            return 0 !== t && ((this.words[r] = t), this.length++), this
          }),
          (f.prototype.muln = function (e) {
            return this.clone().imuln(e)
          }),
          (f.prototype.sqr = function () {
            return this.mul(this)
          }),
          (f.prototype.isqr = function () {
            return this.imul(this.clone())
          }),
          (f.prototype.pow = function (e) {
            var t = (function (e) {
              for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26
                t[r] = (e.words[i] & (1 << n)) >>> n
              }
              return t
            })(e)
            if (0 === t.length) return new f(1)
            for (
              var r = this, i = 0;
              i < t.length && 0 === t[i];
              i++, r = r.sqr()
            );
            if (++i < t.length)
              for (var n = r.sqr(); i < t.length; i++, n = n.sqr())
                0 !== t[i] && (r = r.mul(n))
            return r
          }),
          (f.prototype.iushln = function (e) {
            i("number" === typeof e && e >= 0)
            var t,
              r = e % 26,
              n = (e - r) / 26,
              f = (67108863 >>> (26 - r)) << (26 - r)
            if (0 !== r) {
              var a = 0
              for (t = 0; t < this.length; t++) {
                var o = this.words[t] & f,
                  d = ((0 | this.words[t]) - o) << r
                ;(this.words[t] = d | a), (a = o >>> (26 - r))
              }
              a && ((this.words[t] = a), this.length++)
            }
            if (0 !== n) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + n] = this.words[t]
              for (t = 0; t < n; t++) this.words[t] = 0
              this.length += n
            }
            return this.strip()
          }),
          (f.prototype.ishln = function (e) {
            return i(0 === this.negative), this.iushln(e)
          }),
          (f.prototype.iushrn = function (e, t, r) {
            var n
            i("number" === typeof e && e >= 0),
              (n = t ? (t - (t % 26)) / 26 : 0)
            var f = e % 26,
              a = Math.min((e - f) / 26, this.length),
              o = 67108863 ^ ((67108863 >>> f) << f),
              d = r
            if (((n -= a), (n = Math.max(0, n)), d)) {
              for (var s = 0; s < a; s++) d.words[s] = this.words[s]
              d.length = a
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, s = 0; s < this.length; s++)
                this.words[s] = this.words[s + a]
            else (this.words[0] = 0), (this.length = 1)
            var c = 0
            for (s = this.length - 1; s >= 0 && (0 !== c || s >= n); s--) {
              var h = 0 | this.words[s]
              ;(this.words[s] = (c << (26 - f)) | (h >>> f)), (c = h & o)
            }
            return (
              d && 0 !== c && (d.words[d.length++] = c),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            )
          }),
          (f.prototype.ishrn = function (e, t, r) {
            return i(0 === this.negative), this.iushrn(e, t, r)
          }),
          (f.prototype.shln = function (e) {
            return this.clone().ishln(e)
          }),
          (f.prototype.ushln = function (e) {
            return this.clone().iushln(e)
          }),
          (f.prototype.shrn = function (e) {
            return this.clone().ishrn(e)
          }),
          (f.prototype.ushrn = function (e) {
            return this.clone().iushrn(e)
          }),
          (f.prototype.testn = function (e) {
            i("number" === typeof e && e >= 0)
            var t = e % 26,
              r = (e - t) / 26,
              n = 1 << t
            return !(this.length <= r) && !!(this.words[r] & n)
          }),
          (f.prototype.imaskn = function (e) {
            i("number" === typeof e && e >= 0)
            var t = e % 26,
              r = (e - t) / 26
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this
            if (
              (0 !== t && r++,
              (this.length = Math.min(r, this.length)),
              0 !== t)
            ) {
              var n = 67108863 ^ ((67108863 >>> t) << t)
              this.words[this.length - 1] &= n
            }
            return this.strip()
          }),
          (f.prototype.maskn = function (e) {
            return this.clone().imaskn(e)
          }),
          (f.prototype.iaddn = function (e) {
            return (
              i("number" === typeof e),
              i(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            )
          }),
          (f.prototype._iaddn = function (e) {
            this.words[0] += e
            for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
              (this.words[t] -= 67108864),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++
            return (this.length = Math.max(this.length, t + 1)), this
          }),
          (f.prototype.isubn = function (e) {
            if ((i("number" === typeof e), i(e < 67108864), e < 0))
              return this.iaddn(-e)
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              )
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1)
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 67108864), (this.words[t + 1] -= 1)
            return this.strip()
          }),
          (f.prototype.addn = function (e) {
            return this.clone().iaddn(e)
          }),
          (f.prototype.subn = function (e) {
            return this.clone().isubn(e)
          }),
          (f.prototype.iabs = function () {
            return (this.negative = 0), this
          }),
          (f.prototype.abs = function () {
            return this.clone().iabs()
          }),
          (f.prototype._ishlnsubmul = function (e, t, r) {
            var n,
              f,
              a = e.length + r
            this._expand(a)
            var o = 0
            for (n = 0; n < e.length; n++) {
              f = (0 | this.words[n + r]) + o
              var d = (0 | e.words[n]) * t
              ;(o = ((f -= 67108863 & d) >> 26) - ((d / 67108864) | 0)),
                (this.words[n + r] = 67108863 & f)
            }
            for (; n < this.length - r; n++)
              (o = (f = (0 | this.words[n + r]) + o) >> 26),
                (this.words[n + r] = 67108863 & f)
            if (0 === o) return this.strip()
            for (i(-1 === o), o = 0, n = 0; n < this.length; n++)
              (o = (f = -(0 | this.words[n]) + o) >> 26),
                (this.words[n] = 67108863 & f)
            return (this.negative = 1), this.strip()
          }),
          (f.prototype._wordDiv = function (e, t) {
            var r = (this.length, e.length),
              i = this.clone(),
              n = e,
              a = 0 | n.words[n.length - 1]
            0 !== (r = 26 - this._countBits(a)) &&
              ((n = n.ushln(r)), i.iushln(r), (a = 0 | n.words[n.length - 1]))
            var o,
              d = i.length - n.length
            if ("mod" !== t) {
              ;((o = new f(null)).length = d + 1),
                (o.words = new Array(o.length))
              for (var s = 0; s < o.length; s++) o.words[s] = 0
            }
            var c = i.clone()._ishlnsubmul(n, 1, d)
            0 === c.negative && ((i = c), o && (o.words[d] = 1))
            for (var h = d - 1; h >= 0; h--) {
              var u =
                67108864 * (0 | i.words[n.length + h]) +
                (0 | i.words[n.length + h - 1])
              for (
                u = Math.min((u / a) | 0, 67108863), i._ishlnsubmul(n, u, h);
                0 !== i.negative;

              )
                u--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, h),
                  i.isZero() || (i.negative ^= 1)
              o && (o.words[h] = u)
            }
            return (
              o && o.strip(),
              i.strip(),
              "div" !== t && 0 !== r && i.iushrn(r),
              { div: o || null, mod: i }
            )
          }),
          (f.prototype.divmod = function (e, t, r) {
            return (
              i(!e.isZero()),
              this.isZero()
                ? { div: new f(0), mod: new f(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((o = this.neg().divmod(e, t)),
                  "mod" !== t && (n = o.div.neg()),
                  "div" !== t &&
                    ((a = o.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                  { div: n, mod: a })
                : 0 === this.negative && 0 !== e.negative
                ? ((o = this.divmod(e.neg(), t)),
                  "mod" !== t && (n = o.div.neg()),
                  { div: n, mod: o.mod })
                : 0 !== (this.negative & e.negative)
                ? ((o = this.neg().divmod(e.neg(), t)),
                  "div" !== t &&
                    ((a = o.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                  { div: o.div, mod: a })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new f(0), mod: this }
                : 1 === e.length
                ? "div" === t
                  ? { div: this.divn(e.words[0]), mod: null }
                  : "mod" === t
                  ? { div: null, mod: new f(this.modn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new f(this.modn(e.words[0]))
                    }
                : this._wordDiv(e, t)
            )
            var n, a, o
          }),
          (f.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div
          }),
          (f.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod
          }),
          (f.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod
          }),
          (f.prototype.divRound = function (e) {
            var t = this.divmod(e)
            if (t.mod.isZero()) return t.div
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              i = e.ushrn(1),
              n = e.andln(1),
              f = r.cmp(i)
            return f < 0 || (1 === n && 0 === f)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1)
          }),
          (f.prototype.modn = function (e) {
            i(e <= 67108863)
            for (var t = (1 << 26) % e, r = 0, n = this.length - 1; n >= 0; n--)
              r = (t * r + (0 | this.words[n])) % e
            return r
          }),
          (f.prototype.idivn = function (e) {
            i(e <= 67108863)
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var n = (0 | this.words[r]) + 67108864 * t
              ;(this.words[r] = (n / e) | 0), (t = n % e)
            }
            return this.strip()
          }),
          (f.prototype.divn = function (e) {
            return this.clone().idivn(e)
          }),
          (f.prototype.egcd = function (e) {
            i(0 === e.negative), i(!e.isZero())
            var t = this,
              r = e.clone()
            t = 0 !== t.negative ? t.umod(e) : t.clone()
            for (
              var n = new f(1), a = new f(0), o = new f(0), d = new f(1), s = 0;
              t.isEven() && r.isEven();

            )
              t.iushrn(1), r.iushrn(1), ++s
            for (var c = r.clone(), h = t.clone(); !t.isZero(); ) {
              for (
                var u = 0, b = 1;
                0 === (t.words[0] & b) && u < 26;
                ++u, b <<= 1
              );
              if (u > 0)
                for (t.iushrn(u); u-- > 0; )
                  (n.isOdd() || a.isOdd()) && (n.iadd(c), a.isub(h)),
                    n.iushrn(1),
                    a.iushrn(1)
              for (
                var l = 0, p = 1;
                0 === (r.words[0] & p) && l < 26;
                ++l, p <<= 1
              );
              if (l > 0)
                for (r.iushrn(l); l-- > 0; )
                  (o.isOdd() || d.isOdd()) && (o.iadd(c), d.isub(h)),
                    o.iushrn(1),
                    d.iushrn(1)
              t.cmp(r) >= 0
                ? (t.isub(r), n.isub(o), a.isub(d))
                : (r.isub(t), o.isub(n), d.isub(a))
            }
            return { a: o, b: d, gcd: r.iushln(s) }
          }),
          (f.prototype._invmp = function (e) {
            i(0 === e.negative), i(!e.isZero())
            var t = this,
              r = e.clone()
            t = 0 !== t.negative ? t.umod(e) : t.clone()
            for (
              var n, a = new f(1), o = new f(0), d = r.clone();
              t.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var s = 0, c = 1;
                0 === (t.words[0] & c) && s < 26;
                ++s, c <<= 1
              );
              if (s > 0)
                for (t.iushrn(s); s-- > 0; ) a.isOdd() && a.iadd(d), a.iushrn(1)
              for (
                var h = 0, u = 1;
                0 === (r.words[0] & u) && h < 26;
                ++h, u <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; ) o.isOdd() && o.iadd(d), o.iushrn(1)
              t.cmp(r) >= 0 ? (t.isub(r), a.isub(o)) : (r.isub(t), o.isub(a))
            }
            return (n = 0 === t.cmpn(1) ? a : o).cmpn(0) < 0 && n.iadd(e), n
          }),
          (f.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs()
            if (e.isZero()) return this.abs()
            var t = this.clone(),
              r = e.clone()
            ;(t.negative = 0), (r.negative = 0)
            for (var i = 0; t.isEven() && r.isEven(); i++)
              t.iushrn(1), r.iushrn(1)
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1)
              for (; r.isEven(); ) r.iushrn(1)
              var n = t.cmp(r)
              if (n < 0) {
                var f = t
                ;(t = r), (r = f)
              } else if (0 === n || 0 === r.cmpn(1)) break
              t.isub(r)
            }
            return r.iushln(i)
          }),
          (f.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e)
          }),
          (f.prototype.isEven = function () {
            return 0 === (1 & this.words[0])
          }),
          (f.prototype.isOdd = function () {
            return 1 === (1 & this.words[0])
          }),
          (f.prototype.andln = function (e) {
            return this.words[0] & e
          }),
          (f.prototype.bincn = function (e) {
            i("number" === typeof e)
            var t = e % 26,
              r = (e - t) / 26,
              n = 1 << t
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this
            for (var f = n, a = r; 0 !== f && a < this.length; a++) {
              var o = 0 | this.words[a]
              ;(f = (o += f) >>> 26), (o &= 67108863), (this.words[a] = o)
            }
            return 0 !== f && ((this.words[a] = f), this.length++), this
          }),
          (f.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0]
          }),
          (f.prototype.cmpn = function (e) {
            var t,
              r = e < 0
            if (0 !== this.negative && !r) return -1
            if (0 === this.negative && r) return 1
            if ((this.strip(), this.length > 1)) t = 1
            else {
              r && (e = -e), i(e <= 67108863, "Number is too big")
              var n = 0 | this.words[0]
              t = n === e ? 0 : n < e ? -1 : 1
            }
            return 0 !== this.negative ? 0 | -t : t
          }),
          (f.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1
            if (0 === this.negative && 0 !== e.negative) return 1
            var t = this.ucmp(e)
            return 0 !== this.negative ? 0 | -t : t
          }),
          (f.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1
            if (this.length < e.length) return -1
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | e.words[r]
              if (i !== n) {
                i < n ? (t = -1) : i > n && (t = 1)
                break
              }
            }
            return t
          }),
          (f.prototype.gtn = function (e) {
            return 1 === this.cmpn(e)
          }),
          (f.prototype.gt = function (e) {
            return 1 === this.cmp(e)
          }),
          (f.prototype.gten = function (e) {
            return this.cmpn(e) >= 0
          }),
          (f.prototype.gte = function (e) {
            return this.cmp(e) >= 0
          }),
          (f.prototype.ltn = function (e) {
            return -1 === this.cmpn(e)
          }),
          (f.prototype.lt = function (e) {
            return -1 === this.cmp(e)
          }),
          (f.prototype.lten = function (e) {
            return this.cmpn(e) <= 0
          }),
          (f.prototype.lte = function (e) {
            return this.cmp(e) <= 0
          }),
          (f.prototype.eqn = function (e) {
            return 0 === this.cmpn(e)
          }),
          (f.prototype.eq = function (e) {
            return 0 === this.cmp(e)
          }),
          (f.red = function (e) {
            return new A(e)
          }),
          (f.prototype.toRed = function (e) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            )
          }),
          (f.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            )
          }),
          (f.prototype._forceRed = function (e) {
            return (this.red = e), this
          }),
          (f.prototype.forceRed = function (e) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            )
          }),
          (f.prototype.redAdd = function (e) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            )
          }),
          (f.prototype.redIAdd = function (e) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            )
          }),
          (f.prototype.redSub = function (e) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            )
          }),
          (f.prototype.redISub = function (e) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            )
          }),
          (f.prototype.redShl = function (e) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            )
          }),
          (f.prototype.redMul = function (e) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            )
          }),
          (f.prototype.redIMul = function (e) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            )
          }),
          (f.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            )
          }),
          (f.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            )
          }),
          (f.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            )
          }),
          (f.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            )
          }),
          (f.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            )
          }),
          (f.prototype.redPow = function (e) {
            return (
              i(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            )
          })
        var y = { k256: null, p224: null, p192: null, p25519: null }
        function v(e, t) {
          ;(this.name = e),
            (this.p = new f(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new f(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp())
        }
        function g() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          )
        }
        function w() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          )
        }
        function M() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          )
        }
        function _() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          )
        }
        function A(e) {
          if ("string" === typeof e) {
            var t = f._prime(e)
            ;(this.m = t.p), (this.prime = t)
          } else
            i(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null)
        }
        function S(e) {
          A.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new f(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv))
        }
        ;(v.prototype._tmp = function () {
          var e = new f(null)
          return (e.words = new Array(Math.ceil(this.n / 13))), e
        }),
          (v.prototype.ireduce = function (e) {
            var t,
              r = e
            do {
              this.split(r, this.tmp),
                (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength())
            } while (t > this.n)
            var i = t < this.n ? -1 : r.ucmp(this.p)
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            )
          }),
          (v.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t)
          }),
          (v.prototype.imulK = function (e) {
            return e.imul(this.k)
          }),
          n(g, v),
          (g.prototype.split = function (e, t) {
            for (var r = 4194303, i = Math.min(e.length, 9), n = 0; n < i; n++)
              t.words[n] = e.words[n]
            if (((t.length = i), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1)
            var f = e.words[9]
            for (t.words[t.length++] = f & r, n = 10; n < e.length; n++) {
              var a = 0 | e.words[n]
              ;(e.words[n - 10] = ((a & r) << 4) | (f >>> 22)), (f = a)
            }
            ;(f >>>= 22),
              (e.words[n - 10] = f),
              0 === f && e.length > 10 ? (e.length -= 10) : (e.length -= 9)
          }),
          (g.prototype.imulK = function (e) {
            ;(e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2)
            for (var t = 0, r = 0; r < e.length; r++) {
              var i = 0 | e.words[r]
              ;(t += 977 * i),
                (e.words[r] = 67108863 & t),
                (t = 64 * i + ((t / 67108864) | 0))
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            )
          }),
          n(w, v),
          n(M, v),
          n(_, v),
          (_.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var i = 19 * (0 | e.words[r]) + t,
                n = 67108863 & i
              ;(i >>>= 26), (e.words[r] = n), (t = i)
            }
            return 0 !== t && (e.words[e.length++] = t), e
          }),
          (f._prime = function (e) {
            if (y[e]) return y[e]
            var t
            if ("k256" === e) t = new g()
            else if ("p224" === e) t = new w()
            else if ("p192" === e) t = new M()
            else {
              if ("p25519" !== e) throw new Error("Unknown prime " + e)
              t = new _()
            }
            return (y[e] = t), t
          }),
          (A.prototype._verify1 = function (e) {
            i(0 === e.negative, "red works only with positives"),
              i(e.red, "red works only with red numbers")
          }),
          (A.prototype._verify2 = function (e, t) {
            i(0 === (e.negative | t.negative), "red works only with positives"),
              i(e.red && e.red === t.red, "red works only with red numbers")
          }),
          (A.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this)
          }),
          (A.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
          }),
          (A.prototype.add = function (e, t) {
            this._verify2(e, t)
            var r = e.add(t)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
          }),
          (A.prototype.iadd = function (e, t) {
            this._verify2(e, t)
            var r = e.iadd(t)
            return r.cmp(this.m) >= 0 && r.isub(this.m), r
          }),
          (A.prototype.sub = function (e, t) {
            this._verify2(e, t)
            var r = e.sub(t)
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
          }),
          (A.prototype.isub = function (e, t) {
            this._verify2(e, t)
            var r = e.isub(t)
            return r.cmpn(0) < 0 && r.iadd(this.m), r
          }),
          (A.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t))
          }),
          (A.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t))
          }),
          (A.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t))
          }),
          (A.prototype.isqr = function (e) {
            return this.imul(e, e.clone())
          }),
          (A.prototype.sqr = function (e) {
            return this.mul(e, e)
          }),
          (A.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone()
            var t = this.m.andln(3)
            if ((i(t % 2 === 1), 3 === t)) {
              var r = this.m.add(new f(1)).iushrn(2)
              return this.pow(e, r)
            }
            for (
              var n = this.m.subn(1), a = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              a++, n.iushrn(1)
            i(!n.isZero())
            var o = new f(1).toRed(this),
              d = o.redNeg(),
              s = this.m.subn(1).iushrn(1),
              c = this.m.bitLength()
            for (
              c = new f(2 * c * c).toRed(this);
              0 !== this.pow(c, s).cmp(d);

            )
              c.redIAdd(d)
            for (
              var h = this.pow(c, n),
                u = this.pow(e, n.addn(1).iushrn(1)),
                b = this.pow(e, n),
                l = a;
              0 !== b.cmp(o);

            ) {
              for (var p = b, m = 0; 0 !== p.cmp(o); m++) p = p.redSqr()
              i(m < l)
              var y = this.pow(h, new f(1).iushln(l - m - 1))
              ;(u = u.redMul(y)), (h = y.redSqr()), (b = b.redMul(h)), (l = m)
            }
            return u
          }),
          (A.prototype.invm = function (e) {
            var t = e._invmp(this.m)
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t)
          }),
          (A.prototype.pow = function (e, t) {
            if (t.isZero()) return new f(1).toRed(this)
            if (0 === t.cmpn(1)) return e.clone()
            var r = new Array(16)
            ;(r[0] = new f(1).toRed(this)), (r[1] = e)
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e)
            var n = r[0],
              a = 0,
              o = 0,
              d = t.bitLength() % 26
            for (0 === d && (d = 26), i = t.length - 1; i >= 0; i--) {
              for (var s = t.words[i], c = d - 1; c >= 0; c--) {
                var h = (s >> c) & 1
                n !== r[0] && (n = this.sqr(n)),
                  0 !== h || 0 !== a
                    ? ((a <<= 1),
                      (a |= h),
                      (4 === ++o || (0 === i && 0 === c)) &&
                        ((n = this.mul(n, r[a])), (o = 0), (a = 0)))
                    : (o = 0)
              }
              d = 26
            }
            return n
          }),
          (A.prototype.convertTo = function (e) {
            var t = e.umod(this.m)
            return t === e ? t.clone() : t
          }),
          (A.prototype.convertFrom = function (e) {
            var t = e.clone()
            return (t.red = null), t
          }),
          (f.mont = function (e) {
            return new S(e)
          }),
          n(S, A),
          (S.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift))
          }),
          (S.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv))
            return (t.red = null), t
          }),
          (S.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e
            var r = e.imul(t),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              f = n
            return (
              n.cmp(this.m) >= 0
                ? (f = n.isub(this.m))
                : n.cmpn(0) < 0 && (f = n.iadd(this.m)),
              f._forceRed(this)
            )
          }),
          (S.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new f(0)._forceRed(this)
            var r = e.mul(t),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              a = n
            return (
              n.cmp(this.m) >= 0
                ? (a = n.isub(this.m))
                : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
              a._forceRed(this)
            )
          }),
          (S.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
          })
      })((e = r.nmd(e)), this)
    },
    29931: function (e, t, r) {
      var i
      function n(e) {
        this.rand = e
      }
      if (
        ((e.exports = function (e) {
          return i || (i = new n(null)), i.generate(e)
        }),
        (e.exports.Rand = n),
        (n.prototype.generate = function (e) {
          return this._rand(e)
        }),
        (n.prototype._rand = function (e) {
          if (this.rand.getBytes) return this.rand.getBytes(e)
          for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte()
          return t
        }),
        "object" === typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (n.prototype._rand = function (e) {
              var t = new Uint8Array(e)
              return self.crypto.getRandomValues(t), t
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (n.prototype._rand = function (e) {
              var t = new Uint8Array(e)
              return self.msCrypto.getRandomValues(t), t
            })
          : "object" === typeof window &&
            (n.prototype._rand = function () {
              throw new Error("Not implemented yet")
            })
      else
        try {
          var f = r(89214)
          if ("function" !== typeof f.randomBytes)
            throw new Error("Not supported")
          n.prototype._rand = function (e) {
            return f.randomBytes(e)
          }
        } catch (a) {}
    },
    86266: function (e, t, r) {
      "use strict"
      var i = t
      ;(i.version = r(18597).i8),
        (i.utils = r(80953)),
        (i.rand = r(29931)),
        (i.curve = r(88254)),
        (i.curves = r(45427)),
        (i.ec = r(57954)),
        (i.eddsa = r(65980))
    },
    4918: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(80953),
        f = n.getNAF,
        a = n.getJSF,
        o = n.assert
      function d(e, t) {
        ;(this.type = e),
          (this.p = new i(t.p, 16)),
          (this.red = t.prime ? i.red(t.prime) : i.mont(this.p)),
          (this.zero = new i(0).toRed(this.red)),
          (this.one = new i(1).toRed(this.red)),
          (this.two = new i(2).toRed(this.red)),
          (this.n = t.n && new i(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0)
        var r = this.n && this.p.div(this.n)
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)))
      }
      function s(e, t) {
        ;(this.curve = e), (this.type = t), (this.precomputed = null)
      }
      ;(e.exports = d),
        (d.prototype.point = function () {
          throw new Error("Not implemented")
        }),
        (d.prototype.validate = function () {
          throw new Error("Not implemented")
        }),
        (d.prototype._fixedNafMul = function (e, t) {
          o(e.precomputed)
          var r = e._getDoubles(),
            i = f(t, 1, this._bitLength),
            n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1)
          n /= 3
          var a,
            d,
            s = []
          for (a = 0; a < i.length; a += r.step) {
            d = 0
            for (var c = a + r.step - 1; c >= a; c--) d = (d << 1) + i[c]
            s.push(d)
          }
          for (
            var h = this.jpoint(null, null, null),
              u = this.jpoint(null, null, null),
              b = n;
            b > 0;
            b--
          ) {
            for (a = 0; a < s.length; a++)
              (d = s[a]) === b
                ? (u = u.mixedAdd(r.points[a]))
                : d === -b && (u = u.mixedAdd(r.points[a].neg()))
            h = h.add(u)
          }
          return h.toP()
        }),
        (d.prototype._wnafMul = function (e, t) {
          var r = 4,
            i = e._getNAFPoints(r)
          r = i.wnd
          for (
            var n = i.points,
              a = f(t, r, this._bitLength),
              d = this.jpoint(null, null, null),
              s = a.length - 1;
            s >= 0;
            s--
          ) {
            for (var c = 0; s >= 0 && 0 === a[s]; s--) c++
            if ((s >= 0 && c++, (d = d.dblp(c)), s < 0)) break
            var h = a[s]
            o(0 !== h),
              (d =
                "affine" === e.type
                  ? h > 0
                    ? d.mixedAdd(n[(h - 1) >> 1])
                    : d.mixedAdd(n[(-h - 1) >> 1].neg())
                  : h > 0
                  ? d.add(n[(h - 1) >> 1])
                  : d.add(n[(-h - 1) >> 1].neg()))
          }
          return "affine" === e.type ? d.toP() : d
        }),
        (d.prototype._wnafMulAdd = function (e, t, r, i, n) {
          var o,
            d,
            s,
            c = this._wnafT1,
            h = this._wnafT2,
            u = this._wnafT3,
            b = 0
          for (o = 0; o < i; o++) {
            var l = (s = t[o])._getNAFPoints(e)
            ;(c[o] = l.wnd), (h[o] = l.points)
          }
          for (o = i - 1; o >= 1; o -= 2) {
            var p = o - 1,
              m = o
            if (1 === c[p] && 1 === c[m]) {
              var y = [t[p], null, null, t[m]]
              0 === t[p].y.cmp(t[m].y)
                ? ((y[1] = t[p].add(t[m])),
                  (y[2] = t[p].toJ().mixedAdd(t[m].neg())))
                : 0 === t[p].y.cmp(t[m].y.redNeg())
                ? ((y[1] = t[p].toJ().mixedAdd(t[m])),
                  (y[2] = t[p].add(t[m].neg())))
                : ((y[1] = t[p].toJ().mixedAdd(t[m])),
                  (y[2] = t[p].toJ().mixedAdd(t[m].neg())))
              var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                g = a(r[p], r[m])
              for (
                b = Math.max(g[0].length, b),
                  u[p] = new Array(b),
                  u[m] = new Array(b),
                  d = 0;
                d < b;
                d++
              ) {
                var w = 0 | g[0][d],
                  M = 0 | g[1][d]
                ;(u[p][d] = v[3 * (w + 1) + (M + 1)]), (u[m][d] = 0), (h[p] = y)
              }
            } else
              (u[p] = f(r[p], c[p], this._bitLength)),
                (u[m] = f(r[m], c[m], this._bitLength)),
                (b = Math.max(u[p].length, b)),
                (b = Math.max(u[m].length, b))
          }
          var _ = this.jpoint(null, null, null),
            A = this._wnafT4
          for (o = b; o >= 0; o--) {
            for (var S = 0; o >= 0; ) {
              var x = !0
              for (d = 0; d < i; d++)
                (A[d] = 0 | u[d][o]), 0 !== A[d] && (x = !1)
              if (!x) break
              S++, o--
            }
            if ((o >= 0 && S++, (_ = _.dblp(S)), o < 0)) break
            for (d = 0; d < i; d++) {
              var I = A[d]
              0 !== I &&
                (I > 0
                  ? (s = h[d][(I - 1) >> 1])
                  : I < 0 && (s = h[d][(-I - 1) >> 1].neg()),
                (_ = "affine" === s.type ? _.mixedAdd(s) : _.add(s)))
            }
          }
          for (o = 0; o < i; o++) h[o] = null
          return n ? _ : _.toP()
        }),
        (d.BasePoint = s),
        (s.prototype.eq = function () {
          throw new Error("Not implemented")
        }),
        (s.prototype.validate = function () {
          return this.curve.validate(this)
        }),
        (d.prototype.decodePoint = function (e, t) {
          e = n.toArray(e, t)
          var r = this.p.byteLength()
          if (
            (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
            e.length - 1 === 2 * r
          )
            return (
              6 === e[0]
                ? o(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && o(e[e.length - 1] % 2 === 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            )
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0])
          throw new Error("Unknown point format")
        }),
        (s.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0)
        }),
        (s.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t)
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", t))
        }),
        (s.prototype.encode = function (e, t) {
          return n.encode(this._encode(t), e)
        }),
        (s.prototype.precompute = function (e) {
          if (this.precomputed) return this
          var t = { doubles: null, naf: null, beta: null }
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          )
        }),
        (s.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1
          var t = this.precomputed.doubles
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          )
        }),
        (s.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles
          for (var r = [this], i = this, n = 0; n < t; n += e) {
            for (var f = 0; f < e; f++) i = i.dbl()
            r.push(i)
          }
          return { step: e, points: r }
        }),
        (s.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf
          for (
            var t = [this],
              r = (1 << e) - 1,
              i = 1 === r ? null : this.dbl(),
              n = 1;
            n < r;
            n++
          )
            t[n] = t[n - 1].add(i)
          return { wnd: e, points: t }
        }),
        (s.prototype._getBeta = function () {
          return null
        }),
        (s.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl()
          return t
        })
    },
    31138: function (e, t, r) {
      "use strict"
      var i = r(80953),
        n = r(13550),
        f = r(35717),
        a = r(4918),
        o = i.assert
      function d(e) {
        ;(this.twisted = 1 !== (0 | e.a)),
          (this.mOneA = this.twisted && -1 === (0 | e.a)),
          (this.extended = this.mOneA),
          a.call(this, "edwards", e),
          (this.a = new n(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new n(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new n(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          o(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 === (0 | e.c))
      }
      function s(e, t, r, i, f) {
        a.BasePoint.call(this, e, "projective"),
          null === t && null === r && null === i
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new n(t, 16)),
              (this.y = new n(r, 16)),
              (this.z = i ? new n(i, 16) : this.curve.one),
              (this.t = f && new n(f, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
      }
      f(d, a),
        (e.exports = d),
        (d.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }),
        (d.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e)
        }),
        (d.prototype.jpoint = function (e, t, r, i) {
          return this.point(e, t, r, i)
        }),
        (d.prototype.pointFromX = function (e, t) {
          ;(e = new n(e, 16)).red || (e = e.toRed(this.red))
          var r = e.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            f = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = i.redMul(f.redInvm()),
            o = a.redSqrt()
          if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point")
          var d = o.fromRed().isOdd()
          return ((t && !d) || (!t && d)) && (o = o.redNeg()), this.point(e, o)
        }),
        (d.prototype.pointFromY = function (e, t) {
          ;(e = new n(e, 16)).red || (e = e.toRed(this.red))
          var r = e.redSqr(),
            i = r.redSub(this.c2),
            f = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = i.redMul(f.redInvm())
          if (0 === a.cmp(this.zero)) {
            if (t) throw new Error("invalid point")
            return this.point(this.zero, e)
          }
          var o = a.redSqrt()
          if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point")
          return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e)
        }),
        (d.prototype.validate = function (e) {
          if (e.isInfinity()) return !0
          e.normalize()
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            i = t.redMul(this.a).redAdd(r),
            n = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)))
          return 0 === i.cmp(n)
        }),
        f(s, a.BasePoint),
        (d.prototype.pointFromJSON = function (e) {
          return s.fromJSON(this, e)
        }),
        (d.prototype.point = function (e, t, r, i) {
          return new s(this, e, t, r, i)
        }),
        (s.fromJSON = function (e, t) {
          return new s(e, t[0], t[1], t[2])
        }),
        (s.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">"
        }),
        (s.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          )
        }),
        (s.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr()
          r = r.redIAdd(r)
          var i = this.curve._mulA(e),
            n = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            f = i.redAdd(t),
            a = f.redSub(r),
            o = i.redSub(t),
            d = n.redMul(a),
            s = f.redMul(o),
            c = n.redMul(o),
            h = a.redMul(f)
          return this.curve.point(d, s, h, c)
        }),
        (s.prototype._projDbl = function () {
          var e,
            t,
            r,
            i,
            n,
            f,
            a = this.x.redAdd(this.y).redSqr(),
            o = this.x.redSqr(),
            d = this.y.redSqr()
          if (this.curve.twisted) {
            var s = (i = this.curve._mulA(o)).redAdd(d)
            this.zOne
              ? ((e = a.redSub(o).redSub(d).redMul(s.redSub(this.curve.two))),
                (t = s.redMul(i.redSub(d))),
                (r = s.redSqr().redSub(s).redSub(s)))
              : ((n = this.z.redSqr()),
                (f = s.redSub(n).redISub(n)),
                (e = a.redSub(o).redISub(d).redMul(f)),
                (t = s.redMul(i.redSub(d))),
                (r = s.redMul(f)))
          } else
            (i = o.redAdd(d)),
              (n = this.curve._mulC(this.z).redSqr()),
              (f = i.redSub(n).redSub(n)),
              (e = this.curve._mulC(a.redISub(i)).redMul(f)),
              (t = this.curve._mulC(i).redMul(o.redISub(d))),
              (r = i.redMul(f))
          return this.curve.point(e, t, r)
        }),
        (s.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl()
        }),
        (s.prototype._extAdd = function (e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            i = this.t.redMul(this.curve.dd).redMul(e.t),
            n = this.z.redMul(e.z.redAdd(e.z)),
            f = r.redSub(t),
            a = n.redSub(i),
            o = n.redAdd(i),
            d = r.redAdd(t),
            s = f.redMul(a),
            c = o.redMul(d),
            h = f.redMul(d),
            u = a.redMul(o)
          return this.curve.point(s, c, u, h)
        }),
        (s.prototype._projAdd = function (e) {
          var t,
            r,
            i = this.z.redMul(e.z),
            n = i.redSqr(),
            f = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            o = this.curve.d.redMul(f).redMul(a),
            d = n.redSub(o),
            s = n.redAdd(o),
            c = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(f)
              .redISub(a),
            h = i.redMul(d).redMul(c)
          return (
            this.curve.twisted
              ? ((t = i.redMul(s).redMul(a.redSub(this.curve._mulA(f)))),
                (r = d.redMul(s)))
              : ((t = i.redMul(s).redMul(a.redSub(f))),
                (r = this.curve._mulC(d).redMul(s))),
            this.curve.point(h, t, r)
          )
        }),
        (s.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e)
        }),
        (s.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e)
        }),
        (s.prototype.mulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
        }),
        (s.prototype.jmulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
        }),
        (s.prototype.normalize = function () {
          if (this.zOne) return this
          var e = this.z.redInvm()
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          )
        }),
        (s.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          )
        }),
        (s.prototype.getX = function () {
          return this.normalize(), this.x.fromRed()
        }),
        (s.prototype.getY = function () {
          return this.normalize(), this.y.fromRed()
        }),
        (s.prototype.eq = function (e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          )
        }),
        (s.prototype.eqXToP = function (e) {
          var t = e.toRed(this.curve.red).redMul(this.z)
          if (0 === this.x.cmp(t)) return !0
          for (var r = e.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1
            if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0
          }
        }),
        (s.prototype.toP = s.prototype.normalize),
        (s.prototype.mixedAdd = s.prototype.add)
    },
    88254: function (e, t, r) {
      "use strict"
      var i = t
      ;(i.base = r(4918)),
        (i.short = r(6673)),
        (i.mont = r(22881)),
        (i.edwards = r(31138))
    },
    22881: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(35717),
        f = r(4918),
        a = r(80953)
      function o(e) {
        f.call(this, "mont", e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.i4 = new i(4).toRed(this.red).redInvm()),
          (this.two = new i(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)))
      }
      function d(e, t, r) {
        f.BasePoint.call(this, e, "projective"),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new i(t, 16)),
              (this.z = new i(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)))
      }
      n(o, f),
        (e.exports = o),
        (o.prototype.validate = function (e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            i = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t)
          return 0 === i.redSqrt().redSqr().cmp(i)
        }),
        n(d, f.BasePoint),
        (o.prototype.decodePoint = function (e, t) {
          return this.point(a.toArray(e, t), 1)
        }),
        (o.prototype.point = function (e, t) {
          return new d(this, e, t)
        }),
        (o.prototype.pointFromJSON = function (e) {
          return d.fromJSON(this, e)
        }),
        (d.prototype.precompute = function () {}),
        (d.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength())
        }),
        (d.fromJSON = function (e, t) {
          return new d(e, t[0], t[1] || e.one)
        }),
        (d.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">"
        }),
        (d.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0)
        }),
        (d.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            i = e.redMul(t),
            n = r.redMul(t.redAdd(this.curve.a24.redMul(r)))
          return this.curve.point(i, n)
        }),
        (d.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve")
        }),
        (d.prototype.diffAdd = function (e, t) {
          var r = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            n = e.x.redAdd(e.z),
            f = e.x.redSub(e.z).redMul(r),
            a = n.redMul(i),
            o = t.z.redMul(f.redAdd(a).redSqr()),
            d = t.x.redMul(f.redISub(a).redSqr())
          return this.curve.point(o, d)
        }),
        (d.prototype.mul = function (e) {
          for (
            var t = e.clone(),
              r = this,
              i = this.curve.point(null, null),
              n = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            n.push(t.andln(1))
          for (var f = n.length - 1; f >= 0; f--)
            0 === n[f]
              ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
              : ((i = r.diffAdd(i, this)), (r = r.dbl()))
          return i
        }),
        (d.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve")
        }),
        (d.prototype.jumlAdd = function () {
          throw new Error("Not supported on Montgomery curve")
        }),
        (d.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX())
        }),
        (d.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          )
        }),
        (d.prototype.getX = function () {
          return this.normalize(), this.x.fromRed()
        })
    },
    6673: function (e, t, r) {
      "use strict"
      var i = r(80953),
        n = r(13550),
        f = r(35717),
        a = r(4918),
        o = i.assert
      function d(e) {
        a.call(this, "short", e),
          (this.a = new n(e.a, 16).toRed(this.red)),
          (this.b = new n(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4))
      }
      function s(e, t, r, i) {
        a.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new n(t, 16)),
              (this.y = new n(r, 16)),
              i &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1))
      }
      function c(e, t, r, i) {
        a.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === i
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new n(0)))
            : ((this.x = new n(t, 16)),
              (this.y = new n(r, 16)),
              (this.z = new n(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one)
      }
      f(d, a),
        (e.exports = d),
        (d.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r
            if (e.beta) t = new n(e.beta, 16).toRed(this.red)
            else {
              var i = this._getEndoRoots(this.p)
              t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red)
            }
            if (e.lambda) r = new n(e.lambda, 16)
            else {
              var f = this._getEndoRoots(this.n)
              0 === this.g.mul(f[0]).x.cmp(this.g.x.redMul(t))
                ? (r = f[0])
                : ((r = f[1]), o(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
            }
            return {
              beta: t,
              lambda: r,
              basis: e.basis
                ? e.basis.map(function (e) {
                    return { a: new n(e.a, 16), b: new n(e.b, 16) }
                  })
                : this._getEndoBasis(r)
            }
          }
        }),
        (d.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : n.mont(e),
            r = new n(2).toRed(t).redInvm(),
            i = r.redNeg(),
            f = new n(3).toRed(t).redNeg().redSqrt().redMul(r)
          return [i.redAdd(f).fromRed(), i.redSub(f).fromRed()]
        }),
        (d.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              i,
              f,
              a,
              o,
              d,
              s,
              c,
              h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              u = e,
              b = this.n.clone(),
              l = new n(1),
              p = new n(0),
              m = new n(0),
              y = new n(1),
              v = 0;
            0 !== u.cmpn(0);

          ) {
            var g = b.div(u)
            ;(s = b.sub(g.mul(u))), (c = m.sub(g.mul(l)))
            var w = y.sub(g.mul(p))
            if (!i && s.cmp(h) < 0)
              (t = d.neg()), (r = l), (i = s.neg()), (f = c)
            else if (i && 2 === ++v) break
            ;(d = s), (b = u), (u = s), (m = l), (l = c), (y = p), (p = w)
          }
          ;(a = s.neg()), (o = c)
          var M = i.sqr().add(f.sqr())
          return (
            a.sqr().add(o.sqr()).cmp(M) >= 0 && ((a = t), (o = r)),
            i.negative && ((i = i.neg()), (f = f.neg())),
            a.negative && ((a = a.neg()), (o = o.neg())),
            [
              { a: i, b: f },
              { a: a, b: o }
            ]
          )
        }),
        (d.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            i = t[1],
            n = i.b.mul(e).divRound(this.n),
            f = r.b.neg().mul(e).divRound(this.n),
            a = n.mul(r.a),
            o = f.mul(i.a),
            d = n.mul(r.b),
            s = f.mul(i.b)
          return { k1: e.sub(a).sub(o), k2: d.add(s).neg() }
        }),
        (d.prototype.pointFromX = function (e, t) {
          ;(e = new n(e, 16)).red || (e = e.toRed(this.red))
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            i = r.redSqrt()
          if (0 !== i.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point")
          var f = i.fromRed().isOdd()
          return ((t && !f) || (!t && f)) && (i = i.redNeg()), this.point(e, i)
        }),
        (d.prototype.validate = function (e) {
          if (e.inf) return !0
          var t = e.x,
            r = e.y,
            i = this.a.redMul(t),
            n = t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b)
          return 0 === r.redSqr().redISub(n).cmpn(0)
        }),
        (d.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var i = this._endoWnafT1, n = this._endoWnafT2, f = 0;
            f < e.length;
            f++
          ) {
            var a = this._endoSplit(t[f]),
              o = e[f],
              d = o._getBeta()
            a.k1.negative && (a.k1.ineg(), (o = o.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (d = d.neg(!0))),
              (i[2 * f] = o),
              (i[2 * f + 1] = d),
              (n[2 * f] = a.k1),
              (n[2 * f + 1] = a.k2)
          }
          for (
            var s = this._wnafMulAdd(1, i, n, 2 * f, r), c = 0;
            c < 2 * f;
            c++
          )
            (i[c] = null), (n[c] = null)
          return s
        }),
        f(s, a.BasePoint),
        (d.prototype.point = function (e, t, r) {
          return new s(this, e, t, r)
        }),
        (d.prototype.pointFromJSON = function (e, t) {
          return s.fromJSON(this, e, t)
        }),
        (s.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed
            if (e && e.beta) return e.beta
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            )
            if (e) {
              var r = this.curve,
                i = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y)
                }
              ;(e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(i)
                  }
                })
            }
            return t
          }
        }),
        (s.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                  }
                }
              ]
            : [this.x, this.y]
        }),
        (s.fromJSON = function (e, t, r) {
          "string" === typeof t && (t = JSON.parse(t))
          var i = e.point(t[0], t[1], r)
          if (!t[2]) return i
          function n(t) {
            return e.point(t[0], t[1], r)
          }
          var f = t[2]
          return (
            (i.precomputed = {
              beta: null,
              doubles: f.doubles && {
                step: f.doubles.step,
                points: [i].concat(f.doubles.points.map(n))
              },
              naf: f.naf && {
                wnd: f.naf.wnd,
                points: [i].concat(f.naf.points.map(n))
              }
            }),
            i
          )
        }),
        (s.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">"
        }),
        (s.prototype.isInfinity = function () {
          return this.inf
        }),
        (s.prototype.add = function (e) {
          if (this.inf) return e
          if (e.inf) return this
          if (this.eq(e)) return this.dbl()
          if (this.neg().eq(e)) return this.curve.point(null, null)
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null)
          var t = this.y.redSub(e.y)
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()))
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            i = t.redMul(this.x.redSub(r)).redISub(this.y)
          return this.curve.point(r, i)
        }),
        (s.prototype.dbl = function () {
          if (this.inf) return this
          var e = this.y.redAdd(this.y)
          if (0 === e.cmpn(0)) return this.curve.point(null, null)
          var t = this.curve.a,
            r = this.x.redSqr(),
            i = e.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),
            f = n.redSqr().redISub(this.x.redAdd(this.x)),
            a = n.redMul(this.x.redSub(f)).redISub(this.y)
          return this.curve.point(f, a)
        }),
        (s.prototype.getX = function () {
          return this.x.fromRed()
        }),
        (s.prototype.getY = function () {
          return this.y.fromRed()
        }),
        (s.prototype.mul = function (e) {
          return (
            (e = new n(e, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [e])
              : this.curve._wnafMul(this, e)
          )
        }),
        (s.prototype.mulAdd = function (e, t, r) {
          var i = [this, t],
            n = [e, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2)
        }),
        (s.prototype.jmulAdd = function (e, t, r) {
          var i = [this, t],
            n = [e, r]
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0)
        }),
        (s.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          )
        }),
        (s.prototype.neg = function (e) {
          if (this.inf) return this
          var t = this.curve.point(this.x, this.y.redNeg())
          if (e && this.precomputed) {
            var r = this.precomputed,
              i = function (e) {
                return e.neg()
              }
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i)
              }
            }
          }
          return t
        }),
        (s.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one)
        }),
        f(c, a.BasePoint),
        (d.prototype.jpoint = function (e, t, r) {
          return new c(this, e, t, r)
        }),
        (c.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null)
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            i = this.y.redMul(t).redMul(e)
          return this.curve.point(r, i)
        }),
        (c.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }),
        (c.prototype.add = function (e) {
          if (this.isInfinity()) return e
          if (e.isInfinity()) return this
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(t),
            n = e.x.redMul(r),
            f = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(r.redMul(this.z)),
            o = i.redSub(n),
            d = f.redSub(a)
          if (0 === o.cmpn(0))
            return 0 !== d.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var s = o.redSqr(),
            c = s.redMul(o),
            h = i.redMul(s),
            u = d.redSqr().redIAdd(c).redISub(h).redISub(h),
            b = d.redMul(h.redISub(u)).redISub(f.redMul(c)),
            l = this.z.redMul(e.z).redMul(o)
          return this.curve.jpoint(u, b, l)
        }),
        (c.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ()
          if (e.isInfinity()) return this
          var t = this.z.redSqr(),
            r = this.x,
            i = e.x.redMul(t),
            n = this.y,
            f = e.y.redMul(t).redMul(this.z),
            a = r.redSub(i),
            o = n.redSub(f)
          if (0 === a.cmpn(0))
            return 0 !== o.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl()
          var d = a.redSqr(),
            s = d.redMul(a),
            c = r.redMul(d),
            h = o.redSqr().redIAdd(s).redISub(c).redISub(c),
            u = o.redMul(c.redISub(h)).redISub(n.redMul(s)),
            b = this.z.redMul(a)
          return this.curve.jpoint(h, u, b)
        }),
        (c.prototype.dblp = function (e) {
          if (0 === e) return this
          if (this.isInfinity()) return this
          if (!e) return this.dbl()
          var t
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this
            for (t = 0; t < e; t++) r = r.dbl()
            return r
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            f = this.x,
            a = this.y,
            o = this.z,
            d = o.redSqr().redSqr(),
            s = a.redAdd(a)
          for (t = 0; t < e; t++) {
            var c = f.redSqr(),
              h = s.redSqr(),
              u = h.redSqr(),
              b = c.redAdd(c).redIAdd(c).redIAdd(i.redMul(d)),
              l = f.redMul(h),
              p = b.redSqr().redISub(l.redAdd(l)),
              m = l.redISub(p),
              y = b.redMul(m)
            y = y.redIAdd(y).redISub(u)
            var v = s.redMul(o)
            t + 1 < e && (d = d.redMul(u)), (f = p), (o = v), (s = y)
          }
          return this.curve.jpoint(f, s.redMul(n), o)
        }),
        (c.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl()
        }),
        (c.prototype._zeroDbl = function () {
          var e, t, r
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              f = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(i).redISub(f)
            a = a.redIAdd(a)
            var o = i.redAdd(i).redIAdd(i),
              d = o.redSqr().redISub(a).redISub(a),
              s = f.redIAdd(f)
            ;(s = (s = s.redIAdd(s)).redIAdd(s)),
              (e = d),
              (t = o.redMul(a.redISub(d)).redISub(s)),
              (r = this.y.redAdd(this.y))
          } else {
            var c = this.x.redSqr(),
              h = this.y.redSqr(),
              u = h.redSqr(),
              b = this.x.redAdd(h).redSqr().redISub(c).redISub(u)
            b = b.redIAdd(b)
            var l = c.redAdd(c).redIAdd(c),
              p = l.redSqr(),
              m = u.redIAdd(u)
            ;(m = (m = m.redIAdd(m)).redIAdd(m)),
              (e = p.redISub(b).redISub(b)),
              (t = l.redMul(b.redISub(e)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r))
          }
          return this.curve.jpoint(e, t, r)
        }),
        (c.prototype._threeDbl = function () {
          var e, t, r
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              f = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(i).redISub(f)
            a = a.redIAdd(a)
            var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
              d = o.redSqr().redISub(a).redISub(a)
            e = d
            var s = f.redIAdd(f)
            ;(s = (s = s.redIAdd(s)).redIAdd(s)),
              (t = o.redMul(a.redISub(d)).redISub(s)),
              (r = this.y.redAdd(this.y))
          } else {
            var c = this.z.redSqr(),
              h = this.y.redSqr(),
              u = this.x.redMul(h),
              b = this.x.redSub(c).redMul(this.x.redAdd(c))
            b = b.redAdd(b).redIAdd(b)
            var l = u.redIAdd(u),
              p = (l = l.redIAdd(l)).redAdd(l)
            ;(e = b.redSqr().redISub(p)),
              (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c))
            var m = h.redSqr()
            ;(m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (t = b.redMul(l.redISub(e)).redISub(m))
          }
          return this.curve.jpoint(e, t, r)
        }),
        (c.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            f = t.redSqr(),
            a = r.redSqr(),
            o = f.redAdd(f).redIAdd(f).redIAdd(e.redMul(n)),
            d = t.redAdd(t),
            s = (d = d.redIAdd(d)).redMul(a),
            c = o.redSqr().redISub(s.redAdd(s)),
            h = s.redISub(c),
            u = a.redSqr()
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u)
          var b = o.redMul(h).redISub(u),
            l = r.redAdd(r).redMul(i)
          return this.curve.jpoint(c, b, l)
        }),
        (c.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this)
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            i = t.redSqr(),
            n = e.redAdd(e).redIAdd(e),
            f = n.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(i),
            o = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              f
            )).redSqr(),
            d = i.redIAdd(i)
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d)
          var s = n.redIAdd(a).redSqr().redISub(f).redISub(o).redISub(d),
            c = t.redMul(s)
          c = (c = c.redIAdd(c)).redIAdd(c)
          var h = this.x.redMul(o).redISub(c)
          h = (h = h.redIAdd(h)).redIAdd(h)
          var u = this.y.redMul(s.redMul(d.redISub(s)).redISub(a.redMul(o)))
          u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u)
          var b = this.z.redAdd(a).redSqr().redISub(r).redISub(o)
          return this.curve.jpoint(h, u, b)
        }),
        (c.prototype.mul = function (e, t) {
          return (e = new n(e, t)), this.curve._wnafMul(this, e)
        }),
        (c.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ())
          if (this === e) return !0
          var t = this.z.redSqr(),
            r = e.z.redSqr()
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1
          var i = t.redMul(this.z),
            n = r.redMul(e.z)
          return 0 === this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)
        }),
        (c.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t)
          if (0 === this.x.cmp(r)) return !0
          for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1
            if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0
          }
        }),
        (c.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">"
        }),
        (c.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0)
        })
    },
    45427: function (e, t, r) {
      "use strict"
      var i,
        n = t,
        f = r(33715),
        a = r(88254),
        o = r(80953).assert
      function d(e) {
        "short" === e.type
          ? (this.curve = new a.short(e))
          : "edwards" === e.type
          ? (this.curve = new a.edwards(e))
          : (this.curve = new a.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          o(this.g.validate(), "Invalid curve"),
          o(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
      }
      function s(e, t) {
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new d(t)
            return (
              Object.defineProperty(n, e, {
                configurable: !0,
                enumerable: !0,
                value: r
              }),
              r
            )
          }
        })
      }
      ;(n.PresetCurve = d),
        s("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: f.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
          ]
        }),
        s("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: f.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
          ]
        }),
        s("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: f.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
          ]
        }),
        s("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: f.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
          ]
        }),
        s("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: f.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
          ]
        }),
        s("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: f.sha256,
          gRed: !1,
          g: ["9"]
        }),
        s("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: f.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658"
          ]
        })
      try {
        i = r(91037)
      } catch (c) {
        i = void 0
      }
      s("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: f.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3"
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15"
          }
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          i
        ]
      })
    },
    57954: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(2156),
        f = r(80953),
        a = r(45427),
        o = r(29931),
        d = f.assert,
        s = r(31251),
        c = r(90611)
      function h(e) {
        if (!(this instanceof h)) return new h(e)
        "string" === typeof e &&
          (d(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e),
          (e = a[e])),
          e instanceof a.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash)
      }
      ;(e.exports = h),
        (h.prototype.keyPair = function (e) {
          return new s(this, e)
        }),
        (h.prototype.keyFromPrivate = function (e, t) {
          return s.fromPrivate(this, e, t)
        }),
        (h.prototype.keyFromPublic = function (e, t) {
          return s.fromPublic(this, e, t)
        }),
        (h.prototype.genKeyPair = function (e) {
          e || (e = {})
          for (
            var t = new n({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || o(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray()
              }),
              r = this.n.byteLength(),
              f = this.n.sub(new i(2));
            ;

          ) {
            var a = new i(t.generate(r))
            if (!(a.cmp(f) > 0)) return a.iaddn(1), this.keyFromPrivate(a)
          }
        }),
        (h.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength()
          return (
            r > 0 && (e = e.ushrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          )
        }),
        (h.prototype.sign = function (e, t, r, f) {
          "object" === typeof r && ((f = r), (r = null)),
            f || (f = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new i(e, 16)))
          for (
            var a = this.n.byteLength(),
              o = t.getPrivate().toArray("be", a),
              d = e.toArray("be", a),
              s = new n({
                hash: this.hash,
                entropy: o,
                nonce: d,
                pers: f.pers,
                persEnc: f.persEnc || "utf8"
              }),
              h = this.n.sub(new i(1)),
              u = 0;
            ;
            u++
          ) {
            var b = f.k ? f.k(u) : new i(s.generate(this.n.byteLength()))
            if (
              !((b = this._truncateToN(b, !0)).cmpn(1) <= 0 || b.cmp(h) >= 0)
            ) {
              var l = this.g.mul(b)
              if (!l.isInfinity()) {
                var p = l.getX(),
                  m = p.umod(this.n)
                if (0 !== m.cmpn(0)) {
                  var y = b.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e))
                  if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                    var v =
                      (l.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0)
                    return (
                      f.canonical &&
                        y.cmp(this.nh) > 0 &&
                        ((y = this.n.sub(y)), (v ^= 1)),
                      new c({ r: m, s: y, recoveryParam: v })
                    )
                  }
                }
              }
            }
          }
        }),
        (h.prototype.verify = function (e, t, r, n) {
          ;(e = this._truncateToN(new i(e, 16))), (r = this.keyFromPublic(r, n))
          var f = (t = new c(t, "hex")).r,
            a = t.s
          if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1
          var o,
            d = a.invm(this.n),
            s = d.mul(e).umod(this.n),
            h = d.mul(f).umod(this.n)
          return this.curve._maxwellTrick
            ? !(o = this.g.jmulAdd(s, r.getPublic(), h)).isInfinity() &&
                o.eqXToP(f)
            : !(o = this.g.mulAdd(s, r.getPublic(), h)).isInfinity() &&
                0 === o.getX().umod(this.n).cmp(f)
        }),
        (h.prototype.recoverPubKey = function (e, t, r, n) {
          d((3 & r) === r, "The recovery param is more than two bits"),
            (t = new c(t, n))
          var f = this.n,
            a = new i(e),
            o = t.r,
            s = t.s,
            h = 1 & r,
            u = r >> 1
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
            throw new Error("Unable to find sencond key candinate")
          o = u
            ? this.curve.pointFromX(o.add(this.curve.n), h)
            : this.curve.pointFromX(o, h)
          var b = t.r.invm(f),
            l = f.sub(a).mul(b).umod(f),
            p = s.mul(b).umod(f)
          return this.g.mulAdd(l, o, p)
        }),
        (h.prototype.getKeyRecoveryParam = function (e, t, r, i) {
          if (null !== (t = new c(t, i)).recoveryParam) return t.recoveryParam
          for (var n = 0; n < 4; n++) {
            var f
            try {
              f = this.recoverPubKey(e, t, n)
            } catch (e) {
              continue
            }
            if (f.eq(r)) return n
          }
          throw new Error("Unable to find valid recovery factor")
        })
    },
    31251: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(80953).assert
      function f(e, t) {
        ;(this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc)
      }
      ;(e.exports = f),
        (f.fromPublic = function (e, t, r) {
          return t instanceof f ? t : new f(e, { pub: t, pubEnc: r })
        }),
        (f.fromPrivate = function (e, t, r) {
          return t instanceof f ? t : new f(e, { priv: t, privEnc: r })
        }),
        (f.prototype.validate = function () {
          var e = this.getPublic()
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" }
        }),
        (f.prototype.getPublic = function (e, t) {
          return (
            "string" === typeof e && ((t = e), (e = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            t ? this.pub.encode(t, e) : this.pub
          )
        }),
        (f.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }),
        (f.prototype._importPrivate = function (e, t) {
          ;(this.priv = new i(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n))
        }),
        (f.prototype._importPublic = function (e, t) {
          if (e.x || e.y)
            return (
              "mont" === this.ec.curve.type
                ? n(e.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  n(e.x && e.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(e.x, e.y))
            )
          this.pub = this.ec.curve.decodePoint(e, t)
        }),
        (f.prototype.derive = function (e) {
          return (
            e.validate() || n(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          )
        }),
        (f.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r)
        }),
        (f.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this)
        }),
        (f.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          )
        })
    },
    90611: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(80953),
        f = n.assert
      function a(e, t) {
        if (e instanceof a) return e
        this._importDER(e, t) ||
          (f(e.r && e.s, "Signature without r or s"),
          (this.r = new i(e.r, 16)),
          (this.s = new i(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam))
      }
      function o() {
        this.place = 0
      }
      function d(e, t) {
        var r = e[t.place++]
        if (!(128 & r)) return r
        var i = 15 & r
        if (0 === i || i > 4) return !1
        for (var n = 0, f = 0, a = t.place; f < i; f++, a++)
          (n <<= 8), (n |= e[a]), (n >>>= 0)
        return !(n <= 127) && ((t.place = a), n)
      }
      function s(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++
        return 0 === t ? e : e.slice(t)
      }
      function c(e, t) {
        if (t < 128) e.push(t)
        else {
          var r = 1 + ((Math.log(t) / Math.LN2) >>> 3)
          for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255)
          e.push(t)
        }
      }
      ;(e.exports = a),
        (a.prototype._importDER = function (e, t) {
          e = n.toArray(e, t)
          var r = new o()
          if (48 !== e[r.place++]) return !1
          var f = d(e, r)
          if (!1 === f) return !1
          if (f + r.place !== e.length) return !1
          if (2 !== e[r.place++]) return !1
          var a = d(e, r)
          if (!1 === a) return !1
          var s = e.slice(r.place, a + r.place)
          if (((r.place += a), 2 !== e[r.place++])) return !1
          var c = d(e, r)
          if (!1 === c) return !1
          if (e.length !== c + r.place) return !1
          var h = e.slice(r.place, c + r.place)
          if (0 === s[0]) {
            if (!(128 & s[1])) return !1
            s = s.slice(1)
          }
          if (0 === h[0]) {
            if (!(128 & h[1])) return !1
            h = h.slice(1)
          }
          return (
            (this.r = new i(s)),
            (this.s = new i(h)),
            (this.recoveryParam = null),
            !0
          )
        }),
        (a.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray()
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = s(t),
              r = s(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1)
          var i = [2]
          c(i, t.length), (i = i.concat(t)).push(2), c(i, r.length)
          var f = i.concat(r),
            a = [48]
          return c(a, f.length), (a = a.concat(f)), n.encode(a, e)
        })
    },
    65980: function (e, t, r) {
      "use strict"
      var i = r(33715),
        n = r(45427),
        f = r(80953),
        a = f.assert,
        o = f.parseBytes,
        d = r(79087),
        s = r(23622)
      function c(e) {
        if (
          (a("ed25519" === e, "only tested with ed25519 so far"),
          !(this instanceof c))
        )
          return new c(e)
        ;(e = n[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = i.sha512)
      }
      ;(e.exports = c),
        (c.prototype.sign = function (e, t) {
          e = o(e)
          var r = this.keyFromSecret(t),
            i = this.hashInt(r.messagePrefix(), e),
            n = this.g.mul(i),
            f = this.encodePoint(n),
            a = this.hashInt(f, r.pubBytes(), e).mul(r.priv()),
            d = i.add(a).umod(this.curve.n)
          return this.makeSignature({ R: n, S: d, Rencoded: f })
        }),
        (c.prototype.verify = function (e, t, r) {
          ;(e = o(e)), (t = this.makeSignature(t))
          var i = this.keyFromPublic(r),
            n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
            f = this.g.mul(t.S())
          return t.R().add(i.pub().mul(n)).eq(f)
        }),
        (c.prototype.hashInt = function () {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t])
          return f.intFromLE(e.digest()).umod(this.curve.n)
        }),
        (c.prototype.keyFromPublic = function (e) {
          return d.fromPublic(this, e)
        }),
        (c.prototype.keyFromSecret = function (e) {
          return d.fromSecret(this, e)
        }),
        (c.prototype.makeSignature = function (e) {
          return e instanceof s ? e : new s(this, e)
        }),
        (c.prototype.encodePoint = function (e) {
          var t = e.getY().toArray("le", this.encodingLength)
          return (t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), t
        }),
        (c.prototype.decodePoint = function (e) {
          var t = (e = f.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            i = 0 !== (128 & e[t]),
            n = f.intFromLE(r)
          return this.curve.pointFromY(n, i)
        }),
        (c.prototype.encodeInt = function (e) {
          return e.toArray("le", this.encodingLength)
        }),
        (c.prototype.decodeInt = function (e) {
          return f.intFromLE(e)
        }),
        (c.prototype.isPoint = function (e) {
          return e instanceof this.pointClass
        })
    },
    79087: function (e, t, r) {
      "use strict"
      var i = r(80953),
        n = i.assert,
        f = i.parseBytes,
        a = i.cachedProperty
      function o(e, t) {
        ;(this.eddsa = e),
          (this._secret = f(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = f(t.pub))
      }
      ;(o.fromPublic = function (e, t) {
        return t instanceof o ? t : new o(e, { pub: t })
      }),
        (o.fromSecret = function (e, t) {
          return t instanceof o ? t : new o(e, { secret: t })
        }),
        (o.prototype.secret = function () {
          return this._secret
        }),
        a(o, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub())
        }),
        a(o, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv())
        }),
        a(o, "privBytes", function () {
          var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            i = t.slice(0, e.encodingLength)
          return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i
        }),
        a(o, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes())
        }),
        a(o, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest()
        }),
        a(o, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength)
        }),
        (o.prototype.sign = function (e) {
          return (
            n(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
          )
        }),
        (o.prototype.verify = function (e, t) {
          return this.eddsa.verify(e, t, this)
        }),
        (o.prototype.getSecret = function (e) {
          return (
            n(this._secret, "KeyPair is public only"),
            i.encode(this.secret(), e)
          )
        }),
        (o.prototype.getPublic = function (e) {
          return i.encode(this.pubBytes(), e)
        }),
        (e.exports = o)
    },
    23622: function (e, t, r) {
      "use strict"
      var i = r(13550),
        n = r(80953),
        f = n.assert,
        a = n.cachedProperty,
        o = n.parseBytes
      function d(e, t) {
        ;(this.eddsa = e),
          "object" !== typeof t && (t = o(t)),
          Array.isArray(t) &&
            (t = {
              R: t.slice(0, e.encodingLength),
              S: t.slice(e.encodingLength)
            }),
          f(t.R && t.S, "Signature without R or S"),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof i && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded)
      }
      a(d, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded())
      }),
        a(d, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded())
        }),
        a(d, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R())
        }),
        a(d, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S())
        }),
        (d.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded())
        }),
        (d.prototype.toHex = function () {
          return n.encode(this.toBytes(), "hex").toUpperCase()
        }),
        (e.exports = d)
    },
    91037: function (e) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
            ]
          ]
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
            ]
          ]
        }
      }
    },
    80953: function (e, t, r) {
      "use strict"
      var i = t,
        n = r(13550),
        f = r(79746),
        a = r(34504)
      ;(i.assert = f),
        (i.toArray = a.toArray),
        (i.zero2 = a.zero2),
        (i.toHex = a.toHex),
        (i.encode = a.encode),
        (i.getNAF = function (e, t, r) {
          var i = new Array(Math.max(e.bitLength(), r) + 1)
          i.fill(0)
          for (var n = 1 << (t + 1), f = e.clone(), a = 0; a < i.length; a++) {
            var o,
              d = f.andln(n - 1)
            f.isOdd()
              ? ((o = d > (n >> 1) - 1 ? (n >> 1) - d : d), f.isubn(o))
              : (o = 0),
              (i[a] = o),
              f.iushrn(1)
          }
          return i
        }),
        (i.getJSF = function (e, t) {
          var r = [[], []]
          ;(e = e.clone()), (t = t.clone())
          for (var i, n = 0, f = 0; e.cmpn(-n) > 0 || t.cmpn(-f) > 0; ) {
            var a,
              o,
              d = (e.andln(3) + n) & 3,
              s = (t.andln(3) + f) & 3
            3 === d && (d = -1),
              3 === s && (s = -1),
              (a =
                0 === (1 & d)
                  ? 0
                  : (3 !== (i = (e.andln(7) + n) & 7) && 5 !== i) || 2 !== s
                  ? d
                  : -d),
              r[0].push(a),
              (o =
                0 === (1 & s)
                  ? 0
                  : (3 !== (i = (t.andln(7) + f) & 7) && 5 !== i) || 2 !== d
                  ? s
                  : -s),
              r[1].push(o),
              2 * n === a + 1 && (n = 1 - n),
              2 * f === o + 1 && (f = 1 - f),
              e.iushrn(1),
              t.iushrn(1)
          }
          return r
        }),
        (i.cachedProperty = function (e, t, r) {
          var i = "_" + t
          e.prototype[t] = function () {
            return void 0 !== this[i] ? this[i] : (this[i] = r.call(this))
          }
        }),
        (i.parseBytes = function (e) {
          return "string" === typeof e ? i.toArray(e, "hex") : e
        }),
        (i.intFromLE = function (e) {
          return new n(e, "hex", "le")
        })
    },
    33715: function (e, t, r) {
      var i = t
      ;(i.utils = r(26436)),
        (i.common = r(95772)),
        (i.sha = r(89041)),
        (i.ripemd = r(12949)),
        (i.hmac = r(52344)),
        (i.sha1 = i.sha.sha1),
        (i.sha256 = i.sha.sha256),
        (i.sha224 = i.sha.sha224),
        (i.sha384 = i.sha.sha384),
        (i.sha512 = i.sha.sha512),
        (i.ripemd160 = i.ripemd.ripemd160)
    },
    95772: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(79746)
      function f() {
        ;(this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32)
      }
      ;(t.BlockHash = f),
        (f.prototype.update = function (e, t) {
          if (
            ((e = i.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8
            ;(this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = i.join32(e, 0, e.length - r, this.endian))
            for (var n = 0; n < e.length; n += this._delta32)
              this._update(e, n, n + this._delta32)
          }
          return this
        }),
        (f.prototype.digest = function (e) {
          return (
            this.update(this._pad()), n(null === this.pending), this._digest(e)
          )
        }),
        (f.prototype._pad = function () {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            i = new Array(r + this.padLength)
          i[0] = 128
          for (var n = 1; n < r; n++) i[n] = 0
          if (((e <<= 3), "big" === this.endian)) {
            for (var f = 8; f < this.padLength; f++) i[n++] = 0
            ;(i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (e >>> 24) & 255),
              (i[n++] = (e >>> 16) & 255),
              (i[n++] = (e >>> 8) & 255),
              (i[n++] = 255 & e)
          } else
            for (
              i[n++] = 255 & e,
                i[n++] = (e >>> 8) & 255,
                i[n++] = (e >>> 16) & 255,
                i[n++] = (e >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                f = 8;
              f < this.padLength;
              f++
            )
              i[n++] = 0
          return i
        })
    },
    52344: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(79746)
      function f(e, t, r) {
        if (!(this instanceof f)) return new f(e, t, r)
        ;(this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(i.toArray(t, r))
      }
      ;(e.exports = f),
        (f.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            n(e.length <= this.blockSize)
          for (var t = e.length; t < this.blockSize; t++) e.push(0)
          for (t = 0; t < e.length; t++) e[t] ^= 54
          for (this.inner = new this.Hash().update(e), t = 0; t < e.length; t++)
            e[t] ^= 106
          this.outer = new this.Hash().update(e)
        }),
        (f.prototype.update = function (e, t) {
          return this.inner.update(e, t), this
        }),
        (f.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e)
        })
    },
    12949: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(95772),
        f = i.rotl32,
        a = i.sum32,
        o = i.sum32_3,
        d = i.sum32_4,
        s = n.BlockHash
      function c() {
        if (!(this instanceof c)) return new c()
        s.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520
          ]),
          (this.endian = "little")
      }
      function h(e, t, r, i) {
        return e <= 15
          ? t ^ r ^ i
          : e <= 31
          ? (t & r) | (~t & i)
          : e <= 47
          ? (t | ~r) ^ i
          : e <= 63
          ? (t & i) | (r & ~i)
          : t ^ (r | ~i)
      }
      function u(e) {
        return e <= 15
          ? 0
          : e <= 31
          ? 1518500249
          : e <= 47
          ? 1859775393
          : e <= 63
          ? 2400959708
          : 2840853838
      }
      function b(e) {
        return e <= 15
          ? 1352829926
          : e <= 31
          ? 1548603684
          : e <= 47
          ? 1836072691
          : e <= 63
          ? 2053994217
          : 0
      }
      i.inherits(c, s),
        (t.ripemd160 = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 192),
        (c.padLength = 64),
        (c.prototype._update = function (e, t) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              s = this.h[3],
              c = this.h[4],
              v = r,
              g = i,
              w = n,
              M = s,
              _ = c,
              A = 0;
            A < 80;
            A++
          ) {
            var S = a(f(d(r, h(A, i, n, s), e[l[A] + t], u(A)), m[A]), c)
            ;(r = c),
              (c = s),
              (s = f(n, 10)),
              (n = i),
              (i = S),
              (S = a(f(d(v, h(79 - A, g, w, M), e[p[A] + t], b(A)), y[A]), _)),
              (v = _),
              (_ = M),
              (M = f(w, 10)),
              (w = g),
              (g = S)
          }
          ;(S = o(this.h[1], n, M)),
            (this.h[1] = o(this.h[2], s, _)),
            (this.h[2] = o(this.h[3], c, v)),
            (this.h[3] = o(this.h[4], r, g)),
            (this.h[4] = o(this.h[0], i, w)),
            (this.h[0] = S)
        }),
        (c.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h, "little")
            : i.split32(this.h, "little")
        })
      var l = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
        ],
        p = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
        ],
        m = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
        ],
        y = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
        ]
    },
    89041: function (e, t, r) {
      "use strict"
      ;(t.sha1 = r(84761)),
        (t.sha224 = r(10799)),
        (t.sha256 = r(89344)),
        (t.sha384 = r(80772)),
        (t.sha512 = r(45900))
    },
    84761: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(95772),
        f = r(37038),
        a = i.rotl32,
        o = i.sum32,
        d = i.sum32_5,
        s = f.ft_1,
        c = n.BlockHash,
        h = [1518500249, 1859775393, 2400959708, 3395469782]
      function u() {
        if (!(this instanceof u)) return new u()
        c.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520
          ]),
          (this.W = new Array(80))
      }
      i.inherits(u, c),
        (e.exports = u),
        (u.blockSize = 512),
        (u.outSize = 160),
        (u.hmacStrength = 80),
        (u.padLength = 64),
        (u.prototype._update = function (e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i]
          for (; i < r.length; i++)
            r[i] = a(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1)
          var n = this.h[0],
            f = this.h[1],
            c = this.h[2],
            u = this.h[3],
            b = this.h[4]
          for (i = 0; i < r.length; i++) {
            var l = ~~(i / 20),
              p = d(a(n, 5), s(l, f, c, u), b, r[i], h[l])
            ;(b = u), (u = c), (c = a(f, 30)), (f = n), (n = p)
          }
          ;(this.h[0] = o(this.h[0], n)),
            (this.h[1] = o(this.h[1], f)),
            (this.h[2] = o(this.h[2], c)),
            (this.h[3] = o(this.h[3], u)),
            (this.h[4] = o(this.h[4], b))
        }),
        (u.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big")
        })
    },
    10799: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(89344)
      function f() {
        if (!(this instanceof f)) return new f()
        n.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428
          ])
      }
      i.inherits(f, n),
        (e.exports = f),
        (f.blockSize = 512),
        (f.outSize = 224),
        (f.hmacStrength = 192),
        (f.padLength = 64),
        (f.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h.slice(0, 7), "big")
            : i.split32(this.h.slice(0, 7), "big")
        })
    },
    89344: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(95772),
        f = r(37038),
        a = r(79746),
        o = i.sum32,
        d = i.sum32_4,
        s = i.sum32_5,
        c = f.ch32,
        h = f.maj32,
        u = f.s0_256,
        b = f.s1_256,
        l = f.g0_256,
        p = f.g1_256,
        m = n.BlockHash,
        y = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298
        ]
      function v() {
        if (!(this instanceof v)) return new v()
        m.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225
          ]),
          (this.k = y),
          (this.W = new Array(64))
      }
      i.inherits(v, m),
        (e.exports = v),
        (v.blockSize = 512),
        (v.outSize = 256),
        (v.hmacStrength = 192),
        (v.padLength = 64),
        (v.prototype._update = function (e, t) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i]
          for (; i < r.length; i++)
            r[i] = d(p(r[i - 2]), r[i - 7], l(r[i - 15]), r[i - 16])
          var n = this.h[0],
            f = this.h[1],
            m = this.h[2],
            y = this.h[3],
            v = this.h[4],
            g = this.h[5],
            w = this.h[6],
            M = this.h[7]
          for (a(this.k.length === r.length), i = 0; i < r.length; i++) {
            var _ = s(M, b(v), c(v, g, w), this.k[i], r[i]),
              A = o(u(n), h(n, f, m))
            ;(M = w),
              (w = g),
              (g = v),
              (v = o(y, _)),
              (y = m),
              (m = f),
              (f = n),
              (n = o(_, A))
          }
          ;(this.h[0] = o(this.h[0], n)),
            (this.h[1] = o(this.h[1], f)),
            (this.h[2] = o(this.h[2], m)),
            (this.h[3] = o(this.h[3], y)),
            (this.h[4] = o(this.h[4], v)),
            (this.h[5] = o(this.h[5], g)),
            (this.h[6] = o(this.h[6], w)),
            (this.h[7] = o(this.h[7], M))
        }),
        (v.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big")
        })
    },
    80772: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(45900)
      function f() {
        if (!(this instanceof f)) return new f()
        n.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428
          ])
      }
      i.inherits(f, n),
        (e.exports = f),
        (f.blockSize = 1024),
        (f.outSize = 384),
        (f.hmacStrength = 192),
        (f.padLength = 128),
        (f.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h.slice(0, 12), "big")
            : i.split32(this.h.slice(0, 12), "big")
        })
    },
    45900: function (e, t, r) {
      "use strict"
      var i = r(26436),
        n = r(95772),
        f = r(79746),
        a = i.rotr64_hi,
        o = i.rotr64_lo,
        d = i.shr64_hi,
        s = i.shr64_lo,
        c = i.sum64,
        h = i.sum64_hi,
        u = i.sum64_lo,
        b = i.sum64_4_hi,
        l = i.sum64_4_lo,
        p = i.sum64_5_hi,
        m = i.sum64_5_lo,
        y = n.BlockHash,
        v = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591
        ]
      function g() {
        if (!(this instanceof g)) return new g()
        y.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209
          ]),
          (this.k = v),
          (this.W = new Array(160))
      }
      function w(e, t, r, i, n) {
        var f = (e & r) ^ (~e & n)
        return f < 0 && (f += 4294967296), f
      }
      function M(e, t, r, i, n, f) {
        var a = (t & i) ^ (~t & f)
        return a < 0 && (a += 4294967296), a
      }
      function _(e, t, r, i, n) {
        var f = (e & r) ^ (e & n) ^ (r & n)
        return f < 0 && (f += 4294967296), f
      }
      function A(e, t, r, i, n, f) {
        var a = (t & i) ^ (t & f) ^ (i & f)
        return a < 0 && (a += 4294967296), a
      }
      function S(e, t) {
        var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function x(e, t) {
        var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7)
        return r < 0 && (r += 4294967296), r
      }
      function I(e, t) {
        var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9)
        return r < 0 && (r += 4294967296), r
      }
      function E(e, t) {
        var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9)
        return r < 0 && (r += 4294967296), r
      }
      function k(e, t) {
        var r = a(e, t, 1) ^ a(e, t, 8) ^ d(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function z(e, t) {
        var r = o(e, t, 1) ^ o(e, t, 8) ^ s(e, t, 7)
        return r < 0 && (r += 4294967296), r
      }
      function R(e, t) {
        var r = a(e, t, 19) ^ a(t, e, 29) ^ d(e, t, 6)
        return r < 0 && (r += 4294967296), r
      }
      function P(e, t) {
        var r = o(e, t, 19) ^ o(t, e, 29) ^ s(e, t, 6)
        return r < 0 && (r += 4294967296), r
      }
      i.inherits(g, y),
        (e.exports = g),
        (g.blockSize = 1024),
        (g.outSize = 512),
        (g.hmacStrength = 192),
        (g.padLength = 128),
        (g.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i]
          for (; i < r.length; i += 2) {
            var n = R(r[i - 4], r[i - 3]),
              f = P(r[i - 4], r[i - 3]),
              a = r[i - 14],
              o = r[i - 13],
              d = k(r[i - 30], r[i - 29]),
              s = z(r[i - 30], r[i - 29]),
              c = r[i - 32],
              h = r[i - 31]
            ;(r[i] = b(n, f, a, o, d, s, c, h)),
              (r[i + 1] = l(n, f, a, o, d, s, c, h))
          }
        }),
        (g.prototype._update = function (e, t) {
          this._prepareBlock(e, t)
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            a = this.h[2],
            o = this.h[3],
            d = this.h[4],
            s = this.h[5],
            b = this.h[6],
            l = this.h[7],
            y = this.h[8],
            v = this.h[9],
            g = this.h[10],
            k = this.h[11],
            z = this.h[12],
            R = this.h[13],
            P = this.h[14],
            q = this.h[15]
          f(this.k.length === r.length)
          for (var L = 0; L < r.length; L += 2) {
            var N = P,
              B = q,
              O = I(y, v),
              K = E(y, v),
              T = w(y, v, g, k, z),
              U = M(y, v, g, k, z, R),
              j = this.k[L],
              D = this.k[L + 1],
              C = r[L],
              Z = r[L + 1],
              F = p(N, B, O, K, T, U, j, D, C, Z),
              J = m(N, B, O, K, T, U, j, D, C, Z)
            ;(N = S(i, n)),
              (B = x(i, n)),
              (O = _(i, n, a, o, d)),
              (K = A(i, n, a, o, d, s))
            var H = h(N, B, O, K),
              W = u(N, B, O, K)
            ;(P = z),
              (q = R),
              (z = g),
              (R = k),
              (g = y),
              (k = v),
              (y = h(b, l, F, J)),
              (v = u(l, l, F, J)),
              (b = d),
              (l = s),
              (d = a),
              (s = o),
              (a = i),
              (o = n),
              (i = h(F, J, H, W)),
              (n = u(F, J, H, W))
          }
          c(this.h, 0, i, n),
            c(this.h, 2, a, o),
            c(this.h, 4, d, s),
            c(this.h, 6, b, l),
            c(this.h, 8, y, v),
            c(this.h, 10, g, k),
            c(this.h, 12, z, R),
            c(this.h, 14, P, q)
        }),
        (g.prototype._digest = function (e) {
          return "hex" === e
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big")
        })
    },
    37038: function (e, t, r) {
      "use strict"
      var i = r(26436).rotr32
      function n(e, t, r) {
        return (e & t) ^ (~e & r)
      }
      function f(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r)
      }
      function a(e, t, r) {
        return e ^ t ^ r
      }
      ;(t.ft_1 = function (e, t, r, i) {
        return 0 === e
          ? n(t, r, i)
          : 1 === e || 3 === e
          ? a(t, r, i)
          : 2 === e
          ? f(t, r, i)
          : void 0
      }),
        (t.ch32 = n),
        (t.maj32 = f),
        (t.p32 = a),
        (t.s0_256 = function (e) {
          return i(e, 2) ^ i(e, 13) ^ i(e, 22)
        }),
        (t.s1_256 = function (e) {
          return i(e, 6) ^ i(e, 11) ^ i(e, 25)
        }),
        (t.g0_256 = function (e) {
          return i(e, 7) ^ i(e, 18) ^ (e >>> 3)
        }),
        (t.g1_256 = function (e) {
          return i(e, 17) ^ i(e, 19) ^ (e >>> 10)
        })
    },
    26436: function (e, t, r) {
      "use strict"
      var i = r(79746),
        n = r(35717)
      function f(e, t) {
        return (
          55296 === (64512 & e.charCodeAt(t)) &&
          !(t < 0 || t + 1 >= e.length) &&
          56320 === (64512 & e.charCodeAt(t + 1))
        )
      }
      function a(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 16711680) |
            ((255 & e) << 24)) >>>
          0
        )
      }
      function o(e) {
        return 1 === e.length ? "0" + e : e
      }
      function d(e) {
        return 7 === e.length
          ? "0" + e
          : 6 === e.length
          ? "00" + e
          : 5 === e.length
          ? "000" + e
          : 4 === e.length
          ? "0000" + e
          : 3 === e.length
          ? "00000" + e
          : 2 === e.length
          ? "000000" + e
          : 1 === e.length
          ? "0000000" + e
          : e
      }
      ;(t.inherits = n),
        (t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice()
          if (!e) return []
          var r = []
          if ("string" === typeof e)
            if (t) {
              if ("hex" === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                    (e = "0" + e),
                    n = 0;
                  n < e.length;
                  n += 2
                )
                  r.push(parseInt(e[n] + e[n + 1], 16))
            } else
              for (var i = 0, n = 0; n < e.length; n++) {
                var a = e.charCodeAt(n)
                a < 128
                  ? (r[i++] = a)
                  : a < 2048
                  ? ((r[i++] = (a >> 6) | 192), (r[i++] = (63 & a) | 128))
                  : f(e, n)
                  ? ((a =
                      65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++n))),
                    (r[i++] = (a >> 18) | 240),
                    (r[i++] = ((a >> 12) & 63) | 128),
                    (r[i++] = ((a >> 6) & 63) | 128),
                    (r[i++] = (63 & a) | 128))
                  : ((r[i++] = (a >> 12) | 224),
                    (r[i++] = ((a >> 6) & 63) | 128),
                    (r[i++] = (63 & a) | 128))
              }
          else for (n = 0; n < e.length; n++) r[n] = 0 | e[n]
          return r
        }),
        (t.toHex = function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += o(e[r].toString(16))
          return t
        }),
        (t.htonl = a),
        (t.toHex32 = function (e, t) {
          for (var r = "", i = 0; i < e.length; i++) {
            var n = e[i]
            "little" === t && (n = a(n)), (r += d(n.toString(16)))
          }
          return r
        }),
        (t.zero2 = o),
        (t.zero8 = d),
        (t.join32 = function (e, t, r, n) {
          var f = r - t
          i(f % 4 === 0)
          for (
            var a = new Array(f / 4), o = 0, d = t;
            o < a.length;
            o++, d += 4
          ) {
            var s
            ;(s =
              "big" === n
                ? (e[d] << 24) | (e[d + 1] << 16) | (e[d + 2] << 8) | e[d + 3]
                : (e[d + 3] << 24) | (e[d + 2] << 16) | (e[d + 1] << 8) | e[d]),
              (a[o] = s >>> 0)
          }
          return a
        }),
        (t.split32 = function (e, t) {
          for (
            var r = new Array(4 * e.length), i = 0, n = 0;
            i < e.length;
            i++, n += 4
          ) {
            var f = e[i]
            "big" === t
              ? ((r[n] = f >>> 24),
                (r[n + 1] = (f >>> 16) & 255),
                (r[n + 2] = (f >>> 8) & 255),
                (r[n + 3] = 255 & f))
              : ((r[n + 3] = f >>> 24),
                (r[n + 2] = (f >>> 16) & 255),
                (r[n + 1] = (f >>> 8) & 255),
                (r[n] = 255 & f))
          }
          return r
        }),
        (t.rotr32 = function (e, t) {
          return (e >>> t) | (e << (32 - t))
        }),
        (t.rotl32 = function (e, t) {
          return (e << t) | (e >>> (32 - t))
        }),
        (t.sum32 = function (e, t) {
          return (e + t) >>> 0
        }),
        (t.sum32_3 = function (e, t, r) {
          return (e + t + r) >>> 0
        }),
        (t.sum32_4 = function (e, t, r, i) {
          return (e + t + r + i) >>> 0
        }),
        (t.sum32_5 = function (e, t, r, i, n) {
          return (e + t + r + i + n) >>> 0
        }),
        (t.sum64 = function (e, t, r, i) {
          var n = e[t],
            f = (i + e[t + 1]) >>> 0,
            a = (f < i ? 1 : 0) + r + n
          ;(e[t] = a >>> 0), (e[t + 1] = f)
        }),
        (t.sum64_hi = function (e, t, r, i) {
          return (((t + i) >>> 0 < t ? 1 : 0) + e + r) >>> 0
        }),
        (t.sum64_lo = function (e, t, r, i) {
          return (t + i) >>> 0
        }),
        (t.sum64_4_hi = function (e, t, r, i, n, f, a, o) {
          var d = 0,
            s = t
          return (
            (d += (s = (s + i) >>> 0) < t ? 1 : 0),
            (d += (s = (s + f) >>> 0) < f ? 1 : 0),
            (e + r + n + a + (d += (s = (s + o) >>> 0) < o ? 1 : 0)) >>> 0
          )
        }),
        (t.sum64_4_lo = function (e, t, r, i, n, f, a, o) {
          return (t + i + f + o) >>> 0
        }),
        (t.sum64_5_hi = function (e, t, r, i, n, f, a, o, d, s) {
          var c = 0,
            h = t
          return (
            (c += (h = (h + i) >>> 0) < t ? 1 : 0),
            (c += (h = (h + f) >>> 0) < f ? 1 : 0),
            (c += (h = (h + o) >>> 0) < o ? 1 : 0),
            (e + r + n + a + d + (c += (h = (h + s) >>> 0) < s ? 1 : 0)) >>> 0
          )
        }),
        (t.sum64_5_lo = function (e, t, r, i, n, f, a, o, d, s) {
          return (t + i + f + o + s) >>> 0
        }),
        (t.rotr64_hi = function (e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0
        }),
        (t.rotr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0
        }),
        (t.shr64_hi = function (e, t, r) {
          return e >>> r
        }),
        (t.shr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0
        })
    },
    2156: function (e, t, r) {
      "use strict"
      var i = r(33715),
        n = r(34504),
        f = r(79746)
      function a(e) {
        if (!(this instanceof a)) return new a(e)
        ;(this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null)
        var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
          r = n.toArray(e.nonce, e.nonceEnc || "hex"),
          i = n.toArray(e.pers, e.persEnc || "hex")
        f(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(t, r, i)
      }
      ;(e.exports = a),
        (a.prototype._init = function (e, t, r) {
          var i = e.concat(t).concat(r)
          ;(this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8))
          for (var n = 0; n < this.V.length; n++)
            (this.K[n] = 0), (this.V[n] = 1)
          this._update(i),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656)
        }),
        (a.prototype._hmac = function () {
          return new i.hmac(this.hash, this.K)
        }),
        (a.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0])
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()))
        }),
        (a.prototype.reseed = function (e, t, r, i) {
          "string" !== typeof t && ((i = r), (r = t), (t = null)),
            (e = n.toArray(e, t)),
            (r = n.toArray(r, i)),
            f(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1)
        }),
        (a.prototype.generate = function (e, t, r, i) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required")
          "string" !== typeof t && ((i = r), (r = t), (t = null)),
            r && ((r = n.toArray(r, i || "hex")), this._update(r))
          for (var f = []; f.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (f = f.concat(this.V))
          var a = f.slice(0, e)
          return this._update(r), this._reseed++, n.encode(a, t)
        })
    },
    35717: function (e) {
      "function" === typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })))
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t
              var r = function () {}
              ;(r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e)
            }
          })
    },
    79746: function (e) {
      function t(e, t) {
        if (!e) throw new Error(t || "Assertion failed")
      }
      ;(e.exports = t),
        (t.equal = function (e, t, r) {
          if (e != t)
            throw new Error(r || "Assertion failed: " + e + " != " + t)
        })
    },
    34504: function (e, t) {
      "use strict"
      var r = t
      function i(e) {
        return 1 === e.length ? "0" + e : e
      }
      function n(e) {
        for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16))
        return t
      }
      ;(r.toArray = function (e, t) {
        if (Array.isArray(e)) return e.slice()
        if (!e) return []
        var r = []
        if ("string" !== typeof e) {
          for (var i = 0; i < e.length; i++) r[i] = 0 | e[i]
          return r
        }
        if ("hex" === t) {
          ;(e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (e = "0" + e)
          for (i = 0; i < e.length; i += 2)
            r.push(parseInt(e[i] + e[i + 1], 16))
        } else
          for (i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i),
              f = n >> 8,
              a = 255 & n
            f ? r.push(f, a) : r.push(a)
          }
        return r
      }),
        (r.zero2 = i),
        (r.toHex = n),
        (r.encode = function (e, t) {
          return "hex" === t ? n(e) : e
        })
    },
    17221: function (e, t, r) {
      e.exports = r(59119)(r(58573))
    },
    58573: function (e, t, r) {
      const i = new (0, r(86266).ec)("secp256k1"),
        n = i.curve,
        f = n.n.constructor
      function a(e) {
        const t = e[0]
        switch (t) {
          case 2:
          case 3:
            return 33 !== e.length
              ? null
              : (function (e, t) {
                  let r = new f(t)
                  if (r.cmp(n.p) >= 0) return null
                  r = r.toRed(n.red)
                  let a = r.redSqr().redIMul(r).redIAdd(n.b).redSqrt()
                  return (
                    (3 === e) !== a.isOdd() && (a = a.redNeg()),
                    i.keyPair({ pub: { x: r, y: a } })
                  )
                })(t, e.subarray(1, 33))
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : (function (e, t, r) {
                  let a = new f(t),
                    o = new f(r)
                  if (a.cmp(n.p) >= 0 || o.cmp(n.p) >= 0) return null
                  if (
                    ((a = a.toRed(n.red)),
                    (o = o.toRed(n.red)),
                    (6 === e || 7 === e) && o.isOdd() !== (7 === e))
                  )
                    return null
                  const d = a.redSqr().redIMul(a)
                  return o.redSqr().redISub(d.redIAdd(n.b)).isZero()
                    ? i.keyPair({ pub: { x: a, y: o } })
                    : null
                })(t, e.subarray(1, 33), e.subarray(33, 65))
          default:
            return null
        }
      }
      function o(e, t) {
        const r = t.encode(null, 33 === e.length)
        for (let i = 0; i < e.length; ++i) e[i] = r[i]
      }
      e.exports = {
        contextRandomize: () => 0,
        privateKeyVerify(e) {
          const t = new f(e)
          return t.cmp(n.n) < 0 && !t.isZero() ? 0 : 1
        },
        privateKeyNegate(e) {
          const t = new f(e),
            r = n.n.sub(t).umod(n.n).toArrayLike(Uint8Array, "be", 32)
          return e.set(r), 0
        },
        privateKeyTweakAdd(e, t) {
          const r = new f(t)
          if (r.cmp(n.n) >= 0) return 1
          if ((r.iadd(new f(e)), r.cmp(n.n) >= 0 && r.isub(n.n), r.isZero()))
            return 1
          const i = r.toArrayLike(Uint8Array, "be", 32)
          return e.set(i), 0
        },
        privateKeyTweakMul(e, t) {
          let r = new f(t)
          if (r.cmp(n.n) >= 0 || r.isZero()) return 1
          r.imul(new f(e)), r.cmp(n.n) >= 0 && (r = r.umod(n.n))
          const i = r.toArrayLike(Uint8Array, "be", 32)
          return e.set(i), 0
        },
        publicKeyVerify: e => (null === a(e) ? 1 : 0),
        publicKeyCreate(e, t) {
          const r = new f(t)
          if (r.cmp(n.n) >= 0 || r.isZero()) return 1
          return o(e, i.keyFromPrivate(t).getPublic()), 0
        },
        publicKeyConvert(e, t) {
          const r = a(t)
          if (null === r) return 1
          return o(e, r.getPublic()), 0
        },
        publicKeyNegate(e, t) {
          const r = a(t)
          if (null === r) return 1
          const i = r.getPublic()
          return (i.y = i.y.redNeg()), o(e, i), 0
        },
        publicKeyCombine(e, t) {
          const r = new Array(t.length)
          for (let n = 0; n < t.length; ++n)
            if (((r[n] = a(t[n])), null === r[n])) return 1
          let i = r[0].getPublic()
          for (let n = 1; n < r.length; ++n) i = i.add(r[n].pub)
          return i.isInfinity() ? 2 : (o(e, i), 0)
        },
        publicKeyTweakAdd(e, t, r) {
          const i = a(t)
          if (null === i) return 1
          if ((r = new f(r)).cmp(n.n) >= 0) return 2
          const d = i.getPublic().add(n.g.mul(r))
          return d.isInfinity() ? 2 : (o(e, d), 0)
        },
        publicKeyTweakMul(e, t, r) {
          const i = a(t)
          if (null === i) return 1
          if ((r = new f(r)).cmp(n.n) >= 0 || r.isZero()) return 2
          return o(e, i.getPublic().mul(r)), 0
        },
        signatureNormalize(e) {
          const t = new f(e.subarray(0, 32)),
            r = new f(e.subarray(32, 64))
          return t.cmp(n.n) >= 0 || r.cmp(n.n) >= 0
            ? 1
            : (1 === r.cmp(i.nh) &&
                e.set(n.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0)
        },
        signatureExport(e, t) {
          const r = t.subarray(0, 32),
            i = t.subarray(32, 64)
          if (new f(r).cmp(n.n) >= 0) return 1
          if (new f(i).cmp(n.n) >= 0) return 1
          const { output: a } = e
          let o = a.subarray(4, 37)
          ;(o[0] = 0), o.set(r, 1)
          let d = 33,
            s = 0
          for (; d > 1 && 0 === o[s] && !(128 & o[s + 1]); --d, ++s);
          if (((o = o.subarray(s)), 128 & o[0])) return 1
          if (d > 1 && 0 === o[0] && !(128 & o[1])) return 1
          let c = a.subarray(39, 72)
          ;(c[0] = 0), c.set(i, 1)
          let h = 33,
            u = 0
          for (; h > 1 && 0 === c[u] && !(128 & c[u + 1]); --h, ++u);
          return (
            (c = c.subarray(u)),
            128 & c[0] || (h > 1 && 0 === c[0] && !(128 & c[1]))
              ? 1
              : ((e.outputlen = 6 + d + h),
                (a[0] = 48),
                (a[1] = e.outputlen - 2),
                (a[2] = 2),
                (a[3] = o.length),
                a.set(o, 4),
                (a[4 + d] = 2),
                (a[5 + d] = c.length),
                a.set(c, 6 + d),
                0)
          )
        },
        signatureImport(e, t) {
          if (t.length < 8) return 1
          if (t.length > 72) return 1
          if (48 !== t[0]) return 1
          if (t[1] !== t.length - 2) return 1
          if (2 !== t[2]) return 1
          const r = t[3]
          if (0 === r) return 1
          if (5 + r >= t.length) return 1
          if (2 !== t[4 + r]) return 1
          const i = t[5 + r]
          if (0 === i) return 1
          if (6 + r + i !== t.length) return 1
          if (128 & t[4]) return 1
          if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1
          if (128 & t[r + 6]) return 1
          if (i > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1
          let a = t.subarray(4, 4 + r)
          if (
            (33 === a.length && 0 === a[0] && (a = a.subarray(1)),
            a.length > 32)
          )
            return 1
          let o = t.subarray(6 + r)
          if (
            (33 === o.length && 0 === o[0] && (o = o.slice(1)), o.length > 32)
          )
            throw new Error("S length is too long")
          let d = new f(a)
          d.cmp(n.n) >= 0 && (d = new f(0))
          let s = new f(t.subarray(6 + r))
          return (
            s.cmp(n.n) >= 0 && (s = new f(0)),
            e.set(d.toArrayLike(Uint8Array, "be", 32), 0),
            e.set(s.toArrayLike(Uint8Array, "be", 32), 32),
            0
          )
        },
        ecdsaSign(e, t, r, a, o) {
          if (o) {
            const e = o
            o = i => {
              const n = e(t, r, null, a, i)
              if (!(n instanceof Uint8Array && 32 === n.length))
                throw new Error("This is the way")
              return new f(n)
            }
          }
          const d = new f(r)
          if (d.cmp(n.n) >= 0 || d.isZero()) return 1
          let s
          try {
            s = i.sign(t, r, { canonical: !0, k: o, pers: a })
          } catch (c) {
            return 1
          }
          return (
            e.signature.set(s.r.toArrayLike(Uint8Array, "be", 32), 0),
            e.signature.set(s.s.toArrayLike(Uint8Array, "be", 32), 32),
            (e.recid = s.recoveryParam),
            0
          )
        },
        ecdsaVerify(e, t, r) {
          const o = { r: e.subarray(0, 32), s: e.subarray(32, 64) },
            d = new f(o.r),
            s = new f(o.s)
          if (d.cmp(n.n) >= 0 || s.cmp(n.n) >= 0) return 1
          if (1 === s.cmp(i.nh) || d.isZero() || s.isZero()) return 3
          const c = a(r)
          if (null === c) return 2
          const h = c.getPublic()
          return i.verify(t, o, h) ? 0 : 3
        },
        ecdsaRecover(e, t, r, a) {
          const d = { r: t.slice(0, 32), s: t.slice(32, 64) },
            s = new f(d.r),
            c = new f(d.s)
          if (s.cmp(n.n) >= 0 || c.cmp(n.n) >= 0) return 1
          if (s.isZero() || c.isZero()) return 2
          let h
          try {
            h = i.recoverPubKey(a, d, r)
          } catch (u) {
            return 2
          }
          return o(e, h), 0
        },
        ecdh(e, t, r, o, d, s, c) {
          const h = a(t)
          if (null === h) return 1
          const u = new f(r)
          if (u.cmp(n.n) >= 0 || u.isZero()) return 2
          const b = h.getPublic().mul(u)
          if (void 0 === d) {
            const t = b.encode(null, !0),
              r = i.hash().update(t).digest()
            for (let i = 0; i < 32; ++i) e[i] = r[i]
          } else {
            s || (s = new Uint8Array(32))
            const t = b.getX().toArray("be", 32)
            for (let e = 0; e < 32; ++e) s[e] = t[e]
            c || (c = new Uint8Array(32))
            const r = b.getY().toArray("be", 32)
            for (let e = 0; e < 32; ++e) c[e] = r[e]
            const i = d(s, c, o)
            if (!(i instanceof Uint8Array && i.length === e.length)) return 2
            e.set(i)
          }
          return 0
        }
      }
    },
    59119: function (e) {
      const t = "Impossible case. Please create issue.",
        r = "The tweak was out of range or the resulted private key is invalid",
        i = "The tweak was out of range or equal to zero",
        n = "Unknow error on context randomization",
        f = "Private Key is invalid",
        a = "Public Key could not be parsed",
        o = "Public Key serialization error",
        d = "The sum of the public keys is not valid",
        s = "Signature could not be parsed",
        c =
          "The nonce generation function failed, or the private key was invalid",
        h = "Public key could not be recover",
        u = "Scalar was invalid (zero or overflow)"
      function b(e, t) {
        if (!e) throw new Error(t)
      }
      function l(e, t, r) {
        if (
          (b(t instanceof Uint8Array, `Expected ${e} to be an Uint8Array`),
          void 0 !== r)
        )
          if (Array.isArray(r)) {
            const i = `Expected ${e} to be an Uint8Array with length [${r.join(
              ", "
            )}]`
            b(r.includes(t.length), i)
          } else {
            const i = `Expected ${e} to be an Uint8Array with length ${r}`
            b(t.length === r, i)
          }
      }
      function p(e) {
        b("Boolean" === y(e), "Expected compressed to be a Boolean")
      }
      function m(e = e => new Uint8Array(e), t) {
        return "function" === typeof e && (e = e(t)), l("output", e, t), e
      }
      function y(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
      }
      e.exports = e => ({
        contextRandomize(t) {
          if (
            (b(
              null === t || t instanceof Uint8Array,
              "Expected seed to be an Uint8Array or null"
            ),
            null !== t && l("seed", t, 32),
            1 === e.contextRandomize(t))
          )
            throw new Error(n)
        },
        privateKeyVerify: t => (
          l("private key", t, 32), 0 === e.privateKeyVerify(t)
        ),
        privateKeyNegate(r) {
          switch ((l("private key", r, 32), e.privateKeyNegate(r))) {
            case 0:
              return r
            case 1:
              throw new Error(t)
          }
        },
        privateKeyTweakAdd(t, i) {
          switch (
            (l("private key", t, 32),
            l("tweak", i, 32),
            e.privateKeyTweakAdd(t, i))
          ) {
            case 0:
              return t
            case 1:
              throw new Error(r)
          }
        },
        privateKeyTweakMul(t, r) {
          switch (
            (l("private key", t, 32),
            l("tweak", r, 32),
            e.privateKeyTweakMul(t, r))
          ) {
            case 0:
              return t
            case 1:
              throw new Error(i)
          }
        },
        publicKeyVerify: t => (
          l("public key", t, [33, 65]), 0 === e.publicKeyVerify(t)
        ),
        publicKeyCreate(t, r = !0, i) {
          switch (
            (l("private key", t, 32),
            p(r),
            (i = m(i, r ? 33 : 65)),
            e.publicKeyCreate(i, t))
          ) {
            case 0:
              return i
            case 1:
              throw new Error(f)
            case 2:
              throw new Error(o)
          }
        },
        publicKeyConvert(t, r = !0, i) {
          switch (
            (l("public key", t, [33, 65]),
            p(r),
            (i = m(i, r ? 33 : 65)),
            e.publicKeyConvert(i, t))
          ) {
            case 0:
              return i
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(o)
          }
        },
        publicKeyNegate(r, i = !0, n) {
          switch (
            (l("public key", r, [33, 65]),
            p(i),
            (n = m(n, i ? 33 : 65)),
            e.publicKeyNegate(n, r))
          ) {
            case 0:
              return n
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(t)
            case 3:
              throw new Error(o)
          }
        },
        publicKeyCombine(t, r = !0, i) {
          b(Array.isArray(t), "Expected public keys to be an Array"),
            b(
              t.length > 0,
              "Expected public keys array will have more than zero items"
            )
          for (const e of t) l("public key", e, [33, 65])
          switch ((p(r), (i = m(i, r ? 33 : 65)), e.publicKeyCombine(i, t))) {
            case 0:
              return i
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(d)
            case 3:
              throw new Error(o)
          }
        },
        publicKeyTweakAdd(t, i, n = !0, f) {
          switch (
            (l("public key", t, [33, 65]),
            l("tweak", i, 32),
            p(n),
            (f = m(f, n ? 33 : 65)),
            e.publicKeyTweakAdd(f, t, i))
          ) {
            case 0:
              return f
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(r)
          }
        },
        publicKeyTweakMul(t, r, n = !0, f) {
          switch (
            (l("public key", t, [33, 65]),
            l("tweak", r, 32),
            p(n),
            (f = m(f, n ? 33 : 65)),
            e.publicKeyTweakMul(f, t, r))
          ) {
            case 0:
              return f
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(i)
          }
        },
        signatureNormalize(t) {
          switch ((l("signature", t, 64), e.signatureNormalize(t))) {
            case 0:
              return t
            case 1:
              throw new Error(s)
          }
        },
        signatureExport(r, i) {
          l("signature", r, 64)
          const n = { output: (i = m(i, 72)), outputlen: 72 }
          switch (e.signatureExport(n, r)) {
            case 0:
              return i.slice(0, n.outputlen)
            case 1:
              throw new Error(s)
            case 2:
              throw new Error(t)
          }
        },
        signatureImport(r, i) {
          switch (
            (l("signature", r), (i = m(i, 64)), e.signatureImport(i, r))
          ) {
            case 0:
              return i
            case 1:
              throw new Error(s)
            case 2:
              throw new Error(t)
          }
        },
        ecdsaSign(r, i, n = {}, f) {
          l("message", r, 32),
            l("private key", i, 32),
            b("Object" === y(n), "Expected options to be an Object"),
            void 0 !== n.data && l("options.data", n.data),
            void 0 !== n.noncefn &&
              b(
                "Function" === y(n.noncefn),
                "Expected options.noncefn to be a Function"
              )
          const a = { signature: (f = m(f, 64)), recid: null }
          switch (e.ecdsaSign(a, r, i, n.data, n.noncefn)) {
            case 0:
              return a
            case 1:
              throw new Error(c)
            case 2:
              throw new Error(t)
          }
        },
        ecdsaVerify(t, r, i) {
          switch (
            (l("signature", t, 64),
            l("message", r, 32),
            l("public key", i, [33, 65]),
            e.ecdsaVerify(t, r, i))
          ) {
            case 0:
              return !0
            case 3:
              return !1
            case 1:
              throw new Error(s)
            case 2:
              throw new Error(a)
          }
        },
        ecdsaRecover(r, i, n, f = !0, a) {
          switch (
            (l("signature", r, 64),
            b(
              "Number" === y(i) && i >= 0 && i <= 3,
              "Expected recovery id to be a Number within interval [0, 3]"
            ),
            l("message", n, 32),
            p(f),
            (a = m(a, f ? 33 : 65)),
            e.ecdsaRecover(a, r, i, n))
          ) {
            case 0:
              return a
            case 1:
              throw new Error(s)
            case 2:
              throw new Error(h)
            case 3:
              throw new Error(t)
          }
        },
        ecdh(t, r, i = {}, n) {
          switch (
            (l("public key", t, [33, 65]),
            l("private key", r, 32),
            b("Object" === y(i), "Expected options to be an Object"),
            void 0 !== i.data && l("options.data", i.data),
            void 0 !== i.hashfn
              ? (b(
                  "Function" === y(i.hashfn),
                  "Expected options.hashfn to be a Function"
                ),
                void 0 !== i.xbuf && l("options.xbuf", i.xbuf, 32),
                void 0 !== i.ybuf && l("options.ybuf", i.ybuf, 32),
                l("output", n))
              : (n = m(n, 32)),
            e.ecdh(n, t, r, i.data, i.hashfn, i.xbuf, i.ybuf))
          ) {
            case 0:
              return n
            case 1:
              throw new Error(a)
            case 2:
              throw new Error(u)
          }
        }
      })
    },
    50780: function (e, t, r) {
      !(function (e) {
        "use strict"
        var t = function (e) {
            var t,
              r = new Float64Array(16)
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t]
            return r
          },
          i = function () {
            throw new Error("no PRNG")
          },
          n = new Uint8Array(16),
          f = new Uint8Array(32)
        f[0] = 9
        var a = t(),
          o = t([1]),
          d = t([56129, 1]),
          s = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995
          ]),
          c = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222
          ]),
          h = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553
          ]),
          u = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214
          ]),
          b = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139
          ])
        function l(e, t, r, i) {
          ;(e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (i >> 24) & 255),
            (e[t + 5] = (i >> 16) & 255),
            (e[t + 6] = (i >> 8) & 255),
            (e[t + 7] = 255 & i)
        }
        function p(e, t, r, i, n) {
          var f,
            a = 0
          for (f = 0; f < n; f++) a |= e[t + f] ^ r[i + f]
          return (1 & ((a - 1) >>> 8)) - 1
        }
        function m(e, t, r, i) {
          return p(e, t, r, i, 16)
        }
        function y(e, t, r, i) {
          return p(e, t, r, i, 32)
        }
        function v(e, t, r, i) {
          !(function (e, t, r, i) {
            for (
              var n,
                f =
                  (255 & i[0]) |
                  ((255 & i[1]) << 8) |
                  ((255 & i[2]) << 16) |
                  ((255 & i[3]) << 24),
                a =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                o =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                d =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                s =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                c =
                  (255 & i[4]) |
                  ((255 & i[5]) << 8) |
                  ((255 & i[6]) << 16) |
                  ((255 & i[7]) << 24),
                h =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                u =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                b =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                l =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                p =
                  (255 & i[8]) |
                  ((255 & i[9]) << 8) |
                  ((255 & i[10]) << 16) |
                  ((255 & i[11]) << 24),
                m =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                y =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                v =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                g =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & i[12]) |
                  ((255 & i[13]) << 8) |
                  ((255 & i[14]) << 16) |
                  ((255 & i[15]) << 24),
                M = f,
                _ = a,
                A = o,
                S = d,
                x = s,
                I = c,
                E = h,
                k = u,
                z = b,
                R = l,
                P = p,
                q = m,
                L = y,
                N = v,
                B = g,
                O = w,
                K = 0;
              K < 20;
              K += 2
            )
              (M ^=
                ((n =
                  ((L ^=
                    ((n =
                      ((z ^=
                        ((n =
                          ((x ^= ((n = (M + L) | 0) << 7) | (n >>> 25)) + M) |
                          0) <<
                          9) |
                        (n >>> 23)) +
                        x) |
                      0) <<
                      13) |
                    (n >>> 19)) +
                    z) |
                  0) <<
                  18) |
                (n >>> 14)),
                (I ^=
                  ((n =
                    ((_ ^=
                      ((n =
                        ((N ^=
                          ((n =
                            ((R ^= ((n = (I + _) | 0) << 7) | (n >>> 25)) + I) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          R) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      N) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (P ^=
                  ((n =
                    ((E ^=
                      ((n =
                        ((A ^=
                          ((n =
                            ((B ^= ((n = (P + E) | 0) << 7) | (n >>> 25)) + P) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          B) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      A) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (O ^=
                  ((n =
                    ((q ^=
                      ((n =
                        ((k ^=
                          ((n =
                            ((S ^= ((n = (O + q) | 0) << 7) | (n >>> 25)) + O) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          S) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      k) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (M ^=
                  ((n =
                    ((S ^=
                      ((n =
                        ((A ^=
                          ((n =
                            ((_ ^= ((n = (M + S) | 0) << 7) | (n >>> 25)) + M) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          _) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      A) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (I ^=
                  ((n =
                    ((x ^=
                      ((n =
                        ((k ^=
                          ((n =
                            ((E ^= ((n = (I + x) | 0) << 7) | (n >>> 25)) + I) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          E) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      k) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (P ^=
                  ((n =
                    ((R ^=
                      ((n =
                        ((z ^=
                          ((n =
                            ((q ^= ((n = (P + R) | 0) << 7) | (n >>> 25)) + P) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          q) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      z) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (O ^=
                  ((n =
                    ((B ^=
                      ((n =
                        ((N ^=
                          ((n =
                            ((L ^= ((n = (O + B) | 0) << 7) | (n >>> 25)) + O) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          L) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      N) |
                    0) <<
                    18) |
                  (n >>> 14))
            ;(M = (M + f) | 0),
              (_ = (_ + a) | 0),
              (A = (A + o) | 0),
              (S = (S + d) | 0),
              (x = (x + s) | 0),
              (I = (I + c) | 0),
              (E = (E + h) | 0),
              (k = (k + u) | 0),
              (z = (z + b) | 0),
              (R = (R + l) | 0),
              (P = (P + p) | 0),
              (q = (q + m) | 0),
              (L = (L + y) | 0),
              (N = (N + v) | 0),
              (B = (B + g) | 0),
              (O = (O + w) | 0),
              (e[0] = (M >>> 0) & 255),
              (e[1] = (M >>> 8) & 255),
              (e[2] = (M >>> 16) & 255),
              (e[3] = (M >>> 24) & 255),
              (e[4] = (_ >>> 0) & 255),
              (e[5] = (_ >>> 8) & 255),
              (e[6] = (_ >>> 16) & 255),
              (e[7] = (_ >>> 24) & 255),
              (e[8] = (A >>> 0) & 255),
              (e[9] = (A >>> 8) & 255),
              (e[10] = (A >>> 16) & 255),
              (e[11] = (A >>> 24) & 255),
              (e[12] = (S >>> 0) & 255),
              (e[13] = (S >>> 8) & 255),
              (e[14] = (S >>> 16) & 255),
              (e[15] = (S >>> 24) & 255),
              (e[16] = (x >>> 0) & 255),
              (e[17] = (x >>> 8) & 255),
              (e[18] = (x >>> 16) & 255),
              (e[19] = (x >>> 24) & 255),
              (e[20] = (I >>> 0) & 255),
              (e[21] = (I >>> 8) & 255),
              (e[22] = (I >>> 16) & 255),
              (e[23] = (I >>> 24) & 255),
              (e[24] = (E >>> 0) & 255),
              (e[25] = (E >>> 8) & 255),
              (e[26] = (E >>> 16) & 255),
              (e[27] = (E >>> 24) & 255),
              (e[28] = (k >>> 0) & 255),
              (e[29] = (k >>> 8) & 255),
              (e[30] = (k >>> 16) & 255),
              (e[31] = (k >>> 24) & 255),
              (e[32] = (z >>> 0) & 255),
              (e[33] = (z >>> 8) & 255),
              (e[34] = (z >>> 16) & 255),
              (e[35] = (z >>> 24) & 255),
              (e[36] = (R >>> 0) & 255),
              (e[37] = (R >>> 8) & 255),
              (e[38] = (R >>> 16) & 255),
              (e[39] = (R >>> 24) & 255),
              (e[40] = (P >>> 0) & 255),
              (e[41] = (P >>> 8) & 255),
              (e[42] = (P >>> 16) & 255),
              (e[43] = (P >>> 24) & 255),
              (e[44] = (q >>> 0) & 255),
              (e[45] = (q >>> 8) & 255),
              (e[46] = (q >>> 16) & 255),
              (e[47] = (q >>> 24) & 255),
              (e[48] = (L >>> 0) & 255),
              (e[49] = (L >>> 8) & 255),
              (e[50] = (L >>> 16) & 255),
              (e[51] = (L >>> 24) & 255),
              (e[52] = (N >>> 0) & 255),
              (e[53] = (N >>> 8) & 255),
              (e[54] = (N >>> 16) & 255),
              (e[55] = (N >>> 24) & 255),
              (e[56] = (B >>> 0) & 255),
              (e[57] = (B >>> 8) & 255),
              (e[58] = (B >>> 16) & 255),
              (e[59] = (B >>> 24) & 255),
              (e[60] = (O >>> 0) & 255),
              (e[61] = (O >>> 8) & 255),
              (e[62] = (O >>> 16) & 255),
              (e[63] = (O >>> 24) & 255)
          })(e, t, r, i)
        }
        function g(e, t, r, i) {
          !(function (e, t, r, i) {
            for (
              var n,
                f =
                  (255 & i[0]) |
                  ((255 & i[1]) << 8) |
                  ((255 & i[2]) << 16) |
                  ((255 & i[3]) << 24),
                a =
                  (255 & r[0]) |
                  ((255 & r[1]) << 8) |
                  ((255 & r[2]) << 16) |
                  ((255 & r[3]) << 24),
                o =
                  (255 & r[4]) |
                  ((255 & r[5]) << 8) |
                  ((255 & r[6]) << 16) |
                  ((255 & r[7]) << 24),
                d =
                  (255 & r[8]) |
                  ((255 & r[9]) << 8) |
                  ((255 & r[10]) << 16) |
                  ((255 & r[11]) << 24),
                s =
                  (255 & r[12]) |
                  ((255 & r[13]) << 8) |
                  ((255 & r[14]) << 16) |
                  ((255 & r[15]) << 24),
                c =
                  (255 & i[4]) |
                  ((255 & i[5]) << 8) |
                  ((255 & i[6]) << 16) |
                  ((255 & i[7]) << 24),
                h =
                  (255 & t[0]) |
                  ((255 & t[1]) << 8) |
                  ((255 & t[2]) << 16) |
                  ((255 & t[3]) << 24),
                u =
                  (255 & t[4]) |
                  ((255 & t[5]) << 8) |
                  ((255 & t[6]) << 16) |
                  ((255 & t[7]) << 24),
                b =
                  (255 & t[8]) |
                  ((255 & t[9]) << 8) |
                  ((255 & t[10]) << 16) |
                  ((255 & t[11]) << 24),
                l =
                  (255 & t[12]) |
                  ((255 & t[13]) << 8) |
                  ((255 & t[14]) << 16) |
                  ((255 & t[15]) << 24),
                p =
                  (255 & i[8]) |
                  ((255 & i[9]) << 8) |
                  ((255 & i[10]) << 16) |
                  ((255 & i[11]) << 24),
                m =
                  (255 & r[16]) |
                  ((255 & r[17]) << 8) |
                  ((255 & r[18]) << 16) |
                  ((255 & r[19]) << 24),
                y =
                  (255 & r[20]) |
                  ((255 & r[21]) << 8) |
                  ((255 & r[22]) << 16) |
                  ((255 & r[23]) << 24),
                v =
                  (255 & r[24]) |
                  ((255 & r[25]) << 8) |
                  ((255 & r[26]) << 16) |
                  ((255 & r[27]) << 24),
                g =
                  (255 & r[28]) |
                  ((255 & r[29]) << 8) |
                  ((255 & r[30]) << 16) |
                  ((255 & r[31]) << 24),
                w =
                  (255 & i[12]) |
                  ((255 & i[13]) << 8) |
                  ((255 & i[14]) << 16) |
                  ((255 & i[15]) << 24),
                M = 0;
              M < 20;
              M += 2
            )
              (f ^=
                ((n =
                  ((y ^=
                    ((n =
                      ((b ^=
                        ((n =
                          ((s ^= ((n = (f + y) | 0) << 7) | (n >>> 25)) + f) |
                          0) <<
                          9) |
                        (n >>> 23)) +
                        s) |
                      0) <<
                      13) |
                    (n >>> 19)) +
                    b) |
                  0) <<
                  18) |
                (n >>> 14)),
                (c ^=
                  ((n =
                    ((a ^=
                      ((n =
                        ((v ^=
                          ((n =
                            ((l ^= ((n = (c + a) | 0) << 7) | (n >>> 25)) + c) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          l) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      v) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (p ^=
                  ((n =
                    ((h ^=
                      ((n =
                        ((o ^=
                          ((n =
                            ((g ^= ((n = (p + h) | 0) << 7) | (n >>> 25)) + p) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          g) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      o) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (w ^=
                  ((n =
                    ((m ^=
                      ((n =
                        ((u ^=
                          ((n =
                            ((d ^= ((n = (w + m) | 0) << 7) | (n >>> 25)) + w) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          d) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      u) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (f ^=
                  ((n =
                    ((d ^=
                      ((n =
                        ((o ^=
                          ((n =
                            ((a ^= ((n = (f + d) | 0) << 7) | (n >>> 25)) + f) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          a) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      o) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (c ^=
                  ((n =
                    ((s ^=
                      ((n =
                        ((u ^=
                          ((n =
                            ((h ^= ((n = (c + s) | 0) << 7) | (n >>> 25)) + c) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          h) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      u) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (p ^=
                  ((n =
                    ((l ^=
                      ((n =
                        ((b ^=
                          ((n =
                            ((m ^= ((n = (p + l) | 0) << 7) | (n >>> 25)) + p) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          m) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      b) |
                    0) <<
                    18) |
                  (n >>> 14)),
                (w ^=
                  ((n =
                    ((g ^=
                      ((n =
                        ((v ^=
                          ((n =
                            ((y ^= ((n = (w + g) | 0) << 7) | (n >>> 25)) + w) |
                            0) <<
                            9) |
                          (n >>> 23)) +
                          y) |
                        0) <<
                        13) |
                      (n >>> 19)) +
                      v) |
                    0) <<
                    18) |
                  (n >>> 14))
            ;(e[0] = (f >>> 0) & 255),
              (e[1] = (f >>> 8) & 255),
              (e[2] = (f >>> 16) & 255),
              (e[3] = (f >>> 24) & 255),
              (e[4] = (c >>> 0) & 255),
              (e[5] = (c >>> 8) & 255),
              (e[6] = (c >>> 16) & 255),
              (e[7] = (c >>> 24) & 255),
              (e[8] = (p >>> 0) & 255),
              (e[9] = (p >>> 8) & 255),
              (e[10] = (p >>> 16) & 255),
              (e[11] = (p >>> 24) & 255),
              (e[12] = (w >>> 0) & 255),
              (e[13] = (w >>> 8) & 255),
              (e[14] = (w >>> 16) & 255),
              (e[15] = (w >>> 24) & 255),
              (e[16] = (h >>> 0) & 255),
              (e[17] = (h >>> 8) & 255),
              (e[18] = (h >>> 16) & 255),
              (e[19] = (h >>> 24) & 255),
              (e[20] = (u >>> 0) & 255),
              (e[21] = (u >>> 8) & 255),
              (e[22] = (u >>> 16) & 255),
              (e[23] = (u >>> 24) & 255),
              (e[24] = (b >>> 0) & 255),
              (e[25] = (b >>> 8) & 255),
              (e[26] = (b >>> 16) & 255),
              (e[27] = (b >>> 24) & 255),
              (e[28] = (l >>> 0) & 255),
              (e[29] = (l >>> 8) & 255),
              (e[30] = (l >>> 16) & 255),
              (e[31] = (l >>> 24) & 255)
          })(e, t, r, i)
        }
        var w = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107
        ])
        function M(e, t, r, i, n, f, a) {
          var o,
            d,
            s = new Uint8Array(16),
            c = new Uint8Array(64)
          for (d = 0; d < 16; d++) s[d] = 0
          for (d = 0; d < 8; d++) s[d] = f[d]
          for (; n >= 64; ) {
            for (v(c, s, a, w), d = 0; d < 64; d++) e[t + d] = r[i + d] ^ c[d]
            for (o = 1, d = 8; d < 16; d++)
              (o = (o + (255 & s[d])) | 0), (s[d] = 255 & o), (o >>>= 8)
            ;(n -= 64), (t += 64), (i += 64)
          }
          if (n > 0)
            for (v(c, s, a, w), d = 0; d < n; d++) e[t + d] = r[i + d] ^ c[d]
          return 0
        }
        function _(e, t, r, i, n) {
          var f,
            a,
            o = new Uint8Array(16),
            d = new Uint8Array(64)
          for (a = 0; a < 16; a++) o[a] = 0
          for (a = 0; a < 8; a++) o[a] = i[a]
          for (; r >= 64; ) {
            for (v(d, o, n, w), a = 0; a < 64; a++) e[t + a] = d[a]
            for (f = 1, a = 8; a < 16; a++)
              (f = (f + (255 & o[a])) | 0), (o[a] = 255 & f), (f >>>= 8)
            ;(r -= 64), (t += 64)
          }
          if (r > 0) for (v(d, o, n, w), a = 0; a < r; a++) e[t + a] = d[a]
          return 0
        }
        function A(e, t, r, i, n) {
          var f = new Uint8Array(32)
          g(f, i, n, w)
          for (var a = new Uint8Array(8), o = 0; o < 8; o++) a[o] = i[o + 16]
          return _(e, t, r, a, f)
        }
        function S(e, t, r, i, n, f, a) {
          var o = new Uint8Array(32)
          g(o, f, a, w)
          for (var d = new Uint8Array(8), s = 0; s < 8; s++) d[s] = f[s + 16]
          return M(e, t, r, i, n, d, o)
        }
        var x = function (e) {
          var t, r, i, n, f, a, o, d
          ;(this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (i = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (i << 6))),
            (n = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((i >>> 7) | (n << 9))),
            (f = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((n >>> 4) | (f << 12))),
            (this.r[5] = (f >>> 1) & 8190),
            (a = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((f >>> 14) | (a << 2))),
            (o = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((a >>> 11) | (o << 5))),
            (d = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((o >>> 8) | (d << 8))),
            (this.r[9] = (d >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8))
        }
        function I(e, t, r, i, n, f) {
          var a = new x(f)
          return a.update(r, i, n), a.finish(e, t), 0
        }
        function E(e, t, r, i, n, f) {
          var a = new Uint8Array(16)
          return I(a, 0, r, i, n, f), m(e, t, a, 0)
        }
        function k(e, t, r, i, n) {
          var f
          if (r < 32) return -1
          for (
            S(e, 0, t, 0, r, i, n), I(e, 16, e, 32, r - 32, e), f = 0;
            f < 16;
            f++
          )
            e[f] = 0
          return 0
        }
        function z(e, t, r, i, n) {
          var f,
            a = new Uint8Array(32)
          if (r < 32) return -1
          if ((A(a, 0, 32, i, n), 0 !== E(t, 16, t, 32, r - 32, a))) return -1
          for (S(e, 0, t, 0, r, i, n), f = 0; f < 32; f++) e[f] = 0
          return 0
        }
        function R(e, t) {
          var r
          for (r = 0; r < 16; r++) e[r] = 0 | t[r]
        }
        function P(e) {
          var t,
            r,
            i = 1
          for (t = 0; t < 16; t++)
            (r = e[t] + i + 65535),
              (i = Math.floor(r / 65536)),
              (e[t] = r - 65536 * i)
          e[0] += i - 1 + 37 * (i - 1)
        }
        function q(e, t, r) {
          for (var i, n = ~(r - 1), f = 0; f < 16; f++)
            (i = n & (e[f] ^ t[f])), (e[f] ^= i), (t[f] ^= i)
        }
        function L(e, r) {
          var i,
            n,
            f,
            a = t(),
            o = t()
          for (i = 0; i < 16; i++) o[i] = r[i]
          for (P(o), P(o), P(o), n = 0; n < 2; n++) {
            for (a[0] = o[0] - 65517, i = 1; i < 15; i++)
              (a[i] = o[i] - 65535 - ((a[i - 1] >> 16) & 1)),
                (a[i - 1] &= 65535)
            ;(a[15] = o[15] - 32767 - ((a[14] >> 16) & 1)),
              (f = (a[15] >> 16) & 1),
              (a[14] &= 65535),
              q(o, a, 1 - f)
          }
          for (i = 0; i < 16; i++)
            (e[2 * i] = 255 & o[i]), (e[2 * i + 1] = o[i] >> 8)
        }
        function N(e, t) {
          var r = new Uint8Array(32),
            i = new Uint8Array(32)
          return L(r, e), L(i, t), y(r, 0, i, 0)
        }
        function B(e) {
          var t = new Uint8Array(32)
          return L(t, e), 1 & t[0]
        }
        function O(e, t) {
          var r
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8)
          e[15] &= 32767
        }
        function K(e, t, r) {
          for (var i = 0; i < 16; i++) e[i] = t[i] + r[i]
        }
        function T(e, t, r) {
          for (var i = 0; i < 16; i++) e[i] = t[i] - r[i]
        }
        function U(e, t, r) {
          var i,
            n,
            f = 0,
            a = 0,
            o = 0,
            d = 0,
            s = 0,
            c = 0,
            h = 0,
            u = 0,
            b = 0,
            l = 0,
            p = 0,
            m = 0,
            y = 0,
            v = 0,
            g = 0,
            w = 0,
            M = 0,
            _ = 0,
            A = 0,
            S = 0,
            x = 0,
            I = 0,
            E = 0,
            k = 0,
            z = 0,
            R = 0,
            P = 0,
            q = 0,
            L = 0,
            N = 0,
            B = 0,
            O = r[0],
            K = r[1],
            T = r[2],
            U = r[3],
            j = r[4],
            D = r[5],
            C = r[6],
            Z = r[7],
            F = r[8],
            J = r[9],
            H = r[10],
            W = r[11],
            Y = r[12],
            V = r[13],
            X = r[14],
            $ = r[15]
          ;(f += (i = t[0]) * O),
            (a += i * K),
            (o += i * T),
            (d += i * U),
            (s += i * j),
            (c += i * D),
            (h += i * C),
            (u += i * Z),
            (b += i * F),
            (l += i * J),
            (p += i * H),
            (m += i * W),
            (y += i * Y),
            (v += i * V),
            (g += i * X),
            (w += i * $),
            (a += (i = t[1]) * O),
            (o += i * K),
            (d += i * T),
            (s += i * U),
            (c += i * j),
            (h += i * D),
            (u += i * C),
            (b += i * Z),
            (l += i * F),
            (p += i * J),
            (m += i * H),
            (y += i * W),
            (v += i * Y),
            (g += i * V),
            (w += i * X),
            (M += i * $),
            (o += (i = t[2]) * O),
            (d += i * K),
            (s += i * T),
            (c += i * U),
            (h += i * j),
            (u += i * D),
            (b += i * C),
            (l += i * Z),
            (p += i * F),
            (m += i * J),
            (y += i * H),
            (v += i * W),
            (g += i * Y),
            (w += i * V),
            (M += i * X),
            (_ += i * $),
            (d += (i = t[3]) * O),
            (s += i * K),
            (c += i * T),
            (h += i * U),
            (u += i * j),
            (b += i * D),
            (l += i * C),
            (p += i * Z),
            (m += i * F),
            (y += i * J),
            (v += i * H),
            (g += i * W),
            (w += i * Y),
            (M += i * V),
            (_ += i * X),
            (A += i * $),
            (s += (i = t[4]) * O),
            (c += i * K),
            (h += i * T),
            (u += i * U),
            (b += i * j),
            (l += i * D),
            (p += i * C),
            (m += i * Z),
            (y += i * F),
            (v += i * J),
            (g += i * H),
            (w += i * W),
            (M += i * Y),
            (_ += i * V),
            (A += i * X),
            (S += i * $),
            (c += (i = t[5]) * O),
            (h += i * K),
            (u += i * T),
            (b += i * U),
            (l += i * j),
            (p += i * D),
            (m += i * C),
            (y += i * Z),
            (v += i * F),
            (g += i * J),
            (w += i * H),
            (M += i * W),
            (_ += i * Y),
            (A += i * V),
            (S += i * X),
            (x += i * $),
            (h += (i = t[6]) * O),
            (u += i * K),
            (b += i * T),
            (l += i * U),
            (p += i * j),
            (m += i * D),
            (y += i * C),
            (v += i * Z),
            (g += i * F),
            (w += i * J),
            (M += i * H),
            (_ += i * W),
            (A += i * Y),
            (S += i * V),
            (x += i * X),
            (I += i * $),
            (u += (i = t[7]) * O),
            (b += i * K),
            (l += i * T),
            (p += i * U),
            (m += i * j),
            (y += i * D),
            (v += i * C),
            (g += i * Z),
            (w += i * F),
            (M += i * J),
            (_ += i * H),
            (A += i * W),
            (S += i * Y),
            (x += i * V),
            (I += i * X),
            (E += i * $),
            (b += (i = t[8]) * O),
            (l += i * K),
            (p += i * T),
            (m += i * U),
            (y += i * j),
            (v += i * D),
            (g += i * C),
            (w += i * Z),
            (M += i * F),
            (_ += i * J),
            (A += i * H),
            (S += i * W),
            (x += i * Y),
            (I += i * V),
            (E += i * X),
            (k += i * $),
            (l += (i = t[9]) * O),
            (p += i * K),
            (m += i * T),
            (y += i * U),
            (v += i * j),
            (g += i * D),
            (w += i * C),
            (M += i * Z),
            (_ += i * F),
            (A += i * J),
            (S += i * H),
            (x += i * W),
            (I += i * Y),
            (E += i * V),
            (k += i * X),
            (z += i * $),
            (p += (i = t[10]) * O),
            (m += i * K),
            (y += i * T),
            (v += i * U),
            (g += i * j),
            (w += i * D),
            (M += i * C),
            (_ += i * Z),
            (A += i * F),
            (S += i * J),
            (x += i * H),
            (I += i * W),
            (E += i * Y),
            (k += i * V),
            (z += i * X),
            (R += i * $),
            (m += (i = t[11]) * O),
            (y += i * K),
            (v += i * T),
            (g += i * U),
            (w += i * j),
            (M += i * D),
            (_ += i * C),
            (A += i * Z),
            (S += i * F),
            (x += i * J),
            (I += i * H),
            (E += i * W),
            (k += i * Y),
            (z += i * V),
            (R += i * X),
            (P += i * $),
            (y += (i = t[12]) * O),
            (v += i * K),
            (g += i * T),
            (w += i * U),
            (M += i * j),
            (_ += i * D),
            (A += i * C),
            (S += i * Z),
            (x += i * F),
            (I += i * J),
            (E += i * H),
            (k += i * W),
            (z += i * Y),
            (R += i * V),
            (P += i * X),
            (q += i * $),
            (v += (i = t[13]) * O),
            (g += i * K),
            (w += i * T),
            (M += i * U),
            (_ += i * j),
            (A += i * D),
            (S += i * C),
            (x += i * Z),
            (I += i * F),
            (E += i * J),
            (k += i * H),
            (z += i * W),
            (R += i * Y),
            (P += i * V),
            (q += i * X),
            (L += i * $),
            (g += (i = t[14]) * O),
            (w += i * K),
            (M += i * T),
            (_ += i * U),
            (A += i * j),
            (S += i * D),
            (x += i * C),
            (I += i * Z),
            (E += i * F),
            (k += i * J),
            (z += i * H),
            (R += i * W),
            (P += i * Y),
            (q += i * V),
            (L += i * X),
            (N += i * $),
            (w += (i = t[15]) * O),
            (a += 38 * (_ += i * T)),
            (o += 38 * (A += i * U)),
            (d += 38 * (S += i * j)),
            (s += 38 * (x += i * D)),
            (c += 38 * (I += i * C)),
            (h += 38 * (E += i * Z)),
            (u += 38 * (k += i * F)),
            (b += 38 * (z += i * J)),
            (l += 38 * (R += i * H)),
            (p += 38 * (P += i * W)),
            (m += 38 * (q += i * Y)),
            (y += 38 * (L += i * V)),
            (v += 38 * (N += i * X)),
            (g += 38 * (B += i * $)),
            (f =
              (i = (f += 38 * (M += i * K)) + (n = 1) + 65535) -
              65536 * (n = Math.floor(i / 65536))),
            (a = (i = a + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (o = (i = o + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (d = (i = d + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (s = (i = s + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (c = (i = c + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (h = (i = h + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (u = (i = u + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (b = (i = b + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (l = (i = l + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (p = (i = p + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (m = (i = m + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (y = (i = y + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (v = (i = v + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (g = (i = g + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (w = (i = w + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (f =
              (i = (f += n - 1 + 37 * (n - 1)) + (n = 1) + 65535) -
              65536 * (n = Math.floor(i / 65536))),
            (a = (i = a + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (o = (i = o + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (d = (i = d + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (s = (i = s + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (c = (i = c + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (h = (i = h + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (u = (i = u + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (b = (i = b + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (l = (i = l + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (p = (i = p + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (m = (i = m + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (y = (i = y + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (v = (i = v + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (g = (i = g + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (w = (i = w + n + 65535) - 65536 * (n = Math.floor(i / 65536))),
            (f += n - 1 + 37 * (n - 1)),
            (e[0] = f),
            (e[1] = a),
            (e[2] = o),
            (e[3] = d),
            (e[4] = s),
            (e[5] = c),
            (e[6] = h),
            (e[7] = u),
            (e[8] = b),
            (e[9] = l),
            (e[10] = p),
            (e[11] = m),
            (e[12] = y),
            (e[13] = v),
            (e[14] = g),
            (e[15] = w)
        }
        function j(e, t) {
          U(e, t, t)
        }
        function D(e, r) {
          var i,
            n = t()
          for (i = 0; i < 16; i++) n[i] = r[i]
          for (i = 253; i >= 0; i--) j(n, n), 2 !== i && 4 !== i && U(n, n, r)
          for (i = 0; i < 16; i++) e[i] = n[i]
        }
        function C(e, r) {
          var i,
            n = t()
          for (i = 0; i < 16; i++) n[i] = r[i]
          for (i = 250; i >= 0; i--) j(n, n), 1 !== i && U(n, n, r)
          for (i = 0; i < 16; i++) e[i] = n[i]
        }
        function Z(e, r, i) {
          var n,
            f,
            a = new Uint8Array(32),
            o = new Float64Array(80),
            s = t(),
            c = t(),
            h = t(),
            u = t(),
            b = t(),
            l = t()
          for (f = 0; f < 31; f++) a[f] = r[f]
          for (
            a[31] = (127 & r[31]) | 64, a[0] &= 248, O(o, i), f = 0;
            f < 16;
            f++
          )
            (c[f] = o[f]), (u[f] = s[f] = h[f] = 0)
          for (s[0] = u[0] = 1, f = 254; f >= 0; --f)
            q(s, c, (n = (a[f >>> 3] >>> (7 & f)) & 1)),
              q(h, u, n),
              K(b, s, h),
              T(s, s, h),
              K(h, c, u),
              T(c, c, u),
              j(u, b),
              j(l, s),
              U(s, h, s),
              U(h, c, b),
              K(b, s, h),
              T(s, s, h),
              j(c, s),
              T(h, u, l),
              U(s, h, d),
              K(s, s, u),
              U(h, h, s),
              U(s, u, l),
              U(u, c, o),
              j(c, b),
              q(s, c, n),
              q(h, u, n)
          for (f = 0; f < 16; f++)
            (o[f + 16] = s[f]),
              (o[f + 32] = h[f]),
              (o[f + 48] = c[f]),
              (o[f + 64] = u[f])
          var p = o.subarray(32),
            m = o.subarray(16)
          return D(p, p), U(m, m, p), L(e, m), 0
        }
        function F(e, t) {
          return Z(e, t, f)
        }
        function J(e, t) {
          return i(t, 32), F(e, t)
        }
        function H(e, t, r) {
          var i = new Uint8Array(32)
          return Z(i, r, t), g(e, n, i, w)
        }
        ;(x.prototype.blocks = function (e, t, r) {
          for (
            var i,
              n,
              f,
              a,
              o,
              d,
              s,
              c,
              h,
              u,
              b,
              l,
              p,
              m,
              y,
              v,
              g,
              w,
              M,
              _ = this.fin ? 0 : 2048,
              A = this.h[0],
              S = this.h[1],
              x = this.h[2],
              I = this.h[3],
              E = this.h[4],
              k = this.h[5],
              z = this.h[6],
              R = this.h[7],
              P = this.h[8],
              q = this.h[9],
              L = this.r[0],
              N = this.r[1],
              B = this.r[2],
              O = this.r[3],
              K = this.r[4],
              T = this.r[5],
              U = this.r[6],
              j = this.r[7],
              D = this.r[8],
              C = this.r[9];
            r >= 16;

          )
            (u = h = 0),
              (u +=
                (A += 8191 & (i = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8))) *
                L),
              (u +=
                (S +=
                  8191 &
                  ((i >>> 13) |
                    ((n = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)) << 3))) *
                (5 * C)),
              (u +=
                (x +=
                  8191 &
                  ((n >>> 10) |
                    ((f = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)) << 6))) *
                (5 * D)),
              (u +=
                (I +=
                  8191 &
                  ((f >>> 7) |
                    ((a = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)) << 9))) *
                (5 * j)),
              (h =
                (u +=
                  (E +=
                    8191 &
                    ((a >>> 4) |
                      ((o = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)) <<
                        12))) *
                  (5 * U)) >>> 13),
              (u &= 8191),
              (u += (k += (o >>> 1) & 8191) * (5 * T)),
              (u +=
                (z +=
                  8191 &
                  ((o >>> 14) |
                    ((d = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)) <<
                      2))) *
                (5 * K)),
              (u +=
                (R +=
                  8191 &
                  ((d >>> 11) |
                    ((s = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)) <<
                      5))) *
                (5 * O)),
              (u +=
                (P +=
                  8191 &
                  ((s >>> 8) |
                    ((c = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)) <<
                      8))) *
                (5 * B)),
              (b = h += (u += (q += (c >>> 5) | _) * (5 * N)) >>> 13),
              (b += A * N),
              (b += S * L),
              (b += x * (5 * C)),
              (b += I * (5 * D)),
              (h = (b += E * (5 * j)) >>> 13),
              (b &= 8191),
              (b += k * (5 * U)),
              (b += z * (5 * T)),
              (b += R * (5 * K)),
              (b += P * (5 * O)),
              (h += (b += q * (5 * B)) >>> 13),
              (b &= 8191),
              (l = h),
              (l += A * B),
              (l += S * N),
              (l += x * L),
              (l += I * (5 * C)),
              (h = (l += E * (5 * D)) >>> 13),
              (l &= 8191),
              (l += k * (5 * j)),
              (l += z * (5 * U)),
              (l += R * (5 * T)),
              (l += P * (5 * K)),
              (p = h += (l += q * (5 * O)) >>> 13),
              (p += A * O),
              (p += S * B),
              (p += x * N),
              (p += I * L),
              (h = (p += E * (5 * C)) >>> 13),
              (p &= 8191),
              (p += k * (5 * D)),
              (p += z * (5 * j)),
              (p += R * (5 * U)),
              (p += P * (5 * T)),
              (m = h += (p += q * (5 * K)) >>> 13),
              (m += A * K),
              (m += S * O),
              (m += x * B),
              (m += I * N),
              (h = (m += E * L) >>> 13),
              (m &= 8191),
              (m += k * (5 * C)),
              (m += z * (5 * D)),
              (m += R * (5 * j)),
              (m += P * (5 * U)),
              (y = h += (m += q * (5 * T)) >>> 13),
              (y += A * T),
              (y += S * K),
              (y += x * O),
              (y += I * B),
              (h = (y += E * N) >>> 13),
              (y &= 8191),
              (y += k * L),
              (y += z * (5 * C)),
              (y += R * (5 * D)),
              (y += P * (5 * j)),
              (v = h += (y += q * (5 * U)) >>> 13),
              (v += A * U),
              (v += S * T),
              (v += x * K),
              (v += I * O),
              (h = (v += E * B) >>> 13),
              (v &= 8191),
              (v += k * N),
              (v += z * L),
              (v += R * (5 * C)),
              (v += P * (5 * D)),
              (g = h += (v += q * (5 * j)) >>> 13),
              (g += A * j),
              (g += S * U),
              (g += x * T),
              (g += I * K),
              (h = (g += E * O) >>> 13),
              (g &= 8191),
              (g += k * B),
              (g += z * N),
              (g += R * L),
              (g += P * (5 * C)),
              (w = h += (g += q * (5 * D)) >>> 13),
              (w += A * D),
              (w += S * j),
              (w += x * U),
              (w += I * T),
              (h = (w += E * K) >>> 13),
              (w &= 8191),
              (w += k * O),
              (w += z * B),
              (w += R * N),
              (w += P * L),
              (M = h += (w += q * (5 * C)) >>> 13),
              (M += A * C),
              (M += S * D),
              (M += x * j),
              (M += I * U),
              (h = (M += E * T) >>> 13),
              (M &= 8191),
              (M += k * K),
              (M += z * O),
              (M += R * B),
              (M += P * N),
              (A = u =
                8191 &
                (h =
                  ((h = (((h += (M += q * L) >>> 13) << 2) + h) | 0) +
                    (u &= 8191)) |
                  0)),
              (S = b += h >>>= 13),
              (x = l &= 8191),
              (I = p &= 8191),
              (E = m &= 8191),
              (k = y &= 8191),
              (z = v &= 8191),
              (R = g &= 8191),
              (P = w &= 8191),
              (q = M &= 8191),
              (t += 16),
              (r -= 16)
          ;(this.h[0] = A),
            (this.h[1] = S),
            (this.h[2] = x),
            (this.h[3] = I),
            (this.h[4] = E),
            (this.h[5] = k),
            (this.h[6] = z),
            (this.h[7] = R),
            (this.h[8] = P),
            (this.h[9] = q)
        }),
          (x.prototype.finish = function (e, t) {
            var r,
              i,
              n,
              f,
              a = new Uint16Array(10)
            if (this.leftover) {
              for (f = this.leftover, this.buffer[f++] = 1; f < 16; f++)
                this.buffer[f] = 0
              ;(this.fin = 1), this.blocks(this.buffer, 0, 16)
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, f = 2; f < 10; f++)
              (this.h[f] += r), (r = this.h[f] >>> 13), (this.h[f] &= 8191)
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                a[0] = this.h[0] + 5,
                r = a[0] >>> 13,
                a[0] &= 8191,
                f = 1;
              f < 10;
              f++
            )
              (a[f] = this.h[f] + r), (r = a[f] >>> 13), (a[f] &= 8191)
            for (a[9] -= 8192, i = (1 ^ r) - 1, f = 0; f < 10; f++) a[f] &= i
            for (i = ~i, f = 0; f < 10; f++) this.h[f] = (this.h[f] & i) | a[f]
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                n = this.h[0] + this.pad[0],
                this.h[0] = 65535 & n,
                f = 1;
              f < 8;
              f++
            )
              (n = (((this.h[f] + this.pad[f]) | 0) + (n >>> 16)) | 0),
                (this.h[f] = 65535 & n)
            ;(e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255)
          }),
          (x.prototype.update = function (e, t, r) {
            var i, n
            if (this.leftover) {
              for ((n = 16 - this.leftover) > r && (n = r), i = 0; i < n; i++)
                this.buffer[this.leftover + i] = e[t + i]
              if (
                ((r -= n), (t += n), (this.leftover += n), this.leftover < 16)
              )
                return
              this.blocks(this.buffer, 0, 16), (this.leftover = 0)
            }
            if (
              (r >= 16 &&
                ((n = r - (r % 16)), this.blocks(e, t, n), (t += n), (r -= n)),
              r)
            ) {
              for (i = 0; i < r; i++) this.buffer[this.leftover + i] = e[t + i]
              this.leftover += r
            }
          })
        var W = k,
          Y = z
        var V = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591
        ]
        function X(e, t, r, i) {
          for (
            var n,
              f,
              a,
              o,
              d,
              s,
              c,
              h,
              u,
              b,
              l,
              p,
              m,
              y,
              v,
              g,
              w,
              M,
              _,
              A,
              S,
              x,
              I,
              E,
              k,
              z,
              R = new Int32Array(16),
              P = new Int32Array(16),
              q = e[0],
              L = e[1],
              N = e[2],
              B = e[3],
              O = e[4],
              K = e[5],
              T = e[6],
              U = e[7],
              j = t[0],
              D = t[1],
              C = t[2],
              Z = t[3],
              F = t[4],
              J = t[5],
              H = t[6],
              W = t[7],
              Y = 0;
            i >= 128;

          ) {
            for (_ = 0; _ < 16; _++)
              (A = 8 * _ + Y),
                (R[_] =
                  (r[A + 0] << 24) |
                  (r[A + 1] << 16) |
                  (r[A + 2] << 8) |
                  r[A + 3]),
                (P[_] =
                  (r[A + 4] << 24) |
                  (r[A + 5] << 16) |
                  (r[A + 6] << 8) |
                  r[A + 7])
            for (_ = 0; _ < 80; _++)
              if (
                ((n = q),
                (f = L),
                (a = N),
                (o = B),
                (d = O),
                (s = K),
                (c = T),
                U,
                (u = j),
                (b = D),
                (l = C),
                (p = Z),
                (m = F),
                (y = J),
                (v = H),
                W,
                (I = 65535 & (x = W)),
                (E = x >>> 16),
                (k = 65535 & (S = U)),
                (z = S >>> 16),
                (I +=
                  65535 &
                  (x =
                    ((F >>> 14) | (O << 18)) ^
                    ((F >>> 18) | (O << 14)) ^
                    ((O >>> 9) | (F << 23)))),
                (E += x >>> 16),
                (k +=
                  65535 &
                  (S =
                    ((O >>> 14) | (F << 18)) ^
                    ((O >>> 18) | (F << 14)) ^
                    ((F >>> 9) | (O << 23)))),
                (z += S >>> 16),
                (I += 65535 & (x = (F & J) ^ (~F & H))),
                (E += x >>> 16),
                (k += 65535 & (S = (O & K) ^ (~O & T))),
                (z += S >>> 16),
                (I += 65535 & (x = V[2 * _ + 1])),
                (E += x >>> 16),
                (k += 65535 & (S = V[2 * _])),
                (z += S >>> 16),
                (S = R[_ % 16]),
                (E += (x = P[_ % 16]) >>> 16),
                (k += 65535 & S),
                (z += S >>> 16),
                (k += (E += (I += 65535 & x) >>> 16) >>> 16),
                (I = 65535 & (x = M = (65535 & I) | (E << 16))),
                (E = x >>> 16),
                (k = 65535 & (S = w = (65535 & k) | ((z += k >>> 16) << 16))),
                (z = S >>> 16),
                (I +=
                  65535 &
                  (x =
                    ((j >>> 28) | (q << 4)) ^
                    ((q >>> 2) | (j << 30)) ^
                    ((q >>> 7) | (j << 25)))),
                (E += x >>> 16),
                (k +=
                  65535 &
                  (S =
                    ((q >>> 28) | (j << 4)) ^
                    ((j >>> 2) | (q << 30)) ^
                    ((j >>> 7) | (q << 25)))),
                (z += S >>> 16),
                (E += (x = (j & D) ^ (j & C) ^ (D & C)) >>> 16),
                (k += 65535 & (S = (q & L) ^ (q & N) ^ (L & N))),
                (z += S >>> 16),
                (h =
                  (65535 & (k += (E += (I += 65535 & x) >>> 16) >>> 16)) |
                  ((z += k >>> 16) << 16)),
                (g = (65535 & I) | (E << 16)),
                (I = 65535 & (x = p)),
                (E = x >>> 16),
                (k = 65535 & (S = o)),
                (z = S >>> 16),
                (E += (x = M) >>> 16),
                (k += 65535 & (S = w)),
                (z += S >>> 16),
                (L = n),
                (N = f),
                (B = a),
                (O = o =
                  (65535 & (k += (E += (I += 65535 & x) >>> 16) >>> 16)) |
                  ((z += k >>> 16) << 16)),
                (K = d),
                (T = s),
                (U = c),
                (q = h),
                (D = u),
                (C = b),
                (Z = l),
                (F = p = (65535 & I) | (E << 16)),
                (J = m),
                (H = y),
                (W = v),
                (j = g),
                _ % 16 === 15)
              )
                for (A = 0; A < 16; A++)
                  (S = R[A]),
                    (I = 65535 & (x = P[A])),
                    (E = x >>> 16),
                    (k = 65535 & S),
                    (z = S >>> 16),
                    (S = R[(A + 9) % 16]),
                    (I += 65535 & (x = P[(A + 9) % 16])),
                    (E += x >>> 16),
                    (k += 65535 & S),
                    (z += S >>> 16),
                    (w = R[(A + 1) % 16]),
                    (I +=
                      65535 &
                      (x =
                        (((M = P[(A + 1) % 16]) >>> 1) | (w << 31)) ^
                        ((M >>> 8) | (w << 24)) ^
                        ((M >>> 7) | (w << 25)))),
                    (E += x >>> 16),
                    (k +=
                      65535 &
                      (S =
                        ((w >>> 1) | (M << 31)) ^
                        ((w >>> 8) | (M << 24)) ^
                        (w >>> 7))),
                    (z += S >>> 16),
                    (w = R[(A + 14) % 16]),
                    (E +=
                      (x =
                        (((M = P[(A + 14) % 16]) >>> 19) | (w << 13)) ^
                        ((w >>> 29) | (M << 3)) ^
                        ((M >>> 6) | (w << 26))) >>> 16),
                    (k +=
                      65535 &
                      (S =
                        ((w >>> 19) | (M << 13)) ^
                        ((M >>> 29) | (w << 3)) ^
                        (w >>> 6))),
                    (z += S >>> 16),
                    (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
                    (R[A] = (65535 & k) | (z << 16)),
                    (P[A] = (65535 & I) | (E << 16))
            ;(I = 65535 & (x = j)),
              (E = x >>> 16),
              (k = 65535 & (S = q)),
              (z = S >>> 16),
              (S = e[0]),
              (E += (x = t[0]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[0] = q = (65535 & k) | (z << 16)),
              (t[0] = j = (65535 & I) | (E << 16)),
              (I = 65535 & (x = D)),
              (E = x >>> 16),
              (k = 65535 & (S = L)),
              (z = S >>> 16),
              (S = e[1]),
              (E += (x = t[1]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[1] = L = (65535 & k) | (z << 16)),
              (t[1] = D = (65535 & I) | (E << 16)),
              (I = 65535 & (x = C)),
              (E = x >>> 16),
              (k = 65535 & (S = N)),
              (z = S >>> 16),
              (S = e[2]),
              (E += (x = t[2]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[2] = N = (65535 & k) | (z << 16)),
              (t[2] = C = (65535 & I) | (E << 16)),
              (I = 65535 & (x = Z)),
              (E = x >>> 16),
              (k = 65535 & (S = B)),
              (z = S >>> 16),
              (S = e[3]),
              (E += (x = t[3]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[3] = B = (65535 & k) | (z << 16)),
              (t[3] = Z = (65535 & I) | (E << 16)),
              (I = 65535 & (x = F)),
              (E = x >>> 16),
              (k = 65535 & (S = O)),
              (z = S >>> 16),
              (S = e[4]),
              (E += (x = t[4]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[4] = O = (65535 & k) | (z << 16)),
              (t[4] = F = (65535 & I) | (E << 16)),
              (I = 65535 & (x = J)),
              (E = x >>> 16),
              (k = 65535 & (S = K)),
              (z = S >>> 16),
              (S = e[5]),
              (E += (x = t[5]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[5] = K = (65535 & k) | (z << 16)),
              (t[5] = J = (65535 & I) | (E << 16)),
              (I = 65535 & (x = H)),
              (E = x >>> 16),
              (k = 65535 & (S = T)),
              (z = S >>> 16),
              (S = e[6]),
              (E += (x = t[6]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[6] = T = (65535 & k) | (z << 16)),
              (t[6] = H = (65535 & I) | (E << 16)),
              (I = 65535 & (x = W)),
              (E = x >>> 16),
              (k = 65535 & (S = U)),
              (z = S >>> 16),
              (S = e[7]),
              (E += (x = t[7]) >>> 16),
              (k += 65535 & S),
              (z += S >>> 16),
              (z += (k += (E += (I += 65535 & x) >>> 16) >>> 16) >>> 16),
              (e[7] = U = (65535 & k) | (z << 16)),
              (t[7] = W = (65535 & I) | (E << 16)),
              (Y += 128),
              (i -= 128)
          }
          return i
        }
        function $(e, t, r) {
          var i,
            n = new Int32Array(8),
            f = new Int32Array(8),
            a = new Uint8Array(256),
            o = r
          for (
            n[0] = 1779033703,
              n[1] = 3144134277,
              n[2] = 1013904242,
              n[3] = 2773480762,
              n[4] = 1359893119,
              n[5] = 2600822924,
              n[6] = 528734635,
              n[7] = 1541459225,
              f[0] = 4089235720,
              f[1] = 2227873595,
              f[2] = 4271175723,
              f[3] = 1595750129,
              f[4] = 2917565137,
              f[5] = 725511199,
              f[6] = 4215389547,
              f[7] = 327033209,
              X(n, f, t, r),
              r %= 128,
              i = 0;
            i < r;
            i++
          )
            a[i] = t[o - r + i]
          for (
            a[r] = 128,
              a[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0,
              l(a, r - 8, (o / 536870912) | 0, o << 3),
              X(n, f, a, r),
              i = 0;
            i < 8;
            i++
          )
            l(e, 8 * i, n[i], f[i])
          return 0
        }
        function G(e, r) {
          var i = t(),
            n = t(),
            f = t(),
            a = t(),
            o = t(),
            d = t(),
            s = t(),
            h = t(),
            u = t()
          T(i, e[1], e[0]),
            T(u, r[1], r[0]),
            U(i, i, u),
            K(n, e[0], e[1]),
            K(u, r[0], r[1]),
            U(n, n, u),
            U(f, e[3], r[3]),
            U(f, f, c),
            U(a, e[2], r[2]),
            K(a, a, a),
            T(o, n, i),
            T(d, a, f),
            K(s, a, f),
            K(h, n, i),
            U(e[0], o, d),
            U(e[1], h, s),
            U(e[2], s, d),
            U(e[3], o, h)
        }
        function Q(e, t, r) {
          var i
          for (i = 0; i < 4; i++) q(e[i], t[i], r)
        }
        function ee(e, r) {
          var i = t(),
            n = t(),
            f = t()
          D(f, r[2]),
            U(i, r[0], f),
            U(n, r[1], f),
            L(e, n),
            (e[31] ^= B(i) << 7)
        }
        function te(e, t, r) {
          var i, n
          for (
            R(e[0], a), R(e[1], o), R(e[2], o), R(e[3], a), n = 255;
            n >= 0;
            --n
          )
            Q(e, t, (i = (r[(n / 8) | 0] >> (7 & n)) & 1)),
              G(t, e),
              G(e, e),
              Q(e, t, i)
        }
        function re(e, r) {
          var i = [t(), t(), t(), t()]
          R(i[0], h), R(i[1], u), R(i[2], o), U(i[3], h, u), te(e, i, r)
        }
        function ie(e, r, n) {
          var f,
            a = new Uint8Array(64),
            o = [t(), t(), t(), t()]
          for (
            n || i(r, 32),
              $(a, r, 32),
              a[0] &= 248,
              a[31] &= 127,
              a[31] |= 64,
              re(o, a),
              ee(e, o),
              f = 0;
            f < 32;
            f++
          )
            r[f + 32] = e[f]
          return 0
        }
        var ne = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16
        ])
        function fe(e, t) {
          var r, i, n, f
          for (i = 63; i >= 32; --i) {
            for (r = 0, n = i - 32, f = i - 12; n < f; ++n)
              (t[n] += r - 16 * t[i] * ne[n - (i - 32)]),
                (r = Math.floor((t[n] + 128) / 256)),
                (t[n] -= 256 * r)
            ;(t[n] += r), (t[i] = 0)
          }
          for (r = 0, n = 0; n < 32; n++)
            (t[n] += r - (t[31] >> 4) * ne[n]), (r = t[n] >> 8), (t[n] &= 255)
          for (n = 0; n < 32; n++) t[n] -= r * ne[n]
          for (i = 0; i < 32; i++) (t[i + 1] += t[i] >> 8), (e[i] = 255 & t[i])
        }
        function ae(e) {
          var t,
            r = new Float64Array(64)
          for (t = 0; t < 64; t++) r[t] = e[t]
          for (t = 0; t < 64; t++) e[t] = 0
          fe(e, r)
        }
        function oe(e, r, i, n) {
          var f,
            a,
            o = new Uint8Array(64),
            d = new Uint8Array(64),
            s = new Uint8Array(64),
            c = new Float64Array(64),
            h = [t(), t(), t(), t()]
          $(o, n, 32), (o[0] &= 248), (o[31] &= 127), (o[31] |= 64)
          var u = i + 64
          for (f = 0; f < i; f++) e[64 + f] = r[f]
          for (f = 0; f < 32; f++) e[32 + f] = o[32 + f]
          for (
            $(s, e.subarray(32), i + 32), ae(s), re(h, s), ee(e, h), f = 32;
            f < 64;
            f++
          )
            e[f] = n[f]
          for ($(d, e, i + 64), ae(d), f = 0; f < 64; f++) c[f] = 0
          for (f = 0; f < 32; f++) c[f] = s[f]
          for (f = 0; f < 32; f++)
            for (a = 0; a < 32; a++) c[f + a] += d[f] * o[a]
          return fe(e.subarray(32), c), u
        }
        function de(e, r, i, n) {
          var f,
            d = new Uint8Array(32),
            c = new Uint8Array(64),
            h = [t(), t(), t(), t()],
            u = [t(), t(), t(), t()]
          if (i < 64) return -1
          if (
            (function (e, r) {
              var i = t(),
                n = t(),
                f = t(),
                d = t(),
                c = t(),
                h = t(),
                u = t()
              return (
                R(e[2], o),
                O(e[1], r),
                j(f, e[1]),
                U(d, f, s),
                T(f, f, e[2]),
                K(d, e[2], d),
                j(c, d),
                j(h, c),
                U(u, h, c),
                U(i, u, f),
                U(i, i, d),
                C(i, i),
                U(i, i, f),
                U(i, i, d),
                U(i, i, d),
                U(e[0], i, d),
                j(n, e[0]),
                U(n, n, d),
                N(n, f) && U(e[0], e[0], b),
                j(n, e[0]),
                U(n, n, d),
                N(n, f)
                  ? -1
                  : (B(e[0]) === r[31] >> 7 && T(e[0], a, e[0]),
                    U(e[3], e[0], e[1]),
                    0)
              )
            })(u, n)
          )
            return -1
          for (f = 0; f < i; f++) e[f] = r[f]
          for (f = 0; f < 32; f++) e[f + 32] = n[f]
          if (
            ($(c, e, i),
            ae(c),
            te(h, u, c),
            re(u, r.subarray(32)),
            G(h, u),
            ee(d, h),
            (i -= 64),
            y(r, 0, d, 0))
          ) {
            for (f = 0; f < i; f++) e[f] = 0
            return -1
          }
          for (f = 0; f < i; f++) e[f] = r[f + 64]
          return i
        }
        var se = 16,
          ce = 64,
          he = 32,
          ue = 64
        function be(e, t) {
          if (32 !== e.length) throw new Error("bad key size")
          if (24 !== t.length) throw new Error("bad nonce size")
        }
        function le() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array")
        }
        function pe(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0
        }
        ;(e.lowlevel = {
          crypto_core_hsalsa20: g,
          crypto_stream_xor: S,
          crypto_stream: A,
          crypto_stream_salsa20_xor: M,
          crypto_stream_salsa20: _,
          crypto_onetimeauth: I,
          crypto_onetimeauth_verify: E,
          crypto_verify_16: m,
          crypto_verify_32: y,
          crypto_secretbox: k,
          crypto_secretbox_open: z,
          crypto_scalarmult: Z,
          crypto_scalarmult_base: F,
          crypto_box_beforenm: H,
          crypto_box_afternm: W,
          crypto_box: function (e, t, r, i, n, f) {
            var a = new Uint8Array(32)
            return H(a, n, f), W(e, t, r, i, a)
          },
          crypto_box_open: function (e, t, r, i, n, f) {
            var a = new Uint8Array(32)
            return H(a, n, f), Y(e, t, r, i, a)
          },
          crypto_box_keypair: J,
          crypto_hash: $,
          crypto_sign: oe,
          crypto_sign_keypair: ie,
          crypto_sign_open: de,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: se,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: ce,
          crypto_sign_PUBLICKEYBYTES: he,
          crypto_sign_SECRETKEYBYTES: ue,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: t,
          D: s,
          L: ne,
          pack25519: L,
          unpack25519: O,
          M: U,
          A: K,
          S: j,
          Z: T,
          pow2523: C,
          add: G,
          set25519: R,
          modL: fe,
          scalarmult: te,
          scalarbase: re
        }),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e)
            return i(t, e), t
          }),
          (e.secretbox = function (e, t, r) {
            le(e, t, r), be(r, t)
            for (
              var i = new Uint8Array(32 + e.length),
                n = new Uint8Array(i.length),
                f = 0;
              f < e.length;
              f++
            )
              i[f + 32] = e[f]
            return k(n, i, i.length, t, r), n.subarray(se)
          }),
          (e.secretbox.open = function (e, t, r) {
            le(e, t, r), be(r, t)
            for (
              var i = new Uint8Array(se + e.length),
                n = new Uint8Array(i.length),
                f = 0;
              f < e.length;
              f++
            )
              i[f + se] = e[f]
            return i.length < 32 || 0 !== z(n, i, i.length, t, r)
              ? null
              : n.subarray(32)
          }),
          (e.secretbox.keyLength = 32),
          (e.secretbox.nonceLength = 24),
          (e.secretbox.overheadLength = se),
          (e.scalarMult = function (e, t) {
            if ((le(e, t), 32 !== e.length)) throw new Error("bad n size")
            if (32 !== t.length) throw new Error("bad p size")
            var r = new Uint8Array(32)
            return Z(r, e, t), r
          }),
          (e.scalarMult.base = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error("bad n size")
            var t = new Uint8Array(32)
            return F(t, e), t
          }),
          (e.scalarMult.scalarLength = 32),
          (e.scalarMult.groupElementLength = 32),
          (e.box = function (t, r, i, n) {
            var f = e.box.before(i, n)
            return e.secretbox(t, r, f)
          }),
          (e.box.before = function (e, t) {
            le(e, t),
              (function (e, t) {
                if (32 !== e.length) throw new Error("bad public key size")
                if (32 !== t.length) throw new Error("bad secret key size")
              })(e, t)
            var r = new Uint8Array(32)
            return H(r, e, t), r
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function (t, r, i, n) {
            var f = e.box.before(i, n)
            return e.secretbox.open(t, r, f)
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function () {
            var e = new Uint8Array(32),
              t = new Uint8Array(32)
            return J(e, t), { publicKey: e, secretKey: t }
          }),
          (e.box.keyPair.fromSecretKey = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error("bad secret key size")
            var t = new Uint8Array(32)
            return F(t, e), { publicKey: t, secretKey: new Uint8Array(e) }
          }),
          (e.box.publicKeyLength = 32),
          (e.box.secretKeyLength = 32),
          (e.box.sharedKeyLength = 32),
          (e.box.nonceLength = 24),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function (e, t) {
            if ((le(e, t), t.length !== ue))
              throw new Error("bad secret key size")
            var r = new Uint8Array(ce + e.length)
            return oe(r, e, e.length, t), r
          }),
          (e.sign.open = function (e, t) {
            if ((le(e, t), t.length !== he))
              throw new Error("bad public key size")
            var r = new Uint8Array(e.length),
              i = de(r, e, e.length, t)
            if (i < 0) return null
            for (var n = new Uint8Array(i), f = 0; f < n.length; f++)
              n[f] = r[f]
            return n
          }),
          (e.sign.detached = function (t, r) {
            for (
              var i = e.sign(t, r), n = new Uint8Array(ce), f = 0;
              f < n.length;
              f++
            )
              n[f] = i[f]
            return n
          }),
          (e.sign.detached.verify = function (e, t, r) {
            if ((le(e, t, r), t.length !== ce))
              throw new Error("bad signature size")
            if (r.length !== he) throw new Error("bad public key size")
            var i,
              n = new Uint8Array(ce + e.length),
              f = new Uint8Array(ce + e.length)
            for (i = 0; i < ce; i++) n[i] = t[i]
            for (i = 0; i < e.length; i++) n[i + ce] = e[i]
            return de(f, n, n.length, r) >= 0
          }),
          (e.sign.keyPair = function () {
            var e = new Uint8Array(he),
              t = new Uint8Array(ue)
            return ie(e, t), { publicKey: e, secretKey: t }
          }),
          (e.sign.keyPair.fromSecretKey = function (e) {
            if ((le(e), e.length !== ue)) throw new Error("bad secret key size")
            for (var t = new Uint8Array(he), r = 0; r < t.length; r++)
              t[r] = e[32 + r]
            return { publicKey: t, secretKey: new Uint8Array(e) }
          }),
          (e.sign.keyPair.fromSeed = function (e) {
            if ((le(e), 32 !== e.length)) throw new Error("bad seed size")
            for (
              var t = new Uint8Array(he), r = new Uint8Array(ue), i = 0;
              i < 32;
              i++
            )
              r[i] = e[i]
            return ie(t, r, !0), { publicKey: t, secretKey: r }
          }),
          (e.sign.publicKeyLength = he),
          (e.sign.secretKeyLength = ue),
          (e.sign.seedLength = 32),
          (e.sign.signatureLength = ce),
          (e.hash = function (e) {
            le(e)
            var t = new Uint8Array(64)
            return $(t, e, e.length), t
          }),
          (e.hash.hashLength = 64),
          (e.verify = function (e, t) {
            return (
              le(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === p(e, 0, t, 0, e.length)
            )
          }),
          (e.setPRNG = function (e) {
            i = e
          }),
          (function () {
            var t =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null
            if (t && t.getRandomValues) {
              e.setPRNG(function (e, r) {
                var i,
                  n = new Uint8Array(r)
                for (i = 0; i < r; i += 65536)
                  t.getRandomValues(n.subarray(i, i + Math.min(r - i, 65536)))
                for (i = 0; i < r; i++) e[i] = n[i]
                pe(n)
              })
            } else
              (t = r(55024)) &&
                t.randomBytes &&
                e.setPRNG(function (e, r) {
                  var i,
                    n = t.randomBytes(r)
                  for (i = 0; i < r; i++) e[i] = n[i]
                  pe(n)
                })
          })()
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}))
    },
    30907: function (e, t, r) {
      "use strict"
      function i(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r]
        return i
      }
      r.d(t, {
        Z: function () {
          return i
        }
      })
    },
    61120: function (e, t, r) {
      "use strict"
      function i(e) {
        return (
          (i = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          i(e)
        )
      }
      r.d(t, {
        Z: function () {
          return i
        }
      })
    },
    60136: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return n
        }
      })
      var i = r(89611)
      function n(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && (0, i.Z)(e, t)
      }
    },
    58227: function (e, t, r) {
      "use strict"
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                }),
          i(e)
        )
      }
      function n(e, t) {
        if (t && ("object" === i(t) || "function" === typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          )
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return e
        })(e)
      }
      r.d(t, {
        Z: function () {
          return n
        }
      })
    },
    89611: function (e, t, r) {
      "use strict"
      function i(e, t) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            }),
          i(e, t)
        )
      }
      r.d(t, {
        Z: function () {
          return i
        }
      })
    },
    86854: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return n
        }
      })
      var i = r(40181)
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"]
            if (null != r) {
              var i,
                n,
                f = [],
                a = !0,
                o = !1
              try {
                for (
                  r = r.call(e);
                  !(a = (i = r.next()).done) &&
                  (f.push(i.value), !t || f.length !== t);
                  a = !0
                );
              } catch (d) {
                ;(o = !0), (n = d)
              } finally {
                try {
                  a || null == r.return || r.return()
                } finally {
                  if (o) throw n
                }
              }
              return f
            }
          })(e, t) ||
          (0, i.Z)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
    },
    40181: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return n
        }
      })
      var i = r(30907)
      function n(e, t) {
        if (e) {
          if ("string" === typeof e) return (0, i.Z)(e, t)
          var r = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? (0, i.Z)(e, t)
              : void 0
          )
        }
      }
    },
    16512: function (e, t, r) {
      "use strict"
      r.d(t, {
        Z: function () {
          return o
        }
      })
      var i = r(61120),
        n = r(89611)
      function f() {
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
      }
      function a(e, t, r) {
        return (
          (a = f()
            ? Reflect.construct
            : function (e, t, r) {
                var i = [null]
                i.push.apply(i, t)
                var f = new (Function.bind.apply(e, i))()
                return r && (0, n.Z)(f, r.prototype), f
              }),
          a.apply(null, arguments)
        )
      }
      function o(e) {
        var t = "function" === typeof Map ? new Map() : void 0
        return (
          (o = function (e) {
            if (
              null === e ||
              ((r = e),
              -1 === Function.toString.call(r).indexOf("[native code]"))
            )
              return e
            var r
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              )
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e)
              t.set(e, f)
            }
            function f() {
              return a(e, arguments, (0, i.Z)(this).constructor)
            }
            return (
              (f.prototype = Object.create(e.prototype, {
                constructor: {
                  value: f,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
              (0, n.Z)(f, e)
            )
          }),
          o(e)
        )
      }
    },
    18597: function (e) {
      "use strict"
      e.exports = { i8: "6.5.4" }
    }
  }
])
