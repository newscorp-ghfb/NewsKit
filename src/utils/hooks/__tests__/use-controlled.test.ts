import {act} from '@testing-library/react';
import {renderHook} from '../../../test/test-utils';
import {useControlled} from '..';

describe('use controlled hook', () => {
  test('controlled bypass state', () => {
    const {result} = renderHook(() =>
      useControlled({
        controlledValue: false,
        defaultValue: false,
      }),
    );
    const [, setChecked] = result.current;
    act(() => {
      setChecked(true);
    });

    expect(result.current[0]).toBe(false);
  });

  test('un-controlled uses internal state', () => {
    const {result} = renderHook(() =>
      useControlled({
        controlledValue: undefined,
        defaultValue: false,
      }),
    );
    const [, setChecked] = result.current;
    act(() => {
      setChecked(true);
    });
    expect(result.current[0]).toBe(true);
  });
});
