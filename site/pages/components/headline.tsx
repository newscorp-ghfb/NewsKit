import React from 'react';
import {Headline, LinkInline, styled, TextBlock, UnorderedList} from 'newskit';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {IconFilledCircle} from '../../components/icons';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const HeadlineComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof Headline>
    headTags={{
      title: 'Headline',
      description:
        'Headline is used to highlight the main point or category of the following text.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Component',
      name: 'Headline',
      hero: {
        illustration: 'components/headline/hero',
      },
      introduction:
        'Headline is used to highlight the main point or category of the following text.',
    }}
    componentDefaultsKey="headline"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/headline',
      storybookId: 'components-headline--story-heading',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the headline component, its variations, and configuration options.',
      playground: {
        componentName: 'Headline',
        component: props => (
          <PlaygroundContainer>
            <Headline {...props} />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Headline',
            propName: 'children',
            value: 'Headline',
          },
          {
            name: 'Kicker',
            propName: 'kickerText',
            value: 'Kicker',
          },
          {
            name: 'Heading as',
            propName: 'headingAs',
            value: 'h1',
          },
          {
            name: 'Kicker as',
            propName: 'kickerAs',
            value: 'span',
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The headline component contains one required element and one optional element.',
      rows: [
        {
          name: 'Heading',
          description: (
            <>
              Content rendered as <InlineCode>{`<h1>`}</InlineCode> to{' '}
              <InlineCode>{`<h6>`}</InlineCode> section heading level
            </>
          ),
          component: ['Text block'],
        },
        {
          name: 'Kicker',
          description: 'Optional content, which appears before the heading',
          component: ['Text block'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/headline/anatomy'),
    }}
    options={{
      introduction: 'The headline has options for different use cases.',
      cards: [
        {
          title: 'Heading level',
          description: (
            <>
              The heading can be rendered as a different section heading level,
              as well as <InlineCode>{`<span>`}</InlineCode>.
            </>
          ),
          media: getIllustrationComponent(
            'components/headline/options/heading-level',
          ),
        },
        {
          title: 'Kicker',
          description:
            'Optional content can appear before the heading text and serve as an introduction.',
          media: getIllustrationComponent('components/headline/options/kicker'),
        },
      ],
      notice: (
        <>
          Styling of both the heading and kicker elements of the headline
          component can be decoupled from the underlying{' '}
          <InlineCode>{`<h1>`}</InlineCode> to <InlineCode>{`<h6>`}</InlineCode>{' '}
          heading level.
        </>
      ),
    }}
    usage={{
      introduction: "Here's how and when to use the headline:",
      layout: '2-span',
      cards: [
        {
          title: 'Do use headlines to create a page hierarchy',
          description:
            'Headlines should be used to create various levels of hierarchies between text on a page.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/headline/usage/do-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          <TextBlock
            as="h3"
            stylePreset="inkContrast"
            typographyPreset={{
              xs: 'editorialHeadline020',
              xl: 'editorialHeadline030',
            }}
            marginBlockEnd="space050"
          >
            Correct heading level
          </TextBlock>
          <TextBlock
            as="p"
            stylePreset="inkContrast"
            typographyPreset="editorialParagraph030"
            marginBlockEnd="space060"
          >
            Headings help define the main page structure and are necessary for
            screen reader users. It’s essential to set heading levels
            appropriately with this in mind.
            <br />
            <br />
            You should avoid the following practices:
          </TextBlock>
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
              marginBlockEnd: 'space090',
              spaceStack: 'space060',
            }}
          >
            <>
              Avoid skipping a heading level, e.g. having{' '}
              <InlineCode>{`<h1>`}</InlineCode> but missing{' '}
              <InlineCode>{`<h1>`}</InlineCode> on the same page. For example,
              if there are multiple cards on the same page, ensure you pass
              headings e.g. <InlineCode>As=&quot;h1&quot;</InlineCode>, heading,{' '}
              <InlineCode>As=&quot;h2&quot;</InlineCode>, heading,
              <InlineCode>As=&quot;h3&quot;</InlineCode>, etc.
            </>
            <>
              Avoid using multiple <InlineCode>{`<h1>`}</InlineCode> elements on
              one page or nesting multiple
              <InlineCode>{`<h1>`}</InlineCode> elements as this is not
              considered best practice semantically.
            </>
          </UnorderedList>
        </>
      ),
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <UnorderedList
          markerAlign="start"
          overrides={{
            marginBlockStart: 'space030',
            spaceStack: 'space050',
            content: {
              typographyPreset: 'editorialParagraph030',
            },
            marker: {
              spaceInline: 'space030',
            },
          }}
        >
          <>
            Heading text should be set at the correct semantic level (eg{' '}
            <LinkInline
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
            >
              <InlineCode>{`<h1> to <h6>`}</InlineCode>
            </LinkInline>
            ) to enable crawlers to better index the page.
          </>
          <>
            Kicker content text appears before the heading and so doesn’t get
            announced by screen reader devices with it not being included as
            part of the heading tag.
          </>
        </UnorderedList>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Headline',
          summary:
            'The headline has a range of props to define the experience in different use cases.',
          overridesSummary:
            'The headline has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              description:
                'The heading text of the headline component is passed as the child of the component.',
              required: true,
            },
            {
              name: 'kickerText',
              type: 'string',
              description:
                'The optional kicker content, which appears before the heading.',
            },
            {
              name: 'headingAs',
              type: 'h1 | h2 | h3 | h4 | h5 | h6 | span',
              description: (
                <>
                  This is a string name with one of the following html elements:
                  <InlineCode>h1</InlineCode>, <InlineCode>h2</InlineCode>,{' '}
                  <InlineCode>h3</InlineCode>, <InlineCode>h4</InlineCode>,{' '}
                  <InlineCode>h5</InlineCode>, <InlineCode>h6</InlineCode> or
                  span, that the heading can be converted to.
                  <br />
                  Heading defaults as a <InlineCode>h1</InlineCode> element, but
                  it can be converted to another heading element or{' '}
                  <InlineCode>div</InlineCode> by{' '}
                  <InlineCode>as=&quot;h2&quot;</InlineCode> prop.
                </>
              ),
            },
            {
              name: 'kickerAs',
              type: 'h1 | h2 | h3 | h4 | h5 | h6 | span',
              description: (
                <>
                  This is a string name with one of the following html elements:
                  <InlineCode>h1</InlineCode>, <InlineCode>h2</InlineCode>,{' '}
                  <InlineCode>h3</InlineCode>, <InlineCode>h4</InlineCode>,{' '}
                  <InlineCode>h5</InlineCode>, <InlineCode>h6</InlineCode> or
                  span, that the kicker can be converted to.
                  <br />
                  Kicker defaults as a span element, but it can be converted to
                  another heading element or <InlineCode>
                    div
                  </InlineCode> by <InlineCode>as=&quot;h2&quot;</InlineCode>{' '}
                  prop.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the typography preset applied to both the heading and kicker elements.',
            },
            {
              attribute: 'heading.stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the style preset applied to the heading.',
            },
            {
              attribute: 'kicker.stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the style preset applied to the kicker.',
            },
            {
              attribute: 'kicker.spaceInline',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the horizontal space between the kicker and heading.',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
      ],
    }}
    related={{
      related: ['Text Block', 'Byline', 'Caption'],
    }}
  />
);

export default HeadlineComponent;
