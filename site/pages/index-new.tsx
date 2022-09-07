import * as React from 'react';
import {GridLayout} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';
import {
  Hero,
  KeepInTouch,
  SupportedBrands,
  Explore,
  WhatsNew,
} from '../components/homepage';
import {GridLayoutProps} from '../../src/grid-layout/types';
import {FeatureCard} from '../components/feature-card';
import {fetchGitHubReleases} from '../utils/release-notes/functions';
import {Release, ReleasesPageProps} from '../utils/release-notes/types';
import {IconFilledLaunch} from '../../src/icons';

const GRID_SECTION_OVERRIDES: GridLayoutProps['overrides'] = {
  maxWidth: '1150px',
  marginInline: 'auto',
  width: '100%',
  paddingInline: {
    xs: 'space050',
    sm: 'space070',
    md: 'space100',
    lg: 'space080',
  },
};

const Index = ({releases, ...layoutProps}: LayoutProps & ReleasesPageProps) => {
  // The World Design Systems Week 2022 banner should hide automatically after the event which is on 19-23 September 2022
  const eventDateEnd = new Date('2022-09-24');
  const showEventBanner = new Date() < eventDateEnd;
  const {themeMode, toggleTheme} = layoutProps;

  return (
    <Layout {...layoutProps} newPage hideSidebar path="/index-new">
      <GridLayout
        rowGap={{xs: 'space070', md: 'space100'}}
        overrides={{marginBlockEnd: 'space080'}}
      >
        <Hero
          contentContainerOverrides={GRID_SECTION_OVERRIDES}
          themeMode={themeMode}
          toggleTheme={toggleTheme}
        />
        {showEventBanner && (
          <GridLayout
            overrides={{
              ...GRID_SECTION_OVERRIDES,
              marginBlockEnd: {xs: 'space080', md: 'space000'},
            }}
          >
            <FeatureCard
              title="World Design Systems Week 2022"
              description="19-23 September 2022"
              stylePrefix="worldDesignSystemsWeekCard"
              layout="horizontal"
              overrides={{
                title: {typographyPreset: 'editorialHeadline060'},
                description: {typographyPreset: 'editorialSubheadline010'},
              }}
              buttonIcon={<IconFilledLaunch />}
              buttonLabel="Join the community"
              buttonHref="https://www.designsystemsweek.com/"
              buttonOverrides={{
                paddingInline: 'space000',
                typographyPreset: 'utilityButton020',
              }}
            />
          </GridLayout>
        )}
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <Explore />
        </GridLayout>
        <GridLayout
          overrides={{
            ...GRID_SECTION_OVERRIDES,
            marginBlockEnd: {xs: 'space080', md: 'space000'},
          }}
        >
          <WhatsNew releases={releases} />
        </GridLayout>
        <GridLayout
          overrides={{
            ...GRID_SECTION_OVERRIDES,
            marginBlockEnd: {xs: 'space080', md: 'space000'},
          }}
        >
          <FeatureCard
            title="Contribute"
            description="Join the community and help grow NewsKit for everyone."
            stylePrefix="contributeCard"
            layout="horizontal"
            overrides={{
              title: {typographyPreset: 'editorialHeadline060'},
              description: {typographyPreset: 'editorialSubheadline010'},
            }}
            buttonLabel="Start contributing"
            buttonHref="/about/contribute"
            buttonOverrides={{
              paddingInline: 'space000',
              typographyPreset: 'utilityButton020',
            }}
          />
        </GridLayout>
        <GridLayout
          overrides={{
            ...GRID_SECTION_OVERRIDES,
            marginBlockEnd: {xs: 'space080', md: 'space000'},
          }}
        >
          <KeepInTouch />
        </GridLayout>
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <SupportedBrands />
        </GridLayout>
      </GridLayout>
    </Layout>
  );
};

export default Index;

// This function is called at build time and the response is passed to the page
// component as props.
export async function getStaticProps() {
  const releases: Release[] = await fetchGitHubReleases(4);
  return {props: {releases}};
}
