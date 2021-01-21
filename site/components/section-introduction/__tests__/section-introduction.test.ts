import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {SectionIntroduction} from '..';

describe('SectionIntroduction', () => {
  test('renders with all props', () => {
    const props = {
      title: 'Title',
      children: 'Section Introduction',
    };
    const fragment = renderToFragmentWithTheme(SectionIntroduction, props);
    expect(fragment).toMatchSnapshot();
  });
});
