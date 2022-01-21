import createCache from '@emotion/cache';

export const cacheKey = 'my-prefix-key';

export const createMyCache = () =>
  createCache({
    key: cacheKey,
  });

export const myCache = createMyCache();
