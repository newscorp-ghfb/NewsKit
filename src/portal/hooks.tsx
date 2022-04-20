import {ReactNode, useCallback, useContext} from 'react';
import {ACTIONS} from './constants';
import {PortalDispatchContext, PortalStateContext} from './context';

export const usePortal = (hostName: string = 'root') => {
  const dispatch = useContext(PortalDispatchContext);

  if (dispatch === null) {
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.",
    );
  }

  const registerHost = useCallback(() => {
    dispatch({
      type: ACTIONS.REGISTER_HOST,
      hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deregisterHost = useCallback(() => {
    dispatch({
      type: ACTIONS.DEREGISTER_HOST,
      hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUpdatePortal = useCallback((name: string, node: ReactNode) => {
    dispatch({
      type: ACTIONS.ADD_UPDATE_PORTAL,
      hostName,
      portalName: name,
      node,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removePortal = useCallback((name: string) => {
    dispatch({
      type: ACTIONS.REMOVE_PORTAL,
      hostName,
      portalName: name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // #endregion

  return {
    registerHost,
    deregisterHost,
    addPortal: addUpdatePortal,
    updatePortal: addUpdatePortal,
    removePortal,
  };
};

export const usePortalState = (hostName: string) => {
  const state = useContext(PortalStateContext);

  if (state === null) {
    throw new Error(
      "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.",
    );
  }

  return state[hostName] || [];
};
