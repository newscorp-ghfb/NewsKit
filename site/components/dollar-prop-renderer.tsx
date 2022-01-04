import React from 'react';

export interface DollarPropRendererProps extends Record<string, unknown> {
  Component: React.ComponentType;
}

//
// Specifying a $prop on a component, inside a table, inside an mdx file will break rendering of that component.
// Use this DollarPropRenderer comp to work around this. Render a <DollarPropRenderer> specifying "Component={MyComp}" prop,
// along with any other required props. Any prop which starts with a dollar sign should instead be specified with an underscore,
// e.g. $size="sizing020" becomes _size="sizing020". These underscore props will be passed through to Component with $ instead.
//
export const DollarPropRenderer: React.FC<DollarPropRendererProps> = ({
  Component,
  ...rest
}) => {
  const props = Object.entries(rest).reduce(
    (acc, [k, v]) => {
      const key = k.startsWith('_') ? `$${k.slice(1)}` : k;
      acc[key] = v;
      return acc;
    },
    {} as Record<string, unknown>,
  );
  return <Component {...props} />;
};
