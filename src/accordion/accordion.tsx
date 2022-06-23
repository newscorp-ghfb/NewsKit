import React from 'react';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  StyledAccordionButton,
  StyledPanel,
  StyledLabel,
  StyledIconWrapper,
  StyledHeader,
} from './styled';
import {AccordionIconProps, AccordionProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {useReactKeys} from '../utils/hooks';
import {IconFilledExpandLess, IconFilledExpandMore} from '../icons';
import {getComponentOverrides} from '../utils/overrides';
import {TextBlock} from '../text-block';

const DefaultIcon = ({expanded, overrides}: AccordionIconProps) =>
  expanded ? (
    <IconFilledExpandLess
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  ) : (
    <IconFilledExpandMore
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  );

const ThemelessAccordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      headerAs = 'h3',
      header,
      label,
      expanded,
      disabled = false,
      children,
      ariaControls,
      id,
      overrides,
      ...props
    },
    ref,
  ) => {
    const [autoGeneratedID] = useReactKeys(1);
    const ariaControlsId = ariaControls || `${autoGeneratedID}-content`;
    const ariaLabelledById = id || `${autoGeneratedID}-control`;

    const [IndicatorIcon, indicatorIconProps] = getComponentOverrides(
      overrides?.header?.indicatorIcon,
      DefaultIcon,
      {
        expanded,
      },
    );

    return (
      <div ref={ref}>
        <TextBlock as={headerAs}>
          <StyledAccordionButton
            overrides={overrides}
            disabled={disabled}
            aria-expanded={expanded}
            aria-controls={ariaControlsId}
            id={ariaLabelledById}
            data-testid="accordion-control"
            {...props}
          >
            <StyledHeader>{header}</StyledHeader>
            {label && <StyledLabel overrides={overrides}>{label}</StyledLabel>}
            <StyledIconWrapper>
              <IndicatorIcon {...(indicatorIconProps as AccordionIconProps)} />
            </StyledIconWrapper>
          </StyledAccordionButton>
        </TextBlock>
        <StyledPanel
          aria-labelledby={ariaLabelledById}
          id={ariaControlsId}
          data-testid="accordion-content"
          role="region"
          expanded={expanded}
          overrides={overrides}
        >
          {children}
        </StyledPanel>
      </div>
    );
  },
);

export const Accordion = withOwnTheme(ThemelessAccordion)({
  defaults,
  stylePresets,
});
