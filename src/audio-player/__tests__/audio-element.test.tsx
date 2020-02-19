import React from 'react';
import {AudioElement, useAudioHandler} from '../meta/audio-element';
import {renderToFragmentWithTheme, renderHook} from '../../test/test-utils';

describe('AudioElement', () => {
  describe('renders correctly', () => {
    test('default <audio>', () => {
      const fragment = renderToFragmentWithTheme(AudioElement);
      expect(fragment).toMatchSnapshot();
    });

    test('<audio> with caption', () => {
      const fragment = renderToFragmentWithTheme(AudioElement, {
        src: 'https://radio.talkradio.co.uk/stream',
        captionSrc: 'captions.vtt',
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('useAudioHandler', () => {
    let playerRef: any;
    let propRef: any;

    beforeEach(() => {
      playerRef = {
        current: {
          play: jest.fn(),
          pause: jest.fn(),
        },
      };
      propRef = React.createRef();
    });

    describe('play', () => {
      test('calls play method on player', () => {
        renderHook(() => useAudioHandler(playerRef, propRef));
        propRef.current.play();

        expect(playerRef.current.play).toHaveBeenCalled();
        expect(playerRef.current.pause).not.toHaveBeenCalled();
      });
    });

    describe('pause', () => {
      test('calls pause method on player', () => {
        renderHook(() => useAudioHandler(playerRef, propRef));
        propRef.current.pause();

        expect(playerRef.current.pause).toHaveBeenCalled();
        expect(playerRef.current.play).not.toHaveBeenCalled();
      });
    });
  });

  describe('setCurrentTime', () => {
    test('sets passed currentTime value onto the player', () => {
      const playerRef = {
        current: {
          currentTime: 0,
          seekable: {
            start: jest.fn().mockReturnValue(0),
            end: jest.fn().mockReturnValue(100),
            length: 1,
          },
        },
      } as any;
      const propRef = {
        current: {
          setCurrentTime: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const currentTime = propRef.current.setCurrentTime(50);
      expect(currentTime).toEqual(50);
      expect(playerRef.current.currentTime).toEqual(50);
      expect(playerRef.current.seekable.start).toHaveBeenCalledWith(0);
      expect(playerRef.current.seekable.end).toHaveBeenCalledWith(0);
    });
    test('does not set passed currentTime if timerange length is 0', () => {
      const playerRef = {
        current: {
          currentTime: 0,
          seekable: {
            start: jest.fn().mockReturnValue(0),
            end: jest.fn().mockReturnValue(100),
            length: 0,
          },
        },
      } as any;
      const propRef = {
        current: {
          setCurrentTime: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const currentTime = propRef.current.setCurrentTime(50);
      expect(currentTime).toEqual(0);
      expect(playerRef.current.currentTime).toEqual(0);
      expect(playerRef.current.seekable.start).not.toHaveBeenCalled();
      expect(playerRef.current.seekable.end).not.toHaveBeenCalled();
    });

    test('sets the minimum timerange value when passed currentTime is smaller minimum', () => {
      const playerRef = {
        current: {
          currentTime: 0,
          seekable: {
            start: jest.fn().mockReturnValue(10),
            end: jest.fn().mockReturnValue(20),
            length: 2,
          },
        },
      } as any;
      const propRef = {
        current: {
          setCurrentTime: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const currentTime = propRef.current.setCurrentTime(9);
      expect(currentTime).toEqual(10);
      expect(playerRef.current.currentTime).toEqual(10);
      expect(playerRef.current.seekable.start).toHaveBeenCalledWith(0);
      expect(playerRef.current.seekable.end).toHaveBeenCalledWith(1);
    });

    test('sets the maximum timerange value when passed currentTime is smaller maximum', () => {
      const playerRef = {
        current: {
          currentTime: 0,
          seekable: {
            start: jest.fn().mockReturnValue(10),
            end: jest.fn().mockReturnValue(20),
            length: 2,
          },
        },
      } as any;
      const propRef = {
        current: {
          setCurrentTime: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const currentTime = propRef.current.setCurrentTime(90);
      expect(currentTime).toEqual(20);
      expect(playerRef.current.currentTime).toEqual(20);
      expect(playerRef.current.seekable.start).toHaveBeenCalledWith(0);
      expect(playerRef.current.seekable.end).toHaveBeenCalledWith(1);
    });

    test('returns currentTime value if audio not seekable', () => {
      const playerRef = {
        current: {
          currentTime: 12345,
          seekable: {
            start: jest.fn(),
            end: jest.fn(),
            length: 0,
          },
        },
      } as any;
      const propRef = {
        current: {
          setCurrentTime: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const currentTime = propRef.current.setCurrentTime(50);
      expect(currentTime).toEqual(12345);
      expect(playerRef.current.currentTime).toEqual(12345);
      expect(playerRef.current.seekable.start).not.toHaveBeenCalled();
      expect(playerRef.current.seekable.end).not.toHaveBeenCalled();
    });
  });

  describe('setVolume', () => {
    test('sets volume to 0.5', () => {
      const playerRef = {
        current: {},
      } as any;
      const propRef = {
        current: {},
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));

      const newVolume = propRef.current.setVolume(0.5);

      expect(newVolume).toEqual(0.5);
      expect(playerRef.current.volume).toEqual(0.5);
    });

    test('bounds volume to a max of 1', () => {
      const playerRef = {
        current: {},
      } as any;
      const propRef = {
        current: {},
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));

      const newVolume = propRef.current.setVolume(11);

      expect(newVolume).toEqual(1);
      expect(playerRef.current.volume).toEqual(1);
    });

    test('bounds volume to a min of 0', () => {
      const playerRef = {
        current: {},
      } as any;
      const propRef = {
        current: {},
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));

      const newVolume = propRef.current.setVolume(-0.4);

      expect(newVolume).toEqual(0);
      expect(playerRef.current.volume).toEqual(0);
    });
  });

  describe('setVolume', () => {
    test('sets passed volume value onto the player', () => {
      const playerRef = {
        current: {
          volume: 1,
        },
      } as any;
      const propRef = {
        current: {
          setVolume: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const volume = propRef.current.setVolume(0.5);
      expect(volume).toEqual(0.5);
      expect(playerRef.current.volume).toEqual(0.5);
    });

    test('sets the minimum timerange value when passed volume is smaller minimum', () => {
      const playerRef = {
        current: {
          volume: 1,
        },
      } as any;
      const propRef = {
        current: {
          setVolume: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const volume = propRef.current.setVolume(-9);
      expect(volume).toEqual(0);
      expect(playerRef.current.volume).toEqual(0);
    });

    test('sets the maximum timerange value when passed volume is smaller maximum', () => {
      const playerRef = {
        current: {
          volume: 1,
        },
      } as any;
      const propRef = {
        current: {
          setVolume: jest.fn(),
        },
      } as any;
      renderHook(() => useAudioHandler(playerRef, propRef));
      const volume = propRef.current.setVolume(90);
      expect(volume).toEqual(1);
      expect(playerRef.current.volume).toEqual(1);
    });
  });
});
