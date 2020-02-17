import * as React from 'react';

import {Flag, FlagSize} from '..';
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
    <h1>Flag Variations</h1>
    <h2>Solid Flag</h2>
    <Flag>Text goes here</Flag>
    <h2>Minimal Flag</h2>
    <Flag $spacing="sizing000" $stylePreset="flag010Inverse">
      Text goes here
    </Flag>
    <h1>Flag Sizes</h1>
    <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
      {' '}
      <Flag $size={FlagSize.Small}>Small</Flag>{' '}
      <Flag $size={FlagSize.Large}>Large</Flag>
    </Stack>

    <h1>Style Presets</h1>
    <Block>
      <Flag>flag010</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="flag010Inverse">flag010Inverse</Flag>
    </Block>
    <h1>Flags with an icon</h1>
    <h2>Regular</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag $size={FlagSize.Small}>
          <Email $size="iconSize010" />
          Text
        </Flag>
        <Flag $size={FlagSize.Large}>
          <Email $size="iconSize020" />
          Text
        </Flag>
      </Stack>
    </Container>

    <h2>Minimal (without padding)</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing020" wrap="wrap">
        <Flag
          $size={FlagSize.Small}
          $spacing="sizing000"
          $stylePreset="flag010Inverse"
        >
          <Email $size="iconSize010" />
          Text
        </Flag>
        <Flag
          $size={FlagSize.Large}
          $spacing="sizing000"
          $stylePreset="flag010Inverse"
        >
          <Email $size="iconSize020" />
          Text
        </Flag>
      </Stack>
    </Container>
  </React.Fragment>
);
