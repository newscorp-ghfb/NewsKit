import {InstrumentationEvent, EventTrigger} from '../types';

const filter = <T extends string>(field: keyof InstrumentationEvent) => (
  value: T,
) => (events: InstrumentationEvent[]) =>
  events.filter(event => event[field] === value);

export const filterByOriginator = filter<string>('originator');

export const filterByTrigger = filter<EventTrigger>('trigger');
