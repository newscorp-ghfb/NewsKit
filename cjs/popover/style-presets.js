"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../utils/default-focus-visible");
exports.default = {
    popover: {
        base: {
            boxShadow: '{{shadows.shadow060}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
        },
    },
    popoverPointer: {
        base: {
            backgroundColor: '{{colors.interface010}}',
        },
    },
    popoverPanel: {
        base: {
            color: '{{colors.inkBase}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            backgroundColor: '{{colors.interface010}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { outlineOffset: '{{outlines.outlineWidth000}}' }),
    },
    popoverHeader: {
        base: {
            borderColor: '{{colors.interface050}}',
            borderStyle: 'none none solid none',
            borderWidth: '{{borders.borderWidth010}}',
        },
    },
    popoverCloseButtonContainer: {
        base: {
            borderColor: '{{colors.interface050}}',
            borderStyle: 'none none solid none',
            borderWidth: '{{borders.borderWidth010}}',
        },
    },
};
//# sourceMappingURL=style-presets.js.map