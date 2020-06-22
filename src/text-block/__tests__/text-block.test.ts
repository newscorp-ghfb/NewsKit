import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock, TextBlockProps} from '..';

describe('TextBlock', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(TextBlock);
    expect(fragment).toMatchSnapshot();
  });

  const tags: Array<['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span']> = [
    ['h2'],
    ['span'],
  ];
  test.each(tags)('renders as %s html tag', as => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      as,
    } as TextBlockProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom style preset', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      overrides: {
        stylePreset: 'linkPrimary',
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom type preset', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      overrides: {
        typePreset: 'body010',
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
