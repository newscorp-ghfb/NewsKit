import React, {useCallback, useState} from 'react';
import {getTrackBackground} from 'react-range';
import {useAudioPlayerContext} from '../../../context';
import {Slider, SliderProps, RenderTrackFunction} from '../../../../slider';
import {StyledTrack} from '../../../../slider/styled';
import {ScreenReaderOnly} from '../../../../screen-reader-only';
import {useReactKeys} from '../../../../utils/hooks';
import {filterOutFalsyProperties} from '../../../../utils/filter-object';
import {getToken} from '../../../../utils/get-token';
import {getSingleStylePreset} from '../../../../utils';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useTheme} from '../../../../theme';
import {AudioPlayerDvrSeekBarProps} from '../types';
import defaults from './defaults';
import seekBarStylePresets from '../../seek-bar/style-presets';

const formatDvrAriaValueText = (seconds: number) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const parts = [];
  if (h > 0) parts.push(`${h} ${h === 1 ? 'hour' : 'hours'}`);
  if (h > 0 || m > 0) parts.push(`${m} ${m === 1 ? 'minute' : 'minutes'}`);
  parts.push(`${s} ${s === 1 ? 'second' : 'seconds'}`);
  return parts.join(' ');
};

const ThemelessAudioPlayerDvrSeekBar = ({
  onSeek,
  currentPosition,
  rangeStart,
  liveEdge,
  /* istanbul ignore next */
  overrides = {},
  ref,
}: AudioPlayerDvrSeekBarProps & {ref?: React.Ref<HTMLDivElement>}) => {
  useAudioPlayerContext();

  const {slider: sliderOverrides} = overrides;
  const theme = useTheme();
  const {
    audioPlayerDvrSeekBar: {slider: sliderDefaults},
  } = theme.componentDefaults;

  const [isDragging, setIsDragging] = useState(false);
  const [dragValue, setDragValue] = useState(0);

  const [srOnlyHint] = useReactKeys(1);

  const durationMs = Math.max(liveEdge - rangeStart, 0);
  const durationSeconds = Math.floor(durationMs / 1000);
  const maxValue = durationSeconds || 1;

  const currentRelativeMs = Math.max(
    0,
    Math.min(currentPosition - rangeStart, durationMs),
  );
  const currentSeconds = Math.floor(currentRelativeMs / 1000);

  const displayValue = isDragging ? dragValue : currentSeconds;

  const handleChange = useCallback(([value]: number[]) => {
    setIsDragging(true);
    setDragValue(value);
  }, []);

  const handleFinalChange = useCallback(
    ([value]: number[]) => {
      setIsDragging(false);
      const clampedSeconds = Math.min(value, durationSeconds);

      if (clampedSeconds === currentSeconds) return;

      const targetTimestamp = rangeStart + clampedSeconds * 1000;

      onSeek(targetTimestamp);
    },
    [rangeStart, onSeek, durationSeconds, currentSeconds],
  );

  const renderTrack: SliderProps['renderTrack'] = useCallback<RenderTrackFunction>(
    ({props: trackProps, children: trackChildren, isDragged}) => {
      const trackStylePreset = getToken(
        {theme, overrides},
        'audioPlayerDvrSeekBar.slider.track',
        'slider.track',
        'stylePreset',
      );

      const indicatorStylePreset = getToken(
        {theme, overrides},
        'audioPlayerDvrSeekBar.slider.indicator',
        'slider.indicator',
        'stylePreset',
      );

      const trackColor = getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackStylePreset,
      );

      const indicatorColor = getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        indicatorStylePreset,
      );

      return (
        <StyledTrack
          {...trackProps}
          values={[displayValue]}
          dragged={isDragged}
          onKeyDown={(e: React.KeyboardEvent) => {
            /* istanbul ignore next */
            if (e.keyCode === 32) e.preventDefault();
          }}
          style={{
            background: getTrackBackground({
              values: [displayValue],
              colors: [indicatorColor, trackColor],
              min: 0,
              max: maxValue,
            }),
          }}
          data-testid="dvr-seek-bar-track"
          overrides={{
            ...sliderDefaults,
            ...filterOutFalsyProperties(sliderOverrides),
          }}
        >
          {trackChildren}
        </StyledTrack>
      );
    },
    [theme, overrides, sliderDefaults, sliderOverrides, displayValue, maxValue],
  );

  const elapsedText = formatDvrAriaValueText(displayValue);
  const totalText = formatDvrAriaValueText(durationSeconds);

  return (
    <>
      <Slider
        ref={ref}
        min={0}
        max={maxValue}
        values={[displayValue]}
        step={1}
        ariaLabel="DVR seek bar"
        ariaValueText={`Playback position: ${elapsedText} of ${totalText}`}
        onChange={handleChange}
        onFinalChange={handleFinalChange}
        renderTrack={renderTrack}
        dataTestId="dvr-seek-bar"
        ariaDescribedBy={srOnlyHint}
        overrides={{
          ...sliderDefaults,
          ...filterOutFalsyProperties(sliderOverrides),
        }}
      />
      <ScreenReaderOnly id={srOnlyHint} aria-hidden="true">
        Use the arrow keys to seek forward or backward
      </ScreenReaderOnly>
    </>
  );
};

export const AudioPlayerDvrSeekBar = withOwnTheme(
  ThemelessAudioPlayerDvrSeekBar,
)({
  defaults,
  stylePresets: seekBarStylePresets,
});
