import {createTheme} from './creator';

export const newskitDarkThemeOverrides = {
  colors: {
    socialTwitter: '#97e3ff',
    socialFacebook: '#74abff',
    socialInstagram: '#ff77a0',
    socialYoutube: '#ffffff',
    socialWhatsapp: '#dcf8c6',
    socialReddit: '#ffffff',
    socialGithub: '#ffffff',

    inkBase: '{{colors.neutral020}}',
    inkContrast: '{{colors.white}}',
    inkSubtle: '{{colors.neutral040}}',
    inkNonEssential: '{{colors.neutral050}}',
    inkInverse: '{{colors.neutral100}}',
    inkPositive: '{{colors.green050}}',
    inkNegative: '{{colors.red050}}',
    inkNotice: '{{colors.neutral040}}',
    inkInformative: '{{colors.teal050}}',
    inkBrand010: '{{colors.blue050}}',
    inkBrand020: '{{colors.blue030}}',
    interfaceBackground: '{{colors.neutral100}}',
    interface010: '{{colors.neutral090}}',
    interface020: '{{colors.neutral080}}',
    interface030: '{{colors.neutral070}}',
    interface040: '{{colors.neutral060}}',
    interface050: '{{colors.neutral050}}',
    interface060: '{{colors.neutral030}}',
    interfaceBrand010: '{{colors.blue050}}',
    interfaceBrand020: '{{colors.blue030}}',
    interfacePositive010: '{{colors.green050}}',
    interfacePositive020: '{{colors.green090}}',
    interfaceNegative010: '{{colors.red050}}',
    interfaceNegative020: '{{colors.red090}}',
    interfaceNotice010: '{{colors.neutral030}}',
    interfaceNotice020: '{{colors.neutral080}}',
    interfaceInformative010: '{{colors.teal050}}',
    interfaceInformative020: '{{colors.teal090}}',
    interfaceNeutral010: '{{colors.neutral030}}',
    interfaceNeutral020: '{{colors.neutral080}}',
    interfaceSkeleton010: '{{colors.neutral090}}',
    interfaceSkeleton020: '{{colors.neutral080}}',
    interactivePrimary010: '{{colors.blue090}}',
    interactivePrimary020: '{{colors.blue080}}',
    interactivePrimary030: '{{colors.blue050}}',
    interactivePrimary040: '{{colors.blue040}}',
    interactivePrimary050: '{{colors.blue030}}',
    interactiveSecondary010: '{{colors.neutral090}}',
    interactiveSecondary020: '{{colors.neutral080}}',
    interactiveSecondary030: '{{colors.neutral050}}',
    interactiveSecondary040: '{{colors.neutral040}}',
    interactiveSecondary050: '{{colors.neutral030}}',
    interactivePositive010: '{{colors.green090}}',
    interactivePositive020: '{{colors.green080}}',
    interactivePositive030: '{{colors.green050}}',
    interactivePositive040: '{{colors.green040}}',
    interactivePositive050: '{{colors.green030}}',
    interactiveNegative010: '{{colors.red100}}',
    interactiveNegative020: '{{colors.red080}}',
    interactiveNegative030: '{{colors.red050}}',
    interactiveNegative040: '{{colors.red040}}',
    interactiveNegative050: '{{colors.red030}}',
    interactiveInverse010: '{{colors.blackTint010}}',
    interactiveInverse020: '{{colors.blackTint020}}',
    interactiveInverse030: '{{colors.blackTint090}}',
    interactiveInverse040: '{{colors.blackTint070}}',
    interactiveInverse050: '{{colors.blackTint080}}',
    interactiveInput010: '{{colors.neutral090}}',
    interactiveInput020: '{{colors.neutral060}}',
    interactiveInput030: '{{colors.blue090}}',
    interactiveInput040: '{{colors.blue050}}',
    interactiveInput050: '{{colors.blue030}}',
    interactiveLink010: '{{colors.blue050}}',
    interactiveLink020: '{{colors.blue040}}',
    interactiveLink030: '{{colors.blue030}}',
    interactiveDisabled010: '{{colors.neutral080}}',
    interactiveVisited010: '{{colors.purple050}}',
  },
  overlays: {
    overlayLightGradient010:
      'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
    overlayDarkGradient010:
      'linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, #0A0A0A 100%)',
    overlayGradientBaseHorizontal:
      'linear-gradient(-90deg, rgba(17,17,17,0.00) 0%, rgba(17,17,17,1.00) 100%)',
    overlayGradientBaseVertical:
      'linear-gradient(180deg, rgba(17,17,17,0.00) 0%, rgba(17,17,17,1.00) 100%)',
    overlayGradientInverseHorizontal:
      'linear-gradient(-90deg, rgba(198,198,198,0.00) 0%, rgba(198,198,198,1.00) 100%)',
    overlayGradientInverseVertical:
      'linear-gradient(180deg, rgba(198,198,198,0.00) 0%, rgba(198,198,198,1.00) 100%)',
  },
  outline: {
    safariOutlineStyleDefault: 'solid',
  },
};

export const newskitDarkTheme = createTheme({
  name: 'newskit-dark',
  overrides: newskitDarkThemeOverrides,
});
