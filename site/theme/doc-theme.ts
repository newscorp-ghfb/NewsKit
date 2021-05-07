import {createTheme} from 'newskit';
import colorsLight from './colors-light.json';
import colorsDark from './colors-dark.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import typographyPresets from './typography-presets.json';
import borders from './borders.json';
import {stylePresets} from './style-presets';
import {componentDefaults} from './component-defaults';

export const [lightOverrides, darkOverrides] = [colorsLight, colorsDark].map(
  colors => ({
    colors,
    stylePresets,
    typographyPresets,
    componentDefaults,
    fonts,
    overlays,
    borders,
    sizing: {
      sizing055: '28px',
    },
    spacePresets: {
      space055: '{{sizing.sizing055}}',
    },
  }),
);

export const docsThemeLight = createTheme({
  name: 'docs-theme-light',
  overrides: lightOverrides,
});

export const docsThemeDark = createTheme({
  name: 'docs-theme-dark',
  baseTheme: docsThemeLight,
  overrides: darkOverrides,
});

// TODO: unit test these colour overrides like we do the light/dark base themes
export const blueSubThemeLight = createTheme({
  name: 'docs-blue-light',
  baseTheme: docsThemeLight,
  overrides: {
    colors: {
      illustrationPalette010: '{{colors.blue010}}',
      illustrationPalette020: '{{colors.blue020}}',
      illustrationPalette030: '{{colors.blue030}}',
      illustrationPalette040: '{{colors.blue040}}',
      illustrationPalette050: '{{colors.blue050}}',
      illustrationPalette060: '{{colors.blue060}}',
      illustrationPalette070: '{{colors.blue070}}',
      illustrationPalette080: '{{colors.blue080}}',
      illustrationPalette090: '{{colors.blue090}}',
      illustrationPalette100: '{{colors.blue100}}',
      illustrationHighlight010: '{{colors.blue040}}',
      illustrationSubtle010: '{{colors.neutral060}}',
      illustrationShadow010: '{{colors.neutral040}}',
      illustrationGradient010:
        'linear-gradient(0deg, rgba(10,10,10,0.00) 0%, #0A0A0A 100%)',
      illustrationBackground010: '#F0F3FF',
      illustrationBackground020: '{{colors.neutral010}}',
      illustrationBorder010: '{{colors.neutral020}}',
      illustrationBorder020: '{{colors.neutral040}}',
      illustrationDisabled: '{{colors.neutral020}}',
      illustrationInterface010: '{{colors.white}}',
      illustrationInterface020: '{{colors.blue010}}',
      illustrationInterface030: '{{colors.blue020}}',
      illustrationInterface040: '{{colors.blue030}}',
      illustrationInterface050: '{{colors.blue040}}',
      illustrationInterface060: '{{colors.blue050}}',
      illustrationInterface070: '{{colors.blue060}}',
      illustrationInterface080: '{{colors.blue070}}',
      illustrationInterface090: '{{colors.blue080}}',
      illustrationInterface100: '{{colors.blue090}}',
      anatomySubtle: '{{colors.blue020}}',
      anatomyBorder010: '{{colors.blue020}}',
      anatomyBorder020: '{{colors.blue070}}',
    },
  },
});

export const blueSubThemeDark = createTheme({
  name: 'docs-blue-dark',
  baseTheme: docsThemeDark,
  overrides: {
    colors: {
      illustrationPalette010: '{{colors.blue010}}',
      illustrationPalette020: '{{colors.blue020}}',
      illustrationPalette030: '{{colors.blue030}}',
      illustrationPalette040: '{{colors.blue040}}',
      illustrationPalette050: '{{colors.blue050}}',
      illustrationPalette060: '{{colors.blue060}}',
      illustrationPalette070: '{{colors.blue070}}',
      illustrationPalette080: '{{colors.blue080}}',
      illustrationPalette090: '{{colors.blue090}}',
      illustrationPalette100: '{{colors.blue100}}',
      illustrationHighlight010: '{{colors.white}}',
      illustrationSubtle010: '{{colors.blue080}}',
      illustrationShadow010: '{{colors.neutral100}}',
      illustrationGradient010:
        'linear-gradient(0deg, rgba(10,10,10,0.00) 0%, #0A0A0A 100%)',
      illustrationBackground010: '{{colors.neutral090}}',
      illustrationBackground020: '{{colors.neutral090}}',
      illustrationBorder010: '{{colors.blue070}}',
      illustrationBorder020: '{{colors.blue060}}',
      illustrationDisabled: '{{colors.blue080}}',
      illustrationInterface010: '{{colors.blue050}}',
      illustrationInterface020: '{{colors.blue070}}',
      illustrationInterface030: '{{colors.blue070}}',
      illustrationInterface040: '{{colors.blue080}}',
      illustrationInterface050: '{{colors.blue090}}',
      illustrationInterface060: '{{colors.blue100}}',
      illustrationInterface070: '{{colors.blue020}}',
      illustrationInterface080: '{{colors.blue030}}',
      illustrationInterface090: '{{colors.blue050}}',
      illustrationInterface100: '{{colors.blue010}}',
      anatomySubtle: '{{colors.blue040}}',
      anatomyBorder010: '{{colors.blue080}}',
      anatomyBorder020: '{{colors.blue040}}',
    },
  },
});
