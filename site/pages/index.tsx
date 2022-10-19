import {GridLayout, TextBlock} from 'newskit';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import {HomepageContentProps} from '../utils/google-sheet/types';
import {Link} from '../components/link';
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
import {getSheet} from '../utils/google-sheet';

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

const defaultContent = {
  LatestBlogTitle: 'Latest Blog',
  latestBlogDescription:
    "How an audio player component tells the story of NewsKit Design System's changing strategy",
  LatestBlogDescription: 'Read on Medium',
  latestBlogLink:
    'https://medium.com/newskit-design-system/how-an-audio-player-component-tells-the-story-of-newskit-design-systems-changing-strategy-8dc99d37ed67',
  andMoreTitle: 'And More:',
  andMoreLink:
    'Support for [environment variables](https://nextjs.org/docs/basic-features/environment-variables "Environment variables"), [preview mode](https://nextjs.org/docs/advanced-features/preview-mode "Preview mode"), [custom head tags](https://nextjs.org/docs/api-reference/next/head "Custom head tags"), [automatic polyfills](https://nextjs.org/docs/basic-features/supported-browsers-features#polyfills "Automatic polyfills") and more.',
};

const Index = ({
  releases,
  content,
  ...layoutProps
}: LayoutProps & ReleasesPageProps & HomepageContentProps) => {
  const {themeMode, toggleTheme} = layoutProps;
  const {
    LatestBlogTitle,
    LatestBlogDescription,
    LatestBlogLinkText,
    LatestBlogLink,
    AndMoreTitle,
    AndMoreLink,
  } = content;

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
            title={LatestBlogTitle}
            description={LatestBlogDescription}
            stylePrefix="worldDesignSystemsWeekCard"
            layout="horizontal"
            overrides={{
              title: {typographyPreset: 'editorialHeadline060'},
              description: {typographyPreset: 'editorialSubheadline010'},
            }}
            buttonIcon={<IconFilledLaunch />}
            buttonLabel={LatestBlogLinkText}
            buttonHref={LatestBlogLink}
            buttonOverrides={{
              paddingInline: 'space000',
              typographyPreset: 'utilityButton020',
            }}
          />
          <TextBlock
            as="div"
            typographyPreset="editorialParagraph030"
            stylePreset="gitHubMarkDownText"
            marginBlockStart="space050"
          >
            {AndMoreTitle}
            <ReactMarkdown
              components={{
                a: ({href, children}) => (
                  <Link
                    overrides={{typographyPreset: 'editorialParagraph030'}}
                    href={href!}
                  >
                    {children}
                  </Link>
                ),
              }}
            >
              {AndMoreLink}
            </ReactMarkdown>
          </TextBlock>
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

  let content;
  if (data === undefined || data === null || data.length === 0) {
    content = defaultContent;
  } else {
    content = Object.fromEntries(data);
  }
  return {props: {releases, content}};
}
