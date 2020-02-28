import * as React from 'react';

import * as icons from '..';
import {SvgProps} from '../types';
import {styled} from '../../utils/style';

export const name = 'icons';

const Constrain = styled.div`
  max-width: 200px;
  display: inline-block;
`;

export const component = () => (
  <React.Fragment>
    {Object.entries(icons)
      .filter(icon => icon[0] !== 'Svg')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((entry: any) => {
        const [iconName, Icon] = entry as [
          string,
          React.ComponentType<SvgProps>,
        ];

        if (['Facebook', 'Twitter', 'WhatsApp', 'GitHub'].includes(iconName)) {
          return (
            <div>
              <Icon $size="iconSize030" />
              <Icon $size="iconSize040" />
              <Icon $size="iconSize050" />
              <Constrain>
                <Icon />
              </Constrain>
            </div>
          );
        }

        return (
          <div>
            <Icon $size="iconSize030" />
            <Icon $size="iconSize040" />
            <Icon $size="iconSize050" />
            <Icon $color="semanticNegative030" $size="iconSize050" />
            <Icon $color="semanticPositive030" $size="iconSize050" />
            <Icon $color="semanticNotice010" $size="iconSize050" />
            <Icon $color="semanticInformative010" $size="iconSize050" />
            <Constrain>
              <Icon />
            </Constrain>
          </div>
        );
      })}
  </React.Fragment>
);
