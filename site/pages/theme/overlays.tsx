import React from 'react';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';

const Overlays = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Overlays',
      description:
        'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the background contrast when a component is layered above the interface, e.g. a Modal',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Overlays',
      hero: {
        illustration: 'theme/overlays/hero',
      },
      introduction:
        'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the background contrast when a component is layered above the interface, e.g. a Modal.',
    }}
  >
    Hello
  </FoundationPageTemplate>
);
export default Overlays;
