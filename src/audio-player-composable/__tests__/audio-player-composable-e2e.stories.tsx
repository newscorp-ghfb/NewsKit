import * as React from 'react';
import {ButtonSize} from '../../button';
import {GridLayout} from '../../grid-layout/grid-layout';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {AudioPlayerComposable} from '../audio-player-composable';
import {AudioPlayerForwardButton} from '../components/forward-button';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerReplayButton} from '../components/replay-button';
import {AudioPlayerSeekBar} from '../components/seek-bar';
import {AudioPlayerTimeDisplay} from '../components/time-display';
import {calculateTime} from '../components/time-display/utils';

export default {
  title: 'NewsKit Light/audio-player-composable-e2e',
  component: () => 'None',
};
export const AudioPlayerE2E = () => (
  <div data-testid="audio-player-inline">
    <StorybookSubHeading>Audio player for e2e tests</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player e2e tests"
    >
      <GridLayout
        columns="0fr 40px 1fr auto 0fr 1fr"
        columnGap="space040"
        alignItems="center"
      >
        <AudioPlayerPlayPauseButton size={ButtonSize.Small} />
        <AudioPlayerTimeDisplay
          data-testid="audio-player-current-time"
          format={({currentTime}) => calculateTime(currentTime)}
        />
        <AudioPlayerSeekBar />
        <AudioPlayerTimeDisplay
          data-testid="audio-player-duration"
          format={({duration}) => calculateTime(duration)}
        />
        <AudioPlayerReplayButton size={ButtonSize.Small} />
        <AudioPlayerForwardButton size={ButtonSize.Small} />
      </GridLayout>
    </AudioPlayerComposable>
  </div>
);
AudioPlayerE2E.storyName = 'audio-player-e2e';
