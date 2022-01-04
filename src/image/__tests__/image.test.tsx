import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Image} from '..';

describe('Image', () => {
  const defaultProps = {
    src:
      'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png',
    aspectWidth: 3,
    aspectHeight: 3,
    alt: 'Example Image',
  };

  test('renders with defaults', () => {
    const fragment = renderToFragmentWithTheme(Image, defaultProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with defaults after load', () => {
    const {getByRole, asFragment} = renderWithTheme(Image, defaultProps);
    const image = getByRole('img');
    fireEvent.load(image);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders without icon', () => {
    const props = {
      ...defaultProps,
      hideIcon: true,
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });
});
