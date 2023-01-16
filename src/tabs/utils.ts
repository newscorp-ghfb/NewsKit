// import ReactDOM from 'react-dom';
import {ScrollProps} from '../scroll';
import {Theme} from '../theme';
import {getToken} from '../utils/get-token';
import {getBorderFromTheme, getMotionFromTheme} from '../utils/style';

export const getLayoutParams = (
  el: HTMLElement | undefined,
  theme: Theme,
  vertical: boolean,
  sizeOverride?: string,
) => {
  if (!el) {
    return {
      size: 0,
      distance: 0,
    };
  }

  const params = vertical
    ? {
        // clientHeight and clientWidth return rounded value which can be different than painted one
        // getBoundingClientRect returns the correct value as float
        // but browsers also like to round up the value for the indicator
        // so we end up with example: tab width: 150.67 and indicator width: 151px
        // which adds 1px to the scroll and make arrows to be visible when then should not be
        // for that we use Math.floor to round down the value
        // which might make the indicator 1px smaller but prevents 1px scroll
        size: Math.floor(el.getBoundingClientRect().height),
        distance: el.offsetTop,
      }
    : {
        size: Math.floor(el.getBoundingClientRect().width),
        distance: el.offsetLeft,
      };

  if (sizeOverride) {
    let newSize = params.size;

    if (typeof theme.sizing[sizeOverride] !== 'undefined') {
      newSize = parseInt(theme.sizing[sizeOverride], 10);
    } else if (sizeOverride.includes('px')) {
      newSize = parseInt(sizeOverride, 10);
    } else if (sizeOverride.includes('%')) {
      newSize = params.size * (parseFloat(sizeOverride) / 100);
    }

    const sizeDifference = params.size - newSize;
    // update params object only when newSize is smaller than the
    // current tab button size
    if (sizeDifference > 0) {
      // if the indicator size is smaller than the parent container
      // center the indicator in it's container
      params.distance += sizeDifference / 2;
      params.size = newSize;
    }
  }
  return params;
};

export const KEYBOARD_ACTION = {
  next: 'next',
  previous: 'previous',
  start: 'start',
  end: 'end',
};

export const KEYBOARD_ARROWS = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  home: 36,
  end: 35,
};

export const parseKeyDown = (event: React.KeyboardEvent, vertical: boolean) => {
  const next = vertical ? KEYBOARD_ARROWS.down : KEYBOARD_ARROWS.right;
  const prev = vertical ? KEYBOARD_ARROWS.up : KEYBOARD_ARROWS.left;

  switch (event.keyCode) {
    case next:
      return KEYBOARD_ACTION.next;
    case prev:
      return KEYBOARD_ACTION.previous;
    case KEYBOARD_ARROWS.home:
      return KEYBOARD_ACTION.start;
    case KEYBOARD_ARROWS.end:
      return KEYBOARD_ACTION.end;
    default:
      return null;
  }
};

export const getTabsBarIndicatorStyle = (
  theme: Theme,
  size?: number,
  distance?: number,
  vertical?: boolean,
  keyUpdated?: number,
  overrides?: {},
) => {
  const weightToken = getToken(
    {theme, overrides},
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
    'weight',
  );
  const weight = getBorderFromTheme(weightToken, undefined)({theme});

  const motionDurationToken = getToken(
    {theme, overrides},
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
    'motionDuration',
  );

  const motionDuration = getMotionFromTheme(
    motionDurationToken,
    undefined,
  )({
    theme,
  });

  const motionTimingToken = getToken(
    {theme, overrides},
    'tabs.selectionIndicator.indicator',
    'selectionIndicator.indicator',
    'motionTiming',
  );
  const motionTiming = getMotionFromTheme(
    motionTimingToken,
    undefined,
  )({
    theme,
  });

  return {
    width: vertical ? weight : `${size}px`,
    height: vertical ? `${size}px` : weight,
    transform: vertical
      ? `translateY(${distance}px)`
      : `translateX(${distance}px)`,
    transition:
      keyUpdated && keyUpdated > 1
        ? `all ${motionDuration} ${motionTiming}`
        : undefined,
  };
};

export const getFirstParentElementWithRole = (
  element: Node | null,
  role: string,
) => {
  let currentElement = element as HTMLElement;
  while (currentElement && !(currentElement.getAttribute('role') === role)) {
    currentElement = currentElement.parentElement as HTMLElement;
  }
  return currentElement;
};

// Take the descendant element with a specific role but traverse the DOM only looking in each first child.
export const getDescendantOnlyFromFirstChild = (
  element: Node | null,
  role: string,
) => {
  let currentElement = element && element.childNodes && element.childNodes[0];

  while (
    currentElement &&
    !((currentElement as HTMLElement).getAttribute('role') === role)
  ) {
    currentElement = currentElement.childNodes && currentElement.childNodes[0];
  }
  return currentElement;
};

export const getScrollAlign = (
  index: number,
  tabArray: unknown[],
): ScrollProps['snapAlign'] => {
  if (index === 0) return 'start';
  if (index === tabArray.length - 1) return 'end';
  return 'center';
};
