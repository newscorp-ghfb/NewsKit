/* eslint-disable jsx-a11y/media-has-caption */
import React, {useRef, useState, useEffect, useCallback} from 'react';
import {getTrackBackground} from 'react-range';
import {ControlPanel, PopoutButton} from './controls';
import {Slider, SliderProps} from '../slider';
import {Stack, StackDistribution, Flow} from '../stack';
import {PlayerGrid, ControlContainer, PlayerContainer} from './styled';
import {VolumeControl} from '../volume-control';
import {Cell} from '../grid/cell';
import {formatTrackTime, formatTrackData, formatDuration} from './utils';
import {StyledTrack} from '../slider/styled';
import {useTheme} from '../themes/emotion';

import {getSingleStylePreset} from '../utils/style-preset';
import {LabelPosition} from '../slider/types';
import {AudioPlayerProps} from './types';
import {useAudioFunctions} from './audio-functions';
import {StackChild} from '../stack-child';

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const {
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack = !onPreviousTrack,
    popoutHref,
    $volumePresets,
    $trackPresets,
    $controlPresets,
    src,
    autoPlay,
    children,
    live = false,
    captionSrc,
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

  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [displayDuration, setDisplayDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  const [isPlaying, setPlayState] = useState(false);
  const [buffered, setBuffered] = useState<TimeRanges>();
  const [isPrevTrackBtnDisabled, setIsPrevTrackBtnDisabled] = useState(
    Boolean(disablePreviousTrack),
  );

  const trackPositionRef = useRef(0);
  useEffect(() => {
    [trackPositionRef.current] = trackPositionArr;
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTrackPosition([0]);
    setDisplayDuration(0);
  }, [src]);

  const {
    onClickPrevious,
    onClickNext,
    onClickBackward,
    onClickForward,
    onPopoutClick,
    togglePlay,
    onPlay,
    onPause,
    onProgress,
    onDurationChange,
    onTimeUpdate,
    onVolumeChange,
    onEnded,
    onChangeSlider,
    onChangeVolumeSlider,
  } = useAudioFunctions({
    onPreviousTrack,
    onNextTrack,
    autoPlay,
    disablePreviousTrack,
    src,
    live,
    duration,
    isPlaying,
    trackPositionRef,
    audioRef,
    setTrackPosition,
    setPlayState,
    setVolume,
    setDuration,
    setBuffered,
    setDisplayDuration,
    setIsPrevTrackBtnDisabled,
  });

  const theme = useTheme();
  const renderTrack: SliderProps['renderTrack'] = useCallback(
    ({props: trackProps, children: trackChildren, isDragged}) => {
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
    },
    [
      buffered,
      duration,
      theme,
      trackPositionArr,
      trackPresets.$bufferingStylePreset,
      trackPresets.$sliderIndicatorTrackStylePreset,
      trackPresets.$sliderTrackStylePreset,
    ],
  );

  const showControls = !live;
  const formattedDuration = showControls ? formatDuration(displayDuration) : '';
  const formattedTime = showControls
    ? formatTrackTime(trackPositionArr[0], duration)
    : '';

  const seekBarAriaValueText = (seekTime: number[]) => {
    const time = new Date(seekTime[0] * 1000)
      .toISOString()
      .substr(11, 8)
      .split(':');
    return `${time[0]} hour ${time[1]} minutes ${time[2]} seconds`;
  };

  return (
    <PlayerContainer aria-label="audio player">
      <PlayerGrid
        xsMargin="sizing000"
        xsColumnGutter="sizing000"
        xsRowGutter="sizing000"
      >
        <audio
          ref={audioRef}
          src={src}
          onPlay={onPlay}
          onPause={onPause}
          onVolumeChange={onVolumeChange}
          onDurationChange={onDurationChange}
          onTimeUpdate={onTimeUpdate}
          onProgress={onProgress}
          onEnded={onEnded}
          data-testid="audio-element"
          autoPlay={autoPlay}
          {...restProps}
        >
          {captionSrc && <track kind="captions" src={captionSrc} />}
        </audio>

        {children && <Cell xs={12}>{children}</Cell>}

        <Cell xsOrder={2} xs={12}>
          <Stack
            flow={Flow.HorizontalCenter}
            stackDistribution={StackDistribution.SpaceBetween}
          >
            <StackChild order={2}>
              <ControlPanel
                onNextTrack={onNextTrack ? onClickNext : undefined}
                disableNextTrack={disableNextTrack}
                onPreviousTrack={onClickPrevious}
                disablePreviousTrack={isPrevTrackBtnDisabled}
                live={live}
                showControls={showControls}
                isPlaying={isPlaying}
                onClickBackward={onClickBackward}
                onClickForward={onClickForward}
                togglePlay={togglePlay}
                $controlPresets={controlPresets}
              />
            </StackChild>
            <StackChild order={1}>
              <ControlContainer $playerTrackSize="sizing050" xs sm>
                <VolumeControl
                  volume={volume}
                  onChange={onChangeVolumeSlider}
                  $trackSize="sizing010"
                  $thumbSize="sizing040"
                  {...volumePresets}
                />
              </ControlContainer>
            </StackChild>
            <StackChild order={3}>
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
            </StackChild>
          </Stack>
        </Cell>

        {showControls && (
          <Cell xsOrder={1} xs={12}>
            <Slider
              min={0}
              minLabel={formattedTime}
              max={duration || 1}
              maxLabel={formattedDuration}
              values={trackPositionArr}
              step={1}
              ariaLabel="seek bar"
              ariaValueText={`${seekBarAriaValueText(
                trackPositionArr,
              )} of ${seekBarAriaValueText([duration])}`}
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
      </PlayerGrid>
    </PlayerContainer>
  );
};
