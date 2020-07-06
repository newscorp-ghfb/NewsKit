import * as React from 'react';
import {CardMedia} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Image} from '../../image';

const placeholder =
  'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png';

const customComponent = () => (
  <Image src="https://via.placeholder.com/736x414" alt="Card Media" />
);
const customComponentWithOverrides = () => (
  <Image
    src="https://via.placeholder.com/736x414"
    overrides={{stylePreset: 'imageRoundedLarge'}}
    alt="Card Media"
  />
);

describe('CardMedia', () => {
  test('renders correctly if given data', () => {
    const fragment = renderToFragmentWithTheme(CardMedia, {
      href: placeholder,
      media: {
        src: placeholder,
        alt: 'Card Media',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with custom loadingAspectRatio', () => {
    const fragment = renderToFragmentWithTheme(CardMedia, {
      href: placeholder,
      media: {
        src: placeholder,
        loadingAspectRatio: '16:9',
        alt: 'Card Media',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overrides', () => {
    const fragment = renderToFragmentWithTheme(CardMedia, {
      href: placeholder,
      media: {
        src: placeholder,
        alt: 'Card Media',
      },
      overrides: {
        stylePreset: 'imageRoundedLarge',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with custom component', () => {
    const fragment = renderToFragmentWithTheme(CardMedia, {
      href: placeholder,
      media: customComponent,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with custom component and overrides', () => {
    const fragment = renderToFragmentWithTheme(CardMedia, {
      href: placeholder,
      media: customComponentWithOverrides,
    });
    expect(fragment).toMatchSnapshot();
  });
});
