import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from 'newskit/test/test-utils';
import {fireEvent} from '@testing-library/react';
import {SidebarNav} from '..';

jest.mock('../../../routes.json', () => [
  {
    title: 'Group 1',
    id: '/group1',
    subNav: [
      {
        title: 'Group 1 Page 1',
        page: true,
        id: '/group1/page1',
      },
    ],
  },
  {
    title: 'Group 2',
    id: '/group2',
    subNav: [
      {
        title: 'Group 2 Page 1',
        page: true,
        id: '/group2/page1',
      },
      {
        title: 'Group 2 Page 2',
        page: true,
        id: '/group2/page2',
      },
      {
        title: 'Group 2b',
        id: '/group2/group2b',
        subNav: [
          {
            title: 'Group 2b Page 1',
            page: true,
            id: '/group2/group2b/page1',
          },
        ],
      },
    ],
  },
]);

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

  describe('on group 1 page', () => {
    test('renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {
        path: '/group1/page1',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('after click group1 menu collapses', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group1/page1',
      });
      const group1 = getByTestId('/group1');
      fireEvent.click(group1 as Element);
      expect(asFragment()).toMatchSnapshot();
    });

    test('after enter key group1 menu collapses', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group1/page1',
      });
      const group1 = getByTestId('/group1');
      fireEvent.focus(group1);
      fireEvent.keyDown(group1, {
        key: 'Enter',
        keyCode: 13,
      });
      expect(asFragment()).toMatchSnapshot();
    });

    test('by clicking on components menu, group1 menu collapses and group2 menu expands', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group1/page1',
      });
      const group2 = getByTestId('/group2');
      fireEvent.click(group2 as Element);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  test('collapses successfully at nested level', () => {
    const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
      path: '/group2/group2b/page1',
    });
    const nestedMenu = getByTestId('/group2/group2b');
    fireEvent.click(nestedMenu as Element);
    expect(asFragment()).toMatchSnapshot();
  });
});
