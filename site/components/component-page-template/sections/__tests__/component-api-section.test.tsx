import React from 'react';
import {ComponentAPISection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {ComponentAPISectionProps} from '../types';

jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents(
    'Grid',
    'Cell',
    'Tabs',
    'Tab',
  ),
);

jest.mock('../../../table/table');

describe('ComponentAPISection', () => {
  test('renders section as expected', () => {
    const props: ComponentAPISectionProps = {
      introduction: 'component api introduction text goes here',
      components: [
        {
          title: 'Component',
          summary: 'Summary for the component variant',
          propsTable: {
            columns: ['Name', 'Type', 'Default', 'Description', 'Required'],
            rows: [
              {
                name: 'children',
                type: 'string',
                required: true,
                description: (
                  <>The content of the Component is passed as the children.</>
                ),
              },
            ],
          },
          overridesTable: {
            columns: ['Name', 'Type', 'Description'],
            rows: [
              {
                name: 'spaceInset',
                type: 'MQ<string>',
                description:
                  'If provided, this overrides the padding of the Component.',
              },
            ],
          },
        },
      ],
    };

    const fragment = renderToFragmentWithTheme(ComponentAPISection, props);
    expect(fragment).toMatchSnapshot();
  });
});
