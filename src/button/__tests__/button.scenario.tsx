import * as React from 'react';

import {Button} from '..';
import {styled} from '../../utils/style';
import {ButtonShape, ButtonSize} from '../types';
import {Pause, Email} from '../../icons';

export const name = 'button';

const Block = styled.div`
  margin: 30px;
`;

const PlayIcon = () => <Pause $size="sizing060" $color="buttonFill" />;
const EmailIcon = () => <Email $size="sizing120" />;

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
    <h1>Icon Buttons</h1>
    <Block>
      <Button icon={PlayIcon}>{/* Default square button with Icon */}</Button>
    </Block>
    <Block>
      <Button icon={EmailIcon}>{/* Default rounded button with Icon */}</Button>
    </Block>
    <Block>
      <Button disabled icon={PlayIcon}>
        {/* Disabled button with Icon  */}
      </Button>
    </Block>
    <Block>
      <Button icon={PlayIcon} $size={ButtonSize.Small}>
        {/* Default square button with Icon */}
      </Button>
    </Block>
    <Block>
      <Button icon={PlayIcon} $size={ButtonSize.Medium}>
        {/* Default square button with Icon */}
      </Button>
    </Block>
    <Block>
      <Button icon={PlayIcon} $size={ButtonSize.Large}>
        {/* Default square button with Icon */}
      </Button>
    </Block>
  </React.Fragment>
);
