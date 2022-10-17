import {useState, useEffect} from 'react';

export function useMediaQuery(query: string) {
  const getInitialState = () =>
    typeof window !== 'undefined' && window.matchMedia(query).matches;

  const [isMatched, setIsMatched] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList =
      typeof window !== 'undefined' && window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setIsMatched(event.matches);
    };
    if (mediaQueryList) {
      mediaQueryList.addEventListener('change', listener);
    }
    return () => {
      if (mediaQueryList) {
        mediaQueryList.removeEventListener('change', listener);
      }
    };
  }, [query]);
  return isMatched;
}
