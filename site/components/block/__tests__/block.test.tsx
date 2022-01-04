import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {Block} from '..';
import {BlockProps} from '../types';

describe('Block', () => {
  describe('with no props', () => {
    test('renders an unstyled div', () => {
      const fragment = renderToFragmentWithTheme(Block);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with simple style props', () => {
    test('renders a styled div', () => {
      const blockProps: BlockProps = {
        $color: 'inkContrast',
        $backgroundColor: 'interactive010Pressed',
        $font: 'body010',
        $border: '1px solid black',
        $borderTop: 'sizing010',
        $borderRight: 'sizing010',
        $borderBottom: 'sizing020',
        $borderLeft: 'sizing030',
        $borderStyle: 'dashed',
        $borderWidth: 'sizing040',
        $borderColor: 'blue',
        $margin: 'sizing010',
        $marginTop: 'sizing010',
        $marginRight: 'sizing010',
        $marginBottom: 'sizing020',
        $marginLeft: 'sizing030',
        $padding: 'sizing040',
        $paddingTop: 'sizing050',
        $paddingRight: 'sizing060',
        $paddingBottom: 'sizing070',
        $paddingLeft: 'sizing080',
        $width: 'sizing010',
        $height: 'sizing080',
        $maxWidth: 'sizing010',
        $maxHeight: 'sizing010',
        $minWidth: 'sizing030',
        $minHeight: 'sizing030',
        $display: 'grid',
        $flexWrap: true,
        $flexDirection: 'inherit',
        $flexGrow: 1,
        $justifyContent: 'left',
        $alignItems: 'flex-end',
        $alignSelf: 'flex-start',
        $position: 'relative',
        $top: 'sizing010',
        $right: 'sizing010',
        $bottom: 'sizing020',
        $left: 'sizing030',
        $overflow: 'hidden',
      };

      const fragment = renderToFragmentWithTheme(Block, blockProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with responsive style props', () => {
    test('renders a responsive styled div', () => {
      const blockProps: BlockProps = {
        $color: ['inkContrast', 'inkBase', 'inkSubtle'],
        $backgroundColor: ['interface010', 'interface020', 'interface030'],
        $font: ['body010', 'body020', 'body030'],
        $border: ['1px solid black', '2px dashed blue', '3px dotted green'],
        $borderTop: ['sizing010', 'sizing010', 'sizing020'],
        $borderRight: ['sizing010', 'sizing020', 'sizing030'],
        $borderBottom: ['sizing020', 'sizing030', 'sizing040'],
        $borderLeft: ['sizing030', 'sizing040', 'sizing050'],
        $borderStyle: ['dashed', 'solid', 'dotted'],
        $borderWidth: ['sizing040', 'sizing050', 'sizing060'],
        $borderColor: ['blue', 'green', 'yellow'],
        $margin: ['sizing010', 'sizing070', 'sizing080'],
        $marginTop: ['sizing010', 'sizing080', 'sizing080'],
        $marginRight: ['sizing010', 'sizing010', 'sizing020'],
        $marginBottom: ['sizing020', 'sizing010', 'sizing030'],
        $marginLeft: ['sizing030', 'sizing060', 'sizing070'],
        $padding: ['sizing040', 'sizing050', 'sizing060'],
        $paddingTop: ['sizing050', 'sizing060', 'sizing070'],
        $paddingRight: ['sizing060', 'sizing070', 'sizing080'],
        $paddingBottom: ['sizing070', 'sizing080', 'sizing080'],
        $paddingLeft: ['sizing080', 'sizing080', 'sizing080'],
        $width: ['sizing010', 'sizing080', 'sizing080'],
        $height: ['sizing010', 'sizing030', 'sizing010'],
        $maxWidth: ['sizing080', 'sizing070', 'sizing060'],
        $maxHeight: ['sizing050', 'sizing040', 'sizing030'],
        $minWidth: ['sizing050', 'sizing060', 'sizing080'],
        $minHeight: ['sizing020', 'sizing030', 'sizing040'],
        $display: ['grid', 'block', 'table'],
        $flexWrap: [true, false, true],
        $flexDirection: ['inherit', 'row', 'row-reverse'],
        $flexGrow: [1, 2, 3],
        $justifyContent: ['left', 'right', 'unset'],
        $alignItems: ['flex-end', 'inherit', 'stretch'],
        $alignSelf: ['stretch', 'flex-end', 'inherit'],
        $position: ['relative', 'absolute', 'inherit'],
        $top: ['sizing010', 'sizing080', 'sizing080'],
        $right: ['sizing010', 'sizing010', 'sizing020'],
        $bottom: ['sizing020', 'sizing010', 'sizing030'],
        $left: ['sizing030', 'sizing060', 'sizing070'],
        $overflow: 'hidden',
      };

      const fragment = renderToFragmentWithTheme(Block, blockProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with non-theme values for width and height', () => {
    test('uses the actual values', () => {
      const blockProps: BlockProps = {
        $borderTop: '1px',
        $borderRight: '2px',
        $borderBottom: '3px',
        $borderLeft: '4px',
        $borderStyle: 'dashed',
        $borderWidth: '5px',
        $borderColor: 'blue',
        $width: '12px',
        $height: '56rem',
        $maxWidth: '1234px',
        $maxHeight: '5678rem',
        $minWidth: '1234rem',
        $minHeight: '5678px',
        $top: '10px',
        $right: '20px',
        $bottom: '30x',
        $left: '40px',
      };

      const fragment = renderToFragmentWithTheme(Block, blockProps);
      expect(fragment).toMatchSnapshot();
    });
  });

  ['scrollX', 'scrollY'].forEach(overflow => {
    describe(`with overflow set to ${overflow}`, () => {
      test('renders no overflow prop', () => {
        const blockProps: BlockProps = {
          $overflow: overflow as 'scrollX' | 'scrollY',
        };

        const fragment = renderToFragmentWithTheme(Block, blockProps);
        expect(fragment).toMatchSnapshot();
      });
    });
  });

  describe(`with 'as' prop`, () => {
    test('renders the specified html element', () => {
      const fragment = renderToFragmentWithTheme(Block, {as: 'select'});
      expect(fragment).toMatchSnapshot();
    });
  });
});
