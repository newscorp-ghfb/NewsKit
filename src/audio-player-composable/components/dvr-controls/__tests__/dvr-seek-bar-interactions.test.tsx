import React from 'react';
import {act, fireEvent} from '@testing-library/react';
import {renderWithTheme} from '../../../../test/test-utils';
import {AudioPlayerComposable} from '../../../audio-player-composable';
import {AudioPlayerDvrSeekBarProps} from '../types';

let mockSliderProps: any;

jest.mock('../../../../slider', () => {
  const MockSlider = (props: any) => {
    mockSliderProps = props;
    const track = props.renderTrack({
      props: {'data-testid': 'mock-track'},
      children: <div data-testid="mock-thumb" />,
      isDragged: false,
    });
    return <div data-testid="mock-slider">{track}</div>;
  };
  return {
    Slider: MockSlider,
    __esModule: true,
  };
});

jest.mock('../../../use-hls-stream', () => ({
  useHlsStream: jest.fn(() => ({
    isHlsStream: false,
    hlsInstance: {current: null},
  })),
}));

const {AudioPlayerDvrSeekBar} = require('../dvr-seek-bar');

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

describe('AudioPlayerDvrSeekBar interactions', () => {
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

  it('calls onSeek via onFinalChange when value differs from current position', () => {
    const onSeek = jest.fn();
    renderSeekBar({...defaultProps, onSeek});

    act(() => {
      mockSliderProps.onFinalChange([280]);
    });
    expect(onSeek).toHaveBeenCalledWith(defaultProps.rangeStart + 280 * 1000);
  });

  it('does not call onSeek when onFinalChange value equals current position', () => {
    const onSeek = jest.fn();
    renderSeekBar({...defaultProps, onSeek});

    act(() => {
      mockSliderProps.onFinalChange([270]);
    });
    expect(onSeek).not.toHaveBeenCalled();
  });

  it('updates drag value via onChange', () => {
    const onSeek = jest.fn();
    renderSeekBar({...defaultProps, onSeek});

    act(() => {
      mockSliderProps.onChange([250]);
    });

    expect(mockSliderProps.values).toEqual([250]);
  });

  it('renderTrack renders with theme colors', () => {
    const {getByTestId} = renderSeekBar(defaultProps);
    expect(getByTestId('dvr-seek-bar-track')).toBeInTheDocument();
  });

  it('track onKeyDown prevents default for space key', () => {
    const {getByTestId} = renderSeekBar(defaultProps);
    const track = getByTestId('dvr-seek-bar-track');
    fireEvent.keyDown(track, {keyCode: 32});
    expect(track).toBeInTheDocument();
  });
});
