interface AmpConsentAttributes {
  id: string;
  layout: string;
  type: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    'amp-consent': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & AmpConsentAttributes,
      HTMLElement
    >;
  }
}
