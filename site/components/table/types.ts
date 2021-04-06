import {MQ} from 'newskit';

export interface TableCellProps {
  minWidth?: MQ<string>;
  maxWidth?: MQ<string>;
  textAlign?: string;
  noWrap?: boolean;
}

export interface ColumnMapObject extends TableCellProps {
  cellType:
    | 'number'
    | 'icon'
    | 'checkIcon'
    | 'text'
    | 'flag'
    | 'path'
    | 'keyboardFlag'
    | 'componentLink';
}

export type TableRow = Record<
  string,
  number | string | string[] | boolean | null | undefined | JSX.Element
>;

export interface TableProps {
  columns: string[];
  rows: TableRow[];
}
