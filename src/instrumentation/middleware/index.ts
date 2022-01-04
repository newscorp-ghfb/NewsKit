import {EventHandler} from '../types';

import * as filters from './filters';

export const composeInstrumentationMiddleware = (
  ...middlewares: EventHandler[]
): EventHandler => events =>
  middlewares.reverse().reduce((e, mw) => mw(e), events);

export const instrumentationMiddleware = {
  ...filters,
};
