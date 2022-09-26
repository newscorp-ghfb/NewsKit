import * as React from 'react';
import styled from '@emotion/styled';
import {ThemeProvider} from '@emotion/react';
import {Divider, DividerProps} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Stack} from '../../stack';
import {Block} from '../../block';
import {StackChild} from '../../stack-child';
import {IconFilledFacebook, IconFilledWhatsApp} from '../../icons';
import {getSizingCssFromTheme} from '../../utils/style';
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
  border: 1px solid salmon;
`;

const BlockForDivider = styled(Block)<Pick<DividerProps, 'vertical'>>`
  ${({vertical}) =>
    vertical
      ? getSizingCssFromTheme('height', 'iconSize050')
      : getSizingCssFromTheme('width', 'iconSize040')};
  border: 1px solid salmon;
`;

const IconContainer = styled(Block)`
  ${getSizingCssFromTheme('width', 'iconSize040')};
  ${getSizingCssFromTheme('height', 'iconSize040')};
`;

const IconContainerInline = styled(Block)`
  display: inline-block;
`;

const StackForHorizontalDivider = styled(Stack)`
  width: 50px;
`;

const InlineDividerContainer = styled(Block)`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'iconSize040')};
`;

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

export const StoryHorizontal = () => (
  <>
    <StorybookHeading>Divider - Horizontal</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <Divider />
    <br />
    <StorybookSubHeading>in vertical block</StorybookSubHeading>
    <BlockForDivider>
      <IconContainer spaceStack="space020">
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
      </IconContainer>
      <Block spaceStack="space020">
        <Divider />
      </Block>
      <IconContainer>
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </IconContainer>
    </BlockForDivider>
    <br />
    <StorybookSubHeading>in vertical stack without spacing</StorybookSubHeading>
    <BlockWithBorder>
      <StackForHorizontalDivider
        stackDistribution="center"
        flow="vertical-center"
      >
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
        <Divider />
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </StackForHorizontalDivider>
    </BlockWithBorder>
    <br />
    <StorybookSubHeading>
      Divider - Horizontal in vertical stack with spacing
    </StorybookSubHeading>
    <BlockWithBorder>
      <StackForHorizontalDivider
        spaceInline="space040"
        stackDistribution="center"
        flow="vertical-center"
      >
        <IconFilledFacebook overrides={{size: 'iconSize040'}} />
        <StackChild alignSelf="stretch">
          <Divider />
        </StackChild>
        <IconFilledWhatsApp overrides={{size: 'iconSize040'}} />
      </StackForHorizontalDivider>
    </BlockWithBorder>
  </>
);
StoryHorizontal.storyName = 'horizontal';

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
