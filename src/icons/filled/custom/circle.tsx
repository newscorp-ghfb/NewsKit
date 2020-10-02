import React from 'react';

import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Circle',
  ...props
}) => (
  <Svg {...props} title={title}>
    <circle cx="12" cy="12" r="12" />
  </Svg>
);

export const Circle = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Circle || defaultIcon;

  return <Icon {...props} />;
});
