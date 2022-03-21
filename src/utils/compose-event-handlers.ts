// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const composeEventHandlers = (listeners: any[] = []) => (event: any) => {
  listeners.forEach(listener => {
    if (typeof listener === 'function') {
      listener(event);
    }
  });
};
