import React, {useState, useCallback, useMemo} from 'react';
import {IconButton, ButtonSize} from '../button';
import {VolumeControlProps} from './types';
import {Slider} from '../slider';
import {VolumeUp, VolumeDown, VolumeMute} from '../icons';
import {IconSizeKeys} from '../themes';

interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: VolumeControlProps['onChange'];
  $volumeControlButtonStylePreset?: string;
}

const iconSize: IconSizeKeys = 'iconSize020';
const volumeControlButtonStyleDefault = 'iconButtonMinimalPrimary';

const MuteButton: React.FC<MuteButtonProps> = ({
  volume,
  unMutedVolume,
  onChange,
  $volumeControlButtonStylePreset,
}) => (
  <IconButton
    data-testid="mute-button"
    tabIndex={-1}
    onClick={() => (volume === 0 ? onChange(unMutedVolume || 1) : onChange(0))}
    $size={ButtonSize.Small}
    $stylePreset={
      $volumeControlButtonStylePreset || volumeControlButtonStyleDefault
    }
  >
    {volume === 0 ? (
      <VolumeMute $size={iconSize} />
    ) : (
      <VolumeDown $size={iconSize} />
    )}
  </IconButton>
);

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
  $trackSize,
  $thumbSize,
  $sliderLabelsStylePreset: $volumeControlButtonStylePreset,
  ...presets
}) => {
  const [unMutedVolume, setUnMutedVolume] = useState(volume);
  if (unMutedVolume !== volume && volume > 0) {
    setUnMutedVolume(volume);
  }
  const volumeArr = useMemo(() => [volume], [volume]);
  const onSliderChange = useCallback(([newVolume]) => onChange(newVolume), [
    onChange,
  ]);
  const minLabel = useCallback(
    () => (
      <MuteButton
        volume={volume}
        unMutedVolume={unMutedVolume}
        onChange={onChange}
        $volumeControlButtonStylePreset={$volumeControlButtonStylePreset}
      />
    ),
    [volume, unMutedVolume, onChange, $volumeControlButtonStylePreset],
  );

  const maxLabel = useCallback(
    () => (
      <IconButton
        data-testid="volumeup-button"
        tabIndex={-1}
        onClick={() => onChange(1)}
        $size={ButtonSize.Small}
        $stylePreset={
          $volumeControlButtonStylePreset || volumeControlButtonStyleDefault
        }
      >
        <VolumeUp $size={iconSize} />
      </IconButton>
    ),
    [onChange, $volumeControlButtonStylePreset],
  );

  return (
    <Slider
      vertical={vertical}
      min={0}
      max={1}
      step={0.1}
      values={volumeArr}
      onChange={onSliderChange}
      ariaLabel="Volume Control"
      dataTestId="volume-control"
      $trackSize={$trackSize}
      $thumbSize={$thumbSize}
      minLabel={minLabel}
      maxLabel={maxLabel}
      {...presets}
    />
  );
};
