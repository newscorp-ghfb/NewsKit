import * as React from 'react';
import {
  Block,
  Button,
  Cell,
  Flow,
  getColorCssFromTheme,
  getMediaQueryFromTheme,
  getSizingCssFromTheme,
  Grid,
  Stack,
  styled,
  TextBlock,
} from 'newskit';
import {SectionIntroduction} from '../components/section-introduction';
import {MediaList} from '../components/media-list';
import Layout, {LayoutProps} from '../components/layout';
import {FeatureCard} from '../components/feature-card';

const cardsContent = [
  {
    media: {
      src: '../static/landing/landing-foundations.svg',
      alt: '',
    },
    title: 'Foundations',
    href: '#',
    description:
      'These standardised styles define the look and feel of UI components. e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: {
      src: '../static/landing/landing-theming.svg',
      alt: '',
    },
    title: 'Theming',
    href: '#',
    description:
      'Creating and applying themes allow you to tailor your experience to your unique brand requirements.',
  },
  {
    media: {
      src: '../static/landing/landing-components.svg',
      alt: '',
    },
    title: 'Components',
    href: '#',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility. ',
  },
];

const Header = styled(Grid)`
  ${getSizingCssFromTheme('paddingTop', {
    md: 'sizing100',
    lg: '191px',
    xl: '176px',
  })};
  ${getSizingCssFromTheme('paddingBottom', {
    xs: 'sizing090',
    md: 'sizing110',
    lg: 'sizing090',
    xl: 'sizing090',
  })};

  ${getMediaQueryFromTheme('xs')} {
    height: 736px;
  }

  ${getMediaQueryFromTheme('md')} {
    background-image: url(/static/landing/landing-texture-dots.svg);
    background-repeat: no-repeat;
    background-position: left 80%;
    height: 899px;
  }

  ${getMediaQueryFromTheme('lg')} {
    background-image: url(/static/landing/landing-texture-dots.svg);
    background-repeat: no-repeat;
    background-position: left 95%;
    height: 881px;
  }

  ${getMediaQueryFromTheme('xl')} {
    background-image: url(/static/landing/landing-texture-dots.svg);
    background-repeat: no-repeat;
    background-position: left bottom;
    height: 868px;
  }
`;

const Explore = styled(Grid)`
  ${getSizingCssFromTheme('paddingTop', {
    lg: 'sizing100',
  })};
  ${getSizingCssFromTheme('paddingBottom', {
    xs: 'sizing090',
    md: 'sizing080',
    lg: 'sizing100',
    xl: 'sizing100',
  })};
`;

const FindOutMore = styled.section`
  ${getColorCssFromTheme('background-color', 'interface020')}
  ${getMediaQueryFromTheme('md')} {
    background-image: url(/static/landing/landing-waves.svg);
    background-repeat: no-repeat;
    background-position: left 60%;
  }

  ${getSizingCssFromTheme('padding-top', {xs: 'sizing090', lg: `sizing100`})};
  ${getSizingCssFromTheme('padding-bottom', {
    xs: 'sizing050',
    md: 'sizing050',
    lg: `sizing100`,
    xl: `sizing060`,
  })};
`;

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <Header lgMargin="sizing000" xsRowGutter="space000">
      <Cell xs={12} md={7} lg={6} xl={4} mdOffset={1}>
        <Block spaceStack="space045">
          <TextBlock
            as="h1"
            noCrop
            stylePreset="inkSubtle"
            typographyPreset={{
              xs: 'editorialHeadline060',
              md: 'editorialHeadline070',
              lg: 'editorialHeadline080',
              xl: 'editorialHeadline080',
            }}
          >
            Collaborate
          </TextBlock>
          <TextBlock
            as="h1"
            noCrop
            stylePreset="inkBrand010"
            typographyPreset={{
              xs: 'editorialHeadline060',
              md: 'editorialHeadline070',
              lg: 'editorialHeadline080',
              xl: 'editorialHeadline080',
            }}
          >
            Create
          </TextBlock>
          <TextBlock
            as="h1"
            noCrop
            stylePreset="inkBrand020"
            typographyPreset={{
              xs: 'editorialHeadline060',
              md: 'editorialHeadline070',
              lg: 'editorialHeadline080',
              xl: 'editorialHeadline080',
            }}
          >
            Innovate
          </TextBlock>
        </Block>
        <Block spaceStack="space070">
          <TextBlock
            stylePreset="inkBase"
            typographyPreset={{
              xs: 'editorialSubheadline010',
              md: 'editorialSubheadline020',
              lg: 'editorialSubheadline020',
              xl: 'editorialSubheadline020',
            }}
          >
            Components and guidelines to help increase the speed of creation and
            innovation in News UK’s digital teams.
          </TextBlock>
        </Block>
        <Block spaceStack="space045">
          <TextBlock
            stylePreset="inkSubtle"
            typographyPreset={{
              xs: 'utilityLabel010',
              md: 'utilityLabel020',
              lg: 'utilityLabel020',
              xl: 'utilityLabel020',
            }}
          >
            Get started
          </TextBlock>
        </Block>
        <Stack flow={Flow.HorizontalTop} spaceInline="space030">
          <Button href="#" overrides={{width: 'sizing110'}}>
            Design
          </Button>
          <Button
            href="#"
            overrides={{
              stylePreset: 'buttonOutlinedPrimary',
              width: 'sizing110',
            }}
          >
            Code
          </Button>
        </Stack>
      </Cell>
    </Header>
    <Explore lgMargin="sizing000" xsRowGutter="space000">
      <SectionIntroduction
        title="Explore"
        cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
      >
        Subheading about the explore section to go here
      </SectionIntroduction>
      <MediaList
        layout="3-span"
        cards={cardsContent}
        parentCellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        gridProps={{xsRowGutter: 'space050'}}
      />
    </Explore>
    <FindOutMore>
      <Grid lgMargin="sizing000" xsRowGutter="space000">
        <SectionIntroduction
          title="Find out more"
          cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        >
          Subheading about the find out more section to go here
        </SectionIntroduction>
      </Grid>
      <Grid lgMargin="sizing000" xsRowGutter="space040" mdRowGutter="space050">
        <Cell xs={12} xl={10} xlOffset={1}>
          <FeatureCard
            title="What's new?"
            description="NewsKit is constantly evolving. View announcements about the latest updates to the NewsKit design system."
            stylePrefix="whatsnewCard"
            layout="horizontal"
            buttonLabel="Read more"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5} xlOffset={1}>
          <FeatureCard
            title="Roadmap"
            description="The NewsKit roadmap is updated regularly to ensure priorities are aligned to the business goals. "
            stylePrefix="roadmapCard"
            layout="vertical"
            buttonLabel="Read more"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5}>
          <FeatureCard
            title="Contribute"
            description="Contributions needed! There are many ways to share your great work and ideas with the community."
            stylePrefix="contributeCard"
            layout="vertical"
            buttonLabel="Read more"
          />
        </Cell>
      </Grid>
    </FindOutMore>
  </Layout>
);
