import * as React from 'react';
import {GridLayout} from 'newskit';
import {ReleasesPageProps} from '../utils/release-notes/types';
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
import {getSheets} from '../utils/google-sheet';
import {formatSheetData} from '../utils/google-sheet/utils';

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

interface HeroCardContent {
  hero_card_title: string;
  hero_card_description: string;
  hero_card_link_text: string;
  hero_card_link: string;
}
// Content if the CMS fails - default to this
const heroCardFallbackContent: HeroCardContent = {
  hero_card_title: `Latest blog`,
  hero_card_description: `How an audio player component tells the story of NewsKit Design System's changing strategy.`,
  hero_card_link_text: `Read on Medium`,
  hero_card_link: `https://medium.com/newskit-design-system/how-an-audio-player-component-tells-the-story-of-newskit-design-systems-changing-strategy-8dc99d37ed67`,
};

const Index = ({
  releases,
  content,
  ...layoutProps
}: LayoutProps & ReleasesPageProps & {content: HeroCardContent}) => {
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
            title={content.hero_card_title}
            description={content.hero_card_description}
            stylePrefix="worldDesignSystemsWeekCard"
            layout="horizontal"
            overrides={{
              title: {typographyPreset: 'editorialHeadline060'},
              description: {typographyPreset: 'editorialSubheadline010'},
              button: {
                paddingInline: 'space000',
                stylePreset: 'linkStandaloneInversePersistent',
              },
            }}
            buttonIcon={<IconFilledLaunch />}
            buttonLabel={content.hero_card_link_text}
            buttonHref={content.hero_card_link}
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
        />
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
              button: {
                paddingInline: 'space000',
                stylePreset: 'linkStandaloneInversePersistent',
              },
            }}
            buttonLabel="Start contributing"
            buttonHref="/about/contribute"
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
  const [releases, data] = await Promise.all([
    fetchGitHubReleases(4),
    getSheets('Homepage'),
  ]);

  const content = {...heroCardFallbackContent, ...formatSheetData(data)};
  return {props: {releases, content}};
}
