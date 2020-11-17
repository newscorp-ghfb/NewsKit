export interface PropProps {
  name: string;
  type: string;
  enum?: boolean;
  default?: string;
  required?: boolean;
  nested?: boolean;
}

export interface ColumnNames {
  columns: string[];
}
