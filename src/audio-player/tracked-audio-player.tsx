import React, {useState} from 'react';
import {AudioPlayer} from './audio-player';
import {AudioElementProps, PlayerMetaProps} from './meta';

export interface TrackedAudioPlayerProps {
  trackList: Array<AudioElementProps & PlayerMetaProps>;
  trackPosition?: number;
}

export const TrackedAudioPlayer: React.FC<TrackedAudioPlayerProps> = ({
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
    <AudioPlayer
      {...trackList[currentTrack]}
      autoPlay={autoPlay}
      onNextTrack={onNextTrack}
      disableNextTrack={disableNextTrack}
      onPreviousTrack={onPreviousTrack}
      disablePreviousTrack={disablePreviousTrack}
    />
  );
};
