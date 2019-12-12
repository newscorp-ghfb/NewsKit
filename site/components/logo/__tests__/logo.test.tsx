import {renderToFragmentWithTheme} from 'newskit/test/test-utils';

import {NewsKitLogo, NewsKitMobileLogo} from '..';

describe('Logo', () => {
  test('Default logo renders as expected', () => {
    const fragment = renderToFragmentWithTheme(NewsKitLogo);
    expect(fragment).toMatchSnapshot();
  });

  test('Mobile logo renders as expected', () => {
    const fragment = renderToFragmentWithTheme(NewsKitMobileLogo);
    expect(fragment).toMatchSnapshot();
  });
});
