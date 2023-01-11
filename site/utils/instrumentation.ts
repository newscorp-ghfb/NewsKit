import {InstrumentationEvent} from 'newskit';

/*
We need to re-map some of the object values as request by Data team and previous configuration
  area -> component
  value -> object
*/
export const transformEventObject = (event: InstrumentationEvent) => {
  const {originator, trigger, context} = event;

  // @ts-ignore area and value does not exist on every event
  const {area, value, ...rest} = context;

  const newContext = {
    ...rest,
    ...(area ? {component: area} : {}),
    ...(value ? {object: value} : {}),
  };

  return {
    originator,
    trigger,
    context: newContext,
  };
};
