import {renderWithTheme} from 'newskit/test/test-utils';
import ReleaseHeader from '../release-header';

describe('ReleaseHeader', () => {
  test('renders correctly', () => {
    const {asFragment} = renderWithTheme(ReleaseHeader, {
      change_level: 'patch',
      tag_name: 'v5.7.0',
      published_at: '2022-07-18T11:41:49Z',
      created_at: '2022-07-18T11:41:49Z',
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
