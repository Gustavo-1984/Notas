(function(e) {
    function t(t) {
        for (var n, s, o = t[0], c = t[1], l = t[2], u = 0, v = []; u < o.length; u++) s = o[u], Object.prototype.hasOwnProperty.call(i, s) && i[s] && v.push(i[s][0]), i[s] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        d && d(t);
        while (v.length) v.shift()();
        return r.push.apply(r, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], n = !0, s = 1; s < a.length; s++) {
                var c = a[s];
                0 !== i[c] && (n = !1)
            }
            n && (r.splice(t--, 1), e = o(o.s = a[0]))
        }
        return e
    }
    var n = {},
        i = {
            app: 0
        },
        r = [];

    function s(e) {
        return o.p + "js/" + ({
            about: "about"
        }[e] || e) + "." + {
            about: "4b730af3"
        }[e] + ".js"
    }

    function o(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.e = function(e) {
        var t = [],
            a = i[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var n = new Promise((function(t, n) {
                    a = i[e] = [t, n]
                }));
                t.push(a[2] = n);
                var r, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = s(e);
                var l = new Error;
                r = function(t) {
                    c.onerror = c.onload = null, clearTimeout(u);
                    var a = i[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", l.name = "ChunkLoadError", l.type = n, l.request = r, a[1](l)
                        }
                        i[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = r, document.head.appendChild(c)
            }
        return Promise.all(t)
    }, o.m = e, o.c = n, o.d = function(e, t, a) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(a, n, function(t) {
                return e[t]
            }.bind(null, n));
        return a
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "/", o.oe = function(e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var u = 0; u < c.length; u++) t(c[u]);
    var d = l;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    4678: function(e, t, a) {
        var n = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-in": "ec2e",
            "./en-in.js": "ec2e",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./en-sg": "b7e9",
            "./en-sg.js": "b7e9",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fil": "d69a",
            "./fil.js": "d69a",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-deva": "aaf2",
            "./gom-deva.js": "aaf2",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./oc-lnc": "167b",
            "./oc-lnc.js": "167b",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-mo": "3a6c",
            "./zh-mo.js": "3a6c",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function i(e) {
            var t = r(e);
            return a(t)
        }

        function r(e) {
            if (!a.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return n[e]
        }
        i.keys = function() {
            return Object.keys(n)
        }, i.resolve = r, e.exports = i, i.id = "4678"
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"),
            i = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-app", {
                    attrs: {
                        id: "app"
                    }
                }, [e.esActivo ? a("v-navigation-drawer", {
                    attrs: {
                        app: ""
                    },
                    model: {
                        value: e.drawer,
                        callback: function(t) {
                            e.drawer = t
                        },
                        expression: "drawer"
                    }
                }, [a("v-list", {
                    attrs: {
                        dense: ""
                    }
                }, [e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "inicio"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("home")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Inicio")])], 1)], 1)] : e._e(), e.esAdmin ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "admin"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("work")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Administrar")])], 1)], 1)] : e._e(), e.esAdmin ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "usuario"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("face")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Usuario")])], 1)], 1)] : e._e(), e.esAdmin ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "serie"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("fingerprint")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Serie")])], 1)], 1)] : e._e(), e.esAdmin ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "serietabla"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("list")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Serie Tabla")])], 1)], 1)] : e._e(), e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "reportes"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("equalizer")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Reportes")])], 1)], 1)] : e._e(), e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "altavehiculos"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("ev_station")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Alta Vehiculo")])], 1)], 1)] : e._e(), e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "vehiculo"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("local_shipping")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Ver Vehiculo")])], 1)], 1)] : e._e(), e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "cambioprecio"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("attach_money")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Cambio de precio")])], 1)], 1)] : e._e(), e.esActivo ? [a("v-list-item", {
                    attrs: {
                        to: {
                            name: "rendimiento"
                        }
                    }
                }, [a("v-list-item-action", [a("v-icon", [e._v("insights")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Rendimiento")])], 1)], 1)] : e._e()], 2)], 1) : e._e(), e.esActivo ? [a("v-app-bar", {
                    attrs: {
                        app: "",
                        color: "#546E7A",
                        dark: ""
                    }
                }, [a("v-app-bar-nav-icon", {
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.drawer = !e.drawer
                        }
                    }
                }), a("v-toolbar-title", [e._v("Control de Flotillas")]), a("v-spacer"), e.esActivo ? a("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.cerrarSesion
                    }
                }, [a("v-icon", [e._v("logout")]), e._v("Exit ")], 1) : e._e()], 1)] : e._e(), e.esActivo ? [a("v-footer", {
                    attrs: {
                        color: "#546E7A",
                        app: ""
                    }
                }, [a("span", {
                    staticClass: "white--text"
                }, [e._v("© 2020 - Grupo Petrolero Arca")])])] : e._e(), a("router-view")], 2)
            },
            r = [],
            s = a("5530"),
            o = a("2f62"),
            c = {
                name: "App",
                data: function() {
                    return {
                        drawer: !0
                    }
                },
                computed: Object(s["a"])(Object(s["a"])({}, Object(o["c"])(["esActivo"])), Object(o["c"])(["esAdmin"])),
                methods: Object(s["a"])({}, Object(o["b"])(["cerrarSesion", "leerToken"])),
                created: function() {
                    this.leerToken()
                }
            },
            l = c,
            u = a("2877"),
            d = a("6544"),
            v = a.n(d),
            f = a("7496"),
            m = a("40dc"),
            h = a("5bc1"),
            p = a("8336"),
            b = a("553a"),
            x = a("132d"),
            k = a("8860"),
            j = a("da13"),
            g = a("1800"),
            y = a("5d23"),
            C = a("f774"),
            _ = a("2fa4"),
            V = a("2a7f"),
            O = Object(u["a"])(l, i, r, !1, null, null, null),
            w = O.exports;
        v()(O, {
            VApp: f["a"],
            VAppBar: m["a"],
            VAppBarNavIcon: h["a"],
            VBtn: p["a"],
            VFooter: b["a"],
            VIcon: x["a"],
            VList: k["a"],
            VListItem: j["a"],
            VListItemAction: g["a"],
            VListItemContent: y["a"],
            VListItemTitle: y["b"],
            VNavigationDrawer: C["a"],
            VSpacer: _["a"],
            VToolbarTitle: V["a"]
        });
        a("45fc"), a("d3b7");
        var I = a("8c4f"),
            F = a("04e1"),
            E = a.n(F);
        n["a"].use(o["a"]);
        var A = new o["a"].Store({
                state: {
                    token: "",
                    usuario: "",
                    usuarioDb: ""
                },
                mutations: {
                    obtenerUsuario: function(e, t) {
                        e.token = t, "" === t ? e.usuario = "" : (e.usuario = E()(t), vt.push({
                            name: "inicio"
                        }))
                    },
                    obtenerRol: function(e, t) {
                        e.usuarioDb = t, e.usuarioDb = "" === t ? "" : t
                    }
                },
                actions: {
                    guardarRol: function(e, t) {
                        var a = e.commit;
                        localStorage.setItem("usuarioDb", t), a("obtenerRol", t)
                    },
                    guardarUsuario: function(e, t) {
                        var a = e.commit;
                        localStorage.setItem("token", t), a("obtenerUsuario", t)
                    },
                    cerrarSesion: function(e) {
                        var t = e.commit;
                        t("obtenerUsuario", ""), localStorage.removeItem("token"), localStorage.removeItem("usuarioDb"), vt.push({
                            name: "login"
                        })
                    },
                    leerToken: function(e) {
                        var t = e.commit,
                            a = localStorage.getItem("token");
                        t("obtenerUsuario", a || "")
                    }
                },
                getters: {
                    esActivo: function(e) {
                        return !!e.token
                    },
                    esAdmin: function(e) {
                        return "admin" === e.usuarioDb.rol
                    }
                }
            }),
            T = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-content", [n("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [n("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [n("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [n("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "450px",
                        width: "450",
                        outlined: ""
                    }
                }, [n("v-img", {
                    staticClass: "white--text align-end",
                    attrs: {
                        height: "auto",
                        src: a("6879")
                    }
                })], 1)], 1)], 1)], 1)], 1)
            },
            S = [],
            R = a("b0af"),
            D = a("62ad"),
            q = a("a523"),
            U = a("a75b"),
            L = a("adda"),
            P = a("0fd9"),
            z = {},
            $ = Object(u["a"])(z, T, S, !1, null, null, null),
            N = $.exports;
        v()($, {
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VImg: L["a"],
            VRow: P["a"]
        });
        var M = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: "",
                        "align-start": ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: e.headers,
                        items: e.consumos,
                        search: e.search
                    },
                    scopedSlots: e._u([{
                        key: "top",
                        fn: function() {
                            return [a("v-toolbar", {
                                attrs: {
                                    flat: "",
                                    color: "white"
                                }
                            }, [a("v-toolbar-title", [e._v("CONSUMOS")]), a("v-divider", {
                                staticClass: "mx-4",
                                attrs: {
                                    inset: "",
                                    vertical: ""
                                }
                            }), a("v-spacer"), a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                    "append-icon": "search",
                                    label: "Buscar",
                                    "single-line": "",
                                    "hide-details": ""
                                },
                                model: {
                                    value: e.search,
                                    callback: function(t) {
                                        e.search = t
                                    },
                                    expression: "search"
                                }
                            }), a("v-spacer"), a("v-dialog", {
                                attrs: {
                                    "max-width": "800px"
                                },
                                scopedSlots: e._u([{
                                    key: "activator",
                                    fn: function(t) {
                                        var n = t.on;
                                        return [a("v-btn", e._g({
                                            staticClass: "mb-2",
                                            attrs: {
                                                color: "primary",
                                                dark: ""
                                            }
                                        }, n), [e._v("Generar Reporte")])]
                                    }
                                }]),
                                model: {
                                    value: e.dialog,
                                    callback: function(t) {
                                        e.dialog = t
                                    },
                                    expression: "dialog"
                                }
                            }, [a("v-card", [a("v-card-title", [a("span", {
                                staticClass: "headline"
                            }, [e._v(e._s(e.formTitle))])]), a("v-card-text", [a("v-container", [a("v-col", {
                                attrs: {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                }
                            }, [a("v-dialog", {
                                ref: "dialog",
                                attrs: {
                                    "return-value": e.date,
                                    persistent: "",
                                    width: "290px"
                                },
                                on: {
                                    "update:returnValue": function(t) {
                                        e.date = t
                                    },
                                    "update:return-value": function(t) {
                                        e.date = t
                                    }
                                },
                                scopedSlots: e._u([{
                                    key: "activator",
                                    fn: function(t) {
                                        var n = t.on;
                                        return [a("v-text-field", e._g({
                                            attrs: {
                                                label: "Fecha",
                                                "prepend-icon": "event",
                                                readonly: ""
                                            },
                                            model: {
                                                value: e.dateRange,
                                                callback: function(t) {
                                                    e.dateRange = t
                                                },
                                                expression: "dateRange"
                                            }
                                        }, n))]
                                    }
                                }]),
                                model: {
                                    value: e.modal,
                                    callback: function(t) {
                                        e.modal = t
                                    },
                                    expression: "modal"
                                }
                            }, [a("v-date-picker", {
                                attrs: {
                                    range: ""
                                },
                                model: {
                                    value: e.dates,
                                    callback: function(t) {
                                        e.dates = t
                                    },
                                    expression: "dates"
                                }
                            }, [a("v-spacer"), a("v-btn", {
                                attrs: {
                                    text: "",
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        e.modal = !1
                                    }
                                }
                            }, [e._v("Cancel")]), a("v-btn", {
                                attrs: {
                                    text: "",
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$refs.dialog.save(e.date)
                                    }
                                }
                            }, [e._v("OK")])], 1)], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                                attrs: {
                                    color: "blue darken-1",
                                    text: ""
                                },
                                on: {
                                    click: e.close
                                }
                            }, [e._v("Cancelar")]), a("v-btn", {
                                attrs: {
                                    color: "blue darken-1",
                                    text: ""
                                },
                                on: {
                                    click: e.save
                                }
                            }, [e._v("Enviar")])], 1)], 1)], 1)], 1)]
                        },
                        proxy: !0
                    }, {
                        key: "item.actions",
                        fn: function(t) {
                            var n = t.item;
                            return [a("v-icon", {
                                staticClass: "mr-2",
                                attrs: {
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.editItem(n)
                                    }
                                }
                            }, [e._v(" create ")]), a("v-icon", {
                                attrs: {
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.deleteItem(n)
                                    }
                                }
                            }, [e._v(" delete ")])]
                        }
                    }, {
                        key: "no-data",
                        fn: function() {
                            return [a("v-btn", {
                                attrs: {
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        return e.listar()
                                    }
                                }
                            }, [e._v("Reset")])]
                        },
                        proxy: !0
                    }])
                })], 1)], 1)], 1)], 1)
            },
            B = [],
            H = (a("c975"), a("a15b"), a("a434"), a("bc3a")),
            G = a.n(H),
            J = {
                data: function() {
                    return {
                        dates: ["2019-09-10", "2019-09-20"],
                        search: "",
                        consumos: [],
                        dialog: !1,
                        headers: [{
                            text: "VEHICULO",
                            value: "tag"
                        }, {
                            text: "FOLIO",
                            value: "id"
                        }, {
                            text: "FECHA",
                            value: "createdAt"
                        }, {
                            text: "DESCRIPCION",
                            value: "descripcion"
                        }, {
                            text: "PLACAS",
                            value: "placas"
                        }, {
                            text: "UNIDAD",
                            value: "unidad"
                        }, {
                            text: "PRECIO",
                            value: "precio"
                        }, {
                            text: "LITROS",
                            value: "litros"
                        }, {
                            text: "TOTAL",
                            value: "total"
                        }]
                    }
                },
                computed: Object(s["a"])(Object(s["a"])({}, Object(o["d"])(["token"])), {}, {
                    dateRange: function() {
                        return this.dates.join(" ~ ")
                    },
                    formTitle: function() {
                        return -1 === this.editedIndex ? "Reporte" : "Edit Item"
                    }
                }),
                watch: {
                    dialog: function(e) {
                        e || this.close()
                    }
                },
                created: function() {
                    this.listar()
                },
                methods: {
                    listar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.get("consumos", e).then((function(e) {
                            console.log(e.data), t.consumos = e.data
                        })).catch((function(e) {}))
                    },
                    editItem: function(e) {
                        this.editedIndex = this.desserts.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0
                    },
                    deleteItem: function(e) {
                        var t = this.desserts.indexOf(e);
                        confirm("Are you sure you want to delete this item?") && this.desserts.splice(t, 1)
                    },
                    close: function() {
                        var e = this;
                        this.dialog = !1, this.$nextTick((function() {
                            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1
                        }))
                    },
                    save: function() {
                        this.editedIndex > -1 ? Object.assign(this.desserts[this.editedIndex], this.editedItem) : this.desserts.push(this.editedItem), this.close()
                    }
                }
            },
            K = J,
            Q = a("99d9"),
            W = a("8fea"),
            X = a("2e4b"),
            Y = a("169a"),
            Z = a("ce7e"),
            ee = a("8654"),
            te = a("71d9"),
            ae = Object(u["a"])(K, M, B, !1, null, null, null),
            ne = ae.exports;
        v()(ae, {
            VBtn: p["a"],
            VCard: R["a"],
            VCardActions: Q["a"],
            VCardText: Q["b"],
            VCardTitle: Q["c"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDataTable: W["a"],
            VDatePicker: X["a"],
            VDialog: Y["a"],
            VDivider: Z["a"],
            VIcon: x["a"],
            VRow: P["a"],
            VSpacer: _["a"],
            VTextField: ee["a"],
            VToolbar: te["a"],
            VToolbarTitle: V["a"]
        });
        var ie = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("v-content", [n("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [n("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [n("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [n("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "250px",
                        width: "250px",
                        outlined: ""
                    }
                }, [n("v-img", {
                    staticClass: "white--text align-end",
                    attrs: {
                        height: "auto",
                        src: a("6879")
                    }
                })], 1), n("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "300px",
                        width: "300",
                        outlined: ""
                    }
                }, [n("form", [n("v-text-field", {
                    attrs: {
                        label: "Usuario",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.ingresar(t)
                        }
                    },
                    model: {
                        value: e.usuario,
                        callback: function(t) {
                            e.usuario = t
                        },
                        expression: "usuario"
                    }
                }), n("v-text-field", {
                    attrs: {
                        type: "password",
                        label: "Password",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.ingresar(t)
                        }
                    },
                    model: {
                        value: e.password,
                        callback: function(t) {
                            e.password = t
                        },
                        expression: "password"
                    }
                }), e.errorM ? n("v-flex", {
                    staticClass: "red--text mb-4"
                }, [e._v(" " + e._s(e.errorM) + " ")]) : e._e(), n("v-btn", {
                    staticClass: "mr-4 mt-3",
                    attrs: {
                        rounded: "",
                        color: "black",
                        width: "300px",
                        dark: "",
                        large: ""
                    },
                    on: {
                        click: e.ingresar
                    }
                }, [e._v("Ingresar")])], 1)])], 1)], 1)], 1)], 1)
            },
            re = [],
            se = {
                data: function() {
                    return {
                        usuario: "",
                        password: "",
                        errorM: null
                    }
                },
                methods: Object(s["a"])(Object(s["a"])({}, Object(o["b"])(["guardarUsuario", "guardarRol"])), {}, {
                    ingresar: function() {
                        var e = this;
                        G.a.post("login", {
                            usuario: this.usuario,
                            password: this.password
                        }).then((function(t) {
                            var a = t.data.token,
                                n = t.data.usuarioDb;
                            e.guardarUsuario(a), e.guardarRol(n)
                        })).catch((function(e) {}))
                    }
                })
            },
            oe = se,
            ce = a("0e8f"),
            le = Object(u["a"])(oe, ie, re, !1, null, null, null),
            ue = le.exports;
        v()(le, {
            VBtn: p["a"],
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VFlex: ce["a"],
            VImg: L["a"],
            VRow: P["a"],
            VTextField: ee["a"]
        });
        var de = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("div", [a("h1", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [e._v("ALTA DE USUARIOS")])]), a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "550px",
                        width: "550",
                        outlined: ""
                    }
                }, [a("form", [a("v-text-field", {
                    attrs: {
                        label: "Rol",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.rol,
                        callback: function(t) {
                            e.rol = t
                        },
                        expression: "rol"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Usuario",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.usuario,
                        callback: function(t) {
                            e.usuario = t
                        },
                        expression: "usuario"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Password",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.password,
                        callback: function(t) {
                            e.password = t
                        },
                        expression: "password"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Estado",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.estado,
                        callback: function(t) {
                            e.estado = t
                        },
                        expression: "estado"
                    }
                }), a("v-btn", {
                    staticClass: "mr-4 mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.enviar
                    }
                }, [e._v("Enviar")]), a("v-btn", {
                    staticClass: "mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.limpiar
                    }
                }, [e._v("Limpiar")])], 1)])], 1)], 1)], 1)], 1)
            },
            ve = [],
            fe = {
                data: function() {
                    return {
                        rol: "",
                        usuario: "",
                        password: "",
                        estado: ""
                    }
                },
                created: function() {},
                computed: Object(s["a"])({}, Object(o["d"])(["token"])),
                methods: {
                    limpiar: function() {
                        this.rol = "", this.usuario = "", this.password = "", this.estado = ""
                    },
                    enviar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.post("nuevo-usuario", {
                            rol: this.rol,
                            usuario: this.usuario,
                            password: this.password,
                            estado: this.estado
                        }, e).then((function(e) {
                            t.limpiar()
                        })).catch((function(e) {}))
                    }
                }
            },
            me = fe,
            he = Object(u["a"])(me, de, ve, !1, null, null, null),
            pe = he.exports;
        v()(he, {
            VBtn: p["a"],
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VRow: P["a"],
            VTextField: ee["a"]
        });
        var be = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("div", {
                    staticStyle: {
                        "margin-top": "10px"
                    }
                }, [a("h1", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [e._v("Equipos")])]), a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "550px",
                        width: "550",
                        outlined: ""
                    }
                }, [a("form", [a("v-text-field", {
                    attrs: {
                        label: "Serie",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.serie,
                        callback: function(t) {
                            e.serie = t
                        },
                        expression: "serie"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Estado",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.estado,
                        callback: function(t) {
                            e.estado = t
                        },
                        expression: "estado"
                    }
                }), a("v-select", {
                    attrs: {
                        items: e.usuario,
                        label: "Usuario",
                        required: "",
                        "item-text": "usuario"
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.usuario,
                        callback: function(t) {
                            e.usuario = t
                        },
                        expression: "usuario"
                    }
                }), a("v-btn", {
                    staticClass: "mr-4 mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.enviar
                    }
                }, [e._v("Enviar")]), a("v-btn", {
                    staticClass: "mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.limpiar
                    }
                }, [e._v("Limpiar")])], 1)])], 1)], 1)], 1)], 1)
            },
            xe = [],
            ke = a("ade3"),
            je = {
                data: function() {
                    return Object(ke["a"])({
                        serie: "",
                        estado: "",
                        usuario: "",
                        options: null,
                        select: null
                    }, "usuario", [{
                        value: "usuario"
                    }])
                },
                created: function() {
                    this.listarUsuario()
                },
                computed: Object(s["a"])({}, Object(o["d"])(["token"])),
                methods: {
                    limpiar: function() {
                        this.serie = "", this.usuario = "", this.estado = ""
                    },
                    listarUsuario: function() {
                        var e = this;
                        G.a.get("usuario").then((function(t) {
                            e.usuario = t.data
                        })).catch((function(e) {
                            console.log(e)
                        }))
                    },
                    enviar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.post("serie-nuevo", {
                            serie: this.serie,
                            estado: this.estado,
                            usuario: this.usuario
                        }, e).then((function(e) {
                            t.limpiar(), t.listarUsuario()
                        })).catch((function(e) {}))
                    }
                }
            },
            ge = je,
            ye = a("b974"),
            Ce = Object(u["a"])(ge, be, xe, !1, null, null, null),
            _e = Ce.exports;
        v()(Ce, {
            VBtn: p["a"],
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VRow: P["a"],
            VSelect: ye["a"],
            VTextField: ee["a"]
        });
        var Ve = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: "",
                        "align-start": ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF"
                    }
                }, [a("v-card-title", [e._v(" Series "), a("v-spacer"), a("v-text-field", {
                    attrs: {
                        "append-icon": "search",
                        label: "Search",
                        "single-line": "",
                        "hide-details": ""
                    },
                    model: {
                        value: e.search,
                        callback: function(t) {
                            e.search = t
                        },
                        expression: "search"
                    }
                })], 1), a("v-data-table", {
                    attrs: {
                        headers: e.headers,
                        items: e.serie,
                        search: e.search
                    }
                })], 1)], 1)], 1)], 1)], 1)
            },
            Oe = [],
            we = (a("ac1f"), a("1276"), {
                data: function() {
                    return {
                        dates: ["2019-09-10", "2019-09-20"],
                        search: "",
                        serie: [],
                        year: "",
                        dialog: !1,
                        headers: [{
                            text: "SERIE",
                            value: "serie"
                        }, {
                            text: "ESTADO",
                            value: "estado"
                        }, {
                            text: "USUARIO",
                            value: "usuario"
                        }]
                    }
                },
                computed: {
                    dateRange: function() {
                        return this.dates.join(" ~ ")
                    },
                    formTitle: function() {
                        return -1 === this.editedIndex ? "Reporte" : "Edit Item"
                    }
                },
                watch: {
                    dialog: function(e) {
                        e || this.close()
                    }
                },
                created: function() {
                    this.listar()
                },
                methods: {
                    listar: function() {
                        var e = this;
                        G.a.get("serie").then((function(t) {
                            e.serie = t.data;
                            var a = t.data[0].createdAt,
                                n = a.split("T"),
                                i = n[0];
                            e.year = i
                        })).catch((function(e) {}))
                    }
                }
            }),
            Ie = we,
            Fe = Object(u["a"])(Ie, Ve, Oe, !1, null, null, null),
            Ee = Fe.exports;
        v()(Fe, {
            VCard: R["a"],
            VCardTitle: Q["c"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDataTable: W["a"],
            VRow: P["a"],
            VSpacer: _["a"],
            VTextField: ee["a"]
        });
        var Ae = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: "",
                        "align-start": ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF"
                    }
                }, [a("v-card-title", [e._v(" Usuarios "), a("v-spacer"), a("v-text-field", {
                    attrs: {
                        "append-icon": "search",
                        label: "Search",
                        "single-line": "",
                        "hide-details": ""
                    },
                    model: {
                        value: e.search,
                        callback: function(t) {
                            e.search = t
                        },
                        expression: "search"
                    }
                })], 1), a("v-data-table", {
                    attrs: {
                        headers: e.headers,
                        items: e.usuario,
                        search: e.search
                    }
                })], 1)], 1)], 1)], 1)], 1)
            },
            Te = [],
            Se = {
                data: function() {
                    return {
                        dates: ["2019-09-10", "2019-09-20"],
                        search: "",
                        usuario: [],
                        dialog: !1,
                        headers: [{
                            text: "ROL",
                            value: "rol"
                        }, {
                            text: "ID",
                            value: "id"
                        }, {
                            text: "USUARIO",
                            value: "usuario"
                        }, {
                            text: "ESTADO",
                            value: "estado"
                        }],
                        editedIndex: -1,
                        editedItem: {
                            name: "",
                            calories: 0,
                            fat: 0,
                            carbs: 0,
                            protein: 0
                        },
                        defaultItem: {
                            name: "",
                            calories: 0,
                            fat: 0,
                            carbs: 0,
                            protein: 0
                        }
                    }
                },
                computed: Object(s["a"])(Object(s["a"])({}, Object(o["d"])(["token"])), {}, {
                    dateRange: function() {
                        return this.dates.join(" ~ ")
                    },
                    formTitle: function() {
                        return -1 === this.editedIndex ? "Reporte" : "Edit Item"
                    }
                }),
                watch: {
                    dialog: function(e) {
                        e || this.close()
                    }
                },
                created: function() {
                    this.listar()
                },
                methods: {
                    listar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.get("usuario", e).then((function(e) {
                            t.usuario = e.data
                        })).catch((function(e) {}))
                    },
                    editItem: function(e) {
                        this.editedIndex = this.desserts.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0
                    },
                    deleteItem: function(e) {
                        var t = this.desserts.indexOf(e);
                        confirm("Are you sure you want to delete this item?") && this.desserts.splice(t, 1)
                    },
                    close: function() {
                        var e = this;
                        this.dialog = !1, this.$nextTick((function() {
                            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1
                        }))
                    }
                }
            },
            Re = Se,
            De = Object(u["a"])(Re, Ae, Te, !1, null, null, null),
            qe = De.exports;
        v()(De, {
            VCard: R["a"],
            VCardTitle: Q["c"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDataTable: W["a"],
            VRow: P["a"],
            VSpacer: _["a"],
            VTextField: ee["a"]
        });
        var Ue = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("div", {
                    staticStyle: {
                        "margin-top": "10px"
                    }
                }, [a("h1", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [e._v("ALTA DE VEHICULOS")])]), a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "660",
                        width: "550",
                        outlined: ""
                    }
                }, [a("form", [a("v-text-field", {
                    attrs: {
                        label: "Tag",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.tag,
                        callback: function(t) {
                            e.tag = t
                        },
                        expression: "tag"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Placas",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.placas,
                        callback: function(t) {
                            e.placas = t
                        },
                        expression: "placas"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Numero Economico",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.numEconomico,
                        callback: function(t) {
                            e.numEconomico = t
                        },
                        expression: "numEconomico"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Unidad",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.unidad,
                        callback: function(t) {
                            e.unidad = t
                        },
                        expression: "unidad"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Descripcion",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.descripcion,
                        callback: function(t) {
                            e.descripcion = t
                        },
                        expression: "descripcion"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Marca",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.marca,
                        callback: function(t) {
                            e.marca = t
                        },
                        expression: "marca"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Color",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.color,
                        callback: function(t) {
                            e.color = t
                        },
                        expression: "color"
                    }
                }), a("v-text-field", {
                    attrs: {
                        label: "Litros",
                        required: ""
                    },
                    on: {
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.enviar(t)
                        }
                    },
                    model: {
                        value: e.litros,
                        callback: function(t) {
                            e.litros = t
                        },
                        expression: "litros"
                    }
                }), a("v-btn", {
                    staticClass: "mr-4 mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.enviar
                    }
                }, [e._v("Enviar")]), a("v-btn", {
                    staticClass: "mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.limpiar
                    }
                }, [e._v("Limpiar")])], 1)])], 1)], 1)], 1)], 1)
            },
            Le = [],
            Pe = {
                data: function() {
                    return {
                        tag: "",
                        placas: "",
                        numEconomico: "",
                        unidad: "",
                        descripcion: "",
                        marca: "",
                        color: "",
                        litros: ""
                    }
                },
                created: function() {},
                computed: Object(s["a"])({}, Object(o["d"])(["token"])),
                methods: {
                    limpiar: function() {
                        this.tag = "", this.placas = "", this.numEconomico = "", this.unidad = "", this.descripcion = "", this.marca = "", this.color = "", this.litros = ""
                    },
                    enviar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.post("vehiculo-nuevo", {
                            tag: this.tag,
                            placas: this.placas,
                            numEconomico: this.numEconomico,
                            unidad: this.unidad,
                            descripcion: this.descripcion,
                            marca: this.marca,
                            color: this.color,
                            litros: this.litros
                        }, e).then((function(e) {
                            t.limpiar()
                        })).catch((function(e) {}))
                    }
                }
            },
            ze = Pe,
            $e = Object(u["a"])(ze, Ue, Le, !1, null, null, null),
            Ne = $e.exports;
        v()($e, {
            VBtn: p["a"],
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VRow: P["a"],
            VTextField: ee["a"]
        });
        var Me = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("div", {
                    staticStyle: {
                        "margin-top": "10px"
                    }
                }, [a("h1", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [e._v("Cambio de precio")])]), a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF",
                        height: "550px",
                        width: "550",
                        outlined: ""
                    }
                }, [a("form", [a("v-menu", {
                    attrs: {
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px"
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on,
                                i = t.attrs;
                            return [a("v-text-field", e._g(e._b({
                                attrs: {
                                    label: "Fecha",
                                    "prepend-icon": "event"
                                },
                                model: {
                                    value: e.date,
                                    callback: function(t) {
                                        e.date = t
                                    },
                                    expression: "date"
                                }
                            }, "v-text-field", i, !1), n))]
                        }
                    }]),
                    model: {
                        value: e.menu2,
                        callback: function(t) {
                            e.menu2 = t
                        },
                        expression: "menu2"
                    }
                }, [a("v-date-picker", {
                    attrs: {
                        min: e.minimo,
                        reactive: ""
                    },
                    model: {
                        value: e.date,
                        callback: function(t) {
                            e.date = t
                        },
                        expression: "date"
                    }
                })], 1), a("v-menu", {
                    ref: "menu",
                    attrs: {
                        transition: "scale-transition",
                        "offset-y": "",
                        "min-width": "290px",
                        "close-on-content-click": !1
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var n = t.on,
                                i = t.attrs;
                            return [a("v-text-field", e._g(e._b({
                                attrs: {
                                    readonly: "",
                                    label: "Hora",
                                    "prepend-icon": "access_time"
                                },
                                model: {
                                    value: e.hora,
                                    callback: function(t) {
                                        e.hora = t
                                    },
                                    expression: "hora"
                                }
                            }, "v-text-field", i, !1), n))]
                        }
                    }]),
                    model: {
                        value: e.menu,
                        callback: function(t) {
                            e.menu = t
                        },
                        expression: "menu"
                    }
                }, [a("v-time-picker", {
                    model: {
                        value: e.hora,
                        callback: function(t) {
                            e.hora = t
                        },
                        expression: "hora"
                    }
                })], 1), a("v-text-field", {
                    attrs: {
                        label: "Precio",
                        required: "",
                        "prepend-icon": "attach_money"
                    },
                    model: {
                        value: e.precio,
                        callback: function(t) {
                            e.precio = t
                        },
                        expression: "precio"
                    }
                }), a("v-btn", {
                    staticClass: "mr-4 mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.enviar
                    }
                }, [e._v("Enviar")]), a("v-btn", {
                    staticClass: "mt-5",
                    attrs: {
                        color: "primary"
                    },
                    on: {
                        click: e.limpiar
                    }
                }, [e._v("Limpiar")])], 1)])], 1)], 1)], 1)], 1)
            },
            Be = [],
            He = a("c1df"),
            Ge = a.n(He),
            Je = {
                data: function() {
                    return {
                        date: "",
                        hora: "",
                        precio: "",
                        menu: null,
                        menu2: null,
                        minimo: (new Date).toISOString().substr(0, 10)
                    }
                },
                created: function() {},
                computed: Object(s["a"])({}, Object(o["d"])(["token"])),
                methods: {
                    limpiar: function() {
                        this.date = "", this.hora = "", this.precio = ""
                    },
                    enviar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.post("cambio-precio", {
                            time: this.hora,
                            precio: this.precio,
                            date: this.date
                        }, e).then((function(e) {
                            console.log(e.data), t.limpiar()
                        })).catch((function(e) {}))
                    }
                }
            },
            Ke = Je,
            Qe = a("e449"),
            We = a("c964"),
            Xe = Object(u["a"])(Ke, Me, Be, !1, null, null, null),
            Ye = Xe.exports;
        v()(Xe, {
            VBtn: p["a"],
            VCard: R["a"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDatePicker: X["a"],
            VMenu: Qe["a"],
            VRow: P["a"],
            VTextField: ee["a"],
            VTimePicker: We["a"]
        });
        var Ze = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: "",
                        "align-start": ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                        headers: e.headers,
                        items: e.consumos,
                        search: e.search
                    },
                    scopedSlots: e._u([{
                        key: "top",
                        fn: function() {
                            return [a("v-toolbar", {
                                attrs: {
                                    flat: "",
                                    color: "white"
                                }
                            }, [a("v-toolbar-title", [e._v("RENDIMIENTO")]), a("v-divider", {
                                staticClass: "mx-4",
                                attrs: {
                                    inset: "",
                                    vertical: ""
                                }
                            }), a("v-spacer"), a("v-text-field", {
                                staticClass: "text-xs-center",
                                attrs: {
                                    "append-icon": "search",
                                    label: "Buscar",
                                    "single-line": "",
                                    "hide-details": ""
                                },
                                model: {
                                    value: e.search,
                                    callback: function(t) {
                                        e.search = t
                                    },
                                    expression: "search"
                                }
                            }), a("v-spacer"), a("v-dialog", {
                                attrs: {
                                    "max-width": "800px"
                                },
                                scopedSlots: e._u([{
                                    key: "activator",
                                    fn: function(t) {
                                        var n = t.on;
                                        return [a("v-btn", e._g({
                                            staticClass: "mb-2",
                                            attrs: {
                                                color: "primary",
                                                dark: ""
                                            }
                                        }, n), [e._v("Generar Reporte")])]
                                    }
                                }]),
                                model: {
                                    value: e.dialog,
                                    callback: function(t) {
                                        e.dialog = t
                                    },
                                    expression: "dialog"
                                }
                            }, [a("v-card", [a("v-card-title", [a("span", {
                                staticClass: "headline"
                            }, [e._v(e._s(e.formTitle))])]), a("v-card-text", [a("v-container", [a("v-col", {
                                attrs: {
                                    cols: "12",
                                    sm: "6",
                                    md: "4"
                                }
                            }, [a("v-dialog", {
                                ref: "dialog",
                                attrs: {
                                    "return-value": e.date,
                                    persistent: "",
                                    width: "290px"
                                },
                                on: {
                                    "update:returnValue": function(t) {
                                        e.date = t
                                    },
                                    "update:return-value": function(t) {
                                        e.date = t
                                    }
                                },
                                scopedSlots: e._u([{
                                    key: "activator",
                                    fn: function(t) {
                                        var n = t.on;
                                        return [a("v-text-field", e._g({
                                            attrs: {
                                                label: "Fecha",
                                                "prepend-icon": "event",
                                                readonly: ""
                                            },
                                            model: {
                                                value: e.dateRange,
                                                callback: function(t) {
                                                    e.dateRange = t
                                                },
                                                expression: "dateRange"
                                            }
                                        }, n))]
                                    }
                                }]),
                                model: {
                                    value: e.modal,
                                    callback: function(t) {
                                        e.modal = t
                                    },
                                    expression: "modal"
                                }
                            }, [a("v-date-picker", {
                                attrs: {
                                    range: ""
                                },
                                model: {
                                    value: e.dates,
                                    callback: function(t) {
                                        e.dates = t
                                    },
                                    expression: "dates"
                                }
                            }, [a("v-spacer"), a("v-btn", {
                                attrs: {
                                    text: "",
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        e.modal = !1
                                    }
                                }
                            }, [e._v("Cancel")]), a("v-btn", {
                                attrs: {
                                    text: "",
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        return e.$refs.dialog.save(e.date)
                                    }
                                }
                            }, [e._v("OK")])], 1)], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                                attrs: {
                                    color: "blue darken-1",
                                    text: ""
                                },
                                on: {
                                    click: e.close
                                }
                            }, [e._v("Cancelar")]), a("v-btn", {
                                attrs: {
                                    color: "blue darken-1",
                                    text: ""
                                },
                                on: {
                                    click: e.save
                                }
                            }, [e._v("Enviar")])], 1)], 1)], 1)], 1)]
                        },
                        proxy: !0
                    }, {
                        key: "item.actions",
                        fn: function(t) {
                            var n = t.item;
                            return [a("v-icon", {
                                staticClass: "mr-2",
                                attrs: {
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.editItem(n)
                                    }
                                }
                            }, [e._v(" create ")]), a("v-icon", {
                                attrs: {
                                    small: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.deleteItem(n)
                                    }
                                }
                            }, [e._v(" delete ")])]
                        }
                    }, {
                        key: "no-data",
                        fn: function() {
                            return [a("v-btn", {
                                attrs: {
                                    color: "primary"
                                },
                                on: {
                                    click: function(t) {
                                        return e.listar()
                                    }
                                }
                            }, [e._v("Reset")])]
                        },
                        proxy: !0
                    }])
                })], 1)], 1)], 1)], 1)
            },
            et = [],
            tt = {
                data: function() {
                    return {
                        dates: ["2019-09-10", "2019-09-20"],
                        search: "",
                        consumos: [],
                        dialog: !1,
                        headers: [{
                            text: "SERIE",
                            value: "serie"
                        }, {
                            text: "VEHICULO",
                            value: "vehiculo"
                        }, {
                            text: "FOLIO",
                            value: "id"
                        }, {
                            text: "FECHA",
                            value: "date"
                        }, {
                            text: "HORA",
                            value: "time"
                        }, {
                            text: "DESCRIPCION",
                            value: "time"
                        }, {
                            text: "PLACAS",
                            value: "placas"
                        }, {
                            text: "UNIDAD",
                            value: "unidad"
                        }, {
                            text: "PRECIO",
                            value: "precio"
                        }, {
                            text: "LITROS",
                            value: "litros"
                        }, {
                            text: "TOTAL",
                            value: "total"
                        }],
                        editedIndex: -1,
                        editedItem: {
                            name: "",
                            calories: 0,
                            fat: 0,
                            carbs: 0,
                            protein: 0
                        },
                        defaultItem: {
                            name: "",
                            calories: 0,
                            fat: 0,
                            carbs: 0,
                            protein: 0
                        }
                    }
                },
                computed: {
                    dateRange: function() {
                        return this.dates.join(" ~ ")
                    },
                    formTitle: function() {
                        return -1 === this.editedIndex ? "Reporte" : "Edit Item"
                    }
                },
                watch: {
                    dialog: function(e) {
                        e || this.close()
                    }
                },
                created: function() {
                    this.listar()
                },
                methods: {
                    listar: function() {
                        var e = this,
                            t = {
                                token: this.$store.state.token
                            },
                            a = {
                                headers: t
                            };
                        G.a.get("consumos/list", a).then((function(t) {
                            e.consumos = t.data, console.log(e.consumos)
                        })).catch((function(e) {}))
                    },
                    editItem: function(e) {
                        this.editedIndex = this.desserts.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0
                    },
                    deleteItem: function(e) {
                        var t = this.desserts.indexOf(e);
                        confirm("Are you sure you want to delete this item?") && this.desserts.splice(t, 1)
                    },
                    close: function() {
                        var e = this;
                        this.dialog = !1, this.$nextTick((function() {
                            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1
                        }))
                    },
                    save: function() {
                        this.editedIndex > -1 ? Object.assign(this.desserts[this.editedIndex], this.editedItem) : this.desserts.push(this.editedItem), this.close()
                    }
                }
            },
            at = tt,
            nt = Object(u["a"])(at, Ze, et, !1, null, null, null),
            it = nt.exports;
        v()(nt, {
            VBtn: p["a"],
            VCard: R["a"],
            VCardActions: Q["a"],
            VCardText: Q["b"],
            VCardTitle: Q["c"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDataTable: W["a"],
            VDatePicker: X["a"],
            VDialog: Y["a"],
            VDivider: Z["a"],
            VIcon: x["a"],
            VRow: P["a"],
            VSpacer: _["a"],
            VTextField: ee["a"],
            VToolbar: te["a"],
            VToolbarTitle: V["a"]
        });
        var rt = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-content", [a("v-container", {
                    staticClass: "fill-height",
                    attrs: {
                        fluid: "",
                        "align-start": ""
                    }
                }, [a("v-row", {
                    attrs: {
                        align: "center",
                        justify: "center"
                    }
                }, [a("v-col", {
                    staticClass: "text-center",
                    attrs: {
                        xs12: "",
                        md6: ""
                    }
                }, [a("v-card", {
                    staticClass: "mx-auto",
                    attrs: {
                        color: "#FFFFFF"
                    }
                }, [a("v-card-title", [e._v(" Vehiculos "), a("v-spacer"), a("v-text-field", {
                    attrs: {
                        "append-icon": "search",
                        label: "Search",
                        "single-line": "",
                        "hide-details": ""
                    },
                    model: {
                        value: e.search,
                        callback: function(t) {
                            e.search = t
                        },
                        expression: "search"
                    }
                })], 1), a("v-data-table", {
                    attrs: {
                        headers: e.headers,
                        items: e.serie,
                        search: e.search
                    }
                })], 1)], 1)], 1)], 1)], 1)
            },
            st = [],
            ot = {
                data: function() {
                    return {
                        dates: ["2019-09-10", "2019-09-20"],
                        search: "",
                        serie: [],
                        dialog: !1,
                        headers: [{
                            text: "TAG",
                            value: "tag"
                        }, {
                            text: "PLACAS",
                            value: "placas"
                        }, {
                            text: "NUMERO ECONOMICO",
                            value: "numEconomico"
                        }, {
                            text: "UNIDAD",
                            value: "unidad"
                        }, {
                            text: "DESCRIPCION",
                            value: "descripcion"
                        }, {
                            text: "MARCA",
                            value: "marca"
                        }, {
                            text: "COLOR",
                            value: "color"
                        }, {
                            text: "LITROS",
                            value: "litros"
                        }, {
                            text: "ACTIVO",
                            value: "estado"
                        }]
                    }
                },
                computed: Object(s["a"])(Object(s["a"])({}, Object(o["d"])(["token"])), {}, {
                    dateRange: function() {
                        return this.dates.join(" ~ ")
                    },
                    formTitle: function() {
                        return -1 === this.editedIndex ? "Reporte" : "Edit Item"
                    }
                }),
                watch: {
                    dialog: function(e) {
                        e || this.close()
                    }
                },
                created: function() {
                    this.listar()
                },
                methods: {
                    listar: function() {
                        var e = {
                                headers: {
                                    token: this.token
                                }
                            },
                            t = this;
                        G.a.get("altaVehiculo", e).then((function(e) {
                            t.serie = e.data
                        })).catch((function(e) {}))
                    }
                }
            },
            ct = ot,
            lt = Object(u["a"])(ct, rt, st, !1, null, null, null),
            ut = lt.exports;
        v()(lt, {
            VCard: R["a"],
            VCardTitle: Q["c"],
            VCol: D["a"],
            VContainer: q["a"],
            VContent: U["a"],
            VDataTable: W["a"],
            VRow: P["a"],
            VSpacer: _["a"],
            VTextField: ee["a"]
        }), n["a"].use(I["a"]);
        var dt = new I["a"]({
            mode: "history",
            base: "/",
            routes: [{
                path: "/",
                name: "inicio",
                component: N,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/reportes",
                name: "reportes",
                component: ne,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/alta-vehiculos",
                name: "altavehiculos",
                component: Ne,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/cambio-precio",
                name: "cambioprecio",
                component: Ye,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/rendimiento",
                name: "rendimiento",
                component: it,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/admin",
                name: "admin",
                component: pe,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/serie",
                name: "serie",
                component: _e,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/serietabla",
                name: "serietabla",
                component: Ee,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/usuario",
                name: "usuario",
                component: qe,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/vehiculo",
                name: "vehiculo",
                component: ut,
                meta: {
                    requiereAuth: !0
                }
            }, {
                path: "/login",
                name: "login",
                component: ue
            }, {
                path: "/about",
                name: "About",
                component: function() {
                    return a.e("about").then(a.bind(null, "f820"))
                }
            }]
        });
        dt.beforeEach((function(e, t, a) {
            var n = e.matched.some((function(e) {
                return e.meta.requiereAuth
            }));
            n && "" === A.state.token ? a({
                name: "login"
            }) : a()
        }));
        var vt = dt,
            ft = a("f309"),
            mt = a("2e15"),
            ht = a.n(mt);
        n["a"].use(ft["a"]);
        var pt = new ft["a"]({
            theme: {
                options: {
                    customProperties: !0
                },
                themes: {
                    light: {
                        primary: "#546E7A",
                        secondary: "#424242",
                        accent: "#82B1FF",
                        error: "#FF5252",
                        info: "#2196F3",
                        success: "#4CAF50",
                        warning: "#FFC107"
                    }
                }
            },
            lang: {
                locales: {
                    es: ht.a
                },
                current: "es"
            },
            icons: {
                iconfont: "md"
            }
        });
        n["a"].config.productionTip = !1, G.a.defaults.baseURL = "https://arcafleets.com/api/", new n["a"]({
            router: vt,
            store: A,
            vuetify: pt,
            moment: Ge.a,
            render: function(e) {
                return e(w)
            }
        }).$mount("#app")
    },
    6879: function(e, t, a) {
        e.exports = a.p + "img/logotipo.f66bbd78.png"
    }
});
//# sourceMappingURL=app.792759d4.js.map