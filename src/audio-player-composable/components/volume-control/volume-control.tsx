import React, {useCallback, useState} from 'react';
import {ScreenReaderOnly} from '../../../screen-reader-only';
import {Slider} from '../../../slider';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {getTokensForVolumeControl, useInitialVolume} from './utils';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {MuteButton} from './mute-button';
import {useTheme} from '../../../theme';
import stylePresets from './style-presets';
import {AudioPlayerVolumeControlProps} from './types';
import {GridLayoutItem} from '../../../grid-layout';
import {
  StyledGridLayout,
  StyledGridLayoutItem,
  VolumeSliderContainer,
} from './styled';

const ThemelessAudioPlayerVolumeControl: React.FC<AudioPlayerVolumeControlProps> = props => {
  const {getVolumeControlProps} = useAudioPlayerContext();
  const {
    volume,
    onChange,
    vertical,
    collapsed = false,
    muteKeyboardShortcuts,
    overrides,
    initialVolume,
  } = getVolumeControlProps!(props);

  const [unMutedVolume, setUnMutedVolume] = useState(volume);

  // Saves the volume into a state,
  // for re-using it when clicking the mute unmute button.
  if (unMutedVolume !== volume && volume > 0) {
    setUnMutedVolume(volume);
  }

  const theme = useTheme();
  const {
    sliderTrackStylePreset,
    trackSize,
    sliderIndicatorTrackStylePreset,
    sliderThumbStylePreset,
    thumbSize,
    volumeControlButtonStylePreset,
    iconSize,
    buttonSize,
  } = getTokensForVolumeControl(theme, overrides);

  const onSliderChange = useCallback(([newVolume]) => onChange(newVolume), [
    onChange,
  ]);

  // useInitialVolume Sets the initial volume on page load
  useInitialVolume({onChange, initialVolume});

  const verticalAreas = `slider
                         muteButton`;
  const gridAreas = vertical ? verticalAreas : `muteButton slider`;
  const gridColumns = vertical ? '1fr' : 'auto 1fr';

  return (
    <StyledGridLayout
      columns={gridColumns}
      areas={gridAreas}
      justifyItems={vertical ? 'center' : 'start'}
      alignItems="center"
      vertical={vertical}
    >
      <GridLayoutItem area="muteButton">
        <MuteButton
          volume={volume}
          unMutedVolume={unMutedVolume}
          volumeControlButtonStylePreset={volumeControlButtonStylePreset}
          onChange={onChange}
          size={buttonSize}
          iconSize={iconSize}
          muteKeyboardShortcuts={muteKeyboardShortcuts}
        />
      </GridLayoutItem>
      {!collapsed && (
        <StyledGridLayoutItem area="slider" vertical={vertical}>
          <VolumeSliderContainer vertical={vertical}>
            <Slider
              vertical={vertical}
              min={0}
              max={1}
              step={0.1}
              values={[volume]}
              onChange={onSliderChange}
              ariaLabel="Volume Control"
              ariaValueText={`volume level ${[volume][0] * 10} of 10`}
              dataTestId="volume-control-slider"
              ariaDescribedBy="volume-control-sr-only-message"
              overrides={{
                track: {
                  stylePreset: sliderTrackStylePreset,
                  size: trackSize,
                },
                indicator: {
                  stylePreset: sliderIndicatorTrackStylePreset,
                },
                thumb: {
                  stylePreset: sliderThumbStylePreset,
                  size: thumbSize,
                },
              }}
            />
            <ScreenReaderOnly
              id="volume-control-sr-only-message"
              aria-hidden="true"
            >
              Use the arrow keys to adjust volume
            </ScreenReaderOnly>
          </VolumeSliderContainer>
        </StyledGridLayoutItem>
      )}
    </StyledGridLayout>
  );
};

export const AudioPlayerVolumeControl = withOwnTheme(
  ThemelessAudioPlayerVolumeControl,
)({defaults, stylePresets});
