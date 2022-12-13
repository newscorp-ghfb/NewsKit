import React from 'react';
import {
  UnorderedList,
  LinkStandalone as LinkInline,
  InlineMessage,
  TextBlock,
} from 'newskit';
import ReactMarkdown, {ReactMarkdownOptions} from 'react-markdown';
import {getSheets} from '../../utils/google-sheet';
import {formatSheetData} from '../../utils/google-sheet/utils';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {isLinkExternal} from '../../../src/link/utils';

interface RoadmapContent {
  intro_name: string;
  intro_secondary: string;
  intro_description: string;
  intro_hero_illustration: string;
  intro_date: string;
  current_headline: string;
  current_description: string;
  comingup_headline: string;
  comingup_description: string;
  future_headline: string;
  future_description: string;
  [current_li_keys: `current_li${string}`]: string;
  [comingup_li_keys: `comingup_li${string}`]: string;
  [future_li_keys: `future_li${string}`]: string;
}

const roadmapFallbackContent: RoadmapContent = {
  intro_name: 'Roadmap - fallback',
  intro_description:
    'Fallback - NewsKit’s Design System team is busy building and planning to help you build better products faster.',
  intro_hero_illustration: 'components/hero-roadmap-illustration',
  intro_secondary:
    'The roadmap is a living document, and it is likely that priorities will change. See our Trello board for more details on the roadmap.',
  intro_date: 'Last Updated 12 December 2022',
  current_headline: 'Current Quarter',
  current_description: 'What we are working on:',
  comingup_headline: 'Coming Up',
  comingup_description: 'The focus for the next quarter:',
  future_headline: 'Future',
  future_description: 'Ideas we plan to look at:',
};

const FormatMarkdown: React.FC<ReactMarkdownOptions> = ({children}) => (
  /* eslint-disable @typescript-eslint/no-shadow */
  <ReactMarkdown
    components={{
      a: ({href, children}) => (
        <LinkInline
          overrides={{typographyPreset: 'editorialParagraph020'}}
          href={href!}
          external={isLinkExternal(href!)}
        >
          {children}
        </LinkInline>
      ),
      p: ({children}) => <>{children}</>,
    }}
  >
    {children}
  </ReactMarkdown>
  /* eslint-enable @typescript-eslint/no-shadow */
);

const getCMSList = (content: RoadmapContent, listKey: keyof RoadmapContent) =>
  Object.entries(content)
    .filter(entry => entry[0].startsWith(listKey))
    .map(entry => <FormatMarkdown>{entry[1]}</FormatMarkdown>);

const Roadmap = ({
  content,
  ...layoutProps
}: LayoutProps & {content: RoadmapContent}) => {
  const pageName = content.intro_name;
  const pageDescription = content.intro_description;

  const introSecondary = content.intro_secondary;

  const currentList = getCMSList(content, 'current_li');
  const comingupList = getCMSList(content, 'comingup_li');
  const futureList = getCMSList(content, 'future_li');

  if (currentList.length && comingupList.length && futureList.length) {
    return (
      <AboutPageTemplate
        headTags={{
          title: pageName,
          description: pageDescription,
        }}
        featureCard={{
          title: 'Contribute',
          stylePrefix: 'contributeCard',
          description: 'Join the community and help grow NewsKit for everyone.',
          href: 'about/contributing',
        }}
        layoutProps={layoutProps}
        pageIntroduction={{
          type: 'About',
          name: pageName,
          introduction: pageDescription,
          hero: {
            illustration: content.intro_hero_illustration,
            illustrationProps: {viewBox: '0 0 1344 759'},
          },
          showSeparator: false,
        }}
      >
        <ComponentPageCell>
          <ContentPrimary description={<>{introSecondary}</>} showSeparator>
            <TextBlock
              typographyPreset="editorialParagraph020"
              stylePreset="inkBase"
            >
              {content.intro_date}
            </TextBlock>
          </ContentPrimary>

          <ContentSection sectionName="Current">
            <ContentPrimary
              id="overview"
              toc={content.current_headline}
              headline={content.current_headline}
              description={content.current_description}
              showSeparator={false}
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: {
                      xs: 'editorialParagraph020',
                      sm: 'editorialParagraph030',
                    },
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {currentList}
              </UnorderedList>
            </ContentPrimary>
          </ContentSection>
          <ContentSection sectionName="Coming up">
            <ContentPrimary
              id="overview"
              toc={content.comingup_headline}
              headline={content.comingup_headline}
              description={content.comingup_description}
              showSeparator={false}
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: {
                      xs: 'editorialParagraph020',
                      sm: 'editorialParagraph030',
                    },
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {comingupList}
              </UnorderedList>
            </ContentPrimary>
          </ContentSection>
          <ContentSection sectionName="Future">
            <ContentPrimary
              id="overview"
              toc={content.future_headline}
              headline={content.future_headline}
              description={content.future_description}
              showSeparator
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: {
                      xs: 'editorialParagraph020',
                      sm: 'editorialParagraph030',
                    },
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {futureList}
              </UnorderedList>
            </ContentPrimary>
          </ContentSection>
        </ComponentPageCell>
      </AboutPageTemplate>
    );
  }
  return (
    <AboutPageTemplate
      headTags={{
        title: pageName,
        description: pageDescription,
      }}
      featureCard={{
        title: 'Contribute',
        stylePrefix: 'contributeCard',
        description: 'Join the community and help grow NewsKit for everyone.',
        href: 'about/contributing',
      }}
      layoutProps={layoutProps}
      pageIntroduction={{
        type: 'About',
        name: pageName,
        introduction: (
          <InlineMessage overrides={{stylePreset: 'inlineMessageNegative'}}>
            The roadmap is unavailable at this time, please check back later
          </InlineMessage>
        ),
        hero: {
          illustration: content.intro_hero_illustration,
          illustrationProps: {viewBox: '0 0 1344 759'},
        },
        showSeparator: false,
      }}
    >
      <ComponentPageCell />
    </AboutPageTemplate>
  );
};

export default Roadmap;

// This function is called at build time and the response is passed to the page
// component as props.
export async function getStaticProps() {
  const cmsData = await getSheets('Roadmap');
  const content = {...roadmapFallbackContent, ...formatSheetData(cmsData)};
  return {props: {content}};
}
