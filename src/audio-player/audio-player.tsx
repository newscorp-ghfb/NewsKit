import React, {
  useRef,
  useState,
  ChangeEvent,
  useCallback,
  useEffect,
} from 'react';
import {getTrackBackground} from 'react-range';
import {
  TrackControlProps,
  ControlPanel,
  ControlPresets,
  PopoutButton,
} from './controls';
import {AudioElement} from './audio-element';
import {SliderStylePresets, Slider, SliderProps} from '../slider';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerContainer, ControlContainer} from './styled';
import {VolumeControl} from '../volume-control';
import {Cell} from '../grid/cell';
import {formatTrackTime, formatTrackData, getMediaSegment} from './utils';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';

import calculateStringPercentage from '../utils/calculate-string-percentage';
import {getSingleStylePreset} from '../utils/style-preset';
import {
  EventTrigger,
  withInstrumentation,
  InstrumentationEvent,
} from '../instrumentation';
import {LabelPosition} from '../slider/types';

const {version} = require('../../package.json');

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  $volumePresets?: SliderStylePresets;
  $trackPresets?: SliderStylePresets & {$bufferingStylePreset?: string};
  $controlPresets?: Partial<ControlPresets>;
  autoplay?: boolean;
  live?: boolean;
  time?: string;
}

export interface InstrumentedAudioPlayerProps extends AudioPlayerProps {
  fireEvent: (event: InstrumentationEvent) => void;
}

