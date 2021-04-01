import {renderHook} from '../../../test/test-utils';
import {useLockBodyScroll} from '..';

describe('lock body scroll hook', () => {
  test('will disable body scroll when mount', () => {
    renderHook(() => useLockBodyScroll());

    expect(document.body.style.overflow).toBe('hidden');
  });

  test('will reset body scroll when unmount', () => {
    const {unmount} = renderHook(() => useLockBodyScroll());

    unmount();

    expect(document.body.style.overflow).toBe('');
  });
});
