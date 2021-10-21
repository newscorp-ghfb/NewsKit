import React from 'react';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {AnatomySection, AnatomySectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock('../../../components/table/table');
jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('AnatomySection', () => {
  test('renders section as expected', () => {
    const props: AnatomySectionProps = {
      introduction: 'anatomy introduction',
      media: getIllustrationComponent('https://example.com/image.png'),
      rows: [
        {
          name: 'row 1',
          description: 'description 1',
          component: 'Component1',
          optional: true,
        },
        {
          name: 'row 2',
          description: <span>description 2</span>,
          component: 'Component2',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(AnatomySection, props);
    expect(fragment).toMatchSnapshot();
  });
});
