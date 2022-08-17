"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5877, 953],
  {
    53918: function (e, t, n) {
      n.d(t, {
        C: function () {
          return m
        }
      })
      var l = n(67294),
        r = n(21818),
        c = n(89583),
        a = n(88523),
        u = n(25527),
        o = n(11972),
        i = n(51815),
        m = function (e) {
          var t = e.url,
            n = e.title,
            m = e.body,
            E = void 0 === m ? "" : m,
            s = e.isOpen,
            p = e.onClose,
            h = (0, a.VP)(t),
            d = h.hasCopied,
            z = h.onCopy,
            f = 56
          return l.createElement(
            u.u_,
            { isOpen: s, onClose: p },
            l.createElement(u.ZA, null),
            l.createElement(
              u.hz,
              { bgColor: "black_3" },
              l.createElement(
                u.xB,
                { color: "white" },
                l.createElement(o.X6, { size: "md" }, "Share Job")
              ),
              l.createElement(u.ol, { color: "white" }),
              l.createElement(
                u.fe,
                { color: "white" },
                l.createElement(
                  o.Ug,
                  { align: "center" },
                  l.createElement(
                    o.xv,
                    { fontSize: "12px", isTruncated: !0 },
                    t
                  ),
                  l.createElement(o.LZ, null),
                  l.createElement(
                    i.zx,
                    {
                      onClick: z,
                      leftIcon: l.createElement(c.Dup, null),
                      variant: "outline",
                      colorScheme: "green_scheme",
                      size: "sm",
                      minW: "90px"
                    },
                    d ? "Copied" : "Copy"
                  )
                ),
                l.createElement(
                  o.Eq,
                  { py: "16px", spacing: "12px" },
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.cG,
                      { url: t, subject: n, body: E },
                      l.createElement(r.LQ, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.B,
                      { url: t, title: n },
                      l.createElement(r.Zm, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.tq,
                      { url: t, title: n },
                      l.createElement(r.YG, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.N0,
                      { url: t, title: n, separator: ":: " },
                      l.createElement(r.ud, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.m$,
                      { url: t, title: n },
                      l.createElement(r.bd, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.Zh,
                      { url: t },
                      l.createElement(r.v2, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.Dk,
                      { url: t, quote: n, hashtag: "#contentflyapp" },
                      l.createElement(r.Vq, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.Ni,
                      {
                        url: t,
                        title: n,
                        summary: E,
                        source: "Content Fly App"
                      },
                      l.createElement(r.zb, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.iR,
                      { url: t, title: n },
                      l.createElement(r.MP, { size: f, round: !0 })
                    )
                  ),
                  l.createElement(
                    o.Uc,
                    null,
                    l.createElement(
                      r.r2,
                      { url: t },
                      l.createElement(r.pA, { size: f, round: !0 })
                    )
                  )
                )
              )
            )
          )
        }
    },
    60953: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l
        },
        c: function () {
          return r
        }
      })
      var l = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e.length,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            l =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 3,
            r = ""
          return (
            (r += e.substring(0, t)),
            (r += ".".repeat(l)),
            (r += e.substring(e.length - n, e.length))
          )
        },
        r = function (e) {
          return null == e
            ? ""
            : e.startsWith("https://") || e.startsWith("http://")
            ? e
            : "https://".concat(e)
        }
    }
  }
])
