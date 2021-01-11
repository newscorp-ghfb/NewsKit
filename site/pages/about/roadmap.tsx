import React from 'react';
import {Cell, TextBlock, Block, Link, Grid} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';

export default (layoutProps: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...layoutProps} path={`${layoutProps.path}-new`}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <PageIntroduction
        type="About"
        name="Roadmap"
        introduction="NewsKit’s Design System team is busy building and planning to help you
        build better products faster."
        hero={{src: '/static/roadmap-hero.svg', alt: 'roadmap-hero-image'}}
      />
      <SectionIntroduction
        title="NewsKit Roadmap"
        introduction="Here is the team’s focus over the
        coming months. This is updated regularly as our priorities change over
        time."
      />
      <Cell mdOffset={1} xs={12} md={10} lg={8}>
        <Block spaceStack="space090">
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
        </Block>
      </Cell>
      <Cell mdOffset={1} xs={12} md={10} lg={8}>
        <Block spaceStack="space090">
          <TextBlock
            stylePreset="inkBase"
            typographyPreset="editorialParagraph020"
          >
            If you’d like to influence the roadmap,see the{' '}
            <Link href="/about/contribute">contribution page</Link> for further
            details.
          </TextBlock>
        </Block>
      </Cell>
    </Grid>
  </Layout>
);
