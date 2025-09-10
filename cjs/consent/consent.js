"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consent = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var render_scripts_1 = require("../utils/render-scripts");
var consent_utils_1 = require("./consent-utils");
var Consent = function (_a) {
    var reactHelmet = _a.reactHelmet, props = tslib_1.__rest(_a, ["reactHelmet"]);
    if ((0, consent_utils_1.isV2Props)(props)) {
        return (react_1.default.createElement(render_scripts_1.RenderScripts, { scripts: (0, consent_utils_1.getV2Scripts)(props.sourcePointConfigTCFV2), reactHelmet: reactHelmet }));
    }
    if ((0, consent_utils_1.isUnifiedProps)(props)) {
        return (react_1.default.createElement(render_scripts_1.RenderScripts, { scripts: (0, consent_utils_1.getUnifiedScripts)(props.sourcePointConfigUnified), reactHelmet: reactHelmet }));
    }
    if ((0, consent_utils_1.isNonTCFV1Props)(props)) {
        return (react_1.default.createElement(render_scripts_1.RenderScripts, { scripts: (0, consent_utils_1.getNonTCFScripts)(props.sourcePointConfigNonTCFV1), reactHelmet: reactHelmet }));
    }
    return null;
};
exports.Consent = Consent;
//# sourceMappingURL=consent.js.map