/* eslint-disable jsx-a11y/media-has-caption */
import React, {useContext} from 'react';
import {AudioPlayerContext} from '../context';

export const AudioElement = () => {
  const {src, audioRef, audioEvents, autoPlay} = useContext(AudioPlayerContext);
  const {onCanPlay, onDurationChange, onTimeUpdate, onWaiting} = audioEvents!;

  return (
    <audio
      ref={audioRef}
      autoPlay={autoPlay}
      src={src}
      onCanPlay={onCanPlay}
      onDurationChange={onDurationChange}
      onWaiting={onWaiting}
      onTimeUpdate={onTimeUpdate}
      data-testid="audio-element"
    />
  );
};
