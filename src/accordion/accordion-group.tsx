import React, {useCallback} from 'react';
import {useControlled} from '../utils/hooks';
import {AccordionGroupProps, AccordionProps} from './types';
import {hasMatchingDisplayNameWith} from '../utils/component';
import {Accordion} from './accordion';
import {StyledAccordionGroupWrapper} from './styled';

const expandedPropToArray = (
  expandedProp: number | number[] | 'all' | undefined,
  arrayLength: number,
): number[] | undefined => {
  if (expandedProp === 'all') {
    return Array.from(Array(arrayLength).keys());
  }

  if (expandedProp !== undefined && !Array.isArray(expandedProp)) {
    return [expandedProp];
  }
  return expandedProp;
};

const takeFirst = (
  expandedProp: number[] | undefined,
  onlyOne: boolean | undefined,
): number[] | undefined => {
  if (Array.isArray(expandedProp) && onlyOne) {
    return [...expandedProp].splice(0, 1);
  }

  return expandedProp;
};

const unifyPropValue = (
  expandedProp: number | number[] | 'all' | undefined,
  arrayLength: number,
  single: boolean | undefined,
): number[] | undefined =>
  takeFirst(expandedPropToArray(expandedProp, arrayLength), single);

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
      overrides,
      ...restProps
    },
    ref,
  ) => {
    const childrenArray = React.Children.toArray(children);

    const [expandedList, setExpandedList] = useControlled<number[]>({
      controlledValue: unifyPropValue(
        expanded,
        childrenArray.length,
        expandSingle,
      ),
      defaultValue: unifyPropValue(
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

        setExpandedList(newExpandedState);

        if (onChange) {
          onChange(newExpandedState);
        }
      },
      [setExpandedList, expandedList, expandSingle, onChange],
    );

    return (
      <StyledAccordionGroupWrapper
        ref={ref}
        overrides={overrides}
        {...restProps}
      >
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
      </StyledAccordionGroupWrapper>
    );
  },
);
