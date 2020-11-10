import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from 'newskit/test/test-utils';
import {fireEvent} from '@testing-library/react';
import {SidebarNav} from '..';

jest.mock('next/link', () => ({children}: any) => children);

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
        id: '/group2/page1',
        subNav: [
          {
            title: 'Group 2 Page 1 a',
            page: true,
            id: '/group2/page1/a',
          },
          {
            title: 'Group 2 Page 1 b',
            page: true,
            id: '/group2/page1/b',
          },
        ],
      },
      {
        title: 'Group 2 Page 2',
        id: '/group2/page2',
        subNav: [
          {
            title: 'Group 2 Page 2 a',
            page: true,
            id: '/group2/page2/a',
          },
          {
            title: 'Group 2 Page 2 b',
            page: true,
            id: '/group2/page2/b',
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

  describe('on group 1 and 2 ', () => {
    test('on group 1 renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {
        path: '/group1',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('on group 1, page 1 renders as expected', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group1/page1',
      });
      const group1 = getByTestId('/group1/page1');
      fireEvent.click(group1);
      expect(asFragment()).toMatchSnapshot();
    });

    test('on group 2, page 1 renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {
        path: '/group2/page1',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('on group 2, page 1, nav item a renders as expected', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group2/page1/a',
      });
      const group2Page1a = getByTestId('/group2/page1/a');
      fireEvent.click(group2Page1a);
      expect(asFragment()).toMatchSnapshot();
    });

    test('on group 2, page 1, nav item b renders as expected', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group2/page1/b',
      });
      const group2Page1b = getByTestId('/group2/page1/b');
      fireEvent.click(group2Page1b);
      expect(asFragment()).toMatchSnapshot();
    });

    test('on group 2, page 2 renders as expected', () => {
      const fragment = renderToFragmentWithTheme(SidebarNav, {
        path: '/group2/page2',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('on group 2, page 2, nav item a renders as expected', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group2/page2/a',
      });
      const group2Page2a = getByTestId('/group2/page2/a');
      fireEvent.click(group2Page2a);
      expect(asFragment()).toMatchSnapshot();
    });

    test('on group 2, page 2, nav item b renders as expected', () => {
      const {getByTestId, asFragment} = renderWithTheme(SidebarNav, {
        path: '/group2/page2/b',
      });
      const group2Page2b = getByTestId('/group2/page2/b');
      fireEvent.click(group2Page2b);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
