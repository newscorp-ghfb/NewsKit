import React, {useCallback} from 'react';
import {useControlled} from '../utils/hooks';
import {AccordionGroupProps, AccordionProps} from './types';
import {hasMatchingDisplayNameWith} from '../utils/component';
import {Accordion} from './accordion';

const toArray = (
  value: number | number[] | 'all' | undefined,
  arrayLength: number,
): number[] | undefined => {
  if (value === 'all') {
    return Array.from(Array(arrayLength).keys());
  }

  if (value !== undefined && !Array.isArray(value)) {
    return [value];
  }
  return value;
};

const maybeSingle = (
  array: number[] | undefined,
  onlyOne: boolean | undefined,
): number[] | undefined => {
  if (Array.isArray(array) && onlyOne) {
    return [...array].splice(0, 1);
  }

  return array;
};

const unifyValue = (
  value: number | number[] | 'all' | undefined,
  arrayLength: number,
  single: boolean | undefined,
): number[] | undefined => maybeSingle(toArray(value, arrayLength), single);

export const AccordionGroup = React.forwardRef<
  HTMLInputElement,
  AccordionGroupProps
>(
  (
    {
      children,
      defaultExpanded = [],
      onChange,
      expanded,
      expandSingle,
      ...restProps
    },
    ref,
  ) => {
    const childrenArray = React.Children.toArray(children);

    const [expandedList, setExpandedState] = useControlled<number[]>({
      controlledValue: unifyValue(expanded, childrenArray.length, expandSingle),
      defaultValue: unifyValue(
        defaultExpanded,
        childrenArray.length,
        expandSingle,
      ),
    }) as [number[], (state: number[]) => void];

    const handleChange = useCallback(
      (index: number) => {
        let newExpandedState: number[] = [];

        // in the case only 1 accordion is allowed to be open
        if (expandSingle) {
          // replace current the expanded accordion with the new one
          if (!expandedList.includes(index)) {
            newExpandedState = [index];
          } else {
            // close all when you click on the same accordion
            newExpandedState = [];
          }

          //
        } else {
          // eslint-disable-next-line no-lonely-if
          if (!expandedList.includes(index)) {
            // add to the list of expanded accordions
            newExpandedState = [...expandedList, index];
          } else {
            // remove from the list of expanded accordions
            newExpandedState = expandedList.filter(i => i !== index);
          }
        }

        setExpandedState(newExpandedState);

        if (onChange) {
          onChange(newExpandedState);
        }
      },
      [setExpandedState, expandedList, expandSingle, onChange],
    );

    return (
      <div ref={ref} {...restProps}>
        {childrenArray.map((child, index: number) => {
          if (hasMatchingDisplayNameWith(child, Accordion)) {
            return React.cloneElement(
              child as React.ReactElement<AccordionProps>,
              {
                expanded: expandedList.includes(index),
                onChange: () => handleChange(index),
              },
            );
          }
          return child;
        })}
      </div>
    );
  },
);
