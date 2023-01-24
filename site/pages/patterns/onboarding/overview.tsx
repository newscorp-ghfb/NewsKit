import React from 'react';
import {InlineMessage} from 'newskit';
import {Link} from '../../../components/link';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';

import {StyledHeading} from '../../../utils/styled';
import {IconFilledInfo} from '../../../../src/icons';

const icon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const Overview = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'Onboarding overview',
      description:
        'Onboarding is the first impression a user has of a product or feature. It’s crucial to make it count.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Patterns',
      name: 'Onboarding overview',
      hero: {
        illustration: 'patterns/onboarding/overview/hero',
      },
      introduction: `Onboarding is the first impression a user has of a product or feature. It’s crucial to make it count.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="first impressions matter">
        <ContentPrimary
          id="first impressions matter"
          toc="First impressions matter"
          headline={
            <>
              <StyledHeading>First impressions matter</StyledHeading>
            </>
          }
          description={
            <>
              Onboarding quickly demonstrates the value of a product or service,
              increasing the likelihood of user success.
              <br />
              <br />
              It’s more than just a flashy introduction, pointing out features,
              or even teaching new users how to use a product. It’s about
              helping users meet their unique goals and creating value.
              Onboarding guides users towards their ‘Aha! Moments’.
              <br />
              <br />
              <InlineMessage icon={icon} aria-label="first impressions">
                An ‘Aha! Moment’ is a sudden insight or discovery. In this
                context, it describes a user’s emotional reaction when
                discovering the true value of a product
              </InlineMessage>
              <br />
              Onboarding should be task-orientated, taking into account both
              user and business goals. It‘s essential to consider the different
              groups of people coming to a product: What are they looking for?
              How can you make them feel welcome and productive?
              <br />
              <br />
              Think of an onboarding experience as a journey for the user. When
              defining these experiences, designing a component, or even writing
              copy, ask yourself: Is it relevant, contextual, dismissible, and
              digestible?
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="next Steps">
        <ContentPrimary
          id="next Steps"
          toc="Next steps"
          headline={
            <>
              <StyledHeading>Next Steps</StyledHeading>
            </>
          }
          description={
            <>
              This framework highlights{' '}
              <Link
                href="https://newskit.co.uk/patterns/onboarding/best-practice/"
                external={false}
              >
                best practices
              </Link>{' '}
              and shows{' '}
              <Link
                href="https://newskit.co.uk/patterns/onboarding/how-to/"
                external={false}
              >
                how best to onboard users.
              </Link>{' '}
              Use the{' '}
              <Link
                href="https://www.figma.com/community/file/1154728777780695374"
                external={false}
              >
                workshop template
              </Link>{' '}
              to define onboarding scenarios and the{' '}
              <Link
                href="https://www.figma.com/community/file/1154730991789332817"
                external={false}
              >
                method-picking tool
              </Link>{' '}
              to help determine the most effective onboarding method.
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default Overview;
