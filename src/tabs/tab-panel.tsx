import React from 'react';
import {TabPanelProps} from './types';
import {StyledTabPanelBlock} from './styled';

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  id,
  /* istanbul ignore next */
  selected = false,
}) => (
  <StyledTabPanelBlock
    data-testid="tab-panel"
    as="div"
    aria-labelledby={id}
    role="tabpanel"
    aria-hidden={!selected}
    selected={selected}
    tabIndex={selected ? 0 : -1}
    hidden={!selected}
  >
    {children}
  </StyledTabPanelBlock>
);
