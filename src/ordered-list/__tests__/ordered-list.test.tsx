import {renderToFragmentWithTheme} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {OrderedList} from '../ordered-list';

const myCustomTheme = createTheme({
  name: 'my-custom-ordered-list',
  overrides: {
    stylePresets: {
      customOrderedListItemCounter: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
      customOrderedListItemContent: {
        base: {
          color: '{{colors.red060}}',
        },
      },
    },
  },
});

describe('OrderedList', () => {
  test('renders with defaults', () => {
    const props = {
      children: ['first node', 'second node', 'third node'],
    };
    const fragment = renderToFragmentWithTheme(OrderedList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with invalid nodes', () => {
    const props = {
      children: [null, 'second node', 'third node'],
    };
    const fragment = renderToFragmentWithTheme(OrderedList, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const props = {
      children: ['first node', 'second node', 'third node'],
      overrides: {
        spaceInline: 'sizing010',
        content: {
          stylePreset: 'customOrderedListItemContent',
          typographyPreset: 'editorialParagraph030',
        },
        counter: {
          stylePreset: 'customOrderedListItemCounter',
          typographyPreset: 'editorialParagraph020',
          minWidth: 'sizing030',
        },
      },
    };
    const fragment = renderToFragmentWithTheme(
      OrderedList,
      props,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});
