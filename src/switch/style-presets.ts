export default {
  switchTrack: {
    base: {
      backgroundColor: '{{colors.interactiveInput020}}',
      borderRadius: '{{borders.borderRadiusPill}}',
      iconColor: '{{colors.inkInverse}}',
    },
    checked: {
      backgroundColor: '{{colors.interactiveInput040}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  switchThumb: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkContrast}}',
    },
    // Prevents switchTrack hover styling from overriding icon colour.
    hover: {
      iconColor: '{{colors.inkContrast}}',
    },
    // Prevents switchTrack focus styling from overriding icon colour.
    focus: {
      iconColor: '{{colors.inkContrast}}',
    },
  },
  switchFeedback: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
  },
};
