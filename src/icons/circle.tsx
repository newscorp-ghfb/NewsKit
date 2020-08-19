import React from 'react';
import {Svg} from './svg';

import {SvgProps} from './types';
import {withTheme} from '../theme';

const defaultIcon: React.FC<SvgProps> = ({title = 'Circle', ...props}) => (
  <Svg {...props} title={title}>
    <circle cx="12" cy="12" r="12" />
  </Svg>
);

export const Circle = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Circle || defaultIcon;

  return <Icon {...props} />;
});
