import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledHeader} from './styled';
import {AccordionProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';

const ThemelessAccordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({header, children}, ref) => (
    <StyledAccodionContainer>
      {header && (
        <StyledHeader as="h3">
          {header}
          <Icon />
        </StyledHeader>
      )}
      {children}
    </StyledAccodionContainer>
  ),
);

export const Accordion = withOwnTheme(ThemelessAccordion)({
  defaults,
  stylePresets,
});
