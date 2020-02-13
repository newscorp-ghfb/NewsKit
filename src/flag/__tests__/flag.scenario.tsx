import * as React from 'react';

import {Flag, FlagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';
import {Stack} from '../../stack';

export const name = 'flag';
const Block = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  margin: 24px;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Flag Variations</StorybookHeading>
    <h3>Solid Flag</h3>
    <Flag>Text goes here</Flag>
    <h3>Minimal Flag</h3>
    <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
      Text goes here
    </Flag>
    <StorybookHeading>Flag Sizes</StorybookHeading>
    <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
      {' '}
      <Flag $size={FlagSize.Small}>Small</Flag>{' '}
      <Flag $size={FlagSize.Large}>Large</Flag>
    </Stack>

    <StorybookHeading>Style Presets</StorybookHeading>
    <Block>
      <Flag>flag010</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="flag010Inverse">flag010Inverse</Flag>
    </Block>
    <StorybookHeading>Flags with an icon</StorybookHeading>
    <h2>Regular</h2>
    <Container>
      <h3>Icon only</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag>
          <Email $size="iconSize010" />
        </Flag>
        <Flag>
          <Email $size="iconSize020" />
        </Flag>
        <Flag>
          <Email $size="iconSize030" />
        </Flag>
      </Stack>
    </Container>
    <Container>
      <h3>Icon on the left and text</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag>
          <Email $size="iconSize010" />
          Text
        </Flag>
        <Flag>
          <Email $size="iconSize020" />
          Text
        </Flag>
        <Flag>
          <Email $size="iconSize030" />
          Text
        </Flag>
      </Stack>
    </Container>
    <Container>
      <h3>Icon on the right and text</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag>
          Text
          <Email $size="iconSize010" />
        </Flag>
        <Flag>
          Text
          <Email $size="iconSize020" />
        </Flag>
        <Flag>
          Text
          <Email $size="iconSize030" />
        </Flag>
      </Stack>
    </Container>

    <h2>Minimal (without padding)</h2>
    <Container>
      <h3>Icon only</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize010" />
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize020" />
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize030" />
        </Flag>
      </Stack>
    </Container>
    <Container>
      <h3>Icon on the left and text</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize010" />
          Text
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize020" />
          Text
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          <Email $size="iconSize030" />
          Text
        </Flag>
      </Stack>
    </Container>
    <Container>
      <h3>Icon on the right and text</h3>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          Text
          <Email $size="iconSize010" />
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          Text
          <Email $size="iconSize020" />
        </Flag>
        <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
          Text
          <Email $size="iconSize030" />
        </Flag>
      </Stack>
    </Container>
  </React.Fragment>
);