const InternalAudioPlayer: React.FC<InstrumentedAudioPlayerProps> = props => {
  const {
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    popoutHref,
    $volumePresets,
    $trackPresets,
    $controlPresets,
    src,
    autoplay,
    children,
    live = false,
    fireEvent,
    ...restProps
  } = props;

  const volumePresets: Required<AudioPlayerProps['$volumePresets']> = {
    $sliderIndicatorTrackStylePreset: 'volumeControlTrackIndicator',
    $sliderThumbStylePreset: 'volumeControlThumb',
    $sliderLabelsStylePreset: 'volumeControlButtons',
    $sliderThumbLabelStylePreset: 'volumeControlLabels',
    $sliderTrackStylePreset: 'volumeControlTrack',
    ...$volumePresets,
  };
  const trackPresets: Required<AudioPlayerProps['$trackPresets']> = {
    $sliderIndicatorTrackStylePreset: 'audioPlayerSeekBarIndicator',
    $sliderThumbStylePreset: 'audioPlayerThumb',
    $sliderLabelsStylePreset: 'audioPlayerLabels',
    $sliderThumbLabelStylePreset: 'audioPlayerLabels',
    $sliderTrackStylePreset: 'audioPlayerSeekBarTrack',
    $bufferingStylePreset: 'audioPlayerSeekBarBuffering',
    ...$trackPresets,
  };
  const controlPresets: Required<AudioPlayerProps['$controlPresets']> = {
    previous: 'audioPlayerControlButton',
    replay: 'audioPlayerControlButton',
    play: 'audioPlayerPlayPauseButton',
    forward: 'audioPlayerControlButton',
    next: 'audioPlayerControlButton',
    popout: 'audioPlayerControlButton',
    ...$controlPresets,
  };

  const [isFirstVolumeLoad, setIsFirstVolumeLoad] = useState(true);
  const [volume, setVolume] = useState(0.7);
  const [duration, setDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [isPlaying, setPlayState] = useState(false);
  const [buffered, setBuffered] = useState<TimeRanges>();

  const [trackPosition] = trackPositionArr;
  const trackPositionRef = useRef(0);

  useEffect(() => {
    trackPositionRef.current = trackPosition;
  });
  useEffect(() => {
    setDuration(0);
  }, [src]);

  const getTrackingInformation = useCallback(
    (
      originator: string,
      eventTrigger: EventTrigger,
      eventSpecificInfo?: object,
    ) => {
      const trackingInformation = {
        originator,
        trigger: eventTrigger,
        media_player: `newskit-audio-player-${version}`,
        media_type: 'audio',
        ...eventSpecificInfo,
      };

      if (live === false) {
        return {
          ...trackingInformation,
          media_duration: formatTrackTime(duration),
          media_milestone: calculateStringPercentage(
            trackPositionRef.current,
            duration,
          ),
          media_segment: getMediaSegment(duration, trackPositionRef.current),
          media_offset: formatTrackTime(trackPositionRef.current),
        };
      }
      return trackingInformation;
    },
    [duration, live],
  );

  const onVolumeChange: EventListener = event => {
    if (
      localStorage.getItem('newskit-audioplayer-volume') &&
      isFirstVolumeLoad
    ) {
      const localStorageVolume = Number(
        localStorage.getItem('newskit-audioplayer-volume'),
      );
      setVolume(localStorageVolume);
    } else {
      const newVolume = String(event.target.volume);
      localStorage.setItem('newskit-audioplayer-volume', newVolume);
    }

    /* istanbul ignore next */
    if (isFirstVolumeLoad) setIsFirstVolumeLoad(false);
  };

  /**
   * audio src duration handler
   */
  const onDurationChange: EventListener = event =>
    setDuration(event.target.duration);

  /**
   * audio playback handlers
   */
  const onPlay = () => {
    let trackingInformation = getTrackingInformation(
      'audio-player-audio',
      EventTrigger.Start,
    );
    if (autoplay) fireEvent(trackingInformation);

    if (!isPlaying) {
      setPlayState(true);

      trackingInformation = getTrackingInformation(
        'audio-player-play-button',
        EventTrigger.Click,
      );
      fireEvent(trackingInformation);
    }
  };

  const pausePlayback = () => {
    setPlayState(false);
  };

  const firePauseTrackingInformation = () => {
    const originator = live
      ? 'audio-player-stop-button'
      : 'audio-player-pause-button';

    const trackingInformation = getTrackingInformation(
      originator,
      EventTrigger.Click,
    );
    fireEvent(trackingInformation);
  };

  const onPause = () => {
    // The following if statement is needed for avoiding edge cases with keyboard interactions
    /* istanbul ignore if */
    if (!isPlaying) return;
    pausePlayback();
    firePauseTrackingInformation();
  };

  const firePopoutTrackingInformation = () => {
    const trackingInformation = getTrackingInformation(
      'audio-player-popout',
      EventTrigger.Click,
    );
    fireEvent(trackingInformation);
  };

  const onPopoutClick = () => {
    if (isPlaying) {
      pausePlayback();
    }
    firePopoutTrackingInformation();
  };

  const togglePlay = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */

  const onProgress: EventListener = event => {
    setBuffered(event.target.buffered);
  };

  // newTime is a prop used to force the player to change time (used to change via slider)
  // it does not maintain the audio element current time
  const [newTime, setNewPlayerTime] = useState(-1);

  const onTimeUpdate: EventListener = event => {
    const eventTime = Math.round(event.target.currentTime);
    if (trackPositionRef.current !== eventTime) {
      setTrackPosition([eventTime]);

      const trackingInformation = getTrackingInformation(
        'audio-player-audio',
        EventTrigger.Pulse,
      );
      fireEvent(trackingInformation);
    }
    // Used to reset newTime after the player changes time. Used to fix issues regarding consecutive audio time change to the same value
    if (newTime !== -1) {
      setNewPlayerTime(-1);
    }
  };

  const onChangeAudioTime = useCallback(
    (playerTime: number) => {
      let newPlayerTime = playerTime;

      if (newPlayerTime < 0) {
        newPlayerTime = 0;
      }
      if (newPlayerTime > duration) {
        newPlayerTime = duration;
      }

      setTrackPosition([newPlayerTime]);
      // This sets a prop on the audio element, forcing it to a new time
      // We let player maintain its play time state, we just control the new time to set to when changing it via slider.
      setNewPlayerTime(newPlayerTime);
    },
    [setTrackPosition, duration],
  );

  const onChangeSlider = useCallback(
    ([value]: number[]) => {
      onChangeAudioTime(value);
    },
    [onChangeAudioTime],
  );

  const onClickPrevious = useCallback(() => {
    if (trackPositionRef.current > 5) {
      onChangeAudioTime(0);
    } else {
      onPreviousTrack!();
    }
  }, [onPreviousTrack, onChangeAudioTime]);

  const onClickNext = useCallback(() => {
    onNextTrack!();
  }, [onNextTrack]);

  const onClickBackward = useCallback(() => {
    onChangeAudioTime(trackPositionRef.current - 10);
    const trackingInformation = getTrackingInformation(
      'audio-player-skip-backward',
      EventTrigger.Click,
      {event_navigation_name: 'backward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, onChangeAudioTime]);

  const onClickForward = useCallback(() => {
    onChangeAudioTime(trackPositionRef.current + 10);

    const trackingInformation = getTrackingInformation(
      'audio-player-skip-forward',
      EventTrigger.Click,
      {event_navigation_name: 'forward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, onChangeAudioTime]);

  const onEnded = useCallback(() => {
    const trackingInformation = getTrackingInformation(
      'audio-complete',
      EventTrigger.End,
    );
    fireEvent(trackingInformation);
  }, [getTrackingInformation, fireEvent]);

  const theme = useTheme();
  const renderTrack: SliderProps['renderTrack'] = ({
    props: trackProps,
    children: trackChildren,
    isDragged,
  }) => {
    const {values, colors} = formatTrackData(
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$sliderTrackStylePreset,
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$sliderIndicatorTrackStylePreset,
      ),
      getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackPresets.$bufferingStylePreset,
      ),
      trackPositionArr,
      buffered,
    );

    return (
      <StyledTrack
        {...trackProps}
        values={trackPositionArr}
        isDragged={isDragged}
        $stylePreset={trackPresets.$sliderTrackStylePreset}
        $trackSize="sizing020"
        $thumbSize="sizing040"
        style={{
          background: getTrackBackground({
            values,
            colors,
            min: 0,
            max: duration,
          }),
        }}
        data-testid="audio-slider-track"
      >
        {trackChildren}
      </StyledTrack>
    );
  };

  const showControls = !live;
  const formattedDuration = showControls ? formatTrackTime(duration) : '';
  const formattedTime = showControls
    ? formatTrackTime(trackPosition, duration)
    : '';

  return (
    <PlayerContainer
      xsMargin="sizing000"
      xsColumnGutter="sizing000"
      xsRowGutter="sizing000"
    >
      <AudioElement
        src={src}
        onPlay={onPlay}
        onPause={onPause}
        playing={isPlaying}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
        onProgress={onProgress}
        onVolumeChange={onVolumeChange}
        onEnded={onEnded}
        data-testid="audio-player"
        volume={volume}
        newTime={newTime}
        {...restProps}
      />

      {children && <Cell xs={12}>{children}</Cell>}

      {showControls && (
        <Cell xs={12}>
          <Slider
            min={0}
            minLabel={formattedTime}
            max={duration || 1}
            maxLabel={formattedDuration}
            values={trackPositionArr}
            step={1}
            $thumbSize="sizing040"
            $trackSize="sizing020"
            onChange={onChangeSlider}
            renderTrack={renderTrack}
            labelPosition={LabelPosition.After}
            dataTestId="audio-slider"
            {...trackPresets}
          />
        </Cell>
      )}

      <Cell xs={12}>
        <Stack
          flow={Flow.HorizontalCenter}
          stackDistribution={StackDistribution.SpaceBetween}
        >
          <ControlContainer $playerTrackSize="sizing050" xs sm>
            <VolumeControl
              volume={volume}
              onChange={setVolume}
              $trackSize="sizing010"
              $thumbSize="sizing040"
              {...volumePresets}
            />
          </ControlContainer>
          <ControlPanel
            onNextTrack={onNextTrack ? onClickNext : undefined}
            disableNextTrack={disableNextTrack}
            onPreviousTrack={onPreviousTrack ? onClickPrevious : undefined}
            disablePreviousTrack={disablePreviousTrack}
            showControls={showControls}
            isPlaying={isPlaying}
            onClickBackward={onClickBackward}
            onClickForward={onClickForward}
            togglePlay={togglePlay}
            $controlPresets={controlPresets}
          />
          <ControlContainer $playerTrackSize="sizing050" xs sm>
            <Stack
              flow={Flow.VerticalRight}
              stackDistribution={StackDistribution.End}
            >
              {popoutHref && (
                <PopoutButton
                  onClick={onPopoutClick}
                  href={popoutHref}
                  $stylePreset={controlPresets.popout}
                />
              )}
            </Stack>
          </ControlContainer>
        </Stack>
      </Cell>
    </PlayerContainer>
  );
};

export const AudioPlayer: React.FC<AudioPlayerProps> = withInstrumentation<
  AudioPlayerProps
>(props => <InternalAudioPlayer {...props} />);
