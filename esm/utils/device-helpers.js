import { __makeTemplateObject } from "tslib";
import { Devices } from '../theme';
import { css } from './style';
export var getDeviceQueryFromTheme = function (targetDevices, cssRules) { return function () {
    var queries = targetDevices.map(function (device) {
        switch (device) {
            case Devices.iPadPro:
                return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "], ["\n          @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "])), cssRules).styles;
            case Devices.iPad:
                return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "], ["\n          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {\n            ", "\n          }\n        "])), cssRules).styles;
            default:
                return '';
        }
    });
    return queries.join('');
}; };
var templateObject_1, templateObject_2;
//# sourceMappingURL=device-helpers.js.map