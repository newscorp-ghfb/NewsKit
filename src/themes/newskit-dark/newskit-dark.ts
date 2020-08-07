import {createTheme} from '../creator';
import {colorPalettes, colorPrimitives} from '../newskit-light/colors';

const darkThemeModifiers = {
  inkBase: colorPalettes.neutral020,
  inkContrast: colorPalettes.neutral010,
  inkSubtle: colorPalettes.neutral040,
  inkNonEssential: colorPalettes.neutral070,
  inkInverse: colorPalettes.black,

  inkNegative: colorPalettes.red050,
  inkPositive: colorPalettes.green050,
  inkNotice: colorPalettes.amber040,
  inkInformative: colorPalettes.purple030,
  inkBrand010: colorPalettes.blue050,

  inkHeadingLink: colorPalettes.neutral020,
  inkHeadingLinkHover: colorPrimitives.blue020,
  inkHeadingLinkActive: colorPrimitives.blue020,
  inkHeadingLinkVisited: colorPalettes.neutral020,

  inkLink: colorPalettes.blue020,
  inkLinkActive: colorPalettes.blue020,
  inkLinkHover: colorPalettes.blue020,
  inkLinkVisited: colorPalettes.purple020,

  interactive010: colorPalettes.blue080,
  interactive020: colorPalettes.blue090,
  interactive030: colorPalettes.blue060,
  interactive040: colorPalettes.blue070,
  interactive050: colorPalettes.blue080,
  interactive110: colorPalettes.neutral080,
  interactive120: colorPalettes.neutral090,
  interactive130: colorPalettes.neutral070,
  interactive140: colorPalettes.neutral080,
  interactive150: colorPalettes.neutral090,
  interactive210: colorPalettes.white,
  interactive220: colorPalettes.neutral090,
  interactive230: colorPalettes.blue060,
  interactive240: colorPalettes.blue090,
  interactive250: colorPalettes.blue100,
  interactiveDisabled: colorPalettes.neutral090,

  semanticNegative010: colorPalettes.red090,
  semanticNegative020: colorPalettes.red100,
  semanticNegative030: colorPalettes.red060,
  semanticNegative040: colorPalettes.red070,
  semanticNegative050: colorPalettes.red080,
  semanticPositive010: colorPalettes.green090,
  semanticPositive020: colorPalettes.green100,
  semanticPositive030: colorPalettes.green060,
  semanticPositive040: colorPalettes.green070,
  semanticPositive050: colorPalettes.green080,
  semanticInformative010: colorPalettes.purple040,
  semanticNotice010: colorPalettes.amber060,
  interfaceBackground: colorPalettes.neutral090,
  interface010: colorPalettes.neutral090,
  interface020: colorPalettes.neutral080,
  interface030: colorPalettes.neutral070,
  interface040: colorPalettes.neutral060,
  interface050: colorPalettes.neutral050,
  interface060: colorPalettes.neutral010,
  interfaceBrand010: colorPalettes.blue060,
  interfaceBrand020: colorPalettes.blue020,

  inverse: colorPalettes.black,

  overlayLight010: 'rgba(255,255,255,0.20)',
  overlayLight020: 'rgba(255,255,255,0.40)',
  overlayLight030: 'rgba(255,255,255,0.60)',
  overlayLight040: 'rgba(255,255,255,0.80)',
  overlayDark010: 'rgba(10,10,10,0.20)',
  overlayDark020: 'rgba(10,10,10,0.40)',
  overlayDark030: 'rgba(10,10,10,0.60)',
  overlayDark040: 'rgba(10,10,10,0.80)',

  gradientDark010:
    'linear-gradient(180deg, rgba(51,51,51,0.00) 0%, #0A0A0A 100%)',
  gradientLight010:
    'linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%)',

  skeleton010: colorPalettes.neutral090,
  skeleton020: colorPalettes.neutral080,
  transparent: colorPalettes.transparent,
};
export const newskitDarkTheme = createTheme('newskit-dark', {
  colorOverrides: darkThemeModifiers,
});
