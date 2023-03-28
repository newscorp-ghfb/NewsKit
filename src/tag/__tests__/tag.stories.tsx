import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Tag} from '..';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack, Block} from '../..';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {GridLayout, GridLayoutItem} from '../../grid-layout';

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
          borderColor: '{{colors.teal060}}',
          borderWidth: '{{borders.borderWidth010}}',
          color: '{{colors.teal060}}',
          iconColor: '{{colors.inkInverse}}',
          backgroundColor: '{{colors.transparent}}',
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
      tagCustomAmberHover: {
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
          minWidth: '157px',
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

export const StoryTagSizes = () => (
  <Container>
    <GridLayout
      columns="auto auto auto 4fr"
      rowGap="space020"
      columnGap="space090"
      autoFlow="row"
    >
      <GridLayoutItem>
        <StorybookSubHeading>Small</StorybookSubHeading>
        <Tag size="small" href="http://example.com">
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Medium</StorybookSubHeading>
        <Tag size="medium" href="http://example.com">
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Large</StorybookSubHeading>
        <Tag size="large" href="http://example.com">
          Tag
        </Tag>
      </GridLayoutItem>
    </GridLayout>
  </Container>
);
StoryTagSizes.storyName = 'Sizes';

export const StoryTagStates = () => (
  <Container>
    <GridLayout
      columns="auto auto 5fr"
      rowGap="space020"
      columnGap="space090"
      autoFlow="row"
    >
      <GridLayoutItem>
        <StorybookSubHeading>Enabled</StorybookSubHeading>
        <Tag href="http://example.com">Tag</Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Disabled</StorybookSubHeading>
        <Tag href="http://example.com" disabled>
          Tag
        </Tag>
      </GridLayoutItem>
    </GridLayout>
  </Container>
);
StoryTagStates.storyName = 'States';

export const StoryTagIcons = () => (
  <Container>
    <GridLayout
      columns="auto auto auto 4fr"
      rowGap="space020"
      columnGap="space090"
      autoFlow="row"
    >
      <GridLayoutItem>
        <StorybookSubHeading>Leading icon</StorybookSubHeading>
        <Tag size="medium" href="http://example.com">
          <IconFilledEmail />
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Trailing icon</StorybookSubHeading>
        <Tag size="medium" href="http://example.com">
          Tag
          <IconFilledEmail />
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Leading and trailing icon</StorybookSubHeading>
        <Tag size="medium" href="http://example.com">
          <IconFilledEmail />
          Tag
          <IconFilledEmail />
        </Tag>
      </GridLayoutItem>
    </GridLayout>
  </Container>
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
  <Container>
    <GridLayout
      columns="auto auto auto"
      rowGap="space020"
      columnGap="space090"
      autoFlow="row"
    >
      <GridLayoutItem>
        <StorybookSubHeading>Default transition preset</StorybookSubHeading>
        <Tag href="http://example.com">Tag</Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Transition preset overrides</StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{
            stylePreset: 'tagCustomAmberHover',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>
          Two transition preset overrides
        </StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{
            stylePreset: 'tagCustomAmberHover',
            transitionPreset: [
              'customBackgroundColorChange',
              'customborderColorChange',
            ],
          }}
        >
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Extend on transitionDuration</StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{
            stylePreset: 'tagCustomAmberHover',
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
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Two presets using extend</StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{
            stylePreset: 'tagCustomAmberHover',
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
      </GridLayoutItem>
    </GridLayout>
  </Container>
);
StoryTagTransitions.storyName = 'Transitions';

export const StoryTagLogicalProps = () => (
  <Container>
    <StorybookSubHeading>marginInline & marginBlock</StorybookSubHeading>
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

    <br />
    <StorybookSubHeading>paddingInline & paddingBlock</StorybookSubHeading>
    <Tag
      href="http://example.com"
      overrides={{
        paddingBlock: 'space060',
        paddingInline: 'space080',
      }}
    >
      Tag
    </Tag>
    <br />
    <StorybookSubHeading>
      marginInline & marginBlock & paddingInline & paddingBlock
    </StorybookSubHeading>
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
  </Container>
);
StoryTagLogicalProps.storyName = 'Logical props';

export const StoryTagStylingOverrides = () => (
  <Container>
    <StorybookSubHeading>Style Presets overrides</StorybookSubHeading>
    <Stack
      flow="horizontal-center"
      spaceInline="space060"
      spaceStack="space020"
      wrap="wrap"
    >
      <Tag href="http://example.com" overrides={{stylePreset: 'tagCustomTeal'}}>
        Tag
      </Tag>
      <Tag
        href="http://example.com"
        overrides={{stylePreset: 'tagCustomBlueDashed'}}
      >
        Tag
      </Tag>
    </Stack>
    <br />
    <StorybookSubHeading>Typography Presets overrides</StorybookSubHeading>
    <Tag href="http://example.com" overrides={{typographyPreset: 'meta020'}}>
      Tag
    </Tag>
  </Container>
);
StoryTagStylingOverrides.storyName = 'Styling overrides';

export const StoryTagOverrides = () => (
  <Container>
    <GridLayout
      columns="auto auto 5fr"
      rowGap="space020"
      columnGap="space090"
      autoFlow="row"
    >
      <GridLayoutItem>
        <StorybookSubHeading>Custom width</StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{stylePreset: 'customOutlineWidth'}}
        >
          Tag
        </Tag>
      </GridLayoutItem>
      <GridLayoutItem>
        <StorybookSubHeading>Custom offset</StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{stylePreset: 'customOutlineOffset'}}
        >
          Tag
        </Tag>
      </GridLayoutItem>
    </GridLayout>
    <br />
    <StorybookSubHeading>Icon with inline overridden size</StorybookSubHeading>
    <Stack
      flow="horizontal-center"
      spaceInline="space060"
      spaceStack="space020"
      wrap="wrap"
    >
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
    <br />
    <StorybookSubHeading>
      Icon with inline overridden size from overrides
    </StorybookSubHeading>
    <Stack
      flow="horizontal-center"
      spaceInline="space060"
      spaceStack="space020"
      wrap="wrap"
    >
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
  </Container>
);
StoryTagOverrides.storyName = 'Overrides';

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
