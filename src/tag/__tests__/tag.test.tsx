import {renderToFragmentWithTheme} from '../../test/test-utils';
import {BorderRadiusShape} from '../../themes';
import {TagSize, Tag, TagProps} from '..';

const borderRadiusShapeKeys = (Object.keys(
  BorderRadiusShape,
) as unknown) as Array<keyof typeof BorderRadiusShape>;

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

  test('href renders in disable state with an anchor', () => {
    const fragment = renderToFragmentWithTheme(Tag, {
      href: '#',
      disabled: true,
    } as TagProps);
    expect(fragment).toMatchSnapshot();
  });

  test.each(borderRadiusShapeKeys)('renders with %s shape', currentShape => {
    const borderRadiusShape = BorderRadiusShape[currentShape];
    const fragment = renderToFragmentWithTheme(Tag, {
      $shape: borderRadiusShape,
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
});
