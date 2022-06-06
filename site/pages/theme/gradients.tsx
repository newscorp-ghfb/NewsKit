import React from 'react';
// import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
// import {UsageKind} from '../../components/usage-card';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';
// import {MediaList} from '../../components/media-list';
// import {
//   ContentPrimary,
//   ContentSection,
// } from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

// const DO_AND_DONT = [
//   {
//     description:
//       'Overlay contrasts should be distinct and clear. They can be used to obscure page content and emphasise an element for greater legibility. I.e. the Modal.',
//     kind: UsageKind.DO,
//     media: getIllustrationComponent('theme/overlays/do'),
//   },
//   {
//     description:
//       'Ensure overlays used do not obscure the legibility of important UI elements like text and icons, and contrasts are distinct and clear.',
//     kind: UsageKind.DONT,
//     media: getIllustrationComponent('theme/overlays/dont'),
//   },
// ];

const Gradients = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Gradients',
      description:
        'Gradient foundations consist of both ‘base’ styles (these are dark when used in a light theme) and ‘inverse’ styles (these are light when used in a dark theme).',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Gradients',
      hero: {
        illustration: 'theme/gradients/hero',
      },
      introduction:
        "Gradients Base gradient tokens are used to fade elements into the interface background. 'Inverse' gradient tokens are used to fade elements into a dark background in a light theme.",
    }}
  >
    <ComponentPageCell />
  </FoundationPageTemplate>
);

export default Gradients;
