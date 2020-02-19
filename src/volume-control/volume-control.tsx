import React, {useState, useCallback, useMemo} from 'react';
import {StyledButton, StyledIconWrapper} from './styled';
import {VolumeControlProps} from './types';
import {Slider} from '../slider';
import {VolumeUp, VolumeDown, VolumeMute} from '../icons';
import {IconSizeKeys} from '../themes';

interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: VolumeControlProps['onChange'];
}

const iconSize: IconSizeKeys = 'iconSize020';

const MuteButton: React.FC<MuteButtonProps> = ({
  volume,
  unMutedVolume,
  onChange,
}) => (
  <StyledButton
    type="button"
    data-testid="mute-button"
    onClick={() => (volume === 0 ? onChange(unMutedVolume || 1) : onChange(0))}
  >
    <StyledIconWrapper>
      {volume === 0 ? (
        <VolumeMute $size={iconSize} />
      ) : (
        <VolumeDown $size={iconSize} />
      )}
    </StyledIconWrapper>
  </StyledButton>
);

const maxLabel = () => (
  <StyledIconWrapper>
    <VolumeUp $size={iconSize} />
  </StyledIconWrapper>
);

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
  $trackSize,
  $thumbSize,
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
      />
    ),
    [volume, unMutedVolume, onChange],
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
