import {OptionsSection, OptionsSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';

jest.mock('../../../media-list/media-list');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('OptionsSection', () => {
  test('renders section as expected', () => {
    const props: OptionsSectionProps = {
      introduction: 'behaviours introduction text goes here',
      cards: [
        {
          title: 'Options Card 1',
          description: 'description text 1',
          media: {
            src: 'media 1 src',
            alt: 'media 1',
          },
        },
        {
          title: 'Options Card 2',
          description: 'description text 2',
          media: {
            src: 'media 2 src',
            alt: 'media 2',
          },
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(OptionsSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
