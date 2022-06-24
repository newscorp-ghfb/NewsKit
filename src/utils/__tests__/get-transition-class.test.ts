import {getTransitionClassName} from '../get-transition-class-name';

describe('testing trandition class function', () => {
  test('it applies default exit-done class to component', () => {
    expect(getTransitionClassName('nk-drawer', 'exited')).toBe(
      'nk-drawer-exit-done',
    );
  });
  test('it applies entered class to component', () => {
    expect(getTransitionClassName('nk-drawer', 'entered')).toBe(
      'nk-drawer-enter-done',
    );
  });
  test('it applies exiting-active class to component', () => {
    expect(getTransitionClassName('nk-drawer', 'exiting')).toBe(
      'nk-drawer-exit-active',
    );
  });
  test('it applies entering-active class to component', () => {
    expect(getTransitionClassName('nk-drawer', 'entering')).toBe(
      'nk-drawer-enter-active',
    );
  });
});
