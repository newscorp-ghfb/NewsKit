import React from 'react';
import {fireEvent, EventType} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';
import {EventTrigger} from '../../instrumentation';

const props = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'title',
  live: true,
  captionSrc: 'captions.vtt',
  children: <div>Well hello there children!!!</div>,
};

describe('Live AudioPlayer', () => {
  test('default player', () => {
    const fragment = renderToFragmentWithTheme(AudioPlayer);
    expect(fragment).toMatchSnapshot();
  });

  test('player with popout link', () => {
    const fragment = renderToFragmentWithTheme(AudioPlayer, {
      ...props,
      href: 'https://thetimes.co.uk/',
    } as AudioPlayerProps);
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

      expect(asFragment()).toMatchSnapshot();
    },
  );

  test('renders play button with correct state when clicked', () => {
    const {src, title} = props;
    const fireEventSpy = jest.fn();
    const {getByTestId, asFragment} = renderWithImplementation(
      AudioPlayer,
      props as AudioPlayerProps,
      fireEventSpy,
    );

    const player = getByTestId('audio-player');
    const playButton = getByTestId('audio-player-play-button');

    fireEvent.canPlay(player, {});

    // Playing state
    fireEvent.click(playButton, {});
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-play-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    expect(asFragment()).toMatchSnapshot();

    fireEvent.play(player, {});

    // Paused state
    fireEvent.click(playButton, {});
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-play-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
