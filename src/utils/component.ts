import {isValidElement, ReactNode} from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */

// Needed because the as supplied by emotion has incompatible types and were causing TS errors.
// Usage: <SomeStyledComp {...as('span')}></SomeStyledComp>
export const as = (tag: keyof JSX.IntrinsicElements): any => ({as: tag});

export const isValidNode = (node: ReactNode) =>
  isValidElement(node) || typeof node === 'string' || typeof node === 'number';

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
