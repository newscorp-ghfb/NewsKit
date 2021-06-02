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
  title: 'auto-play-audio-player',
  children: [
    {
      storyName: 'auto-play-audio-player',
      storyFn: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
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
