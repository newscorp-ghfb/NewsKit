import React from 'react';
import {DrawerHeaderProps} from './types';
import {IconButton} from '../icon-button';
import {IconFilledClose} from '../icons';
import {StyledDrawerHeader} from './styled';

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  onCloseButtonClick,
}) => (
  <StyledDrawerHeader>
    <h3>Drawer Header WIP</h3>
    <IconButton aria-label="close drawer" onClick={onCloseButtonClick}>
      <IconFilledClose />
    </IconButton>
  </StyledDrawerHeader>
);
