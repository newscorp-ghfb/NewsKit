import React from 'react';
import {
  getSSRId,
  InlineMessage,
  LinkInline,
  TextBlock,
  UnorderedList,
} from 'newskit';
import ReactMarkdown, {ReactMarkdownOptions} from 'react-markdown';
import {
  getSheets,
  PageCMSPrefixedProps,
  PageCMSRequiredProps,
} from '../../utils/google-sheet';
import {
  getCMSPropsWithPrefix,
  parseCMSResponse,
} from '../../utils/google-sheet/utils';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {LayoutProps} from '../../components/layout';
import {
  ContentPrimary,
  ContentSection,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

enum RequiredKeys {
  intro_name = 'intro_name',
  intro_secondary = 'intro_secondary',
  intro_description = 'intro_description',
  intro_hero_illustration = 'intro_hero_illustration',
  intro_date = 'intro_date',
  current_headline = 'current_headline',
  current_description = 'current_description',
  comingup_headline = 'comingup_headline',
  comingup_description = 'comingup_description',
  future_headline = 'future_headline',
  future_description = 'future_description',
}

enum DynamicKeyPrefixes {
  current_li_ = 'current_li_',
  comingup_li_ = 'comingup_li_',
  future_li_ = 'future_li_',
}

type RoadmapContent = PageCMSRequiredProps<RequiredKeys> &
  PageCMSPrefixedProps<DynamicKeyPrefixes>;

const FormatMarkdown: React.FC<ReactMarkdownOptions> = ({children}) => (
  /* eslint-disable @typescript-eslint/no-shadow */
  <ReactMarkdown
    components={{
      a: ({href, children}) => (
        <LinkInline
          key={getSSRId()}
          overrides={{
            typographyPreset: {
              xs: 'editorialParagraph020',
              md: 'editorialParagraph030',
            },
          }}
          href={href!}
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

const Roadmap = ({
  content,
  ...layoutProps
}: LayoutProps & {content: RoadmapContent}) => {
  const pageName = content.intro_name;
  const pageDescription = content.intro_description;

  const introSecondary = content.intro_secondary;

  const currentList = getCMSPropsWithPrefix<typeof DynamicKeyPrefixes>(
    content,
    'current_li_',
  ).map(([k, v]) => <FormatMarkdown key={k}>{v}</FormatMarkdown>);

  const comingupList = getCMSPropsWithPrefix<typeof DynamicKeyPrefixes>(
    content,
    'comingup_li_',
  ).map(([k, v]) => <FormatMarkdown key={k}>{v}</FormatMarkdown>);

  const futureList = getCMSPropsWithPrefix<typeof DynamicKeyPrefixes>(
    content,
    'future_li_',
  ).map(([k, v]) => <FormatMarkdown key={k}>{v}</FormatMarkdown>);

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
          href: '/about/contribute',
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
          <ContentPrimary
            id="introduction"
            description={
              <>
                <TextBlock
                  typographyPreset={{
                    xs: 'editorialParagraph020',
                    md: 'editorialParagraph030',
                  }}
                  key="intro_secondary"
                >
                  {introSecondary}
                </TextBlock>
                <TextBlock
                  key="last_updated"
                  typographyPreset="editorialParagraph020"
                  stylePreset="inkBase"
                  marginBlockStart={{xs: 'space070', md: 'space080'}}
                >
                  {content.intro_date}
                </TextBlock>
              </>
            }
            showSeparator
          />

          <ContentSection sectionName="Current">
            <ContentPrimary
              id="current"
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
                      md: 'editorialParagraph030',
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
              id="coming_up"
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
                      md: 'editorialParagraph030',
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
              id="future"
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
                      md: 'editorialParagraph030',
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
        href: '/about/contribute',
      }}
      layoutProps={layoutProps}
      pageIntroduction={{
        type: 'About',
        name: 'Roadmap',
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

export async function getStaticProps() {
  const cmsData = await getSheets('Roadmap');
  const content = parseCMSResponse(cmsData, {
    required: RequiredKeys,
    dynamic: DynamicKeyPrefixes,
  });
  return {props: {content}};
}
