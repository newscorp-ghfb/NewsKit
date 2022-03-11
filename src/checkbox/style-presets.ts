import {StylePreset} from '../theme/types';

export default {
  checkboxInput: {
    base: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput020}}',
      borderWidth: '{{borders.borderWidth020}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      borderStyle: 'solid',
      iconColor: '{{colors.inkInverse}}', // ???
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    checked: {
      backgroundColor: '{{colors.interactiveInput040}}', // 010 in Figma, probably error
      borderColor: '{{colors.interactiveInput040}}',
    },
    'checked:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus': {
      backgroundColor: '{{colors.interactiveInput040}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:focus:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    invalid: {
      // backgroundColor: '{{colors.interactiveInput010}}', // from base
      borderColor: '{{colors.interactiveNegative040}}',
    },
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'invalid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveNegative050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },

    'invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:invalid': {
      backgroundColor: '{{colors.interactiveNegative040}}',
      borderColor: '{{colors.interactiveNegative040}}',
    },
    'checked:invalid:focus': {
      backgroundColor: '{{colors.interactiveNegative040}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    valid: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactivePositive040}}',
    },
    'valid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'valid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactivePositive050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },

    'valid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:valid': {
      backgroundColor: '{{colors.interactivePositive040}}',
      borderColor: '{{colors.interactivePositive040}}',
    },
    'checked:valid:focus': {
      backgroundColor: '{{colors.interactivePositive040}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:valid:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid:focus:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
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
  },

  checkboxFeedback: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'valid:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'valid:focus:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
    'invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
  },
} as Record<string, StylePreset>;
