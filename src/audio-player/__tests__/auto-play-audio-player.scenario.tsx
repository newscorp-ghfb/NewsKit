import * as React from 'react';
import {AudioPlayer} from '..';
import {styled} from '../../utils/style';

const AudioPlayerContainer = styled.div`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
`;

export default {
  name: 'auto-play-audio-player',
  children: [
    {
      name: 'auto-play-audio-player',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            src="https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3"
            title="Auto Play Test"
            captionSrc="captions.vtt"
            ariaLandmark="audio player with autoplay"
            autoPlay
          />
        </AudioPlayerContainer>
      ),
    },
  ],
};
