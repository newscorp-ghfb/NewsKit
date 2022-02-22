import React from 'react';
import {InlineMessage, getSizingCssFromTheme, styled} from 'newskit';
import {ComponentPageCell} from '../../components/layout-cells';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {HeadNextSeo} from '../../components/head-next-seo';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
} from '../../components/content-structure';

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const ContactUs = ({path, ...props}: LayoutProps) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="Contact us"
      description="Have a question about our design system? 
        The NewsKit team is here to help you."
      image={{
        url: 'social/about.png',
        alt: 'Contact us',
      }}
    />

    <PageIntroductionContainer>
      <PageIntroduction
        type="About"
        name="Contact Us"
        introduction="Have a question about our design system? The NewsKit team is here to help you. "
        hero={{illustration: 'about/contact-us-hero-illustration'}}
      />
    </PageIntroductionContainer>

    <ComponentPageCell>
      <ContentSection sectionName="slack channel">
        <ContentPrimary
          headline="Slack Channel"
          description={
            <>
              The NewsKit team maintains{' '}
              <Link href="https://newsuktechnology.slack.com/archives/CTFGLAK9C">
                #newskit
              </Link>{' '}
              channel and will provide support.
            </>
          }
          showSeparator
        >
          <InlineMessage role="region" aria-label="contact" title="Note">
            For internal News Corp users only.
          </InlineMessage>
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="form">
        <ContentPrimary
          headline="Form"
          description="Send an enquiry to the NewsKit team who will respond as quickly as possible."
        >
          <script
            src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
            async
          />
          <iframe
            src="https://airtable.com/embed/shrbfsBAPlQrW4MZ5?backgroundColor=orange"
            frameBorder="0"
            width="100%"
            height="771"
            title="Design System Feedback"
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              borderRadius: '12px',
            }}
          />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default ContactUs;
