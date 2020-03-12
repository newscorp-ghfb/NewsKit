/**
 * @jest-environment node
 */
import {EventTrigger} from '../../types';
import {sendEventToTealium} from '../tealium';

const mockEvent = {
  originator: 'link',
  trigger: EventTrigger.Click,
  data: {href: 'href1'},
};

describe('instrumentation event handler - tealium on server side (without extendedWindow)', () => {
  test('returns null', () => {
    const sendEventResult = sendEventToTealium(mockEvent);
    expect(sendEventResult).toEqual(null);
  });
});
