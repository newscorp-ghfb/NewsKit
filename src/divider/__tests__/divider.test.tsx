import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Divider} from '..';

describe('Divider', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Divider);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with props', () => {
    const fragment = renderToFragmentWithTheme(Divider, {
      $color: 'interface050',
      $border: 'borderWidth030',
      $marginTop: 'spacingSize040',
      $marginRight: 'spacingSize090',
      $marginBottom: 'spacingSize040',
      $marginLeft: 'spacingSize090',
    });

    expect(fragment).toMatchSnapshot();
  });
});
