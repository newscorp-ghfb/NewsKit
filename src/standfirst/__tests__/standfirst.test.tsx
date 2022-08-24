import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Standfirst} from '..';
import {StandfirstProps} from '../types';

describe('Standfirst', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Standfirst);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with additional HTML attributes', () => {
    const props: StandfirstProps = {
      id: 'standfirst-id',
    };
    const fragment = renderToFragmentWithTheme(Standfirst, props);
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
          stylePreset: 'inkInverse',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom typography preset', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          typographyPreset: 'editorialSubheadline010',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders with logical prop overrides', () => {
    const fragment = renderToFragmentWithTheme(Standfirst, {
      overrides: {
        styledText: {
          paddingInline: '20px',
          paddingBlock: '10px',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
