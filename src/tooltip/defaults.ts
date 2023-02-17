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
      paddingBlockStart: 'space020',
      paddingBlockEnd: 'space020',
      paddingInlineStart: 'space020',
      paddingInlineEnd: 'space020',
    },
  },
};
