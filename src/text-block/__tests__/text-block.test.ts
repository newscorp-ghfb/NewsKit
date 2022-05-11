import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock, TextBlockProps} from '..';

describe('TextBlock', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(TextBlock);
    expect(fragment).toMatchSnapshot();
  });

  const tags: Array<
    ['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span']
  > = [['h2'], ['span']];
  test.each(tags)('renders as %s html tag', as => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      as,
    } as TextBlockProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom style preset', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      stylePreset: 'inkInverse',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom typography preset', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      typographyPreset: 'editorialParagraph010',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with no text cropping', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      typographyPreset: 'editorialParagraph010',
      noCrop: true,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders with logical props', () => {
    const fragment = renderToFragmentWithTheme(TextBlock, {
      paddingBlock: '30px',
      marginBlock: '30px',
    });
    expect(fragment).toMatchSnapshot();
  });
});
