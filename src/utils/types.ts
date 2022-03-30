export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
