"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../../../utils/default-focus-visible");
exports.default = {
    seekBarTrack: {
        base: {
            backgroundColor: '{{colors.interface020}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
    },
    seekBarIndicator: {
        base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
    },
    seekBarBuffering: {
        base: {
            backgroundColor: '{{colors.interface030}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
    },
    seekBarThumb: {
        base: {
            boxShadow: '{{shadows.shadow010}}',
            borderStyle: 'solid',
            borderWidth: '{{borders.borderWidth010}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            iconColor: '{{colors.inkNonEssential}}',
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderColor: '{{colors.interfaceBackground}}',
        },
        hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
        },
        active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { safariOutlineOffset: '-7px' }),
    },
};
//# sourceMappingURL=style-presets.js.map