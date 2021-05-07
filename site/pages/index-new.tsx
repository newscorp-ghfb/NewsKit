import * as React from 'react';
import {
  Block,
  Button,
  Cell,
  CellProps,
  Flow,
  getColorCssFromTheme,
  getMediaQueryFromTheme,
  getSizingCssFromTheme,
  Grid,
  Stack,
  styled,
  TextBlock,
} from 'newskit';
import {HeroImage} from '../components/illustrations/landing-page/hero-image';
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
    href: '/theming/foundations/overview',
    description:
      'These standardised styles define the look and feel of UI components. e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: {
      src: '../static/landing/landing-theming.svg',
      alt: '',
    },
    title: 'Theming',
    href: '/theming/creating-a-theme',
    description:
      'Creating and applying themes allow you to tailor your experience to your unique brand requirements.',
  },
  {
    media: {
      src: '../static/landing/landing-components.svg',
      alt: '',
    },
    title: 'Components',
    href: '/components/button-new',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility. ',
  },
];

const DotsContainer = styled.div`
  background-image: url(/static/landing/landing-texture-dots.svg);
  background-repeat: no-repeat;
  ${getMediaQueryFromTheme('xs', 'md')} {
    background-image: unset;
  }
  ${getMediaQueryFromTheme('md')} {
    background-position: -10% 50%;
  }
  ${getMediaQueryFromTheme('lg')} {
    background-position: -5% 54%;
  }
  ${getMediaQueryFromTheme('xl')} {
    background-position: 0 54%;
  }
`;

const Header = styled(Grid)`
  padding: 80px 0;
  ${getMediaQueryFromTheme('md', 'lg')} {
    padding-bottom: 40px;
  }
  ${getMediaQueryFromTheme('lg', 'xl')} {
    min-height: 700px;
  }
`;

const Explore = styled(Grid)`
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

const HeroImageContainer = styled(Cell)`
  text-align: right;
  svg {
    height: auto;
    max-width: 125%;
    margin-right: -30%;

    ${getMediaQueryFromTheme('xs', 'sm')} {
      max-width: 130%;
      margin-top: -80%;
      padding-bottom: 24px;
    }
    ${getMediaQueryFromTheme('sm', 'md')} {
      margin-top: -55%;
    }
    ${getMediaQueryFromTheme('md', 'lg')} {
      margin-top: -75%;
    }
    ${getMediaQueryFromTheme('lg')} {
      margin-top: -35%;
    }
    ${getMediaQueryFromTheme('xl')} {
      max-width: 105%;
      margin-right: -25%;
    }
  }
`;

const HeroTextContainer = styled(Cell)`
  ${getMediaQueryFromTheme('xs', 'sm')} {
    margin-top: 0;
  }
  ${getMediaQueryFromTheme('sm', 'md')} {
    margin-top: -50px;
  }
  ${getMediaQueryFromTheme('md', 'lg')} {
    z-index: 2;
  }
`;

const heroTextCellProps: CellProps = {
  xs: 12,
  xsOrder: 2,
  sm: 10,
  md: 6,
  mdOffset: 1,
  mdOrder: 1,
  lg: 5,
  xl: 4,
  xlOffset: 1,
};
const heroImageCellProps: CellProps = {
  xs: 7,
  xsOffset: 5,
  xsOrder: 1,
  mdOrder: 2,
  lg: 6,
  lgOffset: 0,
  xl: 6,
};

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <DotsContainer>
      <Header xsColumnGutter="space000" xsRowGutter="space000">
        <HeroTextContainer {...heroTextCellProps}>
          <Stack flow="vertical-left" stackDistribution="center" wrap="nowrap">
            <Block spaceStack={{xs: 'space050', md: 'space055'}}>
              <TextBlock
                as="h1"
                stylePreset="inkSubtle"
                typographyPreset={{
                  xs: 'editorialHeadline060',
                  md: 'editorialHeadline070',
                  lg: 'editorialHeadline080',
                }}
              >
                Collaborate
              </TextBlock>
            </Block>
            <Block spaceStack={{xs: 'space050', md: 'space055'}}>
              <TextBlock
                as="h1"
                stylePreset="inkBrand010"
                typographyPreset={{
                  xs: 'editorialHeadline060',
                  md: 'editorialHeadline070',
                  lg: 'editorialHeadline080',
                }}
              >
                Create
              </TextBlock>
            </Block>
            <Block spaceStack={{xs: 'space060', md: 'space070'}}>
              <TextBlock
                as="h1"
                stylePreset="inkBrand020"
                typographyPreset={{
                  xs: 'editorialHeadline060',
                  md: 'editorialHeadline070',
                  lg: 'editorialHeadline080',
                }}
              >
                Innovate
              </TextBlock>
            </Block>
            <Block spaceStack={{xs: 'space060', md: 'space070'}}>
              <TextBlock
                stylePreset="inkBase"
                typographyPreset={{
                  xs: 'editorialSubheadline010',
                  md: 'editorialSubheadline020',
                }}
              >
                Components and guidelines to help increase the speed of creation
                and innovation in News UK’s digital teams.
              </TextBlock>
            </Block>
            <Block spaceStack="space045">
              <TextBlock
                stylePreset="inkSubtle"
                typographyPreset={{
                  xs: 'utilityLabel010',
                  md: 'utilityLabel020',
                }}
              >
                Get started
              </TextBlock>
            </Block>
            <Stack
              flow={Flow.HorizontalTop}
              spaceInline="space030"
              height="unset"
            >
              <Button
                href="/about/introduction"
                overrides={{width: 'sizing110'}}
              >
                Design
              </Button>
              <Button
                href="/getting-started/code/web"
                overrides={{
                  stylePreset: 'buttonOutlinedPrimary',
                  width: 'sizing110',
                }}
              >
                Code
              </Button>
            </Stack>
          </Stack>
        </HeroTextContainer>
        <HeroImageContainer {...heroImageCellProps}>
          <HeroImage />
        </HeroImageContainer>
      </Header>
      <Explore xsRowGutter="space000">
        <SectionIntroduction
          title="Explore"
          cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        />
        <MediaList
          layout="3-span"
          cards={cardsContent}
          parentCellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
          gridProps={{xsRowGutter: 'space050'}}
        />
      </Explore>
    </DotsContainer>
    <FindOutMore>
      <Grid xsRowGutter="space000">
        <SectionIntroduction
          title="Find out more"
          cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        />
      </Grid>
      <Grid xsRowGutter="space040" mdRowGutter="space050">
        <Cell xs={12} xl={10} xlOffset={1}>
          <FeatureCard
            title="What's new?"
            description="NewsKit is constantly evolving. View announcements about the latest updates to the NewsKit design system."
            stylePrefix="whatsnewCard"
            layout="horizontal"
            buttonLabel="Read more"
            buttonHref="/components/button-new"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5} xlOffset={1}>
          <FeatureCard
            title="Roadmap"
            description="The NewsKit roadmap is updated regularly to ensure priorities are aligned to the business goals. "
            stylePrefix="roadmapCard"
            layout="vertical"
            buttonLabel="Read more"
            buttonHref="/about/roadmap"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5}>
          <FeatureCard
            title="Contribute"
            description="Contributions needed! There are many ways to share your great work and ideas with the community."
            stylePrefix="contributeCard"
            layout="vertical"
            buttonLabel="Read more"
            buttonHref="/about/contribute"
          />
        </Cell>
      </Grid>
    </FindOutMore>
  </Layout>
);
