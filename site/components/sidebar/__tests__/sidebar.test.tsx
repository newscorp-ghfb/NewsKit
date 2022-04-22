import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import Sidebar from '..';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({pathname: '/'}));

describe('Sidebar', () => {
  describe('renders correctly', () => {
    test('when open', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        sidebarOpen: true,
        handleSidebarClick: () => {},
        toggleTheme: () => {},
        themeMode: '',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('when closed', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        sidebarOpen: false,
        handleSidebarClick: () => {},
        toggleTheme: () => {},
        themeMode: '',
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});
