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
  test('renders with mandatory title and introduction', () => {
    const props = {
      title: 'Title',
      introduction: 'Introduction',
    };
    const fragment = renderToFragmentWithTheme(SectionIntroduction, props);
    expect(fragment).toMatchSnapshot();
  });
});
