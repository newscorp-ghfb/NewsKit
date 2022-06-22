import {StylePreset} from '../theme/types';

const checked = {
  backgroundColor: '{{colors.interactiveInput010}}',
  borderColor: '{{colors.interactiveInput040}}',
  iconColor: '{{colors.interactiveInput040}}',
};

const hover = {
  backgroundColor: '{{colors.interactiveInput030}}',
  borderColor: '{{colors.interactiveInput050}}',
};

const checkedValid = {
  backgroundColor: '{{colors.interactiveInput010}}',
  borderColor: '{{colors.interactivePositive040}}',
  iconColor: '{{colors.interactivePositive040}}',
};

const checkedHover = {
  backgroundColor: '{{colors.interactiveInput030}}',
  borderColor: '{{colors.interactiveInput050}}',
  iconColor: '{{colors.interactiveInput050}}',
};

const checkedValidHover = {
  backgroundColor: '{{colors.interactivePositive010}}',
  borderColor: '{{colors.interactivePositive050}}',
  iconColor: '{{colors.interactivePositive050}}',
};

const checkedInvalid = {
  backgroundColor: '{{colors.interactiveInput010}}',
  borderColor: '{{colors.interactiveNegative040}}',
  iconColor: '{{colors.interactiveNegative040}}',
};

const checkedInvalidHover = {
  backgroundColor: '{{colors.interactiveNegative010}}',
  borderColor: '{{colors.interactiveNegative050}}',
  iconColor: '{{colors.interactiveNegative050}}',
};

const focusVisible = {
  outlineColor: '{{outlines.outlineColorDefault}}',
  outlineStyle: '{{outlines.outlineStyleDefault}}',
  outlineWidth: '{{outlines.outlineWidthDefault}}',
  outlineOffset: '{{outlines.outlineOffsetDefault}}',
  safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
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
    hover,
    focus: {},
    'focus:hover': hover,
    checked,
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
    'focus-visible': focusVisible,
    'checked:focus-visible': {
      ...focusVisible,
      ...checked,
    },
    'checked:focus-visible:hover': {
      ...focusVisible,
      ...checkedHover,
    },
    'checked:valid:focus-visible': {
      ...focusVisible,
      ...checkedValid,
    },
    'checked:valid:focus-visible:hover': {
      ...focusVisible,
      ...checkedValidHover,
    },
    'checked:invalid:focus-visible': {
      ...focusVisible,
      ...checkedInvalid,
    },
    'checked:invalid:focus-visible:hover': {
      ...focusVisible,
      ...checkedInvalidHover,
    },
  },
} as Record<string, StylePreset>;
