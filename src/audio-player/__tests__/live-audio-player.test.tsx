import React from 'react';
import {fireEvent, EventType} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
  renderWithImplementation,
} from '../../test/test-utils';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';
import {EventTrigger} from '../../instrumentation';
import {Flag} from '../../flag';
import {Circle} from '../../icons/circle';

const props = {
  src: 'https://radio.talkradio.co.uk/stream',
  imgAlt: 'test image',
  title: 'title',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'Test Description',
  time: '1PM to 3PM',
  captionSrc: 'captions.vtt',
  live: false,
};

const CustomFlag = () => (
  <Flag>
    <Circle />
    Custom Flag
  </Flag>
);

describe('Live AudioPlayer', () => {
  describe('render', () => {
    test('default player', () => {
      const fragment = renderToFragmentWithTheme(AudioPlayer);
      expect(fragment).toMatchSnapshot();
    });

    test('live player', () => {
      const fragment = renderToFragmentWithTheme(AudioPlayer, {
        ...props,
        live: true,
        flag: 'Live',
      } as AudioPlayerProps);
      expect(fragment).toMatchSnapshot();
    });

    test('with flag passed as Flag Component and Icon', () => {
      const fragment = renderToFragmentWithTheme(AudioPlayer, {
        ...props,
        live: true,
        flag: CustomFlag,
      } as AudioPlayerProps);
      expect(fragment).toMatchSnapshot();
    });

    test('player with popout link', () => {
      const fragment = renderToFragmentWithTheme(AudioPlayer, {
        ...props,
        href: 'https://thetimes.co.uk/',
      } as AudioPlayerProps);
      expect(fragment).toMatchSnapshot();
    });

    test('tagged player', () => {
      const fragment = renderToFragmentWithTheme(AudioPlayer, {
        ...props,
        tags: ['Tag 1', 'Tag 2'],
      } as AudioPlayerProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('onPlay / onPause', () => {
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
      const {src, live, title} = props;
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
          live,
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
          live,
          title,
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
