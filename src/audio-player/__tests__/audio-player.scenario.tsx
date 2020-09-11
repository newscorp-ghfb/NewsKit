import * as React from 'react';
import {AudioPlayer} from '..';
import {styled} from '../../utils/style';

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  captionSrc: 'captions.vtt',
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
};

const AudioPlayerContainer = styled.div`
  border: solid 1px red;
  max-width: 1156px;
  margin-left: auto;
  margin-right: auto;
`;

// eslint-disable-next-line no-alert
const alert = (msg: string) => () => window.alert(msg);

export default {
  name: 'audio-player',
  children: [
    {
      name: 'recorded-audio-player',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            ariaLandmark="audio player one"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-audio-player-with-onPlay',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3"
            autoPlay
            preload="auto"
            disableNextTrack
            disablePreviousTrack
            ariaLandmark="audio player two"
            onPlay={() => {}}
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-with-popout-link',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            ariaLandmark="audio player three"
            popoutHref="https://talkradio.co.uk/radioplayer/live/talkradio.html?popup=1"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'recorded-with-controls',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            onNextTrack={alert('Next track clicked!')}
            onPreviousTrack={alert('Previous track clicked!')}
            ariaLandmark="audio player four"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'with-disabled-controls',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer
            {...recordedAudioProps}
            onNextTrack={() => {}}
            onPreviousTrack={() => {}}
            disableNextTrack
            disablePreviousTrack
            ariaLandmark="audio player five"
          />
        </AudioPlayerContainer>
      ),
    },
    {
      name: 'live-audio-player',
      type: 'story',
      component: () => (
        <AudioPlayerContainer>
          <AudioPlayer {...liveAudioProps} ariaLandmark="audio player six" />
        </AudioPlayerContainer>
      ),
    },
  ],
};
