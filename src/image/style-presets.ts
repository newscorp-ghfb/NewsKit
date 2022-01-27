import {StylePreset} from '../theme/types';

export default {
  imageSharp: {
    base: {
      borderRadius: '{{borders.borderRadiusSharp}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  imageRoundedSmall: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  imageRoundedMedium: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  imageRoundedLarge: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded050}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  imageDefault: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  imageCircle: {
    base: {
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
} as Record<string, StylePreset>;
