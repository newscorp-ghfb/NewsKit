import React from 'react';

import {StatefulVolumeControl} from './stateful-volume-control';
import {styled} from '../../utils/style';

export const name = 'volume-control';

const HorizontalContainer = styled.div`
  display: inline-flex;
  border: solid 1px red;
  margin: 0 24px;
  width: 250px;
`;

const VerticalContainer = styled.div`
  display: inline-flex;
  border: solid 1px red;
  margin: 24px 0;
  height: 250px;
`;

export const component = () => (
  <React.Fragment>
    <div>
      <HorizontalContainer>
        <StatefulVolumeControl volume={1} />
      </HorizontalContainer>
      <HorizontalContainer>
        <StatefulVolumeControl volume={0.5} />
      </HorizontalContainer>
      <HorizontalContainer>
        <StatefulVolumeControl volume={0} />
      </HorizontalContainer>
    </div>
    <div>
      <VerticalContainer>
        <StatefulVolumeControl vertical volume={1} />
      </VerticalContainer>
      <VerticalContainer>
        <StatefulVolumeControl vertical volume={0.5} />
      </VerticalContainer>
      <VerticalContainer>
        <StatefulVolumeControl vertical volume={0} />
      </VerticalContainer>
    </div>
  </React.Fragment>
);
