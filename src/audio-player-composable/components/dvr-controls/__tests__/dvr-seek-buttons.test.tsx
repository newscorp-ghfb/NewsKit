import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithTheme} from '../../../../test/test-utils';
import {AudioPlayerComposable} from '../../../audio-player-composable';
import {AudioPlayerDvrRewindButton} from '../dvr-rewind-button';
import {AudioPlayerDvrForwardButton} from '../dvr-forward-button';
import {AudioPlayerDvrStartButton} from '../dvr-start-button';
import {AudioPlayerDvrSeekButtonProps} from '../types';

jest.mock('../../../use-hls-stream', () => ({
  useHlsStream: jest.fn(() => ({
    isHlsStream: false,
    hlsInstance: {current: null},
  })),
}));

const NOW = 1700000000000;
const AUDIO_SRC = '/audio_file_1.mp3';

const defaultRewindProps: AudioPlayerDvrSeekButtonProps = {
  onSeek: jest.fn(),
  currentPosition: NOW,
  rangeStart: NOW - 60000,
  liveEdge: NOW + 30000,
  seekStep: 10000,
};

const defaultForwardProps: AudioPlayerDvrSeekButtonProps = {
  onSeek: jest.fn(),
  currentPosition: NOW - 30000,
  rangeStart: NOW - 60000,
  liveEdge: NOW,
  seekStep: 10000,
};

const defaultStartProps: AudioPlayerDvrSeekButtonProps = {
  onSeek: jest.fn(),
  currentPosition: NOW,
  rangeStart: NOW - 60000,
  liveEdge: NOW + 30000,
};

const renderRewindButton = (props: AudioPlayerDvrSeekButtonProps) =>
  renderWithTheme(AudioPlayerComposable, {
    src: AUDIO_SRC,
    children: <AudioPlayerDvrRewindButton {...props} />,
  });

const renderForwardButton = (props: AudioPlayerDvrSeekButtonProps) =>
  renderWithTheme(AudioPlayerComposable, {
    src: AUDIO_SRC,
    children: <AudioPlayerDvrForwardButton {...props} />,
  });

const renderStartButton = (props: AudioPlayerDvrSeekButtonProps) =>
  renderWithTheme(AudioPlayerComposable, {
    src: AUDIO_SRC,
    children: <AudioPlayerDvrStartButton {...props} />,
  });

describe('AudioPlayerDvrRewindButton', () => {
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
    const {getByTestId} = renderRewindButton(defaultRewindProps);
    expect(getByTestId('audio-player-dvr-rewind-button')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    const {getByTestId} = renderRewindButton(defaultRewindProps);
    expect(getByTestId('audio-player-dvr-rewind-button')).toHaveAttribute(
      'aria-label',
      'Rewind 10 seconds',
    );
  });

  it('calls onSeek with currentPosition - seekStep on click', () => {
    const onSeek = jest.fn();
    const {getByTestId} = renderRewindButton({
      ...defaultRewindProps,
      onSeek,
    });

    fireEvent.click(getByTestId('audio-player-dvr-rewind-button'));
    expect(onSeek).toHaveBeenCalledWith(NOW - 10000);
  });

  it('is disabled when already at rangeStart', () => {
    const {getByTestId} = renderRewindButton({
      ...defaultRewindProps,
      currentPosition: defaultRewindProps.rangeStart,
    });

    expect(getByTestId('audio-player-dvr-rewind-button')).toBeDisabled();
  });

  it('clamps to rangeStart when step exceeds remaining range', () => {
    const onSeek = jest.fn();
    const {getByTestId} = renderRewindButton({
      ...defaultRewindProps,
      onSeek,
      currentPosition: defaultRewindProps.rangeStart + 5000, // only 5s from start
      seekStep: 10000,
    });

    expect(getByTestId('audio-player-dvr-rewind-button')).not.toBeDisabled();
    fireEvent.click(getByTestId('audio-player-dvr-rewind-button'));
    expect(onSeek).toHaveBeenCalledWith(defaultRewindProps.rangeStart);
  });

  it('uses default seekStep of 10000ms when not provided', () => {
    const onSeek = jest.fn();
    const {seekStep, ...propsWithoutSeekStep} = defaultRewindProps;
    const {getByTestId} = renderRewindButton({
      ...propsWithoutSeekStep,
      onSeek,
    });

    fireEvent.click(getByTestId('audio-player-dvr-rewind-button'));
    expect(onSeek).toHaveBeenCalledWith(NOW - 10000);
  });
});

