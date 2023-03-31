import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Tag} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack, Block} from '../..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';

const Container = styled.div<{hasBlackBackground?: boolean}>`
  margin: 24px;
  ${({hasBlackBackground}) =>
    hasBlackBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const DottedBlock = styled.div`
  border: 1px dashed #d60000;
  display: inline-block;
`;

const tagCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-tag-theme',
  overrides: {
    stylePresets: {
      tagCustomTeal: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interfaceBrand020}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.interfaceBrand020}}',
          iconColor: '{{colors.inkInverse}}',
          backgroundColor: '{{colors.transparent}}',
        },
        hover: {
          backgroundColor: '{{colors.interface010}}',
        },
      },
      tagCustomBlueDashed: {
        base: {
          borderStyle: 'dashed',
          borderColor: '{{colors.blue060}}',
          iconColor: '{{colors.inkInverse}}',
          backgroundColor: '{{colors.red020}}',
        },
      },
      tagCustomBackground: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary010}}',
        },
      },
      tagCustomBorder: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
        },
        hover: {
          borderColor: '{{colors.interactivePrimary030}}',
        },
      },
      tagCustomBackgroundAndBorder: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.inkBase}}',
        },
        hover: {
          backgroundColor: '{{colors.interactivePrimary010}}',
          borderColor: '{{colors.interactivePrimary030}}',
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
      customBorderColorChange: {
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

export const StoryTagDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <Tag href="http://example.com">Tag</Tag>
    </StorybookCase>
  </StorybookPage>
);
StoryTagDefault.storyName = 'Default';

export const StoryTagSizes = () => (
  <StorybookPage columns="1fr 1fr 1fr 2fr" columnGap="space090">
    <StorybookCase title="Small">
      <Tag size="small" href="http://example.com">
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Tag size="medium" href="http://example.com">
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Large">
      <Tag size="large" href="http://example.com">
        Tag
      </Tag>
    </StorybookCase>
  </StorybookPage>
);
StoryTagSizes.storyName = 'Sizes';

export const StoryTagStates = () => (
  <StorybookPage columns="1fr 1fr 3fr" columnGap="space080">
    <StorybookCase title="Enabled">
      <Tag href="http://example.com">Tag</Tag>
    </StorybookCase>
    <StorybookCase title="Disabled">
      <Tag href="http://example.com" disabled>
        Tag
      </Tag>
    </StorybookCase>
  </StorybookPage>
);
StoryTagStates.storyName = 'States';

export const StoryTagIcons = () => (
  <StorybookPage columns="1fr 1fr 1fr 2fr" columnGap="space080">
    <StorybookCase title="Leading icon">
      <Tag size="medium" href="http://example.com">
        <IconFilledEmail />
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Trailing icon">
      <Tag size="medium" href="http://example.com">
        Tag
        <IconFilledEmail />
      </Tag>
    </StorybookCase>
    <StorybookCase title="Leading and trailing icon">
      <Tag size="medium" href="http://example.com">
        <IconFilledEmail />
        Tag
        <IconFilledEmail />
      </Tag>
    </StorybookCase>
  </StorybookPage>
);
StoryTagIcons.storyName = 'Icons';

export const StoryInverseTag = () => (
  <Container hasBlackBackground>
    <Block
      marginBlockEnd="space030"
      paddingInline="space030"
      paddingBlock="space030"
    >
      <Tag
        size="medium"
        href="http://example.com"
        overrides={{stylePreset: 'tagPrimaryInverse'}}
      >
        Tag
      </Tag>
    </Block>
  </Container>
);
StoryInverseTag.storyName = 'Inverse';

export const StoryTagTransitions = () => (
  <StorybookPage columns="auto auto auto">
    <StorybookCase title="Default">
      <Tag href="http://example.com">Tag</Tag>
    </StorybookCase>
    <StorybookCase title="Preset overrides background">
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomBackground',
          transitionPreset: 'customBackgroundColorChange',
        }}
      >
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Preset overrides border">
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomBorder',
          transitionPreset: 'customBorderColorChange',
        }}
      >
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Two transition preset overrides">
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomBackgroundAndBorder',
          transitionPreset: [
            'customBackgroundColorChange',
            'customBorderColorChange',
          ],
        }}
      >
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Extend on transitionDuration">
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomBackgroundAndBorder',
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
    </StorybookCase>
    <StorybookCase title="Two presets using extend">
      <Tag
        href="http://example.com"
        overrides={{
          stylePreset: 'tagCustomBackgroundAndBorder',
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
    </StorybookCase>
  </StorybookPage>
);
StoryTagTransitions.storyName = 'Transitions';

export const StoryTagLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="marginInline & marginBlock">
      <DottedBlock>
        <Tag
          href="http://example.com"
          overrides={{
            marginBlock: 'space060',
            marginInline: 'space080',
          }}
        >
          Tag
        </Tag>
      </DottedBlock>
    </StorybookCase>
    <StorybookCase title="paddingInline & paddingBlock">
      <Tag
        href="http://example.com"
        overrides={{
          paddingBlock: 'space060',
          paddingInline: 'space080',
        }}
      >
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="marginInline & marginBlock & paddingInline & paddingBlock">
      <DottedBlock>
        <Tag
          href="http://example.com"
          overrides={{
            marginBlock: 'space060',
            marginInline: 'space080',
            paddingBlock: 'space060',
            paddingInline: 'space080',
          }}
        >
          Tag
        </Tag>
      </DottedBlock>
    </StorybookCase>
  </StorybookPage>
);
StoryTagLogicalProps.storyName = 'Logical props';

export const StoryTagStylingOverrides = () => (
  <StorybookPage columns="1fr auto 3fr" columnGap="space080">
    <StorybookCase title="Style Preset overrides">
      <Tag href="http://example.com" overrides={{stylePreset: 'tagCustomTeal'}}>
        Tag
      </Tag>
    </StorybookCase>
    <StorybookCase title="Typography Preset overrides">
      <Tag href="http://example.com" overrides={{typographyPreset: 'meta020'}}>
        Tag
      </Tag>
    </StorybookCase>
  </StorybookPage>
);
StoryTagStylingOverrides.storyName = 'Styling overrides';

export const StoryTagOverrides = () => {
  const logicalPropsOverrides = {
    minWidth: '157px',
  };

  return (
    <>
      <StorybookPage columns="1fr 1fr 3fr" columnGap="space080">
        <StorybookCase title="Custom width">
          <Tag
            href="http://example.com"
            overrides={{
              stylePreset: 'customOutlineWidth',
              ...logicalPropsOverrides,
            }}
          >
            Tag
          </Tag>
        </StorybookCase>
        <StorybookCase title="Custom offset">
          <Tag
            href="http://example.com"
            overrides={{stylePreset: 'customOutlineOffset'}}
          >
            Tag
          </Tag>
        </StorybookCase>
      </StorybookPage>
      <br />
      <StorybookPage columns="1fr">
        <StorybookCase title="Icon with inline overridden size">
          <Stack flow="horizontal-center" spaceInline="space060" wrap="wrap">
            <Tag size="small">
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize030'}} />
            </Tag>
            <Tag size="medium">
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize040'}} />
            </Tag>
            <Tag size="large">
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize050'}} />
            </Tag>
          </Stack>
        </StorybookCase>
        <StorybookCase title="Icon with inline overridden size from overrides">
          <Stack flow="horizontal-center" spaceInline="space060" wrap="wrap">
            <Tag size="small" overrides={{iconSize: 'iconSize020'}}>
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize030'}} />
            </Tag>
            <Tag size="medium" overrides={{iconSize: 'iconSize020'}}>
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize040'}} />
            </Tag>
            <Tag size="large" overrides={{iconSize: 'iconSize020'}}>
              <IconFilledEmail />
              Tag
              <IconFilledEmail overrides={{size: 'iconSize050'}} />
            </Tag>
          </Stack>
        </StorybookCase>
      </StorybookPage>
    </>
  );
};
StoryTagOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Tag',
  parameters: {
    nkDocs: {
      title: 'Tag',
      url: 'https://newskit.co.uk/components/tag',
      description:
        'The tag element is used as a way of classifying content, typically using keywords.',
    },
  },
  component: () => 'None',
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          tagCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
