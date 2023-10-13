export type MQPartial<T> = Partial<{
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
}>;

export type MQ<T> = T | MQPartial<T>;

/*
Allows you define values at set breakpoints, or define custom media & container queries with the "rules" object
*/
export type ResponsiveValue<T> = MQ<T> | CSSQueryRules<T>;

/*
  @param rule - The media or container query definition
  @param value - CSS value or token
*/
export type CSSQuery<T> = {
  rule: `@media ${string}` | `@container ${string}`;
  value: T;
};

export type CSSQueryRules<T> = {
  rules?: CSSQuery<T>[];
};

export type ContainerQueryProps = {
  containerType?:
    | `normal`
    | `inline-size`
    | `size`
    | `inherit`
    | `initial`
    | `unset`
    | `revert`
    | `revert-layer`;
  containerName?: string;
};
