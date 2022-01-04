import {Responsive, Breakpoints} from 'newskit';
import {getMediaQueries} from 'newskit/utils/responsive-helpers';

interface ApplyParams<T> {
  property: string;
  value?: Responsive<T>;
  transform?: (value: T) => string | number | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const noop = (x: any) => x;

export const build = (breakpoints: Breakpoints) => {
  const styles = {} as Record<string, unknown>;
  const mediaQueries = getMediaQueries(breakpoints);

  const self = {
    apply: <T>({property, transform = noop, value}: ApplyParams<T>) => {
      if (value === null || value === undefined) {
        return self;
      }

      if (Array.isArray(value)) {
        value.forEach((v, index) => {
          // Do not create a media query for the smallest breakpoint.
          if (index === 0) {
            styles[property] = transform(v);
            return;
          }

          const mediaQuery = mediaQueries[index - 1];
          if (!styles[mediaQuery]) {
            styles[mediaQuery] = {};
          }

          (styles[mediaQuery] as Record<string, unknown>)[property] = transform(
            v,
          );
        });
      } else {
        styles[property] = transform(value);
      }
      return self;
    },
    value: () => styles,
  };
  return self;
};

export default build;
