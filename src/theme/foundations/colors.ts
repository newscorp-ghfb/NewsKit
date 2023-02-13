// Palettes are included in the "colors" below. Only exported separately for the documentation site colors page.
export const palettes = {
  blue010: '#ECF1FF',
  blue020: '#D5E0FC',
  blue030: '#AEBFFF',
  blue040: '#8BA6F6',
  blue050: '#577FFB',
  blue060: '#3358CC',
  blue070: '#254CAC',
  blue080: '#12387A',
  blue090: '#03264D',
  blue100: '#060F2C',

  teal010: '#E6F4F6',
  teal020: '#C7E7EA',
  teal030: '#97D0D6',
  teal040: '#5EB8C0',
  teal050: '#289FAB',
  teal060: '#017582',
  teal070: '#005B65',
  teal080: '#004249',
  teal090: '#002B30',
  teal100: '#001314',

  red010: '#FEECEC',
  red020: '#FED8D8',
  red030: '#FEB3B3',
  red040: '#FE8888',
  red050: '#FB5959',
  red060: '#D60000',
  red070: '#A90000',
  red080: '#7D0000',
  red090: '#550000',
  red100: '#2D0000',

  green010: '#E5F4EA',
  green020: '#C8E4D0',
  green030: '#95CAA3',
  green040: '#6DB681',
  green050: '#41A05B',
  green060: '#007B22',
  green070: '#00601A',
  green080: '#004514',
  green090: '#002D0D',
  green100: '#001506',

  amber010: '#FFEDE1',
  amber020: '#FDDCC6',
  amber030: '#FEB788',
  amber040: '#F79247',
  amber050: '#CD6900',
  amber060: '#A75500',
  amber070: '#804200',
  amber080: '#5D2F00',
  amber090: '#3C1F00',
  amber100: '#1D0D02',

  neutral010: '#F1F1F1',
  neutral020: '#E2E2E2',
  neutral030: '#C6C6C6',
  neutral040: '#ABABAB',
  neutral050: '#919191',
  neutral060: '#6A6A6A',
  neutral070: '#525252',
  neutral080: '#3B3B3B',
  neutral090: '#262626',
  neutral100: '#111111',

  purple010: '#EFF0FF',
  purple020: '#DFE0FE',
  purple030: '#C0C2FC',
  purple040: '#A3A3FB',
  purple050: '#8883F6',
  purple060: '#6454E3',
  purple070: '#4C33CC',
  purple080: '#37239C',
  purple090: '#231668',
  purple100: '#0F0936',
  blackTint010: 'rgba(0,0,0,0.1)',
  blackTint020: 'rgba(0,0,0,0.2)',
  blackTint030: 'rgba(0,0,0,0.3)',
  blackTint040: 'rgba(0,0,0,0.4)',
  blackTint050: 'rgba(0,0,0,0.5)',
  blackTint060: 'rgba(0,0,0,0.6)',
  blackTint070: 'rgba(0,0,0,0.7)',
  blackTint080: 'rgba(0,0,0,0.8)',
  blackTint090: 'rgba(0,0,0,0.9)',
  black: '#0A0A0A',
  whiteTint010: 'rgba(255,255,255,0.1)',
  whiteTint020: 'rgba(255,255,255,0.2)',
  whiteTint030: 'rgba(255,255,255,0.3)',
  whiteTint040: 'rgba(255,255,255,0.4)',
  whiteTint050: 'rgba(255,255,255,0.5)',
  whiteTint060: 'rgba(255,255,255,0.6)',
  whiteTint070: 'rgba(255,255,255,0.7)',
  whiteTint080: 'rgba(255,255,255,0.8)',
  whiteTint090: 'rgba(255,255,255,0.9)',
  white: '#FFFFFF',

  socialTwitter: '#1DA1F2',
  socialFacebook: '#1877F2',
  socialInstagram: '#C32AA3',
  socialYoutube: '#FF0000',
  socialWhatsapp: '#25D366',
  socialReddit: '#FF4500',
  socialGithub: '#000000',
  socialApple: '#000000',
  socialGoogleBlue: '#4285F4',
  socialGoogleRed: '#DB4437',
  socialGoogleYellow: '#F4B400',
  socialGoogleGreen: '#0F9D58',
  focus010: '#3768FB',
  transparent: 'transparent',
};

