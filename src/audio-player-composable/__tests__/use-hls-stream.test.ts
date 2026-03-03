import {renderHook, waitFor} from '@testing-library/react';
import {useHlsStream} from '../use-hls-stream';
import {isSafari} from '../utils';
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

jest.mock('../utils', () => ({
  isSafari: jest.fn(),
}));

const createMockAudioElement = () => {
  const mockAudioElement = ({
    play: jest.fn().mockResolvedValue(undefined),
    load: jest.fn(),
    pause: jest.fn(),
    canPlayType: jest.fn().mockReturnValue(''),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  } as unknown) as HTMLAudioElement;
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
    (isSafari as jest.Mock).mockReturnValue(false);
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
    (isSafari as jest.Mock).mockReturnValue(false);

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
    (isSafari as jest.Mock).mockReturnValue(true);
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

  it('should not initialize HLS.js when HLS is not supported and log error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    (isSafari as jest.Mock).mockReturnValue(false);
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
});
