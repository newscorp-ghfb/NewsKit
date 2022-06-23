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
        stylePreset: 'inkInverse',
      },
    } as Headings.HeadingOverrides);
    expect(wrapper).toMatchSnapshot();
  });

  test.each(HeadingsKeys)(
    'renders %s correctly with logical props',
    current => {
      const Component = Headings[current];
      const wrapper = renderToFragmentWithTheme(Component, {
        children: 'A Heading',
        overrides: {
          paddingInline: 'space020',
          paddingBlock: 'space040',
          marginBlock: 'space060',
          marginInline: 'space080',
        },
      } as Headings.HeadingOverrides);
      expect(wrapper).toMatchSnapshot();
    },
  );
});
