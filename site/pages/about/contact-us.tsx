import React from 'react';
import {InlineMessage} from 'newskit';
import {AboutPageTemplate} from '../../templates/about-page-template';
import {ComponentPageCell} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentColSpan,
} from '../../components/content-structure';

const pageName = 'Contact us';
const pageDescription =
  'Have a question about our design system? The NewsKit team is here to help you.';

const ContactUs = (layoutProps: LayoutProps) => (
  <AboutPageTemplate
    headTags={{
      title: pageName,
      description: pageDescription,
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'About',
      name: pageName,
      introduction: pageDescription,
      hero: {
        illustration: 'about/contact-us-hero-illustration',
        illustrationProps: {viewBox: '0 0 1345 759'},
      },
      showSeparator: true,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="slack channel">
        <ContentPrimary
          headline="Slack channel"
          description={
            <>
              The NewsKit team maintains the{' '}
              <Link href="https://newsuktechnology.slack.com/archives/CTFGLAK9C">
                #newskit
              </Link>{' '}
              channel and will provide support.
            </>
          }
          showSeparator
          childrenColSpan={ContentColSpan.TEXT}
        >
          <InlineMessage role="region" aria-label="contact" title="Note">
            For internal News Corp users only.
          </InlineMessage>
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="Contact NewsKit">
        <ContentPrimary
          showSeparator
          headline="Contact NewsKit Design System"
          description={
            <>
              For enquiries related to NewsKit, please email{' '}
              <Link href="mailto:newskit@news.co.uk">newskit@news.co.uk</Link>.
              Our team will respond as quickly as possible.
            </>
          }
        />
      </ContentSection>
      <ContentSection sectionName="contact newsUK">
        <ContentPrimary
          headline="Contact News UK"
          description={
            <>
              For enquiries related to News UK{' '}
              <Link href="https://www.news.co.uk/contact-us/" target="_blank">
                click here.
              </Link>
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>
  </AboutPageTemplate>
);

export default ContactUs;
