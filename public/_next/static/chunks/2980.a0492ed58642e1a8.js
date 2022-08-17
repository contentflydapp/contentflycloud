"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2980],
  {
    62980: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ZoomImageModal: function () {
            return s
          }
        })
      var i = n(67294),
        l = n(25527),
        r = n(11972),
        o = n(51815),
        u = n(59876),
        a = n(63750),
        c = n(8193),
        s = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            s = e.imageItem,
            m = e.isFullScreen,
            p = e.setFullScreen,
            x = e.ImageComponent
          return i.createElement(
            l.u_,
            { isOpen: t, onClose: n, size: m ? "full" : "xl" },
            i.createElement(l.ZA, null),
            i.createElement(
              l.hz,
              null,
              i.createElement(
                r.kC,
                { alignItems: "center", justifyContent: "center" },
                i.createElement(
                  r.xu,
                  {
                    bg: "white",
                    borderRadius: m ? "0px" : "12px",
                    w: m ? "full" : "unset",
                    h: m ? "full" : "unset"
                  },
                  i.createElement(o.hU, {
                    variant: "outline",
                    fontSize: "20px",
                    size: "md",
                    icon: m
                      ? i.createElement(c.sz8, null)
                      : i.createElement(a.RS4, null),
                    onClick: function () {
                      return p(!m)
                    },
                    position: "absolute",
                    right: "48px"
                  }),
                  i.createElement(o.hU, {
                    variant: "outline",
                    fontSize: "20px",
                    size: "md",
                    icon: i.createElement(u.Tw, null),
                    onClick: n,
                    position: "absolute",
                    right: "0px"
                  }),
                  i.createElement(x, {
                    imageId: s.imageId,
                    h: m ? "unset" : "400px",
                    borderRadius: m ? "" : "6px 6px 0px 0px"
                  }),
                  ((!m && s.title) || s.description) &&
                    i.createElement(
                      r.xu,
                      { p: "6" },
                      s.title &&
                        i.createElement(
                          r.xu,
                          {
                            fontSize: "2xl",
                            fontWeight: "semibold",
                            lineHeight: "tight"
                          },
                          s.title
                        ),
                      s.description &&
                        i.createElement(
                          r.xv,
                          {
                            fontSize: "14px",
                            lineHeight: "tight",
                            whiteSpace: "pre-line"
                          },
                          s.description
                        )
                    )
                )
              )
            )
          )
        }
    }
  }
])
