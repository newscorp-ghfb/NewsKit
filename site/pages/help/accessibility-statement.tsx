import React from 'react';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {ComponentPageCell} from '../../components/layout-cells';
import {Link} from '../../components/link';
import {HeadNextSeo} from '../../components/head-next-seo';
import {
  ContentSection,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';

const Accessibility = ({path, ...props}: LayoutProps) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="NewsKit Accessibility Statement"
      description="NewsKit Accessibility Statement"
      image={{
        url: 'social/about.png',
        alt: 'NewsKit Accessibility Statement',
      }}
    />

    <PageIntroduction
      nameAs="h1"
      introductionAs="h2"
      name="NewsKit Accessibility Statement"
      introduction={
        <>
          This accessibility statement applies to the website{' '}
          <Link href="https://newskit.co.uk" external={false}>
            https://newskit.co.uk
          </Link>
          {', '}
          which is run by the NewsKit Design System at News UK.
        </>
      }
    />

    <ComponentPageCell>
      <ContentSection sectionName="Commitment">
        <ContentSecondary
          headline="Commitment"
          description={
            <>
              NewsKit is committed to providing a website that is accessible to
              the widest possible audience, regardless of technology or ability.
              We are actively working to increase accessibility and usability.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="Standards">
        <ContentSecondary
          headline="Standards"
          description={
            <>
              This website endeavours to meet the Web Content Accessibility
              Guidelines (WCAG){' '}
              <Link
                href="https://www.w3.org/WAI/WCAG2AA-Conformance"
                target="_blank"
              >
                2.1 AA standard
              </Link>
              . WCAG guidelines explain how to make content accessible for
              people with disabilities, but also make the experience better for
              all people.
              <br />
              <br />
              Whilst NewsKit strives to adhere to WCAG guidelines and standards
              for accessibility, it is not always possible to do so in all areas
              of the website. We are working to bring all areas of the site up
              to a WCAG 2.1 AA standard.
            </>
          }
        />
      </ContentSection>

      <ContentSection sectionName="Feedback">
        <ContentSecondary
          headline="Feedback"
          description={
            <>
              We welcome your feedback and encourage you to contact us if you
              have experienced any difficulty viewing, listening to or
              navigating content on this website. We’d also like to hear if you
              have identified any content or functionality that you believe is
              not accessible to people with disabilities. If you have any
              difficulty accessing this website, please contact us at{' '}
              <Link href="mailto:newskit@news.co.uk" target="_blank">
                newskit@news.co.uk
              </Link>{' '}
              or raise an{' '}
              <Link
                href="https://github.com/newscorp-ghfb/NewsKit/issues/new/choose"
                target="_blank"
              >
                A11y Investigation ticket
              </Link>{' '}
              on GitHub. We take your feedback seriously and will apply it to
              our ongoing efforts to improve the user experience for all of our
              customers.
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default Accessibility;
