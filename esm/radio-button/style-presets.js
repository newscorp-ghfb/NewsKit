import { __assign } from "tslib";
import { defaultFocusVisible } from '../utils/default-focus-visible';
var checked = {
    backgroundColor: '{{colors.interactiveInput010}}',
    borderColor: '{{colors.interactiveInput040}}',
    iconColor: '{{colors.interactiveInput040}}',
};
var hover = {
    backgroundColor: '{{colors.interactiveInput030}}',
    borderColor: '{{colors.interactiveInput050}}',
};
var checkedValid = {
    backgroundColor: '{{colors.interactiveInput010}}',
    borderColor: '{{colors.interactivePositive040}}',
    iconColor: '{{colors.interactivePositive040}}',
};
var checkedHover = {
    backgroundColor: '{{colors.interactiveInput030}}',
    borderColor: '{{colors.interactiveInput050}}',
    iconColor: '{{colors.interactiveInput050}}',
};
var checkedValidHover = {
    backgroundColor: '{{colors.interactivePositive010}}',
    borderColor: '{{colors.interactivePositive050}}',
    iconColor: '{{colors.interactivePositive050}}',
};
var checkedInvalid = {
    backgroundColor: '{{colors.interactiveInput010}}',
    borderColor: '{{colors.interactiveNegative040}}',
    iconColor: '{{colors.interactiveNegative040}}',
};
var checkedInvalidHover = {
    backgroundColor: '{{colors.interactiveNegative010}}',
    borderColor: '{{colors.interactiveNegative050}}',
    iconColor: '{{colors.interactiveNegative050}}',
};
export default {
    radioButtonInput: {
        base: {
            backgroundColor: '{{colors.interactiveInput010}}',
            borderColor: '{{colors.interactiveInput020}}',
            borderWidth: '{{borders.borderWidth020}}',
            borderRadius: '{{borders.borderRadiusCircle}}',
            borderStyle: 'solid',
        },
        hover: hover,
        focus: {},
        'focus:hover': hover,
        checked: checked,
        'checked:hover': checkedHover,
        'checked:focus': checked,
        'checked:focus:hover': checkedHover,
        invalid: {
            backgroundColor: '{{colors.interactiveInput010}}',
            borderColor: '{{colors.interactiveNegative040}}',
        },
        'invalid:focus': {
            borderColor: '{{colors.interactiveNegative040}}',
        },
        'invalid:hover': {
            backgroundColor: '{{colors.interactiveNegative010}}',
            borderColor: '{{colors.interactiveNegative050}}',
        },
        'invalid:focus:hover': {
            backgroundColor: '{{colors.interactiveNegative010}}',
            borderColor: '{{colors.interactiveNegative050}}',
        },
        'checked:invalid': checkedInvalid,
        'checked:invalid:focus': {
            borderColor: '{{colors.interactiveNegative040}}',
            iconColor: '{{colors.interactiveNegative040}}',
        },
        'checked:invalid:hover': checkedInvalidHover,
        'checked:invalid:focus:hover': checkedInvalidHover,
        valid: {
            backgroundColor: '{{colors.interactiveInput010}}',
            borderColor: '{{colors.interactivePositive040}}',
        },
        'valid:focus': {
            borderColor: '{{colors.interactivePositive050}}',
        },
        'valid:hover': {
            backgroundColor: '{{colors.interactivePositive010}}',
            borderColor: '{{colors.interactivePositive050}}',
        },
        'valid:focus:hover': {
            backgroundColor: '{{colors.interactivePositive010}}',
            borderColor: '{{colors.interactivePositive050}}',
        },
        'checked:valid': checkedValid,
        'checked:valid:focus': {
            borderColor: '{{colors.interactivePositive040}}',
            iconColor: '{{colors.interactivePositive040}}',
        },
        'checked:valid:hover': checkedValidHover,
        'checked:valid:focus:hover': checkedValidHover,
        disabled: {
            backgroundColor: '{{colors.transparent}}',
            borderColor: '{{colors.interactiveDisabled010}}',
        },
        'checked:disabled': {
            backgroundColor: '{{colors.transparent}}',
            borderColor: '{{colors.interactiveDisabled010}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': defaultFocusVisible,
        'checked:focus-visible': __assign(__assign({}, defaultFocusVisible), checked),
        'checked:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedHover),
        'checked:valid:focus-visible': __assign(__assign({}, defaultFocusVisible), checkedValid),
        'checked:valid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedValidHover),
        'checked:invalid:focus-visible': __assign(__assign({}, defaultFocusVisible), checkedInvalid),
        'checked:invalid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedInvalidHover),
    },
};
//# sourceMappingURL=style-presets.js.map