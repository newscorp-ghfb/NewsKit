import {renderWithTheme} from '../../../utils/test-utils';
import ReleaseNotes from '../release-notes';
import '@testing-library/jest-dom';

describe('ReleaseNotes', () => {
  test('renders correctly', () => {
    const {asFragment} = renderWithTheme(ReleaseNotes, {
      body:
        '### New Features 🎉\r\n* feat(PPDSC-2151): Add Outline Style Presets by @tbradbury in https://github.com/newscorp-ghfb/newskit/pull/214\r\n',
    });
    expect(asFragment()).toMatchSnapshot();
  });
  test('renders code snippets correctly', () => {
    const {asFragment} = renderWithTheme(ReleaseNotes, {
      body:
        '### Emotion packages as peer dependencies\\r\\nStarting from version 6, newskit does not include `@emotion/styled` & `@emotion/react` libraries, which means you need to install these separately:\\r\\n```\\r\\n// npm\\r\\nnpm install newskit@6.0.0 @emotion/react @emotion/styled\\r\\n// or yarn\\r\\nyarn add newskit@6.0.0 @emotion/react @emotion/styled\\r\\n```\\r\\n---\\r\\n',
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
