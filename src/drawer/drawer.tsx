import React, {useRef, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import {ThemeProvider} from '@emotion/react';
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
import {Portal} from '../portal';

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

  // When Drawer is used inline, it should not be in a layer
  const OuterWrapper = inline ? React.Fragment : Portal;

  return (
    <OuterWrapper>
      <ThemeProvider theme={useTheme()}>
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
              <StyledDrawer
                aria-hidden={!open}
                open={open}
                disableFocusTrap={disableFocusTrap}
                handleCloseButtonClick={handleCloseButtonClick}
                path={drawerPath}
                data-testid={drawerPath}
                placement={placement}
                closePosition={closePosition}
                overrides={overrides}
                ref={drawerRef}
                inline={inline}
                {...props}
              >
                {children}
              </StyledDrawer>
            </CSSTransition>
          )}
        </BaseDialogFunction>
      </ThemeProvider>
    </OuterWrapper>
  );
};

export const Drawer = withOwnTheme(ThemelessDrawer)({
  defaults,
  stylePresets,
});
