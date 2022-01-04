import * as React from 'react';

import {Button} from '..';
import {styled} from '../../utils/style';
import {ButtonShape, ButtonSize} from '../types';

export const name = 'button';

const Block = styled.div`
  margin: 30px;
`;

export const component = () => (
  <React.Fragment>
    <h1>Small buttons</h1>
    <Block>
      <Button>Default button</Button>
    </Block>
    <Block>
      <Button $shape={ButtonShape.Square}>Default square button</Button>
    </Block>
    <Block>
      <Button $shape={ButtonShape.Rounded}>Default rounded button</Button>
    </Block>
    <Block>
      <Button autoFocus>Focused button</Button>
    </Block>
    <Block>
      <Button disabled>Disabled button</Button>
    </Block>

    <h1>Medium buttons</h1>
    <Block>
      <Button $size={ButtonSize.Medium} $shape={ButtonShape.Square}>
        Default square button
      </Button>
    </Block>
    <Block>
      <Button $size={ButtonSize.Medium} $shape={ButtonShape.Rounded}>
        Default rounded button
      </Button>
    </Block>
    <Block>
      <Button $size={ButtonSize.Medium} disabled>
        Disabled button
      </Button>
    </Block>

    <h1>Large buttons</h1>
    <Block>
      <Button $size={ButtonSize.Large} $shape={ButtonShape.Square}>
        Default square button
      </Button>
    </Block>
    <Block>
      <Button $size={ButtonSize.Large} $shape={ButtonShape.Rounded}>
        Default rounded button
      </Button>
    </Block>
    <Block>
      <Button $size={ButtonSize.Large} disabled>
        Disabled button
      </Button>
    </Block>
  </React.Fragment>
);
