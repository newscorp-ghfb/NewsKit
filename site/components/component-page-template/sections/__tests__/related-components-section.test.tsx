import {RelatedComponentsSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {RelatedComponentsSectionProps} from '../types';

jest.mock('../../../media-list/media-list');

describe('RelatedComponentsSection', () => {
  test('renders section as expected', () => {
    const props: RelatedComponentsSectionProps = {
      introduction: 'behaviours introduction text goes here',
      cards: [
        {
          title: 'Related Components Card 1',
          description: 'description text 1',
          media: {
            src: 'media 1 src',
            alt: 'media 1',
          },
        },
        {
          title: 'Related Components Card 2',
          description: 'description text 2',
          media: {
            src: 'media 2 src',
            alt: 'media 2',
          },
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(RelatedComponentsSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
