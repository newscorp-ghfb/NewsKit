import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {Meta} from '../meta';
import {MetaStatus} from '../types';

describe('Meta', () => {
  test('renders with mandatory props', () => {
    const props = {
      status: MetaStatus.Supported,
      introduced: 'v0.1',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    };
    const fragment = renderToFragmentWithTheme(Meta, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with mandatory props and figma button', () => {
    const props = {
      status: MetaStatus.Supported,
      introduced: 'v0.1',
      codeUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/ncu-newskit',
    };
    const fragment = renderToFragmentWithTheme(Meta, props);
    expect(fragment).toMatchSnapshot();
  });
});
