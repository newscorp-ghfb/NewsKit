import {IntroductionSection, IntroductionSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../../../components/page-introduction/page-introduction.tsx');
jest.mock('../../../components/meta/meta');

describe('IntroductionSection', () => {
  test('renders section as expected', () => {
    const props: IntroductionSectionProps = {
      pageIntroduction: {dummy: 'page intro props'} as any,
      meta: {dummy: 'meta props'} as any,
    };

    const fragment = renderToFragmentWithTheme(IntroductionSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
