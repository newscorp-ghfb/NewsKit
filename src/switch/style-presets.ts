export default {
  switchTrack: {
    base: {
      backgroundColor: '{{colors.interactiveInput020}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
    checked: {
      backgroundColor: '{{colors.interactiveInput040}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
    },
  },
  // A separate style preset is required for track icons. We cannot put this
  // styling in the switchTrack preset as this overrides the thumb icon styling.
  switchTrackIcon: {
    base: {
      iconColor: '{{colors.inkInverse}}',
    },
    disabled: {
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  switchThumb: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkContrast}}',
    },
  },
};
