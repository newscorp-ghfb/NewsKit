import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isComponent = (value: any): value is React.ComponentType =>
  Boolean(value && (value.$$typeof || value.displayName));

export const withProps = (
  Component: React.ComponentType,
  props: Record<string, unknown>,
  displayName?: string,
) => {
  const Comp: React.FC = p => <Component {...props} {...p} />;
  Comp.displayName = displayName || Component.displayName;
  return Comp;
};
