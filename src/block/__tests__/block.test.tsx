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
        $margin: 'spaceStack020',
      };
      const fragment = renderToFragmentWithTheme(Block, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders with spaceInline020', () => {
      const props: BlockProps = {
        $margin: 'spaceInline020',
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
