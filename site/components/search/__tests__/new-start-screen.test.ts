import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {NewStartScreen} from '../new-start-screen';

describe('NewStartScreen', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(NewStartScreen);
    expect(fragment).toMatchSnapshot();
  });
});
