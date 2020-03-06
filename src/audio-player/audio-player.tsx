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
import {AudioElement, AudioHandler, AudioElementProps} from './audio-element';
import {SliderStylePresets, Slider, SliderProps} from '../slider';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerContainer, ControlContainer} from './styled';
import {VolumeControl} from '../volume-control';
import {Cell} from '../grid/cell';
import {formatTrackTime, formatTrackData} from './utils';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';
import {getSingleStylePreset} from '../utils/style-preset';
import {useInstrumentation, EventTrigger} from '../instrumentation';
import {LabelPosition} from '../slider/types';

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

export interface AudioPlayerProps extends AudioElementProps, TrackControlProps {
  popoutHref?: string;
  $volumePresets?: SliderStylePresets;
  $trackPresets?: SliderStylePresets & {$bufferingStylePreset?: string};
  $controlPresets?: Partial<ControlPresets>;
  live?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const {
    title,
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    popoutHref,
    $volumePresets,
    $trackPresets,
    $controlPresets,
    src,
    children,
    live = false,
    ...restProps
  } = props;

  const {fireEvent} = useInstrumentation();

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

  const playerRef = useRef<AudioHandler>(null);

  /**
   * audio player volume controls
   */
  const [volume, setVolume] = useState(1);
  const onVolumeChange: EventListener = event => setVolume(event.target.volume);
  const onChangeVolume = useCallback(
    (newVolume: number) => {
      const playerNode = playerRef.current;
      if (playerNode) {
        setVolume(playerNode.setVolume(newVolume));
      }
    },
    [playerRef, setVolume],
  );

  /**
   * audio src duration handler
   */
  const [duration, setDuration] = useState(0);
  const onDurationChange: EventListener = event =>
    setDuration(event.target.duration);

  // When the src changes, clear the old duration (will be set again when data loads).
  useEffect(() => {
    setDuration(0);
  }, [src]);

  /**
   * audio playback handlers
   */
  const [isPlaying, setPlayState] = useState(false);
  const play = () => {
    if (!isPlaying) {
      const playerNode = playerRef.current;
      if (playerNode) {
        playerNode.play();
        setPlayState(true);

        fireEvent({
          originator: 'audio-player',
          trigger: EventTrigger.Start,
          data: {
            src,
            title,
          },
        });
      }
    }
  };

  const pause = () => {
    if (isPlaying) {
      const playerNode = playerRef.current;
      if (playerNode) {
        playerNode.pause();
        setPlayState(false);

        fireEvent({
          originator: 'audio-player',
          trigger: EventTrigger.Stop,
          data: {
            src,
            title,
          },
        });
      }
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }

    fireEvent({
      originator: 'audio-player-play-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
  };

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [trackPosition] = trackPositionArr;
  const trackPositionRef = useRef(0);
  useEffect(() => {
    trackPositionRef.current = trackPosition;
  });

  const [buffered, setBuffered] = useState<TimeRanges>();
  const onProgress: EventListener = event => {
    setBuffered(event.target.buffered);
  };

  const onTimeUpdate: EventListener = event => {
    const eventTime = Number(event.target.currentTime.toFixed(2));
    if (trackPositionRef.current !== eventTime) {
      setTrackPosition([eventTime]);
    }
  };
  const onChangeAudioTime = useCallback(
    (newTime: number) => {
      const playerNode = playerRef.current;
      if (playerNode) {
        setTrackPosition([playerNode.setCurrentTime(newTime)]);
      }
    },
    [playerRef, setTrackPosition],
  );

  const onChangeSlider = useCallback(
    ([value]: number[]) => onChangeAudioTime(value),
    [onChangeAudioTime],
  );
  const onClickPrevious = useCallback(() => {
    if (onPreviousTrack) {
      fireEvent({
        originator: 'audio-player-skip-previous-button',
        trigger: EventTrigger.Click,
        data: {
          src,
          title,
        },
      });
      if (trackPositionRef.current > 5) {
        onChangeAudioTime(0);
      } else if (onPreviousTrack) {
        onPreviousTrack();
      }
    }
  }, [onPreviousTrack, fireEvent, src, title, onChangeAudioTime]);

  const onClickNext = useCallback(() => {
    if (onNextTrack) {
      fireEvent({
        originator: 'audio-player-skip-next-button',
        trigger: EventTrigger.Click,
        data: {
          src,
          title,
        },
      });
      onNextTrack();
    }
  }, [onNextTrack, fireEvent, src, title]);

  const onClickReplay = useCallback(() => {
    fireEvent({
      originator: 'audio-player-replay-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    onChangeAudioTime(trackPositionRef.current - 10);
  }, [fireEvent, onChangeAudioTime, src, title]);

  const onClickForward = useCallback(() => {
    fireEvent({
      originator: 'audio-player-forward-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    onChangeAudioTime(trackPositionRef.current + 10);
  }, [fireEvent, onChangeAudioTime, src, title]);

  const onEnded = useCallback(() => {
    fireEvent({
      originator: 'audio-player',
      trigger: EventTrigger.End,
      data: {
        src,
        title,
      },
    });
  }, [fireEvent, src, title]);

  /**
   * audio playback handlers
   */
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
        ref={playerRef}
        title={title}
        onPlay={play}
        onPause={pause}
        onDurationChange={onDurationChange}
        onTimeUpdate={onTimeUpdate}
        onProgress={onProgress}
        onVolumeChange={onVolumeChange}
        onEnded={onEnded}
        data-testid="audio-player"
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
              onChange={onChangeVolume}
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
            onClickReplay={onClickReplay}
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
                  onClick={pause}
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