describe('AudioPlayerDvrForwardButton', () => {
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
    const {getByTestId} = renderForwardButton(defaultForwardProps);
    expect(getByTestId('audio-player-dvr-forward-button')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    const {getByTestId} = renderForwardButton(defaultForwardProps);
    expect(getByTestId('audio-player-dvr-forward-button')).toHaveAttribute(
      'aria-label',
      'Fast forward 10 seconds',
    );
  });

  it('calls onSeek with currentPosition + seekStep on click', () => {
    const onSeek = jest.fn();
    const {getByTestId} = renderForwardButton({
      ...defaultForwardProps,
      onSeek,
    });

    fireEvent.click(getByTestId('audio-player-dvr-forward-button'));
    expect(onSeek).toHaveBeenCalledWith(
      defaultForwardProps.currentPosition + 10000,
    );
  });

  it('is disabled when isLive is true', () => {
    const {getByTestId} = renderForwardButton({
      ...defaultForwardProps,
      isLive: true,
    });

    expect(getByTestId('audio-player-dvr-forward-button')).toBeDisabled();
  });

  it('is disabled when seeking would go past liveEdge', () => {
    const {getByTestId} = renderForwardButton({
      ...defaultForwardProps,
      currentPosition: defaultForwardProps.liveEdge, // already at live edge
    });

    expect(getByTestId('audio-player-dvr-forward-button')).toBeDisabled();
  });

  it('clamps to liveEdge when step exceeds remaining range', () => {
    const onSeek = jest.fn();
    const {getByTestId} = renderForwardButton({
      ...defaultForwardProps,
      onSeek,
      currentPosition: defaultForwardProps.liveEdge - 5000, // only 5s from live
      seekStep: 10000,
    });

    expect(getByTestId('audio-player-dvr-forward-button')).not.toBeDisabled();
    fireEvent.click(getByTestId('audio-player-dvr-forward-button'));
    expect(onSeek).toHaveBeenCalledWith(defaultForwardProps.liveEdge);
  });

  it('uses default seekStep of 10000ms when not provided', () => {
    const onSeek = jest.fn();
    const {seekStep, ...propsWithoutSeekStep} = defaultForwardProps;
    const {getByTestId} = renderForwardButton({
      ...propsWithoutSeekStep,
      onSeek,
    });

    fireEvent.click(getByTestId('audio-player-dvr-forward-button'));
    expect(onSeek).toHaveBeenCalledWith(
      defaultForwardProps.currentPosition + 10000,
    );
  });
});

describe('AudioPlayerDvrStartButton', () => {
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
    const {getByTestId} = renderStartButton(defaultStartProps);
    expect(getByTestId('audio-player-dvr-start-button')).toBeInTheDocument();
  });

  it('has correct aria-label', () => {
    const {getByTestId} = renderStartButton(defaultStartProps);
    expect(getByTestId('audio-player-dvr-start-button')).toHaveAttribute(
      'aria-label',
      'Go to start',
    );
  });

  it('calls onSeek with rangeStart on click', () => {
    const onSeek = jest.fn();
    const {getByTestId} = renderStartButton({
      ...defaultStartProps,
      onSeek,
    });

    fireEvent.click(getByTestId('audio-player-dvr-start-button'));
    expect(onSeek).toHaveBeenCalledWith(defaultStartProps.rangeStart);
  });

  it('is disabled when already at rangeStart', () => {
    const {getByTestId} = renderStartButton({
      ...defaultStartProps,
      currentPosition: defaultStartProps.rangeStart,
    });

    expect(getByTestId('audio-player-dvr-start-button')).toBeDisabled();
  });
});
