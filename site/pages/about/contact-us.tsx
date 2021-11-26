import React from 'react';
import {
  Block,
  getSizingCssFromTheme,
  Grid,
  InlineMessage,
  Link,
  styled,
} from 'newskit';
import Head from 'next/head';
import {Separator} from '../../components/separator';
import {ComponentPageCell} from '../../components/layout-cells';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';

const WrapperWithPadding = styled.div`
  ${getSizingCssFromTheme('paddingTop', 'sizing080')};
  ${getSizingCssFromTheme('marginBottom', 'sizing080')}
`;

export default ({path, ...props}: LayoutProps) => (
  <Layout {...props} path={`${path}-new`}>
    <Head>
      <title key="title">Contact us | NewsKit design system</title>
      <meta
        name="Description"
        content="Have a question about our design system? The NewsKit team is here to help you."
      />
    </Head>
    <WrapperWithPadding />
    <Grid lgMargin="sizing000" xsRowGutter="space000">
      <PageIntroduction
        type="About"
        name="Contact Us"
        introduction="Have a question about our design system? The NewsKit team is here to help you. "
        hero={{illustration: 'about/contact-us-hero-illustration'}}
      />
      <WrapperWithPadding />
      <SectionIntroduction title="Slack Channel" cellProps={{md: 10}}>
        The NewsKit team maintains
        <Link href="https://newsuktechnology.slack.com/archives/CTFGLAK9C">
          #newskit
        </Link>{' '}
        channel and will provide support.
        <Block spaceStack="space080" />
        <InlineMessage role="region" aria-label="contact" title="Note">
          For internal News Corp users only.
        </InlineMessage>
      </SectionIntroduction>
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
      <SectionIntroduction title="Form">
        Send an enquiry to the NewsKit team who will respond as quickly as
        possible.
        <Block spaceStack="space080" />
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
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
      </SectionIntroduction>
    </Grid>
  </Layout>
);
