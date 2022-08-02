import React from 'react';
import {BannerInternalProps} from './types';
import {
  StyledBannerContainer,
  StyledMaxWidthContainer,
  StyledContentContainer,
  StyledIconContainer,
  StyledMessageContainer,
  StyledActionsContainer,
  StyledIconContentContainer,
  StyledTitleContainer,
} from './styled';
import {renderIfReactComponent} from '../utils/component';
import {Flow, StackDistribution} from '../stack';
import {AlignSelfValues, StackChild} from '../stack-child';
import {BreakpointKeys, useTheme} from '../theme';
import {useReactKeys} from '../utils/hooks';
import {Button, ButtonProps} from '../button';
import {IconFilledClose} from '../icons';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {IconButton} from '../icon-button';
import {deepMerge} from '../utils';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {Cell, Grid} from '../grid';
import {childrenIsString} from '../utils/react-children-utilities';
import {omitLogicalPropsFromOverrides} from '../utils/logical-properties';

export const BannerInternal = React.forwardRef<
  HTMLDivElement,
  BannerInternalProps
>(
  (
    {
      actions,
      children,
      icon,
      overrides,
      layout,
      closeButtonLabel = 'Close',
      onClose,
      title,
      ...restProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const closeButtonStyles: ButtonProps['overrides'] = {
      ...deepMerge(
        mergeBreakpointObject(
          Object.keys(theme.breakpoints) as BreakpointKeys[],
        ),
        theme.componentDefaults.banner[layout].actions.closeButton,
        filterOutFalsyProperties(overrides?.actions?.closeButton),
      ),
    };

    const actionsCount = actions ? actions.length : 0;
    const actionKeys = useReactKeys(actionsCount);

    const actionsSpacing =
      overrides?.actions?.spaceInline ||
      theme.componentDefaults.banner[layout].actions.spaceInline;

    const nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);

    return (
      <StyledBannerContainer
        ref={ref}
        role="region"
        data-testid="banner-container"
        overrides={overrides}
        layout={layout}
        {...restProps}
      >
        <Grid {...overrides?.grid?.props}>
          <Cell xs={12} {...overrides?.cell?.props}>
            <StyledMaxWidthContainer
              flow={
                layout === 'vertical'
                  ? Flow.VerticalCenter
                  : Flow.HorizontalCenter
              }
              stackDistribution="flex-start"
              wrap="nowrap"
              layout={layout}
              overrides={nonLogicalOverrides}
            >
              <StyledIconContentContainer
                flow={Flow.HorizontalTop}
                stackDistribution="flex-start"
                wrap="nowrap"
                layout={layout}
                overrides={nonLogicalOverrides}
                height="auto"
              >
                {icon && (
                  <StyledIconContainer
                    layout={layout}
                    overrides={nonLogicalOverrides}
                  >
                    {icon}
                  </StyledIconContainer>
                )}
                <StyledContentContainer>
                  {title && (
                    <StyledTitleContainer
                      as="span"
                      layout={layout}
                      overrides={nonLogicalOverrides}
                    >
                      {title}
                    </StyledTitleContainer>
                  )}
                  <StyledMessageContainer
                    layout={layout}
                    overrides={nonLogicalOverrides}
                    as={childrenIsString(children) ? 'p' : 'div'}
                  >
                    {children}
                  </StyledMessageContainer>
                </StyledContentContainer>
              </StyledIconContentContainer>
              {(actions?.length || onClose) && (
                <StyledActionsContainer
                  flow={
                    layout === 'vertical'
                      ? Flow.VerticalCenter
                      : Flow.HorizontalCenter
                  }
                  stackDistribution={StackDistribution.Start}
                  spaceInline={actionsSpacing}
                  layout={layout}
                >
                  {onClose && layout === 'vertical' && (
                    <StackChild
                      key="banner-close-button"
                      alignSelf={AlignSelfValues.Stretch}
                    >
                      <Button
                        overrides={{
                          ...closeButtonStyles,
                          width: '100%',
                        }}
                        onClick={onClose}
                        data-testid="banner-close-button"
                      >
                        {closeButtonLabel}
                      </Button>
                    </StackChild>
                  )}
                  {actions &&
                    actionKeys.length &&
                    actions.map((action, idx) => (
                      <StackChild
                        key={actionKeys[idx]}
                        alignSelf={
                          layout === 'vertical'
                            ? AlignSelfValues.Stretch
                            : AlignSelfValues.Auto
                        }
                      >
                        {renderIfReactComponent(action)}
                      </StackChild>
                    ))}
                  {onClose && layout === 'horizontal' && (
                    <IconButton
                      key="banner-close-button-horizontal"
                      data-testid="banner-close-button"
                      aria-label={closeButtonLabel}
                      size="small"
                      overrides={closeButtonStyles}
                      onClick={onClose}
                    >
                      <IconFilledClose />
                    </IconButton>
                  )}
                </StyledActionsContainer>
              )}
            </StyledMaxWidthContainer>
          </Cell>
        </Grid>
      </StyledBannerContainer>
    );
  },
);
