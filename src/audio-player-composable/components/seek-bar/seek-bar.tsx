import React, {useCallback} from 'react';
import {getTrackBackground} from 'react-range';
import {useAudioPlayerContext} from '../../context';
import {SeekBarProps} from './types';
import {Slider, SliderProps} from '../../../slider';
import {ScreenReaderOnly} from '../../../screen-reader-only';
import {useReactKeys} from '../../../utils/hooks';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {getToken} from '../../../utils/get-token';
import {getSingleStylePreset} from '../../../utils';
import {StyledTrack} from '../../../slider/styled';
import {withOwnTheme} from '../../../utils/with-own-theme';
import stylePresets from './style-presets';
import {useTheme} from '../../../theme';
import defaults from './defaults';
import {formatTrackData, seekBarAriaValueText} from './utils';

const ThemelessSeekBar: React.FC<SeekBarProps> = ({overrides = {}}) => {
  const {slider: seekBarSliderOverrides} = overrides;

  const theme = useTheme();
  const {
    seekBar: {slider: seekBarSliderDefaults},
  } = theme.componentDefaults;

  const {getSeekBarProps} = useAudioPlayerContext();

  const {duration, trackPosition, onChange, buffered} =
    getSeekBarProps! && getSeekBarProps();

  const [srOnlyForwardRewind] = useReactKeys(1);

  const renderTrack: SliderProps['renderTrack'] = useCallback(
    ({props: trackProps, children: trackChildren, isDragged}) => {
      const sliderTrackStylePreset = getToken(
        {theme, overrides},
        'seekBar.slider.track',
        'slider.track',
        'stylePreset',
      );

      const sliderIndicatorTrackStylePreset = getToken(
        {theme, overrides},
        'seekBar.slider.indicator',
        'slider.indicator',
        'stylePreset',
      );
      const bufferingStylePreset = getToken(
        {theme, overrides},
        'seekBar.buffering',
        'buffering',
        'stylePreset',
      );

      const {values, colors} = formatTrackData(
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          sliderTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          sliderIndicatorTrackStylePreset,
        ),
        getSingleStylePreset(
          theme,
          'base',
          'backgroundColor',
          bufferingStylePreset,
        ),
        [trackPosition],
        buffered,
      );

      return (
        <StyledTrack
          {...trackProps}
          values={[trackPosition]}
          dragged={isDragged}
          onKeyDown={e => {
            const spaceKeyCode = 32;
            /* istanbul ignore next */
            if (e.keyCode === spaceKeyCode) e.preventDefault();
          }}
          style={{
            background: getTrackBackground({
              values,
              colors,
              min: 0,
              max: Math.floor(duration),
            }),
          }}
          data-testid="audio-slider-track"
          overrides={{
            ...seekBarSliderDefaults,
            ...filterOutFalsyProperties(seekBarSliderOverrides),
          }}
        >
          {trackChildren}
        </StyledTrack>
      );
    },
    [
      buffered,
      duration,
      overrides,
      seekBarSliderDefaults,
      seekBarSliderOverrides,
      theme,
      trackPosition,
    ],
  );

  return (
    <>
      <Slider
        min={0}
        max={Math.floor(duration) || 1}
        values={[trackPosition]}
        step={1}
        ariaLabel="seek bar"
        ariaValueText={`Playback time: ${seekBarAriaValueText([
          trackPosition,
        ])} of ${seekBarAriaValueText([duration])}`}
        onChange={onChange}
        renderTrack={renderTrack}
        dataTestId="audio-slider"
        ariaDescribedBy={srOnlyForwardRewind}
        overrides={{
          ...seekBarSliderDefaults,
          ...filterOutFalsyProperties(seekBarSliderOverrides),
        }}
      />
      <ScreenReaderOnly id={srOnlyForwardRewind} aria-hidden="true">
        Use the arrow keys to fast forward or rewind
      </ScreenReaderOnly>
    </>
  );
};

export const SeekBar = withOwnTheme(ThemelessSeekBar)({
  defaults,
  stylePresets,
});
