import React from 'react';
import {AudioElement, AudioElementProps} from '../audio-element';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';

let mockUseRef: jest.Mock;
let mockCurrentRef: any;
jest.mock('react', () => {
  const react = jest.requireActual('react');
  // const ref = react.createRef();
  mockUseRef = jest.fn().mockReturnValue({
    get current() {
      return mockCurrentRef;
    },
    set current(x) {
      /* noop */
    },
  });
  return {
    ...react,
    useRef: mockUseRef,
  };
});

describe('AudioElement', () => {
  test('renders correctly with default props', () => {
    const fragment = renderToFragmentWithTheme(AudioElement);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with caption and src', () => {
    const fragment = renderToFragmentWithTheme(AudioElement, {
      src: 'https://radio.talkradio.co.uk/stream',
      captionSrc: 'captions.vtt',
      playing: false,
    });
    expect(fragment).toMatchSnapshot();
  });

  describe('behaves correctly', () => {
    mockCurrentRef = {
      load: jest.fn(),
      play: jest.fn(),
      pause: jest.fn(),
      seekable: {
        length: 2,
        start: (x: number) => {
          if (x !== 0) {
            throw new Error(`seekable.start called with ${x} expected 0`);
          }
          return 0;
        },
        end: (x: number) => {
          if (x !== 1) {
            throw new Error(`seekable.end called with ${x} expected 1`);
          }
          return 100;
        },
      },
      currentTime: undefined,
      volume: undefined,
      autoPlay: undefined,
    };

    const {rerender} = renderWithTheme(AudioElement, {
      playing: false,
      volume: 1,
      newTime: -1,
    });

    const resetAndReRender = (props: AudioElementProps) => {
      mockCurrentRef.load.mockReset();
      mockCurrentRef.play.mockReset();
      mockCurrentRef.pause.mockReset();
      mockCurrentRef.currentTime = undefined;
      mockCurrentRef.volume = undefined;
      mockCurrentRef.autoPlay = undefined;

      rerender(<AudioElement {...props} />);
    };

    test('on first render', () => {
      expect(mockCurrentRef.load).toHaveBeenCalled();
      expect(mockCurrentRef.pause).toHaveBeenCalled();
      expect(mockCurrentRef.play).not.toHaveBeenCalled();
      expect(mockCurrentRef.currentTime).toEqual(0);
      expect(mockCurrentRef.volume).toEqual(1);
    });

    test('rerender but keep the same audio url', () => {
      const src = 'random-audio-url';

      resetAndReRender({playing: false, src});
      expect(mockCurrentRef.load).toHaveBeenCalled();

      resetAndReRender({playing: true, src});
      expect(mockCurrentRef.load).not.toHaveBeenCalled();
    });

    test('after updating props, now playing at 20s in, and volume to 0.6', () => {
      resetAndReRender({
        playing: true,
        volume: 0.6,
        newTime: 20,
      });

      expect(mockCurrentRef.pause).not.toHaveBeenCalled();
      expect(mockCurrentRef.play).toHaveBeenCalled();
      expect(mockCurrentRef.currentTime).toEqual(20);
      expect(mockCurrentRef.volume).toEqual(0.6);
    });

    test('after updating props to invalid under-min values', () => {
      resetAndReRender({
        playing: true,
        volume: -2,
        newTime: -10,
      });

      expect(mockCurrentRef.pause).not.toHaveBeenCalled();
      expect(mockCurrentRef.currentTime).toEqual(0); // TODO : will explode heres
      expect(mockCurrentRef.volume).toEqual(0);
    });

    test('after updating props to invalid over-max values, and pause', () => {
      resetAndReRender({
        playing: false,
        volume: 11,
        newTime: 120,
      });

      expect(mockCurrentRef.pause).toHaveBeenCalled();
      expect(mockCurrentRef.play).not.toHaveBeenCalled();
      expect(mockCurrentRef.currentTime).toEqual(100);
      expect(mockCurrentRef.volume).toEqual(1);
    });

    test('and should not update time if seekable.length is 0', () => {
      mockCurrentRef.seekable.length = 0;
      resetAndReRender({
        playing: false,
        volume: 1,
        newTime: 50,
      });
      expect(mockCurrentRef.currentTime).toBeUndefined();
    });

    test('and should not call manually play or pause on initial render if autoPlay is true', () => {
      resetAndReRender({
        playing: false,
        volume: 1,
        newTime: 0,
        autoPlay: true,
      });

      expect(mockCurrentRef.play).not.toHaveBeenCalled();
      expect(mockCurrentRef.pause).not.toHaveBeenCalled();
    });
  });
});
