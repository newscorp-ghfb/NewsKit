import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import PageTitle from '@components/page-title';

describe('Page Title', () => {
  test('renders default title', () => {
    const fragment = renderToFragmentWithTheme(PageTitle, {title: ''});
    expect(fragment).toMatchSnapshot();
  });

  test('renders passed title', () => {
    const fragment = renderToFragmentWithTheme(PageTitle, {
      title: 'Test Title',
    });
    expect(fragment).toMatchSnapshot();
  });
});
