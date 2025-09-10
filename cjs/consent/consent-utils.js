"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonTCFV1Props = exports.isUnifiedProps = exports.isV2Props = exports.getNonTCFScripts = exports.getUnifiedScripts = exports.getV2Scripts = void 0;
var tslib_1 = require("tslib");
function replacer(key, value) {
    var isObjectMethod = !/^\s*\(|function\s*\(/g.test(value.toString());
    var prefix = isObjectMethod ? 'function ' : '';
    return typeof value === 'function'
        ? "__FUNC__".concat(prefix + value.toString(), "__FUNC__")
        : value;
}
var getV2Scripts = function (config) {
    var baseEndpoint = (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
        'https://cdn.privacy-mgmt.com';
    return [
        {
            content: "!function () { var e = function () { var e, t = \"__tcfapiLocator\", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement(\"iframe\"); i.style.cssText = \"display:none\", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if (\"setGdprApplies\" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && \"boolean\" == typeof n[3] && (e = n[3], \"function\" == typeof n[2] && n[2](\"set\", !0)); else if (\"ping\" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: \"stub\" }; \"function\" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener(\"message\", (function (e) { var t = \"string\" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, \"*\") }), n.parameter) }), !1)) }; \"undefined\" != typeof module ? module.exports = e : e() }();",
        },
        {
            content: "window._sp_ = ".concat(JSON.stringify({
                config: tslib_1.__assign(tslib_1.__assign({}, config), { baseEndpoint: baseEndpoint }),
            }, replacer)),
        },
        {
            src: "".concat(baseEndpoint, "/wrapperMessagingWithoutDetection.js"),
            async: true,
        },
    ];
};
exports.getV2Scripts = getV2Scripts;
var getUnifiedScripts = function (config) {
    var baseEndpoint = (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
        'https://cdn.privacy-mgmt.com';
    var gdprStub = config.gdpr
        ? {
            content: "function _typeof(t){return(_typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t})(t)}!function(){var t=function(){var t,e,o=[],n=window,r=n;for(;r;){try{if(r.frames.__tcfapiLocator){t=r;break}}catch(t){}if(r===n.top)break;r=n.parent}t||(!function t(){var e=n.document,o=!!n.frames.__tcfapiLocator;if(!o)if(e.body){var r=e.createElement(\"iframe\");r.style.cssText=\"display:none\",r.name=\"__tcfapiLocator\",e.body.appendChild(r)}else setTimeout(t,5);return!o}(),n.__tcfapi=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return o;\"setGdprApplies\"===n[0]?n.length>3&&2===parseInt(n[1],10)&&\"boolean\"==typeof n[3]&&(e=n[3],\"function\"==typeof n[2]&&n[2](\"set\",!0)):\"ping\"===n[0]?\"function\"==typeof n[2]&&n[2]({gdprApplies:e,cmpLoaded:!1,cmpStatus:\"stub\"}):o.push(n)},n.addEventListener(\"message\",(function(t){var e=\"string\"==typeof t.data,o={};if(e)try{o=JSON.parse(t.data)}catch(t){}else o=t.data;var n=\"object\"===_typeof(o)?o.__tcfapiCall:null;n&&window.__tcfapi(n.command,n.version,(function(o,r){var a={__tcfapiReturn:{returnValue:o,success:r,callId:n.callId}};t&&t.source&&t.source.postMessage&&t.source.postMessage(e?JSON.stringify(a):a,\"*\")}),n.parameter)}),!1))};\"undefined\"!=typeof module?module.exports=t:t()}();",
        }
        : false;
    var ccpaStub = config.ccpa
        ? {
            content: "(function () { var e = false; var c = window; var t = document; function r() { if (!c.frames[\"__uspapiLocator\"]) { if (t.body) { var a = t.body; var e = t.createElement(\"iframe\"); e.style.cssText = \"display:none\"; e.name = \"__uspapiLocator\"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __uspapi.a = __uspapi.a || []; if (!a.length) { return __uspapi.a } else if (a[0] === \"ping\") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __uspapi.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === \"string\"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__uspapi(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, \"*\") }) } } catch (a) { } } if (typeof __uspapi !== \"function\") { c.__uspapi = p; __uspapi.msgHandler = l; c.addEventListener(\"message\", l, false) } })();        ",
        }
        : false;
    var usnatStub = config.usnat
        ? {
            content: "\n          (function () { var e = false; var c = window; var t = document; function r() { if (!c.frames[\"__uspapiLocator\"]) { if (t.body) { var a = t.body; var e = t.createElement(\"iframe\"); e.style.cssText = \"display:none\"; e.name = \"__uspapiLocator\"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __uspapi.a = __uspapi.a || []; if (!a.length) { return __uspapi.a } else if (a[0] === \"ping\") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __uspapi.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === \"string\"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__uspapi(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, \"*\") }) } } catch (a) { } } if (typeof __uspapi !== \"function\") { c.__uspapi = p; __uspapi.msgHandler = l; c.addEventListener(\"message\", l, false) } })();\n          window.__gpp_addFrame=function(e){if(!window.frames[e])if(document.body){var t=document.createElement(\"iframe\");t.style.cssText=\"display:none\",t.name=e,document.body.appendChild(t)}else window.setTimeout(window.__gpp_addFrame,10,e)},window.__gpp_stub=function(){var e=arguments;if(__gpp.queue=__gpp.queue||[],__gpp.events=__gpp.events||[],!e.length||1==e.length&&\"queue\"==e[0])return __gpp.queue;if(1==e.length&&\"events\"==e[0])return __gpp.events;var t=e[0],p=e.length>1?e[1]:null,s=e.length>2?e[2]:null;if(\"ping\"===t)p({gppVersion:\"1.1\",cmpStatus:\"stub\",cmpDisplayStatus:\"hidden\",signalStatus:\"not ready\",supportedAPIs:[\"2:tcfeuv2\",\"5:tcfcav1\",\"6:uspv1\",\"7:usnatv1\",\"8:uscav1\",\"9:usvav1\",\"10:uscov1\",\"11:usutv1\",\"12:usctv1\"],cmpId:0,sectionList:[],applicableSections:[],gppString:\"\",parsedSections:{}},!0);else if(\"addEventListener\"===t){\"lastId\"in __gpp||(__gpp.lastId=0),__gpp.lastId++;var n=__gpp.lastId;__gpp.events.push({id:n,callback:p,parameter:s}),p({eventName:\"listenerRegistered\",listenerId:n,data:!0,pingData:{gppVersion:\"1.1\",cmpStatus:\"stub\",cmpDisplayStatus:\"hidden\",signalStatus:\"not ready\",supportedAPIs:[\"2:tcfeuv2\",\"5:tcfcav1\",\"6:uspv1\",\"7:usnatv1\",\"8:uscav1\",\"9:usvav1\",\"10:uscov1\",\"11:usutv1\",\"12:usctv1\"],cmpId:0,sectionList:[],applicableSections:[],gppString:\"\",parsedSections:{}}},!0)}else if(\"removeEventListener\"===t){for(var a=!1,i=0;i<__gpp.events.length;i++)if(__gpp.events[i].id==s){__gpp.events.splice(i,1),a=!0;break}p({eventName:\"listenerRemoved\",listenerId:s,data:a,pingData:{gppVersion:\"1.1\",cmpStatus:\"stub\",cmpDisplayStatus:\"hidden\",signalStatus:\"not ready\",supportedAPIs:[\"2:tcfeuv2\",\"5:tcfcav1\",\"6:uspv1\",\"7:usnatv1\",\"8:uscav1\",\"9:usvav1\",\"10:uscov1\",\"11:usutv1\",\"12:usctv1\"],cmpId:0,sectionList:[],applicableSections:[],gppString:\"\",parsedSections:{}}},!0)}else\"hasSection\"===t?p(!1,!0):\"getSection\"===t||\"getField\"===t?p(null,!0):__gpp.queue.push([].slice.apply(e))},window.__gpp_msghandler=function(e){var t=\"string\"==typeof e.data;try{var p=t?JSON.parse(e.data):e.data}catch(e){p=null}if(\"object\"==typeof p&&null!==p&&\"__gppCall\"in p){var s=p.__gppCall;window.__gpp(s.command,(function(p,n){var a={__gppReturn:{returnValue:p,success:n,callId:s.callId}};e.source.postMessage(t?JSON.stringify(a):a,\"*\")}),\"parameter\"in s?s.parameter:null,\"version\"in s?s.version:\"1.1\")}},\"__gpp\"in window&&\"function\"==typeof window.__gpp||(window.__gpp=window.__gpp_stub,window.addEventListener(\"message\",window.__gpp_msghandler,!1),window.__gpp_addFrame(\"__gppLocator\"));\n        ",
        }
        : false;
    return [
        gdprStub,
        ccpaStub,
        usnatStub,
        {
            content: "window._sp_ = ".concat(JSON.stringify({
                config: tslib_1.__assign(tslib_1.__assign({}, config), { baseEndpoint: baseEndpoint }),
            }, replacer)),
        },
        {
            src: "".concat(baseEndpoint, "/unified/wrapperMessagingWithoutDetection.js"),
            async: true,
        },
    ].filter(Boolean);
};
exports.getUnifiedScripts = getUnifiedScripts;
var getNonTCFScripts = function (config) {
    var baseEndpoint = (config.baseEndpoint && config.baseEndpoint.replace(/\/$/, '')) ||
        'https://cdn.privacy-mgmt.com';
    var windowSP = "window._sp_ = ".concat(JSON.stringify({
        config: tslib_1.__assign(tslib_1.__assign({}, config), { baseEndpoint: baseEndpoint }),
    }, replacer));
    return [
        {
            content: windowSP,
        },
        {
            src: "".concat(baseEndpoint, "/messagingNoTcfApi.js"),
            async: true,
        },
    ];
};
exports.getNonTCFScripts = getNonTCFScripts;
var isV2Props = function (props) {
    return Boolean(props.sourcePointConfigTCFV2);
};
exports.isV2Props = isV2Props;
var isUnifiedProps = function (props) {
    return Boolean(props.sourcePointConfigUnified);
};
exports.isUnifiedProps = isUnifiedProps;
var isNonTCFV1Props = function (props) {
    return Boolean(props.sourcePointConfigNonTCFV1);
};
exports.isNonTCFV1Props = isNonTCFV1Props;
//# sourceMappingURL=consent-utils.js.map