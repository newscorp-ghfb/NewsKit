import {
  SourcePointConfig,
  SourcePointConfigTCFV2,
  ConsentProps,
  LegacyConsentProps,
  ConsentPropsV1,
  ConsentPropsTCFV2,
} from './consent-interfaces';

export const getV1Scripts = (config: SourcePointConfig) => [
  {
    content: `(function () { var e = false; var c = window; var t = document; function r() { if (!c.frames["__cmpLocator"]) { if (t.body) { var a = t.body; var e = t.createElement("iframe"); e.style.cssText = "display:none"; e.name = "__cmpLocator"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __cmp.a = __cmp.a || []; if (!a.length) { return __cmp.a } else if (a[0] === "ping") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __cmp.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === "string"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__cmp(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, "*") }) } } catch (a) { } } if (typeof __cmp !== "function") { c.__cmp = p; __cmp.msgHandler = l; c.addEventListener("message", l, false) } })();`,
  },
  {
    content: `window._sp_ = ${JSON.stringify({
      config: {
        mmsDomain: `https://message${config.accountId}.sp-prod.net`,
        cmpOrigin: 'https://sourcepoint.mgr.consensu.org',
        ...config,
      },
    })}`,
  },
  {
    src: 'https://dialogue.sp-prod.net/messagingWithoutDetection.js',
  },
];

export const getV2Scripts = (config: SourcePointConfigTCFV2) => [
  {
    // eslint-disable-next-line
    content: `!function (t) { var e = {}; function n(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }) }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) { return t[e] }.bind(null, o)); return r }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default } : function () { return t }; return n.d(e, "a", e), e }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.p = "", n(n.s = 3) }([function (t, e) { t.exports = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function (t, e, n) { t.exports = !n(2)(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a }) }, function (t, e) { t.exports = function (t) { try { return !!t() } catch (t) { return !0 } } }, function (t, e, n) { "use strict"; n.r(e); n(4); !function () { if ("function" != typeof window.__tcfapi) { var t, e = [], n = window, r = n.document; !n.__tcfapi && function t() { var e = !!n.frames.__tcfapiLocator; if (!e) if (r.body) { var o = r.createElement("iframe"); o.style.cssText = "display:none", o.name = "__tcfapiLocator", r.body.appendChild(o) } else setTimeout(t, 5); return !e }() && (n.__tcfapi = function () { for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)r[o] = arguments[o]; if (!r.length) return e; if ("setGdprApplies" === r[0]) r.length > 3 && 2 === parseInt(r[1], 10) && "boolean" == typeof r[3] && (t = r[3], "function" == typeof r[2] && r[2]("set", !0)); else if ("ping" === r[0]) { var i = { gdprApplies: t, cmpLoaded: !1, apiVersion: "2.0" }; "function" == typeof r[2] && r[2](i, !0) } else e.push(r) }, n.addEventListener("message", function (t) { var e = "string" == typeof t.data, r = {}; try { r = e ? JSON.parse(t.data) : t.data } catch (t) { } var o = r.__tcfapiCall; o && n.__tcfapi(o.command, o.parameter, o.version, function (n, r) { var i = { __tcfapiReturn: { returnValue: n, success: r, callId: o.callId } }; e && (i = JSON.stringify(i)), t.source.postMessage(i, "*") }) }, !1)) } }() }, function (t, e, n) { var r = n(5).f, o = Function.prototype, i = /^\s*function ([^ (]*)/; "name" in o || n(1) && r(o, "name", { configurable: !0, get: function () { try { return ("" + this).match(i)[1] } catch (t) { return "" } } }) }, function (t, e, n) { var r = n(6), o = n(7), i = n(10), f = Object.defineProperty; e.f = n(1) ? Object.defineProperty : function (t, e, n) { if (r(t), e = i(e, !0), r(n), o) try { return f(t, e, n) } catch (t) { } if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (t[e] = n.value), t } }, function (t, e, n) { var r = n(0); t.exports = function (t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, function (t, e, n) { t.exports = !n(1) && !n(2)(function () { return 7 != Object.defineProperty(n(8)("div"), "a", { get: function () { return 7 } }).a }) }, function (t, e, n) { var r = n(0), o = n(9).document, i = r(o) && r(o.createElement); t.exports = function (t) { return i ? o.createElement(t) : {} } }, function (t, e) { var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function (t, e, n) { var r = n(0); t.exports = function (t, e) { if (!r(t)) return t; var n, o; if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o; if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o; if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }]);`,
  },
  {
    content: `window._sp_ = ${JSON.stringify({
      config: {
        mmsDomain: `https://message${config.accountId}.sp-prod.net`,
        wrapperAPIOrigin: 'https://wrapper-api.sp-prod.net/tcfv2',
        ...config,
      },
    })}`,
  },
  {
    src: 'https://gdpr-tcfv2.sp-prod.net/wrapperMessagingWithoutDetection.js',
  },
];

// This functions check which props are received. It defined what consent is rendered.
export const isLegacyProps = (
  props: ConsentProps,
): props is LegacyConsentProps =>
  Boolean((props as LegacyConsentProps).accountId);

export const isV1Props = (props: ConsentProps): props is ConsentPropsV1 =>
  Boolean((props as ConsentPropsV1).sourcePointConfig);

export const isV2Props = (props: ConsentProps): props is ConsentPropsTCFV2 =>
  Boolean((props as ConsentPropsTCFV2).sourcePointConfigTCFV2);
//
