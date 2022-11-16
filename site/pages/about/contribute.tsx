import React from 'react';
import {getSizingCssFromTheme, styled} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {ComponentPageCell} from '../../components/layout-cells';
import {HeadNextSeo} from '../../components/head-next-seo';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';

const PageIntroductionContainer = styled.div`
  ${getSizingCssFromTheme('marginTop', 'sizing100')};
  ${getSizingCssFromTheme('marginBottom', 'sizing090')}
`;

const Contribute = (
  {path, ...props}: LayoutProps, //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="Contribute"
      description="There are a lot of ways to contribute to the NewsKit community and Design System; from submitting a proposal to designing a new feature for other users to benefit from."
      image={{
        url: 'social/about.png',
        alt: 'Contribute',
      }}
    />

    <PageIntroductionContainer>
      <PageIntroduction
        type="About"
        name="Contribute"
        introduction="There are a lot of ways to contribute to the NewsKit community and Design System; from submitting a proposal to designing a new feature for other users to benefit from."
        hero={{
          illustration: 'about/hero-contribute-illustration',
          illustrationProps: {viewBox: '0 0 1345 759'},
        }}
        showSeparator
      />
    </PageIntroductionContainer>

    <ComponentPageCell>
      <ContentSection sectionName="feedback">
        <ContentPrimary
          headline="Feedback"
          description="Stay in contact with the NewsKit team and help it progress in a positive direction."
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
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
              >
                bug submission form.
              </Link>{' '}
              Reports submitted in this fashion will be directed to the NewsKit
              team to address.
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
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
              >
                online form.
              </Link>
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="share">
        <ContentPrimary
          headline="Share"
          description="Promote the NewsKit Design System, answer questions and help your team integrate."
        />

        <ContentSecondary
          headline="Promote it"
          description="Had a good experience with NewsKit? Please let us know! By sharing your good experiences using NewsKit, our team and other teams can unlock the same benefits you have had; the benefits remain hidden until teams know about it and use it."
        />

        <ContentSecondary
          headline="Respond to questions"
          description={
            <>
              Use knowledge of the NewsKit, Design Systems and tools to assist
              teammates and others. For News UK teams, feel free to jump into{' '}
              <Link
                target="_blank"
                href="https://newsuktechnology.slack.com/archives/CTFGLAK9C"
              >
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
          description="The NewsKit team aims to provide new users with the tools they need to get started with the Design System quickly and efficiently. However, we acknowledge that often the first steps are the hardest. Learning new ways of working and processes can be a challenge. If you require support, the NewsKit team can help. If you are confident using NewsKit, assist your teammates and others in making their first integration."
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="create">
        <ContentPrimary
          headline="Create"
          description="Write code or design assets for the NewsKit Design System for other users to reuse."
        />

        <ContentSecondary
          headline="Build design assets"
          description={
            <>
              Designed something that you think other NewsKit users would
              benefit from?{' '}
              <Link
                target="_blank"
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
              >
                Let our team know!
              </Link>{' '}
              Your design could be used to improve other products!
            </>
          }
        />

        <ContentSecondary
          headline="Write some code"
          childrenColSpan={ContentColSpan.TEXT}
          description={
            <>
              A lot of code has been written and there’s a lot more left to
              write. Whether you have built a new component or have a small typo
              fix,{' '}
              <Link
                target="_blank"
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
              >
                let our team know.
              </Link>{' '}
              The NewsKit team will guide you through the process and assess
              your contribution. Your contribution could be used in NewsKit and
              other products!
            </>
          }
        />

        <ContentSecondary
          headline="Write documentation"
          description={
            <>
              This website is the source of truth for the Design System. It’s
              important that the documentation is clear and concise. If you
              would like to improve an area of the website,{' '}
              <Link
                target="_blank"
                href="https://github.com/newscorp-ghfb/newskit/issues/new/choose"
              >
                let our team know.
              </Link>{' '}
              The NewsKit team can guide you through the contribution process.
            </>
          }
        />
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default Contribute;
