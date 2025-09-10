"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentationWeb = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var render_scripts_1 = require("../utils/render-scripts");
var ExperimentationWeb = function (_a) {
    var reactHelmet = _a.reactHelmet, _b = _a.async, async = _b === void 0 ? false : _b, props = tslib_1.__rest(_a, ["reactHelmet", "async"]);
    var optimizelyWebConfig = props.optimizelyWebConfig;
    return (React.createElement(render_scripts_1.RenderScripts, { scripts: [
            {
                content: "(function() {\n            if (window.location === window.parent.location) {\n              window.optimizely_feature_flag = true;\n              window[\"optimizely_cdn\"] = \"".concat(optimizelyWebConfig.scriptCdn, "\";\n\n              window['optimizely'] = window['optimizely'] || [];\n              if (document.cookie.indexOf('nuk-consent-personalisation=1') === -1) {\n                window['optimizely'].push({\n                  type: 'disable',\n                });\n              }\n            }\n          })();"),
            },
            {
                src: optimizelyWebConfig.scriptCdn,
                async: async,
            },
        ], reactHelmet: reactHelmet }));
};
exports.ExperimentationWeb = ExperimentationWeb;
//# sourceMappingURL=experimentation-web.js.map