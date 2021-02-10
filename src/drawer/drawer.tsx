import React from 'react';
import {StyledDialog} from './styled';
import {DrawerProps} from './types';

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open: $open,
  ...props
}) => (
  <StyledDialog
    $open={$open}
    role="dialog"
    aria-label="Drawer"
    aria-modal="true"
    {...props}
  >
    {children}
  </StyledDialog>
);
