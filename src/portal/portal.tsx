import React, {memo, useEffect, useMemo} from 'react';
import {nanoid} from 'nanoid/non-secure';
import {usePortal} from './hooks';
import type {PortalProps} from './types';
import {useTheme, ThemeProvider} from '../theme';

const PortalComponent = ({
  name: _providedName,
  hostName = 'root',
  children,
}: PortalProps) => {
  const {addPortal: addUpdatePortal, removePortal} = usePortal(hostName);

  const name = useMemo(() => _providedName || nanoid(), [_providedName]);
  const theme = useTheme();

  useEffect(() => {
    addUpdatePortal(
      name,
      <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    );
    return () => {
      removePortal(name);
    };
  }, [children, name, addUpdatePortal, removePortal]);

  return null;
};

export const Portal = memo(PortalComponent);
Portal.displayName = 'Portal';
