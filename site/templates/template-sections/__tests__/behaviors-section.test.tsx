import {BehaviorsSection, BehaviorsSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock('../../../components/media-list/media-list.tsx');
jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('BehaviorsSection', () => {
  test('renders section as expected', () => {
    const props: BehaviorsSectionProps = {
      introduction: 'behaviours introduction text goes here',
      cards: [
        {
          title: 'Behaviour Card 1',
          description: 'description text 1',
          media: {
            src: 'media 1 src',
            alt: 'media 1',
          },
        },
        {
          title: 'Behaviour Card 2',
          description: 'description text 2',
          media: {
            src: 'media 2 src',
            alt: 'media 2',
          },
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(BehaviorsSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
