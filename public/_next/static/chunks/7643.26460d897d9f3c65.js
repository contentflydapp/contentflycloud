"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7643],
  {
    27643: function (e, n, t) {
      t.r(n)
      var l = t(67294),
        i = t(25527),
        o = t(11972),
        r = t(51815),
        a = t(27149),
        s = t(42273),
        c = t(50828),
        u = t(98400),
        E = t(23256)
      n.default = (0, c.Pi)(function () {
        var e = (0, u.oR)(E.Z),
          n = (0, a.Z)(function (e) {
            e && t()
          }, e.appContext.authProvider),
          t = function () {
            e.setSessionExpired(!1)
          }
        return l.createElement(
          i.aR,
          { isOpen: e.isSessionExpired, onClose: t },
          l.createElement(
            i.dh,
            null,
            l.createElement(
              i._T,
              null,
              l.createElement(
                i.fY,
                { fontSize: "lg", fontWeight: "bold" },
                "Sesssion expired"
              ),
              l.createElement(
                i.iP,
                null,
                "Your login session has expired. Please login again to continue."
              ),
              l.createElement(
                i.xo,
                null,
                l.createElement(
                  o.Ug,
                  { width: "100%" },
                  l.createElement(
                    s.Z,
                    { onClick: n, mb: "0px", w: "75%" },
                    "Login with Internet Identity"
                  ),
                  l.createElement(o.LZ, null),
                  l.createElement(
                    r.zx,
                    { onClick: t, h: "60px", w: "25%" },
                    "Later"
                  )
                )
              )
            )
          )
        )
      })
    }
  }
])
