import * as React from 'react';

import * as icons from '..';
import {SvgProps} from '../types';
import {styled} from '../../utils/style';

const Constrain = styled.div`
  max-width: 200px;
  display: inline-block;
`;

const entries = Object.entries(icons)
  .filter(icon => icon[0] !== 'Svg')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((entry: any) => {
    const [iconName, Icon] = entry as [string, React.ComponentType<SvgProps>];

    if (['Facebook', 'Twitter', 'WhatsApp', 'GitHub'].includes(iconName)) {
      return {
        name: iconName,
        type: 'story',
        component: () => (
          <React.Fragment>
            <Icon size="iconSize030" />
            <Icon size="iconSize040" />
            <Icon size="iconSize050" />
            <Constrain>
              <Icon />
            </Constrain>
          </React.Fragment>
        ),
      };
    }

    return {
      name: iconName,
      type: 'story',
      component: () => (
        <React.Fragment>
          <Icon size="iconSize030" />
          <Icon size="iconSize040" />
          <Icon size="iconSize050" />
          <Icon color="semanticNegative030" size="iconSize050" />
          <Icon color="semanticPositive030" size="iconSize050" />
          <Icon color="semanticNotice010" size="iconSize050" />
          <Icon color="semanticInformative010" size="iconSize050" />
          <Constrain>
            <Icon />
          </Constrain>
        </React.Fragment>
      ),
    };
  });

export default {
  name: 'icons',
  children: entries,
};
