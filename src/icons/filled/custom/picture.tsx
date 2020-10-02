import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Picture',
  ...props
}) => (
  <Svg {...props} title={title}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </Svg>
);

export const Picture = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Picture || defaultIcon;
  return <Icon {...props} />;
});
