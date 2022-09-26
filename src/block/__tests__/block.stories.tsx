import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Block} from '..';
import {styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookSubHeading,
  StorybookSpan,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Visible} from '../../grid/visibility';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const Square = styled(Block)`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
`;

// The style presets are added for easier visualization of the spacings around the Block component
const blockCustomThemeObject: CreateThemeArgs = {
  name: 'block-custom-theme',
  overrides: {
    stylePresets: {
      blockOuter: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.blue060}}',
        },
      },
      blockInner: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.red060}}',
        },
      },
      customBlock: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      transitionBlock: {
        base: {
          backgroundColor: '{{colors.purple020}}',
        },
        hover: {
          backgroundColor: '{{colors.amber070}}',
        },
      },
      logicalBlock: {
        base: {
          backgroundColor: '{{colors.green040}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderStyle: 'solid',
          borderColor: '{{colors.blue060}}',
        },
      },
    },
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
  },
};

const StyledHr = styled.hr`
  border: 1px solid dashed;
`;

export const StoryBlock = () => (
  <>
    <StorybookHeading>Block</StorybookHeading>
    <StyledHr />
    <Block stylePreset="blockOuter">
      <Block stylePreset="blockInner">
        <StorybookSpan>Block default without padding or margin</StorybookSpan>
      </Block>
    </Block>
    <StyledHr />
    <Block as="span">
      <StorybookSpan> Block as span </StorybookSpan>
    </Block>
    <StyledHr />
    <Block stylePreset="blockOuter">
      <Block
        spaceStack="space030"
        spaceInset="spaceInset030"
        stylePreset="customBlock"
      >
        <span>
          Block with margin spaceStack030, padding spaceInset030, style
          customBlock
        </span>
      </Block>
    </Block>
    <StyledHr />
    <Block stylePreset="blockOuter">
      <Block
        stylePreset="blockInner"
        spaceStack={{
          xs: 'space010',
          sm: 'space020',
          md: 'space030',
          lg: 'space040',
        }}
      >
        <Visible xs>
          <StorybookSpan>
            Block with margin spaceStack010 at xs breakpoint
          </StorybookSpan>
        </Visible>
        <Visible sm>
          <StorybookSpan>
            Block with margin spaceStack020 at sm breakpoint
          </StorybookSpan>
        </Visible>
        <Visible md>
          <StorybookSpan>
            Block with margin spaceStack030 at md breakpoint
          </StorybookSpan>
        </Visible>
        <Visible lg>
          <StorybookSpan>
            Block with margin spaceStack040 at lg breakpoint
          </StorybookSpan>
        </Visible>
        <Visible xl>
          <StorybookSpan>
            Block with margin spaceStack050 at xl breakpoint
          </StorybookSpan>
        </Visible>
      </Block>
    </Block>
    <StyledHr />
    <Block stylePreset="blockOuter">
      <Block spaceInline="space030" stylePreset="blockInner">
        <StorybookSpan>Block with margin spaceInline030</StorybookSpan>
      </Block>
    </Block>
    <StyledHr />
    <Block stylePreset="blockOuter">
      <StorybookSubHeading>Block with transition</StorybookSubHeading>
      <Block
        spaceStack="space030"
        spaceInset="spaceInset030"
        stylePreset="transitionBlock"
        transitionPreset="customBackgroundColorChange"
      >
        <StorybookSpan>Block with transition</StorybookSpan>
      </Block>
    </Block>
  </>
);
StoryBlock.storyName = 'block';

export const StoryBlockLogical = () => (
  <>
    <StorybookHeading>
      Inspect the box for better understanding
    </StorybookHeading>
    <StorybookSubHeading>paddingInline & paddingBlock</StorybookSubHeading>
    <Square
      stylePreset="logicalBlock"
      paddingInline="space020"
      paddingBlock="space040"
    >
      A
    </Square>
    <StorybookSubHeading>marginInline & marginBlock</StorybookSubHeading>
    <Square
      stylePreset="logicalBlock"
      marginInline="space020"
      marginBlock="space040"
    >
      B
    </Square>
    <StorybookSubHeading>
      marginInline & marginBlock & paddingInline & paddingBlock
    </StorybookSubHeading>
    <Square
      stylePreset="logicalBlock"
      paddingInline="space020"
      paddingBlock="space040"
      marginInline="space020"
      marginBlock="space040"
    >
      C
    </Square>
    <StorybookSubHeading>
      marginInline & marginBlock & spaceInline
    </StorybookSubHeading>
    <Square
      stylePreset="logicalBlock"
      marginInline="space020"
      marginBlock="space040"
      spaceInline="space050"
    >
      D
    </Square>
  </>
);
StoryBlockLogical.storyName = 'block-logical';

export default {
  title: 'Components/block',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          blockCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
