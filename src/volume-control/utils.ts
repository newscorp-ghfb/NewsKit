import {Theme} from '../theme';
import {getToken} from '../utils/get-token';

export const getTokensForVolumeControl = (theme: Theme, overrides: {}) => {
  const getVolumeControlToken = (path: string, propName: string) =>
    getToken({theme, overrides}, `volumeControl.${path}`, path, propName);
  const sliderTrackStylePreset = getVolumeControlToken(
    'slider.track',
    'stylePreset',
  );
  const trackSize = getVolumeControlToken('slider.track', 'size');
  const sliderIndicatorTrackStylePreset = getVolumeControlToken(
    'slider.indicator',
    'stylePreset',
  );
  const sliderThumbStylePreset = getVolumeControlToken(
    'slider.thumb',
    'stylePreset',
  );
  const thumbSize = getVolumeControlToken('slider.thumb', 'size');
  const sliderThumbLabelStylePreset = getVolumeControlToken(
    'slider.thumbLabel',
    'stylePreset',
  );
  const volumeControlButtonStylePreset = getVolumeControlToken(
    'button',
    'stylePreset',
  );
  const iconSize = getVolumeControlToken('button', 'iconSize');
  const buttonSize = getVolumeControlToken('button', 'size');
  return {
    sliderTrackStylePreset,
    trackSize,
    sliderIndicatorTrackStylePreset,
    sliderThumbStylePreset,
    thumbSize,
    sliderThumbLabelStylePreset,
    volumeControlButtonStylePreset,
    iconSize,
    buttonSize,
  };
};
