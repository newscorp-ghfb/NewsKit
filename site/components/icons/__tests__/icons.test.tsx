import {renderToFragmentWithTheme} from '../../../utils/test-utils';

import * as icons from '..';

describe('Icons', () => {
  test.each(Object.keys(icons))('%s icon renders as expected', iconName => {
    const Icon = icons[iconName as keyof typeof icons];
    // Type-safe approach: wrap the icon in a function component
    const TestComponent = () => <Icon />;
    const fragment = renderToFragmentWithTheme(TestComponent);
    expect(fragment).toMatchSnapshot();
  });
});
