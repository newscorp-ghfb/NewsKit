import * as React from 'react';

import * as icons from '..';
import {SizingKeys, ColorKeys} from '../../themes';

interface IconProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

export const name = 'icons';

export const component = () => (
  <React.Fragment>
    {Object.entries(icons)
      .filter(icon => icon[0] !== 'Svg')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((entry: any) => {
        const [iconName, Icon] = entry as [
          string,
          React.ComponentType<IconProps>,
        ];

        if (['Facebook', 'Twitter', 'WhatsApp', 'GitHub'].includes(iconName)) {
          return (
            <div>
              <Icon $size="sizing070" />
              <Icon $size="sizing080" />
              <Icon $size="sizing090" />
            </div>
          );
        }

        return (
          <div>
            <Icon $size="sizing070" />
            <Icon $size="sizing080" />
            <Icon $size="sizing090" />
            <Icon $color="semanticNegativeBase" $size="sizing090" />
            <Icon $color="semanticPositiveBase" $size="sizing090" />
            <Icon $color="semanticNoticeBase" $size="sizing090" />
            <Icon $color="semanticInformativeBase" $size="sizing090" />
          </div>
        );
      })}
  </React.Fragment>
);
