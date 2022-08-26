import React, {useState, useCallback, useMemo} from 'react';
import {ButtonSize} from '../button';
import {IconButton} from '../icon-button';
import {VolumeControlProps} from './types';
import {Slider} from '../slider';
import {
  IconFilledVolumeUp,
  IconFilledVolumeDown,
  IconFilledVolumeOff,
} from '../icons';
import {useTheme} from '../theme';
import {ScreenReaderOnly} from '../screen-reader-only/screen-reader-only';
import {useReactKeys} from '../utils/hooks';
import {getTokensForVolumeControl} from './utils';
import {MQ} from '../utils/style';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: VolumeControlProps['onChange'];
  volumeControlButtonStylePreset?: MQ<string>;
  iconSize: string;
  size: ButtonSize;
}

const toggleMute = (
  volume: number,
  unMutedVolume: number,
  onChange: VolumeControlProps['onChange'],
) => (volume === 0 ? onChange(unMutedVolume || 1) : onChange(0));

const MuteButton: React.FC<MuteButtonProps> = ({
  volume,
  unMutedVolume,
  onChange,
  volumeControlButtonStylePreset,
  iconSize,
  size,
}) => (
  <IconButton
    data-testid="mute-button"
    aria-label={volume === 0 ? 'Unmute' : 'Mute'}
    tabIndex={-1}
    onClick={() => toggleMute(volume, unMutedVolume, onChange)}
    size={size}
    overrides={{
      stylePreset: volumeControlButtonStylePreset,
      iconSize,
    }}
  >
    {volume === 0 ? <IconFilledVolumeOff /> : <IconFilledVolumeDown />}
  </IconButton>
);

const ThemelessVolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
  overrides = {},
}) => {
  const theme = useTheme();
  const [unMutedVolume, setUnMutedVolume] = useState(volume);
  const [srOnlyVolumeControl] = useReactKeys(1);
  const {
    sliderTrackStylePreset,
    trackSize,
    sliderIndicatorTrackStylePreset,
    sliderThumbStylePreset,
    thumbSize,
    sliderThumbLabelStylePreset,
    volumeControlButtonStylePreset,
    iconSize,
    buttonSize,
  } = getTokensForVolumeControl(theme, overrides);

  if (unMutedVolume !== volume && volume > 0) {
    setUnMutedVolume(volume);
  }
  const volumeArr = useMemo(() => [volume], [volume]);
  const onSliderChange = useCallback(
    ([newVolume]: number[]) => onChange(newVolume),
    [onChange],
  );
  const minLabel = useCallback(
    () => (
      <MuteButton
        volume={volume}
        unMutedVolume={unMutedVolume}
        onChange={onChange}
        volumeControlButtonStylePreset={volumeControlButtonStylePreset}
        iconSize={iconSize}
        size={buttonSize}
      />
    ),
    [
      volume,
      unMutedVolume,
      onChange,
      volumeControlButtonStylePreset,
      iconSize,
      buttonSize,
    ],
  );

  const toggleMuteWithKeys = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      toggleMute(volume, unMutedVolume, onChange);
    }
  };

  const maxLabel = useCallback(
    () => (
      <IconButton
        data-testid="volumeup-button"
        aria-label="Volume up"
        tabIndex={-1}
        onClick={() => onChange(1)}
        size={buttonSize}
        overrides={{
          stylePreset: volumeControlButtonStylePreset,
          iconSize,
        }}
      >
        <IconFilledVolumeUp />
      </IconButton>
    ),
    [buttonSize, iconSize, onChange, volumeControlButtonStylePreset],
  );

  return (
    <>
      <Slider
        vertical={vertical}
        min={0}
        max={1}
        step={0.1}
        values={volumeArr}
        onChange={onSliderChange}
        ariaLabel="Volume Control"
        ariaValueText={`volume level ${volumeArr[0] * 10} of 10`}
        dataTestId="volume-control"
        minLabel={minLabel}
        maxLabel={maxLabel}
        onKeyDown={toggleMuteWithKeys}
        ariaDescribedBy={srOnlyVolumeControl}
        overrides={{
          track: {
            stylePreset: sliderTrackStylePreset,
            size: trackSize,
          },
          indicator: {
            stylePreset: sliderIndicatorTrackStylePreset,
          },
          thumb: {
            stylePreset: sliderThumbStylePreset,
            size: thumbSize,
          },
          thumbLabel: {
            stylePreset: sliderThumbLabelStylePreset,
          },
        }}
      />
      <ScreenReaderOnly id={srOnlyVolumeControl} aria-hidden="true">
        Use the arrow keys to adjust volume
      </ScreenReaderOnly>
    </>
  );
};

export const VolumeControl = withOwnTheme(ThemelessVolumeControl)({
  defaults,
  stylePresets,
});
