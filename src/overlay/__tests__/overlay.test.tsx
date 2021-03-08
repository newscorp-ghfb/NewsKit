import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {Overlay} from '../overlay';

describe('Overlay', () => {
  test('renders with default props', () => {
    const fragment = renderToFragmentWithTheme(Overlay);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-overlay-theme',
      overrides: {
        stylePresets: {
          overlayCustom: {
            base: {
              backgroundColor: '{{colors.amber010}}',
            },
          },
        },
      },
    });

    const fragment = renderToFragmentWithTheme(
      Overlay,
      {overrides: {stylePreset: 'overlayCustom'}},
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('onclick calls event handler', () => {
    const mockCallBack = jest.fn();
    const overlay = renderWithTheme(Overlay, {
      onClick: mockCallBack,
    }).getByTestId('overlay');

    fireEvent.click(overlay);

    expect(mockCallBack).toHaveBeenCalled();
  });
});
