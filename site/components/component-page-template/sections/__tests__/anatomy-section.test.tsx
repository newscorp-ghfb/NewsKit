import {AnatomySection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {AnatomySectionProps} from '../types';

jest.mock('../../../table/table');

// TODO: add tests after implementing Table
describe.skip('AnatomySection', () => {
  test('renders section as expected', () => {
    const props: AnatomySectionProps = {} as any;
    const fragment = renderToFragmentWithTheme(AnatomySection, props);
    expect(fragment).toMatchSnapshot();
  });
});
