import {IntroductionSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {IntroductionSectionProps} from '../types';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

jest.mock('../../../page-introduction/page-introduction');
jest.mock('../../../meta/meta');

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
