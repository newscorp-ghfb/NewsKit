import {renderToFragmentWithTheme} from '../../test/test-utils';
import {FlagSize, FlagSolid, FlagMinimal, FlagProps} from '..';

const flagSizeKeys = (Object.keys(FlagSize) as unknown) as Array<
  keyof typeof FlagSize
>;

describe('FlagSolid', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(FlagSolid);
    expect(fragment).toMatchSnapshot();
  });

  test.each(flagSizeKeys)('renders with %s size', currentSize => {
    const flagSize = FlagSize[currentSize];
    const fragment = renderToFragmentWithTheme(FlagSolid, {
      $size: flagSize,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom stylePreset', () => {
    const fragment = renderToFragmentWithTheme(FlagSolid, {
      $stylePreset: 'interactive010Inverse',
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });
});

describe('FlagMinimal', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(FlagMinimal);
    expect(fragment).toMatchSnapshot();
  });

  test.each(flagSizeKeys)('renders with %s size', currentSize => {
    const flagSize = FlagSize[currentSize];
    const fragment = renderToFragmentWithTheme(FlagMinimal, {
      $size: flagSize,
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom stylePreset', () => {
    const fragment = renderToFragmentWithTheme(FlagMinimal, {
      $stylePreset: 'interactive010Inverse',
    } as FlagProps);
    expect(fragment).toMatchSnapshot();
  });
});
