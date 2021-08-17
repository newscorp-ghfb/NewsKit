import {isValidElementType} from 'react-is';

export type ComponentOverrides = {
  overrides?: object;
};

export type Override<TCO extends ComponentOverrides> =
  | TCO['overrides']
  | {props: TCO}
  | React.ComponentType<TCO>;

// Checking props exist in object in TypeScript way
// https://fettblog.eu/typescript-hasownproperty/
function hasOwnProperty<X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y,
): obj is X & Record<Y, unknown> {
  // eslint-disable-next-line no-prototype-builtins
  return obj.hasOwnProperty(prop);
}

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
