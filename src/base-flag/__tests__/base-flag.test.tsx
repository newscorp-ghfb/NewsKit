import {renderToFragmentWithTheme} from '../../test/test-utils';
import {BaseFlag} from '..';

describe('BaseFlag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(BaseFlag, {
      children: ['Text'],
    });
    expect(fragment).toMatchSnapshot();
  });
});
