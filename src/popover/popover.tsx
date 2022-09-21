import * as React from 'react';
import {
  FloatingContext,
  useClick,
  useDismiss,
  useId,
  useInteractions as floatingUiUseInteractions,
} from '@floating-ui/react-dom-interactions';
import {PopoverProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BaseFloatingElement} from '../base-floating-element/base-floating-element';
import {BuildAriaAttributesFn} from '../base-floating-element';
import {IconButton} from '../icon-button';
import {IconFilledClose} from '../icons';
import {
  StyledPopoverCloseButtonContainer,
  StyledPopoverContent,
  StyledPopoverHeader,
  StyledPopoverInnerPanel,
} from './styled';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {filterOutFalsyProperties} from '../utils/filter-object';

const buildContextAriaAttributes: BuildAriaAttributesFn = ({
  floating: {id, open},
  ariaHasPopup,
}) => ({
  'aria-haspopup': ariaHasPopup || 'dialog',
  'aria-controls': open ? id : undefined,
});

const ThemelessPopover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      content,
      header,
      closePosition = 'right',
      overrides = {},
      handleCloseButtonClick,
      enableDismiss = false,
      disableFocusManagement = false,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const closeButtonOverrides: typeof overrides['closeButton'] = {
      ...deepMerge(
        mergeBreakpointObject(
          Object.keys(theme.breakpoints) as BreakpointKeys[],
        ),
        theme.componentDefaults.popover.closeButton,
        filterOutFalsyProperties(overrides.closeButton),
      ),
    };
    const headerId = `header-${useId()}`;

    const buildFloatingElementAriaAttributes: BuildAriaAttributesFn = ({
      ref: {id},
    }) => ({
      'aria-labelledby': header ? undefined : id,
      'aria-describedby': header ? headerId : undefined,
    });

    const useInteractions = (context: FloatingContext<HTMLElement>) =>
      floatingUiUseInteractions([
        useClick(context),
        useDismiss(context, {
          enabled: enableDismiss,
        }),
      ]);

    if (!content) {
      return children;
    }

    return (
      <BaseFloatingElement
        ref={ref}
        path="popover"
        content={({onClick}) => (
          <StyledPopoverInnerPanel closePosition={closePosition}>
            {header !== undefined && (
              <StyledPopoverHeader
                id={headerId}
                data-testid="header-text"
                overrides={overrides}
              >
                {header}
              </StyledPopoverHeader>
            )}
            <StyledPopoverContent overrides={overrides}>
              {content}
            </StyledPopoverContent>
            {closePosition !== 'none' && (
              <StyledPopoverCloseButtonContainer
                overrides={overrides}
                closePosition={closePosition}
              >
                <IconButton
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    onClick(e);
                    if (handleCloseButtonClick) {
                      handleCloseButtonClick();
                    }
                  }}
                  data-testid="close-button"
                  aria-label="close"
                  overrides={closeButtonOverrides}
                  size="medium"
                >
                  <IconFilledClose />
                </IconButton>
              </StyledPopoverCloseButtonContainer>
            )}
          </StyledPopoverInnerPanel>
        )}
        buildRefElAriaAttributes={buildContextAriaAttributes}
        buildFloatingElAriaAttributes={buildFloatingElementAriaAttributes}
        useInteractions={useInteractions}
        role="dialog"
        overrides={overrides}
        disableFocusManagement={disableFocusManagement}
        {...props}
      >
        {children}
      </BaseFloatingElement>
    );
  },
);

export const Popover = withOwnTheme(ThemelessPopover)({
  defaults,
  stylePresets,
});
