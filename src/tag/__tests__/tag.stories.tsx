import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Tag} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack} from '../../stack';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const Container = styled.div<{hasBlackBackground?: boolean}>`
  margin: 24px;
  ${({hasBlackBackground}) =>
    hasBlackBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const tagCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-tag-theme',
  overrides: {
    stylePresets: {
      tagCustom: {
        base: {
          borderStyle: 'dashed',
          borderColor: '{{colors.blue060}}',
          iconColor: '{{colors.inkInverse}}',
          backgroundColor: '{{colors.red020}}',
        },
      },
      tagCustomTwo: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
        },
        hover: {
          backgroundColor: '{{colors.amber070}}',
          borderColor: '{{colors.green040}}',
        },
      },
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '100ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customborderColorChange: {
        base: {
          transitionProperty: 'border-color',
          transitionDuration: '100ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
  },
};

export const StoryTag = () => (
  <>
    <StorybookHeading>Tag</StorybookHeading>
    <StorybookSubHeading>Enabled/Disbaled</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        <Tag href="http://example.com">Enabled</Tag>
        <Tag href="http://example.com" disabled>
          Disabled
        </Tag>
      </Stack>
    </Container>
    <StorybookSubHeading>Sizes</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        <Tag size="small" href="http://example.com">
          Small
        </Tag>
        <Tag size="medium" href="http://example.com">
          Medium
        </Tag>
        <Tag size="large" href="http://example.com">
          Large
        </Tag>
      </Stack>
    </Container>
    <StorybookSubHeading>with Style Presets overrides</StorybookSubHeading>
    <Container>
      <Tag href="http://example.com" overrides={{stylePreset: 'tagCustom'}}>
        Text
      </Tag>
    </Container>
    <StorybookSubHeading>with Typography Presets overrides</StorybookSubHeading>
    <Container>
      <Tag href="http://example.com" overrides={{typographyPreset: 'meta020'}}>
        Text
      </Tag>
    </Container>
    <StorybookSubHeading>with an icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        <Tag size="small" href="http://example.com">
          <IconFilledEmail />
          Text
        </Tag>
        <Tag size="medium" href="http://example.com">
          <IconFilledEmail />
          Text
        </Tag>
        <Tag size="large" href="http://example.com">
          <IconFilledEmail />
          Text
        </Tag>
      </Stack>
    </Container>
  </>
);
StoryTag.storyName = 'tag';

export const StoryInverseTag = () => (
  <>
    <Container hasBlackBackground>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <StorybookSubHeading stylePreset="inkInverse">
          tag with tagPrimaryInverse style preset
        </StorybookSubHeading>
        <Tag size="large" overrides={{stylePreset: 'tagPrimaryInverse'}}>
          Text
        </Tag>
      </Stack>
    </Container>
  </>
);
StoryInverseTag.storyName = 'inverse-tag';

export const StoryTagIconSizes = () => (
  <>
    <StorybookSubHeading>
      With icon and inline overridden size
    </StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Tag size="small">
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Tag>
        <Tag size="medium">
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Tag>
        <Tag size="large">
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize050'}} />
        </Tag>
      </Stack>
    </Container>
    <StorybookSubHeading>
      with icon and inline overridden size from overrides
    </StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Tag size="small" overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Tag>
        <Tag size="medium" overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Tag>
        <Tag size="large" overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize050'}} />
        </Tag>
      </Stack>
    </Container>
  </>
);
StoryTagIconSizes.storyName = 'tag-icon-sizes';

export const StoryTagTransitions = () => (
  <>
    <StorybookSubHeading>Tag with Transition Presets</StorybookSubHeading>
    <Container>
      <StorybookSubHeading>Default Transition Presets</StorybookSubHeading>
      <Tag href="http://example.com">Tag</Tag>
      <StorybookSubHeading>
        Tag with Transition Preset overrides
      </StorybookSubHeading>
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomTwo',
          transitionPreset: 'customBackgroundColorChange',
        }}
      >
        Tag
      </Tag>
      <StorybookSubHeading>
        Tag with two Transition Preset Overrides
      </StorybookSubHeading>
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomTwo',
          transitionPreset: [
            'customBackgroundColorChange',
            'customborderColorChange',
          ],
        }}
      >
        Tag
      </Tag>
      <StorybookSubHeading>
        Tag with overrides using extend on transitionDuration
      </StorybookSubHeading>
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomTwo',
          transitionPreset: {
            extend: 'backgroundColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration050}}',
            },
          },
        }}
      >
        Tag
      </Tag>
      <StorybookSubHeading>
        Tag with overrides on two presets using extend
      </StorybookSubHeading>
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomTwo',
          transitionPreset: [
            {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration030}}',
              },
            },
            {
              extend: 'borderColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          ],
        }}
      >
        Tag
      </Tag>
    </Container>
  </>
);
StoryTagTransitions.storyName = 'tag-transitions';
export const StoryTagLogicalProps = () => (
  <>
    <StorybookHeading>Tag with Logical Props overrides</StorybookHeading>
    <StorybookSubHeading>
      Inspect the box for better understanding
    </StorybookSubHeading>

    <Tag
      href="http://example.com"
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
      }}
    >
      marginInline & marginBlock
    </Tag>

    <br />
    <Tag
      href="http://example.com"
      overrides={{
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      paddingInline & paddingBlock
    </Tag>

    <br />

    <Tag
      href="http://example.com"
      overrides={{
        marginBlock: 'space060',
        marginInline: 'space080',
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      marginInline & marginBlock & paddingInline & paddingBlock
    </Tag>
  </>
);
StoryTagLogicalProps.storyName = 'tag-logical-props';

export const StoryTagWithOutlineOverride = () => (
  <>
    <StorybookHeading>Tag with outline overrides</StorybookHeading>

    <StorybookSubHeading>with Style Presets overrides</StorybookSubHeading>
    <Container>
      <Tag
        href="http://example.com"
        overrides={{stylePreset: 'customOutlineColor'}}
      >
        Custom Color
      </Tag>
      <br />
      <br />
      <Tag
        href="http://example.com"
        overrides={{stylePreset: 'customOutlineStyle'}}
      >
        Custom Style
      </Tag>
      <br />
      <br />
      <Tag
        href="http://example.com"
        overrides={{stylePreset: 'customOutlineWidth'}}
      >
        Custom Width
      </Tag>
      <br />
      <br />
      <Tag
        href="http://example.com"
        overrides={{stylePreset: 'customOutlineOffset'}}
      >
        Custom Offset
      </Tag>
    </Container>
  </>
);
StoryTagWithOutlineOverride.storyName = 'tag with outline overrides';

export default {
  title: 'Components/tag',
  component: () => 'None',
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          tagCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
