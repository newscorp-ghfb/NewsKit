import {ComplianceSection, ComplianceSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock('../../../components/table/table');
jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('ComplianceSection', () => {
  test('renders section as expected', () => {
    const props: ComplianceSectionProps = {
      behaviours: true,
      states: false,
      themes: null,
    };

    const fragment = renderToFragmentWithTheme(ComplianceSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
