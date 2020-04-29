import * as React from 'react';
import {Flag, FlagSize} from '..';
import {styled} from '../../utils/style';
import {Email, Bookmark, VolumeMute} from '../../icons';
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
          <Flag spacing="spaceInset000Squish" stylePreset="flagMinimal">
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

          <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
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
            <Flag stylePreset="flagMinimal">flagMinimal</Flag>
          </Block>
        </React.Fragment>
      ),
    },
    {
      name: 'flags-with-an-icon',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h1>Flags with an icon</h1>
          <Container>
            <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
              <Flag size={FlagSize.Small}>
                <Email size="iconSize010" />
                Text
              </Flag>
              <Flag size={FlagSize.Large}>
                <Email size="iconSize010" />
                Text
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
            <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
              <Flag
                size={FlagSize.Small}
                spacing="spaceInset000Squish"
                stylePreset="flagMinimal"
              >
                <Email size="iconSize010" />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                spacing="spaceInset000Squish"
                stylePreset="flagMinimal"
              >
                <Email size="iconSize010" />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                spacing="spaceInset000Squish"
                stylePreset="flagMinimal"
              >
                <Bookmark size="iconSize010" />
                Text
              </Flag>
              <Flag
                size={FlagSize.Large}
                spacing="spaceInset000Squish"
                stylePreset="flagMinimal"
              >
                <VolumeMute size="iconSize010" />
                Text
              </Flag>
            </Stack>
          </Container>
        </React.Fragment>
      ),
    },
  ],
};
