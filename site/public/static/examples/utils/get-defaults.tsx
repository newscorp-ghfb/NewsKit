import { 
  ThemeProvider, 
  createTheme, 
  newskitLightTheme, 
  StylePresetStyleKeys,
  TypographyPresetKeys,
  SpacePresetKeys,
  MQ,
  styled,
  getStylePreset,
  getTypographyPreset,
  getSpacingInlineHorizontal, 
  getSpacingInlineVertical, 
  getSpacingStackHorizontal, 
  getSpacingStackVertical,
  getSpacingInset,  } from "newskit";


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
        },
        nkComponent2: {
          stylePreset: 'nkComponent2Styles',
          spaceStack: 'space020',
        },
      },
    }
  })
});

export interface CustomComponentProps {
  overrides?: {
    stylePreset?: MQ<StylePresetStyleKeys>,
    typographyPreset?: MQ<TypographyPresetKeys>,
    spaceInline?: MQ<SpacePresetKeys>,
    spaceInset?: MQ<SpacePresetKeys>,
    nkComponent1: {
      stylePreset?: MQ<StylePresetStyleKeys>,
      spaceInline?: MQ<SpacePresetKeys>,
      spaceStack?: MQ<SpacePresetKeys>,
    },
    nkComponent2: {
      stylePreset?: MQ<StylePresetStyleKeys>,
      spaceStack?: MQ<SpacePresetKeys>,
    },
  };
}


const StyledContainer = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent', '', {withCrop: true})};
  ${getStylePreset('customComponent', '')};
  ${getSpacingInset('customComponent', '')};
  ${getSpacingInlineVertical('customComponent', '')}; // margin-bottom
`;


const NKComponent1 = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent.nkComponent1', 'nkComponent1', {withCrop: true})};
  ${getStylePreset('customComponent.nkComponent1', 'nkComponent1')};
  ${getSpacingInset('customComponent.nkComponent1', 'nkComponent1')};
  ${getSpacingInlineHorizontal('customComponent.nkComponent1', 'nkComponent1')}; // margin-right
  ${getSpacingStackHorizontal('customComponent.nkComponent1', 'nkComponent1')}; // margin-bottom
`;

const NKComponent2 = styled.div<CustomComponentProps>`
  ${getTypographyPreset('customComponent.nkComponent2', 'nkComponent2', {withCrop: true})};
  ${getStylePreset('customComponent.nkComponent2', 'nkComponent2')};
  ${getSpacingInset('customComponent.nkComponent2', 'nkComponent2')};
  ${getSpacingStackVertical('customComponent.nkComponent2', 'nkComponent2')}; // margin-right
`;


const CustomComponent = (props) => 
<ThemeProvider theme={customTheme}>
<StyledContainer {...props}>
  <NKComponent1 {...props}>Sub component 1</NKComponent1>
  <NKComponent2 {...props}>Sub component 2</NKComponent2>
</StyledContainer>
</ThemeProvider>


const overrides = {
  stylePreset: 'customComponentStylesOverrides',
  typographyPreset: 'customComponentTypographyOverrides',
  spaceStack: 'sizing040',
  nkComponent1: {
    stylePreset: 'nkComponent1StylesOverrides',
    spaceStack: 'sizing030',
  },
  nkComponent2: {
    stylePreset: 'nkComponent2StylesOverrides',
    spaceInline: 'sizing010',
  },
};

<CustomComponent overrides={overrides}/>
