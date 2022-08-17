;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3646],
  {
    62304: function (l, a, e) {
      "use strict"
      e.d(a, {
        Ph: function () {
          return h
        }
      })
      var u = e(73733),
        b = e(78042),
        v = e(81812),
        i = e(63949),
        n = e(38554),
        r = e.n(n),
        t = e(67294)
      function o() {
        return (
          (o =
            Object.assign ||
            function (l) {
              for (var a = 1; a < arguments.length; a++) {
                var e = arguments[a]
                for (var u in e)
                  Object.prototype.hasOwnProperty.call(e, u) && (l[u] = e[u])
              }
              return l
            }),
          o.apply(this, arguments)
        )
      }
      function s(l, a) {
        if (null == l) return {}
        var e,
          u,
          b = {},
          v = Object.keys(l)
        for (u = 0; u < v.length; u++)
          (e = v[u]), a.indexOf(e) >= 0 || (b[e] = l[e])
        return b
      }
      var d = ["children", "placeholder", "className"],
        c = [
          "rootProps",
          "placeholder",
          "icon",
          "color",
          "height",
          "h",
          "minH",
          "minHeight",
          "iconColor",
          "iconSize",
          "isFullWidth"
        ],
        S = ["children"],
        M = (0, b.Gp)(function (l, a) {
          var e = l.children,
            u = l.placeholder,
            v = l.className,
            n = s(l, d)
          return t.createElement(
            b.m$.select,
            o({}, n, { ref: a, className: (0, i.cx)("chakra-select", v) }),
            u && t.createElement("option", { value: "" }, u),
            e
          )
        })
      i.Ts && (M.displayName = "SelectField")
      var h = (0, b.Gp)(function (l, a) {
        var e = (0, b.jC)("Select", l),
          n = (0, b.Lr)(l),
          d = n.rootProps,
          S = n.placeholder,
          h = n.icon,
          m = n.color,
          C = n.height,
          B = n.h,
          g = n.minH,
          p = n.minHeight,
          I = n.iconColor,
          T = n.iconSize
        n.isFullWidth
        var N = s(n, c),
          A = (0, i.Vl)(N, v.oE),
          L = A[0],
          E = A[1],
          P = (0, u.Yp)(E),
          R = {
            width: "100%",
            height: "fit-content",
            position: "relative",
            color: m
          },
          y = r()({ paddingEnd: "2rem" }, e.field, {
            _focus: { zIndex: "unset" }
          })
        return t.createElement(
          b.m$.div,
          o({ className: "chakra-select__wrapper", __css: R }, L, d),
          t.createElement(
            M,
            o(
              {
                ref: a,
                height: null != B ? B : C,
                minH: null != g ? g : p,
                placeholder: S
              },
              P,
              { __css: y }
            ),
            l.children
          ),
          t.createElement(
            G,
            o(
              { "data-disabled": (0, i.PB)(P.disabled) },
              (I || m) && { color: I || m },
              { __css: e.icon },
              T && { fontSize: T }
            ),
            h
          )
        )
      })
      i.Ts && (h.displayName = "Select")
      var m = function (l) {
          return t.createElement(
            "svg",
            o({ viewBox: "0 0 24 24" }, l),
            t.createElement("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
            })
          )
        },
        C = (0, b.m$)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)"
          }
        }),
        G = function (l) {
          var a = l.children,
            e = void 0 === a ? t.createElement(m, null) : a,
            u = s(l, S),
            b = t.cloneElement(e, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: { width: "1em", height: "1em", color: "currentColor" }
            })
          return t.createElement(
            C,
            o({}, u, { className: "chakra-select__icon-wrapper" }),
            t.isValidElement(e) ? b : null
          )
        }
      i.Ts && (G.displayName = "SelectIcon")
    },
    72635: function (l, a, e) {
      class u {
        constructor() {
          ;(this.data = e(22087)),
            (this.labelMap = {}),
            (this.valueMap = {}),
            this.data.forEach(l => {
              ;(this.labelMap[l.label.toLowerCase()] = l.value),
                (this.valueMap[l.value.toLowerCase()] = l.label)
            })
        }
        getValue(l) {
          return this.labelMap[l.toLowerCase()]
        }
        getLabel(l) {
          return this.valueMap[l.toLowerCase()]
        }
        getLabels() {
          return this.data.map(l => l.label)
        }
        getValues() {
          return this.data.map(l => l.value)
        }
        getLabelList() {
          return this.labelMap
        }
        getValueList() {
          return this.valueMap
        }
        getData() {
          return this.data
        }
        setLabel(l, a) {
          return (
            this.data.forEach(e => {
              e.value === l &&
                ((e.label = a),
                (this.valueMap[e.value.toLowerCase()] = e.label))
            }),
            this
          )
        }
        setEmpty(l) {
          return (
            this.data.unshift({ value: "", label: l }),
            (this.valueMap[""] = l),
            (this.labelMap[l] = ""),
            this
          )
        }
        native() {
          return (
            (this.nativeData = e(74909)),
            this.nativeData.forEach(l => {
              ;(this.labelMap[l.label.toLowerCase()] = l.value),
                (this.valueMap[l.value.toLowerCase()] = l.label)
            }),
            this
          )
        }
      }
      l.exports = () => {
        if (!(this instanceof u)) return new u()
      }
    },
    74909: function (l) {
      "use strict"
      l.exports = JSON.parse(
        '[{"value":"AF","label":"\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"},{"value":"AX","label":"\xc5land"},{"value":"AL","label":"Shqip\xebria"},{"value":"DZ","label":"\u0627\u0644\u062c\u0632\u0627\u0626\u0631"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"\xd6sterreich"},{"value":"AZ","label":"Az\u0259rbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"\u200f\u0627\u0644\u0628\u062d\u0631\u064a\u0646"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"\u0411\u0435\u043b\u0430\u0440\u0443\u0301\u0441\u044c"},{"value":"BE","label":"Belgi\xeb"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"B\xe9nin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"\u02bcbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet\xf8ya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"K\xe2mp\u016dch\xe9a"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"K\xf6d\xf6r\xf6s\xease t\xee B\xeaafr\xeeka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"\u4e2d\u56fd"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"R\xe9publique du Congo"},{"value":"CD","label":"R\xe9publique d\xe9mocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"C\xf4te d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Cura\xe7ao"},{"value":"CY","label":"\u039a\u03cd\u03c0\u03c1\u03bf\u03c2"},{"value":"CZ","label":"\u010cesk\xe1 republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Rep\xfablica Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"\u0645\u0635\u0631\u200e"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"\u12a4\u122d\u1275\u122b"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"\u12a2\u1275\u12ee\u1335\u12eb"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"F\xf8royar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane fran\xe7aise"},{"value":"PF","label":"Polyn\xe9sie fran\xe7aise"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"\u0395\u03bb\u03bb\u03ac\u03b4\u03b1"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guin\xe9e"},{"value":"GW","label":"Guin\xe9-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Ha\xefti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"\u9999\u6e2f"},{"value":"HU","label":"Magyarorsz\xe1g"},{"value":"IS","label":"\xcdsland"},{"value":"IN","label":"\u092d\u093e\u0930\u0924"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"\u0627\u06cc\u0631\u0627\u0646"},{"value":"IQ","label":"\u0627\u0644\u0639\u0631\u0627\u0642"},{"value":"IE","label":"\xc9ire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"\u05d9\u05b4\u05e9\u05b0\u05c2\u05e8\u05b8\u05d0\u05b5\u05dc"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"\u65e5\u672c"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"\u0627\u0644\u0623\u0631\u062f\u0646"},{"value":"KZ","label":"\u049a\u0430\u0437\u0430\u049b\u0441\u0442\u0430\u043d"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"\ubd81\ud55c"},{"value":"KR","label":"\ub300\ud55c\ubbfc\uad6d"},{"value":"KW","label":"\u0627\u0644\u0643\u0648\u064a\u062a"},{"value":"KG","label":"\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d"},{"value":"LA","label":"\u0eaa\u0e9b\u0e9b\u0ea5\u0eb2\u0ea7"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"\u0644\u0628\u0646\u0627\u0646"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"\u200f\u0644\u064a\u0628\u064a\u0627"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"\u6fb3\u9580"},{"value":"MK","label":"\u0421\u0435\u0432\u0435\u0440\u043d\u0430 \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M\u0327aje\u013c"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"M\xe9xico"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"\u041c\u043e\u043d\u0433\u043e\u043b \u0443\u043b\u0441"},{"value":"ME","label":"\u0426\u0440\u043d\u0430 \u0413\u043e\u0440\u0430"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"\u0627\u0644\u0645\u063a\u0631\u0628"},{"value":"MZ","label":"Mo\xe7ambique"},{"value":"MM","label":"\u1019\u103c\u1014\u103a\u1019\u102c"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"\u0928\u092a\u0932"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Cal\xe9donie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niu\u0113"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"\u0639\u0645\u0627\u0646"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"\u0641\u0644\u0633\u0637\u064a\u0646"},{"value":"PA","label":"Panam\xe1"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Per\xfa"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"\u0642\u0637\u0631"},{"value":"RE","label":"La R\xe9union"},{"value":"RO","label":"Rom\xe2nia"},{"value":"RU","label":"\u0420\u043e\u0441\u0441\u0438\u044f"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barth\xe9lemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"S\xe3o Tom\xe9 e Pr\xedncipe"},{"value":"SA","label":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629"},{"value":"SN","label":"S\xe9n\xe9gal"},{"value":"RS","label":"\u0421\u0440\u0431\u0438\u0458\u0430"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Espa\xf1a"},{"value":"LK","label":"\u015br\u012b la\u1e43k\u0101va"},{"value":"SD","label":"\u0627\u0644\u0633\u0648\u062f\u0627\u0646"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"\u0633\u0648\u0631\u064a\u0627"},{"value":"TW","label":"\u81fa\u7063"},{"value":"TJ","label":"\u0422\u043e\u04b7\u0438\u043a\u0438\u0441\u0442\u043e\u043d"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"\u062a\u0648\u0646\u0633"},{"value":"TR","label":"T\xfcrkiye"},{"value":"TM","label":"T\xfcrkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"\u0423\u043a\u0440\u0430\u0457\u043d\u0430"},{"value":"AE","label":"\u062f\u0648\u0644\u0629 \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O\u2018zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Vi\u1ec7t Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629"},{"value":"YE","label":"\u0627\u0644\u064a\u064e\u0645\u064e\u0646"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]'
      )
    },
    22087: function (l) {
      "use strict"
      l.exports = JSON.parse(
        '[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"\xc5land Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Cura\xe7ao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"C\xf4te d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"R\xe9union"},{"value":"BL","label":"Saint Barth\xe9lemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]'
      )
    }
  }
])
