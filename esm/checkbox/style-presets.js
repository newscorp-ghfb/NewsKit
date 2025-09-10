import { __assign } from "tslib";
import { defaultFocusVisible } from '../utils/default-focus-visible';
var checked = {
    backgroundColor: '{{colors.interactiveInput040}}',
    borderColor: '{{colors.interactiveInput040}}',
};
var invalid = {
    borderColor: '{{colors.interactiveNegative040}}',
};
var checkedInvalid = {
    backgroundColor: '{{colors.interactiveNegative040}}',
    borderColor: '{{colors.interactiveNegative040}}',
};
var valid = {
    backgroundColor: '{{colors.interactiveInput010}}',
    borderColor: '{{colors.interactivePositive040}}',
};
var checkedValid = {
    backgroundColor: '{{colors.interactivePositive040}}',
    borderColor: '{{colors.interactivePositive040}}',
};
var hover = {
    backgroundColor: '{{colors.interactiveInput030}}',
    borderColor: '{{colors.interactiveInput050}}',
};
var checkedHover = {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
};
var invalidHover = {
    backgroundColor: '{{colors.interactiveNegative010}}',
    borderColor: '{{colors.interactiveNegative050}}',
};
var checkedInvalidHover = {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
};
var validHover = {
    backgroundColor: '{{colors.interactivePositive010}}',
    borderColor: '{{colors.interactivePositive050}}',
};
var checkedValidHover = {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
};
export default {
    checkboxInput: {
        base: {
            backgroundColor: '{{colors.interactiveInput010}}',
            borderColor: '{{colors.interactiveInput020}}',
            borderWidth: '{{borders.borderWidth020}}',
            borderRadius: '{{borders.borderRadiusRounded010}}',
            borderStyle: 'solid',
            iconColor: '{{colors.inkInverse}}',
        },
        hover: hover,
        focus: {},
        'focus:hover': hover,
        checked: checked,
        'checked:hover': checkedHover,
        'checked:focus': checked,
        'checked:focus:hover': checkedHover,
        invalid: invalid,
        'invalid:hover': invalidHover,
        'invalid:focus': invalid,
        'invalid:focus:hover': invalidHover,
        'checked:invalid': checkedInvalid,
        'checked:invalid:focus': checkedInvalid,
        'checked:invalid:hover': checkedInvalidHover,
        'checked:invalid:focus:hover': checkedInvalidHover,
        valid: valid,
        'valid:hover': validHover,
        'valid:focus': valid,
        'valid:focus:hover': validHover,
        'checked:valid': checkedValid,
        'checked:valid:focus': checkedValid,
        'checked:valid:hover': checkedValidHover,
        'checked:valid:focus:hover': checkedValidHover,
        disabled: {
            backgroundColor: '{{colors.transparent}}',
            borderColor: '{{colors.interactiveDisabled010}}',
        },
        'checked:disabled': {
            backgroundColor: '{{colors.interactiveDisabled010}}',
            borderColor: '{{colors.interactiveDisabled010}}',
            iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': defaultFocusVisible,
        'checked:focus-visible': __assign(__assign({}, defaultFocusVisible), checked),
        'invalid:focus-visible': __assign(__assign({}, defaultFocusVisible), invalid),
        'checked:invalid:focus-visible': __assign(__assign({}, defaultFocusVisible), checkedInvalid),
        'valid:focus-visible': __assign(__assign({}, defaultFocusVisible), valid),
        'checked:valid:focus-visible': __assign(__assign({}, defaultFocusVisible), checkedValid),
        'focus-visible:hover': __assign(__assign({}, defaultFocusVisible), hover),
        'checked:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedHover),
        'invalid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), invalidHover),
        'checked:invalid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedInvalidHover),
        'valid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), validHover),
        'checked:valid:focus-visible:hover': __assign(__assign({}, defaultFocusVisible), checkedValidHover),
    },
};
//# sourceMappingURL=style-presets.js.map