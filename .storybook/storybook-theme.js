import {create} from '@storybook/theming';
import {newskitLightTheme, compileTheme} from '../src';
import logo from './public/newskit-logo-storybook.png';

const nkTheme = compileTheme(newskitLightTheme);

export default create({
  base: 'light',

  colorPrimary: nkTheme.colors.interactivePrimary030,
  colorSecondary: nkTheme.colors.interactivePrimary030,

  // UI
  appBg: '#F5F8FF',
  appContentBg: nkTheme.colors.interfaceBackground,
  appBorderColor: nkTheme.colors.interface040,
  appBorderRadius: nkTheme.borders.borderRadiusDefault,

  // Typography
  fontBase: nkTheme.fonts.fontFamily030.fontFamily,
  fontCode: 'monospace',

  // Text colors
  textColor: nkTheme.colors.inkBase,
  textInverseColor: nkTheme.colors.inkInverse,

  // Toolbar default and active colors
  barTextColor: nkTheme.colors.inkSubtle,
  barSelectedColor: nkTheme.colors.interactivePrimary030,
  barBg: nkTheme.colors.interfaceBackground,

  // Form colors
  inputBg: nkTheme.colors.interfaceBackground,
  inputBorder: nkTheme.colors.interactiveInput020,
  inputTextColor: nkTheme.colors.inkBase,
  inputBorderRadius: nkTheme.borders.borderRadiusDefault,

  brandTitle: 'NewsKit Storybook',
  brandImage: logo,
  brandTarget: '_self',
});
