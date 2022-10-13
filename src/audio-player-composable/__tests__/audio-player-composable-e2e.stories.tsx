import * as React from 'react';
import {Button} from '../../button';
import {GridLayout} from '../../grid-layout/grid-layout';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {
  AudioPlayerComposable,
  AudioPlayerForwardButton,
  AudioPlayerPlayPauseButton,
  AudioPlayerReplayButton,
  AudioPlayerSeekBar,
  AudioPlayerTimeDisplay,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
  AudioPlayerVolumeControl,
} from '..';
import {calculateTime} from '../components/time-display/utils';

export default {
  title: 'Components/audio-player-composable-e2e',
  component: () => 'None',
};

const fullAudioPlayerAreas = `
  seekBar seekBar seekBar
  currentTime none totalTime
  volume controls link
 `;

export const AudioPlayerE2E = () => {
  const [event, showEvent] = React.useState('');

  return (
    <div data-testid="audio-player-inline">
      <StorybookSubHeading>Audio player for e2e tests</StorybookSubHeading>
      <AudioPlayerComposable
        src="https://ncu-newskit-docs.s3.eu-west-1.amazonaws.com/storybook-assets/audio_file_1.mp3"
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
                <AudioPlayerVolumeControl />
              </Areas.Volume>
              <Areas.Link alignSelf="center" justifySelf="end">
                <Button
                  href="/"
                  size="small"
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
                  <AudioPlayerSkipPreviousButton
                    onClick={() => {
                      console.log('skip-previous');
                      showEvent('skip-previous');
                    }}
                  />
                  <AudioPlayerReplayButton />
                  <AudioPlayerPlayPauseButton />
                  <AudioPlayerForwardButton />
                  <AudioPlayerSkipNextButton
                    onClick={() => {
                      console.log('skip-next');
                      showEvent('skip-next');
                    }}
                  />
                </GridLayout>
              </Areas.Controls>
            </>
          )}
        </GridLayout>
      </AudioPlayerComposable>
      <div data-testid="event">{event}</div>
    </div>
  );
};
AudioPlayerE2E.storyName = 'audio-player-e2e';
AudioPlayerE2E.parameters = {eyes: {include: false}};
