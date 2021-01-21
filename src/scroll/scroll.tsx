import React, {useRef, useLayoutEffect, useState} from 'react';
import {debounce} from 'debounce';
import {IconFilledChevronLeft, IconFilledChevronRight} from '../icons';
import {ScrollProps} from './types';
import {
  StyledScrollArrowButton,
  StyledScrollContainer,
  StyledScrollNav,
} from './styled';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme';

export const Scroll: React.FC<ScrollProps> = ({
  vertical = false,
  arrows,
  stepDistance = 160,
  children,
  overrides = {},
}) => {
  const theme = useTheme();
  const arrowsSettings: typeof overrides['arrows'] = {
    ...theme.componentDefaults.scroll.arrows,
    ...filterOutFalsyProperties(overrides.arrows),
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollStart, setCanScrollStart] = useState(false);
  const [canScrollEnd, setCanScrollEnd] = useState(false);

  const scrollContainer = (distance: number) => {
    /* istanbul ignore if */
    if (!scrollContainerRef.current) return;

    if (vertical) {
      scrollContainerRef.current.scrollTop += distance;
    } else {
      scrollContainerRef.current.scrollLeft += distance;
    }
  };

  const checkForScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    if (vertical) {
      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = scrollContainerRef.current;

      setCanScrollStart(scrollTop > 0);
      setCanScrollEnd(scrollTop !== scrollHeight - clientHeight);
    } else {
      const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;

      setCanScrollStart(scrollLeft > 0);
      setCanScrollEnd(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 100);

  useLayoutEffect(checkForScrollPosition);

  const arrowsEnabled = Boolean(
    arrows && (arrows === 'hover' || arrows === 'static'),
  );

  return (
    <StyledScrollNav
      {...{arrows}}
      showStartShadow={canScrollStart}
      showEndShadow={canScrollEnd}
      vertical={vertical}
    >
      <StyledScrollContainer
        vertical={vertical}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        tabIndex={0}
        ref={scrollContainerRef}
        data-testid="scroll-container"
        onScroll={debounceCheckForScrollPosition}
        arrowsEnabled={arrowsEnabled}
      >
        {children}
      </StyledScrollContainer>

      {arrowsEnabled && (
        <>
          {canScrollEnd && (
            <StyledScrollArrowButton
              vertical={vertical}
              position="end"
              aria-label={`Scroll ${vertical ? 'bottom' : 'right'}`}
              overrides={arrowsSettings}
              tabIndex={-1}
              data-testid={`scroll-arrow-${vertical ? 'bottom' : 'right'}`}
              onClick={() => scrollContainer(stepDistance)}
            >
              <IconFilledChevronRight />
            </StyledScrollArrowButton>
          )}

          {canScrollStart && (
            <StyledScrollArrowButton
              vertical={vertical}
              position="start"
              overrides={arrowsSettings}
              tabIndex={-1}
              aria-label={`Scroll ${vertical ? 'top' : 'left'}`}
              data-testid={`scroll-arrow-${vertical ? 'top' : 'left'}`}
              onClick={() => scrollContainer(-stepDistance)}
            >
              <IconFilledChevronLeft />
            </StyledScrollArrowButton>
          )}
        </>
      )}
    </StyledScrollNav>
  );
};
