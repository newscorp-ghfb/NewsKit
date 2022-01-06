import * as Headings from '../heading';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';

const HeadingsKeys = (Object.keys(Headings) as unknown) as Array<
  keyof typeof Headings
>;

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

describe('Headings', () => {
  test.each(HeadingsKeys)('renders %s with default styles', current => {
    const Component = Headings[current];
    const wrapper = renderToFragmentWithTheme(Component, {
      children: 'A Heading',
    });
    expect(wrapper).toMatchSnapshot();
  });

  test.each(HeadingsKeys)('renders %s correctly with overrides', current => {
    const Component = Headings[current];
    const wrapper = renderToFragmentWithTheme(
      Component,
      {
        children: 'A Heading',
        overrides: {
          typographyPreset: 'editorialHeadline050',
          stylePreset: 'linkInline',
        },
      } as Headings.HeadingOverrides,
      theme,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
