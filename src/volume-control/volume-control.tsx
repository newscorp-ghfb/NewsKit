import React, {useState} from 'react';
import {StyledButton} from './styled';
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
    {volume === 0 ? (
      <VolumeMute $size={iconSize} />
    ) : (
      <VolumeDown $size={iconSize} />
    )}
  </StyledButton>
);

export const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  vertical,
  onChange,
}) => {
  const [unMutedVolume, setUnMutedVolume] = useState(volume);
  if (unMutedVolume !== volume && volume > 0) {
    setUnMutedVolume(volume);
  }
  return (
    <Slider
      vertical={vertical}
      min={0}
      max={1}
      step={0.1}
      values={[volume]}
      onChange={([newVolume]) => onChange(newVolume)}
      ariaLabel="Volume Control"
      minLabel={() => (
        <MuteButton
          volume={volume}
          unMutedVolume={unMutedVolume}
          onChange={onChange}
        />
      )}
      maxLabel={() => <VolumeUp $size={iconSize} />}
    />
  );
};
