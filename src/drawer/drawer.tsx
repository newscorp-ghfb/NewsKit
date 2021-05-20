import React, {useRef} from 'react';
import FocusLock from 'react-focus-lock';
import {CSSTransition} from 'react-transition-group';
import {Overlay} from '../overlay/overlay';
import {
  StyledDrawerPanel,
  StyledDrawerContent,
  StyledDrawerHeader,
  StyledCloseButtonContainer,
  StyledDrawerHeaderContent,
  StyledFillSpaceCloseButton,
} from './styled';
import {DrawerProps} from './types';
import {useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useKeypress} from '../utils/hooks';
import {IconButton} from '../icon-button';
import {IconFilledClose} from '../icons';
import {ButtonSize} from '../button';
import {get} from '../utils/get';
import {useResizeObserver} from '../utils/hooks/use-resize-observer';
import {Stack} from '../stack';

/* istanbul ignore next */
const centerCloseButton = (top: number) => ({
  top: top / 2,
  transform: top !== 0 ? `translateY(-50%)` : undefined,
});

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open: isOpen,
  onDismiss,
  header,
  overrides = {},
  ariaLabelledby,
  ariaDescribedby,
  placement = 'left',
  restoreFocusTo = undefined,
  ...props
}) => {
  const theme = useTheme();

  const overlaySettings = {
    ...deepMerge(
      {},
      theme.componentDefaults.drawer.overlay,
      filterOutFalsyProperties(overrides.overlay),
    ),
  };

  const closeButtonSettings: typeof overrides['closeButton'] = {
    ...theme.componentDefaults.drawer.closeButton,
    ...filterOutFalsyProperties(overrides.closeButton),
  };

  const triggerClose = () => isOpen && onDismiss && onDismiss();

  const handleEscape = () => {
    triggerClose();
  };

  const handleOverlayClick = () => {
    triggerClose();
  };

  const handleCloseButtonClick = () => {
    triggerClose();
  };

  useKeypress('Escape', handleEscape, {enabled: isOpen});

  // ref to store activeElement ( focused ) before drawer been opened
  const originalFocusedElementRef = useRef<Element | null>(null);

  const handleOnLockActivation = () => {
    originalFocusedElementRef.current = document.activeElement;
  };

  const handleOnLockDeactivation = () => {
    const originalFocusedElement = get(originalFocusedElementRef, 'current');

    /* istanbul ignore else */
    if (restoreFocusTo || originalFocusedElement) {
      const elementToFocus = restoreFocusTo || originalFocusedElement;
      // without the zero-timeout, focus will likely remain on the drawer
      window.setTimeout(
        () =>
          typeof elementToFocus.focus === 'function' && elementToFocus.focus(),
        0,
      );
    }
  };

  const headerRef = React.useRef<HTMLDivElement>(null);
  const [, headerHeight] = useResizeObserver(headerRef);

  return (
    <>
      <Overlay
        open={isOpen}
        onClick={handleOverlayClick}
        overrides={overlaySettings}
      />

      <FocusLock
        disabled={!isOpen}
        onActivation={handleOnLockActivation}
        onDeactivation={handleOnLockDeactivation}
      >
        <CSSTransition in={isOpen} timeout={1000} classNames="nk-drawer" appear>
          <StyledDrawerPanel
            isOpen={isOpen}
            role="dialog"
            aria-label="drawer"
            aria-describedby={ariaDescribedby}
            aria-labelledby={ariaLabelledby}
            aria-modal="true"
            data-testid="drawer"
            overrides={overrides}
            placement={placement}
            {...props}
          >
            <StyledDrawerHeader overrides={overrides} ref={headerRef}>
              <Stack
                flow="horizontal-center"
                flowReverse={placement === 'left'}
              >
                {header && (
                  <StyledDrawerHeaderContent>
                    {header}
                  </StyledDrawerHeaderContent>
                )}
                <StyledFillSpaceCloseButton
                  overrides={overrides}
                  placement={placement}
                />
              </Stack>
            </StyledDrawerHeader>
            <StyledDrawerContent data-testid="drawer-content">
              {children}
            </StyledDrawerContent>
            <StyledCloseButtonContainer
              placement={placement}
              overrides={overrides}
              style={{
                ...centerCloseButton(headerHeight),
              }}
              // Move props directly to IconButton when PPDSC-1449 is fixed
            >
              <IconButton
                aria-label="close drawer"
                onClick={handleCloseButtonClick}
                overrides={closeButtonSettings}
                size={ButtonSize.Medium}
              >
                <IconFilledClose />
              </IconButton>
            </StyledCloseButtonContainer>
          </StyledDrawerPanel>
        </CSSTransition>
      </FocusLock>
    </>
  );
};
