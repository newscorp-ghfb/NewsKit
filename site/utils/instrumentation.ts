import {InstrumentationEvent} from 'newskit';

/*
We need to re-map some of the object values as requested by the Data team and the previous configuration
  area -> component
  value -> object
*/
export const transformEventObject = (event: InstrumentationEvent) => {
  const {originator, trigger, context} = event;

  // @ts-ignore area and value does not exist on every event
  const {area, value, ...rest} = context;

  const newContext = {
    ...rest,
    // its requirement to always send component and object
    component: area || 'global',
    object: value || 'generic',
  };

  return {
    originator,
    trigger,
    context: newContext,
  };
};
