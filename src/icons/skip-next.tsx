import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SvgProps} from './types';

const defaultIcon: React.FC<SvgProps> = ({
  title = 'SkipNext icon',
  ...props
}) => (
  <Svg title={title} {...props}>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const SkipNext = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.SkipNext || defaultIcon;

  return <Icon {...props} />;
});
