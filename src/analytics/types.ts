export type TealiumLinkEvent = {
  event_navigation_action: React.ReactNode;
  event_navigation_browsing_method?: string;
};

export type TealiumViewEvent = {
  page_url: string;
};

export type InteractionEvent = {
  type: 'link';
  data: TealiumLinkEvent;
};

export type PageViewEvent = {
  type: 'view';
  data: TealiumViewEvent;
};

export type AnalyticsEvent = InteractionEvent | PageViewEvent;

export type UTag = {
  link(e: TealiumLinkEvent): void;
  view(e: TealiumViewEvent): void;
};

export interface ExtendedWindow extends Window {
  utag: UTag;
}
