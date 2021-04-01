import {ThemeBase, UncompiledTheme} from '../types';

export const generateInkStylePresets = (theme: UncompiledTheme) =>
  theme.colors &&
  Object.keys(theme.colors).reduce((acc, color) => {
    if (color.startsWith('ink')) {
      acc[color] = {
        base: {
          color: `{{colors.${color}}}`,
          iconColor: `{{colors.${color}}}`,
        },
      };
      acc[`uppercaseI${color.slice(1)}`] = {
        base: {
          ...acc[color].base,
          textTransform: 'uppercase',
        },
      };
    }
    return acc;
  }, {} as ThemeBase['stylePresets']);
