import {BreakpointKeys, Theme} from '../theme';
import {MQ} from '../utils';
import {sortBreakpointKeys} from '../utils/hooks/use-media-query/utils';
import {BannerInternalProps} from './types';

const isVertical = (layout?: BannerInternalProps['layout']) =>
  layout === 'vertical';

export const getVisibleBreakpointsForLayout = (
  layout: Partial<
    {
      [key in BreakpointKeys]: 'horizontal' | 'vertical';
    }
  >,
  theme: Theme,
) => {
  const horizontalBreakpoints: MQ<boolean> = {};
  const verticalBreakpoints: MQ<boolean> = {};

  const {breakpoints} = theme;
  const breakpointsKeys = Object.keys(breakpoints) as BreakpointKeys[];

  // Get the lowest breakpoint key as base
  const baseBreakpoint: BreakpointKeys = sortBreakpointKeys(
    Object.keys(layout) as BreakpointKeys[],
    breakpointsKeys,
  )[0];
  let baseValue = layout[baseBreakpoint];

  // Set values to all breakpoints (mainly for the missing ones)
  const valuesForAllBreakpoints = breakpointsKeys.reduce(
    (acc, breakpointKey) => {
      if (acc[breakpointKey] === undefined) {
        return {...acc, [breakpointKey]: baseValue};
      }

      baseValue = acc[breakpointKey];
      return acc;
    },
    layout,
  );

  const valuesForAllBreakpointsAsArr = Object.entries(valuesForAllBreakpoints);

  // Creating breakpoint objects like:
  // verticalBreakpoints = {
  //   xs: true,
  //   sm: true,
  //   md: false,
  //   lg: false,
  //   xl: false,
  // }
  // That can be passed to the visible component based on the layout
  valuesForAllBreakpointsAsArr.forEach(([key, value]) => {
    verticalBreakpoints[key as BreakpointKeys] = isVertical(value);
    horizontalBreakpoints[key as BreakpointKeys] = !isVertical(value);
  });

  return {
    verticalBreakpoints,
    horizontalBreakpoints,
  };
};
