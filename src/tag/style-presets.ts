import {StylePreset} from '../theme/types';
import {defaultFocusVisible} from '../utils/default-focus-visible';
import {inverseFocusVisible} from '../utils/inverseFocusVisible';

export default {
  tagPrimary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveSecondary030}}',
      borderWidth: '{{borders.borderWidth010}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    active: {
      borderWidth: '{{borders.borderWidth010}}',
    },
    'focus-visible': defaultFocusVisible,
  },
  tagPrimaryInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface010}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse020}}',
    },
    'focus-visible': inverseFocusVisible,
  },
} as Record<string, StylePreset>;
