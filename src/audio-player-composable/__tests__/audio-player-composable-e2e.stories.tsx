import * as React from 'react';
import {ButtonSize, Button} from '../../button';
import {GridLayout} from '../../grid-layout/grid-layout';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {AudioPlayerComposable} from '../audio-player-composable';
import {AudioPlayerForwardButton} from '../components/forward-button';
import {AudioPlayerPlayPauseButton} from '../components/play-pause-button';
import {AudioPlayerReplayButton} from '../components/replay-button';
import {AudioPlayerSeekBar} from '../components/seek-bar';
import {AudioPlayerTimeDisplay} from '../components/time-display';
import {AudioPlayerSkipNextButton} from '../components/skip-next/skip-next';
import {AudioPlayerSkipPreviousButton} from '../components/skip-previous/skip-previous';
import {calculateTime} from '../components/time-display/utils';

export default {
  title: 'NewsKit Light/audio-player-composable-e2e',
  component: () => 'None',
};

const fullAudioPlayerAreas = `
  seekBar seekBar seekBar 
  currentTime none totalTime  
  volume controls link
 `;

export const AudioPlayerE2E = () => (
  <div data-testid="audio-player-inline">
    <StorybookSubHeading>Audio player for e2e tests</StorybookSubHeading>
    <AudioPlayerComposable
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      ariaLandmark="audio player e2e tests"
    >
      <GridLayout rowGap="space020" areas={fullAudioPlayerAreas}>
        {Areas => (
          <>
            <Areas.SeekBar>
              <AudioPlayerSeekBar />
            </Areas.SeekBar>
            <Areas.CurrentTime>
              <AudioPlayerTimeDisplay
                data-testid="audio-player-current-time"
                format={({currentTime}) => calculateTime(currentTime)}
              />
            </Areas.CurrentTime>
            <Areas.TotalTime justifySelf="end">
              <AudioPlayerTimeDisplay
                data-testid="audio-player-duration"
                format={({duration}) => calculateTime(duration)}
              />
            </Areas.TotalTime>
            <Areas.Volume alignSelf="center" justifySelf="start">
              Not yet
            </Areas.Volume>
            <Areas.Link alignSelf="center" justifySelf="end">
              <Button
                href="/"
                size={ButtonSize.Small}
                overrides={{stylePreset: 'buttonOutlinedPrimary'}}
              >
                read more
              </Button>
            </Areas.Link>
            <Areas.Controls>
              <GridLayout
                columns="repeat(5, auto)"
                columnGap="space040"
                justifyContent="center"
                alignItems="center"
              >
                <AudioPlayerSkipPreviousButton />
                <AudioPlayerReplayButton />
                <AudioPlayerPlayPauseButton />
                <AudioPlayerForwardButton />
                <AudioPlayerSkipNextButton />
              </GridLayout>
            </Areas.Controls>
          </>
        )}
      </GridLayout>
    </AudioPlayerComposable>
  </div>
);
AudioPlayerE2E.storyName = 'audio-player-e2e';
AudioPlayerE2E.parameters = {eyes: {include: false}};
