import {renderToFragmentWithTheme} from '../../../utils/test-utils';

import * as icons from '..';

describe('Icons', () => {
  test.each(Object.keys(icons))('%s icon renders as expected', iconName => {
    const Icon = icons[iconName as keyof typeof icons];
    const fragment = renderToFragmentWithTheme(Icon);
    expect(fragment).toMatchSnapshot();
  });
});
