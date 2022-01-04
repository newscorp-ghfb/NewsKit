/* eslint-disable no-undef */

export const GA_ID = 'UA-133544678-2';

type GoogleWindow = Window & {
  gtag?: (cmd: string, param: string, data?: Record<string, unknown>) => void;
};

export const trackPageView = (url: string): void => {
  try {
    (window as GoogleWindow).gtag('config', GA_ID, {
      page_location: url,
    });
  } catch (error) {
    // silence possible errors
  }
};

export const trackEvent = (eventName: string, label: string): void => {
  try {
    (window as GoogleWindow).gtag('event', eventName, {
      send_to: GA_ID,
      event_category: 'general',
      event_label: label,
    });
  } catch (error) {
    // silence possible errors
  }
};
