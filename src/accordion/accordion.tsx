import React, {useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  StyledAccordionButton,
  StyledPanel,
  StyledLabel,
  StyledIconWrapper,
  StyledHeader,
  StyledPanelTransitionContainer,
} from './styled';
import {AccordionIconProps, AccordionProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {useReactKeys, useResizeObserver} from '../utils/hooks';
import {IconFilledExpandLess, IconFilledExpandMore} from '../icons';
import {getComponentOverrides} from '../utils/overrides';
import {TextBlock} from '../text-block';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {getTransitionClassName} from '../utils/get-transition-class-name';
import {getTransitionDuration} from '../utils';
import {useTheme} from '../theme';
import {getRefScrollHeight} from './utils';
import {EventTrigger, useInstrumentation} from '../instrumentation';

// Based on https://www.w3schools.com/howto/howto_js_accordion.asp
const MaxHeightTransitionPanel = ({
  expanded,
  children,
  overrides,
  className,
}: Pick<AccordionProps, 'expanded' | 'children' | 'overrides'> & {
  className: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width] = useResizeObserver(ref);
  useEffect(() => {
    if (expanded) {
      ref.current!.style.maxHeight = `${getRefScrollHeight(ref.current!)}px`;
    } else {
      ref.current!.style.maxHeight = '0px';
    }
  }, [expanded, width]);
  return (
    <StyledPanelTransitionContainer
      data-testid="panel-transition-container"
      ref={ref}
      expanded={expanded}
      overrides={overrides}
      className={className}
    >
      {children}
    </StyledPanelTransitionContainer>
  );
};

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
      onClick: onClickProp,
      onChange: onChangeProp = () => null,
      eventContext = {},
      eventOriginator = 'accordion',
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

    const {fireEvent} = useInstrumentation();

    const onClick = composeEventHandlers([
      onClickProp,
      () => onChangeProp(!expanded),
      () =>
        fireEvent({
          originator: eventOriginator,
          trigger: EventTrigger.Click,
          context: {
            ...eventContext,
          },
        }),
    ]);

    const theme = useTheme();

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
            onClick={onClick}
            {...props}
          >
            <StyledHeader>{header}</StyledHeader>
            {label && <StyledLabel overrides={overrides}>{label}</StyledLabel>}
            <StyledIconWrapper>
              <IndicatorIcon {...(indicatorIconProps as AccordionIconProps)} />
            </StyledIconWrapper>
          </StyledAccordionButton>
        </TextBlock>
        <CSSTransition
          in={expanded}
          timeout={getTransitionDuration(
            `accordion.panel`,
            'panel',
          )({theme, overrides})}
          classNames="nk-accordion"
        >
          {(state: string) => (
            <MaxHeightTransitionPanel
              className={getTransitionClassName('nk-accordion', state)}
              expanded={expanded}
              overrides={overrides}
            >
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
            </MaxHeightTransitionPanel>
          )}
        </CSSTransition>
      </div>
    );
  },
);

export const Accordion = withOwnTheme(ThemelessAccordion)({
  defaults,
  stylePresets,
});

Accordion.displayName = 'Accordion';
