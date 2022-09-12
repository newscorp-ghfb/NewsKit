import {TableRow} from '../table';

export interface ComponentAPIProps {
  components: SingleComponentAPIProps[];
}

export interface SingleComponentAPIProps {
  title: string; // title needs to be manadatory and unique for event tracking purposes
  summary?: string | JSX.Element;
  propsSummary?: string;
  argsSummary?: string;
  overridesSummary?: string;
  propsRows?: PropsRowsProps[];
  propsFooter?: React.ReactNode;
  argsRows?: ArgumentsRowsProps[];
  argsFooter?: React.ReactNode;
  overridesRows?: OverridesRowsProps[];
  overridesFooter?: React.ReactNode;
}

interface CommonProps extends TableRow {
  type: string | string[];
  description: string | JSX.Element;
  default?: string | string[];
  required?: boolean | null;
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
