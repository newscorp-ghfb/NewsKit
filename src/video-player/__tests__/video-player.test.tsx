import {renderWithTheme} from '../../test/test-utils';
import {VideoPlayer} from '../video-player';
import {VideoPlayerProps} from '../types';
import {
  DEFATULT_VIDEO_PLAYER_CONFIG,
  PLAYLISTS_VIDEO_PLAYER_CONFIG,
} from './config';
import {createTheme} from '../../theme';

const DefaultVideoPlayerProps: VideoPlayerProps = {
  config: DEFATULT_VIDEO_PLAYER_CONFIG,
};

const PlaylistVideoPlayerProps: VideoPlayerProps = {
  config: PLAYLISTS_VIDEO_PLAYER_CONFIG,
};

const myCustomTheme = createTheme({
  name: 'video-player-theme',
  overrides: {
    stylePresets: {
      customPlaybutton: {
        base: {
          borderColor: 'red',
          borderStyle: 'solid',
          borderWidth: '{{borders.borderWidth010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          backgroundColor: '{{colors.amber050}}',
          color: '{{colors.red050}}',
        },
      },
    },
  },
});
describe('Video Player', () => {
  test('default player should render properly with data attributes', () => {
    const {getByTestId} = renderWithTheme(VideoPlayer, DefaultVideoPlayerProps);
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-account',
      DEFATULT_VIDEO_PLAYER_CONFIG['data-account'],
    );
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-video-id',
      DEFATULT_VIDEO_PLAYER_CONFIG['data-video-id'],
    );
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-player',
      DEFATULT_VIDEO_PLAYER_CONFIG['data-player'],
    );
    expect(getByTestId('bc-video-player').getAttribute('id')).toContain(
      DEFATULT_VIDEO_PLAYER_CONFIG['data-video-id'],
    );
    expect(getByTestId('bc-video-player')).toMatchSnapshot();
  });

  test('playlist player should render properly with data attributes', () => {
    const {getByTestId} = renderWithTheme(
      VideoPlayer,
      PlaylistVideoPlayerProps,
    );
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-account',
      PLAYLISTS_VIDEO_PLAYER_CONFIG['data-account'],
    );
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-playlist-id',
      PLAYLISTS_VIDEO_PLAYER_CONFIG['data-playlist-id'],
    );
    expect(getByTestId('bc-video-player')).toHaveAttribute(
      'data-player',
      PLAYLISTS_VIDEO_PLAYER_CONFIG['data-player'],
    );
    expect(getByTestId('bc-video-player').getAttribute('id')).toContain(
      PLAYLISTS_VIDEO_PLAYER_CONFIG['data-playlist-id'],
    );
    expect(getByTestId('bc-video-player')).toMatchSnapshot();
  });

  test(`renders video player with overriden play button style`, () => {
    const {asFragment} = renderWithTheme(
      VideoPlayer,
      {
        config: DEFATULT_VIDEO_PLAYER_CONFIG,
        overrides: {
          playButton: {
            stylePreset: 'customPlaybutton',
          },
        },
      },
      myCustomTheme,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders video player with logical props component defauts`, () => {
    const {asFragment} = renderWithTheme(
      VideoPlayer,
      {
        config: DEFATULT_VIDEO_PLAYER_CONFIG,
        overrides: {
          seekBar: {
            currentDuration: {
              paddingBlock: 'space030',
              paddingInline: 'space040',
            },
            seekPosition: {
              paddingBlock: 'space030',
              paddingInline: 'space040',
            },
          },
          dockText: {
            paddingInline: {
              xs: 'space030',
              md: 'space040',
            },
            paddingBlock: {
              xs: 'space030',
              md: 'space040',
            },
          },
          miniCardOverlay: {
            paddingBlock: 'space030',
            paddingInline: 'space040',
            closeButton: {
              paddingBlock: 'space020',
              paddingInline: 'space020',
            },
          },
        },
      },
      myCustomTheme,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders video player with logical props`, () => {
    const {asFragment} = renderWithTheme(
      VideoPlayer,
      {
        config: DEFATULT_VIDEO_PLAYER_CONFIG,
        overrides: {
          paddingInline: 'space020',
          paddingBlock: 'space040',
          marginBlock: 'space060',
          marginInline: 'space080',
        },
      },
      myCustomTheme,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
