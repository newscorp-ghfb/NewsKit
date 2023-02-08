import {CommonSection, CommonSectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'Image',
  ),
);

describe('CommonSection', () => {
  test('renders section as expected', () => {
    const props: CommonSectionProps = {
      introduction: 'introduction text goes here',
      title: 'title',
      id: 'id',
      toc: 'toc',
      media: {
        src: 'media 1 src',
        alt: 'media 1',
      },
      hideSeparator: true,
      lastItem: true,
      children: 'description',
    };

    const fragment = renderToFragmentWithTheme(CommonSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
