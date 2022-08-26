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
        theme.componentDefaults[path].closeButton,
        filterOutFalsyProperties(overrides.closeButton),
      ),
    };

    const MoveFocusInsideWhenFocusTrapDisabled =
      disableFocusTrap && open
        ? ({children: focusChildren}: {children: React.ReactNode}) => (
            <StyledMoveFocusInside closePosition={closePosition}>
              {focusChildren}
            </StyledMoveFocusInside>
          )
        : React.Fragment;

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
        <MoveFocusInsideWhenFocusTrapDisabled>
          {header === undefined && closePosition === 'none' ? null : (
            <StyledDialogHeaderBG overrides={overrides} path={path} />
          )}
          {header !== undefined && (
            <StyledDialogHeader overrides={overrides} path={path}>
              {header}
            </StyledDialogHeader>
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
                size="medium"
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
