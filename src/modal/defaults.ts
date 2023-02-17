export default {
  modal: {
    overlay: {
      zIndex: 70,
      transitionPreset: {
        extend: 'fade',
        enterActive: {
          transitionDuration: '{{motions.motionDuration030}}',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
        exitActive: {
          transitionDuration: '{{motions.motionDuration030}}',
          transitionDelay: '{{motions.motionDuration010}}',
          transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
        },
      },
    },
    panel: {
      zIndex: 80,
      stylePreset: 'modalPanel',
      transitionPreset: [
        {
          extend: 'fade',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingLinear}}',
          },
        },
        {
          extend: 'moveUp',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
          },
        },
      ],
      topOffset: '20vh',
      width: {
        xs: '90vw',
        sm: '60vw',
        md: '45vw',
        lg: '38vw',
        xl: '31vw',
      },
      minHeight: '15vh',
      maxHeight: {
        xs: '95vh',
        md: '80vh',
      },
    },
    header: {
      paddingInlineStart: 'space050',
      paddingInlineEnd: 'space050',
      paddingBlockStart: 'space040',
      paddingBlockEnd: 'space040',
      stylePreset: 'modalHeader',
      typographyPreset: 'utilityLabel030',
    },
    content: {
      paddingInlineStart: 'space050',
      paddingInlineEnd: 'space050',
      paddingBlockStart: 'space050',
      paddingBlockEnd: 'space050',
    },
    closeButton: {
      stylePreset: 'iconButtonMinimalSecondary',
      paddingInlineStart: 'space020',
      paddingInlineEnd: 'space020',
      paddingBlockStart: 'space020',
      paddingBlockEnd: 'space020',
    },
  },
};
