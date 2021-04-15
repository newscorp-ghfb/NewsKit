import {ComplianceSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {ComplianceSectionProps} from '../types';

jest.mock('../../../table/table');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

// TODO: add tests after implementing Table
describe.skip('ComplianceSection', () => {
  test('renders section as expected', () => {
    const props: ComplianceSectionProps = {
      interactive: true,
      variations: false,
      themes: null,
    };

    const fragment = renderToFragmentWithTheme(ComplianceSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
