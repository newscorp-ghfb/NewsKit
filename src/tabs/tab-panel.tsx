import React, {MouseEvent} from 'react';
import {TabPanelProps} from './types';
import {StyledTabPanelBlock} from './styled';

// This function can be removed once Safari supports "focus-visibile" and the outline is removed on click
const preventClickFocus = (e: MouseEvent<HTMLElement>) => {
  const {currentTarget} = e;
  const isFocusedDuringMouseDown = currentTarget === document.activeElement;
  /* istanbul ignore next */
  requestAnimationFrame(() => {
    if (isFocusedDuringMouseDown && document.body.contains(currentTarget)) {
      currentTarget.focus();
      return;
    }
    if (!isFocusedDuringMouseDown && document.body.contains(currentTarget)) {
      currentTarget.blur();
    }
  });
};

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  id,
  /* istanbul ignore next */
  selected = false,
  safariOutlineOffset,
}) => (
  <StyledTabPanelBlock
    onMouseDown={preventClickFocus}
    data-testid="tab-panel"
    as="div"
    aria-labelledby={id}
    role="tabpanel"
    aria-hidden={!selected}
    selected={selected}
    tabIndex={selected ? 0 : -1}
    hidden={!selected}
    safariOutlineOffset={safariOutlineOffset}
  >
    {children}
  </StyledTabPanelBlock>
);
