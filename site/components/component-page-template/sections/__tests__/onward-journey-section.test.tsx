import {OnwardJourneySection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Cell'),
);

jest.mock('../../../feature-card/feature-card');

describe('OnwardJourneySection', () => {
  test('renders section as expected', () => {
    const props: any = {
      dummy: 'onward journey/feature card props',
    };

    const fragment = renderToFragmentWithTheme(OnwardJourneySection, props);
    expect(fragment).toMatchSnapshot();
  });
});
