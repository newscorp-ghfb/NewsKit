/* eslint-disable no-console */
import {EventHandler} from '../types';

const createHandler = (prefix?: string): EventHandler => events =>
  events.map(event => {
    const args = prefix ? [prefix, event] : [event];
    console.log(...args);
    return event;
  });

export default createHandler;
