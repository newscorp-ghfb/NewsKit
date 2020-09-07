import React from 'react';
import {styled} from '../../utils/style';
import {ForwardButton, BackwardButton} from './forward-replay';
import {PlayerButton} from './play-pause';
import {SkipPreviousButton, SkipNextButton} from './skip-track';
import {Stack, StackDistribution, Flow} from '../../stack';
import {StackChild} from '../../stack-child';

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
  isLoading: boolean;
  togglePlay: () => void;
  onClickBackward?: () => void;
  onClickForward?: () => void;
  controlPresets: ControlPresets;
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
    controlPresets: {previous, replay, play, forward, next},
  }) => (
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      flexGrow
    >
      <ButtonsContainer
        flow={Flow.HorizontalCenter}
        spaceInline="sizing030"
        stackDistribution={
          live ? StackDistribution.Center : StackDistribution.Start
        }
      >
        <StackChild order={3}>
          <PlayerButton
            canPause={showControls}
            isPlaying={isPlaying}
            onClick={togglePlay}
            stylePreset={play}
            isLoading={isLoading}
          />
        </StackChild>
        <StackChild order={2}>
          {showControls && onClickBackward && (
            <BackwardButton onClick={onClickBackward} stylePreset={replay} />
          )}
        </StackChild>
        <StackChild order={3}>
          {showControls && onClickForward && (
            <ForwardButton onClick={onClickForward} stylePreset={forward} />
          )}
        </StackChild>

        <StackChild order={1}>
          {showControls && onPreviousTrack && (
            <SkipPreviousButton
              onClick={onPreviousTrack}
              disabled={disablePreviousTrack}
              stylePreset={previous}
            />
          )}
        </StackChild>

        <StackChild order={5}>
          {showControls && onNextTrack && (
            <SkipNextButton
              onClick={onNextTrack}
              disabled={disableNextTrack}
              stylePreset={next}
            />
          )}
        </StackChild>
      </ButtonsContainer>
    </Stack>
  ),
);
