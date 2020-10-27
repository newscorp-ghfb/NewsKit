import * as React from 'react';
import {Flag, FlagSize} from '..';
import {styled} from '../../utils/style';
import {Email, Bookmark, IconFilledVolumeOff} from '../../icons';
import {Stack} from '../../stack';
import {
  StorybookSubHeading,
  StorybookHeading,
} from '../../test/storybook-comps';

const Block = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  margin: 24px;
`;

export default {
  name: 'flag',
  children: [
    {
      name: 'flag',
      type: 'story',
      component: () => (
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
              <Email />
              Text
            </Flag>
            <Flag
              size={FlagSize.Large}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <Email />
              Text
            </Flag>
            <Flag
              size={FlagSize.Large}
              overrides={{
                stylePreset: 'flagMinimal',
                spaceInset: 'spaceInset000Squish',
              }}
            >
              <Bookmark />
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
            spaceStack="sizing020"
            spaceInline="sizing020"
            wrap="wrap"
          >
            <Flag size={FlagSize.Small}>Small</Flag>
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
      name: 'flag-with-icons',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Flag</StorybookHeading>
          <StorybookSubHeading>with leading icon</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <Email />
                Text
              </Flag>
              <Flag size={FlagSize.Large}>
                <Email />
                Text
              </Flag>
            </Stack>
          </Container>

          <StorybookSubHeading>with trailing icon</StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                Text
                <Email />
              </Flag>
              <Flag size={FlagSize.Large}>
                Text
                <Email />
              </Flag>
            </Stack>
          </Container>

          <StorybookSubHeading>
            with leading and trailing icon
          </StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <Email />
                Text
                <Email />
              </Flag>
              <Flag size={FlagSize.Large}>
                <Email />
                Text
                <Email />
              </Flag>
            </Stack>
          </Container>

          <StorybookSubHeading>
            with icon and inline overridden size
          </StorybookSubHeading>
          <Container>
            <Stack
              flow="horizontal-center"
              spaceInline="sizing020"
              spaceStack="sizing020"
              wrap="wrap"
            >
              <Flag size={FlagSize.Small}>
                <Email />
                Text
                {/* size to be moved in icon overrides as part of PPDSC-1341 */}
                <Email size="iconSize030" />
              </Flag>
              <Flag size={FlagSize.Large}>
                <Email />
                Text
                {/* size to be moved in icon overrides as part of PPDSC-1341 */}
                <Email size="iconSize040" />
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
                <Email />
                Text
                {/* size to be moved in icon overrides as part of PPDSC-1341 */}
                <Email size="iconSize030" />
              </Flag>
              <Flag size={FlagSize.Large} overrides={{iconSize: 'iconSize020'}}>
                <Email />
                Text
                {/* size to be moved in icon overrides as part of PPDSC-1341 */}
                <Email size="iconSize040" />
              </Flag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
