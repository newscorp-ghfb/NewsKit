import { __assign } from "tslib";
import { defaultFocusVisible } from '../utils/default-focus-visible';
var checked = {
    backgroundColor: '{{colors.interactiveInput040}}',
};
export default {
    switchTrack: {
        base: {
            backgroundColor: '{{colors.interactiveInput020}}',
            borderRadius: '{{borders.borderRadiusPill}}',
        },
        checked: checked,
        disabled: {
            backgroundColor: '{{colors.interactiveDisabled010}}',
        },
        'focus-visible': defaultFocusVisible,
        'checked:focus-visible': __assign(__assign({}, defaultFocusVisible), checked),
        'checked:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checked),
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