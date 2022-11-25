import {renderToFragmentWithTheme} from '../../utils/test-utils';
import SiteHeader from '../site-header';

const handleSidebarClickMock = jest.fn();
const toggleThemeMock = jest.fn();
const themeMode = '';

const siteHeaderProps = {
  handleSidebarClick: handleSidebarClickMock,
  toggleTheme: toggleThemeMock,
  themeMode,
};

describe('SiteHeader', () => {
  test('has no highlighted items if we are on the homepage', () => {
    const fragment = renderToFragmentWithTheme(SiteHeader, {
      ...siteHeaderProps,
      path: '/',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('has first item highlighted (About) if we are on the /about section', () => {
    const fragment = renderToFragmentWithTheme(SiteHeader, {
      ...siteHeaderProps,
      path: '/about',
    });
    expect(fragment).toMatchSnapshot();
  });
  test('has first item highlighted (About) if we are on a section within /about', () => {
    const fragment = renderToFragmentWithTheme(SiteHeader, {
      ...siteHeaderProps,
      path: '/about/why-use-newskit',
    });
    expect(fragment).toMatchSnapshot();
  });
});
