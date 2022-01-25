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

export const BannerInternal: React.FC<BannerInternalProps> = ({
  actions,
  children,
  icon,
  overrides,
  layout,
  closeButtonLabel = 'Close',
  onClose,
  title,
  ...restProps
}) => {
  const theme = useTheme();
  const closeButtonStyles: ButtonProps['overrides'] = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults!.banner[layout].actions.closeButton,
      filterOutFalsyProperties(overrides?.actions?.closeButton),
    ),
  };

  const actionsCount = actions ? actions.length : 0;
  const actionKeys = useReactKeys(actionsCount);

  const actionsSpacing =
    overrides?.actions?.spaceInline ||
    theme.componentDefaults!.banner[layout].actions.spaceInline;

  return (
    <StyledBannerContainer
      role="region"
      data-testid="banner-container"
      overrides={overrides}
      layout={layout}
      {...restProps}
    >
      <StyledMaxWidthContainer
        flow={
          layout === 'vertical' ? Flow.VerticalCenter : Flow.HorizontalCenter
        }
        stackDistribution="flex-start"
        wrap="nowrap"
        layout={layout}
        overrides={overrides}
      >
        <StyledIconContentContainer
          flow={Flow.HorizontalTop}
          stackDistribution="flex-start"
          wrap="nowrap"
          layout={layout}
          overrides={overrides}
        >
          {icon && (
            <StyledIconContainer layout={layout} overrides={overrides}>
              {icon}
            </StyledIconContainer>
          )}
          <StyledContentContainer>
            {title && (
              <StyledTitleContainer
                as="span"
                layout={layout}
                overrides={overrides}
              >
                {title}
              </StyledTitleContainer>
            )}
            <StyledMessageContainer
              layout={layout}
              overrides={overrides}
              as={
                typeof children === 'string' ||
                (Array.isArray(children) &&
                  children.some(child => typeof child === 'string'))
                  ? 'p'
                  : 'div'
              }
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
    </StyledBannerContainer>
  );
};
