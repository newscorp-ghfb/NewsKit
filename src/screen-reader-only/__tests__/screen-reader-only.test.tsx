import {renderToFragmentWithTheme} from '../../test/test-utils';
import {ScreenReaderOnly} from '../screen-reader-only';

describe('Screen reader only', () => {
  test(`renders with description`, () => {
    const fragment = renderToFragmentWithTheme(ScreenReaderOnly, {
      id: 'sr-only',
      children: 'Description',
    });
    expect(fragment).toMatchSnapshot();
  });
});
