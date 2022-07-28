import React from 'react';
import {
  getSizingCssFromTheme,
  StructuredList,
  StructuredListItem,
  StructuredListCell,
  styled,
} from 'newskit';
import {ComponentPageCell} from '../../../components/layout-cells';
import Layout, {LayoutProps} from '../../../components/layout';
import {PageIntroduction} from '../../../components/page-introduction';
import {HeadNextSeo} from '../../../components/head-next-seo';
import {
  ContentPrimary,
  ContentSection,
} from '../../../components/content-structure';
import ReleaseHeader from './release-header';
import ReleaseNotes from './release-notes';
import {addChangeLevelToReleases, fetchGitHubReleases} from './utils';
import {ReleasesPageProps} from './types';

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const ReleaseNotesPage = ({
  path,
  releases,
  ...props
}: LayoutProps & ReleasesPageProps) => {
  const fullReleases = addChangeLevelToReleases(releases);
  const [lastRelease, ...previousReleases] = fullReleases;
  return (
    <Layout {...props} path={`${path}-new`}>
      <HeadNextSeo
        title="Release notes"
        description="Announcements about the latest and previous releases of NewsKit."
        image={{
          url: 'social/about.png',
          alt: 'Release notes',
        }}
      />

      <PageIntroductionContainer>
        <PageIntroduction
          type="About"
          name="Release notes"
          introduction="Announcements about the latest and previous releases of NewsKit."
          hero={{illustration: 'about/release-notes-hero-illustration'}}
        />
      </PageIntroductionContainer>

      <ComponentPageCell>
        <ContentSection sectionName="latest release">
          <ContentPrimary headline="Latest release" showSeparator>
            <ReleaseHeader
              published_at={lastRelease.published_at}
              tag_name={lastRelease.tag_name}
              change_level={lastRelease.change_level}
            />
            <ReleaseNotes body={lastRelease.body} />
          </ContentPrimary>
        </ContentSection>
        <ContentSection sectionName="previous releases">
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
                      {change_level === 'major' && <ReleaseNotes body={body} />}
                    </StructuredListCell>
                  </StructuredListItem>
                ),
              )}
            </StructuredList>
          </ContentPrimary>
        </ContentSection>
      </ComponentPageCell>
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
