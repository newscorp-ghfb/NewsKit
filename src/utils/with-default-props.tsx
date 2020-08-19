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
): React.FC<P> => (props: P) => {
  const dProps =
    typeof defaultProps === 'function'
      ? (defaultProps as PropsEvalFunction<P>)(props)
      : defaultProps || {};
  const theme = useTheme();
  const overrides = getToken({theme}, defaultPresetsPath);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {children, ...propsWithoutChildren} = props as any;
  return (
    <Component
      {...deepMerge(
        {} as P,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {overrides} as any,
        dProps,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        propsWithoutChildren as any,
      )}
    >
      {children}
    </Component>
  );
};
