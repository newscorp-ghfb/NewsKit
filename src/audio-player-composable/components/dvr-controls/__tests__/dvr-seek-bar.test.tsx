import React from 'react';
import {renderWithTheme} from '../../../../test/test-utils';
import {AudioPlayerComposable} from '../../../audio-player-composable';
import {AudioPlayerDvrSeekBar} from '../dvr-seek-bar';
import {AudioPlayerDvrSeekBarProps} from '../types';

jest.mock('../../../use-hls-stream', () => ({
  useHlsStream: jest.fn(() => ({
    isHlsStream: false,
    hlsInstance: {current: null},
  })),
}));

const NOW = 1700000000000;
const AUDIO_SRC = '/live-stream.m3u8';

const defaultProps: AudioPlayerDvrSeekBarProps = {
  onSeek: jest.fn(),
  currentPosition: NOW - 30000,
  rangeStart: NOW - 300000,
  liveEdge: NOW,
};

const renderSeekBar = (props: AudioPlayerDvrSeekBarProps) =>
  renderWithTheme(AudioPlayerComposable, {
    src: AUDIO_SRC,
    children: <AudioPlayerDvrSeekBar {...props} />,
  });

describe('AudioPlayerDvrSeekBar', () => {
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
    const {getByTestId} = renderSeekBar(defaultProps);
    expect(getByTestId('dvr-seek-bar')).toBeInTheDocument();
  });

  it('renders the track', () => {
    const {getByTestId} = renderSeekBar(defaultProps);
    expect(getByTestId('dvr-seek-bar-track')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    const {getByRole} = renderSeekBar(defaultProps);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-label', 'DVR seek bar');
  });

  it('has correct aria-valuemin and aria-valuemax', () => {
    const {getByRole} = renderSeekBar(defaultProps);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '300');
  });

  it('has correct aria-valuenow based on currentPosition', () => {
    const {getByRole} = renderSeekBar(defaultProps);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '270');
  });

  it('has correct aria-valuetext', () => {
    const {getByRole} = renderSeekBar(defaultProps);
    const slider = getByRole('slider');
    expect(slider.getAttribute('aria-valuetext')).toContain(
      'Playback position:',
    );
  });

  it('includes screen reader hint text', () => {
    const {getByText} = renderSeekBar(defaultProps);
    expect(
      getByText('Use the arrow keys to seek forward or backward'),
    ).toBeInTheDocument();
  });

  it('clamps currentPosition to within range bounds', () => {
    const {getByRole} = renderSeekBar({
      ...defaultProps,
      currentPosition: defaultProps.rangeStart - 10000,
    });
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '0');
  });

  it('clamps currentPosition at the upper bound', () => {
    const {getByRole} = renderSeekBar({
      ...defaultProps,
      currentPosition: defaultProps.liveEdge + 10000,
    });
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '300');
  });

  it('handles zero-length DVR window gracefully', () => {
    const {getByRole} = renderSeekBar({
      ...defaultProps,
      rangeStart: NOW,
      liveEdge: NOW,
      currentPosition: NOW,
    });
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemax', '1');
  });

  it('formats aria-valuetext with singular and plural hours, minutes, seconds', () => {
    const {getByRole} = renderSeekBar({
      onSeek: jest.fn(),
      currentPosition: NOW - 7200000 + 3661000,
      rangeStart: NOW - 7200000,
      liveEdge: NOW,
    });
    const slider = getByRole('slider');
    const valueText = slider.getAttribute('aria-valuetext')!;
    expect(valueText).toContain('1 hour');
    expect(valueText).toContain('1 minute');
    expect(valueText).toContain('1 second');
    expect(valueText).toContain('2 hours');
    expect(valueText).toContain('0 minutes');
    expect(valueText).toContain('0 seconds');
  });
});
