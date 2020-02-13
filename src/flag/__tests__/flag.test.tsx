import {renderToFragmentWithTheme} from '../../test/test-utils';
import {FlagSize, Flag, FlagProps} from '..';

const flagSizeKeys = (Object.keys(FlagSize) as unknown) as Array<
  keyof typeof FlagSize
>;

describe('Flag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Flag);
    expect(fragment).toMatchSnapshot();
  });

  test.each(flagSizeKeys)('renders with %s size', currentSize => {
    const flagSize = FlagSize[currentSize];
    const fragment = renderToFragmentWithTheme(Flag, {
      $size: flagSize,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom stylePreset', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      $stylePreset: 'interactive010Inverse',
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with no paddings', () => {
    const fragment = renderToFragmentWithTheme(Flag, {
      $stylePreset: 'interactive010Inverse',
      $spacing: 'sizing010',
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });
});
