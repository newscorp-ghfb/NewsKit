export default {
  button: {
    small: {
      typographyPreset: 'utilityButton010',
      stylePreset: 'buttonSolidPrimary',
      spaceInset: 'spaceInsetSquish020',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space020',
      transitionPreset:{
        extend: 'backgroundColorChange',
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '{{motions.motionDuration050}}',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    medium: {
      typographyPreset: 'utilityButton020',
      stylePreset: 'buttonSolidPrimary',
      spaceInset: 'spaceInsetSquish030',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'space020',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    large: {
      typographyPreset: 'utilityButton030',
      stylePreset: 'buttonSolidPrimary',
      spaceInset: 'spaceInsetSquish040',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'space020',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
  },
};
