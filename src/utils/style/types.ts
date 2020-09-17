export type MQ<T> =
  | T
  | Partial<{
      xs: T;
      sm: T;
      md: T;
      lg: T;
    }>;
