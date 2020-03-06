/* eslint-disable jsx-a11y/media-has-caption */
import {fireEvent} from '@testing-library/react';
import React, {ChangeEvent} from 'react';
import {renderWithImplementation} from '../../test/test-utils';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';
import {EventTrigger} from '../../instrumentation';

const props = {
  title: 'title',
  children: <div>Well hello there children!!!</div>,
  captionSrc: 'captions.vtt',
  src:
    'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3',
};

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

interface MockEventHandlers {
  onDurationChange: EventListener;
  onTimeUpdate: EventListener;
  onEnded: EventListener;
}

jest.mock('../audio-element', () => ({
  AudioElement: jest
    .fn()
    .mockImplementation(
      ({onDurationChange, onTimeUpdate, onEnded}: MockEventHandlers) => {
        const durationSpy = jest.fn().mockImplementation(() => {
          onDurationChange({
            target: {
              duration: 20,
            },
          } as any);
        });
        const currentTimeSpy = jest.fn().mockImplementation(() => {
          onTimeUpdate({
            target: {
              currentTime: 10,
            },
          } as any);
        });
        const audioEl = (
          <audio
            src="https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3"
            data-testId="audio-player"
            onTimeUpdate={currentTimeSpy}
            onDurationChange={durationSpy}
            onEnded={onEnded}
          />
        );
        return audioEl;
      },
    ),
}));

describe('Static AudioPlayer', () => {
  test('renders player with slider when metadata duration of static audio is loaded', () => {
    const {getByTestId, asFragment} = renderWithImplementation(
      AudioPlayer,
      props as AudioPlayerProps,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider and all the controls', () => {
    const {src, title} = props;
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const fireEventSpy = jest.fn();
    const {getByTestId, asFragment} = renderWithImplementation(
      AudioPlayer,
      {
        ...props,
        onNextTrack,
        onPreviousTrack,
      } as AudioPlayerProps,
      fireEventSpy,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);

    const nextTrack = getByTestId('audio-player-skip-next');
    fireEvent.click(nextTrack);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-skip-next-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    expect(onNextTrack).toHaveBeenCalled();

    const previousTrack = getByTestId('audio-player-skip-previous');
    fireEvent.click(previousTrack);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-skip-previous-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });
    expect(onPreviousTrack).toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider and all the controls, but skips are disabled', () => {
    const {src, title} = props;
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const fireEventSpy = jest.fn();
    const {getByTestId, asFragment} = renderWithImplementation(
      AudioPlayer,
      {
        ...props,
        onNextTrack,
        onPreviousTrack,
        disableNextTrack: true,
        disablePreviousTrack: true,
      } as AudioPlayerProps,
      fireEventSpy,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);

    const nextTrack = getByTestId('audio-player-skip-next');
    fireEvent.click(nextTrack);
    expect(fireEventSpy).not.toHaveBeenCalled();
    expect(onNextTrack).not.toHaveBeenCalled();

    const previousTrack = getByTestId('audio-player-skip-previous');
    fireEvent.click(previousTrack);
    expect(fireEventSpy).not.toHaveBeenCalled();
    expect(onPreviousTrack).not.toHaveBeenCalled();

    const forwardButton = getByTestId('audio-player-forward');
    fireEvent.click(forwardButton);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-forward-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });

    const replayButton = getByTestId('audio-player-replay');
    fireEvent.click(replayButton);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-replay-button',
      trigger: EventTrigger.Click,
      data: {
        src,
        title,
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider set to the updated current time', () => {
    const {src, title} = props;
    const fireEventSpy = jest.fn();
    const {getByTestId, asFragment} = renderWithImplementation(
      AudioPlayer,
      props as AudioPlayerProps,
      fireEventSpy,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);
    fireEvent.timeUpdate(player);
    fireEvent.ended(player);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player',
      trigger: EventTrigger.End,
      data: {
        src,
        title,
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
