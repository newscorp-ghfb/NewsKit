import {StatesSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {StatesSectionProps} from '../types';

jest.mock('../../../media-list/media-list');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('StatesSection', () => {
  test('renders section as expected', () => {
    const props: StatesSectionProps = {
      introduction: 'states introduction text goes here',
      cards: [
        {
          title: 'States Card 1',
          description: 'description text 1',
          media: {
            src: 'media 1 src',
            alt: 'media 1',
          },
        },
        {
          title: 'States Card 2',
          description: 'description text 2',
          media: {
            src: 'media 2 src',
            alt: 'media 2',
          },
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(StatesSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
