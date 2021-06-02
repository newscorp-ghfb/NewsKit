import React, {useRef, useLayoutEffect, useState} from 'react';
import {debounce} from 'debounce';
import {IconFilledChevronLeft, IconFilledChevronRight} from '../icons';
import {ScrollProps} from './types';
import {
  StyledScrollContainer,
  StyledScrollButtonContainer,
  StyledScrollNav,
} from './styled';
import {ScrollSnapAlignmentContextProvider} from './context';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useTheme} from '../theme';
import {IconButton} from '../icon-button';
import {ButtonOverrides} from '../button';
import {get} from '../utils/get';

const SCROLL_THRESHOLD = 0.99;

export const Scroll: React.FC<ScrollProps> = ({
  vertical = false,
  controls,
  stepDistance = 160,
  snapAlign,
  scrollBar = false,
  children,
  overrides = {},
}) => {
  const theme = useTheme();
  const buttonComponentDefault = get(
    theme,
    `componentDefaults.scroll.${
      vertical ? 'vertical' : 'horizontal'
    }.controls.button`,
  );
  const buttonOverrides: ButtonOverrides = {
    ...buttonComponentDefault,
    ...filterOutFalsyProperties(get(overrides, 'controls.button')),
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
      // In cases when browser is zoomed the scrollTop is decimal value instead of int
      // that brakes the following condition: scrollTop !== scrollHeight - clientHeight
      // for example:
      // scrollTop = 917.272705078125; scrollHeight = 1941; clientHeight = 1024
      // scrollTop will always be different from scrollWidth - clientWidth
      //
      // That is why we added SCROLL_THRESHOLD and the buttons will be hidden when is smaller than it.
      setCanScrollEnd(
        scrollHeight - clientHeight - scrollTop > SCROLL_THRESHOLD,
      );
    } else {
      const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
      setCanScrollStart(scrollLeft > 0);
      setCanScrollEnd(
        scrollWidth - clientWidth - scrollLeft > SCROLL_THRESHOLD,
      );
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 100);

  useLayoutEffect(checkForScrollPosition);

  const controlsEnabled = Boolean(
    controls && (controls === 'hover' || controls === 'static'),
  );

  const iconSize = 'small';
  return (
    <StyledScrollNav
      controlsVariant={controls}
      showStartShadow={canScrollStart}
      showEndShadow={canScrollEnd}
      vertical={vertical}
      overrides={overrides}
    >
      <StyledScrollContainer
        vertical={vertical}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        tabIndex={0}
        snapAlign={snapAlign}
        scrollBar={scrollBar}
        ref={scrollContainerRef}
        data-testid="scroll-container"
        onScroll={debounceCheckForScrollPosition}
        controlsEnabled={controlsEnabled}
      >
        {snapAlign ? (
          <ScrollSnapAlignmentContextProvider value={snapAlign}>
            {children}
          </ScrollSnapAlignmentContextProvider>
        ) : (
          children
        )}
      </StyledScrollContainer>

      {controlsEnabled && (
        <>
          {canScrollEnd && (
            <StyledScrollButtonContainer
              className="nk-scroll-controls"
              vertical={vertical}
              position="end"
              overrides={overrides}
            >
              <IconButton
                aria-label={`Scroll ${vertical ? 'bottom' : 'right'}`}
                overrides={buttonOverrides}
                tabIndex={-1}
                data-testid={`scroll-arrow-${vertical ? 'bottom' : 'right'}`}
                onClick={() => scrollContainer(stepDistance)}
                size={iconSize}
              >
                <IconFilledChevronRight />
              </IconButton>
            </StyledScrollButtonContainer>
          )}

          {canScrollStart && (
            <StyledScrollButtonContainer
              className="nk-scroll-controls"
              vertical={vertical}
              position="start"
              overrides={overrides}
            >
              <IconButton
                overrides={buttonOverrides}
                tabIndex={-1}
                aria-label={`Scroll ${vertical ? 'top' : 'left'}`}
                data-testid={`scroll-arrow-${vertical ? 'top' : 'left'}`}
                onClick={() => scrollContainer(-stepDistance)}
                size={iconSize}
              >
                <IconFilledChevronLeft />
              </IconButton>
            </StyledScrollButtonContainer>
          )}
        </>
      )}
    </StyledScrollNav>
  );
};
