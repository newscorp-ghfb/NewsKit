import React from 'react';
import {AccessibilitySection} from '..';
import {renderToFragmentWithTheme} from '../../../../utils/test-utils';
import {AccessibilitySectionProps} from '../types';

jest.mock('../../../table/table');

describe('AccessibilitySection', () => {
  test('renders section as expected', () => {
    const props: AccessibilitySectionProps = {
      introduction: 'accessibility introduction text goes here',
      focusOrder: {
        title: 'Focus order',
        description: 'focus order description',
        table: {
          columns: ['Order', 'Element', 'Role'],
          rows: [
            {
              order: ['1'],
              element: 'element 1',
              role: 'role 1',
            },
            {
              order: ['2'],
              element: <span>element 2</span>,
            },
          ],
        },
      },
      aria: {
        title: 'ARIA',
        description: 'aria description',
        table: {
          columns: ['Element', 'Attribute', 'Value', 'Description'],
          rows: [
            {
              category: 'category 1',
              attribute: 'attribute 1',
              value: 'value 1',
              description: 'description 1 text here',
            },
            {
              category: 'category 2',
              attribute: 'attribute 2',
              value: 'value 2',
              description: <span>description 2 text here</span>,
            },
          ],
        },
      },
      interaction: {
        title: 'Interaction',
        description: 'interaction description',
        table: {
          columns: ['Command', 'Description'],
          rows: [
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
      },
    };

    const fragment = renderToFragmentWithTheme(AccessibilitySection, props);
    expect(fragment).toMatchSnapshot();
  });
});
