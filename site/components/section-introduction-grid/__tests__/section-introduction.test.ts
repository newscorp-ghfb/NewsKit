import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {SectionIntroductionGrid} from '..';

describe('SectionIntroductionGrid', () => {
  test('renders with all props', () => {
    const props = {
      title: 'Title',
      children: 'Section Introduction',
    };
    const fragment = renderToFragmentWithTheme(SectionIntroductionGrid, props);
    expect(fragment).toMatchSnapshot();
  });
});