export const colors = {
  ...palettes,

  blue055: '#446BE4',
  purple055: '#6E61E4',
  teal055: '#06808E',

  darkBlue100: '#09111C',
  darkBlue095: '#0F1B2C',
  darkBlue090: '#15263E',
  darkBlue080: '#2E3F54',
  darkBlue070: '#435365',
  darkBlue060: '#5A6A79',
  darkBlue050: '#85939C',
  darkBlue040: '#A1ACB4',
  darkBlue030: '#C0C7CC',
  darkBlue020: '#DEE2E5',
  darkBlue010: '#F0F1F3',

  inkBase: '{{colors.neutral080}}',
  inkContrast: '{{colors.neutral100}}',
  inkSubtle: '{{colors.neutral060}}',
  inkNonEssential: '{{colors.neutral040}}',
  inkInverse: '{{colors.white}}',
  inkLight010: '{{colors.white}}',
  inkDark010: '{{colors.neutral100}}',
  inkPositive: '{{colors.green060}}',
  inkNegative: '{{colors.red060}}',
  inkNotice: '{{colors.neutral070}}',
  inkInformative: '{{colors.teal060}}',
  inkBrand010: '{{colors.blue060}}',
  inkBrand020: '{{colors.blue080}}',
  interfaceBackground: '{{colors.white}}',
  interface010: '{{colors.white}}',
  interface020: '{{colors.neutral010}}',
  interface030: '{{colors.neutral020}}',
  interface040: '{{colors.neutral030}}',
  interface050: '{{colors.neutral040}}',
  interface060: '{{colors.neutral100}}',
  interfaceBrand010: '{{colors.blue060}}',
  interfaceBrand020: '{{colors.blue080}}',
  interfacePositive010: '{{colors.green060}}',
  interfacePositive020: '{{colors.green010}}',
  interfaceNegative010: '{{colors.red060}}',
  interfaceNegative020: '{{colors.red010}}',
  interfaceNotice010: '{{colors.neutral080}}',
  interfaceNotice020: '{{colors.neutral010}}',
  interfaceInformative010: '{{colors.teal060}}',
  interfaceInformative020: '{{colors.teal010}}',
  interfaceNeutral010: '{{colors.neutral080}}',
  interfaceNeutral020: '{{colors.neutral010}}',
  interfaceSkeleton010: '{{colors.neutral010}}',
  interfaceSkeleton020: '{{colors.neutral020}}',
  interactivePrimary010: '{{colors.blue010}}',
  interactivePrimary020: '{{colors.blue020}}',
  interactivePrimary030: '{{colors.blue060}}',
  interactivePrimary040: '{{colors.blue070}}',
  interactivePrimary050: '{{colors.blue080}}',
  interactiveSecondary010: '{{colors.neutral010}}',
  interactiveSecondary020: '{{colors.neutral020}}',
  interactiveSecondary030: '{{colors.neutral080}}',
  interactiveSecondary040: '{{colors.neutral090}}',
  interactiveSecondary050: '{{colors.neutral100}}',
  interactivePositive010: '{{colors.green010}}',
  interactivePositive020: '{{colors.green020}}',
  interactivePositive030: '{{colors.green060}}',
  interactivePositive040: '{{colors.green070}}',
  interactivePositive050: '{{colors.green080}}',
  interactiveNegative010: '{{colors.red010}}',
  interactiveNegative020: '{{colors.red020}}',
  interactiveNegative030: '{{colors.red060}}',
  interactiveNegative040: '{{colors.red070}}',
  interactiveNegative050: '{{colors.red080}}',
  interactiveInverse010: '{{colors.whiteTint010}}',
  interactiveInverse020: '{{colors.whiteTint020}}',
  interactiveInverse030: '{{colors.white}}',
  interactiveInverse040: '{{colors.whiteTint070}}',
  interactiveInverse050: '{{colors.whiteTint080}}',
  interactiveInput010: '{{colors.neutral010}}',
  interactiveInput020: '{{colors.neutral050}}',
  interactiveInput030: '{{colors.blue010}}',
  interactiveInput040: '{{colors.blue060}}',
  interactiveInput050: '{{colors.blue070}}',
  interactiveLink010: '{{colors.blue060}}',
  interactiveLink020: '{{colors.blue070}}',
  interactiveLink030: '{{colors.blue080}}',
  interactiveDisabled010: '{{colors.neutral020}}',
  interactiveVisited010: '{{colors.purple060}}',
  interactiveFocus010: '{{colors.focus010}}',
};
