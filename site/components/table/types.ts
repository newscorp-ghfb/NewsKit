import {MQ} from 'newskit';

export interface TableCellProps {
  minWidth?: MQ<string>;
  maxWidth?: MQ<string>;
  textAlign?: string;
  noWrap?: boolean;
  cellHeader?: string;
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
    | 'colorSwatch'
    | 'colorToken'
    | 'token'
    | 'borderRadius'
    | 'borderWidth'
    | 'componentLink'
    | 'motionDurationSwatch'
    | 'motionTimingSwatch'
    | 'boxShadow'
    | 'boxOverlay'
    | 'sizeBox'
    | 'fontSize'
    | 'fontWeight'
    | 'fontLineHeight'
    | 'fontLetterSpacing'
    | 'typographyPreset';
}

export interface CellWithOverrides {
  preset: string;
  config?: {
    isItalic?: boolean;
  };
}

export type TableRowValue =
  | number
  | string
  | string[]
  | boolean
  | null
  | undefined
  | JSX.Element
  | CellWithOverrides;

export type TableRow = Record<string, TableRowValue>;

export interface TableProps {
  columnsIcon?: {
    [key: string]: React.ReactNode;
  };
  columns: string[];
  rows: TableRow[];
}
