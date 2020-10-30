import {renderToFragmentWithTheme} from 'newskit/test/test-utils';

import {SunIcon, MoonIcon} from '..';

describe('Icons', () => {
  test('Sun icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(SunIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('Moon icon renders as expected', () => {
    const fragment = renderToFragmentWithTheme(MoonIcon);
    expect(fragment).toMatchSnapshot();
  });
});
