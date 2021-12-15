import {renderToFragmentWithTheme} from '../../../utils/test-utils';
import {TabsWithTable} from '../tabs-with-table';
import {TabsWithTableProps} from '../types';

const tabWithTableData: TabsWithTableProps[] = [
  {
    title: 'Section title',
    summary: 'Section summary',
    tabs: [
      {
        header: 'Title1',
        columnHeader: ['Header1', 'Header2'],
        description: ' Tab1 description',
        rows: [
          {header1: 'row1', header2: 'row1'},
          {header1: 'row2', header2: 'row2'},
        ],
      },
      {
        header: 'Title2',
        columnHeader: ['Header1', 'Header2'],
        description: ' Tab2 description',
        rows: [
          {header1: 'row1', header2: 'row1'},
          {header1: 'row2', header2: 'row2'},
        ],
      },
    ],
  },
];

describe('TabsWithTable', () => {
  test('renders with default data', () => {
    const fragment = renderToFragmentWithTheme(TabsWithTable, {
      components: tabWithTableData,
    });
    expect(fragment).toMatchSnapshot();
  });
});
