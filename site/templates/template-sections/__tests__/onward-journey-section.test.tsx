import {OnwardJourneySection} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Cell'),
);

jest.mock('../../../components/feature-card/feature-card');

describe('OnwardJourneySection', () => {
  test('renders section as expected', () => {
    const fragment = renderToFragmentWithTheme(OnwardJourneySection);
    expect(fragment).toMatchSnapshot();
  });
});
