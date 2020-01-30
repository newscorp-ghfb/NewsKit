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
