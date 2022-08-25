import React from 'react';
import {SelectionList, SelectionListOption} from '../../../selection-list';
import {Theme} from '../../../theme';
import {AudioPlayerPlaybackSpeedControlOverridesProps} from './types';
import {selectionListOptionOverrides, selectionListOverrides} from './utils';

type PlaybackSpeedListProps = {
  playbackSpeed: number;
  updateSpeed: (speed: number) => void;
  setIsOpen: (isOpen: boolean) => void;
  theme: Theme;
  overrides: AudioPlayerPlaybackSpeedControlOverridesProps;
  selectedOptionRef: React.Ref<HTMLButtonElement>;
  isInsideModal: boolean;
};

const PLAYBACK_RATE_SCALE = [0.5, 0.8, 1, 1.2, 1.5, 2];

export const PlaybackSpeedList: React.FC<PlaybackSpeedListProps> = ({
  playbackSpeed,
  updateSpeed,
  setIsOpen,
  theme,
  overrides,
  selectedOptionRef,
  isInsideModal,
}) => (
  <SelectionList
    overrides={selectionListOverrides(theme, overrides)}
    aria-label="playback speed"
  >
    {PLAYBACK_RATE_SCALE.map(speed => (
      <SelectionListOption
        ref={playbackSpeed === speed ? selectedOptionRef : undefined}
        key={speed}
        overrides={selectionListOptionOverrides(theme, overrides)}
        selected={playbackSpeed === speed}
        onClick={() => {
          updateSpeed(speed);
          if (!isInsideModal) {
            setIsOpen(false);
          }
        }}
      >
        {speed}x
      </SelectionListOption>
    ))}
  </SelectionList>
);
