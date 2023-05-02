export type MQPartial<T> = Partial<{
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
}>;

export type MQ<T> = T | MQPartial<T>;

export type ResponsiveValue<T> = MQ<T> | CSSQueryRules<T>;

export type CSSQuery<T> = {
  rule: `@media ${string}` | `@container ${string}`;
  value: T;
};

export type CSSQueryRules<T> = {
  rules?: CSSQuery<T>[];
};

export type ContainerQueryProps = {
  containerType?: 'normal' | 'inline-size' | 'size';
  containerName?: string;
};
