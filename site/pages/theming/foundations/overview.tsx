import React from 'react';
import {Grid} from 'newskit';
import {HeaderImage} from '../../../components/illustrations/foundations/header-image';
import Layout, {LayoutProps} from '../../../components/layout';
import {SectionIntroduction} from '../../../components/section-introduction';
import {Separator} from '../../../components/separator';
import {MediaList} from '../../../components/media-list';
import {HeaderIndex} from '../../../components/header-index';
import {ComponentPageCell} from '../../../components/layout-cells';

const cardsContent = [
  {
    media: {
      src: '../../static/theming/foundations/borders.svg',
      alt: '',
    },
    title: 'Borders',
    href: '#',
    description:
      'Borders direct attention, identify components, communicate state, and express a brand.',
  },
  {
    media: {
      src: '../../static/theming/foundations/breakpoints.svg',
      alt: '',
    },
    title: 'Breakpoints',
    href: '#',
    description:
      'Breakpoints set a visual point on a screen to alter the layout of content (responsive design), ensuring consistency across different screen widths.',
  },
  {
    media: {
      src: '../../static/theming/foundations/colours.svg',
      alt: '',
    },
    title: 'Colours',
    href: '#',
    description:
      'Colour is key to expressing brand and identity, but it also plays a vital role in conveying specific meaning to a user.',
  },
  {
    media: {
      src: '../../static/theming/foundations/motion.svg',
      alt: '',
    },
    title: 'Motion',
    href: '#',
    description:
      "Motion is used to create movement and narrative within a product. Timely animated interface elements don't just attract attention, they enhance user experience and help guide user flow. They reveal the functionality and process of a user interface by communicating where to focus, what to do next and offering tactile feedback.",
  },
  {
    media: {
      src: '../../static/theming/foundations/overlays.svg',
      alt: '',
    },
    title: 'Overlays',
    href: '#',
    description:
      'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the contrast backgrounds when a component is layered upon each other, e.g. a modal.',
  },
  {
    media: {
      src: '../../static/theming/foundations/shadows.svg',
      alt: '',
    },
    title: 'Shadows',
    href: '#',
    description:
      'Shadows provide visual cues about the distance between layers. They improve the overall aesthetics, add levels of depth and realism to the user’s visual experience and improve the UI visual hierarchy. This helps users discover and interact with UI elements.',
  },
  {
    media: {
      src: '../../static/theming/foundations/sizing.svg',
      alt: '',
    },
    title: 'Sizing',
    href: '#',
    description:
      'Sizing is one of the biggest influences in creating a distinguishable brand. It provides the foundation for harmoniously and consistently setting the space and positioning elements onscreen and setting.',
  },
  {
    media: {
      src: '../../static/theming/foundations/typography.svg',
      alt: '',
    },
    title: 'Typography',
    href: '#',
    description:
      'Fonts define the font family, boldness, size, and the style of the text. These inform typography rules to convey the appropriate sentiment to guide users through their experience.',
  },
];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeaderIndex title="Foundations" media={HeaderImage}>
      NewsKit foundations define the visual elements that inform the look and
      feel of UI components.
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <SectionIntroduction title="Categories" cellProps={{lg: 8}}>
        The NewsKit Foundations are structured into the following categories:
      </SectionIntroduction>
      <MediaList
        cards={cardsContent}
        parentCellProps={{lg: 10}}
        gridProps={{xsRowGutter: 'space050'}}
      />
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
    </Grid>
  </Layout>
);
