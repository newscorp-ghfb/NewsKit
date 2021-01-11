import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import {Table} from '..';

describe('Table', () => {
  test('renders with default styles', () => {
    const props = {
      columns: ['Col', 'Column'],
      rows: [
        {
          col: 'col',
          column: 'column',
        },
        {
          col: 'col',
          column: 'column',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Table, props);
    expect(fragment).toMatchSnapshot();
  });
  test('wraps content with styledFlag if the column is either Name, Type or Default styles', () => {
    const props = {
      columns: ['Name', 'Type', 'Default'],
      rows: [
        {
          name: 'name',
          type: 'type',
          default: 'default',
        },
        {
          name: 'name',
          type: 'type',
          default: 'default',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Table, props);
    expect(fragment).toMatchSnapshot();
  });

  test('wraps content with styledFlag if the column is either Name, Type or Default styles', () => {
    const props = {
      columns: ['Name', 'Type', 'Default'],
      rows: [
        {
          name: 'name',
          type: 'type',
          default: 'default',
        },
        {
          name: 'name',
          type: 'type',
          default: 'default',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Table, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders IconFilledCheckCircle if we pass true for a `Required` columm', () => {
    const props = {
      columns: ['Column', 'Required'],
      rows: [
        {
          column: 'column',
          required: true,
        },
        {
          column: 'column',
        },
      ],
    };
    const fragment = renderToFragmentWithTheme(Table, props);
    expect(fragment).toMatchSnapshot();
  });
});
