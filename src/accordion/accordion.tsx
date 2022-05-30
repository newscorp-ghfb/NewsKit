import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  StyledAccodionContainer,
  StyledHeaderWrapper,
  StyledAccordionButton,
  StyledPanel,
  StyledEnhancer,
  StyledIndicatorIcon,
  StyledIndicatorLabel,
  StyledDivider,
  StyledHeaderText,
} from './styled';
import {AccordionProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';

const ThemelessAccordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      headingAs = 'h3',
      headerText,
      label,
      startEnhancer,
      indicatorIcon,
      expanded,
      applyDivider = true,
      disabled = false,
      children,
      ariaControls,
      id,
      overrides,
    },
    ref,
  ) => (
    <StyledAccodionContainer ref={ref}>
      {headerText && (
        <StyledHeaderWrapper as={headingAs}>
          <StyledAccordionButton
            overrides={overrides}
            disabled={disabled}
            id={id}
            aria-expanded={expanded}
            aria-controls={ariaControls}
          >
            {startEnhancer && <StyledEnhancer>{startEnhancer}</StyledEnhancer>}
            {headerText && <StyledHeaderText>{headerText}</StyledHeaderText>}
            {label && <StyledIndicatorLabel>{label}</StyledIndicatorLabel>}
            {indicatorIcon && (
              <StyledIndicatorIcon>{indicatorIcon}</StyledIndicatorIcon>
            )}
          </StyledAccordionButton>
        </StyledHeaderWrapper>
      )}
      {expanded && (
        <>
          {applyDivider && <StyledDivider />}
          <StyledPanel
            aria-labelledby={id}
            id={ariaControls}
            role="region"
            overrides={overrides}
          >
            {children}
          </StyledPanel>
        </>
      )}
    </StyledAccodionContainer>
  ),
);

export const Accordion = withOwnTheme(ThemelessAccordion)({
  defaults,
  stylePresets,
});
