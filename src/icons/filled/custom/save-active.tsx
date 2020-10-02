import React from 'react';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps} from '../../types';

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Save active icon',
  ...props
}) => (
  <Svg {...props} title={title}>
    <polygon
      stroke="none"
      points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21"
    />
  </Svg>
);

export const SaveActive = withTheme<LegacySvgProps>(props => {
  const Icon = props.theme.icons.SaveActive || defaultIcon;
  return <Icon {...props} />;
});
