import React from 'react';
import {Image, InlineMessage, getSizingCssFromTheme, styled} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {MediaList} from '../../components/media-list';
import {ComponentPageCell} from '../../components/layout-cells';
import {HeadNextSeo} from '../../components/head-next-seo';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';

const cardoverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const cards = [
  {
    media: {
      src: 'static/about/contribute/contribute-card-feedback.svg',
      alt: 'Feedback Media',
    },

    title: 'Feedback',
    description:
      'Stay in contact with the NewsKit team and help it progress in a positive direction.',
    stylePrefix: 'featureCard',
    overrides: cardoverrides,
  },
  {
    media: {
      src: 'static/about/contribute/contribute-card-share.svg',
      alt: 'Share Media',
    },
    title: 'Share',
    description:
      'Promote the Design System, answer questions and help your team integrate.',
    stylePrefix: 'featureCard',
    overrides: cardoverrides,
  },
  {
    media: {
      src: 'static/about/contribute/contribute-card-create.svg',
      alt: 'Create Media',
    },
    title: 'Create',
    stylePrefix: 'featureCard',
    description:
      'Write code or design assets for the Design System for other users to reuse.',
    overrides: cardoverrides,
  },
];

export default ({path, ...props}: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="Contribute"
      description="Interested in contributing to NewsKit? Contributors help to make NewsKit great."
    />

    <PageIntroductionContainer>
      <PageIntroduction
        type="About"
        name="Contribute"
        introduction="Interested in contributing to NewsKit? Contributors help to make NewsKit great."
        hero={{illustration: 'about/hero-contribute-illustration'}}
      />
    </PageIntroductionContainer>

    <ComponentPageCell>
      <ContentSection sectionName="how to contribute">
        <ContentPrimary
          headline="How to contribute"
          description="There are a lot of ways to contribute to the NewsKit community and
          Design System; from submitting a proposal to designing a new feature for
          other users to benefit from."
          showSeparator
        >
          <MediaList layout="3-span" cardType="feature" cards={cards} />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="feedback">
        <ContentPrimary headline="Feedback">
          <Image
            src="static/about/contribute/contribute-banner-feedback.svg"
            alt="Feedback Media"
          />
        </ContentPrimary>

        <ContentSecondary
          headline="Participate in use research"
          description={
            <>
              We strive to build a Design System that best meets user needs, so
              we conduct user research to better understand what your needs are
              and how you are using NewsKit.
              <br />
              <br />
              These insights inform the NewsKit roadmap, ultimately improving
              NewsKit for everyone.
              <br />
              <br />
              For News UK users, we request feedback every two weeks using a
              simple 2-minute survey and another more in-depth quarterly survey.
              <br />
              <br />
              We also conduct focus group sessions, interviews and research
              tasks. Apply to be part of a research programme by contacting us
              via the{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                contact form
              </Link>
              .
            </>
          }
        />

        <ContentSecondary
          headline="Report a bug"
          description={
            <>
              Software glitches and pesky bugs can occasionally make their way
              into NewsKit products including the design library, codebase or
              this website. If you encounter a bug, please report it to us using
              the{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                bug submission form
              </Link>
              . Reports submitted in this fashion will be directed to the
              NewsKit team to address.
            </>
          }
        />

        <ContentSecondary
          headline="Propose an enhancement or request a feature"
          description={
            <>
              We’re always upgrading and improving the Design System to better
              meet the product team’s needs. We encourage improvements,
              enhancements and new features. To support this process we have a
              workflow below to scope whether a new feature should be added to
              the Design System.
              <br />
              <br />
              Propose an enhancement or request a new feature by submitting
              details using the{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                online form
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="share">
        <ContentPrimary headline="Share">
          <Image
            src="static/about/contribute/contribute-banner-share.svg"
            alt="Share Media"
          />
        </ContentPrimary>

        <ContentSecondary
          headline="Promote it"
          description="Had a good experience with NewsKit? Please let us know! By sharing your good experiences using NewsKit, our team and other teams can unlock the same benefits you have had; the benefits remain hidden until teams know about it and use it."
        />

        <ContentSecondary
          headline="Respond to questions"
          description={
            <>
              Had a good experience with NewsKit? Please let us know! By sharing
              your good experiences using NewsKit, our team and other teams can
              unlock the same benefits you have had; the benefits remain hidden
              until teams know about it and use it.
              <br />
              <br />
              Use knowledge of the NewsKit, Design Systems and tools to assist
              teammates and others. For News UK teams, feel free to jump into{' '}
              <Link href="https://newsuktechnology.slack.com/archives/CTFGLAK9C">
                #newskit
              </Link>{' '}
              and answer questions that arise. The more users that share
              knowledge, the more we can learn from each other and grow the
              NewsKit community.
            </>
          }
        />

        <ContentSecondary
          headline="Assist adoption and integration"
          description="The NewsKit team spends a lot of energy and attention to ensure that users can get started and utilise the Design System as efficiently and simply as possible, however, we acknowledge that often the first steps are the hardest. Learning new ways of working and processes can be a challenge. If you have the knowledge, assist your teammates and others in making their first integration. If you require additional support, the NewsKit team can help."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="create">
        <ContentPrimary headline="Create">
          <Image
            src="static/about/contribute/contribute-banner-create.svg"
            alt="Create Media"
          />
        </ContentPrimary>

        <ContentSecondary
          headline="Build assets for design libraries"
          description={
            <>
              Designed something that you think other NewsKit users would
              benefit from? Whether that be a component or a structured layout
              of existing components,{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                let our team know
              </Link>
              . The NewsKit team will assess the design, following the process
              outlined in the{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                NewsKit workflow
              </Link>
              . Your design could be used to improve other products
            </>
          }
        />

        <ContentSecondary headline="Write some code">
          <InlineMessage role="region" aria-label="contribute">
            Currently only applicable for News UK teams.
          </InlineMessage>
        </ContentSecondary>

        <ContentSecondary
          description={
            <>
              There’s a lot of code that has been written and there’s a lot more
              left to write. Whether you have built a new component or have a
              small typo fix,{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                let our team know
              </Link>
              . The NewsKit team will guide you through the process and assess
              your contribution, following the process outlined in the{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                NewsKit workflow
              </Link>
              . Your contribution could make it into NewsKit and other products!
            </>
          }
        />

        <ContentSecondary
          headline="Write documentation"
          description={
            <>
              This website is the source of truth for the Design System. It’s
              important that the documentation is clear and concise whilst
              giving enough detail to best understand the Design System. If you
              would like to improve an area of the website,{' '}
              <Link
                target="_blank"
                href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
              >
                let our team know
              </Link>
              . The NewsKit team can guide you through the contribution process.
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);
