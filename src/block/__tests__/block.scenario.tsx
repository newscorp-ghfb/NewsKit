import React from 'react';
import {Block} from '..';
import {styled} from '../../utils/style';

export const name = 'block';

const ColoredSeparators = styled.div`
  background-color: #f2f2f2;
  height: 24px;
  width: 160px;
`;

export const component = () => (
  <React.Fragment>
    <ColoredSeparators />
    <Block>
      <span>no padding or margin</span>
    </Block>
    <ColoredSeparators />
    <Block $margin="spaceStack030">
      <span>with margin spaceStack030</span>
    </Block>
    <ColoredSeparators />
    <Block $margin="spaceInline030">
      <span>with margin spaceInline030</span>
    </Block>
    <ColoredSeparators />
    <Block as="span">
      <span>as span with </span>
    </Block>
    <ColoredSeparators />
  </React.Fragment>
);
