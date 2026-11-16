import React, {useCallback, useRef, useState} from 'react';
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
import {AudioPlayerDvrSeekBarProps, DEFAULT_DVR_SEEK_STEP} from '../types';
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

const KEYBOARD_STEP_KEYS = [
  'ArrowRight',
  'ArrowUp',
  'k',
  'PageUp',
  'ArrowLeft',
  'ArrowDown',
  'j',
  'PageDown',
];

// Snaps to `anchor ± n * step` (like repeated rewind/forward presses) rather
// than to absolute multiples of `step`, keeping 0 and `max` reachable since the
// buttons clamp to them too.
const snapToAnchoredStep = (
  value: number,
  anchor: number,
  step: number,
  max: number,
) => {
  const stepped = anchor + Math.round((value - anchor) / step) * step;
  const clamped = Math.min(Math.max(stepped, 0), max);
  const distance = Math.abs(value - clamped);
  if (value < distance) return 0;
  if (max - value < distance) return max;
  return clamped;
};

const ThemelessAudioPlayerDvrSeekBar = ({
  onSeek,
  currentPosition,
  rangeStart,
  rangeEnd,
  liveEdge,
  seekStep = DEFAULT_DVR_SEEK_STEP,
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
  const dragAnchorRef = useRef<number | null>(null);
  const isKeyboardStepRef = useRef(false);

  const [srOnlyHint] = useReactKeys(1);

  const totalDurationMs = Math.max(rangeEnd - rangeStart, 0);
  const totalDurationSeconds = Math.floor(totalDurationMs / 1000);
  const maxValue = totalDurationSeconds || 1;

  const liveEdgeMs = Math.max(liveEdge - rangeStart, 0);
  const liveEdgeSeconds = Math.min(Math.floor(liveEdgeMs / 1000), maxValue);

  const currentRelativeMs = Math.max(
    0,
    Math.min(currentPosition - rangeStart, liveEdgeMs),
  );
  const currentSeconds = Math.min(
    Math.floor(currentRelativeMs / 1000),
    liveEdgeSeconds,
  );

  const displayValue = isDragging ? dragValue : currentSeconds;

  const stepSeconds = seekStep / 1000;
  // The slider moves in 1s increments; stepping is applied in handleChange so
  // it is relative to the playhead instead of the start of the range.
  const sliderStep = Math.min(stepSeconds, 1);

  const handleChange = useCallback(
    ([value]: number[]) => {
      setIsDragging(true);

      if (isKeyboardStepRef.current) {
        isKeyboardStepRef.current = false;
        // react-range moved by ±sliderStep (×10 for PageUp/PageDown).
        const keyboardSteps = (value - displayValue) / sliderStep;
        const target = displayValue + keyboardSteps * stepSeconds;
        setDragValue(Math.min(Math.max(target, 0), liveEdgeSeconds));
        return;
      }

      if (dragAnchorRef.current === null) {
        dragAnchorRef.current = currentSeconds;
      }
      setDragValue(
        snapToAnchoredStep(
          value,
          dragAnchorRef.current,
          stepSeconds,
          liveEdgeSeconds,
        ),
      );
    },
    [liveEdgeSeconds, currentSeconds, displayValue, stepSeconds, sliderStep],
  );

  const handleFinalChange = useCallback(
    ([value]: number[]) => {
      setIsDragging(false);
      dragAnchorRef.current = null;
      isKeyboardStepRef.current = false;
      const clampedSeconds = Math.min(value, liveEdgeSeconds);

      if (clampedSeconds === currentSeconds) return;

      onSeek(rangeStart + clampedSeconds * 1000);
    },
    [rangeStart, onSeek, liveEdgeSeconds, currentSeconds],
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

      const bufferingStylePreset = getToken(
        {theme, overrides},
        'audioPlayerDvrSeekBar.buffering',
        'buffering',
        'stylePreset',
      );

      const indicatorColor = getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        indicatorStylePreset,
      );

      const bufferingColor = getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        bufferingStylePreset,
      );

      const trackColor = getSingleStylePreset(
        theme,
        'base',
        'backgroundColor',
        trackStylePreset,
      );

      const playedPct = (displayValue / maxValue) * 100;
      const liveEdgePct = (liveEdgeSeconds / maxValue) * 100;

      const gradient = [
        `${indicatorColor}  0%`,
        `${indicatorColor}  ${playedPct}%`,
        `${bufferingColor}  ${playedPct}%`,
        `${bufferingColor}  ${liveEdgePct}%`,
        `${trackColor}      ${liveEdgePct}%`,
        `${trackColor}      100%`,
      ].join(', ');

      return (
        <StyledTrack
          {...trackProps}
          values={[displayValue]}
          dragged={isDragged}
          onKeyDown={(e: React.KeyboardEvent) => {
            /* istanbul ignore next */
            if (e.keyCode === 32) e.preventDefault();
          }}
          onKeyDownCapture={(e: React.KeyboardEvent) => {
            if (KEYBOARD_STEP_KEYS.includes(e.key)) {
              isKeyboardStepRef.current = true;
            }
          }}
          style={{background: `linear-gradient(to right, ${gradient})`}}
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
    [
      theme,
      overrides,
      sliderDefaults,
      sliderOverrides,
      displayValue,
      maxValue,
      liveEdgeSeconds,
    ],
  );

  const elapsedText = formatDvrAriaValueText(displayValue);
  const totalText = formatDvrAriaValueText(liveEdgeSeconds);

  return (
    <>
      <Slider
        ref={ref}
        min={0}
        max={maxValue}
        values={[displayValue]}
        step={sliderStep}
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
