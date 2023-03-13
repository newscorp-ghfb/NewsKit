import React from 'react';
import {UnorderedList} from 'newskit';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {Link} from '../../../components/link';
import {StyledHeading} from '../../../utils/styled';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {Table} from '../../../components/table';
import {IconFilledNullDot} from '../../../components/icons';

const listData = [
  `When should onboarding occur?`,
  `Where should it happen?`,
  `How long should it appear?`,
];

const TABLE_DATA = [
  {
    sequence: 'Component',
    show: 'Modal',
    prompt: 'Badge',
    discover: <IconFilledNullDot />,
    remind: 'Popover',
  },
  {
    sequence: 'Where',
    show: 'After edition loads',
    prompt: 'Tab menu',
    discover: <IconFilledNullDot />,
    remind: 'Tab menu',
  },
  {
    sequence: 'When',
    show: '1st open of app',
    prompt: 'In 1st session, post modal dismissal',
    discover: <IconFilledNullDot />,
    remind: 'On load of app, 5th session',
  },
  {
    sequence: 'Lifespan/rules',
    show: 'Only see in that session',
    prompt: 'Persist until ‘saved articles’ tab is visited',
    discover: <IconFilledNullDot />,
    remind: 'Only see in that session',
  },
  {
    sequence: 'Notes',
    show: <IconFilledNullDot />,
    prompt: <IconFilledNullDot />,
    discover: <IconFilledNullDot />,
    remind: 'If already interacted with/visited, do not show',
  },
];

const HowTo = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'How to',
      description:
        'This framework shows you how to onboard users with a simple three-step process.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Onboarding',
      name: 'How to',
      hero: {
        illustration: 'patterns/onboarding/how-to/hero',
      },
      introduction: `This framework shows you how to onboard users with a simple three-step process.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="Write a scenario">
        <ContentPrimary
          id="write-a-scenario"
          toc="Step 1: Write a scenario"
          headline={
            <>
              <StyledHeading>Step 1: Write a scenario</StyledHeading>
            </>
          }
          description="This documents the feature, user type, and platform you want to onboard. Keep to a single answer per category to focus on individual tasks."
        >
          <Illustration path="patterns/onboarding/how-to/write-a-scenario" />
        </ContentPrimary>
        <ContentSecondary
          headline="Feature:"
          description="What feature are you onboarding?"
        />
        <ContentSecondary
          headline="User type:"
          description="Who are you onboarding to this feature? Consider new vs existing users, knowns vs unknowns, or even specific personas."
        />
        <ContentSecondary
          headline="Platform:"
          description="This feature may be available on multiple devices, but how you onboard on each may differ."
          showSeparator
        />
      </ContentSection>
      <ContentSection sectionName="choose components">
        <ContentPrimary
          id="choose-components"
          toc="Step 2: Choose components"
          headline={
            <>
              <StyledHeading>Step 2: Choose components</StyledHeading>
            </>
          }
          description="Once you have a scenario, determine the appropriate methods and choose the right components."
        >
          <Illustration path="patterns/onboarding/how-to/choose-components" />
        </ContentPrimary>
        <ContentPrimary
          headline="Pick the relevant methods:"
          description="Onboarding methods have different intensity levels:"
        />
        <ContentSecondary
          headline="Show:"
          description="Introduce a feature by interrupting a user's experience."
        />
        <ContentSecondary
          headline="Prompt:"
          description="Point to a relevant feature during a user's experience."
        />
        <ContentSecondary
          headline="Discover:"
          description={
            <>
              Support understanding of a feature a user has discovered on their
              own.
              <br />
              <br />
              Designers should collaborate with other teams to choose methods,
              considering different business perspectives. Teams can work
              together using our interactive{' '}
              <Link
                href="https://www.figma.com/community/file/1154730991789332817"
                external={false}
              >
                method-picking tool
              </Link>{' '}
              to find the best method for each scenario.
            </>
          }
        />
      </ContentSection>

      <ContentSection sectionName="select-appropriate-components">
        <ContentPrimary
          id="select-appropriate-components"
          toc="Select appropriate components"
          headline="Select appropriate components"
          description="Your method determines the most effective and appropriate components to use."
        >
          <Illustration path="patterns/onboarding/how-to/select-appropriate-components" />
        </ContentPrimary>
        <ContentSecondary
          headline="Use multiple methods "
          description="Use multiple methods to help users at different points in their journey."
        />
        <ContentSecondary
          showSeparator
          headline="Example"
          description="A feature that allows users to customise their edition downloads. This feature is essential for app users, and a 'show' method (e.g. a welcome modal) may be an appropriate onboarding technique. However, it's also hard to find, so you could also use a 'prompt' method (e.g. a badge on the settings icon)."
        />
      </ContentSection>
      <ContentSection sectionName="Document rules">
        <ContentPrimary
          id="document-rules"
          toc="Step 3: Document rules"
          headline={
            <>
              <StyledHeading>Step 3: Document rules</StyledHeading>
            </>
          }
          description="Once you've chosen your components, it's vital to document the logic and rules of your flow and where the flow fits in your broader onboarding experience. This reduces the risk of conflict and lets you manage what's being onboarded for each product and when."
        >
          <Illustration path="patterns/onboarding/how-to/document-rules" />
        </ContentPrimary>
        <ContentSecondary
          headline="Defining the rules"
          description={
            <>
              Ensure your user journeys are clear and logical. Ask yourself:
              <br />
              <br />
              <UnorderedList
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph030',
                  },
                }}
              >
                {listData}
              </UnorderedList>
              <br />
              <br />
              If a feature is unused in a specified period of time, it may be
              useful to remind the user of the feature. You can do this by
              repeating an onboarding component/technique.
              <br />
              <br />
              Finally, consider onboarding within the wider user experience,
              particularly any other feature onboarding. All onboarding should
              be documented in the same place to reduce the risk of conflict.
              <br />
              <br />
              Below is an example of onboarding the ‘article saving‘ feature in
              a mobile app:
            </>
          }
          showSeparator
        >
          <Table
            columns={
              ['Sequence', 'Show', 'Prompt', 'Discover', 'Remind'] as string[]
            }
            rows={TABLE_DATA}
          />
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default HowTo;
