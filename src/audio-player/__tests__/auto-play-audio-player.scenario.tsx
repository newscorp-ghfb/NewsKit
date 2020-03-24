import * as React from 'react';
import {AudioPlayer} from '..';
import {styled} from '../../utils/style';

export const name = 'auto-play-audio-player';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const component = () => (
  <Container>
    <div>
      <AudioPlayer
        src="https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3"
        title="Auto Play Test"
        captionSrc="captions.vtt"
        autoPlay
      />
    </div>
  </Container>
);
