import React from 'react';
import {UnorderedList, LinkStandalone as LinkInline} from 'newskit';
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

const Roadmap = ({content, ...layoutProps}: LayoutProps & ContentProps) => {
  const pageName = getValueFromCMS(content, 'intro_name', 'Roadmap');
  const pageDescription = getValueFromCMS(
    content,
    'intro_description',
    'NewsKit’s Design System team is busy building and planning to help you build better products faster.',
  );

  const introSecondary =
    content.intro_secondary &&
    getValueFromCMS(
      content,
      'intro_secondary',
      'The roadmap is a living document, and it is likely that priorities will change. See our Trello board for more details on the roadmap.',
    );

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
          illustration: getValueFromCMS(
            content,
            'intro_hero_illustration',
            'components/hero-roadmap-illustration',
          ),
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
            toc={getValueFromCMS(
              content,
              'current_headline',
              'Current quarter',
            )}
            headline={getValueFromCMS(
              content,
              'current_headline',
              'Current quarter',
            )}
            description={getValueFromCMS(
              content,
              'current_description',
              'What we are working on:',
            )}
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
            toc={getValueFromCMS(content, 'comingup_headline', 'Coming Up')}
            headline={getValueFromCMS(
              content,
              'comingup_headline',
              'Coming Up',
            )}
            description={getValueFromCMS(
              content,
              'comingup_description',
              'The focus for the next quarter:',
            )}
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
            toc={getValueFromCMS(content, 'future_headline', 'Future')}
            headline={getValueFromCMS(content, 'future_headline', 'Future')}
            description={getValueFromCMS(
              content,
              'future_description',
              'Ideas we plan to look at:',
            )}
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
};

export default Roadmap;

// This function is called at build time and the response is passed to the page
// component as props.
export async function getStaticProps() {
  const cmsData = await getSheets('Roadmap');
  const content = formatSheetData(cmsData);
  return {props: {content}};
}
