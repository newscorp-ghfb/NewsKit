import {TableRow} from '../table';

export interface ComponentTabsWithTableProps {
  components: TabsWithTableProps[];
}

export interface TabsWithTableProps {
  title?: string;
  summary?: string;
  description?: string;
  tabs: {
    header: string;
    columnHeader: string[];
    description?: string;
    rows: TableRow[];
  }[];
}
