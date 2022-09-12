/**
 * @jest-environment node
 */
import {EventTrigger} from '../../types';
import {sendEventTrackingToTealium} from '../tealium-track';

const mockEvent = {
  originator: 'link',
  trigger: EventTrigger.Click,
  context: {some: 'object', prop: 'context'},
};

describe('instrumentation event handler - tealiumTrack on server side (without extendedWindow)', () => {
  test('returns null', () => {
    const sendEventResult = sendEventTrackingToTealium(mockEvent);
    expect(sendEventResult).toEqual(null);
  });
});
