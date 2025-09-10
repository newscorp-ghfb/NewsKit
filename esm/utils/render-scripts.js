import { __assign, __spreadArray } from "tslib";
import React from 'react';
import { getSSRId } from './get-ssr-id';
var isExternalScriptData = function (scriptData) { return 'src' in scriptData; };
var parseContent = function (content) {
    return content.includes('__FUNC__')
        ? content
            .replace(
        // eslint-disable-next-line no-useless-escape
        /\"*__FUNC__\"*/g, '')
            .replace(/\\n+/g, String.fromCharCode(10))
            .replace(/\\+/g, '')
        : content;
};
export var RenderScripts = function (_a) {
    var scripts = _a.scripts, ReactHelmet = _a.reactHelmet, nonce = _a.nonce;
    if (ReactHelmet) {
        return (React.createElement(ReactHelmet, { script: __spreadArray([], scripts.map(function (scriptData) {
                var scriptProps = {
                    type: 'text/javascript',
                };
                if (isExternalScriptData(scriptData)) {
                    scriptProps.src = scriptData.src;
                    scriptProps.async = scriptData.async;
                }
                else {
                    scriptProps.innerHTML = parseContent(scriptData.content);
                }
                return scriptProps;
            }), true) }));
    }
    return (React.createElement(React.Fragment, null, scripts.map(function (scriptData) {
        var scriptProps = isExternalScriptData(scriptData)
            ? {
                key: scriptData.src,
                src: scriptData.src,
                async: scriptData.async,
            }
            : {
                key: getSSRId(),
                dangerouslySetInnerHTML: {
                    __html: parseContent(scriptData.content),
                },
            };
        return React.createElement("script", __assign({ type: "text/javascript" }, scriptProps, { nonce: nonce }));
    })));
};
//# sourceMappingURL=render-scripts.js.map