import {Caption} from '../caption';
import {CaptionInset} from '../caption-inset';
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

test('renders with additional HTML attributes', () => {
  const fragment = renderToFragmentWithTheme(Caption, {
    id: 'caption-id',
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

  test('renders correctly with logical props overrides ', () => {
    const fragment = renderToFragmentWithTheme(CaptionInset, {
      children: 'test',
      creditText: 'this is credit text',
      overrides: {
        marginBlock: '30px',
        paddingBlock: '30px',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
