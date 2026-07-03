import {renderHook, waitFor} from '@testing-library/react';
import {useHlsStream} from '../use-hls-stream';
import * as utils from '../utils';
import Hls from 'hls.js';

jest.mock('hls.js', () => {
  const MockHls = jest.fn().mockImplementation(() => ({
    attachMedia: jest.fn(),
    loadSource: jest.fn(),
    startLoad: jest.fn(),
    stopLoad: jest.fn(),
    destroy: jest.fn(),
    detachMedia: jest.fn(),
    on: jest.fn(),
    once: jest.fn(),
    recoverMediaError: jest.fn(),
  }));

  (MockHls as any).isSupported = jest.fn().mockReturnValue(true);

  (MockHls as any).Events = {
    ERROR: 'hlsError',
    MEDIA_ATTACHED: 'hlsMediaAttached',
    MANIFEST_PARSED: 'hlsManifestParsed',
  };

  (MockHls as any).ErrorTypes = {
    NETWORK_ERROR: 'networkError',
    MEDIA_ERROR: 'mediaError',
  };

  return {
    __esModule: true,
    default: MockHls,
  };
});

const createMockAudioElement = () => {
  const mockAudioElement = ({
    play: jest.fn().mockResolvedValue(undefined),
    load: jest.fn(),
    pause: jest.fn(),
    canPlayType: jest.fn().mockReturnValue(''),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    src: '',
  } as unknown) as HTMLAudioElement;
  return mockAudioElement;
};

const createMockAudioElementWithEventCapture = () => {
  const listeners: Record<string, EventListener> = {};
  const mockAudioElement = ({
    play: jest.fn().mockResolvedValue(undefined),
    load: jest.fn(),
    pause: jest.fn(),
    canPlayType: jest.fn().mockReturnValue(''),
    addEventListener: jest.fn((event: string, handler: EventListener) => {
      listeners[event] = handler;
    }),
    removeEventListener: jest.fn((event: string) => {
      delete listeners[event];
    }),
    dispatchCanPlay: () => listeners.canplay?.(new Event('canplay')),
    src: '',
  } as unknown) as HTMLAudioElement & {dispatchCanPlay: () => void};
  return mockAudioElement;
};

const createAudioRef = (
  element: HTMLAudioElement | null = createMockAudioElement(),
) => ({
  current: element,
});

