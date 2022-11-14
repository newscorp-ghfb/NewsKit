import * as React from 'react';
import {GridLayout} from 'newskit';
import {Release, ReleasesPageProps} from '../utils/release-notes/types';
import {
  Explore,
  Hero,
  KeepInTouch,
  SupportedBrands,
  WhatsNew,
} from '../components/homepage';
import {FeatureCard} from '../components/feature-card';
import Layout, {LayoutProps} from '../components/layout';
import {IconFilledLaunch} from '../../src/icons';
import {GridLayoutProps} from '../../src/grid-layout/types';
import {fetchGitHubReleases} from '../utils/release-notes/functions';
import {formatSheetData, getSheet} from '../utils/google-sheet';
import {
  ContentProps,
  getValueFromCMS,
} from '../utils/google-sheet/utils/get-value-from-cms';

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

const Index = ({
  releases,
  content,
  ...layoutProps
}: LayoutProps & ReleasesPageProps & ContentProps) => {
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
        <GridLayout
          overrides={{
            ...GRID_SECTION_OVERRIDES,
            marginBlockEnd: {xs: 'space080', md: 'space000'},
          }}
        >
          <FeatureCard
            title={getValueFromCMS(content, 'LatestBlogTitle', 'Latest Blog')}
            description={getValueFromCMS(
              content,
              'LatestBlogDescription',
              "How an audio player component tells the story of NewsKit Design System's changing strategy",
            )}
            stylePrefix="worldDesignSystemsWeekCard"
            layout="horizontal"
            overrides={{
              title: {typographyPreset: 'editorialHeadline060'},
              description: {typographyPreset: 'editorialSubheadline010'},
            }}
            buttonIcon={<IconFilledLaunch />}
            buttonLabel={getValueFromCMS(
              content,
              'LatestBlogLinkText',
              'Read on Medium',
            )}
            buttonHref={getValueFromCMS(
              content,
              'LatestBlogLink',
              'https://medium.com/newskit-design-system/how-an-audio-player-component-tells-the-story-of-newskit-design-systems-changing-strategy-8dc99d37ed67',
            )}
            buttonOverrides={{
              paddingInline: 'space000',
              typographyPreset: 'utilityButton020',
            }}
          />
        </GridLayout>
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
  const data = await getSheet();

  const content = formatSheetData(data);
  return {props: {releases, content}};
}
