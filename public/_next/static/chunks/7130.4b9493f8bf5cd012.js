"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7130],
  {
    8936: function (e, t, r) {
      var i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var n in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n])
                  return e
                }),
              i.apply(this, arguments)
            )
          },
        n =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTimeout =
          t.APIService =
          t.ANALYTICS_STORE_RETRIES =
          t.CLIENT_REGISTRY_RETRIES =
          t.COORDINATOR_RETRIES =
          t.timeoutBetweenRetriesSec =
            void 0)
      var a = r(88260),
        s = r(36299),
        c = r(52340),
        l = r(87617)
      t.timeoutBetweenRetriesSec = 2
      ;(t.COORDINATOR_RETRIES = 20),
        (t.CLIENT_REGISTRY_RETRIES = 20),
        (t.ANALYTICS_STORE_RETRIES = 20)
      var u = (function () {
        function e() {
          var e = this
          ;(this.destroyed = !1),
            (this.destroy = function () {
              var t, r, i
              ;(e.destroyed = !0),
                null === (t = e.coordinatorApi) || void 0 === t || t.destroy(),
                (e.coordinatorApi = void 0),
                null === (r = e.clientRegistryApi) ||
                  void 0 === r ||
                  r.destroy(),
                (e.clientRegistryApi = void 0),
                null === (i = e.analyticsStoreApi) ||
                  void 0 === i ||
                  i.destroy(),
                (e.analyticsStoreApi = void 0),
                (0, c.warn)("APIService: destroyed")
            })
        }
        return (
          (e.prototype.getAnalyticsReceiverApi = function (e) {
            return n(this, void 0, void 0, function () {
              var t, r
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      [4, this.getAnalyticsReceiverApiRecursively(e, 20)]
                    )
                  case 1:
                    return (
                      (t = i.sent()),
                      (0, c.log)(
                        "APIService.getAnalyticsReceiverApi: getAnalyticsReceiverApiRecursively() result",
                        t
                      ),
                      [2, t]
                    )
                  case 2:
                    return (
                      (r = i.sent()),
                      (0, c.warn)(
                        "APIService.getAnalyticsReceiverApi getAnalyticsReceiverApiRecursively() error",
                        r
                      ),
                      [3, 3]
                    )
                  case 3:
                    return [2, (0, c.createErrFatal)()]
                }
              })
            })
          }),
          (e.prototype.getAnalyticsReceiverApiRecursively = function (e, r) {
            return n(this, void 0, void 0, function () {
              var n, u, p, d, y, g, f, v, h, R
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      this.coordinatorApi ||
                        (this.coordinatorApi = new a.CoordinatorApi()),
                      [
                        4,
                        this.coordinatorApi.callCoordinatorRecursively(
                          e,
                          t.COORDINATOR_RETRIES
                        )
                      ]
                    )
                  case 1:
                    return (
                      (n = o.sent()),
                      (0, c.log)(
                        "APIService.getAnalyticsReceiverApiRecursively.CoordinatorApi.callCoordinatorRecursively",
                        n
                      ),
                      this.destroyed
                        ? [3, 17]
                        : (0, c.isOk)(n)
                        ? ((u = n.ok),
                          (0, a.isClientRegistry)(u)
                            ? ((p = u.clientRegistry.canisterPrincipal),
                              (d = i(i({}, e), { clientRegistryPrincipal: p })),
                              this.clientRegistryApi ||
                                (this.clientRegistryApi =
                                  new s.ClientRegistryApi()),
                              [
                                4,
                                this.clientRegistryApi.callClientRegistryRecursively(
                                  d,
                                  t.CLIENT_REGISTRY_RETRIES
                                )
                              ])
                            : [3, 14])
                        : [3, 16]
                    )
                  case 2:
                    return (
                      (y = o.sent()),
                      (0, c.log)(
                        "APIService.getAnalyticsReceiverApiRecursively.ClientRegistryApi.callClientRegistryRecursively",
                        y
                      ),
                      this.destroyed
                        ? [3, 12]
                        : (0, c.isOk)(y)
                        ? ((f = y.ok),
                          (v = i(i({}, e), {
                            canisterPrincipal:
                              f.analyticsReceiverView.canisterPrincipal,
                            accessToken: f.analyticsReceiverView.accessToken
                          })),
                          this.analyticsStoreApi ||
                            (this.analyticsStoreApi =
                              new l.AnalyticsStoreApi()),
                          [
                            4,
                            this.analyticsStoreApi.getAnalyticsReceiverApiRecursively(
                              v,
                              t.ANALYTICS_STORE_RETRIES
                            )
                          ])
                        : [3, 4]
                    )
                  case 3:
                    if (
                      ((h = o.sent()),
                      (0, c.log)(
                        "APIService.getAnalyticsReceiverApiRecursively.AnalyticsStoreApi.getAnalyticsReceiverApiRecursively",
                        h
                      ),
                      this.destroyed)
                    )
                      (0, c.warn)(
                        "APIService: analyticsStoreApi.getAnalyticsReceiverApiRecursively() result skipped - destroyed"
                      )
                    else if ((0, c.isOk)(h))
                      return (
                        (R = h.ok),
                        [
                          2,
                          (0, c.createOkResult)({
                            analyticsReceiverApiView: R,
                            analyticsStoreNotified: f.analyticsStoreNotified
                          })
                        ]
                      )
                    return [3, 11]
                  case 4:
                    return (0, c.isErr)(y)
                      ? "restart" === y.err
                        ? [3, 5]
                        : [3, 10]
                      : [3, 11]
                  case 5:
                    return this.destroyed
                      ? [3, 8]
                      : ((g = (0, t.getTimeout)(20 - r)),
                        (0, c.log)("sleep for", g, "ms"),
                        [4, (0, c.delayPromise)(g)])
                  case 6:
                    return (
                      o.sent(),
                      [4, this.getAnalyticsReceiverApiRecursively(e, r - 1)]
                    )
                  case 7:
                    return [2, o.sent()]
                  case 8:
                    ;(0, c.warn)(
                      "APIService: getAnalyticsReceiverApiRecursively skipped - destroyed"
                    ),
                      (o.label = 9)
                  case 9:
                    return [3, 11]
                  case 10:
                    return [2, y]
                  case 11:
                    return [3, 13]
                  case 12:
                    ;(0, c.warn)(
                      "APIService: clientRegistryApi.callClientRegistryRecursively() result skipped - destroyed"
                    ),
                      (o.label = 13)
                  case 13:
                    return [3, 16]
                  case 14:
                    return (0, a.isAnalyticsReceiver)(u)
                      ? ((f = u.analyticsReceiver.view),
                        (v = i(i({}, e), {
                          canisterPrincipal: f.canisterPrincipal,
                          accessToken: f.accessToken
                        })),
                        this.analyticsStoreApi ||
                          (this.analyticsStoreApi = new l.AnalyticsStoreApi()),
                        [
                          4,
                          this.analyticsStoreApi.getAnalyticsReceiverApiRecursively(
                            v,
                            t.ANALYTICS_STORE_RETRIES
                          )
                        ])
                      : [3, 16]
                  case 15:
                    if (
                      ((h = o.sent()),
                      (0, c.log)(
                        "APIService.getAnalyticsReceiverApiRecursively.AnalyticsStoreApi.getAnalyticsReceiverApiRecursively",
                        h
                      ),
                      this.destroyed)
                    )
                      (0, c.warn)(
                        "APIService: analyticsStoreApi.getAnalyticsReceiverApiRecursively() result skipped - destroyed"
                      )
                    else if ((0, c.isOk)(h))
                      return (
                        (R = h.ok),
                        [
                          2,
                          (0, c.createOkResult)({
                            analyticsReceiverApiView: R,
                            analyticsStoreNotified: !1
                          })
                        ]
                      )
                    o.label = 16
                  case 16:
                    return [3, 18]
                  case 17:
                    ;(0, c.warn)(
                      "APIService: coordinatorApi.callCoordinatorRecursively() result skipped - destroyed"
                    ),
                      (o.label = 18)
                  case 18:
                    return [2, (0, c.createErrFatal)()]
                }
              })
            })
          }),
          e
        )
      })()
      t.APIService = u
      t.getTimeout = function (e) {
        return (
          1e3 *
          Math.max(
            t.timeoutBetweenRetriesSec,
            Math.pow(t.timeoutBetweenRetriesSec, e + 1)
          )
        )
      }
    },
    26735: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APIStorage = void 0)
      var i = r(52340),
        n = r(47972).KeyValueStoreFacade.createStore("ug-ic"),
        o = "coordinator__topologyId",
        a = "coordinator__canisterIds"
      t.APIStorage = {
        coordinator: {
          getTopologyId: function () {
            var e = n.get(o)
            if (e) return Number(e)
          },
          setTopologyId: function (e) {
            n.set(o, JSON.stringify(e))
          },
          getCanisterIds: function () {
            try {
              var e = n.get(a)
              if (e && Array.isArray(e)) return e
            } catch (t) {
              ;(0, i.warn)("storage.getCanisterIds", t)
            }
            return []
          },
          setCanisterIds: function (e) {
            n.set(a, JSON.stringify(e))
          }
        }
      }
    },
    87617: function (e, t, r) {
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnalyticsStoreApi = void 0)
      var o = r(90335),
        a = r(52340),
        s = r(68760),
        c = r(8936),
        l = (function () {
          function e() {
            var t = this
            ;(this.destroyed = !1),
              (this.destroy = function () {
                ;(t.destroyed = !0), (0, a.warn)("AnalyticsStoreApi: destroyed")
              }),
              (this.sendPacket = function (e) {
                return i(t, void 0, void 0, function () {
                  var t, r, i, c
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (t = (0, o.createCanisterActor)(
                            e.canisterPrincipal.toText(),
                            new s.AnonymousIdentity(),
                            e.host
                          )),
                          [4, this.validatePacket(t, e)]
                        )
                      case 1:
                        return (
                          (r = n.sent()),
                          (0, a.log)(
                            "AnalyticsStoreApi.sendPacket validatePacket",
                            r
                          ),
                          (0, a.isOk)(r)
                            ? ((i = r.ok).length > 0 &&
                                (e.packet.items = e.packet.items.filter(
                                  function (e) {
                                    return !i.some(function (t) {
                                      return (0, a.hasOwnProperty)(e, "event")
                                        ? t.sequence == e.event.sequence
                                        : !!(0, a.hasOwnProperty)(
                                            e,
                                            "session"
                                          ) && t.sequence == e.session.sequence
                                    })
                                  }
                                )),
                              e.packet.items.length > 0
                                ? [4, this.collectPacket(t, e)]
                                : [3, 3])
                            : [3, 5]
                        )
                      case 2:
                        return (
                          (c = n.sent()),
                          (0, a.log)(
                            "AnalyticsStoreApi.sendPacket collectPacket",
                            c
                          ),
                          (0, a.isOk)(c)
                            ? [2, (0, a.createOkResult)(null)]
                            : (0, a.isErr)(c)
                            ? [2, c]
                            : [3, 4]
                        )
                      case 3:
                        return [2, (0, a.createOkResult)(null)]
                      case 4:
                        return [3, 6]
                      case 5:
                        if ((0, a.isErr)(r)) return [2, r]
                        n.label = 6
                      case 6:
                        return [2, (0, a.createErrFatal)()]
                    }
                  })
                })
              }),
              (this.actor_getAnalyticsReceiverApi = function (r, o) {
                return i(t, void 0, void 0, function () {
                  var t, i, s, c
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            r.getAnalyticsReceiverApi(
                              [o.clientPrincipal],
                              o.sdkVersion,
                              o.accessToken
                            )
                          ]
                        )
                      case 1:
                        return (t = n.sent()), [3, 3]
                      case 2:
                        return (
                          (i = n.sent()),
                          (0, a.warn)(
                            "AnalyticsStoreApi.getAnalyticsReceiverApi actor.getAnalyticsReceiverApi",
                            i
                          ),
                          [2, (0, a.createErrRetry)()]
                        )
                      case 3:
                        return (
                          (0, a.log)(
                            "AnalyticsStoreApi.getAnalyticsReceiverApi actor.getAnalyticsReceiverApi",
                            t
                          ),
                          (0, a.isOk)(t)
                            ? ((s = e.getAnalyticsReceiverApiPrincipal(t.ok)),
                              [
                                2,
                                (0, a.createOkResult)({
                                  canisterPrincipal: s,
                                  accessToken: o.accessToken
                                })
                              ])
                            : (0, a.isErr)(t) &&
                              ((c = t.err),
                              (0, a.isErrTemporarilyUnavailable)(c))
                            ? [2, (0, a.createErrRetry)()]
                            : [2, (0, a.createErrFatal)()]
                        )
                    }
                  })
                })
              }),
              (this.validatePacket = function (e, r) {
                return i(t, void 0, void 0, function () {
                  var t, i, o, s, c
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            e.validatePacket(
                              [r.clientPrincipal],
                              r.sdkVersion,
                              r.accessToken,
                              r.packet
                            )
                          ]
                        )
                      case 1:
                        return (t = n.sent()), [3, 3]
                      case 2:
                        return (
                          (i = n.sent()),
                          (0, a.warn)(
                            "AnalyticsStoreApi.validatePacket actor.validatePacket",
                            i
                          ),
                          [2, (0, a.createErrRetry)()]
                        )
                      case 3:
                        return (
                          (0, a.log)(
                            "AnalyticsStoreApi.validatePacket actor.validatePacket",
                            t
                          ),
                          (0, a.isOk)(t)
                            ? ((o = []),
                              1 == t.ok.rejectedItems.length &&
                                (o = t.ok.rejectedItems[0]),
                              [2, (0, a.createOkResult)(o)])
                            : (0, a.isErr)(t) &&
                              ((s = t.err),
                              (0, a.isErrApi)(s) &&
                                ((c = s.api),
                                (0, a.isErrTemporarilyUnavailable)(c)))
                            ? [2, (0, a.createErrRetry)()]
                            : [2, (0, a.createErrFatal)()]
                        )
                    }
                  })
                })
              }),
              (this.collectPacket = function (e, r) {
                return i(t, void 0, void 0, function () {
                  var t, i, o, s
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            e.collectPacket(
                              [r.clientPrincipal],
                              r.sdkVersion,
                              r.accessToken,
                              r.packet
                            )
                          ]
                        )
                      case 1:
                        return (t = n.sent()), [3, 3]
                      case 2:
                        return (
                          (i = n.sent()),
                          (0, a.warn)(
                            "AnalyticsStoreApi.collectPacket actor.collectPacket",
                            i
                          ),
                          [2, (0, a.createErrRetry)()]
                        )
                      case 3:
                        return (
                          (0, a.log)(
                            "AnalyticsStoreApi.collectPacket actor.collectPacket",
                            t
                          ),
                          (0, a.isOk)(t)
                            ? [2, (0, a.createOkResult)(null)]
                            : (0, a.isErr)(t) &&
                              ((o = t.err),
                              (0, a.isErrApi)(o) &&
                                ((s = o.api),
                                (0, a.isErrTemporarilyUnavailable)(s)))
                            ? [2, (0, a.createErrRetry)()]
                            : [2, (0, a.createErrFatal)()]
                        )
                    }
                  })
                })
              })
          }
          return (
            (e.prototype.getAnalyticsReceiverApiRecursively = function (e, t) {
              return i(this, void 0, void 0, function () {
                var r, i
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getAnalyticsReceiverApi(e)]
                    case 1:
                      return (
                        (r = n.sent()),
                        (0, a.log)(
                          "AnalyticsStoreApi.getAnalyticsReceiverApiRecursively.getAnalyticsReceiverApi",
                          r,
                          { retriesLeft: t }
                        ),
                        (0, a.isOk)(r) ? [2, r] : [3, 2]
                      )
                    case 2:
                      return (0, a.isErr)(r)
                        ? "retry" === r.err
                          ? [3, 3]
                          : [3, 7]
                        : [3, 8]
                    case 3:
                      return t > 0
                        ? this.destroyed
                          ? [3, 5]
                          : ((i = (0, c.getTimeout)(
                              c.ANALYTICS_STORE_RETRIES - t
                            )),
                            (0, a.log)("sleep for", i, "ms"),
                            [4, (0, a.delayPromise)(i)])
                        : [3, 6]
                    case 4:
                      return (
                        n.sent(),
                        [2, this.getAnalyticsReceiverApiRecursively(e, t - 1)]
                      )
                    case 5:
                      ;(0, a.warn)(
                        "AnalyticsStoreApi: getAnalyticsReceiverApiRecursively skipped - destroyed"
                      ),
                        (n.label = 6)
                    case 6:
                    case 7:
                      return [3, 8]
                    case 8:
                      return [2, (0, a.createErrFatal)()]
                  }
                })
              })
            }),
            (e.prototype.trackPacketRecursively = function (e, t) {
              return i(this, void 0, void 0, function () {
                var r, i
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.sendPacket(e)]
                    case 1:
                      return (r = n.sent()), (0, a.isOk)(r) ? [2, r] : [3, 2]
                    case 2:
                      return (0, a.isErr)(r)
                        ? "retry" === r.err
                          ? [3, 3]
                          : [3, 7]
                        : [3, 8]
                    case 3:
                      return t > 0
                        ? this.destroyed
                          ? [3, 5]
                          : ((i = (0, c.getTimeout)(
                              c.ANALYTICS_STORE_RETRIES - t
                            )),
                            (0, a.log)("sleep for", i, "ms"),
                            [4, (0, a.delayPromise)(i)])
                        : [3, 6]
                    case 4:
                      return (
                        n.sent(), [2, this.trackPacketRecursively(e, t - 1)]
                      )
                    case 5:
                      ;(0, a.warn)(
                        "AnalyticsStoreApi: trackPacketRecursively skipped - destroyed"
                      ),
                        (n.label = 6)
                    case 6:
                    case 7:
                      return [3, 8]
                    case 8:
                      return [2, (0, a.createErrFatal)()]
                  }
                })
              })
            }),
            (e.prototype.getAnalyticsReceiverApi = function (e) {
              return i(this, void 0, void 0, function () {
                var t, r
                return n(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = (0, o.createCanisterActor)(
                          e.canisterPrincipal.toText(),
                          new s.AnonymousIdentity(),
                          e.host
                        )),
                        [4, this.actor_getAnalyticsReceiverApi(t, e)]
                      )
                    case 1:
                      return (
                        (r = i.sent()),
                        (0, a.log)(
                          "AnalyticsStoreApi.getAnalyticsReceiverApi",
                          r
                        ),
                        (0, a.isOk)(r)
                          ? [2, (0, a.createOkResult)(r.ok)]
                          : (0, a.isErr)(r)
                          ? [2, r]
                          : [2, (0, a.createErrFatal)()]
                      )
                  }
                })
              })
            }),
            (e.getAnalyticsReceiverApiPrincipal = function (e) {
              var t = (0, a.getSharedFunctionData)(e.isCollectRequired)
              if (t) return t[0]
            }),
            e
          )
        })()
      t.AnalyticsStoreApi = l
    },
    36299: function (e, t, r) {
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClientRegistryApi = void 0)
      var o = r(68760),
        a = r(99502),
        s = r(52340),
        c = r(8936),
        l = (function () {
          function e() {
            var t = this
            ;(this.destroyed = !1),
              (this.destroy = function () {
                ;(t.destroyed = !0), (0, s.warn)("CoordinatorApi: destroyed")
              }),
              (this.getResult = function (e) {
                return i(t, void 0, void 0, function () {
                  var t, r, i, c
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (t = (0, a.createCanisterActor)(
                            e.clientRegistryPrincipal.toText(),
                            new o.AnonymousIdentity(),
                            e.host
                          )),
                          [4, this.getAnalyticsReceiver(t, e)]
                        )
                      case 1:
                        return (
                          (r = n.sent()),
                          (0, s.log)(
                            "ClientRegistryApi.getResult.getAnalyticsReceiver",
                            r
                          ),
                          this.destroyed
                            ? [3, 9]
                            : (0, s.isOk)(r)
                            ? (i = r.ok)
                              ? [
                                  2,
                                  (0, s.createOkResult)({
                                    analyticsStoreNotified: !1,
                                    analyticsReceiverView: i
                                  })
                                ]
                              : [3, 8]
                            : [3, 2]
                        )
                      case 2:
                        if (!(0, s.isErr)(r)) return [3, 8]
                        switch (r.err) {
                          case "clientNotRegistered":
                            return [3, 3]
                          case "retry":
                            return [3, 5]
                          case "restart":
                            return [3, 6]
                        }
                        return [3, 7]
                      case 3:
                        return [4, this.registerClient(t, e)]
                      case 4:
                        if (
                          ((c = n.sent()),
                          (0, s.log)("handle.registerClient", c),
                          this.destroyed)
                        )
                          (0, s.warn)(
                            "ClientRegistryApi: registerClient() result skipped - destroyed"
                          )
                        else {
                          if ((0, s.isOk)(c)) return [2, c]
                          if ((0, s.isProceed)(c)) return [2, c]
                          if ((0, s.isErr)(c)) return [2, c]
                        }
                        return [3, 8]
                      case 5:
                        return [2, (0, s.createErrRetry)()]
                      case 6:
                        return [2, (0, s.createErrRestart)()]
                      case 7:
                        return [3, 8]
                      case 8:
                        return [3, 10]
                      case 9:
                        ;(0, s.warn)(
                          "ClientRegistryApi: getAnalyticsReceiver() result skipped - destroyed"
                        ),
                          (n.label = 10)
                      case 10:
                        return [2, (0, s.createErrFatal)()]
                    }
                  })
                })
              }),
              (this.getAnalyticsReceiver = function (r, o) {
                return i(t, void 0, void 0, function () {
                  var t, i, a, c
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            r.getAnalyticsReceiver(
                              [o.clientPrincipal],
                              o.sdkVersion,
                              o.apiKey
                            )
                          ]
                        )
                      case 1:
                        return (t = n.sent()), [3, 3]
                      case 2:
                        return (
                          (i = n.sent()),
                          (0, s.warn)(
                            "ClientRegistryApi.getAnalyticsReceiver actor.getAnalyticsReceiver",
                            i
                          ),
                          [2, (0, s.createErrRetry)()]
                        )
                      case 3:
                        if (
                          ((0, s.log)(
                            "ClientRegistryApi.getAnalyticsReceiver actor.getAnalyticsReceiver",
                            t
                          ),
                          (0, s.isOk)(t))
                        ) {
                          if ((a = e.getAnalyticsReceiverData(t.ok)))
                            return [2, (0, s.createOkResult)(a)]
                        } else if ((0, s.isErr)(t)) {
                          if (
                            ((c = t.err),
                            (0, s.hasOwnProperty)(c, "clientNotRegistered"))
                          )
                            return [
                              2,
                              (0, s.createErrResult)("clientNotRegistered")
                            ]
                          if ((0, s.isErrTemporarilyUnavailable)(c))
                            return [2, (0, s.createErrRetry)()]
                          if ((0, s.isErrWrongTopology)(c))
                            return [2, (0, s.createErrRestart)()]
                        }
                        return [2, (0, s.createErrFatal)()]
                    }
                  })
                })
              }),
              (this.registerClient = function (r, o) {
                return i(t, void 0, void 0, function () {
                  var t, i, a, c, l, u, p
                  return n(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 2, , 3]),
                          [
                            4,
                            r.registerClient(
                              [o.clientPrincipal],
                              o.sdkVersion,
                              o.apiKey
                            )
                          ]
                        )
                      case 1:
                        return (t = n.sent()), [3, 3]
                      case 2:
                        return (
                          (i = n.sent()),
                          (0, s.warn)(
                            "ClientRegistryApi.registerClient actor.registerClient",
                            i
                          ),
                          [2, (0, s.createErrRetry)()]
                        )
                      case 3:
                        if (
                          ((0, s.log)(
                            "ClientRegistryApi.registerClient actor.registerClient",
                            t
                          ),
                          (0, s.isOk)(t))
                        ) {
                          if (
                            ((a = t.ok),
                            (c = a.analyticsReceiver),
                            (l = a.analyticsStoreNotified),
                            (u = e.getAnalyticsReceiverData(c)))
                          )
                            return [
                              2,
                              (0, s.createOkResult)({
                                analyticsStoreNotified: l,
                                analyticsReceiverView: u
                              })
                            ]
                        } else if ((0, s.isErr)(t)) {
                          if (
                            ((p = t.err), (0, s.isErrTemporarilyUnavailable)(p))
                          )
                            return [2, (0, s.createErrRetry)()]
                          if ((0, s.isErrWrongTopology)(p))
                            return [2, (0, s.createErrRestart)()]
                        }
                        return [2, (0, s.createErrFatal)()]
                    }
                  })
                })
              })
          }
          return (
            (e.prototype.callClientRegistryRecursively = function (e, t) {
              return i(this, void 0, void 0, function () {
                var r, i
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getResult(e)]
                    case 1:
                      return (
                        (r = n.sent()),
                        (0, s.log)(
                          "ClientRegistryApi.callClientRegistryRecursively.clientRegistry",
                          r,
                          { retriesLeft: t }
                        ),
                        (0, s.isProceed)(r) ? [2, r] : [3, 2]
                      )
                    case 2:
                      return (0, s.isOk)(r) ? [2, r] : [3, 3]
                    case 3:
                      if (!(0, s.isErr)(r)) return [3, 10]
                      switch (r.err) {
                        case "retry":
                          return [3, 4]
                        case "restart":
                          return [3, 8]
                      }
                      return [3, 9]
                    case 4:
                      return t > 0
                        ? this.destroyed
                          ? [3, 6]
                          : ((i = (0, c.getTimeout)(
                              c.CLIENT_REGISTRY_RETRIES - t
                            )),
                            (0, s.log)("sleep for", i, "ms"),
                            [4, (0, s.delayPromise)(i)])
                        : [3, 7]
                    case 5:
                      return (
                        n.sent(),
                        [2, this.callClientRegistryRecursively(e, t - 1)]
                      )
                    case 6:
                      ;(0, s.warn)(
                        "ClientRegistryApi: callClientRegistryRecursively skipped - destroyed"
                      ),
                        (n.label = 7)
                    case 7:
                      return [3, 10]
                    case 8:
                      return [2, (0, s.createErrRestart)()]
                    case 9:
                      return [3, 10]
                    case 10:
                      return [2, (0, s.createErrFatal)()]
                  }
                })
              })
            }),
            (e.getAnalyticsReceiverData = function (e) {
              var t = (0, s.getSharedFunctionDataPrincipal)(
                e.getAnalyticsReceiverApi
              )
              if (t) return { canisterPrincipal: t, accessToken: e.accessToken }
            }),
            e
          )
        })()
      t.ClientRegistryApi = l
    },
    88260: function (e, t, r) {
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CoordinatorApi = t.isAnalyticsReceiver = t.isClientRegistry = void 0)
      var o = r(68760),
        a = r(95866),
        s = r(26735),
        c = r(52340),
        l = r(36299),
        u = r(8936),
        p = r(94088)
      t.isClientRegistry = function (e) {
        return (0, c.hasOwnProperty)(e, "clientRegistry")
      }
      var d
      t.isAnalyticsReceiver = function (e) {
        return (0, c.hasOwnProperty)(e, "analyticsReceiver")
      }
      var y = (function () {
        function e() {
          var t = this
          ;(this.destroyed = !1),
            (this.destroy = function () {
              ;(t.destroyed = !0), (0, c.warn)("CoordinatorApi: destroyed")
            }),
            (this.getResult = function (e) {
              return i(t, void 0, void 0, function () {
                var t
                return n(this, function (r) {
                  return (
                    (d = s.APIStorage.coordinator.getTopologyId()),
                    0 ===
                      (t = s.APIStorage.coordinator.getCanisterIds()).length &&
                      (t = Array.from(p.coordinator_canister_ids)),
                    0 === t.length
                      ? ((0, c.warn)("no canisters"),
                        [2, (0, c.createErrFatal)()])
                      : [2, this.getClientRegistryRecursively(e, t)]
                  )
                })
              })
            }),
            (this.getClientRegistryRecursively = function (r, o) {
              return i(t, void 0, void 0, function () {
                var t, i, a, p, y, g, f, v, h, R, A, k, b, w, S, P
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (
                        ((t = e.getCanisterId(o)),
                        (0, c.log)(
                          "CoordinatorApi.getClientRegistryRecursively using",
                          {
                            inProgressCanisterIds: o,
                            currentSessionTopologyId: d,
                            canisterId: t
                          }
                        ),
                        !t)
                      )
                        return [3, 7]
                      ;(i = void 0), (n.label = 1)
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, this.hello(r, t)]
                    case 2:
                      return (i = n.sent()), [3, 4]
                    case 3:
                      return (
                        (a = n.sent()),
                        (0, c.warn)(
                          "CoordinatorApi.getClientRegistryRecursively actor.hello",
                          a
                        ),
                        [2, (0, c.createErrRetry)()]
                      )
                    case 4:
                      if (
                        ((0, c.log)(
                          "CoordinatorApi.getClientRegistryRecursively actor.hello",
                          i
                        ),
                        (0, c.hasOwnProperty)(i, "clientRegistry"))
                      ) {
                        if (
                          ((p = i.clientRegistry),
                          (y = (0, c.getSharedFunctionDataPrincipal)(
                            p.getAnalyticsReceiver
                          )))
                        )
                          return [
                            2,
                            (0, c.createOkResult)({
                              clientRegistry: { canisterPrincipal: y }
                            })
                          ]
                      } else if (
                        (0, c.hasOwnProperty)(i, "analyticsReceiver")
                      ) {
                        if (
                          ((g = i.analyticsReceiver),
                          (f = l.ClientRegistryApi.getAnalyticsReceiverData(g)))
                        )
                          return [
                            2,
                            (0, c.createOkResult)({
                              analyticsReceiver: { view: f }
                            })
                          ]
                      } else {
                        if ((0, c.hasOwnProperty)(i, "changeTopology")) {
                          for (
                            v = i.changeTopology,
                              h = v.topologyId,
                              R = v.coordinators,
                              A = [],
                              k = 0;
                            k < R.length;
                            k++
                          )
                            (b = (0, c.getSharedFunctionData)(R[k])) &&
                              ((w = b[0]),
                              "hello" == b[1] && A.push(w.toText()))
                          return (
                            A.length > 0 &&
                              ((d = h),
                              s.APIStorage.coordinator.setCanisterIds(A),
                              s.APIStorage.coordinator.setTopologyId(h)),
                            [2, (0, c.createErrResult)("changeTopology")]
                          )
                        }
                        if ((0, c.hasOwnProperty)(i, "invalidClient"))
                          return [2, (0, c.createErrFatal)()]
                      }
                      return this.destroyed
                        ? [3, 6]
                        : ((S = 1e3 * u.timeoutBetweenRetriesSec),
                          (0, c.log)("sleep for", S, "ms"),
                          [4, (0, c.delayPromise)(S)])
                    case 5:
                      return (
                        n.sent(),
                        (P = e.markCanisterIdAsFailed(t, o)),
                        [2, this.getClientRegistryRecursively(r, P)]
                      )
                    case 6:
                      ;(0, c.warn)(
                        "CoordinatorApi: temporaryUnavailable: getClientRegistryRecursively skipped - destroyed"
                      ),
                        (n.label = 7)
                    case 7:
                      return [2, (0, c.createErrRetry)()]
                  }
                })
              })
            }),
            (this.hello = function (e, r) {
              return i(t, void 0, void 0, function () {
                var t, i
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = (0, a.createCanisterActor)(
                          r,
                          new o.AnonymousIdentity(),
                          e.host
                        )),
                        (i = d),
                        [
                          4,
                          t.hello(
                            [e.clientPrincipal],
                            e.sdkVersion,
                            i ? [i] : [],
                            e.apiKey
                          )
                        ]
                      )
                    case 1:
                      return [2, n.sent()]
                  }
                })
              })
            })
        }
        return (
          (e.prototype.callCoordinatorRecursively = function (e, t) {
            return i(this, void 0, void 0, function () {
              var r, i
              return n(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.getResult(e)]
                  case 1:
                    return (
                      (r = n.sent()),
                      (0, c.log)(
                        "CoordinatorApi.callCoordinatorRecursively.coordinator",
                        r,
                        { retriesLeft: t }
                      ),
                      (0, c.isOk)(r) ? [2, r] : [3, 2]
                    )
                  case 2:
                    return (0, c.isProceed)(r) ? [2, r] : [3, 3]
                  case 3:
                    if (!(0, c.isErr)(r)) return [3, 13]
                    switch (r.err) {
                      case "changeTopology":
                        return [3, 4]
                      case "retry":
                        return [3, 8]
                    }
                    return [3, 12]
                  case 4:
                    return this.destroyed
                      ? [3, 6]
                      : ((i = (0, u.getTimeout)(u.COORDINATOR_RETRIES - t)),
                        (0, c.log)("sleep for", i, "ms"),
                        [4, (0, c.delayPromise)(i)])
                  case 5:
                    return (
                      n.sent(), [2, this.callCoordinatorRecursively(e, t - 1)]
                    )
                  case 6:
                    ;(0, c.warn)(
                      "CoordinatorApi: changeTopology: callCoordinatorRecursively skipped - destroyed"
                    ),
                      (n.label = 7)
                  case 7:
                    return [3, 13]
                  case 8:
                    return t > 0
                      ? this.destroyed
                        ? [3, 10]
                        : ((i = (0, u.getTimeout)(u.COORDINATOR_RETRIES - t)),
                          (0, c.log)("sleep for", i, "ms"),
                          [4, (0, c.delayPromise)(i)])
                      : [3, 11]
                  case 9:
                    return (
                      n.sent(), [2, this.callCoordinatorRecursively(e, t - 1)]
                    )
                  case 10:
                    ;(0, c.warn)(
                      "CoordinatorApi: retry: callCoordinatorRecursively skipped - destroyed"
                    ),
                      (n.label = 11)
                  case 11:
                    return [3, 13]
                  case 12:
                    n.label = 13
                  case 13:
                    return [2, (0, c.createErrFatal)()]
                }
              })
            })
          }),
          (e.markCanisterIdAsFailed = function (e, t) {
            return t.filter(function (t) {
              return t !== e
            })
          }),
          (e.getRandomCanisterId = function (e) {
            return e[Math.floor(Math.random() * e.length)]
          }),
          (e.getCanisterId = function (t) {
            if (0 != t.length) return e.getRandomCanisterId(t)
          }),
          e
        )
      })()
      t.CoordinatorApi = y
    },
    43894: function (e, t, r) {
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UsergeekClient = void 0)
      var o = r(30761),
        a = r(8936),
        s = r(52340),
        c = r(57194),
        l = function () {
          var e = this
          ;(this.sessionAlreadyTracked = !1),
            (this.init = function (t) {
              e.destroy(), (e.config = t)
              try {
                ;(0, s.log)(
                  "Usergeek: initialized with config: " + JSON.stringify(t)
                )
              } catch (r) {}
            }),
            (this.setPrincipal = function (t) {
              var r, i, n, o
              try {
                e.validateConfig(),
                  e.destroy(),
                  (e.clientPrincipal = t),
                  e.tryToUploadPendingPackets()
              } catch (a) {
                ;(null ===
                  (i =
                    null === (r = e.config) || void 0 === r
                      ? void 0
                      : r.debugConfiguration) || void 0 === i
                  ? void 0
                  : i.loggerError) &&
                  (null ===
                    (o =
                      null === (n = e.config) || void 0 === n
                        ? void 0
                        : n.debugConfiguration) ||
                    void 0 === o ||
                    o.loggerError("Please pass valid Principal", {
                      principal: t
                    })),
                  (0, s.warn)("UsergeekClient.setPrincipal", a)
              }
            }),
            (this.trackSession = function () {
              i(e, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a,
                  c = this
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        this.validateAndPrepareEventTracker(),
                        this.tracker.logSession(),
                        this.pageVisibilityTracker ||
                          ((this.pageVisibilityTracker =
                            new o.PageVisibilityTracker()),
                          this.pageVisibilityTracker.start(function () {
                            c.trackSession()
                          })),
                        [
                          4,
                          this.waitForAnalyticsReceiverApiReadyAndUpload(!0, !0)
                        ]
                      )
                    case 1:
                      return n.sent(), [3, 3]
                    case 2:
                      return (
                        (e = n.sent()),
                        (null ===
                          (r =
                            null === (t = this.config) || void 0 === t
                              ? void 0
                              : t.debugConfiguration) || void 0 === r
                          ? void 0
                          : r.loggerError) &&
                          (null ===
                            (a =
                              null === (i = this.config) || void 0 === i
                                ? void 0
                                : i.debugConfiguration) ||
                            void 0 === a ||
                            a.loggerError("UsergeekClient.trackSession", e)),
                        (0, s.warn)("UsergeekClient.trackSession", e),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (this.trackEvent = function (t) {
              i(e, void 0, void 0, function () {
                var e, r, i, o, a
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        this.validateAndPrepareEventTracker(),
                        this.tracker.logEvent(t),
                        [
                          4,
                          this.waitForAnalyticsReceiverApiReadyAndUpload(!1, !1)
                        ]
                      )
                    case 1:
                      return n.sent(), [3, 3]
                    case 2:
                      return (
                        (e = n.sent()),
                        (null ===
                          (i =
                            null === (r = this.config) || void 0 === r
                              ? void 0
                              : r.debugConfiguration) || void 0 === i
                          ? void 0
                          : i.loggerError) &&
                          (null ===
                            (a =
                              null === (o = this.config) || void 0 === o
                                ? void 0
                                : o.debugConfiguration) ||
                            void 0 === a ||
                            a.loggerError("UsergeekClient.trackEvent", e)),
                        (0, s.warn)("UsergeekClient.trackEvent", e),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (this.flush = function () {
              i(e, void 0, void 0, function () {
                var e
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 2, , 3]),
                        this.validateAndPrepareEventTracker(),
                        [
                          4,
                          this.waitForAnalyticsReceiverApiReadyAndUpload(!0, !1)
                        ]
                      )
                    case 1:
                      return t.sent(), [3, 3]
                    case 2:
                      return (
                        (e = t.sent()),
                        (0, s.warn)("UsergeekClient.flush", e),
                        [3, 3]
                      )
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (this.validateAndPrepareEventTracker = function () {
              u(e.config.apiKey, e.clientPrincipal),
                e.askForAnalyticsReceiverApi(),
                e.tracker ||
                  (e.tracker = new c.Tracker(
                    e.config.apiKey,
                    e.clientPrincipal,
                    e.config.eventTrackerConfiguration,
                    e.config.debugConfiguration
                  ))
            }),
            (this.waitForAnalyticsReceiverApiReadyAndUpload = function (t, r) {
              return i(e, void 0, void 0, function () {
                var e = this
                return n(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [
                        4,
                        this.onAnalyticsReceiverApiReady(function (i) {
                          if (i) {
                            var n = {
                              apiKey: e.config.apiKey,
                              clientPrincipal: e.clientPrincipal,
                              host: e.config.host,
                              sdkVersion: 1
                            }
                            if (e.tracker) {
                              var o = e.tracker.upload(
                                i,
                                e.sessionAlreadyTracked,
                                n,
                                t
                              )
                              return r && (e.sessionAlreadyTracked = !0), o
                            }
                          }
                        })
                      ]
                    case 1:
                      return i.sent(), [2]
                  }
                })
              })
            }),
            (this.tryToUploadPendingPackets = function () {
              var t, r, i, n, o
              p(e.config.apiKey) && d(e.clientPrincipal)
                ? (e.tracker &&
                    e.tracker.isClientPrincipalEqual(e.clientPrincipal)) ||
                  ((e.tracker = new c.Tracker(
                    e.config.apiKey,
                    e.clientPrincipal,
                    e.config.eventTrackerConfiguration,
                    e.config.debugConfiguration
                  )),
                  e.tracker.hasUnsentPackets() &&
                    (e.askForAnalyticsReceiverApi(),
                    e.waitForAnalyticsReceiverApiReadyAndUpload(!0, !1)))
                : ((null ===
                    (r =
                      null === (t = e.config) || void 0 === t
                        ? void 0
                        : t.debugConfiguration) || void 0 === r
                    ? void 0
                    : r.loggerWarn) &&
                    (null ===
                      (n =
                        null === (i = e.config) || void 0 === i
                          ? void 0
                          : i.debugConfiguration) ||
                      void 0 === n ||
                      n.loggerWarn(
                        "Please pass valid apiKey and non anonymous Principal."
                      )),
                  (0, s.warn)(
                    "UsergeekClient.tryToUploadPendingPackets: Please pass valid apiKey and non anonymous Principal.",
                    {
                      apiKey:
                        null === (o = e.config) || void 0 === o
                          ? void 0
                          : o.apiKey,
                      clientPrincipal: e.clientPrincipal
                    }
                  ))
            }),
            (this.onAnalyticsReceiverApiReady = function (t) {
              return e.analyticsReceiverApiPromise.then(t)
            }),
            (this.askForAnalyticsReceiverApi = function () {
              e.analyticsReceiverApiPromise ||
                (e.analyticsReceiverApiPromise = Promise.resolve().then(
                  e.getAnalyticsReceiverApi
                ))
            }),
            (this.getAnalyticsReceiverApi = function () {
              return i(e, void 0, void 0, function () {
                var e, t, r
                return n(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        (e = {
                          apiKey: this.config.apiKey,
                          clientPrincipal: this.clientPrincipal,
                          host: this.config.host,
                          sdkVersion: 1
                        }),
                        this.apiService ||
                          (this.apiService = new a.APIService()),
                        [4, this.apiService.getAnalyticsReceiverApi(e)]
                      )
                    case 1:
                      return (
                        (t = i.sent()), (0, s.isOk)(t) ? [2, t.ok] : [2, void 0]
                      )
                    case 2:
                      return (
                        (r = i.sent()),
                        (0, s.warn)(
                          "UsergeekClient.getAnalyticsReceiverApi",
                          r
                        ),
                        [2, void 0]
                      )
                    case 3:
                      return [2]
                  }
                })
              })
            }),
            (this.validateConfig = function () {
              if (void 0 == e.config)
                throw "UsergeekClient: Please initialize Usergeek first!"
            }),
            (this.destroy = function () {
              var t, r, i, n
              e.apiService && (e.apiService.destroy(), (e.apiService = void 0)),
                e.tracker &&
                  (e.tracker.destroy(),
                  (e.tracker = void 0),
                  (null ===
                    (r =
                      null === (t = e.config) || void 0 === t
                        ? void 0
                        : t.debugConfiguration) || void 0 === r
                    ? void 0
                    : r.loggerWarn) &&
                    (null ===
                      (n =
                        null === (i = e.config) || void 0 === i
                          ? void 0
                          : i.debugConfiguration) ||
                      void 0 === n ||
                      n.loggerWarn("Existing Tracker destroyed", {
                        clientPrincipal: e.clientPrincipal
                      })),
                  (0, s.warn)(
                    "UsergeekClient.setPrincipal: existing Tracker destroyed",
                    { clientPrincipal: e.clientPrincipal }
                  )),
                (e.analyticsReceiverApiPromise = void 0),
                (e.sessionAlreadyTracked = !1)
            })
        }
      t.UsergeekClient = l
      var u = function (e, t) {
          if (!p(e)) throw "Usergeek: ApiKey should be not empty string"
          if (!d(t)) throw "Usergeek: anonymous Principal cannot be tracked"
        },
        p = function (e) {
          return "string" == typeof e && e.length > 0
        },
        d = function (e) {
          return e && !e.isAnonymous()
        }
    },
    90335: function (e, t, r) {
      var i =
        (this && this.__assign) ||
        function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                return e
              }),
            i.apply(this, arguments)
          )
        }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCanisterActor = void 0)
      var n = r(68760),
        o = function (e) {
          var t = e.IDL,
            r = t.Nat32,
            i = t.Text,
            n = t.Variant({
              invalidClient: t.Null,
              wrongAccessToken: t.Null,
              temporarilyUnavailable: t.Null
            }),
            o = t.Variant({ ok: t.Null, err: n }),
            a = t.Record({ name: t.Text, sequence: t.Int, timeMillis: t.Int }),
            s = t.Record({ sequence: t.Int, timeMillis: t.Int }),
            c = t.Variant({ event: a, session: s }),
            l = t.Record({ items: t.Vec(c) }),
            u = t.Record({}),
            p = t.Variant({ api: n }),
            d = t.Variant({ ok: u, err: p }),
            y = t.Variant({ ok: t.Bool, err: n }),
            g = t.Func([t.Opt(t.Principal), r, i], [y], ["query"]),
            f = t.Record({ sequence: t.Int }),
            v = t.Record({ rejectedItems: t.Opt(t.Vec(f)) }),
            h = t.Variant({ api: n }),
            R = t.Variant({ ok: v, err: h }),
            A = t.Func([t.Opt(t.Principal), r, i, l], [R], ["query"]),
            k = t.Func([t.Opt(t.Principal), r, i, l], [d], []),
            b = t.Func([t.Opt(t.Principal), r, i], [o], []),
            w = t.Record({
              isCollectRequired: g,
              validatePacket: A,
              collectPacket: k,
              collect: b
            }),
            S = t.Variant({ ok: w, err: n })
          return t.Service({
            collect: t.Func([t.Opt(t.Principal), r, i], [o], []),
            collectPacket: t.Func([t.Opt(t.Principal), r, i, l], [d], []),
            getAnalyticsReceiverApi: t.Func(
              [t.Opt(t.Principal), r, i],
              [S],
              ["query"]
            ),
            isCollectRequired: t.Func(
              [t.Opt(t.Principal), r, i],
              [y],
              ["query"]
            ),
            validatePacket: t.Func(
              [t.Opt(t.Principal), r, i, l],
              [R],
              ["query"]
            )
          })
        }
      t.createCanisterActor = function (e, t, r) {
        return (function (e, t) {
          var r = new n.HttpAgent(
            i({}, null === t || void 0 === t ? void 0 : t.agentOptions)
          )
          return n.Actor.createActor(
            o,
            i(
              { agent: r, canisterId: e },
              null === t || void 0 === t ? void 0 : t.actorOptions
            )
          )
        })(e, { agentOptions: { identity: t, host: r } })
      }
    },
    99502: function (e, t, r) {
      var i =
        (this && this.__assign) ||
        function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                return e
              }),
            i.apply(this, arguments)
          )
        }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCanisterActor = void 0)
      var n = r(68760),
        o = function (e) {
          var t = e.IDL,
            r = t.Nat32,
            i = t.Text,
            n = t.Variant({
              invalidClient: t.Null,
              wrongAccessToken: t.Null,
              temporarilyUnavailable: t.Null
            }),
            o = t.Variant({ ok: t.Bool, err: n }),
            a = t.Func([t.Opt(t.Principal), r, i], [o], ["query"]),
            s = t.Record({ name: t.Text, sequence: t.Int, timeMillis: t.Int }),
            c = t.Record({ sequence: t.Int, timeMillis: t.Int }),
            l = t.Variant({ event: s, session: c }),
            u = t.Record({ items: t.Vec(l) }),
            p = t.Record({ sequence: t.Int }),
            d = t.Record({ rejectedItems: t.Opt(t.Vec(p)) }),
            y = t.Variant({ api: n }),
            g = t.Variant({ ok: d, err: y }),
            f = t.Func([t.Opt(t.Principal), r, i, u], [g], ["query"]),
            v = t.Record({}),
            h = t.Variant({ api: n }),
            R = t.Variant({ ok: v, err: h }),
            A = t.Func([t.Opt(t.Principal), r, i, u], [R], []),
            k = t.Variant({ ok: t.Null, err: n }),
            b = t.Func([t.Opt(t.Principal), r, i], [k], []),
            w = t.Record({
              isCollectRequired: a,
              validatePacket: f,
              collectPacket: A,
              collect: b
            }),
            S = t.Variant({ ok: w, err: n }),
            P = t.Func([t.Opt(t.Principal), r, i], [S], ["query"]),
            m = t.Text,
            C = t.Record({ getAnalyticsReceiverApi: P, accessToken: i }),
            E = t.Variant({
              wrongApiKey: t.Null,
              clientBlocked: t.Null,
              invalidClient: t.Null,
              clientNotRegistered: t.Null,
              temporarilyUnavailable: t.Null,
              wrongTopology: t.Null
            }),
            O = t.Variant({ ok: C, err: E }),
            T = t.Record({
              analyticsReceiver: C,
              analyticsStoreNotified: t.Bool
            }),
            _ = t.Variant({
              wrongApiKey: t.Null,
              invalidClient: t.Null,
              temporarilyUnavailable: t.Null,
              wrongTopology: t.Null
            }),
            I = t.Variant({ ok: T, err: _ })
          return t.Service({
            getAnalyticsReceiver: t.Func(
              [t.Opt(t.Principal), r, m],
              [O],
              ["query"]
            ),
            registerClient: t.Func([t.Opt(t.Principal), r, m], [I], [])
          })
        }
      t.createCanisterActor = function (e, t, r) {
        return (function (e, t) {
          var r = new n.HttpAgent(
            i({}, null === t || void 0 === t ? void 0 : t.agentOptions)
          )
          return n.Actor.createActor(
            o,
            i(
              { agent: r, canisterId: e },
              null === t || void 0 === t ? void 0 : t.actorOptions
            )
          )
        })(e, { agentOptions: { identity: t, host: r } })
      }
    },
    94088: function (e, t, r) {
      var i = r(34155)
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.coordinator_canister_ids = void 0),
        (t.coordinator_canister_ids = i.env.COORDINATOR_CANISTER_IDS || [
          "r5m4o-xaaaa-aaaah-qbpfq-cai",
          "3vhcz-7yaaa-aaaah-qbr2q-cai"
        ])
    },
    95866: function (e, t, r) {
      var i =
        (this && this.__assign) ||
        function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                return e
              }),
            i.apply(this, arguments)
          )
        }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCanisterActor = void 0)
      var n = r(68760),
        o = function (e) {
          var t = e.IDL,
            r = t.Rec(),
            i = t.Nat32,
            n = t.Nat32,
            o = t.Text,
            a = t.Text,
            s = t.Variant({
              invalidClient: t.Null,
              wrongAccessToken: t.Null,
              temporarilyUnavailable: t.Null
            }),
            c = t.Variant({ ok: t.Bool, err: s }),
            l = t.Func([t.Opt(t.Principal), i, a], [c], ["query"]),
            u = t.Record({ name: t.Text, sequence: t.Int, timeMillis: t.Int }),
            p = t.Record({ sequence: t.Int, timeMillis: t.Int }),
            d = t.Variant({ event: u, session: p }),
            y = t.Record({ items: t.Vec(d) }),
            g = t.Record({ sequence: t.Int }),
            f = t.Record({ rejectedItems: t.Opt(t.Vec(g)) }),
            v = t.Variant({ api: s }),
            h = t.Variant({ ok: f, err: v }),
            R = t.Func([t.Opt(t.Principal), i, a, y], [h], ["query"]),
            A = t.Record({}),
            k = t.Variant({ api: s }),
            b = t.Variant({ ok: A, err: k }),
            w = t.Func([t.Opt(t.Principal), i, a, y], [b], []),
            S = t.Variant({ ok: t.Null, err: s }),
            P = t.Func([t.Opt(t.Principal), i, a], [S], []),
            m = t.Record({
              isCollectRequired: l,
              validatePacket: R,
              collectPacket: w,
              collect: P
            }),
            C = t.Variant({ ok: m, err: s }),
            E = t.Func([t.Opt(t.Principal), i, a], [C], ["query"]),
            O = t.Record({ getAnalyticsReceiverApi: E, accessToken: a }),
            T = t.Func([t.Opt(t.Principal), i, t.Opt(n), o], [r], ["query"]),
            _ = t.Record({ topologyId: n, coordinators: t.Vec(T) }),
            I = t.Variant({
              wrongApiKey: t.Null,
              clientBlocked: t.Null,
              invalidClient: t.Null,
              clientNotRegistered: t.Null,
              temporarilyUnavailable: t.Null,
              wrongTopology: t.Null
            }),
            U = t.Variant({ ok: O, err: I }),
            N = t.Func([t.Opt(t.Principal), i, o], [U], ["query"]),
            V = t.Record({
              analyticsReceiver: O,
              analyticsStoreNotified: t.Bool
            }),
            F = t.Variant({
              wrongApiKey: t.Null,
              invalidClient: t.Null,
              temporarilyUnavailable: t.Null,
              wrongTopology: t.Null
            }),
            x = t.Variant({ ok: V, err: F }),
            q = t.Func([t.Opt(t.Principal), i, o], [x], []),
            M = t.Record({ getAnalyticsReceiver: N, registerClient: q })
          return (
            r.fill(
              t.Variant({
                temporaryUnavailable: t.Null,
                invalidClient: t.Null,
                analyticsReceiver: O,
                changeTopology: _,
                clientRegistry: M,
                collectSuccess: t.Null
              })
            ),
            t.Service({
              hello: t.Func(
                [t.Opt(t.Principal), i, t.Opt(n), o],
                [r],
                ["query"]
              )
            })
          )
        }
      t.createCanisterActor = function (e, t, r) {
        return (function (e, t) {
          var r = new n.HttpAgent(
            i({}, null === t || void 0 === t ? void 0 : t.agentOptions)
          )
          return n.Actor.createActor(
            o,
            i(
              { agent: r, canisterId: e },
              null === t || void 0 === t ? void 0 : t.actorOptions
            )
          )
        })(e, { agentOptions: { identity: t, host: r } })
      }
    },
    47130: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Usergeek = void 0)
      var i = new (r(43894).UsergeekClient)()
      t.Usergeek = i
    },
    89149: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PageVisibilityApi = void 0),
        (t.PageVisibilityApi = (function (e) {
          var t =
            "undefined" !== typeof document &&
            Boolean(document.addEventListener)
          if (t) {
            var r = [
                {
                  hidden: "hidden",
                  event: "visibilitychange",
                  state: "visibilityState"
                },
                {
                  hidden: "webkitHidden",
                  event: "webkitvisibilitychange",
                  state: "webkitVisibilityState"
                }
              ],
              i = (function () {
                if (t)
                  for (var e = 0, i = r; e < i.length; e++) {
                    var n = i[e]
                    if (n.hidden in document) return n
                  }
              })()
            if (i)
              return {
                isSupported: function () {
                  return t
                },
                state: function () {
                  return e[i.state]
                },
                addListener: function (t) {
                  e.addEventListener(i.event, t)
                },
                removeListener: function (t) {
                  e.removeEventListener(i.event, t)
                }
              }
          }
          return {
            isSupported: function () {
              return t
            },
            state: function () {
              return "visible"
            },
            addListener: function () {},
            removeListener: function () {}
          }
        })(document))
    },
    30761: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PageVisibilityTracker = void 0)
      var i = r(89149),
        n = r(52340),
        o = "pageVisibility",
        a = (function () {
          function e() {}
          return (
            (e.prototype.start = function (e) {
              var t = this
              this.started ||
                ((this.started = !0),
                i.PageVisibilityApi.isSupported()
                  ? ((this.lastTrackedSessionDayIndex = s()),
                    i.PageVisibilityApi.addListener(function () {
                      if ("visible" == i.PageVisibilityApi.state()) {
                        var r = s()
                        r - t.lastTrackedSessionDayIndex > 0 &&
                          ((t.lastTrackedSessionDayIndex = r),
                          (0, n.log)(o, {
                            action: "trackSession",
                            currentDayIndex: t.lastTrackedSessionDayIndex
                          }),
                          e())
                      }
                    }))
                  : (0, n.warn)(o, "notSupported"))
            }),
            e
          )
        })()
      t.PageVisibilityTracker = a
      var s = function () {
        return Math.floor(new Date().getTime() / 864e5)
      }
    },
    25922: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InMemoryKeyValueStore = void 0)
      var i = r(17326),
        n = (function () {
          function e() {
            this.items = {}
          }
          return (
            (e.prototype.isFake = function () {
              return !0
            }),
            (e.prototype.set = function (e, t) {
              this.items[e] = (0, i.stringifyValue)(t)
            }),
            (e.prototype.get = function (e) {
              var t = this.items[e]
              if (t) return (0, i.parseValue)(t)
            }),
            (e.prototype.remove = function (e) {
              delete this.items[e]
            }),
            (e.prototype.clearAll = function () {
              this.items = {}
            }),
            (e.prototype.isEmpty = function () {
              for (var e in this.items)
                if (this.items.hasOwnProperty(e)) return !1
              return !0
            }),
            e
          )
        })()
      t.InMemoryKeyValueStore = n
    },
    17326: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseValue = t.stringifyValue = void 0)
      t.stringifyValue = function (e) {
        return JSON.stringify(e)
      }
      t.parseValue = function (e) {
        try {
          if (e) return JSON.parse(e)
        } catch (t) {}
        return e
      }
    },
    47972: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KeyValueStoreFacade = t.grabLocalStorage = void 0)
      var i = r(53825),
        n = r(25922)
      t.grabLocalStorage = function () {
        return window.localStorage
      }
      var o = (function () {
        try {
          var e = (0, t.grabLocalStorage)(),
            r = "ug-ic_test_ls"
          return e.setItem(r, "_"), e.removeItem(r), !0
        } catch (i) {
          return !1
        }
      })()
      t.KeyValueStoreFacade = {
        createStore: function (e) {
          return (
            void 0 === e && (e = ""),
            o
              ? new i.LocalStorageKeyValueStore(e)
              : new n.InMemoryKeyValueStore()
          )
        }
      }
    },
    53825: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LocalStorageKeyValueStore = void 0)
      var i = r(17326),
        n = r(47972),
        o = (function () {
          function e(e) {
            void 0 === e && (e = ""),
              (this.namespace = e),
              (this.store = (0, n.grabLocalStorage)())
          }
          return (
            (e.prototype.isFake = function () {
              return !1
            }),
            (e.prototype.set = function (e, t) {
              var r = this.namespace + e,
                n = (0, i.stringifyValue)(t)
              this.store.setItem(r, n)
            }),
            (e.prototype.get = function (e) {
              var t = this.namespace + e,
                r = this.store.getItem(t)
              if (r) return (0, i.parseValue)(r)
            }),
            (e.prototype.remove = function (e) {
              var t = this.namespace + e
              this.store.removeItem(t)
            }),
            (e.prototype.clearAll = function () {
              for (
                var e = (function (e, t) {
                    var r = []
                    return (
                      (function (e, t, r) {
                        for (var i = 0; i < e.length; i++) {
                          var n = e.key(i),
                            o = t
                          n && 0 === n.indexOf(o) && r(n.substring(o.length))
                        }
                      })(e, t, function (e) {
                        return r.push(e)
                      }),
                      r
                    )
                  })(this.store, this.namespace),
                  t = 0;
                t < e.length;
                t++
              ) {
                var r = e[t]
                this.remove(r)
              }
            }),
            (e.prototype.isEmpty = function () {
              for (var e = 0; e < this.store.length; e++) {
                var t = this.store.key(e)
                if (t && 0 === t.indexOf(this.namespace)) return !1
              }
              return !0
            }),
            e
          )
        })()
      t.LocalStorageKeyValueStore = o
    },
    47449: function (e, t) {
      var r =
        (this && this.__assign) ||
        function () {
          return (
            (r =
              Object.assign ||
              function (e) {
                for (var t, r = 1, i = arguments.length; r < i; r++)
                  for (var n in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                return e
              }),
            r.apply(this, arguments)
          )
        }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ConfigurationUtil = void 0),
        (t.ConfigurationUtil = {
          makeConfiguration: function (e) {
            return r(
              {
                uploadReportsCount: 50,
                uploadReportsPeriod: 5e3,
                maxReportsCountInStorage: 1e3,
                removeReportsPercentWhenFull: 2,
                dryRunEnabled: !1
              },
              e
            )
          }
        })
    },
    65598: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Report = void 0)
      var i = r(52340),
        n = (function () {
          function e(e, t, r) {
            ;(this.sequence = e), (this.timeMillis = t), (this.content = r)
          }
          return (
            (e.serialize = function (e) {
              return JSON.stringify({
                sequence: e.sequence,
                timeMillis: e.timeMillis,
                content: JSON.stringify(e.content)
              })
            }),
            (e.deserialize = function (t) {
              var r = i.UsergeekUtils.parseJSONSafe(t)
              if (r) {
                var n = r.sequence,
                  o = r.timeMillis,
                  a = r.content
                if (
                  i.UsergeekUtils.isNumber(n) &&
                  i.UsergeekUtils.isNumber(o) &&
                  i.UsergeekUtils.isString(a)
                ) {
                  var s = i.UsergeekUtils.parseJSONSafe(a)
                  if (s) {
                    if ((0, i.hasOwnProperty)(s, "event")) return new e(n, o, s)
                    if ((0, i.hasOwnProperty)(s, "session"))
                      return new e(n, o, s)
                  }
                }
              }
            }),
            e
          )
        })()
      t.Report = n
    },
    73421: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ReportsStorage = void 0)
      var i = r(65598),
        n = "reports",
        o = (function () {
          function e(e) {
            this.api = e
          }
          return (
            (e.prototype.getMaxSequence = function () {
              var e = 0
              return (
                this.getReports().forEach(function (t) {
                  e = Math.max(t.sequence, e)
                }),
                e
              )
            }),
            (e.prototype.getReportsCount = function () {
              return this._storage_getReportsSafe().length
            }),
            (e.prototype.putReport = function (e, t, r) {
              var n = this._storage_getReportsSafe(),
                o = new i.Report(e, t, r),
                a = i.Report.serialize(o)
              return n.push(a), this._storage_setReports(n)
            }),
            (e.prototype.tryToFreeSpace = function (e, t) {
              var r = this.getReportsCount(),
                i = Math.ceil((r * t) / 100),
                n = e - Math.max(1, r - i)
              return [this.removeEarlyReports(n), i]
            }),
            (e.prototype.removeEarlyReports = function (e) {
              var t = -1
              if (
                (this.getReports().forEach(function (r, i) {
                  r.sequence <= e && (t = i)
                }),
                t > -1)
              ) {
                var r = this._storage_getReportsSafe()
                return r.splice(0, t + 1), this._storage_setReports(r)
              }
              return !0
            }),
            (e.prototype.getReports = function (e) {
              var t = void 0 !== e ? e : -1,
                r = [],
                n = t < 0
              return (
                this._storage_getReportsSafe().some(function (e, o) {
                  var a = !n && o >= t
                  if (!a) {
                    var s = i.Report.deserialize(e)
                    s && r.push(s)
                  }
                  return a
                }),
                r
              )
            }),
            (e.prototype.clearAll = function () {
              this._storage_clearReports()
            }),
            (e.prototype._storage_getReportsSafe = function () {
              return this.api.get(n) || Array()
            }),
            (e.prototype._storage_setReports = function (e) {
              try {
                return this.api.set(n, e), !0
              } catch (t) {
                return !1
              }
            }),
            (e.prototype._storage_clearReports = function () {
              this.api.remove(n)
            }),
            e
          )
        })()
      t.ReportsStorage = o
    },
    57194: function (e, t, r) {
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        n =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tracker = void 0)
      var o = r(52340),
        a = r(73421),
        s = r(47972),
        c = r(47449),
        l = r(34015),
        u = (function () {
          function e(e, t, r, i) {
            var n,
              l,
              u = this
            ;(this.scheduleUpload = !1),
              (this.uploading = !1),
              (this.destroyed = !1),
              (this.isClientPrincipalEqual = function (e) {
                var t
                return (
                  (null === e || void 0 === e ? void 0 : e.toText()) ==
                  (null === (t = u.clientPrincipal) || void 0 === t
                    ? void 0
                    : t.toText())
                )
              }),
              (this.logSession = function () {
                try {
                  var e = { session: {} }
                  u.logReport(o.UsergeekUtils.getCurrentTime(), e)
                } catch (t) {}
              }),
              (this.logEvent = function (e) {
                try {
                  var t = { event: { name: String(e).trim() } }
                  u.logReport(o.UsergeekUtils.getCurrentTime(), t)
                } catch (r) {}
              }),
              (this.destroy = function () {
                var e
                ;(u.destroyed = !0),
                  null === (e = u.uploader) || void 0 === e || e.destroy(),
                  window.clearTimeout(u.scheduleUploadTimer),
                  (u.scheduleUpload = !1),
                  (0, o.warn)("Tracker: destroyed")
              }),
              (this.logReport = function (e, t) {
                var r, i, n, o, a, s, c, l, p, d, y, g, f, v
                u.validateSequence()
                var h = ++u.sequence
                if (u.validateReport(t))
                  if (u.configuration.dryRunEnabled)
                    t &&
                      (null === (r = u.debugConfiguration) || void 0 === r
                        ? void 0
                        : r.loggerLog) &&
                      (null === (i = u.debugConfiguration) ||
                        void 0 === i ||
                        i.loggerLog("Report skipped (dryRun ON)", {
                          reportContent: t
                        }))
                  else {
                    if (u.reportsStorage.putReport(h, e, t))
                      t &&
                        (null === (p = u.debugConfiguration) || void 0 === p
                          ? void 0
                          : p.loggerLog) &&
                        (null === (d = u.debugConfiguration) ||
                          void 0 === d ||
                          d.loggerLog("Report stored", {
                            reportSequence: h,
                            timeMillis: e,
                            reportContent: t
                          }))
                    else {
                      ;(null === (n = u.debugConfiguration) || void 0 === n
                        ? void 0
                        : n.loggerError) &&
                        (null === (o = u.debugConfiguration) ||
                          void 0 === o ||
                          o.loggerError(
                            "Unable to store data in localStorage. Seems that there is no space left... Will try to remove " +
                              u.configuration.removeReportsPercentWhenFull +
                              "% of oldest events"
                          ))
                      var R = u.reportsStorage.tryToFreeSpace(
                          h,
                          u.configuration.removeReportsPercentWhenFull
                        ),
                        A = R[0],
                        k = R[1]
                      A
                        ? ((null === (a = u.debugConfiguration) || void 0 === a
                            ? void 0
                            : a.loggerWarn) &&
                            (null === (s = u.debugConfiguration) ||
                              void 0 === s ||
                              s.loggerWarn(
                                "Number of reports removed: " +
                                  k +
                                  ". Actual reports: " +
                                  u.reportsStorage.getReportsCount()
                              )),
                          u.reportsStorage.putReport(h, e, t))
                        : ((null === (c = u.debugConfiguration) || void 0 === c
                            ? void 0
                            : c.loggerError) &&
                            (null === (l = u.debugConfiguration) ||
                              void 0 === l ||
                              l.loggerError(
                                "Failed to remove " +
                                  k +
                                  " reports. Existing reports: " +
                                  u.reportsStorage.getReportsCount()
                              )),
                          u.reportsStorage.clearAll())
                    }
                    if (
                      u.reportsStorage.getReportsCount() >
                      u.configuration.maxReportsCountInStorage
                    ) {
                      var b = u.reportsStorage.tryToFreeSpace(
                        h,
                        u.configuration.removeReportsPercentWhenFull
                      )
                      ;(A = b[0]), (k = b[1])
                      A
                        ? (null === (y = u.debugConfiguration) || void 0 === y
                            ? void 0
                            : y.loggerWarn) &&
                          (null === (g = u.debugConfiguration) ||
                            void 0 === g ||
                            g.loggerWarn(
                              "Number of reports removed: " +
                                k +
                                ". Actual reports: " +
                                u.reportsStorage.getReportsCount()
                            ))
                        : (null === (f = u.debugConfiguration) || void 0 === f
                            ? void 0
                            : f.loggerError) &&
                          (null === (v = u.debugConfiguration) ||
                            void 0 === v ||
                            v.loggerError(
                              "Failed to remove " +
                                k +
                                " reports. Existing reports: " +
                                u.reportsStorage.getReportsCount()
                            ))
                    }
                  }
              }),
              (this.validateSequence = function () {
                9007199254740990 === u.sequence && (u.sequence = 0)
              }),
              (this.clientPrincipal = t),
              (this.configuration = c.ConfigurationUtil.makeConfiguration(r)),
              (this.debugConfiguration = i)
            var p =
              "ug-ic" +
              e +
              "." +
              this.clientPrincipal.toText() +
              ".reportsStorage"
            ;(this.reportsStorage = new a.ReportsStorage(
              s.KeyValueStoreFacade.createStore(p)
            )),
              (this.sequence = this.reportsStorage.getMaxSequence()),
              this.validateSequence(),
              (null === (n = this.debugConfiguration) || void 0 === n
                ? void 0
                : n.loggerLog) &&
                (null === (l = this.debugConfiguration) ||
                  void 0 === l ||
                  l.loggerLog("ReportStorage created", {
                    storeNamespace: p,
                    sequence: this.sequence,
                    reportsCount: this.reportsStorage.getReportsCount()
                  })),
              (0, o.log)(
                'ReportStorage created with namespace "' +
                  p +
                  '", sequence = ' +
                  this.sequence +
                  ", unsent reports in storage = " +
                  this.reportsStorage.getReportsCount()
              )
          }
          return (
            (e.prototype.hasUnsentPackets = function () {
              return this.reportsStorage.getReportsCount() > 0
            }),
            (e.prototype.upload = function (e, t, r, a) {
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  try {
                    return e
                      ? (e.analyticsStoreNotified,
                        this.uploader ||
                          (this.uploader = new l.UploaderImpl(
                            e.analyticsReceiverApiView,
                            r
                          )),
                        this.proceedToUpload(a),
                        [2, (0, o.createOkResult)("ok")])
                      : ((0, o.warn)(
                          "Tracker.upload: analyticsReceiverApiResult is undefined. upload skipped"
                        ),
                        [
                          2,
                          (0, o.createErrResult)(
                            new Error("AnalyticsStore unavailable.")
                          )
                        ])
                  } catch (i) {
                    return (
                      (0, o.warn)("Tracker.upload", i),
                      [2, (0, o.createErrResult)(i)]
                    )
                  }
                  return [2]
                })
              })
            }),
            (e.prototype.proceedToUpload = function (e) {
              var t = this.reportsStorage.getReportsCount()
              t > 0 &&
                (e &&
                  (window.clearTimeout(this.scheduleUploadTimer),
                  (this.scheduleUpload = !1)),
                e || t >= this.configuration.uploadReportsCount
                  ? this.uploadReports()
                  : this.scheduleUploadReports())
            }),
            (e.prototype.uploadReports = function () {
              var e, t
              return i(this, void 0, void 0, function () {
                var r, i, a, s
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (this.destroyed)
                        return (
                          (0, o.warn)(
                            "Tracker: uploadReports skipped - destroyed"
                          ),
                          [2]
                        )
                      if (this.uploading) return [2]
                      ;(this.uploading = !0), (n.label = 1)
                    case 1:
                      return (
                        n.trys.push([1, 5, , 6]),
                        (r = this.configuration.uploadReportsCount),
                        (i = this.reportsStorage.getReports(r)),
                        (a = this.buildUploadEventPacket(i))
                          ? ((null === (e = this.debugConfiguration) ||
                            void 0 === e
                              ? void 0
                              : e.loggerLog) &&
                              (null === (t = this.debugConfiguration) ||
                                void 0 === t ||
                                t.loggerLog(
                                  "Will send packet",
                                  o.UsergeekUtils.jsonStringifyWithBigInt({
                                    packet: a
                                  })
                                )),
                            [4, this.uploader.uploadEventPacket(a.packet)])
                          : [3, 3]
                      )
                    case 2:
                      return (
                        (s = n.sent()),
                        this.handleUploadReportsResult(s, a.maxSequence),
                        [3, 4]
                      )
                    case 3:
                      ;(this.uploading = !1), (n.label = 4)
                    case 4:
                      return [3, 6]
                    case 5:
                      return (
                        n.sent(),
                        (this.uploading = !1),
                        this.scheduleUploadReports(),
                        [3, 6]
                      )
                    case 6:
                      return [2]
                  }
                })
              })
            }),
            (e.prototype.handleUploadReportsResult = function (e, t) {
              var r, i, n, a
              ;(this.uploading = !1),
                (0, o.isOk)(e)
                  ? (this.reportsStorage.removeEarlyReports(t),
                    (null === (r = this.debugConfiguration) || void 0 === r
                      ? void 0
                      : r.loggerLog) &&
                      (null === (i = this.debugConfiguration) ||
                        void 0 === i ||
                        i.loggerLog("Packet sent")),
                    this.uploadReports())
                  : ((null === (n = this.debugConfiguration) || void 0 === n
                      ? void 0
                      : n.loggerWarn) &&
                      (null === (a = this.debugConfiguration) ||
                        void 0 === a ||
                        a.loggerWarn(
                          "Packet send failed",
                          o.UsergeekUtils.jsonStringifyWithBigInt({ result: e })
                        )),
                    this.scheduleUploadReports())
            }),
            (e.prototype.scheduleUploadReports = function () {
              if (this.destroyed)
                (0, o.warn)(
                  "Tracker: scheduleUploadReports skipped - destroyed"
                )
              else if (!this.scheduleUpload) {
                ;(this.scheduleUpload = !0),
                  window.clearTimeout(this.scheduleUploadTimer)
                var e = this.configuration.uploadReportsPeriod
                this.scheduleUploadTimer = window.setTimeout(
                  this.uploadReportsDelayed.bind(this),
                  e
                )
              }
            }),
            (e.prototype.uploadReportsDelayed = function () {
              ;(this.scheduleUpload = !1), this.uploadReports()
            }),
            (e.prototype.buildUploadEventPacket = function (e) {
              if (e.length > 0) {
                var t = 0
                return {
                  packet: {
                    items: e.map(function (e) {
                      return (
                        (t = Math.max(e.sequence, t)),
                        (0, o.hasOwnProperty)(e.content, "event")
                          ? {
                              event: {
                                name: e.content.event.name,
                                sequence: BigInt(e.sequence),
                                timeMillis: BigInt(e.timeMillis)
                              }
                            }
                          : (0, o.hasOwnProperty)(e.content, "session")
                          ? {
                              session: {
                                sequence: BigInt(e.sequence),
                                timeMillis: BigInt(e.timeMillis)
                              }
                            }
                          : void 0
                      )
                    })
                  },
                  maxSequence: t
                }
              }
            }),
            (e.prototype.validateReport = function (e) {
              var t, r
              if ((0, o.hasOwnProperty)(e, "event")) {
                var i = null,
                  n = e.event.name
                if (
                  (o.UsergeekUtils.isStringEmpty(n)
                    ? (i = "empty")
                    : o.UsergeekUtils.getSize(n) > 1024 && (i = "tooLong"),
                  i)
                )
                  return (
                    (null === (t = this.debugConfiguration) || void 0 === t
                      ? void 0
                      : t.loggerError) &&
                      (null === (r = this.debugConfiguration) ||
                        void 0 === r ||
                        r.loggerError("Failed to send event!", {
                          event: e.event,
                          error: i
                        })),
                    !1
                  )
              }
              return !0
            }),
            e
          )
        })()
      t.Tracker = u
    },
    34015: function (e, t, r) {
      var i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, i = arguments.length; r < i; r++)
                    for (var n in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, n) &&
                        (e[n] = t[n])
                  return e
                }),
              i.apply(this, arguments)
            )
          },
        n =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function a(e) {
                try {
                  c(i.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                try {
                  c(i.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function c(e) {
                var t
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t)
                        })).then(a, s)
              }
              c((i = i.apply(e, t || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              i,
              n,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1]
                  return n[1]
                },
                trys: [],
                ops: []
              }
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (r) throw new TypeError("Generator is already executing.")
                  for (; a; )
                    try {
                      if (
                        ((r = 1),
                        i &&
                          (n =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((n = i.return) && n.call(i), 0)
                              : i.next) &&
                          !(n = n.call(i, o[1])).done)
                      )
                        return n
                      switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                        case 0:
                        case 1:
                          n = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (i = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!n || (o[1] > n[0] && o[1] < n[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < n[1]) {
                            ;(a.label = n[1]), (n = o)
                            break
                          }
                          if (n && a.label < n[2]) {
                            ;(a.label = n[2]), a.ops.push(o)
                            break
                          }
                          n[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (s) {
                      ;(o = [6, s]), (i = 0)
                    } finally {
                      r = n = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, s])
              }
            }
          }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UploaderImpl = void 0)
      var a = r(87617),
        s = r(8936),
        c = r(52340),
        l = function (e, t) {
          var r = this
          ;(this.uploadEventPacket = function (e) {
            return n(r, void 0, void 0, function () {
              var t, r, n
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      (t = i(i({}, this.apiParameters), {
                        canisterPrincipal:
                          this.analyticsReceiverApiView.canisterPrincipal,
                        accessToken: this.analyticsReceiverApiView.accessToken,
                        packet: e
                      })),
                      this.analyticsStoreApi ||
                        (this.analyticsStoreApi = new a.AnalyticsStoreApi()),
                      [
                        4,
                        this.analyticsStoreApi.trackPacketRecursively(
                          t,
                          s.ANALYTICS_STORE_RETRIES
                        )
                      ]
                    )
                  case 1:
                    return (r = o.sent()), (0, c.isOk)(r) ? [2, r] : [3, 3]
                  case 2:
                    return (
                      (n = o.sent()),
                      (0, c.warn)(
                        "Uploader.uploadEventPacket trackPacketRecursively",
                        n
                      ),
                      [3, 3]
                    )
                  case 3:
                    return [2, (0, c.createErrResult)(null)]
                }
              })
            })
          }),
            (this.destroy = function () {
              var e
              null === (e = r.analyticsStoreApi) || void 0 === e || e.destroy(),
                (r.analyticsStoreApi = void 0),
                (0, c.warn)("Uploader: destroyed")
            }),
            (this.analyticsReceiverApiView = e),
            (this.apiParameters = t)
        }
      t.UploaderImpl = l
    },
    52340: function (e, t) {
      var r =
        (this && this.__spreadArray) ||
        function (e, t, r) {
          if (r || 2 === arguments.length)
            for (var i, n = 0, o = t.length; n < o; n++)
              (!i && n in t) ||
                (i || (i = Array.prototype.slice.call(t, 0, n)), (i[n] = t[n]))
          return e.concat(i || Array.prototype.slice.call(t))
        }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UsergeekUtils =
          t.warn =
          t.log =
          t.delayPromise =
          t.getSharedFunctionDataPrincipal =
          t.getSharedFunctionData =
          t.isErrWrongTopology =
          t.isErrApi =
          t.isErrTemporarilyUnavailable =
          t.createErrRestart =
          t.createErrRetry =
          t.createErrFatal =
          t.createProceedResult =
          t.createErrResult =
          t.createOkResult =
          t.isProceed =
          t.isErr =
          t.isOk =
          t.hasOwnProperty =
            void 0)
      var i = "proceed"
      function n(e, t) {
        return e && e.hasOwnProperty(t)
      }
      t.hasOwnProperty = n
      t.isOk = function (e) {
        return n(e, "ok")
      }
      t.isErr = function (e) {
        return n(e, "err")
      }
      t.isProceed = function (e) {
        return n(e, i)
      }
      t.createOkResult = function (e) {
        var t
        return ((t = {}).ok = e), t
      }
      t.createErrResult = function (e) {
        var t
        return ((t = {}).err = e), t
      }
      t.createProceedResult = function (e) {
        var t
        return ((t = {}).proceed = e), t
      }
      t.createErrFatal = function () {
        return (0, t.createErrResult)("fatal")
      }
      t.createErrRetry = function () {
        return (0, t.createErrResult)("retry")
      }
      t.createErrRestart = function () {
        return (0, t.createErrResult)("restart")
      }
      t.isErrTemporarilyUnavailable = function (e) {
        return n(e, "temporarilyUnavailable")
      }
      t.isErrApi = function (e) {
        return n(e, "api")
      }
      t.isErrWrongTopology = function (e) {
        return n(e, "wrongTopology")
      }
      t.getSharedFunctionData = function (e) {
        try {
          if (Array.isArray(e)) {
            var r = e
            if (2 === r.length) {
              var i = r[0]
              return (
                "function" != typeof i.toText &&
                  (0, t.warn)(
                    "util.getSharedFunctionData: bad principal object",
                    i
                  ),
                [i, r[1]]
              )
            }
          }
        } catch (n) {
          ;(0, t.warn)("util.getSharedFunctionData", n)
        }
      }
      t.getSharedFunctionDataPrincipal = function (e) {
        try {
          if (Array.isArray(e)) {
            var r = e
            if (2 === r.length) {
              var i = r[0]
              return (
                "function" != typeof i.toText &&
                  (0, t.warn)(
                    "util.getSharedFunctionDataPrincipal: bad principal object",
                    i
                  ),
                i
              )
            }
          }
        } catch (n) {
          ;(0, t.warn)("util.getSharedFunctionDataPrincipal", n)
        }
      }
      ;(t.delayPromise = function (e) {
        return new Promise(function (t) {
          return setTimeout(t, e)
        })
      }),
        (t.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          a("log", e)
        })
      t.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
        a("warn", e)
      }
      var o = 0
      function a(e, t) {
        ;(window.UsergeekLog = window.UsergeekLog || {}),
          (window.UsergeekLog[e] = window.UsergeekLog[e] || []),
          window.UsergeekLog[e].push(r([o++, new Date().getTime()], t, !0)),
          window.UsergeekLog[e].length >= 1e3 &&
            window.UsergeekLog[e].splice(0, 100)
      }
      var s = (function () {
        function e() {}
        return (
          (e.getCurrentTime = function () {
            return new Date().getTime()
          }),
          (e.isString = function (e) {
            return "string" === typeof e || e instanceof String
          }),
          (e.isStringEmpty = function (t) {
            return !e.isString(t) || 0 === t.length
          }),
          (e.isNil = function (e) {
            return null == e
          }),
          (e.isNumber = function (t) {
            return (
              "number" === typeof t ||
              (e.isObjectLike(t) && "[object Number]" === e.getTag(t))
            )
          }),
          (e.isMap = function (e) {
            return e instanceof Map
          }),
          (e.isArray = function (e) {
            return e instanceof Array || Array.isArray(e)
          }),
          (e.isObjectLike = function (e) {
            return "object" === typeof e && null !== e
          }),
          (e.getTag = function (e) {
            return null == e
              ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
              : toString.call(e)
          }),
          (e.parseJSONSafe = function (e) {
            try {
              return JSON.parse(e)
            } catch (t) {}
          }),
          (e.getSize = function (t) {
            return e.isNil(t)
              ? 0
              : e.isMap(t)
              ? t.size
              : e.isObjectLike(t)
              ? Object.keys(t).length
              : e.isArray(t) || e.isString(t)
              ? t.length
              : 0
          }),
          (e.jsonStringifyWithBigInt = function (e) {
            return JSON.stringify(e, function (e, t) {
              return "bigint" === typeof t ? t.toString() + "n" : t
            })
          }),
          (e.jsonParseWithBigInt = function (e) {
            return JSON.parse(e, function (e, t) {
              return "string" === typeof t && /^\d+n$/.test(t)
                ? BigInt(t.substr(0, t.length - 1))
                : t
            })
          }),
          e
        )
      })()
      t.UsergeekUtils = s
    }
  }
])
