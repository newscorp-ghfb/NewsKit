import {renderToFragmentWithTheme} from '../../test/test-utils';
import {ArticleStandfirst} from '..';

describe('ArticleStandfirst', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(ArticleStandfirst);
    expect(fragment).toMatchSnapshot();
  });
});
