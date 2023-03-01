/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  styled,
  Flag,
  getTypographyPresetFromTheme,
  getBorderFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  getShadowFromTheme,
  getSpacingFromTheme,
  getStylePresetFromTheme,
  getMediaQueryFromTheme,
  getColorCssFromTheme,
  getBorderCssFromTheme,
} from 'newskit';
import {ThemeColor} from './types';
import {getTextColor, getBorderRadius} from './utils';

export const StyledBadgeContainer = styled.span`
  height: ${getSizingFromTheme('sizing050')};
`;

export const StyledAccessibilityBadge = styled(Flag)`
  width: ${getSizingFromTheme('sizing070')};
  height: ${getSizingFromTheme('sizing050')};
  ${getStylePresetFromTheme('swatchBadge')};
`;

export const StyledSwatchRow = styled.span<
  ThemeColor & {first: boolean; last: boolean}
>`
  display: inline-block;
  ${getTypographyPresetFromTheme('editorialParagraph020')};
  padding: ${getSpacingFromTheme('spaceInsetSquish030')};
  width: 100%;
  border-radius: ${getBorderRadius as any};
  background-color: ${({theme, name}) => theme.colors[name]};
  color: ${getTextColor};
  text-transform: capitalize;
`;

export const StyledSwatchCard = styled.div`
  width: 100%;
  ${getTypographyPresetFromTheme('utilitySubheading030')};
  box-shadow: ${getShadowFromTheme('shadow030')};
  border-radius: ${getBorderRadius({first: true, last: true})};
  overflow: hidden;
`;

export const StyledSwatchCardTop = styled.div<ThemeColor>`
  height: ${getSizingFromTheme('sizing100')};
  background: ${({theme, name}) => theme.colors[name]};
  padding: ${getSpacingFromTheme('space020')};
`;

export const StyledSwatchCardTopOverlay = styled.div<ThemeColor>`
  background-image: linear-gradient(
      45deg,
      ${getColorFromTheme('interface040')} 25%,
      transparent 25%
    ),
    linear-gradient(
      -45deg,
      ${getColorFromTheme('interface040')} 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      ${getColorFromTheme('interface040')} 75%
    ),
    linear-gradient(
      -45deg,
      transparent 75%,
      ${getColorFromTheme('interface040')} 75%
    );
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  height: ${getSizingFromTheme('sizing100')};
  width: 100%;

  ::before {
    content: '';
    background: ${({theme, name}) => theme.overlays[name]};
    height: 100%;
    display: block;
  }
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
  ${getTypographyPresetFromTheme('utilityHeading020')};
`;

export const StyledSwatchCardDot = styled.div<{backgroundColor: string}>`
  display: inline-block;
  width: ${getSizingFromTheme('sizing030')};
  height: ${getSizingFromTheme('sizing030')};
  background: ${({backgroundColor}) => backgroundColor};
  box-shadow: ${getShadowFromTheme('shadow030')};
  border-radius: ${getBorderFromTheme('borderRadiusCircle')};
  margin-right: ${getSizingFromTheme('sizing020')};
`;

export const TextBoxSwatch = styled.span<{
  themeColor: string;
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

export const ColorSetWrapper = styled.div`
  ${getMediaQueryFromTheme('lg')} {
    border: 1px solid;
    ${getColorCssFromTheme('borderColor', 'interface020')}
  }
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  padding-top: 24px;
`;
