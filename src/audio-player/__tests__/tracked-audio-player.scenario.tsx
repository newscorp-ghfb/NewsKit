import * as React from 'react';
import {TrackedAudioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'tracked-audio-player';

const podcast1 = {
  src:
    'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3',
  imgAlt: 'test image 1',
  title: 'title 1',
  live: false,
  imgSrc: 'https://via.placeholder.com/150',
  captionSrc: 'captions.vtt',
  href: 'https://www.google.com',
};

const podcast2 = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  imgAlt: 'test image 2',
  title: 'title 2',
  live: false,
  imgSrc: 'https://via.placeholder.com/150',
  captionSrc: 'captions.vtt',
  href: 'https://www.google.com',
};

const podcast3 = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  imgAlt: 'test image 3',
  title: 'title 3',
  live: false,
  imgSrc: 'https://via.placeholder.com/150',
  captionSrc: 'captions.vtt',
  href: 'https://www.google.com',
};

const audioTrackList = [podcast1, podcast2, podcast3];

const Container = styled.div`
  width: 800px;
  margin: auto;
`;

export const component = () => (
  <Container>
    <div>
      <StorybookHeading>Skippable Player with static audio</StorybookHeading>
      <TrackedAudioPlayer trackList={audioTrackList} />
    </div>
  </Container>
);
