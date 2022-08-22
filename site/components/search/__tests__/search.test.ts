import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Search} from '..';

describe('Search', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(Search);
    expect(fragment).toMatchSnapshot();
  });
});
