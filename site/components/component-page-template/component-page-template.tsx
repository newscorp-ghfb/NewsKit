/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {Link, Cell, Block, Grid, Visible} from 'newskit';
import {InfoNotice} from '../info-notice';
import {ContactUs} from '../contact-us';
import {AccessibilityTables} from '../accessibility-tables';
import {Anatomy} from '../anatomy';
import {MediaList} from '../media-list';
import Layout from '../layout';
import {Playground} from '../playground';
import {CodeFromDefaultPresets} from '../code';
import {TableOfContents} from '../table-of-contents';
import {Compliance} from '../compliance';
import {Meta} from '../meta/meta';
import {Usage} from '../usage';
import {ComponentPageTemplateProps} from './types';
import {SectionIntroduction} from '../section-introduction';
import {Table} from '../table';
import {PageIntroduction} from '../page-introduction/page-introduction';
import {Separator} from '../separator';

const renderSections = ({
  componentDefaultsKey,
  pageIntroduction,
  meta,
  interactiveDemo,
  anatomy,
  variations,
  behaviors,
  usage,
  accessibility,
  seo,
  props,
  overrides,
  compliance,
  related,
}: Omit<ComponentPageTemplateProps, 'layoutProps'>) => (
  <>
    <PageIntroduction {...pageIntroduction} />
    <Meta {...meta} />
    {interactiveDemo && (
      <Cell xs={12}>
        <section id="interactive-demo" data-toc-indexed="Interactive Demo">
          <Grid lgMargin="space000" xsRowGutter="space000">
            <SectionIntroduction title="Interactive Demo">
              {interactiveDemo.introduction}
            </SectionIntroduction>
            <Cell xs={12} md={10} lg={8} mdOffset={1}>
              <Block spaceStack="space110">
                <Playground {...interactiveDemo.playground} />
              </Block>
            </Cell>
          </Grid>
        </section>
      </Cell>
    )}
    {anatomy && (
      <>
        <Cell xs={12}>
          <section id="anatomy" data-toc-indexed="Anatomy">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Anatomy">
                {anatomy.introduction}
              </SectionIntroduction>
              <Anatomy {...anatomy} />
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}

    {variations && (
      <>
        <Cell xs={12}>
          <section id="variations" data-toc-indexed="Variations">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Variations">
                {variations.introduction}
              </SectionIntroduction>
              <MediaList
                {...variations}
                layout={{
                  xs: 'vertical',
                  sm: 'horizontal',
                  md: 'horizontal',
                  lg: 'horizontal',
                  xl: 'horizontal',
                }}
              />
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}
    {behaviors && (
      <>
        <Cell xs={12}>
          <section id="behaviors" data-toc-indexed="Behaviours">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Behaviours">
                {behaviors.introduction}
              </SectionIntroduction>
              <Visible xs sm={false} md={false} lg={false} xl={false}>
                <MediaList {...behaviors} />
              </Visible>
              <Visible xs={false} sm md lg xl>
                <MediaList layout="horizontal" {...behaviors} />
              </Visible>
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}
    {usage && (
      <>
        <Cell xs={12}>
          <section id="usage" data-toc-indexed="Usage">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Usage">
                {usage.introduction}
              </SectionIntroduction>
              <Usage {...usage} />
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}

    {accessibility && (
      <>
        <Cell xs={12}>
          <section id="accessibility" data-toc-indexed="Accessibility">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Accessibility Considerations">
                {accessibility.introduction}
              </SectionIntroduction>
              <AccessibilityTables {...accessibility} />
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}
    {seo && (
      <>
        <Cell xs={12}>
          <section id="seo" data-toc-indexed="SEO">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title={seo.title}>
                {seo.introduction}
              </SectionIntroduction>
            </Grid>
          </section>
        </Cell>
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}
    {props && (
      <Cell xs={12}>
        <section id="props" data-toc-indexed="Props">
          <Grid lgMargin="space000" xsRowGutter="space000">
            <SectionIntroduction title="Props">
              {props.summary}
            </SectionIntroduction>
            <Cell xs={12} md={10} lg={8} mdOffset={1}>
              <Table rows={props.rows} columns={props.columns} />
            </Cell>
            <Cell xs={12} md={10} lg={8} mdOffset={1}>
              <Separator />
            </Cell>
          </Grid>
        </section>
      </Cell>
    )}
    {overrides && (
      <Cell xs={12}>
        <section id="overrides">
          <Grid lgMargin="space000" xsRowGutter="space000">
            <SectionIntroduction title="Overrides">
              {overrides.summary}
            </SectionIntroduction>
            <Cell xs={12} md={10} lg={8} mdOffset={1}>
              <Table rows={overrides.rows} columns={overrides.columns} />
            </Cell>
          </Grid>
        </section>
      </Cell>
    )}
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <CodeFromDefaultPresets componentName={componentDefaultsKey} />
      <InfoNotice>
        For more information on overriding component defaults, see the docs{' '}
        <Link
          href="/theming/component-defaults"
          overrides={{stylePreset: 'infoNotice'}}
        >
          here
        </Link>
        .
      </InfoNotice>
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <Separator />
    </Cell>
    {compliance && (
      <>
        <SectionIntroduction title="Compliance">
          All of the components in the NewsKit design system go through a
          comprehensive set of checks to ensure that we are producing compliant
          and best practice components.
        </SectionIntroduction>
        <Compliance {...compliance} />
        <Cell xs={12} md={10} lg={8} mdOffset={1}>
          <Separator />
        </Cell>
      </>
    )}
    {related && (
      <>
        <SectionIntroduction title="Related Components">
          {related.introduction}
        </SectionIntroduction>
        <MediaList
          spaceStack="space110"
          xsCard={12}
          mdCard={6}
          lgCard={3}
          {...related}
        />
      </>
    )}

    <ContactUs />
  </>
);

export const ComponentPageTemplate: React.FC<ComponentPageTemplateProps> = ({
  layoutProps,
  ...rest
}: ComponentPageTemplateProps) => (
  <Layout {...layoutProps}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {renderSections(rest)}
      <Cell xsHidden smHidden mdHidden lgOffset={9} lg={3} xlOffset={10} xl={2}>
        <TableOfContents />
      </Cell>
    </Grid>
  </Layout>
);
