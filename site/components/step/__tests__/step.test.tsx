import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Step} from '../step';

describe('Step', () => {
  test('renders with props', () => {
    const props = {
      media: 'guides/design-quickstart/step1/hero',
      stepText: 'Step 1',
      timerText: '3+ mins',
    };
    const fragment = renderToFragmentWithTheme(Step, props);
    expect(fragment).toMatchSnapshot();
    jest.spyOn(console, 'error').mockImplementation();
  });
});
