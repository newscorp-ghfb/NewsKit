import createConsoleHandler from './console';
import createTealiumHandler from './tealium';
import createTealiumTrackHandler from './tealium-track';

export const instrumentationHandlers = {
  createConsoleHandler,
  createTealiumHandler,
  createTealiumTrackHandler,
};
