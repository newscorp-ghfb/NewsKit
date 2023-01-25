const safariUACheck = /^((?!chrome|android).)*safari/i;
const isWindowLoaded = typeof window !== 'undefined';

export const isSafari =
  isWindowLoaded && safariUACheck.test(window.navigator.userAgent);
export const isNotSafari =
  isWindowLoaded && !safariUACheck.test(window.navigator.userAgent);
