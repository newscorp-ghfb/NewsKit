import {renderToFragmentWithTheme} from 'newskit/test/test-utils';

import {CloseIcon, MenuIcon, SearchIcon} from '..';

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
});
