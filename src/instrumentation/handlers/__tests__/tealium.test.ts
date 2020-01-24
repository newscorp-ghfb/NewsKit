import {EventTrigger} from '../../types';
import createHandler, {ExtendedWindow} from '../tealium';

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
      trigger: EventTrigger.Swipe,
      data: {href: 'href1'},
    },
    {
      originator: 'link',
      trigger: EventTrigger.Load,
      data: {href: 'href2'},
    },
  ];

  const viewEvents = [
    {
      originator: 'link',
      trigger: EventTrigger.Load,
      data: {href: 'href2'},
    },
  ];

  const linkEvent = [
    {
      originator: 'link',
      trigger: EventTrigger.Click,
      data: {href: 'href2'},
    },
  ];

  beforeEach(() => {
    const linkStub = jest.fn();
    const viewStub = jest.fn();
    (extendedWindow.utag as any) = {link: linkStub, view: viewStub};
  });

  test('triggers a view event', () => {
    const handler = createHandler();
    handler(viewEvents);

    expect(extendedWindow.utag.view).toBeCalledWith(viewEvents[0]);
  });

  test('triggers a link event', () => {
    const handler = createHandler();
    handler(linkEvent);

    expect(extendedWindow.utag.link).toBeCalledWith(linkEvent[0]);
  });

  test("triggers each event, according to it's type", () => {
    const handler = createHandler();
    handler(mockEvents);

    expect(extendedWindow.utag.link).nthCalledWith(1, mockEvents[0]);
    expect(extendedWindow.utag.link).nthCalledWith(2, mockEvents[1]);
    expect(extendedWindow.utag.view).toBeCalledWith(mockEvents[2]);
  });
});