describe('useHlsStream', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(utils, 'isSafari').mockReturnValue(false);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it.each`
    url
    ${'https://hls-onic.dublin.live.stream.broadcasting.news/stream-innovation-hls/playlist.m3u8'}
    ${'https://hls-onic.dublin.live.stream.broadcasting.news/stream-innovation-mobile-hls/playlist.m3u8'}
    ${'https://hls-virgin.live.stream.broadcasting.news/stream-80s-hls/playlist.m3u8'}
    ${'https://hls-virgin.live.stream.broadcasting.news/stream-80s-mobile-hls/playlist.m3u8'}
  `('should detect HLS streams and initialize HLS.js', async ({url}) => {
    const {result} = renderHook(() =>
      useHlsStream({src: url, audioRef: createAudioRef(), live: true}),
    );

    expect(result.current.isHlsStream).toBe(true);
    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });
  });

  it.each`
    url
    ${'https://newskit.co.uk/static/sample.mp3'}
    ${'https://radio.talkradio.co.uk/stream'}
    ${'https://example.com/stream.mp4'}
    ${'https://example.com/audio.mp3'}
    ${'https://example.com/audio.wav'}
  `('should detect non-HLS streams and not initialize HLS.js', ({url}) => {
    const {result} = renderHook(() =>
      useHlsStream({src: url, audioRef: createAudioRef(), live: true}),
    );

    expect(result.current.isHlsStream).toBe(false);
    expect(Hls).not.toHaveBeenCalled();
  });

  it.each`
    url                                                                                                   | expectedResult
    ${'https://hls-onic.dublin.live.stream.broadcasting.news/stream-innovation-hls/playlist.M3U8'}        | ${true}
    ${'https://hls-onic.dublin.live.stream.broadcasting.news/stream-innovation-mobile-hls/playlist.m3U8'} | ${true}
  `(
    'should recognize HLS streams regardless of case for $url',
    async ({url, expectedResult}) => {
      const {result} = renderHook(() =>
        useHlsStream({src: url, audioRef: createAudioRef(), live: true}),
      );

      expect(result.current.isHlsStream).toBe(expectedResult);
      await waitFor(() => {
        expect(Hls).toHaveBeenCalled();
      });
    },
  );

  it('should return false for invalid URLs', () => {
    const {result} = renderHook(() =>
      useHlsStream({src: 'not-a-url', audioRef: createAudioRef(), live: true}),
    );

    expect(result.current.isHlsStream).toBe(false);
    expect(Hls).not.toHaveBeenCalled();
  });

  it('should not initialize HLS when live prop is false', () => {
    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: false,
      }),
    );

    expect(Hls).not.toHaveBeenCalled();
  });

  it('should not initialize HLS when src is not provided', () => {
    renderHook(() =>
      useHlsStream({
        src: '',
        audioRef: createAudioRef(),
        live: true,
      }),
    );

    expect(Hls).not.toHaveBeenCalled();
  });

  it('should not initialize HLS when audioRef is not provided', () => {
    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: undefined,
        live: true,
      }),
    );
    expect(Hls).not.toHaveBeenCalled();
  });

  it('should initialize HLS when all conditions are met', async () => {
    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
      expect(Hls).toHaveBeenCalledTimes(1);
    });
  });

  it('should use HLS.js on non-Safari browsers', async () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(false);

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
      expect(Hls).toHaveBeenCalledTimes(1);
    });
  });

  it('should use native HLS on Safari if supported', () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(true);
    const mockAudio = createMockAudioElement();
    mockAudio.canPlayType = jest.fn().mockReturnValue('probably');

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
      }),
    );

    expect(Hls).not.toHaveBeenCalled();
    expect(mockAudio.canPlayType).toHaveBeenCalledWith(
      'application/vnd.apple.mpegurl',
    );
    expect(mockAudio.src).toBe('https://example.com/stream.m3u8');
  });

  it('should resume playback on native Safari canplay when playingRef is true', () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(true);
    const mockAudio = createMockAudioElementWithEventCapture();
    mockAudio.canPlayType = jest.fn().mockReturnValue('probably');
    const playingRef = {current: true};

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
        playingRef,
      }),
    );

    mockAudio.dispatchCanPlay();

    expect(mockAudio.play).toHaveBeenCalled();
    expect(mockAudio.removeEventListener).toHaveBeenCalledWith(
      'canplay',
      expect.any(Function),
    );
  });

  it('should not resume playback on native Safari canplay when playingRef is false', () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(true);
    const mockAudio = createMockAudioElementWithEventCapture();
    mockAudio.canPlayType = jest.fn().mockReturnValue('probably');
    const playingRef = {current: false};

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
        playingRef,
      }),
    );

    mockAudio.dispatchCanPlay();

    expect(mockAudio.play).not.toHaveBeenCalled();
  });

  it('should clean up native Safari HLS on unmount', () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(true);
    const mockAudio = createMockAudioElementWithEventCapture();
    mockAudio.canPlayType = jest.fn().mockReturnValue('probably');

    const {unmount} = renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
      }),
    );

    unmount();

    expect(mockAudio.pause).toHaveBeenCalled();
    expect(mockAudio.removeEventListener).toHaveBeenCalledWith(
      'canplay',
      expect.any(Function),
    );
    expect(mockAudio.src).toBe('');
    expect(mockAudio.load).toHaveBeenCalled();
  });

  it('should fall back to HLS.js on Safari when native HLS is not supported', async () => {
    jest.spyOn(utils, 'isSafari').mockReturnValue(true);
    const mockAudio = createMockAudioElement();
    mockAudio.canPlayType = jest.fn().mockReturnValue('');

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });
    expect(mockAudio.src).toBe('');
  });

  it('should not initialize HLS when audioRef.current is null', () => {
    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: {current: null},
        live: true,
      }),
    );

    expect(Hls).not.toHaveBeenCalled();
  });

  it('should not initialize HLS.js when HLS is not supported and log error message', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(utils, 'isSafari').mockReturnValue(false);
    (Hls.isSupported as jest.Mock).mockReturnValueOnce(false);

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: true,
      }),
    );

    expect(Hls).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith('HLS.js not supported');
    });
    consoleErrorSpy.mockRestore();
  });

  describe('HLS error handling', () => {
    it('should handle network errors gracefully', async () => {
      renderHook(() =>
        useHlsStream({
          src: 'https://example.com/stream.m3u8',
          audioRef: createAudioRef(),
          live: true,
        }),
      );

      await waitFor(() => {
        expect(Hls).toHaveBeenCalled();
      });

      const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;

      const registeredErrorCallback = createdHlsInstance.on.mock.calls.find(
        (call: any) => call[0] === 'hlsError',
      )?.[1];

      const fatalNetworkErrorData = {
        fatal: true,
        type: 'networkError',
      };

      registeredErrorCallback(null, fatalNetworkErrorData);

      expect(createdHlsInstance.startLoad).toHaveBeenCalled();
    });

    it('should handle media errors gracefully', async () => {
      renderHook(() =>
        useHlsStream({
          src: 'https://example.com/stream.m3u8',
          audioRef: createAudioRef(),
          live: true,
        }),
      );

      await waitFor(() => {
        expect(Hls).toHaveBeenCalled();
      });

      const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;

      const registeredErrorCallback = createdHlsInstance.on.mock.calls.find(
        (call: any) => call[0] === 'hlsError',
      )?.[1];

      const fatalMediaErrorData = {
        fatal: true,
        type: 'mediaError',
      };

      registeredErrorCallback(null, fatalMediaErrorData);

      expect(createdHlsInstance.recoverMediaError).toHaveBeenCalled();
    });

    it('should ignore non-fatal errors', async () => {
      renderHook(() =>
        useHlsStream({
          src: 'https://example.com/stream.m3u8',
          audioRef: createAudioRef(),
          live: true,
        }),
      );

      await waitFor(() => {
        expect(Hls).toHaveBeenCalled();
      });

      const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;

      const registeredErrorCallback = createdHlsInstance.on.mock.calls.find(
        (call: any) => call[0] === 'hlsError',
      )?.[1];

      const nonFatalErrorData = {
        fatal: false,
        type: 'networkError',
      };

      registeredErrorCallback(null, nonFatalErrorData);

      expect(createdHlsInstance.startLoad).not.toHaveBeenCalled();
      expect(createdHlsInstance.recoverMediaError).not.toHaveBeenCalled();
      expect(createdHlsInstance.destroy).not.toHaveBeenCalled();
    });

    it('should handle other types of fatal errors', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      renderHook(() =>
        useHlsStream({
          src: 'https://example.com/stream.m3u8',
          audioRef: createAudioRef(),
          live: true,
        }),
      );

      await waitFor(() => {
        expect(Hls).toHaveBeenCalled();
      });

      const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;

      const registeredErrorCallback = createdHlsInstance.on.mock.calls.find(
        (call: any) => call[0] === 'hlsError',
      )?.[1];

      const fatalUnknownErrorData = {
        fatal: true,
        type: 'unknownError',
      };

      registeredErrorCallback(null, fatalUnknownErrorData);

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Fatal HLS error',
        fatalUnknownErrorData,
      );

      expect(createdHlsInstance.destroy).toHaveBeenCalled();
      consoleErrorSpy.mockRestore();
    });
  });

  it('should pause audio before detaching HLS on cleanup', async () => {
    const mockAudio = createMockAudioElement();
    const audioRef = createAudioRef(mockAudio);

    const {unmount} = renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef,
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });

    unmount();

    expect(mockAudio.pause).toHaveBeenCalled();
    const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;
    expect(createdHlsInstance.stopLoad).toHaveBeenCalled();
    expect(createdHlsInstance.detachMedia).toHaveBeenCalled();
    expect(createdHlsInstance.destroy).toHaveBeenCalled();
  });

  it('should attach media and load source when initializing HLS.js', async () => {
    const mockAudio = createMockAudioElement();
    const src = 'https://example.com/stream.m3u8';

    renderHook(() =>
      useHlsStream({
        src,
        audioRef: createAudioRef(mockAudio),
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });

    const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;
    expect(createdHlsInstance.attachMedia).toHaveBeenCalledWith(mockAudio);
    expect(createdHlsInstance.loadSource).toHaveBeenCalledWith(src);
  });

  it('should resume playback on MANIFEST_PARSED when playingRef is true', async () => {
    const mockAudio = createMockAudioElement();
    const playingRef = {current: true};

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
        playingRef,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });

    const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;
    const manifestParsedCallback = createdHlsInstance.on.mock.calls.find(
      (call: [string, () => void]) => call[0] === 'hlsManifestParsed',
    )?.[1];

    manifestParsedCallback?.();

    expect(mockAudio.play).toHaveBeenCalled();
  });

  it('should not resume playback on MANIFEST_PARSED when playingRef is false', async () => {
    const mockAudio = createMockAudioElement();
    const playingRef = {current: false};

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
        playingRef,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });

    const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;
    const manifestParsedCallback = createdHlsInstance.on.mock.calls.find(
      (call: [string, () => void]) => call[0] === 'hlsManifestParsed',
    )?.[1];

    manifestParsedCallback?.();

    expect(mockAudio.play).not.toHaveBeenCalled();
  });

  it('should not resume playback on MANIFEST_PARSED when playingRef is not provided', async () => {
    const mockAudio = createMockAudioElement();

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(mockAudio),
        live: true,
      }),
    );

    await waitFor(() => {
      expect(Hls).toHaveBeenCalled();
    });

    const createdHlsInstance = jest.mocked(Hls).mock.results[0].value;
    const manifestParsedCallback = createdHlsInstance.on.mock.calls.find(
      (call: [string, () => void]) => call[0] === 'hlsManifestParsed',
    )?.[1];

    manifestParsedCallback?.();

    expect(mockAudio.play).not.toHaveBeenCalled();
  });
});
