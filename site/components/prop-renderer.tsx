import React from 'react';

export interface PropRendererProps extends Record<string, unknown> {
  Component: React.ComponentType;
}

//
// Specifying a prop on a component, inside a table, inside an mdx file will break rendering of that component.
// Use this PropRenderer comp to work around this. Render a <PropRenderer> specifying "Component={MyComp}" prop,
// along with any other required props.
//
export const PropRenderer: React.FC<PropRendererProps> = ({
  Component,
  ...rest
}) => {
  const props = Object.entries(rest).reduce(
    (acc, [k, v]) => {
      const key = k.startsWith('_') ? `${k.slice(1)}` : k;
      acc[key] = v;
      return acc;
    },
    {} as Record<string, unknown>,
  );
  return <Component {...props} />;
};
