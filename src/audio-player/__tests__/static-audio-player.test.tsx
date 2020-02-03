/* eslint-disable jsx-a11y/media-has-caption */
import {fireEvent} from '@testing-library/react';
import React, {ChangeEvent} from 'react';
import {renderWithTheme} from '../../test/test-utils';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';

const src =
  'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3';
const props = {
  imgAlt: 'test image',
  title: 'title',
  imgSrc: 'https://via.placeholder.com/150',
  description: 'Test Description',
  time: '1PM to 3PM',
  captionSrc: 'captions.vtt',
  src,
  live: false,
};

type EventListener = (event: ChangeEvent<HTMLAudioElement>) => void;

interface MockEventHandlers {
  onDurationChange: EventListener;
  onTimeUpdate: EventListener;
}

jest.mock('../meta/audio-element', () => ({
  AudioElement: jest
    .fn()
    .mockImplementation(
      ({onDurationChange, onTimeUpdate}: MockEventHandlers) => {
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
            src={src}
            data-testId="audio-player"
            onTimeUpdate={currentTimeSpy}
            onDurationChange={durationSpy}
          />
        );
        return audioEl;
      },
    ),
}));

describe('Static AudioPlayer', () => {
  test('renders player with slider when metadata duration of static audio is loaded', () => {
    const {getByTestId, asFragment} = renderWithTheme(
      AudioPlayer,
      props as AudioPlayerProps,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider and all the controls', () => {
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const {getByTestId, asFragment} = renderWithTheme(AudioPlayer, {
      ...props,
      onNextTrack,
      onPreviousTrack,
    } as AudioPlayerProps);

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);

    const nextTrack = getByTestId('audio-player-skip-next');
    fireEvent.click(nextTrack);
    expect(onNextTrack).toHaveBeenCalled();

    const previousTrack = getByTestId('audio-player-skip-previous');
    fireEvent.click(previousTrack);
    expect(onPreviousTrack).toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider and all the controls, but skips are disabled', () => {
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const {getByTestId, asFragment} = renderWithTheme(AudioPlayer, {
      ...props,
      onNextTrack,
      onPreviousTrack,
      disableNextTrack: true,
      disablePreviousTrack: true,
    } as AudioPlayerProps);

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);

    const nextTrack = getByTestId('audio-player-skip-next');
    fireEvent.click(nextTrack);
    expect(onNextTrack).not.toHaveBeenCalled();

    const previousTrack = getByTestId('audio-player-skip-previous');
    fireEvent.click(previousTrack);
    expect(onPreviousTrack).not.toHaveBeenCalled();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders player with slider set to the updated current time', () => {
    const {getByTestId, asFragment} = renderWithTheme(
      AudioPlayer,
      props as AudioPlayerProps,
    );

    const player = getByTestId('audio-player');

    fireEvent.durationChange(player);
    fireEvent.timeUpdate(player);

    expect(asFragment()).toMatchSnapshot();
  });
});
