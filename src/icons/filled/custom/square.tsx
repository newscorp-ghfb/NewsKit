import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Square',
  ...props
}) => (
  <Svg {...props} title={title}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M6 6h12v12H6z" />
  </Svg>
);

export const Square = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.Square || defaultIcon;

  return <Icon {...props} />;
});
