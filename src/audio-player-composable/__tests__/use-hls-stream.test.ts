import {renderHook} from '@testing-library/react';
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
  `('should detect HLS streams and initialize HLS.js', ({url}) => {
    const {result} = renderHook(() =>
      useHlsStream({src: url, audioRef: createAudioRef(), live: true}),
    );

    expect(result.current.isHlsStream).toBe(true);
    expect(Hls).toHaveBeenCalled();
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
    ({url, expectedResult}) => {
      const {result} = renderHook(() =>
        useHlsStream({src: url, audioRef: createAudioRef(), live: true}),
      );

      expect(result.current.isHlsStream).toBe(expectedResult);
      expect(Hls).toHaveBeenCalled();
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

  it('should initialize HLS when all conditions are met', () => {
    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: true,
      }),
    );

    expect(Hls).toHaveBeenCalled();
  });

  it('should use HLS.js on non-Safari browsers', () => {
    (isSafari as jest.Mock).mockReturnValue(false);

    renderHook(() =>
      useHlsStream({
        src: 'https://example.com/stream.m3u8',
        audioRef: createAudioRef(),
        live: true,
      }),
    );
    expect(Hls).toHaveBeenCalled();
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

  it('should not initialize HLS.js when HLS is not supported and log error', () => {
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
    expect(consoleErrorSpy).toHaveBeenCalledWith('HLS.js not supported');
  });
});
