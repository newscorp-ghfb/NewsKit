import {isValidElement, ReactNode} from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */

// Needed because the as supplied by emotion has incompatible types and were causing TS errors.
// Usage: <SomeStyledComp {...as('span')}></SomeStyledComp>
export const as = (tag: keyof JSX.IntrinsicElements): any => ({as: tag});

export const isValidNode = (node: ReactNode) =>
  isValidElement(node) || typeof node === 'string' || typeof node === 'number';

export const hasMatchingDisplayNameWith = (
  baseComponent: any,
  matchComponent: any,
) => {
  if (baseComponent && matchComponent) {
    const baseComponentDisplayName = baseComponent.type
      ? baseComponent.type.displayName
      : baseComponent.displayName;
    const matchComponentDisplayName = matchComponent.type
      ? matchComponent.type.displayName
      : matchComponent.displayName;
    return baseComponentDisplayName === matchComponentDisplayName;
  }
  return false;
};
