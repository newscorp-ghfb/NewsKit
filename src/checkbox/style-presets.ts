import {StylePreset} from '../theme/types';

const checked = {
  backgroundColor: '{{colors.interactiveInput040}}',
  borderColor: '{{colors.interactiveInput040}}',
};

const invalid = {
  borderColor: '{{colors.interactiveNegative040}}',
};

const checkedInvalid = {
  backgroundColor: '{{colors.interactiveNegative040}}',
  borderColor: '{{colors.interactiveNegative040}}',
};

const valid = {
  backgroundColor: '{{colors.interactiveInput010}}',
  borderColor: '{{colors.interactivePositive040}}',
};

const checkedValid = {
  backgroundColor: '{{colors.interactivePositive040}}',
  borderColor: '{{colors.interactivePositive040}}',
};

const focusVisible = {
  outlineColor: '{{outline.outlineColorDefault}}',
  outlineStyle: '{{outline.outlineStyleDefault}}',
  outlineWidth: '{{outline.outlineWidthDefault}}',
  outlineOffset: '{{outline.outlineOffsetDefault}}',
  safariOutlineStyle: '{{outline.safariOutlineStyleDefault}}',
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
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    focus: {},
    'focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    checked,
    'checked:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus': checked,
    'checked:focus:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    invalid,
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'invalid:focus': invalid,

    'invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid': checkedInvalid,
    'checked:invalid:focus': checkedInvalid,
    'checked:invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    valid,
    'valid:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'valid:focus': valid,

    'valid:focus:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid': checkedValid,
    'checked:valid:focus': checkedValid,
    'checked:valid:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid:focus:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
      borderColor: '{{colors.interactiveDisabled010}}',
    },
    'checked:disabled': {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      borderColor: '{{colors.interactiveDisabled010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    'focus-visible': focusVisible,
    'checked:focus-visible': {
      ...focusVisible,
      ...checked,
    },
    'invalid:focus-visible': {
      ...focusVisible,
      ...invalid,
    },
    'checked:invalid:focus-visible': {
      ...focusVisible,
      ...checkedInvalid,
    },
    'valid:focus-visible': {
      ...focusVisible,
      ...valid,
    },
    'checked:valid:focus-visible': {
      ...focusVisible,
      ...checkedValid,
    },
  },
} as Record<string, StylePreset>;
