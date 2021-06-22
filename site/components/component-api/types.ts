import {TableRow} from '../table';

export interface ComponentAPIProps {
  components: SingleComponentAPIProps[];
}

export interface SingleComponentAPIProps {
  title?: string;
  summary?: string;
  propsRows: PropsRowsProps[];
  overridesRows?: OverridesRowsProps[];
  infoNotice?: React.ReactNode;
}

interface CommonProps extends TableRow {
  type: string | string[];
  description: string | JSX.Element;
  default?: string | string[];
  required?: boolean;
}

export interface PropsRowsProps extends CommonProps {
  name: string;
}

export interface OverridesRowsProps extends CommonProps {
  attribute: string;
}
