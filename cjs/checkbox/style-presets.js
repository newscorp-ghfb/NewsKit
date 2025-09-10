"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var default_focus_visible_1 = require("../utils/default-focus-visible");
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
exports.default = {
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
        'focus-visible': default_focus_visible_1.defaultFocusVisible,
        'checked:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checked),
        'invalid:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), invalid),
        'checked:invalid:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checkedInvalid),
        'valid:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), valid),
        'checked:valid:focus-visible': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checkedValid),
        'focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), hover),
        'checked:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checkedHover),
        'invalid:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), invalidHover),
        'checked:invalid:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checkedInvalidHover),
        'valid:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), validHover),
        'checked:valid:focus-visible:hover': tslib_1.__assign(tslib_1.__assign({}, default_focus_visible_1.defaultFocusVisible), checkedValidHover),
    },
};
//# sourceMappingURL=style-presets.js.map