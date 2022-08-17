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
      spaceInset: 'spaceInsetSquish040',
      stylePreset: 'drawerHeader',
      typographyPreset: 'utilityLabel030',
    },
    content: {
      spaceInset: 'spaceInset050',
    },
    closeButton: {
      stylePreset: 'iconButtonMinimalSecondary',
      spaceInset: 'spaceInset020',
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
