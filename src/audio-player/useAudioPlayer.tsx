import { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { useAudioFunctions } from './audio-functions';

// HOOK TYPES

// User can pass props to the function which can change how the audioPlayer behave.
// Custom events props (on click of the playPauseButton, autoplay, etc.)
interface useAudioPlayerProps {
  src: string,
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
  src: string,
  autoPlay: boolean;
  ref: any;
  onCanPlay: () => void;
  onDurationChange: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
  onTimeUpdate: ({ target }: SyntheticEvent<HTMLAudioElement, Event>) => void;
}

export interface seekBarReturnProps {
  duration: number;
  trackPositionArr: number[];
  onChangeSlider: (values: number[]) => void;
}
// 

export function useAudioPlayer({
  src,
  autoPlay =  false,
  live = false,
  playPauseButton,
}: useAudioPlayerProps): {
  playPauseButtonProps: playPauseButtonReturnProps, 
  audioElementProps: audioElementReturnProps,
  seekBarProps: seekBarReturnProps,
} {
  
  const trackPositionRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);
  
  const [playing, setPlayState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [displayDuration, setDisplayDuration] = useState(0);
  const [buffered, setBuffered] = useState<TimeRanges>();


  useEffect(() => {
    [trackPositionRef.current] = trackPositionArr;
  });

  useEffect(() => {
    setTrackPosition([0]);
    setDisplayDuration(0);
  }, [src]);
  
  // @ts-ignore as we are not passing all the parameters yet.
  // TODO NEXT STEP the useAudioFunctions will need to require minimum props
  // based on which components we are implementing.?
  //TODO SPLIT useAudioFunctions? in multiple hooks? by component?
  const {audioEvents, togglePlay, onChangeSlider} = useAudioFunctions({
    setBuffered,
    setDisplayDuration,
    trackPositionRef,
    duration,
    setDuration,
    setLoading, 
    autoPlay, 
    audioRef, 
    playing, 
    showLoaderTimeoutRef, 
    setPlayState,
    setTrackPosition
  }) 

  return {
    audioElementProps: {
      src,
      autoPlay,
      ref: audioRef,
      onCanPlay: audioEvents.onCanPlay,
      onDurationChange: audioEvents.onDurationChange,
      onTimeUpdate: audioEvents.onTimeUpdate
    },
    playPauseButtonProps: {
      canPause: live,
      playing,
      onClick: () => {
        playPauseButton?.onClick()
        togglePlay()
      },
      loading: loading
    },
    seekBarProps: {
      duration: duration,
      trackPositionArr,
      onChangeSlider,
    }
  }
}