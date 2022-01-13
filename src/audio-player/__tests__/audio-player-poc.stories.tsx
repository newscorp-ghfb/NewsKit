import React from 'react';
import {AudioElementPOC} from '../audio-element-poc'
import { PlayerButton } from '../controls/play-pause';
import { useAudioPlayer } from '../useAudioPlayer';

export default {
  title: 'NewsKit Light/audio-player-poc-hook',
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
    <PlayerButton {...playPauseButtonProps} />
  </>
)};

AudioPlayerPOC.storyName =
  'audio-player-poc-hook';

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
    <PlayerButton {...playPauseButtonProps}/>
  </>
)};

AudioPlayerPOCAuto.storyName =
  'audio-player-poc-hook-auto';

export const AudioPlayerPOCAutoWOverrides = () => {
  const {playPauseButtonProps, audioElementProps} = useAudioPlayer({
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps} src="https://sphinx.acast.com/storiesofourtimes/johnpienaar-istrackandtraceworking-/media.mp3" />
    <PlayerButton {...playPauseButtonProps} overrides={{
          stylePreset: {
            xs: 'buttonOutlinedNegative',
            md: 'buttonSolidPositive',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        }}/>
  </>
)};

AudioPlayerPOCAutoWOverrides.storyName =
  'audio-player-poc-hook-overrides';
