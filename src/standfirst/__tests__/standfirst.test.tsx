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
  test.each(tags)('renders as %s html tag', renderStyledTextAs => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      renderStyledTextAs,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom style preset', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          stylePreset: 'linkPrimary',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom type preset', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          typePreset: 'subhead010',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
