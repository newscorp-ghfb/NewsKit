import {renderToFragmentWithTheme} from 'newskit/test/test-utils';

import {CloseIcon, MenuIcon, SearchIcon, SunIcon, MoonIcon} from '..';

describe('Icons', () => {
  test('Close icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(CloseIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Menu icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(MenuIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Search icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(SearchIcon);
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
});
