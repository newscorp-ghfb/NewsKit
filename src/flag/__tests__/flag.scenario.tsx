import * as React from 'react';

import {Flag, FlagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'flag';
const Block = styled.div`
  margin: 10px;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Enabled Flag</StorybookHeading>
    <Flag>Enabled</Flag>
    <StorybookHeading>Disabled Flag</StorybookHeading>
    <Flag disabled>Disabled</Flag>
    <StorybookHeading>Flag Sizes</StorybookHeading>
    <span>
      <Flag $size={FlagSize.Small}>Small</Flag>
    </span>
    <span>
      <Flag $size={FlagSize.Large}>Large</Flag>
    </span>
    <StorybookHeading>Style Presets</StorybookHeading>
    <Block>
      <Flag>interactive010</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="interactive010Inverse">interactive010Inverse</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="interactive020">interactive020</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="interactive030">interactive030</Flag>
    </Block>
    <Block>
      <Flag $stylePreset="interactive040">interactive040</Flag>
    </Block>
  </React.Fragment>
);
