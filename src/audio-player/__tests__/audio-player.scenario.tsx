import * as React from 'react';
import {AudioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'audio-player';

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  captionSrc: 'captions.vtt',
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
};

const PlayerContainer = styled.div`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
`;

// eslint-disable-next-line no-alert
const alert = (msg: string) => () => window.alert(msg);

export const component = () => (
  <div>
    <StorybookHeading>Recorded Audio Player</StorybookHeading>
    <PlayerContainer>
      <AudioPlayer {...recordedAudioProps} />
    </PlayerContainer>

    <StorybookHeading>Recorded Audio Player with popout link</StorybookHeading>
    <PlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
      />
    </PlayerContainer>

    <StorybookHeading>Recorded Audio Player with controls</StorybookHeading>
    <PlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={alert('Next track clicked!')}
        onPreviousTrack={alert('Previous track clicked!')}
      />
    </PlayerContainer>

    <StorybookHeading>Audio Player with disabled controls</StorybookHeading>
    <PlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={() => {}}
        onPreviousTrack={() => {}}
        disableNextTrack
        disablePreviousTrack
      />
    </PlayerContainer>

    <StorybookHeading>Live Audio Player</StorybookHeading>
    <PlayerContainer>
      <AudioPlayer {...liveAudioProps} />
    </PlayerContainer>
  </div>
);
