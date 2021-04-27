import * as React from 'react';
import {Flag, FlagSize} from '..';
import {getColorFromTheme, styled} from '../../utils/style';
import {
  IconFilledEmail,
  IconFilledBookmarkBorder,
  IconFilledVolumeOff,
} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookSubHeading,
  StorybookHeading,
} from '../../test/storybook-comps';

const Block = styled.div`
  margin: 10px;
`;

const Container = styled.div<{hasBlackBackground?: boolean}>`
  margin: 24px;
  ${({hasBlackBackground, theme}) =>
    hasBlackBackground && {
      background: getColorFromTheme('black')({theme}),
      color: getColorFromTheme('white')({theme}),
    }}
`;

export default {
  title: 'flag',
  children: [
    {
      storyName: 'flag',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading>Flag</StorybookHeading>
          <StorybookSubHeading>Solid</StorybookSubHeading>
          <Flag>Text goes here</Flag>

          <StorybookSubHeading>Minimal</StorybookSubHeading>
          <Flag
            overrides={{
              stylePreset: 'flagMinimal',
              spaceInset: 'spaceInsetSquish000',
            }}
          >
            Text goes here
          </Flag>

          <StorybookSubHeading>Minimal with icons</StorybookSubHeading>
          <Stack
            flow="horizontal-center"
            spaceStack="sizing020"
            spaceInline="sizing020"
            wrap="wrap"
          >
            <Flag
              size={FlagSize.Small}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <IconFilledEmail />
              Text
            </Flag>
            <Flag
              size={FlagSize.Large}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <IconFilledEmail />
              Text
            </Flag>
            <Flag
              size={FlagSize.Large}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <IconFilledBookmarkBorder />
              Text
            </Flag>
            <Flag
              size={FlagSize.Large}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <IconFilledVolumeOff />
              Text
            </Flag>
          </Stack>

          <StorybookSubHeading>Flag Sizes</StorybookSubHeading>
          <Stack
            flow="horizontal-center"
            spaceStack="space020"
            spaceInline="space020"
            wrap="wrap"
          >
            <Flag size={FlagSize.Small}>Small</Flag>
            <Flag size={FlagSize.Medium}>Medium</Flag>
            <Flag size={FlagSize.Large}>Large</Flag>
          </Stack>

          <StorybookSubHeading>
            with Typography Preset override
          </StorybookSubHeading>
          <Block>
            <Flag overrides={{typographyPreset: 'meta020'}}>Text</Flag>
          </Block>
        </React.Fragment>
      ),
    },
    {
      storyName: 'inverse-flag',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading>Inverse Flag</StorybookHeading>
          <Container hasBlackBackground>
            <Block>
              <StorybookSubHeading>
                with flagSolidInverse style preset
              </StorybookSubHeading>
              <Flag
                overrides={{stylePreset: 'flagSolidInverse'}}
                size={FlagSize.Large}
              >
                Text
              </Flag>
            </Block>
            <Block>
              <StorybookSubHeading>
                with flagSolidLiveInverse style preset
              </StorybookSubHeading>
              <Flag
                overrides={{stylePreset: 'flagSolidLiveInverse'}}
                size={FlagSize.Large}
              >
                Text
              </Flag>
            </Block>
            <Block>
              <StorybookSubHeading>
                with flagMinimalInverse style preset
              </StorybookSubHeading>
              <Flag
                overrides={{stylePreset: 'flagMinimalInverse'}}
                size={FlagSize.Large}
              >
                Text
              </Flag>
            </Block>
          </Container>
        </React.Fragment>
      ),
    },
    {
      storyName: 'flag-with-icons',
      storyFn: () => (
        <React.Fragment>
          <StorybookHeading>Flag</StorybookHeading>
          <StorybookSubHeading>with leading icon</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="space020"
              spaceStack="space020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <IconFilledEmail />
                Text
              </Flag>
              <Flag size={FlagSize.Large}>
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
              <Flag size={FlagSize.Small}>
                Text
                <IconFilledEmail />
              </Flag>
              <Flag size={FlagSize.Large}>
                Text
                <IconFilledEmail />
              </Flag>
            </Stack>
          </Container>

          <StorybookSubHeading>
            with leading and trailing icon
          </StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="space020"
              spaceStack="space020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <IconFilledEmail />
                Text
                <IconFilledEmail />
              </Flag>
              <Flag size={FlagSize.Large}>
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
              spaceStack="space020"
              spaceInline="space020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize030'}} />
              </Flag>
              <Flag size={FlagSize.Large}>
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
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small} overrides={{iconSize: 'iconSize020'}}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize030'}} />
              </Flag>
              <Flag size={FlagSize.Large} overrides={{iconSize: 'iconSize020'}}>
                <IconFilledEmail />
                Text
                <IconFilledEmail overrides={{size: 'iconSize040'}} />
              </Flag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
