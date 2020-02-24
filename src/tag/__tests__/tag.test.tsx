import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TagSize, Tag, TagProps} from '..';
import {Email} from '../../icons';

const tagSizeKeys = (Object.keys(TagSize) as unknown) as Array<
  keyof typeof TagSize
>;

const children = 'Text';

describe('Tag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Tag, {children});
    expect(fragment).toMatchSnapshot();
  });

  test('renders in disabled state', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      disabled: true,
      children,
    } as TagProps);

    expect(fragment).toMatchSnapshot();
  });

  test('href renders as an anchor', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      href: '#',
      children,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('href renders in disable state as a div', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      href: '#',
      disabled: true,
      children,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test.each(tagSizeKeys)('renders with %s size', currentSize => {
    const tagSize = TagSize[currentSize];
    const fragment = renderToFragmentWithTheme(Tag, {
      $size: tagSize,
      children,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with an icon', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      children: [<Email $size="iconSize010" />, 'Text'],
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });
});
