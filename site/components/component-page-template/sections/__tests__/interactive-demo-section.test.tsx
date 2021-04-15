import {InteractiveDemoSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {InteractiveDemoSectionProps} from '../types';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'Tabs',
    'Tab',
  ),
);

jest.mock('../../../playground');

describe('InteractiveDemoSection', () => {
  test('renders section as expected', () => {
    const props: InteractiveDemoSectionProps = {
      introduction: 'interactive demo introduction text goes here',
      playground: {dummy: 'playground props'} as any,
    };

    const fragment = renderToFragmentWithTheme(InteractiveDemoSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
