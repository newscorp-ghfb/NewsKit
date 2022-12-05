import React from 'react';
import {
  UnorderedList,
  LinkStandalone as LinkInline,
  InlineMessage,
} from 'newskit';
import ReactMarkdown, {ReactMarkdownOptions} from 'react-markdown';
import {getSheets, ContentProps, CMSDataProps} from '../../utils/google-sheet';
import {getValueFromCMS, formatSheetData} from '../../utils/google-sheet/utils';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';
import {isLinkExternal} from '../../../src/link/utils';
import {roadmapFallbackContent} from './content/roadmap';

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

const getCMSList = (content: CMSDataProps, listKey: string) =>
  Object.entries(content)
    .filter(entry => entry[0].startsWith(listKey))
    .map(entry => <FormatMarkdown>{entry[1]}</FormatMarkdown>);

const Roadmap = ({
  content,
  ...layoutProps
}: LayoutProps & ContentProps & CMSDataProps) => {
  const pageName = getValueFromCMS(content, 'intro_name');
  const pageDescription = getValueFromCMS(content, 'intro_description');

  const introSecondary =
    content.intro_secondary && getValueFromCMS(content, 'intro_secondary');

  if (Object.entries(content).length) {
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
            illustration: getValueFromCMS(content, 'intro_hero_illustration'),
            illustrationProps: {viewBox: '0 0 1344 759'},
          },
          showSeparator: false,
        }}
      >
        <ComponentPageCell>
          {introSecondary && (
            <ContentPrimary description={<>{introSecondary}</>} />
          )}

          <ContentSection sectionName="Current">
            <ContentPrimary
              id="overview"
              toc={getValueFromCMS(content, 'current_headline')}
              headline={getValueFromCMS(content, 'current_headline')}
              description={getValueFromCMS(content, 'current_description')}
              showSeparator
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph020',
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {getCMSList(content, 'current_li')}
              </UnorderedList>
            </ContentPrimary>
          </ContentSection>
          <ContentSection sectionName="Coming up">
            <ContentPrimary
              id="overview"
              toc={getValueFromCMS(content, 'comingup_headline')}
              headline={getValueFromCMS(content, 'comingup_headline')}
              description={getValueFromCMS(content, 'comingup_description')}
              showSeparator
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph020',
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {getCMSList(content, 'comingup_li')}
              </UnorderedList>
            </ContentPrimary>
          </ContentSection>
          <ContentSection sectionName="Future">
            <ContentPrimary
              id="overview"
              toc={getValueFromCMS(content, 'future_headline')}
              headline={getValueFromCMS(content, 'future_headline')}
              description={getValueFromCMS(content, 'future_description')}
              showSeparator
            >
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph020',
                    stylePreset: 'inkBase',
                  },
                }}
              >
                {getCMSList(content, 'future_li')}
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
          illustration:
            getValueFromCMS(content, 'intro_hero_illustration') ||
            'components/hero-roadmap-illustration',
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
