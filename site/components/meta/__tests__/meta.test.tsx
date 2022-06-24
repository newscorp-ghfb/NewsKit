import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Meta} from '../meta';
import {MetaStatus} from '../types';

describe('Meta', () => {
  test('renders with mandatory props', () => {
    const props = {
      status: MetaStatus.Supported,
      introduced: 'v0.1',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
    };
    const fragment = renderToFragmentWithTheme(Meta, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with mandatory props and version above v5', () => {
    const props = {
      status: MetaStatus.Supported,
      introduced: 'v5.0.1',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
    };
    const fragment = renderToFragmentWithTheme(Meta, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with mandatory props and figma button', () => {
    const props = {
      status: MetaStatus.Supported,
      introduced: 'v0.1',
      introducedLink: false,
      introducedUrl:
        'https://github.com/newscorp-ghfb/newskit/releases/tag/v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    };
    const fragment = renderToFragmentWithTheme(Meta, props);
    expect(fragment).toMatchSnapshot();
  });
});
