import React from 'react';
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
  togglePlay: () => void;
  onClickBackward?: () => void;
  onClickForward?: () => void;
  $controlPresets: ControlPresets;
}

export const ControlPanel: React.FC<ControlPanelProps> = React.memo(
  ({
    onNextTrack,
    disableNextTrack,
    onPreviousTrack,
    disablePreviousTrack,
    showControls,
    isPlaying,
    onClickBackward,
    onClickForward,
    togglePlay,
    $controlPresets: {previous, replay, play, forward, next},
  }) => (
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      space="sizing030"
      flexGrow
    >
      {onPreviousTrack && (
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
      {onNextTrack && (
        <SkipNextButton
          onClick={onNextTrack}
          disabled={disableNextTrack}
          $stylePreset={next}
        />
      )}
    </Stack>
  ),
);
