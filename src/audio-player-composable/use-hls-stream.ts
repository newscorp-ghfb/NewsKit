import {RefObject, useEffect, useRef} from 'react';
import {isSafari} from './utils';
import {HlsInstance} from './types';

type useHlsPlayerOptions = {
  src: string;
  audioRef?: RefObject<HTMLAudioElement | null>;
  live?: boolean;
};

type useHlsPlayerReturn = {
  isHlsStream: boolean;
  hlsInstance: RefObject<HlsInstance | null>;
};

const isHlsUrl = (url: string): boolean => {
  try {
    return new URL(url).pathname.toLowerCase().endsWith('.m3u8');
  } catch {
    return false;
  }
};

export const useHlsStream = ({
  src,
  audioRef,
  live,
}: useHlsPlayerOptions): useHlsPlayerReturn => {
  const hlsRef = useRef<HlsInstance | null>(null);
  const isHls = isHlsUrl(src);

  const initializeHls = async (audio: HTMLAudioElement, src: string) => {
    try {
      const {default: Hls} = await import('hls.js');

      if (!Hls.isSupported()) {
        console.error('HLS.js not supported');
        return;
      }

      const setupHls = (el: HTMLAudioElement, audioSrc: string) => {
        const hls = new Hls({
          enableWorker: true,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 6,
          liveDurationInfinity: true,
          maxLiveSyncPlaybackRate: 1,
          maxBufferLength: 30,
          maxBufferSize: 5 * 1000 * 1000,
          maxBufferHole: 0.5,
          highBufferWatchdogPeriod: 3,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 3,
          lowLatencyMode: false,
          manifestLoadPolicy: {
            default: {
              maxTimeToFirstByteMs: 10000,
              maxLoadTimeMs: 20000,
              timeoutRetry: {
                maxNumRetry: 2,
                retryDelayMs: 0,
                maxRetryDelayMs: 0,
              },
              errorRetry: {
                maxNumRetry: 3,
                retryDelayMs: 1000,
                maxRetryDelayMs: 8000,
              },
            },
          },
          playlistLoadPolicy: {
            default: {
              maxTimeToFirstByteMs: 8000,
              maxLoadTimeMs: 20000,
              timeoutRetry: {
                maxNumRetry: 2,
                retryDelayMs: 0,
                maxRetryDelayMs: 0,
              },
              errorRetry: {
                maxNumRetry: 4,
                retryDelayMs: 500,
                maxRetryDelayMs: 4000,
              },
            },
          },
          fragLoadPolicy: {
            default: {
              maxTimeToFirstByteMs: 8000,
              maxLoadTimeMs: 60000,
              timeoutRetry: {
                maxNumRetry: 4,
                retryDelayMs: 0,
                maxRetryDelayMs: 0,
              },
              errorRetry: {
                maxNumRetry: 6,
                retryDelayMs: 500,
                maxRetryDelayMs: 4000,
              },
            },
          },
        });

        hls.attachMedia(el);
        hls.loadSource(audioSrc);

        hls.on(Hls.Events.ERROR, (_e, data) => {
          if (!data.fatal) return;
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              return hls.startLoad();
            case Hls.ErrorTypes.MEDIA_ERROR:
              return hls.recoverMediaError();
            default:
              console.error('Fatal HLS error', data);
              hls.destroy();
              hlsRef.current = null;
          }
        });

        return {hls};
      };

      const {hls} = setupHls(audio, src);

      hlsRef.current = hls;
    } catch (error) {
      console.error('Failed to load HLS.js', error);
    }
  };

  useEffect(() => {
    if (!live || !src || !isHls || !audioRef?.current) return;

    const audio = audioRef.current;

    const shouldUseNativeHls =
      isSafari() && audio.canPlayType('application/vnd.apple.mpegurl') !== '';

    if (shouldUseNativeHls) {
      audio.src = src;
      return;
    }

    initializeHls(audio, src);

    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [src, isHls, audioRef, live]);

  return {isHlsStream: isHls && !!live, hlsInstance: hlsRef};
};
