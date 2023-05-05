import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Block} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Visible} from '../../grid/visibility';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {TextBlock} from '../../text-block';
import {MQ, styled, getColorCssFromTheme} from '../../utils';

// The style presets are added for easier visualization of the spacings around the Block component
const blockCustomThemeObject: CreateThemeArgs = {
  name: 'block-custom-theme',
  overrides: {
    stylePresets: {
      blockDefault: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interfaceBrand010}}',
        },
      },
      blockWrapper: {
        base: {
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'dashed',
          borderColor: '{{colors.red060}}',
        },
      },
      blockTransition: {
        base: {
          color: '{{colors.inkBase}}',
          backgroundColor: 'transparent',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interfaceBrand010}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary010}}',
          color: '{{colors.inkBase}}',
        },
      },
      textTransition: {
        base: {
          color: 'currentColor',
        },
      },
      blockOverrides: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          color: '{{colors.inkBrand010}}',
        },
      },
    },
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '500ms',
          transitionDelay: '200ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
  },
};

const blockGridCols = '1fr';

const Text = ({
  children,
  stylePreset = 'inkBase',
}: {
  children: React.ReactNode;
  stylePreset?: MQ<string>;
}) => (
  <TextBlock stylePreset={stylePreset} typographyPreset="editorialParagraph010">
    {children}
  </TextBlock>
);

export const StoryBlockDefault = () => (
  <StorybookPage columns={blockGridCols}>
    <Block stylePreset="blockDefault">
      <Text>Default block</Text>
    </Block>
  </StorybookPage>
);
StoryBlockDefault.storyName = 'Default';

export const StoryBreakpoint = () => (
  <StorybookPage columns={blockGridCols}>
    <Block stylePreset="blockWrapper">
      <Block
        stylePreset="blockDefault"
        marginBlockEnd={{
          xs: 'space010',
          sm: 'space020',
          md: 'space030',
          lg: 'space040',
          xl: 'space050',
        }}
      >
        <Visible xs>
          <Text>Block with marginBlockEnd space010 at xs breakpoint</Text>
        </Visible>
        <Visible sm>
          <Text>Block with marginBlockEnd space020 at sm breakpoint</Text>
        </Visible>
        <Visible md>
          <Text>Block with marginBlockEnd space030 at md breakpoint</Text>
        </Visible>
        <Visible lg>
          <Text>Block with marginBlockEnd space040 at lg breakpoint</Text>
        </Visible>
        <Visible xl>
          <Text>Block with marginBlockEnd space050 at xl breakpoint</Text>
        </Visible>
      </Block>
    </Block>
  </StorybookPage>
);
StoryBreakpoint.storyName = 'Breakpoint';

export const StoryContainerQueries = () => {
  const QueryContainerSmall = styled.div`
    container-type: inline-size;
    width: 300px;
    border: 1px dashed;
    ${getColorCssFromTheme('borderColor', 'blue060')}
  `;
  const QueryContainerLarge = styled.div`
    container-type: inline-size;
    width: 600px;
    border: 1px dashed;
    ${getColorCssFromTheme('borderColor', 'blue060')}
  `;

  const QueryBlock = () => (
    <Block
      // stylePreset="blockDefault"
      paddingInline={{
        rules: [
          {
            rule: '@container (width <= 300px)',
            value: 'space010',
          },
          {
            rule: '@container (width > 300px)',
            value: 'space040',
          },
        ],
      }}
      paddingBlock={{
        rules: [
          {
            rule: '@container (width <= 300px)',
            value: 'space010',
          },
          {
            rule: '@container (width > 300px)',
            value: 'space040',
          },
        ],
      }}
    >
      <Text>This block changes padding depending on its container size</Text>
    </Block>
  );

  return (
    <StorybookPage columns={blockGridCols}>
      <StorybookCase title="Container query < 300px">
        <QueryContainerSmall>
          <QueryBlock />
        </QueryContainerSmall>
      </StorybookCase>
      <StorybookCase title="Container query > 300px">
        <QueryContainerLarge>
          <QueryBlock />
        </QueryContainerLarge>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryContainerQueries.storyName = 'Container Queries';

export const StoryTransitions = () => (
  <StorybookPage columns={blockGridCols}>
    <Block
      marginBlockEnd="space030"
      paddingInline="space030"
      paddingBlock="space030"
      stylePreset="blockTransition"
      transitionPreset="customBackgroundColorChange"
    >
      <Text stylePreset="textTransition">
        Block with backgroundColorChange transition preset applied
      </Text>
    </Block>
  </StorybookPage>
);
StoryTransitions.storyName = 'Transitions';

export const StoryStylingOverrides = () => (
  <StorybookPage columns={blockGridCols}>
    <StorybookCase title="Style">
      <Block stylePreset="blockWrapper">
        <Block
          marginBlock="space030"
          paddingInline="space040"
          paddingBlock="space040"
          stylePreset="blockOverrides"
        >
          <Text>
            Block with marginBlock space030, paddingInline and paddingBlock
            space040, style blockOverrides
          </Text>
        </Block>
      </Block>
    </StorybookCase>
  </StorybookPage>
);
StoryStylingOverrides.storyName = 'Styling overrides';

export const StoryOverrides = () => (
  <StorybookPage columns={blockGridCols}>
    <StorybookCase title="Logical props">
      <Block stylePreset="blockWrapper">
        <Block
          marginBlock="space030"
          paddingInline="space040"
          paddingBlock="space070"
          stylePreset="blockDefault"
        >
          <Text>Block with logical props applied</Text>
        </Block>
      </Block>
    </StorybookCase>
  </StorybookPage>
);
StoryOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Block',
  component: Block,
  parameters: {
    nkDocs: {
      title: 'Block',
      url: 'https://newskit.co.uk/components/block',
      description:
        'The block is a simple container component that style and space can be applied to. This is the equivalent to a frame in Figma.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          blockCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
