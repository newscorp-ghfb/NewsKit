import {StylePreset} from '../theme/types';

export default {
  checkboxInput: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderColor: '{{colors.interactiveInput020}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      borderStyle: 'solid',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      borderColor: '{{colors.interactiveInput040}}',
    },
    focus: {
      borderColor: '{{colors.interactiveInput050}}',
    },
    'focus:hover': {
      borderColor: '{{colors.interactiveInput050}}',
    },
    checked: {
      backgroundColor: '{{colors.interactiveInput040}}',
      borderColor: '{{colors.interactiveInput040}}',
    },
    'checked:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus:hover': {
      backgroundColor: '{{colors.interactiveInput050}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    invalid: {
      borderColor: '{{colors.interactiveNegative040}}',
    },
    'invalid:focus': {
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'invalid:hover': {
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'invalid:focus:hover': {
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid': {
      backgroundColor: '{{colors.interactiveNegative040}}',
      borderColor: '{{colors.interactiveNegative040}}',
    },
    'checked:invalid:focus': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveNegative050}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    valid: {
      borderColor: '{{colors.interactivePositive040}}',
    },
    'valid:focus': {
      borderColor: '{{colors.interactivePositive050}}',
    },
    'valid:hover': {
      borderColor: '{{colors.interactivePositive050}}',
    },
    'valid:focus:hover': {
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid': {
      backgroundColor: '{{colors.interactivePositive040}}',
      borderColor: '{{colors.interactivePositive040}}',
    },
    'checked:valid:focus': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid:focus:hover': {
      backgroundColor: '{{colors.interactivePositive050}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    disabled: {
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
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'valid:focus': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'valid:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'invalid:focus': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
  },
} as Record<string, StylePreset>;
