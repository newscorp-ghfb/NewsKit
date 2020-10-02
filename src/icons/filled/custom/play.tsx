import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({title = 'Play', ...props}) => (
  <Svg title={title} {...props}>
    <polygon points="8 5 8 19 19 12" />
  </Svg>
);

export const Play = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Play || defaultIcon;

  return <Icon {...props} />;
});
