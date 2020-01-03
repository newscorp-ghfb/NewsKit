import * as React from 'react';
import {AudioPlayer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {styled} from '../../utils/style';

export const name = 'audio-player';

const props = {
  src: 'https://radio.talkradio.co.uk/stream',
  imgAlt: 'test image',
  title: 'title',
  imgSrc: 'https://via.placeholder.com/150',
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
        src="https://radio.talkradio.co.uk/stream"
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
      <AudioPlayer
        {...props}
        src="https://radio.talkradio.co.uk/stream"
        description="Test description"
      />
    </div>
    <div>
      <StorybookHeading>Player with time</StorybookHeading>
      <AudioPlayer
        {...props}
        src="https://radio.talkradio.co.uk/stream"
        time="1PM to 3PM"
      />
    </div>
  </Container>
);
