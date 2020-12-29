/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Link,
  Cell,
  Block,
  styled,
  Divider,
  getSpacingFromTheme,
  Grid,
} from 'newskit';
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

const StyledBlock = styled(Block)`
  margin-top: ${getSpacingFromTheme('space110')};
  margin-bottom: ${getSpacingFromTheme('space110')};
`;

const Separator = () => (
  <Cell xs={12} md={10} lg={8} mdOffset={1}>
    <StyledBlock>
      <Divider />
    </StyledBlock>
  </Cell>
);
const renderSections = ({
  componentDefaultsKey,
  pageIntroduction,
  compliance,
  meta,
  usage,
  props,
  overrides,
  interactiveDemo,
  anatomy,
  variations,
  behaviours,
  related,
  accessibility,
}: Omit<ComponentPageTemplateProps, 'layoutProps'>) => (
  <>
    <PageIntroduction {...pageIntroduction} />
    <Meta {...meta} />
    <Cell xs={12}>
      <section id="interactive-demo">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Interactive Demo"
            introduction={interactiveDemo.introduction}
          />
          <Cell xs={12} md={10} lg={8} mdOffset={1}>
            <Block spaceStack="space110">
              <Playground {...interactiveDemo.playground} />
            </Block>
          </Cell>
        </Grid>
      </section>
    </Cell>
    <Cell xs={12}>
      <section id="anatomy">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Anatomy"
            introduction={anatomy.introduction}
          />
          <Anatomy {...anatomy} />
        </Grid>
      </section>
    </Cell>
    <Separator />
    <Cell xs={12}>
      <section id="variations">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Variations"
            introduction={variations.introduction}
          />
          <MediaList {...variations} />
        </Grid>
      </section>
    </Cell>
    <Separator />
    <Cell xs={12}>
      <section id="behaviours">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Behaviours"
            introduction={behaviours.introduction}
          />
          <MediaList {...behaviours} />
        </Grid>
      </section>
    </Cell>
    <Separator />
    <Cell xs={12}>
      <section id="usage">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Usage"
            introduction={usage.introduction}
          />
          <Usage {...usage} />
        </Grid>
      </section>
    </Cell>

    <Separator />
    {accessibility && (
      <Cell xs={12}>
        <section id="accessibility">
          <Grid lgMargin="space000" xsRowGutter="space000">
            <SectionIntroduction
              title="Accessibility Considerations"
              introduction={accessibility.introduction}
            />
            <AccessibilityTables {...accessibility} />
          </Grid>
        </section>
      </Cell>
    )}
    <Separator />
    <Cell xs={12}>
      <section id="seo">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="SEO Considerations"
            introduction="Seo text"
          />
        </Grid>
      </section>
    </Cell>
    <Separator />
    <Cell xs={12}>
      <section id="props">
        <Grid lgMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            title="Props"
            introduction={props.summary as string}
          />
          <Cell xs={12} md={10} lg={8} mdOffset={1}>
            <Table data={props.props} columns={props.columns} />
          </Cell>
          <Separator />
          <SectionIntroduction
            title="Overrides"
            introduction={overrides.summary as string}
          />
          <Cell xs={12} md={10} lg={8} mdOffset={1}>
            <Table data={overrides.props} columns={overrides.columns} />
          </Cell>
        </Grid>
      </section>
    </Cell>
    <Cell xs={12} md={10} lg={8} mdOffset={1}>
      <CodeFromDefaultPresets componentName={componentDefaultsKey} />
      <InfoNotice>
        For more information on overriding component defaults, see the docs{' '}
        <Link href="/theming/component-defaults">here</Link>.
      </InfoNotice>
    </Cell>
    <Separator />
    <SectionIntroduction
      title="Compliance"
      introduction="All of the components in the NewsKit design system go through a comprehensive set of checks to ensure that we are producing compliant and best practice components."
    />
    <Compliance {...compliance} />
    <Separator />
    <SectionIntroduction
      title="Related Components"
      introduction={related.introduction}
    />
    <MediaList spaceStack="space110" xsCard={6} lgCard={3} {...related} />
    <ContactUs />
  </>
);

export const ComponentPageTemplate: React.FC<ComponentPageTemplateProps> = ({
  layoutProps,
  ...rest
}: ComponentPageTemplateProps) => (
  <Layout {...layoutProps}>
    <Cell xsHidden smHidden mdHidden lgOffset={9} lg={3} xlOffset={10} xl={2}>
      <TableOfContents />
    </Cell>
    {renderSections(rest)}
  </Layout>
);
