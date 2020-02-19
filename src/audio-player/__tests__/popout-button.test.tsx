import {renderToFragmentWithTheme} from '../../test/test-utils';
import {PopoutButton} from '../controls/popout-button';

describe('PopoutButton', () => {
  test('renders popout button', () => {
    const fragment = renderToFragmentWithTheme(PopoutButton);
    expect(fragment).toMatchSnapshot();
  });

  test('popout button opens window to href', () => {
    const fragment = renderToFragmentWithTheme(PopoutButton);
    expect(fragment).toMatchSnapshot();
  });
});
