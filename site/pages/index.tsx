import * as React from 'react';
import {GridLayout} from 'newskit';
import NextLink from 'next/link';
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
import {getSheets, PageCMSRequiredProps} from '../utils/google-sheet';
import {parseCMSResponse} from '../utils/google-sheet/utils';

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

enum RequiredKeys {
  hero_card_title = 'hero_card_title',
  hero_card_description = 'hero_card_description',
  hero_card_link_text = 'hero_card_link_text',
  hero_card_link = 'hero_card_link',
}

type HeroCardContent = PageCMSRequiredProps<RequiredKeys>;

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
          <NextLink legacyBehavior href={content.hero_card_link} passHref>
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
          </NextLink>
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
          <NextLink legacyBehavior href="/about/contribute" passHref>
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
          </NextLink>
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
  let releases: Release[] = [];
  const [releasesOrError, data] = await Promise.all([
    fetchGitHubReleases(1),
    getSheets('Homepage'),
  ]);
  // Can return a rate limiting error object from github immediately after a load test
  if (!releasesOrError.length) {
    console.error(
      'Unexpected response from github',
      JSON.stringify(releasesOrError),
    );
  } else {
    releases = releasesOrError;
  }

  const content = parseCMSResponse(data, {required: RequiredKeys});
  return {props: {releases, content}};
}
