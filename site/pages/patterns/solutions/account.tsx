import React from 'react';
import {LinkInline, Paragraph} from 'newskit*';
import {LayoutProps} from '../../../components/layout';
import {PatternPageTemplate} from '../../../templates/pattern-page-template/pattern-page-template';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';
import {ComponentPageCell} from '../../../components/layout-cells';
import {getIllustrationComponent} from '../../../components/illustrations/illustration-loader';
import {MediaList} from '../../../components/media-list';

const BestPractice = (layoutProps: LayoutProps) => (
  <PatternPageTemplate
    headTags={{
      title: 'NewsKit Account',
      description: 'Giving customers control of their accounts.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Solutions',
      name: 'NewsKit Account',
      hero: {
        illustration: 'patterns/solutions/account/01-hero',
      },
      introduction: `Giving customers control of their accounts.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="account solution">
        <ContentPrimary
          id="account-solution"
          toc="Account Solution"
          headline="Account Solution"
          description={
            <>
              NewsKit Account is a full service, themable account solution that
              allows customers to manage their personal details, subscriptions,
              billing and preferences. It can be configured to provide the
              different feature combinations that your customers need.
              <br />
              <br />
              Enabling customers to self-serve improves retention and reduces
              reliance on customer service agents. Account can collect data for
              continuous improvement and optimisation.
              <br />
              <br />
              Solutions make it faster to bring new products online. With
              performance, security and accessibility built in, Solutions can
              help your team improve time-to-market. Apply your brand using the
              NewsKit theming system for consistency with your existing site and
              choose feature combinations that fit your brands&apos;
              requirements.
            </>
          }
        />
        <ContentSecondary headline="Features">
          <MediaList
            layout="1-span"
            cardsLayout="horizontal"
            cards={[
              {
                title: 'Personal details',
                description: 'Update your profile, contact details and login.',
                media: getIllustrationComponent(
                  'patterns/solutions/account/02-profile',
                ),
              },
              {
                title: 'Subscriptions and billing',
                description:
                  'Manage your subscription and delivery details, including payment info and transactions.',
                media: getIllustrationComponent(
                  'patterns/solutions/account/01-subs-billing',
                ),
              },
              {
                title: 'Holiday stops',
                description:
                  'Pause your print delivery at any time by adding a Holiday Stop to your account.',
                media: getIllustrationComponent(
                  'patterns/solutions/account/04-holiday-stops',
                ),
              },
              {
                title: 'Delivery instructions',
                description:
                  'Add delivery instructions and specify where you would like your delivery left.',
                media: getIllustrationComponent(
                  'patterns/solutions/account/05-delivery',
                ),
              },
              {
                title: 'Newsletters and alerts',
                description:
                  'Manage your newsletters, notifications and contact preferences.',
                media: getIllustrationComponent(
                  'patterns/solutions/account/06-newsletters',
                ),
              },
            ]}
          />
        </ContentSecondary>
        <ContentSecondary>
          <Paragraph overrides={{typographyPreset: 'editorialParagraph030'}}>
            <LinkInline
              external={false}
              href="https://www.newskit.co.uk/about/contact-us/"
            >
              Contact the NewsKit team
            </LinkInline>
            &nbsp;to discuss using NewsKit Account.
          </Paragraph>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </PatternPageTemplate>
);

export default BestPractice;
