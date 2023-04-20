import {renderToFragmentInBody} from 'newskit/test/test-utils';
import {docsThemeLight} from '../../../theme/doc-theme';
import Sidebar from '..';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({pathname: '/'}));

jest.mock('react-transition-group', () => ({
  ...jest.requireActual('react-transition-group'),
  config: {disabled: true},
}));

describe('Sidebar', () => {
  describe('renders correctly', () => {
    test('when open', () => {
      const fragment = renderToFragmentInBody(
        Sidebar,
        {
          sidebarOpen: true,
          handleSidebarClick: () => {},
          themeMode: 'light',
          toggleTheme: () => {},
        },
        docsThemeLight,
      );
      expect(fragment).toMatchSnapshot();
    });

    test('when closed', () => {
      const fragment = renderToFragmentInBody(
        Sidebar,
        {
          sidebarOpen: false,
          handleSidebarClick: () => {},
          themeMode: 'light',
          toggleTheme: () => {},
        },
        docsThemeLight,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
