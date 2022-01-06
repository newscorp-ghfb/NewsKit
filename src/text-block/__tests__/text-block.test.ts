import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock, TextBlockProps} from '..';
import {createTheme} from '../../theme';

const theme = createTheme({
  overrides: {
    stylePresets: {
      linkInline: {
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'underline',
        },
        hover: {
          color: '{{colors.interactivePrimary040}}',
          iconColor: '{{colors.interactivePrimary040}}',
          textDecoration: 'underline',
        },
        active: {
          color: '{{colors.interactivePrimary050}}',
          iconColor: '{{colors.interactivePrimary050}}',
          textDecoration: 'underline',
        },
        visited: {
          color: '{{colors.interactiveVisited010}}',
          iconColor: '{{colors.interactiveVisited010}}',
          textDecoration: 'underline',
        },
        'visited:hover': {
          color: '{{colors.interactiveVisited010}}',
          iconColor: '{{colors.interactiveVisited010}}',
          textDecoration: 'underline',
        },
      },
    },
  },
});

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
    const fragment = renderToFragmentWithTheme(
      TextBlock,
      {
        stylePreset: 'linkInline',
      },
      theme,
    );
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
});
