/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {Link, Cell, Block, Grid} from 'newskit';
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
        <section id="interactive-demo">
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
          <section id="anatomy">
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
          <section id="variations">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Variations">
                {variations.introduction}
              </SectionIntroduction>
              <MediaList {...variations} />
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
          <section id="behaviors">
            <Grid lgMargin="space000" xsRowGutter="space000">
              <SectionIntroduction title="Behaviours">
                {behaviors.introduction}
              </SectionIntroduction>
              <MediaList {...behaviors} />
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
          <section id="usage">
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
          <section id="accessibility">
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
          <section id="seo">
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
    {(props || overrides) && (
      <Cell xs={12}>
        <section id="props">
          <Grid lgMargin="space000" xsRowGutter="space000">
            {props && (
              <>
                <SectionIntroduction title="Props">
                  {props.summary}
                </SectionIntroduction>
                <Cell xs={12} md={10} lg={8} mdOffset={1}>
                  <Table rows={props.rows} columns={props.columns} />
                </Cell>
                <Cell xs={12} md={10} lg={8} mdOffset={1}>
                  <Cell xs={12} md={10} lg={8} mdOffset={1}>
                    <Separator />
                  </Cell>
                </Cell>
              </>
            )}
            {overrides && (
              <>
                <SectionIntroduction title="Overrides">
                  {overrides.summary}
                </SectionIntroduction>
                <Cell xs={12} md={10} lg={8} mdOffset={1}>
                  <Table rows={overrides.rows} columns={overrides.columns} />
                </Cell>
              </>
            )}
          </Grid>
        </section>
      </Cell>
    )}

    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <CodeFromDefaultPresets componentName={componentDefaultsKey} />
      <InfoNotice>
        For more information on overriding component defaults, see the docs{' '}
        <Link href="/theming/component-defaults">here</Link>.
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
        <MediaList spaceStack="space110" xsCard={6} lgCard={3} {...related} />
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
