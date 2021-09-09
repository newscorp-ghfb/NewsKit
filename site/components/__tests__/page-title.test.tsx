import PageTitle from '@components/page-title';
import {renderToFragmentWithTheme} from '../../utils/test-utils';

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
