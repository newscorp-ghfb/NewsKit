import {SEOSection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {SEOSectionProps} from '../types';

jest.mock('../../../media-list/media-list');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('SEOSection', () => {
  test('renders section as expected', () => {
    const props: SEOSectionProps = {
      introduction: 'seo introduction text goes here',
      title: 'seo title',
      cellProps: {dummy: 'cell props'} as any,
      image: {dummy: 'optional image props'} as any,
    };

    const fragment = renderToFragmentWithTheme(SEOSection, props);
    expect(fragment).toMatchSnapshot();
  });
});
