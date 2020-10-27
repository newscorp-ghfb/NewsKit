import {fireEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {RefObject} from 'react';
import {ObjectFitProperty} from 'csstype';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Image, useClientSide} from '..';

describe('Image', () => {
  const defaultProps = {
    src: '/placeholder-3x2.png',
    width: '3',
    height: '3',
    alt: 'Example Image',
  };

  test('renders with defaults', () => {
    const fragment = renderToFragmentWithTheme(Image, defaultProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders without icon', () => {
    const props = {
      ...defaultProps,
      hideLoadingIcon: true,
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with object-fit and object-position', () => {
    const props = {
      ...defaultProps,
      fit: 'cover' as ObjectFitProperty,
      position: '50% 50%',
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with max height and width', () => {
    const props = {
      ...defaultProps,
      maxHeight: '500',
      maxWidth: '500',
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with defaults after load', () => {
    const {getByRole, asFragment} = renderWithTheme(Image, defaultProps);
    const image = getByRole('img');
    fireEvent.load(image);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('loadingAspectRatio', () => {
    const props = {
      src: '/placeholder-3x2.png',
      alt: 'Example Image',
    };

    test('renders with no dimensions or aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with string dimensions or aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        height: 'auto',
        width: 'auto',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with number dimensions or aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        height: '100',
        width: '100',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with no dimensions and 1:1 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:1',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with no dimensions and invalid aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:awefa',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with width dimensions and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        width: '100',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with width dimensions in px and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        width: '100px',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with height dimensions and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        height: '300',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with height dimensions in px and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        height: '300px',
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('client side hook', () => {
    test('manually call onload handler if rendered on server side', () => {
      const imageRef = {
        current: {
          complete: true,
        },
      };
      const mockOnLoadHandler = jest.fn();
      renderHook(() =>
        useClientSide(mockOnLoadHandler, imageRef as RefObject<
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
        useClientSide(mockOnLoadHandler, imageRef as RefObject<
          HTMLImageElement
        >),
      );
      expect(mockOnLoadHandler).toHaveBeenCalledTimes(0);
    });
  });

  describe('stylePreset', () => {
    ['maskSemiRounded', 'maskRound', 'invalidPreset'].forEach(token => {
      test(`renders with ${token}`, () => {
        const props = {
          ...defaultProps,
          overrides: {
            stylePreset: token,
          },
        };

        const fragment = renderToFragmentWithTheme(Image, props);
        expect(fragment).toMatchSnapshot();
      });
    });

    test('with mq', () => {
      const props = {
        ...defaultProps,
        overrides: {
          stylePreset: {
            md: 'imageRoundedMedium',
            lg: 'imageRoundedLarge',
          },
        },
      };

      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
