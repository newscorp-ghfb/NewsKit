import React from 'react';
import {ToastProps} from './types';
import {Divider, DividerOverrides} from '../divider';
import {renderIfReactComponent} from '../utils/component';
import {
  StyledToastContainer,
  StyledContentContainer,
  StyledMessageContainer,
  StyledIconContainer,
  StyledDividerContainer,
  StyledActionsContainer,
  StyledTitleContainer,
  StyledToastInnerContainer,
} from './styled';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {splitAriaProps} from '../utils/a11y';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {childrenIsString} from '../utils/react-children-utilities';
import {omitLogicalPropsFromOverrides} from '../utils/logical-properties';

const ThemelessToast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      overrides = {},
      children,
      icon,
      actions,
      title,
      ariaLive = 'polite',
      role = 'status',
      ...restProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const dividerOverrides: DividerOverrides = {
      ...theme.componentDefaults.toast.divider,
      ...filterOutFalsyProperties(overrides.divider),
    };

    const {aria, rest} = splitAriaProps(restProps);

    const nonLogicalOverrides = omitLogicalPropsFromOverrides(
      overrides as Record<string, unknown>,
    );

    return (
      <StyledToastContainer
        data-testid="toast-container"
        overrides={overrides}
        ref={ref}
        {...rest}
      >
        <StyledToastInnerContainer>
          {icon && (
            <StyledIconContainer
              aria-hidden="true"
              overrides={nonLogicalOverrides}
            >
              {icon}
            </StyledIconContainer>
          )}
          <StyledContentContainer
            role={role}
            aria-live={ariaLive}
            {...aria}
            overrides={nonLogicalOverrides}
            actions={actions}
          >
            {title && (
              <StyledTitleContainer overrides={nonLogicalOverrides}>
                {title}
              </StyledTitleContainer>
            )}
            <StyledMessageContainer
              overrides={nonLogicalOverrides}
              as={childrenIsString(children) ? 'p' : 'div'}
            >
              {children}
            </StyledMessageContainer>
          </StyledContentContainer>
        </StyledToastInnerContainer>
        {actions && (
          <StyledDividerContainer overrides={nonLogicalOverrides}>
            <Divider vertical overrides={dividerOverrides} />
          </StyledDividerContainer>
        )}
        {actions && (
          <StyledActionsContainer>
            {renderIfReactComponent(actions)}
          </StyledActionsContainer>
        )}
      </StyledToastContainer>
    );
  },
);

export const Toast = withOwnTheme(ThemelessToast)({defaults, stylePresets});
