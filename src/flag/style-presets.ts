import {StylePreset} from '../theme/types';

export default {
  flagSolidPrimary: {
    base: {
      backgroundColor: '{{colors.interfaceBrand010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidPositive: {
    base: {
      backgroundColor: '{{colors.interfacePositive010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidNegative: {
    base: {
      backgroundColor: '{{colors.interfaceNegative010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidNotice: {
    base: {
      backgroundColor: '{{colors.interfaceNotice010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidInformative: {
    base: {
      backgroundColor: '{{colors.interfaceInformative010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidNeutral: {
    base: {
      backgroundColor: '{{colors.interfaceNeutral010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  flagSolidInverse: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkContrast}}',
    },
  },
  flagMinimalPrimary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  flagMinimalPositive: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkPositive}}',
      iconColor: '{{colors.inkPositive}}',
    },
  },
  flagMinimalNegative: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkNegative}}',
      iconColor: '{{colors.inkNegative}}',
    },
  },
  flagMinimalNotice: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkNotice}}',
      iconColor: '{{colors.inkNotice}}',
    },
  },
  flagMinimalInformative: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInformative}}',
      iconColor: '{{colors.inkInformative}}',
    },
  },
  flagMinimalNeutral: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
  },
  flagMinimalInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
} as Record<string, StylePreset>;
