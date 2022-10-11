import * as React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from '@emotion/react';
import {Divider, DividerProps} from '..';
import {
  StorybookCase,
  StorybookHeading,
  StorybookPage,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {StackChild} from '../../stack-child';
import {IconFilledFacebook, IconFilledWhatsApp} from '../../icons';
import {getSizingCssFromTheme, getColorCssFromTheme} from '../../utils/style';
import {compileTheme, createTheme} from '../../theme';

const Box = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  margin: 12px;
  padding-left: 11px;
  border: 1px solid lime;
`;

const BlockWithBorder = styled(Block)`
  display: inline-block;
`;

const BlockForDivider = styled(Block)<Pick<DividerProps, 'vertical'>>`
  ${getSizingCssFromTheme('height', 'sizing080')};
  ${getColorCssFromTheme('backgroundColor', 'blue010')};
  width: 100%;
`;

const IconContainerInline = styled(Block)`
  display: inline-block;
`;

const StackForHorizontalDivider = styled(Stack)`
  width: 50px;
`;

const InlineDividerContainer = styled(Block)`
  display: inline-block;
  background-color: red;
  ${getSizingCssFromTheme('height', 'iconSize040')};
`;

const largeDividerCols = {
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
            borderColor: '{{colors.interface060}}',
            borderWidth: '{{borders.borderWidth030}}',
          },
        },
      },
    },
  }),
);

export default {
  title: 'Components/divider',
  component: () => 'None',
};

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
    <StorybookPage columns={largeDividerCols}>
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
          spaceInline="space050"
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
    <StorybookHeading>Divider - Vertical</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <Box>
      <Divider vertical />
    </Box>
    <br />
    <StorybookSubHeading>in horizontal Inline Block</StorybookSubHeading>
    <Block>
      <IconContainerInline spaceInline="space020">
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      </IconContainerInline>
      <InlineDividerContainer spaceInline="space020">
        <Divider vertical />
      </InlineDividerContainer>
      <IconContainerInline>
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </IconContainerInline>
    </Block>
    <br />
    <StorybookSubHeading>
      in horizontal Stack without spacing
    </StorybookSubHeading>
    <BlockWithBorder>
      <Stack flow="horizontal-center" stackDistribution="center">
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
        <StackChild alignSelf="stretch">
          <Divider vertical />
        </StackChild>
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </Stack>
    </BlockWithBorder>
    <br />
    <StorybookSubHeading>in horizontal Stack with spacing</StorybookSubHeading>
    <BlockWithBorder>
      <Stack
        flow="horizontal-center"
        stackDistribution="center"
        spaceInline="space030"
      >
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
        <StackChild alignSelf="stretch">
          <Divider vertical />
        </StackChild>
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </Stack>
    </BlockWithBorder>
    <br />
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Box>
        <Divider vertical overrides={{stylePreset: 'customDivider'}} />
      </Box>
    </ThemeProvider>
  </>
);
StoryVertical.storyName = 'vertical';

export const StoryResponsive = () => (
  <>
    <StorybookHeading>Divider - Responsive</StorybookHeading>
    <StorybookSubHeading>
      xs: default | sm: vertical | md: horizontal | xs: vertical
    </StorybookSubHeading>
    <div style={{height: 50}}>
      <Divider vertical={{sm: true, md: false, xl: true}} />
    </div>
  </>
);
StoryResponsive.storyName = 'responsive';

export const StoryLogicalPropsOverrides = () => (
  <>
    <StorybookHeading>Divider - Logical Props</StorybookHeading>
    <StorybookSubHeading>Logical padding</StorybookSubHeading>
    <BlockForDivider vertical>
      <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      <Divider vertical overrides={{paddingInline: 'space030'}} />
      <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
    </BlockForDivider>
    <BlockForDivider>
      <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      <Divider overrides={{paddingBlock: 'space030'}} />
      <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
    </BlockForDivider>
    <StorybookSubHeading>Logical margin</StorybookSubHeading>
    <BlockForDivider vertical>
      <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      <Divider vertical overrides={{marginInline: 'space030'}} />
      <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
    </BlockForDivider>
    <BlockForDivider>
      <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      <Divider overrides={{marginBlock: 'space030'}} />
      <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
    </BlockForDivider>
  </>
);
StoryLogicalPropsOverrides.storyName = 'logical-props-overrides';
