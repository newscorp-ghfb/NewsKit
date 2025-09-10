"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderScripts = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var get_ssr_id_1 = require("./get-ssr-id");
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
var RenderScripts = function (_a) {
    var scripts = _a.scripts, ReactHelmet = _a.reactHelmet, nonce = _a.nonce;
    if (ReactHelmet) {
        return (react_1.default.createElement(ReactHelmet, { script: tslib_1.__spreadArray([], scripts.map(function (scriptData) {
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
    return (react_1.default.createElement(react_1.default.Fragment, null, scripts.map(function (scriptData) {
        var scriptProps = isExternalScriptData(scriptData)
            ? {
                key: scriptData.src,
                src: scriptData.src,
                async: scriptData.async,
            }
            : {
                key: (0, get_ssr_id_1.getSSRId)(),
                dangerouslySetInnerHTML: {
                    __html: parseContent(scriptData.content),
                },
            };
        return react_1.default.createElement("script", tslib_1.__assign({ type: "text/javascript" }, scriptProps, { nonce: nonce }));
    })));
};
exports.RenderScripts = RenderScripts;
//# sourceMappingURL=render-scripts.js.map