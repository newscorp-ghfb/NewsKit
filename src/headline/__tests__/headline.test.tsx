import {Headline} from '../headline';
import {renderToFragmentWithTheme} from '../../test/test-utils';
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
describe('headline', () => {
  test('renders correctly with default props, just heading', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with default props, with heading and kicker', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      kickerText: 'this is kicker',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with custom props', () => {
    const fragment = renderToFragmentWithTheme(Headline, {
      children: 'test',
      kickerText: 'this is kicker',
      headingAs: 'h4',
      kickerAs: 'h5',
    } as any) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders correctly with overriden props', () => {
    const fragment = renderToFragmentWithTheme(
      Headline,
      {
        overrides: {
          typographyPreset: 'editorialHeadline050',
          heading: {
            stylePreset: 'linkInline',
          },
          kicker: {
            stylePreset: 'linkInline',
          },
        },
      } as any,
      theme,
    ) as any;

    expect(fragment).toMatchSnapshot();
  });
});
