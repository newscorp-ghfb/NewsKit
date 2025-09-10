"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../utils/default-focus-visible");
var checked = {
    backgroundColor: '{{colors.interactiveInput040}}',
};
exports.default = {
    switchTrack: {
        base: {
            backgroundColor: '{{colors.interactiveInput020}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
        checked: checked,
        disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
        },
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
        'checked:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checked),
        'checked:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checked),
    },
    // A separate style preset is required for track icons. We cannot put this
    // styling in the switchTrack preset as this overrides the thumb icon styling.
    switchTrackIcon: {
        base: {
            iconColor: '{{colors.inkInverse}}',
        },
        disabled: {
            iconColor: '{{colors.inkNonEssential}}',
        },
    },
    switchThumb: {
        base: {
            backgroundColor: '{{colors.inkInverse}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            iconColor: '{{colors.inkContrast}}',
        },
    },
};
//# sourceMappingURL=style-presets.js.map