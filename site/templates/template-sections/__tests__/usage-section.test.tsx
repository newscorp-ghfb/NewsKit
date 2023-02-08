import {UsageKind} from '../../../components/usage-card/types';
import {UsageSection, UsageSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock('../../../components/media-list/media-list.tsx');
jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'InlineMessage',
  ),
);

describe('UsageSection', () => {
  test('renders section as expected', () => {
    const props: UsageSectionProps = {
      introduction: 'states introduction text goes here',
      cards: [
        {
          description: 'description text 1',
          media: {
            src: 'media 1 src',
            alt: 'media 1',
          },
          kind: UsageKind.DO,
        },
        {
          description: 'description text 2',
          media: {
            src: 'media 2 src',
            alt: 'media 2',
          },
          kind: UsageKind.DONT,
        },
      ],
      notice: 'Inline Message',
    };

    const fragment = renderToFragmentWithTheme(UsageSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
