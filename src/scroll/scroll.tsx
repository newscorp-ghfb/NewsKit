import React, {useRef, useState} from 'react';
import composeRefs from '@seznam/compose-react-refs';
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
import {useIsomorphicLayoutEffect} from '../utils/hooks';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {SCROLL_THRESHOLD} from './utils';

const ThemelessScroll = React.forwardRef<HTMLDivElement, ScrollProps>(
  (
    {
      vertical = false,
      controls,
      stepDistance = 160,
      snapAlign,
      scrollBar = false,
      children,
      overrides = {},
      ...props
    },
    ref,
  ) => {
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
      /* istanbul ignore if */
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
        const {
          scrollLeft,
          scrollWidth,
          clientWidth,
        } = scrollContainerRef.current;
        setCanScrollStart(scrollLeft > 0);
        setCanScrollEnd(
          scrollWidth - clientWidth - scrollLeft > SCROLL_THRESHOLD,
        );
      }
    };

    const debounceCheckForScrollPosition = debounce(
      checkForScrollPosition,
      100,
    );

    useIsomorphicLayoutEffect(checkForScrollPosition);

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
          tabIndex={0}
          {...props}
          vertical={vertical}
          snapAlign={snapAlign}
          scrollBar={scrollBar}
          ref={composeRefs(scrollContainerRef, ref)}
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
                  eventOriginator={`scroll-button-${
                    vertical ? 'bottom' : 'right'
                  }`}
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
                  eventOriginator={`scroll-button-${vertical ? 'top' : 'left'}`}
                >
                  <IconFilledChevronLeft />
                </IconButton>
              </StyledScrollButtonContainer>
            )}
          </>
        )}
      </StyledScrollNav>
    );
  },
);

export const Scroll = withOwnTheme(ThemelessScroll)({
  defaults,
  stylePresets,
});
