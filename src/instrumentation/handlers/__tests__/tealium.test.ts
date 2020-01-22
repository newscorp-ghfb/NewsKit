import {EventTrigger, ExtendedWindow} from '../../types';
import createHandler, {sendEventToTealium} from '../tealium';

const extendedWindow: ExtendedWindow = (window as Window) as ExtendedWindow;

describe('instrumentation event handler - tealium', () => {
  const mockEvents = [
    {
      originator: 'link',
      trigger: EventTrigger.Click,
      data: {href: 'href1'},
    },
    {
      originator: 'link',
      trigger: EventTrigger.PageView,
      data: {href: 'href2'},
    },
  ];

  const mockEvents2 = [
    {
      originator: 'link',
      trigger: EventTrigger.Click,
      data: {href: 'href1'},
    },
    {
      originator: 'link',
      trigger: 'foo' as any,
      data: {href: 'href2'},
    },
  ];

  beforeEach(() => {
    const linkStub = jest.fn();
    const viewStub = jest.fn();
    (extendedWindow.utag as any) = {link: linkStub, view: viewStub};
  });
  test("triggers each event, according to it's type", () => {
    const handler = createHandler();
    handler(mockEvents);

    expect(extendedWindow.utag.link).nthCalledWith(1, mockEvents[0]);
    expect(extendedWindow.utag.view).nthCalledWith(1, mockEvents[1]);
  });

  test('triggers only the events which types we are supporting', () => {
    const handler = createHandler();
    handler(mockEvents2);

    expect(extendedWindow.utag.link).nthCalledWith(1, mockEvents2[0]);
    expect(extendedWindow.utag.link).not.nthCalledWith(1, mockEvents2[1]);
  });

  test('sendEventToTealium returns null if originator is not in supported event types', () => {
    const sentEvents = sendEventToTealium(mockEvents2[1]);

    expect(sentEvents).toBeNull();
    expect(extendedWindow.utag.link).not.toBeCalled();
  });
});
