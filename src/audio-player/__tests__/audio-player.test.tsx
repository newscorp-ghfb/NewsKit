import {fireEvent, EventType} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';

const props = {
  src: 'https://radio.talkradio.co.uk/stream',
  imgAlt: 'test image',
  title: 'title',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'Test Description',
  time: '1PM to 3PM',
  captionSrc: 'captions.vtt',
};

describe('AudioPlayer', () => {
  test('renders player', () => {
    const fragment = renderToFragmentWithTheme(AudioPlayer);
    expect(fragment).toMatchSnapshot();
  });

  test.each(['canPlay', 'play', 'pause'])(
    'renders player after %s event fires',
    event => {
      const {getByTestId, asFragment} = renderWithTheme(
        AudioPlayer,
        props as AudioPlayerProps,
      );

      const player = getByTestId('audio-player');

      fireEvent[event as EventType](player, {});

      expect(asFragment).toMatchSnapshot();
    },
  );

  test('renders play and pause states when play button clicked', () => {
    const {getByTestId, asFragment} = renderWithTheme(
      AudioPlayer,
      props as AudioPlayerProps,
    );

    const player = getByTestId('audio-player');
    const playButton = getByTestId('audio-player-play-button');

    fireEvent.canPlay(player, {});

    // Playing state
    fireEvent.click(playButton, {});
    expect(asFragment).toMatchSnapshot();

    fireEvent.play(player, {});

    // Paused state
    fireEvent.click(playButton, {});
    expect(asFragment).toMatchSnapshot();
  });

  test('renders with live', () => {
    const fragment = renderToFragmentWithTheme(AudioPlayer, {
      ...props,
      live: true,
    } as AudioPlayerProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with tags', () => {
    const fragment = renderToFragmentWithTheme(AudioPlayer, {
      ...props,
      tags: ['Tag 1', 'Tag 2'],
    } as AudioPlayerProps);
    expect(fragment).toMatchSnapshot();
  });
});
