import {AnalyticsEvent, ExtendedWindow} from './types';
import {EventQueue} from './event-queue';

const extendedWindow: ExtendedWindow | null =
  typeof window !== 'undefined' ? ((window as Window) as ExtendedWindow) : null;

export function sendEventToTealium(e: AnalyticsEvent) {
  switch (e.type) {
    case 'link':
      return extendedWindow && extendedWindow.utag.link(e.data);
    case 'view':
      return extendedWindow && extendedWindow.utag.view(e.data);
    default:
      return null;
  }
}

const track = (event: AnalyticsEvent) => {
  if (extendedWindow && extendedWindow.utag) {
    sendEventToTealium(event);
  } else {
    EventQueue.add(event);
  }
};

export const trackPageView = (pageUrl: string) => {
  track({
    type: 'view',
    data: {
      page_url: pageUrl,
    },
  });
};

export const trackInteraction = (
  eventName: React.ReactNode,
  browsingMethod?: string,
) => {
  track({
    type: 'link',
    data: {
      event_navigation_action: eventName,
      event_navigation_browsing_method: browsingMethod,
    },
  });
};
