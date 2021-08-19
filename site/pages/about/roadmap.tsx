import React from 'react';
import {
  Block,
  Link,
  styled,
  InlineMessage,
  Grid,
  getSizingCssFromTheme,
} from 'newskit';
import Head from 'next/head';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';

const WrapperWithPadding = styled.div`
  ${getSizingCssFromTheme('paddingTop', 'sizing080')};
  ${getSizingCssFromTheme('marginBottom', 'sizing080')}
`;

export default (layoutProps: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...layoutProps} path={`${layoutProps.path}-new`}>
    <Head>
      <title key="title">Roadmap | NewsKit design system</title>
      <meta
        name="Description"
        content="NewsKit’s Design System team is busy building and planning to help you build better products faster."
      />
    </Head>
    <WrapperWithPadding />
    <Grid lgMargin="sizing000" xsRowGutter="space000">
      <PageIntroduction
        type="About"
        name="Roadmap"
        introduction="NewsKit’s Design System team is busy building and planning to help you
        build better products faster."
        hero={{illustration: 'components/hero-roadmap-illustration'}}
      />
    </Grid>
    <Block spaceStack="space100" />
    <SectionIntroduction
      title="NewsKit Roadmap"
      cellProps={{xs: 12, md: 10, lg: 8, mdOffset: 1}}
    >
      Here is the team’s focus over the coming months. This is updated regularly
      as our priorities change over time.
      <Block spaceStack="space070" />
      <iframe
        title="airtable roadmap"
        className="airtable-embed"
        src="https://airtable.com/embed/shrbFPJXN4tVA0Yye?backgroundColor=blue"
        frameBorder="0"
        width="100%"
        height="533"
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
        }}
      />
      <Block spaceStack="space070">
        <Block spaceStack={{xs: 'space080', xl: 'space090'}} />
        <InlineMessage>
          If you’d like to influence the roadmap,see the{' '}
          <Link href="/about/contribute">contribution page</Link> for further
          details.
        </InlineMessage>
      </Block>
    </SectionIntroduction>
  </Layout>
);
