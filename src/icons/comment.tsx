import React from 'react';
import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SvgProps} from './types';

const defaultIcon: React.FC<SvgProps> = ({
  title = 'Comment icon',
  ...props
}) => (
  <Svg {...props} title={title}>
    <path d="M20,2 L4,2 C2.9,2 2,2.9 2,4 L2,16 C2,17.1 2.9,18 4,18 L18,18 L22,22 L22,4 C22,2.9 21.1,2 20,2 L20,2 Z M18,14 L6,14 L6,12 L18,12 L18,14 L18,14 Z M18,11 L6,11 L6,9 L18,9 L18,11 L18,11 Z M18,8 L6,8 L6,6 L18,6 L18,8 L18,8 Z" />
  </Svg>
);

export const Comment = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Comment || defaultIcon;
  return <Icon {...props} />;
});
