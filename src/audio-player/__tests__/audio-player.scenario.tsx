import * as React from 'react';
import {AudioPlayer} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Flag} from '../../flag';
import {SaveInactive} from '../../icons/save-inactive';

const radioPlayerImage = require('./radio-player-image.png');

export const name = 'audio-player';
const CustomFlag = () => (
  <Flag $spacing="spaceInset000Squish" $stylePreset="flagMinimal">
    <SaveInactive />
    Most Popular
  </Flag>
);

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  imgAlt: 'Giles Coren, Presenter',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  flag: 'Live',
  imgSrc: radioPlayerImage,
  captionSrc: 'captions.vtt',
  time: '1pm - 3pm',
  description:
    'Inside Inside No. 9 is a companion series to the anthology of darkly comic twisted tales.',
  tags: ['Giles Coren', '02 February 2020'],
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  imgAlt: 'Giles Coren, Presenter',
  title: 'The Breakfast Show with Giles Coren',
  live: false,
  imgSrc: radioPlayerImage,
  captionSrc: 'captions.vtt',
  time: '1pm - 3pm',
  description:
    'Inside Inside No. 9 is a companion series to the anthology of darkly comic twisted tales.',
  tags: ['Giles Coren', '02 February 2020'],
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
    <StorybookHeading>Recorded Player</StorybookHeading>

    <PlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={alert('Next track clicked!')}
        onPreviousTrack={alert('Previous track clicked!')}
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
        flag={CustomFlag}
      />
    </PlayerContainer>

    <StorybookHeading>Live Player</StorybookHeading>

    <PlayerContainer>
      <AudioPlayer {...liveAudioProps} />
    </PlayerContainer>

    <StorybookHeading>Other Player Prop Variants</StorybookHeading>

    <StorybookSubHeading>Player with no skipping or popout</StorybookSubHeading>
    <PlayerContainer>
      <AudioPlayer {...recordedAudioProps} />
    </PlayerContainer>

    <StorybookSubHeading>
      Disabled Skippable Player with static audio
    </StorybookSubHeading>
    <PlayerContainer>
      <AudioPlayer
        {...recordedAudioProps}
        onNextTrack={() => {}}
        onPreviousTrack={() => {}}
        disableNextTrack
        disablePreviousTrack
      />
    </PlayerContainer>
  </div>
);
