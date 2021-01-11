export interface AccessibilityTablesProps {
  focusOrder?: {
    name: string;
    description: string;
    table: {
      columns: string[];
      rows: FocusOrderProps[];
    };
  };
  aria?: {
    name: string;
    description: string;
    table: {
      columns: string[];
      rows: AriaProps[];
    };
  };
  interaction?: {
    name: string;
    description: string;
    table: {
      columns: string[];
      rows: InteractionProps[];
    };
  };
}

export interface FocusOrderProps {
  order: string[];
  element: string | JSX.Element;
  role?: string;
}

export interface AriaProps {
  category: string;
  attribute: string;
  value: string;
  description: string;
}

export interface InteractionProps {
  command: string[];
  description: string;
}
