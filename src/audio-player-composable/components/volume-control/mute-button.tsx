import React from 'react';
import {IconButton} from '../../../icon-button';
import {IconFilledVolumeDown, IconFilledVolumeOff} from '../../../icons';
import {useKeyboardShortcutsOnButton} from '../../utils';
import {MuteButtonProps} from './types';

const toggleMute = (
  volume: number,
  unMutedVolume: number,
  onChange: (volume: number) => void,
) => (volume === 0 ? onChange(unMutedVolume) : onChange(0));

export const MuteButton: React.FC<MuteButtonProps> = ({
  volume,
  unMutedVolume,
  onChange,
  volumeControlButtonStylePreset,
  iconSize,
  size,
  muteKeyboardShortcuts,
}) => {
  useKeyboardShortcutsOnButton({
    props: {
      keyboardShortcuts: muteKeyboardShortcuts,
      onClick: () => {
        toggleMute(volume, unMutedVolume, onChange);
      },
    },
    defaults: 'm',
  });

  return (
    <IconButton
      data-testid="mute-button"
      aria-label={volume === 0 ? 'Unmute' : 'Mute'}
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
};
