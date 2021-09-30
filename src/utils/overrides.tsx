import {isValidElementType} from 'react-is';
import {hasOwnProperty} from './has-own-property';

export type ComponentOverrides = {
  overrides?: object;
};

export type Override<TCO extends ComponentOverrides> =
  | TCO['overrides']
  | {props: TCO}
  | React.ComponentType<TCO>;

export const getComponentOverrides = <TCO extends ComponentOverrides>(
  OverridesValue: Override<TCO> | undefined,
  DefaultComponent: React.ComponentType<TCO>,
  componentProps: Object,
): [React.ComponentType<TCO>, Object] => {
  // componentOverride:
  if (OverridesValue && isValidElementType(OverridesValue)) {
    return [OverridesValue as React.ComponentType<TCO>, componentProps];
  }
  // propsOverride:
  if (
    typeof OverridesValue === 'object' &&
    hasOwnProperty(OverridesValue, 'props')
  ) {
    return [DefaultComponent, {...componentProps, ...OverridesValue.props}];
  }
  // styleOverride:
  return [DefaultComponent, {overrides: OverridesValue, ...componentProps}];
};
