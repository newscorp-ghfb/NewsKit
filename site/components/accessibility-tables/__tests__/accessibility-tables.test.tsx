import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {AccessibilityTables} from '..';

describe('Accessibility', () => {
  test('doesnt render tables if there is no data', () => {
    const fragment = renderToFragmentWithTheme(AccessibilityTables);
    expect(fragment).toMatchSnapshot();
  });
  test('renders focus order table with keyCombo if data is provided', () => {
    const props = {
      focusOrder: {
        title: 'Focus order',
        description: 'Some random text here',
        table: {
          columns: ['Order', 'Element', 'Role'],
          rows: [
            {
              order: ['1'],
              element: 'element',
              role: 'Role',
            },
          ],
        },
      },
    };
    const fragment = renderToFragmentWithTheme(AccessibilityTables, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders keyboard interactions table with keyCombo if data is provided', () => {
    const props = {
      interaction: {
        title: 'Keyboard Interactions',
        description: 'Some random text',
        table: {
          columns: ['Command', 'Description'],
          rows: [
            {
              command: ['ctrl', 'esc'],
              description: 'description',
            },
          ],
        },
      },
    };
    const fragment = renderToFragmentWithTheme(AccessibilityTables, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders aria interactions table if data is provided', () => {
    const props = {
      aria: {
        title: 'WAI-ARIA',
        description: 'Some random text',
        table: {
          columns: ['Category', 'Attribute', 'Value', 'Description'],
          rows: [
            {
              category: '2',
              attribute: 'description',
              value: 'value',
              description: 'description',
            },
          ],
        },
      },
    };
    const fragment = renderToFragmentWithTheme(AccessibilityTables, props);
    expect(fragment).toMatchSnapshot();
  });
});
