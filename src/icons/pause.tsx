import React from 'react';
import {Svg} from './svg';
import {SvgProps} from './types';

import {withTheme} from '../theme';

const defaultIcon: React.FC<SvgProps> = ({title = 'Pause', ...props}) => (
  <Svg title={title} {...props}>
    <path d="M6,19 L10,19 L10,5 L6,5 L6,19 Z M14,5 L14,19 L18,19 L18,5 L14,5 Z" />
  </Svg>
);

export const Pause = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Pause || defaultIcon;

  return <Icon {...props} />;
});
