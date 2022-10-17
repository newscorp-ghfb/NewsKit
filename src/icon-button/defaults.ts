export default {
  iconButton: {
    small: {
      stylePreset: 'iconButtonSolidPrimary',
      spaceInset: 'spaceInset020',
      width: 'sizing060',
      minWidth: 'sizing060', // is there a better way to do this? without setting minWidth, icon buttons aren't round.
      height: 'sizing060',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    medium: {
      stylePreset: 'iconButtonSolidPrimary',
      spaceInset: 'spaceInset030',
      width: 'sizing080',
      minWidth: 'sizing080',
      height: 'sizing080',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    large: {
      stylePreset: 'iconButtonSolidPrimary',
      spaceInset: 'spaceInset040',
      width: 'sizing090',
      minWidth: 'sizing090',
      height: 'sizing090',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
  },
};
