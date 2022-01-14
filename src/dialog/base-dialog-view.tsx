import React from 'react';
import {BaseDialogViewProps} from './types';
import {
  StyledDialogPanel,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogHeaderBG,
  StyledMoveFocusInside,
  StyledCloseButtonContainer,
} from './styled';
import {IconFilledClose} from '../icons';
import {ButtonSize} from '../button';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {BreakpointKeys, useTheme} from '../theme';
import {ScreenReaderOnly} from '../screen-reader-only';
import {useReactKeys} from '../utils/hooks';
import {IconButton} from '../icon-button';

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
      inline = false,
      ...props
    },
    panelRef,
  ) => {
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
        inline={inline}
        $open={open}
        closePosition={closePosition}
        {...props}
      >
        <MoveFocusInsideWhenFocusTrapDisabled closePosition={closePosition}>
          {header !== undefined && (
            <>
              <StyledDialogHeaderBG overrides={overrides} path={path} />
              <StyledDialogHeader overrides={overrides} path={path}>
                {header}
              </StyledDialogHeader>
            </>
          )}
          <StyledDialogContent
            data-testid="dialog-content"
            path={path}
            overrides={overrides}
          >
            {children}
          </StyledDialogContent>
          {closePosition !== 'none' && (
            <StyledCloseButtonContainer
              path={path}
              overrides={overrides}
              closePosition={closePosition}
            >
              <IconButton
                aria-label="close"
                aria-describedby={
                  disableFocusTrap ? listDialogItemNotification : undefined
                }
                onClick={handleCloseButtonClick}
                overrides={closeButtonOverrides}
                size={ButtonSize.Medium}
              >
                <IconFilledClose />
              </IconButton>
            </StyledCloseButtonContainer>
          )}
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
