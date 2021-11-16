import {TableRow} from '../table';

export interface ComponentColoursTableProps {
  components: ColoursTableProps[];
}

export interface ColoursTableProps {
  title: string;
  summary: string;
  description?: string;
  tabs: {
    header: string;
    rows: TableRow[];
    description: string;
  }[];
}
