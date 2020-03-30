import {Svg} from '../svg';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Svg', () => {
  test('renders a menu icon with specified size and default color', () => {
    const fragment = renderToFragmentWithTheme(Svg, {
      viewBox: '1 2 3 4',
      $size: 'iconSize050',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with specified size and color', () => {
    const fragment = renderToFragmentWithTheme(Svg, {
      viewBox: '1 2 3 4',
      $size: 'iconSize010',
      $color: 'white',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with no size', () => {
    const fragment = renderToFragmentWithTheme(Svg, {
      viewBox: '1 2 3 4',
      $color: 'white',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders a menu icon with $float property', () => {
    const fragment = renderToFragmentWithTheme(Svg, {
      viewBox: '1 2 3 4',
      $float: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });
});
