import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from 'newskit/test/test-utils';
import {SidebarNav} from '..';

const scrollIntoViewMock = jest.fn();
Element.prototype.scrollIntoView = scrollIntoViewMock;

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
  test('should match snapshot with no active link', () => {
    expect(
      renderToFragmentWithTheme(SidebarNav, {path: '/'}),
    ).toMatchSnapshot();
  });

  test('should match snapshot with active link', () => {
    expect(
      renderToFragmentWithTheme(SidebarNav, {path: '/group1/page1'}),
    ).toMatchSnapshot();
  });

  test('should invoke scrollIntoView only when link is active', () => {
    jest.clearAllMocks();

    renderWithTheme(SidebarNav, {path: '/group1/page1'});
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
  });

  test('should not invoke scrollIntoView when link is inactive', () => {
    jest.clearAllMocks();

    renderWithTheme(SidebarNav, {path: '/'});
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(0);
  });
});
