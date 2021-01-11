import React from 'react';
import {
  Block,
  Cell,
  Divider,
  getSpacingFromTheme,
  Grid,
  Link,
  styled,
  TextBlock,
  Image,
  Stack,
} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';

const NewLineTextBlock = styled(TextBlock)`
  white-space: pre-wrap;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: ${getSpacingFromTheme('space080')};
`;

interface Card {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  content: string;
}

// As a proposal we can move all of the static content in another file
const cardContents = [
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'User focusse',
    subtitle:
      'We don’t design for screens, we design for people; whether the product teams using our components or the customers using the end products.',
    content:
      'We establish insights on our user needs through qualitative and quantitative data from research. We continually test our components and the overall design system to ensure it meets these needs.',
  },
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'Inclusive',
    subtitle:
      'Every design decision has the potential to include or exclude users. To ensure our solutions meet the needs of as many users as possible we take an inclusive first, design approach. ',
    content:
      'The default components are accessible to WCAG 2.1 AA standards. We strive for clarity around everything we do, simplifying the complex. We use simple language, avoid acronyms and offer more detail when required. Our users should always be able to understand and act with confidence.',
  },
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'Essential',
    subtitle:
      'Every component serves a user’s need that is shared by multiple services or products.',
    content:
      "We don't create new solutions to solve problems that already exist in the system unless they are intended to replace them. We never build something 'just in case'. Every design decision and component has a clear purpose and contributes to a larger purpose; if it doesn’t, it shouldn’t be there.",
  },
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'Collaborative',
    subtitle: 'Great ideas come from everywhere.',
    content:
      'Everyone is encouraged to contribute. We share everything we are doing at every step in the process: designs, code, ideas, successes or failures. We encourage and seek feedback, suggestions and contributions. We all take responsibility for the output of the team and reject ownership.',
  },
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'Consistent',
    subtitle:
      'Ensuring everything reusable and shareable instead of constantly reinventing different solutions to solve the same need. ',
    content:
      'We create familiarity across our products by using the same solution to the same problem.',
  },
  {
    img: {
      src: '/static/placeholder-16x9.png',
      alt: 'card-media-image',
    },
    title: 'Robust',
    subtitle:
      'Our users require a design system that they can trust and rely upon. ',
    content:
      'We thoroughly consider, design, develop and test solutions before they are released for users to consume. Whenever we make a change to the design system, we communicate this through well-structured documentation.',
  },
];

const Card = ({img, title, subtitle, content}: Card) => (
  <Grid xsMargin="space000">
    <Cell xs={12} sm={6} lg={6}>
      <Image
        src={img.src}
        alt={img.alt}
        overrides={{stylePreset: 'imageDefault'}}
      />
    </Cell>
    <Cell xs={10} sm={6} lg={6}>
      <Block spaceStack="space060">
        <TextBlock
          as="h2"
          stylePreset="inkContrast"
          typographyPreset={{
            xs: 'editorialHeadline020',
            md: 'editorialHeadline030',
            xl: 'editorialHeadline040',
          }}
        >
          {title}
        </TextBlock>
      </Block>
      <Block spaceStack="space060">
        <TextBlock
          stylePreset="inkBase"
          typographyPreset={{
            xs: 'editorialSubheading010',
            md: 'editorialSubheading020',
          }}
        >
          {subtitle}
        </TextBlock>
      </Block>
      <Block spaceStack="space060">
        <TextBlock
          stylePreset="inkBase"
          typographyPreset="editorialParagraph030"
        >
          {content}
        </TextBlock>
      </Block>
    </Cell>
  </Grid>
);

export default (layoutProps: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...layoutProps} path={`${layoutProps.path}-new`}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <PageIntroduction
        type="About"
        name="Introduction"
        introduction="NewsKit is News UK’s design system. It provides interactive building blocks and guidelines for crafting cohesive digital product interfaces and accelerating development.
      build better products faster."
        hero={{src: '/static/roadmap-hero.svg', alt: 'introduction-hero-image'}}
      />
      <Cell xs={12} md={10} lg={6} mdOffset={1}>
        <Block spaceStack="space080">
          <NewLineTextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph030"
          >
            The design system aims to improve the consistency and quality of
            digital products and experiences, enabling the design and
            development process to be more efficient and focused, establishing a
            common language between designer and engineer, and providing clear,
            considered guidance around design and engineering best practices.
            <br />
            {'\n'}
            NewsKit currently serves a wide range of designers and developers at
            News UK building digital products and experiences with a view to
            becoming publicly open source in the future.
            <br />
            {'\n'}
            It is maintained by a core centralised team at News UK with
            contributions from other product teams to evolve and improve
            NewsKit.
            <br />
            {'\n'}
            The UI library is built using{' '}
            <Link href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2349139141/Designing+with+NewsKit+-+Web+Documentation">
              Figma for design
            </Link>{' '}
            and{' '}
            <Link href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2348942613/Engineering+with+NewsKit+-+Web+Documentation">
              React for the codebase.
            </Link>
          </NewLineTextBlock>
        </Block>
      </Cell>
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <StyledDivider />
      </Cell>
      <SectionIntroduction
        title="Principles"
        introduction="NewsKit design system and the NewsKit team is guided by a set of principles."
      />
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Grid xsMargin="space000">
          <Stack spaceInline="space100">{cardContents.map(Card)}</Stack>
        </Grid>
      </Cell>
    </Grid>
  </Layout>
);
