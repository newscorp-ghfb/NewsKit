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

const hover = {
  backgroundColor: '{{colors.interactiveInput030}}',
  borderColor: '{{colors.interactiveInput050}}',
};

const checkedHover = {
  backgroundColor: '{{colors.interactiveInput050}}',
  borderColor: '{{colors.interactiveInput050}}',
};

const invalidHover = {
  backgroundColor: '{{colors.interactiveNegative010}}',
  borderColor: '{{colors.interactiveNegative050}}',
};

const checkedInvalidHover = {
  backgroundColor: '{{colors.interactiveNegative050}}',
  borderColor: '{{colors.interactiveNegative050}}',
};

const validHover = {
  backgroundColor: '{{colors.interactivePositive010}}',
  borderColor: '{{colors.interactivePositive050}}',
};

const checkedValidHover = {
  backgroundColor: '{{colors.interactivePositive050}}',
  borderColor: '{{colors.interactivePositive050}}',
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
    hover,
    focus: {},
    'focus:hover': hover,
    checked,
    'checked:hover': checkedHover,
    'checked:focus': checked,
    'checked:focus:hover': checkedHover,
    invalid,
    'invalid:hover': invalidHover,
    'invalid:focus': invalid,
    'invalid:focus:hover': invalidHover,
    'checked:invalid': checkedInvalid,
    'checked:invalid:focus': checkedInvalid,
    'checked:invalid:hover': checkedInvalidHover,
    'checked:invalid:focus:hover': checkedInvalidHover,
    valid,
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
    'focus-visible:hover': {
      ...focusVisible,
      ...hover,
    },
    'checked:focus-visible:hover': {
      ...focusVisible,
      ...checkedHover,
    },
    'invalid:focus-visible:hover': {
      ...focusVisible,
      ...invalidHover,
    },
    'checked:invalid:focus-visible:hover': {
      ...focusVisible,
      ...checkedInvalidHover,
    },
    'valid:focus-visible:hover': {
      ...focusVisible,
      ...validHover,
    },
    'checked:valid:focus-visible:hover': {
      ...focusVisible,
      ...checkedValidHover,
    },
  },
} as Record<string, StylePreset>;
