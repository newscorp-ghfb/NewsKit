"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customToNewsKitIcon = void 0;
var with_default_props_1 = require("../utils/with-default-props");
var to_newskit_icon_1 = require("./to-newskit-icon");
var customToNewsKitIcon = function (displayName, CustomIcon, overrides) {
    // eslint-disable-next-line no-param-reassign
    CustomIcon.displayName = displayName;
    if (!overrides) {
        return (0, to_newskit_icon_1.toNewsKitIcon)(CustomIcon);
    }
    return (0, with_default_props_1.withDefaultProps)((0, to_newskit_icon_1.toNewsKitIcon)(CustomIcon), {
        overrides: overrides,
    });
};
exports.customToNewsKitIcon = customToNewsKitIcon;
//# sourceMappingURL=custom-to-newskit-icon.js.map