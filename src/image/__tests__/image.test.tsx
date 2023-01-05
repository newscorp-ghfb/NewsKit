import {fireEvent} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import React, {RefObject} from 'react';
import {ObjectFitProperty} from 'csstype';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Image, useClientSide} from '..';
import {IconFilledError, NewsKitIconProps} from '../../icons';

describe('Image', () => {
  const defaultProps = {
    src: '/placeholder-3x2.png',
    alt: 'Example Image',
    overrides: {
      width: '3',
      height: '3',
    },
  };

  test('renders with defaults', () => {
    const fragment = renderToFragmentWithTheme(Image, defaultProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with placeholder icon', () => {
    const props = {
      ...defaultProps,
      placeholderIcon: true,
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with placeholder icon override', () => {
    const props = {
      ...defaultProps,
      placeholderIcon: true,
      overrides: {
        ...defaultProps.overrides,
        placeholderIcon: (iconProps: NewsKitIconProps) => (
          <IconFilledError {...iconProps} />
        ),
      },
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
      overrides: {
        ...defaultProps.overrides,
        maxHeight: '500px',
        maxWidth: '500px',
      },
    };
    const fragment = renderToFragmentWithTheme(Image, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with defaults after load', () => {
    const {getByRole, asFragment} = renderWithTheme(Image, defaultProps);
    const image = getByRole('img', {hidden: true});
    fireEvent.load(image);
    getByRole('img');
    expect(asFragment()).toMatchSnapshot();
  });

  test('render with incorect path', () => {
    const {getByRole, asFragment} = renderWithTheme(Image, {
      src: 'incorrect-path',
    });
    const image = getByRole('img');
    fireEvent.error(image);
    expect(asFragment()).toMatchSnapshot();
  });

  test('render with multiple sources', () => {
    const {asFragment} = renderWithTheme(Image, {
      src: 'image.jpg',
      sources: [
        {media: 'lg', srcSet: 'image-lg.jpg'},
        {
          media: 'md',
          srcSet: 'image-md.jpg',
        },
        {
          media: '(min-width: 600px)',
          srcSet: 'image-600.jpg',
        },
      ],
    });

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
        overrides: {
          height: 'auto',
          width: 'auto',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with number dimensions or aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        overrides: {
          height: '100',
          width: '100',
        },
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
        overrides: {
          width: '100',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with width dimensions in px and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        overrides: {
          width: '100px',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with height dimensions and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        overrides: {
          height: '300',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with height dimensions in px and 1:3 aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: '1:3',
        overrides: {
          height: '300px',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with MQ aspect ratio', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: {xs: '1:3', sm: '1:1'},
      });
      expect(fragment).toMatchSnapshot();
    });
    test('renders with MQ aspect ratio,  width and height', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        loadingAspectRatio: {xs: '1:3', sm: '1:1'},
        overrides: {
          width: {xs: '100px', sm: '300px'},
          height: {xs: '60px', sm: '180px'},
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with MQ width and height', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        overrides: {
          width: {xs: '100px', sm: '300px'},
          height: {xs: '100px', sm: '200px'},
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('renders with logical margin props', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        overrides: {
          marginInline: '25px',
          marginBlock: '50px',
        },
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('width & height as props', () => {
    const props = {
      src: '/placeholder-3x2.png',
      alt: 'Example Image',
      width: '300px',
      height: '200px',
    };

    test('renders with default dimensions', () => {
      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with number dimensions', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        src: '/placeholder-3x2.png',
        alt: 'Example Image',
        width: '300',
        height: '200',
      });
      expect(fragment).toMatchSnapshot();
    });

    test('overrides should take priority when render with width & height as props & overrides', () => {
      const fragment = renderToFragmentWithTheme(Image, {
        ...props,
        overrides: {
          width: '250px',
          height: '500px',
        },
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
        useClientSide(
          mockOnLoadHandler,
          imageRef as RefObject<HTMLImageElement>,
        ),
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
        useClientSide(
          mockOnLoadHandler,
          imageRef as RefObject<HTMLImageElement>,
        ),
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
            ...defaultProps.overrides,
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
          ...defaultProps.overrides,
          stylePreset: {
            md: 'imageRoundedMedium',
            lg: 'imageRoundedLarge',
          },
        },
      };

      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });
    test('with loading=lazy', () => {
      const props = {
        ...defaultProps,
        loading: 'lazy',
      };
      // @ts-ignore
      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });
    test('with renderOnServer & loading=lazy', () => {
      const props = {
        ...defaultProps,
        loading: 'lazy',
        renderOnServer: true,
      };
      // @ts-ignore
      const fragment = renderToFragmentWithTheme(Image, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
