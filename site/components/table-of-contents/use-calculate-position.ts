import {useEffect, useState} from 'react';
import debounce from 'debounce';
import {useTheme} from '@emotion/react';

const getDomElements = () => {
  let domElementsCache: {
    intro?: HTMLElement;
    toc?: HTMLElement;
    footer?: HTMLElement;
    header?: HTMLElement;
  } = {};

  if (Object.keys(domElementsCache).length === 4) {
    return domElementsCache;
  }

  // for some reason selecting the SVG ends up to losing the reference on re-render, that's why it uses svg parent
  const intro = document.querySelector('#introduction svg')
    ?.parentElement as HTMLElement;
  const toc = document.querySelector('#toc-navigation') as HTMLElement;
  const footer = document.querySelector('footer')!;
  const header = document.querySelector('header')!;

  domElementsCache = {
    intro,
    toc,
    footer,
    header,
  };
  return domElementsCache;
};

const isToCVisible = (el: HTMLElement | undefined) => {
  if (
    el &&
    el.parentElement &&
    (window.getComputedStyle(el?.parentElement).display === 'none' ||
      window.getComputedStyle(el).display === 'none')
  ) {
    return false;
  }

  return true;
};

export const useCalculatePosition = () => {
  const [position, setPosition] = useState({
    direction: 'top',
    size: 0,
    min: 0,
    max: 0,
  });
  const theme = useTheme();

  useEffect(() => {
    const calculatePosition = () => {
      const {
        intro: introImgEl,
        toc: tocNavigationEl,
        footer: footerEl,
        header: headerEl,
      } = getDomElements();

      // do not do calculations when TOC is not visible
      if (!isToCVisible(tocNavigationEl)) {
        return false;
      }

      const introImgTop = introImgEl?.getBoundingClientRect().top || 0;
      const tocNavigationHeight =
        tocNavigationEl?.getBoundingClientRect().height || 0;
      const footerRect = footerEl?.getBoundingClientRect();

      const footerHeight = footerRect?.height || 0;
      const footerBottom = (footerRect?.bottom || 0) - window.innerHeight;
      const footerVisibleSize = footerHeight - footerBottom;
      const footerInView = footerVisibleSize > 0;

      const gap = parseInt(theme?.sizing?.sizing090, 10) || 64; // padding between toc
      const headerHeight = headerEl?.getBoundingClientRect().height || 0;
      // The default top position is header header + padding ( gap )
      const defaultTop = headerHeight + gap;

      // check if window is big enough so we can fit the header, toc and footer
      const tocOutOfBoundarySpace =
        window.innerHeight -
        (tocNavigationHeight + footerVisibleSize + gap + defaultTop);

      const tocDoesNotHasSpace = tocOutOfBoundarySpace < 0;

      const direction = tocDoesNotHasSpace && footerInView ? 'bottom' : 'top';

      const size =
        tocDoesNotHasSpace && footerInView
          ? footerVisibleSize + gap
          : Math.max(defaultTop, introImgTop);

      // don't update the state if there is no change

      setPosition({
        direction,
        size,
        min: defaultTop,
        max: introImgTop,
      });
      return true;
    };

    calculatePosition();

    const onScroll = debounce(calculatePosition, 32);
    document.addEventListener('scroll', onScroll);
    document.addEventListener('resize', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
      document.removeEventListener('resize', onScroll);
    };
  }, [theme.sizing.sizing090]);

  return position;
};
