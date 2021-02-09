import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {PageIntroduction} from '..';

describe('Page Introduction', () => {
  test('renders with mandatory props', () => {
    const props = {
      type: 'Component',
      name: 'ComponentName',
      hero: {src: '/static/button-hero.svg', alt: 'button-hero'},
      introduction: 'Component Introduction',
    };
    const fragment = renderToFragmentWithTheme(PageIntroduction, props);
    expect(fragment).toMatchSnapshot();
  });
});
