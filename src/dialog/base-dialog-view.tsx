import React, {useRef} from 'react';
import {BaseDialogViewProps} from './types';
import {
  StyledDialogPanel,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogHeaderContent,
  StyledFillSpaceCloseButton,
  StyledCloseButton,
  StyledMoveFocusInside,
} from './styled';
import {Stack} from '../stack';
import {IconFilledClose} from '../icons';
import {ButtonSize} from '../button';
import {useResizeObserver} from '../utils/hooks/use-resize-observer';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {BreakpointKeys, useTheme} from '../theme';
import {ScreenReaderOnly} from '../screen-reader-only';
import {useReactKeys} from '../utils/hooks';

/* istanbul ignore next */
const centerCloseButton = (top: number) => ({
  top: top / 2,
  transform: top !== 0 ? `translateY(-50%)` : undefined,
});

export const BaseDialogView = React.forwardRef<
  HTMLDivElement,
  BaseDialogViewProps
>(
  (
    {
      handleCloseButtonClick,
      className,
      path,
      overrides = {},
      closePosition,
      header,
      ariaDescribedby,
      ariaLabelledby,
      children,
      open,
      disableFocusTrap,
      ...props
    },
    panelRef,
  ) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [, headerHeight] = useResizeObserver(headerRef);

    const [listDialogItemNotification] = useReactKeys(1);

    const theme = useTheme();
    const closeButtonOverrides: typeof overrides['closeButton'] = {
      ...deepMerge(
        mergeBreakpointObject(
          Object.keys(theme.breakpoints) as BreakpointKeys[],
        ),
        theme.componentDefaults.drawer.closeButton,
        filterOutFalsyProperties(overrides.closeButton),
      ),
    };

    const MoveFocusInsideWhenFocusTrapDisabled =
      disableFocusTrap && open ? StyledMoveFocusInside : React.Fragment;

    return (
      <StyledDialogPanel
        ref={panelRef}
        className={className}
        role="dialog"
        aria-modal={disableFocusTrap ? 'false' : 'true'}
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        overrides={overrides}
        path={path}
        {...props}
      >
        <MoveFocusInsideWhenFocusTrapDisabled>
          <StyledDialogHeader overrides={overrides} ref={headerRef} path={path}>
            <Stack
              flow="horizontal-center"
              flowReverse={closePosition === 'left'}
            >
              {header && (
                <StyledDialogHeaderContent path={path}>
                  {header}
                </StyledDialogHeaderContent>
              )}
              <StyledFillSpaceCloseButton
                path={path}
                overrides={overrides}
                closePosition={closePosition}
              />
            </Stack>
          </StyledDialogHeader>
          <StyledDialogContent
            data-testid="dialog-content"
            path={path}
            overrides={overrides}
          >
            {children}
          </StyledDialogContent>
          <StyledCloseButton
            path={path}
            closePosition={closePosition}
            style={{
              ...centerCloseButton(headerHeight),
            }}
            aria-label="close"
            aria-describedby={
              disableFocusTrap ? listDialogItemNotification : undefined
            }
            onClick={handleCloseButtonClick}
            overrides={closeButtonOverrides}
            size={ButtonSize.Medium}
          >
            <IconFilledClose />
          </StyledCloseButton>
          {disableFocusTrap && (
            <ScreenReaderOnly id={listDialogItemNotification}>
              With the next tab you will be leaving the dialog window.
            </ScreenReaderOnly>
          )}
        </MoveFocusInsideWhenFocusTrapDisabled>
      </StyledDialogPanel>
    );
  },
);
