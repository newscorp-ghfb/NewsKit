import {useRef, useState, useEffect} from 'react';
import {useResizeObserver} from '../../src/utils/hooks';

export function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current as HTMLElement | null;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
    return undefined;
  });

  return [ref, value] as [React.MutableRefObject<null>, boolean];
}

type TabIndexWhenScrollOptions = {
  firstChild?: boolean;
};

export const useTabIndexWhenScroll = (
  ref: React.RefObject<HTMLElement>,
  {firstChild}: TabIndexWhenScrollOptions = {},
) => {
  const [hasScroll, setHasScroll] = useState(false);
  const [width] = useResizeObserver(ref);

  useEffect(() => {
    if (ref.current) {
      // firstChild option is used in the case when you don't have access/reference to the children element
      const element = firstChild
        ? (ref.current.firstChild as HTMLElement)
        : ref.current;
      if (element) {
        const {scrollWidth, clientWidth} = element!;
        setHasScroll(scrollWidth > clientWidth);
      }
    }
  }, [width, firstChild, ref]);

  return hasScroll ? 0 : undefined;
};
