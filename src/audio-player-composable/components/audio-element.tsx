/* eslint-disable jsx-a11y/media-has-caption */
import React, {useContext} from 'react';
import {AudioPlayerContext} from '../context';

export const AudioElement = () => {
  const {src, audioRef, audioEvents, autoPlay} = useContext(AudioPlayerContext);
  const {onCanPlay, onDurationChange, onTimeUpdate} = audioEvents!;

  return (
    <audio
      ref={audioRef}
      autoPlay={autoPlay}
      src={src}
      onCanPlay={onCanPlay}
      onDurationChange={onDurationChange}
      onTimeUpdate={onTimeUpdate}
      data-testid="audio-element"
    />
  );
};
