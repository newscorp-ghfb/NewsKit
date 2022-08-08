import React, {useEffect, useMemo} from 'react';
import {BreakpointKeys, useTheme} from '../../../theme';
import {getMediaQueryFromTheme} from '../../responsive-helpers';
import {NewsKitReactComponents} from '../../with-own-theme';
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

  const INITIAL_STATE = useMemo(() => createInitState(mqPerBreakpoint), [
    mqPerBreakpoint,
  ]);

  const [breakpointState, setBreakpointState] = React.useState(
    () => INITIAL_STATE,
  );
  const [internalBreakpointState, setInternalBreakpointState] = React.useState(
    () => INITIAL_STATE,
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
          setInternalBreakpointState(prev => {
            const newState = {
              ...prev,
              [breakpointKey]: event.matches,
            };
            return newState;
          });
        };

        addMQEventListener(mqList, mqHandler);

        mqListenersRegistry.push({mqList, mqHandler});
      });
    }

    return () => {
      mqListenersRegistry.forEach(({mqList, mqHandler}) => {
        removeMQEventListener(mqList, mqHandler);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      Object.values(internalBreakpointState).filter(e => e === true).length ===
      1
    ) {
      setBreakpointState(internalBreakpointState);
    }
  }, [internalBreakpointState]);

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

  return (WrappedComponent as unknown) as NewsKitReactComponents<P>;
};
