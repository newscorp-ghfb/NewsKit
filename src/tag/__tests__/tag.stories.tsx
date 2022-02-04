import * as React from 'react';
import {Tag, TagSize} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {getColorFromTheme, styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack} from '../../stack';
import {createTheme, ThemeProvider} from '../../theme';

const Container = styled.div<{hasBlackBackground?: boolean}>`
  margin: 24px;
  ${({hasBlackBackground, theme}) =>
    hasBlackBackground && {
      background: getColorFromTheme('black')({theme}),
      color: getColorFromTheme('white')({theme}),
    }}
`;

const myCustomTheme = createTheme({
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
    },
  },
});

export default {
  title: 'NewsKit Light/tag',
  component: () => 'None',
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
        <Tag size={TagSize.Small} href="http://example.com">
          Small
        </Tag>
        <Tag size={TagSize.Medium} href="http://example.com">
          Medium
        </Tag>
        <Tag size={TagSize.Large} href="http://example.com">
          Large
        </Tag>
      </Stack>
    </Container>
    <StorybookSubHeading>with Style Presets overrides</StorybookSubHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Tag href="http://example.com" overrides={{stylePreset: 'tagCustom'}}>
          Text
        </Tag>
      </ThemeProvider>
    </Container>
    <StorybookSubHeading>with Typography Presets overrides</StorybookSubHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Tag
          href="http://example.com"
          overrides={{typographyPreset: 'meta020'}}
        >
          Text
        </Tag>
      </ThemeProvider>
    </Container>
    <StorybookSubHeading>with an icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        <Tag size={TagSize.Small}>
          <IconFilledEmail />
          Text
        </Tag>
        <Tag size={TagSize.Medium}>
          <IconFilledEmail />
          Text
        </Tag>
        <Tag size={TagSize.Large}>
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
        <StorybookSubHeading>
          tag with tagPrimaryInverse style preset
        </StorybookSubHeading>
        <Tag
          size={TagSize.Large}
          overrides={{stylePreset: 'tagPrimaryInverse'}}
        >
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
        <Tag size={TagSize.Small}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Tag>
        <Tag size={TagSize.Medium}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Tag>
        <Tag size={TagSize.Large}>
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
        <Tag size={TagSize.Small} overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Tag>
        <Tag size={TagSize.Medium} overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Tag>
        <Tag size={TagSize.Large} overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize050'}} />
        </Tag>
      </Stack>
    </Container>
  </>
);
StoryTagIconSizes.storyName = 'tag-icon-sizes';

const myCustomThemeTransitions = createTheme({
  name: 'my-custom-tag-theme',
  overrides: {
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
      customborderIconChange: {
        base: {
          transitionProperty: 'outline-color',
          transitionDuration: '100ms',
          transitionDelay: '500ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    stylePresets: {
      tagCustom: {
        base: {
          borderStyle: 'dashed',
          borderColor: '{{colors.blue060}}',
          backgroundColor: '{{colors.red020}}',
          // iconColor: '{{colors.amber020}}',
        },
        hover: {
          backgroundColor: '{{colors.amber070}}',
          borderColor: '{{colors.green040}}',
          iconColor: '{{colors.purple020}}',
          // iconColor: '{{colors.amber020}}',
        },
      },
    },
  },
});
export const StoryTagTransitions = () => (
  <>
    <StorybookSubHeading>Tag with transitions</StorybookSubHeading>
    <ThemeProvider theme={myCustomThemeTransitions}>
      <Container>
        <StorybookSubHeading>
          Tag with overrides on default transition preset
        </StorybookSubHeading>
        <Tag
          href="http://example.com"
          overrides={{
            stylePreset: 'tagCustom',
            transitionPreset: 'customBackgroundColorChange',
          }}
        >
          <IconFilledEmail />
          Text
        </Tag>
        <StorybookSubHeading>
          Tag with overrides on two properties on transition presets
        </StorybookSubHeading>
        <Tag
          overrides={{
            stylePreset: 'tagCustom',
            transitionPreset: [
              'customBackgroundColorChange',
              'customborderColorChange',
            ],
          }}
        >
          Text
        </Tag>
        <StorybookSubHeading>
          Tag with overrides using extend on transitionDuration
        </StorybookSubHeading>
        <Tag
          overrides={{
            stylePreset: 'tagCustom',
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
          }}
        >
          Text
        </Tag>
        <StorybookSubHeading>
          Tag with overrides on two properties from defaults using extend
        </StorybookSubHeading>
        <Tag
          overrides={{
            stylePreset: 'tagCustom',
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
          Text
        </Tag>
      </Container>
    </ThemeProvider>
  </>
);
StoryTagTransitions.storyName = 'tag-transitions';
