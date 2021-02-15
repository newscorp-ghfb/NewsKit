import React from 'react';
import {Cell, Grid} from 'newskit';
import Layout, {LayoutProps} from '../../../components/layout';
import {PageIntroduction} from '../../../components/page-introduction';
import {SectionIntroduction} from '../../../components/section-introduction';
import {Separator} from '../../../components/separator';
import {MediaList} from '../../../components/media-list';
import { HeaderIndex } from '../../../components/header-index';

const cardsContent = [
  {
    media: {
      src: '../../static/theming/foundations/borders.svg',
      alt: '',
    },
    label: 'Borders',
    description:
      'Borders direct attention, identify components, communicate state, and express a brand.',
  },
  {
    media: {
      src: '../../static/theming/foundations/breakpoints.svg',
      alt: '',
    },
    label: 'Breakpoints',
    description:
      'Breakpoints set a visual point on a screen to alter the layout of content (responsive design), ensuring consistency across different screen widths.',
  },
  {
    media: {
      src: '../../static/theming/foundations/colours.svg',
      alt: '',
    },
    label: 'Colours',
    description:
      'Colour is key to expressing brand and identity, but it also plays a vital role in conveying specific meaning to a user.',
  },
  {
    media: {
      src: '../../static/theming/foundations/motion.svg',
      alt: '',
    },
    label: 'Motion',
    description:
      "Motion is used to create movement and narrative within a product. Timely animated interface elements don't just attract attention, they enhance user experience and help guide user flow. They reveal the functionality and process of a user interface by communicating where to focus, what to do next and offering tactile feedback.",
  },
  {
    media: {
      src: '../../static/theming/foundations/overlays.svg',
      alt: '',
    },
    label: 'Overlays',
    description:
      'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the contrast backgrounds when a component is layered upon each other, e.g. a modal.',
  },
  {
    media: {
      src: '../../static/theming/foundations/shadows.svg',
      alt: '',
    },
    label: 'Shadows',
    description:
      'Shadows provide visual cues about the distance between layers. They improve the overall aesthetics, add levels of depth and realism to the user’s visual experience and improve the UI visual hierarchy. This helps users discover and interact with UI elements.',
  },
  {
    media: {
      src: '../../static/theming/foundations/sizing.svg',
      alt: '',
    },
    label: 'Sizing',
    description:
      'Sizing is one of the biggest influences in creating a distinguishable brand. It provides the foundation for harmoniously and consistently setting the space and positioning elements onscreen and setting.',
  },
  {
    media: {
      src: '../../static/theming/foundations/typography.svg',
      alt: '',
    },
    label: 'Typography',
    description:
      'Fonts define the font family, boldness, size, and the style of the text. These inform typography rules to convey the appropriate sentiment to guide users through their experience.',
  },
];

const cardStyle = {
  card: {
    stylePreset: 'cardContainerFoundationsOverview',
    mediaContainer: {
      spaceInline: 'space000',
    },
    teaserContainer: {
      spaceInset: 'spaceInsetStretch050',
      typographyPreset: 'editorialParagraph010',
    },
  },
  label: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline030',
      md: 'editorialHeadline040',
    },
  },
  description: {
    stylePreset: 'inkBase',
    typographyPreset: {
      md: 'editorialParagraph020',
    },
  },
};

const cardsForPage = cardsContent.map(content => ({
  ...content,
  styles: cardStyle,
}));

export default ({path, ...rest}: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...rest} path={`${path}-new`}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {/* <PageIntroduction
        type="Theming"
        name="Foundations"
        introduction="NewsKit foundations define the visual elements that inform the look and feel of UI components."
        hero={{
          src: '/static/roadmap-hero.svg',
          alt: '',
        }}
      /> */}

      <HeaderIndex title='Foundations' media={{src:'/static/header-index.svg'}}>
        NewsKit foundations define the visual elements that inform the look and feel of UI components.
      </HeaderIndex>
      <SectionIntroduction title="Categories" cellProps={{lg: 8}}>
        The NewsKit Foundations are structured into the following categories:
      </SectionIntroduction>
      <MediaList
        xsCard={12}
        mdCard={6}
        lgCard={4}
        cards={cardsForPage}
        parentCellProps={{lg: 10}}
        gridProps={{xsRowGutter: 'space050'}}
      />
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Separator />
      </Cell>
    </Grid>
  </Layout>
);
