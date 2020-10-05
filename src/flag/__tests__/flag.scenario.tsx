import * as React from 'react';
import {Flag, FlagSize} from '..';
import {styled} from '../../utils/style';
import {Email, Bookmark, IconFilledVolumeOff} from '../../icons';
import {Stack} from '../../stack';

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
      name: 'solid-flag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h2>Solid Flag</h2>
          <Flag>Text goes here</Flag>
        </React.Fragment>
      ),
    },
    {
      name: 'minimal-flag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h2>Minimal Flag</h2>
          <Flag
            overrides={{
              stylePreset: 'flagMinimal',
              spaceInset: 'spaceInsetSquish000',
            }}
          >
            Text goes here
          </Flag>
        </React.Fragment>
      ),
    },
    {
      name: 'sizing',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h1>Flag Sizes</h1>

          <Stack
            flow="horizontal-center"
            spaceStack="sizing020"
            spaceInline="sizing020"
            wrap="wrap"
          >
            <Flag size={FlagSize.Small}>Small</Flag>
            <Flag size={FlagSize.Large}>Large</Flag>
          </Stack>
        </React.Fragment>
      ),
    },
    {
      name: 'style-presets',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h1>Style Presets</h1>
          <Block>
            <Flag>flagSolid</Flag>
          </Block>
          <Block>
            <Flag overrides={{stylePreset: 'flagMinimal'}}>flagMinimal</Flag>
          </Block>
        </React.Fragment>
      ),
    },
    {
      name: 'flags-with-an-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h2>Flags with an icon</h2>
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
          <h2>
            Flags with leading and trailing icon and overridden default sizes
          </h2>
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
                <Email size="iconSize030" />
              </Flag>
              <Flag size={FlagSize.Large}>
                <Email />
                Text
                <Email size="iconSize040" />
              </Flag>
            </Stack>
          </Container>
          <h2>
            Flags with leading and trailing icon and overridden sizes with
            overrides and inline prop
          </h2>
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
                <Email size="iconSize030" />
              </Flag>
              <Flag size={FlagSize.Large} overrides={{iconSize: 'iconSize020'}}>
                <Email />
                Text
                <Email size="iconSize040" />
              </Flag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
    {
      name: 'minimal-with-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h2>Minimal (without padding)</h2>
          <Container>
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
                  spaceInset: 'spaceInsetSquish000',
                }}
              >
                <Email />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                overrides={{
                  stylePreset: 'flagMinimal',
                  spaceInset: 'spaceInsetSquish000',
                }}
              >
                <Email />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                overrides={{
                  stylePreset: 'flagMinimal',
                  spaceInset: 'spaceInsetSquish000',
                }}
              >
                <Bookmark />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                overrides={{
                  stylePreset: 'flagMinimal',
                  spaceInset: 'spaceInsetSquish000',
                }}
              >
                <IconFilledVolumeOff />
                Text
              </Flag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
