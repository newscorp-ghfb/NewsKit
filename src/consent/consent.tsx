import * as React from 'react';
import {
  RenderScriptsProps,
  RenderScripts,
  RenderScriptsReactHelmetProp,
} from '../utils/render-scripts';

export interface ConsentProps extends RenderScriptsReactHelmetProp {
  accountId?: string;
  mmsDomain?: string;
  waitForConsent?: boolean;
  sourcePointConfig: SourcePointConfigProps;
}

export interface SourcePointConfigProps {
  accountId: string;
  privacyManagerId?: string;
  siteHref?: string;
  siteId?: string;
  targetingParams?: object;
  mmsDomain?: string;
  waitForConsent?: boolean;
  cmpOrigin?: string;
}
interface InitConfig {
  config: SourcePointConfigProps;
}

/**
 * @param {string} accountId - Will be deprecated on the component in the next version. Please add it to the SourcePointConfig.
 * @param {string} mmsDomain - Will be deprecated on the component in the next version. Please add it to the SourcePointConfig.
 * @param {SourcePointConfigProps} sourcePointConfig - The SourcePointConfig Object

 */
export const Consent: React.FC<ConsentProps> = ({
  waitForConsent = true,
  accountId,
  mmsDomain,
  reactHelmet,
  sourcePointConfig,
}) => {
  const accountIdProp = accountId || sourcePointConfig.accountId;
  const initConfig: InitConfig = {
    config: {
      accountId: accountIdProp,
      mmsDomain:
        mmsDomain ||
        sourcePointConfig.mmsDomain ||
        `https://message${accountIdProp}.sp-prod.net`,
      cmpOrigin: 'https://sourcepoint.mgr.consensu.org',
      waitForConsent,
      ...sourcePointConfig,
    },
  };

  const scripts: RenderScriptsProps['scripts'] = [
    {
      content: `(function () { var e = false; var c = window; var t = document; function r() { if (!c.frames["__cmpLocator"]) { if (t.body) { var a = t.body; var e = t.createElement("iframe"); e.style.cssText = "display:none"; e.name = "__cmpLocator"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __cmp.a = __cmp.a || []; if (!a.length) { return __cmp.a } else if (a[0] === "ping") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __cmp.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === "string"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__cmp(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, "*") }) } } catch (a) { } } if (typeof __cmp !== "function") { c.__cmp = p; __cmp.msgHandler = l; c.addEventListener("message", l, false) } })();`,
    },
    {
      content: `window._sp_ = ${JSON.stringify(initConfig)}`,
    },
    {
      src: 'https://dialogue.sp-prod.net/messagingWithoutDetection.js',
    },
  ];

  return <RenderScripts scripts={scripts} reactHelmet={reactHelmet} />;
};
