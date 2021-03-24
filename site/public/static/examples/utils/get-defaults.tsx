import {
  ThemeProvider,
  createTheme,
  newskitLightTheme,
  StylePresetStyleKeys,
  MQ,
  styled,
  getStylePreset,
  getTypographyPreset,
  getResponsiveSpace,
  getResponsiveSize,
  getResponsiveMotion,
  getResponsiveBorder,
} from 'newskit';

const customTheme = createTheme('newskit-light-custom', {
  baseTheme: newskitLightTheme,
  themeOverrider: () => ({
    componentDefaults: {
      customComponent: {
        stylePreset: 'customComponentStyles',
        typographyPreset: 'customComponentTypography',
        spaceInline: 'space040',
        spaceInset: 'spaceInsetSquish020',
        nkComponent1: {
          stylePreset: 'nkComponent1Styles',
          spaceInline: 'space030',
          spaceStack: 'space030',
          width: '100%',
          borderWidth: '2px',
          motionDuration: '100ms',
        },
        nkComponent2: {
          stylePreset: 'nkComponent2Styles',
          spaceStack: 'space020',
        },
      },
    },
  }),
});

export interface CustomComponentProps {
  overrides?: {
    stylePreset?: MQ<StylePresetStyleKeys>;
    typographyPreset?: MQ<string>;
    spaceInline?: MQ<string>;
    spaceInset?: MQ<string>;
    nkComponent1: {
      stylePreset?: MQ<StylePresetStyleKeys>;
      spaceInline?: MQ<string>;
      spaceStack?: MQ<string>;
      width?: MQ<string>;
      borderWidth: MQ<string>;
      motionDuration: MQ<string>;
    };
    nkComponent2: {
      stylePreset?: MQ<StylePresetStyleKeys>;
      spaceStack?: MQ<string>;
    };
  };
}

const StyledContainer = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent', '', {withCrop: true})};
  ${getStylePreset('customComponent', '')};
  ${getResponsiveSpace('padding', 'customComponent', '', 'spaceInset')};
  ${getResponsiveSpace('marginBottom', 'customComponent', '')};
`;

const NKComponent1 = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent.nkComponent1', 'nkComponent1', {
    withCrop: true,
  })};
  ${getStylePreset('customComponent.nkComponent1', 'nkComponent1')};
  ${getResponsiveSpace(
    'padding',
    'customComponent.nkComponent1',
    'nkComponent1',
  )};
  ${getResponsiveSpace(
    'marginRight',
    'customComponent.nkComponent1',
    'nkComponent1',
    'spaceInline',
  )};
  ${getResponsiveSpace(
    'marginBottom',
    'customComponent.nkComponent1',
    'nkComponent1',
    'spaceStack',
  )};
  ${getResponsiveSize(
    'width',
    'customComponent.nkComponent1',
    'nkComponent1',
    'width',
  )}
  ${getResponsiveBorder(
    'borderWidth',
    'customComponent.nkComponent1',
    'nkComponent1',
    'borderWidth',
  )}
  ${getResponsiveMotion(
    'transitionDuration',
    'customComponent.nkComponent1',
    'nkComponent1',
    'motionDuration',
  )}
`;

const NKComponent2 = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent.nkComponent2', 'nkComponent2', {
    withCrop: true,
  })};
  ${getStylePreset('customComponent.nkComponent2', 'nkComponent2')};
  ${getResponsiveSpace(
    'padding',
    'customComponent.nkComponent2',
    'nkComponent2',
    'spaceInset',
  )};
  ${getResponsiveSpace(
    'marginBottom',
    'customComponent.nkComponent2',
    'nkComponent2',
    'spaceStack',
  )};
`;

const CustomComponent = props => (
  <ThemeProvider theme={customTheme}>
    <StyledContainer {...props}>
      <NKComponent1 {...props}>Sub component 1</NKComponent1>
      <NKComponent2 {...props}>Sub component 2</NKComponent2>
    </StyledContainer>
  </ThemeProvider>
);

const overrides = {
  stylePreset: 'customComponentStylesOverrides',
  typographyPreset: 'customComponentTypographyOverrides',
  spaceStack: 'space040',
  nkComponent1: {
    stylePreset: 'nkComponent1StylesOverrides',
    spaceStack: 'space030',
  },
  nkComponent2: {
    stylePreset: 'nkComponent2StylesOverrides',
    spaceInline: 'space010',
  },
};

<CustomComponent overrides={overrides} />;
