import React from 'react';
import {
  styled,
  getColorFromTheme,
  MQ,
  getStylePresetFromTheme,
  CSSObject,
} from '../../../utils/style';
import {Theme, withTheme} from '../../../theme';
import {Svg} from '../../svg';
import {SvgProps} from '../../types';

const getIconColourValue = (
  theme: Theme,
  stylePreset: MQ<string> | undefined,
) => {
  if (!stylePreset || typeof stylePreset !== 'string') return 'inkBase';

  const stylePresetObject = getStylePresetFromTheme(stylePreset, undefined, {
    isLoading: true,
  })({theme});
  return (stylePresetObject &&
    stylePresetObject.svg &&
    (stylePresetObject.svg as CSSObject).fill) as string;
};

const AnimatedSvg = styled(Svg)<SvgProps>`
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
    stroke: ${({theme, overrides}) =>
      getColorFromTheme(
        getIconColourValue(theme, overrides!.stylePreset),
        undefined,
        true,
      )({theme})};
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

const defaultIcon: React.FC<SvgProps> = ({...props}) => (
  <AnimatedSvg {...props} viewBox="0 0 64 64">
    <circle cx="50%" cy="50%" />
  </AnimatedSvg>
);

export const IndeterminateProgressIndicator = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.IndeterminateProgressIndicator || defaultIcon;
  return <Icon {...props} />;
});
