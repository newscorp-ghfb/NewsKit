import {TableRow} from '../table';

export interface ComponentAPIProps {
  components: SingleComponentAPIProps[];
}

export interface SingleComponentAPIProps {
  title?: string;
  summary?: string;
  propsSummary?: string;
  argsSummary?: string;
  overridesSummary?: string;
  propsRows?: PropsRowsProps[];
  argsRows?: ArgumentsRowsProps[];
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
export interface ArgumentsRowsProps extends CommonProps {
  order: number;
}
