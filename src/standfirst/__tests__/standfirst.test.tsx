import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Standfirst} from '..';

describe('Standfirst', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Standfirst);
    expect(fragment).toMatchSnapshot();
  });

  const tags: Array<['h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span']> = [
    ['h4'],
    ['span'],
  ];
  test.each(tags)('renders as %s html tag', as => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      as,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom style preset', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          stylePreset: 'linkInline',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom typography preset', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          typographyPreset: 'editorialSubheading010',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
