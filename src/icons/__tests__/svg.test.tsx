import {Svg} from '../svg';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Svg', () => {
  test('renders svg tag', () => {
    const fragment = renderToFragmentWithTheme(Svg, {
      viewBox: '1 2 3 4',
    });
    expect(fragment).toMatchSnapshot();
  });
});
