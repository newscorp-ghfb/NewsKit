const escapeRegExp = (string: string): string =>
  // $& means the whole matched string
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const pathToID = (path: string) => {
  if (path) {
    return path
      .replace(new RegExp(escapeRegExp('../'), 'g'), '')
      .replace(new RegExp(escapeRegExp('./'), 'g'), '')
      .replace(new RegExp(escapeRegExp('/'), 'g'), '-');
  }
  return '';
};

const safariUACheck = /^((?!chrome|android).)*safari/i;
const isWindowLoaded = typeof window !== 'undefined';

export const isSafari =
  isWindowLoaded && safariUACheck.test(window.navigator.userAgent);
export const isNotSafari =
  isWindowLoaded && !safariUACheck.test(window.navigator.userAgent);
