import * as React from 'react';

import {PlayerButtonPOC} from '../controls/play-pause-poc';
import {UserCustomPlayerButtonPOC} from '../controls/user-play-pause-button';
import {AudioPOC} from '../audio';
import {AudioSeekBarPOC} from '../audio-seek-bar-poc';

export default {
  title: 'NewsKit Light/audio-player-provider-poc',
  component: () => 'None',
};

export const AudioPlayerProviderPOC = () => (
  <AudioPOC
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
    <PlayerButtonPOC onClick={() => {console.log('extra click function')}} />
    <AudioSeekBarPOC />
  </AudioPOC>
);
AudioPlayerProviderPOC.storyName = 'audio-player-poc-provider';

export const AudioPlayerProviderPOCCustom = () => (
  <AudioPOC 
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
    <UserCustomPlayerButtonPOC />
    <AudioSeekBarPOC />
  </AudioPOC>
);
AudioPlayerProviderPOCCustom.storyName = 'audio-player-poc-provider-custom';

export const AudioPlayerPOCMultypleAudioWithProvider = () => (
  <>
    <AudioPOC src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
      <PlayerButtonPOC />
      <AudioSeekBarPOC />
    </AudioPOC>
    <br />
    <br />
    <br />
    <AudioPOC src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
      <PlayerButtonPOC />
    </AudioPOC>
  </>
);

AudioPlayerPOCMultypleAudioWithProvider.storyName =
  'audio-player-poc-provider-multiple-audio';
