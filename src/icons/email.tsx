import React from 'react';
import {withTheme} from '../theme';
import {Svg} from './svg';
import {SvgProps} from './types';

const defaultIcon: React.FC<SvgProps> = ({title = 'Email icon', ...props}) => (
  <Svg title={title} {...props}>
    <path d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L20,4 Z M20,8 L12,13 L4,8 L4,6 L12,11 L20,6 L20,8 L20,8 Z" />
  </Svg>
);

export const Email = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Email || defaultIcon;
  return <Icon {...props} />;
});
