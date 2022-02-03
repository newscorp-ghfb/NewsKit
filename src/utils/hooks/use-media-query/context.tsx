import React from 'react';
import {BreakpointKeys, useTheme} from '../../../theme';
import {getMediaQueryFromTheme} from '../../responsive-helpers';
import {MediaQueries} from './types';
import {
  createInitState,
  addMQEventListener,
  removeMQEventListener,
} from './utils';

export const MQContext = React.createContext({});

export function MediaQueryProvider({children}: {children: React.ReactNode}) {
  const theme = useTheme();
  const {breakpoints} = theme;
  const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

  const mqPerBreakpoint: MediaQueries = breakpointKeys.reduce(
    (acc, breakpointKey, index, arr) => {
      const nextBreakpointKey = arr[index + 1] ? arr[index + 1] : undefined;

      const cssMediaRule = getMediaQueryFromTheme(
        breakpointKey,
        nextBreakpointKey,
      )({
        theme,
      }).replace('@media ', '');
      return {...acc, [breakpointKey]: cssMediaRule};
    },
    {} as MediaQueries,
  );

  const [breakpointState, setBreakpointState] = React.useState(() =>
    createInitState(mqPerBreakpoint),
  );

  React.useEffect(() => {
    const mqListenersRegistry: {
      mqList: MediaQueryList;
      mqHandler: (event: MediaQueryListEvent) => void;
    }[] = [];

    /* istanbul ignore else */
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      Object.entries(mqPerBreakpoint).forEach(([breakpointKey, mqString]) => {
        const mqList = window.matchMedia(mqString);
        const mqHandler = (event: MediaQueryListEvent) => {
          setBreakpointState(prev => {
            const newState = {
              ...prev,
              [breakpointKey]: event.matches,
            };
            return newState;
          });
        };

        addMQEventListener(mqList, mqHandler);

        mqListenersRegistry.push({
          mqList,
          mqHandler,
        });
      });
    }

    return () => {
      mqListenersRegistry.forEach(({mqList, mqHandler}) => {
        removeMQEventListener(mqList, mqHandler);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MQContext.Provider value={breakpointState}>{children}</MQContext.Provider>
  );
}

export const withMediaQueryProvider = <P extends {}>(
  BaseComponent: React.ComponentType<P>,
) => {
  const WrappedComponent = React.forwardRef<unknown, P>((props, ref) => (
    <MediaQueryProvider>
      <BaseComponent ref={ref} {...props} />
    </MediaQueryProvider>
  ));

  return (WrappedComponent as unknown) as React.FC<P>;
};
