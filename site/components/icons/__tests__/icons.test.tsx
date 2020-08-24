import {renderToFragmentWithTheme} from 'newskit/test/test-utils';

import {
  ErrorIcon,
  MenuIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  AddIcon,
  RemoveIcon,
} from '..';

describe('Icons', () => {
  test('Menu icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(MenuIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Search icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(SearchIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Error icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(ErrorIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Sun icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(SunIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Moon icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(MoonIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Add icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(AddIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Remove icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(RemoveIcon);
    expect(fragment).toMatchSnapshot();
  });
});
