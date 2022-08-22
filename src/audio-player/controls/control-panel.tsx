import React from 'react';
import {styled, MQ} from '../../utils/style';
import {ForwardButton, BackwardButton} from './forward-replay';
import {PlayerButton} from './play-pause';
import {SkipPreviousButton, SkipNextButton} from './skip-track';
import {Stack, StackDistribution} from '../../stack';
import {StackChild} from '../../stack-child';
import {useTheme} from '../../theme';
import {getToken} from '../../utils/get-token';
import {ButtonOverrides} from '../../button';

export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export interface ControlsOverrideProps {
  space?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  previousButton?: ButtonOverrides;
  replayButton?: ButtonOverrides;
  playPauseButton?: ButtonOverrides;
  forwardButton?: ButtonOverrides;
  nextButton?: ButtonOverrides;
  popoutButton?: ButtonOverrides;
}

export interface ControlPanelProps extends TrackControlProps {
  showControls: boolean;
  playing: boolean;
  live: boolean;
  loading: boolean;
  togglePlay: () => void;
  onClickBackward?: () => void;
  onClickForward?: () => void;
  overrides?: Omit<ControlsOverrideProps, 'popoutButton'>;
}

export const ButtonsContainer = styled(Stack)`
  min-width: 100%;
`;

export const ControlPanel: React.FC<ControlPanelProps> = React.memo(
  ({
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    showControls,
    playing,
    loading,
    live,
    onClickBackward,
    onClickForward,
    togglePlay,
    overrides,
  }) => (
    <Stack
      flow="horizontal-center"
      stackDistribution={StackDistribution.Center}
      flexGrow
    >
      <ButtonsContainer
        flow="horizontal-center"
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
            playing={playing}
            onClick={togglePlay}
            overrides={overrides && overrides.playPauseButton}
            loading={loading}
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
          {showControls && (
            <SkipPreviousButton
              onClick={onPreviousTrack}
              disabled={disablePreviousTrack || !onPreviousTrack}
              overrides={overrides && overrides.previousButton}
              hide={!onPreviousTrack}
            />
          )}
        </StackChild>

        <StackChild order={3}>
          {showControls && (
            <SkipNextButton
              onClick={onNextTrack}
              disabled={disableNextTrack || !onNextTrack}
              overrides={overrides && overrides.nextButton}
              hide={!onNextTrack}
            />
          )}
        </StackChild>
      </ButtonsContainer>
    </Stack>
  ),
);
