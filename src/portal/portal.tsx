import {memo, useCallback, useEffect, useMemo, useRef} from 'react';
import {nanoid} from 'nanoid/non-secure';
import {usePortal} from './hooks';
import type {PortalProps} from './types';

const PortalComponent = ({
  name: _providedName,
  hostName = 'root',
  children,
}: PortalProps) => {
  const {addPortal: addUpdatePortal, removePortal} = usePortal(hostName);

  const name = useMemo(() => _providedName || nanoid(), [_providedName]);

  useEffect(() => {
    addUpdatePortal(name, children);
    return () => {
      removePortal(name);
    };
  }, [children, name, addUpdatePortal, removePortal]);

  return null;
};

export const Portal = memo(PortalComponent);
Portal.displayName = 'Portal';
