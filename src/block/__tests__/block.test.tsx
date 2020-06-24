import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Block, BlockProps} from '..';

describe('Block', () => {
  describe('with no props', () => {
    test('renders an unstyled div', () => {
      const fragment = renderToFragmentWithTheme(Block);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with props', () => {
    test('renders with spaceStack020', () => {
      const props: BlockProps = {
        overrides: {
          spaceStack: 'space020',
          paddingPreset: 'spaceInset020',
          stylePreset: 'flagSolid',
        },
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with spaceStack010 for xs, spaceStack020 for sm, and spaceStack030 for md breakpoints', () => {
      const props: BlockProps = {
        overrides: {
          spaceStack: {
            xs: 'space010',
            sm: 'space020',
            md: 'space030',
          },
        },
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with spaceInline020', () => {
      const props: BlockProps = {
        overrides: {
          spaceInline: 'space020',
        },
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders as span', () => {
      const props: BlockProps = {
        as: 'span',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
