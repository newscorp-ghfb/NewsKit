import {TableRow} from '../table';

export interface ComponentTabsWithTableProps {
  components: TabsWithTableProps[];
  showSeparator?: boolean;
}

export interface TabsWithTableProps {
  title?: string;
  summary?: string | JSX.Element;
  description?: string;
  tabs: {
    header: string;
    columnHeader: string[];
    description?: string;
    rows: TableRow[];
  }[];
}
