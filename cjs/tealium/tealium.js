"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tealium = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var render_scripts_1 = require("../utils/render-scripts");
var Tealium = function (_a) {
    var accountId = _a.accountId, profileId = _a.profileId, env = _a.env, reactHelmet = _a.reactHelmet, nonce = _a.nonce;
    return (React.createElement(render_scripts_1.RenderScripts, { nonce: nonce, reactHelmet: reactHelmet, scripts: [
            {
                content: "(function(a,b,c,d){\n              a='//tags.tiqcdn.com/utag/".concat(accountId, "/").concat(profileId, "/").concat(env, "/utag.js';\n              b=document;\n              c='script';\n              d=b.createElement(c);\n              d.src=a;\n              d.type='text/java'+c;\n              d.async=true;\n              window.utag_queue = []\n              if (d.addEventListener) {\n                d.addEventListener(\n                  'load',\n                  function () {\n                    for (var i = 0; i < utag_queue.length; i++) {\n                      event = utag_queue[i];\n                      utag.track(event.event, event.data);\n                    }\n                  },\n                  false\n                );\n              } else {\n                d.onreadystatechange = function () {\n                  if (this.readyState == 'complete' || this.readyState == 'loaded') {\n                    this.onreadystatechange = null;\n                    for (var i = 0; i < utag_queue.length; i++) {\n                      event = utag_queue[i];\n                      utag.track(event.event, event.data);\n                    }\n                  }\n                };\n              }\n              a = b.getElementsByTagName(c)[0];\n              a.parentNode.insertBefore(d, a);\n            })();"),
            },
        ] }));
};
exports.Tealium = Tealium;
//# sourceMappingURL=tealium.js.map