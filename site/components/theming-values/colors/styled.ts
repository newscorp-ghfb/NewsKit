/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  styled,
  Flag,
  ColorKeys,
  getTypographyPresetFromTheme,
  getBorderRadiusFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  getShadowFromTheme,
  getSpacingFromTheme,
} from 'newskit';
import {ThemeColor} from './types';
import {getTextColor, getBorderRadius} from './utils';

export const BadgeContainer = styled.span`
  height: ${getSizingFromTheme('sizing060')};
`;

export const StyledAccessibilityBadge = styled(Flag)`
  background-color: ${getColorFromTheme('interface010')};
  border-radius: ${getBorderRadiusFromTheme('borderRadiusRounded010')};
  color: ${getColorFromTheme('inkSubtle')};
  width: ${getSizingFromTheme('sizing070')};
  height: ${getSizingFromTheme('sizing060')};
`;

export const StyledSwatchRow = styled.span<
  ThemeColor & {first: boolean; last: boolean}
>`
  display: inline-block;
  ${getTypographyPresetFromTheme('subhead010')};
  padding: ${getSpacingFromTheme('spaceInsetSquish030')};
  width: 100%;
  border-radius: ${getBorderRadius as any};
  background-color: ${({theme, name}) => theme.colors[name as ColorKeys]};
  border: ${({brightness, value}) =>
    brightness > 0.99 || value === 'transparent' ? `solid 1px black` : null};
  color: ${getTextColor};
`;

export const StyledSwatchCard = styled.div`
  width: 100%;
  ${getTypographyPresetFromTheme('subhead010')};
  box-shadow: ${getShadowFromTheme('shadow030')};
  border-radius: ${getBorderRadius({first: true, last: true})};
  overflow: hidden;
`;

export const StyledSwatchCardTop = styled.div<
  ThemeColor & {isOverlay?: boolean}
>`
  height: ${getSizingFromTheme('sizing100')};
  background: ${({theme, name, isOverlay}) =>
    isOverlay
      ? theme.overlays[name as ColorKeys]
      : theme.colors[name as ColorKeys]};
  padding: ${getSpacingFromTheme('spaceInset020')};
`;

export const StyledSwatchCardBottom = styled.div<
  ThemeColor & {isOverlay?: boolean}
>`
  height: ${({isOverlay}) =>
    getSizingFromTheme(isOverlay ? 'sizing110' : 'sizing100')};
  background-color: ${({theme}) => theme.colors.white};
  padding: ${getSpacingFromTheme('spaceInsetSquish030')};
`;

export const StyledSwatchCardTitle = styled.div`
  ${getTypographyPresetFromTheme('heading010')};
`;

export const StyledSwatchCardDot = styled.div<{backgroundColor: string}>`
  display: inline-block;
  width: ${getSizingFromTheme('sizing030')};
  height: ${getSizingFromTheme('sizing030')};
  background: ${({backgroundColor}) => backgroundColor};
  box-shadow: ${getShadowFromTheme('shadow030')};
  border-radius: ${getBorderRadiusFromTheme('borderRadiusCircle')};
  margin-right: ${getSizingFromTheme('sizing020')};
`;

export const TextBoxSwatch = styled.span<{
  themeColor: ColorKeys;
  dark?: boolean;
}>`
  display: inline-block;
  width: 192px;
  height: ${getSizingFromTheme('sizing060')};
  border-radius: ${({theme}) => theme.borders.borderRadiusDefault};
  background-color: ${({theme, themeColor}) => theme.colors[themeColor]};
  color: ${({theme, dark}) =>
    dark ? theme.colors.white : theme.colors.inkContrast};

  ::before {
    content: '${({theme, themeColor}) => theme.colors[themeColor]}';
    padding: ${getSizingFromTheme('sizing030')};
    line-height: 1.9;
    text-transform: ${({theme, themeColor}) =>
      theme.colors[themeColor].startsWith('#') ? 'uppercase' : null};
  }
`;

export const ColorPalettesWrapper = styled.div`
  margin-bottom: 30px;
`;
