import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button} from '..';
import {ButtonSize, ButtonShape} from '../types';

describe('Button', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(Button);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Small Square Button', () => {
    const props = {
      $size: ButtonSize.Small,
      $shape: ButtonShape.Square,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Medium Rounded Button', () => {
    const props = {
      $size: ButtonSize.Medium,
      $shape: ButtonShape.Rounded,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Button', () => {
    const props = {
      $size: ButtonSize.Large,
    };
    const fragment = renderToFragmentWithTheme(Button, props);
    expect(fragment).toMatchSnapshot();
  });
});
