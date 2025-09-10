"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFlag = void 0;
var tslib_1 = require("tslib");
var flag_1 = require("../flag/flag");
var style_1 = require("../utils/style");
var transition_preset_1 = require("../utils/style/transition-preset");
exports.StyledFlag = (0, style_1.styled)(flag_1.BaseFlag)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return (0, transition_preset_1.getTransitionPreset)("button.".concat(size), '');
}, function (_a) {
    var loading = _a.loading, disabled = _a.disabled;
    if (disabled) {
        return null;
    }
    var cursor = loading ? 'progress' : 'pointer';
    return { cursor: cursor };
});
var templateObject_1;
//# sourceMappingURL=styled.js.map