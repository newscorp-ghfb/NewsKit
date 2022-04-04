import React from 'react';
import {isFragment} from 'react-is';

// these utility function are copied from https://github.com/fernandopasik/react-children-utilities
// the library will be added as a dependency with PPDSC-1432 - Add react-children-utilities as dependency
// https://nidigitalsolutions.jira.com/browse/PPDSC-1432
// After that these functions (and this file) needs to be deleted from here and imported from react-children-utilities library.

const hasChildren = (
  element: React.ReactNode,
): element is React.ReactElement<{children: React.ReactNode[]}> =>
  React.isValidElement<{children?: React.ReactNode[]}>(element) &&
  Boolean(element.props.children);

const hasComplexChildren = (
  element: React.ReactNode,
): element is React.ReactElement<{children: React.ReactNode[]}> =>
  React.isValidElement(element) &&
  hasChildren(element) &&
  React.Children.toArray(element.props.children).reduce(
    (response: boolean, child: React.ReactNode): boolean =>
      response || React.isValidElement(child),
    false,
  );

export type MapFunction = (
  child: React.ReactNode,
  index?: number,
  children?: readonly React.ReactNode[],
) => React.ReactNode;

export const deepMap = (
  children: React.ReactNode,
  deepMapFn: MapFunction,
): React.ReactNode[] =>
  React.Children.toArray(children).map(
    (
      child: React.ReactNode,
      index: number,
      mapChildren: readonly React.ReactNode[],
    ) => {
      if (React.isValidElement(child) && hasComplexChildren(child)) {
        // Clone the child that has children and map them too
        return deepMapFn(
          React.cloneElement(child, {
            ...child.props,
            children: deepMap(child.props.children, deepMapFn),
          }),
        );
      }
      return deepMapFn(child, index, mapChildren);
    },
  );

export const childIsString = (child: React.ReactNode): boolean => {
  if (typeof child === 'string') {
    return true;
  }
  // unpack fragment
  if (isFragment(child) && typeof child.props.children === 'string') {
    return true;
  }
  return false;
};

export const childrenIsString = (children: React.ReactNode): boolean =>
  childIsString(children) ||
  (Array.isArray(children) && children.some(childIsString));
