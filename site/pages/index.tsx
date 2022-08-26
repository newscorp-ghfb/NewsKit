import * as React from 'react';
import {
  Banner,
  Block,
  Button,
  Cell,
  CellProps,
  getColorCssFromTheme,
  getMediaQueryFromTheme,
  getSizingCssFromTheme,
  getSpacingCssFromTheme,
  Grid,
  Stack,
  styled,
  TextBlock,
  Visible,
} from 'newskit';
import LinkNext from 'next/link';
import {SectionIntroduction} from '../components/section-introduction';
import {HeroImage} from '../components/illustrations/landing-page/hero-image';
import {MediaList} from '../components/media-list';
import Layout, {LayoutProps} from '../components/layout';
import {FeatureCardsForIndex} from '../components/index-cards';

const cardsContent = [
  {
    media: {
      src: 'static/landing/landing-foundations.svg',
      alt: '',
    },
    title: 'Theme',
    href: '/theme/overview',
    description:
      'These standardised styles define the look and feel of UI components. e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: {
      src: 'static/landing/landing-components.svg',
      alt: '',
    },
    title: 'Components',
    href: '/components/overview',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility. ',
  },
  {
    media: {
      src: 'static/landing/landing-theming.svg',
      alt: '',
    },
    title: 'Theming',
    href: '/theme/theming/creating-a-theme',
    description:
      'Creating and applying themes allow you to tailor your experience to your unique brand requirements.',
  },
];

const DotsContainer = styled.div`
  background-image: url(static/landing/landing-texture-dots.svg);
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
  ${getColorCssFromTheme('backgroundColor', 'interface020')};
  ${getMediaQueryFromTheme('md')} {
    background-image: url(static/landing/landing-waves.svg);
    background-repeat: no-repeat;
    background-position: left 60%;
  }

  ${getSizingCssFromTheme('paddingTop', {xs: 'sizing090', lg: `sizing100`})};
  ${getSizingCssFromTheme('paddingBottom', {
    xs: 'sizing050',
    md: 'sizing050',
    lg: `sizing100`,
    xl: `sizing060`,
  })};
`;

const HeroImageContainerCommon = styled(Cell)`
  text-align: right;

  svg {
    height: auto;
    max-width: 125%;
    margin-right: -30%;

    ${getMediaQueryFromTheme('xs', 'sm')} {
      max-width: 130%;
      padding-bottom: 24px;
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

const HeroImageContainerWithoutBanner = styled(HeroImageContainerCommon)`
  svg {
    ${getMediaQueryFromTheme('xs', 'sm')} {
      margin-top: -80%;
    }
    ${getMediaQueryFromTheme('sm', 'md')} {
      margin-top: -55%;
    }
  }
`;
const HeroImageContainerBanner = styled(HeroImageContainerCommon)`
  svg {
    ${getMediaQueryFromTheme('xs', 'sm')} {
      margin-top: -100%;
    }
    ${getMediaQueryFromTheme('sm', 'md')} {
      margin-top: -66%;
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

const StyledFullWidthVisible = styled(Visible)`
  width: 100%;
`;

const BannerWrapper = styled.div`
  position: relative;
  ${getSpacingCssFromTheme(
    space => ({
      marginTop: `-${space}`,
    }),
    {xs: 'space000', lg: 'space030'},
  )}
  ${getSpacingCssFromTheme('paddingTop', {xs: '40px', md: '43px', lg: '0px'})}
`;

const Index = (layoutProps: LayoutProps) => {
  const [bannerIsActive, setBannerIsActive] = React.useState(true);
  const bannerOnClose = () => {
    setBannerIsActive(false);
    window.localStorage.setItem('newskit-banner-show', 'false');
  };

  React.useEffect(() => {
    const storageValue =
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-banner-show')) ||
      'true';
    setBannerIsActive(storageValue !== 'false');
  }, []);

  const bannerActions = [
    () => {
      const commonButtonProp = {
        href:
          'https://www.newscareers.co.uk/vacancies/vacancy-search-results.aspx',

        children: 'View roles',
      };

      const stylePreset = 'patternsCardButton';
      return (
        <>
          <StyledFullWidthVisible xs sm>
            <Button
              {...commonButtonProp}
              overrides={{width: '100%', stylePreset}}
            />
          </StyledFullWidthVisible>
          <StyledFullWidthVisible md lg xl>
            <Button
              {...commonButtonProp}
              size="small"
              overrides={{stylePreset}}
            />
          </StyledFullWidthVisible>
        </>
      );
    },
  ];

  const HeroImageContainer = bannerIsActive
    ? HeroImageContainerBanner
    : HeroImageContainerWithoutBanner;

  return (
    <Layout {...layoutProps} newPage hideSidebar path="/index-new">
      {bannerIsActive && (
        <BannerWrapper>
          <Banner
            title="We’re hiring"
            actions={bannerActions}
            onClose={bannerOnClose}
            overrides={{
              cell: {
                props: {
                  xs: 12,
                  md: 11,
                  mdOffset: 1,
                  xl: 10,
                },
              },
            }}
          >
            Looking for your next role? We have a range of product development
            opportunities.
          </Banner>
        </BannerWrapper>
      )}

      <DotsContainer>
        <Header>
          <HeroTextContainer {...heroTextCellProps}>
            <Stack
              flow="vertical-left"
              stackDistribution="center"
              wrap="nowrap"
            >
              <Block spaceStack="space050">
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
              <Block spaceStack="space050">
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
                  Components and guidelines to help increase the speed of
                  creation and innovation in News UK’s digital teams.
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
                flow="horizontal-top"
                spaceInline="space030"
                height="unset"
              >
                <LinkNext
                  href="/getting-started/design/design-overview"
                  passHref
                >
                  <Button
                    href="/getting-started/design/design-overview"
                    overrides={{width: 'sizing110'}}
                  >
                    Design
                  </Button>
                </LinkNext>
                <LinkNext
                  href="/getting-started/code/engineering-quickstart"
                  passHref
                >
                  <Button
                    href="/getting-started/code/engineering-quickstart"
                    overrides={{
                      stylePreset: 'buttonOutlinedPrimary',
                      width: 'sizing110',
                    }}
                  >
                    Code
                  </Button>
                </LinkNext>
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
            cellProps={{xs: 12, xl: 10, xlOffset: 1}}
          />

          <Cell xs={12} xl={10} xlOffset={1}>
            <MediaList
              layout="3-span"
              cards={cardsContent}
              gridProps={{xsRowGutter: 'space050'}}
            />
          </Cell>
        </Explore>
      </DotsContainer>
      <FindOutMore>
        <Grid xsRowGutter="space000">
          <SectionIntroduction
            title="Find out more"
            cellProps={{xs: 12, xl: 10, xlOffset: 1}}
          />
        </Grid>
        <Grid xsRowGutter="space040" mdRowGutter="space050">
          <FeatureCardsForIndex />
        </Grid>
      </FindOutMore>
    </Layout>
  );
};

export default Index;
