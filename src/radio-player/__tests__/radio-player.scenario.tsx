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

// eslint-disable-next-line no-alert
const alert = (msg: string) => () => window.alert(msg);

export default {
  name: 'radio-player',
  children: [
    {
      name: 'recorded-radio-player',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Radio Player</StorybookHeading>
          <PlayerContainer>
            <RadioPlayer
              {...props}
              title="Sound Helix Song"
              flag={CustomFlag}
              onNextTrack={alert('Next track clicked!')}
              onPreviousTrack={alert('Previous track clicked!')}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
            />
          </PlayerContainer>
        </React.Fragment>
      ),
    },
    {
      name: 'live-radio-player',
      type: 'story',
      component: () => (
        <React.Fragment>
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
        </React.Fragment>
      ),
    },
  ],
};
