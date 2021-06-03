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
} from './styled';
import {renderIfReactComponent} from '../utils/component';
import {Flow, StackDistribution} from '../stack';
import {AlignSelfValues, StackChild} from '../stack-child';
import {useTheme} from '../theme';
import {useReactKeys} from '../utils/hooks/use-react-keys';

export const BannerInternal: React.FC<BannerInternalProps> = ({
  actions,
  children,
  icon,
  overrides,
  layout,
  ...restProps
}) => {
  const theme = useTheme();

  const actionsCount = actions ? actions.length : 0;
  const actionKeys = useReactKeys(actionsCount);

  const actionsSpacing =
    overrides?.actions?.spaceInline ||
    theme.componentDefaults.banner[layout].actions.spaceInline;

  const hasActions = Array.isArray(actions) && actionKeys.length;

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
        {hasActions && (
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
            {actions &&
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
          </StyledActionsContainer>
        )}
      </StyledMaxWidthContainer>
    </StyledBannerContainer>
  );
};
