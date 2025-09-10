"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeviceQueryFromTheme = void 0;
var tslib_1 = require("tslib");
var theme_1 = require("../theme");
var style_1 = require("./style");
var getDeviceQueryFromTheme = function (targetDevices, cssRules) { return function () {
    var queries = targetDevices.map(function (device) {
        switch (device) {
            case theme_1.Devices.iPadPro:
                return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "], ["\n          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "])), cssRules).styles;
            case theme_1.Devices.iPad:
                return (0, style_1.css)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "], ["\n          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "])), cssRules).styles;
            default:
                return '';
        }
    });
    return queries.join('');
}; };
exports.getDeviceQueryFromTheme = getDeviceQueryFromTheme;
var templateObject_1, templateObject_2;
//# sourceMappingURL=device-helpers.js.map