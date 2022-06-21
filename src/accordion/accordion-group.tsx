import React, {useCallback} from 'react';
import {useControlled} from '../utils/hooks';
import {AccordionGroupProps, AccordionProps} from './types';
import {hasMatchingDisplayNameWith} from '../utils/component';
import {Accordion} from './accordion';

const unifyValue = (
  value: number | number[] | undefined,
): number[] | undefined => {
  if (value !== undefined && !Array.isArray(value)) {
    return [value];
  }
  return value;
};

export const AccordionGroup = React.forwardRef<
  HTMLInputElement,
  AccordionGroupProps
>(
  (
    {children, defaultExpanded = [], onChange, expanded, single, ...restProps},
    ref,
  ) => {
    const [expandedList, setExpandedState] = useControlled<number[]>({
      controlledValue: unifyValue(expanded),
      defaultValue: unifyValue(defaultExpanded),
    }) as [number[], (state: number[]) => void];

    const handleChange = useCallback(
      (isExpanded: boolean, index: number) => {
        let newExpandedState: number[] = [];

        // in the case only 1 accordion is allowed to be open
        if (single) {
          // replace current the expanded accordion with the new one
          if (isExpanded && !expandedList.includes(index)) {
            newExpandedState = [index];
          } else {
            // close all when you click on the same accordion
            newExpandedState = [];
          }

          //
        } else {
          // eslint-disable-next-line no-lonely-if
          if (isExpanded) {
            // add to the list of expanded accordions
            newExpandedState = [...expandedList, index];
          } else {
            // remove from the list of expanded accordions
            newExpandedState = expandedList?.filter(i => i !== index);
          }
        }

        setExpandedState(newExpandedState);

        if (onChange) {
          onChange(newExpandedState);
        }
      },
      [setExpandedState, expandedList, single, onChange],
    );

    const accordionOnlyChildren = React.Children.toArray(
      children,
    ).filter((child: React.ReactNode) =>
      hasMatchingDisplayNameWith(child, Accordion),
    ) as React.ReactElement<AccordionProps>[];

    return (
      <div ref={ref} {...restProps}>
        {accordionOnlyChildren.map((child, index: number) =>
          React.cloneElement(child, {
            expanded: expandedList.includes(index),
            onChange: (isExpanded: boolean) => handleChange(isExpanded, index),
          }),
        )}
      </div>
    );
  },
);
