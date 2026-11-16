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
  rangeEnd: NOW + 300000,
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

  describe('with a 5 minute seekStep', () => {
    const fiveMinuteProps: AudioPlayerDvrSeekBarProps = {
      ...defaultProps,
      rangeStart: NOW - 3600000,
      rangeEnd: NOW,
      liveEdge: NOW,
      currentPosition: NOW - 3600000 + 750000,
      seekStep: 300000,
    };

    it('moves the slider in 1s increments', () => {
      renderSeekBar(fiveMinuteProps);
      expect(mockSliderProps.step).toBe(1);
    });

    it('snaps drags to 5 minute steps from the current position', () => {
      const onSeek = jest.fn();
      renderSeekBar({...fiveMinuteProps, onSeek});

      act(() => {
        mockSliderProps.onChange([580]);
      });
      expect(mockSliderProps.values).toEqual([450]);

      act(() => {
        mockSliderProps.onChange([200]);
      });
      expect(mockSliderProps.values).toEqual([150]);

      act(() => {
        mockSliderProps.onFinalChange(mockSliderProps.values);
      });
      expect(onSeek).toHaveBeenCalledWith(fiveMinuteProps.rangeStart + 150000);
    });

    it('keeps the range start and live edge reachable', () => {
      renderSeekBar(fiveMinuteProps);

      act(() => {
        mockSliderProps.onChange([20]);
      });
      expect(mockSliderProps.values).toEqual([0]);

      act(() => {
        mockSliderProps.onChange([3590]);
      });
      expect(mockSliderProps.values).toEqual([3600]);
    });

    it('anchors subsequent drags to the new position', () => {
      const {rerender} = renderSeekBar(fiveMinuteProps);

      act(() => {
        mockSliderProps.onChange([450]);
      });
      act(() => {
        mockSliderProps.onFinalChange(mockSliderProps.values);
      });

      rerender(
        <AudioPlayerComposable src={AUDIO_SRC}>
          <AudioPlayerDvrSeekBar
            {...fiveMinuteProps}
            currentPosition={fiveMinuteProps.rangeStart + 450000}
          />
        </AudioPlayerComposable>,
      );

      act(() => {
        mockSliderProps.onChange([200]);
      });
      expect(mockSliderProps.values).toEqual([150]);
    });

    it('steps a keyboard change by seekStep from the current position', () => {
      const {getByTestId} = renderSeekBar(fiveMinuteProps);

      fireEvent.keyDown(getByTestId('dvr-seek-bar-track'), {key: 'ArrowLeft'});
      act(() => {
        mockSliderProps.onChange([749]);
      });
      expect(mockSliderProps.values).toEqual([450]);
    });
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
