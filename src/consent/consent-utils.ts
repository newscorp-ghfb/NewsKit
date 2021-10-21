import {
  SourcePointConfigTCFV2,
  ConsentProps,
  ConsentPropsTCFV2,
  SourcePointConfigNonTCFV1,
  ConsentPropsNonTCFV1,
} from './types';

function replacer(key: string, value: string | Function | Object) {
  const isObjectMethod = !/^\s*\(|function\s*\(/g.test(value.toString());
  const prefix = isObjectMethod ? 'function ' : '';
  return typeof value === 'function'
    ? `__FUNC__${prefix + value.toString()}__FUNC__`
    : value;
}

export const getV2Scripts = (config: SourcePointConfigTCFV2) => {
  const baseEndpoint =
    (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
    'https://cdn.privacy-mgmt.com';

  return [
    {
      content: `!function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();`,
    },
    {
      content: `window._sp_ = ${JSON.stringify(
        {
          config: {
            ...config,
            baseEndpoint,
          },
        },
        replacer,
      )}`,
    },
    {
      src: `${baseEndpoint}/wrapperMessagingWithoutDetection.js`,
      async: true,
    },
  ];
};

export const getNonTCFScripts = (config: SourcePointConfigNonTCFV1) => {
  const baseEndpoint =
    (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
    'https://cdn.privacy-mgmt.com';

  const windowSP = `window._sp_ = ${JSON.stringify(
    {
      config: {
        ...config,
        baseEndpoint,
      },
    },
    replacer,
  )}`;

  return [
    {
      content: windowSP,
    },
    {
      src: `${baseEndpoint}/messagingNoTcfApi.js`,
      async: true,
    },
  ];
};

export const isV2Props = (props: ConsentProps): props is ConsentPropsTCFV2 =>
  Boolean((props as ConsentPropsTCFV2).sourcePointConfigTCFV2);

export const isNonTCFV1Props = (
  props: ConsentProps,
): props is ConsentPropsNonTCFV1 =>
  Boolean((props as ConsentPropsNonTCFV1).sourcePointConfigNonTCFV1);
