import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {MonoColor} from '../mono-color';

describe('MonoColor', () => {
  test('renders mono token with color', () => {
    const fragment = renderToFragmentWithTheme(MonoColor, {
      color: 'inkNegative',
    });
    expect(fragment).toMatchSnapshot();
  });
});
