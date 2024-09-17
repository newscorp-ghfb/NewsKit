import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Block, BlockProps} from '..';
import {createTheme} from '../../theme';

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
        spaceStack: 'space020',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with spaceStack010 for xs, spaceStack020 for sm, and spaceStack030 for md breakpoints', () => {
      const props: BlockProps = {
        spaceStack: {
          xs: 'space010',
          sm: 'space020',
          md: 'space030',
        },
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with spaceInline020', () => {
      const props: BlockProps = {
        spaceInline: 'space020',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with customBlock style preset', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-block-theme',
        overrides: {
          stylePresets: {
            customBlock: {
              base: {
                backgroundColor: '{{colors.interfaceInformative010}}',
                color: '{{colors.inkInverse}}',
                iconColor: '{{colors.inkInverse}}',
              },
            },
          },
        },
      });

      const props: BlockProps = {
        stylePreset: 'customBlock',
      };
      const fragment = renderToFragmentWithTheme(Block, props, myCustomTheme);
      expect(fragment).toMatchSnapshot();
    });

    test('renders as span', () => {
      const props: BlockProps = {
        as: 'span',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });
    test('renders with transitionPresets', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-block-theme',
        overrides: {
          transitionPresets: {
            customBackgroundColorChange: {
              base: {
                transitionProperty: 'background-color',
                transitionDuration: '500ms',
                transitionDelay: '500ms',
                transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
              },
            },
          },
        },
      });
      const props: BlockProps = {
        transitionPreset: 'customBackgroundColorChange',
      };
      const fragment = renderToFragmentWithTheme(Block, props, myCustomTheme);
      expect(fragment).toMatchSnapshot();
    });
    test('renders with logical props', () => {
      const props: BlockProps = {
        paddingBlock: '30px',
        marginBlock: '30px',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders GridLayout with container name and type', () => {
      const props: BlockProps = {
        containerName: 'test-container',
        containerType: 'inline-size',
      };

      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
