export interface ComponentAPIProps {
  components: SingleComponentAPIProps[];
}

export interface SingleComponentAPIProps {
  title?: string;
  summary?: string;
  propsTable: PropsTableProps;
  overridesTable?: PropsTableProps;
}

export interface PropsTableProps {
  columns: string[];
  rows: PropsRowProps[];
}

export type PropsRowProps = {
  name: string;
  type: string;
  description: string | JSX.Element;
  default?: string;
  required?: boolean;
};
