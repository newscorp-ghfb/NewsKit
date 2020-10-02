import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({title = 'Close', ...props}) => (
  <Svg viewBox="0 0 24 24" {...props} title={title}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </Svg>
);

export const Close = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Close || defaultIcon;
  return <Icon {...props} />;
});
