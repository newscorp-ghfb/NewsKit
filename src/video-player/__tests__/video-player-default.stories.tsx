import React from 'react';
import {StorybookHeading} from '../../test/storybook-comps';
import {VideoPlayer} from '..';
import {
  DEFATULT_VIDEO_PLAYER_CONFIG,
  PLAYLISTS_VIDEO_PLAYER_CONFIG,
} from './config';
import {Button} from '../../button';
import {Card} from '../../card';
import {Block} from '../../block';
import {Headline} from '../../headline';
import {TextBlock} from '../../text-block';
import {LinkStandalone} from '../../link';

export default {
  title: 'Components/video-player/default',
  component: () => 'None',
  disabledRules: [
    'landmark-unique',
    'duplicate-id-aria',
    'duplicate-id-active',
  ],
};

export const StoryDefaultVideoPlayer = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const play = () => {
    const player = videoRef.current;
    if (player) {
      player.play();
    }
  };

  const pause = () => {
    const player = videoRef.current;
    if (player) {
      player.pause();
    }
  };

  return (
    <>
      <StorybookHeading>Default Video Player</StorybookHeading>
      <VideoPlayer ref={videoRef} config={DEFATULT_VIDEO_PLAYER_CONFIG} />
      <Button onClick={() => play()}>play</Button>
      <Button onClick={() => pause()}>pause</Button>
    </>
  );
};
StoryDefaultVideoPlayer.storyName = 'video-default';
StoryDefaultVideoPlayer.parameters = {
  // todo: remove arbitrary wait
  percy: {
    waitForTimeout: 5000,
  },
};

export const StoryPlaylistsVideoPlayer = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const play = () => {
    const player = videoRef.current;
    if (player) {
      player.play();
    }
  };

  const pause = () => {
    const player = videoRef.current;
    if (player) {
      player.pause();
    }
  };

  return (
    <>
      <StorybookHeading>Playlist Video Player</StorybookHeading>
      <VideoPlayer ref={videoRef} config={PLAYLISTS_VIDEO_PLAYER_CONFIG} />
      <Button onClick={() => play()}>play</Button>
      <Button onClick={() => pause()}>pause</Button>
    </>
  );
};
StoryPlaylistsVideoPlayer.storyName = 'playlist-video-default';
StoryPlaylistsVideoPlayer.parameters = {
  // todo: remove arbitrary wait
  percy: {
    waitForTimeout: 5000,
  },
};

export const StoryCardWithVideo = () => (
  <>
    <StorybookHeading>Video Player in Card</StorybookHeading>
    <Card
      layout={{xs: 'vertical', md: 'horizontal'}}
      media={() => <VideoPlayer config={DEFATULT_VIDEO_PLAYER_CONFIG} />}
      overrides={{horizontalRatio: '2:3'}}
      actions={() => (
        <LinkStandalone href="https://google.com">
          Read the full story
        </LinkStandalone>
      )}
    >
      <Block spaceStack="space030">
        <Headline kickerText="CROWDS HEAD">
          outdoors as bank holiday temps soar above 20 degrees
        </Headline>
      </Block>

      <Block>
        <TextBlock>
          The bank holiday weekend has seen some mixed weather, but as the sun
          emerged, many in the UK took the opportunity to make the most of the
          lockdown easing.
        </TextBlock>
      </Block>
    </Card>
  </>
);
StoryCardWithVideo.storyName = 'video-in-card';
StoryCardWithVideo.parameters = {
  // todo: remove arbitrary wait
  percy: {
    waitForTimeout: 5000,
  },
};
