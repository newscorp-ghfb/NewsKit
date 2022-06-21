export const getTransitionClassName = (
  componentName: string,
  state: string,
): string => {
  let suffixClassName = '';
  const nkComponent = componentName === 'nk-modal' ? 'nk-modal' : 'nk-drawer';
  // eslint-disable-next-line default-case
  switch (state) {
    case 'exiting':
      suffixClassName = 'exit-active';
      break;
    case 'entering':
      suffixClassName = 'enter-active';
      break;
    case 'exited':
      suffixClassName = 'exit-done';
      break;
    case 'entered':
      suffixClassName = 'enter-done';
      break;
  }
  return `${nkComponent}-${suffixClassName}`;
};
