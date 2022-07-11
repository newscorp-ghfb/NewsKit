import {MQ} from './style';

export const shouldRenderInModal = (
  prop: MQ<boolean>,
  currentBreakpoint: string,
) => {
  const modalMQKeys = Object.keys(prop).filter(Boolean);
  return modalMQKeys.includes(currentBreakpoint) || prop === true;
};
