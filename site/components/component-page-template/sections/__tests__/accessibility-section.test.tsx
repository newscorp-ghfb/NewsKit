import React from 'react';
import {AccessibilitySection, AccessibilitySectionProps} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';

jest.mock('../../../table/table');
jest.mock(
  'newskit',
  require('../../../../utils/test-utils').mockNewsKitComponents('Grid', 'Cell'),
);

describe('AccessibilitySection', () => {
  test('renders section as expected', () => {
    const props: AccessibilitySectionProps = {
      introduction: 'accessibility introduction text goes here',
      focusOrder: {
        title: 'Focus order',
        description: 'focus order description',
        tableRows: [
          {
            order: '1',
            element: 'element 1',
            role: 'role 1',
          },
          {
            order: '2',
            element: <span>element 2</span>,
          },
        ],
      },
      aria: {
        title: 'ARIA',
        description: 'aria description',
        tableRows: [
          {
            element: 'element 1',
            attribute: 'attribute 1',
            value: 'value 1',
            description: 'description 1 text here',
          },
          {
            element: 'element 2',
            attribute: 'attribute 2',
            value: 'value 2',
            description: <span>description 2 text here</span>,
          },
        ],
      },
      interaction: {
        title: 'Interaction',
        description: 'interaction description',
        tableRows: [
          {
            command: ['Ctrl', 'Rtn'],
            description: 'description ctrl + rtn',
          },
          {
            command: ['Ctrl', 'Space'],
            description: <p>description ctrl + space</p>,
          },
        ],
      },
    };

    const fragment = renderToFragmentWithTheme(AccessibilitySection, props);
    expect(fragment).toMatchSnapshot();
  });
});
