import React, {memo, useEffect} from 'react';
import {usePortal, usePortalState} from './hooks';
import {PortalHostProps} from './types';

const PortalHostComponent = ({name}: PortalHostProps) => {
  // #region hooks
  const state = usePortalState(name);
  const {registerHost, deregisterHost} = usePortal(name);
  // #endregion

  // #region effects
  useEffect(() => {
    registerHost();
    return () => {
      deregisterHost();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // #endregion

  // #region render
  return <>{state.map(item => item.node)}</>;
  // #endregion
};

export const PortalHost = memo(PortalHostComponent);
PortalHost.displayName = 'PortalHost';
