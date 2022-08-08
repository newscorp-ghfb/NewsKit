import * as React from 'react';
import {
  Button,
  Flow,
  GridLayout,
  GridLayoutItem,
  Stack,
  styled,
  TextBlock,
  useBreakpointKey,
  Visible,
} from 'newskit';
import LinkNext from 'next/link';
import Layout, {LayoutProps} from '../components/layout';
import {GridLayoutItemProps} from '../../src/grid-layout/types';
import HeroGrid from '../components/illustrations/landing-page/hero-grid';
import {useThemeMode} from '../helpers/use-theme-mode';

const Placeholder: React.FC = ({children}) => (
  <TextBlock
    as="span"
    stylePreset="inkContrast"
    typographyPreset="editorialLabel010"
  >
    {children}
  </TextBlock>
);

// Placeholder box
const GridBox = styled.div`
  padding: 10px;
  border: 1px solid orange;
`;

const HeroGridLayoutItem = styled(GridLayoutItem)<{
  breakpoint: string;
  themeMode: string;
}>`
  background-size: cover;
  background-image: ${({breakpoint, themeMode}) => {
    if (breakpoint === 'xs' || breakpoint === 'sm') {
      return 'unset';
    }
    return themeMode === 'light'
      ? 'url(static/landing/landing-background.svg)'
      : 'url(static/landing/landing-background-dark.svg)';
  }};
  background-repeat: no-repeat;
  margin-top: -12px;
`;

const fullGridColumns: GridLayoutItemProps = {
  column: {xs: `2 / span 10`},
};

const Hero = () => {
  const breakpoint = useBreakpointKey();
  const themeMode = useThemeMode();
  const isSmallScreen = breakpoint === 'xs' || breakpoint === 'sm';

  return (
    <HeroGridLayoutItem
      themeMode={themeMode}
      breakpoint={breakpoint}
      column={{xs: `1 / span 12`}}
    >
      <GridLayout
        columns={{xs: 'repeat(12, minmax(0,1fr))'}}
        overrides={{marginBlock: {xs: 'space070', lg: 'space000'}}}
        alignItems="center"
      >
        <GridLayoutItem
          paddingBlock={{
            xs: 'space000',
            md: 'space100',
            xl: '180px',
          }}
          column={{
            xs: `2 / span 10`,
            sm: `2 / span 8`,
            md: `2 / span 6`,
            xl: `2 / span 4`,
          }}
        >
          <TextBlock
            as="h1"
            stylePreset="inkBase"
            paddingInlineEnd={{
              xs: 'space120',
              sm: 'space100',
            }}
            typographyPreset={{
              xs: 'editorialHeadline070',
              md: 'editorialHeadline080',
              lg: 'editorialDisplay020',
            }}
          >
            Say hello to NewsKit
          </TextBlock>
          <TextBlock
            marginBlockStart={{xs: 'space060', lg: 'space080'}}
            stylePreset="inkBase"
            typographyPreset="editorialSubheadline020"
            paddingInlineEnd={{
              xs: 'space090',
              md: 'space080',
              lg: 'space100',
              xl: 'space080',
            }}
          >
            An open source design system built by News UK, for everyone
          </TextBlock>
          <Stack
            marginBlockStart="space090"
            flow={Flow.HorizontalTop}
            spaceInline="space040"
            height="unset"
          >
            <LinkNext href="/getting-started/design/design-overview" passHref>
              <Button
                href="/getting-started/design/design-overview"
                overrides={{stylePreset: 'buttonSolidPrimary'}}
              >
                {isSmallScreen ? 'Designing' : 'Start designing'}
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
                }}
              >
                {isSmallScreen ? 'Developing' : 'Start developing'}
              </Button>
            </LinkNext>
          </Stack>
        </GridLayoutItem>
        <GridLayoutItem column={{lg: `span 4 / 12`, xl: `span 5 / 12`}}>
          <Visible xl lg>
            <HeroGrid />
          </Visible>
        </GridLayoutItem>
      </GridLayout>
    </HeroGridLayoutItem>
  );
};

const Index = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <GridLayout
      columns={{xs: 'repeat(12, minmax(0,1fr))'}}
      rowGap={{xs: 'space070', md: 'space100'}}
      overrides={{marginBlockEnd: 'space080'}}
    >
      <Hero />
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Banner</Placeholder>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Explore</Placeholder>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Whats New</Placeholder>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Contribute</Placeholder>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Keep in touch</Placeholder>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem {...fullGridColumns}>
        <GridBox>
          <Placeholder>Supported brands</Placeholder>
        </GridBox>
      </GridLayoutItem>
    </GridLayout>
  </Layout>
);

export default Index;
