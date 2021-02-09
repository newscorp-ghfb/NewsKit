import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import Sidebar from '..';

describe('Sidebar', () => {
  describe('renders correctly', () => {
    test('when open', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        path: '/',
        sidebarOpen: true,
        handleSidebarClick: () => {},
      });
      expect(fragment).toMatchSnapshot();
    });

    test('when closed', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        path: '/',
        sidebarOpen: false,
        handleSidebarClick: () => {},
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});
