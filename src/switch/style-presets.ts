const focusVisible = {
  outlineColor: '{{outline.outlineColorDefault}}',
  outlineStyle: '{{outline.outlineStyleDefault}}',
  outlineWidth: '{{outline.outlineWidthDefault}}',
  outlineOffset: '{{outline.outlineOffsetDefault}}',
  safariOutlineStyle: '{{outline.safariOutlineStyleDefault}}',
};

const checked = {
  backgroundColor: '{{colors.interactiveInput040}}',
};

export default {
  switchTrack: {
    base: {
      backgroundColor: '{{colors.interactiveInput020}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
    checked,
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
    },
    'focus-visible': focusVisible,
    'checked:focus-visible': {
      ...focusVisible,
      ...checked,
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
