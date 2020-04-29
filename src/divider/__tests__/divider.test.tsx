import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Divider} from '..';

describe('Divider', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(Divider);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with props', () => {
    const fragment = renderToFragmentWithTheme(Divider, {
      color: 'interface050',
      border: 'borderWidth030',
      marginTop: 'sizing040',
      marginRight: 'sizing090',
      marginBottom: 'sizing040',
      marginLeft: 'sizing090',
    });

    expect(fragment).toMatchSnapshot();
  });
});
