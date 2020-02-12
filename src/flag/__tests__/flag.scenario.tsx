import * as React from 'react';

import {FlagSolid, FlagMinimal, FlagSize} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Email} from '../../icons';

export const name = 'flag';
const Block = styled.div`
  margin: 10px;
`;

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Flag Variations</StorybookHeading>
    <h3>Solid Flag</h3>
    <FlagSolid>Text goes here</FlagSolid>
    <h3>Minimal Flag</h3>
    <FlagMinimal>Text goes here</FlagMinimal>
    <StorybookHeading>Flag Sizes</StorybookHeading>
    <span>
      <FlagSolid $size={FlagSize.Small}>Small</FlagSolid>
    </span>
    <span>
      <FlagSolid $size={FlagSize.Large}>Large</FlagSolid>
    </span>
    <StorybookHeading>Style Presets</StorybookHeading>
    <Block>
      <FlagSolid>flag010</FlagSolid>
    </Block>
    <Block>
      <FlagSolid $stylePreset="flag010Inverse">flag010Inverse</FlagSolid>
    </Block>
    <StorybookHeading>Flags with an icon</StorybookHeading>
    <h3>Email</h3>
    <Block>
      <FlagSolid>
        <Email $size="iconSize040" />
      </FlagSolid>
    </Block>
    <h3>Email and text</h3>
    <Block>
      <FlagSolid>
        <Email $size="iconSize020" />
        Email
      </FlagSolid>
    </Block>
  </React.Fragment>
);
