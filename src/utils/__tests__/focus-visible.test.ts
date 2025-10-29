import {isFocusVisible} from '../focus-visible';

describe('isFocusVisible', () => {
  test('returns true when target matches :focus-visible', () => {
    const mockTarget = {
      matches: jest.fn().mockReturnValue(true),
    } as any;

    const event = {
      target: mockTarget,
    } as React.FocusEvent<HTMLInputElement>;

    const result = isFocusVisible(event);

    expect(result).toBe(true);
    expect(mockTarget.matches).toHaveBeenCalledWith(':focus-visible');
  });

  test('returns false when target does not match :focus-visible', () => {
    const mockTarget = {
      matches: jest.fn().mockReturnValue(false),
    } as any;

    const event = {
      target: mockTarget,
    } as React.FocusEvent<HTMLInputElement>;

    const result = isFocusVisible(event);

    expect(result).toBe(false);
    expect(mockTarget.matches).toHaveBeenCalledWith(':focus-visible');
  });

  test('returns true when matches throws error (Safari fallback)', () => {
    const mockTarget = {
      matches: jest.fn().mockImplementation(() => {
        throw new Error('matches not supported');
      }),
    } as any;

    const event = {
      target: mockTarget,
    } as React.FocusEvent<HTMLInputElement>;

    const result = isFocusVisible(event);

    expect(result).toBe(true);
    expect(mockTarget.matches).toHaveBeenCalledWith(':focus-visible');
  });
});
