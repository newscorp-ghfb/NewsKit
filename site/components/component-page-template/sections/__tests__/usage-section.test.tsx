import {UsageKind} from '../../../usage-card/types';
import {UsageSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {UsageSectionProps} from '../types';

jest.mock('../../../media-list/media-list');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
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
    };

    const fragment = renderToFragmentWithTheme(UsageSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
