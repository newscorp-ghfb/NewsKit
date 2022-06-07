import {StylePreset} from '../theme/types';

export default {
  accordionHeader: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      color: '{{colors.inkBase}}',
      borderStyle: 'none none solid none',
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput010}}',
      color: '{{colors.interactiveInput040}}',
    },
    // To Do: Focus state should be added in or after https://nidigitalsolutions.jira.com/browse/PPDSC-2151.
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
    },
  },
  accordionDivider: {
    base: {
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',
    },
  },
  accordionPanel: {
    base: {
      borderStyle: 'none none solid none',
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
} as Record<string, StylePreset>;
