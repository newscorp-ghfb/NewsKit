import {Theme, ThemeProp} from 'newskit';
import {ThemeColor} from './types';
import {getContrast, getBrightness, getContrastRating} from './color-utils';

export const getBorderRadius = ({
  first,
  last,
  theme,
}: {
  first?: boolean;
  last?: boolean;
  theme?: Theme;
}) => {
  const fn = ({
    theme: {
      borderRadius: {borderRadiusRounded020: radius},
    },
  }: ThemeProp) =>
    [
      first ? radius : 0,
      first ? radius : 0,
      last ? radius : 0,
      last ? radius : 0,
    ].join(' ');

  if (theme) {
    return fn({theme});
  }

  return fn;
};

export const getTextColor = ({
  theme,
  value,
}: // brightness,
{theme: Theme} & Pick<ThemeColor, 'brightness' | 'value'>) =>
  // brightness < 0.4 ? theme.colors.inkInverse : theme.colors.inkContrast;
  getContrast(value, theme.colors.inkInverse) <
  getContrast(value, theme.colors.inkContrast)
    ? theme.colors.inkInverse
    : theme.colors.inkContrast;

export const getColorGroup = (name: string) => (/[a-z]+/.exec(name) || [])[0];

export const mapColorObjects = (
  theme: Theme,
  paletteColorMap?: Record<string, ThemeColor[]>,
) => ([name, value]: [string, string]) => {
  const brightness = getBrightness(value);
  const contrastRatio = getContrast(value, theme.colors.interface010);
  const contrastRating = getContrastRating(contrastRatio);

  return {
    name,
    value,
    group: getColorGroup(name),
    brightness,
    contrastRating,
    contrastRatio,
    parentColor:
      paletteColorMap && paletteColorMap[value]
        ? paletteColorMap[value][0]
        : undefined,
  } as ThemeColor;
};

export const groupColorObjects = (
  acc: Record<string, ThemeColor[]>,
  color: ThemeColor,
) => {
  // eslint-disable-next-line no-multi-assign
  const group = (acc[color.group] = acc[color.group] || []);
  group.push(color);
  return acc;
};

export const createPaletteColorMap = (paletteColors: ThemeColor[]) =>
  paletteColors.reduce(
    (acc, color) => {
      // eslint-disable-next-line no-multi-assign
      const accGroup = (acc[color.value] = acc[color.value] || []);
      accGroup.push(color);
      return acc;
    },
    {} as Record<string, ThemeColor[]>,
  );
