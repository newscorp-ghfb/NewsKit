import {InteractiveDemoSection, InteractiveDemoSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {GenericComponent} from '../../../components/playground/types';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'Tabs',
    'Tab',
  ),
);

jest.mock('../../../components/playground');

describe('InteractiveDemoSection', () => {
  test('renders section as expected', () => {
    const props: InteractiveDemoSectionProps<GenericComponent> = {
      introduction: 'interactive demo introduction text goes here',
      playground: {dummy: 'playground props'} as any,
    };

    const fragment = renderToFragmentWithTheme(InteractiveDemoSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
