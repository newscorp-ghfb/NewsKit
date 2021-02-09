import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {Compliance} from '../compliance';

describe('Compliance', () => {
  test('renders all compliance items with N/A if there are no rules passed', () => {
    const fragment = renderToFragmentWithTheme(Compliance);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with tick if a rule is passed with true, otherwise renders N/A', () => {
    const props = {
      interactive: true,
    };
    const fragment = renderToFragmentWithTheme(Compliance, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with cross if a rule is passed with false, otherwise renders N/A', () => {
    const props = {
      interactive: false,
    };
    const fragment = renderToFragmentWithTheme(Compliance, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders N/A if null if a rule is passed with null', () => {
    const props = {
      interactive: null,
    };
    const fragment = renderToFragmentWithTheme(Compliance, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a tick, a cross and N/A true, false and null is passed respectively, all the rest are N/A', () => {
    const props = {
      interactive: true,
      variations: false,
      themes: null,
    };
    const fragment = renderToFragmentWithTheme(Compliance, props);
    expect(fragment).toMatchSnapshot();
  });
});
