import React from 'react';
import {DeepPartial} from './types';
import {deepMerge} from './deep-merge';
import {getToken} from './get-token';
import {useTheme} from '../theme';

type PropsEvalFunction<P> = (props: P) => P;

export const withDefaultProps = <P extends {}>(
  Component: React.ComponentType<P>,
  defaultProps?: DeepPartial<P> | PropsEvalFunction<P>,
  defaultPresetsPath?: string,
  // Passing a CSS property with "__delete" as a value, or any other invalid token, will not generate CSS for it.
  // Can be useful for removing other default overrides injected in the component.
  enhanceOverrides?: object,
): React.FC<P> => {
  const WrappedComponent = React.memo(
    React.forwardRef<unknown, P>((props, ref) => {
      const dProps =
        typeof defaultProps === 'function'
          ? (defaultProps as PropsEvalFunction<P>)(props)
          : defaultProps || {};
      const theme = useTheme();

      const overrides = getToken({theme}, defaultPresetsPath);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const {children, ...propsWithoutChildren} = props as any;
      const enhancedOverrides = deepMerge(overrides, enhanceOverrides);

      return (
        <Component
          ref={ref}
          {...deepMerge(
            {} as P,
            {
              overrides: Object.keys(enhancedOverrides).length
                ? enhancedOverrides
                : undefined,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any,
            dProps,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            propsWithoutChildren as any,
          )}
        >
          {children}
        </Component>
      );
    }),
  );
  WrappedComponent.displayName = `withDefaultProps(${Component.displayName})`;
  return (WrappedComponent as unknown) as React.FC<P>;
};
