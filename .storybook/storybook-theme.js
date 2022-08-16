import {newskitLightTheme, compileTheme} from '../src';

const nkTheme = compileTheme(newskitLightTheme);

import {create} from '@storybook/theming';

export default create({
  colorPrimary: nkTheme.colors.interactivePrimary050,
  colorSecondary: nkTheme.colors.interactiveSecondary050,

  // UI
  appBg: nkTheme.colors.interfaceBackground,
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: nkTheme.borders.borderRadiusRounded010,

  // Typography
  fontBase: nkTheme.fonts.fontFamily010.fontFamily,
  fontCode: 'monospace',

  // Text colors
  textColor: nkTheme.colors.inkBase,
  textInverseColor: nkTheme.colors.inkInverse,

  // Toolbar default and active colors
  barTextColor: nkTheme.colors.inkBase,
  barSelectedColor: nkTheme.colors.interactivePrimary050,
  barBg: nkTheme.colors.interface010,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: nkTheme.borders.borderRadiusRounded010,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self',
});
