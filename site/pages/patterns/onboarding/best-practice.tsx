import React from 'react';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';

import {StyledHeading} from '../../../utils/styled';

const BestPractice = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Best practice',
      description:
        'Create compelling onboarding experiences by following these industry best practices.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Onboarding',
      name: 'Best practice',
      hero: {
        illustration: 'patterns/onboarding/best-practice/hero',
      },
      introduction: `Create compelling onboarding experiences by following these industry best practices.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="first impressions matter">
        <ContentPrimary
          id="less-is-more"
          toc="Less is more"
          headline={
            <>
              <StyledHeading>Less is more</StyledHeading>
            </>
          }
          description="Just because you can onboard in-product doesn’t mean you should.
          Showing fewer features to a user means you can focus more on each
          one. Choose what to onboard based on data and insight - and use
          the decision tree - to build compelling in-product onboarding
          experiences."
        />
        <ContentSecondary
          headline="Use multiple touchpoints"
          description="      Use multiple onboarding touchpoints to help users get the best
          experience at appropriate times in their user journey."
        />
        <ContentSecondary
          headline="Don't overload the experience"
          description="Be conscious not to overload the onboarding experience — Reserve onboarding for the most critical features."
        />
        <ContentSecondary
          headline="Allow users to dismiss"
          description="Persistent prompts can annoy users. Dismissing an onboarding component should be seen as an acknowledgement."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="context is key">
        <ContentPrimary
          id="context-is-key"
          toc="Context is key"
          headline={
            <>
              <StyledHeading>Context is key</StyledHeading>
            </>
          }
          description="It can be tempting to show users everything right away. But it's important to let them explore and discover features naturally."
        />
        <ContentSecondary
          headline="Let users discover things in context"
          description="Stagger features, so they're prompted/discovered in context."
        />
        <ContentSecondary
          headline="Don't be overly intrusive"
          description="Avoid over-using intrusive methods like modals and banners. Users are less likely to engage with content if it's presented out of context or obstructs their journey."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="simplify and guide">
        <ContentPrimary
          id="simplify-and-guide"
          toc="Simplify and guide"
          headline={
            <>
              <StyledHeading>Simplify and guide</StyledHeading>
            </>
          }
          description="Where possible, simplify visuals and copy down to the essentials. Give users actions or goals."
        />
        <ContentSecondary
          headline="Use simple illustrations"
          description="Explain benefits and concepts through simple illustrations where possible."
        />
        <ContentSecondary
          headline="Don't overcomplicate things"
          description="Avoid complex instructions. And write in plain language."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="keep track">
        <ContentPrimary
          id="keep-track"
          toc="Keep track"
          headline={
            <>
              <StyledHeading>Keep track!</StyledHeading>
            </>
          }
        />
        <ContentSecondary
          headline="Document and monitor your onboarding experiences"
          description="It can be difficult to track multiple onboarding experiences. Keep documents up to date and reassess your onboarding with every launch. Track and monitor analytics to help future prioritisation."
        />
        <ContentSecondary
          headline="Don't neglect existing users"
          description="It's important not to neglect your existing users. Instead, use onboarding throughout the product lifecycle to ensure they continue getting value from your product."
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;
