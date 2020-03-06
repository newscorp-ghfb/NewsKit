import * as React from 'react';
import {RadioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';
import {Flag} from '../../flag';
import {SaveInactive} from '../../icons/save-inactive';

const CustomFlag = () => (
  <Flag $spacing="spaceInset000Squish" $stylePreset="flagMinimal">
    <SaveInactive />
    Most Popular
  </Flag>
);

const radioPlayerImage = require('./radio-player-image.png');

export const name = 'radio-player';

const props = {
  imgAlt: 'Giles Coren, Presenter',
  title: 'The Breakfast Show with Giles Coren',
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

export const component = () => (
  <div>
    <StorybookHeading>Radio Player</StorybookHeading>
    <PlayerContainer>
      <RadioPlayer
        {...props}
        flag={CustomFlag}
        onNextTrack={() => {}}
        onPreviousTrack={() => {}}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
      />
    </PlayerContainer>

    <StorybookHeading>Live Radio Player</StorybookHeading>
    <PlayerContainer>
      <RadioPlayer
        {...props}
        live
        flag="Live"
        src="https://radio.talkradio.co.uk/stream"
        popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
      />
    </PlayerContainer>
  </div>
);
