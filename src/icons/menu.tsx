import React from 'react';
import {withTheme} from '../theme';
import {Svg} from './svg';
import {SvgProps} from './types';

export const defaultIcon: React.FC<SvgProps> = ({
  title = 'Menu icon',
  ...props
}) => (
  <Svg {...props} title={title}>
    <rect x="4" y="11" width="16" height="2" rx="1" />
    <rect x="4" y="5" width="16" height="2" rx="1" />
    <rect x="4" y="17" width="16" height="2" rx="1" />
  </Svg>
);

export const Menu = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Menu || defaultIcon;
  return <Icon {...props} />;
});
