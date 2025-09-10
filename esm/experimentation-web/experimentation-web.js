import { __rest } from "tslib";
import * as React from 'react';
import { RenderScripts } from '../utils/render-scripts';
export var ExperimentationWeb = function (_a) {
    var reactHelmet = _a.reactHelmet, _b = _a.async, async = _b === void 0 ? false : _b, props = __rest(_a, ["reactHelmet", "async"]);
    var optimizelyWebConfig = props.optimizelyWebConfig;
    return (React.createElement(RenderScripts, { scripts: [
            {
                content: "(function() {\n            if (window.location === window.parent.location) {\n              window.optimizely_feature_flag = true;\n              window[\"optimizely_cdn\"] = \"".concat(optimizelyWebConfig.scriptCdn, "\";\n\n              window['optimizely'] = window['optimizely'] || [];\n              if (document.cookie.indexOf('nuk-consent-personalisation=1') === -1) {\n                window['optimizely'].push({\n                  type: 'disable',\n                });\n              }\n            }\n          })();"),
            },
            {
                src: optimizelyWebConfig.scriptCdn,
                async: async,
            },
        ], reactHelmet: reactHelmet }));
};
//# sourceMappingURL=experimentation-web.js.map