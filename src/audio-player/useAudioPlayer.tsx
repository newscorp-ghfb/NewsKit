import { MutableRefObject, useRef, useState } from 'react'
import { useAudioFunctions } from './audio-functions';

// HOOK TYPES

// User can pass props to the function which can change how the audioPlayer behave.
// Custom events props (on click of the playPauseButton, autoplay, etc.)
interface useAudioPlayerProps {
  autoPlay?: boolean,
  live?: boolean
  playPauseButton?: {
    onClick: () => void;
  }
}
// 

// RETURNS TYPES

interface playPauseButtonReturnProps { 
  playing: boolean;
  canPause: boolean;
  onClick: () => void;
  loading: boolean;
}

export interface audioElementReturnProps {
  autoPlay: boolean;
  ref: any;
  onCanPlay: () => void;
}
// 

export function useAudioPlayer({
  autoPlay =  false,
  live = false,
  playPauseButton,
}: useAudioPlayerProps): {
  playPauseButtonProps: playPauseButtonReturnProps, 
  audioElementProps: audioElementReturnProps
} {
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);
  
  const [playing, setPlayState] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // @ts-ignore as we are not passing all the parameters yet.
  const {audioEvents, togglePlay} = useAudioFunctions({
    loading, 
    setLoading, 
    autoPlay, 
    audioRef, 
    playing, 
    showLoaderTimeoutRef, 
    setPlayState
  }) 

  return {
    audioElementProps: {
      autoPlay,
      ref: audioRef,
      onCanPlay: audioEvents.onCanPlay
    },
    playPauseButtonProps: {
      canPause: live,
      playing,
      onClick: () => {
        playPauseButton?.onClick()
        togglePlay()
      },
      loading: loading
    }
  }
}