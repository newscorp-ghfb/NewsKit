import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Search} from '../search';

describe('Search', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(Search);
    expect(fragment).toMatchSnapshot();
  });
});
