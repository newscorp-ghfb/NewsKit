import React from 'react';
import {
  Block,
  Button,
  StructuredList,
  StructuredListCell,
  StructuredListItem,
} from 'newskit';
import {ComponentPageCell} from '../../components/layout-cells';
import Layout, {LayoutProps} from '../../components/layout';
import {
  ContentPrimary,
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
import {PageTemplate} from '../../templates/page-template';
import {GITHUB_URL, REPO} from '../../utils/release-notes/constants';
import {IconFilledGitHub} from '../../components/icons/icon-filled-github';

const ReleaseNotesPage = ({
  path,
  releases,
  ...props
}: LayoutProps & ReleasesPageProps) => {
  const fullReleases = addChangeLevelToReleases(
    releases.map(release => updateFinalReleaseInfo(release)),
  );
  const [lastRelease, ...previousReleases] = fullReleases;
  return (
    <Layout {...props} path={`${path}-new`}>
      <PageTemplate
        headTags={{
          title: 'Release notes',
          description:
            'Announcements about the latest and previous releases of NewsKit.',
          imageUrl: 'social/about.png',
          alt: 'Release notes',
        }}
        pageIntroduction={{
          type: 'About',
          name: 'Release notes',
          introduction:
            'Announcements about the latest and previous releases of NewsKit.',
          hero: {
            illustration: 'about/release-notes-hero-illustration',
            illustrationProps: {viewBox: '0 0 1344 759'},
          },
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
                  ({body, tag_name, published_at, change_level}) => (
                    <StructuredListItem key={tag_name}>
                      <StructuredListCell>
                        <ReleaseHeader
                          published_at={published_at}
                          change_level={change_level}
                          tag_name={tag_name}
                        />
                        {change_level === 'major' && (
                          <ReleaseNotes body={body} />
                        )}
                      </StructuredListCell>
                    </StructuredListItem>
                  ),
                )}
              </StructuredList>
              <Block paddingBlockStart="space090">
                <Button
                  size="small"
                  overrides={{
                    typographyPreset: 'utilityButton010',
                    stylePreset: 'buttonOutlinedSecondary',
                  }}
                  href={`${GITHUB_URL}/${REPO}/releases`}
                  target="_blank"
                >
                  <IconFilledGitHub /> View all previous releases
                </Button>
              </Block>
            </ContentPrimary>
          </ContentSection>
        </ComponentPageCell>
      </PageTemplate>
    </Layout>
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
