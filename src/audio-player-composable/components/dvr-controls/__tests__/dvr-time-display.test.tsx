import React from 'react';
import {renderWithTheme} from '../../../../test/test-utils';
import {AudioPlayerComposable} from '../../../audio-player-composable';
import {AudioPlayerDvrTimeDisplay} from '../dvr-time-display';
import {AudioPlayerDvrTimeDisplayProps} from '../types';

jest.mock('../../../use-hls-stream', () => ({
  useHlsStream: jest.fn(() => ({
    isHlsStream: false,
    hlsInstance: {current: null},
  })),
}));

const AUDIO_SRC = '/live-stream.m3u8';

const defaultProps: AudioPlayerDvrTimeDisplayProps = {
  time: 125000, // 2 minutes 5 seconds
};

const renderTimeDisplay = (props: AudioPlayerDvrTimeDisplayProps) =>
  renderWithTheme(AudioPlayerComposable, {
    src: AUDIO_SRC,
    children: <AudioPlayerDvrTimeDisplay {...props} />,
  });

describe('AudioPlayerDvrTimeDisplay', () => {
  const mediaElement = (window as any).HTMLMediaElement.prototype;

  beforeAll(() => {
    ['duration', 'seekable', 'buffered', 'paused', 'volume'].forEach(k => {
      Object.defineProperty(mediaElement, k, {
        writable: true,
      });
    });
  });

  beforeEach(() => {
    mediaElement.load = jest.fn();
    mediaElement.play = jest.fn();
    mediaElement.pause = jest.fn();
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByTestId} = renderTimeDisplay(defaultProps);
    expect(getByTestId('audio-player-dvr-time-display')).toBeInTheDocument();
  });

  it('formats time as M:SS for values under an hour', () => {
    const {getByTestId} = renderTimeDisplay({time: 125000});
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '2:05',
    );
  });

  it('formats time as H:MM:SS for values over an hour', () => {
    const {getByTestId} = renderTimeDisplay({time: 3725000}); // 1h 2m 5s
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '1:02:05',
    );
  });

  it('displays 0:00 for zero time', () => {
    const {getByTestId} = renderTimeDisplay({time: 0});
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '0:00',
    );
  });

  it('displays 0:00 for negative time', () => {
    const {getByTestId} = renderTimeDisplay({time: -5000});
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '0:00',
    );
  });

  it('uses custom format function when provided', () => {
    const customFormat = (seconds: number) => `${seconds}s`;
    const {getByTestId} = renderTimeDisplay({
      time: 30000,
      format: customFormat,
    });
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '30s',
    );
  });

  it('floors partial seconds', () => {
    const {getByTestId} = renderTimeDisplay({time: 61999});
    expect(getByTestId('audio-player-dvr-time-display')).toHaveTextContent(
      '1:01',
    );
  });
});
