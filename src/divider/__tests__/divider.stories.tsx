import * as React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from '@emotion/react';
import {Divider, DividerProps} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {StackChild} from '../../stack-child';
import {getSizingCssFromTheme, getColorCssFromTheme} from '../../utils/style';
import {compileTheme, createTheme} from '../../theme';

const Box = styled.div<{marginRight?: boolean; transparent?: boolean}>`
  display: inline-block;
  width: 48px;
  ${getSizingCssFromTheme('height', 'sizing100')};
  ${({marginRight}) =>
    marginRight ? ' margin-right:10px' : ' margin-right:0px'};
  ${({transparent}) =>
    transparent
      ? getColorCssFromTheme('backgroundColor', 'transparent')
      : getColorCssFromTheme('backgroundColor', 'blue010')};
`;

const BlockForDivider = styled(Block)<Pick<DividerProps, 'vertical'>>`
  ${getSizingCssFromTheme('height', 'sizing080')};
  ${getColorCssFromTheme('backgroundColor', 'blue010')};
  ${getColorCssFromTheme('color', 'blue010')};
  width: 100%;
`;

const ContainerInline = styled(Block)`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing100')};
`;

const StackForHorizontalDivider = styled(Stack)`
  width: 50px;
`;

const dividerCols = {
  xs: 'repeat(1, minmax(150px, max-content))',
  sm: 'repeat(2, minmax(150px, max-content))',
  md: 'auto',
};

const myCustomTheme = compileTheme(
  createTheme({
    name: 'my-custom-theme',
    overrides: {
      stylePresets: {
        customDivider: {
          base: {
            borderStyle: 'solid',
            borderColor: '{{colors.amber060}}',
            borderWidth: '{{borders.borderWidth030}}',
          },
        },
      },
    },
  }),
);

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase>
      <Divider />
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StoryHorizontal = () => (
  <>
    <StorybookPage columns={dividerCols}>
      <StorybookCase title="Horizontal divider in vertical block">
        <BlockForDivider />
        <Block paddingBlock="space010" />
        <Divider />
        <Block paddingBlock="space010" />
        <BlockForDivider />
      </StorybookCase>

      <StorybookCase title="Horizontal in vertical stack without spacing">
        <Stack stackDistribution="center" flow="vertical-center">
          <BlockForDivider />
          <Divider />
          <BlockForDivider />
        </Stack>
      </StorybookCase>
      <StorybookCase title="Horizontal in vertical stack with spacing">
        <StackForHorizontalDivider
          stackDistribution="center"
          flow="vertical-center"
          spaceInline="space030"
        >
          <BlockForDivider>Block 1</BlockForDivider>

          <StackChild alignSelf="stretch">
            <Divider />
          </StackChild>
          <BlockForDivider>Block 2</BlockForDivider>
        </StackForHorizontalDivider>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryHorizontal.storyName = 'Horizontal';

export const StoryVertical = () => (
  <>
    <StorybookPage columns={dividerCols}>
      <StorybookCase title="Vertical divider in horizontal block">
        <Box marginRight />
        <ContainerInline spaceInline="space020">
          <Divider vertical />
        </ContainerInline>
        <Box />
      </StorybookCase>
      <StorybookCase title="Vertical divider in horizontal Stack without spacing">
        <Stack flow="horizontal-center" stackDistribution="flex-start">
          <Box />
          <Divider vertical />
          <Box />
        </Stack>
      </StorybookCase>

      <StorybookCase title="Vertical divider in horizontal Stack with spacing">
        <Stack
          flow="horizontal-center"
          stackDistribution="flex-start"
          spaceInline="space020"
        >
          <Box />
          <StackChild alignSelf="stretch">
            <Divider vertical />
          </StackChild>
          <Box />
        </Stack>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryVertical.storyName = 'Vertical';

export const StoryResponsive = () => (
  <>
    <StorybookPage>
      <StorybookCase title="Horizontal XS - Vertical MD - Vertical XL">
        <div style={{height: 50}}>
          <Divider vertical={{xs: false, sm: true, md: false, xl: true}} />
        </div>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryResponsive.storyName = 'Breakpoint';

export const StoryLogicalPropsOverrides = () => (
  <>
    <StorybookPage columns={dividerCols}>
      <StorybookCase title="Logical props- paddingBlock overrides">
        <BlockForDivider />
        <Divider overrides={{paddingBlock: 'space030'}} />
        <BlockForDivider />
      </StorybookCase>
      <StorybookCase title="Logical props- paddingInline overrides">
        <BlockForDivider paddingInline="space030" />
        <Divider overrides={{paddingInline: 'space030'}} />
        <BlockForDivider paddingInline="space030" />
      </StorybookCase>
      <StorybookCase title="Logical props- marginBlock overrides">
        <BlockForDivider />
        <Divider overrides={{marginBlock: 'space030'}} />
        <BlockForDivider />
      </StorybookCase>
      <StorybookCase title="Logical props- marginInline overrides">
        <BlockForDivider marginInline="space030" />
        <Divider overrides={{marginInline: 'space030'}} />
        <BlockForDivider marginInline="space030" />
      </StorybookCase>
      <StorybookCase title="Styling">
        <ThemeProvider theme={myCustomTheme}>
          <Box transparent>
            <Divider vertical overrides={{stylePreset: 'customDivider'}} />
          </Box>
        </ThemeProvider>
      </StorybookCase>
    </StorybookPage>
  </>
);
StoryLogicalPropsOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Divider',
  component: 'Divider',
  parameters: {
    nkDocs: {
      title: 'Divider',
      url: 'https://newskit.co.uk/components/divider',
      description:
        'A divider is used to provide visual separation of different content. Dividers can be applied vertically or horizontally.',
    },
  },
};
