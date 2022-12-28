/* eslint-disable global-require */
import {useRouter} from 'next/router';
import mockRouter from 'next-router-mock';
import {renderHook} from '@testing-library/react-hooks';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../../utils/test-utils';
import {SidebarNav} from '..';

const scrollIntoViewMock = jest.fn();
Element.prototype.scrollIntoView = scrollIntoViewMock;

// Converted from jest.mock to next-router-mock to avoid "Error: NextRouter was not mounted"
// This is needed for mocking useRouter under Next 13
jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link' reliably under Next 13
jest.mock('next/dist/client/router', () => require('next-router-mock'));
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
    mockRouter.setCurrentUrl('/');
    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should render only routes under current section', () => {
    mockRouter.setCurrentUrl('/group1');
    const {result} = renderHook(() => useRouter());
    expect(result.current).toMatchObject({asPath: '/group1'});
    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should match snapshot with active link', () => {
    mockRouter.setCurrentUrl('/group1/page1');
    const {result} = renderHook(() => useRouter());
    expect(result.current).toMatchObject({asPath: '/group1/page1'});
    expect(renderToFragmentWithTheme(SidebarNav)).toMatchSnapshot();
  });

  test('should not invoke scrollIntoView when link is inactive', () => {
    jest.clearAllMocks();
    mockRouter.setCurrentUrl('/');
    renderWithTheme(SidebarNav);
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(0);
  });
});
