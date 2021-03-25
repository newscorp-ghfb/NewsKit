import React from 'react';
import {TabPanelProps} from './types';
import {TabPanelBlock} from './styled';

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  id,
  /* istanbul ignore next */
  selected = false,
}) => (
  <TabPanelBlock
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
  </TabPanelBlock>
);
