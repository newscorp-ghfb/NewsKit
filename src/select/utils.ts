import {MQ} from '../utils/style/types';

export const showInModal = (prop: MQ<boolean>) => {
  if (typeof prop === 'object') {
    return Object.keys(prop).filter(Boolean).length;
  }
  return prop === true;
};
