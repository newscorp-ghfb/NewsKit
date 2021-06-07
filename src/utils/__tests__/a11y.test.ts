import {splitAriaProps} from '../a11y';

describe('a11y utils', () => {
  test('splitAriaProps with object', () => {
    const props = {ariaLive: 'test', ariaLabel: 'test', other: 1};

    expect(splitAriaProps(props)).toEqual({
      aria: {ariaLive: 'test', ariaLabel: 'test'},
      rest: {other: 1},
    });
  });
});
