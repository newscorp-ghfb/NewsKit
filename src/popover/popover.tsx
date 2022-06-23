import * as React from 'react';
import {
  FloatingContext,
  useClick,
  useInteractions as floatingUiUseInteractions,
} from '@floating-ui/react-dom-interactions';
import {PopoverProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {BaseFloatingElement} from '../base-floating-element/base-floating-element';
import {BuildAriaAttributesFn} from '../base-floating-element';
import {IconButton} from '../icon-button';
import {ButtonSize} from '../button';
import {IconFilledClose} from '../icons';
import {
  StyledPopoverCloseButtonContainer,
  StyledPopoverContent,
  StyledPopoverHeader,
  StyledDialogPanel,
} from './styled';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {filterOutFalsyProperties} from '../utils/filter-object';

const useInteractions = (context: FloatingContext<HTMLElement>) =>
  floatingUiUseInteractions([useClick(context)]);

const buildContextAriaAttributes: BuildAriaAttributesFn = ({
  floating: {id, open},
}) => ({
  'aria-haspopup': 'dialog',
  'aria-controls': open ? id : undefined,
});

const buildFloatingElementAriaAttributes: BuildAriaAttributesFn = ({
  floating: {open},
  ref: {id},
}) => ({
  'aria-expanded': open,
  'aria-labelledby': id,
});

const ThemelessPopover: React.FC<PopoverProps> = ({
  children,
  content,
  header,
  closePosition = 'right',
  overrides = {},
  ...props
}) => {
  const theme = useTheme();
  const closeButtonOverrides: typeof overrides['closeButton'] = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.popover.closeButton,
      filterOutFalsyProperties(overrides.closeButton),
    ),
  };
  if (!content) {
    return children;
  }

  return (
    <BaseFloatingElement
      path="popover"
      content={
        <StyledDialogPanel closePosition={closePosition}>
          {header !== undefined && (
            <StyledPopoverHeader
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
                data-testid="close-button"
                aria-label="close"
                overrides={closeButtonOverrides}
                size={ButtonSize.Medium}
              >
                <IconFilledClose />
              </IconButton>
            </StyledPopoverCloseButtonContainer>
          )}
        </StyledDialogPanel>
      }
      buildRefElAriaAttributes={buildContextAriaAttributes}
      buildFloatingElAriaAttributes={buildFloatingElementAriaAttributes}
      useInteractions={useInteractions}
      role="dialog"
      overrides={overrides}
      {...props}
    >
      {children}
    </BaseFloatingElement>
  );
};

export const Popover = withOwnTheme(ThemelessPopover)({
  defaults,
  stylePresets,
});
