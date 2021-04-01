import {useLayoutEffect} from 'react';

// TODO: improve scroll lock https://medium.com/react-camp/how-to-fight-the-body-scroll-2b00267b37ac should be supported in all browsers and devices
export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    let originalStyle: string | null = window.getComputedStyle(document.body)
      .overflow;

    const disableBodyScroll = () => {
      /* istanbul ignore else */
      if (document !== undefined) {
        document.body.style.overflow = 'hidden';
      }
    };
    const resetBodyScroll = () => {
      /* istanbul ignore else */
      if (document !== undefined && originalStyle !== null) {
        document.body.style.overflow = originalStyle;
        originalStyle = null;
      }
    };
    disableBodyScroll();

    return () => resetBodyScroll();
  }, []); // Empty array ensures effect is only run on mount and unmount
};
