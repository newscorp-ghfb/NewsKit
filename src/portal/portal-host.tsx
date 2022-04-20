import React, {memo, useEffect} from 'react';
import {usePortal, usePortalState} from './hooks';
import {PortalHostProps} from './types';

const PortalHostComponent = ({name}: PortalHostProps) => {
  // #region hooks
  const state = usePortalState(name);
  const {registerHost, deregisterHost} = usePortal(name);

  useEffect(() => {
    registerHost();
    return () => {
      deregisterHost();
    };
  }, []);

  return (
    <div className="nk-portal-host">
      {state.map(item => (
        <React.Fragment key={item.name}>{item.node}</React.Fragment>
      ))}
    </div>
  );
};

export const PortalHost = memo(PortalHostComponent);
PortalHost.displayName = 'PortalHost';
