import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition, config} from 'react-transition-group';
import composeRefs from '@seznam/compose-react-refs';
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
import {Layer} from '../layer';
import {getTransitionClassName} from '../utils/get-transition-class-name';

// This can't just use the CSSTransition state as there is a moment when open is true
// but state is not yet set to 'entering'. We also need to disable this functionality
// if transitions are disabled.
const useOpenTransitionInProgress = () => {
  const [openTransitionInProgress, setOpenTransitionInProgress] = useState(
    !config.disabled,
  );
  return {
    onEntered: () => setOpenTransitionInProgress(false),
    onExited: () => setOpenTransitionInProgress(!config.disabled),
    openTransitionInProgress,
  };
};

const ThemelessDrawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
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
    },
    ref,
  ) => {
    const theme = useTheme();
    const cssTransitionNodeRef = React.useRef(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const drawerPath = inline ? 'inlineDrawer' : 'drawer';

    const overlayOverrides = {
      ...deepMerge(
        mergeBreakpointObject(
          Object.keys(theme.breakpoints) as BreakpointKeys[],
        ),
        theme.componentDefaults[drawerPath].overlay,
        filterOutFalsyProperties(overrides && overrides.overlay),
      ),
    };

    useEffect(() => {
      setDrawerElementFocusability(open, drawerRef);
    }, [open, drawerRef]);

    // When Drawer is used inline, it should not be in a layer
    const OuterWrapper = inline ? React.Fragment : Layer;

    const {
      openTransitionInProgress,
      onEntered,
      onExited,
    } = useOpenTransitionInProgress();

    return (
      <OuterWrapper>
        <BaseDialogFunction
          open={open}
          restoreFocusTo={restoreFocusTo}
          onDismiss={onDismiss}
          hideOverlay={hideOverlay}
          disableFocusTrap={disableFocusTrap}
          transitionInProgress={openTransitionInProgress}
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
              nodeRef={cssTransitionNodeRef}
              in={open}
              timeout={getTransitionDuration(
                `${drawerPath}.panel.${placement}`,
                '',
              )({theme, overrides})}
              classNames="nk-drawer"
              appear
              onEntered={onEntered}
              onExited={onExited}
            >
              {state => (
                <StyledDrawer
                  aria-hidden={!open}
                  ref={composeRefs(cssTransitionNodeRef, drawerRef, ref)}
                  className={getTransitionClassName('nk-drawer', state)}
                  open={open}
                  disableFocusTrap={disableFocusTrap}
                  transitionInProgress={openTransitionInProgress}
                  handleCloseButtonClick={handleCloseButtonClick}
                  path={drawerPath}
                  data-testid={drawerPath}
                  placement={placement}
                  closePosition={closePosition}
                  overrides={overrides}
                  inline={inline}
                  {...props}
                >
                  {children}
                </StyledDrawer>
              )}
            </CSSTransition>
          )}
        </BaseDialogFunction>
      </OuterWrapper>
    );
  },
);

export const Drawer = withOwnTheme(ThemelessDrawer)({
  defaults,
  stylePresets,
});
