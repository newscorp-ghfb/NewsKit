const tabbableElements = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[tabindex="0"]',
  '[contenteditable]',
  'audio[controls]',
  'video[controls]',
  'summary',
  '[tabindex^="0"]',
  '[tabindex^="1"]',
  '[tabindex^="2"]',
  '[tabindex^="3"]',
  '[tabindex^="4"]',
  '[tabindex^="5"]',
  '[tabindex^="6"]',
  '[tabindex^="7"]',
  '[tabindex^="8"]',
  '[tabindex^="9"]',
];

// Elements inside a container with aria-hidden set to true can't be focusable.
// This function aims to fix this issue in the drawer.
export const setDrawerElementFocusability = (
  open: boolean,
  ref: React.RefObject<HTMLDivElement>,
) => {
  /* istanbul ignore else */
  if (ref && ref.current) {
    const dialog = ref.current;
    if (dialog) {
      const focusableElements = dialog.querySelectorAll(
        tabbableElements.join(),
      );
      if (open) {
        focusableElements.forEach(element => {
          element.removeAttribute('tabindex');
        });
      }
      if (!open) {
        focusableElements.forEach(element => {
          element.setAttribute('tabindex', '-1');
        });
      }
    }
  }
};
