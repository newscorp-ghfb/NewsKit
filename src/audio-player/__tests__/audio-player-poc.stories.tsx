import React from 'react';
import {AudioElementPOC} from '../audio-element-poc'
import { PlayerButton } from '../controls/play-pause';
import { useAudioPlayer } from '../useAudioPlayer';

export default {
  title: 'NewsKit Light/audio-player-poc',
  component: () => 'None',
  parameters: {eyes: {waitBeforeScreenshot: 10000}},
};

export const AudioPlayerPOC = () => {
  const {playPauseButtonProps, audioElementProps} = useAudioPlayer({
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps} src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3" />
    <PlayerButton {...playPauseButtonProps} overrides={{}}/>
  </>
)};

AudioPlayerPOC.storyName =
  'audio-player-poc';

export const AudioPlayerPOCAuto = () => {
  const {playPauseButtonProps, audioElementProps} = useAudioPlayer({
    autoPlay: true,
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps} src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3" />
    <PlayerButton {...playPauseButtonProps} overrides={{}}/>
  </>
)};

AudioPlayerPOCAuto.storyName =
  'audio-player-poc-auto';
