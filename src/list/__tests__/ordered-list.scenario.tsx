import * as React from 'react';
import {OrderedList} from '..';

export const name = 'ordered-list';

const listData = [`alpha`, `bravo`, `charlie`, `delta`, `echo`, `foxtrot`];

export const component = () => <OrderedList>{listData}</OrderedList>;
