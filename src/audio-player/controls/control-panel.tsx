import React from 'react';
import {styled} from '../../utils/style';
import {ForwardButton, BackwardButton} from './forward-replay';
import {PlayerButton} from './play-pause';
import {SkipPreviousButton, SkipNextButton} from './skip-track';
import {Stack, StackDistribution, Flow} from '../../stack';

export interface TrackControlProps {
  onNextTrack?: () => void;
  disableNextTrack?: boolean;
  onPreviousTrack?: () => void;
  disablePreviousTrack?: boolean;
}

export type ControlPresets = {
  previous: string;
  replay: string;
  play: string;
  forward: string;
  next: string;
  popout: string;
};

export interface ControlPanelProps extends TrackControlProps {
  showControls: boolean;
  isPlaying: boolean;
  live: boolean;
  togglePlay: () => void;
  onClickBackward?: () => void;
  onClickForward?: () => void;
  $controlPresets: ControlPresets;
}

// TODO: recalculate min-width when PPDSC-999 is done.
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
    live,
    onClickBackward,
    onClickForward,
    togglePlay,
    $controlPresets: {previous, replay, play, forward, next},
  }) => (
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      flexGrow
    >
      <ButtonsContainer
        flow={Flow.HorizontalCenter}
        space="sizing030"
        stackDistribution={
          live ? StackDistribution.Center : StackDistribution.Start
        }
      >
        {showControls && onPreviousTrack && (
          <SkipPreviousButton
            onClick={onPreviousTrack}
            disabled={disablePreviousTrack}
            $stylePreset={previous}
          />
        )}
        {showControls && onClickBackward && (
          <BackwardButton onClick={onClickBackward} $stylePreset={replay} />
        )}
        <PlayerButton
          canPause={showControls}
          isPlaying={isPlaying}
          onClick={togglePlay}
          $stylePreset={play}
        />
        {showControls && onClickForward && (
          <ForwardButton onClick={onClickForward} $stylePreset={forward} />
        )}
        {showControls && onNextTrack && (
          <SkipNextButton
            onClick={onNextTrack}
            disabled={disableNextTrack}
            $stylePreset={next}
          />
        )}
      </ButtonsContainer>
    </Stack>
  ),
);
