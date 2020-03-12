import {fireEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {RefObject} from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {
  Image,
  ImageProps,
  imagePropsAreEqual,
  handleClientSideRender,
} from '..';

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

  test('manually call onload handler if rendered on server side', () => {
    const imageRef = {
      current: {
        complete: true,
      },
    };
    const mockOnLoadHandler = jest.fn();
    renderHook(() =>
      handleClientSideRender(mockOnLoadHandler, imageRef as RefObject<
        HTMLImageElement
      >),
    );
    expect(mockOnLoadHandler).toHaveBeenCalled();
  });

  test('does not manually call onload handler if rendered on client side', () => {
    const imageRef = {
      current: {
        complete: false,
      },
    };
    const mockOnLoadHandler = jest.fn();
    renderHook(() =>
      handleClientSideRender(mockOnLoadHandler, imageRef as RefObject<
        HTMLImageElement
      >),
    );
    expect(mockOnLoadHandler).toHaveBeenCalledTimes(0);
  });

  test('renders without icon', () => {
    const props = {
      ...defaultProps,
      hideIcon: true,
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  ['maskSemiRounded', 'maskRound', 'invalidPreset'].forEach(token => {
    test(`renders with ${token}`, () => {
      const props = {
        ...defaultProps,
        stylePreset: token,
      };
      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});

describe('Utility function', () => {
  describe('imagePropsAreEqual', () => {
    const imageProps: ImageProps = {
      aspectHeight: 3,
      aspectWidth: 2,
      hideLoadingIcon: true,
      src: 'test-src.jpg',
      $stylePreset: 'testPreset',
    };
    const imagePropsCopy: ImageProps = {
      aspectHeight: 3,
      aspectWidth: 2,
      hideLoadingIcon: true,
      src: 'test-src.jpg',
      $stylePreset: 'testPreset',
    };
    const imagePropsDifferent: ImageProps = {
      aspectHeight: 2,
      aspectWidth: 1,
      hideLoadingIcon: true,
      src: 'test-source.jpg',
      $stylePreset: 'testPreset',
    };
    test('returns true if all props are equal', () => {
      expect(imagePropsAreEqual(imageProps, imagePropsCopy)).toEqual(true);
    });
    test('returns false if props are different', () => {
      expect(imagePropsAreEqual(imageProps, imagePropsDifferent)).toEqual(
        false,
      );
    });
  });
});
