import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../../utils/test-utils';
import {SidebarNav} from '..';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const scrollIntoViewMock = jest.fn();
Element.prototype.scrollIntoView = scrollIntoViewMock;

jest.mock('next/link', () => ({children}: any) => children);
jest.mock('../../../routes', () => ({
  routes: [
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
  ],
}));

describe('Sidebar navigation', () => {
  test('should match snapshot with no active link', () => {
    useRouter.mockImplementationOnce(() => ({pathname: '/'}));

    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should render only routes under current section', () => {
    useRouter.mockImplementationOnce(() => ({pathname: '/group1'}));

    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should match snapshot with active link', () => {
    useRouter.mockImplementationOnce(() => ({pathname: '/group1/page1'}));
    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should not invoke scrollIntoView when link is inactive', () => {
    jest.clearAllMocks();
    useRouter.mockImplementationOnce(() => ({pathname: '/'}));
    renderWithTheme(SidebarNav);
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(0);
  });
});
