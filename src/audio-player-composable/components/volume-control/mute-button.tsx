import React from 'react';
import {IconButton} from '../../../icon-button';
import {IconFilledVolumeOff, IconFilledVolumeUp} from '../../../icons';
import {getComponentOverrides} from '../../../utils/overrides';
import {useKeyboardShortcutsOnButton} from '../../utils';
import {MuteButtonIconProps, MuteButtonProps} from './types';

const toggleMute = (
  volume: number,
  unMutedVolume: number,
  onChange: (volume: number) => void,
) => (volume === 0 ? onChange(unMutedVolume) : onChange(0));

const DefaultIcon = ({volume, overrides}: MuteButtonIconProps) =>
  volume === 0 ? (
    <IconFilledVolumeOff overrides={overrides} />
  ) : (
    <IconFilledVolumeUp overrides={overrides} />
  );

export const MuteButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MuteButtonProps
>(
  (
    {volume, unMutedVolume, onChange, size, muteKeyboardShortcuts, overrides},
    ref,
  ) => {
    useKeyboardShortcutsOnButton({
      props: {
        keyboardShortcuts: muteKeyboardShortcuts,
        onClick: () => {
          toggleMute(volume, unMutedVolume, onChange);
        },
      },
      defaults: 'm',
    });

    const [MuteButtonIcon, muteButtonIconProps] = getComponentOverrides(
      overrides.muteButtonIcon,
      DefaultIcon,
      {
        volume,
      },
    );

    return (
      <IconButton
        ref={ref}
        data-testid="mute-button"
        aria-label={volume === 0 ? 'Unmute' : 'Mute'}
        onClick={() => toggleMute(volume, unMutedVolume, onChange)}
        size={size}
        overrides={overrides}
      >
        <MuteButtonIcon {...(muteButtonIconProps as MuteButtonIconProps)} />
      </IconButton>
    );
  },
);
