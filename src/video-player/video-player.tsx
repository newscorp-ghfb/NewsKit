import React, {useEffect} from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {VideoPlayerWrapper} from './styled';
import {VideoPlayerProps} from './types';

const getBrightcoveUrl = (accountID: string, playerID: string) =>
  `https://players.brightcove.net/${accountID}/${playerID}_default/index.min.js`;

const ThemelessVideoPlayer = React.forwardRef<
  HTMLVideoElement,
  VideoPlayerProps
>(({config, overrides}, ref) => {
  const {
    'data-account': accountID,
    'data-player': playerID,
    'data-video-id': videoID,
    'data-playlist-id': playListID,
  } = config;
  const id =
    playListID !== undefined && videoID === undefined
      ? `bc-video-${playListID}`
      : `bc-video-${videoID}`;

  useEffect(() => {
    const src = getBrightcoveUrl(accountID, playerID);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.head.appendChild(script);
    // To be ignored in coverage as jest does not execute the script tags or load scripts
    /* istanbul ignore next */
    script.onload = () => {
      /* istanbul ignore else */
      if (window.videojs) {
        window.videojs.getPlayer(id).ready(function () {
          // @ts-ignore
          const player = this;
          /* istanbul ignore else */
          if (ref && 'current' in ref) {
            // eslint-disable-next-line no-param-reassign
            ref.current = player;
          }
        });
      }
    };
  }, [accountID, playerID, id, ref]);

  return (
    <VideoPlayerWrapper overrides={overrides}>
      <video // eslint-disable-line jsx-a11y/media-has-caption
        id={id}
        className="video-js vjs-fluid"
        data-testid="bc-video-player"
        {...config}
      />
    </VideoPlayerWrapper>
  );
});

export const VideoPlayer = withOwnTheme(ThemelessVideoPlayer)({
  defaults,
  stylePresets,
});
