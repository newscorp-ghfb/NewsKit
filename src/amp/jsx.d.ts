interface AmpConsentAttributes {
  id: string;
  layout: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    'amp-consent': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & AmpConsentAttributes,
      HTMLElement
    >;
  }
}
