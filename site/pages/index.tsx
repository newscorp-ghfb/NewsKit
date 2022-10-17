import {GridLayout, TextBlock} from 'newskit';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
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

export interface Content {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface LatestBlogProps {
  content: Content[];
}

const Index = ({
  releases,
  content,
  ...layoutProps
}: LayoutProps & ReleasesPageProps & LatestBlogProps) => {
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
          {content
            .slice(0, content.length - 1)
            .map(({title, description, linkText, href}) => (
              <FeatureCard
                title={title}
                description={description}
                stylePrefix="worldDesignSystemsWeekCard"
                layout="horizontal"
                overrides={{
                  title: {typographyPreset: 'editorialHeadline060'},
                  description: {typographyPreset: 'editorialSubheadline010'},
                }}
                buttonIcon={<IconFilledLaunch />}
                buttonLabel={linkText}
                buttonHref={href}
                buttonOverrides={{
                  paddingInline: 'space000',
                  typographyPreset: 'utilityButton020',
                }}
              />
            ))}
          {content.slice(content.length - 1).map(({title, description}) => (
            <TextBlock
              as="div"
              typographyPreset="editorialParagraph030"
              stylePreset="gitHubMarkDownText"
              marginBlockStart="space050"
            >
              {title}
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
                {description}
              </ReactMarkdown>
            </TextBlock>
          ))}
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

  const content = await getSheet();
  return {props: {releases, content}};
}
