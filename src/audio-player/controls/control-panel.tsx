import React from 'react';
import {styled, MQ} from '../../utils/style';
import {ForwardButton, BackwardButton} from './forward-replay';
import {PlayerButton} from './play-pause';
import {SkipPreviousButton, SkipNextButton} from './skip-track';
import {Stack, StackDistribution, Flow} from '../../stack';
import {StackChild} from '../../stack-child';
import {StylePresetKeys, SizingKeys, useTheme} from '../../theme';
import {getToken} from '../../utils/get-token';

export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export interface ControlsOverrideProps {
  space?: MQ<SizingKeys>;
  previousButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  replayButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  playPauseButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  forwardButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  nextButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  popoutButton?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
}

export interface ControlPanelProps extends TrackControlProps {
  showControls: boolean;
  isPlaying: boolean;
  live: boolean;
  isLoading: boolean;
  togglePlay: () => void;
  onClickBackward?: () => void;
  onClickForward?: () => void;
  overrides?: Omit<ControlsOverrideProps, 'popoutButton'>;
}

export const ButtonsContainer = styled(Stack)`
  min-width: 316px;
`;

export const ControlPanel: React.FC<ControlPanelProps> = React.memo(
  ({
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    showControls,
    isPlaying,
    isLoading,
    live,
    onClickBackward,
    onClickForward,
    togglePlay,
    overrides,
  }) => (
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      flexGrow
    >
      <ButtonsContainer
        flow={Flow.HorizontalCenter}
        spaceInline={getToken(
          {theme: useTheme(), overrides},
          'audioPlayer.controls',
          '',
          'space',
        )}
        stackDistribution={
          live ? StackDistribution.Center : StackDistribution.Start
        }
      >
        <StackChild order={3}>
          <PlayerButton
            canPause={showControls}
            isPlaying={isPlaying}
            onClick={togglePlay}
            overrides={overrides && overrides.playPauseButton}
            isLoading={isLoading}
          />
        </StackChild>
        <StackChild order={2}>
          {showControls && onClickBackward && (
            <BackwardButton
              onClick={onClickBackward}
              overrides={overrides && overrides.replayButton}
            />
          )}
        </StackChild>
        <StackChild order={3}>
          {showControls && onClickForward && (
            <ForwardButton
              onClick={onClickForward}
              overrides={overrides && overrides.forwardButton}
            />
          )}
        </StackChild>

        <StackChild order={1}>
          {showControls && onPreviousTrack && (
            <SkipPreviousButton
              onClick={onPreviousTrack}
              disabled={disablePreviousTrack}
              overrides={overrides && overrides.previousButton}
            />
          )}
        </StackChild>

        <StackChild order={5}>
          {showControls && onNextTrack && (
            <SkipNextButton
              onClick={onNextTrack}
              disabled={disableNextTrack}
              overrides={overrides && overrides.nextButton}
            />
          )}
        </StackChild>
      </ButtonsContainer>
    </Stack>
  ),
);
