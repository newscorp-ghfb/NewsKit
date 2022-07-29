import {renderWithTheme} from 'newskit/test/test-utils';
import ReleaseBadges from '../release-badges';

describe('ReleaseBadges', () => {
  test('renders patch badge', () => {
    const {asFragment} = renderWithTheme(ReleaseBadges, {
      change_level: 'patch',
    });
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders minor badge', () => {
    const {asFragment} = renderWithTheme(ReleaseBadges, {
      change_level: 'minor',
    });
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders major and breaking change badges', () => {
    const {asFragment} = renderWithTheme(ReleaseBadges, {
      change_level: 'major',
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
