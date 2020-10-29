import {Caption} from '../caption';
import {CaptionInset, CaptionInsetWithBorder} from '../caption-inset';
import {renderToFragmentWithTheme} from '../../test/test-utils';

describe('Caption', () => {
  test('renders correctly with default props and caption and credit text', () => {
    const fragment = renderToFragmentWithTheme(Caption, {
      children: 'test',
      creditText: 'this is credit text',
    });
    expect(fragment).toMatchSnapshot();
  });
});

test('renders correctly with default props and only caption text', () => {
  const fragment = renderToFragmentWithTheme(Caption, {
    children: 'test',
  });

  expect(fragment).toMatchSnapshot();
});

test('renders correctly with overriden props and caption and credit text', () => {
  const fragment = renderToFragmentWithTheme(Caption, {
    children: 'test',
    creditText: 'this is credit text',
    overrides: {
      typographyPreset: 'utilitySubheading050',
      stylePreset: 'inkContrast',
      spaceStack: 'space090',
      credit: {
        typographyPreset: 'utilityMeta010',
        stylePreset: 'uppercaseInkContrast',
      },
    },
  });
  expect(fragment).toMatchSnapshot();
});

describe('CaptionInset', () => {
  test('renders correctly with default props and caption and credit text', () => {
    const fragment = renderToFragmentWithTheme(CaptionInset, {
      children: 'test',
      creditText: 'this is credit text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with border', () => {
    const fragment = renderToFragmentWithTheme(CaptionInsetWithBorder, {
      children: 'test',
      creditText: 'this is credit text',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with default props and only caption text', () => {
    const fragment = renderToFragmentWithTheme(CaptionInset, {
      children: 'test',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overriden props and caption and credit text', () => {
    const fragment = renderToFragmentWithTheme(CaptionInset, {
      children: 'test',
      creditText: 'this is credit text',
      overrides: {
        typographyPreset: 'utilitySubheading050',
        stylePreset: 'inkContrast',
        spaceStack: 'space090',
        credit: {
          typographyPreset: 'utilityMeta010',
          stylePreset: 'uppercaseInkContrast',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
