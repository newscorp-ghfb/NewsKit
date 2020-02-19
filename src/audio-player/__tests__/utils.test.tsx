import {formatTrackData, formatTrackTime} from '../utils';

test('formatTrackTime', () => {
  const oneMinute = 60;
  const tenMinutes = 60 * 10;
  const oneHour = oneMinute * 60;

  expect(formatTrackTime(0)).toEqual('00:00');
  expect(formatTrackTime(0, oneMinute)).toEqual('00:00');
  expect(formatTrackTime(oneMinute)).toEqual('01:00');
  expect(formatTrackTime(oneMinute, oneHour)).toEqual('00:01:00');
  expect(formatTrackTime(oneHour + oneMinute + 1, oneHour)).toEqual('01:01:01');
  expect(formatTrackTime(oneHour + tenMinutes + 1)).toEqual('01:10:01');
  expect(formatTrackTime(oneHour, oneMinute)).toEqual('01:00:00');
});

describe('formatTrackData', () => {
  test('when fully buffered', () => {
    expect(
      formatTrackData('track', 'indicator', 'buffer', [5], {
        length: 1,
        start: () => 0,
        end: () => 10,
      }),
    ).toEqual({
      colors: ['indicator', 'buffer', 'track'],
      values: [5, 10],
    });
  });

  test('when multiple buffered sections exist', () => {
    // This can occur when a user moves ahead then back again, multiple disparate buffered sections can exist.
    // Example here is buffered sections exist between 0-125 and 216-228. The current play position is at 32.
    expect(
      formatTrackData('track', 'indicator', 'buffer', [32], {
        length: 2,
        start: (i: number) => [0, 216][i],
        end: (i: number) => [125, 228][i],
      }),
    ).toEqual({
      colors: ['indicator', 'buffer', 'track', 'buffer', 'track'],
      values: [32, 125, 216, 228],
    });
  });
});
