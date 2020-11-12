import React from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */

// Needed because the as supplied by emotion has incompatible types and were causing TS errors.
// Usage: <SomeStyledComp {...as('span')}></SomeStyledComp>
export const as = (tag: keyof JSX.IntrinsicElements): any => ({as: tag});

export const isValidNode = (node: React.ReactNode) =>
  React.isValidElement(node) ||
  typeof node === 'string' ||
  typeof node === 'number';

export const isClassComponent = (component: any) =>
  typeof component === 'function' &&
  component.prototype &&
  !!component.prototype.isReactComponent;

export const isFunctionComponent = (Component: any) =>
  typeof Component === 'function' && React.isValidElement(Component());

export const isStyledComponent = (value: any) =>
  Boolean(
    value && typeof value === 'object' && value.$$typeof && value.displayName,
  );

export const isReactComponent = (component: any) =>
  isClassComponent(component) ||
  isFunctionComponent(component) ||
  isStyledComponent(component);

const getDisplayName = (component: any) => {
  if (component.props && component.props.mdxType) {
    return component.props.mdxType;
  }
  if (component.type) {
    return component.type.displayName;
  }
  if (component.displayName) {
    return component.displayName;
  }

  return '';
};

export const hasMatchingDisplayNameWith = (
  baseComponent: any,
  matchComponent: any,
) => {
  if (baseComponent && matchComponent) {
    const baseComponentDisplayName = getDisplayName(baseComponent);

    const matchComponentDisplayName = getDisplayName(matchComponent);
    return baseComponentDisplayName === matchComponentDisplayName;
  }

  return false;
};

export const renderComponent = (node?: any) => {
  if (isReactComponent(node)) {
    return React.createElement(node as React.ComponentType);
  }
  return null;
};
