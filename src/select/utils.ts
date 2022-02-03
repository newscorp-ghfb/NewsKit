import {ButtonSelectSize, SelectPropsOverrides} from './types';
import {BreakpointKeys, Theme} from '../theme/types';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import {hasOwnProperty} from '../utils/has-own-property';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {MQ} from '../utils/style/types';

export const shouldRenderInModal = (
  prop: MQ<boolean>,
  currentBreakpoint: string,
) => {
  const modalMQKeys = Object.keys(prop).filter(Boolean);
  return modalMQKeys.includes(currentBreakpoint) || prop === true;
};

export const getModalOverrides = ({
  theme,
  size,
  overrides,
}: {
  theme: Theme;
  size: ButtonSelectSize;
  overrides: SelectPropsOverrides['modal'];
}) => {
  const modalDefaults = theme.componentDefaults.select[size].modal;

  let userProvidedOverrides = {};
  // propsOverride:
  if (typeof overrides === 'object' && hasOwnProperty(overrides, 'props')) {
    userProvidedOverrides = get(userProvidedOverrides, 'props.overrides');

    // styleOverrides
  } else if (typeof overrides === 'object') {
    userProvidedOverrides = overrides;
  }
  return deepMerge(
    mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
    modalDefaults,
    filterOutFalsyProperties(userProvidedOverrides),
  );
};
