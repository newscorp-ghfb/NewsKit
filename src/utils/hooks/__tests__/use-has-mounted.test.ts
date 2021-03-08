import {renderHook} from '../../../test/test-utils';
import {useHasMounted} from '..';

describe('has mounted hook', () => {
  test('will return true when the component mounts', () => {
    const {result} = renderHook(() => useHasMounted());

    expect(result.current).toBe(true);
  });
});
