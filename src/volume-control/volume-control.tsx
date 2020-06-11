import React, {useState, useCallback, useMemo} from 'react';
import {ButtonSize} from '../button';
import {IconButton} from '../icon-button';
import {VolumeControlProps} from './types';
import {Slider} from '../slider';
import {VolumeUp, VolumeDown, VolumeMute} from '../icons';
import {IconSizeKeys} from '../themes';
import {ScreenReaderOnly} from '../screen-reader-only/screen-reader-only';
import {getBuiId} from '../utils/get-bui-id';

interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: VolumeControlProps['onChange'];
  volumeControlButtonStylePreset?: string;
}

const iconSize: IconSizeKeys = 'iconSize020';
const volumeControlButtonStyleDefault = 'iconButtonMinimalPrimary';

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
}) => (
  <IconButton
    data-testid="mute-button"
    tabIndex={-1}
    onClick={() => toggleMute(volume, unMutedVolume, onChange)}
    size={ButtonSize.Small}
    overrides={{
      stylePreset:
        volumeControlButtonStylePreset || volumeControlButtonStyleDefault,
    }}
  >
    {volume === 0 ? (
      <VolumeMute size={iconSize} title="unmute" />
    ) : (
      <VolumeDown size={iconSize} title="mute" />
    )}
  </IconButton>
);

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
  trackSize,
  thumbSize,
  sliderLabelsStylePreset: volumeControlButtonStylePreset,
  ...presets
}) => {
  const [unMutedVolume, setUnMutedVolume] = useState(volume);
  const srOnlyVolumeControl = getBuiId();

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
        volumeControlButtonStylePreset={volumeControlButtonStylePreset}
      />
    ),
    [volume, unMutedVolume, onChange, volumeControlButtonStylePreset],
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
        tabIndex={-1}
        onClick={() => onChange(1)}
        size={ButtonSize.Small}
        overrides={{
          stylePreset:
            volumeControlButtonStylePreset || volumeControlButtonStyleDefault,
        }}
      >
        <VolumeUp size={iconSize} title="max volume" />
      </IconButton>
    ),
    [onChange, volumeControlButtonStylePreset],
  );

  return (
    <React.Fragment>
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
        trackSize={trackSize}
        thumbSize={thumbSize}
        minLabel={minLabel}
        maxLabel={maxLabel}
        onKeyDown={toggleMuteWithKeys}
        ariaDescribedBy={srOnlyVolumeControl}
        {...presets}
      />
      <ScreenReaderOnly id={srOnlyVolumeControl}>
        Use the arrow keys to adjust volume
      </ScreenReaderOnly>
    </React.Fragment>
  );
};
