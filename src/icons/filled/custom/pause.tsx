import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({title = 'Pause', ...props}) => (
  <Svg title={title} {...props}>
    <path d="M6,19 L10,19 L10,5 L6,5 L6,19 Z M14,5 L14,19 L18,19 L18,5 L14,5 Z" />
  </Svg>
);

export const Pause = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Pause || defaultIcon;

  return <Icon {...props} />;
});
