import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from 'newskit/test/test-utils';
import {fireEvent} from '@testing-library/react';
import {SidebarNav} from '..';

describe('Sidebar navigation', () => {
  describe('on route level', () => {
    test('renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {path: '/'});
      expect(fragment).toMatchSnapshot();
    });
    test('renders correctly without given path', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav);
      expect(fragment).toMatchSnapshot();
    });
  });
  describe('on theming page', () => {
    test('renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {
        path: '/guides/theming',
      });
      expect(fragment).toMatchSnapshot();
    });
    test('after click guides menu collapses', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/guides/theming',
      });
      const guides = getByTestId('/guides');
      fireEvent.click(guides as Element);
      expect(asFragment()).toMatchSnapshot();
    });
    test('after enter key guides menu collapses', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/guides/theming',
      });
      const guides = getByTestId('/guides');
      fireEvent.focus(guides);
      fireEvent.keyDown(guides, {
        key: 'Enter',
        keyCode: 13,
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('by clicking on components menu, guides menu collapses and components menu expands', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/guides/theming',
      });
      const components = getByTestId('/components');
      fireEvent.click(components as Element);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('collapses successfully at 2nd level', () => {
    const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
      path: '/utils/code-helpers/css',
    });
    const elementsMenu = getByTestId('/utils/code-helpers');
    fireEvent.click(elementsMenu as Element);
    expect(asFragment()).toMatchSnapshot();
  });
});
