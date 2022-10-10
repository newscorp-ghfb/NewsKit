import * as React from 'react';
import {Flag} from '..';
import {styled} from '../../utils/style';
import {IconFilledEmail} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookSubHeading,
  StorybookHeading,
} from '../../test/storybook-comps';
import {ThemeProvider, createTheme} from '../../theme';

const Block = styled.div`
  margin: 10px;
`;

const StyledDiv = styled.div`
  border: dotted 1px red;
  margin-bottom: 5px;
`;

const Container = styled.div<{hasBlackBackground?: boolean}>`
  margin: 24px;
  ${({hasBlackBackground}) =>
    hasBlackBackground && {
      background: 'black',
      color: 'white',
    }}
`;

export default {
  title: 'Components/flag',
  component: () => 'None',
};

const presets = [
  'Primary',
  'Positive',
  'Negative',
  'Neutral',
  'Notice',
  'Informative',
];

export const StoryFlag = () => (
  <>
    <StorybookHeading>Flag</StorybookHeading>
    <StorybookSubHeading>Solid</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        {presets.map(presetSuffix => (
          <Flag
            overrides={{
              stylePreset: `flagSolid${presetSuffix}`,
            }}
          >
            {presetSuffix}
          </Flag>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Solid with icons</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        {presets.map(presetSuffix => (
          <Flag
            overrides={{
              stylePreset: `flagSolid${presetSuffix}`,
            }}
          >
            <IconFilledEmail />
            {presetSuffix}
          </Flag>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Minimal</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        {presets.map(presetSuffix => (
          <Flag
            overrides={{
              stylePreset: `flagMinimal${presetSuffix}`,
            }}
          >
            {presetSuffix}
          </Flag>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Minimal with icons</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space020"
        spaceInline="space020"
        wrap="wrap"
      >
        {presets.map(presetSuffix => (
          <Flag
            overrides={{
              stylePreset: `flagMinimal${presetSuffix}`,
            }}
          >
            <IconFilledEmail />
            {presetSuffix}
          </Flag>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Flag Sizes</StorybookSubHeading>
    <Stack
      flow="horizontal-center"
      spaceStack="space020"
      spaceInline="space020"
      wrap="wrap"
    >
      <Flag size="small">Small</Flag>
      <Flag size="medium">Medium</Flag>
      <Flag size="large">Large</Flag>
    </Stack>

    <StorybookSubHeading>with Typography Preset override</StorybookSubHeading>
    <Block>
      <Flag
        size="small"
        overrides={{
          typographyPreset: 'meta020',
        }}
      >
        Text
      </Flag>
    </Block>
  </>
);
StoryFlag.storyName = 'flag';

export const StoryInverseFlag = () => (
  <>
    <StorybookHeading>Inverse Flag</StorybookHeading>
    <Container hasBlackBackground>
      <Block>
        <StorybookSubHeading stylePreset="white">
          with flagSolidInverse style preset
        </StorybookSubHeading>
        <Flag overrides={{stylePreset: 'flagSolidInverse'}} size="large">
          Text
        </Flag>
      </Block>
      <Block>
        <StorybookSubHeading stylePreset="white">
          with flagMinimalInverse style preset
        </StorybookSubHeading>
        <Flag overrides={{stylePreset: 'flagMinimalInverse'}} size="large">
          Text
        </Flag>
      </Block>
    </Container>
  </>
);
StoryInverseFlag.storyName = 'inverse-flag';

export const StoryFlagWithIcons = () => (
  <>
    <StorybookHeading>Flag</StorybookHeading>
    <StorybookSubHeading>with leading icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Flag size="small">
          <IconFilledEmail />
          Text
        </Flag>
        <Flag size="large">
          <IconFilledEmail />
          Text
        </Flag>
      </Stack>
    </Container>

    <StorybookSubHeading>with trailing icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Flag size="small">
          Text
          <IconFilledEmail />
        </Flag>
        <Flag size="large">
          Text
          <IconFilledEmail />
        </Flag>
      </Stack>
    </Container>

    <StorybookSubHeading>with leading and trailing icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Flag size="small">
          <IconFilledEmail />
          Text
          <IconFilledEmail />
        </Flag>
        <Flag size="large">
          <IconFilledEmail />
          Text
          <IconFilledEmail />
        </Flag>
      </Stack>
    </Container>

    <StorybookSubHeading>
      with icon and inline overridden size
    </StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space020"
        spaceStack="space020"
        wrap="wrap"
      >
        <Flag size="small">
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Flag>
        <Flag size="large">
          <IconFilledEmail />
          Text
          {/* size to be moved in icon overrides as part of PPDSC-1341 */}
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Flag>
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
        <Flag size="small" overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize030'}} />
        </Flag>
        <Flag size="large" overrides={{iconSize: 'iconSize020'}}>
          <IconFilledEmail />
          Text
          <IconFilledEmail overrides={{size: 'iconSize040'}} />
        </Flag>
      </Stack>
    </Container>
  </>
);
StoryFlagWithIcons.storyName = 'flag-with-icons';

const myCustomTheme = createTheme({
  name: 'my-custom-text-input-theme',
  overrides: {
    stylePresets: {
      myFlag: {
        base: {
          borderColor: '#0a68c1',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '3px',
          color: '#0a68c1',
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export const StoryFlagWithSize = () => (
  <>
    <StorybookSubHeading>Flag with long text and overflow</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <Flag
        overrides={{
          width: 'sizing120',
          height: 'sizing070',
          stylePreset: 'myFlag',
        }}
      >
        Text goes here and it has overflow and long text
      </Flag>
    </ThemeProvider>
  </>
);
StoryFlagWithSize.storyName = 'flag-with-fixed-size-and-overflow';

export const StoryFlagWithLogicalPropsOverrides = () => (
  <>
    <StorybookSubHeading>With logical padding overrides</StorybookSubHeading>
    <StyledDiv>
      <Flag
        overrides={{
          paddingBlock: 'space050',
          paddingInline: 'space050',
        }}
      >
        Text
      </Flag>
    </StyledDiv>
    <StorybookSubHeading>With logical margin overrides</StorybookSubHeading>
    <StyledDiv>
      <Flag
        overrides={{
          marginBlock: 'space030',
          marginInline: 'space030',
        }}
      >
        Text
      </Flag>
    </StyledDiv>
  </>
);
StoryFlagWithLogicalPropsOverrides.storyName =
  'flag-with-logical-props-overrides';
