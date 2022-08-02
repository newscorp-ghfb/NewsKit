import {renderWithTheme} from 'newskit/test/test-utils';
import ReleaseNotes from '../release-notes';
import '@testing-library/jest-dom';

const BODY =
  '### New Features 🎉\r\n* feat(PPDSC-2151): Add Outline Style Presets by @tbradbury in https://github.com/newscorp-ghfb/newskit/pull/214\r\n';

describe('ReleaseNotes', () => {
  test('renders correctly', () => {
    const {asFragment} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(asFragment()).toMatchSnapshot();
  });
});
