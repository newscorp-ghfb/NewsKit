import React, {useState} from 'react';
import {RadioPlayer, RadioPlayerProps} from './radio-player';

export interface TrackedRadioPlayerProps {
  trackList: Array<RadioPlayerProps>;
  trackPosition?: number;
}

export const TrackedRadioPlayer: React.FC<TrackedRadioPlayerProps> = ({
  trackList,
  trackPosition = 0,
}) => {
  const [currentTrack, setCurrentTrack] = useState(trackPosition);
  const disableNextTrack = trackList.length - 1 === currentTrack;
  const disablePreviousTrack = currentTrack === 0;
  const onNextTrack = () => {
    if (!disableNextTrack) {
      setCurrentTrack(currentTrack + 1);
    }
  };
  const onPreviousTrack = () => {
    if (!disablePreviousTrack) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  return (
    <RadioPlayer
      {...trackList[currentTrack]}
      onNextTrack={onNextTrack}
      disableNextTrack={disableNextTrack}
      onPreviousTrack={onPreviousTrack}
      disablePreviousTrack={disablePreviousTrack}
    />
  );
};
