import {getRefScrollHeight} from '../utils';

describe('getRefScrollHeight', () => {
  test('returns element scrollHeight', () => {
    expect(getRefScrollHeight({scrollHeight: 123} as HTMLDivElement)).toEqual(
      123,
    );
  });
});
