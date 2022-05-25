import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  StyledAccodionContainer,
  StyledHeaderWrapper,
  StyledHeader,
  StyledPanel,
} from './styled';
import {AccordionProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {IconFilledExpandMore} from '../icons';
import {GridLayout, GridLayoutItem} from '../grid-layout';

const ThemelessAccordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({headerText, headingAs = 'h3', startEnhancer, children}, ref) => (
    <StyledAccodionContainer ref={ref}>
      {headerText && (
        <StyledHeaderWrapper as={headingAs}>
          <StyledHeader>
            <GridLayout
              columns="auto 1fr auto auto"
              columnGap="space020"
              overrides={{width: '100%'}}
            >
              {startEnhancer && (
                <GridLayoutItem>{startEnhancer}</GridLayoutItem>
              )}
              <GridLayoutItem justifySelf="flex-start">
                {headerText}
              </GridLayoutItem>
              <GridLayoutItem>Label</GridLayoutItem>
              <GridLayoutItem>
                <IconFilledExpandMore
                  overrides={{
                    size: 'sizing050',
                  }}
                />
              </GridLayoutItem>
            </GridLayout>
          </StyledHeader>
        </StyledHeaderWrapper>
      )}
      <StyledPanel>{children}</StyledPanel>
    </StyledAccodionContainer>
  ),
);

export const Accordion = withOwnTheme(ThemelessAccordion)({
  defaults,
  stylePresets,
});
