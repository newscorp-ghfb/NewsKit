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
  title: 'NewsKit Light/auto-play-audio-player',
  component: () => 'None',
};

export const StoryAutoPlayAudioPlayer = () => (
  <AudioPlayerContainer>
    <AudioPlayer
      src="/audio-player-song.mp3"
      title="Auto Play Test"
      captionSrc="captions.vtt"
      ariaLandmark="audio player with autoplay"
      autoPlay
    />
  </AudioPlayerContainer>
);
StoryAutoPlayAudioPlayer.storyName = 'auto-play-audio-player';
