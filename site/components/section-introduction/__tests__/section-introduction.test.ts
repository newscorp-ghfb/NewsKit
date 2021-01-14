import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {SectionIntroduction} from '..';

describe('SectionIntroduction', () => {
  test('renders with mandatory title', () => {
    const props = {
      title: 'Title',
    };
    const fragment = renderToFragmentWithTheme(SectionIntroduction, props);
    expect(fragment).toMatchSnapshot();
  });
});
