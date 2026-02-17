/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {AudioElementProps} from '../types';

export const AudioElement: React.FC<AudioElementProps> = ({
  isHlsStream,
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
  ...props
}) => (
  <audio
    ref={audioRef}
    autoPlay={autoPlay}
    data-testid="audio-element"
    {...(!isHlsStream && {src})} // Only set src for non-HLS streams, as HLS is handled separately by the hls.js library
    onCanPlay={onCanPlay}
    onWaiting={onWaiting}
    onPlay={onPlay}
    onPause={onPause}
    onEnded={onEnded}
    onDurationChange={onDurationChange}
    onTimeUpdate={onTimeUpdate}
    onProgress={onProgress}
    onVolumeChange={onVolumeChange}
    {...props}
  />
);
