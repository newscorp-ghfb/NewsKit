export type MQPartial<T> = Partial<{
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
}>;

export type MQ<T> = (T | MQPartial<T>) & CQ;

export type CSSQuery = {
  rule: `@media ${string}` | `@container ${string}`;
  value: string;
};

export type CQ = {
  rules?: CSSQuery[];
};
