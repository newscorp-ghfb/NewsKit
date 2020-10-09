import {
  SourcePointConfig,
  SourcePointConfigTCFV2,
  ConsentProps,
  LegacyConsentProps,
  ConsentPropsV1,
  ConsentPropsTCFV2,
} from './types';

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

export const getV2Scripts = (config: SourcePointConfigTCFV2) => {
  const baseEndpoint =
    (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
    'https://cdn.privacy-mgmt.com';

  return [
    {
      content: `!function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();`,
    },
    {
      content: `window._sp_ = ${JSON.stringify({
        config: {
          ...config,
          baseEndpoint,
        },
      })}`,
    },
    {
      src: `${baseEndpoint}/wrapperMessagingWithoutDetection.js`,
    },
  ];
};

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
