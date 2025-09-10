"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../../../utils/default-focus-visible");
exports.default = {
    audioPlayerVolumeControlIndicator: {
        base: {
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
    },
    audioPlayerVolumeControlThumb: {
        base: {
            boxShadow: '{{shadows.shadow010}}',
            backgroundColor: '{{colors.interactivePrimary030}}',
            borderStyle: 'solid',
            borderColor: '{{colors.interfaceBackground}}',
            borderWidth: '{{borders.borderWidth010}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        hover: {
            backgroundColor: '{{colors.interactivePrimary040}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        active: {
            backgroundColor: '{{colors.interactivePrimary050}}',
            iconColor: '{{colors.inkSubtle}}',
        },
        'focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), { safariOutlineOffset: '-7px' }),
    },
    audioPlayerVolumeControlThumbOld: {
        __extends: 'audioPlayerVolumeControlThumb',
        base: {
            borderColor: '{{colors.interactivePrimary010}}',
        },
    },
    audioPlayerVolumeControlTrack: {
        base: {
            backgroundColor: '{{colors.interface030}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
    },
    audioPlayerVolumeControlPopover: {
        base: {
            boxShadow: '{{shadows.shadow060}}',
            borderRadius: '{{borders.borderRadiusDefault}}',
            backgroundColor: '{{colors.interface010}}',
        },
    },
    audioPlayerVolumeControlPopoverOld: {
        __extends: '{{stylePresets.audioPlayerVolumeControlPopover}}',
        base: {
            boxShadow: '{{shadows.shadow050}}',
        },
    },
};
//# sourceMappingURL=style-presets.js.map