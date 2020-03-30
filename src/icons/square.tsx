import React from 'react';
import {Svg} from './svg';

import {SvgProps} from './types';
import {withTheme} from '../themes/emotion';

const defaultIcon: React.FC<SvgProps> = ({title = 'Square', ...props}) => (
  <Svg {...props} title={title}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h12v12H6z" />
  </Svg>
);

export const Square = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Square || defaultIcon;

  return <Icon {...props} />;
});
