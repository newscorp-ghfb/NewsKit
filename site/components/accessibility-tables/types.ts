import {TableRow} from '../table';

export interface AccessibilityTablesProps {
  focusOrder?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: FocusOrderProps[];
    };
  };
  aria?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: AriaProps[];
    };
  };
  interaction?: {
    title: string;
    description: string;
    table: {
      columns: string[];
      rows: InteractionProps[];
    };
  };
}

export interface FocusOrderProps extends TableRow {
  order: string[];
  element: string | JSX.Element;
  role?: string;
}

export interface AriaProps extends TableRow {
  category: string;
  attribute: string;
  value: string;
  description: string | JSX.Element;
}

export interface InteractionProps extends TableRow {
  command: string[];
  description: string | JSX.Element;
}
