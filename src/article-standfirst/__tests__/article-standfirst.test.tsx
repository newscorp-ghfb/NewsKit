import {renderToFragmentWithTheme} from '../../test/test-utils';
import {ArticleStandfirst} from '..';
import {createTheme} from '../../themes';
import {getFontProps} from '../../utils/get-font-props';

describe('ArticleStandfirst', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(ArticleStandfirst);
    expect(fragment).toMatchSnapshot();
  });

  const tags: Array<['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span']> = [
    ['h4'],
    ['span'],
  ];
  test.each(tags)('renders as %s html tag', as => {
    const fragment = renderToFragmentWithTheme(ArticleStandfirst, {as});
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom style preset', () => {
    const customTheme = createTheme('my-custom-article-standfirst-theme', {
      themeOverrider: () => ({
        stylePresets: {
          articleStandfirstCustom: {
            base: {
              color: '#b1dbd0',
            },
          },
        },
      }),
    });
    const fragment = renderToFragmentWithTheme(
      ArticleStandfirst,
      {stylePreset: 'articleStandfirstCustom'},
      customTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom type preset', () => {
    const customTheme = createTheme('my-custom-article-standfirst-theme', {
      themeOverrider: () => ({
        typePresets: {
          articleStandfirstCustom: {
            fontFamily: '"Noto Sans", sans-serif',
            ...getFontProps('32px', 1.125, '"Noto Sans", sans-serif'),
            fontWeight: 400,
            letterSpacing: 0,
          },
        },
      }),
    });
    const fragment = renderToFragmentWithTheme(
      ArticleStandfirst,
      {typePreset: 'articleStandfirstCustom'},
      customTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});
