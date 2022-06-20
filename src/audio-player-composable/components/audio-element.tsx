/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {AudioElementProps} from '../types';

export const AudioElement: React.FC<AudioElementProps> = ({
  src,
  audioRef,
  autoPlay,
  onPlay,
  onCanPlay,
  onWaiting,
  onPause,
  onEnded,
  onDurationChange,
  onVolumeChange,
  onTimeUpdate,
  onProgress,
}) => (
  <audio
    ref={audioRef}
    autoPlay={autoPlay}
    src={src}
    onCanPlay={onCanPlay}
    onWaiting={onWaiting}
    onPlay={onPlay}
    onPause={onPause}
    onEnded={onEnded}
    onDurationChange={onDurationChange}
    onTimeUpdate={onTimeUpdate}
    onProgress={onProgress}
    onVolumeChange={onVolumeChange}
    data-testid="audio-element"
  />
);
