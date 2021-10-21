import React from 'react';
import {ComponentAPISection, ComponentAPISectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../utils/test-utils';

jest.mock(
  'newskit',
  require('../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'Tabs',
    'Tab',
  ),
);

jest.mock('../../../components/table/table');

describe('ComponentAPISection', () => {
  test('renders section as expected', () => {
    const props: ComponentAPISectionProps = {
      introduction: 'component api introduction text goes here',
      components: [
        {
          title: 'Component',
          summary: 'Summary for the component variant',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              required: true,
              description: (
                <>The content of the Component is passed as the children.</>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the padding of the Component.',
            },
          ],
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(ComponentAPISection, props);
    expect(fragment).toMatchSnapshot();
  });
});
