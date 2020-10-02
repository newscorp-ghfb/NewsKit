import React from 'react';
import {styled, getColorFromTheme} from '../../../utils/style';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {LegacySvgProps, LegacyStyledSvgProps} from '../../types';

const AnimatedSvg = styled(Svg)<LegacyStyledSvgProps>`
  @keyframes rotate {
    0% {
      stroke-dasharray: 410;
      stroke-dashoffset: 360;
      transform: rotate(270deg);
    }
    50% {
      stroke-dasharray: 502;
      stroke-dashoffset: 360;
      transform: rotate(315deg);
    }
    100% {
      stroke-dasharray: 410;
      stroke-dashoffset: 360;
      transform: rotate(630deg);
    }
  }

  circle {
    r: ${`calc(50% - 2px)`};
    fill: transparent;
    stroke: ${getColorFromTheme('inkBase', '$color', true)};
    stroke-width: 2px;
    stroke-dasharray: 502;
    stroke-dashoffset: 360;
    transform: rotate(270deg);
    transform-origin: 50% 50%;
    will-change: stroke-dasharray;
    will-change: stroke-dashoffset;
    will-change: transform;
    animation: rotate 1s linear infinite;
  }
`;

const defaultIcon: React.FC<LegacySvgProps> = ({
  title = 'Indeterminate progress indicator',
  color,
  ...props
}) => (
  <AnimatedSvg $color={color} {...props} title={title} viewBox="0 0 64 64">
    <circle cx="50%" cy="50%" />
  </AnimatedSvg>
);

export const IndeterminateProgressIndicator = withTheme<LegacySvgProps>(
  props => {
    const Icon =
      props.theme.icons.IndeterminateProgressIndicator || defaultIcon;
    return <Icon {...props} />;
  },
);
