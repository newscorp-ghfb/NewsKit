import * as React from 'react';
import {Card} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Image} from '../../image';

const placeholder = '/placeholder-3x2.png';
const href = 'https://newskit.co.uk/';

const customComponent = () => (
  <Image src="/placeholder-16x9.png" alt="Card Media" />
);

const customComponentWithOverrides = () => (
  <Image
    src="/placeholder-16x9.png"
    overrides={{stylePreset: 'imageDefault'}}
    alt="Card Media"
  />
);

describe('Card', () => {
  test('renders correctly', () => {
    const fragment = renderToFragmentWithTheme(Card);
    expect(fragment).toMatchSnapshot();
  });

  test('renders card with overrides', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      overrides: {
        stylePreset: 'imageDefault',
      },
    });
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

  test('adds a href to the anchor containing the media', () => {
    const fragment = renderToFragmentWithTheme(Card, {
      href,
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
        src: href,
        alt: 'Card media',
      },
      overrides: {
        media: {
          stylePreset: 'imageDefault',
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
