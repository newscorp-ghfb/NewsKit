import React from 'react';
import {Cell, LinkStandalone, Link, Grid, Headline, Paragraph} from 'newskit';
import {InfoNotice} from '../../components/info-notice';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';
import {MediaList} from '../../components/media-list';
import {Separator} from '../../components/separator';

export default (layoutProps: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...layoutProps} path={`${layoutProps.path}-new`}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {/* TODO there is spacing coming from don't know where, in the introduction. 
       Removing the space would maybe fix it */}
      {/* but... not the root of the problem */}
      <PageIntroduction
        type="About"
        name="Contribute"
        introduction="Interested in contributing to NewsKit? Contributors help to make NewsKit great."
        hero={{
          src: '/static/contribute-page-introduction.svg',
          alt: 'placeholder',
        }}
      />
      {/* TODO the cell is adding some margin top, with adds 
      to the margin bottom of 65 px coming from the image. */}
      <SectionIntroduction title="How to contribute">
        There are a lot of ways to contribute to the NewsKit community and
        Design System; from submitting a proposal to designing a new feature for
        other users to benefit from.
      </SectionIntroduction>
      <MediaList
        xsCard={12}
        smCard={4}
        lgCard={4}
        cards={[
          {
            title: 'Feedback',
            description:
              'Stay in contact with the NewsKit team and help it progress in a positive direction.',
            media: {
              src: '/static/contribute-feedback-card.svg',
              alt: 'Card Media',
            },
          },
          {
            title: 'Share',
            description:
              'Promote the Design System, answer questions and help your team integrate.',
            media: {
              src: '/static/contribute-share-card.svg',
              alt: 'Card Media',
            },
          },
          {
            title: 'Create',
            description:
              'Write code or design assets for the Design System for other users to reuse.',
            media: {
              src: '/static/contribute-create-card.svg',
              alt: 'Card Media',
            },
          },
        ]}
      />
      {/* TODO we need to be able to override space - for xs.  Another ticket. */}
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Separator />
      </Cell>
      <SectionIntroduction title="Guide" />
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Partecipate in use research
        </Headline>
        <br />
        {/* TODO add spacing with br? enough? */}
        {/* TODO contact form href correct? */}
        <Paragraph>
          We strive to build a Design System that best meets user needs, so we
          conduct user research to better understand what your needs are and how
          you are using NewsKit. These insights inform the NewsKit roadmap,
          ultimately improving NewsKit for everyone.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          For News UK users, we request feedback every two weeks using a simple
          2-minute survey and another more in-depth quarterly survey.
        </Paragraph>
        <br />
        <br />
        <Paragraph>
          We also conduct focus group sessions, interviews and research tasks.
          Apply to be part of a research programme by contacting us via the{' '}
          <LinkStandalone
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            contact form
          </LinkStandalone>
          .
        </Paragraph>
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Report a bug
        </Headline>
        <br />
        <Paragraph>
          Software glitches and pesky bugs can occasionally make their way into
          NewsKit products including the design library, codebase or this
          website. If you encounter a bug, please report it to us using the{' '}
          <Link
            overrides={{typographyPreset: 'utilityButton030'}}
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            bug submission form
          </Link>
          . Reports submitted in this fashion will be directed to the NewsKit
          team to address.
        </Paragraph>
        <br />
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Propose an enhancement or request a feature
        </Headline>
        <br />
        <Paragraph>
          We’re always upgrading and improving the Design System to better meet
          the product team’s needs. We encourage improvements, enhancements and
          new features. To support this process we have a workflow below to
          scope whether a new feature should be added to the Design System.
        </Paragraph>
        <br />
        <Paragraph>
          Propose an enhancement or request a new feature by submitting details
          using the{' '}
          <Link
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            online form
          </Link>
          .
        </Paragraph>

        {/* TODO we need to be able to override space - for xs.  Another ticket. */}
        <Separator />
      </Cell>
      <SectionIntroduction title="Share" />
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Promote it
        </Headline>
        <br />
        <Paragraph>
          Had a good experience with NewsKit? Please let us know! By sharing
          your good experiences using NewsKit, our team and other teams can
          unlock the same benefits you have had; the benefits remain hidden
          until teams know about it and use it.
        </Paragraph>
        <br />
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Respond to questions
        </Headline>
        <br />
        <Paragraph>
          Use knowledge of the NewsKit, Design Systems and tools to assist
          teammates and others. For News UK teams, feel free to jump into{' '}
          <Link href="https://newsuktechnology.slack.com/archives/CTFGLAK9C">
            #newskit
          </Link>{' '}
          and answer questions that arise. The more users that share knowledge,
          the more we can learn from each other and grow the NewsKit community.
        </Paragraph>
        <br />
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Assist adoption and integration
        </Headline>
        <br />
        <Paragraph>
          The NewsKit team spends a lot of energy and attention to ensure that
          users can get started and utilise the Design System as efficiently and
          simply as possible, however, we acknowledge that often the first steps
          are the hardest. Learning new ways of working and processes can be a
          challenge. If you have the knowledge, assist your teammates and others
          in making their first integration. If you require additional support,
          the NewsKit team can help.
        </Paragraph>

        <Separator />
      </Cell>
      <SectionIntroduction title="Create" />
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Build assets for design libraries
        </Headline>
        <br />
        <Paragraph>
          Designed something that you think other NewsKit users would benefit
          from? Whether that be a component or a structured layout of existing
          components,{' '}
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
        </Paragraph>
        <br />
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Write some code
        </Headline>
        <br />
        <br />
        <InfoNotice>Currently only applicable for News UK teams.</InfoNotice>
        <br />
        <br />
        <Paragraph>
          There’s a lot of code that has been written and there’s a lot more
          left to write. Whether you have built a new component or have a small
          typo fix,{' '}
          <Link
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            let our team know
          </Link>
          . The NewsKit team will guide you through the process and assess your
          contribution, following the process outlined in the{' '}
          <Link
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            NewsKit workflow
          </Link>
          . Your contribution could make it into NewsKit and other products!
        </Paragraph>
        <br />
        <br />
        <Headline
          overrides={{typographyPreset: 'utilityHeading030'}}
          headingAs="h3"
        >
          Write documentation
        </Headline>
        <br />
        <Paragraph>
          This website is the source of truth for the Design System. It’s
          important that the documentation is clear and concise whilst giving
          enough detail to best understand the Design System. If you would like
          to improve an area of the website,{' '}
          <Link
            target="_blank"
            href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2294973413/Help+-+Web+Documentation"
          >
            let our team know
          </Link>
          . The NewsKit team can guide you through the contribution process.
        </Paragraph>
      </Cell>
    </Grid>
  </Layout>
);
