import * as React from 'react';
import {Card} from '..';
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
    overrides={{stylePreset: 'imageCircle'}}
    alt="Card Media"
  />
);

describe('Card', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(Card);
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section if the media data is provided', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        src: placeholder,
        alt: 'Card Media',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with custom loadingAspectRatio if the media data is provided', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        loadingAspectRatio: '7:2',
        src: placeholder,
        alt: 'Card media',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with overrides', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: {
        src: placeholder,
        alt: 'Card media',
      },
      overrides: {
        media: {
          stylePreset: 'imageCircle',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with a custom component', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customComponent,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders media section with a custom component using overrides', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      media: customComponentWithOverrides,
    });
    expect(fragment).toMatchSnapshot();
  });
});
