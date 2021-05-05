import {TableRow} from '../table';

export interface ComponentAPIProps {
  components: SingleComponentAPIProps[];
}

export interface SingleComponentAPIProps {
  title?: string;
  summary?: string;
  propsRows: PropsRowsProps[];
  overridesRows?: OverridesRowsProps[];
}

interface CommonProps extends TableRow {
  type: string;
  description: string | JSX.Element;
  default?: string;
  required?: boolean;
}

export interface PropsRowsProps extends CommonProps {
  name: string;
}

export interface OverridesRowsProps extends CommonProps {
  attribute: string;
}
