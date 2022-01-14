import React from 'react';
import {AudioSeekBar} from '../audio-seek-bar-poc'
import {AudioElementPOC} from '../audio-element-poc'
import { PlayerButton } from '../controls/play-pause';
import { useAudioPlayer } from '../useAudioPlayer';

export default {
  title: 'NewsKit Light/audio-player-poc-hook',
  component: () => 'None',
  parameters: {eyes: {waitBeforeScreenshot: 10000}},
};

export const AudioPlayerPOC = () => {
  const {playPauseButtonProps, audioElementProps, seekBarProps} = useAudioPlayer({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps} />
    <PlayerButton {...playPauseButtonProps} />
    <AudioSeekBar {...seekBarProps}/>
  </>
)};

AudioPlayerPOC.storyName =
  'audio-player-poc-hook';

export const AudioPlayerPOCWOverrides = () => {
  const {playPauseButtonProps, audioElementProps, seekBarProps} = useAudioPlayer({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps} />
    <PlayerButton 
      {...playPauseButtonProps} 
      overrides={{
        stylePreset: {
          xs: 'buttonOutlinedNegative',
          md: 'buttonSolidPositive',
        }}}
    />
    <AudioSeekBar {...seekBarProps}/>
  </>
)};

AudioPlayerPOCWOverrides.storyName =
  'audio-player-poc-hook-overrides';

export const AudioPlayerPOCMultypleAudio = () => {
  const {
    playPauseButtonProps: playPauseButtonProps1 , 
    audioElementProps: audioElementProps1,
    seekBarProps: seekBarProps1  
  } = useAudioPlayer({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  const {playPauseButtonProps: playPauseButtonProps2, audioElementProps: audioElementProps2} = useAudioPlayer({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    playPauseButton: {
      onClick: () => {console.log('Click PlayPause custom f')}
    }
  })

  return(
  <>
    <AudioElementPOC {...audioElementProps1} />
    <PlayerButton 
      {...playPauseButtonProps1} 
    />
    <AudioSeekBar {...seekBarProps1}/>
    <br/>
    <br/>
    <br/>
    <AudioElementPOC {...audioElementProps2} />
    <PlayerButton 
      {...playPauseButtonProps2} 
    />
  </>
)};

AudioPlayerPOCMultypleAudio.storyName =
  'audio-player-poc-hook-multiple-audio';
