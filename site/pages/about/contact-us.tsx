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
  ChildrenColSpan,
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
        name="Contact us"
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
          childrenColSpan={ChildrenColSpan.TEXT}
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
              For any enquiries related to to Newskit, please send an email to:{' '}
              <Link href="mailto:newskit@news.co.uk">newskit@news.co.uk</Link>.
              Our team will respond as quickly as possible.
            </>
          }
        />
      </ContentSection>
      <ContentSection sectionName="contact newsUK">
        <ContentPrimary
          headline="Contact NewsUK"
          description={
            <>
              For any other enquiries related to NewsUK{' '}
              <Link href="https://www.news.co.uk/contact-us/" target="_blank">
                click here.
              </Link>
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default ContactUs;
