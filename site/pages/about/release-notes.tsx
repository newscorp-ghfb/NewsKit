import React from 'react';
import {
  Block,
  LinkStandalone,
  StructuredList,
  StructuredListCell,
  StructuredListItem,
} from 'newskit';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {ComponentPageCell} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {
  ContentPrimary,
  ContentSecondary,
  ContentSection,
} from '../../components/content-structure';
import ReleaseHeader from '../../components/release-notes/release-header';
import ReleaseNotes from '../../components/release-notes/release-notes';
import {
  addChangeLevelToReleases,
  fetchGitHubReleases,
  updateFinalReleaseInfo,
} from '../../utils/release-notes/functions';
import {ReleasesPageProps} from '../../utils/release-notes/types';
import {GITHUB_URL, REPO} from '../../utils/release-notes/constants';

const pageName = 'Release notes';
const pageDescription =
  'Announcements about the latest and previous releases of NewsKit.';

const ReleaseNotesPage = ({
  releases,
  ...layoutProps
}: LayoutProps & ReleasesPageProps) => {
  const fullReleases = addChangeLevelToReleases(
    releases.map(release => updateFinalReleaseInfo(release)),
  );
  const [lastRelease, ...previousReleases] = fullReleases;
  return (
    <AboutPageTemplate
      headTags={{
        title: pageName,
        description: pageDescription,
      }}
      layoutProps={layoutProps}
      pageIntroduction={{
        type: 'About',
        name: pageName,
        introduction: pageDescription,
        hero: {
          illustration: 'about/release-notes-hero-illustration',
          illustrationProps: {viewBox: '0 0 1344 759'},
        },
        showSeparator: true,
      }}
      featureCard={{
        title: 'Need help?',
        description: "Can't find what you're looking for?",
        href: '/about/contact-us',
        layout: 'horizontal',
        stylePrefix: 'needHelpCard',
        buttonLabel: 'Get in touch',
      }}
    >
      <ComponentPageCell>
        <ContentSection id="latest-release" toc="Latest release">
          <ContentPrimary headline="Latest release" showSeparator>
            <ReleaseHeader
              published_at={lastRelease.published_at}
              tag_name={lastRelease.tag_name}
              change_level={lastRelease.change_level}
            />
            <ReleaseNotes body={lastRelease.body} />
          </ContentPrimary>
        </ContentSection>
        <ContentSection id="previous-releases" toc="Previous releases">
          <ContentPrimary headline="Previous releases" showSeparator>
            <StructuredList divider>
              {previousReleases.map(
                ({tag_name, published_at, change_level}) => (
                  <StructuredListItem
                    overrides={{
                      paddingBlock: 'space050',
                      paddingInline: 'space000',
                      minHeight: 'sizing050',
                    }}
                    key={tag_name}
                  >
                    <StructuredListCell>
                      <ReleaseHeader
                        published_at={published_at}
                        change_level={change_level}
                        tag_name={tag_name}
                      />
                    </StructuredListCell>
                  </StructuredListItem>
                ),
              )}
            </StructuredList>
            <Block paddingBlockStart="space090">
              <LinkStandalone
                overrides={{
                  typographyPreset: 'utilityButton030',
                  paddingInlineStart: {xs: 'space020', lg: 'space030'},
                }}
                href={`${GITHUB_URL}/${REPO}/releases`}
                target="_blank"
                external
              >
                View all previous releases
              </LinkStandalone>
            </Block>
          </ContentPrimary>
        </ContentSection>
        <ContentSection id="release-cadence" toc="Release cadence">
          <ContentPrimary
            headline="Release cadence"
            description="We typically release patch and minor releases fortnightly and major releases every 3-6 months, though we may release more frequently as needed. As the project has matured the frequency of major releases (breaking changes) has slowed."
          />
          <ContentSecondary
            headline="Support policy"
            description="The NewsKit team will actively support the latest major release."
            showSeparator
          />
        </ContentSection>
      </ComponentPageCell>
    </AboutPageTemplate>
  );
};

export default ReleaseNotesPage;

// This function is called at build time and the response is passed to the page
// component as props.
export async function getStaticProps() {
  // Fetch 11 releases so that we can calculate the change_level for the 10
  // most recent releases.
  const releases = await fetchGitHubReleases(11);
  return {props: {releases}};
}
