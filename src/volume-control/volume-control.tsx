import React, {useState, useCallback, useMemo} from 'react';
import {ButtonSize} from '../button';
import {IconButton} from '../icon-button';
import {VolumeControlProps} from './types';
import {Slider} from '../slider';
import {VolumeUp, VolumeDown, VolumeMute} from '../icons';
import {IconSizeKeys, useTheme} from '../theme';
import {ScreenReaderOnly} from '../screen-reader-only/screen-reader-only';
import {getSSRId} from '../utils/get-ssr-id';
import {getTokensForVolumeControl} from './utils';
import {MQ} from '../utils/style';

interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: VolumeControlProps['onChange'];
  volumeControlButtonStylePreset?: MQ<string>;
  iconSize: IconSizeKeys;
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
    tabIndex={-1}
    onClick={() => toggleMute(volume, unMutedVolume, onChange)}
    size={size}
    overrides={{
      stylePreset: volumeControlButtonStylePreset,
      iconSize,
    }}
  >
    {volume === 0 ? <VolumeMute title="unmute" /> : <VolumeDown title="mute" />}
  </IconButton>
);

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
  overrides = {},
}) => {
  const theme = useTheme();
  const [unMutedVolume, setUnMutedVolume] = useState(volume);
  const srOnlyVolumeControl = getSSRId();
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
        tabIndex={-1}
        onClick={() => onChange(1)}
        size={buttonSize}
        overrides={{
          stylePreset: volumeControlButtonStylePreset,
          iconSize,
        }}
      >
        <VolumeUp title="max volume" />
      </IconButton>
    ),
    [buttonSize, iconSize, onChange, volumeControlButtonStylePreset],
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
      <ScreenReaderOnly id={srOnlyVolumeControl}>
        Use the arrow keys to adjust volume
      </ScreenReaderOnly>
    </React.Fragment>
  );
};
