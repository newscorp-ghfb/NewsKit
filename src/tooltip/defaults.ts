export default {
  tooltip: {
    transitionPreset: {
      extend: 'fade',
      base: {
        transitionDelay: '{{motions.motionDuration020}}',
      },
    },
    zIndex: 80,
    distance: 'space020',
    pointer: {
      stylePreset: 'tooltipPointer',
      size: 'sizing010',
      edgeOffset: 'space020',
    },
    panel: {
      stylePreset: 'tooltipPanel',
      typographyPreset: 'utilityLabel010',
      paddingBlock: 'space020',
      paddingInline: 'space020',
    },
  },
};
