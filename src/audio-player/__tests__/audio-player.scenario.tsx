import * as React from 'react';
import {AudioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'audio-player';

const props = {
  src: 'https://radio.talkradio.co.uk/stream',
  imgAlt: 'test image',
  title: 'title',
  live: true,
  imgSrc: 'https://via.placeholder.com/150',
  captionSrc: 'captions.vtt',
};
const podcast = {
  src:
    'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3',
  imgAlt: 'test image',
  title: 'title',
  live: false,
  imgSrc: 'https://via.placeholder.com/150',
  captionSrc: 'captions.vtt',
};

const Container = styled.div`
  width: 800px;
  margin: auto;
`;

export const component = () => (
  <Container>
    <div>
      <StorybookHeading>Player with required props</StorybookHeading>
      <AudioPlayer {...props} />
    </div>
    <div>
      <StorybookHeading>Player with all UI props</StorybookHeading>
      <AudioPlayer
        {...props}
        time="1PM to 3PM"
        description="Test description"
        live
        tags={['Tag 1', 'Tag 2']}
      />
    </div>
    <div>
      <StorybookHeading>Player with live tag</StorybookHeading>
      <AudioPlayer {...props} live />
    </div>
    <div>
      <StorybookHeading>Player that auto plays</StorybookHeading>
      <AudioPlayer {...props} autoPlay />
    </div>
    <div>
      <StorybookHeading>Player with tags</StorybookHeading>
      <AudioPlayer {...props} tags={['Tag 1', 'Tag 2']} />
    </div>
    <div>
      <StorybookHeading>Player with description</StorybookHeading>
      <AudioPlayer {...props} description="Test description" />
    </div>
    <div>
      <StorybookHeading>Player with time</StorybookHeading>
      <AudioPlayer {...props} time="1PM to 3PM" />
    </div>
    <div>
      <StorybookHeading>Player with static audio</StorybookHeading>
      <AudioPlayer {...podcast} />
    </div>
    <div>
      <StorybookHeading>Skippable player with static audio</StorybookHeading>
      <AudioPlayer
        {...podcast}
        onNextTrack={() => {}}
        onPreviousTrack={() => {}}
      />
    </div>
    <div>
      <StorybookHeading>
        Disabled Skippable Player with static audio
      </StorybookHeading>
      <AudioPlayer
        {...podcast}
        onNextTrack={() => {}}
        onPreviousTrack={() => {}}
        disableNextTrack
        disablePreviousTrack
      />
    </div>
  </Container>
);
