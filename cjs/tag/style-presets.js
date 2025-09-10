"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_focus_visible_1 = require("../utils/default-focus-visible");
var inverse_focus_visible_1 = require("../utils/inverse-focus-visible");
exports.default = {
    tagPrimary: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.interactiveSecondary030}}',
            borderWidth: '{{borders.borderWidth010}}',
            color: '{{colors.inkBase}}',
            iconColor: '{{colors.inkBase}}',
            borderRadius: '{{borders.borderRadiusSharp}}',
        },
        hover: {
            backgroundColor: '{{colors.interactiveSecondary010}}',
        },
        active: {
            backgroundColor: '{{colors.interactiveSecondary020}}',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
    },
    tagPrimaryInverse: {
        base: {
            backgroundColor: '{{colors.transparent}}',
            borderStyle: 'solid',
            borderColor: '{{colors.interface010}}',
            borderWidth: '{{borders.borderWidth010}}',
            borderRadius: '{{borders.borderRadiusSharp}}',
            color: '{{colors.inkInverse}}',
            iconColor: '{{colors.inkInverse}}',
        },
        hover: {
            backgroundColor: '{{colors.interactiveInverse010}}',
        },
        active: {
            backgroundColor: '{{colors.interactiveInverse020}}',
        },
        'focus-visible': inverse_focus_visible_1.inverseFocusVisible,
    },
};
//# sourceMappingURL=style-presets.js.map