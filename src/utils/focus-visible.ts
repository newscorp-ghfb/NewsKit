export const isFocusVisible = (e: React.FocusEvent<HTMLInputElement>) => {
  try {
    return e.target.matches(':focus-visible');
  } catch (error) {
    /*
      Currently only Safari 15.4 supports :focus-visible.
      For the previous versions of Safari, we will return true here which means that the focus ring on the elements which are using this function will be visible on mouse click. So this acts more like an incremental enhancement for Safari. For all other supported browsers this will work as expected because they have good support for :focus-visible.
    */
    return true;
  }
};
