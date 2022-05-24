import { useEffect } from 'react';
import { Theme } from '../../../theme';
import { getToken } from '../../../utils/get-token';

export const getTokensForVolumeControl = (theme: Theme, overrides: {}) => {

  const getVolumeControlToken = (path: string, propName: string) =>
    getToken({ theme, overrides }, `audioPlayerVolumeControl.${path}`, path, propName);

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
    volumeControlButtonStylePreset,
    iconSize,
    buttonSize,
  };
};

// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
export const useInitialVolume = ({
  onChange, initialVolume }: { onChange: (value: number) => void, initialVolume: number }) => {
  useEffect(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
      '',
    );
    onChange(Number.isNaN(storedVolume) ? (initialVolume) : storedVolume);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}