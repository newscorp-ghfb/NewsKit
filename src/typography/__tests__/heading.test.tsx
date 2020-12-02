import * as Headings from '../heading';
import {renderToFragmentWithTheme} from '../../test/test-utils';

const HeadingsKeys = (Object.keys(Headings) as unknown) as Array<
  keyof typeof Headings
>;

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
    const wrapper = renderToFragmentWithTheme(Component, {
      children: 'A Heading',
      overrides: {
        typographyPreset: 'editorialHeadline050',
        stylePreset: 'linkInline',
      },
    } as Headings.HeadingOverrides);
    expect(wrapper).toMatchSnapshot();
  });
});
