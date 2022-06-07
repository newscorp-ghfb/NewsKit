import {useEffect} from 'react';
import {Theme} from '../../../theme';
import {getToken} from '../../../utils/get-token';

export const getTokensForVolumeControl = (theme: Theme, overrides: {}) => {
  const getVolumeControlToken = (path: string, propName: string) =>
    getToken(
      {theme, overrides},
      `audioPlayerVolumeControl.${path}`,
      path,
      propName,
    );

  const volumeControlButtonStylePreset = getVolumeControlToken(
    'button',
    'stylePreset',
  );
  const iconSize = getVolumeControlToken('button', 'iconSize');

  return {
    volumeControlButtonStylePreset,
    iconSize,
  };
};

// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
export const useInitialVolume = ({
  onChange,
  initialVolume,
}: {
  onChange: (value: number) => void;
  initialVolume: number;
}) => {
  useEffect(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
        '',
    );
    onChange(Number.isNaN(storedVolume) ? initialVolume : storedVolume);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
