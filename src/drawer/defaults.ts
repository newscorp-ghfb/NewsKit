export default {
  drawer: {
    overlay: {
      zIndex: 70,
      transitionPreset: 'fade',
    },
    panel: {
      zIndex: 80,
      stylePreset: 'drawerPanel',
      maxSize: '100%',
      minSize: '20px',
      size: {
        xs: '305px',
        sm: '309px',
        md: '310px',
        lg: '333px',
        xl: '354px',
      },
      left: {
        transitionPreset: ['fade', 'slideLeft'],
      },
      right: {
        transitionPreset: ['fade', 'slideRight'],
      },
      top: {
        transitionPreset: ['fade', 'slideTop'],
      },
      bottom: {
        transitionPreset: ['fade', 'slideBottom'],
      },
    },
    header: {
      paddingInlineStart: 'space050',
      paddingInlineEnd: 'space050',
      paddingBlockStart: 'space040',
      paddingBlockEnd: 'space040',
      stylePreset: 'drawerHeader',
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
  inlineDrawer: {
    __extends: '{{componentDefaults.drawer}}',
    panel: {
      __extends: '{{componentDefaults.drawer.panel}}',
      maxSize: 'auto',
    },
  },
};
