import React, {useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import {DrawerProps} from './types';
import {StyledDrawer} from './styled';
import {BaseDialogFunction} from '../dialog';
import {Overlay} from '../overlay/overlay';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {setDrawerElementFocusability} from './utils';

export const Drawer: React.FC<DrawerProps> = ({
  children,
  /* istanbul ignore next */
  open = false,
  onDismiss,
  placement = 'left',
  closePosition = placement === 'left' ? 'left' : 'right',
  restoreFocusTo,
  overrides,
  ...props
}) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  const overlayOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.drawer.overlay,
      filterOutFalsyProperties(overrides && overrides.overlay),
    ),
  };

  useEffect(() => {
    setDrawerElementFocusability(open, drawerRef);
  }, [open, drawerRef]);

  return (
    <BaseDialogFunction
      open={open}
      restoreFocusTo={restoreFocusTo}
      onDismiss={onDismiss}
      renderOverlay={handleOverlayClick => (
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          overrides={overlayOverrides}
        />
      )}
    >
      {handleCloseButtonClick => (
        <CSSTransition in={open} timeout={1000} classNames="nk-drawer" appear>
          <StyledDrawer
            aria-hidden={!open}
            open={open}
            handleCloseButtonClick={handleCloseButtonClick}
            path="drawer"
            data-testid="drawer"
            placement={placement}
            closePosition={closePosition}
            overrides={overrides}
            ref={drawerRef}
            {...props}
          >
            {children}
          </StyledDrawer>
        </CSSTransition>
      )}
    </BaseDialogFunction>
  );
};
