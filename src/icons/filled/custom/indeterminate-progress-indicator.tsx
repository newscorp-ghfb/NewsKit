import React from 'react';
import {styled, getSize, getStylePreset} from '../../../utils/style';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {SvgProps} from '../../types';

const StyledSvg = styled(Svg)<SvgProps>`
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

  width: ${getSize('indeterminateProgressIndicator', '')};
  height: ${getSize('indeterminateProgressIndicator', '')};
  stroke: ${props => {
    const stylePresetObj = getStylePreset(
      'indeterminateProgressIndicator',
      '',
      {
        isSvg: true,
      },
    )(props);
    return stylePresetObj.fill;
  }};

  circle {
    r: ${`calc(50% - 2px)`};
    fill: transparent;
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

const DefaultProgressIndicatorIcon: React.FC<SvgProps> = props => (
  <StyledSvg {...props} viewBox="0 0 64 64">
    <circle cx="50%" cy="50%" />
  </StyledSvg>
);

export const IndeterminateProgressIndicator = withTheme<SvgProps>(props => {
  const Icon =
    props.theme.icons.IndeterminateProgressIndicator ||
    DefaultProgressIndicatorIcon;
  return <Icon {...props} />;
});

IndeterminateProgressIndicator.displayName = 'IndeterminateProgressIndicator';
