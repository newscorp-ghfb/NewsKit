import React from 'react';
import {styled, getStylePreset, getResponsiveSize} from '../../../utils/style';
import {withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {NewsKitIconProps} from '../../types';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from '../../defaults';
import stylePresets from '../../style-presets';

const StyledSvg = styled(Svg)<NewsKitIconProps>`
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

  ${getResponsiveSize('width', 'indeterminateProgressIndicator', '', 'size')};
  ${getResponsiveSize('height', 'indeterminateProgressIndicator', '', 'size')};
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

const DefaultProgressIndicatorIcon: React.FC<NewsKitIconProps> = props => (
  <StyledSvg {...props} viewBox="0 0 64 64">
    <circle cx="50%" cy="50%" />
  </StyledSvg>
);

export const IndeterminateProgressIndicator = withOwnTheme(
  withTheme<NewsKitIconProps>(props => {
    const Icon =
      props.theme.icons.IndeterminateProgressIndicator ||
      DefaultProgressIndicatorIcon;
    return <Icon {...props} />;
  }),
)({defaults, stylePresets});

IndeterminateProgressIndicator.displayName = 'IndeterminateProgressIndicator';
IndeterminateProgressIndicator.stylePresets = stylePresets;
