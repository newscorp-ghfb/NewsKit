import * as React from 'react';

import {PlayerButtonPOC} from '../controls/play-pause-poc';
import {AudioPOC} from '../audio';
import {AudioElementPOC} from '../audio-element-provider-poc';
import {AudioSeekBarPOC} from '../audio-seek-bar-poc';

export default {
  title: 'NewsKit Light/audio-player-provider-poc',
  component: () => 'None',
};

export const AudioPlayerProviderPOC = () => (
  <AudioPOC 
  // @ts-ignore withSeekBar to be implemented potentially
  withSeekBar
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
    <AudioElementPOC />
    <PlayerButtonPOC onClick={() => {console.log('extra click function')}} />
    <AudioSeekBarPOC />
  </AudioPOC>
);
AudioPlayerProviderPOC.storyName = 'audio-player-poc-provider';

export const AudioPlayerPOCMultypleAudioWithProvider = () => (
  <>
    <AudioPOC src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
      <AudioElementPOC />
      <PlayerButtonPOC />
      <AudioSeekBarPOC />
    </AudioPOC>
    <br />
    <br />
    <br />
    <AudioPOC src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
      <AudioElementPOC />
      <PlayerButtonPOC />
    </AudioPOC>
  </>
);

AudioPlayerPOCMultypleAudioWithProvider.storyName =
  'audio-player-poc-provider-multiple-audio';
