import React from 'react';
import {Svg} from './svg';
import {SvgProps} from './types';

import {withTheme} from '../themes/emotion';

const defaultIcon: React.FC<SvgProps> = ({title = 'Play', ...props}) => (
  <Svg title={title} {...props}>
    <polygon points="8 5 8 19 19 12" />
  </Svg>
);

export const Play = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Play || defaultIcon;

  return <Icon {...props} />;
});
