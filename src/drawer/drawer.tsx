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
import {getTransitionDuration} from '../utils/get-transition-duration';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessDrawer: React.FC<DrawerProps> = ({
  children,
  /* istanbul ignore next */
  open = false,
  onDismiss,
  placement = 'left',
  closePosition = placement === 'left' ? 'left' : 'right',
  restoreFocusTo,
  overrides,
  hideOverlay,
  disableFocusTrap,
  inline,
  ...props
}) => {
  const theme = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerPath = inline ? 'inlineDrawer' : 'drawer';

  const overlayOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults[drawerPath].overlay,
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
      hideOverlay={hideOverlay}
      disableFocusTrap={disableFocusTrap}
      renderOverlay={handleOverlayClick => (
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          overrides={overlayOverrides}
        />
      )}
    >
      {handleCloseButtonClick => (
        <CSSTransition
          in={open}
          timeout={getTransitionDuration(
            `${drawerPath}.panel.${placement}`,
            '',
          )({theme, overrides})}
          classNames="nk-drawer"
          appear
        >
          {state => {
            let className = '';
            // eslint-disable-next-line default-case
            switch (state) {
              case 'entering':
                className = 'enter-active';
                break;
              case 'exiting':
                className = 'exit-active';
                break;
              case 'entered':
                className = 'enter-done';
                break;
              case 'exited':
                className = 'exit-done';
                break;
            }
            return (
              <StyledDrawer
                aria-hidden={!open}
                className={`nk-drawer-${className}`}
                open={open}
                key="test-drawer"
                disableFocusTrap={disableFocusTrap}
                handleCloseButtonClick={handleCloseButtonClick}
                path={drawerPath}
                data-testid={drawerPath}
                placement={placement}
                closePosition={closePosition}
                overrides={overrides}
                // @ts-ignore
                ref={drawerRef}
                inline={inline}
                {...props}
              >
                {children}
              </StyledDrawer>
            );
          }}
        </CSSTransition>
      )}
    </BaseDialogFunction>
  );
};

export const Drawer = withOwnTheme(ThemelessDrawer)({
  defaults,
  stylePresets,
});
