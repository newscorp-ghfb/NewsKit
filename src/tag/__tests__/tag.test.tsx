import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TagSize, Tag, TagProps} from '..';

const tagSizeKeys = (Object.keys(TagSize) as unknown) as Array<
  keyof typeof TagSize
>;

describe('Tag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Tag);
    expect(fragment).toMatchSnapshot();
  });

  test('renders in disabled state', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      disabled: true,
    } as TagProps);

    expect(fragment).toMatchSnapshot();
  });

  test('href renders as an anchor', () => {
    const fragment = renderToFragmentWithTheme(Tag, {href: '#'} as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('href renders in disable state as a span', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      href: '#',
      disabled: true,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test.each(tagSizeKeys)('renders with %s size', currentSize => {
    const tagSize = TagSize[currentSize];
    const fragment = renderToFragmentWithTheme(Tag, {
      $size: tagSize,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tag with a custom stylePreset', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      $stylePreset: 'interactive010Inverse',
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });
});
