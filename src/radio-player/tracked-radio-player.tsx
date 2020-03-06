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
  const [autoPlay, setAutoPlay] = useState(false);
  const disableNextTrack = trackList.length - 1 === currentTrack;
  const disablePreviousTrack = currentTrack === 0;
  const onNextTrack = () => {
    if (!disableNextTrack) {
      setCurrentTrack(currentTrack + 1);
      setAutoPlay(true);
    }
  };
  const onPreviousTrack = () => {
    if (!disablePreviousTrack) {
      setCurrentTrack(currentTrack - 1);
      setAutoPlay(true);
    }
  };

  return (
    <RadioPlayer
      {...trackList[currentTrack]}
      autoPlay={autoPlay}
      onNextTrack={onNextTrack}
      disableNextTrack={disableNextTrack}
      onPreviousTrack={onPreviousTrack}
      disablePreviousTrack={disablePreviousTrack}
    />
  );
};
